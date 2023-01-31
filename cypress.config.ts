import { defineConfig } from "cypress";

export default defineConfig({
  // Somente para testar os iframes. Remover em todos os outros cenários!
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
