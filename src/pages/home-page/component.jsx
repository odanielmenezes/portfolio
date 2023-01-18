import React from "react";
import StyleDesktop from "./style-desktop";
import StyleMobile from "./style-mobile";
import CheckDevice from "../../hooks/verify-device";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Component = () => {
  const isMobile = CheckDevice();

  if (isMobile) {
    return (
      <StyleDesktop>
        <div className="Home">
          <div className="Header">
            <div className="Logo">
              <img src={Logo} alt="" />
            </div>
            <div className="Buttons">
              <a>sobre mim</a>
              <a
                href="https://wa.me/5551994666017?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
                target="_blank"
                rel="noreferrer"
              >
                Diga olá
              </a>
            </div>
          </div>
          <main className="MainContent">
            {/* <Player
              className="LootieAnimation"
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_DhQ3ICdg4R.json"
              style={{ height: "450px", width: "450px", marginTop: "-200px" }}
            /> */}
            <h1>
              Olá, me chamo Daniel, sou desenvolvedor Web e Mobile.
              <br />
              <small>Crio telas, sites e interfaces de usuário dinâmicas e inuitivas. Dê vida ao seu projeto agora mesmo!</small>
            </h1>
            <div className="Avatar">
              <img src={Avatar} alt="" />
            </div>
            <small className="seeMore">
              Saiba mais sobre o que faço
              <FontAwesomeIcon icon={faChevronDown} />
            </small>
          </main>
        </div>
      </StyleDesktop>
    );
  }

  return (
    <StyleMobile>
      <div className="Home">
        <div className="Header">
          <div className="Logo">
            <img src={Logo} alt="" />
          </div>
          <div className="Buttons">
            <a>sobre mim</a>
            <a
              href="https://wa.me/5551994666017?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
              target="_blank"
              rel="noreferrer"
            >
              Diga olá
            </a>
          </div>
        </div>
        <main className="MainContent">
          {/* <Player
              className="LootieAnimation"
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_DhQ3ICdg4R.json"
              style={{ height: "450px", width: "450px", marginTop: "-200px" }}
            /> */}
          <h1>
            Olá, me chamo Daniel, desenvolvo telas, sites e <br /> interfaces de
            usuário dinâmicas.
          </h1>
          <div className="Avatar">
            <img src={Avatar} alt="" />
          </div>
          <small className="seeMore">
            Saiba mais sobre o que faço
            <FontAwesomeIcon icon={faChevronDown} />
          </small>
        </main>
      </div>
    </StyleMobile>
  );
};

export default Component;

<div className="Icons">
  <a
    href="https://www.instagram.com/odanmenezes/"
    target="_blank"
    rel="noreferrer"
  >
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a
    href="https://wa.me/5551994666017?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
    target="_blank"
    rel="noreferrer"
  >
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
  <a href="https://github.com/odanielmenezes" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faGithub} />
  </a>
</div>;
