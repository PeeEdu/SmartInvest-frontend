"use client";
import { createContext, useContext, useEffect, useState } from "react";

const InvestorContext = createContext();

export function InvestorProvider({ children }) {
  const [selected, setSelected] = useState("");

  // 🔹 Carrega do localStorage (só no cliente)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedInvestor");
      if (saved) {
        setSelected(saved);
      }
    }
  }, []);

  // 🔹 Salva sempre que o valor mudar
  useEffect(() => {
    if (typeof window !== "undefined" && selected) {
      localStorage.setItem("selectedInvestor", selected);
    }
  }, [selected]);

  return (
    <InvestorContext.Provider value={{ selected, setSelected }}>
      {children}
    </InvestorContext.Provider>
  );
}

export function useInvestor() {
  return useContext(InvestorContext);
}
