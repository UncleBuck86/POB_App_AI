import useSettings from "../../store/useSettings";

export default function FlightStatusWidget() {
  const { vendorTerms, flightVendor } = useSettings();
  const terms = vendorTerms[flightVendor];
  return (
    <div className="card">
      <div className="text-sm font-medium">Flight Terminology</div>
      <div className="mt-2 text-sm">
        <div><strong>Inbound:</strong> {terms.inbound}</div>
        <div><strong>Outbound:</strong> {terms.outbound}</div>
      </div>
      <div className="text-xs text-neutral-500 mt-2">Vendor: {flightVendor}</div>
    </div>
  );
}
