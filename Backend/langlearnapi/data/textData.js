



async function text() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "what is the capital of ethiopia" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message.content);
}
