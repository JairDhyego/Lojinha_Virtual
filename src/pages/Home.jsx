import React, { useEffect, useState } from "react";
import "../styles/home.css";

const Home = () => {
  const [emailValid, setEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(email)) {
      setEmailValid(true);
    } else if (!emailRegex.test(email) && email !== "") {
      setEmailValid(false);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <div className="containerHome">
      <div className="wrapper">
        <div className="left">
          <div>
            <div className="logo">
              <h2>Logo</h2>
            </div>
          </div>
          <h2 className="Text-Left">Bem vindo!</h2>
        </div>
        <div className="right">
          <form>
            <div className="X">
              <span>X</span>
            </div>
            <div className="group">
              <label>Email</label>
              <input
                className="input"
                name="email"
                placeholder="Digite seu email"
                onChange={handleOnChange}
              />
            </div>

            <div className="group">
              <label> Senha </label>
              <input
                name="password"
                className="input"
                placeholder="Digite sua senha"
              />
            </div>

            <span>
              Para alterar sua senha <a href="#">clique aqui!</a>
            </span>
            <button
              onClick={emailValidation}
              className={`${!emailValid ? "block" : ""}`}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
