import { Chat } from "@/components/ui/chat"
import Logo from "./assets/logo.jpeg"
import { useChat } from "./hooks/useChat";

function App() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

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
        
        <Chat
          className="max-w-3xl"
          messages={messages}
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isGenerating={isLoading}
          stop={() => {}} 
        />
      </main>

      
    </div>

  )
}

export default App