import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../../public/assets/svg/Logo";


export default function TopNavbar() {
  const [y, setY] = useState<number>(
    () => (typeof window !== "undefined" ? window.scrollY : 0)
  );
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    // 2) Définition d’un handler qui ne sera appelé qu’en client
    const handleScroll = () => {
      setY(window.scrollY);
    };

    // 3) On l’attache une seule fois
    window.addEventListener("scroll", handleScroll);

    // 4) Cleanup propre
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // <-- dépendances vides : on monte / démonte l’écouteur une seule fois
  return (
    <>
{sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
{sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}

      <Wrapper 
      className="flexCenter animate whiteBg" 
      style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <a href="/accueil" className="pointer flexNullCenter">
            <LogoIcon />
          </a>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/accueil" style={{ padding: "10px 15px" }}>
                Accueil
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="Forum" style={{ padding: "10px 15px" }}>
                Forum
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="Activités" style={{ padding: "10px 15px" }}>
                Activités
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="Contact"  style={{ padding: "10px 15px" }}>
                Nous connaître
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/adherer"  style={{ padding: "10px 15px" }}>
                Adhérer
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="Promouvoir"  style={{ padding: "10px 15px" }}>
                Promouvoir
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/apprendre"  style={{ padding: "10px 15px" }}>
                Apprendre
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/enseigner"  style={{ padding: "10px 15px" }}>
                Enseigner
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/divers"  style={{ padding: "10px 15px" }}>
                Divers
              </a>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 2px solid blue;
  background-color: red;
  height: 100%;
  padding: 0 15px;
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
