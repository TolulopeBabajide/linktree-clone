import Image from "next/image"
import data from "/data.json"
import Link from "next/link"

export default function Links(){
    return(
        <div className="flex flex-col  justify-center">
                    {data.links.map((link, index) => (
                      
                    <div className="flex mx-auto w-full items-center  mb-3 text-center bg-slate-200 p-1 rounded-md w-full ">
                        <Image
                             className="rounded-sm"
                             alt={""}
                             src={link.image}
                             width={40}
                             height={40}
                        />
                        <Link className="w-full text-center " href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                        </Link>
                    </div>
                
                ))}
      
    </div>
    )
}