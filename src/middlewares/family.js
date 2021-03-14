import axios from 'axios';
import { FETCH_FAMILIES, saveFamilies } from 'src/actions/family';

const family = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FAMILIES: {
      const fetchData = async () => {
        // try {
        //   const response = await axios.get('http://localhost:3001/families');
        //   // ici je veux enregistrer les données des recettes dans le state
        //   // => modification de state => dispatch d'une action
        //   store.dispatch(saveFamilies(response.data));
        // }
        // catch (error) {
        //   console.log('error', error);
        // }
        try {

          const data = [
            {
              email: 'toto',
              password: 'toto',
              isLogged: true,
              pseudo: "toto",
              favorites: "toto",
              familyName: "toto",
              firstName: "toto",
              description: "toto",
              familyCode: 1234,
              dateOfBirth: "12/12/90"
            },
            {
              email: 'tatata',
              password: 'tatata',
              isLogged: true,
              pseudo: "tatata",
              favorites: "tatata",
              familyName: "tatata",
              firstName: "tatata",
              description: "tatata",
              familyCode: 1234,
              dateOfBirth: "10/10/90"
            },
            {
              email: 'tititi',
              password: 'tititi',
              isLogged: true,
              pseudo: "tititi",
              favorites: "tititi",
              familyName: "tititi",
              firstName: "tititi",
              description: "tititi",
              familyCode: 1234,
              dateOfBirth: "11/11/90"
            },
            {
              email: 'tututut',
              password: 'tututut',
              isLogged: true,
              pseudo: "tututut",
              favorites: "tututut",
              familyName: "tututut",
              firstName: "tututut",
              description: "tututut",
              familyCode: 1234,
              dateOfBirth: "02/02/90"
            },
            {
              email: 'tytytytytyt',
              password: 'tytytytytyty',
              isLogged: true,
              pseudo: "tytytytytyty",
              favorites: "tytytytytyty",
              familyName: "tytytytytyty",
              firstName: "tytytytytyty",
              description: "tytytytytyty",
              familyCode: 1234,
              dateOfBirth: "02/02/90"
            },
          ]

          store.dispatch(saveFamilies(data))
          console.log("coucou data", saveFamilies(data))
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
      break;
    }
    default:
      next(action);
  }
};

export default family;