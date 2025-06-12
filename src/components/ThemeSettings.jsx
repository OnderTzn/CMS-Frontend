import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const {
    setThemeSettings,
    setCurrentColor,
    setCurrentMode,
    currentMode,
    currentColor,
  } = useStateContext();

  const handleModeChange = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const handleColorChange = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 z-50">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#33373E] w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="mt-4 border-t-1 border-color">
          <p className="font-semibold text-xl mt-4">Theme Options</p>
          <div className="mt-4">
            <input
              id="light"
              type="radio"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={handleModeChange}
              checked={currentMode === 'Light'}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              id="dark"
              type="radio"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={handleModeChange}
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="mt-4 border-t-1 border-color">
          <p className="font-semibold text-xl mt-4">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item) => (
              <button
                type="button"
                key={item.name}
                className="h-10 w-10 rounded-full cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: item.color }}
                onClick={() => handleColorChange(item.color)}
              >
                {currentColor === item.color && (
                  <BsCheck className="text-2xl text-white" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
