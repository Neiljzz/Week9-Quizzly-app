const MainDashboardRouter = require('express').Router();

MainDashboardRouter.route('/')
    .get(require('./dashboard/dashboard.view'))


module.exports = MainDashboardRouter