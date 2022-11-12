import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/computers">Computers</Link>
                    </li>
                    <li>
                        <Link to="/phones">Phones</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
