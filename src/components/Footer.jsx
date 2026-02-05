"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
    const socialIcons = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/didarulshahriar",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    ></path>
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://facebook.com/didarulshahriar",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                    ></path>
                </svg>
            ),
        },
        {
            name: "GitHub",
            href: "https://github.com/didarulshahriar",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.87 1.25 1.87 1.25 1.08 1.84 2.84 1.31 3.54 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.56.12-3.26 0 0 1-.32 3.3 1.23a11.44 11.44 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.7.24 2.95.12 3.26.77.85 1.24 1.93 1.24 3.25 0 4.64-2.8 5.66-5.48 5.96.44.38.83 1.12.83 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 0Z"
                    ></path>
                </svg>
            ),
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-gray-900 border-t border-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href={"/"} className="mb-6 flex items-center justify-center">
                    <Image src={"/logo.png"} width={40} height={40} alt="Logo" />
                </Link>

                <h2 className="text-center text-white font-bold">Connect</h2>

                {/* Social Icons */}
                <div className="my-6 flex flex-wrap justify-center gap-4 text-sm">
                    {socialIcons.map((icon) => (
                        <a
                            key={icon.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={icon.name}
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            href={icon.href}
                        >
                            {icon.svg}
                        </a>
                    ))}
                </div>

                <p className="text-center text-xs text-gray-500 mt-4">
                    &copy; {new Date().getFullYear()} Didarul Shahriar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;