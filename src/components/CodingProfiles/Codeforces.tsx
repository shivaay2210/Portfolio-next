"use client";
import { useEffect, useState } from "react";

interface UserInfo {
  rating: number;
  rank: string;
  maxRating: number;
  maxRank: string;
}

function Codeforces() {
  const [data, setData] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://codeforces.com/api/user.info?handles=shivaay2210"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.result[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex mb-4 lg:w-[45%] md:w-[48%] w-full bg-light-slate/[0.05] text-lightest-slate h-40 md:h-48 justify-around rounded-lg flex-col">
      <div className="flex justify-around">
        <div className="flex flex-col">
          <div>Current Rating</div>
          <div className="text-2xl md:text-3xl">
            {loading ? "Loading" : data?.rating}
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <div>Current Rank</div>
            <div className="text-2xl md:text-3xl">
              {loading ? "Loading" : capitalizeFirstLetter(data!.rank)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col">
          <div>Max Rating</div>
          <div className="text-2xl md:text-3xl">
            {loading ? "Loading" : data?.maxRating}
          </div>
        </div>
        <div className="flex flex-col">
          <div>Max Rank</div>
          <div className="text-2xl md:text-3xl">
            {loading ? "Loading" : capitalizeFirstLetter(data!.maxRank)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Codeforces;
