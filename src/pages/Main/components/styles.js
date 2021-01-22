import styled from "styled-components";
import { Typography, CardContent } from "../../../components";

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2.5rem;
`;
export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({color}) => color || '#5d78ff'};
  height: 180px;
`;

export const ContainerDescriptionPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;

export const FooterContainer = styled.footer`
display: flex;
align-items: center;
justify-content: center;
  height: 60px;
  width: 100%;
  background-color: #C2B2FF;
`;

export const LabelFooterText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const FooterLinkText = styled.a`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: #140552;
  cursor: pointer;
`;
