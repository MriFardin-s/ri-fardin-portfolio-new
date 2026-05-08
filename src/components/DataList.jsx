import { FiCalendar } from "react-icons/fi";

  const DataList = ({ data }) => (
    <div className="mt-8">
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-x-4 md:gap-x-10">
          
          {/* Left Side: জোড় ইনডেক্সগুলো বামে থাকবে */}
          {index % 2 === 0 ? (
            <div className="text-right pb-10">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">{item.subtitle}</p>
              <div className="flex items-center justify-end gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 mt-3">
                <FiCalendar /> {item.date}
              </div>
            </div>
          ) : (
            <div className="pb-10"></div> 
          )}

          {/* Middle Line: সবসময় সেন্টারে থাকবে */}
          <div className="flex flex-col items-center">
            <span className="w-4 h-4 bg-purple-600 rounded-full ring-4 ring-purple-600/20 shadow-[0_0_10px_rgba(147,51,234,0.5)]"></span>
            {index !== data.length - 1 && (
              <span className="w-[2px] grow bg-gradient-to-b from-purple-600 to-transparent opacity-30"></span>
            )}
          </div>

          {/* Right Side: বিজোড় ইনডেক্সগুলো ডানে থাকবে */}
          {index % 2 !== 0 ? (
            <div className="text-left pb-10">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">{item.subtitle}</p>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 mt-3">
                <FiCalendar /> {item.date}
              </div>
            </div>
          ) : (
            <div className="pb-10"></div>
          )}
        </div>
      ))}
    </div>
  );

  export default DataList ;