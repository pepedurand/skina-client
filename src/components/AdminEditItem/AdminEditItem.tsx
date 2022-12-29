import { Box } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";

interface AdminEditItemProps {
  text: string;
}

export const AdminEditItem = ({ text }: AdminEditItemProps) => {
  return (
    <Box display="flex" alignItems="center">
      <Box>{text}</Box>
      <MdEdit />
    </Box>
  );
};
