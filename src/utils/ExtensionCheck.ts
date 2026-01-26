import { FILETYPE } from '../constants/etc';

export const mediaCheck = (filename: string) => {
  const filenameArray = filename.split('.');
  const lastElement = filenameArray[filenameArray.length - 1];

  return FILETYPE[lastElement];
};
