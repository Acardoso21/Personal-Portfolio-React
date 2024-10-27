import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery'; // or use a custom hook if preferred
import HomeDesktop from './desktop/HomeDesktop';
import HomeMobile from './mobile/HomeMobile';
import './Home.css';

function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </div>
  );
}

export default Home;