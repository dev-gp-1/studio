import { Factory, Rocket, Stethoscope, Calculator, Scale, type LucideIcon } from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/insights", label: "Insights" },
];

export type IndustryService = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  heroImageHint: string;
  services: Array<{ title: string; description: string }>;
  benefits: string[];
};

export const industrySpecificServices: IndustryService[] = [
  {
    id: "oil-and-gas",
    name: "Oil & Gas",
    icon: Factory,
    description: "Enhancing safety and efficiency in critical oil and gas operations through intuitive design and human factors engineering.",
    heroImageHint: "oil rig platform",
    services: [
      { title: "Control Room UX/UI Design", description: "Optimizing interfaces for SCADA, DCS, and HMI systems to improve operator performance and reduce errors." },
      { title: "Safety Procedure Visualization", description: "Developing clear, interactive digital guides for complex safety protocols and emergency responses." },
      { title: "Mobile Applications for Field Operations", description: "Designing robust mobile tools for data collection, equipment monitoring, and remote collaboration." },
      { title: "Fatigue Risk Management Systems", description: "Applying human factors principles to design work schedules and environments that mitigate fatigue." },
      { title: "Alarm Rationalization & Management", description: "Improving alarm system design to ensure critical alerts are effectively communicated and acted upon." }
    ],
    benefits: [
      "Reduced operational errors and incidents",
      "Enhanced situational awareness for operators",
      "Improved adherence to safety protocols",
      "Increased efficiency in field operations",
      "Optimized decision-making under pressure"
    ]
  },
  {
    id: "aerospace",
    name: "Aerospace",
    icon: Rocket,
    description: "Advancing aerospace systems with human-centered design for cockpits, air traffic control, and maintenance operations.",
    heroImageHint: "cockpit spaceship",
    services: [
      { title: "Cockpit Display & Control Design", description: "Creating intuitive and decluttered flight deck interfaces for enhanced pilot performance and safety." },
      { title: "Air Traffic Control (ATC) Systems UX", description: "Designing next-generation ATC interfaces to manage increasing air traffic complexity safely." },
      { title: "Maintenance & Repair Information Systems", description: "Developing user-friendly digital tools and augmented reality solutions for aircraft maintenance." },
      { title: "Pilot Workload Assessment", description: "Utilizing human factors methodologies to evaluate and optimize pilot workload during all phases of flight." },
      { title: "Human Error Analysis & Mitigation", description: "Investigating incidents and near-misses to identify human factors causes and implement preventative measures." }
    ],
    benefits: [
      "Improved flight safety and reduced pilot error",
      "Enhanced air traffic management capabilities",
      "Increased efficiency and accuracy in maintenance",
      "Optimized pilot performance and reduced stress",
      "Proactive risk mitigation strategies"
    ]
  },
  {
    id: "medical",
    name: "Medical & Healthcare",
    icon: Stethoscope,
    description: "Improving patient outcomes and clinician experiences with user-friendly medical devices, EMRs, and healthcare software.",
    heroImageHint: "doctor surgery",
    services: [
      { title: "EMR/EHR Usability Optimization", description: "Redesigning electronic health record systems to improve clinician workflow, reduce burnout, and enhance data accuracy." },
      { title: "Medical Device Interface Design (FDA Compliance)", description: "Creating safe and effective user interfaces for medical devices, ensuring compliance with FDA human factors guidelines." },
      { title: "Patient Portal & Engagement Platform UX", description: "Designing intuitive patient portals that empower patients to manage their health and communicate effectively with providers." },
      { title: "Clinical Decision Support Systems UX", description: "Developing user-centered clinical decision support tools that integrate seamlessly into clinical workflows." },
      { title: "Human Factors for Error Reduction in Healthcare", description: "Applying human factors principles to identify and mitigate risks associated with medical errors." }
    ],
    benefits: [
      "Reduced medical errors and improved patient safety",
      "Enhanced clinician satisfaction and efficiency",
      "Improved patient engagement and health literacy",
      "Better data quality for clinical decision-making",
      "Compliance with regulatory human factors requirements"
    ]
  },
  {
    id: "cpa",
    name: "CPA & Financial Services",
    icon: Calculator,
    description: "Simplifying complex financial data and processes for CPA firms and their clients through intuitive software and portal design.",
    heroImageHint: "accounting finance",
    services: [
      { title: "Financial Software & Platform UX Design", description: "Creating user-friendly interfaces for accounting, tax, and audit software to improve productivity." },
      { title: "Client Data Visualization Dashboards", description: "Designing clear and actionable dashboards for CPAs and clients to understand financial performance." },
      { title: "Secure Document Management & Client Portals", description: "Developing intuitive and secure portals for document exchange, communication, and collaboration." },
      { title: "Human Factors in Financial Data Entry", description: "Optimizing data entry workflows and interfaces to reduce errors and improve efficiency." },
      { title: "UX for Regulatory Compliance Tools", description: "Ensuring financial compliance software is easy to navigate and use, minimizing risks of non-compliance." }
    ],
    benefits: [
      "Increased efficiency in financial tasks",
      "Reduced data entry errors and improved accuracy",
      "Enhanced client satisfaction and communication",
      "Better insights from financial data",
      "Streamlined compliance processes"
    ]
  },
  {
    id: "legal",
    name: "Legal Services",
    icon: Scale,
    description: "Streamlining legal workflows and enhancing client communication with user-centered design for legal tech and platforms.",
    heroImageHint: "lawyer courtroom",
    services: [
      { title: "Case Management Software UX/UI", description: "Designing intuitive case management systems that improve organization and productivity for legal professionals." },
      { title: "E-Discovery Platform Usability", description: "Optimizing e-discovery tools for efficient document review, analysis, and production." },
      { title: "Client Communication & Collaboration Portals", description: "Creating secure and user-friendly portals for client interaction, document sharing, and case updates." },
      { title: "Human Factors in Legal Document Review", description: "Applying human factors to reduce cognitive load and improve accuracy in complex document analysis." },
      { title: "UX for Online Dispute Resolution (ODR) Platforms", description: "Designing accessible and fair ODR platforms that facilitate effective dispute resolution." }
    ],
    benefits: [
      "Improved efficiency in legal practice management",
      "Faster and more accurate e-discovery processes",
      "Enhanced client communication and transparency",
      "Reduced cognitive load for legal professionals",
      "More accessible and effective legal services"
    ]
  }
];
