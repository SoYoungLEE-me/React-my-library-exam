import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={goToHome}>
        코딩 알려주는 누나 도서관
      </div>
      <div className="menu">
        <div onClick={goToHome}>메인</div>
        <div>나의 책</div>
        <div>로그인</div>
      </div>
    </nav>
  );
};

export default Navbar;
