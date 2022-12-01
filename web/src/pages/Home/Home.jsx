import React, { useState } from "react";
import { Footer, Header, Main } from "../../components";
import "./Home.css";
import { IoAddOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = useSelector(({ user }) => user);
  return (
    <div className="home">
      <Header />

      <Main />
      {/* <AddProductModal open={open} onClose={handleClose} /> */}
      {user?.role === "ADMIN" ? (
        <div className="home__add__product__btn" onClick={handleOpen}>
          <IoAddOutline />
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Home;
