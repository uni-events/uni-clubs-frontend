import { longStr } from "./dataTypes";

export const eventDetailsDummy: {
  eventId: string;
  clubStr: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  event: string;
  tags: string[];
  categories: string[];
}[] = [
  {
    eventId: "catsoc",
    clubStr: "catsoc",
    name: "Cat Appreciation Society",
    description: longStr,
    logo: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/unswcatsoc.jpg",
    event: "Cat Petting Stall",
    tags: ["Free", "No Food", "On Campus"],
    categories: ["Hobby"],
  },
  {
    eventId: "csesoc",
    clubStr: "csesoc",
    name: "CSE Society",
    description: longStr,
    logo: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/csesoc.jpg",
    event: "Weekly BBQ",
    tags: ["Paid", "Food & Drinks", "Off Campus"],
    categories: ["Academic/Career"],
  },
  {
    eventId: "cserevue",
    clubStr: "cserevue",
    name: "Computer Science and Engineering Revue",
    description: longStr,
    event: "Standup Session",
    logo: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
    banner: "https://cdn.linkupevents.com.au/society/cserevue.jpg",
    tags: ["Free", "No Food", "Off Campus"],
    categories: ["Hobby"],
  },
  {
    eventId: "dogsoc",
    clubStr: "dogsoc",
    name: "Dog Appreciation Society",
    description: longStr,
    event: "Dog Petting Stall",
    logo: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/unswdogsoc.jpg",
    tags: ["Free", "Food & Drinks", "On Campus"],
    categories: ["Hobby"],
  },
  {
    eventId: "digisoc",
    clubStr: "digisoc",
    name: "Digital Society UNSW",
    description: longStr,
    event: "Digital Something Event",
    logo: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
    banner: "https://cdn.linkupevents.com.au/society/unswdigitalsociety.jpg",
    tags: ["Paid", "No Food", "On Campus"],
    categories: ["Academic/Career"],
  },
];

