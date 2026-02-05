"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { href: "#about", text: "About" },
        { href: "#skills", text: "Skills" },
        { href: "#education", text: "Education" },
        { href: "#projects", text: "Projects" },
        { href: "#contact", text: "Contact" },
    ];

    return (
        <div
            className={`
                transition-all duration-300 ease-in-out z-50
                border border-transparent
                ${isScrolled
                    ? 'fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-lg shadow-lg px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 border border-gray-700'
                    : 'relative w-11/12 mx-auto mt-5 bg-gray-900/80 backdrop-blur-md shadow-xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 rounded-2xl'
                }
            `}
        >
            <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between container mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href={"/"} className="flex items-center space-x-2 group">
                        <Image src="/logo.png" width={30} height={30} alt="Didarul Shahriar" />
                    </Link>
                </div>


                {/* Navigation Links */}
                <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                    {navLinks.map(link => (
                        <a key={link.text} href={link.href} className="text-sm lg:text-base font-medium text-gray-400 hover:text-white transition-colors relative group">
                            {link.text}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                    <a href="https://drive.google.com/uc?export=download&id=1W4SB7rfZ72jCJ1S7dDfvno4znPeB18py
" className="flex items-center space-x-1.5 lg:space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium text-gray-200 border border-gray-700 rounded-md hover:bg-gray-800 transition-all hover:shadow-md">
                        <span>Resume</span>
                        <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
                    </a>
                    <a href='https://wa.me/8801872686773' className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium bg-gray-50 text-gray-900 rounded-md hover:bg-gray-200 transition-all shadow-sm hover:shadow-lg transform hover:scale-105">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-300 hover:bg-gray-800 rounded-md transition-colors" aria-label="Toggle menu">
                    {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="py-4 border-t border-gray-800">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map(link => (
                            <a key={link.text} href={link.href} onClick={() => setIsMenuOpen(false)} className="px-3 py-2.5 text-sm sm:text-base font-medium text-gray-300 rounded-md hover:bg-gray-800 transition-colors">
                                {link.text}
                            </a>
                        ))}
                        <div className="pt-4 mt-2 border-t border-gray-700 flex flex-col space-y-2">
                            <a href="https://drive.google.com/uc?export=download&id=1W4SB7rfZ72jCJ1S7dDfvno4znPeB18py" className="flex items-center justify-center space-x-2 px-3 py-2.5 text-sm font-medium border border-gray-700 rounded-md hover:bg-gray-800 transition-colors">
                                <span>Resume</span>
                                <ExternalLink className="h-4 w-4" />
                            </a>
                            <a href='https://wa.me/8801872686773' className="px-3 py-2.5 text-sm font-medium bg-gray-50 text-gray-900 rounded-md hover:bg-gray-200 transition-colors">
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;