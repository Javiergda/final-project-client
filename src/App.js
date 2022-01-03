import { AppRouter } from "./components/Routes/AppRouter";
import { AuthContext } from "./auth/authContext";

// const state = {
//     email: 'javier@javier',
//     userTipe:1/2/3,
//     logged: true/false
// }

function App() {

  const initialValue = JSON.parse(localStorage.getItem('user')) || { // mira si esta logeado
    email: 'javier@javier',
    userTipe: 2,
    logged: true
  };

  // BORRAR DESPUES DE PROBAR. ES PARA QUE NO PILLE EL LOCALSTRORAGE
  const initialValue2 = {
    email: 'javier@javier',
    userTipe: 1,
    logged: true
  };
  //////////////////////////////////////////////////////////////////

  return (
    <AuthContext.Provider value={initialValue2}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
