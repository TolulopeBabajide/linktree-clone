import Image from "next/image"
import data from "/data.json"
import Link from "next/link"

export default function Links(){
    return(
        <div className="flex flex-col  justify-center">
                    {data.links.map((link, index) => (
                      
                    <div className="flex mx-auto w-3/4 border-slate-400 m-1 text-center bg-slate-200 p-1 rounded-sm w-full border-2">
                        <Image
                             className="rounded-sm"
                             alt={""}
                             src={link.image}
                             width={20}
                             height={20}
                        />
                        <Link className="ms-3 " href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                        </Link>
                    </div>
                
                ))}
      
    </div>
    )
}