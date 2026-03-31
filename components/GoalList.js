// GoalList.js
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

function GoalList(props) {
  return (
    <View style={styles.goalListContainer}>
      <FlatList
        data={props.goals}
        renderItem={(itemData) => (
          <GoalItem
            text={itemData.item.text}
            id={itemData.item.key}
            onDelete={props.onDeleteGoal}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalListContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default GoalList;