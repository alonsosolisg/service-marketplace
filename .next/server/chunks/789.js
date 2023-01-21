"use strict";
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 9789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ getAllServices)
});

;// CONCATENATED MODULE: ./content/services/index.json
const services_namespaceObject = JSON.parse('[{"id":"1410474","type":"Web Development","title":"React Webpage Development - E-Commerce, Fintech and Landing Pages","description":"I will develop a custom react application for you. My specialities are E-Commerce, Fintech and Landing Pages","coverImage":"/developer.png","author":"Mark Poll","slug":"react-web-development-service","wsl":["A brand new and functional react app","A modern UI with responsive components","Unlimited corrections until the final version is delivered"],"createdAt":""},{"id":"1331625","type":"Gardening","title":"Gardening Service to make your Plants look Beautiful","description":"I will plant trees, bushes, flowers or any desired plant as well as cutting the ones that are dead.","coverImage":"/gardener.png","author":"Randy Gandy","slug":"gardening-service","wsl":["Beutiful Garden","Sprinkled Plants","Colorful home landscape"],"createdAt":""},{"id":"1112431","type":"Consultancy","title":"Business Consultancy for Start-Ups","description":"I will help you with an scaling business plan and also with business idea pivoting through the use of multiple tools","coverImage":"/businesswoman.png","author":"Emilia Scholz","slug":"business-consultancy-service","wsl":["Business tools applied to your idea","Business idea recommendations on pivoting or changing features","Business plan that will help the business scale"],"createdAt":""},{"id":"985237","type":"Music Production","title":"Song Writing, Production, Mixing and Mastering","description":"I will wite, produce mix and master your desired song","coverImage":"/producer.png","author":"Rio Goldberg","slug":"music-production-service","wsl":["A fully produced track in the best quality","Your creative imputs inside a proffesional project","Unlimited modifications before the final version is delivered"],"createdAt":""},{"id":"925927","type":"Fitness","title":"Personal Training and Nutritional Plan Advising","description":"I will help you get to your desired fitness goals through training and the implementation of a nutritional plan","coverImage":"/trainer.png","author":"Dan Marker","slug":"personal-training-service","wsl":["Achieve your fitness goals","Stay healthier overall","Establish a suitable nutritional plan"],"createdAt":""},{"id":"896464","type":"Cooking","title":"Personal Cheff for Events","description":"I will cook any dishes for you in special events such as parties or weddings","coverImage":"/cheff.png","author":"Marcus Rall","slug":"personal-cheff-service","wsl":["Your favorite dishes","Quality food served to your guests","Exquisite taste that everyone will enjoy"],"createdAt":""},{"id":"456657","type":"Production","title":"Content Production - Filming, Editing and Engaging","description":"I will help you produce your content by filming, editing and engaging with your audience","coverImage":"/editor.png","author":"Neo Fritz","slug":"content-production-service","wsl":["Your content produced","Proffessional quality video and audio editing","Audience Engagement Focused"],"createdAt":""},{"id":"847859","type":"Photography","title":"Photography for events or photo shootings","description":"I will take pictures in events or photoshootings","coverImage":"/cameraman.png","author":"Ronald Chang","slug":"photography-service","wsl":["Proffesional picture","Various sets of them so you look pretty","High quality editing"],"createdAt":""}]');
;// CONCATENATED MODULE: ./content/services/fetcher.js

const getAllServices = ()=>{
    return {
        data: services_namespaceObject,
        serviceMap: services_namespaceObject.reduce((a, s, i)=>{
            a[s.id] = s;
            a[s.id].index = i;
            return a;
        }, {})
    };
};


/***/ })

};
;