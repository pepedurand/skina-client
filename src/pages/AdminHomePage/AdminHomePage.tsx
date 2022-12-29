import { Box } from "@chakra-ui/react";
import {
  CategoryCard,
  CollapsibleMenu,
  ItemCard,
  OpeningTime,
} from "../../components";
import { useRequest } from "../../hooks";
import {
  getPizzas,
  getDrinks,
  getCombos,
  getSizes,
  getExtras,
} from "../../services";
import {
  ComboData,
  DrinkData,
  ExtraData,
  PizzaData,
  SizeData,
} from "../../types";

export const AdminHomePage = () => {
  const pizzas = useRequest(getPizzas());
  const drinks = useRequest(getDrinks());
  const combos = useRequest(getCombos());
  const sizes = useRequest(getSizes());
  const extras = useRequest(getExtras());

  return (
    <>
      <OpeningTime />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <CollapsibleMenu title="Pizzas" isEditable>
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
                      isEditable
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
          isEditable
          title="Drinks"
          children={drinks.map((data: DrinkData) => {
            return (
              <ItemCard
                isEditable
                details={data.size}
                price={data.price}
                title={data.name}
              />
            );
          })}
        />
        <CollapsibleMenu
          isEditable
          title="Combos"
          children={combos.map((data: ComboData) => {
            return (
              <ItemCard
                isEditable
                details={data.description}
                price={data.price}
                title={data.name}
              />
            );
          })}
        />
        <CollapsibleMenu
          isEditable
          title="Extras"
          children={extras.map((data: ExtraData) => {
            return <ItemCard isEditable price={data.price} title={data.name} />;
          })}
        />
      </Box>
    </>
  );
};
