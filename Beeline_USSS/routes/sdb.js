

/*
 * GET //sdb/changeOwnerService
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: soc, ctn, clientType
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * soc(type: string) - query parameter - Новый SOC владельца
 * ctn(type: string) - query parameter - Номер CTN
 * clientType(type: string) - query parameter - Тип клиентского устройства
 */
exports.getSdbChangeownerservice = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('soc', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sdb/delete
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, ctnExtra
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, расшаривающего интернет (главный номер)
 * ctnExtra(type: string) - query parameter - Номер абонента, отключающего услугу (дополнительный номер)
 */
exports.getSdbDelete = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnMain', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnExtra', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sdb/deleteSubscriber
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, ctnExtra
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, отключающего дополнительный номер (главный номер)
 * ctnExtra(type: string) - query parameter - Номер абонента, которого отключают от услуги (дополнительный номер)
 */
exports.getSdbDeletesubscriber = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnMain', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnExtra', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sdb/info
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - номер CTN
 * shareType(type: string) - query parameter - Тип расшариваемой услуги
 */
exports.getSdbInfo = function(req, res) {
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
 * GET //sdb/owner
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер абонента
 */
exports.getSdbOwner = function(req, res) {
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
 * GET //sdb/replaceSubscriber
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, ctnExtraNew, ctnExtraOld
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, отправляющего приглашение (главный номер)
 * ctnExtraNew(type: string) - query parameter - Номер, на который необходимо осуществить замену (отправить приглашение)
 * ctnExtraOld(type: string) - query parameter - Номер, который необходимо заменить (отключить услугу)
 */
exports.getSdbReplacesubscriber = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnMain', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnExtraNew', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnExtraOld', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};