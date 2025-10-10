import Message from "@/components/chatbot/Message.tsx";
import {useAppDispatch, useAppSelector} from "@/features/hooks.tsx";
import {useRef, useEffect} from "react";
import { IoIosSend } from "react-icons/io";
import ChatbotButton from "@/components/chatbot/ChatbotButton.tsx";
import LoadingMessage from "@/components/chatbot/LoadingMessage.tsx";
import {Box, Button, Drawer, Flex, TextInput, Title} from "@mantine/core";
import {fetchAiStream, toggleChatOpened} from "@/features/assistantSlice.tsx";
import {useForm} from "@mantine/form";

const ChatbotSidebar = () => {

  const chatOpened = useAppSelector(state => state.chatbot.chatOpened)
  const chat = useAppSelector(state => state.chatbot.chat)
  const loading = useAppSelector(state => state.chatbot.loading)
  const dispatch = useAppDispatch()

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef?.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, chatOpened]);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      query: '',
    }
  });

  const handleSubmit = () => {
    dispatch(fetchAiStream(form.getValues().query))
    form.reset()
  }

  return (
    <>
      <ChatbotButton />
      <Drawer
        opened={chatOpened}
        onClose={() => dispatch(toggleChatOpened())}
        position="right"
        size="sm"
        removeScrollProps={{ allowPinchZoom: true }}
        style={{ position: "relative" }}
      >
        <Title order={2} pos="absolute" top={12} style={{ textAlign: "center", fontSize: 28, zIndex: 10000 }}>AI Assistant</Title>
        <Flex direction="column" gap={20}>
          <Box>
            {chat?.map((message, index) => <Message key={index} {...message} />)}
            {loading && <LoadingMessage />}
          </Box>

          <Box>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Flex direction="column" gap={20}>
                <Box mx={12}>
                  <TextInput
                    data-autofocus
                    placeholder="Create Message"
                    key={form.key('query')}
                    {...form.getInputProps('query')}
                  />
                </Box>

                <Flex justify="flex-end" mx={12} ref={bottomRef}>
                  <Button
                    type="submit"
                    loading={loading}
                    variant="gradient"
                    loaderProps={{ type: 'dots' }}
                    rightSection={<IoIosSend size={20}/>}
                  >Send
                  </Button>
                </Flex>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Drawer>
    </>


  );
};

export default ChatbotSidebar;