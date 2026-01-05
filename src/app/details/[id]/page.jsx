'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { projects } from '../../../data/project';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Navbar from '@/components/Navbar';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) return <div className="text-center text-white mt-20">Project not found.</div>;

    return (
        <>
        <Navbar></Navbar>
            <section className="w-11/12 mx-auto px-6 py-16 text-white">

                {/* Project Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

                {/* Project Image */}
                <div className="rounded-xl overflow-hidden shadow-xl mb-6">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Action Links */}
                <div className="flex gap-4 mb-8">
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                            className="btn btn-primary flex items-center gap-2">
                            Live Project <FaExternalLinkAlt />
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="btn btn-outline flex items-center gap-2">
                            GitHub Client <FaGithub />
                        </a>
                    )}
                </div>

                {/* Description */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Description</h2>
                    <p className="text-zinc-300">{project.description}</p>
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">{tech}</span>
                        ))}
                    </div>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                    <p className="text-zinc-300">{project.challenges}</p>
                </div>

                {/* Future Plans */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <p className="text-zinc-300">{project.futurePlans}</p>
                </div>
            </section>
        </>
    );
};

export default ProjectDetails;