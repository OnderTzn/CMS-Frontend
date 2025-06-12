import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from './components';
import Login from './pages/Login';
import { useAuth } from './contexts/AuthContext';
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Home, AllContents, FindContent, AddContent, UpdateContent, AddLicenseToContent, DeleteContent, DeleteLicenseFromContent} from './pages';
import { ShowLicenses, FindLicenseById, AddLicense, UpdateLicense, DeleteLicense, Calendar } from './pages';

import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor) setCurrentColor(currentThemeColor);
    if (currentThemeMode) setCurrentMode(currentThemeMode);
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
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
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                {/*Content */}
                <Route path="/All%20contents" element={<PrivateRoute><AllContents /></PrivateRoute>} />
                <Route path="/Find%20content" element={<PrivateRoute><FindContent /></PrivateRoute>} />
                <Route path="/Add%20content" element={<PrivateRoute><AddContent /></PrivateRoute>} />
                <Route path="/Update%20content" element={<PrivateRoute><UpdateContent /></PrivateRoute>} />
                <Route path="/Add%20license%20to%20content" element={<PrivateRoute><AddLicenseToContent /></PrivateRoute>} />
                <Route path="/Delete%20content" element={<PrivateRoute><DeleteContent /></PrivateRoute>} />
                <Route path="/Delete%20license%20from%20content" element={<PrivateRoute><DeleteLicenseFromContent /></PrivateRoute>} />

                {/*License */}
                <Route path="/Show%20licenses" element={<PrivateRoute><ShowLicenses /></PrivateRoute>} />
                <Route path="/Find%20license%20by%20id" element={<PrivateRoute><FindLicenseById /></PrivateRoute>} />
                <Route path="/Add%20license" element={<PrivateRoute><AddLicense /></PrivateRoute>} />
                <Route path="/Update%20license" element={<PrivateRoute><UpdateLicense /></PrivateRoute>} />
                <Route path="/Delete%20license" element={<PrivateRoute><DeleteLicense /></PrivateRoute>} />
                <Route path="/Calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
