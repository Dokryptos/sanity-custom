"use client";
import React, { useState } from "react";
import Grid from "@/components/ui/grid";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function LayoutNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const menuData = [
    {
      label: "Economie",
      sub: [
        { label: "Fiscalité", href: "/articles/fiscalite" },
        { label: "Capitalisme", href: "/articles/capitalisme" },
        { label: "Industrie", href: "/articles/industrie" },
        { label: "Précarité", href: "/articles/precarite" },
      ],
    },
    {
      label: "Ecologie",
      sub: [
        { label: "Climat", href: "/articles/climat" },
        { label: "Mobilisations", href: "/articles/mobilisations" },
        { label: "Energie", href: "/articles/energie" },
        {
          label: "Justice environnementale",
          href: "/articles/justice-environnementale",
        },
      ],
    },
    {
      label: "Politique",
      sub: [
        { label: "Partis", href: "/articles/partis" },
        { label: "Campagnes", href: "/articles/campagnes" },
        { label: "Institutions", href: "/articles/institutions" },
        { label: "Hégémonie", href: "/articles/hegemonie" },
      ],
    },
    {
      label: "Parlement",
      sub: [
        { label: "Commissions", href: "/articles/commissions" },
        { label: "Lois", href: "/articles/lois" },
        { label: "Constitutionnalité", href: "/articles/constitutionnalite" },
      ],
    },
    {
      label: "Société",
      sub: [
        { label: "Discriminations", href: "/articles/discriminations" },
        { label: "Culture", href: "/articles/culture" },
        { label: "Normes", href: "/articles/normes" },
        { label: "Genres", href: "/articles/genres" },
        { label: "Religions", href: "/articles/religions" },
      ],
    },
    {
      label: "Social",
      sub: [
        { label: "Services publics", href: "/articles/service-public" },
        { label: "Travail", href: "/articles/travail" },
        { label: "Santé", href: "/articles/sante" },
        { label: "Logement", href: "/articles/logement" },
        { label: "Solidarité", href: "/articles/solidarite" },
      ],
    },
    {
      label: "International",
      sub: [
        { label: "Nord-Sud", href: "/articles/nord-sud" },
        { label: "luttes mondiales", href: "/articles/luttes-mondiales" },
        { label: "Europe", href: "/articles/europe" },
        {
          label: "Conflits géopolitiques",
          href: "/articles/conflits-geopolitique",
        },
      ],
    },
    {
      label: "Tribunes et entretiens",
      sub: [
        { label: "Tribunes", href: "/tribunes" },
        { label: "Entretiens", href: "/entretiens" },
      ],
    },
  ];
  return (
    <nav>
      <Grid className="gap-5">
        <div className="laptop:col-start-1 laptop:col-span-6 tablet:col-span-2 pl-5">
          <button
            type="button"
            className="p-2 cursor-pointer"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {openMenu ? (
              <div className="flex items-center">
                <X className="w-6 h-6" />
                <p className="text-[12px]">Fermer</p>
              </div>
            ) : (
              <div className="flex items-center">
                <Menu className="w-6 h-6" />
                <p className="text-[12px]">Menu</p>
              </div>
            )}
          </button>
          {openMenu && (
            <div className="absolute flex left-0 flex-col z-50 bg-gray-400 w-full">
              <Link href="/">Accueil</Link>
              {menuData.map((item, i) => (
                <li key={i} className="group">
                  <div
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex items-center justify-between w-full"
                  >
                    {item.label}
                    <ChevronDown
                      className={`${openIndex === i ? "rotate-180" : "rotate-0"} w-4 h-4 transition-transform duration-300`}
                    />
                  </div>
                  {openIndex === i && (
                    <ul className="ml-6 mt-2 space-y-1 text-sm text-gray-600">
                      {item.sub.map((subItem, j) => (
                        <li key={j}>
                          <Link
                            href={subItem.href}
                            className="block hover:text-blue-600"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </div>
          )}
        </div>

        <div className="laptop:col-start-7 tablet:col-start-4 flex col-start-2 tablet:col-span-3 col-span-2 pl-5 tablet:pl-0">
          <Link href="/">Nouveau Populaire</Link>
        </div>
        <div className="laptop:col-start-10 tablet:col-start-7 flex col-start-4 tablet:col-span-3 col-span-1 tablet:justify-between">
          <div className="tablet:flex hidden">
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
