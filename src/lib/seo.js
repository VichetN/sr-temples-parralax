import { siteConfig } from "@/configs/siteConfig";
import { getDomain } from "./dev";

export const convertFAQ = (faqs = []) => {
  return faqs?.map((faq) => ({
    questionName: faq?.question_name,
    acceptedAnswerText: faq?.accepted_answer_text,
  }));
};

export const getSeoMetaData = ({
  title,
  linkTo,
  keywords,
  description,
  image,
  siteName,
}) => {
  const url = new URL(`${getDomain()}${linkTo || "/"}`);
  const imageUrl = image;

  const newTitle = title?.substring(0, 60);
  const newDescription = description?.substring(0, 160);

  return {
    title: {
      default: newTitle,
      template: `%s - ${newTitle}`,
    },
    metadataBase: url,
    description: newDescription,
    keywords: keywords,
    robots: "index, follow",

    authors: [
      {
        name: siteConfig.author,
        url: url,
      },
    ],
    creator: siteConfig.author,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: url,
      title: newTitle,
      description: newDescription,
      siteName: siteName,
      images: image?.url
        ? [
            {
              url: imageUrl,
              width: image?.width || 1200,
              height: image?.height || 630,
              alt: image?.alternativeText || newTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: newTitle,
      description: newDescription,
      images: image?.url ? [imageUrl] : [],
      creator: "@NoengVichet",
    },
    icons: {
      icon: "/favicon.ico",
      // shortcut: "/favicon-16x16.png",
      // apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: url,
      // languages: {
      //   'en-US': '/en-US',
      // },
    },
    other: {
      googlebot:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      bingbot:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
  };
};
