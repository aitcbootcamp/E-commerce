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

        <SideBarProduct />
        <Slider></Slider>
      </div>
      <HomePageProductList
        title="Laptops"
        category="laptop"></HomePageProductList>
      <HomePageProductList
        title="Accessories"
        category="accessories"></HomePageProductList>
      <HomePageProductList
        category="mobile"
        title="Mobile Phones"></HomePageProductList>
    </>
  );
};

export default Homepage;
