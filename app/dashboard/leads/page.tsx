"use client";
import React, { useMemo, useState } from "react";
import BuilderSidebar from "../../../components/BuilderSidebar";

type Lead = { id: string; name: string; email: string; phone: string; project: string; status: "New" | "Contacted" | "Qualified" };

const initial: Lead[] = [
  { id: "1", name: "Aman Gupta", email: "aman@example.com", phone: "+91 90000 11111", project: "Canvas & Cove", status: "New" },
  { id: "2", name: "Priya Singh", email: "priya@example.com", phone: "+91 90000 22222", project: "Marina One", status: "Contacted" },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(initial);
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return leads.filter((l) => !s || l.name.toLowerCase().includes(s) || l.project.toLowerCase().includes(s));
  }, [leads, q]);

  const exportCsv = () => {
    const header = ["Name", "Email", "Phone", "Project", "Status"].join(",");
    const rows = filtered.map((l) => [l.name, l.email, l.phone, l.project, l.status].join(","));
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <BuilderSidebar />
        <div className="flex-1">
          <div className="bg-white px-8 py-5 border-b border-[#ebebeb] flex items-center gap-4">
            <div className="text-[18px] font-medium tracking-[-0.27px] text-neutral-900 flex-1">Leads</div>
            <div className="relative">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search leads..." className="rounded-[10px] border border-[#ebebeb] shadow-sm pl-3 pr-3 py-2 text-[14px] outline-none" />
            </div>
            <button onClick={exportCsv} className="rounded-[10px] bg-[#335cff] text-white text-[14px] font-medium px-[10px] py-[10px] shadow-sm">Export CSV</button>
          </div>

          <div className="px-8 py-5">
            <div className="overflow-x-auto rounded-2xl border border-[#ebebeb]">
              <table className="w-full text-left">
                <thead className="text-[12px] text-[#5c5c5c]">
                  <tr className="border-b border-[#ebebeb]">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone</th>
                    <th className="px-4 py-2">Project</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {filtered.map((l) => (
                    <tr key={l.id} className="border-b border-[#ebebeb]">
                      <td className="px-4 py-2">{l.name}</td>
                      <td className="px-4 py-2">{l.email}</td>
                      <td className="px-4 py-2">{l.phone}</td>
                      <td className="px-4 py-2">{l.project}</td>
                      <td className="px-4 py-2">
                        <span className={"inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[12px] " + (l.status === "New" ? "bg-[#e0faec] text-[#1fc16b]" : l.status === "Contacted" ? "bg-[#fff3cd] text-[#856404]" : "bg-[#f5f7fa] text-[#5c5c5c]")}>
                          {l.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


