library(ggplot2)
library(plyr)


alldat <- readRDS("../data/alldata.RData")
alldat <- alldat[alldat$step<15,]

alldat <- ddply(alldat, .(mouse), mutate,
                ntrial = seq(length(correct)))
# sort factor
mouse_ntr <- ddply(alldat, .(mouse), summarize,
                   ntr = max(ntrial))
alldat$mouse <- factor(alldat$mouse, levels(alldat$mouse)[order(mouse_ntr$ntr, decreasing=TRUE)])

alldat[alldat$step %in% c(5, 6 ),]$step <- 1
alldat[alldat$step %in% c(7, 8 ),]$step <- 2
alldat[alldat$step %in% c(9, 10),]$step <- 3
alldat[alldat$step %in% c(11,12),]$step <- 4
alldat[alldat$step %in% c(13   ),]$step <- 5


g.offset <- ggplot(alldat, aes(x=ntrial, y=step+(as.numeric(mouse))/11, color=mouse))+
  geom_line()+
  labs(x="N Trials", y="Training Step")+
  scale_color_manual(values=c("#00A1DE", "#FF6319", "#6CBE45", "#FCCC0A",  "#D27DCA",
                              "#EE352E", "#00A1DE", "#FCCC0A",  "#6CBE45", "#00A1DE"))+
  theme(
    legend.position = "none",
    panel.background = element_blank(),
    panel.grid = element_blank()
  )
ggsave("/Users/jonny/Dropbox/Lab Self/Writing/Speech - Behavior/JASA Resubmit/figures/training_timeseries_offset.pdf",
       g.offset, width=6.5, height=2, units="in")
