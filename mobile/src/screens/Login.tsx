

import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { useState } from "react"
import { BlackText, Budding, LongButton, ButtonText, Input, Label, Logo, LinkText, SmallText } from '../styles/elements'
import { Centered, CenteredCol, FlexCol, FlexRow, RowEnd, Spaced } from '../styles/containers'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView>
            <CenteredCol>
                <FlexCol>
                    <Spaced>
                        <Centered>
                            <Logo 
                                source={require('../../assets/flower-icon.png')} />
                            <Budding>Budding</Budding>
                        </Centered>
                        <Centered>
                            <SmallText>Explore your community together.</SmallText>
                        </Centered>
                    </Spaced>
                    <Spaced>
                        <Label>Username</Label>
                        <Input
                            placeholder='username'
                            value={username}
                            onChangeText={setUsername}
                        />
                        <Label>Password</Label>
                        <Input
                            onChangeText={setPassword}
                            placeholder='Password'
                            secureTextEntry
                            value={password}
                        />
                        <LongButton color={password.length > 8 && username.length > 3 ? '#425547' : '#9CADA4'}>
                            <ButtonText>Login</ButtonText>
                        </LongButton>
                        <RowEnd>
                            <LinkText>Forgot Password?</LinkText>
                        </RowEnd>
                    </Spaced>
                    <Spaced>
                        <FlexRow>
                            <BlackText>Not registered yet?</BlackText>
                            <LinkText>Create an account</LinkText>
                        </FlexRow>
                    </Spaced>
                </FlexCol>
            </CenteredCol>
        </SafeAreaView>
    )
}
export default Login;
