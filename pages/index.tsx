import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Less1, Less2, Less3, Less4, Less5, Less6 } from '../lessons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Less1 />
      <Less2 />
      <Less3 />
      <Less4 />
      <Less5 />
      <Less6 />
    </>
  );
}
