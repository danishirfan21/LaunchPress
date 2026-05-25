import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const { priceId } = await request.json();
    const checkoutPriceId = priceId || process.env.STRIPE_PRICE_ID;
    const secretKey = process.env.STRIPE_SECRET_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    if (!checkoutPriceId) {
      return NextResponse.json(
        { error: "Missing priceId or STRIPE_PRICE_ID." },
        { status: 400 }
      );
    }

    if (!secretKey) {
      return NextResponse.json(
        { error: "Checkout unavailable: missing STRIPE_SECRET_KEY." },
        { status: 503 }
      );
    }

    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: checkoutPriceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/thank-you`,
      cancel_url: `${baseUrl}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    );
  }
}
