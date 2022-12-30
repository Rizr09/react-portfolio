import Head from 'next/head'
import { Inter } from '@next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import me from '../public/me.png';
import pbo from '../public/pbo.png';
import urban from '../public/urban.png';
import AnimeDB from '../public/AnimeDB.png';
import { useState } from "react";
import NowPlaying from './api/spotify';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rizky Ramadhan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white'>by rizr09 with 💖</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl dark:text-white' /></li>
              <li>
                <a className='bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-md ml-4' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-violet-600 font-medium md:text-6xl'>Rizky Ramadhan</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Machine Learning Developer and Data Scientist</h3>
            
            <p className='text-justify text-xl py-5 leading-8 text-gray-800 md:text-2xl max-w-lg mx-auto dark:text-white'>
              Welcome to my portfolio website👋
              <br />
              You can call me Rizky. I am a sophomore informatics student at Padjadjaran University. I graduated from SMAN 3 Bandung in 2021 and am currently interested in robotic process automation, front-end web development, and
              <a className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600' href='https://i.imgur.com/1rTHvw5.png' target='_blank' rel="noreferrer noopener"> stable diffusion.</a>
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
              <a href="https://twitter.com/rizr09/" target="_blank" rel='noreferrer noopener' ><AiFillTwitterCircle /></a>
              <a href="https://github.com/rizr09/" target="_blank" rel='noreferrer noopener' ><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/rizr09/" target="_blank" rel='noreferrer noopener' ><AiFillLinkedin /></a>
            </div>
            <NowPlaying className='bg-gray-900'/> 
            <div className='relative flex items-center bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mt-10 overflow-hidden md:h-96 md:w-96 sm:h-64 sm:w-64 lg:mx-auto'>
              <Image src={me} style={{ objectFit: "cover" }} alt="me" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>My Journey 🚀</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Over the past year, I have been actively involved in my student association as a staff member of the <span className='underline decoration-pink-600'>IT development department</span>.
              My responsibilities included <span className='underline decoration-pink-600'>organizing student clubs, courses, and competitions related to informatics</span> within the scope of my student association.
              I also had the opportunity <span className='underline decoration-pink-600'>to volunteer as an IT competition staff</span> at <a className='text-purple-600' href="https://www.ifestunpad.id/" target="_blank" rel="noreferrer noopener">Ifest</a>.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Through these experiences, I have also <span className='underline decoration-pink-600'>gained valuable skills in data mining and robot-building</span>, as demonstrated by my participation in Gemastik 2022 and KRI 2022.
              Currently, I am working as a lab assistant and am <span className='underline decoration-pink-600'>excited to continue my studies in artificial intelligence</span> in the coming semester.
            </p>
          </div>
        </section>
        <section>
          <h3 className='text-3xl py-1 dark:text-white'>My Works 💻</h3>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
              <Image src={pbo} alt="pbo" width={300} height={300} className="mx-auto" />
              <h3 className='text-lg font-medium pt-8 pb-2'>Unnamed Forest Game</h3>
              <p className='py-2'>
                Turn-based GUI game for PC with random events as challenges
              </p>
              <h4 className='py-4 text-purple-600'>Tech I use</h4>
              <p className='text-gray-800 py-1'>Java with JavaFx</p>
              <p className='text-gray-800 py-1'>Gluon Scene Builder</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
              <Image src={urban} alt="pbo" width={300} height={300} className="mx-auto" />
              <h3 className='text-lg font-medium pt-8 pb-2'>Urbanize app</h3>
              <p className='py-2'>
                A simple application that uses the Python and Urban Dictionary API to search for definitions of words or phrases
              </p>
              <h4 className='py-4 text-purple-600'>Tech I use</h4>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Python with Tkinker</p>
              <p className='text-gray-800 py-1'>Tkdesigner</p>
              <p className='text-gray-800 py-1'>Requests</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
              <Image src={AnimeDB} alt="pbo" width={300} height={300} className="mx-auto" />
              <h3 className='text-lg font-medium pt-8 pb-2'>AnimeDB</h3>
              <p className='py-2'>
                CRUD web application to manage your anime watchlist
              </p>
              <h4 className='py-4 text-purple-600'>Tech I use</h4>
              <p className='text-gray-800 py-1'>CodeIgniter 4</p>
              <p className='text-gray-800 py-1'>MySQL</p>
              <p className='text-gray-800 py-1'>Tailwind CSS</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
