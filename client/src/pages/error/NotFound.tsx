import { Flex, Text } from '@chakra-ui/react'

type Props = {}

export default function NotFound({ }: Props) {
    return (
        <Flex h="100vh" justify="center" alignItems="center">
            <Text fontSize='lg'>404 - Not Found!</Text>
        </Flex>
    )
}