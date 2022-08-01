import React from 'react'
import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client';

import Presentation from './App.js'

import './sass/index.sass'

console.log('test')

// const container = document.getElementById('root')
// const root = createRoot(container);
// root.render(<Presentation />);

ReactDOM.render(<Presentation />, document.getElementById('root'))
