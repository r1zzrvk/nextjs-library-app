import { FC } from 'react'
import { NAVIGATION_TITLES, theme } from '@constants'
import { Text } from '@components'
import { Styled } from './styled'
import { UserBlock } from './UserBlock'

export const Header: FC = () => (
  <Styled.Wrapper>
    {NAVIGATION_TITLES.map(({ title, href }) => (
      <Text key={title} paddingRight={theme.space.xl} marginBottom={theme.space.xs} asLink href={href}>
        {title}
      </Text>
    ))}
    <UserBlock />
  </Styled.Wrapper>
)
