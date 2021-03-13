import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from 'src/actions/recipes';
import { isLoading } from 'src/actions/app';

const family = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      const fetchData = async () => {
        // try {
        //   const response = await axios.get('http://localhost:3001/recipes');
        //   // ici je veux enregistrer les données des recettes dans le state
        //   // => modification de state => dispatch d'une action
        //   store.dispatch(saveRecipes(response.data));
        // }
        // catch (error) {
        //   console.log('error', error);
        // }
        // finally {
        //   // ici je veux remettre mon application normal
        //   // on retire l'état de loading
        //   store.dispatch(isLoading(false));
        // }
      };

      fetchData();
      break;
    }
    default:
      next(action);
  }
};

export default family;