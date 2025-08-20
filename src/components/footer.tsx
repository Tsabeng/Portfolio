import { Container, Facebook, Github, Phone, Youtube} from "lucide-react";
const Footer=()=>{
    return(
        <footer className="footer footer-horizontal footer-center p-10">
  <aside>
    
    <p className="font-bold ">
      <Container className="w-10 h-10"/>
            DELPHAN 
            <span className="text-accent">TSABENG</span>
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      
      <a href="https://github.com/Tsabeng" target="_blank" rel="noopener noreferrer">
      <Github className="w-6 h-6 text-current"/>
      </a>
      <a href="https://wa.me/237696412196" target="_blank" rel="noopener noreferrer">
      <Phone className="w-6 h-6 text-current"/>
      </a>
      <a href="https://www.facebook.com/delphinole.manthole/" target="_blank" rel="noopener noreferrer">
      <Facebook className="w-6 h-6 text-current"/>
      </a>
    </div>
  </nav>
</footer>
    )
}

export default Footer;