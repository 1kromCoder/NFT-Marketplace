import { Discord, Insta, Twiter, Youtube } from "@/assets/icons";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#3B3B3B] py-10">
      <div className="containers bg-[#3B3B3B]">
        <div className="flex justify-between">
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
            <Heading classList="!mb-[25px] !text-[22px]">
            Explore
            </Heading>
            <Text>Marketplace</Text>
            <Text classList="!my-[20px]">Rankings</Text>
            <Text>Connect a wallet</Text>
          </div>
          <div className="w-[330px]">
            <Heading classList="!mb-[25px] !text-[22px]">
            Join our weekly digest
            </Heading>
            <Text classList="!mb-[20px]">Get exclusive promotions & updates straight to your inbox.</Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
