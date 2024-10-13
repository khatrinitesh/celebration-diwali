import React from 'react';
// LAYOUT
import Header from './Header';

// PAGES
import Details from '../pages/Details';
import LandscapeScreen from '../pages/LandscapeScreen';

const AppLayout = () => {
  return (
    <>
      <div className="appLayout landscape:hidden md:landscape:block h-[100dvh]">
        <Header/>
        <Details/>
      </div>

      {/*================= START Best View in Portrait Mobile Mode  =================*/}
      <LandscapeScreen/>
      {/*================= END Best View in Portrait Mobile Mode =================*/}
    </>
  );
}

export default AppLayout;
