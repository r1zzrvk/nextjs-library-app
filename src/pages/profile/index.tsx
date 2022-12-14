import { FC, useState } from 'react'
import { ProfileMenu, ProfileTab, ProfileWrapper } from '@components'
import { PROFILE_MENU } from '@constants'
import { useBreakpoint } from '@hooks'
import { TTab } from '@types'

const ProfilePage: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('1')
  const currentTab: TTab | undefined = PROFILE_MENU.find(({ id }) => id === selectedTabId)
  const { isTablet, isSm } = useBreakpoint()
  return (
  <ProfileWrapper>
    <ProfileMenu activeTab={selectedTabId} onSelect={setSelectedTabId} isColumn={isTablet || isSm}/>
    {(isTablet || isSm) || <ProfileTab activeTab={currentTab}/>}
  </ProfileWrapper>
)}

export default ProfilePage