

/*
 * GET //action/check
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, actionId, pricePlan, effDate
 * ctn(type: string) - query parameter - Номер CTN
 * actionId(type: string) - query parameter - Идентификатор акции
 * pricePlan(type: string) - query parameter - Сок тарифного плана
 * effDate(type: DateWrapper) - query parameter - Дата планируемого подключения к акции
 */
exports.getActionCheck = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('actionId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //action/connect
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, actionId, pricePlan, effDate
 * ctn(type: string) - query parameter - Номер CTN
 * actionId(type: string) - query parameter - Идентификатор акции
 * pricePlan(type: string) - query parameter - Сок тарифного плана
 * effDate(type: DateWrapper) - query parameter - Дата планируемого подключения к акции
 */
exports.postActionConnect = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('actionId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};