import { Text, View, StyleSheet, Image } from 'react-native';

export default function Achievements() {
  return (
    <View style={styles.container}>
      <Text style={styles.achievements}>ACHIEVEMENTS</Text>
      <Text style={styles.text}>N/A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap:10,
    margin: 10,
    alignItems: 'start',
    backgroundColor:'white',
    justifyContent: 'center',
    padding: 20,
    borderRadius:10,
  },
  achievements: {
    fontSize: 18,
    marginBottom:5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginBottom:5,
    fontWeight: 'semi-bold',
  },
});
