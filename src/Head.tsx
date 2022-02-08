import React from "react";
import { iconSchmooz } from "./assets/svgFunction/iconSchmooz";
import { ColorString } from "./ColorPalette";
import { SignupForm } from "./components/SignupForm";
import "./css/Common.css";
import "./css/Body.css";

export function Head() {
  return (
    <header className="sticky-thc">
      <div
        className="text-medium "
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

        <div
          className="header-web"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textDecoration: "none",
            alignItems: "center",
          }}
        >
          <a
            className="text-medium header-web"
            style={{
              textDecoration: "none",
              color: ColorString.white,
              fontWeight: "bold",
              fontSize: 30,
            }}
            href="www.schmooz.app"
          >
            About
          </a>
          <a
            className="text-medium header-web"
            style={{
              fontSize: 30,
              textDecoration: "none",
              color: ColorString.white,
              fontWeight: "bold",
            }}
            href="www.schmooz.app"
          >
            Terms
          </a>
          <a
            className="text-medium header-web"
            style={{
              fontSize: 30,
              textDecoration: "none",
              color: ColorString.white,
              fontWeight: "bold",
            }}
            href="www.schmooz.app"
          >
            Contact
          </a>
        </div>
        <div className="hide-mobile" style={{ justifyContent: "flex-end" }}>
          <SignupForm />
        </div>
      </div>
    </header>
  );
}
