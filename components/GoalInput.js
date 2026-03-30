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
        placeholderTextColor="#6a8a6a"
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredGoalText}
      />
      <Button title="ADD GOAL" onPress={addGoalHandler} color="#4a9a5a" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a2e1a',
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 16,
    gap: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#243324',
    borderWidth: 1,
    borderColor: '#3a533a',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#a8d5a2',
    fontSize: 14,
  },
});

export default GoalInput;