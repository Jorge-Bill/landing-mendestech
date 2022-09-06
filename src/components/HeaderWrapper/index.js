import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const HeaderWrapper = ({ children, ...props }) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
);

HeaderWrapper.propTypes = { children: PropTypes.node.isRequired };

export default HeaderWrapper;
