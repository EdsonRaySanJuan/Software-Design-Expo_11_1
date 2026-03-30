import { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import Header from './components/Header';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText.trim().length === 0) return;
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== id)
    );
  }

  return (
    <View style={styles.appContainer}>
      <Header />
      <GoalInput onAddGoal={addGoalHandler} />
      <Text style={styles.counter}>Total Goals: {courseGoals.length}</Text>
      <GoalList goals={courseGoals} onDeleteGoal={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f7faf7',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 15,
    alignSelf: 'center',
  },
  counter: {
    fontSize: 13,
    fontWeight: '500',
    color: '#2d6e3a',
    backgroundColor: '#dff0df',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
});