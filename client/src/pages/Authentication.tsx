import {
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    FormErrorMessage,
    useToast
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Authentication() {
    const navigate = useNavigate();
    const toast = useToast();

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    // Validation schema for Formik
    const validationSchemaLogin = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    });
    
    const validationSchemaRegister = Yup.object({
        remail: Yup.string().email("Invalid email address").required("Required"),
        rpassword: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    });
    // SignInRequest
    const submitSignIn = async (values: { email: string, password: string }) => {
        try {
            const res = await fetch("http://localhost:8000/api/v1/authentication/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            });
            if (res.status === 200) {
                toast({
                    title: 'Login successful',
                    description: "Going to Baord page...",
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                })
                setTimeout(() => {
                    navigate("/board");
                }, 1000)
            } else {
                toast({
                    title: 'Login failed',
                    description: "Check your credentials!",
                    status: 'warning',
                    duration: 1000,
                    isClosable: true,
                })
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: "Something gone wrong!",
                status: 'error',
                duration: 1000,
                isClosable: true,
            })
            console.log(error);
        }
    };

    // SignUpRequest
    const submitSignUp = async (values: { remail: string, rpassword: string }) => {
        console.log("register");
        try {
            const res = await fetch("http://localhost:8000/api/v1/authentication/register", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.remail,
                    password: values.rpassword
                })
            });
            if (res.status === 201) {
                toast({
                    title: 'Account created',
                    description: "You can login",
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                })
                setTimeout(() => {
                    navigate(0);
                }, 1000)
            } else if (res.status === 400) {
                toast({
                    title: 'Account creation failed!',
                    description: "Email already registered!",
                    status: 'warning',
                    duration: 1000,
                    isClosable: true,
                })
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: "Something gone wrong!",
                status: 'error',
                duration: 1000,
                isClosable: true,
            })
            console.log(error);
        }
    };

    useEffect(() => {
        const checkLoggedIn = async () => {
            const res = await fetch('http://localhost:8000/api/v1/authentication/verify', {
                method: 'POST',
                credentials: 'include',
            });
            if (res.status === 200) {
                navigate('/board')
            }
        }
        checkLoggedIn();
    }, [])

    return (
        <>
            <Helmet>
                <title>Baa - Authentication Page</title>
            </Helmet>

            <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
                <Heading color="#5e5d5c" as="h1" size="xs" mb="12">
                    You can create an account or log in to your existing account here.
                </Heading>
                <Tabs colorScheme="green" isFitted variant="enclosed">
                    <TabList>
                        <Tab>Login here</Tab>
                        <Tab>Register here</Tab>
                    </TabList>
                    <TabPanels>
                        {/* Login Form */}
                        <TabPanel mt="6">
                            <Formik
                                initialValues={{ email: "", password: "" }}
                                validationSchema={validationSchemaLogin}
                                onSubmit={submitSignIn}
                            >
                                {({ errors, touched, isSubmitting }) => (
                                    <Form>
                                        <Stack spacing="6">
                                            <Stack spacing="5">
                                                <FormControl isInvalid={!!errors.email && touched.email}>
                                                    <FormLabel htmlFor="email">Email</FormLabel>
                                                    <Field as={Input} id="email" name="email" type="email" placeholder="example@example.com" />
                                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                                                </FormControl>
                                                <FormControl isInvalid={!!errors.password && touched.password}>
                                                    <FormLabel htmlFor="password">Password</FormLabel>
                                                    <InputGroup size="md">
                                                        <Field
                                                            as={Input}
                                                            id="password"
                                                            name="password"
                                                            pr="4.5rem"
                                                            type={show ? "text" : "password"}
                                                            placeholder="Enter password"
                                                        />
                                                        <InputRightElement width="4.5rem">
                                                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                                {show ? "Hide" : "Show"}
                                                            </Button>
                                                        </InputRightElement>
                                                    </InputGroup>
                                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                                </FormControl>
                                            </Stack>
                                            <HStack justify="space-between">
                                                <Button onClick={() => navigate("/reset-password")} variant="text" size="sm">
                                                    Forgot password?
                                                </Button>
                                            </HStack>
                                            <Stack spacing="6">
                                                <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
                                                    Sign in
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Form>
                                )}
                            </Formik>
                        </TabPanel>

                        {/* Register Form */}
                        <TabPanel mt="6">
                            <Formik
                                initialValues={{ remail: "", rpassword: "" }}
                                validationSchema={validationSchemaRegister}
                                onSubmit={submitSignUp}
                            >
                                {({ errors, touched, isSubmitting }) => (
                                    <Form>
                                        <Stack spacing="6">
                                            <Stack spacing="5">
                                                <FormControl isInvalid={!!errors.remail && touched.remail}>
                                                    <FormLabel htmlFor="remail">Email</FormLabel>
                                                    <Field as={Input} id="remail" name="remail" type="remail" placeholder="example@example.com" />
                                                    <FormErrorMessage>{errors.remail}</FormErrorMessage>
                                                </FormControl>
                                                <FormControl isInvalid={!!errors.rpassword && touched.rpassword}>
                                                    <FormLabel htmlFor="password">Password</FormLabel>
                                                    <InputGroup size="md">
                                                        <Field
                                                            as={Input}
                                                            id="fpassword"
                                                            name="rpassword"
                                                            pr="4.5rem"
                                                            type={show ? "text" : "password"}
                                                            placeholder="Enter password"
                                                        />
                                                        <InputRightElement width="4.5rem">
                                                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                                {show ? "Hide" : "Show"}
                                                            </Button>
                                                        </InputRightElement>
                                                    </InputGroup>
                                                    <FormErrorMessage>{errors.rpassword}</FormErrorMessage>
                                                </FormControl>
                                            </Stack>
                                            <Stack spacing="6">
                                                <Button colorScheme="green" type="submit" isLoading={isSubmitting}>
                                                    Sign up
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Form>
                                )}
                            </Formik>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </>
    );
}
