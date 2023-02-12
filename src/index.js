import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './style.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div>Hello React</div>
)
