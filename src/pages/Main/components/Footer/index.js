import React, { memo } from "react";
//import PropTypes from "prop-types";

import { FooterContainer, FooterLinkText, LabelFooterText } from "../styles";

function Footer() {
  return (
    <FooterContainer>
      <LabelFooterText>
        Desenvolvido por{" "}
        <FooterLinkText
          href="https://linkedin.com/in/luizeduul"
          target="_blank"
          noopener
          noreferrer
        >Luiz Uliana</FooterLinkText>
      </LabelFooterText>
    </FooterContainer>
  );
}

export default memo(Footer);
