import ProjectFake from "../data"

const ProjectList = () => {
    return `
    <div>
    ${ProjectFake
            .map((item) => {
                return `<div><a href="/project/${item.id}">${item.name}</a></div>`;
            })
            .join("")}
    </div>
    `;
};

export default ProjectList;