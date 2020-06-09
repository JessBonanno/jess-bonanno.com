import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';

import Header from './Header';
import LandingPage from './LandingPage';
import Footer from './Footer';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Route
            exact
            path='/'
            render={(props) => (
              <LandingPage
                {...props}
                setSelectedIndex={setSelectedIndex}
                setValue={setValue}
              />
            )}
          />{' '}
          <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
