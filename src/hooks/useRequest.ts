import { useLayoutEffect, useState } from "react";

export const useRequest = (requisition: Promise<any | undefined>) => {
  const [items, setItems] = useState();
  const itemList = async () => {
    const response = await requisition;
    setItems(response);
  };
  useLayoutEffect(() => {
    itemList();
  });
  return items;
};
