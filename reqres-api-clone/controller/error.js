exports.error_404 = (request, response, next) => {
    response.status(404).render('404', { pageTitle: '404 Not Found' });
}