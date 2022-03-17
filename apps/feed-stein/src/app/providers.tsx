import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

export interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
