export async function queryOllama(prompt: string, model: string = "llama3.2:latest"): Promise<string> {
    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          prompt,
          stream: false,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Erreur Ollama: ${response.status}`);
      }
  
      const data = await response.json();
      return data.response as string;
    } catch (error) {
      console.error("Erreur Ollama:", error);
      return "Impossible de contacter Ollama";
    }
  }
  