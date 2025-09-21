"use client";
import React, { useState } from "react";
import Grid from "@/components/ui/grid";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarMarquee from "./marquee";

export default function LayoutNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const menuData = [
    {
      label: "Economie",
      href: "/economie",
      sub: [
        { label: "Fiscalité", href: "/economie/fiscalite" },
        { label: "Capitalisme", href: "/economie/capitalisme" },
        { label: "Industrie", href: "/economie/industrie" },
        { label: "Précarité", href: "/economie/precarite" },
      ],
    },
    {
      label: "Ecologie",
      href: "/ecologie",
      sub: [
        { label: "Climat", href: "/ecologie/climat" },
        { label: "Mobilisations", href: "/ecologie/mobilisations" },
        { label: "Energie", href: "/ecologie/energie" },
        {
          label: "Justice environnementale",
          href: "/ecologie/justice-environnementale",
        },
      ],
    },
    {
      label: "Politique",
      href: "/politique",
      sub: [
        { label: "Partis", href: "/politique/partis" },
        { label: "Campagnes", href: "/politique/campagnes" },
        { label: "Institutions", href: "/politique/institutions" },
        { label: "Hégémonie", href: "/politique/hegemonie" },
      ],
    },
    {
      label: "Parlement",
      href: "/parlement",
      sub: [
        { label: "Commissions", href: "/parlement/commissions" },
        { label: "Lois", href: "/parlement/lois" },
        { label: "Constitutionnalité", href: "/parlement/constitutionnalite" },
      ],
    },
    {
      label: "Société",
      href: "/societe",
      sub: [
        { label: "Discriminations", href: "/societe/discriminations" },
        { label: "Culture", href: "/societe/culture" },
        { label: "Normes", href: "/societe/normes" },
        { label: "Genres", href: "/societe/genres" },
        { label: "Religions", href: "/societe/religions" },
      ],
    },
    {
      label: "Social",
      href: "/social",
      sub: [
        { label: "Services publics", href: "/social/service-public" },
        { label: "Travail", href: "/social/travail" },
        { label: "Santé", href: "/social/sante" },
        { label: "Logement", href: "/social/logement" },
        { label: "Solidarité", href: "/social/solidarite" },
      ],
    },
    {
      label: "International",
      href: "/international",
      sub: [
        { label: "Nord-Sud", href: "/international/nord-sud" },
        { label: "luttes mondiales", href: "/international/luttes-mondiales" },
        { label: "Europe", href: "/international/europe" },
        {
          label: "Conflits géopolitiques",
          href: "/international/conflits-geopolitique",
        },
      ],
    },
    {
      label: "Tribunes",
      href: "/tribunes",
      sub: [{ label: "Tribunes", href: "/tribunes" }],
    },
    {
      label: "Entretiens",
      href: "/entretiens",
      sub: [{ label: "Entretiens", href: "/entretiens" }],
    },
  ];
  return (
    <>
      <nav
        role="navigation"
        className="fixed bg-white z-50 h-10 tablet:h-14 select-none w-full border-black"
      >
        <Grid className="flex-col justify-center">
          <div className="laptop:col-start-1 laptop:col-span-6 tablet:col-span-2">
            <button
              type="button"
              className="p-2 cursor-pointer 0"
              aria-expanded={openMenu}
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
              <AnimatePresence>
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-10 tablet:top-14 inset-0 bg-black z-20"
                    onClick={() => setOpenMenu(false)} // ferme si on clique dehors
                  />
                  <motion.div
                    initial={{ x: "-100%", height: "100%" }}
                    animate={{ x: 0, height: "100%" }}
                    exit={{ x: "-100%", height: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    aria-hidden={!openMenu}
                    className={`fixed top-10 tablet:top-14 bg-white z-50 flex gap-5 flex-col p-6 w-full tablet:w-1/2 laptop:w-1/3`}
                  >
                    <Link href="/">Accueil</Link>
                    {menuData.map((item, i) => (
                      <li key={i}>
                        <div
                          onClick={() =>
                            setOpenIndex(openIndex === i ? null : i)
                          }
                          className="flex items-center justify-between w-full p-5"
                        >
                          {item.label}
                          <ChevronDown
                            className={`${openIndex === i ? "rotate-180" : "rotate-0"} w-4 h-4 transition-transform duration-300`}
                          />
                        </div>
                        <AnimatePresence>
                          {openIndex === i && (
                            <motion.ul
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="pl-6 text-sm grid grid-cols-2 gap-4 overflow-hidden"
                            >
                              {item.sub.map((subItem, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, y: -5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: j * 0.01 }}
                                >
                                  <Link href={subItem.href}>
                                    <p className="hover:opacity-60 duration-400 transition-transform ease-in-out">
                                      {subItem.label}
                                    </p>
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </motion.div>
                </>
              </AnimatePresence>
            )}
          </div>
          <div className="laptop:col-start-7 tablet:col-start-4 flex col-start-2 tablet:col-span-3 col-span-2 pl-5 tablet:pl-0">
            <Link href="/">Nouveau Populaire</Link>
          </div>
          <div className="laptop:col-start-10 tablet:col-start-7 flex col-start-4 tablet:col-span-3 col-span-1 tablet:justify-between">
            <div className="tablet:flex hidden">
              <Link href="/soutiens">Je soutiens</Link>
            </div>
            <div className="">
              <Link href="/soutiens">S&#39;abonner</Link>
            </div>
          </div>
        </Grid>
      </nav>
      <NavbarMarquee menuData={menuData} />
    </>
  );
}
