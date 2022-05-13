import React from "react";
import { useFirebase } from "../../hooks";
import SwipeGroup from "../components/SwipeGroup";
import Container from "../components/SwipeContainer";

const Homepage = () => {
  const snapShot = useFirebase("draws/draw");

  console.log(snapShot);

  return (
    <SwipeGroup>
      <Container>
        <section>
          <div className="content">
            <div className="children-slide flow-large">
              <h1 className="gradient-highlight upper black">
                Welcome, Rebel!
              </h1>
              <h3>Here are a few guideliens to get you started</h3>
              <div className="sample-sentences children-slide flow-small paragraph-medium">
                <p>
                  There are no rules (I mean, seriously. Just don't get kicked
                  out. It's embarrasing).
                </p>
                <p>Your English is not terrible. You're just drunk.</p>
                <p>
                  There are teachers and monitors around. Feel free to scream
                  for help.
                </p>
                <p>
                  We, the Rebels, are nice, friendly people, but don't get
                  excited.
                </p>
                <p>
                  This page is ultimately useless and the "Swipe Up" function
                  doesn't work. Life is meaningless and we're all going to die.
                </p>
                <p className="gradient-highlight">
                  <strong>
                    <span className="highlight-size">Have fun!</span>
                  </strong>
                </p>
              </div>
              <div className="swipe-up-container exception-flow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 60 60"
                  id="svg-arrow-up"
                >
                  <g stroke="white" strokeWidth="4" fill="transparent">
                    <path
                      d="M 10 40 L 30 15 L 50 40"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <span>Swipe Up</span>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Container>
        <p>Hello world!</p>
      </Container>
    </SwipeGroup>
  );
};

export default Homepage;
