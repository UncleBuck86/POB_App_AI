import useSettings from "../store/useSettings";

export default function Flights() {
  const { vendorTerms, flightVendor } = useSettings();
  const terms = vendorTerms[flightVendor];

  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Flights</div>
      <div className="card">
        <div className="text-sm">Use the terms below consistently in your manifests:</div>
        <div className="mt-2 text-sm">
          <div><strong>{terms.inbound}</strong> — to platform</div>
          <div><strong>{terms.outbound}</strong> — from platform</div>
        </div>
      </div>
      <div className="card text-sm text-neutral-500">
        Manifest planner, vendor API hooks, and scheduling views go here.
      </div>
    </div>
  );
}
