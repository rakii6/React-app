
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";

import './Button.css'


export default function Buttons(){
    return(
        <div className="button-section">
            <button className="email"><MdEmail/>Email</button>
            <button className="linkedIn"><GrLinkedin/>LinkedIn</button>
        </div>
    )
}