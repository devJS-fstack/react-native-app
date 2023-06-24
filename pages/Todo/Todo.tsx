import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { listToDo } from "./mockData";

const Todo = () => {
    const onLongPressItem = () => {
        console.log("Press Long");
    }
    return (
        <>
        <View style={styles.header}>
            <View style={styles.appBar}>
            </View>
            <Image source={require("../../assets/images/note.png")} style={styles.centerLogo}/>
        </View>
        <View style={styles.todoBodyWrapper}>
            <View style={styles.todoBody}>
                <View style={styles.headingBody}>
                    <Text style={styles.taskTodo}>All Task (8)</Text>
                    <Text style={[styles.taskTodo, styles.taskProgress]}>To Do</Text>
                    <Text style={[styles.taskTodo, styles.taskProgress]}>In Progress</Text>
                    <Text style={[styles.taskTodo, styles.taskDone]}>Done</Text>
                </View>
                <View style={styles.listTaskWrapper}>
                    <View style={styles.headingRow}>
                        <Text style={[styles.taskTodo, styles.idHeading]}>ID</Text>
                        <Text style={[styles.taskTodo, styles.dateHeading]}>Date</Text>
                        <Text style={[styles.taskTodo, styles.taskNameHeading]}>Name</Text>
                    </View>
                    <ScrollView style={styles.taskList}>
                        {
                            listToDo.map(item => (
                                <TouchableOpacity style={styles.taskItem} key={item._id} activeOpacity={0.6} onLongPress={onLongPressItem}>
                                    <Text style={styles.taskTodo}>{item._id}</Text>
                                    <Text style={[styles.taskTodo]}>{item.date}</Text>
                                    <Text numberOfLines={1} style={[styles.taskTodo, styles.nameTask]}>{item.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
            <View>
                <TouchableOpacity activeOpacity={0.7}>
                    <Image source={require("../../assets/images/add_note.png")} style={styles.addNoteIcon}/>
                </TouchableOpacity>
            </View>
        </View>
            
        </>
    )
}

export default Todo