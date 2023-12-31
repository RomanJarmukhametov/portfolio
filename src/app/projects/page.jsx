// Importing necessary components and assets
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoIdeaflow from '@/images/logos/ideaflow.svg'
import logoItext from '@/images/logos/itext.svg'
import logoPortfolio from '@/images/logos/person.svg'


// Project data containing details for each project
const projects = [
  {
    name: 'ideaflow.studio',
    description:
      'Taking part in coding the corporate website for Ideaflow Studio, a digital agency based in Kazakhstan.',
    link: { href: 'https://ideaflow.studio', label: 'ideaflow.studio' },
    logo: logoIdeaflow,
  },
  {
    name: 'iText Translation Agency',
    description:
      'Corporate website for iText Translation Agency, a translation agency based in Kazakhstan, with multiple language support.',
    link: { href: 'https://github.com/RomanJarmukhametov/itext-content-v2', label: 'github.com' },
    logo: logoItext,
  },
 {
    name: 'My Portfolio',
    description:
      'The repository of my personal portfolio website where you will find a comprehensive overview of my work, experiences, and thoughts',
    link: { href: 'https://github.com/RomanJarmukhametov/portfolio', label: 'github.com' },
    logo: logoPortfolio,
  },
 {
    name: 'Image Gallery',
    description:
      'An elegant image gallery built with Nuxt3 and Tailwind CSS, demonstrating advanced features like dynamic routing and state management',
    link: { href: 'https://github.com/RomanJarmukhametov/image-gallery', label: 'github.com' },
    logo: logoPortfolio,
  },
 
  
]

// A functional component for rendering a link icon
function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Metadata related to the Projects page
export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

// The main component for rendering the Projects page
export default function Projects() {
  return (
    // Using the `SimpleLayout` component to structure the page
    <SimpleLayout
      title="My Digital Canvas: Projects that Define My Journey."
      intro="This is my digital canvas, where I paint my ideas with lines of code and elements of design. Every project narrates a story, be it of challenges faced or innovations made. Explore and discover the landmarks of my front-end development journey."
    >
       {/* Grid layout to display the projects */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Looping through each project and rendering its details */}
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
              {/* Project name */}
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            {/* Project description */}
            <Card.Description>{project.description}</Card.Description>
            {/* Link to the project */}
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
