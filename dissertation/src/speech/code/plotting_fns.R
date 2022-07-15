require(grid)
require(ggplot2)
require(rsvg)
require(gtable)
require(ggdendro)
require(gridExtra)

gen_perform_fig <- function(gendat.mouse_type, fig_dir){
  
  gendat.minmax <- ddply(gendat.mouse_type,.(gentype2),summarize,
                         minimum = min(meancx),
                         maximum = max(meancx),
                         meanimum=mean(meancx))
  
  gendat.mouse_minmax <- ddply(gendat.mouse_type,.(mouse),summarize,
                                 minimum = min(meancx),
                                 maximum = max(meancx),
                                 meanimum=mean(meancx))
  gendat.mouse_minmax$mouse <- ordered(gendat.mouse_minmax$mouse)
  
  # Reorder factor levels by mouse accuracy on training tokens
  gendat.mouse_type$mouse <- factor(gendat.mouse_type$mouse, levels=gendat.mouse_minmax[order(gendat.mouse_minmax$maximum,decreasing=TRUE),"mouse"], ordered=TRUE)
  gendat.mouse_minmax$mouse <- factor(gendat.mouse_minmax$mouse, levels=gendat.mouse_minmax[order(gendat.mouse_minmax$maximum,decreasing=TRUE),"mouse"], ordered=TRUE)
  
    
  # segments to connect gentypes
  gendat.mouse_segs <- gendat.mouse_type[,c("mouse","meancx","gentype2")]
  gendat.mouse_segs$nextcx <- 0
  gendat.mouse_segs[1:nrow(gendat.mouse_segs)-1,]$nextcx <- gendat.mouse_segs[-1,]$meancx
  gendat.mouse_segs <- gendat.mouse_segs[!(gendat.mouse_segs$gentype2==5),]
  
  # Mean segment within gentype
  gendat.mean_seg <- gendat.minmax[,c("gentype2","meanimum")]
  gendat.mean_seg$nextmean <- 0
  gendat.mean_seg[1:4,]$nextmean <- gendat.mean_seg[2:5,]$meanimum
  gendat.mean_seg <- gendat.mean_seg[1:4,]
  
  # Dataframe for regressions
  gendat.mouse.rs <- cast(gendat.mouse_type,mouse~gentype2,value="meancx")
  names(gendat.mouse.rs) <- c("mouse","gt1","gt2","gt3","gt4","gt5")
  
  # Summarize by mouse for dumbbells
  
  
  

    
  g.gen_bar <- ggplot(gendat.mouse_type,aes(x=gentype2))+
    geom_hline(yintercept=0.5,colour="#D8002B", linetype="dotdash")+
    geom_hline(yintercept=c(0.6,0.7,0.8,0.9),alpha=0.1)+
    geom_segment(data=gendat.mouse_segs,size=0.3,
                 aes(group=interaction(as.factor(mouse),as.factor(gentype2)),
                     y=meancx,yend=nextcx,x=as.numeric(gentype2)-.9,xend=as.numeric(gentype2)-.1),color="#707070")+
    geom_segment(data=gendat.mean_seg, size=1,
                 aes(group=gentype2,y=meanimum,yend=nextmean,x=as.numeric(gentype2)-.9,xend=as.numeric(gentype2)-.1))+
    geom_crossbar(data=gendat.minmax,aes(y=meanimum,ymin=minimum,ymax=maximum,
                                         colour=as.factor(gentype2),fill=as.factor(gentype2)),
                  width=0.2)+
    geom_segment(aes(colour=as.factor(gentype2),y=meancx,x=as.numeric(gentype2)-1.1,xend=as.numeric(gentype2)-.9,yend=meancx),size=0.5)+
    geom_segment(data=gendat.minmax,size=1,colour="#000000",
                 aes(group=as.factor(gentype2),y=meanimum,yend=meanimum,x=as.numeric(gentype2)-1.1,xend=as.numeric(gentype2)-.9))+
    #scale_color_manual(values=c("#CCCCCC","#FFA18E","#B3D6FC","#E5BBF9","#80D39B"))+
    #scale_fill_manual(values=c("#000000","#AA0000","#27718C","#4C0827","#208731"))+
    scale_color_manual(values=c("#000000","#FF191D","#1A76CC","#A4036F","#FF7F00"))+
    scale_fill_manual(values=c("#CCCCCC","#FFCCCC","#C3D4E5","#F2C9E4","#FFE4C9"))+
    xlab("Novelty Type")+
    ylab("Accuracy (%)")+
    scale_y_continuous(limits=c(0.5,0.9), breaks=c(0.5,0.6,0.7,0.8,0.9), labels=c("50","60","70","80","90"))+
    scale_x_discrete(expand=c(-0.2,0.2))+
    theme(panel.background = element_blank(), 
          panel.grid.major = element_blank(),
          panel.grid.minor = element_blank(),
          axis.text.y = element_text(size=rel(1),margin=margin(7,1,1,1,unit="pt")),
          axis.ticks.y = element_blank(),
          axis.title.y = element_text(size=unit(9,"pt"),margin=margin(7,2,10,2,unit="pt")),
          axis.title.x = element_blank(),
          axis.text.x  = element_blank(),
          #axis.text.x = element_text(size=rel(1), angle = 45, hjust = 1),
          axis.ticks.x = element_blank(),
          axis.line = element_blank(),
          plot.background = element_rect(fill="transparent",colour=NA),
          #legend.position = c(.5,.85),
          legend.position = "none",
          plot.margin = unit(c(1,1,0,0),"lines"))
  
  # Regression scatterplot
  g.genscat_scat <- ggplot(gendat.mouse.rs,aes(x=gt1)) + 
    # First, lines and points
    geom_point(aes(y=gt2),col="#FF191D",alpha=0.5,size=0.5) +
    geom_smooth(aes(y=gt2),col="#FF191D",method=lm,se=FALSE,size=0.75) +
    geom_point(aes(y=gt3),col="#1A76CC",alpha=0.5,size=0.5) +
    geom_smooth(aes(y=gt3),colour="#1A76CC",method=lm,se=FALSE,size=0.75) +
    geom_point(aes(y=gt4),col="#A4036F",alpha=0.5,size=0.5) +
    geom_smooth(aes(y=gt4),colour="#A4036F",method=lm,se=FALSE,size=0.75) +
    geom_point(aes(y=gt5),col="#FF7F00",alpha=0.5,size=0.5) +
    geom_smooth(aes(y=gt5),colour="#FF7F00",method=lm,se=FALSE,size=0.75) +
    # Expand scale to plot borders, set breaks manually
    scale_x_continuous(expand = c(0, 0),
                       breaks=c(0.65,0.75,0.85),labels=c("65","75","85")) + 
    scale_y_continuous(expand = c(0, 0),
                       breaks=c(0.5,0.6,0.7,0.8),labels=c("50","60","70","80")) + 
    expand_limits(x=c(0.64,0.9),y=c(0.5,0.85))+
    # Axis/legend labels
    ylab("Generalization Accuracy (%)") +
    xlab("Learned Accuracy (%)") +
    #scale_colour_manual(values=c("#FFA18E","#B3D6FC","#E5BBF9","#80D39B")) +
    #guides(colour=guide_legend(override.aes=list(size=5)))+
    theme(panel.background = element_blank(), 
          panel.grid.major = element_blank(),
          panel.grid.minor = element_blank(),
          plot.background = element_rect(fill="transparent",colour=NA),
          axis.title.y = element_text(size=unit(9,"pt"),margin=margin(0,4,0,3,unit="pt")),
          axis.text.y = element_text(size=unit(8,"pt"),margin=margin(1,2,1,0,unit="pt")),
          axis.text.x = element_text(size=unit(8,"pt"),margin=margin(2,1,0,1,unit="pt")),
          axis.title.x = element_text(size=unit(9,"pt"),margin=margin(5,5,0,0,unit="pt")),
          #axis.ticks.x = element_blank(),
          #legend.position = c(.5,.85),
          legend.position = "none",
          legend.text = element_text(size=rel(.8)),
          legend.title = element_blank(),
          legend.background = element_blank(),
          legend.key = element_blank(),
          plot.margin = unit(c(0,0,0,0),"lines"))
  
  g.gen_dumb <- ggplot(gendat.mouse_type,aes(x=as.factor(mouse),y=meancx))+
    geom_hline(yintercept=0.5,colour="#D8002B", linetype="dotdash")+
    geom_hline(yintercept=c(0.6,0.7,0.8,0.9),alpha=0.1)+
    geom_segment(data=gendat.mouse_minmax,linetype="longdash",size=0.1,color="gray",
                 aes(y=minimum,yend=maximum,x=mouse,xend=mouse))+
    geom_linerange(aes(ymin=cilo,ymax=cihi,color=gentype2),alpha=0.3)+
    geom_segment(aes(x=as.numeric(mouse)-0.3,xend=as.numeric(mouse)+0.3,y=meancx,yend=meancx,colour=gentype2),size=1.5)+
    
    #scale_color_brewer(type="qual", palette="Set2")+
    scale_color_manual(values=c("#000000","#FF191D","#1A76CC","#A4036F","#FF7F00"))+
    scale_fill_manual(values=c("#000000","#FF191D","#1A76CC","#A4036F","#FF7F00"))+
    xlab("Novelty Type")+
    ylab("Proportion Correct")+
    scale_y_continuous(limits=c(0.5,0.9), breaks=c(0.5,0.6,0.7,0.8,0.9), labels=c(".5",".6",".7",".8",".9"))+
    #theme_fivethirtyeight()+
    theme(panel.background = element_blank(),
          panel.grid.major = element_blank(),
          panel.grid.minor = element_blank(),
          axis.text.y = element_blank(),
          axis.ticks.y = element_blank(),
          axis.title.y = element_blank(),
          axis.title.x = element_blank(),
          #axis.text.x = element_text(size=rel(0.8), angle = 45, hjust = 1),
          axis.text.x = element_blank(),
          axis.ticks.x = element_blank(),
          axis.line = element_blank(),
          #plot.background = element_rect(fill="transparent",colour=NA),
          #legend.position = c(.5,.85),
          legend.position = "none",
          plot.margin = unit(c(1,1,0,0),"lines"))
  
  # Import vector image of stimtypes
  fn <- paste(fig_dir, 'Stimtypes_new_flat.svg', sep="")
  g.stimtypes <- rasterGrob(rsvg(fn,width=900,height=1000))
  # width=unit(2.5,"inches"), height=unit(2.5,"inches"))
  #widths=unit(2.5,"inches"),heights=unit(2.5,"inches"),respect=TRUE)
  
  
  
  
  # Combine plots
  g.gen_bar_grob <- ggplotGrob(g.gen_bar) 
  g.genscat_grob <- ggplotGrob(g.genscat_scat)
  g.gen_dumb_grob <- ggplotGrob(g.gen_dumb)
  
  g.botrow <- cbind(g.gen_bar_grob, g.gen_dumb_grob, size="first")
  g.botrow$heights <- unit.pmax(g.gen_bar_grob$heights, g.gen_dumb_grob$heights)
  
  g.gen <- gtable(widths=unit(c(1.8,1.8),"inches"),height=unit(c(2,3.5),"inches"))
  g.gen <- gtable_add_grob(g.gen,g.stimtypes,1,1)
  g.gen <- gtable_add_grob(g.gen,g.genscat_grob,1,2)
  #g.gen <- gtable_add_grob(g.gen,g.gen_bar_grob,2,1)
  #g.gen <- gtable_add_grob(g.gen,g.gen_dumb_grob,2,2)
  g.gen <- gtable_add_grob(g.gen,g.botrow,2,1,2,2)
  
  return(g.gen)
}

