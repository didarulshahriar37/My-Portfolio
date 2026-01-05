'use client';

import React from 'react';
import MagicContainer from './MagicContainer';
import Image from 'next/image';
import Link from 'next/link';
import {projects} from "../data/project"

const Projects = () => {
    return (
        <section id='projects' className="mx-auto px-6 mt-15 mb-15 scroll-mt-45">
            {/* Section Header */}
            <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                    Projects
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                    A selection of projects that reflect my learning journey and interests.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="mx-auto grid w-11/12 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                    <MagicContainer key={project.id}>
                        <div className="rounded-3xl bg-zinc-900/90 p-5 text-white">

                            {/* Project Image */}
                            <div className="overflow-hidden rounded-xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                                    width={300}
                                    height={250}
                                />
                            </div>

                            {/* Project Title */}
                            <h3 className="mt-4 text-lg font-medium">
                                {project.title}
                            </h3>

                            {/* Button */}
                            <Link href={`/details/${project.id}`}>
                                <button className='mt-10 w-full btn btn-primary btn-outline'>View Details</button>
                            </Link>

                        </div>
                    </MagicContainer>
                ))}
            </div>
        </section>
    );
};

export default Projects;
