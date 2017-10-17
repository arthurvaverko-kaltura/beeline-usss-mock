

/*
 * GET //offer/accept
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, type, version, acceptType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя API USSS
 * type(type: string) - query parameter - Тип оферты
 * version(type: integer) - query parameter - Версия
 * acceptType(type: string) - query parameter - Тип принятия оферты XBR (для type: 'HE')
 */
exports.getOfferAccept = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	req.checkQuery('version', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //offer/check
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, type, locale, offerText
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя API USSS
 * type(type: string) - query parameter - Тип оферты
 * locale(type: string) - query parameter - Локаль текста оферты (ru_RU)
 * offerText(type: boolean) - query parameter - Запрос на возврат текста оферты (true – возвращать, false - нет)
 */
exports.getOfferCheck = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	req.checkQuery('locale', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //offer/sendAnswerToSpss
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, campId, subgroupId, channelType, response
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * campId(type: integer) - query parameter - Идентификатор целевой кампании
 * subgroupId(type: integer) - query parameter - Идентификатор подгруппы/предложения целевой кампании
 * channelType(type: integer) - query parameter - Канал предложения:
 * response(type: string) - query parameter - Ответ абонента на предложение
 * socCode(type: string) - query parameter - Идентификатор предложения (для услуг/тарифов соответствует коду сока)
 * employeeNumber(type: string) - query parameter - Табельный номер в системе ГЕСП
 */
exports.putOfferSendanswertospss = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('campId', 'Invalid query parameter').notEmpty();
	req.checkQuery('subgroupId', 'Invalid query parameter').notEmpty();
	req.checkQuery('channelType', 'Invalid query parameter').notEmpty();
	req.checkQuery('response', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};