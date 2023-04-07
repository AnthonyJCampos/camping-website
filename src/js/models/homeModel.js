/** CAMPER testimonial Data */
const campers = [
  {
    camperName: 'Amanda Halverson',
    camperRole: 'First Time Camper',
    camperText: `Camp Sus is made up of some of the most welcoming and friendly
people I've had the pleasure of meeting. The weekend is about
relaxing and enjoying nature, surrounded by good people. And you
just might meet your soulmate amongst them.`,
    camperImg: 'camper-1.jpg',
  },

  {
    camperName: 'Brian Duff',
    camperRole: 'Long Time Camper',
    camperText: `I can truly disconnect from the world and connect with nature. I've been a camper for years and each trip is filled with new adventures and memories with old and new friends. The hosts truly create a community of inclusivity and joy.`,
    camperImg: 'camper-2.jpg',
  },
];

/** CAMPERS STATE */
export const testimonialState = {
  camperPos: 0,
  camperName: campers[0].camperName,
  camperRole: campers[0].camperRole,
  camperText: campers[0].camperText,
  camperImg: campers[0].camperImg,
};
