const generateHTML = (pageName) => {
  return `<h1>${pageName} Banned</h1>`;
};

fetch('https://www.usom.gov.tr/url-list.txt')
	.then(function(response) {
		return response.text();
	})
	.then(function(data) {
		var urls = data.split('\n');
		var currentUrl = window.location.hostname;
		urls.forEach(function(url) {
			if (url === currentUrl) {
				alert('Bu siteye erişim engellenmiştir.');
				document.body.innerHTML = generateHTML(url);
			}
		});
	}
);
