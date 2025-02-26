import Link from "next/link";
import CubosMoviesLogo from "@/assets/logo-cubos.svg";

const Logo = () => {
  return (
    <nav>
      <Link href="/" className="flex items-center gap-4" aria-label="Página inicial">
        <CubosMoviesLogo className="w-40 h-9 text-gray-12" />
        <span className="font-inter font-bold text-xl text-gray-12" aria-hidden="true">
          Movies
        </span>
      </Link>
    </nav>
  );
};

export { Logo };
