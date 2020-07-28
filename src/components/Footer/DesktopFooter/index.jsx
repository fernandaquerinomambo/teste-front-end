import React from "react";

import "./footer-desktop.scss";

export default () => {
  return (
    <div className="footer-content">
      <footer className="footer-info">
        <div className="content-help">
          <ul>
            <h1>Intitucional</h1>
            <li>Sobre Mambo</li>
            <li>Nossas Lojas</li>
            <li>Trabalhe Conosco</li>
            <li>Marketplace</li>
          </ul>
          <ul>
            <h1>Ajuda e suporte</h1>
            <li>Fale Conosco</li>
            <li>Duvidas Frequentes(FAQ)</li>
            <ul>
              <div className="SAC-content">
                <li>SAC:(11)2388-8238</li>
                <li>De segunda a sexta das 08h às 22h</li>
                <li>Aos sábados das 08h às 20h</li>
              </div>
            </ul>
          </ul>
          <ul>
            <h1>Sobre o serviço</h1>
            <li>Política de troca</li>
            <li>Formas de pagamento</li>
            <li>Sobre a entrega</li>
            <li>Política de Privacidade</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
