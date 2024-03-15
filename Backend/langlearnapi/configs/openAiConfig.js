const  fs  = require("fs");
const  path =  require("path");
const OpenAI =  require("openai");

const openai = new OpenAI({
  apiKey: "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",
});

const speechFile = path.resolve("./speech.mp3");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: "HI Seleshi how are you doing today?",
    
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();
