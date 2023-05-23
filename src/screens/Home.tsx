import { HStack, IconButton, Text, useTheme, VStack, Heading, FlatList, Center, Alert } from 'native-base';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { SignOut, ChatTeardropText} from 'phosphor-react-native'
import {Filter} from '../components/Filter';
import {Order, OrderProps} from '../components/Order';
import { Button } from '../components/Button';
import {useNavigation} from '@react-navigation/native'

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const navigation = useNavigation();
  const [orders, setOrders] = useState<OrderProps[]>([
    {
    id: '1',
    patrimony: '12345',
    when: '28/05/2023 as 10:00',
    status: 'open',
    },
        {
    id: '2',
    patrimony: '12sdasd',
    when: '15/08/2023 as 10:00',
    status: 'closed',
    },
            {
    id: '3',
    patrimony: 'dfgdfg45',
    when: '28/05/2023 as 10:00',
    status: 'open',
    },
                {
    id: '4',
    patrimony: '!!!!',
    when: '28/05/2023 as 10:00',
    status: 'closed',
  },
                {
    id: '5',
    patrimony: '!!!!',
    when: '28/05/2023 as 10:00',
    status: 'closed',
  },
                {
    id: '6',
    patrimony: '!!!!',
    when: '28/05/2023 as 10:00',
    status: 'closed',
  },
                {
    id: '7',
    patrimony: '!!!!',
    when: '28/05/2023 as 10:00',
    status: 'closed',
  },
  ]);

  function handleNewOrder() {
    navigation.navigate('new');
  }
  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', {orderId});
  }

  function handleLogout() {
    auth()
     .signOut()
     .catch (error => {
     console.log(error);
    return Alert(error.message);
    });
    console.log('logout');

  }

  const {colors} = useTheme();
  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack width={'full'}
        bg="gray.600"
        justifyContent={'space-between'}
        alignItems={'center'}
        pt={12}
        pb={5}
        px={6}
      >
        {/* <Logo width={'100%'} /> */}

        <IconButton
          size={26}
          icon={<SignOut size={26} color={colors.gray[300]} />}
          onPress={handleLogout} />
      </HStack>

      <VStack flex={1} px={6} >
        <HStack width={'full'}
          justifyContent={'space-between'}
          alignItems={'center'}
          mt={8}
          mb={6}>
          <Heading color="gray.100">
          Meus chamados
          </Heading>
            <Text
              color="gray.200">
              3
            </Text>
        </HStack>
      <HStack space={3} mb={8}>
          <Filter
            title="Aberto"
            type="open"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            title="Fechado"
            type="close"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} onPress={()=>handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText size={55} color={colors.gray[300]} />
              <Text fontSize={'xl'}
                color={colors.gray[300]}
                mt={6}
                textAlign={'center'}
              >
                Nenhum chamado encontrado
                {statusSelected === 'open' ? ' em aberto' : ' fechado'}
              </Text>
            </Center>
        )}
        />
      </VStack>
      <Button title={"Nova Solicitação!"} onPress={handleNewOrder} marginY={5} />
      <Button title={"Signin"} onPress={()=>navigation.navigate('signin')}  />
    </VStack>
  );
}