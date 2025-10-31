import { useState } from "react";
import { queryOllama } from "@/services/ollamaService";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  parts: { type: "text"; text: string }[];
}

export function useChat(model?: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const isLoading = status === "loading";

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault(); 
    }
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      parts: [{ type: "text", text: input }],
    };

    setMessages((prev) => [...prev, userMessage]);
    setStatus("loading");
    setInput("");

    const aiResponse = await queryOllama(input, model);

    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: aiResponse,
      parts: [{ type: "text", text: aiResponse }],
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setStatus("idle");
  };

  return {
    messages,
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
}
