export interface IPhilosophyItem {
  title: string;
  description: string;
}

export interface IEducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface IProfile {
  introduction: string;
  mission: string;
  journey: string;
  philosophy: IPhilosophyItem[];
  education: IEducationItem[];
  imageUrl: string;
  imageHint: string;
  hobbies: string[];
}

const aboutData: IProfile = {
  introduction:
    'I am a passionate web application developer with the necessary skills required to build awesome web applications. I am seeking an opportunity to extend my web development skills and knowledge.',
  mission:
    'With expertise in modern JavaScript frameworks like React and Next.js, and a solid foundation in backend technologies, I specialize in creating dynamic, user-friendly, and efficient digital experiences. I am a lifelong learner, always eager to embrace new challenges and technologies to deliver top-tier solutions.',
  journey:
    'My path into web development began with a fascination for how the web works. I started with the basics of HTML and CSS, quickly moving on to JavaScript. The ability to create interactive and dynamic experiences for users was captivating.\n\n' +
    'I pursued formal education to solidify my understanding, then dove headfirst into the React ecosystem. Building projects with Next.js taught me the importance of performance, SEO, and server-side rendering. Every project has been a stepping stone, refining my skills in both frontend and backend development, from crafting pixel-perfect UIs to designing robust database schemas.',
  philosophy: [
    {
      title: 'User-Centric Design',
      description:
        'I believe the best applications are built with the end-user in mind. I prioritize intuitive navigation, clean interfaces, and a seamless user experience.',
    },
    {
      title: 'Clean & Maintainable Code',
      description:
        'I write code that is not only functional but also clean, well-documented, and easy to maintain. This ensures scalability and long-term success for any project.',
    },
    {
      title: 'Continuous Learning',
      description:
        'The world of tech is always evolving. I am committed to staying updated with the latest trends and technologies to deliver modern and future-proof solutions.',
    },
  ],
  education: [
    {
      institution: 'University of Technology',
      degree: 'B.Sc. in Computer Science',
      period: '2018 - 2022',
    },
    {
      institution: 'Online Web Academy',
      degree: 'Advanced Full-Stack Web Development Certification',
      period: '2023',
    },
  ],
  imageUrl: '/me.png',
  imageHint: 'developer working computer',
  hobbies: [
    'Exploring new web technologies and frameworks.',
    'Reading technical blogs and articles.',
    'Contributing to open-source projects.',
    'Solving coding challenges to sharpen my problem-solving skills.',
  ],
};

export default aboutData;
