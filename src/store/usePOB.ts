import { create } from "zustand";

export type Person = {
  id: string;
  name: string;
  company: string;
  role: string;
  bunk?: string;
  rotationStart?: string; // ISO date
  rotationEnd?: string;   // ISO date
  comment?: string;
};

type POBState = {
  people: Person[];
  addPerson: (p: Person) => void;
  updatePerson: (id: string, patch: Partial<Person>) => void;
  removePerson: (id: string) => void;
};

const demoData: Person[] = [
  { id: "1", name: "Jane Smith", company: "Mistras", role: "Inspector", bunk: "NE-02", rotationStart: "2025-08-06", rotationEnd: "2025-08-20" },
  { id: "2", name: "Mike Johnson", company: "AFS", role: "Medic", bunk: "SW-01", rotationStart: "2025-08-07", rotationEnd: "2025-08-21" }
];

const usePOB = create<POBState>((set) => ({
  people: demoData,
  addPerson: (p) => set((s) => ({ people: [...s.people, p] })),
  updatePerson: (id, patch) => set((s) => ({ people: s.people.map(x => x.id === id ? {...x, ...patch} : x) })),
  removePerson: (id) => set((s) => ({ people: s.people.filter(x => x.id !== id) }))
}));

export default usePOB;
