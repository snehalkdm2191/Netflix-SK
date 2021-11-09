//NPM Packages
import { useState } from "react";

//Local Files
import useFetch from "../../scripts/useFetch";
import { useItems } from "../../state/ItemsProvider";
import Card from "./Card";

export default function ItemList() {
  const { dispatchItems } = useItems();
  const Items = useFetch("Items", dispatchItems);

  //Components
  const Data = Items.data.map((item) => {
    return <Card key={item.id} data={item} />;
  });

  return (
    <>
      <section className="row">{Data}</section>
    </>
  );
}
