"use client";

const About = () => {
    return (
        <section id="about" className="w-11/12 mx-auto my-20 scroll-mt-40">
            <div className="mx-auto p-8 rounded-2xl mt-10">

                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-100 mb-10 text-center">
                    About Me
                </h2>

                <p className="text-base md:text-left text-center sm:text-lg text-gray-300 leading-relaxed mb-6">
                    Hello! I’m Didarul Shahriar, a <b>Software Engineering</b> undergraduate at the <b>Islamic University of Technology (IUT)</b> with a passion for building <span className="text-primary font-bold">modern, responsive, and user-friendly</span> web applications. I specialize in the <b>MERN stack</b>, combining <span className="text-primary font-bold">MongoDB, Express.js, React, and Node.js</span> to create scalable and efficient solutions. Programming, for me, is a creative outlet—a way to turn ideas into real-world digital experiences and solve complex problems.
                </p>

                <p className="text-base sm:text-lg md:text-left text-center text-gray-300 leading-relaxed mb-6">
                    I particularly enjoy working on full-stack projects where both the frontend and backend interact seamlessly. Designing <b className="text-primary">clean, intuitive interfaces</b> while ensuring robust backend logic is something that motivates me every day. Tackling challenges that require both analytical thinking and creativity is where I thrive.
                </p>

                <p className="text-base sm:text-lg text-gray-300 md:text-left text-center leading-relaxed mb-6">
                    Outside of programming, I love watching cricket and football. Following matches, analyzing gameplay, and enjoying the excitement of live games is one of my favorite pastimes. These interests help me relax and stay inspired while balancing my technical work.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed md:text-left text-center">
                    Overall, I am a curious and disciplined learner who enjoys exploring new technologies, collaborating with others, and continuously improving both technical and creative skills. I believe in combining passion with purpose to build impactful digital experiences.
                </p>
            </div>
        </section>
    );
};

export default About;