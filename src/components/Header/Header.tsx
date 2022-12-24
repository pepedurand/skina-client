import { Box, Image } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Header = () => {
  return (
    <Box height="100px" backgroundColor="#FFB800">
      <Box display="flex" justifyContent="center">
        <Image
          src="https://i.ibb.co/6ww3DRQ/Sem-nome-400-240-px.png"
          height="100px"
        />
      </Box>
      <ColorModeSwitcher
        justifySelf="flex-end"
        position="absolute"
        top="30px"
        right="10px"
      />
    </Box>
  );
};
