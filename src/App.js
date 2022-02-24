import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Results } from './components/Results';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 h-screen'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Footer />
              </>
            }
          />
          {/* <Route
            path={['/search', '/images', '/news', '/videos']}
            element={<Results />}
          /> */}
          <Route />
        </Routes>
      </div>
    </div>
  );
};

export default App;
