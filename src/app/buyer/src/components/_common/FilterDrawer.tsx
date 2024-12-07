"use client"

import * as React from "react"
import { SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



export function FilterDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button asChild variant="outline" size="icon" className="w-8 h-8 p-1.5 " ><SlidersHorizontal className="w-4 h-4"/></Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-[600px] w-full z-50 rounded-t-xl">
          <DrawerHeader className="">
            <DrawerTitle>필터</DrawerTitle>
            <DrawerDescription>---------------</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              
              
            </div>
          </div>
          <DrawerFooter>
            <Button>적용</Button>
            <DrawerClose asChild>
              <Button variant="outline">취소</Button>
            </DrawerClose>
          </DrawerFooter>

      </DrawerContent>
    </Drawer>
  )
}
