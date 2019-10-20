const App = function () {
    this.websites = ['onet', 'wp', 'facebook'];
    this.links = [];
};


App.prototype.generateLinks = function () {
    this.links = this.websites.map(website => `https://${website}.com`);
};


let app = new App();
app.generateLinks();
console.log(app.links);

$('nav.menu ul li a').each(function () {
    const url = app.links.find(e => e.includes($(this)[0].innerText.toLowerCase()));
    if (!!url) {
        $(this)[0].setAttribute('href', url)
    }
});

