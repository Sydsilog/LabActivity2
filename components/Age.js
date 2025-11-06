import { Text, View, StyleSheet, Image } from 'react-native';

export default function Age() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Age: 20</Text>
      <Text style={styles.text}>BSCS 3-4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap:40,
    marginTop:0,
    alignItems: 'start',
    justifyContent: 'center',
    paddingHorizontal:20,
    
  },
  text:{
    textAlign:'center',
    fontSize:10,
    fontWeight: 'bold',
    color:'black',
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:100,
  },
});
