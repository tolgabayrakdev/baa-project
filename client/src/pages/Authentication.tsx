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
    FormErrorMessage
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup"; 

export default function Authentication() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    // Validation schema for Formik
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    });

    // SignInRequest
    const submitSignIn = async (values: { email: string, password: string }) => {
        try {
            console.log("SignIn Values:", values);
            // Add your login logic here
        } catch (error) {
            console.log(error);
        }
    };

    // SignUpRequest
    const submitSignUp = async (values: { email: string, password: string }) => {
        try {
            console.log("SignUp Values:", values);
            // Add your registration logic here
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Baa - Authentication Page</title>
            </Helmet>

            <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
                <Heading as="h1" size="xs" mb="12">
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
                                validationSchema={validationSchema}
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
                                                <Button variant="text" size="sm">
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
                                initialValues={{ email: "", password: "" }}
                                validationSchema={validationSchema}
                                onSubmit={submitSignUp}
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
