import { Chat } from "@/components/ui/chat"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Logo from "./assets/logo.jpeg"

function App() {
  const [inputText, setInputText] = useState("")
  const [isClicked, setIsClicked] = useState(0)
  const handleClick = () => {
    setIsClicked(isClicked + 1)
  }
  const isLoading = status === "submitted" || status === "streaming"

  return (
    <div className="min-h-screen flex flex-col "> {/* definit la structure globale de la page  */}
      {/* Titre en haut à gauche */}
      <header className="p-6">
        <h2 id="title" className="flex items-center text-3xl font-extrabold text-left text-black-900">
          <img src={Logo} alt="Logo" className="w-16 h-16 mr-4" />
          NewClip <span className="text-red-700">Technics</span>
        </h2>

      </header>
      {/* Zone principale centrée */}
      <main className=" flex flex-col gap-2 flex-1 justify-center items-center">
        
        <Button onClick={handleClick} className="w-48">
          {isClicked}
        </Button>
        <Chat
          className="max-w-3xl"
          messages={[]}
          input={inputText}
          handleInputChange={(text) => setInputText(text.target.value)}
          handleSubmit={() => { }}
          isGenerating={isLoading}
          stop={stop}
        />
      </main>

      
    </div>

  )
}

export default App