"use client";

import { useEffect } from "react";

interface HeaderBannerProps {
  adClient: string;
  adSlot: string;
}

export default function HeaderBanner({ adClient, adSlot }: HeaderBannerProps) {
  useEffect(() => {
    try {
      (window as unknown as Record<string, unknown[]>).adsbygoogle =
        (window as unknown as Record<string, unknown[]>).adsbygoogle || [];
      ((window as unknown as Record<string, unknown[]>).adsbygoogle).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="relative w-full bg-[#d9d9d9]" style={{ minHeight: "90px" }}>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-[#999]">
        Header Ad배너
      </span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  );
}
