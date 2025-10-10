import {useState} from 'react'
import {ActionIcon, Box, Tooltip} from '@mantine/core'
import { RiAiGenerate2 } from "react-icons/ri";
import { motion } from 'motion/react'
import {useAppDispatch} from "@/features/hooks.tsx";
import {toggleChatOpened} from "@/features/assistantSlice.tsx";

const ChatbotButton = () => {

  const [clicked, setClicked] = useState(false)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    setClicked(true)
    dispatch(toggleChatOpened())
  }

  return (
    <Box
      component={motion.div}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      animate={clicked ?  {} : { scale: [1, 1.1, 1] }} // Flash effect
      transition={ clicked ? { ease: "easeInOut" } :{
        duration: 0.5, // Speed of flashing
        repeat: Infinity, // Loop forever
        repeatDelay: 2,
      }}
      p={24}
    >
      <Tooltip label="AI Chatbot" >
        <ActionIcon style={{ border: "4px solid orange", borderRadius: "50%"}} variant="gradient" onClick={handleClick} size={72}>
          <RiAiGenerate2 size={32} />
        </ActionIcon>


      </Tooltip>
    </Box>
  )
}


export default ChatbotButton