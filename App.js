// App.js
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

  // DELETE FUNCTION
  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key !== id)
    );
  }

  return (
    <View style={styles.appContainer}>
      <Header />

      <Image
        source={{ uri: 'https://www.softo.org/imgs/blog/2023/07/1690190032univer-png.png' }}
        style={styles.logo}
      />

      <GoalInput onAddGoal={addGoalHandler} />

      {/* COUNTER */}
      <Text style={styles.counter}>
        Total Goals: {courseGoals.length}
      </Text>

      <GoalList goals={courseGoals} onDeleteGoal={deleteGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 15,
    alignSelf: 'center',
  },
  counter: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 10,
  },
  
});