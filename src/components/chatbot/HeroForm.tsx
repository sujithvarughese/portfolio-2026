"use client";
import { motion } from "motion/react"

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input.js";
import {useState} from "react";
import {useAppDispatch} from "@/features/hooks.tsx";
import {fetchAiStream, toggleChatOpened} from "@/features/assistantSlice.tsx";


export function HeroForm() {
  const placeholders = [
    "What are some of Sujith's skills?",
    "What coding languages is he proficient in?",
    "What are some recent apps Sujith has built?",
    "How did you get built?",
  ];
  const dispatch = useAppDispatch()

  const [query, setQuery] = useState("");

  const onSubmit = () => {
    dispatch(toggleChatOpened())
    dispatch(fetchAiStream(query))
  };

  return (
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
      className="flex flex-col mx-auto justify-center items-center px-4 mt-4 sm:w-xs md:w-xs lg:w-md">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={onSubmit}
      />
    </motion.div>
  );
}
