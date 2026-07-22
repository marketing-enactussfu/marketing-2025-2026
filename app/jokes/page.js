"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "../components/header";

function JokeBubble({ message }) {
  const isAgent = message.role === "agent";

  return (
    <div
      className={`flex ${isAgent ? "justify-start" : "justify-end"} animate-fade-in`}
    >
      <div
        className={`max-w-[85%] md:max-w-[70%] rounded-[16px] px-[20px] py-[16px] ${
          isAgent
            ? "bg-primary-gray text-white"
            : "bg-primary-yellow text-black"
        }`}
      >
        {message.content && <p className="mb-0">{message.content}</p>}
        {message.joke && (
          <div className="flex flex-col gap-[8px] mt-[8px]">
            <p className="font-semibold">{message.joke.setup}</p>
            <p
              className={`font-medium ${
                isAgent ? "text-primary-yellow" : "text-secondary-red"
              }`}
            >
              {message.joke.punchline}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function Page() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastSetup, setLastSetup] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    fetch("/api/jokes")
      .then((res) => res.json())
      .then((data) => {
        setMessages([
          {
            id: "greeting",
            role: "agent",
            content: data.greeting,
          },
        ]);
      });
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/jokes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, lastSetup }),
      });
      const reply = await res.json();

      if (reply.joke) {
        setLastSetup(reply.joke.setup);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `agent-${Date.now()}`,
          role: "agent",
          content: reply.content,
          joke: reply.joke ?? null,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          role: "agent",
          content: "My joke book fell off the shelf. Mind trying again?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="flex flex-col gap-[32px] md:gap-[48px] pb-[48px]">
      <section className="padding pt-[32px]">
        <Header
          header="Joke Agent"
          body="Your personal comedy companion. Ask for a joke, say hello, or just hit the button — laughter guaranteed*."
        />
        <p className="text-sm opacity-60">*Guarantee not legally binding.</p>
      </section>

      <section className="section-standard">
        <div className="flex flex-col gap-[16px] bg-primary-gray rounded-[16px] p-[24px] min-h-[400px] max-h-[60vh] overflow-y-auto">
          {messages.map((message) => (
            <JokeBubble key={message.id} message={message} />
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-primary-gray rounded-[16px] px-[20px] py-[16px] text-white opacity-70">
                <p className="animate-pulse">Thinking of something funny...</p>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="flex flex-col sm:flex-row gap-[12px] mt-[16px]">
          <button
            type="button"
            onClick={() => sendMessage("Tell me a joke!")}
            disabled={loading}
            className="px-[16px] py-[12px] rounded-[10px] bg-[#C70D00] hover:bg-primary-red text-white font-semibold transition-all duration-300 disabled:opacity-50"
          >
            Tell me a joke!
          </button>
          <button
            type="button"
            onClick={() => sendMessage("Another one!")}
            disabled={loading}
            className="px-[16px] py-[12px] rounded-[10px] border border-white/30 text-white hover:bg-white/10 font-semibold transition-all duration-300 disabled:opacity-50"
          >
            Another one!
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-[12px] mt-[16px]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message... (try 'tell me a joke')"
            disabled={loading}
            className="flex-1 px-[16px] py-[12px] rounded-[10px] bg-black border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-yellow"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-[16px] py-[10px] rounded-[10px] bg-[#C70D00] hover:bg-primary-red text-white font-semibold transition-all duration-300 disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default Page;
