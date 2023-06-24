import { useFonts } from "expo-font";
import { View, Text, Animated, ActivityIndicator, Pressable } from "react-native";
import { styles, spin } from "./style";

const Home = ({ navigation }) => {
        
    return (
        <View style={styles.container}>
            <View style={styles.main}>
            <View style={styles.wrapperContent}>
                <View style={styles.iconWrapper}>
                    <Animated.Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={[styles.icon, { transform: [ { rotate: spin }] }]}/>
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={[styles.title]}>Todo List Develop By React Native</Text>
                </View>
                <Pressable style={styles.button} onPress={() => { navigation.navigate("Todo") }}>
                    <Text style={styles.btnText}>Start</Text>
                </Pressable>
            </View>
            </View>
        </View>
    )
}

export default Home