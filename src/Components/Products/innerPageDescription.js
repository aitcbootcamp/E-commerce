
<>
    <div className={classes.SliderPageDiv}>
        <div className={classes.sliderImg}>
            <AliceCarousel autoPlay autoPlayInterval="3000" infinite>
                <p>
                    <img src={sonyImg} alt="pc" className={classes.pcImg} />
                </p>
                <p>
                    <img src={hpLeptop} alt="pc" className={classes.pcImg} />
                </p>
                <p>
                    <img src={asusLeptop} alt="pc" className={classes.pcImg} />
                </p>
                <p>
                    <img src={hpPavilion} alt="pc" className={classes.pcImg} />
                </p>
            </AliceCarousel>
        </div>
        <div className={classes.discription}>
            <h2>HP Pavilion x360 Convertible</h2>
            <p>price:{description.price}$</p>
            <p>Model : Hp</p>
            <p>Prodaction type : Leptop</p>
            <ProdactCount count={count} setCount={setCount} />
            <AddToCartButton add={add} />
        </div>
    </div>
    <p className={classes.lorem}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
    </p>
</>
