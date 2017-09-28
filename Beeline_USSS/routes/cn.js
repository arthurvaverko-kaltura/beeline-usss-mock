

/*
 * GET //cn/
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ruleId, pattern, ctn, clientType, defCode
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ruleId(type: string) - query parameter - Идентификатор правила подбора
 * pattern(type: string) - query parameter - Параметр правила (например, маска)
 * ctn(type: string) - query parameter - Номер CTN
 * clientType(type: string) - query parameter - Канал запроса
 * defCode(type: string) - query parameter - Def код запроса
 */
exports.getCn = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ruleId', 'Invalid query parameter').notEmpty();
	req.checkQuery('pattern', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('clientType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //cn/
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: request.getCtnA, request.getCtnB, request.getFeatureCode, request.getCost, clientType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * clientType(type: string) - query parameter - Канал запроса
 */
exports.putCn = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};