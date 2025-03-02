"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {useRouter} from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Resume", href: "#resume" },
  { title: "Contact", href: "#contact" }
]

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSecretWrong,setSecret] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);
  const handleSubmit = () => {
    setSubmittedValue(inputValue);
    setOpen(false);
    if(inputValue == "02-02-2002"){
      router.push('/voyage')
    }else{
      setSecret(() => true)
      setInputValue(() => "")
    }
  };
  const handleVoyage = ()=> { 
    setSecret(false) 
    setOpen(true)}
  const router = useRouter()
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
             <NavigationMenuItem key={'voyage'}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={handleVoyage}>
                  Voyage
                </NavigationMenuLink>
              </NavigationMenuItem>
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
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Secret to View </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="col-span-4"
                placeholder="Enter secret"
              />
            </div>
          </div>
          {isSecretWrong ?     <Dialog open={isSecretWrong}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Alert !</DialogTitle>
        <DialogDescription>
          Entered Wrong Secret :(
        </DialogDescription>
        <DialogFooter>
            <Button variant="outline" onClick={() => setSecret(false)}>
              Cancel
            </Button>
          </DialogFooter>
      </DialogHeader>
    </DialogContent>
  </Dialog> : null}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
    </header>
  )
}


