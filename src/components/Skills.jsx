"use client";
import { 
  SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiMongodb, SiTailwindcss, SiGit 
} from "react-icons/si";

const technologies = [
  { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
  { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-slate-900 dark:text-white" }, 
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
  { name: "Express", icon: <SiExpress />, color: "text-slate-700 dark:text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
  { name: "Git", icon: <SiGit />, color: "text-[#F05032]" },
];

export default function Skills() {
  return (

    <section className="py-24 bg-white dark:bg-[#020617] px-6 relative overflow-hidden transition-colors duration-500">
      

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">
          Tech <span className="text-purple-600">Stack</span>
        </h2>
        <p className="text-slate-500 dark:text-gray-500 font-medium tracking-widest uppercase text-sm">
          Technologies I work with
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 place-items-center relative z-10">
        {technologies.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center group w-24">
            

            <div className="w-20 h-20 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center text-4xl transition-all duration-500 group-hover:border-purple-500/50 group-hover:scale-110 shadow-sm group-hover:shadow-purple-500/20">
              <span className={`${tech.color} transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]`}>
                {tech.icon}
              </span>
            </div>

            <p className="mt-4 text-slate-600 dark:text-gray-400 text-sm font-bold tracking-wide group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}