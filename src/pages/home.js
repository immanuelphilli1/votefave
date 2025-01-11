import * as React from "react"
import Layout from "../components/layout"
import CategoryCard from "../components/categoryCard"
import { CategoryData } from "../data/category"
import { navigate } from "gatsby"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react"

const IndexPage = () => {
    const [search, setSearch] = useState("");
     // Filter categories based on search input
        const filteredCategories = search
            ? CategoryData.filter((category) =>
                category.category.toLowerCase().includes(search.toLowerCase())
            )
            : CategoryData;
    return (
        <Layout>
            <main className="text-white">
                <div className="font-semibold pt-4">Welcome to, <span className="font-semibold text-xl text-[#84C53E] capitalize italic">Top Knowledge media talent awards</span> </div>
                <div className=" mt-4 rounded-2xl h-[20rem] md:h-[30rem] text-white w-full">
                    <img src="https://fastvotegh.com/public/banners/56715fc6650a1709488294.webp" alt="Banner" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10  gap-4 w-full md:items-center justify-between">
                <div className="hidden md:block " />
                <div id="categories" className="text-2xl md:text-5xl font-semibold text-center">Categories</div>
                <div>
                <div className="bg-white flex rounded-full overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search/Filter by category"
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
                </div>
                <div className=" md:text-lg text-slate-300 text-center pt-4 pb-10">Select your favourite contestant under each category provided.</div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 pb-20">
                        {filteredCategories.map((category, index) => (
                            <CategoryCard key={index} category={category.category} color={category.color} handleClick={() => navigate(`/contestants/`)} />
                        ))}
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home</title>
