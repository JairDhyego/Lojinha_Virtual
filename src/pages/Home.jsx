import React from "react";
import "../styles/home.css";

const Home = () => {
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
              <label>Usuário</label>
              <input
                className="input"
                placeholder="Digite sua ID, email ou cpf"
              />
            </div>

            <div className="group">
              <label> Senha </label>
              <input className="input" placeholder="Digite sua senha" />
            </div>

            <span>
              Para alterar sua senha <a href="#">clique aqui!</a>
            </span>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
