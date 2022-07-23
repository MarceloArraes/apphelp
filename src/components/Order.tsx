import { HStack, Text, ITextProps, useTheme, Box, VStack, Circle, Pressable, IPressableProps } from 'native-base';
import {ClockAfternoon, Hourglass, CircleWavyCheck} from 'phosphor-react-native'


export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
}

type Props = IPressableProps & {
  data: OrderProps;

}


export function Order({ data, ...rest }: Props) {
  const { colors } = useTheme();

  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.primary[300];


  return (
    <Pressable {...rest}>
    <HStack
      bg='gray.600'
      mb={4}
      alignItems={'center'}
      justifyContent={'space-between'}
      rounded='sm'
      overflow={'hidden'}
    >
      <Box h='full' w={2} bg={statusColor} />
      <VStack flex={1} my={5} ml={5}>
          <Text color={'white'} fontSize={'md'}>
            Patrimônio {data.patrimony}
          </Text>

        <HStack space={5}>
          <ClockAfternoon size={24} color={'white'} />
          <Text color={'gray.200'} fontSize={'xs'}>{data.when}</Text>
        </HStack>
      </VStack>
      <Circle bg='gray.500' h={12} w={12} mr={5}>
          {data.status === 'closed' ?
            <CircleWavyCheck size={24} color={'white'} />
            : <Hourglass size={24} color={'white'} />}
      </Circle>
      </HStack>
      </Pressable>
  );
}