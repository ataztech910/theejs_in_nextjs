'use client';
import { createContext, useEffect, useState } from 'react';

const AppDataContext = createContext({state: {}, actions: {}});
export default function AppDataProvider({ children }) {
    const [appData, setAppData] = useState({});

    const value = {
      state: { appData },
      actions: { setAppData },
    };
  
    useEffect(() => {
      setAppData({floor: 1, smileScale: 0.5})
    },[]);
    return (
        <AppDataContext.Provider value={value}>
            {children}
        </AppDataContext.Provider>
  )
};

export { AppDataProvider, AppDataContext };

