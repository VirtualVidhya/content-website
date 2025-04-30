export const SITE = {
  website: "https://learn.vvidhya.com/",
  author: "kharva",
  profile: "https://www.vvidhya.com/",
  desc: "Learn top computer courses at V.Vidhya in Surat. From programming to graphic design, boost your skills and indulge your creativity to do real work with the help of technology.",
  title: "V.Vidhya",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 20,
  postPerPage: 20,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: false, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: false,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Calcutta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
