/**
 * List of projects:
 * 
 * Glass Tower
 * Vantage Point
 * Linden Summer Collection
 * Say Cheese
 * Bless Your Hearts
 * Moisturizer Set
 * Yolk Tote
 * Sunrise
 * Bathtub Poster
 * Post Cards
 * Home Decor Series
 * Pencil Case
 */

interface IProject {
    path: string;
    name: string;
    description: string;
    image: string;
}

export enum ProjectName {
    GlassTower = "Glass Tower",
    VantagePoint = "Vantage Point",
    LindenSummerCollection = "Linden Summer Collection",
    SayCheese = "Say Cheese",
    BlessYourHearts = "Bless Your Hearts",
    MoisturizerSet = "Moisturizer Set",
    YolkTote = "Yolk Tote",
    Sunrise = "Sunrise",
    BathtubPoster = "Bathtub Poster",
    PostCards = "Post Cards",
    HomeDecorSeries = "Home Decor Series",
    PencilCase = "Pencil Case"
}

export const Projects: IProject[] = [
    {
        path: "glass-tower",
        name: ProjectName.GlassTower,
        description: "",
        image: ""
    },
    {
        path: "vantage-point",
        name: ProjectName.VantagePoint,
        description: "",
        image: ""
    },
    {
        path: "linden-summer-collection",
        name: ProjectName.LindenSummerCollection,
        description: "",
        image: ""
    },
    {
        path: "say-cheese",
        name: ProjectName.SayCheese,
        description: "",
        image: ""
    },
    {
        path: "bless-your-hearts",
        name: ProjectName.BlessYourHearts,
        description: "",
        image: ""
    },
    {
        path: "moisturizer-set",
        name: ProjectName.MoisturizerSet,
        description: "",
        image: ""
    },
    {
        path: "yolk-tote",
        name: ProjectName.YolkTote,
        description: "",
        image: ""
    },
    {
        path: "sunrise",
        name: ProjectName.Sunrise,
        description: "",
        image: ""
    },
    {
        path: "bathtub-poster",
        name: ProjectName.BathtubPoster,
        description: "",
        image: ""
    },
    {
        path: "post-cards",
        name: ProjectName.PostCards,
        description: "",
        image: ""
    },
    {
        path: "home-decor-series",
        name: ProjectName.HomeDecorSeries,
        description: "",
        image: ""
    },
    {
        path: "pencil-case",
        name: ProjectName.PencilCase,
        description: "",
        image: ""
    }
];