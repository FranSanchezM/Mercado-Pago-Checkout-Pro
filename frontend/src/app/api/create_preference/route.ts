import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
  options: {
    integratorId: process.env.MP_INTEGRATOR_ID,
  },
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://mercado-pago-checkout-pro-eta.vercel.app";

export async function POST() {
  try {
    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: "1234",
            title: "Remera Copilot",
            description: "Dispositivo de tienda móvil de comercio electrónico",
            picture_url: "https://placehold.co/400x400?text=Remera",
            category_id: "clothing",
            quantity: 1,
            unit_price: 2000,
          },
        ],
        payment_methods: {
          excluded_payment_methods: [{ id: "visa" }],
          installments: 6,
        },
        external_reference: "MP-PARTNERS-001",
        notification_url: `${APP_URL}/api/webhook`,
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
