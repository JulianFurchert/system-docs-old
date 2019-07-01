import styled from 'styled-components'
import { css } from '../system-functions' ;

export const Sidebar = styled.div(
  css('sidebar', {
    bg: 'sidebarBg',
    height: '100vh',
    width: 224,
    borderRight: '1px solid',
    borderColor: 'menuTitle',
  })
)

export const SidebarHeader = styled.header(
  css('sidebarHeader', {
    width: '100%',
    height: 56,
    borderBottom: '1px solid',
    borderColor: 'menuTitle',
  })
)

export const SidebarContent = styled.nav(
  css('sidebarNav', {
    width: '100%',
    minHeight: 56,
  })
)