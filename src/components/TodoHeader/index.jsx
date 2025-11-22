import React from "react";

const TodoHeader = () => {
  return (
    <div className="bg-cyan-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none p-6 mb-6">
      <div className="text-center">
        <div className="text-2xl font-black text-black mb-4">
          MISSION PROGRESS
        </div>
        <div className="text-3xl font-black text-black mb-4">
          ALL MISSION COMPLETE!
        </div>
        <div className="bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none h-8 overflow-hidden">
          <div className="bg-green-400 h-full border-r-3 border-black transition-all duration-500 flex items-center justify-center">
            <span class="text-black font-black text-sm">100%</span>
          </div>
        </div>
        <p class="text-lg font-bold text-black mt-4">Ready for launch!</p>
      </div>
    </div>
  );
};

export default TodoHeader;
