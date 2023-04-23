import { authModalState } from '@/atoms/authModalAtom'
import { auth } from '@/firebase/clientApp'
import { FIREBASE_ERRORS } from '@/firebase/errors'
import { Button, Flex, Icon, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { BsDot, BsReddit } from 'react-icons/bs'
import { useSetRecoilState } from 'recoil'

type Props = {}

const ResetPassword = (props: Props) => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const success = await sendPasswordResetEmail(email);
        setSuccess(success);
    }

    return (
        <Flex direction="column" alignItems="center" width="100%">
            <Icon as={BsReddit} color="brand.100" fontSize={40} mb={2}></Icon>
            <Text
                fontWeight={700}
                mb={2}
            >
                Reset your password
            </Text>
            {success ? (
                <Text mb={4}>Check you email :)</Text>
            ) : (
                <>
                    <Text fontSize="sm" textAlign="center" mb={2}>
                        Enter the email associated with your account and we will send you a reset link
                    </Text>
                    <form onSubmit={onSubmit} style={{ width: "100%" }}>
                        <Input
                            required
                            name="email"
                            placeholder="email"
                            type="email"
                            mb={2}
                            fontSize="10pt"
                            bg="gray.50"
                            onChange={(event) => setEmail(event.target.value)}
                            _placeholder={{ color: "gray.500" }}
                            _hover={{
                                bg: "white",
                                border: "1px solid",
                                borderColor: "blue.500"
                            }}
                            _focus={{
                                outline: "none",
                                bg: "white",
                                border: "1px solid",
                                borderColor: "blue.500"
                            }}
                        />
                        <Text textAlign="center" fontSize="10pt" color="red">
                            {FIREBASE_ERRORS[
                                error?.message as keyof typeof FIREBASE_ERRORS
                            ]}
                        </Text>
                        <Button
                            width="100%"
                            height="36px"
                            mb={2}
                            mt={2}
                            type="submit"
                            isLoading={sending}
                        >
                            Reset Password
                        </Button>
                    </form>
                </>
            )}
            <Flex
                alignItems="center"
                fontSize="9pt"
                color="blue.500"
                fontWeight={700}
                cursor="pointer"
            >
                <Text
                    onClick={() => setAuthModalState((prev) => ({
                        ...prev,
                        view: "login"
                    }))}
                >
                    LOGIN
                </Text>
                <Icon as={BsDot}></Icon>
                <Text
                    onClick={() => setAuthModalState((prev) => ({
                        ...prev,
                        view: "signup"
                    }))}
                >
                    SIGN UP
                </Text>
            </Flex>
        </Flex>
    )
}

export default ResetPassword