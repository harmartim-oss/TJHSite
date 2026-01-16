import { Service, Education, Publication, Experience, Affiliation } from './types';

export const BUSINESS_NAME = "Harmar Strategic Advisory";
export const SLOGAN = "INTEGRATED BUSINESS, LEGAL & TECHNICAL SOLUTIONS";
export const CONTACT_EMAIL = "harmartim@gmail.com";
export const CONTACT_PHONE = "705.999.3657";

export interface StrategicService extends Service {
  benefits: string[];
}

export const SERVICES: StrategicService[] = [
  {
    title: "Business Strategy",
    description: "Synthesizing market intelligence with regional economic logic to guide organizational growth. Rooted in MBA-level financial analysis and board-level governance.",
    icon: "fa-chess-knight",
    tags: ["MBA Strategy", "Corporate Growth", "Governance"],
    benefits: [
      "Optimizing operational efficiency for industrial transitions.",
      "Guiding regional economic development and public funding strategy.",
      "Board-level oversight for complex commercial risk mitigation."
    ]
  },
  {
    title: "Legal Advocacy",
    description: "Sophisticated counsel bridging the gap between legal theory and commercial reality. Specializing in corporate-commercial transactions and municipal law.",
    icon: "fa-scale-balanced",
    tags: ["JD/LLM Counsel", "SCC Litigation", "Corporate Law"],
    benefits: [
      "Mitigating liability through precise contract engineering.",
      "Navigating multi-jurisdictional regulatory frameworks.",
      "Representing complex interests in high-precedent litigation."
    ]
  },
  {
    title: "Privacy & Ethics",
    description: "Architecting trust through robust information governance. Aligning data practices with global regulations (GDPR/PIPEDA) and emerging ethical AI standards.",
    icon: "fa-fingerprint",
    tags: ["Data Privacy", "CIPP/C Professional", "AI Ethics"],
    benefits: [
      "Implementing AI-ready privacy governance architectures.",
      "Conducting critical Privacy Impact Assessments (PIA).",
      "Designing customer-centric transparency protocols."
    ]
  },
  {
    title: "Cybersecurity Risk",
    description: "Technical policy and risk management solutions protecting critical infrastructure. Leveraging an M.Eng in Cybersecurity to bridge IT and the Boardroom.",
    icon: "fa-shield-halved",
    tags: ["M.Eng Policy", "Cyber Resilience", "Technical Risk"],
    benefits: [
      "Developing technical risk mitigation and incident response plans.",
      "Auditing vendor security to eliminate third-party vulnerabilities.",
      "Navigating technical due diligence for M&A and digital audits."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "Master of Engineering (M.Eng), Cybersecurity Policy and Compliance",
    institution: "George Washington University",
    year: "2022"
  },
  {
    degree: "Master of Laws (LLM), Business Law",
    institution: "Osgoode Hall Law School",
    year: "2017"
  },
  {
    degree: "Juris Doctor (JD)",
    institution: "University of Windsor",
    year: "2013"
  },
  {
    degree: "Master of Laws (LLM), Banking & Financial Services Law",
    institution: "Osgoode Hall Law School",
    year: "2010"
  },
  {
    degree: "Master of Business Administration (MBA), Finance & Accounting",
    institution: "University of Liverpool",
    year: "2008"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "A Judicial 'SLAPP' To The Drafters Of Ontario's Anti-SLAPP Legislation",
    outlet: "Municipal World",
    date: "Oct 2016",
    summary: "A critical analysis of judicial interpretation in municipal contexts, focusing on the balance between public participation and protection from vexatious litigation.",
    link: "https://www.municipalworld.com/articles/a-judicial-slapp-to-the-drafters-of-ontarios-anti-slapp-legislation/"
  },
  {
    title: "Federal Government Suspends CASL's Private Right of Action",
    outlet: "Mondaq",
    date: "June 2017",
    summary: "Strategic analysis of the suspension of the private right of action under Canada's Anti-Spam Legislation and its implications for corporate compliance programs.",
    link: "https://www.mondaq.com/canada/it-and-internet/601614/federal-government-suspends-casl39s-private-right-of-action"
  },
  {
    title: "Islamic Securitization: Structuring for Shari'ah Compliance",
    outlet: "Law in International Finance (Carswell)",
    date: "2009",
    summary: "Expert contribution to the leading text on international finance, detailing the structural and legal requirements for Shari'ah-compliant financial instruments.",
    link: "https://store.thomsonreuters.ca/en-ca/products/law-in-international-finance-carswell"
  },
  {
    title: "Regional Industrial Transition: Integrating Cyber-Resilience and Legal Policy",
    outlet: "Strategic Advisory Insights",
    date: "2024",
    summary: "A synthesis of engineering policy and legal risk frameworks for organizations navigating digital transformation in Northern Ontario.",
    // Link omitted to demonstrate robust UI handling for non-linked publications
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Lead Strategist & Principal",
    company: "Harmar Strategic Advisory",
    period: "2023 – Present",
    bullets: [
      "Consulting on Privacy and Cybersecurity risk for high-growth enterprises.",
      "Economic development advisory for municipal bodies in Northern Ontario.",
      "Architecting technical and legal policy frameworks for emerging tech."
    ]
  },
  {
    role: "Lawyer (Barrister & Solicitor)",
    company: "Wishart Law Firm LLP",
    period: "2014 – 2023",
    bullets: [
      "Led pivotal litigation reaching the Supreme Court of Canada.",
      "Advised on multi-million dollar corporate transactions."
    ]
  }
];

export const AFFILIATIONS: Affiliation[] = [
  {
    name: "Law Society of Ontario",
    role: "Barrister & Solicitor",
    link: "https://lso.ca/",
    logoIcon: "fa-certificate"
  }
];