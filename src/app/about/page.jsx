// Import required modules and components
import Image from 'next/image'
import Link from 'next/link'

// clsx is a utility for conditionally constructing CSS class strings
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

// SocialLink Component: A general purpose link component designed for social media links.
// - `icon`: is the SVG icon for the social platform
// - `href`: is the link to the social platform
// - `children`: is the text to display next to the icon
function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

// MailIcon: SVG Component to render a mail/envelope icon.
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

// Metadata associated with the About page
export const metadata = {
  title: 'About',
  description:
    'I’m Roman Jarmukhametov. I live in Kazakhstan, where I code the future.',
}

// About Page Component
export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        {/* Portrait Image Section */}
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>

         {/* Main Bio Description Section */}
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            From Words to Pixels: My Journey in Front-end Craftsmanship
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
             My name is Roman Jarmukhametov. I am a Frontend Developer from Kazakhstan. I began my professional journey entrenched in the world of technical translation, where every word mattered. But as the allure of computers beckoned, I transitioned from merely translating words to transforming pixels, first as a designer and then as a front-end developer to breathe life into my designs.
            </p>
            <p>
             My evolution in the digital world has seen me embark on a multitude of unique projects. Each one presented its own set of challenges, pushing me to elevate my skills and expand my horizons in the vast landscape of front-end development.
            </p>
            <p>
              What truly invigorates me is the constant evolution of modern technologies. The dynamism of Vue and the versatility of Nuxt, in particular, have kept me on my toes, ensuring every day feels as exhilarating as the first.
            </p>
            <p>
              In every project, I endeavor to find a harmonious balance between design and functionality. Like a composer, I strive to ensure every element has its place, resulting in a digital symphony that resonates with its audience.
            </p>
          </div>
        </div>

         {/* Social Media Links Section */}
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/RomanJarmukhametov" 
              target="_blank"
              icon={GitHubIcon}
              className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/roman-jarmukhametov/"
              target="_blank"
              icon={LinkedInIcon}
              className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:roman.jarmukhametov@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              roman.jarmukhametov@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
