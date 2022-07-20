import { VStack, Heading } from 'native-base';
import React from 'react'

export const Signin = () => {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Heading color="gray.100" fontSize="md" mb={6} mt={20}>
        Signin
      </Heading>
    </VStack>
  )
}
