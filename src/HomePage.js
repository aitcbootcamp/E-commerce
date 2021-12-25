import Slider from "./Components/Slider/Slider";
import HomePageProductList from "./Components/Products/HomePageProductList";
import SideBarProduct from "./Components/sideBar/sideBarProduct";
import classes from "./HomePage.module.css";
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
