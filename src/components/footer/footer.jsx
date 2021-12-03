import react from "react";
import './footer.styles.css';
let currentYear = new Date().getFullYear();
function Footer(){
  return (
      <footer>
          <p>Copyright @ {currentYear}</p>
     </footer>
  
  )
}
export default Footer;