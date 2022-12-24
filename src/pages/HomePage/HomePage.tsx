import { Box } from "@chakra-ui/react";
import {
  CollapsibleMenu,
  Header,
  ItemCard,
  OpeningTime,
} from "../../components";
import { useRequest } from "../../hooks/useRequest";
import { getCombos, getDrinks, getPizzas } from "../../services";

export const HomePage = () => {
  const drinks = useRequest(getDrinks());
  const pizzas = useRequest(getPizzas());
  const combos = useRequest(getCombos());

  console.log(drinks, pizzas, combos);

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