learningcurve_fig <- function(gendat.ts, by_class=FALSE, include_preflip=FALSE){
  
    if (by_class == TRUE) {
      # df of means for plotting
      gendat.tsm <- ddply(gendat.ts, .(gentype2,nappear), summarize,
                          meancx=mean(correct),
                          nmice = length(unique(mouse)),
                          cilo = binom.confint(sum(correct),length(correct),conf.level=0.95,method="exact")[[5]],
                          cihi = binom.confint(sum(correct),length(correct),conf.level=0.95,method="exact")[[6]])
      
      
      g.appear <- ggplot(gendat.ts)+
        geom_point(data=gendat.tsm, aes(x=nappear, y=meancx, colour=gentype2),size=1)+
        geom_linerange(data=gendat.tsm,aes(x=nappear, ymin=cilo, ymax=cihi, colour=gentype2),alpha=0.5)+
        geom_smooth(data=gendat.ts[gendat.ts$nappear>0,],aes(x=nappear, y=correct, colour=gentype2),
                  method="glm",method.args=list(family="binomial"), formula=(y~log(x)), se=T)+
        labs(x = "# of Presentations",y="Mean % Correct")+
        scale_fill_brewer(palette = "Set1")+
        scale_colour_manual(values=c("#000000","#FF191D","#1A76CC","#A4036F","#FF7F00"),labels=c("Learned Tokens","Novel Tokens", "Novel Vowel", "Novel Speaker", "Novel Speaker and Vowel")) +
        scale_y_continuous(breaks=c(0.6,0.7,0.8),labels=c("60","70","80"))+
        expand_limits(y=0.55)+
        theme(
          plot.background  = element_blank(),
          panel.background = element_blank(), 
          panel.grid.minor = element_blank(),
          panel.grid.major = element_blank(),
          axis.text.x = element_text(size=unit(8,"pt")),
          axis.text.y = element_text(size=unit(8,"pt"),margin=margin(t=0,r=0,b=0,l=0,unit="pt")),
          axis.title.y = element_text(size=unit(9,'pt')),
          axis.title.x = element_text(size=unit(9,'pt')),
          #axis.ticks.y = element_blank(),
          legend.key = element_blank(),
          legend.title = element_blank(),
          legend.text = element_text(size=unit(9,"pt")),
          legend.background = element_blank(),
          legend.position = "right"
        )
      
      # grobify for reliable plotting
      g.appeargrob <- ggplotGrob(g.appear) 
      g.lc <- gtable(widths=unit(c(5),"inches"),height=unit(c(3),"inches"))
      g.lc <- gtable_add_grob(g.lc,g.appeargrob,1,1)
      
      return(g.lc)
    } else {
      # df of means for plotting
      gendat.tsm <- ddply(gendat.ts, .(novelnot,nappear), summarize,
                          meancx=mean(correct),
                          nmice = length(unique(mouse)),
                          cilo = binom.confint(sum(correct),length(correct),conf.level=0.95,method="exact")[[5]],
                          cihi = binom.confint(sum(correct),length(correct),conf.level=0.95,method="exact")[[6]])
      
      g.appear <- ggplot(gendat.ts)+
        geom_linerange(data=gendat.tsm,aes(x=nappear, ymin=cilo, ymax=cihi, colour=novelnot),alpha=0.5,size=0.4)+
        geom_point(data=gendat.tsm, aes(x=nappear, y=meancx, colour=novelnot),size=1)+
        geom_smooth(data=gendat.ts[gendat.ts$nappear>0,],aes(x=nappear, y=correct, colour=novelnot),
                    method="glm",method.args=list(family="binomial"), formula=(y~log(x)), se=T)+
        labs(x = "# of Presentations",y="Mean % Correct")+
        scale_fill_brewer(palette = "Set1")+
        scale_colour_manual(values=c("#000000","#e41a1c"),labels=c("Learned Tokens","Novel Tokens")) +
        scale_y_continuous(breaks=c(0.6,0.7,0.8),labels=c("60","70","80"))+
        expand_limits(y=0.55)+
        theme(
          panel.background = element_blank(), 
          panel.grid.minor = element_blank(),
          panel.grid.major = element_blank(),
          axis.text.x = element_text(size=unit(8,"pt")),
          axis.text.y = element_text(size=unit(8,"pt"),margin=margin(t=0,r=0,b=0,l=0,unit="pt")),
          axis.title.y = element_text(size=unit(9,'pt')),
          axis.title.x = element_text(size=unit(9,'pt')),
          #axis.ticks.y = element_blank(),
          legend.key = element_blank(),
          legend.title = element_blank(),
          legend.text = element_text(size=unit(9,"pt")),
          legend.background = element_blank(),
          legend.position = c(0.7,0.15)
        )
      
      # grobify for reliable plotting
      g.appeargrob <- ggplotGrob(g.appear) 
      g.lc <- gtable(widths=unit(c(3.6),"inches"),height=unit(c(3),"inches"))
      g.lc <- gtable_add_grob(g.lc,g.appeargrob,1,1)
      
      grid.newpage()
      grid.draw(g.lc)
      return(g.lc)
    }
}

