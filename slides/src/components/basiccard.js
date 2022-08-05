import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from 'spectacle';
import { SlideContext } from "spectacle";
import Collapse from '@mui/material/Collapse'

// export function BasicPaper(
//     {
//         children
//     }
// ){
//
// }

export default function BasicCard({
    title="",
    subtitle=null,
    body="",
    id='',
    appearStep=0,
    elevation=0,
    opacity=0.6,
    serif=true,
    fontWeight=500,
    titleBorder=true
                                  }) {


  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding: 20,
      // backdropFilter: "blur(30px)",
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,

    },
    title: {
      fontFace: serif ? '"EB Garamond" serif' : '"Helvetica Neue" sans-serif',
      fontWeight:fontWeight,
      fontSize:50,
      marginBottom:0,
      borderBottom: titleBorder ? "1px solid #111111" : "none"
    },
    pos: {
      fontSize:40,
      marginTop:-12,
      paddingTop:0,
      marginBottom: 16,
    },
    body: {
      lineHeight:1.2,
      fontWeight:200
    }
  });
  const classes = useStyles();
  const { activeStepIndex, isSlideActive } = React.useContext(SlideContext);

  // console.log('card',id,  activeStepIndex, isSlideActive, appearStep, activeStepIndex === appearStep)
  return (
      <Card id={id} className={classes.root + ' basic-card-root'} elevation={elevation}>
        <CardContent className={'basic-card-content'}>
          {typeof title === 'string' ? <Typography className={classes.title} variant={"h5"} component={"h2"} gutterBottom>
            {title}
          </Typography> : title}
          {typeof subtitle === 'string' ?
          <Typography className={classes.pos} color="textSecondary">
            {subtitle}
          </Typography> : subtitle}
          {appearStep>0 ?
              <Collapse in={activeStepIndex>=appearStep}>
                {typeof body === 'string' ?
                <Typography className={classes.body} variant="body2" component="p">
                  {body}
                </Typography> : body}
              </Collapse> : typeof body === 'string' ?
              <Typography className={classes.body} variant="body2" component="p">
                {body}
              </Typography> : body}
          </CardContent>
      </Card>
  );
}

export function PositionedCard({
     title="",
     subtitle=null,
     body="",
     id='',
    extraClass = "",
    appearStep=0,
     x=0,
    y = 0,
    width=1/3,
    ...rest
}){
  return(
      <Box
          left={x+'px'}
          top={y+'px'}
          width={width}
          className={'positioned-card '+ extraClass}>
        <BasicCard
        title={title}
        subtitle={subtitle}
        body={body}
        id={id}
        appearStep={appearStep}
        {...rest}
        />
      </Box>
  )
}
