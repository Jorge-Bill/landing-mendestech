import styled from 'styled-components'
import media from 'styled-media-query'
import { Player } from '@lottiefiles/react-lottie-player'

export const FooterWrapper = styled.footer`
  // opacity: 0.8;
  background-color: ${({ theme }) => theme.colors.black};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.black} 0%,
    ${({ theme }) => theme.colors.darker} 100%
  );
  // box-shadow: 0 4px 4px 0 ${({ theme }) => theme.colors.black};
  transition: ${({ theme }) => theme.transition.default};
  filter: contrast(200%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 28vh;
  position: relative;
`

export const PlayerFooter = styled(Player)`
  max-width: 100vw;
  max-height: 28vh;
  z-index: 1;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  ${media.lessThan('large')`
    min-height: 100%;
  `}
`

export const Container = styled.div`
  opcity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 999;
`

export const Text = styled.p`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.xxsmall};

  &:last-child {
    color: ${({ theme }) => theme.colors.bluehighlight};
  }
`
