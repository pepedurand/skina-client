import { Box, Text } from "@chakra-ui/react";

export const ItemCard = () => {
  return (
    <Box alignItems="center" padding="10px">
      <Text fontSize="18px">Combo especial de natal</Text>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop="6px"
      >
        <Text width="200px">
          2 pizzas super GG, 2 brotos doce e 2 refris, 3 medias doces
        </Text>
        <Text fontSize="18px" fontFamily="Chewy" color="#901313">
          R$ 120,00
        </Text>
      </Box>
    </Box>
  );
};
