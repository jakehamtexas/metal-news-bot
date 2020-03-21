const WebResourceOption = {
  HeavyBlogIsHeavy: "hbih"
};

const WebResourceOptionValuesAsString = `[${Object.values(
  WebResourceOption
).join("|")}]`;

export { WebResourceOption, WebResourceOptionValuesAsString };
