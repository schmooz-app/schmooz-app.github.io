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
    <>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={(event) => {
            submit(event);
          }}
        >
          <div
            style={{
              display: "flex",
              borderWidth: 1,
              width: "100%",
              borderColor: ColorString.lightGrey,
              backgroundColor: ColorString.white,
              borderRadius: 10,
              height: 52,
            }}
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
                flex: 3,
                width: "60%",
                borderColor: ColorString.lightGrey,
                borderRadius: 10,
                height: 50,
              }}
            />
            <input
              type="submit"
              value="Subscribe"
              className="text-medium"
              style={{
                flex: 1,
                backgroundColor: ColorString.red,
                border: 0,
                color: ColorString.white,
                fontSize: 17,
                height: 52,
                borderRadius: 10,
              }}
            />
          </div>
          {status === "sending" && (
            <div
              className="text-medium"
              style={{ color: ColorString.white, fontSize: 14 }}
            >
              sending...
            </div>
          )}
          {status === "error" && (
            <div
              style={{ color: ColorString.red, fontSize: 14 }}
              className="text-medium"
              dangerouslySetInnerHTML={{ __html: message as string }}
            />
          )}
          {status === "success" && (
            <div
              className="text-medium"
              style={{ color: ColorString.white, fontSize: 14 }}
              dangerouslySetInnerHTML={{ __html: message as string }}
            />
          )}
        </form>
      </div>
    </>
  );
}
