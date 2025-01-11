import React from "react";


function NomineeCard({ handleClick }) {
  return (
    <div className="">
      <button onClick={handleClick} className="border border-slate-800 overflow-hidden relative rounded-2xl bg-white hover:bg-slate-100 text-slate-900 text-4xl lg:tracking-wider w-full h-60 md:h-96 uppercase">
        <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Banner" className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute hover:bg-black hover:bg-opacity-45 w-full h-full top-0 left-0">
          <div className=" inset-0 animate-pulse hover:flex h-full text-xs items-center justify-center text-white">
            Vote
          </div>
        </div>
      </button>
      <div className="text-white text-2xl md:text-4xl">Rema Kun</div>
    </div>
  );
}

export default NomineeCard;
