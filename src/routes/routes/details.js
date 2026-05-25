import { getRouteById, getSchedulesByRoute } from '../../models/model.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getRouteById(routeId);
    details.schedules = await getSchedulesByRoute(routeId);
    // console.log(details.operatingMonths);

    res.render('routes/details', { 
        title: 'Route Details',
        details
    });
};