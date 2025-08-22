import Title from "./Title";

import img1 from "../assets/projects/11.jpeg"
import img2 from "../assets/projects/22.png"
import img4 from "../assets/projects/4.png"
import img3 from '../assets/projects/33.png'

import {Github, Video} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Api de gestion d'un parking de vehicule ",
        description: "Ce projet avait pour but de developper un outils permettant de gerer un parking de vehicule d'une entreprise",
        technologies: ['flask', 'Boostrap'],
        repolink: 'https://github.com/Tsabeng/Projet-Groupe5-Testing-',
        demoLink:'#',
        image: img1,
    },
    {
        id: 2,
        title: "Platforme de location de gaz en ligne",
        description: "Ce projet a pour but de develloper une application web permettant au utilisateur de rechercher et commander facilement du gaz depuis leur domicile , egalement au depots d'acroitre leurs clientelle",
        technologies: ['Django', 'DjangoRestFramework', 'Boostrap'],
        repolink: 'https://github.com/Tsabeng/Platform-de-gaz',
        image: img2,
        demoLink:'https://delphan.pythonanywhere.com/',
    },
    {
        id: 4,
        title: "Quelques petits projets python",
        description: "Quelques petits projets python pour s'exercer",
        technologies: ['python'],
        repolink: 'https://github.com/Tsabeng/Mini_projet',
        image: img4,
        demoLink:'#',
    },
    {
        id: 3,
        title: "Portfolio interactif",
        description: "Ce portfolio a pour but de montrer un petit bout de moi.",
        technologies: ['React','Tailwind'],
        repolink: '#',
        image: img3,
        demoLink:'#',
    },
]

const Projects = () => {
    return (
        <div className="mt-10">
            <Title title="Mes projects" />

            <div className="grid md:grid-cols-3 gap-4" id="Project">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img src={project.image} alt={project.title} className="w-full rounded-x1 h-56 object-cover" />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) =>
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            )

                            }
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                            <Video className="w-4"/>
                            </a>
                            <a className="btn btn-neutral w-1/3" href={project.repolink}>
                            <Github className="w-4"/>
                            </a>

                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Projects;
