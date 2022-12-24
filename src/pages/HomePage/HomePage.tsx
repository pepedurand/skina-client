import { Box } from "@chakra-ui/react";
import { CollapsibleMenu, Header, OpeningTime } from "../../components";

export const HomePage = () => {
  return (
    <>
      <Header />
      <OpeningTime />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <CollapsibleMenu title="Pizzas" />
        <CollapsibleMenu title="Pizzas" />
        <CollapsibleMenu title="Pizzas" />
      </Box>
    </>
  );
};
