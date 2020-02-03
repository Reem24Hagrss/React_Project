import React from 'react';

import { NavbarSection , Logo , LogoText , UlList , ListItem, Anchor , AnchorLink} from './style.js';

function Navbar() {
  return (
    <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText> Ultra Profile </LogoText>
                </Logo>
                
                <UlList>
                    <ListItem> <AnchorLink to="/">Home</AnchorLink> </ListItem>
                    <ListItem> <Anchor href="#">Work</Anchor>     </ListItem>
                    <ListItem> <Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem> <Anchor href="#">Resume</Anchor>   </ListItem>
                    <ListItem> <Anchor href="#">About</Anchor>    </ListItem>
                    <ListItem> <AnchorLink to="/contact">Contact</AnchorLink> </ListItem>
                </UlList>
                
            </div>
            
    </NavbarSection>
  );
}

export default Navbar;
