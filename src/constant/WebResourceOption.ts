const WebResourceOption = {
  HeavyBlogIsHeavy: "hbih",
  InvisibleOranges: "io",
  MetalSucks: "ms"
};

const WebResourceOptionValuesAsString = `[${Object.values(
  WebResourceOption
).join("|")}]`;

export { WebResourceOption, WebResourceOptionValuesAsString };
