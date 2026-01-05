'use client';

import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setLoading(false);
            })
            .catch((error) => {
                alert('Something went wrong. Please try again.');
                console.error(error);
                setLoading(false);
            });
    };

    return (
        <section id="contact" className="mx-auto px-6 py-16 scroll-mt-30 w-11/12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
                Contact Me
            </h2>
            <p className="text-center text-zinc-400 mb-10">
                Get in touch via social links or send me a message directly.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-30">
                {/* Socials */}
                <div className="flex flex-col gap-4 md:w-1/3">
                    <a href="https://facebook.com/" target="_blank" className="social-btn flex items-center gap-2">
                        <FaFacebookF size={20} /> Facebook
                    </a>
                    <a href="https://wa.me/8801872686773" target="_blank" className="social-btn flex items-center gap-2">
                        <FaWhatsapp size={20} /> WhatsApp
                    </a>
                    <a href="https://linkedin.com/in/didarulshahriar" target="_blank" className="social-btn flex items-center gap-2">
                        <FaLinkedinIn size={20} /> LinkedIn
                    </a>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 bg-slate-950 border border-slate-600 p-10 rounded-2xl flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full text-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full text-white"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="textarea textarea-bordered w-full text-white"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full mt-2"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

            <style jsx>{`
        .social-btn {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          background: #9E7AFF;
          transform: translateY(-2px);
        }
      `}</style>
        </section>
    );
};

export default Contact;