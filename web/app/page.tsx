"use client";                                     // potrzebne, bo używamy useEffect

import { useEffect, useState } from "react";

export default function Home() {
  const [apiStatus, setApiStatus] = useState<"loading" | "ok" | "fail">(
    "loading"
  );

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then(() => setApiStatus("ok"))
      .catch(() => setApiStatus("fail"));
  }, []);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">StudySync</h1>

      {apiStatus === "loading" && <p>Łączenie z API…</p>}
      {apiStatus === "ok" && <p className="text-green-400">✅ API online</p>}
      {apiStatus === "fail" && (
        <p className="text-red-400">❌ Brak połączenia z API</p>
      )}
    </main>
  );
}
