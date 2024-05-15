// src/App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders the App component without crashing', () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
