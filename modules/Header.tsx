import { MenuIcon, UserIcon } from "@/assets/icons";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="!max-w-[1180px] w-full px-[30px] lg:px-0 mx-auto py-5 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          className="w-[182px] h-[24px] lg:w-[243px] lg:h-[32px]"
          priority
          src={"/full-logo.svg"}
          alt="Site Logo"
          width={243}
          height={32}
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-2.5">
        <Link
          className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5"
          href={"/marketplace"}
        >
          Marketplacm
        </Link>
        <Link
          className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5"
          href={"/rankings"}
        >
          Rankings
        </Link>
        <Link
          className="text-[14px] font-semibold text-[#FFFFFF] inline-block py-3 px-5"
          href={"/connect-wallet"}
        >
          Connect a wallet
        </Link>
        <Button
          title="Sign Up"
          icon={<UserIcon />}
          iconPOsition="left"
          type="button"
          variant="filled"
        ></Button>
      </nav>
      <button className="lg:hidden">
        <MenuIcon />
      </button>
    </header>
  );
};

export default Header;
