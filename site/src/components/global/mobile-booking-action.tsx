"use client";

import { Icon } from "@/components/icon";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MobileBookingAction() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function update() {
      const hero = document.querySelector("[data-hero]");
      setVisible(!!hero && hero.getBoundingClientRect().bottom < 0);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);
  if (!visible || pathname.startsWith("/book")) return null;
  return (
    <aside
      aria-label="Book a consultation"
      className="mobile-booking lg:hidden"
    >
      <Link className="button w-full" href="/book">
        Book a consultation <Icon />
      </Link>
    </aside>
  );
}
