// Header.js
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
    padding: 15,
    backgroundColor: '#60A5FA', 
    marginBottom: 15,
    borderRadius: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;