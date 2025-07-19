/**
 * List of projects:
 *
 * - Tworii Furniture
 * - BrandsWalk Branding
 * - Dot Socks
 * - LACMA Audio Guide
 */

interface IProject {
  path: string;
  description: string;
  image: string;
}

export enum ProjectName {
  TworiiFurniture = "Tworii Furniture",
  BrandsWalkBranding = "BrandsWalk Branding",
  DotSocks = "Dot Socks",
  LacmaAudioGuide = "LACMA Audio Guide",
}

export const ProjectInfo: Record<ProjectName, IProject> = {
  [ProjectName.TworiiFurniture]: {
    path: "tworii-furniture",
    description: "Brief description of Tworii Furniture project.",
    image: "",
  },
  [ProjectName.BrandsWalkBranding]: {
    path: "brandswalk-branding",
    description: "Brief description of BrandsWalk Branding project.",
    image: "",
  },
  [ProjectName.DotSocks]: {
    path: "dot-socks",
    description: "Brief description of Dot Socks project.",
    image: "",
  },
  [ProjectName.LacmaAudioGuide]: {
    path: "lacma-audio-guide",
    description: "Brief description of LACMA Audio Guide project.",
    image: "",
  },
};