import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { messages } = req.body;

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
      });

      res.status(200).json(response.data.choices[0].message);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while processing the request." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
