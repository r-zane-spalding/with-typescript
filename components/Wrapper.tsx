import React, { Children, ReactNode, useState } from "react"
import { styled } from "@mui/material/styles"
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ClearIcon from '@mui/icons-material/Clear';

type Props = { children: ReactNode }

const Wrapper: React.FC<Props> = ({children}) => {
  const Header = styled('div')(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    height: '5rem',
    width: '100%',
    display: 'inline-flex',
    zIndex: 100,
    background: '#D3D3D3'
  }))
  
  const TitleDiv = styled('div')(() => ({
    border: '1px solid black',
    borderRight: 0,
    borderTop: 0,
    display: 'flex',
    width: menuExpanded ? '70%' : '85%',
    transition: 'width 2s ease-out',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > span' : {
      paddingLeft: '1.5rem'
    },
  }))
  
  const MenuDiv = styled('div')(() => ({
    border: '1px solid black',
    borderTop: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: menuExpanded ? '30%' : '15%',
    transition: 'width 2s ease-out',
    position: 'relative',
    '& > *' : {
      marginRight: '1.5rem'
    },
  }))

  const OverlayCropSquareIcon = styled(CropSquareIcon)(() => ({
    position: 'absolute', 
    bottom: '-12.5px', 
    left: '-12.5px', 
    zIndex: 100,
    background: '#D3D3D3'
  }))
  
  const ContentWrapperDiv = styled('div')(() => ({
    display: 'inline-flex',
    width: '100%',
    position: 'absolute',
    top: '5rem',
    right: 0,
  }))

  const ChildrenWrapperDiv = styled('div')(() => ({
    width: menuExpanded ? '70%' : '85%',
    transition: 'width 2s ease-out',
  }))

  const SidebarDiv = styled('div')(() => ({
    position: 'fixed',
    top: '5rem',
    right: 0,
    width: menuExpanded ? '30%' : '15%',
    transition: 'width 2s ease-out',
    border: '1px solid black',
    borderBottom: 0,
    borderTop: 0,
    paddingTop: '1rem',
    marginTop: '0.7rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2.5rem'
  }))

  const [menuExpanded, setMenuExpanded] = useState(false)

  return (
    <>
      <Header>
        <TitleDiv><span>Sempre.ai</span></TitleDiv>
        <MenuDiv>
          <span style={{zIndex: 100, cursor: 'pointer'}} onClick={() => setMenuExpanded(!menuExpanded)}>{menuExpanded ? <ClearIcon/> : 'Menu'}</span>
          <OverlayCropSquareIcon />
        </MenuDiv>
      </Header>
      <ContentWrapperDiv>
        <ChildrenWrapperDiv>{children}</ChildrenWrapperDiv>
        <SidebarDiv>
          {
            menuExpanded ? 
              ['Home', 'About', 'Products', 'Resources', 'Careers', 'Contacts'].map(
                section => <span>{section}</span>
              ) 
              : 
              <></>
          }
        </SidebarDiv>
      </ContentWrapperDiv>
    </>
  )
}

export default Wrapper