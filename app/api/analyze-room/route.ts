import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        score: 500,
        sentiment: "Neutral Space",
        recommendation: "This space seems balanced. Find a comfortable spot and focus on your work."
      });
    }

    const { OpenAI } = await import("openai");
    const openai = new OpenAI({ apiKey });

    const { imageBase64 } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are the Aura Atlas spatial intelligence engine. Analyze the provided image for sensory load. Return ONLY a JSON object with: "score" (0-1000), "sentiment" (2-3 words), "recommendation" (one sentence).`
        },
        {
          role: "user",
          content: [{ type: "image_url", image_url: { url: imageBase64 } }]
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message?.content || "{}");
    return NextResponse.json(result);

  } catch (error) {
    console.error("GPT Vision Error:", error);
    return NextResponse.json({ error: "Failed to analyze room" }, { status: 500 });
  }
}
