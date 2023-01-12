import ProjectFake from "../data";

const ProjectDetailPage = ({ data: { projectId } }) => {
    const currentProject = ProjectFake.find((project) => project.id == projectId);
    if (!currentProject) return `Loading...`;
    return `
    <h1>Project Detail page</h1>
    ${currentProject.name}`;
};

export default ProjectDetailPage;