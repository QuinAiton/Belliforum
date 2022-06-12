export default {
  name: "team_members",
  title: "Team Members",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Member Photo",
      type: "image",
      description: "Please provide a headshot here.",
    },
    {
      name: "title",
      title: "Name",
      type: "string",
      description: "Name of team member?",
    },
    {
      name: "position",
      title: "Job Title",
      type: "string",
      description: "Where is their position at the company?",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "What would you like people to know about this member",
    },
  ],
};
