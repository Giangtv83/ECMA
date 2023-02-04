import Header from "../components/Header";
import { projects } from "../data";

const ProjectDetailPage = ({ data: { projectId } }) => {
    const currentProject = projects.find((project) => project.id == projectId);
    if (!currentProject) return `Loading...`;
    return `
    ${Header()}
    <h1>Project Detail page</h1>
    ${currentProject.name}
    <hr/>
    ${currentProject.teams
            ? `
        <h2>Teams</h2>
        <ul>${currentProject.teams.map((member) => `<li>${member.name}</li>.`).join("")}</ul>
        `
            : "Khong co team"
        }
    `;
};

export default ProjectDetailPage;