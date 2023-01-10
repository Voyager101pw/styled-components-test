import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { BasicLess1, BasicLess2, BasicLess3, BasicLess4 } from '../lessons';
import { BasicLess5, BasicLess6, BasicLess7, BasicLess8 } from '../lessons';
import { AdvancedLess1 } from '../lessons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1>Basic lessons</h1>
      <BasicLess1 />
      <BasicLess2 />
      <BasicLess3 />
      <BasicLess4 />
      <BasicLess5 />
      <BasicLess6 />
      <BasicLess7 />
      <BasicLess8 />
      <h1>Advanced lessons</h1>
      <AdvancedLess1/>
    </>
  );
}
