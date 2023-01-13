import {Link} from 'react-router-dom'
const background = require('../images/background.jpg')

const Nav=()=>{
    return(
  <nav>
     <img className='picIntro' src={background} alt="picture of mountains surrounded by greenery and water "></img>
    <section className="navbar">
            <section>
                <div>
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <div className='dropdown'>
                        <li><button className='dropbtn'>Hot Topics</button></li>
                    <div className='dropdown-content'>
                        <Link>Cooking</Link>
                        <Link>Coding</Link>
                        <Link>Football</Link>
                    </div>
                    </div>
                    <li><Link>Sign in</Link></li> 
                </ul>
                </div>
                </section>
        </section>
        </nav>
            
 
        
           
        
        
    )
}


export default Nav;