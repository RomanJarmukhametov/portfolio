// Imports
// Import the `Image` component from Next.js for optimized image handling.
import Image from 'next/image'

// Import the `Link` component from Next.js for client-side navigation.
import Link from 'next/link'

// Import the `clsx` utility for conditionally toggling class names.
import clsx from 'clsx'

// Importing various reusable components from the components directory.
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

// Importing SVG icons for various social media platforms.
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

// Importing logos of companies I've worked for.
import logoIdeaflow from '@/images/logos/ideaflow.svg'
import logoItext from '@/images/logos/itext.svg'
import logoAtameken from '@/images/logos/atameken.png'


// Importing photos for the hero section.
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

// Import functions for fetching articles and formatting dates.
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

// SVG Components

// SVG icon component for mail.
function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

// SVG icon component for a briefcase, typically representing work or a job.
function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

// SVG icon component for a downward-pointing arrow.
function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Article Card
function Article({ article }) {
  return (
    // Component that renders individual article details, structured inside a card layout.
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

// Social Media Link
function SocialLink({ icon: Icon, ...props }) {
  // Component that renders a clickable social media icon linking to the given social media platform.
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// Work Experience Role Item
function Role({ role }) {
  // Determines the starting label for the role.
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  
  // Determines the starting date for the role.
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  // Determines the ending label for the role.
  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;

  // Determines the ending date for the role.
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      
      {/* A container for the company logo */}
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        
        {/* 'Image' component displaying the company logo */}
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      
      {/* A container for role details like company name, role title, and dates */}
      <dl className="flex flex-auto flex-wrap gap-x-2">
        
        {/* Label for company name, hidden for screen readers */}
        <dt className="sr-only">Company</dt>
        
        {/* Displays the company name */}
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        
        {/* Label for role title, hidden for screen readers */}
        <dt className="sr-only">Role</dt>
        
        {/* Displays the role title */}
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        
        {/* Label for date range, hidden for screen readers */}
        <dt className="sr-only">Date</dt>
        
        {/* Displays the start and end dates with an accessible format */}
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>
          
          {/* Separator between start and end dates */}
          <span aria-hidden="true">—</span> 
          
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}


function Resume() {
  // An array of resume data for various roles.
  let resume = [
    {
      company: 'ideaflow.studio',
      title: 'Web Developer and Designer',
      logo: logoIdeaflow,
      start: '2016',
      // For the current role, 'end' is an object with a label "Present" and the current year as the dateTime.
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'iText Translation Agency',
      title: 'Technical Translator',
      logo: logoItext,
      start: '2012',
      end: '2016',
    },
    {
      company: 'Pavlodar CCI',
      title: 'Event Manager',
      logo: logoAtameken,
      start: '2008',
      end: '2012',
    },
    
  ]

  return (
    // Main container with styling for the resume section.
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      
      {/* Header section for the resume */}
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {/*  Briefcase icon representing the work section. */}
       
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        {/* Label for the work section. */}
        
        <span className="ml-3">Work</span>
      </h2>
      
      {/* Ordered list containing each work role */}
      <ol className="mt-6 space-y-4">
        {
          // Maps through each role in the 'resume' array and renders the 'Role' component for each.
          resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))
        }
      </ol>
      
      {/* Download CV button */}
      <Button href="https://docs.google.com/document/d/1Xo3aOMVHgI5mtZYQQNRm2rUQWniRDX2E/edit?usp=share_link&ouid=100404357747146453556&rtpof=true&sd=true" target="_blank" variant="secondary" className="group mt-6 w-full">
        Download CV
        {/* Arrow down icon on the button, with color transitions for different states. */}
        
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}


function Photos() {
  // An array of rotation CSS class names for giving photos a slight rotated effect.
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    // Main container for the photos section with top margin.
    <div className="mt-16 sm:mt-20">
      
      {/* A flex container for holding the photos. It has negative vertical margin to adjust any external spacing, centered content, and controlled spacing between each photo item. */}
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        
        {/* Mapping over the array of images and rendering each one. */}
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          // A container for each photo.
          // It has a unique key, and a combination of default classes and one rotation class from the 'rotations' array.
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              // Using modulo to ensure rotation class assignments don't exceed the length of the rotations array.
              rotations[imageIndex % rotations.length],
            )}
          >
            {/* Image component to display the photo. It takes the full space of its parent container and ensures the aspect ratio. */}
            <Image
              src={image}
              alt="" // The alt attribute is empty, indicating these are decorative images.
              sizes="(min-width: 640px) 18rem, 11rem" // Responsive sizes attribute for the image.
              className="absolute inset-0 h-full w-full object-cover" // Styling to ensure the image covers its container fully.
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// This is the default export for the Home component.
export default async function Home() {
  // Retrieve all articles using the `getAllArticles` function and take the first 4.
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    // React Fragment allows for a component to return multiple elements.
    <>
      {/* A Container component to constrain and position the content. It has a top margin. */}
      <Container className="mt-9">
        {/* A container to limit the width of its children to '2xl'. */}
        <div className="max-w-2xl">
          {/* Header text which describes the profession and activities of the person (Spencer). */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
           Vue, Nuxt, Strapi, Tailwind: The Quartet of My Digital Symphony
          </h1>

          {/* A brief introductory paragraph about Spencer. */}
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
           I'm Roman Jarmukhametov, a front-end developer hailing from Kazakhstan. In the vast expanse of the digital realm, I use my chosen quartet: Vue, Nuxt, Strapi, and Tailwind to compose interactive masterpieces. Every line of code I write and every interface I design resonates with the symphony of my passion and dedication. Journey with me as we build immersive web experiences that strike a chord with users globally
          </p>

          {/* A row of social media link icons. */}
          <div className="mt-6 flex gap-6">
            {/* Individual SocialLink components for different social platforms. Each one takes a link (href), a label (aria-label) and an icon component. */}
            <SocialLink
              href="https://github.com/RomanJarmukhametov" 
              target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/roman-jarmukhametov/"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      {/* Component to display photos. */}
      <Photos />

      {/* Another Container component for constraining and positioning subsequent content, with larger top margins on larger screens. */}
      <Container className="mt-24 md:mt-28">
        {/* A flexible, responsive grid container that arranges children in a one-column layout on smaller screens and two columns on larger screens. */}
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* A column for displaying articles. */}
          <div className="flex flex-col gap-16">
            {/* Mapping over the array of articles to display each one using the Article component. */}
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          
          {/* A column that contains the Newsletter and Resume components, spaced vertically, with additional padding on larger screens. */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

