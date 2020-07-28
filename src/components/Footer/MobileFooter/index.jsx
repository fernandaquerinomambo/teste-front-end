import React from "react";

import "./footer-mobile.scss";
import FooterItem from "./FooterItem";

export default () => {
  return (
    <div>
      <FooterItem title={"Institucional"}>
        <ul>
          <li>Sobre Mambo</li>
          <li>Nossas Lojas</li>
          <li>Trabalhe Conosco</li>
          <li>Marketplace</li>
        </ul>
      </FooterItem>
      <FooterItem title={"Ajuda e suporte"}>
        <ul>
          <li>Fale Conosco</li>
          <li>Duvidas Frequentes(FAQ)</li>
          <li>SAC:(11)2388-8238</li>
          <li>De segunda a sexta das 08h às 22h</li>
          <li>Aos sábados das 08h às 20h</li>
        </ul>
      </FooterItem>
      <FooterItem title={"Sobre o serviço"}>
        <ul>
          <li>Política de troca</li>
          <li>Formas de pagamento</li>
          <li>Sobre a entrega</li>
          <li>Política de Privacidade</li>
        </ul>
      </FooterItem>
    </div>
  );
};
