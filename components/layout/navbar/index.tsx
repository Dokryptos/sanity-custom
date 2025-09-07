"use client";
import React, { useState } from "react";
import Grid from "@/components/ui/grid";
import Link from "next/link";

export default function LayoutNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  return (
    <nav>
      <Grid className="gap-5">
        <div className="laptop:col-start-1 laptop:col-span-6 tablet:col-span-4 pl-5">
          <button
            type="button"
            className="p-2 cursor-pointer"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {openMenu && (
            <div className="absolute flex left-0 w- flex-col z-50 bg-gray-400">
              <Link href="/">Accueil</Link>
              <Link href="/economie">Economie</Link>
              <Link href="/ecologie">Ecologie</Link>
              <Link href="/politique">Politique</Link>
              <Link href="/parlement">Parlement </Link>
              <Link href="/Societe">Société</Link>
              <Link href="/social">Social</Link>
              <Link href="/international">International</Link>
              <Link href="/ideeetopinion">Idées et opinion</Link>
              <Link href="/social">Social</Link>
            </div>
          )}
        </div>

        <div className="laptop:col-start-7 tablet:col-start-5 flex col-start-1 col-span-2 pl-5 tablet:pl-0">
          <Link href="/">Nouveau Populaire</Link>
        </div>
        <div className="laptop:col-start-9 tablet:col-start-7 flex col-start-3 col-span-2 pl-5 tablet:pl-0">
          <div>
            <Link href="/soutiens">Je soutiens</Link>
          </div>
          <div>
            <Link href="/soutiens">S&#39;abonner</Link>
          </div>
        </div>
      </Grid>
    </nav>
  );
}
