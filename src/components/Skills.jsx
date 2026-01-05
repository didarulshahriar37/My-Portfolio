"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

const people = [
    { id: 1, name: "HTML5", role: "Markup Language", profile: "https://cdn.dribbble.com/userupload/20020800/file/original-2ea8eca8ebe9838d5cb6827ac4a47a91.png?resize=752x&vertical=center" },
    { id: 2, name: "CSS3", role: "Styling Language", profile: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2024/10/css3-logo.jpg?resize=1200%2C600&ssl=1" },
    { id: 3, name: "JavaScript", role: "Programming Language", profile: "https://static.vecteezy.com/system/resources/thumbnails/001/416/690/small/js-emblem-orange-shield-and-white-text-vector.jpg" },
    { id: 4, name: "React.js", role: "Frontend Library", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1k7bmnU8nC6IW55OYiFE8ReQKCvRb0Uyodw&s" },
    { id: 5, name: "MongoDB", role: "NoSQL Database", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivXCkaET9d6hHwTXDxxR8Lw5Vql5cUqrkAg&s" },
    { id: 6, name: "Node.js", role: "Backend Runtime", profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyj3LWNjl1N0FGFCUMy6zQL8BO2UtLCwBwbQ&s" },
    { id: 7, name: "Express.js", role: "Web Framework", profile: "https://img.icons8.com/color/1200/express-js.jpg" },
    { id: 8, name: "Firebase", role: "Cloud Platform", profile: "https://img.icons8.com/color/1200/firebase.jpg" },
    { id: 9, name: "Next.js", role: "React Framework", profile: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" },
];

const safeImage = (e) => {
    e.target.src = "https://placehold.co/100x100/E0E7FF/4338CA?text=Error";
};

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        if (typeof window === "undefined") return;
        const checkScreenSize = () => setIsMobile(window.innerWidth < breakpoint);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, [breakpoint]);
    return isMobile;
};

export default function OrbitCarousel() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isHovering, setIsHovering] = React.useState(false);
    const isMobile = useIsMobile();
    const containerRadius = isMobile ? 130 : 200;
    const profileSize = isMobile ? 60 : 80;
    const containerSize = containerRadius * 2 + 100;

    const getRotation = React.useCallback(
        (index) => (index - activeIndex) * (360 / people.length),
        [activeIndex]
    );

    const next = () => setActiveIndex((i) => (i + 1) % people.length);
    const prev = () => setActiveIndex((i) => (i - 1 + people.length) % people.length);

    const handleProfileClick = React.useCallback(
        (index) => {
            if (index === activeIndex) return;
            setActiveIndex(index);
        },
        [activeIndex]
    );

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") prev();
            else if (event.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // AUTOPLAY FIX: use activeIndex in the effect
    React.useEffect(() => {
        if (isHovering) return;
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % people.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovering, activeIndex]);

    return (
        <div id="skills" className="scroll-mt-25">
            <div className="text-center font-bold text-2xl md:text-4xl text-white mb-10">Skills & Technologies</div>
            <div
                className="flex flex-col items-center p-4 relative min-h-100 bg-none transition-colors duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div
                    className="relative flex items-center justify-center"
                    style={{ width: containerSize, height: containerSize }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={people[activeIndex].id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="z-10 bg-white backdrop-blur-sm shadow-xl rounded-xl p-3 md:p-4 w-48 md:w-52 text-center border border-gray-100"
                        >
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                src={people[activeIndex].profile}
                                alt={people[activeIndex].name}
                                onError={safeImage}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto -mt-10 md:-mt-12 border-4 border-white object-cover shadow-md"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.15 }}
                            >
                                <h2 className="mt-2 text-base md:text-lg font-bold text-gray-800">
                                    {people[activeIndex].name}
                                </h2>
                                <div className="flex items-center justify-center text-xs md:text-sm text-gray-600 mt-1">
                                    <Briefcase size={12} className="mr-1" />
                                    <span className="truncate">{people[activeIndex].role}</span>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="flex justify-center items-center mt-3 space-x-2"
                            >
                                <button
                                    onClick={prev}
                                    className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronLeft size={16} className="text-gray-700" />
                                </button>
                                <button
                                    onClick={next}
                                    className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <ChevronRight size={16} className="text-gray-700" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {people.map((p, i) => {
                        const rotation = getRotation(i);
                        const isActive = i === activeIndex;
                        return (
                            <motion.div
                                key={p.id}
                                animate={{ transform: `rotate(${rotation}deg) translateY(-${containerRadius}px)` }}
                                transition={{ type: "spring", stiffness: 150, damping: 20, delay: isActive ? 0 : Math.abs(i - activeIndex) * 0.05 }}
                                style={{
                                    width: profileSize,
                                    height: profileSize,
                                    position: "absolute",
                                    top: `calc(50% - ${profileSize / 2}px)`,
                                    left: `calc(50% - ${profileSize / 2}px)`,
                                    zIndex: isActive ? 20 : 10,
                                }}
                            >
                                <motion.div
                                    animate={{ rotate: -rotation }}
                                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                                    className="w-full h-full"
                                >
                                    <motion.img
                                        src={p.profile}
                                        alt={p.name}
                                        onError={safeImage}
                                        onClick={() => handleProfileClick(i)}
                                        whileHover={{
                                            scale: 1.15,
                                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full h-full object-cover rounded-full cursor-pointer transition-all duration-300 ${isActive
                                                ? "border-4 border-indigo-500 shadow-lg"
                                                : "border-2 border-gray-300 hover:border-indigo-400"
                                            }`}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
