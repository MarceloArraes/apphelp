import { VStack} from 'native-base';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Header } from './Header';


export function Register() {

  return (
    <VStack
      flex={1}
      p={6}
      bg="gray.600"
    >
      <Header title={'Header'} />
      <Input
        placeholder={'Numero do Patrimonio'}
        mt={5}
      />
      <Input
        placeholder={'Descrição do problema'}
        flex={1}
        mt={5}
        multiline={true}
        textAlignVertical={'top'}
      />
      <Button
        title="Cadastrar"
        mt={5}

      />
    </VStack>
  );
}