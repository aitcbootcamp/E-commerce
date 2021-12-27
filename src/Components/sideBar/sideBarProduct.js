import classes from "./sideBarProduct.module.css"

function SideBarProduct() {

    return (
        <>
            <div className={classes.mainDiv}>
                <ul className={classes.ulList}>
                    <li className={classes.slideBarLi}>Computer</li>
                    <li className={classes.slideBarLi}>Laptop</li>
                    <li className={classes.slideBarLi}>Mobile Phones</li>
                    <li className={classes.slideBarLi}>Tablet</li>
                    <li className={classes.slideBarLi}>Accesories</li>
                </ul>
            </div>
        </>
    )

}

export default SideBarProduct