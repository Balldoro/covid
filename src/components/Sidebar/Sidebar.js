import React from "react";
import {
  Wrapper,
  List,
  ListItem,
  LinkIcon,
  LinkWrapper
} from "./SidebarStyles";
import { FaGlobeEurope, FaMap } from "react-icons/fa";

function Sidebar() {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <LinkWrapper to="/global">
            <LinkIcon>
              <FaGlobeEurope />
            </LinkIcon>
            Global
          </LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper to="/countries">
            <LinkIcon>
              <FaMap />
            </LinkIcon>
            Countries
          </LinkWrapper>
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default Sidebar;
