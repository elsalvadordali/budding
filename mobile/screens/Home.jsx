import { Image, Pressable, Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font';

export default Home = () => {
    const [fontsLoaded] = useFonts({
        'Barlow-SemiBold': require('../assets/fonts/Barlow-SemiBold.ttf'),
      });

    if (fontsLoaded) {
    return (
        <SafeAreaView style={styles.big}>
            <View style={styles.container}>
                <Image 
                    source={require('../assets/onboarding.png')}
                    style={styles.img}
                />
                <Text style={styles.branding}>Budding</Text>
                <Text style={styles.subHeading}>Explore your community together.</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Let's Go  {'>'}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
    }  
    return <SafeAreaView><Text>Loading</Text></SafeAreaView>
}



const styles = StyleSheet.create({
    big: {
        width: "100%",
        height: "100%",
    },
    container: {
        width: "100%",
        height:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    img: {
        height: "58%",
        width: "100%"
    },
    branding: {
        color: "#425547",
        fontSize: 50,
        textAlign: "center",
        fontFamily: "Barlow-SemiBold",
        marginTop: 20
    },
    subHeading: {
        fontSize: 14,
        textAlign: "center",
        fontFamily: "Barlow-SemiBold",
        marginTop: 8
    },
    button: {
        backgroundColor: "#425547",
        padding: 12,
        borderRadius: 15,
        width: "40%",
        marginTop: 80
    },
    buttonText: {
        color: "white",
        fontFamily: "Barlow-SemiBold",
        textAlign: "center",
        fontSize: 16
    }
})