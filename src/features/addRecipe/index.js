import {useDispatch} from 'react-redux';
import React, { useCallback } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import * as actionType from '../../store/actions';
let newRecipe ={
  "date_of_post": "September 14, 2016",
  "ingredients": [
      {
          "name": "turmeric",
          "quantity": "1",
          "unit": "tea spoon",
      }
  ],
  "steps": "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.) Set aside off of the heat to let rest for 10 minutes, and then serve.",
  "image": "paella.jpg"
};



let handleChange = (event) => {
  newRecipe.name = event.target.value
};

function AddRecipe() {
  const dispatch = useDispatch();
  const loadRecipe= useCallback((data) => dispatch({ type: actionType.ADD_RECIPE, payload: data }), [dispatch]);
  let handleSubmit = (event) => {
    newRecipe.name = event.target.value;
    loadRecipe(newRecipe);
  };
    return (
      <div className="recipe-form">
        <form  noValidate autoComplete="off" onSubmit={handleSubmit} >
          <TextField id="name_of_recipe" label="Name of recipe" onChange={handleChange}/>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
  
export default AddRecipe;