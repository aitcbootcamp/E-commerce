import { Route, Routes, Link } from "react-router-dom"
import classes from "./sideBarProduct.module.css"

function SideBarProduct() {

    return (
        <>
            <div className={classes.mainDiv}>
                <ul className={classes.ulList}>
                    <li className={classes.slideBarLi}><Link to="/products/computer">Computer </Link></li>
                    <li className={classes.slideBarLi}><Link to="/products/laptop"> Laptop </Link></li>
                    <li className={classes.slideBarLi}><Link to="/products/mobile"> Mobile Phones </Link></li>
                    <li className={classes.slideBarLi}><Link to="/products/tablet"> Tablet </Link></li>
                    <li className={classes.slideBarLi}><Link to="/products/accessories"> Accesories </Link></li>

                </ul>
            </div>
        </>
    )

}

export default SideBarProduct