"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const params = useSearchParams();
  const paymentId = params.get("payment_id");
  const status = params.get("status");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <span className="text-6xl">✅</span>
      <h1 className="text-2xl font-bold text-green-600">¡Pago aprobado!</h1>
      <p className="text-gray-500">Tu compra fue procesada con éxito.</p>
      {paymentId && <p className="text-sm text-gray-400">Payment ID: {paymentId}</p>}
      {status && <p className="text-sm text-gray-400">Status: {status}</p>}
      <a href="/" className="text-blue-500 underline">Volver al inicio</a>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}


