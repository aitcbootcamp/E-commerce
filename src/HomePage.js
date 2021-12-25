import Slider from "./Components/Slider/Slider";
import HomePageProductList from "./Components/Products/HomePageProductList";
import SideBarProduct from "./Components/sideBar/sideBarProduct";
import classes from "./HomePage.module.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const Homepage = () => {
  return (
    <>
      <div className={classes.homepage}>
        <SideBarProduct></SideBarProduct>
        <Slider></Slider>
      </div>
      <HomePageProductList></HomePageProductList>
    </>
  );
};

export default Homepage;
