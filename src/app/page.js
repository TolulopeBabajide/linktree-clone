import Image from "next/image"
import data from '/data.json'
import Links from "../Components/Links"
import Socials from "../Components/Socials"

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto p-9 h-screen w-full bg-gradient-to-r from-slate-800 to-slate-950 ">
      <Image 
        className="rounded-full mt-4"
        alt={data.name}
        src={data.avatar}
        width={100}
        height={100}
      />
      <div className="text-xl text-white my-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 "><h1>{data.name}</h1></div>
      <div className=" w-full m-4 p-4">
        <Links key={href} />
      </div>
      <div>
        <Socials key={href} />
      </div>
    </div>
  )
}