export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (

    <footer className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-purple-500/10 py-12 relative overflow-hidden transition-colors duration-500">
      

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-purple-600/10 dark:bg-purple-600/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          

          <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter group cursor-default">
            FARDIN<span className="text-purple-600 group-hover:text-purple-400 transition-colors">.</span>DEV
          </div>


          <div className="text-slate-500 dark:text-gray-500 text-sm md:text-base order-3 md:order-2 text-center md:text-left">
            © {currentYear} All rights reserved by <span className="text-purple-500 font-bold">Fardin</span>
          </div>

          <div className="flex gap-8 text-slate-600 dark:text-gray-400 text-sm font-medium order-2 md:order-3">
            <a href="#experience" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">Works</a>
            <a href="#privacy" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300">Privacy</a>
          </div>

        </div>
      </div>
    </footer>
  );
}