import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <Image src={"/full-logo.svg"} alt="Site Logo" width={243} height={32} />
      </Link>
    </header>
  );
};

export default Header;
