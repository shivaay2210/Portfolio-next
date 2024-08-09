"use client"

import React, { useRef, useEffect } from 'react';

interface LeetcodeQuestionTypeProps {
  type: string;
  totalSolved: number;
  totalQuestions: number;
  color: string;
}

function LeetcodeQuestionType({ type, totalSolved, totalQuestions, color }: LeetcodeQuestionTypeProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.backgroundColor = `${color}`;
      barRef.current.style.width = `${(totalSolved / totalQuestions) * 100}%`;
    }
  }, [totalSolved, totalQuestions]);

  return (
    <div className='flex flex-col justify-center mb-2'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div className='text-sm md:text-md mb-1'>{type}</div>
          <div className='text-sm md:text-md mb-1'>{totalSolved}/{totalQuestions}</div>
          <div className='text-sm md:text-md mb-1'>{((totalSolved / totalQuestions) * 100).toFixed(2)}%</div>
        </div>
        <div className='h-2 w-44 md:w-52 bg-global-bg rounded-lg bg-slate-700'>
          <div className={`h-2 bg-light-slate rounded-lg`} ref={barRef}></div>
        </div>
      </div>
    </div>
  );
}

export default LeetcodeQuestionType;
