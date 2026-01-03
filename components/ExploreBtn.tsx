"use client";

import Image from "next/image";

export default function ExploreBtn() {
  return (
    <button
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("Explore button clicked")}
    >
      <a href="#events">
        ExploreBtn{" "}
        <Image
          src="/icons/arrow-down.svg"
          alt="arrow-down"
          height={24}
          width={24}
        />
      </a>
    </button>
  );
}
