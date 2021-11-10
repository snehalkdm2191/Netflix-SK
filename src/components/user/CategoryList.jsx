import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import useFetch from "../../scripts/useFetch";
import { useItems } from "../../state/ItemsProvider";
import ListItem from "./ListItem";

export default function List({ref, data, category}) {

  const Data = data.map((item, index) => {
    return <ListItem index={index} key={item.id} data={item} />;
  });

  return (
    <>
      <span className="listTitle">{category}</span>
      <div className="list-container" ref={ref}>
        {Data}
      </div>
    </>
  );
}
