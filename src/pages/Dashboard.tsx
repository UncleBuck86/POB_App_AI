import KPI from "../components/widgets/KPI";
import WeatherWidget from "../components/widgets/WeatherWidget";
import FlightStatusWidget from "../components/widgets/FlightStatusWidget";
import usePOB from "../store/usePOB";

export default function Dashboard() {
  const { people } = usePOB();
  const pob = people.length;
  const arrivalsToday = Math.floor(pob * 0.1);
  const departuresToday = Math.floor(pob * 0.08);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <KPI label="POB" value={pob} hint="Total personnel on board" />
      <KPI label="Arrivals (est.)" value={arrivalsToday} />
      <KPI label="Departures (est.)" value={departuresToday} />
      <FlightStatusWidget />

      <div className="md:col-span-2">
        <WeatherWidget />
      </div>
      <div className="md:col-span-2 card">
        <div className="text-sm font-medium">Activity</div>
        <ul className="mt-2 text-sm list-disc pl-5">
          <li>Highlight toggles for comment/number mismatches (planned)</li>
          <li>Auto comment generator from personnel changes (planned)</li>
          <li>Role-based view vs. edit access (planned)</li>
        </ul>
      </div>
    </div>
  );
}
