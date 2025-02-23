import image from './image.png';
import percenter from './5er.png';
import FTMO from './2.png';
import Fundpip from './fundpip.png';
import Fundnext from './4.png';
import maven from './maven.png';

export const images = {
    image,
    percenter,
    FTMO,
    Fundpip,
    Fundnext,
    maven
};

export const firms = [
  {
    logo: images.percenter,
    name: "The5ers",
    price: "$489",
    accountSize: "$489",
    profitSplit: "$489",
    profitTarget: "$489",
    dailyLoss: "$489",
    drawdown: "$489",
  },
  {
    logo: images.FTMO,
    name: "FTMO",
    price: "$489",
    accountSize: "$489",
    profitSplit: "$489",
    profitTarget: "$489",
    dailyLoss: "$489",
    drawdown: "$489",
  },
  {
    logo: images.Fundpip,
    name: "FundingPips",
    price: "$489",
    accountSize: "$489",
    profitSplit: "$489",
    profitTarget: "$489",
    dailyLoss: "$489",
    drawdown: "$489",
  },
  {
    logo:  images.Fundnext,
    name: "FundedNext",
    price: "$489",
    accountSize: "$489",
    profitSplit: "$489",
    profitTarget: "$489",
    dailyLoss: "$489",
    drawdown: "$489",
  },
];

 export const reviews = [
  {
    id: 1,
    logo: images.percenter, // Replace with actual image
    name: "The5%ers",
    rating: 4.8,
    totalReviews: "21K Total Reviews",
  },
  {
    id: 2,
    logo: images.FTMO, // Replace with actual image
    name: "FTMO",
    rating: 4.8,
    totalReviews: "21K Total Reviews",
  },
  {
    id: 3,
    logo: images.Fundpip, // Replace with actual image
    name: "FundingPips",
    rating: 4.8,
    totalReviews: "21K Total Reviews",
  },
];

export const tradingFirms = [
    {
        name: "The5%ers",
        logo: images.percenter,
        description: "This is firm description which can go up to 2-3 lines.",
        rating: 5,
    },
    {
        name: "FTMO",
        logo: images.FTMO,
        description: "This is firm description which can go up to 2-3 lines.",
        rating: 3,
    },
    {
        name: "FundingPips",
        logo: images.Fundpip,
        description: "This is firm description which can go up to 2-3 lines.",
        rating: 4.8,
        reviews: "21K Total Reviews",
    },
    {
        name: "FundedNext",
        logo: images.Fundnext,
        description: "This is firm description which can go up to 2-3 lines.",
        rating: 4,
        reviews: "21K Total Reviews",
    },
    {
        name: "Maven",
        logo: images.maven,
        description: "This is firm description which can go up to 2-3 lines.",
        rating: 5,
    },
];
