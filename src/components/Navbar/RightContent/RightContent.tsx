import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import AuthButtons from "./AuthButtons";
import NavbarIcons from "./NavbarIcons";

type Props = {
    user?: User | null;
}

const RightContent = ({ user }: Props) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? <NavbarIcons /> : <AuthButtons />}
                {/* <Menu /> */}
            </Flex>
        </>
    )
}

export default RightContent