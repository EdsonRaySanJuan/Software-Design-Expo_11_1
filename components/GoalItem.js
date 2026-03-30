import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable onPress={() => props.onDelete(props.id)}>
      <View style={styles.goalItem}>
        <View style={styles.leftRow}>
          <View style={styles.dot} />
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
        <Text style={styles.deleteText}>Delete</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d4e8d4',
    borderRadius: 12,
    padding: 14,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4a9a5a',
  },
  goalText: {
    color: '#1a2e1a',
    fontSize: 14,
  },
  deleteText: {
    fontSize: 12,
    color: '#c0392b',
    backgroundColor: '#fdf0ef',
    borderWidth: 1,
    borderColor: '#f5c6c3',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    overflow: 'hidden',
  },
});

export default GoalItem;