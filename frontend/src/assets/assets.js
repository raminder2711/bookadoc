import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynaecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Elon Musk',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MD in Rocket Science',
        experience: '4 Years',
        about: 'Elon is known for his entrepreneurial spirit, launching multiple successful ventures, including SpaceX and Tesla. With a unique perspective on innovation, he brings his problem-solving skills to the tech industry and beyond, blending his work in cutting-edge technology with a focus on human progress.',
        fees: 50,
        address: {
            line1: '42 Mars Blvd',
            line2: 'SpaceX City, CA 95001'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Mark Zuckerberg',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MD in Digital Healthcare and User Experience',
        experience: '3 Years',
        about: 'Mark is a tech visionary known for reshaping global communication through Facebook. Over the years, he has contributed to the intersection of digital spaces and health, focusing on improving healthcare access and empowering users with information.',
        fees: 60,
        address: {
            line1: '1 Zuckerberg Circle',
            line2: 'Facebooktown, CA 94110'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Satya Nadella',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MD in Cloud Dermatology and Artificial Intelligence',
        experience: '1 Years',
        about: 'Satya is the driving force behind Microsofts cloud and AI initiatives, shaping the future of tech. His work in technology has also influenced how health data can be stored and utilized, impacting digital dermatology and virtual health care services.',
        fees: 30,
        address: {
            line1: '999 Redmond Lane',
            line2: 'Microsoftia, WA 98052'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Sheryl Sandberg',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MD in Family Health and Social Networking',
        experience: '2 Years',
        about: "Sheryl's leadership at Facebook has shaped the future of online social platforms. She has also dedicated her career to understanding the impacts of digital spaces on family health, particularly how online platforms affect child and adolescent well-being.",
        fees: 40,
        address: {
            line1: '123 Boardroom Road',
            line2: 'Silicon Valley, CA 94025'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Sundar Pichai',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MD in Cognitive Computing and Neural Networks',
        experience: '4 Years',
        about: "Sundar's leadership has guided Google's growth into an AI powerhouse. His work with neural networks and AI research explores new ways to enhance cognitive computing, which is transforming various fields, including neurology and medical advancements.",
        fees: 50,
        address: {
            line1: '600 Mountain View St',
            line2: 'Googletown, CA 94043'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Sergey Brin',
        image: doc15,
        speciality: 'Gastroenterologist',
        degree: 'MD in Biotech and Health Integration',
        experience: '1 Years',
        about: "Sergey has been a key figure at Google, but his more recent work has been in health tech. With the development of biotech innovations, Sergey aims to bridge the gap between digital health solutions and better medical outcomes in gastroenterology.",
        fees: 30,
        address: {
            line1: '200 Googleplex Road',
            line2: 'Mountain View, CA 94043'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Ben Organ',
        image: doc7,
        speciality: 'Neurologist',
        degree: 'MD in Digital Health & Technology Innovation',
        experience: '4 Years',
        about: "Dr. Ben Organ is a Computer Science graduate from the University of Bristol with extensive experience in tech entrepreneurship, freelance work, and leadership roles, including Director of Engineering at Athena. Passionate about technology's potential to improve lives, he enjoys creating impactful software and fostering innovation.",
        fees: 50,
        address: {
            line1: '1 Infinite Loop',
            line2: 'Cupertino, CA 95014'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Marissa Mayer',
        image: doc8,
        speciality: 'Gynaecologist',
        degree: 'MD in Behavioral Health',
        experience: '3 Years',
        about: "Marissa's role in the evolution of Yahoo! and her work on user experience in technology has greatly impacted the tech industry. She now focuses on how digital tools can be applied to pediatric care, ensuring they are user-friendly while improving the delivery of healthcare.",
        fees: 60,
        address: {
            line1: '111 Silicon Alley',
            line2: 'Sunnyvale, CA 94089'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Susan Wojcicki',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MD in Digital Content Delivery',
        experience: '4 Years',
        about: "Susan's leadership at YouTube has made her a key figure in shaping digital content.",
        fees: 50,
        address: {
            line1: '1100 YouTube Parkway',
            line2: 'LA 90001'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jack Dorsey',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MD in Child Health and Digital Wellness',
        experience: '2 Years',
        about: "As the co-founder of Twitter and Square, Jack combines his expertise in technology with pediatric care, focusing on digital tools for child health monitoring and preventive care.",
        fees: 40,
        address: {
            line1: '222 Twitter Way',
            line2: 'Square City, CA 94107'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Reed Hastings',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MD in Dermatological Sciences and AI Skin Diagnostics',
        experience: '1 Years',
        about: "As the co-founder of Netflix, Reed leverages AI-driven tools to advance dermatology, focusing on early skin condition detection through digital imaging.",
        fees: 30,
        address: {
            line1: '555 Streaming Blvd',
            line2: 'Netflixville, CA 90210'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Brian Chesky',
        image: doc12,
        speciality: 'General Physician',
        degree: 'MD in Preventive Medicine and Digital Health',
        experience: '4 Years',
        about: "As the co-founder of Airbnb, Brian integrates innovative care models, focusing on digital health platforms for preventive care and patient wellness.",
        fees: 50,
        address: {
            line1: '1800 Airbnb Blvd',
            line2: 'San Francisco, CA 94107'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Jack Ma',
        image: doc13,
        speciality: 'Pediatrician',
        degree: 'MD in Early Childhood Development and E-Commerce Healthcare',
        experience: '4 Years',
        about: "Jack's Alibaba Group has transformed the e-commerce space, and now, he is turning his focus toward leveraging digital platforms to improve early childhood healthcare and development across the globe.",
        fees: 50,
        address: {
            line1: '1000 Alibaba Street',
            line2: 'Hangzhou, China 310000'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Larry Page',
        image: doc14,
        speciality: 'Gastroenterologist',
        degree: 'MD in Gastrointestinal Sciences and Data Analytics',
        experience: '3 Years',
        about: "As the co-founder of Google, Larry applies data analytics to gastroenterology, focusing on digestive health patterns and personalized treatment insights.",
        fees: 60,
        address: {
            line1: '200 Googleplex Road',
            line2: 'Mountain View, CA 94043'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Jeff Bezos',
        image: doc6,
        speciality: 'General Physician',
        degree: 'MD in Healthcare Innovation and Patient Care Systems',
        experience: '4 Years',
        about: "As the founder of Amazon, Jeff utilizes cutting-edge technology to enhance patient care, focusing on streamlining health systems and improving access to medical services.",
        fees: 50,
        address: {
            line1: '1000 Amazon Drive',
            line2: 'Prime City, WA 98021'
        }

    },
]