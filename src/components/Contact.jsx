"use client";
import { useState } from "react";
import { FiMail, FiLinkedin, FiTwitter, FiSend, FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                toast.success("Message sent successfully!");
                event.target.reset();
            } else {
                toast.error("Error! Please try again.");
            }
        } catch (error) {
            toast.error("Network error.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
    
        <section id="contact" className="py-24 bg-white dark:bg-[#020617] px-6 relative overflow-hidden transition-colors duration-500" suppressHydrationWarning>
            

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
          
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tighter">
                    Get in <span className="text-purple-600">Touch</span>
                </h2>
                <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">Contact Me</p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">

                {/* Left Side: Talk to me */}
                <div className="space-y-8">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white text-center lg:text-left">Talk to me</h3>

                    <div className="space-y-4">
                  
                        {[
                            { icon: <FiMail />, title: "EMAIL", value: "fkfardin900@gmail.com", link: "mailto:fkfardin900@gmail.com" },
                            { icon: <FiLinkedin />, title: "LINKEDIN", value: "rifardin", link: "https://www.linkedin.com/in/m-rabbi-islam-fardin-23a3a4264" },
                            { icon: <FiTwitter />, title: "TWITTER", value: "@rifardin", link: "https://x.com/rifardin23" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-3xl text-center flex flex-col items-center group transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                                <div className="text-2xl text-purple-500 mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h4 className="text-slate-900 dark:text-white font-bold mb-1">{item.title}</h4>
                                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">{item.value}</p>
                                <a 
                                    href={item.link} 
                                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                                    className="flex items-center gap-2 text-purple-500 dark:text-purple-400 text-xs font-semibold group-hover:gap-4 transition-all"
                                >
                                    Write me <FiArrowRight />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="space-y-8">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white text-center lg:text-left">Write me your project</h3>

                    <form onSubmit={handleSubmit} className="space-y-8">
                     
                        <div className="relative group">
                            <label className="absolute -top-3 left-4 bg-white dark:bg-[#020617] px-2 text-xs text-purple-600 dark:text-purple-400/80 z-10 transition-colors">Name</label>
                            <input
                                type="text" name="name" required placeholder="Insert your Name"
                                className="w-full bg-transparent border border-slate-300 dark:border-white/20 p-5 rounded-2xl text-slate-900 dark:text-white outline-none focus:border-purple-500 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-700"
                            />
                        </div>

                        <div className="relative group">
                            <label className="absolute -top-3 left-4 bg-white dark:bg-[#020617] px-2 text-xs text-purple-600 dark:text-purple-400/80 z-10 transition-colors">Email</label>
                            <input
                                type="email" name="email" required placeholder="Insert your email"
                                className="w-full bg-transparent border border-slate-300 dark:border-white/20 p-5 rounded-2xl text-slate-900 dark:text-white outline-none focus:border-purple-500 transition-all placeholder:text-slate-400 dark:placeholder:text-gray-700"
                            />
                        </div>

                        <div className="relative group">
                            <label className="absolute -top-3 left-4 bg-white dark:bg-[#020617] px-2 text-xs text-purple-600 dark:text-purple-400/80 z-10 transition-colors">Project</label>
                            <textarea
                                name="message" required placeholder="Write your project details"
                                className="w-full bg-transparent border border-slate-300 dark:border-white/20 p-5 rounded-3xl text-slate-900 dark:text-white outline-none focus:border-purple-500 transition-all h-40 placeholder:text-slate-400 dark:placeholder:text-gray-700"
                            ></textarea>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <button
                                type="submit" disabled={isSubmitting}
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 px-10 rounded-2xl flex items-center gap-3 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-purple-600/20"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"} <FiSend />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}