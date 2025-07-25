// postcss.config.cjs
module.exports = {
  plugins: {
    tailwindcss: {},    // ← core plugin reads your tailwind.config.cjs
    autoprefixer: {},
  },
};
