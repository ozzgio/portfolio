import styled from '@emotion/styled'
import { TabPanel, Tabs } from '@chakra-ui/react'

export const TabsTitle = styled(Tabs)`
  variant:'soft-rounded';
  colorScheme:"orange";
  margin-bottom : 2px;
`

export const StyledChip = styled(TabPanel)`
    font-weight:bold;
    font-size:18px
    display:inline;
    align-items:center;
    padding: 10px;
    line-height: 50px;
    border-color: gray;
    border-width : 2px; 
    border-style : "solid";
    width : 100px;
    height : 50px;
    line-height: "50px"
    border-radius: "25px"
    margin-top : "10px";
`;