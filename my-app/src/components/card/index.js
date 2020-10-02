import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

function Card({ logo, isActive }) {
  return (
   <S.Card isActive={isActive}>
       <S.Image src={logo} />
    </S.Card>
  );
}

Card.propTypes = {
    logo: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
}

export default Card;
