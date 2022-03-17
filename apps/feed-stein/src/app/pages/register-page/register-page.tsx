import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { AuthLayout } from '../../layouts/auth-layout';

export interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <AuthLayout description="The Ultimate RSS feed aggregator">
      <Flex justify="center" align="cengter" height="100%">
        <VStack
          align="flex-start"
          justify="center"
          minWidth={500}
          shouldWrapChildren
          sx={{
            '> div': {
              width: '100%',
            },
          }}
        >
          <Text fontSize="4xl" marginBottom={5}>
            Create account
          </Text>
          <FormControl marginBottom={5}>
            <FormLabel htmlFor="email">Your Email</FormLabel>
            <Input
              id="email"
              type="email"
              variant="solid-white"
              paddingX={6}
              paddingY={7}
            />
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel htmlFor="password">Your Password</FormLabel>
            <Input
              id="password"
              type="password"
              variant="solid-white"
              paddingX={6}
              paddingY={7}
            />
          </FormControl>
          <Button colorScheme="primary" display="block">
            Submit
          </Button>
        </VStack>
      </Flex>
    </AuthLayout>
  );
};
