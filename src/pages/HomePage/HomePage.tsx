import { Box } from "@chakra-ui/react";
import {
  CollapsibleMenu,
  Header,
  ItemCard,
  OpeningTime,
} from "../../components";
import { useRequest } from "../../hooks";
import { getCombos, getDrinks, getPizzas } from "../../services";
import { ComboData, DrinkData, PizzaData } from "../../types/";

export const HomePage = () => {
  const pizzas = useRequest(getPizzas());
  const drinks = useRequest(getDrinks());
  const combos = useRequest(getCombos());

  return (
    <>
      <Header />
      <OpeningTime />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <CollapsibleMenu title="Pizzas">
          {pizzas.map((data: PizzaData) => {
            return (
              <ItemCard
                details={data.description}
                price={data.additional_price}
                title={data.name}
              />
            );
          })}
        </CollapsibleMenu>
        <CollapsibleMenu
          title="Drinks"
          children={drinks.map((data: DrinkData) => {
            return (
              <ItemCard
                details={data.size}
                price={data.price}
                title={data.name}
              />
            );
          })}
        />
        <CollapsibleMenu
          title="Combo"
          children={combos.map((data: ComboData) => {
            return (
              <ItemCard
                details={data.description}
                price={data.price}
                title={data.name}
              />
            );
          })}
        />
      </Box>
    </>
  );
};
