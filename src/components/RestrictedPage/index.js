import "./style.css";

function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn && user === "Ique" ? (
        <>
          <h2>
            Welcome, <span>{user}</span>.
          </h2>
          <button onClick={Logout}>Logout</button>{" "}
        </>
      ) : (
        <>
          <h2>Você não pode acessar essa página</h2>
          <button onClick={Login}>Login</button>
        </>
      )}
    </>
  );
}

export default RestrictedPage;
