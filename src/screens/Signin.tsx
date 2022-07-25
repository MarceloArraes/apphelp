import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react'
import Logo from '../assets/logo_primary.svg'
import {Input} from '../components/Input'
import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';

export const Signin = () => {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    if(!email || !password) return Alert.alert('Please fill all fields');

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Signed in');
      }
    )
      .catch(error => {
        console.log(error);
      }
    );
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="md" mb={6} mt={20}>
        Signin
      </Heading>
      <Input
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        mb={5} ml={4}
        InputLeftElement={<Icon marginLeft={'2.5'} as={<Envelope color={colors.gray[300]} />} />}
      />
      <Input
        placeholder="senha"
        value={password}
        onChangeText={setPassword}
        mb={8} ml={4}
        secureTextEntry
        InputLeftElement={<Icon marginLeft={'2.5'} as={<Key color={colors.gray[300]} />} />}
      />
      <Button title={"Submit"} mb={4} onPress={handleSignin} />
      <Button title={"Hello World"} mb={4}  />
    </VStack>
  )
}
