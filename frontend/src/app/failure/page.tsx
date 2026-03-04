export default function FailurePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <span className="text-6xl">❌</span>
      <h1 className="text-2xl font-bold text-red-600">Pago rechazado</h1>
      <p className="text-gray-500">Hubo un problema al procesar tu pago.</p>
      <a href="/" className="text-blue-500 underline">Volver al inicio</a>
    </main>
  );
}
