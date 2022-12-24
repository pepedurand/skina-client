import { Box } from "@chakra-ui/react";
import {
  CollapsibleMenu,
  Header,
  ItemCard,
  OpeningTime,
} from "../../components";

export const HomePage = () => {
  return (
    <>
      <Header />
      <OpeningTime />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <CollapsibleMenu title="Pizzas" children={ItemCard()} />
        <CollapsibleMenu title="Pizzas" children={ItemCard()} />
        <CollapsibleMenu title="Pizzas" children={ItemCard()} />
      </Box>
    </>
  );
};
