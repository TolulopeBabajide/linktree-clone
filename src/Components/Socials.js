import Link from 'next/link'
import {FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'
import data from "/data.json"



export default function Socials(){
    return(
        <div className='flex justify-center items-center'>
            {data.socials.map((social, url)=>(
                <div className='flex '>
                    <div className='me-1'>
                        <Link
                            className={`${social.title === "Twitter" ? "visible" : "hidden"} text-3xl text-white`}
                            href={social.url} target="_blank" rel="noopener noreferrer"
                        >
                            <FaTwitter />
                        </Link>
                    </div>
                    <div className='me-1'>
                        <Link
                            className={`${social.title === "Github" ? "visible" : "hidden"} text-3xl text-white`}
                            href={social.url} target="_blank" rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </Link>
                    </div>
                    <div className='me-1'>
                        <Link
                            className={`${social.title === "Instagram" ? "visible" : "hidden"} text-3xl text-white`}
                            href={social.url} target="_blank" rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            
                
            ))}
        </div>
    )
}