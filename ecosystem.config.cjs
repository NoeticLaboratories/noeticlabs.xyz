module.exports = {
  apps: [
    {
      name: "noeticlabs.xyz",
      script: "./index.js",
      cwd: "/home/marco/noeticlabs.xyz/.svelte-kit/output/server/",
      env: {
        NODE_ENV: "production",
        PORT: 3020,
      },
    },
  ],
};
