import React, { useContext } from 'react';
import './topbar.css';
import { Link, Outlet } from 'react-router-dom';
import { NewsContext } from '../../context/NewsContext';

function Topbar() {
  const newsContext = useContext(NewsContext);
  const {
    handleBusiness,
    handleEducation,
    handleHome,
    handleSports,
    handleSearch,
    handleLogOut,
    handleDetailsPageClose,
    detailsPageOpen,
    title,
    loggedIn
  } = newsContext;

  if (!loggedIn) {
    return null; // Return null when not logged in
  }

  return (
    <div className='topbarOuter'>
      <div className='topbarInner'>
        <Link className='link' to='/home' onClick={handleDetailsPageClose}>
          <h3 className='NewsTitle'>{title}</h3>
        </Link>
        {detailsPageOpen && (
          <Link className='link' to='/home' onClick={handleDetailsPageClose}>
            <h3 className='NewsTitle'>Home</h3>
          </Link>
        )}

        {!detailsPageOpen && (
          <div className='topbar-filters'>
            <div className='categories'>
              <span onClick={handleHome}>
                <Link to='/home' className='link'>
                  Home
                </Link>
              </span>
              <span>|</span>
              <span onClick={handleSports}>Sports</span> |
              <span onClick={handleEducation}>Education</span>|
              <span onClick={handleBusiness}>Business</span>
            </div>

            <div className='search'>
              <i className='fa-solid fa-magnifying-glass searchIcon'></i>
              <input
                className='searchInput'
                placeholder='Type something to search..'
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </div>
        )}
        <Link className='link' to='/login'>
          <div className='logout' onClick={handleLogOut}>
            <i className='fa-solid fa-right-from-bracket logoutIcon'></i>
            <span>Logout</span>
          </div>
        </Link>
        <Outlet/>
      </div>
     
    </div>
  );
}

export default Topbar;
