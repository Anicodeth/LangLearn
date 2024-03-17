const openai = require("../configs/openAiConfig");
const gemini = require("../configs/geminiAiConfig");

async function textOpenAi(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}


async function textGemini(prompt) {
  const response = await gemini.sendMessage(prompt);
  return response.text();
}

module.exports = text;
