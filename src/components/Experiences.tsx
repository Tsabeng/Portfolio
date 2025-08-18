import Title from "./Title" 

import imgCSS from "../assets/techno/css.png"
import imgHTML from "../assets/techno/html.png"
import imgJS from "../assets/techno/js.png"
import imgREACT from "../assets/techno/react.png"
import imgTAILWIND from "../assets/techno/tailwind.png"
import imgTYPE from "../assets/techno/typescript.svg"
import imgPYTHON from "../assets/techno/python.jpeg"
import imgFLASK from "../assets/techno/flask.png"
import imgDJANGO from "../assets/techno/django.png"

import infolab from "../assets/companies/infolab.ico"



const skills=[
    {id:1,name:"HTML",image:imgHTML},
    {id:2,name:"CSS",image:imgCSS},
    {id:3,name:"JavaScript",image:imgJS},
    {id:4,name:"REACT",image:imgREACT},
    {id:5,name:"Tailwind CSS",image:imgTAILWIND},
    {id:6,name:"TypeScript",image:imgTYPE},
    {id:7,name:"Python",image:imgPYTHON},
    {id:8,name:"Flask",image:imgFLASK},
    {id:9,name:"Django",image:imgDJANGO},
];

const experiences=[
    {
        id:2,
        role:"Frontend developer",
        company:"Infolab Technologie",
        period:"Juil 2023 - Sept 2023",
        description:[
            "Developpement du site web de l'entreprise"
        ],
        image:infolab,
    },
     {
        id:1,
        role:"FullStack developer",
        company:"Infolab Technologie",
        period:"juil 2025 - Present",
        description:[
            "Refonte du back-end de l'application Sagess Schooling",
            "Refonte du front-end de l'application Sagess Schholing",
            "Mise en place du base de la Donnee en ligne de Sagess Schooling "
        ],
        image:infolab,
    },
]


const Experience=()=>{
    return(
        <div>
            <Title title="Experiences"/>
            <div className=" flex flex-col-reverse md:flex-row justify-center items-center" id="Experiences">
                <div className="flex  flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill)=>(
                        <div key={skill.id} className="flex justify-center flex-col">
                            <div className="w-24 h-24 p-2 roundes-full border-2 boeder-accent">
                                <img src={skill.image} alt={skill.name}  className=" oject-cover rounded-full h-full w-full"/>
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))

                    }
                </div>
                <div className="md:ml-4 flex flex-col space-y-4 ">
                    {experiences.map((experience)=>(
                        <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                            <div  className="flex items-center">
                                <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10" />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">{experience.role}, {experience.company}</h1>
                                    <span className="text-sm">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc,index)=>(
                                    <li key={index}>{desc}</li>

                                ))

                                }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience