import { Box, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { EditItemText } from "../EditItemText";

interface CollapsibleMenuProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
  isEditable?: boolean;
}

export const CollapsibleMenu = ({
  title,
  children,
  isEditable,
}: CollapsibleMenuProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box w="300px" margin="10px 20px">
      <Box
        cursor="pointer"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="10px"
        bgColor="#FFB800"
        color="#901313"
      >
        <Text fontFamily="Fugaz One" fontSize="30px">
          {isEditable ? <EditItemText textOrValue={title} /> : <>{title}</>}
        </Text>
        {isOpen ? (
          <ChevronUpIcon onClick={onToggle} width="50px" />
        ) : (
          <ChevronDownIcon onClick={onToggle} width="50px" />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box>{children}</Box>
      </Collapse>
    </Box>
  );
};
