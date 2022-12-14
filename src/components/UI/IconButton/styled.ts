import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.4s;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    padding-right: ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding-right: ${theme.space.md}px;
  }

  &:hover {
    scale: 1.3;
  }
`

export const Styled = {
  Wrapper,
}
