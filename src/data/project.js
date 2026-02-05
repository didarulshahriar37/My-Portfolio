export const projects = [
  {
    id: 1,
    title: 'Micro Tasking & Earning Platform',
    image: '/MicroTasking.png',
    liveLink: 'https://micro-task-dad80.web.app/',
    github: 'https://github.com/didarulshahriar37/Micro-Tasking-Platform',
    techStack: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'TailwindCSS',
      'Axios',
      'Git',
      'NPM'
    ],
    description: `A full-stack MERN micro-tasking platform where users can earn or spend coins by completing tasks. 
The system supports three roles — Worker, Buyer, and Admin — each with role-specific functionalities such as task creation, submission review, and platform management.`,
    challenges: `Implementing secure JWT-based authentication with role-based access control, 
designing a coin-based transaction system, handling real-time notifications, 
and managing complex relationships between users, tasks, submissions, and transactions.`,
    futurePlans: `add advanced analytics for admins, 
implement task recommendations for workers, 
and improve real-time features using WebSockets.`
  },
  {
    id: 2,
    title: 'ContestHub - A Contest Creation Platform',
    image: '/ContestHub.png',
    liveLink: 'https://contest-hub-e3f79.web.app/',
    github: 'https://github.com/didarulshahriar37/ContestHub-client',
    techStack: [
      'React', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'CSS3', 'Git', 'NPM'
    ],
    description: `ContestHub is a platform for organizing and participating in coding competitions. 
  Users can register, join contests, submit solutions, and track their performance.`,
    challenges: `Managing timed contests, scoring algorithms, 
  and real-time leaderboard updates were the main challenges.`,
    futurePlans: `Add multiple contest types, integrate AI-based problem suggestions, 
  and implement team competitions with real-time updates.`
  },
  {
    id: 3,
    title: 'HomeNest - A Real Estate Listing Portal',
    image: '/HomeNest.png',
    liveLink: 'https://home-nest-d37.netlify.app/',
    github: 'https://github.com/didarulshahriar37/Home-Nest-Client',
    techStack: [
      'React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'TailwindCSS', 'CSS3', 'Vite', 'Netlify', 'Vercel', 'Git', 'NPM'
    ],
    description: `HomeNest is a real estate platform where users can add, browse, and manage property listings. 
Each property shows detailed information including price, location, and agent contact. 
Users can sign up/sign in for full access. Fully responsive across all devices.`,
    challenges: `Handling real-time data updates for listings, 
implementing user authentication, and ensuring a responsive UI with dynamic data filtering.`,
    futurePlans: `Add AI-powered property recommendations, 
implement chat functionality with agents, and integrate payment gateway for booking services.`
  },
];