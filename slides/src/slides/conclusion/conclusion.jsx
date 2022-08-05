import React from 'react';

import summary from './summary.jsx';
import organizing from './organizing.jsx'
import postlude from './postlude.jsx'

const Slides = [
    ...organizing,
    ...summary,
    ...postlude
]

export default Slides
