import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { useActivateEmail } from '../../api/auth-api';

export interface ActivationPageProps {}

export const ActivationPage: React.FC<ActivationPageProps> = () => {
  const [isTokenMissing, setIsTokenMissing] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  const {
    mutate: activateEmail,
    isLoading,
    isError,
    isSuccess,
  } = useActivateEmail();

  useEffect(() => {
    if (token) {
      activateEmail({ token });
    } else {
      setIsTokenMissing(true);
    }
  }, [token, activateEmail]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }
  }, [isSuccess, navigate]);

  return (
    <HStack justify="center" height="100vh">
      <VStack align="center" minWidth={640}>
        {isLoading ? (
          <Text as="h1" fontSize="xl">
            Processing...
          </Text>
        ) : null}
        {isError || isTokenMissing ? (
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Failed to activate
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Your token is either expired or invalid.
            </AlertDescription>
          </Alert>
        ) : null}
        {isSuccess ? (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Your account has been activated
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              You will be redirected to Login page in 5 seconds.
            </AlertDescription>
          </Alert>
        ) : null}
      </VStack>
    </HStack>
  );
};
