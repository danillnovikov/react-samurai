import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 11 },
  { id: 2, message: 'Blala', likesCount: 11 },
  { id: 2, message: 'dada', likesCount: 11 },
];

let dialogs = [
  { id: 1, name: 'Vika' },
  { id: 2, name: 'Sveta' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Elena' },
  { id: 5, name: 'Misha' },
  { id: 6, name: 'Sasha' },
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your it-kamasutra?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);

reportWebVitals();
