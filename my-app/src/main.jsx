import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Main(){
    return(
        <div className="main">
         <nav className="header">
              <h1>login</h1>
              <p>we suggest using the email adress you use at work</p>
               <form action="">
             <label  htmlFor="email">email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="password">password</label>
              <input type="password" name="password" id="password"/>
              <p className="forgot">forgot password?</p>
              <button>login</button>
              <p className="OR">OR</p>
              <button className="platforms"><FontAwesomeIcon icon={faGoogle} /> countinue with google</button>
              <button className="platforms"><FontAwesomeIcon icon={faGithub} /> countinue with google</button>
                <p></p>
           </form>
         </nav>
          
        </div>
    )
}