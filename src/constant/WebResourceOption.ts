const WebResourceOption = {
  HeavyBlogIsHeavy: "hbih",
  InvisibleOranges: "io"
};

const WebResourceOptionValuesAsString = `[${Object.values(
  WebResourceOption
).join("|")}]`;

export { WebResourceOption, WebResourceOptionValuesAsString };
