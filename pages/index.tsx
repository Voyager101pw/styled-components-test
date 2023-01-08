import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Less1, Less2 } from '../lessons';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Less1 />
      <Less2 />
    </>
  );
}
