import { Mail } from "lucide-react";
import img from "../assets/img.jpg"
const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
            <div className="flex flex-col  ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour, <br /> je suis {""}
                    <span className="text-accent">Delphan </span></h1>
                <p className="my-4 text-md text-center md:text-left">Je suis un developpeur fullstack<br />
                    Utilisant React et Django.
                    Contactez-moi si vous avez besoin de mes services.
                </p>
                <a href="mailto:delphantsabeng13@gmail.com" className="btn btn-accent md:w-fit ">
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>
            </div>
            <div className="md:ml-60 ">
                <img src={img} alt=""
                    className="w-full max-w-xs sm:max-w md:max-w-md object-cover border-8 border-accent shadow-xl"
                    style={{
                        borderRadius: "22% 78% 37% 63% / 38% 6% 94% 62%",
                    }}
                />
            </div>
        </div>
    )
}
export default Home;