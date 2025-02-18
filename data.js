import { SiOpenaigym } from "react-icons/si";
export const Links = [
  {
    name: "Home",
    path: '/'
  },
  {
    name: "About",
    path: '/about'
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Plans",
    path: '/plan'
  },
  {
    name: "Trainers",
    path: 'trainers',
  },
  {
    name: "Contact",
    path: '/contact'
  },
]


// This is the Program_Array-Section

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym/>,
    title: "Program One",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/111"
  },
  {
    id: 2,
    icon: <SiOpenaigym/>,
    title: "Program Two",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/222"
  },
  {
    id: 3,
    icon: <SiOpenaigym/>,
    title: "Program Three",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/333"
  },
  {
    id: 4,
    icon: <SiOpenaigym/>,
    title: "Program Four",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/444"
  },
];

// This is for the Value_Array-Section

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym/>,
    title: "Value One",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum. ",
  },
  {
    id: 2,
    icon: <SiOpenaigym/>,
    title: "Value Two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum. ",
  },
  {
    id: 3,
    icon: <SiOpenaigym/>,
    title: "Value Three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum. ",
  },
  {
    id: 4,
    icon: <SiOpenaigym/>,
    title: "Value Four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum. ",
  },
];

export const faqs = [
  {
    id: 1,  
    question: "How often should I exercise?",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium vitae cupiditate corrupti assumenda architecto, magnam explicabo odio repudiandae accusamus molestiae. Harum, culpa asperiores. Culpa, nobis totam! Velit inventore quis possimus.",
  },
  {
    id: 2,
    question: "What time of the day is best to work out? ",
    answer: "perspiciatis quo labore aut vero quam omnis at maxime ipsam molestiae provident unde! Porro eaque nostrum obcaecati. molestiae. Harum, culpa asperiores. Culpa, nobis totam! Velit inventore quis possimus.",
  },
  {
    id:3,
    question:"How long should my workouts be",
    answer: "reiciendis recusandae nisi deleniti ipsa rerum commodi fugit esse atque ea, voluptate at tenetur itaque maxime quae eligendi odit culpa impedit hic non veritatis? Aut tenetur quod ad deleniti ullam autem cupiditate dolore provident ipsa impedit."
  },
  {
    id: 4,
    question: "Do I need to warm up before my workout? ",
    answer: " dolor sit amet consectetur adipisicing elit. Aliquid non officia aliquam adipisci, nihil numquam earum repellat a magni quaerat, quis minima iusto ut laborum iure. Quidem, officiis? Unde, illum asperiores. Voluptate, tempore amet laboriosam voluptatum iure .",
  },
  {
    id: 5,
    question: "Is workout that essential to my growth? ",
    answer: "maiores! Aut voluptates mollitia voluptate animi. Id doloremque soluta voluptatem magnam temporibus reiciendis laborum? Aspernatur aliquid eum  Unde, illum asperiores. Voluptate, tempore amet laboriosam voluptatum iure .",
  },
  {
    id: 6,
    question: "Home workout is it also my main assignment? ",
    answer: "ndis laborum? Aspernatur aliquid eum  Unde, illum asperiores. Voluptate, tempore m repellat a magni quaerat, a architecto, magnam explicabo odio repudiandae accusamus molestiae. Harum, culpa asperiores. Culp",
  },
  
];


