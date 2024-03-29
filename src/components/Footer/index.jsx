import React from 'react'

import * as S from './styled'
import SocialLinks from 'components/SocialLinks'
import space from 'utils/JSON/rocketlaunch.json'

import config from 'config'

const Footer = () => {
  const { footer } = config
  return (
    <S.FooterWrapper className="shadow">
      <S.PlayerFooter src={space} loop autoplay />
      <S.Container>
        <SocialLinks />
        <S.Text>{footer.title}</S.Text>
        <S.Text>
          {footer.description} - {new Date().getFullYear()}
        </S.Text>
      </S.Container>
    </S.FooterWrapper>
  )
}

export default Footer
