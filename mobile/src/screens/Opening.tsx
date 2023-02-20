import { Text, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font';
import styled from 'styled-components/native';
import styles from '$styles/global'
import {useNavigation} from '@react-navigation/native';

const OpeningScreen = () => {
    const navigation = useNavigation()
    const [fontsLoaded] = useFonts({
        'Barlow-SemiBold': require('../../assets/fonts/Barlow-SemiBold.ttf'),
      });

    if (fontsLoaded) {

        return (
        <StyledSafeAreaView>
            <Container>
                <HomeImage
                    source={require('../../assets/onboarding.png')}
                />
                <BrandingText>Budding</BrandingText>
                <SubHeadingText>Explore your community together.</SubHeadingText>
                <LetsGoButton onPress={()=>navigation.navigate('Login')}>
                    <ButtonText>Let's Go  {'>'}</ButtonText>
                </LetsGoButton>
                <TempButton onPress={()=>navigation.navigate('Main')}>
                    <ButtonText>Go to Main page (temp button)</ButtonText>
                </TempButton>
            </Container>
        </StyledSafeAreaView>
    )
    }  
    return <SafeAreaView><Text>Loading</Text></SafeAreaView>
}

export default OpeningScreen

const StyledSafeAreaView  = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
`
const HomeImage = styled.Image`
  height: 58%;
  width: 100%;
`

const BrandingText = styled.Text`
  color: ${styles.colors.primary};
  font-size: 50px;
  text-align: center;
  font-family: "Barlow-SemiBold";
  margin-top: 20px;
`

const SubHeadingText = styled.Text`
  font-size: 14px;
  text-align: center;
  font-family: "Barlow-SemiBold";
  margin-top: 8px;
`

const LetsGoButton = styled.Pressable`
  background-color: ${styles.colors.primary};
  padding: 12px;
  border-radius: 15px;
  width: 40%;
  margin-top: 80px;
`

const TempButton = styled(LetsGoButton)`
  margin-top:20px;
`

const ButtonText = styled.Text`
  color: white;
  font-family: "Barlow-SemiBold";
  text-align: center;
  font-size: 16px;
`

