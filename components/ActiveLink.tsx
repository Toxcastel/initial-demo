import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface linkProps {
    text: string;
    href: string;
}

const style = {
    color: "#0070f3",
    textDecoration: "underline",
};

export const ActiveLink = ({ text, href }: linkProps) => {

    // destructuramos 'asPath' del useRouter para crear un condicional que renderice el estilo
    const {asPath} = useRouter()

    return (
        <Link href={href} style={asPath === href ? style : {}}>
            {text}
        </Link>
    );
};
