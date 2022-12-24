import { Box } from "@chakra-ui/react";
import { CollapsibleMenu, Header, OpeningTime } from "../../components";

export const HomePage = () => {
  return (
    <Box>
      <Header />
      <OpeningTime />
      <CollapsibleMenu />
    </Box>
  );
};
