import { View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SearchBar = () => {
    return (
        <View style={styles.row}>
            <View style={styles.input}>
                <TextInput
                    style={styles.textinput}
                    returnKeyType="search"
                    keyboardType="default"
                    placeholder="Search Student Name/ID NO."
                    placeholderTextColor="#aaa"
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Image
                        style={styles.camera}
                        source={require('@/assets/images/camera.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        marginVertical: 70,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 10,
    },
    input: {
        height: 50,
        width: "75%", 
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        marginRight: 10,
        paddingHorizontal: 10,
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
    },
    camera: {
        height: 25,
        width: 25,
    },
    textinput: {
        height: "100%",
        fontSize: 15,
        color: "#333",
    },
});

export default SearchBar;