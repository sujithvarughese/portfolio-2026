import { motion } from "motion/react"
import { fullName, bio, heroImages } from '../utilities/data.js'
import  { useEffect, useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import {Anchor, Flex} from '@mantine/core'
import {AnimatedTestimonials} from "../components/ui/animated-testimonials.js";
import {HeroForm} from "../components/chatbot/HeroForm.tsx";
const emailAddress = "sujith.varug@gmail.com"

type HeroProps = {
  form: any
}

const Hero = ({ form }: HeroProps) => {

  const [currentNameText, setCurrentNameText] = useState("")
  const [currentIntroductionText, setCurrentIntroductionText] = useState("")
  const [currentLocationText, setCurrentLocationText] = useState("")


  const updateWord = (word: string, currentWord: string) => {
    if (word.length === currentWord.length) {
      return currentWord
    }
    return word.substring(0, currentWord.length + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentNameText !== fullName) {
        const updatedWord = updateWord(fullName, currentNameText)
        setCurrentNameText(updatedWord)
      } else if (currentIntroductionText !== bio) {
        const updatedWord = updateWord(bio, currentIntroductionText)
        setCurrentIntroductionText(updatedWord)
      } else if (currentLocationText !== "Miami, FL") {
        const updatedWord = updateWord("Miami, FL", currentLocationText)
        setCurrentLocationText(updatedWord)
      }
    }, 45)
    return () => clearTimeout(timer)
  }, [currentNameText, currentIntroductionText, currentLocationText])

  return (

      <Flex direction={{ base: "column", sm: "row" }} justify="center" align="center" className="m-auto md:max-w-4xl lg:max-w-6xl">
        <Flex direction="column" className="w-full">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-4xl lg:text-6xl"
          >
            Sujith Varughese
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="py-1 font-stretch-60% relative z-10 mx-auto max-w-xl text-center text-lg font-normal text-white dark:text-neutral-400"
          >
            {currentIntroductionText}
          </motion.p>
          <Flex justify="center" align="center" mb={12}>
            <motion.div
              initial={{ opacity: 0, y: -1000 }}
              animate={{
                opacity: 1, y: 0, x: 0,
                transition: { delay: 2, type: "spring", damping: 350, mass: 0.2, stiffness: 250  }
              }}
              className="relative z-10 max-w-xl text-center text-lg font-normal text-white dark:text-neutral-400"
            >
              <IoLocationSharp fontSize={24} color="white"/>
            </motion.div>
            <motion.p style={{ color: "white"}} className="font-stretch-75% font-light">{currentLocationText}</motion.p>
          </Flex>
          <HeroForm form={form} />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href={`mailto:${emailAddress}`}  className="w-50 transform cursor-pointer rounded-lg text-center font-bold bg-green-500 px-6 py-4 md:mt-6 text-white transition-all duration-300 hover:bg-green-800">
              Contact me
            </a>
            <Flex justify="space-around" w="100%" display={{ base: "none", sm: "flex" }}>
              <Flex direction="column">
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718361/diploma_mv2evg.png" target="_blank" rel="noreferrer">Bachelor's Diploma</Anchor>
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747725035/CompTIA_A_ce_certificate_tfbzb8.png" target="_blank" rel="noreferrer">CompTIA A+</Anchor>
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747725095/Meta_front_end_certificate-_Coursera_eeuipu.png" target="_blank" rel="noreferrer">Meta Front End Developer</Anchor>
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718364/accounting_certificate_ff7vvg.png" target="_blank" rel="noreferrer">Accounting Technology</Anchor>
                <Anchor href="https://res.cloudinary.com/dts8hi7rg/image/upload/v1747718364/business_management_cert_kmza3i.png" target="_blank" rel="noreferrer">Business Management</Anchor>
              </Flex>
            </Flex>
          </motion.div>
        </Flex>
        <AnimatedTestimonials testimonials={heroImages} />

      </Flex>
  );
};

export default Hero;