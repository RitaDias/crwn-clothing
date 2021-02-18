import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubTitleContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className={`${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <ContentContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <SubTitleContainer>SHOP NOW</SubTitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
