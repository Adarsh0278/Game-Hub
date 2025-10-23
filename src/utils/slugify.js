export const slugify = text =>
  text.toString().toLowerCase().trim().replace(/[\s&/\\#,+()$~%.'":*?<>{}]/g, "-");
