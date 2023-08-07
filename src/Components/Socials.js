import Link from 'next/link'
import {FaGithub} from 'react-icons/fa'
import data from "/data.json"



export default function Socials(){
    return(
        <div>
            {data.socials.map((social, index)=>(
                <Link className={`${social.title === "Github" ? "visible" : "invisible" }`} href={social.url} target="_blank" rel="noopener noreferrer" > 
                    <FaGithub/>
                </Link>
            ))}
        </div>
    )
}