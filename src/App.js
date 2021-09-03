import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage/";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Ique";

  const Login = () => {
    setIsLoggedIn(true);
  };

  const Logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <>
            <RestrictedPage
              isLoggedIn
              user={user}
              Login={Login}
              Logout={Logout}
            />
          </>
        ) : (
          <button onClick={Login}>Faça seu Login</button>
        )}
      </header>
    </div>
  );
}

export default App;
