import { StyleSheet, Animated, Easing } from "react-native";

const spinValue = new Animated.Value(0);
Animated.loop(
    Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
    }),
).start();

export const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
});

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    main: {
        width: 310,
        height: 570,
        backgroundColor: "#222222",
        borderRadius: 20,
    },
    wrapperContent: {
        flexDirection: "column",
        alignItems: "center",
    },
    iconWrapper: {
        height: 80,
        marginTop: 80,
    },
    icon: {
        width: 80,
        height: "100%",
    },
    titleWrapper: {
        marginTop: 10,
    },
    title: {
        color: "white",
        fontSize: 16,
        fontFamily: "Poppins",
    },
    button: {
        width: 150,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        borderRadius: 15,
        backgroundColor: "#1AB8DB",
        marginTop: 280,
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontFamily: "Poppins Bold",
    },
});
