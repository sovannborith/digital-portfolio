// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./pageInfo";
import experiences from "./experiences";
import projects from "./projects";
import skills from "./skills";
import socials from "./socials";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([pageInfo, experiences, projects, skills, socials]),
});
