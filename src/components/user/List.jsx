import useFetch from "../../scripts/useFetch";
import { useItems } from "../../state/ItemsProvider";
import CategoryList from "./CategoryList";
import { getTop10 } from "../../scripts/methods";

export default function List() {
  const { dispatchItems } = useItems();
  const Items = useFetch("Items", dispatchItems);
  const SeriesData = Items.data.filter((item) => item.Type === "Series");
  const FilmData = Items.data.filter((item) => item.Type === "Film");
  const ComedyData = Items.data.filter((item) => item.Category === "Comedy");
  const DramaData = Items.data.filter((item) => item.Category === "Drama");
  const top10 = getTop10(Items.data);

  return (
    <>
      <CategoryList data={top10} category="Top 10 TV programs & Movies" />
      <CategoryList data={FilmData} category="Film" />
      <CategoryList data={SeriesData} category="Series" />
      <CategoryList data={ComedyData} category="Comedies" />
      <CategoryList data={DramaData} category="Drama" />
    </>
  );
}
