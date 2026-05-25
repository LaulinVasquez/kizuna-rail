import {
  getAllRoutes,
  getListOfRegions,
  getListOfSeasons,
} from "../../models/model.js";

export default async (req, res) => {
  const regions = await getListOfRegions();
//   Change this variable to let so you can make changes const variable won't let you do it
  let routes = await getAllRoutes(); 
  const seasons = await getListOfSeasons();

  const { region , season } = req.query;

  //   Filter by region
  if (region) {
    routes = routes.filter(
      route => route.region.toLowerCase() === region.toLowerCase()
    );
  }
  //   Filter by Best season season
  if (season) {
    routes = routes.filter(
        route => route.bestSeason.toLowerCase() === season.toLowerCase());
  }

  res.render("routes/list", {
    title: "Scenic Train Routes",
    regions,
    routes,
    seasons,
    selectedRegion: region || "",
    selectedSeason: season || ""
  });
};
