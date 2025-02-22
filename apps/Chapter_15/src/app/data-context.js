// The data context will work only on the client side. This flag is mandatory
"use client";

import React, { createContext, useState } from "react";
const DataContext = createContext();

export default function DataContextAPI({ children }) {
  const [data, setData] = useState("Initial Data");

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
