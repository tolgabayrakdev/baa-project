import { Button, Container, FormControl, FormLabel, Heading, HStack, Input, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

type Props = {}

export default function ResetPassword({ }: Props) {
    return (

        <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
            <Heading as="h1" size="md" mb="12">
                Reset your password here.
            </Heading>
            <Stack spacing="6">
                <Stack spacing="5">
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" placeholder="example@example.com" />
                    </FormControl>

                </Stack>
                <HStack justify="space-between">
                    <Button as={Link} to="/authentication" variant="text" size="sm">
                        Go back authentication
                    </Button>
                </HStack>
                <Stack spacing="6">
                    <Button colorScheme="green" type="submit" >
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}