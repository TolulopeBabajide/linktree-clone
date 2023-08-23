import Image from "next/image"
import data from "/data.json"
import Link from "next/link"

export default function Links(){
    return(
        <div className="flex flex-col">
                    {data.links.map((link, index) => (
                      
                    <div key={index} className="flex mx-auto w-full items-center  mb-3 bg-slate-200 p-1 rounded-md ">
                        <Image
                             className="rounded-sm"
                             alt={""}
                             src={link.image}
                             width={40}
                             height={40}
                        />
                        <Link  href={link.url} target="_blank" rel="noopener noreferrer">
                            <a className="w-full text-center font-semibold me-12 py-2 text-slate-700 text-xl ">
                                {link.title}
                            </a>
                        </Link>
                    </div>
                
                ))}
      
    </div>
    )
}