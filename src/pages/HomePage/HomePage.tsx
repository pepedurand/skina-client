import { Box } from "@chakra-ui/react";
import {
  CollapsibleMenu,
  Header,
  ItemCard,
  OpeningTime,
} from "../../components";
import { useRequest } from "../../hooks/useRequest";
import { getCombos, getDrinks, getPizzas } from "../../services";
import { DrinkData, PizzaData } from "../../types/listsTypes";

export const HomePage = () => {
  // const drinks = useRequest(getDrinks());
  // const pizzas = useRequest(getPizzas());
  // const combos = useRequest(getCombos());

  const pizzas: PizzaData[] = [
    {
      additional_price: 30,
      description: "Pizza de chocolate com brigadeiro e granulado",
      name: "Brigadeiro",
      pizza_id: "blabla",
    },
    {
      additional_price: 40,
      description: "Pizza de muzzarela com oregano",
      name: "Muzzarela",
      pizza_id: "blabla",
    },
    {
      additional_price: 30,
      description: "Pizza de calabresa com cebola e oregano",
      name: "Calabresa",
      pizza_id: "blabla",
    },
  ];

  const drinks: DrinkData[] = [
    {
      price: 5,
      size: "350ml",
      name: "Guaraná lata",
      drink_id: "blabla",
    },
    {
      price: 10,
      size: "2l",
      name: "Coca Cola",
      drink_id: "blabla",
    },
    {
      price: 3,
      size: "300ml",
      name: "Guaravita",
      drink_id: "blabla",
    },
  ];

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
                description={data.description}
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
                description={data.size}
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
