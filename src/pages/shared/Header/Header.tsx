import React from "react";

import BrandsLogo from "../../../assets/BrandsLogo.svg";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import style from "./Header.module.scss";
import HeaderAuthMenu from "./HeaderAuthMenu/HeaderAuthMenu";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

function Header(props: any) {
  return (
    <div className={style["header-layout"]}>
      <div className={style["logo"]}>
        <img alt="migobucks brand" src={BrandsLogo} />
      </div>
      <div className={style["menu"]}>
        {props.layout === "auth" ? (
          <HeaderAuthMenu />
        ) : (
          <Input className="header-search" />
        )}
        {props.layout === "auth" ? (
          <div>
            <Button className="auth-head-reg" label="Register" />
            <Button className="auth-head-login" label="Login" />
          </div>
        ) : (
          <HeaderMenu />
        )}
      </div>
    </div>
  );
}

export default Header;
