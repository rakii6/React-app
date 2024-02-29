import './Footer.css'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";



export default function Footer (){
    return (
        <div className="foot">
           <FaTwitterSquare className='icon'style={{ fontSize: '3em' }}/>
           <FaFacebookSquare  className='icon' style={{ fontSize: '3em' }}/>
           <FaInstagramSquare className='icon' style={{ fontSize: '3em' }}/>
           <FaGithubSquare className='icon' style={{ fontSize: '3em' }}/>
        </div>
    )
}