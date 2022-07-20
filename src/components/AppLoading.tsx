import { Center, Spinner } from 'native-base';

export const AppLoading = () => {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner color="secondary.700" />
    </Center>
  );
}