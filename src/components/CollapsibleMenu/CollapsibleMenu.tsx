import { Box, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

interface CollapsibleMenuProps {
  title: string;
  children: JSX.Element[];
}

export const CollapsibleMenu = ({ title, children }: CollapsibleMenuProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="300px" margin="10px 20px">
      <Box
        onClick={onToggle}
        cursor="pointer"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="10px"
        bgColor="orange"
        color="#901313"
      >
        <Text fontFamily="Fugaz One" fontSize="30px">
          {title}
        </Text>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box>{children}</Box>
      </Collapse>
    </Box>
  );
};
