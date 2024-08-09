"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Link as ScrollLink } from "react-scroll";
import useDragger from "@/hooks/useDragger";
import fitflex from "../../public/images/fitflex.png";
import estate from "../../public/images/estate.png";
import megablog from "../../public/images/megablog.png";
import curioseek from "../../public/images/curioseek.png";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  // useDragger("dragger");
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      id="dragger"
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <ScrollLink
          to="heroSection"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Home")}
        >
          <MenuItem setActive={setActive} active={active} item="Home" />
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("About")}
        >
          <MenuItem setActive={setActive} active={active} item="About" />
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Projects")}
        >
          <MenuItem setActive={setActive} active={active} item="Projects" />
            </ScrollLink>
        <ScrollLink
          to="codingProfiles"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Profiles")}
        >
          <MenuItem
            setActive={setActive}
            active={active}
            item="Profiles"
          />
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Skills")}
        >
          <MenuItem setActive={setActive} active={active} item="Skills" />
        </ScrollLink>

        <ScrollLink
          to="contactUs"
          smooth={true}
          duration={500}
          onSetActive={() => setActive("Contact Us")}
        >
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </ScrollLink>
      </Menu>
    </div>
  );
};

export default Navbar;
