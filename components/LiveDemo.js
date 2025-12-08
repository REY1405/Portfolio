// components/LiveDemo.js
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function LiveDemo() {
  const [rps, setRps] = useState(700);
  const [latency, setLatency] = useState(120);
  const [err, setErr] = useState(0.5);
  const [logs, setLogs] = useState([]);
  const logsRef = useRef([]);

  useEffect(() => {
    const t1 = setInterval(() => {
      setRps((s) => Math.max(10, Math.round(s + (Math.random() - 0.5) * 150)));
      setLatency((s) => Math.max(5, Math.round(s + (Math.random() - 0.5) * 20)));
      setErr((s) => Math.max(0, +(s + (Math.random() - 0.5) * 0.4).toFixed(2)));
    }, 1200);

    const msgs = [
      "GET /api/users 200",
      "Cache hit /assets/main.css",
      "OTEL: span recorded (auth)",
      "DB: connected",
      "Warning: memory high",
      "Error: timeout to external svc",
      "Autoscaler: scaled up",
    ];

    const t2 = setInterval(() => {
      const m = msgs[Math.floor(Math.random() * msgs.length)];
      const line = `${new Date().toLocaleTimeString()} • ${m}`;
      logsRef.current = [...logsRef.current.slice(-80), line];
      setLogs(logsRef.current);
    }, 900);

    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, []);

  return (
    <section id="livedemo" className="py-12">
      <h2 className="text-2xl font-bold">Live demo</h2>
      <p className="mt-2 text-slate-600">Client-side simulated metrics & logs.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <Stat label="RPS" value={`${rps}/s`} />
            <Stat label="P95 Latency" value={`${latency} ms`} />
            <Stat label="Error Rate" value={`${err}%`} />
          </div>

          <div className="bg-white border rounded-2xl shadow p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Live Logs</div>
              <div className="text-xs text-slate-500">simulated</div>
            </div>

            <div className="mt-3 h-44 overflow-auto text-sm bg-slate-50 p-3 rounded">
              {logs.length === 0 ? (
                <div className="text-slate-500">No logs yet…</div>
              ) : (
                logs.map((l, i) => (
                  <div key={i} className="py-0.5 text-slate-700">
                    {l}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl shadow border">
          <div className="text-sm font-semibold">Overview</div>
          <div className="mt-3 text-slate-600 text-sm">Interactive demo for interviews & visits.</div>
          <div className="mt-4">
            <button
              onClick={() => {
                logsRef.current = [...logsRef.current, `${new Date().toLocaleTimeString()} • Manual deploy started`];
                setLogs([...logsRef.current]);
              }}
              className="w-full bg-indigo-600 text-white px-3 py-2 rounded"
            >
              Simulate Deploy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-white rounded-2xl shadow border">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      <div className="mt-3 text-xs text-slate-400">simulated</div>
    </motion.div>
  );
}
