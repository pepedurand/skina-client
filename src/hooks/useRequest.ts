import { AxiosResponse } from "axios";
import { useEffect, useLayoutEffect, useState } from "react";

export const useRequest = (
  requisition: Promise<AxiosResponse<any, any> | undefined>
): any[] => {
  const [items, setItems] = useState([]);

  const itemList = async () => {
    const response = await requisition;
    setItems(response?.data);
  };

  useEffect(() => {
    itemList();
  }, []);
  console.log(items);
  return items;
};
