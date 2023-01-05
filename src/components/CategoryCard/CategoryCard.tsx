import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { SIZES } from "../../utils";
import { AdminEditItem } from "../AdminEditItem";

interface CategoryCardProps {
  children?: JSX.Element[] | JSX.Element;
  size: string;
  description: string;
  price: number;
  isEditable?: boolean;
}

export const CategoryCard = ({
  children,
  size,
  description,
  isEditable,
  price,
}: CategoryCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const maxFlavoursInOnePizza = () => {
    if (size === SIZES.BROTO) {
      return `Até 1 sabor`;
    }
    if (size === (SIZES.MEDIA || SIZES.FAMILIA)) {
      return `Até 2 sabores`;
    }
    if (size === SIZES.SUPERGG) {
      return `Até 4 sabores`;
    }
  };

  const expandMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box w="300px" backgroundColor="#FFB800">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="110px"
      >
        <Image
          height="110px"
          src="https://www.discstore.com/media/catalog/product/cache/c88af0b9efa8c07a49eb968599ee58b3/d/s/ds_peperonipizza.jpg"
        />
        <Box display="flex" flexDir="column" alignItems="center">
          <Text fontFamily="Fugaz One" color="#901313" fontSize="18px">
            {isEditable ? (
              <AdminEditItem isCategoryCard textOrValue={size} />
            ) : (
              <>{size}</>
            )}
          </Text>
          <Text fontSize="14px">
            {isEditable ? (
              <AdminEditItem isCategoryCard textOrValue={description} />
            ) : (
              <>{description}</>
            )}
          </Text>
          <Text fontSize="12px">{maxFlavoursInOnePizza()}</Text>
          <Box display="flex">
            <Text fontSize="12px">A partir de</Text>
            <Text
              marginLeft="4px"
              fontSize="18px"
              fontFamily="Chewy"
              color="#901313"
            >
              <Box display="flex" alignItems="center" width="69px">
                <Box marginRight="5px">R$</Box>
                {isEditable ? (
                  <AdminEditItem
                    isCategoryCard
                    textOrValue={`${price.toFixed(2)}`}
                  />
                ) : (
                  <>{`${price.toFixed(2)}`}</>
                )}
              </Box>
            </Text>
          </Box>
        </Box>
        {isMenuOpen ? (
          <ChevronUpIcon onClick={expandMenu} width="30px" />
        ) : (
          <ChevronDownIcon onClick={expandMenu} width="30px" />
        )}
      </Box>
      <Collapse in={isMenuOpen} animateOpacity>
        {children}
      </Collapse>
    </Box>
  );
};
