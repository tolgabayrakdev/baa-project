import { Flex, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>
                    Baa - 404 Not Found!
                </title>
            </Helmet>
            <Flex h="100vh" justify="center" alignItems="center">
                <Text fontSize='lg'>404 - Not Found!</Text>
            </Flex>
        </>

    )
}