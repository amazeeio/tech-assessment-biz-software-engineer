import { defineConfig } from "cypress";
import { CLIENT_BASE_URL } from "./utils/constants";

export default defineConfig({
  e2e: {
    baseUrl: CLIENT_BASE_URL,
  },
});
