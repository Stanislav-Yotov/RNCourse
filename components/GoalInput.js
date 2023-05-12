import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    };

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput  
                style={styles.textInput} 
                placeholder='Your course goal' 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
                <Button 
                title='Add Goal!'
                onPress={addGoalHandler}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },    
})

export default GoalInput;