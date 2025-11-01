//Main content file for the project

const mainName = 'Harmony Dental';
const mainDescription = 'Focused on the prevention, diagnosis, and treatment of oral diseases.'

const headerTitle = 'Comprehensive and high-quality dental care';

const contactinfo = {
  phone: '555-123-4567',
  email: 'harmonydental@mail.com',
}

const navsLinks = [
  { name: 'About us', href: '#about-section'},
  { name: 'Services', href: '#services-section'},
  { name: 'Locations', href: '#branches-section'},
  { name: 'Emergencies', href: '#'},
]

//About Section
const aboutTitle = 'About Us';
const aboutHeading = 'With a team of highly qualified professionals and state-of-the-art technology, we are dedicated to providing you with a comfortable and safe experience';

const aboutEquipment = [
    {   
        title: 'Digital X-rays',
        description: 'For more precise diagnoses with less radiation exposure.'
    },
    {   
        title: 'Intraoral Scanners',
        description: 'For quick and comfortable digital impressions, without using traditional pastes.'
    },
    {   
        title: 'Dental Laser',
        description: 'For less invasive treatments and faster recovery.'
    },
]

//Services Section
const servicesTitle = 'Our Services';
const servicesHeading = 'We offer a wide range of services to cover all your dental needs. Some of our main services include.'

const servicesList = [
    {
        title: 'General Dentistry',
        description: 'Regular check-ups, professional cleanings, fillings and extractions.',
        img: 'general-dentistry-service.png'
    },
    {
        title: 'Cosmetic Dentistry',
        description: 'Teeth whitening, porcelain veneers, and smile design.',
        img: 'cosmetic-dentistry-service.png'
    },
    {
        title: 'Dental Implants',
        description: 'Permanent solution to missing teeth.',
        img: 'dental-implants-service.png'
    },
    {
        title: 'Orthodontics',
        description: 'Treatments with traditional braces and clear aligners(invisalign).',
        img: 'ortodontics-service.png'
    },
    {
        title: 'Endodontics',
        description: 'Root canal treatments to save damaged teeth',
        img: 'endodontics-service.png'
    },
    {
        title: 'Pediatric Dentistry',
        description: 'Specialized care for children in a friendly enviroment.',
        img: 'pediatric-dentistry-service.png'
    },
] 

//Branches Section
const branchesTitle = 'Our Locations';
const branchesHeading = 'We invite you to visit us and discover a dental practice focused on you!';

const branchesList = [
    {
    name: "Clínica Dental Harmony Centro",
    address: "Av. Reforma 123, Col. Centro",
    phone: "555-123-4567",
    hours: "Lunes a Viernes 9:00-18:00"
  },
  {
    name: "Clínica Dental Harmony Norte",
    address: "Calle 10 #456, Col. Industrial",
    phone: "555-987-6543",
    hours: "Lunes a Sábado 8:00-20:00"
  },
  {
    name: "Clínica Dental Harmony Sur",
    address: "Blvd. del Sol 789, Col. Jardines",
    phone: "555-222-3344",
    hours: "Lunes a Viernes 10:00-19:00"
  },
  {
    name: "Clínica Dental Harmony Poniente",
    address: "Av. Las Palmas 321, Col. Vista Alegre",
    phone: "555-555-1212",
    hours: "Martes a Domingo 9:00-17:00"
  },
  {
    name: "Clínica Dental Harmony Oriente",
    address: "Calle Magnolia 12, Col. Las Flores",
    phone: "555-333-7788",
    hours: "Lunes a Viernes 8:00-16:00"
  },
  {
    name: "Clínica Dental Harmony Satélite",
    address: "Circuito Novelistas 45, Col. Satélite",
    phone: "555-444-8899",
    hours: "Lunes a Sábado 9:00-19:00"
  },
  {
    name: "Clínica Dental Harmony Polanco",
    address: "Av. Homero 200, Col. Polanco",
    phone: "555-666-7788",
    hours: "Lunes a Viernes 10:00-20:00"
  },
  {
    name: "Clínica Dental Harmony Roma",
    address: "Calle Colima 85, Col. Roma",
    phone: "555-777-8899",
    hours: "Lunes a Sábado 8:00-18:00"
  },
  {
    name: "Clínica Dental Harmony Condesa",
    address: "Av. Tamaulipas 150, Col. Condesa",
    phone: "555-888-9900",
    hours: "Lunes a Viernes 9:00-19:00"
  },
  {
    name: "Clínica Dental Harmony Coyoacán",
    address: "Calle Centenario 300, Col. Coyoacán",
    phone: "555-999-0011",
    hours: "Lunes a Domingo 8:00-20:00"
  },
  {
    name: "Clínica Dental Harmony Lindavista",
    address: "Av. IPN 400, Col. Lindavista",
    phone: "555-101-2020",
    hours: "Lunes a Viernes 9:00-18:00"
  },
  {
    name: "Clínica Dental Harmony Tlalpan",
    address: "Calz. de Tlalpan 1500, Col. Tlalpan",
    phone: "555-202-3030",
    hours: "Lunes a Sábado 8:00-17:00"
  },
  {
    name: "Clínica Dental Harmony Narvarte",
    address: "Av. Universidad 1200, Col. Narvarte",
    phone: "555-303-4040",
    hours: "Lunes a Viernes 10:00-19:00"
  },
  {
    name: "Clínica Dental Harmony Del Valle",
    address: "Calle Amores 250, Col. Del Valle",
    phone: "555-404-5050",
    hours: "Lunes a Sábado 9:00-18:00"
  },
  {
    name: "Clínica Dental Harmony Santa Fe",
    address: "Av. Vasco de Quiroga 3900, Col. Santa Fe",
    phone: "555-505-6060",
    hours: "Lunes a Viernes 8:00-20:00"
  },
  {
    name: "Clínica Dental Harmony Xochimilco",
    address: "Calle Guadalupe I. Ramírez 100, Col. Xochimilco",
    phone: "555-606-7070",
    hours: "Lunes a Domingo 9:00-17:00"
  },
  {
    name: "Clínica Dental Harmony Aragón",
    address: "Av. 608 #350, Col. San Juan de Aragón",
    phone: "555-707-8080",
    hours: "Lunes a Viernes 8:00-18:00"
  },
  {
    name: "Clínica Dental Harmony Iztapalapa",
    address: "Calz. Ermita Iztapalapa 2000, Col. Iztapalapa",
    phone: "555-808-9090",
    hours: "Lunes a Sábado 9:00-19:00"
  }
]

