import { Chat } from "@/components/ui/chat"
import { useState } from "react"

function App() {
  const [inputText, setInputText] = useState("")

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Chat
        className="max-w-5xl"
        messages={[]}
        input={inputText}
        handleInputChange={(text) => setInputText(text.target.value)}
        handleSubmit={() => { }}
        isGenerating={false}
        stop={stop}
      />
    </div>
  )
}

export default App