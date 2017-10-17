

/*
 * GET //de/
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getDe = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //de/
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.putDe = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};