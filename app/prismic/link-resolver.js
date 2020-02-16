export default function (doc) {
  // Used for single page types
  // if (doc.type === 'home') {
  //   return '/';
  // }

  if (doc.type === "project") {
    return "/project/" + doc.uid;
  }

  return '/'
}
