import { Flex, Spinner } from "@chakra-ui/react"

type Props = {}

export default function Loading({ }: Props) {
  return (
    <Flex h="100vh" justify="center" alignItems="center">
      <Spinner color="green" size='md' />
    </Flex>
  )
}