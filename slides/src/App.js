import React from 'react';
import {
  Box,
  Deck,
  FlexBox,
    Heading,
  FullScreen,
  mdxComponentMap,
  Notes,
  Progress,
  Slide,
} from 'spectacle';

// Theming
import {ThemeProvider} from '@mui/material/styles';
import { spectacle_theme, material_theme } from './theme';

// Custom Components
import HideSlide from './components/hideslide';
import TOC from './components/toc'

// Slides
import { toc_slides_flat, toc_slides } from './slides/slides.jsx';

const transition = [
  {display:'none'},
  {display:'unset'},
  {display:'none'}
]

let slide_num = 0;
export const template = () => (
    <FlexBox
        justifyContent="space-between"
        flexDirection="column"
        position="absolute"
        left={0}
        height={1}
        // bottom={0}
        // width={1}
    >

      <TOC slides={toc_slides_flat}/>
      <Box padding="1em 0">
        <FullScreen style={{marginLeft:0, marginRight:0}}/>
      </Box>
      {/*<Box><Progress zIndex={3} color={"#000000"}/></Box>*/}
    </FlexBox>
);

function Presentation(){
  // iterate through slides here.
  // MDXSlide elements should have exported
  // variables as props (or at least
  // MDXCreateElement does in the debugger)
  return(
  // <MDXProvider components={mdxComponentMap}>
    <ThemeProvider theme={material_theme}>
    <Deck theme={spectacle_theme} template={template}>
      {toc_slides_flat.map((slide, i) =>


        // <HideSlide
      <HideSlide
        key={`slide-${i}`}
        slideNum={i}
        backgroundColor={'background'}
        bufferSlides={2}
        transition={transition}
        >
          {slide.slide}
      {/*<Notes>*/}
      {/*<MDXNote/>*/}
      {/*</Notes>*/}
        </HideSlide>
        )}
      {/*)}*/}
    </Deck>
  </ThemeProvider>
  // </MDXProvider>)
  )}

export default Presentation
//
