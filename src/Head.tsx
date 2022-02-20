import React, { useState } from "react";
import { iconSchmooz } from "./assets/svgFunction/iconSchmooz";
import { ColorString } from "./ColorPalette";
import "./css/Common.css";
import "./css/Body.css";
import { Menu } from "./components/HamburgerMenu/HamburgerMenu";

export function Head() {
  const [linkState, setLinkState] = useState(false);
  return (
    <header className="sticky-thc">
      <div
        className="text-medium hide-mobile"
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "row",
          padding: 10,
          height: 58,
          backgroundColor: ColorString.schmoozGreen,
        }}
      >
        {iconSchmooz()}
        <svg
          className="show-mobile"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="53"
          viewBox="0 0 250 75"
          preserveAspectRatio="XminYmin meet"
        >
          <image
            className="show-mobile"
            x={"-5"}
            y={"5%"}
            width="100%"
            height="100%"
            href="schmooz-text.svg"
          />
        </svg>
        <svg
          // style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
          className="sandwich-menu"
          viewBox="0 0 50 100"
          fill="none"
          preserveAspectRatio="xMaxYMin meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            onClick={() => setLinkState(!linkState)}
            className="show-mobile"
            width="100%"
            height="100%"
            href="sandwich-menu.svg"
          />
        </svg>
        <Menu />

        <div
          className="header-web"
          style={{
            flex: 1,
            padding: "15px",
            marginRight: "10px",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textDecoration: "none",
            alignItems: "center",
            backgroundColor: ColorString.transparent,
          }}
        >
          <a
            className="text-medium header-web"
            style={{
              textDecoration: "none",
              color: ColorString.white,
              fontWeight: "bold",
              fontSize: 25,
              marginRight: "60px",
              marginLeft: "60px",
              backgroundColor: ColorString.transparent,
            }}
            href="about.html"
          >
            About
          </a>
          <a
            className="text-medium header-web"
            style={{
              fontSize: 25,
              marginRight: "60px",
              textDecoration: "none",
              color: ColorString.white,
              fontWeight: "bold",
              backgroundColor: ColorString.transparent,
            }}
            href="terms.html"
          >
            Terms
          </a>
          <a
            className="text-medium header-web"
            style={{
              fontSize: 25,
              marginRight: "60px",
              textDecoration: "none",
              color: ColorString.white,
              fontWeight: "bold",
              backgroundColor: ColorString.transparent,
            }}
            href="mailto:rob@schmooz.app"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
