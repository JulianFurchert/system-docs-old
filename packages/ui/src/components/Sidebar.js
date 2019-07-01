import styled from 'styled-components'
import { css } from '../system-functions' ;

export const Sidebar = styled.div(
  css({
    bg: 'sidebarBg',
    height: '100vh',
    width: 224,
    borderRight: '1px solid',
    borderColor: 'menuTitle',
    variant: 'styles.Sidebar'
  })
)

export const SidebarHeader = styled.header(
  css({
    width: '100%',
    height: 56,
    borderBottom: '1px solid',
    borderColor: 'menuTitle',
    variant: 'styles.SidebarHeader'
  })
)

export const SidebarContent = styled.nav(
  css({
    width: '100%',
    minHeight: 56,
    variant: 'styles.SidebarNav'
  })
)