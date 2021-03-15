import { createApp } from "vue";
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import "./index.css";
import App from "./App.vue";
import { router } from "./routes";

const app = createApp(App);
app.use(router);
app.mount("#app");
