import { Text, View, StyleSheet, Image } from 'react-native';

export default function Skills() {
  return (
    <View style={styles.container}>
      <Text style={styles.skill}>SKILLS</Text>
      <View style={styles.skillCont}>
        <Text style={styles.text}>REACT</Text>
        <Text style={styles.text}>Front-End</Text>
        <Text style={styles.text}>Java</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap:10,
    marginHorizontal: 10,
    alignItems: 'start',
    justifyContent: 'center',
    padding: 20,
  },
  skill: {
    color:'white',
    fontSize: 18,
    marginBottom:5,
    fontWeight: 'bold',
  },
  skillCont:{
    
    flexDirection:'row',
    alignItems: 'start',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 14,
    padding:10,
    paddingHorizontal:20,
    backgroundColor:'white',
    marginBottom:5,
    fontWeight: 'semi-bold',
    borderRadius:100,
  },
});
