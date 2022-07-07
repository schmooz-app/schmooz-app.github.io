import "./css/Common.css";
import "./css/Body.css";
import { SignupForm } from "./components/SignupForm";
import { ColorString } from "./ColorPalette";
import { Menu } from "./components/HamburgerMenu/HamburgerMenu";
import { iconSchmooz } from "./assets/svgFunction/iconSchmooz";
import { useState } from "react";

export function Header() {
  return (
    <>
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
          <Menu />
        </div>
      </header>
      <div style={{ position: "relative" }}>
        <svg
          className="svg-header hide-mobile"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="xMinYMin meet"
          xmlns="http://www.w3.org/2000/svg"
          z={-1}
        >
          <image
            className="hide-mobile"
            x={0}
            y={0}
            href="web-header-background.svg"
          />
          <image className="hide-mobile" x={0} y={0} href="schmooz-text.svg" />
          <image
            className="hide-mobile"
            x={750}
            y={80}
            href="banner-image.svg"
          />
        </svg>

        <svg
          className="svg-header show-mobile"
          viewBox="0 0 390 745"
          fill="none"
          preserveAspectRatio="xMinYMin meet"
          xmlns="http://www.w3.org/2000/svg"
          z={-1}
        >
          <image
            className="show-mobile"
            y={"-20%"}
            width={"100%"}
            height="100%"
            href="mobile-header-background.svg"
          />
          <image
            className="show-mobile"
            width={"70%"}
            x={"15%"}
            y={"5%"}
            href="banner-image.svg"
          />
          <image
            className="show-mobile"
            y={"25%"}
            width={"100%"}
            href="schmooz-text.svg"
          />
        </svg>
      </div>
      <div
        className="text-medium slogan-mobile"
        style={{
          color: ColorString.white,
          paddingLeft: "5%",
          marginTop: "9%",
          paddingBottom: "25%",
        }}
      >
        <p>Don’t hit snooze. Hit Schmooz.</p>
        <p> Time well spent.</p>
        <SignupForm className="header-signup" />
      </div>
    </>
  );
}
