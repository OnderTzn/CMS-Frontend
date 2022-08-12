import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { ShowContents, FindContentById, FindContentByName,  AddContent, UpdateContent, AddLicenseToContent, DeleteContent, DeleteLicenseFromContent} from './pages';
import { ShowLicenses, FindLicenseById, AddLicense, UpdateLicense, DeleteLicense } from './pages';

import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3x1 p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "#E50914", borderRadius: "50%" }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dar-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
              <div>
              {themeSettings && (<ThemeSettings />)}
              <Routes>
                {/*Content */}              
                <Route path="/Show%20contents" element={(<ShowContents />)} />
                <Route path="/Show%20contents" element={(<ShowContents />)} />
                <Route path="/Show%20contents" element={(<ShowContents />)} />
                <Route path="/Show%20contents" element={(<ShowContents />)} />
                <Route path="/Show%20contents" element={(<ShowContents />)} />

                {/*Pages */}
                <Route path="/Show%20licenses" element={<ShowLicenses />} />
                <Route path="/employees" element={<FindLicenseById />} />
                <Route path="/customers" element={<AddLicense />} />

                
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
