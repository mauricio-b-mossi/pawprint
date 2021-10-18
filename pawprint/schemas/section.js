export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error("A title of min. 10 characters is required"),
        Rule.max(200).warning("Shorter text is usually displayed better"),
      ],
    },
    {
      name: "section",
      title: "Section",
      description: "Page in the website were section will be displayed",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "News", value: "news" },
          { title: "Arts", value: "arts" },
          { title: "Sports", value: "sports" },
          { title: "Pop culture", value: "pop" },
          { title: "Food and Travel", value: "food" },
        ],
        layout: "radio",
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "section",
      media: "image",
    },
  },
};
