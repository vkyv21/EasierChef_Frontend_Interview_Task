import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './recipe.scss';

function IngredientsList(props){
  return (
    <li class="ingredients">{props.ingredient.name} - {props.ingredient.quantity} {props.ingredient.unit}</li>
  )
}

function Recipes(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
      <div className="recipes">
        <Card className="card">
      <CardHeader
        title={props.recipe.name}
        subheader={props.recipe.date_of_post}
      />
      <CardMedia
        className="media"
        image={"/food/"+props.recipe.image}
        title={props.recipe.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.recipe.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton
            className={"expand " + (expanded ? "expandOpen" : "")}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
            {props.recipe.ingredients.map((ingredient, index)=>{
              return <IngredientsList key={'ingredient-'+index} ingredient={ingredient}/>
            })}
          </Typography>
          <Typography paragraph>Steps:</Typography>
          <Typography paragraph>
            {props.recipe.steps}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
      </div>
    );
  }
  
  export default Recipes;