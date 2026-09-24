"use client";

import { createContext, ReactNode, useState } from "react";

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
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
