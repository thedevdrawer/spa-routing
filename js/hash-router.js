const pageTitle = "JS Single Page Application Router";
// create an object that maps the url to the template, title, and description
const routes = {
	404: {
		template: "/templates/404.html",
		title: "404 | " + pageTitle,
		description: "Page not found",
	},
	"/": {
		template: "/templates/index.html",
		title: "Home | " + pageTitle,
		description: "This is the home page",
	},
	about: {
		template: "/templates/about.html",
		title: "About Us | " + pageTitle,
		description: "This is the about page",
	},
	contact: {
		template: "/templates/contact.html",
		title: "Contact Us | " + pageTitle,
		description: "This is the contact page",
	},
};

// create a function that watches the url and calls the urlLocationHandler
const locationHandler = async () => {
	// get the url path, replace hash with empty string
	var location = window.location.hash.replace("#", "");
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = "/";
	}
	// get the route object from the routes object
	const route = routes[location] || routes["404"];
	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());
	// set the content of the content div to the html
	document.getElementById("content").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};
// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
