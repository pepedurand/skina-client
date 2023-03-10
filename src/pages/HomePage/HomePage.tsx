import { Box } from "@chakra-ui/react";
import {
  CategoryCard,
  CollapsibleMenu,
  ItemCard,
  OpeningTime,
} from "../../components";
import { useRequest } from "../../hooks";
import {
  getCombos,
  getDrinks,
  getExtras,
  getPizzas,
  getSizes,
} from "../../services";
import {
  ComboData,
  DrinkData,
  ExtraData,
  PizzaData,
  SizeData,
} from "../../types/";

export const HomePage = () => {
  const pizzas = useRequest(getPizzas());
  const drinks = useRequest(getDrinks());
  const combos = useRequest(getCombos());
  const sizes = useRequest(getSizes());
  const extras = useRequest(getExtras());

  return (
    <>
      <OpeningTime />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <CollapsibleMenu title="Pizzas">
          {sizes.map((size: SizeData) => {
            return (
              <CategoryCard
                size={size.size}
                price={size.price}
                description={size.description}
              >
                {pizzas.map((data: PizzaData) => {
                  return (
                    <ItemCard
                      basePrice={size.price}
                      details={data.description}
                      price={data.additional_price}
                      title={data.name}
                    />
                  );
                })}
              </CategoryCard>
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
          title="Combos"
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
        <CollapsibleMenu
          title="Extras"
          children={extras.map((data: ExtraData) => {
            return <ItemCard price={data.price} title={data.name} />;
          })}
        />
      </Box>
    </>
  );
};
