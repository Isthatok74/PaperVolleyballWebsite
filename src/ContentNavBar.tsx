import styled, {css} from 'styled-components'
import { NavLink } from "react-router-dom";
import RouteNames from "./routes"; 

// An implementation for making active links appear highilghted
// * loosely adapted from: https://codesandbox.io/p/sandbox/react-rourt-dom-navlink-q8ci8?file=%2Fsrc%2Fnavbar.css%3A5%2C1
function ContentNavBar() : JSX.Element
{
  return (<>
    <nav>
      <NavUnorderedList>
        <NavBarItem $alignLeft><StyledNavLink to={RouteNames.HOME}>Paper Volleyball</StyledNavLink></NavBarItem>
        <NavBarItem><StatefulStyledNavLink to={RouteNames.DONATE}>Donate</StatefulStyledNavLink></NavBarItem>
        <NavBarItem><StatefulStyledNavLink to={RouteNames.ABOUT}>About</StatefulStyledNavLink></NavBarItem>
        <NavBarItem><StatefulStyledNavLink to={RouteNames.HOME}>Home</StatefulStyledNavLink></NavBarItem>
      </NavUnorderedList>
    </nav>
  </>);
}

// wrap ul tag with some formatting
const NavUnorderedList = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
  height: 32px;
  
  // Clear the float after the right-aligned links
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`

// wrap li tag with some formatting
const NavBarItem = styled.li<{$alignLeft?: boolean}>`
    display: inline;
    margin-left: 4px;
    margin-right: 24px;
    height: 32px;
    line-height: 32px;

    ${props => props.$alignLeft ? css`float: left;` : css`float: right;`}
`

// apply some custom styling to the buttons on this component
const StyledNavLink = styled(NavLink)`
  color: white;
`;

// apply some custom styling to the buttons on this component
const StatefulStyledNavLink = styled(StyledNavLink)`
  &.active {
    color: lightgray;
  }
`;


export default ContentNavBar;