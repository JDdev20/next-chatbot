"use client";
import { useState, useEffect, useRef } from "react";
import { useChat, Message as AiMessage } from "ai/react";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  // Detect clicks outside of the chat
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Add listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatRef]);

  return (
    <div>
      {/* Floating Button */}
      <button
        className="fixed bottom-10 right-10 p-2 md:p-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 text-sm md:text-base"
        onClick={() => setIsOpen(!isOpen)}
      >
        🤖
      </button>

      {/* Chat Container */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-0 inset-x-0 h-1/2 md:max-w-md mx-auto px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-lg"
        >
          <button
            className="absolute top-3 right-3 text-lg text-gray-600 hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          <div className="flex flex-col h-80 overflow-y-auto mb-4">
            {messages.map((m: AiMessage) => (
              <div
                key={m.id}
                className="whitespace-pre-wrap p-2 my-1 bg-white rounded shadow"
              >
                <span className="font-semibold">
                  {m.role === "user" ? "You: " : "AI: "}
                </span>
                {m.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      )}
    </div>
  );
}
