

import { SafeAreaView } from "react-native"
import { useState } from "react"
import { BlackText, Budding, LongButton, ButtonText, Input, Font40px, Label, Logo, LinkText, SmallLogo, SmallText, LargeIcon } from '../../styles/elements'
import { Centered, CenteredCol, FlexCol, FlexRow, RowEnd, Spaced } from '../../styles/containers'
import Selection from "../../components/Selection"


const Signup2 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <SafeAreaView>
            <CenteredCol>
                <FlexCol>
                   <Spaced>
                        <RowEnd>
                            <SmallLogo 
                                source={require('../../../assets/flower-icon.png')} />
                            <Font40px>Create Your Profile</Font40px>
                        </RowEnd>
                        </Spaced>
                        <Spaced>
                        <Centered>
                            <LargeIcon 
                                source={require('../../../assets/user.png')} />
                            
                        </Centered>
                        </Spaced>
                        <Spaced>
                            <Centered>
                                <SmallText>Set a profile photo</SmallText>
                            </Centered>
                        </Spaced>
                    <Spaced>
                        <Label>Gender</Label>
                        <Selection list={['hello', 'what']} />
                        <LongButton color={password.length > 8 && email.length > 5 ? '#425547' : '#9CADA4'}>
                            <ButtonText>Login</ButtonText>
                        </LongButton>
                        
                    </Spaced>
                </FlexCol>
            </CenteredCol>
        </SafeAreaView>
    )
}
export default Signup2;

