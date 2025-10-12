"use client";

import SpaceBackground from "@/components/SpaceBackground";
import  withLayoutComponent from "@/components/withLayoutComponent";
import CanvasBackground from "@/components/Canvas";
import withDraggable from "@/components/DragDrop";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";


const DemoContent = withLayoutComponent(Navbar)
const DemoContents = withLayoutComponent(Hero)
const DraggableBox = withDraggable(DemoContent);
const DraggableBoxs = withDraggable(DemoContents);

/**
 * 
 *  <p className="text-gray-400 text-s">
    Hi, this is Raja Sekar 
    <br/>
    <button className="border-2 border-gray-100"> view resume </button>
  </p>
 */

export default function Home() {
  return (
    <CanvasBackground>
      <SpaceBackground>
        <DraggableBox initialPosition={{ x: 150, y: 250 }} />
        <DraggableBoxs/>
      </SpaceBackground>
    </CanvasBackground>
  );
}
