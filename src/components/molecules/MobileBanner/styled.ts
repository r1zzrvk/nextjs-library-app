import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  border-radius: 24px;
  width: 100%;
  height: 128px;
  margin-top: ${theme.space.lg}px;
  p {
    position: absolute;
    margin-top: 50px;
    margin-left: ${theme.space.sm}px;
    z-index: 1000;
  }
`
const Image = styled.div`
  background-image: url('https://i.ibb.co/vHtWypY/bed.png');
  filter: blur(1px);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  z-index: 0;
`
export const Styled = {
  Wrapper,
  Image,
}
