import { Link } from "react-router-dom";
import "./LinkButton.scss";

interface Props{
    to: string, 
    text: string
}

const LinkButton:React.FC<Props> = ({to, text}) => {
    return (
        <Link className="btn" to={to}>
            {text}
        </Link>
    )
}
export default LinkButton