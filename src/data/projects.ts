import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with product catalog, cart management, payment integration, and an admin dashboard. Built with performance and scalability in mind.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    title: 'Real-Time Chat App',
    description:
      'A WebSocket-powered chat application supporting multiple rooms, user presence, message history, and file sharing. Deployed on Docker with Nginx reverse proxy.',
    techStack: ['React', 'Socket.io', 'Express', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    title: 'Dev Portfolio Builder',
    description:
      'A drag-and-drop portfolio generator for developers. Users pick a template, fill in their data, and export a production-ready static site in seconds.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    githubUrl: 'https://github.com',
    featured: true,
  },
]
