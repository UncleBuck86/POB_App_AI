import { Routes, Route, NavLink } from "react-router-dom";
import { Sun, Moon, LayoutDashboard, Plane, Ship, Users, Settings } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import POBPlanner from "./pages/POBPlanner";
import Flights from "./pages/Flights";
import Marine from "./pages/Marine";
import Forms from "./pages/Forms";
import SettingsPage from "./pages/Settings";
import NotFound from "./pages/NotFound";
import useSettings from "./store/useSettings";

export default function App() {
  const { darkMode, toggleDark } = useSettings();

  return (
    <div className={"app-shell " + (darkMode ? "dark" : "")}>
      <header className="header">
        <div className="flex items-center gap-3 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 text-white">P</span>
          <span>POB Planner</span>
        </div>
        <button
          className="rounded-xl border px-3 py-1 text-sm border-neutral-300 dark:border-neutral-700"
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </header>

      <aside className="sidebar">
        <nav className="flex flex-col gap-1">
          <NavLink to="/" end className={({isActive}) => linkCls(isActive)}>
            <LayoutDashboard size={16} /> <span>Dashboard</span>
          </NavLink>
          <NavLink to="/pob" className={({isActive}) => linkCls(isActive)}>
            <Users size={16} /> <span>POB Grid</span>
          </NavLink>
          <NavLink to="/flights" className={({isActive}) => linkCls(isActive)}>
            <Plane size={16} /> <span>Flights</span>
          </NavLink>
          <NavLink to="/marine" className={({isActive}) => linkCls(isActive)}>
            <Ship size={16} /> <span>Marine</span>
          </NavLink>
          <NavLink to="/forms" className={({isActive}) => linkCls(isActive)}>
            <Users size={16} /> <span>Forms</span>
          </NavLink>
          <NavLink to="/settings" className={({isActive}) => linkCls(isActive)}>
            <Settings size={16} /> <span>Settings</span>
          </NavLink>
        </nav>
      </aside>

      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pob" element={<POBPlanner />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/marine" element={<Marine />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function linkCls(active:boolean) {
  return [
    "flex items-center gap-2 px-3 py-2 rounded-xl",
    active ? "bg-brand-600/10 text-brand-700 dark:text-brand-300" : "hover:bg-neutral-100 dark:hover:bg-neutral-900"
  ].join(" ");
}
