import { Button, useColorMode } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Helmet>
                <title>
                    Baa - Home Page
                </title>
            </Helmet>
            <p>Home</p>
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </>
    )
}