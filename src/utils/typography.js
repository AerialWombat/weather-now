import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Oswald",
      styles: ["700"]
    },
    {
      name: "PT Sans",
      styles: ["400", "700"]
    }
  ],
  headerFontFamily: ["Oswald", "sans-serif"],
  bodyFontFamily: ["PT Sans", "sans-serif"]
});

export default typography;
