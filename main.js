import './style.css'

import HomePage from './src/pages/home';
import AboutPage from './src/pages/about';
import NotFoundPage from './src/pages/not-found';
import PostDetailPage from './src/pages/post-detail';
import ContactPage from './src/pages/contact';
import PostsPage from './src/pages/posts';
import ProjectDetailPage from './src/pages/project-detail';
import ProjectPage from './src/pages/projects';
import { render, router } from './src/lib';


const app = document.querySelector("#app");


router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/post", () => render(PostsPage, app));
router.on("/postdetail", () => render(PostDetailPage, app));
router.on("/projects", () => render(ProjectPage, app));
router.on("/project/:projectId", (params) => render(ProjectDetailPage(params), app));
router.notFound(() => render(NotFoundPage, app));


router.resolve();