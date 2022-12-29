import { Box, Text } from "@chakra-ui/react";
import { AdminEditItem } from "../AdminEditItem";

interface ItemCardProps {
  title: string;
  details?: string;
  price: number;
  basePrice?: number;
  isEditable?: boolean;
}

export const ItemCard = ({
  title,
  details,
  price,
  basePrice,
  isEditable,
}: ItemCardProps) => {
  const finalPrice = `${(basePrice ? price + basePrice : price).toFixed(2)}`;

  return (
    <Box alignItems="center" padding="10px" height="101px" bgColor="#FFB800">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="40px"
      >
        <Text fontSize="18px" maxWidth="220px">
          {isEditable ? <AdminEditItem textOrValue={title} /> : <>{title}</>}
        </Text>

        <Text
          fontSize="18px"
          fontFamily="Chewy"
          color="#901313"
          height="30px"
          width="80px"
        >
          <Box display="flex" alignItems="center">
            <Box marginRight="5px">R$</Box>
            {isEditable ? (
              <AdminEditItem textOrValue={finalPrice} />
            ) : (
              <>{finalPrice}</>
            )}
          </Box>
        </Text>
      </Box>
      {details && (
        <Text width="200px" height="50px" fontSize="14px">
          {isEditable ? (
            <AdminEditItem textOrValue={details} isDescription />
          ) : (
            <>{details}</>
          )}
        </Text>
      )}
    </Box>
  );
};
