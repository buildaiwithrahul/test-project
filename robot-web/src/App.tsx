import { SplineSceneBasic } from "@/components/ui/demo"
import { Navbar } from "@/components/ui/navbar"
import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full -mt-10">
        <SplineSceneBasic />
      </div>
    </main>
  )
}

export default App
