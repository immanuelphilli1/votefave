import * as React from "react"
import Layout from "../../components/layout"
import NomineeCard from "../../components/nomineeCard"
import { navigate } from "gatsby"

const IndexPage = () => {
    return (
        <Layout>
            <main className="text-white">
                <div id="categories" className="text-2xl md:text-5xl font-semibold text-center pt-10">Nominees</div>
                <div className=" md:text-lg text-slate-300 text-center pt-4 pb-10">Vote for your favourite contestant nominated for this award.</div>
                <div className="flex flex-col md:flex-row gap-2 items-center justify-end">
                    <div className="uppercase font-semibold text-white">Best rapper alive</div>
                    <div className="bg-[#84C53E] py-1 px-6 text-white rounded-md font-semibold">GHs 1 PER VOTE</div>
                    <div className="bg-black py-1 px-6 text-white rounded-md font-semibold">20 NOMINEES</div>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 pb-20">
                        
                        <NomineeCard handleClick={() => navigate(`/contestants/details`)} />
                        
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home</title>
