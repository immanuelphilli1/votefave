import * as React from "react"
import Layout from "../../components/layout"
import { ArrowLeft } from "@phosphor-icons/react"

const IndexPage = () => {
    const [votes, setVotes] = React.useState(0)

    return (
        <Layout>
            <main className="text-white">
                <div className="flex flex-col md:flex-row gap-2 w-fit md:items-center justify-start">
                    <button onClick={() => window.history.back()} className="flex items-center gap-2 bg-black py-2 px-4 rounded-md hover:bg-slate-900"><ArrowLeft size={20} weight="bold" color="#84C53E" /> Go back to nominees</button>
                </div>
                <div id="categories" className="text-2xl md:text-5xl font-semibold text-center pt-10">Contestant</div>
                <div className=" md:text-lg text-slate-300 text-center pt-4 pb-10">Kindly enter the number of votes. If eligible, the bulk vote pricing will be applied during the payment process.</div>
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-center mx-auto gap-14 my-4 pb-20">

                        <div className="border border-slate-800 overflow-hidden relative rounded-2xl bg-white hover:bg-slate-100 text-slate-900 text-4xl lg:tracking-wider md:w-96 h-60 md:h-96 uppercase">
                            <img src="https://www.gistreel.com/wp-content/uploads/2023/03/Rema-1-1424x802-1.jpg" alt="Banner" className="w-full h-full object-cover rounded-2xl" />
                        </div>
                        <div className="w-full md:w-fit">
                            <div className="text-white text-2xl md:text-5xl pb-2 font-semibold">Rema Kun</div>
                            <div className="text-white font-bold  md:text-2xl">Best rapper alive</div>
                            <div className="bg-slate-200 py-1 w-fit px-2 my-4 text-xs text-slate-900 rounded-md font-semibold">GHs 1 PER VOTE</div>
                            <div>
                                <form>
                                <input type="number" className="bg-slate-200 py-4 w-full px-2 my-4 text-xs text-slate-900 outline-none rounded-md font-semibold" placeholder="Enter number of votes" required min="1" value={votes} onChange={(e) => setVotes(e.target.value)} />
                                <button type="submit" className="bg-[#84C53E] py-4 w-full px-2 mb-4 text-sm hover:bg-slate-900 hover:text-white text-slate-900 rounded-md font-bold">Pay  ₵{votes * 1} </button>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Home</title>
