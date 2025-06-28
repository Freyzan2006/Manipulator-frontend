import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       '@common': path.resolve(__dirname, './src/common'),
//       '@app': path.resolve(__dirname, './src/app'),
//       "@features": path.resolve(__dirname, "./src/features"),
//       "@pages": path.resolve(__dirname, "./src/pages"),
//     },
//   },

//   plugins: [react()],

//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {

//           react: ["react", "react-dom"],
//           mui: ["@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"],
//           redux: ["@reduxjs/toolkit", "react-redux"],
//           router: ["react-router-dom"],
//         },
//       },
//     },
//   },
// })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@common": path.resolve(__dirname, "./src/common"),
        "@app": path.resolve(__dirname, "./src/app"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@pages": path.resolve(__dirname, "./src/pages"),
      },
    },

    plugins: [react()],

    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            mui: ["@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"],
            redux: ["@reduxjs/toolkit", "react-redux"],
            router: ["react-router-dom"],
          },
        },
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },

    server: {
      host: true,
    },
  };
});
