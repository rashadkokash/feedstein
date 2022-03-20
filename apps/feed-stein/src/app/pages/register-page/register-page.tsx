import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { registerUserSchema } from '@feedstein/validation';

import { AuthLayout } from '../../layouts/auth-layout';
import { useRegisterUser } from '../../api/auth-api';

export interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = () => {
  const { mutateAsync: registerUser } = useRegisterUser();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (data, formikHelpers) => {
      try {
        await registerUser(data);
        formikHelpers.resetForm({});
      } catch {
        alert('error');
      }
    },
    validationSchema: registerUserSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

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
          <form onSubmit={formik.handleSubmit}>
            <FormControl
              isInvalid={Boolean(formik.errors.email)}
              marginBottom={5}
            >
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                variant="solid-white"
                paddingX={6}
                paddingY={7}
              />
              {formik.errors.email ? (
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl
              isInvalid={Boolean(formik.errors.password)}
              marginBottom={5}
            >
              <FormLabel htmlFor="password">Your Password</FormLabel>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                variant="solid-white"
                paddingX={6}
                paddingY={7}
              />
              {formik.errors.password ? (
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              ) : null}
            </FormControl>
            <Button type="submit" colorScheme="primary" display="block">
              Submit
            </Button>
          </form>
        </VStack>
      </Flex>
    </AuthLayout>
  );
};
