import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Collapse, Image, Text, useDisclosure } from "@chakra-ui/react";
import { SizeData } from "../../types";

interface CategoryCardProps {
  children?: JSX.Element[];
  sizes: SizeData[];
}

export const CategoryCard = ({ children, sizes }: CategoryCardProps) => {
  const { isOpen, onToggle } = useDisclosure();

  console.log(sizes);

  return (
    <Box w="300px" backgroundColor="#FFB800">
      {sizes.map((data: SizeData) => {
        return (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={onToggle}
          >
            <Image
              height="100px"
              src="https://www.discstore.com/media/catalog/product/cache/c88af0b9efa8c07a49eb968599ee58b3/d/s/ds_peperonipizza.jpg"
            />
            <Box display="flex" flexDir="column" alignItems="center">
              <Text fontFamily="Fugaz One" fontSize="20px">
                {data.size}
              </Text>
              <Text fontSize="14px">{data.description}</Text>
              <Text fontSize="12px">Até 1 sabor</Text>
              <Box display="flex">
                <Text fontSize="12px">A partir de</Text>
                <Text
                  marginLeft="4px"
                  fontSize="18px"
                  fontFamily="Chewy"
                  color="#901313"
                >
                  R$ {data.price}
                </Text>
              </Box>
            </Box>
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Box>
        );
      })}

      <Collapse in={isOpen} animateOpacity>
        <Box>{children}</Box>
      </Collapse>
    </Box>
  );
};
