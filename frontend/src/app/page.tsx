"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { initMercadoPago } from "@mercadopago/sdk-react";

const Wallet = dynamic(
  () => import("@mercadopago/sdk-react").then((m) => m.Wallet),
  { ssr: false }
);

initMercadoPago("APP_USR-b39b8c9b-b61c-46e0-b6d0-99406a6eb673");

const PRODUCT = {
  title: "Remera Copilot",
  price: 200,
  image: "https://placehold.co/400x400?text=Remera",
};

export default function HomePage() {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/create_preference", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Respuesta backend:", data);
        if (data.preference_id) setPreferenceId(data.preference_id);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex w-72 flex-col items-center gap-4">
        <img alt={PRODUCT.title} className="w-full rounded-xl" src={PRODUCT.image} />
        <h1 className="text-xl font-bold">{PRODUCT.title}</h1>
        <p className="text-2xl font-bold text-blue-600">${PRODUCT.price.toLocaleString()}</p>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
    </main>
  );
}
