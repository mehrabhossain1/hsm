"use client";

import { Gift } from "lucide-react";
import { useRouter } from "next/navigation";

const GiftButton = () => {
  const router = useRouter();

  const handleGiftClick = () => {
    router.push("/gift");
  };

  return (
    <div className="fixed z-50 top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center cursor-pointer">
      {/* Gift Text */}
      <span className="mb-0.5 text-xs font-bold text-black bg-[#FFCE00] px-2 py-1 rounded-t">
        GIFT
      </span>
      {/* Gift Icon */}
      <button
        onClick={handleGiftClick}
        className="px-2 py-1 border bg-white hover:bg-[#FFCE00] transition"
      >
        <Gift size={24} />
      </button>
    </div>
  );
};

export default GiftButton;
