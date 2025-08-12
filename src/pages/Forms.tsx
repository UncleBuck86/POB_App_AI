import { useState } from "react";
import usePOB from "../store/usePOB";

export default function Forms() {
  const { addPerson } = usePOB();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [bunk, setBunk] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const id = String(Date.now());
    addPerson({ id, name, company, role, bunk });
    setName(""); setCompany(""); setRole(""); setBunk("");
  }

  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Quick Entry</div>
      <form onSubmit={submit} className="card grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="text-sm">
          <div className="text-xs text-neutral-500">Name</div>
          <input className="border rounded-lg px-3 py-2 w-full" value={name} onChange={e=>setName(e.target.value)} required />
        </label>
        <label className="text-sm">
          <div className="text-xs text-neutral-500">Company</div>
          <input className="border rounded-lg px-3 py-2 w-full" value={company} onChange={e=>setCompany(e.target.value)} />
        </label>
        <label className="text-sm">
          <div className="text-xs text-neutral-500">Role</div>
          <input className="border rounded-lg px-3 py-2 w-full" value={role} onChange={e=>setRole(e.target.value)} />
        </label>
        <label className="text-sm">
          <div className="text-xs text-neutral-500">Bunk</div>
          <input className="border rounded-lg px-3 py-2 w-full" value={bunk} onChange={e=>setBunk(e.target.value)} />
        </label>
        <div className="col-span-full">
          <button className="rounded-xl bg-brand-600 text-white px-4 py-2">Add to POB</button>
        </div>
      </form>
    </div>
  );
}
