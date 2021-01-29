import {useSelector} from 'react-redux';
import Recipes from '../recipes';

function RecipeWrapper() {
    const recipes = useSelector(state=> state.recipes);
    return (
      <div className="recipe-wrapper">
            {recipes.map((recipe, index) => (
                <Recipes recipe={recipe} key={'recipe-'+index} index={index}/>
            ))}
      </div>
    );
  }
  
export default RecipeWrapper;