const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'LP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Lalu Prasath',
  role: 'NodeJs Developer',
  description:
    'Enthusiastic and skilled  backend developer with 2 years of experience increating web applications and dynamic, user-friendly websites. Proficient in both thefront-end and back-end technologies, adept at designing and implementing scalablesolutions. Strong problem-solving skills and a passion for staying up-to-date with emerging web development trends. Committed to delivering high-quality,performance-driven applications.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/lalu-fintan/',
    github: 'https://github.com/lalu-fintan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    logo: 'https://res.cloudinary.com/danz8ugpr/image/upload/v1700033937/portfolio/dikylgbfu5ujpnjnqt0x.webp',
    name: 'TATA MOP',
    description:
      'This application belongs to TATA Group. Developed to showcase the details of Medical oxygen plants which are established in India. the Medical Oxygen requirement significantly increased and saving the lives of India’s citizens.',
    stack: [
      'React-native',
      'Javascript',
      'CSS',
      'NodeJs',
      'MongoDB',
      'Mongoose',
    ],
    sourceCode: 'https://github.com/',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.tata.mop&pli=1',
  },
  {
    logo: ' https://res.cloudinary.com/danz8ugpr/image/upload/v1700557217/portfolio/GNG_wzyneo.png',
    name: 'GNG',
    description:
      "It's white label application design in such a way that we can use the same app for any store who wants to showcase their product and arrange a video call for appointment to check the products remotely.",
    stack: [
      'React-native',
      'Javascript',
      'CSS',
      'NodeJs',
      'MongoDB',
      'Mongoose',
    ],
    sourceCode: 'https://github.com/',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.gng.ecommerce',
  },

  {
    logo: 'https://res.cloudinary.com/danz8ugpr/image/upload/v1700032837/portfolio/nwelqc3i9smfqejq33xl.png',
    name: 'BlinkTime',
    description:
      'Blink Time is the UK based Time Management Project for companies .Features I worked on: Google and outlook calendars integration and full calendarevent management.',
    stack: [
      'React',
      'Javascript',
      'NodeJs',
      'PostgreSQL',
      'Sequelize',
      'Google-Cloud',
    ],
    sourceCode: 'https://github.com',
    livePreview: 'https://www.blinktime.io/',
  },
  {
    logo: 'https://res.cloudinary.com/danz8ugpr/image/upload/v1700032838/portfolio/zlgthi78nse2xepu8kzi.png',
    name: 'OMA (olivier-mythodrama)',
    description:
      'OMA Archetypes is a new cutting-edge method to assess and developpeople and organizations to become fit for the future. Archetypes are underlying patterns of human nature and experience.',
    stack: [
      'React',
      'TypeScript',
      'NodeJS',
      'MongoDB',
      'Mongoose',
      'Google-Cloud',
    ],
    sourceCode: 'https://github.com',
    livePreview:
      'https://admin-olivier-mythodrama-development.firebaseapp.com/login',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React-Native',
  'NodeJs',
  'ExpressJs',
  'GCP',
  'Firebase',
  'SwaggerUI',
  'MongoDB',
  'Postgresql',
  'Mongoose',
  'Sequilize',
  'Docker',
  'GraphQL',
  'Jest',
  'Git',
]

const exprience = [
  'Developed and maintained server-side applications using Node.js, Express.js,and other related technologies.Collaborated with front-end developers to design and implement RESTful APIs for web and mobile applications.',
  'Ensured the security and scalability of applications by implementing best practices and performance optimizations.',
  'Utilized version control systems like Git for team collaboration and code management.',
  'Troubleshot and debugged complex issues in production environments to ensure system reliability .',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'laluprasath23@gmail.com',
}

export { header, about, projects, skills, contact, exprience }
