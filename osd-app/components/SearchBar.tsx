import { View, Image, TextInput, TouchableOpacity, StyleSheet} from "react-native";

const SearchBar = () => {
    return (
        <View style = {styles.row}>
            <View style = {styles.input}>
                <TextInput
                returnKeyType = "search"
                keyboardType = "default"
                placeholder = "Search"
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Image
                        style = {styles.camera}
                        source={require('@/assets/images/camera.png')}
                        />
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    row: {
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    input: {
        justifyContent: "center",
        marginLeft: 20,
        height: 50,
        width: 250,
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        height: 50,
        width: 80,
        borderWidth: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    camera: {
        height: 30,
        width: 30,
    }
});

export default SearchBar;