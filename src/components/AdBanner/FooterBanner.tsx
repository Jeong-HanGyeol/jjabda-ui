"use client";

import { useEffect } from "react";

interface FooterBannerProps {
  adClient: string;
  adSlot: string;
}

export default function FooterBanner({ adClient, adSlot }: FooterBannerProps) {
  useEffect(() => {
    try {
      (window as unknown as Record<string, unknown[]>).adsbygoogle =
        (window as unknown as Record<string, unknown[]>).adsbygoogle || [];
      ((window as unknown as Record<string, unknown[]>).adsbygoogle).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="flex w-full justify-center py-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="false"
      />
    </div>
  );
}
