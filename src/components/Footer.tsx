import { Button, Flex, Text } from '@mantine/core'
import { emailAddress } from '../utilities/data.ts'



const Footer = () => {
  return (
    <Flex direction="column" align="center" pt={{base: 400, sm: 64}} gap={8}>
      <Button component="a" href={`mailto:${emailAddress}`}>Let's Connect</Button>
      <Text c="white">Get in touch! Feedback and inquiries are all welcome.</Text>

      <Text c="#B8B8B8">Copyright 2025. All Rights Reserved</Text>
    </Flex>
  )
}

export default Footer