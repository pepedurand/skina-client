import { useEffect, useState } from "react";

export const useRequest = (requisition: any) => {
  const [items, setItems] = useState<any[] | []>([]);

  const loadItemList = async () => {
    const response = await requisition;
    setItems(response);
  };

  useEffect(() => {
    loadItemList();
  }, []);
  return items;
};
