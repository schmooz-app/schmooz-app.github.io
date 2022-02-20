import "./css/Body.css";
import "./css/Common.css";
import { Card } from "./components/Card";
import { iconCreateSession } from "./assets/svgFunction/iconCreateSession";
import { iconViewBids } from "./assets/svgFunction/iconViewBids";
import { iconMeetUsers } from "./assets/svgFunction/iconMeetUsers";
import { ColorString } from "./ColorPalette";
import { SignupForm } from "./components/SignupForm";

export function Body() {
  return (
    <body>
      <div className="copy-flex">
        <p className="header-text">Meet Schmooz</p>
        <p className="text-medium">
          A new way for creators to build meaningful relationships with their
          fans and potential customers. It's never been easier to engage with
          your fans, and followers.
        </p>
      </div>
      <div className="copy-flex">
        <p className="header-text">Learn How it Works</p>
        <div style={{ flex: 1 }} className="card-row">
          <Card
            header={"Create Sessions"}
            body={"Schedule fan meetings based on your availability"}
            image={iconCreateSession()}
          />
          <Card
            header={"View User Bids"}
            body={"See fans bid on your scheduled sessions"}
            image={iconViewBids()}
          />
          <Card
            header={"Meet With Users"}
            body={"Engage with session winners on a secure video call"}
            image={iconMeetUsers()}
          />
        </div>
      </div>
      <div className="copy-flex">
        <p className="header-text">Receive Updates</p>
        <div
          style={{
            flex: 1,
            display: "flex",
            borderRadius: 30,
            backgroundColor: ColorString.schmoozGreen,
            alignItems: "center",
            justifyContent: "center",
          }}
          className="card-row"
        >
          <p
            className="text-medium"
            style={{
              flex: 1,
              paddingRight: 30,
              paddingLeft: 30,
              color: ColorString.white,
              textAlign: "center",
            }}
          >
            We would love to keep you updated with our development progress!
          </p>
          <div
            style={{
              flex: 1,
              alignContent: "center",
              padding: 20,
            }}
            className="signup-card-div"
          >
            <SignupForm />
          </div>
        </div>
      </div>
    </body>
  );
}
