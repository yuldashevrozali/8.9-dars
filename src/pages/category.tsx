import { Link } from "react-router-dom";
import left from '../assets/left.png'
import pick from '../assets/Pick.png'

export default function Category() {
    return (
        <div>
            <div className="category-top">
                <Link to='/how'><img src={left} alt="left" /></Link>
                <img src={pick} alt="pick" />
            </div>
            <div className="category-bottom">
                <Link to='/movies'><button>MOVIES</button></Link>
                <Link to='/SHOWS'><button>TV SHOWS</button></Link>
                <Link to='/COUNTRIES'><button>COUNTRIES</button></Link>
                <Link to='/CITIES'><button>CAPITAL CITIES</button></Link>
                <Link to='/ANIMALS'><button>ANIMALS</button></Link>
                <Link to='/SPORTS'><button>SPORTS</button></Link>
            </div>
        </div>
    );
}
