const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");
const {quizPrompt, chatPrompt} = require('../prompts/prompts')

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

async function speech() {
  const speechFile = path.resolve("./speech.mp3");
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "Hi Seleshi how are you doing today?",
  });

  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

async function text() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: chatPrompt('french', "hey how are you?") }],
    model: "gpt-3.5-turbo",
  });

  const data = completion.choices[0].message.content;
  // const json = JSON.parse(data)
  console.log(data);
}

text()
module.exports = openai;
