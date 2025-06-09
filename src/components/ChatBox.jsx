import React, { useState, useEffect } from "react";
import Axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

export default function ChatBox({ autoPrompt = "" }) {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([
    {
      type: "bot",
      text: "Hello! ask me about your all queries.",
    },
  ]);
  useEffect(() => {
    if (autoPrompt) {
      const fetchAutoResponse = async () => {
        setConversation((prev) => [
          ...prev,
          { type: "user", text: autoPrompt },
        ]);
        try {
          const res = await Axios.post(`${backend_url}/api/ask`, {
            prompt: autoPrompt,
          });
          const botMsg = { type: "bot", text: res.data.response };
          setConversation((prev) => [...prev, botMsg]);
        } catch (err) {
          setConversation((prev) => [
            ...prev,
            { type: "bot", text: "Error getting response" },
          ]);
        }
      };

      fetchAutoResponse();
    }
  }, [autoPrompt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMsg = { type: "user", text: message };
    setConversation((prev) => [...prev, newMsg]);
    setMessage("");

    try {
      const res = await Axios.post(`${backend_url}/api/ask`, {
        prompt: message,
      });
      const botMsg = { type: "bot", text: res.data.response };
      setConversation((prev) => [...prev, botMsg]);
    } catch (err) {
      setConversation((prev) => [
        ...prev,
        { type: "bot", text: "Error getting response" },
      ]);
    }
  };

  return (
    <div className="bg-white dark:bg-[#1a1a2e] border-2 border-green-500 rounded-xl shadow-lg p-4 h-80 flex flex-col justify-between">
      <div className="overflow-y-auto text-sm mb-2 space-y-2">
        {conversation.map((msg, i) => (
          <div
            key={i}
            className={`${
              msg.type === "user" ? "text-right text-green-700" : "text-left"
            }`}
          >
            <span className="inline-block bg-gray-100 dark:bg-gray-700 p-2 rounded">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border rounded dark:bg-[#0b1120] w-full"
          placeholder="Ask me anything..."
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 rounded hover:bg-green-500 flex-shrink-0"
        >
          Send
        </button>
      </form>
    </div>
  );
}
