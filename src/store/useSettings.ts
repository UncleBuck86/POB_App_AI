import { create } from "zustand";

type FlightVendor = "PHI" | "Bristow" | "RLC" | "Era" | "Custom";

type SettingsState = {
  darkMode: boolean;
  platformName: string;
  defaultLat: number;
  defaultLon: number;
  flightVendor: FlightVendor;
  vendorTerms: Record<FlightVendor, { inbound: string; outbound: string }>;
  toggleDark: () => void;
  setVendor: (v: FlightVendor) => void;
};

const useSettings = create<SettingsState>((set) => ({
  darkMode: false,
  platformName: "Who Dat",
  defaultLat: Number(import.meta.env.VITE_DEFAULT_LAT) || 29.2072,
  defaultLon: Number(import.meta.env.VITE_DEFAULT_LON) || -89.2190,
  flightVendor: "PHI",
  vendorTerms: {
    PHI: { inbound: "Flight In", outbound: "Flight Out" },
    Bristow: { inbound: "Inbound", outbound: "Outbound" },
    RLC: { inbound: "Arrivals", outbound: "Departures" },
    Era: { inbound: "IN", outbound: "OUT" },
    Custom: { inbound: "Inbound", outbound: "Outbound" }
  },
  toggleDark: () => set((s) => ({ darkMode: !s.darkMode })),
  setVendor: (v) => set({ flightVendor: v })
}));

export default useSettings;
export type { FlightVendor };
