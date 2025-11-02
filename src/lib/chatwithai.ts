export async function chat_with_ai(message: string): Promise<string> {
    const res = await fetch("http://localhost:8000/ollama/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Erreur serveur : ${res.status} - ${text}`);
    }
  
    const data = await res.json();
    return data.response;
  }