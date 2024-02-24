import Footer from "@/components/Footer";
import HomeTitle from "@/components/HomeTitle";
import Parralax from "@/components/Parralax";
import { siteConfig } from "@/configs/siteConfig";
import { getSeoMetaData } from "@/lib/seo";

export async function generateMetadata() {
  const image = siteConfig.ogImage;

  return getSeoMetaData({
    title: "Siem Reap Temples | VichetN",
    linkTo: "/",
    keywords: siteConfig.description,
    description: siteConfig?.description,
    image,
    siteName: siteConfig.name,
  });
}

export default function Home() {
  return (
    <main className="bg-black">
      <HomeTitle />
      <Parralax />
      <Footer />
    </main>
  );
}
