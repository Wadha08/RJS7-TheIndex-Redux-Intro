/**
 * Add your actions here
 */
const ADDAUTHOR = "ADDAUTHOR";
const DELETEAUTHOR = "DELETEAUTHOR";

export const addAuthor = () => {
  return {
    type: ADDAUTHOR
  };
};

export const deleteAuthor = authorid => {
  return {
    type: DELETEAUTHOR,
    auhtorID: authorid
  };
};
