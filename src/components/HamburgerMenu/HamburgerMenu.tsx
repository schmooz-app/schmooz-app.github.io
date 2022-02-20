import { ColorString } from "../../ColorPalette";
import styledComponents from "styled-components";
import { useState } from "react";

const HamburgerMenu = styledComponents.nav``;

export function Menu() {
  const links = [
    { title: "Home", href: "terms.html" },
    { title: "About", href: "terms.html" },
    { title: "Terms", href: "terms.html" },
    { title: "Contact", href: "terms.html" },
  ];
  const [linkState, setLinkState] = useState(false);

  if (linkState) {
    return (
      <HamburgerMenu
        className="sandwich-menu"
        style={{
          flexDirection: "column",
          backgroundColor: ColorString.schmoozGreen,
          zIndex: 10,
          height: 400,
          borderColor: ColorString.white,
          borderRadius: 10,
        }}
      >
        <div
          style={{
            backgroundColor: ColorString.schmoozGreen,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <svg
            className="show-mobile"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="53"
            viewBox="0 0 75 75"
            preserveAspectRatio="XminYmin meet"
          >
            <image
              className="show-mobile"
              y={-15}
              x={35}
              onClick={() => setLinkState(false)}
              width="50%"
              height="100%"
              href="close.svg"
            />
          </svg>
        </div>
        {links.map((val) => {
          return (
            <a
              className="text-medium"
              style={{
                fontSize: 30,
                textDecoration: "none",
                paddingTop: 25,
                paddingBottom: 25,
                color: ColorString.white,
                fontWeight: "bold",
                backgroundColor: ColorString.transparent,
              }}
              href="terms.html"
            >
              {val.title}
            </a>
          );
        })}
      </HamburgerMenu>
    );
  } else {
    return (
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
    );
  }
}
