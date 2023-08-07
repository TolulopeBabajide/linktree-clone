import Link from 'next/link'
import {FaGithub} from 'react-icons/fa'



export default function Socials(){
    return(
        <div>
            {data.socials.map((social, index)=>(
                <Link className={`${social.title===Github?invisible:false}`} href={social.url} target="_blank" rel="noopener noreferrer" > 
                    <FaGithub/>
                </Link>
            ))}
        </div>
    )
}