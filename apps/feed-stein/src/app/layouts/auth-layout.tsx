import React from 'react';
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';

export interface AuthLayoutProps {
  description?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  description,
}) => {
  return (
    <Grid
      templateColumns={'repeat(3, 1fr)'}
      templateRows={'repeat(1, 1fr)'}
      height="100vh"
      width="100vw"
    >
      <GridItem colSpan={1} position="relative">
        <Box marginTop={48} textAlign="center">
          <Image
            src="/assets/images/logo.png"
            display="inline"
            maxWidth={300}
          />
        </Box>
        {description ? (
          <Box marginTop={10} textAlign="center">
            <Text
              fontSize="2xl"
              color="gray.300"
              fontWeight="semibold"
              maxWidth={250}
              display="inline-block"
            >
              {description}
            </Text>
          </Box>
        ) : null}
        <Image
          src="/assets/images/register.png"
          maxWidth="100%"
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          margin="auto"
        />
      </GridItem>
      <GridItem colSpan={2} bgColor="gray.100">
        {children}
      </GridItem>
    </Grid>
  );
};
