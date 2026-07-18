import React from 'react'
import Button from '../ui/Buttton'
import { ArrowRight, CalendarDays, Star } from 'lucide-react'
import { motion } from "framer-motion";
import grid from "/grid.png"
import FooterCard from './FooterCard';


const footerLinks = {
    Product: [
        "Features",
        "Calendar",
        "Tasks",
        "Reminders",
        "Pricing",
    ],
    Resources: [
        "Documentation",
        "Help Center",
        "Blog",
        "API",
        "FAQ",
    ],
    Company: [
        "About",
        "Roadmap",
        "Feedback",
        "Contact",
    ],
    Legal: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
    ],
};

const socialLinks = [
    // { icon: <Twitter size={18} />, href: "#" },
    // { icon: <Linkedin size={18} />, href: "#" },
    // { icon: <Instagram size={18} />, href: "#" },
];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-primary text-secondary">

            {/* Grid Background */}
            <img
                src={grid}
                alt=""
                className="pointer-events-none w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
            />
            <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">

                    <span
                        className="
            inline-flex
            flex-wrap
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            text-xs
            sm:text-sm
        "
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_12px_4px_rgba(34,197,94,0.7)]"></span>
                        </span>

                        Trusted by 10,000+ creators
                    </span>

                    <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:mt-8 lg:text-6xl">
                        Start creating
                        <br />
                        Viral posts today.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                        Turn your ideas into engaging posts in seconds with the power of AI.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <Button className="group">
                            Get Started

                            <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </span>
                        </Button>
                    </div>

                </div>
            </section>

            <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <p className="text-center text-sm text-gray-400 sm:text-base">
                    Get started with a 7-day free trial. No credit card needed.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    <FooterCard
                        title="50K+"
                        dec="Active Creators"
                    />

                    <FooterCard
                        title="4.9★"
                        dec="Average Rating"
                    />

                    <FooterCard
                        title="2.4M+"
                        dec="Posts Generated"
                    />

                </div>

            </section>

            <section className="mx-auto max-w-7xl px-6 py-16">

                <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

                        {/* Left */}

                        <div className="text-center lg:text-left">

                            <div className="flex items-center justify-center gap-3 lg:justify-start">

                                <h2 className="text-3xl font-bold">
                                    Scheduler
                                </h2>

                            </div>

                            <p className="mx-auto mt-5 max-w-sm leading-7 text-gray-400 lg:mx-0">
                                Organize your schedule, manage tasks,
                                set reminders and stay productive
                                with one simple workspace.
                            </p>

                            <div className="mt-8 flex justify-center gap-3 lg:justify-start">

                                {socialLinks.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        text-gray-400
                        transition-all
                        duration-300
                        hover:border-white/20
                        hover:bg-white/10
                        hover:text-white
                    "
                                    >
                                        {item.icon}
                                    </a>
                                ))}

                            </div>

                        </div>

                        {Object.entries(footerLinks).map(([title, links]) => (

                            <div
                                key={title}
                                className="text-center lg:text-left"
                            >

                                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                                    {title}
                                </h3>

                                <ul className="space-y-3">

                                    {links.map((link) => (

                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-gray-400 transition hover:text-white"
                                            >
                                                {link}
                                            </a>
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        ))}

                    </div>

                    {/* Bottom */}

                    <div
                        className="
    mt-16
    flex
    flex-col
    items-center
    justify-between
    gap-6
    border-t
    border-white/10
    pt-8
    text-center
    text-sm
    text-gray-500
    lg:flex-row
    lg:text-left
"
                    >

                        <p>
                            © {new Date().getFullYear()} Scheduler App.
                            All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">

                            <a href="#" className="transition hover:text-white">
                                Privacy
                            </a>

                            <a href="#" className="transition hover:text-white">
                                Terms
                            </a>

                            <a href="#" className="transition hover:text-white">
                                Cookies
                            </a>

                        </div>

                    </div>

                </section>
            </section>

        </footer>
    )
}

export default Footer