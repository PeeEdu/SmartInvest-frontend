"use client";
import { createContext, useContext, useEffect, useState } from "react";

const InvestorContext = createContext();

export function InvestorProvider({ children }) {
  const [selected, setSelected] = useState("");  
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("selectedInvestor");
    if (saved) setSelected(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (selected) {
      localStorage.setItem("selectedInvestor", selected);
    }
  }, [selected]);

  if (!hydrated) return null;

  return (
    <InvestorContext.Provider value={{ selected, setSelected }}>
      {children}
    </InvestorContext.Provider>
  );
}

// Hook customizado
export function useInvestor() {
  return useContext(InvestorContext);
}
