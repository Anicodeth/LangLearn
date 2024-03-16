const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
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
    messages: [{ role: "system", content: "what is the capital of ethiopia" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

module.exports = openai;
