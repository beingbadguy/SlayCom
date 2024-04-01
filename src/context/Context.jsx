import { useState, createContext } from 'react';

export const menuContext = createContext();

export const ContextProvider = (props) => {
  const [menuStatus, setmenuStatus] = useState(true);
  const [homeStatus, sethomeStatus] = useState(true);

  return (
    <menuContext.Provider value={{ menuStatus, setmenuStatus, homeStatus, sethomeStatus }}>
      {props.children}
    </menuContext.Provider>
  );
};
