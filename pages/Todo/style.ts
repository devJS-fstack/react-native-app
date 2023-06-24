import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 220,
        flexDirection: "column",
        alignItems: "center",
    },
    appBar: {
        width: "100%",
        height: 200,
        backgroundColor: "#222",
    },
    centerLogo: {
        width: 120,
        height: 120,
        bottom: 60,
    },
    addNoteIcon: {
        width: 60,
        height: 60,
        bottom: 30,
    },
    todoBodyWrapper: {
        height: "80%",
        alignItems: "center",
        marginTop: 30,
    },
    todoBody: {
        height: "80%",
        width: "85%",
        backgroundColor: "white",
        borderRadius: 20,
    },
    headingBody: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomWidth: 1,
        borderStyle: "solid",
    },
    taskTodo: {
        fontFamily: "Poppins Bold",
        fontSize: 14,
    },
    taskProgress: {
        color: "#0052CC",
    },
    taskDone: {
        color: "#00875A",
    },
    listTaskWrapper: {
        height: 480,
        alignItems: "center",
        marginTop: 10,
    },
    headingRow: {
        width: "95%",
        height: 45,
        backgroundColor: "#d9d9d9",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15,
        paddingRight: 100,
    },
    idHeading: {
        right: 2,
    },
    dateHeading: {
        right: 8,
    },
    taskNameHeading: {
        left: 70,
    },
    taskList: {
        width: "95%",
        marginTop: 10,
    },
    taskItem: {
        marginTop: 8,
        height: 45,
        backgroundColor: "#EEEEEE",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 15,
    },
    nameTask: {
        width: 120,
    },
    overlay: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.33)",
        position: "absolute",
        opacity: 0.9,
    },
});
