import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

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
          success: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
          failure: `${process.env.NEXT_PUBLIC_APP_URL}/failure`,
          pending: `${process.env.NEXT_PUBLIC_APP_URL}/pending`,
        },
      },
    });

    return NextResponse.json({ preference_id: result.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al crear la preferencia" }, { status: 500 });
  }
}
