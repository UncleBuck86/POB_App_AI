import useSettings, { FlightVendor } from "../store/useSettings";
import { vendors } from "../lib/vendors";

export default function SettingsPage() {
  const { platformName, flightVendor, setVendor, vendorTerms } = useSettings();

  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Settings</div>

      <div className="card">
        <div className="text-sm font-medium mb-2">Flight Vendor</div>
        <div className="text-sm flex flex-wrap gap-2">
          {vendors.map(v => (
            <button
              key={v.key}
              className={"px-3 py-1 rounded-lg border " + (flightVendor===v.key ? "bg-brand-600 text-white border-brand-600" : "border-neutral-300")}
              onClick={() => setVendor(v.key as FlightVendor)}
            >
              {v.label}
            </button>
          ))}
        </div>
        <div className="text-xs text-neutral-500 mt-3">
          Current terms: Inbound = <strong>{vendorTerms[flightVendor].inbound}</strong>, Outbound = <strong>{vendorTerms[flightVendor].outbound}</strong>
        </div>
      </div>

      <div className="card text-sm">
        <div><span className="font-medium">Platform:</span> {platformName}</div>
        <div className="text-xs text-neutral-500 mt-1">Admin can rename, configure roles, and manage access here (planned).</div>
      </div>
    </div>
  );
}
