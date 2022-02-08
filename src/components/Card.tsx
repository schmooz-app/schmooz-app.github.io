import React from "react";
import "../css/Common.css";

export function Card({
  header,
  body,
  image,
}: {
  header: string;
  body: string;
  image?: JSX.Element;
}) {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 25,
      }}
      className="card"
    >
      <div>{image}</div>

      <p className="header-text-card">{header}</p>
      <p className="text-small-plus">{body}</p>
    </div>
  );
}
