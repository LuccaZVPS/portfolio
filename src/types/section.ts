export interface ISection {
  about: ISectionInfo;
  skill: ISectionInfo;
  project: ISectionInfo;
  contact: ISectionInfo;
}
interface ISectionInfo {
  title: string;
  secundary: string;
}
