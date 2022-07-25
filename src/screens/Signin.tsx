import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react'
import Logo from '../assets/logo_primary.svg'
import {Input} from '../components/Input'
import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';
import {useNavigation} from '@react-navigation/native'

export const Signin = () => {
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignin = () => {
    if(!email || !password) return Alert.alert('Please fill all fields');
    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Signed in');
        navigation.navigate('home');
      }
    )
      .catch(error => {
        console.log(error);
        setIsLoading(false);

        switch (error) {
          case error.code == 'auth/user-not-found':
            return Alert.alert('User not found');
          case error.code == 'auth/wrong-password':
            return Alert.alert('Wrong password');
          case error.code == 'auth/too-many-requests':
            return Alert.alert('Too many requests');
          case error.code == 'auth/invalid-email':
            return Alert.alert('Invalid email');
          default:
            break;
        }

        return Alert.alert(error.message);
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
      <Button isLoading={isLoading} title={"Submit"} mb={4} onPress={handleSignin} />
      <Button title={"Hello World"} mb={4}  />
    </VStack>
  )
}
