import {HeroParallax} from "@/components/ui/hero-parallax.tsx";
import { imageUrls } from "./utilities/data"
import Hero from "@/components/Hero.tsx";
import ChatbotSidebar from "@/components/chatbot/ChatbotSidebar.tsx";
import {LampContainer} from "@/components/ui/lamp.tsx";
import Footer from "@/components/Footer.tsx";


const App = ()=> {



  return (
    <>
      <div className="fixed right-0 z-50 h-full">
        <ChatbotSidebar />
      </div>

      <LampContainer className="pt-40 md:pt-60">
        <div className="overflow-hidden pt-60">
          <Hero />
          <HeroParallax images={imageUrls} />
          <Footer />
        </div>
      </LampContainer>
    </>

  )
}

export default App
