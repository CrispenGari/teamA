import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__left" onClick={() => {}}>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="header__right">
        {/* {user ? (
          <>
            {user.role === "ADMIN" ? (
              <h1>ADMIN</h1>
            ) : (
              <Badge
                badgeContent={cart?.length}
                color="primary"
                className="header__right__cart__badge"
                onClick={() => {
                  navigate("/checkout", { replace: false });
                }}
              >
                <AiOutlineShoppingCart className="header__right__cart" />
              </Badge>
            )}
            <button
              onClick={() => {
                dispatch(setUser(null));
                dispatch(emptyCart());
              }}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <> */}
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        {/* </>
        )} */}
      </div>
    </div>
  );
};
export default Header;
