import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import apiClient from '../api/client';
import { useStateContext } from '../contexts/ContextProvider';
import cmslogo from "../data/CMS.png";
import { links as defaultLinks } from '../data/dummy';

const Sidebar = () => {
  const {activeMenu, setActiveMenu } = useStateContext();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    apiClient.get('/links')
      .then((res) => setLinks(res.data))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch sidebar links', err);
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn('Falling back to dummy sidebar links');
        }
        setLinks(defaultLinks);
      });
  }, []);

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-500 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className='flex justify-between items-center'>
        <Link
          to="/"
          onClick={() => setActiveMenu(false)}
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
        >
            {/*LOGO IS HERE FOR Onderflix */}   
            <img  
              className="mt-3 w-48 h-10"
              src={cmslogo}/>          
        </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (  /*Dashboard items are here */
            <div key={item.title}>
              <p className='text-gray-500 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={() => setActiveMenu(false)}
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar;
