import { Box } from "@chakra-ui/react";
import {
  CollapsibleMenu,
  Header,
  ItemCard,
  OpeningTime,
} from "../../components";
import { pizzas, drinks, combos } from "../../mocks";
import { ComboData, DrinkData, PizzaData } from "../../types/";

export const HomePage = () => {
  return (
    <>
      <Header />
      <OpeningTime />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <CollapsibleMenu
          title="Pizzas"
          children={pizzas.map((data: PizzaData) => {
            return (
              <ItemCard
                details={data.description}
                price={data.additional_price}
                title={data.name}
              />
            );
          })}
        />
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
