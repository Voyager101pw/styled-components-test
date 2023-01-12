import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Advanced4, Basic1, Basic2, Basic3, Basic4 } from '../lessons';
import { Basic5, Basic6, Basic7, Basic8 } from '../lessons';
import { Advanced1, Advanced2 } from '../lessons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1>Basic lessons</h1>
      <Basic1 />
      <Basic2 />
      <Basic3 />
      <Basic4 />
      <Basic5 />
      <Basic6 />
      <Basic7 />
      <Basic8 />
      <h1>Advanced lessons</h1>
      <Advanced1 />
      <Advanced2 />
      <Advanced4 />
    </>
  );
}
