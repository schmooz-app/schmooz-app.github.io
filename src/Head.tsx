import React from "react";
import { iconSchmooz } from "./assets/svgFunction/iconSchmooz";
import { ColorString } from "./ColorPalette";
import "./css/Common.css";
import "./css/Body.css";

export function Head() {
  return (
    <header className="sticky-thc">
      <div
        className="text-medium hide-mobile"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
          padding: 10,
          height: 58,
          backgroundColor: ColorString.schmoozGreen,
        }}
      >
        {iconSchmooz()}
        <svg className="show-mobile">
          <image
            className="show-mobile"
            y={"10%"}
            width={"50%"}
            href="schmooz-text.svg"
          />
        </svg>

        <div
          className="header-web"
          style={{
            flex: 1,
            display: "flex",
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
              fontSize: 20,
              backgroundColor: ColorString.transparent,
            }}
            href="www.schmooz.app"
          >
            About
          </a>
          <a
            className="text-medium header-web"
            style={{
              fontSize: 20,
              textDecoration: "none",
              color: ColorString.white,
              fontWeight: "bold",
              backgroundColor: ColorString.transparent,
            }}
            href="www.schmooz.app"
          >
            Terms
          </a>
          <a
            className="text-medium header-web"
            style={{
              fontSize: 20,
              textDecoration: "none",
              color: ColorString.white,
              fontWeight: "bold",
              backgroundColor: ColorString.transparent,
            }}
            href="www.schmooz.app"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
