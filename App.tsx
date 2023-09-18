import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// Define a TypeScript interface for the props
interface UserProps {
  name: string;
}

const App = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState(false);

  const reset = () => {
    setDisplay(false);
    setEmail("");
    setName("");
    setPass("")
  }

  return (
    <View>
      <Text style={{ fontSize: 35 }}>Handling TextInput</Text>
      <TextInput value={name} placeholder='Enter your name' style={styles.textInput} onChangeText={(text) => setName(text)} />
      <TextInput value={email} placeholder='Enter your email' style={styles.textInput} onChangeText={(text) => setEmail(text)} />
      <TextInput value={pass} secureTextEntry={true} placeholder='Enter your password' style={styles.textInput} onChangeText={(text) => setPass(text)} />
      <View style={{marginBottom:10}} >
        <Button title='Print Details' color={'green'} onPress={()=>setDisplay(true)}/>
      </View>
      <Button title='Clear' onPress={reset} />
      <View>
          {
            display ?
            <View>
              <Text style={{fontSize:15}}>Name: {name}</Text>
              <Text style={{fontSize:15}}>Email: {email}</Text>
              <Text style={{fontSize:15}}>Pass: {pass}</Text>
            </View>
            : null
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10
  }
})

// Annotate the User component with the UserProps interface

export default App;
