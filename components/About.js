import { Text, View, StyleSheet, Image } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.about}>ABOUT ME</Text>
      <Text style={styles.text}>I’m a passionate student who loves learning new things, especially in technology and design. I always aim to improve myself and explore creative ideas.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    margin: 10,
    gap:10,
    alignItems: 'start',
    justifyContent: 'center',
    padding: 15,
    borderRadius:10,
  },
  about:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    marginBottom:5,
    fontWeight: 'semi-bold',
  },
});
