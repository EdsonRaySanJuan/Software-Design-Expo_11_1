import { View, Text, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Course Goals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1a2e1a',
    paddingVertical: 18,
    paddingHorizontal: 20,
    
  },
  title: {
    color: '#a8d5a2',
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});

export default Header;