import useFetch from "../../scripts/useFetch";
import { useItems } from "../../state/ItemsProvider";
import { getTop1 } from "../../scripts/methods";
import Navbar from "../../components/user/Navbar";
import Featured from "../../components/user/Featured";
import List from "../../components/user/List";

export default function Home() {
  const { dispatchItems }: any = useItems();
  const Items = useFetch("Items", dispatchItems);
  const top1 = getTop1(Items.data);

  return (
    <div className="home">
      <Navbar />
      {(!Items.loading && Items.error) === null && <Featured data={top1[0]} />}
      <List />
    </div>
  );
}
