"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

import { cn } from "@lib/utils";
import { useWeb3Modal } from "@web3modal/ethers5/react";

import { Icons } from "@components/Icons";
import { buttonVariants } from "@components/ui/Button";

const Skeleton = ({ className }: { className?: string }) => (
  <div aria-live="polite" aria-busy="true" className={className}>
    <span className="inline-flex w-full h-[38px] animate-pulse select-none rounded-md bg-gray-300 leading-none">
      ‌
    </span>
    <br />
  </div>
);

const LoadingSkeleton = () => (
  <>
    <div className="inline-flex items-center justify-center transition-colors h-10 px-4 py-2">
      <Skeleton className="w-[158px]  max-w-full" />
    </div>
  </>
);

export function ButtonNav() {
  const pathname = usePathname();
  const { open } = useWeb3Modal();
  const isExplore = pathname === "/explore";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav>
      {isExplore ? (
        <div className="flex items-center gap-2 px-4 py-2">
          {loading ? (
            <div className="px-0">
              <LoadingSkeleton />
              <LoadingSkeleton />
            </div>
          ) : (
            <>
              <button
                onClick={() => open({ view: "Networks" })}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "px-4"
                )}
              >
                <Icons.link className="w-4 h-4 mr-2" />
                Change Network
              </button>
              <button
                onClick={() => open()}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "px-4"
                )}
              >
                <Icons.wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </button>
            </>
          )}
        </div>
      ) : (
        <Link
          href="/explore"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "px-4"
          )}
        >
          <Icons.search className="w-4 h-4 mr-2" />
          Start exploring
        </Link>
      )}
    </nav>
  );
}
