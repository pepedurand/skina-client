import { Box, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export const CollapsibleMenu = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box maxW="300px">
      <Box
        onClick={onToggle}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="10px"
        bgColor="orange"
        color="#901313"
      >
        <Text fontFamily="Fugaz One" fontSize="30px">
          Pizzas
        </Text>
        {isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box bgColor="grey">oaskjdaosdjaosdj</Box>
      </Collapse>
    </Box>
  );
};
