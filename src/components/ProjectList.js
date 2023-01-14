import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
    return `
    <div>
    ${projects.map((project) => `${ProjectItem({ project })}`).join("")}
    </div>
    `;
};

export default ProjectList;