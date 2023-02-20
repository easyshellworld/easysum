import * as React from 'react';
import { Text, View, StyleSheet, Image,Button,TextInput} from 'react-native';

export default function MySum() {
  const [value, onChangeText] = React.useState('');
  const [sum, setSum] = React.useState(0);
 // let sum=React.useState('0')
  return (
    <View style={styles.container}>
       
      <Text style={styles.paragraph}>
       {sum}
      </Text>
       <TextInput
        style={{ height: 60, width:200,borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
       />
      <Button  
       onPress={()=>{
           setSum(eval('sum='+value))
           }}
       title="getsum"
       color="#841584"/>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
