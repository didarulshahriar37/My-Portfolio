"use client";

import React, { memo, useCallback, useState } from "react";
const ChevronDown = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
</svg>;
const Code = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
</svg>;
const Badge = ({
    children,
    className = "",
    variant = "default",
    ...props
}) => {
    const variants = {
        default: "bg-slate-50 text-slate-900 hover:bg-slate-50/90",
        secondary: "bg-slate-800 text-slate-50 hover:bg-slate-800/80",
        outline: "border bg-transparent border-slate-800 hover:bg-slate-800"
    };
    return <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`} {...props}>
        {children}
    </span>;
};
const timelineData = [{
    id: "prof-exp-1",
    title: "Complete Web Development Course",
    type: "Programming Hero",
    duration: "2025-2026",
    icon: Code,
    responsibilities: [
      "Learned modern web development fundamentals including HTML, CSS, and JavaScript.",
      "Built responsive and interactive user interfaces using React.js and Next.js.",
      "Developed full-stack applications using Node.js, Express.js, and MongoDB.",
      "Implemented authentication, CRUD operations, and RESTful APIs in real-world projects.",
      "Practiced version control with Git and followed clean, maintainable coding standards."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB", "Node.js", "Express.js", "Next.js"]
}, {
    id: "prof-exp-2",
    title: "Object Oriented Concepts",
    type: "Islamic University of Technology",
    duration: "2025",
    icon: Code,
    responsibilities: [
      "Studied core Object-Oriented Programming principles such as encapsulation, inheritance, polymorphism, and abstraction.",
      "Designed and implemented class-based programs using Java.",
      "Applied OOP concepts to solve real-world and academic problem statements.",
      "Improved code reusability, modularity, and maintainability through proper object design."
    ],
    skills: ["Java", "Concepts of OOP"]
}, {
    id: "prof-exp-3",
    title: "Structured Programming",
    type: "Islamic University of Technology",
    duration: "2024-2025",
    icon: Code,
    responsibilities: [
      "Learned fundamentals of structured programming using the C programming language.",
      "Implemented problem-solving techniques using loops, conditional statements, and functions.",
      "Worked with arrays, strings, and basic memory concepts.",
      "Developed logical thinking and debugging skills through lab assignments and practice problems."
    ],
    skills: ["C", "Structured Programming"]
}];
const TimelineItemContent = memo(function TimelineItemContent({
    item
}) {
    return <div className="mt-6 space-y-6 animate-in slide-in-from-top-1 duration-200">
        { }
        <div className="space-y-3">
            {item.responsibilities.map((responsibility, idx) => <div key={`${item.id}-resp-${idx}`} className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-slate-500 group-hover:bg-slate-400 transition-colors duration-200" />
                <p className="text-sm text-slate-400 leading-relaxed">
                    {responsibility}
                </p>
            </div>)}
        </div>

        { }
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
            {item.skills.map((skill, skillIdx) => <Badge key={`${item.id}-skill-${skillIdx}`} variant="secondary">
                {skill}
            </Badge>)}
        </div>
    </div>;
});
TimelineItemContent.displayName = "TimelineItemContent";
const TimelineItem = memo(function TimelineItem({
    item,
    expanded,
    onToggle
}) {
    const Icon = item.icon;
    const headerId = `timeline-header-${item.id}`;
    const contentId = `timeline-content-${item.id}`;
    return <div className="relative group">
        { }
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-linear-to-b from-white via-gray-400 to-black" />

        { }
        <div className="absolute left-4 top-6 w-4 h-4 bg-slate-950 border-2 border-slate-700 rounded-full flex items-center justify-center transform transition-all duration-200 z-10">
            <div className="w-2 h-2 bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        { }
        <div className="ml-12 mb-8">
            <div className={`
          bg-slate-950 
          rounded-lg border border-slate-800 
          transition-all duration-200
          ${expanded ? "shadow-sm" : "shadow-none hover:shadow-sm"}
        `}>
                { }
                <button id={headerId} className="w-full text-left p-6 group/button cursor-pointer hover:bg-slate-900/50 transition-colors duration-200 rounded-t-lg" onClick={() => onToggle(item.id)} aria-expanded={expanded} aria-controls={contentId}>
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-900 rounded-md">
                                    <Icon className="w-4 h-4 text-slate-400" />
                                </div>
                                <h3 className="text-base font-semibold text-slate-50">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-xs">
                                    {item.type}
                                </Badge>
                                <span className="text-xs text-slate-400">
                                    {item.duration}
                                </span>
                            </div>
                        </div>

                        <div className={`
                text-slate-600 
                transition-transform duration-200
                ${expanded ? "rotate-180" : ""}
              `}>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                </button>

                { }
                {expanded && <div id={contentId} role="region" aria-labelledby={headerId} className="px-6 pb-6 border-t border-slate-900">
                    <TimelineItemContent item={item} />
                </div>}
            </div>
        </div>
    </div>;
});
TimelineItem.displayName = "TimelineItem";
export function ProfessionalTimeline({
    data,
    defaultExpandedIds,
    expandMode = "multi"
}) {
    const initial = defaultExpandedIds ?? data.map(item => item.id);
    const [expanded, setExpanded] = useState(() => new Set(initial));
    const onToggle = useCallback(id => {
        setExpanded(prev => {
            const next = new Set(prev);
            if (expandMode === "single") {
                return prev.has(id) ? new Set() : new Set([id]);
            }
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    }, [expandMode]);
    return <div className="relative">
        {data.map((item, index) => <TimelineItem key={item.id} item={item} expanded={expanded.has(item.id)} onToggle={onToggle} index={index} />)}
    </div>;
}
export default function Courses() {
    return <div className="transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="mb-12">
                <h1 className="md:text-2xl text-xl text-center font-bold tracking-tight text-slate-50 mb-3">
                    Courses
                </h1>
                <p className="text-center text-slate-400 leading-relaxed">
                    Courses I have completed.
                </p>
            </header>

            <ProfessionalTimeline data={timelineData} expandMode="multi" />
        </div>
    </div>;
}