export interface ITestimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
}

const testimonialsData: ITestimonial[] = [
  {
    id: '1',
    quote:
      'Farhad delivered an outstanding e-commerce platform for us. His attention to detail and technical expertise are second to none. The final product exceeded all our expectations.',
    name: 'Jane Doe',
    company: 'Fashion Retail Inc.',
  },
  {
    id: '2',
    quote:
      "The task management tool he built has revolutionized our workflow. It's intuitive, fast, and exactly what we needed to stay organized. Highly recommended!",
    name: 'John Smith',
    company: 'Tech Solutions LLC',
  },
  {
    id: '3',
    quote:
      'Working with Farhad was a fantastic experience. He understood our complex requirements for the diagramming tool and created a powerful, user-friendly application.',
    name: 'Samuel Green',
    company: 'Data Architects Co.',
  },
  {
    id: '4',
    quote:
      "His proficiency in both front-end and back-end development is impressive. The project was completed on time and on budget. We couldn't be happier with the result.",
    name: 'Emily White',
    company: 'Startup Innovations',
  },
  {
    id: '5',
    quote:
      "The task management tool he built has revolutionized our workflow. It's intuitive, fast, and exactly what we needed to stay organized. Highly recommended!",
    name: 'John Smith',
    company: 'Tech Solutions LLC',
  },
];

export default testimonialsData;
