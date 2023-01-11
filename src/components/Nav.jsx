import {Link} from 'react-router-dom'
const background = require('../images/background.jpg')

const Nav=()=>{
    return(
  <nav>
     <img className='picIntro' src={background} alt="picture of mountains surrounded by greenery and water "></img>
    <section className="navbar">
            <section>
                <div className='topright'><ul className='topList'>
                    <Link><i class="fa-solid fa-house" aria-label="home icon"></i></Link>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link>Hot Topics</Link></li>
                    <li><Link>Sign in</Link></li> 
                </ul>
                </div>
                </section>
        </section>
        </nav>
            
 
        
           
        
        
    )
}


export default Nav;