import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt=""></img>
      <h1 className={style.title}>{title}</h1>
      <p>Calories: {Math.round(calories)}</p>
      <br />
      <h3>Ingredients</h3>
      <ul className={style.list}>
        {ingredients.map(ingredient => (
          <li className={style.listitems}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
