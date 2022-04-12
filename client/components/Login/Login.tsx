import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput } from 'react-native'
import { auth, createUser, signIn } from '../../firebase'
import { Button, useTheme } from 'react-native-elements'


export default function LoginScreen() {
  const theme = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation: any = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    createUser(auth, email, password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch((error: { message: any }) => alert(error.message))
  }

  const handleLogin = () => {
    signIn(auth, email, password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch((error: { message: any }) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
      />

      <Button
        onPress={handleLogin}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        title={'Login'}
      />

      <Button
        onPress={handleSignUp}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        title={'Register'}
        type='outline'
      />


    </KeyboardAvoidingView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500
  },
  inputContainer: {
    width: '100%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    // width: '100%',
    marginTop: 20,
  },
  button: {
    // backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})

