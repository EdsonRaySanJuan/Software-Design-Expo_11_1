// GoalInput.js
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');

  function textInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal..."
        placeholderTextColor="#aaa"
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredGoalText}
      />
      <Button title="ADD GOAL" onPress={addGoalHandler} color="#3b82f6" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', 
    color: '#1E293B',
  },
});

export default GoalInput;