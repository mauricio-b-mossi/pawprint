export default {
  name: "getInvolved",
  title: "Get Involved",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      description: "Images for the sliders per section",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
