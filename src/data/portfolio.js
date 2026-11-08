/* ------------------------------------------------------------------
   ALL YOUR CONTENT LIVES HERE. This is the only file you need to edit
   to change text, links and images.

   Replace any ph(...) / avatar() placeholder with your own image, e.g.
   portrait: "/images/me.png"    (file stored in the public/images folder)
------------------------------------------------------------------- */
export const ph = (label, a = "#1d4e89", b = "#0b2239") =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs>
      <rect width='800' height='500' fill='url(#g)'/>
      <circle cx='660' cy='100' r='150' fill='white' opacity='.07'/>
      <text x='50%' y='53%' text-anchor='middle' fill='white' opacity='.85'
        font-family='Arial, sans-serif' font-size='32'>${label}</text></svg>`
  );

export const avatar = () =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='700'>
      <defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0' stop-color='#3a7bd5'/><stop offset='1' stop-color='#0b2239'/></linearGradient></defs>
      <rect width='600' height='700' fill='url(#g)'/>
      <circle cx='300' cy='260' r='105' fill='#dbe7f5' opacity='.9'/>
      <path d='M90 700 C100 480 200 430 300 430 C400 430 500 480 510 700Z' fill='#dbe7f5' opacity='.9'/>
      <text x='50%' y='660' text-anchor='middle' fill='#0b2239' font-family='Arial' font-size='26'>Your photo</text></svg>`
  );

export const GITHUB = "https://github.com/sharayudesaihub";
export const LINKEDIN = "https://www.linkedin.com/in/sharayu-desai-38565725a";

export const PROFILE = {
  name: "Sharayu Desai",
  roles: ["Full Stack Developer", "MERN Stack Developer", "Software Developer"],
  location: "Kolhapur, Maharashtra",
  phone: "7972813979",
  email: "sharayudesai96@gmail.com",
  cv: "/Sharayu_Desai_Resume.pdf", // put your PDF in the public folder
  portrait:"/images/me.png",
    aboutImage: "/images/about.jpg",
  intro:
      "I’m a full stack developer who enjoys turning ideas into fast, reliable and easy-to-use web and mobile products.I keep learning new tools so every build is better than the last.",
  about: [
    "I’m a Computer Science and Engineering graduate from Dr. D. Y. Patil Pratishthan’s College of Engineering, Kolhapur (2022–2026), with a strong passion for software development and problem-solving.",
    "I have hands-on experience building full-stack web applications using the MERN stack and developing Android applications. Through my projects and web development internships, I've gained practical experience in designing user-friendly interfaces, developing backend functionality, and working with databases.",
  ],
};

export const STATS = [
  ["7.59", "CGPA"],
  ["2", "Internships"],
  ["4", "Projects"],
  ["4", "Certifications"],
];

export const SKILLS = [
  { group: "Languages", items: ["Java", "JavaScript", "SQL"] },
  { group: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { group: "Backend and database", items: ["Node.js", "Express.js", "Spring Boot", "MongoDB", "MySQL", "REST APIs"] },
  { group: "Tools and platforms", items: ["Git / GitHub", "Android Studio", "Visual Studio", "XAMPP"] },
];

/* live: leave "" to hide the Live demo button. repo: your GitHub repo link. */
export const PROJECTS = [
  {
    title: "Job Portal Web Application",
    type: "MERN stack",
    image: ph("Job Portal screenshot", "#1f6fb2", "#0b2239"),
    text: "A full-stack job portal with secure login, job posting, job search and application management. Includes RESTful APIs, a responsive React UI, profile management and job filtering.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    live: "https://jobportalwebpage.netlify.app",
    repo: GITHUB,
  },
  {
    title: "MediTrack",
    type: "Android health app",
    image: ph("MediTrack screenshot", "#1f7a8c", "#0b2239"),
    text: "An Android app with medication scheduling, appointment management, SOS alerts, a pharmacy map and a chatbot. Uses SQLite for local storage, Firebase for live data and third-party APIs for live features.",
    tags: ["Java", "XML", "Gradle", "SQLite", "Firebase"],
    live: "", // Android app: no live link
    repo: GITHUB,
  },
  {
    title: "Project Three (dummy)",
    type: "Web app",
    image: ph("Project Three screenshot", "#2f5d9f", "#0b2239"),
    text: "Dummy description. Replace this with a short summary of what the project does, the problem it solves and the main features you built.",
    tags: ["React.js", "Node.js", "MongoDB"],
    live: "https://example.com", // replace with your live link
    repo: GITHUB, // replace with your repo link
  },
  {
    title: "Project Four (dummy)",
    type: "Web app",
    image: ph("Project Four screenshot", "#2b7a78", "#14324d"),
    text: "Dummy description. Replace this with a short summary of what the project does, the problem it solves and the main features you built.",
    tags: ["JavaScript", "Express.js", "MySQL"],
    live: "https://example.com", // replace with your live link
    repo: GITHUB, // replace with your repo link
  },
];

export const EXPERIENCE = [
  {
    title: "Software Intern",
    org: "Anvistar ITS Pvt. Ltd., Pune",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Worked on the Alaybee Sports website using HTML, JavaScript, CSS, Bootstrap and jQuery.",
      "Handled project development management and web programming, following efficient project workflows.",
    ],
  },
  {
    title: "Web Developer Intern",
    org: "OPRA IT Solutions, Pune, with Dr. D. Y. Patil Pratishthan’s College of Engineering",
    period: "1 month",
    points: [
      "Built responsive web interfaces with HTML, CSS and JavaScript, and assisted with backend development using PHP and SQL.",
      "Used Git/GitHub in an Agile workflow, improving UI responsiveness and user experience.",
    ],
  },
];

export const EDUCATION = [
  { title: "B.Tech, Computer Science and Engineering", place: "Dr. D. Y. Patil Pratishthan’s College of Engineering, Kolhapur", year: "2022 – 2026", note: "CGPA 7.59" },
  { title: "HSC (XII)", place: "New College, Kolhapur", year: "2021 – 2022", note: "56.33%" },
  { title: "SSC (X)", place: "Kumar Bhavan Sheloli, Kolhapur", year: "2019 – 2020", note: "88.20%" },
];

/* image: replace ph(...) with your certificate picture (e.g. "/certs/gfg.jpg") */
export const CERTS = [
  { name: "Full Stack Web Development", org: "GeeksforGeeks", image: ph("Certificate: GeeksforGeeks", "#1f6fb2", "#0b2239") },
  { name: "Front End Development", org: "Simplilearn", image: ph("Certificate: Simplilearn", "#2a6fb0", "#0b2239") },
  { name: "Java Programming", org: "ScholarHat", image: ph("Certificate: ScholarHat", "#1f7a8c", "#0b2239") },
  { name: "Artificial Intelligence (AI)", org: "HP LIFE Foundation", image: ph("Certificate: HP LIFE", "#2b7a78", "#14324d") },
];

export const ACTIVITIES = ["Training and Placement (T&P) Cell member", "R&D Cell volunteer"];
