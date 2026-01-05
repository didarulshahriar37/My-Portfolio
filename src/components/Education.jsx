"use client";

import React, { memo, useCallback, useState } from "react";
const ChevronDown = props => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
</svg>;
const Book = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
  </svg>
);
const Badge = ({
    children,
    className = "",
    variant = "default",
    ...props
}) => {
    const variants = {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        outline: "border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800"
    };
    return <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`} {...props}>
        {children}
    </span>;
};
const timelineData = [{
    id: "prof-exp-1",
    title: "B.Sc. in Software Engineering",
    type: "Islamic University of Technology",
    duration: "2024-Present",
    icon: Book,
    responsibilities: [
      "Studying core software engineering subjects including Data Structures, OOP, and Discrete Mathematics.",
      "Building academic projects using C, Java, and C++ following structured programming principles.",
      "Gaining hands-on experience through lab work and team-based assignments.",
      "Learning software development fundamentals such as debugging, version control, and clean code practices.",
      "Current CGPA: 3.35 out of 4.00"
    ],
    skills: ["C", "Java", "C++", "OOP"]
}, {
    id: "prof-exp-2",
    title: "Higher Secondary Certificate",
    type: "Gazipur Cantonment College",
    duration: "2021-2023",
    icon: Book,
    responsibilities: [
      "Completed higher secondary education with a strong focus on science-based subjects.",
      "Developed analytical and problem-solving skills through Physics and Higher Mathematics coursework.",
      "Built a solid academic foundation required for engineering and technical studies.",
      "Participated in regular academic evaluations, practical sessions, and examinations.",
      "GPA: 5.00 out of 5.00"
    ],
    skills: ["Physics", "Chemistry", "Higher Mathematics", "Biology"]
}, {
    id: "prof-exp-3",
    title: "Secondary School Certificate",
    type: "Rani Bilashmoni Govt. Boys High School",
    duration: "2019-2021",
    icon: Book,
    responsibilities: [
      "Completed secondary education with emphasis on science and mathematics subjects.",
      "Developed fundamental understanding of scientific concepts and logical reasoning.",
      "Maintained consistent academic performance across theoretical and practical coursework.",
      "Prepared foundational knowledge essential for higher secondary science studies.",
      "GPA: 5.00 out of 5.00"
    ],
    skills: ["Physics", "Chemistry", "Higher Mathematics", "Biology"]
}];
const TimelineItemContent = memo(function TimelineItemContent({
    item
}) {
    return <div className="mt-6 space-y-6 animate-in slide-in-from-top-1 duration-200">
        { }
        <div className="space-y-3">
            {item.responsibilities.map((responsibility, idx) => <div key={`${item.id}-resp-${idx}`} className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0 group-hover:bg-slate-600 dark:bg-slate-500 dark:group-hover:bg-slate-400 transition-colors duration-200" />
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {responsibility}
                </p>
            </div>)}
        </div>

        { }
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
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
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-linear-to-b from-black via-gray-500 to-white dark:from-white dark:via-gray-400 dark:to-black" />

        { }
        <div className="absolute left-4 top-6 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center transform transition-all duration-200 z-10">
            <div className="w-2 h-2 bg-slate-900 dark:bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        { }
        <div className="ml-12 mb-8">
            <div className={`
          bg-white dark:bg-slate-950 
          rounded-lg border border-slate-200 dark:border-slate-800 
          transition-all duration-200
          ${expanded ? "shadow-sm" : "shadow-none hover:shadow-sm"}
        `}>
                { }
                <button id={headerId} className="w-full text-left p-6 group/button cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors duration-200 rounded-t-lg" onClick={() => onToggle(item.id)} aria-expanded={expanded} aria-controls={contentId}>
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-md">
                                    <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                                </div>
                                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-xs">
                                    {item.type}
                                </Badge>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                    {item.duration}
                                </span>
                            </div>
                        </div>

                        <div className={`
                text-slate-400 dark:text-slate-600 
                transition-transform duration-200
                ${expanded ? "rotate-180" : ""}
              `}>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>
                </button>

                { }
                {expanded && <div id={contentId} role="region" aria-labelledby={headerId} className="px-6 pb-6 border-t border-slate-100 dark:border-slate-900">
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
export default function Education() {
    return <div className="transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <header className="mb-12">
                <h1 className="md:text-2xl text-xl text-center font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-3">
                    Education
                </h1>
                <p className="text-slate-600 text-center dark:text-slate-400 leading-relaxed">
                    A comprehensive overview of my educational journey.
                </p>
            </header>

            <ProfessionalTimeline data={timelineData} expandMode="multi" />
        </div>
    </div>;
}