// Importing required components
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

// ToolsSection component: A section wrapper for a list of tools.
// It accepts children (which would be individual tools) and any other props.
function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      {/* Creating an unordered list with a bit of vertical spacing between items. */}
      <ul role="list" className="space-y-16">
        {children} {/* Rendering the provided children (tools) */}
      </ul>
    </Section>
  )
}

// Tool component: Represents an individual tool or item.
// It accepts a title (for the tool), an optional href (link), and children (description).
function Tool({ title, href, children }) {
  return (
    // Using the Card component to style each tool and specifying it as a list item.
    <Card as="li">
      {/* Card title: Renders as an h3 element and if href is provided, it's clickable. */}
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {/* Description of the tool. */}
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

// Metadata associated with the Uses page for SEO or other purposes.
export const metadata = {
  title: 'Uses',
  description: "Craftsman's Tools: My Digital Workshop",
}

// Main Uses component: Represents the Uses page.
export default function Uses() {
  return (
    <SimpleLayout
      title="Craftsman's Tools: My Digital Workshop."
      intro="Every craftsman has tools that are extensions of their hands, and I'm no different. Here's a curated look into my digital workshop where imagination meets implementation. Discover the software, hardware, and technologies that underpin my daily grind."
    >
      {/* Vertical spacing between different sections */}
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="24” iMac, M1, 16GB RAM (2022)">
           The 24” iMac with the M1 chip and 16GB RAM is a powerhouse that seamlessly handles my intricate design and coding tasks. Its impeccable display offers unparalleled clarity, ensuring every pixel in my designs is vivid and precise. Chosen for its exceptional performance and reliability, this iMac accelerates my workflow, minimizing bottlenecks and maximizing creativity.
          </Tool>
          <Tool title="13” MacBook Pro, intel Core i5, 8GB RAM (2017)">
            The 13” MacBook Pro with an Intel Core i5 and 8GB RAM has been my trusty companion since 2017. While it might not match the latest models in raw power, its portability and consistent performance make it perfect for outdoor sessions, allowing me to code or tweak designs over a refreshing cup of coffee. It's a testament to durability and versatility, handling on-the-go tasks with the reliability I've come to cherish.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Software">
          <Tool title="Visual Studio Code">
           Visual Studio Code is more than just an editor—it's an integral part of my development ecosystem. With its extensible features, lightning-fast source code navigation, and vast library of extensions, it streamlines my coding process, enabling me to focus on crafting high-quality web solutions. Whether I'm diving deep into Vue.js or navigating through Tailwind styles, VS Code enhances productivity and brings joy to every keystroke.
          </Tool>
          <Tool title="Figma">
            Figma is my digital canvas, the place where ideas transition into tangible designs. Its collaborative nature and intuitive interface allow me to visualize, iterate, and refine my web concepts with precision and efficiency. For every UI challenge or design brainstorm, Figma stands as my go-to tool, transforming abstract thoughts into pixel-perfect blueprints.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Technology Stack">
          <Tool title="Vue.js & Nuxt3">
            Vue.js and Nuxt stand at the heart of my development journey, a dynamic duo that powers the majority of my projects. Vue.js, with its reactive core, ensures efficient and intuitive component structures, while Nuxt brings the advantage of server-side rendering, enhancing SEO and performance. Together, they form the backbone of my tech stack, enabling me to craft robust, scalable, and user-friendly web experiences with confidence.
          </Tool>
          <Tool title="React & Next.js">
            While Vue.js and Nuxt may dominate my toolkit, React and Next.js make occasional appearances, challenging and diversifying my development landscape. React's component-driven architecture and Next.js's prowess in server-side rendering offer a fresh perspective and approach. Though I tread these waters less frequently, when I do, I dive in with dedication, ensuring I harness their potential to the fullest.
          </Tool>
          <Tool title="Strapi">
            Strapi stands as my chosen beacon in the world of content management, providing a headless approach that marries perfectly with modern frontend technologies. Its flexibility, paired with an intuitive admin panel, allows me to build and manage robust content structures with ease. Whether integrating with Vue, Nuxt, or even occasionally React, Strapi ensures seamless content delivery, empowering the digital narratives I craft.
          </Tool>
          <Tool title="Tailwind">
            Tailwind CSS is my stylistic compass, guiding me towards clean, maintainable, and responsive designs with a utility-first approach. Its granular control over styles eliminates the bloat, letting me fine-tune UI elements with unparalleled precision. Every project adorned with Tailwind exudes a unique aesthetic flair while maintaining a harmonious consistency, thanks to its intuitive and modular design philosophy.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
