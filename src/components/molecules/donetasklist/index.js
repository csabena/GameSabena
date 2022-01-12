import { Text, TouchableOpacity, View } from 'react-native'

import React from 'react';
import { styles } from './styles';

const DoneTaskList = ({task}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textList}>{task.task}</Text>
        </View>
    )
}


export default DoneTaskList;