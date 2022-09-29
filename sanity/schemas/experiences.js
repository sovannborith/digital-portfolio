export default {
  title: "Experiences",
  name: "experiences",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "startDate",
      title: "Date Started",
      type: "date",
    },
    {
      name: "endDate",
      title: "Date Ended",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "Is Currently Working Here",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },

    {
      name: "point",
      title: "Point",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
