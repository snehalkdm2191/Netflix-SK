import Navbar from "../../components/user/Navbar";
import Featured from "../../components/user/Featured";
import List from "../../components/user/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List/>
    </div>
  );
};

export default Home;
