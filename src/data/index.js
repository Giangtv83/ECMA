const menus = [
    { id: 1, name: "Trang chu", link: "/" },
    { id: 1, name: "Du an", link: "/projects" },
    { id: 3, name: "Bai viet", link: "/posts" },
    { id: 4, name: "Lien he", link: "/contact" },
];

const projects = [
    {
        id: 1,
        name: "Du an 1",
        teams: [
            { id: 1, name: "Dinh" },
            { id: 2, name: "Tuan" },
            { id: 3, name: "Quang" },
        ],
    },
    { id: 2, name: "Du an mau", auther: "Giang" },
    { id: 3, name: "Du an TN", auther: "Hien" },
];
export { projects, menus };