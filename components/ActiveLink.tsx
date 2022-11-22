import Link from "next/link";
import React from "react";

interface linkProps {
    text: string;
    href: string;
}

export const ActiveLink = ({ text, href }: linkProps) => {
    return (
        <Link href={href}>
            {text}
        </Link>
    );
};
