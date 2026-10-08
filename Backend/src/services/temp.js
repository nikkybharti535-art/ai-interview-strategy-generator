const resume = `
Priya Verma
Pune, India
priya.verma@email.com
+91 8765432190
LinkedIn: linkedin.com/in/priyaverma
GitHub: github.com/priyaverma

PROFESSIONAL SUMMARY
Frontend-focused Full Stack Developer with 2 years of experience building
responsive, accessible web applications and REST-based backend services.

TECHNICAL SKILLS
Languages: JavaScript, Python
Frontend: React.js, Next.js, Vue.js, Sass
Backend: Node.js, Express.js, Django (basic)
Database: PostgreSQL, MongoDB
DevOps & Tools: Git, GitHub Actions, Figma, Vercel
Concepts: Responsive Design, Accessibility (WCAG), State Management, CI/CD

WORK EXPERIENCE

Frontend Developer
Brightlane Technologies | March 2024 - Present
- Built and maintained a component library used across 5+ internal products.
- Reduced page load time by 35% through code-splitting and lazy loading.
- Implemented dark mode and full accessibility support across the platform.
- Worked closely with designers to translate Figma files into pixel-perfect UI.
- Set up automated CI/CD pipeline using GitHub Actions.

Junior Web Developer
Kalpvriksh Softwares | June 2023 - Feb 2024
- Built REST APIs using Express.js and connected them to a PostgreSQL database.
- Fixed cross-browser compatibility issues across 10+ client websites.
- Wrote unit tests using Jest, increasing code coverage from 40% to 75%.
- Assisted in migrating a legacy jQuery site to React.

PROJECTS

Expense Tracker App
- Built a full stack expense tracking app using Next.js and MongoDB.
- Added data visualization using Chart.js for monthly spending trends.
- Implemented user authentication using NextAuth.

Portfolio Generator
- Created a tool that generates developer portfolios from a JSON config.
- Used Puppeteer to export portfolios as downloadable PDF resumes.
- Deployed on Vercel with custom domain support.

EDUCATION
Bachelor of Engineering in Information Technology
Savitribai Phule Pune University, 2023`


const selfDescription = `
I'm a frontend-leaning full stack developer with about 2 years of
experience. My strongest area is building clean, accessible React
interfaces, but I'm also comfortable writing backend APIs in Node.js and
working with both SQL and NoSQL databases.

Lately I've been focused on performance — things like reducing bundle size,
improving Lighthouse scores, and setting up proper CI/CD pipelines so
deployments are less manual. I haven't worked much with large-scale
distributed systems yet, and my Docker/Kubernetes knowledge is still
basic — that's an area I'm actively trying to grow into.

I'm looking for a role where I can keep building strong frontend
experiences while gradually taking on more backend and infrastructure
responsibility.`


const jobDescription =` 
Position: Full Stack Developer (React + Node.js)

Location: Hybrid / Pune

We're hiring a Full Stack Developer who can work confidently across a
React frontend and a Node.js backend, with an eye for clean UI and solid
API design.

Responsibilities:
- Build and maintain UI components in React with a focus on performance.
- Design and implement REST APIs using Node.js and Express.
- Work with both PostgreSQL and MongoDB depending on the service.
- Improve site performance, accessibility, and SEO.
- Set up and maintain CI/CD pipelines.
- Participate in code reviews and mentor junior developers.`


module.exports = { 
    resume, selfDescription, jobDescription 
}