export const ClubDataDummy: {
  clubStr: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  tags: string[];
  categories: string[];
}[] = [
  {
    clubStr: "180DC",
    name: "180 Degrees Consulting",
    description:
      "180 Degrees Consulting is the world's largest student-driven consultancy. We work with socially conscious organizations to help them achieve a greater social impact.",
    logo: "https://cdn.linkupevents.com.au/society/180DegreesConsultingUNSW.jpg",
    banner:
      "https://cdn.linkupevents.com.au/society/180DegreesConsultingUNSW.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "AccSoc",
    name: "Accounting Society",
    description:
      "The Accounting Society of UNSW was founded towards the end of 2011. We are a society that is dedicated to keeping our members informed about graduate, internship, and cadetship opportunities available in the industry. We aspire to bridge the gap between students and the professional world. We provide students with information, platforms, skills, and advice that are necessary to succeed in the job market and to ultimately achieve their career goals and objectives. Our events and opportunities transcend degrees and industries, instilled by our objective to Connect, Inform and Develop our student base.",
    logo: "https://cdn.linkupevents.com.au/society/ACCSOCUNSW.jpg",
    banner: "https://cdn.linkupevents.com.au/society/ACCSOCUNSW.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "ASOC",
    name: "Actuarial Society",
    description:
      'The Actuarial Society of UNSW (ASOC) is a student society which is tailored to provide support for actuarial students on campus in their challenging but rewarding experience at university. As a constituent club of the university, it is supported by Arc, the Faculty of Business and the School of Actuarial Studies.  Our vision is "To guide and facilitate a supportive, social and united actuarial student community on campus", a principle that shapes the general running and purpose of our society. The ASOC experience can also be summed up by our motto: Aspirations, Support, Opportunities, Community, as we believe that these four words derive the essence of what students can expect from our society.  ASOC is one of the most highly regarded actuarial student societies in Australia and is also one of the most active clubs in UNSW Sydney in terms of activities and support for our members. We provide a wide range of events throughout the year, in four major areas: social; sporting; academic; and careers. These involve events such as a mentoring program, PASS classes, inter-university sporting competitions, BBQs, career seminars, camp, an annual ball and many more. We also produce a monthly publication for members and pride ourselves on developing an active network of volunteers which allows members to develop skills, get involved in campus life, and have a sense of ownership in our activities. Moreover, the latest news, snapshots and reviews of our fantastic events are published in our regular Finity Actuarial Bulletin.  We welcome all students to join ASOC and be a part of our wonderful events. It is a great chance to network with peer future actuaries. We look forward to seeing you on board in this fantastic actuarial journey with us!',
    logo: "https://cdn.linkupevents.com.au/society/asocunsw.jpg",
    banner: "https://cdn.linkupevents.com.au/society/asocunsw.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "Advent Hope",
    name: "Adventist Students On Campus",
    description:
      "Advent Hope is a Christian student club that seeks to support and encourage students to achieve excellence throughout their university experience by: 1. Building lasting friendships 2. Providing fun social activities 3. Encouraging healthy living 4. Supporting you in your academic, social and spiritual needs",
    logo: "https://cdn.linkupevents.com.au/society/adventhopeunsw.jpg",
    banner: "https://cdn.linkupevents.com.au/society/adventhopeunsw.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "ADSOC",
    name: "Adventure Society",
    description:
      "Since 2009, the UNSW Adventure Society (ADSOC) has made it a mission to enrich the university experience of all local, exchange and international students in a variety of indoor and outdoor activities.   From hiking and bouldering to skiing and snowboarding, ADSOC aims to break the monotony of university life by bringing the adventure straight to you. We welcome students of any skill and experience. Whether you're looking to tear down the snowy mountains or climb your way to new heights, ADSOC has a place for you! Get ready to face your fears, make heartfelt friendships and most importantly, have fun!  Our events are open to everyone (including non-UNSW students & non-members) so please feel free to come join us anytime, no membership required! We welcome people of ALL fitness levels and are beginner-friendly!  As a student-run society dedicated to enhancing your university experience, we strive to: - Engage with our members for an unforgettable university experience - Introduce students to a broad range of new and exciting experiences and activities - Expand our member opportunities with exclusive ADSOC benefits that extend beyond campus - Provide a platform for our members to socialise and make meaningful friendships - Have fun!  We also have an optional $5 ADSOC membership which provides exclusive benefits with our sponsors. Message us on facebook or send us an email for more information and how to join :)",
    logo: "https://cdn.linkupevents.com.au/society/UNSWadsoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/UNSWadsoc.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "APRS",
    name: "Advertising & Public Relations Society",
    description:
      "The Advertising and Public Relations Society (APRS) is a student run organisation that equips you with the skills, confidence and power to help kick-start your career in the creative industry. We seek to develop budding creative minds by offering several opportunities to learn and network with the industry?s best. APRS also aims to build a tight-knit community among young and talented commerce, art and design, PR, and advertising students, through a series of fun and interactive social events.",
    logo: "https://s3.ap-southeast-2.amazonaws.com/cdn.linkupevents.com.au/images/Advertising+%26+Public+Relations+Society.png",
    banner:
      "https://s3.ap-southeast-2.amazonaws.com/cdn.linkupevents.com.au/images/Advertising+%26+Public+Relations+Society.png",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "ASU",
    name: "African Students Union",
    description:
      "The African Students Union, as reflected in the name, is a sociocultural platform that creates awareness about the rich and diverse African people, geography and culture within the UNSW community. We foster friendly interactions with UNSW students who want to experience and learn about Africa, especially our lifestyle, music, dance, food, and other artistic expressions.  Whilst integrating and promoting the interests of African students at UNSW, we organise events that display the cultural richness and diversity of the different groups in Africa.  Our club comprises Africans, people of African ancestry, and anyone interested about Africa. Hence, we are open to everyone, so we hope to see you around!",
    logo: "https://cdn.linkupevents.com.au/society/asu_unsw.jpg",
    banner: "https://cdn.linkupevents.com.au/society/asu_unsw.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "AgriCycle",
    name: "AgriCycle",
    description:
      "AgriCycle aims to socialise and promote designing humanitarian devices that use agricultural waste. We have a passion for creating sustainable devices and to provide university students exposure into the space.",
    logo: "https://cdn.linkupevents.com.au/society/AgriCycle.png",
    banner: "https://cdn.linkupevents.com.au/society/AgriCycle.png",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "AIESEC",
    name: "AIESEC",
    description:
      "AIESEC is the world's largest youth run organisation, we develop leadership in youth through cross cultural understanding and self-development! Sign up for our YLX (Youth Leadership Experience) program to access workshops, events and programs to further your own growth and accelerate your career in leadership!",
    logo: "https://cdn.linkupevents.com.au/society/AIESEC.png",
    banner: "https://cdn.linkupevents.com.au/society/AIESEC.png",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "Albury Wodonga Medical Students Society",
    name: "Albury Wodonga Medical Students Society",
    description:
      "The Albury-Wodonga Medical Students? Society (AWMSS) is a club for all UNSW Medical Students who are studying in Albury-Wodonga. These connected towns are located on the border of New South Wales and Victoria on Wiradjuri land. We pride ourselves on running a wide range of academic, social, community and sporting events throughout the year. We have an active committee who liaise with the clinical school and faculty to try to ensure all of the students are optimally supported whilst studying here. If you are interested in coming down to join us or have any questions about living and studying in Albury-Wodonga feel free to get in touch with us through email or social media!",
    logo: "https://cdn.linkupevents.com.au/society/awmss.png",
    banner: "https://cdn.linkupevents.com.au/society/awmss.png",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "AIS",
    name: "Alternative Investment Society",
    description:
      "The UNSW Alternative Investment Society (AIS) is a student-run society that aims to foster a greater understanding of, and interest in Alternative Investments among the students of the university. The society's primary goal is to provide networking opportunities and increase the employability of UNSW's students in a field that is currently underrepresented within the University. While alternative investment is a very broad term, our society is focused on, but not limited to: private equity, venture capital and hedge funds.",
    logo: "https://cdn.linkupevents.com.au/society/unswaisoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/unswaisoc.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "AIAA UNSW",
    name: "American Institute of Aeronautics and Astronautics",
    description:
      "AIAA UNSW is a student branch of the American Institute of Aeronautics & Astronautics (AIAA). The student branch is based at the University of New South Wales in Sydney, Australia. AIAA is the world?s largest technical society dedicated to the global aerospace profession. With more than 35,000 individual members worldwide, and 90 corporate members, AIAA brings together industry, academia, and government to advance engineering and science in aviation, space, and defense. The student branch aims to promote AIAA within the university community and help facilitate links between professional industry and UNSW students.",
    logo: "https://cdn.linkupevents.com.au/society/AIAAUNSW.jpg",
    banner: "https://cdn.linkupevents.com.au/society/AIAAUNSW.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "AELSOC",
    name: "Animal and Environmental Law Society UNSW",
    description:
      "The UNSW Animal and Environmental Law Society provides an independent discussion forum for animal and environmental law issues. It facilitates career development for students with an interest in animal and environmental law careers. It provides a robust platform for student activism, including legislative reform and policy submissions pertaining to animal and environmental law. The Animal and Environmental Law Society brings these increasingly important areas of law to the forefront of UNSW?s legal and political agenda, recognising the importance of animal and environmental protection laws in an era of anthropogenic climate change and mass extinction.",
    logo: "https://cdn.linkupevents.com.au/society/aelsoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/aelsoc.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "Animal Voices",
    name: "Animal Voices",
    description:
      "UNSW's Animal Voices society aims to raise awareness about the treatment of animals in society and promote an more compassionate approach to individual's interactions with animals. It will ultimately work towards change that allows animals to live according to their own natural and unique interests, and in turn promote a more harmonious approach to human and non-human interaction. We invites students to share knowledge, investigate and question the treatment of animals in their everyday life. The power of knowledge and information sharing is liberation and education is the premise of progress and change and nowhere is this more well-place than at a university where knowledge sharing is a fundamental ingredient in its core function. We aim to make a valuable educational contribution to the UNSW staff and student community by creating a forum to actively engage, investigate, debate, hypothesise and ultimately raise awareness with regard to the ethical issues and concerns pertaining to animal welfare. We encourage our members to become a voice for animals and through this foster selflessness as they sacrifice your own time to work towards justice for others.",
    logo: "https://cdn.linkupevents.com.au/society/animalvoicesunsw.jpg",
    banner: "https://cdn.linkupevents.com.au/society/animalvoicesunsw.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "AnimeUNSW",
    name: "AnimeUNSW",
    description:
      "Welcome Anime Lovers to AnimeUNSW! As the largest active anime community in Sydney, we pride ourselves with bringing like-minded people together and creating a place to build friendships that last a lifetime. Our goal is to create a safe environment for anime lovers to enjoy anime and all things related, including but not limited to manga, drawing, gaming, cosplay, and music! Our society hosts various activities like art, gaming, and screening sessions, as well as free barbecues, every week.",
    logo: "https://cdn.linkupevents.com.au/society/unswanime.jpg",
    banner: "https://cdn.linkupevents.com.au/society/unswanime.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "Anjali Tamil Society",
    name: "Anjali Tamil Society",
    description:
      "The UNSW Anjali Tamil Society is an organisation affiliated with and based at the University of New South Wales since its establishment in 1992. The society celebrates all that is amazing about the Tamil language; culture and heritage in the context of the one place all UNSW students call home, Australia. Ultimately, the resulting fusion allows students to experience the best of both worlds and unite by the means of their unique amalgamated identity.",
    logo: "https://cdn.linkupevents.com.au/society/anjali_tamil.jpg",
    banner: "https://cdn.linkupevents.com.au/society/anjali_tamil.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "ALAS",
    name: "Aquatic Life Appreciation Society",
    description:
      "We are a group of people interested in learning and appreciating aquatic life through cultural and social activities.",
    logo: "https://cdn.linkupevents.com.au/arc_logo.png",
    banner: "https://cdn.linkupevents.com.au/arc_logo.png",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "ArchSoc",
    name: "Architecture Society",
    description:
      "UNSW Architectural Society (Archsoc) is an Arc affiliated club at the University of New South Wales. Being a constituent club for the undergraduate and postgraduate Architecture degree programs in the School of Built Environment within the Faculty of Arts, Design & Architecture, we aim to facilitate a social platform for students studying Architectural Studies, similar Built Environment degrees and any students with a keen architectural interest. Our society consists of over 250 members passionate about architecture, and our events and programs throughout the year have a strong emphasis on education, developing design practice and fostering community. Some of our biggest events include the Archsoc Hoodie Design Comp, Welcome Back BBQs each term, Annual Balls and Architecture Skills workshops.",
    logo: "https://cdn.linkupevents.com.au/society/UNSWArchSoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/UNSWArchSoc.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "A\\u0026DSoc",
    name: "Art & Drawing Society",
    description:
      "A&DSoc is a community of casual hobbyists, art students, and enthusiasts! We love and encourage all forms of art; every art media and personal style at any experience level is welcome in our friendly society ^_^. If you?re looking to share your works, discover some interesting prompts, try new media or just vibe with our welcoming community, then we?re the club for you ? check out our Discord server (accessible from our website) where you can find all those and more!",
    logo: "https://cdn.linkupevents.com.au/society/unswandsoc.jpg",
    banner: "https://cdn.linkupevents.com.au/society/unswandsoc.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "ArtsSoc",
    name: "Arts Society",
    description:
      "ArtsSoc is a fun, inclusive, people-driven and experience-oriented society that wants to create enjoyable events, parties, wellbeing initiatives, and networking and professional growth opportunities for Arts students at UNSW and the wider UNSW community!",
    logo: "https://cdn.linkupevents.com.au/society/artssocietyunsw.jpg",
    banner: "https://cdn.linkupevents.com.au/society/artssocietyunsw.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "ASEANSOC",
    name: "ASEANSOC",
    description:
      "Are you a student interested in expanding your knowledge of South-East Asian affairs? Or are you looking to have fun exploring different cultural foods and traditions? Well, UNSW ASEAN Society is the perfect fit for you!   Founded in 2018, ASEANSOC serves as a community for students from all South-East Asian backgrounds and beyond to celebrate and uplift the region's shared culture and ideologies. We pride ourselves as a platform that enables passionate conversation and fresh outlooks on South-East Asia from a political, economic, and sociocultural standpoint.   Through our events across the year, including our flagship UNSW ASEAN Conference, we aim to generate awareness on South-East Asian issues and be the force of aspirational collaboration between Australia and the region. Additionally, we aspire to highlight the beauty of South-East Asian heritage, including the variety of cuisines, folklore, and popular media it has to offer.   Whether it be a relaxed night watching a Thai film or collaborating with a team to develop sustainable climate practices in the broader SEA region, ASEANSOC has a wide range to offer in making your university experience unique and memorable!",
    logo: "https://cdn.linkupevents.com.au/society/ASEANSocUNSW.jpg",
    banner: "https://cdn.linkupevents.com.au/society/ASEANSocUNSW.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "ASA",
    name: "Assyrian Students' Association",
    description:
      "Founded in 2019, the Assyrian Students' Association of UNSW (ASAUNSW) is an independent, not-for-profit student organisation with the key aim of engaging Assyrian and non-Assyrian students in Assyrian culture while promoting the Assyrian identity in an academic environment.   We aim to create a small community and safe space for all Young Assyrians studying at UNSW whilst collaborating with other UNSW Clubs and Societies as well as other Assyrian associations across other universities. We have fun and educational events that never go without laughter, dance and some good food.  ",
    logo: "https://cdn.linkupevents.com.au/society/asaunsw.jpg",
    banner: "https://cdn.linkupevents.com.au/society/asaunsw.jpg",
    tags: [],
    categories: ["All"],
  },
  {
    clubStr: "AUJS",
    name: "Australasian Union of Jewish Students",
    description:
      "AUJS UNSW hosts regular on campus events and functions ranging from the social and educational to cultural and political, is at the forefront of Israel advocacy, and promotes AUJS' off campus events and initiatives.",
    logo: "https://cdn.linkupevents.com.au/society/aujs.jpg",
    banner: "https://cdn.linkupevents.com.au/society/aujs.jpg",
    tags: [],
    categories: ["All"],
  },
];
