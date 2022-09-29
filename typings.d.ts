interface ISanityBoty {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface IImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends ISanityBoty {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: IImage;
  name: string;
  phoneNumber: string;
  profilePic: IImage;
}

export interface Technology extends ISanityBoty {
  _type: "skills";
  image: IImage;
  progress: number;
  title: string;
}

export interface Skill extends ISanityBoty {
  _type: "skills";
  image: IImage;
  progress: number;
  title: string;
}

export interface Experience extends ISanityBoty {
  _type: "experiences";
  company: string;
  companyImage: IImage;
  startDate: date;
  endDate: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  point: string[];
  technologies: Technology[];
}

export interface Project extends ISanityBoty {
  _type: "projects";
  image: IImage;
  linkToBuild: string;
  title: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends ISanityBoty {
  _type: "socials";
  title: string;
  url: string;
}
