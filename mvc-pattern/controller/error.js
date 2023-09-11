exports.error_404 = (request, response, next) => {
    response.status(401).render('404', { pageTitle: 'Page Not Found' });
}