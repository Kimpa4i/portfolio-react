import {projects} from "../helpers/projectsList";
import img from "./../img/projects/02-big.jpg"
import {BtnGitHub} from "../components/btnGitHub/BtnGitHub";
import {useParams} from "react-router-dom"

export const Project = () => {
// const r = useParams();
    const {id} = useParams();
    console.log(id)
    const project = projects.filter((project) => (project.id == id))
    console.log(project)
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project[0].title}</h1>
                    <img className="project-details__cover" alt={project[0].title} src={project[0].imgBig}/>
                    <div className="project-details__desc">
                        <p>{project[0].skills}</p>
                    </div>

                    {project[0].gitHubLink && (<BtnGitHub link="https://github.com"/>
                    )}
                </div>
            </div>
        </main>
    )
}