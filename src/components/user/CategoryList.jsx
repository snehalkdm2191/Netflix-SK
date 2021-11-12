import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import useFetch from "../../scripts/useFetch";
import { useItems } from "../../state/ItemsProvider";
import ListItem from "./ListItem";

export default function CategoryList({ data, category }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const Data = data.map((item, index) => {
    return <ListItem index={index} key={item.id} data={item} />;
  });

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <div className="list-wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <span className="listTitle">{category}</span>
        <div className="list-container" ref={listRef}>
          {Data}
        </div>
        <ArrowForwardIosOutlined
        className="sliderArrow right"
        onClick={() => handleClick("right")}
      />
      </div>
    </div>
  );
}
