

/*
 * GET //localization/
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: key, locale
 * client(type: string) - query parameter - Наименование системы, использующей API
 * key(type: string) - query parameter - Ключ локализации
 * locale(type: string) - query parameter - Локаль (ru_RU)
 */
exports.getLocalization = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('key', 'Invalid query parameter').notEmpty();
	req.checkQuery('locale', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //localization/batch
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: concatParams, elem.getKey, elem.getLocale
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.putLocalizationBatch = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};