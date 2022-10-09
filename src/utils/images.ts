export const getTitle = (url: string) => {
  const split1 = url.split("-");
  if (split1.length < 2) return "Filename: " + url;
  const withoutNumbers = split1[2];
  const lastDot = withoutNumbers.lastIndexOf(".");
  return withoutNumbers.substring(0, lastDot);
};
