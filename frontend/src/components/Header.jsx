import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <h1>Countries in the World</h1>
      {user ? (
        <>
          <p>Welcome, {user.username}</p>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </header>
  );
};

export default Header;
