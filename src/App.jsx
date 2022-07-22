import React from "react";
import loveInTheAir from "./assets/img/loveInTheAir.png";
import { ideas } from "./assets/ideas";

export const App = () => {
  return (
    <>
      <div className="info">
        <div></div>
        <div>
          <h1 className="text-center">100 Citas Challenge</h1>
          <hr />
          <p>
            Sabemos que puede llegar un momento donde tu y tu pareja no saben a
            dónde ir juntos... es por eso que he recopilado en esta página un
            challenge que se ha viralizado en tiktok de 100 CITAS CHALLENGE.
          </p>
          <img src={loveInTheAir} alt="citas challenge" />

          <ol>
            {ideas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ol>

          <div className="credits">
            <p>Created with ❤️ @luisrrleal</p> 
            <a href="http://luislealdev.web.app">
              <p>https://luislealdev.web.app</p>
            </a>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};
