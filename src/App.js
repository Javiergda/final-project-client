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
    userTipe: 1,
    logged: true
  };

  return (
    <AuthContext.Provider value={initialValue}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
