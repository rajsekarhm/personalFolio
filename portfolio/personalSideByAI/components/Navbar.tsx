"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Resume", href: "#resume" },
  { title: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href={item.href}>
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="w-10 px-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-2 py-1 text-lg"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

