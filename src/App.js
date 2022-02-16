import { AppRouter } from "./components/Routes/AppRouter";
import { AuthContext } from "./auth/authContext";

// const state = {
//     email: 'javier@javier',
//     userTipe:1/2/3,
//     logged: true/false
// }

function App() {

  const initialValue = JSON.parse(localStorage.getItem('user')) || { // mira si esta logeado
    id: '',
    email: '',
    user_type: 0,
    logged: false,
    token: ''
  };

  console.log(initialValue);

  // BORRAR DESPUES DE PROBAR. ES PARA QUE NO PILLE EL LOCALSTRORAGE
  const initialValue2 = {
    email: 'javier@javier',
    user_type: 1,
    logged: true
  };
  //////////////////////////////////////////////////////////////////

  return (
    <AuthContext.Provider value={initialValue}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
