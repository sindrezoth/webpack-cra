module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
    // automatic for working good without importing React in every file with jsxA
  ],
  plugins: [
    process.env.NODE_ENV !== "production" && "react-refresh/babel",
  ].filter(Boolean),
};
