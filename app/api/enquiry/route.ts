import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: unknown;
  phone?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: EnquiryPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid name." },
      { status: 400 }
    );
  }

  if (!/^[6-9][0-9]{9}$/.test(phone)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid 10-digit phone number." },
      { status: 400 }
    );
  }

  if (message.length < 3 || message.length > 500) {
    return NextResponse.json(
      { ok: false, error: "Please enter a short message about what you're looking for." },
      { status: 400 }
    );
  }

  console.log("New enquiry received:", {
    name,
    phone,
    message,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
