import React from "react";
import Headroom from "react-headroom";
import "./scss/90s.scss";

function Nineties() {
  return (
    <Headroom>
      <div id="ninties">
        <br></br>
        <br></br>
        <h1 class="center text animated shake" id="grad1">
          ZACHERY
        </h1>
        <div class="center">
          <p>
            I love emergency medicine and the idea of tricking rocks into doing
            a ton of math
          </p>
          <h2 id="grad2" class="text animated pulse">What I Do</h2>
          <div className="skills">
            <p>TRICK ROCKS INTO DOING LOTS OF MATH FOR VIDEO GAMES</p>
            <p>- Advanced with Java and Kotlin</p>
            <p>- Highly experienced with with SpigotMC and dirivatives</p>
            <p>- Great at causing bugs and then solving them</p>
            <p>- Vauge understanding of emergency medicine</p>
          </div>
          <h2 id="grad2" class="text animated swing">Get In Contact</h2>
          <div className="socials">
            <p>
              {" "}
              <a href="https://twitter.com/zachyfoxx">Twitter</a>{" "}
              <a href="https://github.com/ZachyFoxx">GitHub</a>{" "}
              <a href="mailto:notzachery@gmail.com">G-Mail</a>{" "}
              <a href="https://discord.com/users/359098534307299329">Discord</a>{" "}
              <a href="https://t.me/ZachyFoxx">Telegram</a>{" "}
              <a href="https://www.spigotmc.org/members/notzachery.625991/">
                SpigotMC
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </Headroom>
  );
}
export default Nineties;
