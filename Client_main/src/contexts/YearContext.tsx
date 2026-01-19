import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "../../config";

interface YearGroup {
  _id: string;
  year: number;
}

interface YearContextType {
  selectedYearId: string;
  setSelectedYearId: (id: string) => void;
  availableYears: YearGroup[];
}

const YearContext = createContext<YearContextType | null>(null);

export const YearProvider = ({ children }: { children: React.ReactNode }) => {
  const [availableYears, setAvailableYears] = useState<YearGroup[]>([]);
  const [selectedYearId, setSelectedYearId] = useState("");

  useEffect(() => {
    const fetchYears = async () => {
      const res = await axios.get(`${CONFIG.API_BASE_URL}/public/years`);
      const years: YearGroup[] = res.data.years;

      setAvailableYears(years);

      // default select latest year
      if (years.length > 0) {
        setSelectedYearId(years[years.length - 1]._id);
      }
    };

    fetchYears();
  }, []);

  return (
    <YearContext.Provider
      value={{ availableYears, selectedYearId, setSelectedYearId }}
    >
      {children}
    </YearContext.Provider>
  );
};

export const useYear = () => {
  const ctx = useContext(YearContext);
  if (!ctx) throw new Error("useYear must be used inside YearProvider");
  return ctx;
};
