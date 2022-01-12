import { Text, TouchableOpacity, View } from 'react-native'

import React from 'react';
import { styles } from './styles';

const TaskList = ({task, deleteTask}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textList}>{task.task}</Text>
            <TouchableOpacity style={styles.containerDelete} onPress={() => deleteTask && deleteTask(task.id)}>
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    )
}


export default TaskList;