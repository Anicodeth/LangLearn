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
  const result = await gemini.sendMessage(prompt);
  const response = result.response;
  return response.text();
}

module.exports = { textOpenAi, textGemini };
