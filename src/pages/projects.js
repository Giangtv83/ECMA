import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projectsFake } from "../data";

const ProjectsPage = () => {
    return `
        ${Header()}
            <h1>Projects Page</h1>
        ${ProjectList({ projects: projectsFake })}
    `;
};

export default ProjectsPage;
