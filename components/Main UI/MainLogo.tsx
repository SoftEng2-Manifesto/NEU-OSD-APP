import { Image, StyleSheet, View } from "react-native";

const MainLogo = () => {
    return(
        <View style = {styles.container}>
            <Image
                style = {styles.logo}
                source={require('@/assets/images/neu-logo.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 65,
    },
    logo: {
        height: 200,
        width: 200,
    }
});

export default MainLogo;