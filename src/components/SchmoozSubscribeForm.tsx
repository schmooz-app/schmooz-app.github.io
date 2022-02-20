import React, { useState } from "react";
import { ColorString } from "../ColorPalette";
import "../css/Common.css";

export function SchmoozSubscribeForm({
  status,
  message,
  onValidated,
}: {
  status: "error" | "success" | "sending" | null;
  message: string | Error | null;
  onValidated: (val: any) => void;
}) {
  const [email, setEmail] = useState<string>("");

  const submit = (event: any) => {
    event.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
        MERGE5: "",
      });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          submit(event);
        }}
      >
        <div
          style={{
            display: "flex",
            borderWidth: 1,
            maxWidth: "500px",
            minWidth: "300px",
            borderColor: ColorString.grey,
            borderRadius: 10,
            alignContent: "center",
            alignItems: "center",
          }}
          className="subscribe-section"
        >
          <input
            value={email}
            placeholder="email address"
            onChange={(val) => setEmail(val.target.value)}
            style={{
              paddingLeft: 10,
              outlineWidth: 0,
              fontSize: 20,
              border: 0,
              borderColor: ColorString.lightGrey,
              borderRadius: 10,
              height: 50,
            }}
            className="subscribe-fields"
          />
          <input
            type="submit"
            value="Subscribe"
            className="text-medium subscribe-buttons"
            style={{
              textAlign: "center",
              backgroundColor: ColorString.red,
              border: 0,
              color: ColorString.white,
              fontSize: 17,
              height: 52,
              borderRadius: 10,
            }}
          />
        </div>
        <div style={{ height: 20 }}>
          {status === "sending" && (
            <div
              className="text-medium"
              style={{ color: ColorString.white, fontSize: 14, maxWidth: 300 }}
            >
              sending...
            </div>
          )}
          {status === "error" && (
            <div
              style={{ color: ColorString.red, fontSize: 14, maxWidth: 300 }}
              className="text-medium"
              dangerouslySetInnerHTML={{ __html: message as string }}
            />
          )}
          {status === "success" && (
            <div
              className="text-medium"
              style={{
                color: ColorString.white,
                fontSize: 14,
                maxWidth: 300,
              }}
              dangerouslySetInnerHTML={{ __html: message as string }}
            />
          )}
        </div>
      </form>
    </div>
  );
}
