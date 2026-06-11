import Link from "next/link";
import { navLinks } from "../Header/navLinks";

const aboutLinks = [
  { href: "/about", label: "About JJabda" },
];

const companyInfo = {
  name: "짭다 (jjabda)",
  // businessNumber: "사업자등록번호 : 000-00-00000",
  representative: "대표자 : 정한결",
  address: "대전광역시 어딘가",
  phone: "전화 : 010-0000-0000",
  email: "이메일 : gksruf05121@gmail.com",
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c1c1f] py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* 상단 링크 영역 */}
        <div className="flex gap-16">
          {/* 로고 */}
          <Link
            href="/"
            className="shrink-0 text-sm font-bold text-white"
          >
            JJabda
          </Link>

          {/* 링크 컬럼들 */}
          <div className="flex flex-1 gap-16">
            {/* JJABDA 컬럼 */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-bold text-white">JJabda</p>
              {aboutLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[#9e9eb1] hover:opacity-70 transition-opacity"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Product 컬럼 */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-bold text-white">Product</p>
              {navLinks.map(({ href, label, enabled }) =>
                enabled ? (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-[#9e9eb1] hover:opacity-70 transition-opacity"
                  >
                    {label}
                  </Link>
                ) : (
                  <span key={href} className="text-sm text-[#9e9eb1]/40">
                    {label} <span className="text-xs">(준비중)</span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="my-10 border-t border-white/10" />

        {/* 회사 정보 */}
        <ul className="flex flex-row flex-wrap gap-y-0.5">
          {Object.values(companyInfo).map((item, index, arr) => (
            <li key={item} className="flex items-center text-xs text-[#7b7a8e]">
              {item}
              {index < arr.length - 1 && (
                <span className="mx-2">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* 저작권 */}
        <p className="mt-4 text-xs text-[#7b7a8e]">
          © 2025 jjabda. All rights reserved. Unauthorized reproduction or distribution of any content on this site is prohibited.
        </p>
      </div>
    </footer>
  );
}
