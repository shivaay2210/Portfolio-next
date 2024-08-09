import { useEffect, useState } from 'react';
import crypto from 'crypto';

interface Problem {
  contestId: number;
  name: string;
  rating?: number;
}

interface ApiResponse {
  result: {
    problem: Problem;
    verdict: string;
  }[];
}

interface ProblemRange {
  range: string;
  count: number | string;
}

function CodeforcesProblemsList() {
  const [data, setData] = useState<ApiResponse['result'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [problemsArray, setProblemsArray] = useState<ProblemRange[]>([
    { range: '800-1000', count: 'loading' },
    { range: '1100-1200', count: 'loading' },
    { range: '1300-1400', count: 'loading' },
    { range: '1500-1600', count: 'loading' },
    { range: '1700-1800', count: 'loading' },
    { range: '1900-2000', count: 'loading' },
  ]);
  const [totalProblems, setTotalProblems] = useState(0);

  const problemRatingMap = new Map<number | string, number>();
  const problemSet = new Set<string>();

  useEffect(() => {
    function generateSHA512(input: string): string {
      const hash = crypto.createHash('sha512');
      hash.update(input);
      return hash.digest('hex');
    }

    const apikey = process.env.NEXT_PUBLIC_API_KEY as string;
    // console.log(apikey)
    const secretkey = process.env.NEXT_PUBLIC_SECRET_KEY as string;
    // console.log(secretkey)

    const timenow = Math.floor(Date.now() / 1000);
    const stringSHA = `123456/user.status?apiKey=${apikey}&handle=shivaay2210&time=${timenow}#${secretkey}`;
    const generatedSHA = generateSHA512(stringSHA);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://codeforces.com/api/user.status?handle=shivaay2210&apiKey=${apikey}&time=${timenow}&apiSig=123456${generatedSHA}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: ApiResponse = await response.json();
        setData(jsonData.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      const sz = data.length;

      for (let i = 8; i < 31; i++) {
        problemRatingMap.set(i * 100, 0);
      }
      problemRatingMap.set('undefined', 0);

      data.forEach(item => {
        const problemId = item.problem.contestId + item.problem.name;
        if (item.verdict === 'OK' && !problemSet.has(problemId)) {
          problemSet.add(problemId);
          problemRatingMap.set(
            item.problem.rating || 'undefined',
            (problemRatingMap.get(item.problem.rating || 'undefined') || 0) + 1
          );
        }
      });

      const problems800 =
        (problemRatingMap.get(800) || 0) +
        (problemRatingMap.get(900) || 0) +
        (problemRatingMap.get(1000) || 0);
      const problems1100 =
        (problemRatingMap.get(1100) || 0) + (problemRatingMap.get(1200) || 0);
      const problems1300 =
        (problemRatingMap.get(1300) || 0) + (problemRatingMap.get(1400) || 0);
      const problems1500 =
        (problemRatingMap.get(1600) || 0) +
        (problemRatingMap.get(1500) || 0);
      const problems1700 =
        (problemRatingMap.get(1700) || 0) + (problemRatingMap.get(1800) || 0);
      const problems1900 =
        (problemRatingMap.get(1900) || 0) +
        (problemRatingMap.get(2000) || 0);

      const newProblemsArray = [
        { range: '800-1000', count: problems800 },
        { range: '1100-1200', count: problems1100 },
        { range: '1300-1400', count: problems1300 },
        { range: '1500-1600', count: problems1500 },
        { range: '1700-1800', count: problems1700 },
        { range: '1900-2000', count: problems1900 },
      ];

      setProblemsArray(newProblemsArray);
      setTotalProblems(problemSet.size);
    }
  }, [loading, data]);

  return (
    <div className='flex lg:w-[45%] md:w-[48%] w-full bg-light-slate/[0.05] text-lightest-slate h-40 md:h-48 rounded-lg justify-evenly flex-col'>
      <div className='text-center'>Total Problems Solved : {totalProblems}</div>
      <div className='flex flex-col items-center justify-center w-full gap-2'>
        <div className='text-center'>Range of Problems Solved</div>
        <div className='flex-row flex flex-wrap w-full justify-center gap-2'>
          {problemsArray.map((problemRange, index) => (
            <div key={index} className=' w-[48%] text-center'>
              {problemRange.range} : {problemRange.count}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CodeforcesProblemsList;
