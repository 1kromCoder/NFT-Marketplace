import { MenuIcon, UserIcon } from "@/assets/icons";
import Button from "@/components/Button";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import LangConfig from "./LangConfig";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("HeadersContent");
  return (
    <header className="containers !max-w-[1180px] w-full lg:px-0 flex items-center justify-between mx-auto !py-5">
      <Link href={"/"}>
        <Image
          className="w-[182px] h-[24px] lg:w-[243px] lg:h-[32px]"
          priority
          src={"/full-logo.svg"}
          alt="site logo"
          width={243}
          height={32}
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-2.5">
        <Link
          className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5"
          href={"/marketplace"}
        >
          {t("navItem1")}
        </Link>
        <Link
          className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5"
          href={"/rankings"}
        >
          {t("navItem2")}
        </Link>
        <Link
          className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5"
          href={"/connect-wallet"}
        >
          {t("navItem3")}
        </Link>
        <LangConfig />
        <Button
          type="submit"
          variant="filled"
          icon={<UserIcon />}
          iconPosition="left"
          title={t("button")}
        />
      </nav>
      <button className="lg:hidden">
        <MenuIcon />
      </button>
    </header>
  );
};

export default Header;
