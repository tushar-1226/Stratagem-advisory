"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import {
  subtleFadeInDown,
  subtleFadeIn,
  subtleStaggerContainer,
  subtleStaggerItem,
  subtleMobileMenuSlide,
  subtleDropdown,
  subtleFadeInUp,
} from "@/lib/animations";
import Button from "./ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const servicesSubMenu = [
    {
      href: "/service/market-research",
      label: "Market Research",
      description:
        "In-depth market research to understand customer needs, market trends, and demand.",
    },
    {
      href: "/service/competitive-intelligence",
      label: "Competitive Intelligence",
      description:
        "Strategic competitive intelligence to analyze competitors, positioning, and market advantages.",
    },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
  ];

  return (
    <motion.nav
      className="bg-white"
      initial="hidden"
      animate="visible"
      variants={subtleFadeInDown}
    >
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex justify-between gap-4 lg:gap-20 items-center h-16">
          <motion.div className="shrink-0" variants={subtleFadeIn}>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Stratagem Advisory home"
            >
              <Image
                src="/images/logo.png"
                alt="Stratagem Advisory"
                width={967}
                height={228}
                priority
                className="h-auto w-[180px] sm:w-[220px] lg:w-[280px]"
              />
            </Link>
          </motion.div>
          <div className="hidden lg:flex lg:space-x-3 items-center">
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={subtleFadeIn}>
                <Link
                  href={link.href}
                  className="hover:text-primary px-3 py-2 ease-in-out"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            {/* Services Dropdown - Desktop */}
            <motion.div
              className="relative"
              variants={subtleFadeIn}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="hover:text-primary px-3 py-2 ease-in-out flex items-center gap-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <motion.div
                  animate={{
                    rotate: isServicesOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-1 w-96 bg-white rounded-md border border-gray-100 p-4 z-50"
                    variants={subtleDropdown}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {servicesSubMenu.map((subItem, index) => (
                      <motion.div
                        key={subItem.href}
                        variants={subtleFadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.03 }}
                      >
                        <div className="py-2">
                          <Link
                            href={subItem.href}
                            className="block hover:text-primary"
                          >
                            {subItem.label}
                            <span className="text-sm text-gray-500 block">
                              {subItem.description}
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div>
              <Link href="/contact-us">
                <Button text="Contact us" />
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <motion.div className="lg:hidden" variants={subtleFadeIn}>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:cursor-pointer"
              aria-expanded="false"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden overflow-hidden"
            variants={subtleMobileMenuSlide}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200"
              variants={subtleStaggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={subtleStaggerItem}>
                  <Link
                    href={link.href}
                    className="hover:bg-primary hover:text-white hover:rounded-lg block px-3 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Services Dropdown - Mobile */}
              <motion.div variants={subtleStaggerItem}>
                <button
                  className="w-full hover:bg-primary hover:text-white hover:rounded-lg flex items-center justify-between px-3 py-2"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>Services</span>
                  <motion.div
                    animate={{
                      rotate: isMobileServicesOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <ChevronDownIcon className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      className="overflow-hidden"
                      variants={subtleMobileMenuSlide}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div className="pl-6 space-y-1">
                        {servicesSubMenu.map((subItem, index) => (
                          <motion.div
                            key={subItem.href}
                            variants={subtleStaggerItem}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={subItem.href}
                              className="group hover:bg-primary hover:text-white hover:rounded-lg block px-3 py-2"
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                            >
                              {subItem.label}
                              <div className="text-sm py-2 text-gray-500 group-hover:text-white">
                                {subItem.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <div className="border-t border-gray-200 pt-5 mx-3">
                <Link
                  href="/contact-us"
                  className=""
                  onClick={() => setIsOpen(false)}
                >
                  <Button text="Contact us" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
