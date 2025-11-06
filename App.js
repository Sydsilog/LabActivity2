import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm

// or any files within the Snack
import Age from './components/Age';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        STUDENT PROFILE
      </Text>
      <View style={styles.pfpContainer}>
        <Text style={styles.profile}>CS</Text>
      </View>
      <Text style={styles.name}>CHRISTOPHER T. SY</Text>
      <View>
        
        <Age />
        <About />
        <Achievements />
        <Skills />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 20,
    paddingTop:90,
  },
  pfpContainer:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:5,
    width:120,
    height:120,
    borderRadius:100,
    backgroundColor:'gray',
    borderColor:'#60A5FA',
  },
  profile:{
    textAlign:'center',
    fontSize:40,
    fontWeight: 'bold',
    color:'white',
    
  },
  name:{
    fontSize:25,
    fontWeight: 'bold',
    textAlign:'center',
    marginVertical:10,
    color:'white',
  },
  paragraph: {
   position:'absolute', 
    color:'white',
   top:15,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
