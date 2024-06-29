"use client";
import { useState } from "react";
import { useQuery } from "react-query";
import { Button } from "@/components/ui/button";
import { getChat } from "@/service/aiService";

export default function ChatPage({ params }: { params: { language: string } }) {
  const [messages, setMessages] = useState([
    { text: `Chat Language: ${params.language}`, isUser: false },
  ]);
  const [input, setInput] = useState("");
  const language = params.language;

  const {
    data: chatResponse,
    isError,
    refetch,
  } = useQuery(["chatResponse", messages], () => getChat(input, language), {
    enabled: false,
    onSuccess: (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data, isUser: false },
      ]);
    },
    onError: () => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error fetching response", isUser: false },
      ]);
    },
  });

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput(""); // Clear input field after sending
    refetch(); // Trigger a new fetch for chat responses
  };

  return (
    <div className="p-4 w-full mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chat in {params.language}</h1>
      <div className="border bg-[#ffffff] border-gray-300 p-4 rounded-md h-96 overflow-y-scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.isUser ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                message.isUser ? "bg-main text-white" : "bg-gray-200 text-black"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full flex mt-4 justify-around items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="h-12 w-full p-2 border border-gray-300 rounded-md"
        />
        <Button onClick={handleSend} className="h-12 w-20 px-4 py-2 rounded-md">
          Send
        </Button>
      </div>
    </div>
  );
}
