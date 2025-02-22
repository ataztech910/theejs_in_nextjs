'use client';
import { createContext, useEffect, useState } from 'react';
const AppDataContext = createContext({state: {}, actions: {}});

const AppDataProvider = ({ children }) => {
  const [appData, setAppData] = useState({});

  const value = {
    state: { appData },
    actions: { setAppData },
  };

  useEffect(() => {
    setAppData({color: 'orange'})
  },[]);

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  )
}
export { AppDataProvider, AppDataContext};