export const testimonials = [
  {
    id: 1,
    name: "Annabel Ayi",
    avatar: require("./myImages/Annabel.jpg"),
    job: "Student",
    quote: "m perspiciatis recusandae eaque quos aliquam, corrupti ipsam facilis rerum laborum deserunt sapiente nesciunt? Facilis ipsam minus sint dolor cumque dolores odio ut nece " 
  },
  {
    id: 2,
    name: "Rosemary Vinyo",
    avatar: require("./myImages/Rosemary.jpg"),
    job: "Fashion Designer",
    quote: "Tetur deveniet necessitatibus maiores aspernatur sunt suscipit illo libero a accusantium quisquam ut?olor sit amet consectetur adipisicing elit. Quis, amet minima vero sint itaque, hic odio cum consect",
  },
  {
    id: 3,
    name: "Juan Diana",
    avatar: require("./myImages/juan.jpg"),
    job: "Stylist",
    quote: "Amet consectetur adipisicing elit. Quis, amet minima vero sint itaque, hic odio cum consectetur ssitatibus maiores aspernatur sunt suscipit illo libero a accusantium quisquam ut?olor "
  },
  {
    id: 4,
    name: "Stephenie Rit",
    avatar: require("./myImages/Stephenie.jpg"),
    job: "Artist",
    quote: "Macipit consequuntur dolorum doloremque saepe quis optio nesciunt nisi obcaecati enim aliquid officia voluptas corrupti. Nobis eos fugit est iste optio fuga? Dolorum quam laboriosam dolor. "
  },
]

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This is a perfect package for beginners who need constant help",
    price: 29.99,
    features: [
      {feature: "First Feature", available: true},
      {feature: "Second Feature", available: true},
      {feature: "Third Feature", available: true},
      {feature: "Fourth Feature", available: true},
      {feature: "Fifth Feature", available: true},
      {feature: "Sixth Feature", available: false},
      {feature: "Seventh Feature", available: false},
      {feature: "Eighth Feature", available: false},
      {feature: "Ninth Feature", available: false},
      {feature: "Tenth Feature", available: false},
      {feature: "Eleventh Feature", available: false},
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is a perfect package for beginners who knows what they are doing",
    price: 49.99,
    features: [
      {feature: "First Feature", available: true},
      {feature: "Second Feature", available: true},
      {feature: "Third Feature", available: true},
      {feature: "Fourth Feature", available: true},
      {feature: "Fifth Feature", available: true},
      {feature: "Sixth Feature", available: true},
      {feature: "Seventh Feature", available: true},
      {feature: "Eighth Feature", available: false},
      {feature: "Ninth Feature", available: false},
      {feature: "Tenth Feature", available: false},
      {feature: "Eleventh Feature", available: false},
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This is a perfect package for busy people who need home service",
    price: 89.99,
    features: [
      {feature: "First Feature", available: true},
      {feature: "Second Feature", available: true},
      {feature: "Third Feature", available: true},
      {feature: "Fourth Feature", available: true},
      {feature: "Fifth Feature", available: true},
      {feature: "Sixth Feature", available: true},
      {feature: "Seventh Feature", available: true},
      {feature: "Eighth Feature", available: true},
      {feature: "Ninth Feature", available: true},
      {feature: "Tenth Feature", available: true},
      {feature: "Eleventh Feature", available: true},
    ],
  },
]



const Trainer1 = require("./myImages/Stephenie.jpg");
const Trainer2 = require("./myImages/Annabel.jpg");
const Trainer3 = require("./myImages/juan.jpg");
const Trainer4 = require("./myImages/Stephenie.jpg");
const Trainer5 = require("./myImages/Rosemary.jpg");
const Trainer6 = require("./myImages/Annabel.jpg");

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: ["http://instagram.com/",
              "https://twitter.com/",
              "https://facebook.com/",
              "https://linkedin.com",
            ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Daniel Vinyo",
    job: "Speed Trainer",
    socials: ["http://instagram.com/",
              "https://twitter.com/",
              "https://facebook.com/",
              "https://linkedin.com",
            ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: ["http://instagram.com/",
              "https://twitter.com/",
              "https://facebook.com/",
              "https://linkedin.com",
            ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: ["http://instagram.com/",
              "https://twitter.com/",
              "https://facebook.com/",
              "https://linkedin.com",
            ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: ["http://instagram.com/",
              "https://twitter.com/",
              "https://facebook.com/",
              "https://linkedin.com",
            ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Wayne Carter",
    job: "Physical Intellience Trainer",
    socials: ["http://instagram.com/",
              "https://twitter.com/",
              "https://facebook.com/",
              "https://linkedin.com",
            ],
  },
]