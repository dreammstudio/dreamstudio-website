import React from "react";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  return (
    <div className="bg-button w-full">
      <p className="text-center text-xl font-bold">
        This website open source on{" "}
        <span onClick={() => {
            router.push("https://github.com/dreammstudio/dreamstudio-website");
        }} className="text-black hover:text-white transition-all cursor-pointer">
          Github
        </span>
      </p>
    </div>
  );
}

export default Header;
