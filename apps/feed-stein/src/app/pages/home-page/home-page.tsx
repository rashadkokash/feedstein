import { Box } from '@chakra-ui/react';

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Box bgColor="secondary.100">
      <h1>Home Page</h1>
    </Box>
  );
};
