import useFetch from "../../scripts/useFetch";
import { useItems } from "../../state/ItemsProvider";
import CategoryList from "./CategoryList";
import { getTop1 } from "../../scripts/methods";
import Navbar from "../../components/user/Navbar";
import Featured from "../../components/user/Featured";

export default function Movies() {
  const { dispatchItems } = useItems();
  const Items = useFetch("Items", dispatchItems);
  const MoviesData = Items.data.filter((item) => item.Type === "Film");
  const top1 = getTop1(Items.data);

  return (
    <>
      <Navbar />
      {(!Items.loading && Items.error) === null && <Featured data={top1[0]} />}
      <CategoryList data={MoviesData} category="Movies" />
    </>
  );
}
