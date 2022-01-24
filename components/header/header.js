import Link from "next/link";
import { Container, NavLink, Logo, NavBlock } from "./headerStyles";

export default function Header(){
    return (
        <Container>
            <Logo>
                Golldan
            </Logo>
            <NavBlock>
                <Link passHref href="/">
                    <NavLink>
                        Link #1
                    </NavLink>
                </Link>
            </NavBlock>
            <NavBlock>
                <Link passHref href="/">
                    <NavLink>
                        Link #2
                    </NavLink>
                </Link>
            </NavBlock>
            <NavBlock>
                <Link passHref href="/">
                    <NavLink>
                        Link #3 
                    </NavLink>
                </Link>
            </NavBlock>
        </Container>
    );
}