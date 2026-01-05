"use client";

import Image from "next/image";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaWhatsapp,
    FaEnvelope
} from "react-icons/fa";
import TypewriterText from "./TypeWriterText"; // adjust the path if needed

const Hero = () => {
    return (
        <section id="hero" className="flex items-center w-11/12 mx-auto mt-20 mb-20 scroll-mt-45">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="order-2 md:order-1 space-y-6 text-center md:text-left">

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Hi, I’m <br />
                            <span className="text-primary">Didarul Shahriar</span>
                        </h1>

                        {/* Typewriter Effect */}
                        <div className="border-l-2 border-primary pl-2 uppercase tracking-widest text-primary font-semibold text-xl">
                            <TypewriterText
                                text="MERN Stack Web Developer"
                                speed={100}
                                deleteSpeed={50}
                                pauseDuration={2000}
                            />
                        </div>

                        <p className="text-base sm:text-lg text-base-content/70 max-w-xl mx-auto md:mx-0">
                            I build modern, scalable, and performance-driven web applications
                            using <b>MongoDB, Express, React, and Node.js</b>.
                            I love clean UI, solid backend logic, and real-world problem solving.
                        </p>

                        {/* BUTTON + SOCIALS */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">

                            {/* Download Resume */}
                            <a
                                href=""
                                className="btn btn-primary btn-wide"
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4">
                            <a href="https://facebook.com/" target="_blank" className="social-btn">
                                <FaFacebookF size={25} />
                            </a>
                            <a href="https://linkedin.com/in/didarulshahriar" target="_blank" className="social-btn">
                                <FaLinkedinIn size={25} />
                            </a>
                            <a href="https://github.com/didarulshahriar37" target="_blank" className="social-btn">
                                <FaGithub size={25} />
                            </a>
                            <a href="https://wa.me/8801872686773" target="_blank" className="social-btn">
                                <FaWhatsapp size={25} />
                            </a>
                            <a href="mailto:didarul13579@gmail.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <FaEnvelope size={25} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                            <Image
                                src="/me.png"
                                alt="Didarul Shahriar"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Styles for social buttons */}
            <style jsx>{`
        .social-btn {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: 1px solid hsl(var(--bc) / 0.2);
          color: hsl(var(--bc));
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: hsl(var(--p));
          color: hsl(var(--pc));
          transform: translateY(-2px);
        }
      `}</style>
        </section>
    );
};

export default Hero;
