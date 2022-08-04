import React from 'react';

import Typography from '@mui/material/Typography';
import {Text, Heading, SlideContext, useSteps} from 'spectacle';
import {makeStyles} from '@mui/styles';

export function PositionedHeading(
    {
      x=0,
      y=0,
      right=false,
      bottom=false,
      id='',
      light=false,
      align='left',
      children,
      headerProps={},
      ...rest
    }){
  const classes = makeStyles({
    header: {
      fontFamily: rest.fontFamily ? rest.fontFamily : '"Helvetica Neue" Helvetica sans-serif',
      fontWeight: headerProps.fontWeight ? headerProps.fontWeight : rest.fontWeight ? rest.fontWeight : 200,
      fontSize: headerProps.fontSize ? headerProps.fontSize : rest.fontSize ? rest.fontSize : 72,
      marginBottom:0,
      color: light ? "#EEEEEE" : "#222222",
      lineHeight:1.1,
      ...rest
    },
    headerContainer:{
      position:'absolute',
    },
  })();
  const { activeStepIndex, isSlideActive } = React.useContext(SlideContext);
  const container = React.useRef();

  React.useEffect(() => {
    bottom === false ?
        container.current.style.top = y+"px" :
        container.current.style.bottom = bottom+"px";

    right === false ?
        container.current.style.left = x+"px" :
        container.current.style.right = right+'px'

  }, [x, y])

  return(
      <div id={id} ref={container} className={classes.headerContainer}>
        <Heading className={classes.header} align={align} {...rest} {...headerProps}>
          {children}
        </Heading>
      </div>
  )
}
