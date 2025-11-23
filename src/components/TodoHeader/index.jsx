import React from "react";

const TodoHeader = ({ totalTask, completedTask, inprogressTask }) => {
  const percent = (completedTask / totalTask) * 100;
  return (
    <div className="bg-cyan-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-none p-6 mb-6">
      <div className="text-center">
        <div className="text-2xl font-black text-black mb-4">
          MISSION PROGRESS
        </div>
        <div
          className={`text-3xl mb-4 font-black ${
            inprogressTask === 0 ? "text-[#00a63e]" : " text-black"
          }`}
        >
          {inprogressTask === 0
            ? "ALL MISSION COMPLETE!"
            : `You've completed ${completedTask}/${totalTask} tasks.`}
        </div>
        <div className="bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none h-8 overflow-hidden">
          <div
            style={{ width: `${percent}%` }}
            className="bg-green-400 h-full border-r-3 border-black transition-all duration-500 flex items-center justify-center"
          >
            <span className="text-black font-black text-sm">
              {inprogressTask === totalTask ? "" : `${percent.toFixed(0)}%`}
            </span>
          </div>
        </div>
        <p className="text-lg font-bold text-black mt-4">
          {inprogressTask === 0
            ? "Ready for launch!"
            : `${inprogressTask} missions remaining`}
        </p>
      </div>
    </div>
  );
};

export default TodoHeader;
