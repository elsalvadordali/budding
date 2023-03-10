

import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { useState } from "react"
import * as SecureStore from 'expo-secure-store'
import PocketBase from 'pocketbase'
import { BlackText, Budding, LongButton, ButtonText, Input, Label, Logo, LinkText, SmallText } from '../styles/elements'
import { Centered, CenteredCol, FlexCol, FlexRow, RowEnd, Spaced } from '../styles/containers'

const Login = ({ navigation }) => {
    //const navigation = useNavigation()

    const pb = new PocketBase('https://pb.tijana.me')


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   
    //const [token, setToken] = useState(pb.authStore.token);
    const [user, setUser] = useState(new PocketBase('https://pb.tijana.me'));

    async function authenticateUser(email: string, password: string) {
        const authData = await user.collection('users').authWithPassword('test@me.com', 'abcabcabc');
        if (user.authStore.isValid) {
            console.log(user.authStore.model?.email)
            await SecureStore.setItemAsync('user', JSON.stringify(user.authStore.model) );
        }
    }
 
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
                        <Label>Username {user.authStore.isValid.toString()}</Label>
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
                        <LongButton 
                            color={password.length > 8 && username.length > 3 ? '#425547' : '#9CADA4'}
                            onPress={() => authenticateUser('test@me.com', 'abcabcabc')}
                        >
                            <ButtonText>Login</ButtonText>
                        </LongButton>
                        <RowEnd>
                            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                                <LinkText>Forgot Password?</LinkText>
                            </Pressable>
                        </RowEnd>
                    </Spaced>
                    <Spaced>
                        <FlexRow>
                            <BlackText>Not registered yet?</BlackText>
                            <Pressable onPress={() => navigation.navigate('Signup1')}>
                                <LinkText>Create an account</LinkText>
                            </Pressable>
                        </FlexRow>
                    </Spaced>
                </FlexCol>
            </CenteredCol>
        </SafeAreaView>
    )
}
export default Login;
