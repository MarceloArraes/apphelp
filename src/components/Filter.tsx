import { VStack, Text, IButtonProps, Button, useTheme } from 'native-base';

type Props = IButtonProps & {
  title: string,
  isActive?: boolean,
  type: 'open' | 'close'
}

export function Filter({ title, isActive, type, ...rest }: Props) {
  const { colors } = useTheme();

  const colorType = type === 'open' ? colors.secondary[700] : colors.primary[300];

  return (
    <Button
      flex={1}
      variant={'outline'}
      size={'sm'}
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor='gray.600'
      h={14}
      rounded="sm"
      _pressed={{ bg: isActive ? 'green.500' : 'gray.500' }}
      {...rest}
    >
      <Text
        color={isActive ? colorType : 'gray.300'}
        fontSize="xs"
        textTransform={'uppercase'}
      >{title}</Text>

    </Button>
  );
}