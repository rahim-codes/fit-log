"use client";

import { Ifitlog } from "@/type/type";
import { createContext, ReactNode, useEffect, useState } from "react";

interface WorkoutContextType {
  plan: Ifitlog[];
  setPlan: React.Dispatch<React.SetStateAction<Ifitlog[]>>;
  saved: Ifitlog[];
  setSaved: React.Dispatch<React.SetStateAction<Ifitlog[]>>;
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  // const [plan, setPlan] = useState([]);
  const [plan, setPlan] = useState<Ifitlog[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("fitlog_plan");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  // const [saved, setSaved] = useState([]);
  const [saved, setSaved] = useState<Ifitlog[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("fitlog_saved");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  // 2. Pure synchronization effects (write only, no state updates inside)
  useEffect(() => {
    localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved]);

  const shaerdData = {
    plan,
    setPlan,
    saved,
    setSaved,
    activeTab,
    setActiveTab,
  };

  return (
    <WorkoutContext.Provider value={shaerdData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
