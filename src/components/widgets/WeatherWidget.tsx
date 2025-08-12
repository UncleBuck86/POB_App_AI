import { useEffect, useState } from "react";
import useSettings from "../../store/useSettings";

type Weather = { tempC: number; windKts: number; summary: string };

export default function WeatherWidget() {
  const { defaultLat, defaultLon } = useSettings();
  const [data, setData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `${import.meta.env.VITE_WEATHER_API_BASE}?latitude=${defaultLat}&longitude=${defaultLon}&current=temperature_2m,wind_speed_10m`;
        const res = await fetch(url);
        const json = await res.json();
        const tempC = json?.current?.temperature_2m ?? 0;
        const windMs = json?.current?.wind_speed_10m ?? 0;
        setData({ tempC, windKts: Math.round(windMs * 1.94384), summary: "Current" });
      } catch (e:any) {
        setError(e?.message || "Failed to load weather");
      } finally {
        setLoading(false);
      }
    })();
  }, [defaultLat, defaultLon]);

  return (
    <div className="card">
      <div className="text-sm font-medium">Weather</div>
      {loading && <div className="text-xs text-neutral-500 mt-2">Loading...</div>}
      {error && <div className="text-xs text-red-500 mt-2">{error}</div>}
      {data && (
        <div className="mt-2 text-sm">
          <div>Temp: {Math.round(data.tempC)}°C</div>
          <div>Wind: {data.windKts} kts</div>
        </div>
      )}
    </div>
  );
}
