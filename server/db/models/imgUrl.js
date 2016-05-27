var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var imgUrlsSchema = new Schema({
    url: String
});

var ImgUrl = mongoose.model('ImgUrl', imgUrlsSchema);

/** Adding dummy url data just for testing
*   Served at the /test endpoint
*/
var sampleData = [
    { url: "https://s-media-cache-ak0.pinimg.com/736x/4e/5c/f7/4e5cf7d4ccb9c59b6620a9c71944d51e.jpg"},
    { url: "http://assets.fodors.com/destinations/54494/alamo-square-san-francisco-california-usa_main.jpg" },
    { url: "https://pixabay.com/static/uploads/photo/2015/03/26/09/48/golden-gate-bridge-690346_960_720.jpg" } , 
    { url: "http://www.wheretraveler.com/sites/default/files/styles/main_slider/public/San-Francisco-shutterstock_121582312.jpg?itok=sGTj8sv2" },
    { url: "http://www.dog-learn.com/dog-breeds/pomeranian/images/pomeranian-u6.jpg" },
    { url: "http://animalsbreeds.com/wp-content/uploads/2014/11/Pomeranian-11.jpg" }
];

for (var i = 0; i < sampleData.length; i++) {
    var newImg = new ImgUrl({
        url: sampleData[i].url
    });

    newImg.save(function (err, imgInst) {
        if (err) {
            console.error.bind(console, 'Cannot write: ' + imgInst + ', to database.')
        }
    });
}

module.exports = ImgUrl;