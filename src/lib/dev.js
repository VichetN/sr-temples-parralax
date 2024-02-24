export const getDomain = () => {
    return (
      process.env.NEXT_SITE_DOMAIN ||
      process.env.NEXT_PUBLIC_DOMAIN ||
      "http://localhost:3000"
    );
  };
  