import { NextResponse } from "next/server";

const message = "What it do";

export async function POST(req) {
  var postmark = require("postmark");

  var client = new postmark.ServerClient(process.env.NEXT_PUBLIC_POSTMARK_API);

  client.sendEmail({
    From: "info@adrianbrowncreative.com",
    To: "info@adrianbrowncreative.com",
    Subject: "Test",
    TextBody: message,
  });

  return NextResponse.json(req.body);
}
