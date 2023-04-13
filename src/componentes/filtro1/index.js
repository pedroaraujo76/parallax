import { useState, useEffect } from "react";
import "./parallax.css";

export const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        style={{
          backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
        }}
        className="banner container"
      >
        <h2>Efeito Parallax</h2>
        <button>Utlizando React</button>
      </section>
      <section className="container">
        <h2>O que é o Parallax?</h2>
        <p>
          O efeito parallax tem como base uma ilusão de ótica, pois dá a impressão ao olho humano de que objetos ou pessoas estão em movimento, mais perto ou afastados. Assim, esse recurso de webdesign causa a sensação de que imagens distantes se movimentam mais devagar do que os objetos que estão próximos.
        </p>
      </section>
    </>
  );
};

export default Parallax;
