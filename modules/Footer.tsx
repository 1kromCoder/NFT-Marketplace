import { Discord, Insta, Twiter, Youtube } from "@/assets/icons";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("HeadersContent");
  return (
    <footer className="bg-[#3B3B3B] py-10">
      <div className="containers">
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-0 justify-between">
          <div className="w-[238px] ">
            <Link className="!mb-[30px] inline-block" href={"/"}>
              <Image
                src={"/full-logo.svg"}
                alt="LOgo"
                width={243}
                height={32}
              />
            </Link>
            <Text classList="!mb-[20px]">
              NFT marketplace UI created with Anima for Figma.
            </Text>
            <div>
              <Text classList="!mb-[15px]">Join our community</Text>
              <div className="flex items-center gap-[10px]">
                <Link href={"/"}>
                  <Discord />
                </Link>
                <Link href={"/"}>
                  <Youtube />
                </Link>
                <Link href={"/"}>
                  <Twiter />
                </Link>
                <Link href={"/"}>
                  <Insta />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Heading tag="h1" classList="!mb-[25px] !text-[22px]">
              Explore
            </Heading>
            <Text>{t("navItem1")}</Text>
            <Text classList="!my-[20px]">{t("navItem2")}</Text>
            <Text>{t("navItem3")}</Text>
          </div>
          <div className="w-[330px]">
            <Heading tag="h1" classList="!mb-[25px] !text-[22px]">
              Join our weekly digest
            </Heading>
            <Text classList="!mb-[20px]">
              Get exclusive promotions & updates straight to your inbox.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
