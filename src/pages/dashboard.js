import Navbar from "../assets/Navbar";
import Banner from "../components/dashboardComponents/Banner";
import Catelouge from "../components/dashboardComponents/catelouge";
import ProductDemo from "../components/dashboardComponents/ProductDemo";
import YouMayLike from "../components/YouMayLike";

const Dashboard = () => {
    return (
      <div className="mb-8">
        <Navbar/>
        <Banner />
        <Catelouge />
        <ProductDemo />
        <YouMayLike />
      </div>
    );
}


export default Dashboard;
