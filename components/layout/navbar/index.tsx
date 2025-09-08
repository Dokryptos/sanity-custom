"use client";
import React, { useState } from "react";
import Grid from "@/components/ui/grid";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <nav className="fixed inset-0 bg-white z-50 flex flex-col h-10 tablet:h-14 justify-center shadow-md">
      <Grid>
        <div className="laptop:col-start-1 laptop:col-span-6 tablet:col-span-2 pl-5">
          <button
            type="button"
            className="p-2 cursor-pointer 0"
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
                  className="fixed top-14 inset-0 bg-black z-20"
                  onClick={() => setOpenMenu(false)} // ferme si on clique dehors
                />
                <motion.div
                  initial={{ x: "-100%", height: "100%" }}
                  animate={{ x: 0, height: "100%" }}
                  exit={{ x: "-100%", height: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`fixed top-10 tablet:top-14 bg-white z-50 flex flex-col p-6 w-full tablet:w-1/2 laptop:w-1/3`}
                >
                  <Link href="/">Accueil</Link>
                  {menuData.map((item, i) => (
                    <li key={i} className="group p-20">
                      <div
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
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
                            className="pl-6 text-sm grid grid-cols-2 gap-3 overflow-hidden"
                          >
                            {item.sub.map((subItem, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: j * 0.01 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="block hover:underline"
                                >
                                  {subItem.label}
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
  );
}
