import React from 'react';
import { createRoot } from 'react-dom/client';
import SquareDefualt from './default';
import './style.css';
import './style.scss';

const container = document.getElementById('root');
const root = createRoot(container);
// const s = new SquareDefualt('name1')
console.log(SquareDefualt.square(10));
root.render(
  <div>Hello React</div>
);

console.log('test code');
