type Props = { label: string; value: string | number; hint?: string };
export default function KPI({label, value, hint}: Props) {
  return (
    <div className="card">
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="mt-1 text-3xl font-semibold">{value}</div>
      {hint && <div className="text-xs text-neutral-500 mt-1">{hint}</div>}
    </div>
  );
}
