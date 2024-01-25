import { useState } from "react";
import HeaderNavigators from "./Header-navigators-component";
import headerlogo from "../assets/frame.svg";

export default function Header() {
  const [activePage, setActoinActivePage] = useState(1);
  return (
    <header>
      <a href="" className="header-logo">
        <img src={headerlogo} alt="" />
        <span>name</span>
      </a>
      <HeaderNavigators
        content="ლეპტოპები"
        activePage={activePage}
        setActoinActivePage={setActoinActivePage}
      />
      <HeaderNavigators
        content="პლანშეტები"
        activePage={activePage}
        setActoinActivePage={setActoinActivePage}
      />
      <HeaderNavigators
        content="აქსესუარები"
        activePage={activePage}
        setActoinActivePage={setActoinActivePage}
      />
      <div className="shop-user">
        <div> <i className="fa-solid fa-cart-shopping"></i></div>
        <div> <i className="fa-solid fa-user"></i></div>
      </div>
    </header>
  );
}
