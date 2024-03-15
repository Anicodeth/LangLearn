
// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyBgwIEIym1m5ea6tY6xhCWeEGCjW2KfmgY";

async function runChat() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "make a json student date"}],
      },
      {
        role: "model",
        parts: [{ text: "```json\n{\n  \"name\": \"John Doe\",\n  \"age\": 20,\n  \"gender\": \"male\",\n  \"address\": {\n    \"street\": \"123 Main Street\",\n    \"city\": \"Anytown\",\n    \"state\": \"CA\",\n    \"zip\": \"12345\"\n  },\n  \"phone\": \"555-123-4567\",\n  \"email\": \"johndoe@example.com\",\n  \"courses\": [\n    {\n      \"name\": \"English\",\n      \"grade\": \"A\"\n    },\n    {\n      \"name\": \"Math\",\n      \"grade\": \"B\"\n    },\n    {\n      \"name\": \"Science\",\n      \"grade\": \"C\"\n    }\n  ]\n}\n```"}],
      },
    ],
  });

  const result = await chat.sendMessage("What is the age of John?");
  const response = result.response;
  console.log(response.text());
}

runChat();