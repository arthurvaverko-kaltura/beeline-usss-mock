

/*
 * GET //rp/
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: aNumber, bNumber
 * client(type: string) - query parameter - Наименование системы, использующей API
 * aNumber(type: string) - query parameter - MSISDN абонента
 * bNumber(type: string) - query parameter - b-номер действия
 */
exports.getRp = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('aNumber', 'Invalid query parameter').notEmpty();
	req.checkQuery('bNumber', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};