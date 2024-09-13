export interface ISection {
  about: ISectionInfo;
  skill: ISectionInfo;
  project: ISectionInfo;
  contact: ISectionInfo;
  experience: ISectionInfo;
}
interface ISectionInfo {
  title: string;
  secundary: string;
}
