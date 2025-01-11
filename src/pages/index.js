import * as React from "react"
import Collage from "../components/collage"

const IndexPage = () => {
  return (
    <main className=" bg-slate-900 h-screen">
      <Collage />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>| Vote Fave</title>
