import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-[1180px] mx-auto py-5">
      <Link href={"/"}>
        <Image src={"/full-logo.svg"} alt="Site Logo" width={243} height={32} />
      </Link>
    </header>
  );
};

export default Header;