heatmap_fig <- function(gendat.vowmus, gendat.tokmus_cast, gendat.novel){
  
  # Cluster plot
  klust.d <- gendat.tokmus_cast
  klust.d_numeric <- as.matrix(klust.d[,-1])
  klust.d_names <- klust.d[,1]
  rownames(klust.d_numeric) <- klust.d_names
  
  klust.dist <- dist(klust.d_numeric, method="euclidean")
  klust.w <- as.dendrogram(hclust(klust.dist, method="ward.D"))
  
  new_order <- labels(klust.w)

  #klust.w <- reorder(klust.w, order_inds)
  gendat.vowmus$mouse <- ordered(gendat.vowmus$mouse, labels(klust.w))
  
  # Make dendrogram df and assign colors to clusters
  klust.w_data <- dendro_data(klust.w)
  klust.w_seg <- segment(klust.w_data)
  # Shorten legs
  #klust.w_seg[,c(2,4)] <- klust.w_seg[,c(2,4)] - 9
  #klust.w_seg[klust.w_seg[,4]<0,4] <- 0
  # Assign colors
  klust.w_seg$cols <- 1
  klust.w_seg[3:14,]$cols <- 2 # Cluster 1 (25,66,...65)
  klust.w_seg[17:36,]$cols <- 3 # Cluster 2 (26,67,...,118)
  #klust.w_seg[21:36,]$cols <- 4 # Cluster 2 (26,67,...,118)
  klust.w_seg$cols <- factor(klust.w_seg$cols)

  # Make dendrogram
  g.dendro <- ggplot(klust.w_seg)+
    geom_segment(aes(x=x,y=y,xend=xend,yend=yend,color=cols))+
    scale_color_manual(values=c("#000000","#E21D1D","#3B4aEF","#FC7A00"))+
    scale_y_reverse(expand=c(0,0))+
    #scale_x_discrete(expand=c(0.04,0))+
    theme_dendro()+
    theme(legend.position = "none",
          panel.background  = element_blank(), 
          panel.grid.major  = element_blank(),
          panel.grid.minor  = element_blank(),
          plot.background   = element_blank(),
          plot.margin     = margin(0,0,0,0,unit="npc"),
          axis.text       = element_blank(),
          axis.title.x    = element_blank(),
          axis.title.y    = element_blank())
    
  
  # Split into /g/ and /b/
  gendat.vowmus_g <- gendat.vowmus[gendat.vowmus$consonant==1,] 
  gendat.vowmus_b <- gendat.vowmus[gendat.vowmus$consonant==2,]
  
  # Factor & reorder so it plots right...
  gendat.vowmus_g$vowel <- factor(gendat.vowmus_g$vowel,ordered=TRUE)
  gendat.vowmus_g$vowel <- factor(gendat.vowmus_g$vowel,levels(gendat.vowmus_g$vowel)[c(6,5,4,3,2,1)])
  gendat.vowmus_b$vowel <- factor(gendat.vowmus_b$vowel,ordered=TRUE)
  gendat.vowmus_b$vowel <- factor(gendat.vowmus_b$vowel,levels(gendat.vowmus_b$vowel)[c(6,5,4,3,2,1)])
  
  
  g.tok_g <- ggplot(gendat.vowmus_g,aes(x=mouse,y=vowel,fill=meancx)) + 
    geom_tile() + 
    ylab("Vowel") + 
    scale_y_discrete(labels=c("/u/","/e/","/ae/","/a/","/o/","/I/"),
                     position="right") + # reverse order to make the plot work
    scale_fill_distiller(type   = "div", palette="RdGy", limits=c(0,1),
                         breaks = c(0,0.5,1), labels=c("0%","50%","100%"),
                         name   = "Accuracy")+
    facet_grid(speaker ~ .,scales="free_y",space="free_y") +
    theme(panel.spacing     = unit(0,"npc"),
          panel.background  = element_blank(), 
          panel.grid.major  = element_blank(),
          panel.grid.minor  = element_blank(),
          plot.background   = element_blank(),
          axis.line         = element_blank(),
          axis.title.x      = element_blank(),
          axis.text.x       = element_blank(),
          axis.ticks.x      = element_blank(),
          axis.title.y      = element_blank(),
          axis.text.y       = element_text(size=rel(0.5)),
          legend.position   = "none",
          #legend.margin     = margin(c(0,10,0,0), unit = "inches"),
          legend.text       = element_text(size=rel(0.5)),
          legend.title      = element_blank(),
          legend.key.height = unit(0.01,"npc"),
          legend.background = element_blank(),
          strip.text        = element_text(size=rel(0.6)),
          plot.margin       = margin(0.04,0,0,0,unit="npc"))
  
  g.tok_b <- ggplot(gendat.vowmus_b,aes(x=mouse,y=vowel,fill=meancx)) + 
    geom_tile() + 
    ylab("Vowel") + 
    scale_y_discrete(labels=c("/u/","/e/","/ae/","/a/","/o/","/I/"),
                     position="right") +
    scale_fill_distiller(type="div", palette="RdGy", limits=c(0,1))+
    xlab("Mouse") +
    facet_grid(speaker ~ .,scales="free_y",space="free_y") +
    theme(panel.spacing.y   = unit(0,"npc"),
          panel.spacing.x    = unit(0,"npc"),
          panel.background = element_blank(), 
          panel.grid.major = element_blank(),
          panel.grid.minor = element_blank(),
          plot.background  = element_blank(),
          axis.line       = element_blank(),
          axis.ticks.x    = element_blank(),
          axis.text.x     = element_blank(),
          axis.title.y    = element_blank(),
          axis.text.y     = element_text(size=rel(0.5)),
          axis.title.x    = element_blank(),
          #axis.title.x    = element_text(size=rel(0.7),margin=margin(c(0,0,0,0),unit="pt")),
          legend.position = "none",
          strip.text      = element_text(size=rel(0.6)),
          plot.margin     = margin(0,0,0.04,0,unit="npc"))
  
  
  # Add panels on right for consonants
  g.tok_gtab <- ggplotGrob(g.tok_g)
  g.tok_gtab <- gtable_add_cols(g.tok_gtab, unit(g.tok_gtab$widths[[6]],'cm'), 7)
  g.tok_gtab <- gtable_add_grob(g.tok_gtab,
                                rectGrob(gp=gpar(col=NA, fill=gray(0.5))),
                                6,8,15, name="glab")
  g.tok_gtab <- gtable_add_grob(g.tok_gtab,
                                textGrob("/g/", rot=-90, gp=gpar(col=gray(1))),
                                6,8,15, name="gtext")
  
  g.tok_btab <- ggplotGrob(g.tok_b) 
  
  # Add dendrogram first
  g.dend_tab <- ggplotGrob(g.dendro)
  g.dend_tab$heights[8] <- unit(0,"cm")
  g.dend_tab$widths[3] <- unit(0,"cm")
  
  g.tok_btab <- gtable_add_rows(g.tok_btab, unit(0.25, "inches"), 15)
  g.tok_btab <- gtable_add_grob(g.tok_btab, g.dend_tab,
                                16,5,19,5,name="dendro")
  
  g.tok_btab <- gtable_add_cols(g.tok_btab, unit(g.tok_btab$widths[[6]], 'cm'),7)
  g.tok_btab <- gtable_add_grob(g.tok_btab,
                                rectGrob(gp=gpar(col=NA, fill=gray(0.5))),
                                6,8,15, name="blab")
  g.tok_btab <- gtable_add_grob(g.tok_btab,
                                textGrob("/b/",rot=-90,gp=gpar(col=gray(1))),
                                6,8,15,name="btext")
  
  # To get just the heatmap...
  #g.tokenplot <- arrangeGrob(g.tok_gtab,g.tok_btab,ncol=1,heights=c(1,1))
  #ggsave(paste(basedir,"tok_heatmap_",as.numeric(as.POSIXct(Sys.time())),".png",sep=""),plot=g.tokenplot,device="png",width=1,height=5,units="in",dpi=700,bg="transparent")
  
  # flip bias so /g/ is on the right
  #gendat.mouse_minmax$bias <- gendat.mouse_minmax$bias * -1.0
  
  g.meancx <- ggplot(data=gendat.novel,aes(x=bias,y=meancx))+
    geom_point(aes(color=cohort))+
    scale_color_manual(values=c("#3B4aEF", "#E21D1D"))+
    labs(y="% Correct", x="Bias")+
    #scale_x_continuous(limits=c(0.8,1.2))+
    scale_y_continuous(limits=c(0.50,0.8),breaks=c(0.5,0.6,0.7,0.8),labels=c("50%","60%","70%","80%"))+
    scale_x_continuous(breaks=c(-0.2,-0.1,0,0.1),labels=c("+20% /g/","+10% /g/","0%","+10% /b/"),
                       limits=c(-.2,0.1))+
    #scale_x_continuous(breaks=c(-0.1,0,0.1,0.2),labels=c("+10% /b/", "0%","+10% /g/","+20% /g/"),
    #                   limits=c(-.1,0.2))+
    theme(
      panel.background = element_blank(), 
      panel.grid.major = element_line("#EEEEEE"),
      panel.grid.major.x = element_blank(),
      panel.grid.minor = element_blank(),
      plot.background  = element_blank(),
      #axis.text        = element_blank(),
      axis.text.x = element_text(angle=45, hjust=1),
      legend.position  = "none",
      #axis.title       = element_blank(),
      axis.line        = element_blank(),
      #axis.ticks       = element_blank(),
      plot.margin      = margin(1,5,0,3,unit="pt"),
      panel.spacing.y  = unit(0,"npc")
    )
  
  g.cxtab <- ggplotGrob(g.meancx)

  g.tokpc <- arrangeGrob(g.tok_gtab,g.tok_btab,g.cxtab,ncol=1,widths=unit(3.6,"inches"),heights=unit(c(2.5,2.75,1.5),"inches"))
  
  return(g.tokpc)
}

