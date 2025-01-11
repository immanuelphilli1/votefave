import * as React from "react";
import Layout from "../components/layout";
import CategoryCard from "../components/categoryCard";
import { CategoryData } from "../data/category";
import { CheckCircle, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { useEffect } from "react";
import { navigate } from "gatsby";

const IndexPage = () => {
    const [search, setSearch] = useState("");
    const [timeLeft, setTimeLeft] = useState({});

    const endDate="2025-01-15T00:00:00";
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const end = new Date(endDate);
      const difference = end - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null); // Countdown is over
      }
    };

    // Run initially and every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [endDate]);

  if (!timeLeft) {
    return <div className="ml-2">Polls have ended</div>;
  }

    // Filter categories based on search input
    const filteredCategories = search
        ? CategoryData.filter((category) =>
            category.category.toLowerCase().includes(search.toLowerCase())
        )
        : CategoryData;

    return (
        <Layout>
            <main className="text-white">
                <div className="font-semibold pt-4 text-center text-2xl md:text-5xl">Live Results</div>
                {/* Search bar */}
                <div className="text-sm md:text-lg pt-20 w-full lg:w-1/2 mx-auto">
                    <div className="bg-white flex rounded-full overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search/Filter live results by category"
                            className="w-full py-4 px-10 outline-none text-black"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="px-6">
                            <div className="animate-pulse">
                                <MagnifyingGlass size={32} color="#84C53E" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className=" md:text-2xl font-semibold  pt-10">
                    Results Categories
                </div>
                <div>
                    <div className="flex w-full items-center gap-4 my-4 pb-20 overflow-x-auto no-scrollbar">
                        {filteredCategories.map((category, index) => (
                            <div key={index} className="flex-shrink-0 w-[15rem] md:w-[22rem]">
                                <CategoryCard category={category.category} color={category.color} />
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-4">
                        {/* table */}
                        <div className="pb-20 order-last md:order-first relative overflow-auto shadow-md rounded-2xl flex-grow">
                            <table className="w-full table-auto pb-20 text-sm text-left text-gray-500 ">
                                <thead className="text- text-gray-300 uppercase bg-gray-700 ">
                                    <tr>
                                        <th scope="col" className="hidden md:block px-6 py-3">
                                            Nominee
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Full Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Votes
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Votes %
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr onClick={() => navigate(`/contestants/details`)} className="bg-white cursor-pointer odd:bg-gray-900 even:bg-gray-700 hover:bg-gray-600 text-gray-300">
                                        <th scope="row" className="hidden md:block px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-20 h-20 object-cover rounded-xl" />
                                        </th>
                                        <td className="px-6 font-semibold py-4">Wizkid odawale afe feee okay</td>
                                        <td className="px-6 py-4">100</td>
                                        <td className="px-6 py-4">100%</td>
                                    </tr>
                                    <tr className="bg-white  odd:bg-gray-900 even:bg-gray-700 hover:bg-gray-600 text-gray-300">
                                        <th scope="row" className="hidden md:block px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-20 h-20 object-cover rounded-xl" />
                                        </th>
                                        <td className="px-6 font-semibold py-4">Wizkid odawale afe feee okay</td>
                                        <td className="px-6 py-4">100</td>
                                        <td className="px-6 py-4">100%</td>
                                    </tr>
                                    <tr className="bg-white  odd:bg-gray-900 even:bg-gray-700 hover:bg-gray-600 text-gray-300">
                                        <th scope="row" className="hidden md:block px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-20 h-20 object-cover rounded-xl" />
                                        </th>
                                        <td className="px-6 font-semibold py-4">Wizkid odawale afe feee okay</td>
                                        <td className="px-6 py-4">100</td>
                                        <td className="px-6 py-4">100%</td>
                                    </tr>
                                    <tr className="bg-white  odd:bg-gray-900 even:bg-gray-700 hover:bg-gray-600 text-gray-300">
                                        <th scope="row" className="hidden md:block px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-20 h-20 object-cover rounded-xl" />
                                        </th>
                                        <td className="px-6 font-semibold py-4">Wizkid odawale afe feee okay</td>
                                        <td className="px-6 py-4">100</td>
                                        <td className="px-6 py-4">100%</td>
                                    </tr>
                                    <tr className="bg-white  odd:bg-gray-900 even:bg-gray-700 hover:bg-gray-600 text-gray-300">
                                        <th scope="row" className="hidden md:block px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-20 h-20 object-cover rounded-xl" />
                                        </th>
                                        <td className="px-6 font-semibold py-4">Wizkid odawale afe feee okay</td>
                                        <td className="px-6 py-4">100</td>
                                        <td className="px-6 py-4">100%</td>
                                    </tr>
                                    <tr className="bg-white  odd:bg-gray-900 even:bg-gray-700 hover:bg-gray-600 text-gray-300">
                                        <th scope="row" className="hidden md:block px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-20 h-20 object-cover rounded-xl" />
                                        </th>
                                        <td className="px-6 font-semibold py-4">Wizkid odawale afe feee okay</td>
                                        <td className="px-6 py-4">100</td>
                                        <td className="px-6 py-4">100%</td>
                                    </tr>
                                    <tr className="bg-white  odd:bg-gray-900 even:bg-gray-700 hover:bg-gray-600 text-gray-300">
                                        <th scope="row" className="hidden md:block px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-20 h-20 object-cover rounded-xl" />
                                        </th>
                                        <td className="px-6 font-semibold py-4">Wizkid odawale afe feee okay</td>
                                        <td className="px-6 py-4">100</td>
                                        <td className="px-6 py-4">100%</td>
                                    </tr>
                                    <tr className="bg-white  odd:bg-gray-900 even:bg-gray-700 hover:bg-gray-600 text-gray-300">
                                        <th scope="row" className="hidden md:block px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
                                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-20 h-20 object-cover rounded-xl" />
                                        </th>
                                        <td className="px-6 font-semibold py-4">Wizkid odawale afe feee okay</td>
                                        <td className="px-6 py-4">100</td>
                                        <td className="px-6 py-4">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* card */}
                        <div>
                        <div className="flex flex-col gap-2 bg-slate-500 rounded-2xl p-8 mb-4">
                            <div className="font-semibold md:text-2xl uppercase pb-2 underline">Best male rapper of the year</div>
                            {/* checkmark */}
                            <div className="flex items-center">
                                <CheckCircle size={24} weight="fill" color="#84C53E" />
                                <div className="ml-2">Nominees [10 contestants]</div>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle size={24} weight="fill" color="#84C53E" />
                                <div className="ml-2">Votes [1000 votes]</div>
                            </div>
                            <div className="flex flex-col  py-4">
                            <div className="text-left font-semibold text-sm text-slate-300 ml-2">Countdown to end of polls</div>
                                <div className="ml-2  lg:text-5xl animate-pulse transition-transform duration-500 font-bold text-slate-900">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</div>
                            </div>
                            <div className="flex flex-col items-center justify-center pt-2 gap-1">
                                <div className="w-40 h-40 bg-white overflow-hidden rounded-2xl">
                                    <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Wizkid" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-sm ">Winner</div>
                            </div>

                        </div>
                        </div>
                    </div>


                </div>
            </main>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
