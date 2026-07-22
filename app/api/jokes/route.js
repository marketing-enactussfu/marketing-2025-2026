import { NextResponse } from "next/server";
import {
  buildAgentReply,
  getCategories,
  getGreeting,
  parseUserMessage,
} from "../../lib/jokes";

export async function GET() {
  return NextResponse.json({
    greeting: getGreeting(),
    categories: getCategories(),
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body.message ?? "";
    const lastSetup = body.lastSetup ?? null;
    const intent = parseUserMessage(message);
    const reply = buildAgentReply(intent.intent, {
      category: intent.category,
      lastSetup,
    });

    return NextResponse.json(reply);
  } catch {
    return NextResponse.json(
      { type: "text", content: "Oops! My joke circuits got tangled. Try again?" },
      { status: 400 }
    );
  }
}
