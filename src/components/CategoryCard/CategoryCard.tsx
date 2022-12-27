import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface CategoryCardProps {
  children?: JSX.Element[] | JSX.Element;
  size: string;
  description: string;
  price: number;
}

export const CategoryCard = ({
  children,
  size,
  description,
  price,
}: CategoryCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const expandMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box w="300px" backgroundColor="#FFB800">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={expandMenu}
      >
        <Image
          height="100px"
          src="https://www.discstore.com/media/catalog/product/cache/c88af0b9efa8c07a49eb968599ee58b3/d/s/ds_peperonipizza.jpg"
        />
        <Box display="flex" flexDir="column" alignItems="center">
          <Text fontFamily="Fugaz One" color="#901313" fontSize="20px">
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
        {isMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Box>
      <Collapse in={isMenuOpen} animateOpacity>
        {children}
      </Collapse>
    </Box>
  );
};
