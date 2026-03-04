import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://mercado-pago-checkout-pro-eta.vercel.app";

export async function POST() {
  try {
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: "remera-copilot",
            title: "Remera Copilot",
            quantity: 1,
            unit_price: 2000,
          },
        ],
        back_urls: {
          success: `${APP_URL}/success`,
          failure: `${APP_URL}/failure`,
          pending: `${APP_URL}/pending`,
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({ preference_id: result.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al crear la preferencia" }, { status: 500 });
  }
}
