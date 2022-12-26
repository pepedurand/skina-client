import { Box, Text } from "@chakra-ui/react";

interface ItemCardProps {
  title: string;
  details?: string;
  price: number;
  basePrice?: number;
}

export const ItemCard = ({
  title,
  details,
  price,
  basePrice,
}: ItemCardProps) => {
  return (
    <Box alignItems="center" padding="10px" height="101px" bgColor="#FFB800">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop="6px"
      >
        <Text fontSize="18px">{title}</Text>

        <Text fontSize="18px" fontFamily="Chewy" color="#901313">
          R$ {basePrice ? price + basePrice : price}
        </Text>
      </Box>
      {details ?? (
        <Text width="200px" height="48px" fontSize="14px">
          {details}
        </Text>
      )}
    </Box>
  );
};
