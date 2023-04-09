import { Flex } from "@chakra-ui/react"
import AuthButtons from "./AuthButtons"
import AuthModal from "@/components/Modal/Auth/AuthModal"

type Props = {}

const RightContent = (props: Props) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                <AuthButtons />
            </Flex>
        </>
    )
}

export default RightContent