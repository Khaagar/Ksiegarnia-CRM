import HomeController from './homeController';
import HeaderService from './homeService';

module.exports = {
    template: require('./home.html'),
    controller: HomeController,
    controllerAs: 'hm'
}