//Comments Section
const commentsTitle = 'What Our Patients Say';
const commentsHeading = 'Your satisfaction is our priority. Here are some testimonials from our happy patients.';

const commentsList = [
    {
        name: 'Carlos F. Méndez',
        comment: '"I came for an emergency and was seen immediately. The speed and quality of service are unmatched. They explained every step of the treatment to me."',
        date: '03/08/2025',
        userImg: 'Pexels Photo by Милана Отчесова.webp'
    },
    {
        name: 'Lucía R. Varela',
        comment: '"My invisible orthodontic treatment is almost over, and the difference is incredible. The checkups are quick, and the reception staff is very friendly."',
        date: '19/07/2025',
        userImg: 'Pexels Photo by Nikita Pishchugin.webp'
    },
    {
        name: 'Ana G. Romero',
        comment: '"Excellent care! I had my teeth whitened and Im delighted with the results. The team was very professional and attentive throughout."',
        date: '05/10/2025',
        userImg: 'Pexels Photo by Jonathan Santiago.webp'
    },
    {
        name: 'Javier D. Sosa',
        comment: '"Dr. Martinez placed implants on me, and the process was much easier than I expected. I regained my smile and my confidence. 100% recommended!"',
        date: '28/09/2025',
        userImg: 'pexels-99816073-18919291.webp'
    },
    {
        name: 'María P. Díaz',
        comment: '"I took my son to Pediatric Dentistry and the doctor was wonderful. They created a friendly environment and my son lost his fear of the dentist. Thank you so much!"',
        date: '12/09/2025',
        userImg: 'Pexels Photo by RD.webp'
    },
] 

//FAQ Section
const faqTitle = 'Frequently Asked Questions';
const faqHeading = 'Here are some of the most common questions our patients ask.';

const faqList = [
    {
        question: 'Do you accept health insurance or dental coverage plans?',
        answer: 'Yes, we work with several insurance plans. We recommend contacting us before your appointment so we can verify your coverage and explain your benefits. This way, we avoid any surprises and you can get the most out of your plan.'
    },
    {
        question: 'How can I schedule an appointment?',
        answer: 'You can schedule your appointment quickly and easily by calling us, sending us a WhatsApp message, or using the contact form on our website. You can also visit us during our business hours to schedule an appointment in person.'
    },
    {
        question: 'What should I do if I have a dental emergency?',
        answer: 'If you re experiencing a dental emergency, such as severe pain, a broken tooth, or uncontrollable bleeding, call us immediately. Well do everything possible to see you as quickly as possible and relieve your pain.'
    },
    {
        question: 'How often should I visit the dentist?',
        answer: 'To maintain optimal oral health, a routine visit every six months is recommended. These visits allow us to perform professional cleanings and detect any problems early, preventing more complex treatments in the future.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, credit cards (Visa, Mastercard, American Express), and debit cards. We also offer financing plans or payment options for higher-cost treatments. Dont hesitate to ask us about the available options that best suit your needs.'
    },
]

//Foooter Section
const copyrightNotice = '© 2024 Harmony Dental. All rights reserved.';


export {
    mainName,
    mainDescription,
    headerTitle,
    contactinfo,
    navsLinks,
    aboutTitle,
    aboutHeading,
    aboutEquipment,
    servicesTitle,
    servicesHeading,
    servicesList,
    branchesTitle,
    branchesHeading,
    branchesList,
    commentsTitle,
    commentsHeading,
    commentsList,
    faqTitle,
    faqHeading,
    faqList,
    copyrightNotice
}