/**
 * Austin ISD feeder pattern for Clarksville, plus private context. Rankings are
 * cited with their source and year on the page; school assignments can change,
 * so the page tells buyers to verify attendance with Austin ISD for a specific
 * address before relying on it.
 */
export type School = {
  name: string;
  level: string;
  address?: string;
  grades?: string;
  highlights: string[];
};

export const SCHOOLS: School[] = [
  {
    name: "Mathews Elementary",
    level: "Elementary (Austin ISD)",
    address: "906 West Lynn Street",
    grades: "PK-6",
    highlights: [
      "Ranked #435 of 8,096 Texas schools, top 10 percent, by Public School Review (2026)",
      "Public School Review reports 80 to 84 percent reading proficiency versus a 51 percent Texas average",
      "SchoolDigger ranks it 561st of 4,651, better than 87.9 percent of Texas elementary schools",
      "Niche grade A and a 10 of 10 GreatSchools rating",
      "Walkable from much of Clarksville, on West Lynn at the heart of the corridor",
    ],
  },
  {
    name: "O. Henry Middle School",
    level: "Middle (Austin ISD)",
    address: "2610 West 10th Street",
    grades: "6-8",
    highlights: [
      "The neighborhood's Austin ISD middle school in the Clarksville feeder pattern",
      "Serves much of central and west-central Austin",
    ],
  },
  {
    name: "Austin High School",
    level: "High (Austin ISD)",
    address: "1715 West Cesar Chavez Street",
    grades: "9-12",
    highlights: [
      "The comprehensive Austin ISD high school for the Clarksville feeder",
      "On the lake near downtown, a short drive from the neighborhood",
    ],
  },
];

export const PRIVATE_NOTE =
  "Families also draw on private options, including St. Stephen's Episcopal School and others around west Austin. Attendance zones can change; confirm the assignment for a specific address with Austin ISD before you rely on it.";
