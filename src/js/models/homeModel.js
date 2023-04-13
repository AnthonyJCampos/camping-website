import camper1 from '../../img/home/testimonials/camper-1.jpg';
import camper2 from '../../img/home/testimonials/camper-2.jpg';
import camper3 from '../../img/home/testimonials/camper-3.jpg';
import camper4 from '../../img/home/testimonials/camper-4.jpg';

/** CAMPER testimonial Data */
const campers = [
  {
    camperName: 'Amanda Halverson',
    camperRole: 'First Time Camper',
    camperText: `Camp Sus is made up of some of the most welcoming and friendly
people I've met. The weekend is about
relaxing and enjoying nature, surrounded by good people. You
just might meet your soulmate amongst them.`,
    camperImg: camper1,
  },

  {
    camperName: 'Brian Duff',
    camperRole: 'Long Time Camper',
    camperText: `I can truly disconnect from the world and connect with nature. I've been a camper for years and each trip is filled with new adventures and memories with old and new friends. The hosts truly create a community of inclusivity and joy.`,
    camperImg: camper2,
  },

  {
    camperName: 'Ronnie Kwong',
    camperRole: 'Long Time Camper',
    camperText: `I've been attending this camping trip for six years now, and I can honestly say it's the highlight of my year. The camaraderie and outdoor activities are truly second to none, and the beautiful location only adds to the experience.`,
    camperImg: camper3,
  },
  {
    camperName: 'Junior Castro',
    camperRole: '2nd Year Camper',
    camperText: `Camp Sus is the perfect getaway for my family. We've attended twice, and each time we've had the most amazing experiences. My son, in particular, loves it here, and he always looks forward to it every year. Thank you, Camp Sus!`,
    camperImg: camper4,
  },
];

export const getTestimonial = function (camperPos = 0) {
  if (camperPos < 0) {
    camperPos = campers.length - 1;
  }

  if (camperPos >= campers.length) {
    camperPos = 0;
  }

  return {
    campersCount: campers.length,
    camperPos: camperPos,
    camperData: campers[camperPos],
  };
};
