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
    name: string;
    description: string;
    image: string;
}

export enum ProjectName {
    TworiiFurniture = "Tworii Furniture",
    BrandsWalkBranding = "BrandsWalk Branding",
    DotSocks = "Dot Socks",
    LacmaAudioGuide = "LACMA Audio Guide",
}

export const Projects: IProject[] = [
    {
        path: "tworii-furniture",
        name: ProjectName.TworiiFurniture,
        description: "",
        image: ""
    },
    {
        path: "brandswalk-branding",
        name: ProjectName.BrandsWalkBranding,
        description: "",
        image: ""
    },
    {
        path: "dot-socks",
        name: ProjectName.DotSocks,
        description: "",
        image: ""
    },
    {
        path: "lacma-audio-guide",
        name: ProjectName.LacmaAudioGuide,
        description: "",
        image: ""
    },
];