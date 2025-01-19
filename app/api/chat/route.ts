// app/api/chat/route.ts
"use client";

import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  if (!GEMINI_API_KEY) {
    return NextResponse.json({ error: 'AIzaSyAk3lNuzCUkRFiuPlWx8S8jmWDVo_Hn2TI' }, { status: 500 });
  }

  try {
    const { message } = await req.json();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error:", errorData);
      return NextResponse.json({ error: `Gemini API failed` }, { status: response.status });
    }

    const data = await response.json();
    const geminiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (geminiResponse === undefined) {
      console.error("Unexpected response structure:", data);
      return NextResponse.json({ error: "Unexpected response from Gemini API" }, { status: 500 });
    }

    return NextResponse.json({ response: geminiResponse });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}