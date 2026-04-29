import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
  jobTitle?: string;
  companyName?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "firstName",
  "lastName",
  "email",
  "country",
  "jobTitle",
  "companyName",
  "message",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const sanitized = {
    firstName: clean(payload.firstName),
    lastName: clean(payload.lastName),
    email: clean(payload.email),
    country: clean(payload.country),
    jobTitle: clean(payload.jobTitle),
    companyName: clean(payload.companyName),
    message: clean(payload.message),
  };

  const missingField = requiredFields.find((field) => !sanitized[field]);

  if (missingField) {
    return NextResponse.json(
      { success: false, error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(sanitized.email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  console.info("Contact inquiry received", {
    ...sanitized,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
