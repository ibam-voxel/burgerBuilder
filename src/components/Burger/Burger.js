import React from "react";

import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";


const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) // for change state ingredients to Array
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        })
    // untuk mengecek apakah transformedIngredients memiliki Array atau tidak. menggunakan func reduce
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    console.log(transformedIngredients)

    if(transformedIngredients === 0) {
        transformedIngredients = <p>Please Start Ingredients!</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={"bread-top"} />
            {transformedIngredients}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    )
};

export default Burger
