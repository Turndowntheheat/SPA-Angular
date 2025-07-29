// src/ReactMFEComponent.jsx

import React from 'react';

export default function ReactMFEComponent(props) {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#eef', border: '1px solid #ccc' }}>
      <h2>Hello from React MFE!</h2>
      <p>Welcome, {props.user || 'Guest'} 👋</p>
    </div>
  );
}