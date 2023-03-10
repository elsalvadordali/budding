

import { SafeAreaView } from "react-native"
import { useState } from "react"
import { BlackText, Budding, LongButton, ButtonText, Input, Label, Logo, LinkText, SmallText } from '../../styles/elements'
import { Centered, CenteredCol, FlexCol, FlexRow, RowEnd, Spaced } from '../../styles/containers'

const Signup1 = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // write a function that takes a string and verifies it is a valid email address

    function validateEmail(email: string) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password: string) {
        return password.length > 8;
    }

    function validate() {
        return validateEmail(email) && validatePassword(password);
    }

    function handleSubmit() {
        if (validate()) {
            navigation.navigate('Signup2')
        }
    }




    return (
        <SafeAreaView>
            <CenteredCol>
                <FlexCol>
                    <Spaced>
                        <Centered>
                            <Logo 
                                source={require('../../../assets/flower-icon.png')} />
                            <Budding>Budding</Budding>
                        </Centered>
                        <Centered>
                            <SmallText>Explore your community together.</SmallText>
                        </Centered>
                    </Spaced>
                    <Spaced>
                        <Label>Email</Label>
                        <Input
                            placeholder='Email'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Label>Password</Label>
                        <Input
                            onChangeText={setPassword}
                            placeholder='Password'
                            secureTextEntry
                            value={password}
                        />
                        <LongButton 
                            color={password.length > 8 && email.length > 5 ? '#425547' : '#9CADA4'}
                            onPress={() => navigation.navigate('Signup2')}
                        >
                            <ButtonText>Continue</ButtonText>
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
export default Signup1;
