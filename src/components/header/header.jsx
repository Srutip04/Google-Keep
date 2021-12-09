import react from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import './header.styles.css';
function Header(){
    return (
        <header>
             <h1>
                 <HighlightIcon />
                 Keeper
            </h1>
        </header> 
   
    );
}

export default Header;
