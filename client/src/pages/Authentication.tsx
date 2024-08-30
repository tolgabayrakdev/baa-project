import { Button, Container, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputRightElement, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Authentication() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Helmet>
                <title>
                    Baa - Authentication Page
                </title>
            </Helmet>

            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Heading as='h1' size='xs' mb="12">
                    You can create an account or log in to your existing account here.
                </Heading>
                <Tabs colorScheme="green" isFitted variant='enclosed'>
                    <TabList>
                        <Tab>Login here</Tab>
                        <Tab>Register here</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel mt="6">
                            <Stack spacing="6">
                                <Stack spacing="5">
                                    <FormControl>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <Input id="email" type="email" placeholder="example@example.com" />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                id="password"
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Enter password'
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? 'Hide' : 'Show'}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                </Stack>
                                <HStack justify="space-between">
                                    <Button variant="text" size="sm">
                                        Forgot password?
                                    </Button>
                                </HStack>
                                <Stack spacing="6">
                                    <Button colorScheme="green">Sign in</Button>
                                </Stack>
                            </Stack>
                        </TabPanel>
                        <TabPanel mt="6">
                            <Stack spacing="6">
                                <Stack spacing="5">
                                    <FormControl>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <Input id="email" type="email" placeholder="example@example.com" />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="password">Password</FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                id="password"
                                                pr='4.5rem'
                                                type={show ? 'text' : 'password'}
                                                placeholder='Enter password'
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                                    {show ? 'Hide' : 'Show'}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>

                                </Stack>

                                <Stack spacing="6">
                                    <Button colorScheme="green">Sign up</Button>
                                </Stack>
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Container>
        </>

    )
}