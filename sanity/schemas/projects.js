export default {
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the project",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },

    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },

    {
      name: "linkToBuild",
      title: "Link to Build",
      type: "url",
    },
  ],
};
