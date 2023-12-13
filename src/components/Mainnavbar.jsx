import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Mainnavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full">
            <NavbarContent>
                <NavbarBrand>
                    <NavLink to='/'>
                        <p className="font-bold text-inherit">S I M S</p>
                    </NavLink>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color={`${location.pathname === '/' ? 'primary' : 'foreground'}`}>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={`${location.pathname === '/contactme' ? 'primary' : 'foreground'}`}>
                        <NavLink to="/contactme">
                            Contact Me
                        </NavLink>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button color="primary" variant="flat">
                        <NavLink to='/'>
                            Log Out
                        </NavLink>
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarMenu className="bg-black">
                <NavbarMenuItem >
                    <Link className={`w-full ${location.pathname === '/' ? 'text-blue-600' : 'text-neutral-50'}`} size="lg">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link className={`w-full ${location.pathname === '/contactme' ? 'text-blue-600' : 'text-neutral-50'}`} size="lg">
                        <NavLink to="/contactme">
                            Contact Me
                        </NavLink>
                    </Link>
                </NavbarMenuItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarMenu>
        </Navbar >
    );
}
