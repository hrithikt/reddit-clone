import { Flex, Image } from '@chakra-ui/react'
import SearchInput from './SearchInput'
import RightContent from './RightContent/RightContent'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/clientApp'

type Props = {}

const Navbar = (props: Props) => {
    const [user, loading, error] = useAuthState(auth); 

    return (
        <Flex bg="white" height="44px" padding="6px 12px">
            <Flex align="center">
                <Image src='/images/redditFace.svg' height="30px" alt='Reddit Logo' />
                <Image src='/images/redditText.svg' height="46px"
                    display={{ base: "none", md: "unset" }}
                    alt='reddit Text' />
            </Flex>
            <SearchInput />
            {/* <Directory /> */}
            <RightContent user={user} />
        </Flex>
    )
}

export default Navbar