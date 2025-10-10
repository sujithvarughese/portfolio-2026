import {HeroParallax} from "@/components/ui/hero-parallax.tsx";
import { imageUrls } from "./utilities/data"
import Hero from "@/components/Hero.tsx";
import ChatbotSidebar from "@/components/chatbot/ChatbotSidebar.tsx";
import {useForm} from "@mantine/form";
import {LampContainer} from "@/components/ui/lamp.tsx";


const App = ()=> {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      query: '',
    }
  });

  return (
    <>
      <div className="fixed right-0 z-50 h-full">
        <ChatbotSidebar form={form} />
      </div>

      <LampContainer className="pt-40 md:pt-60">
        <div className="overflow-hidden pt-60">
          <Hero form={form} />
          <HeroParallax images={imageUrls} />
        </div>
      </LampContainer>
    </>

  )
}

export default App
