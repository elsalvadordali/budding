import { Text, ScrollView, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font';
import styled from 'styled-components/native';
import styles from '$styles/global'
import {useNavigation} from '@react-navigation/native';
import { Budding, ShortButton, ButtonText, SmallText } from '../styles/elements'
import { FlexCol, StyledSafeAreaView } from '../styles/containers';

const OpeningScreen = () => {
    const navigation = useNavigation()
    const [fontsLoaded] = useFonts({
        'Barlow-SemiBold': require('../../assets/fonts/Barlow-SemiBold.ttf'),
      });

    if (fontsLoaded) {

        return (
        <StyledSafeAreaView>
            <FlexCol>
                <HomeImage
                    source={require('../../assets/onboarding.png')}
                />
                <Budding>Budding</Budding>
                <SmallText>Explore your community together.</SmallText>
                <ShortButton onPress={()=>navigation.navigate('Login')}>
                    <ButtonText>Let's Go  {'>'}</ButtonText>
                </ShortButton>
                <ShortButton onPress={()=>navigation.navigate('Main')}>
                    <ButtonText>Go to Main page (temp button)</ButtonText>
                </ShortButton>
            </FlexCol>
        </StyledSafeAreaView>
    )
    }  
    return <SafeAreaView><Text>Loading</Text></SafeAreaView>
}

export default OpeningScreen


const HomeImage = styled.Image`
  height: 58%;
  width: 100%;
`

