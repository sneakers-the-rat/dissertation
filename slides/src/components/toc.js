import React, {useState, useEffect} from 'react'
import clsx from 'clsx';
import {useTheme} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import { DeckContext } from 'spectacle'
import styled from 'styled-components';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import ListItemIcon from '@mui/material/ListItemIcon';

import ListItemButton from '@mui/material/ListItemButton';
import {spectacle_theme} from '../theme';

export const Circle = styled('div')`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid ${({ color }) => color};
  background: ${({ color, active }) => (active ? color : 'transparent')};
  margin: ${({ size }) => size / 3}px;
  border-radius: 50%;
  pointer-events: all;
  cursor: pointer;
`;

const Container = styled('div')`
  @media print {
    display: none;
  }
`;

const DotDivider = styled(Divider)`
  margin-top: 1em;
  margin-bottom: 1em;
`


const drawerWidth= 600;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    pointerEvents: 'all',
    fontSize: 10
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create(['width','height'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create(['width','height'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: "70px",
    height: "70px"
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listText: {
      fontSize: 16
  },
  data:{
    color: spectacle_theme.colors.data
  },
  tools:{
    color: spectacle_theme.colors.tools
  },
  knowledge:{
    color: spectacle_theme.colors.knowledge
  },
  intro:{
  },
  outro:{
  },
  sectionHead:{

  }

}));

const groupStyles = makeStyles(() => (
    {
      listText: {
        fontSize: "16pt"
      },
      data:{
        color: spectacle_theme.colors.data
      },
      tools:{
        color: spectacle_theme.colors.tools
      },
      knowledge:{
        color: spectacle_theme.colors.knowledge
      },
    }
))

function TOCGroup({
    group,
    offset
                  }){

  const { slideCount, skipTo, activeView } = React.useContext(DeckContext);


  const [open, setOpen] = useState(true);


  const classes = groupStyles();

  // const theme = useTheme();
  return(
      <Box
          sx={{
            bgcolor: open ? null : 'rgba(0, 0, 0, 0.2)',
            pb: open ? 2 : 0,
          }}
      >
        <ListItemButton
            alignItems="flex-start"
            onClick={() => setOpen(!open)}
            sx={{
              px: 3,
              pt: 2.5,
              pb: open ? 0 : 2.5,
              '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
            }}
        >
          <ListItemText
              primary={group.display}
              primaryTypographyProps={{
                fontSize: 15,
                fontWeight: 'medium',
                lineHeight: '20px',
                mb: '2px',
              }}
              sx={{ my: 0 }}
          />
          <KeyboardArrowDown
              sx={{
                mr: -1,
                opacity: 0,
                transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                transition: '0.2s',
              }}
          />
        </ListItemButton>
        {open && group.slides.map((slide, idx) => {
          let slide_idx = offset + idx;
          console.log('slide idx', classes[group.name]);
          return(
              <ListItem button onClick={() => {
            // console.log('clicked', idx);
                  skipTo({
                    slideIndex: slide_idx,
                    stepIndex: 0
                  })
                }}
               className={classes[group.name]}
               selected={activeView.slideIndex===slide_idx}
               key={idx}>
                <ListItemIcon><ChevronRightIcon/></ListItemIcon>
            <ListItemText
                className={classes.listText}
                sx={{
                  fontSize: 20
                }}
                primary={slide_idx + " - " + (slide.props.title !== undefined ? slide.props.title : group.name)}/>
          </ListItem>)
        })}
      </Box>
  )

}

export default function TOC(
    {
      slides,
      drawerWidth,
      ...props
    }
){
  const classes = useStyles();

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { slideCount, skipTo, activeView } = React.useContext(DeckContext);

  let slidect = 0;
  let slideN = 0;
  const counter = () => {slideN+=1; return(slideN)}

  return (
      <Container className="material-toc">
        {open &&
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
        >


                <div className={classes.toolbar}>
                <IconButton onClick={toggleDrawer}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                </div>


          <Divider />
          <List>
            {slides.map((group, group_idx) => {
              let offset = slidect;
              slidect += group.slides.length;
              return(<TOCGroup group={group} offset={offset} key={group.name} />)
            })}
          </List>
        </Drawer>}

        {!open &&
        Array(3).fill(0).map(
            (_,idx) => (
                <Circle
                    key={`menu-circle-${idx}`}
                    color={"#000000"}
                    active={true}
                    size={props.size}
                    onClick={toggleDrawer}
                    data-testid="Progress Circle"
                />))
        }
        {!open && <DotDivider style={{marginTop:"1em", marginBottom: "1em"}}/>}

        {Array(slideCount)
        .fill(0)
        .map((_, idx) => (
            <Circle
                key={`progress-circle-${idx}`}
                // color={spectacle_theme.colors[slides[idx].group] ? spectacle_theme.colors[slides[idx].group]  : props.color}
                active={activeView.slideIndex === idx}
                size={props.size}
                onClick={() =>
                    skipTo({
                      slideIndex: idx,
                      stepIndex: 0
                    })
                }
                data-testid="Progress Circle"
            />
        ))}
      </Container>
  );
}

TOC.defaultProps = {
  color: '#000',
  size: 10,
}
