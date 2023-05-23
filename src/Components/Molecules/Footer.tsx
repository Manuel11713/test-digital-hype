import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      position="absolute"
      bottom={0}
      height={100}
      bg="blue.300"
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white" fontWeight="bold">
        Jose Manuel Escobedo Lopez - tecolotedev
      </Text>
    </Box>
  );
};
