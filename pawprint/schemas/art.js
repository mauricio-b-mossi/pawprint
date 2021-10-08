export default {
  name: "art",
  title: "Art",
  type: "document",
  fields: [
    {
      name: "sliderText",
      title: "SliderTitle",
      description:
        "Title that will appear over the slider 'Welcome to the arts'",
      type: "string",
    },
    {
      name: "sliderImages",
      title: "Slider Images",
      description: "Images on the auto slider",
      type: "array",
      of: [{ type: "image" }],
    },

    {
      name: "cardTitle",
      title: "Card Section Title",
      type: "string",
    },
    {
      name: "cardDescription",
      title: "Card Section Description",
      type: "text",
    },

  ],
};
