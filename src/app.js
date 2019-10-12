import React from 'react';
import ReactDOM from 'react-dom';

import PageRoot from './layout/PageRoot';
import Home from './pages/Home';

// general styles
import '../styles/main.scss';

const App = () => (
  <PageRoot>
    <Home />
  </PageRoot>
);

ReactDOM.render(<App />, document.getElementById('root'));
