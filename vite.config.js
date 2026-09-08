import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        // Helps detect file changes in WSL2 mounted directories.
        watch: {
            usePolling: true,
            interval: 100,
        },
        // Enable HMR and show compilation errors in the browser.
        hmr: {
            overlay: true,
        },
    },
});
