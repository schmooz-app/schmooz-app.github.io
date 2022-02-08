import { ColorString } from "./ColorPalette";
import "./css/Common.css";

export function Footer() {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          marginTop: 62,
          height: 58,
          backgroundColor: ColorString.schmoozGreen,
        }}
      >
        <p style={{ textAlign: "center", color: ColorString.white }}>
          © Schmooz 2022
        </p>
      </div>
    </footer>
  );
}
