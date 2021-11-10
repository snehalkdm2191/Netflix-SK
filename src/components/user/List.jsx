import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import useFetch from "../../scripts/useFetch";
import { useItems } from "../../state/ItemsProvider";
import CategoryList from "./CategoryList";

export default function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const { dispatchItems } = useItems();
  const Items = useFetch("Items", dispatchItems);
  const SeriesData = Items.data.filter((item) => item.Type === "Series");
  const FilmData = Items.data.filter((item) => item.Type === "Film");
  const ComedyData = Items.data.filter((item) => item.Category === "Comedy");
  const DramaData = Items.data.filter((item) => item.Category === "Drama");

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
        <CategoryList ref={listRef} data={FilmData} category="Film"/>
        <CategoryList ref={listRef} data={SeriesData} category="Series"/>
        <CategoryList ref={listRef} data={ComedyData} category="Comedy"/>
        <CategoryList ref={listRef} data={DramaData} category="Drama"/>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