acoustic_fig <- function(gendat.tokf2){
  # Input is the gendat.token joined with F2 from the speech_parameters script.
  # Jonny you better clean this bullshit analysis chain up.
  
  ## do principal components, extract slopes and intercepts
  f2_pc_g <- prcomp(gendat.tokf2[gendat.tokf2$human_cons=="g", c("f2_vowel","f2_onset")], scale=FALSE)
  f2_pc_b <- prcomp(gendat.tokf2[gendat.tokf2$human_cons=="b", c("f2_vowel","f2_onset")], scale=FALSE)
  g_b <- f2_pc_g$rotation[2,1]/f2_pc_g$rotation[1,1]
  g_a <- f2_pc_g$center[2]-g_b * f2_pc_g$center[1]
  b_b <- f2_pc_b$rotation[2,1]/f2_pc_b$rotation[1,1]
  b_a <- f2_pc_b$center[2]-b_b * f2_pc_b$center[1]
  
  # Basic theme changes
  basic_theme <- theme(panel.background = element_blank(),
                       panel.grid.major = element_blank(),
                       panel.grid.minor = element_blank(),
                       plot.background = element_rect(fill="transparent",colour=NA),
                       axis.text = element_text(size=unit(8,"pt")),
                       axis.title = element_text(size=unit(9, "pt")))
  
  
  g.locus <- ggplot(gendat.tokf2, aes(x = f2_vowel, y = f2_onset, color = consonant))+
    geom_point(size=0.5)+
    geom_abline(slope=g_b, intercept=g_a, color="#e41a1c", size=1)+
    geom_abline(slope=b_b, intercept=b_a, color="#377eb8", size=1)+
    labs(x="F2 Sustained (kHz)", y="F2 Onset (kHz)")+
    scale_color_brewer(palette = "Set1")+
    scale_x_continuous(breaks=c(10000, 15000, 20000, 25000), 
                       labels=c("10", "15", "20", "25"))+
    scale_y_continuous(breaks=c(10000, 15000, 20000, 25000, 30000, 35000), 
                       labels=c("10", "15", "20", "25", "30", "35"))+
    basic_theme+
    coord_fixed()+
    theme(legend.position = "none")
  
  g.locus_lm <- ggplot(gendat.tokf2, aes(x=dist_diff/1000, y=meanrs))+
    geom_point(aes(color=consonant), size=0.5)+
    geom_smooth(method="lm", se=FALSE,fullrange=TRUE,color="black")+
    geom_smooth(method="lm", aes(color=consonant), se=FALSE,fullrange=TRUE)+
    labs(x="/g/-/b/ Locus Distance (kHz)", y="Mean Response")+
    scale_y_continuous(limits=c(0,1), breaks=c(0,0.25,0.5,0.75,1.0),
                       labels=c("100% /g/", "75% /g/", "50%", "75% /b/", "100% /b/"))+
    scale_color_brewer(palette = "Set1")+
    basic_theme+
    theme(legend.position="none",
          panel.grid.major.y = element_line("gray90"))
  
  # Combine and arrange plots
  g.locus_grob <- ggplotGrob(g.locus)
  g.locus_lm_grob <- ggplotGrob(g.locus_lm)
  
  # get spacing right
  
  g.acoustic <- gtable(widths=unit(c(2.5),"inches"),
                       heights=unit(c(2.5,2.5),"inches"))
  g.acoustic <- gtable_add_grob(g.acoustic, g.locus_grob, 1,1)
  g.acoustic <- gtable_add_grob(g.acoustic, g.locus_lm_grob, 2,1)
  
  grid.newpage()
  grid.draw(g.acoustic)
  return(g.acoustic)
}


learning_ts <- function(gendat.tokf2){
  ggplot(gendat.tokf2, aes(x=dist_diff, y=meanrs, color=consonant))+
    geom_point()+
    geom_smooth(method="lm")
}
  

