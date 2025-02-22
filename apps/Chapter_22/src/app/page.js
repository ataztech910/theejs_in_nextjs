'use client';
import { useRef } from 'react';
import Header from "@/components/Header";
import Block from "@/components/Block";

export default function Home() {
  const ref = useRef();

  return (
    <main className="max-w-[1000px] m-auto" ref={ref}>
         <Header />
         <Block />
         <Block reverse />
         <Block />
    </main>
  )
}

