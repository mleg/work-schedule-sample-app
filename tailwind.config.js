module.exports = {
  purge:
    process.env.NODE_ENV !== "development"
      ? {
          enabled: true,
          content: ["./index.html", "./src/**/*.ts", "./src/**/*.tsx"],
        }
      : undefined,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: "#root",
};
