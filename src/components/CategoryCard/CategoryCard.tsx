import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { SIZES } from "../../utils/";

interface CategoryCardProps {
  children?: JSX.Element[] | JSX.Element;
  size: string;
  description: string;
  price: number;
  isOpen: boolean;
  onToggle: () => void;
}

export const CategoryCard = ({
  children,
  size,
  description,
  price,
  isOpen,
  onToggle,
}: CategoryCardProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const menuIdentifier = () => {
    setSelectedCategory(size);
    if (selectedCategory === size) {
      setSelectedCategory("");
    }
  };

  const isMenuOpened = () => {
    if (selectedCategory === SIZES.BROTO) {
      return true;
    }
    if (selectedCategory === SIZES.FAMILIA) {
      return true;
    }
    if (selectedCategory === SIZES.MEDIA) {
      return true;
    }
    if (selectedCategory === SIZES.SUPERGG) {
      return true;
    } else return false;
  };

  return (
    <Box w="300px" backgroundColor="#FFB800">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={menuIdentifier}
      >
        <Image
          height="100px"
          src="https://www.discstore.com/media/catalog/product/cache/c88af0b9efa8c07a49eb968599ee58b3/d/s/ds_peperonipizza.jpg"
        />
        <Box display="flex" flexDir="column" alignItems="center">
          <Text fontFamily="Fugaz One" fontSize="20px">
            {size}
          </Text>
          <Text fontSize="14px">{description}</Text>
          <Text fontSize="12px">Até 1 sabor</Text>
          <Box display="flex">
            <Text fontSize="12px">A partir de</Text>
            <Text
              marginLeft="4px"
              fontSize="18px"
              fontFamily="Chewy"
              color="#901313"
            >
              R$ {price}
            </Text>
          </Box>
        </Box>
        {isMenuOpened() ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Box>
      <Collapse in={isMenuOpened()} animateOpacity>
        {children}
      </Collapse>
    </Box>
  );
};
