// GoalItem.js
import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onPress={() => props.onDelete(props.id)}>
      <View style={styles.goalItem}>
        
        {/* LEFT: Goal Text */}
        <Text style={styles.goalText}>{props.text}</Text>

        {/* RIGHT: Delete Hint */}
        <Text style={styles.deleteText}>Delete</Text>

      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',

   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  goalText: {
    color: '#1E293B',
    fontSize: 16,
  },

  deleteText: {
    fontSize: 13,
    color: '#EF4444',
    fontWeight: '600',
  },
});

export default GoalItem;