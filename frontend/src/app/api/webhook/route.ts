import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok" }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { type, data } = body;

  if (type === "payment") {
    console.log("Pago recibido, ID:", data.id);
    // Acá podés consultar el pago y actualizar tu base de datos
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
