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

const $ = (s) => [...document.querySelectorAll(s)];

$('nav.menu ul li a').forEach(link => {
    const url = app.links.find(e => e.includes(link.innerText.toLowerCase()));
    if (!!url) {
        link.setAttribute('href', url)
    }
});

