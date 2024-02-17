
// import { styled } from "@mui/material";
import React from 'react'
import { Link } from "react-router-dom";
const logo = require('../../../../assets/imgs/dfaxlogo.png');

// const LinkStyled = styled(Link)(() => ({
//   height: "70px",
//   width: "180px",
//   overflow: "hidden",
//   display: "block",
// }));

const Logo = () => {
  return (
    <Link to="/" className="flex justify-center items-center w-28 my-4">
      <img
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
