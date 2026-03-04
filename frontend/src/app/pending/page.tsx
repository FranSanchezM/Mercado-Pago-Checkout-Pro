export default function PendingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <span className="text-6xl">⏳</span>
      <h1 className="text-2xl font-bold text-yellow-600">Pago pendiente</h1>
      <p className="text-gray-500">Tu pago está siendo procesado.</p>
      <a href="/" className="text-blue-500 underline">Volver al inicio</a>
    </main>
  );
}
