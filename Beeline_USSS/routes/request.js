

/*
 * PUT //request/activateURC
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ekoCardSecretCode
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * ekoCardSecretCode(type: string) - query parameter - Секретный код карты EKO
 * ctn(type: string) - query parameter - Номер CTN абонента (обязателен для мобильных пользователей)
 */
exports.putRequestActivateurc = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ekoCardSecretCode', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //request/bonusTransfer
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnFrom, ctnTo, sum, balanceType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctnFrom(type: string) - query parameter - Номер CTN - инициатор перевода
 * ctnTo(type: string) - query parameter - Номер CTN - получатель перевода
 * sum(type: integer) - query parameter - Сумма перевода
 * balanceTransferType(type: string) - query parameter - Тип баланса, с которого осуществляется перевод: bonus - перевод бонусов NLP (значение по умолчанию)
 */
exports.postRequestBonustransfer = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnTo', 'Invalid query parameter').notEmpty();
	req.checkQuery('sum', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/callForward
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getRequestCallforward = function(req, res) {
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
 * PUT //request/callForward/edit
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.putRequestCallforwardEdit = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //request/cancelFutureRequest
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, requestType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * requestType(type: string) - query parameter - Тип отменяемого запроса
 */
exports.postRequestCancelfuturerequest = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('requestType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/caseStatus
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, requestId, reactionType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * requestId(type: integer) - query parameter - Идентификатор заявки в USSS, по которой создавался case в CRM
 * reactionType(type: string) - query parameter - Тип действия, выбранный абонентом
 */
exports.putRequestCasestatus = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('requestId', 'Invalid query parameter').notEmpty();
	req.checkQuery('reactionType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE //request/changeBlackList
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, blackListNumber
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * blackListNumber(type: string) - query parameter - Номер телефона для удаления из Чёрного списка
 */
exports.deleteRequestChangeblacklist = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('blackListNumber', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/changeBlackList
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, blackListNumber
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * blackListNumber(type: string) - query parameter - Номер телефона для добавления в Чёрный список
 */
exports.putRequestChangeblacklist = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('blackListNumber', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/changeParamsConnectionBonusService
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, soc
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * soc(type: string) - query parameter - Код услуги из Ensemble
 * payType(type: com.amdocs.css.vip.offering.data.ServicePayType) - query parameter - Тип оплаты: <br>bonus - оплата за бонусы;<br>money - оплата за деньги.<br>Значение по умолчанию - money
 * periodNumber(type: integer) - query parameter - Количество периодов, на которые подключается услуга с оплатой за бонусы (анализируется при вызове метода с payType:'bonus')
 * periodType(type: ru.atc.uss.util.TimeIntervalType) - query parameter - Тип периода:<br>day - сутки;<br>month - месяц
 */
exports.putRequestChangeparamsconnectionbonusservice = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('soc', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE //request/changePostpaidLimit
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, ban
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * ban(type: integer) - query parameter - Номер договора
 */
exports.deleteRequestChangepostpaidlimit = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/changePostpaidLimit
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, ban, nrtbcBalance, ctnNotifPoint
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * ban(type: integer) - query parameter - Номер договора
 * nrtbcBalance(type: integer) - query parameter - Порог расходов, в валюте Абонента
 * ctnNotifPoint(type: string) - query parameter - CTN, на который будут приходить уведомления о превышении порога по договору (обязателен при вызове метода с параметром ban).
 */
exports.putRequestChangepostpaidlimit = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('nrtbcBalance', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/changePricePlan
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, pricePlan, campId, subgroupId, channelType
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * pricePlan(type: string) - query parameter - Код тарифного плана из Ensemble
 * campId(type: integer) - query parameter - Идентификатор целевой кампании
 * subgroupId(type: integer) - query parameter - Идентификатор подгруппы/предложения целевой кампании.
 * channelType(type: integer) - query parameter - Канал предложения.
 * payType(type: com.amdocs.css.vip.offering.data.ServicePayType) - query parameter - Тип оплаты: <br>bonus - оплата за бонусы;<br>money - оплата за деньги.<br>Значение по умолчанию - money
 * crmCase(type: boolean) - query parameter - Создавать ли CRM кейс в случае ошибки подключения.
 * Validation-Settings(type: string) - header parameter - Настройки валидации
 * discountName(type: string) - query parameter - SOC скидки на АП тарифа
 * employeeNumber(type: string) - query parameter - Табельный номер в системе ГЕСП
 */
exports.getRequestChangepriceplan = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('pricePlan', 'Invalid query parameter').notEmpty();
	req.checkQuery('channelType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/changePricePlan
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, pricePlan
 * ctn(type: string) - query parameter - Номер CTN
 * pricePlan(type: string) - query parameter - Код тарифного плана из Ensemble
 * payType(type: com.amdocs.css.vip.offering.data.ServicePayType) - query parameter - Тип оплаты: <br>bonus - оплата за бонусы;<br>money - оплата за деньги.<br>Значение по умолчанию - money
 * presetId(type: string) - query parameter - Идентификатор получаемого пресета
 * ownerServiceName(type: string) - query parameter - Новый SOC владельца
 * discountName(type: string) - query parameter - SOC скидки на АП тарифа
 */
exports.putRequestChangepriceplan = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('pricePlan', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/changeService
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, serviceName
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * serviceName(type: string) - query parameter - Код услуги из Ensemble
 */
exports.putRequestChangeservice = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('serviceName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/connectVipStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getRequestConnectvipstatus = function(req, res) {
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
 * GET //request/createBlackListCallsRequest
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getRequestCreateblacklistcallsrequest = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/createConvergentRequest
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин FTTB-пользователя USSS (FTTB/номер или буквенно-цифровой логин)
 */
exports.putRequestCreateconvergentrequest = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //request/delFeatureParam
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, serviceName
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * serviceName(type: string) - query parameter - Код услуги из Ensemble
 */
exports.postRequestDelfeatureparam = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('serviceName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/invoiceAddr
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ban, invoiceEmail, ben, emailRegular
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ban(type: integer) - query parameter - Номер договора
 * invoiceEmail(type: string) - query parameter - Email адрес доставки счетов
 * ben(type: integer) - query parameter - Номер группы счетов
 * emailRegular(type: boolean) - query parameter - Изменение признака регулярной доставки счетов по BEN на email. true - включить доставку (значение по умолчанию), false - отключить доставку.
 */
exports.getRequestInvoiceaddr = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ban', 'Invalid query parameter').notEmpty();
	req.checkQuery('invoiceEmail', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/list
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие:  для V1.0 - login, requestId, type, subType, status, needFileSize для V2.0 - login, requestId, type, subType, status, dateFrom.
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * dateFrom(type: DateWrapper) - query parameter - Дата, начиная с которой будет осуществляться выбор уведомлений для отображения (формат: YYYY-MM-DDTHH:mm:ss). По умолчанию - текущая дата/время минус три месяца
 * dateTo(type: DateWrapper) - query parameter - Дата, до которой будет осуществляться выбор уведомлений для отображения (формат: YYYY-MM-DDTHH:mm:ss). По умолчанию - текущая дата/время
 */
exports.putRequestList = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/list/xls
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие:  для V1.0 - login, requestId, type, subType, status, needFileSize для V2.0 - login, requestId, type, subType, status, dateFrom.
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * json(type: string) - query parameter - Фильтр запросов RequestsDO
 * dateFrom(type: DateWrapper) - query parameter - Дата, начиная с которой будет осуществляться выбор уведомлений для отображения (формат: YYYY-MM-DDTHH:mm:ss). По умолчанию - текущая дата/время минус три месяца
 * dateTo(type: DateWrapper) - query parameter - Дата, до которой будет осуществляться выбор уведомлений для отображения (формат: YYYY-MM-DDTHH:mm:ss). По умолчанию - текущая дата/время
 */
exports.getRequestListXls = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/pcl
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, amount
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * amount(type: integer) - query parameter - Пользовательский размер ИКЛ
 */
exports.putRequestPcl = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('amount', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/postpaidDetail
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, billDate
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * billDate(type: DateWrapper) - query parameter - Дата выставления счета
 * login(type: string) - query parameter - Логин пользователя USSS
 * ben(type: integer) - query parameter - Номер группы счетов на договоре
 * sendChannel(type: string) - query parameter - Способ отправки файла email/online
 * includeCallDetail(type: boolean) - query parameter - Индикатор необходимости включить в отчет детализацию
 * includeCharges(type: boolean) - query parameter - Индикатор необходимости включить в отчет структуру расходов
 */
exports.getRequestPostpaiddetail = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('billDate', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/preToPostRequest
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, soc, ban, benNumber, email
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - login
 * soc(type: string) - query parameter - SOC тарифного плана, на который осуществляется переход.
 * ban(type: integer) - query parameter - Номер договора, на который переносится номер ctn. Если не заполнен, ctn переходит на новый договор
 * benNumber(type: integer) - query parameter - Номер группы счетов при переходе на существующий ban, указывается вместе с параметром ban, параметр newBen не анализируется
 * email(type: string) - query parameter - Адрес email для доставки счетов по конкретной группе счетов, куда будет входить будущий постпейдный абонент
 */
exports.putRequestPretopostrequest = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('soc', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/prepaidDetail
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, startDate, endDate, reportType, emailSendInd
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * startDate(type: DateWrapper) - query parameter - Дата начала периода
 * endDate(type: DateWrapper) - query parameter - Дата окончания периода
 * reportType(type: string) - query parameter - Формат детализации
 * emailSendInd(type: boolean) - query parameter - Индикатор необходимости отправки файла детализации на e-mail
 * voiceCallsFilter(type: boolean) - query parameter - Фильтр по агрегату Звонки
 * localCallsFilter(type: boolean) - query parameter - Фильтр по подагрегату  Местные звонки
 * voiceCallsInRussiaFilter(type: boolean) - query parameter - Фильтр по подагрегату  Звонки по России
 * internationalCallsFilter(type: boolean) - query parameter - Фильтр по подагрегату Звонки в другие страны
 * smsMmsFilter(type: boolean) - query parameter - Фильтр по агрегату SMS и MMS
 * mobileInternetFilter(type: boolean) - query parameter - Фильтр по агрегату Мобильный интернет
 * infoEntertainmentFilter(type: boolean) - query parameter - Фильтр по агрегату Информационно-развлекательные сервисы
 * subsFeeServChangeFeeFilter(type: boolean) - query parameter - Фильтр по агрегату Абонентская плата за тариф и услуги
 * internationalRoamingFilter(type: boolean) - query parameter - Фильтр по агрегату Международный роуминг
 * roamingInRussiaFilter(type: boolean) - query parameter - Фильтр по агрегату Роуминг по России
 * servPaymentsMobileTransfersFilter(type: boolean) - query parameter - Фильтр по агрегату Оплата услуг и мобильные переводы
 * bonusBalanceFilter(type: boolean) - query parameter - Фильтр 'Показывать только изменение баланса Счастливого времени'
 * nullCostsFilter(type: boolean) - query parameter - Фильтр 'Не отображать расходы с нулевой стоимостью'
 * sessionGroupFlag(type: boolean) - query parameter - Признак объединения интернет-сессий в отчете
 * subsFeeServChangeFeeMobileFilter(type: boolean) - query parameter - Фильтр по агрегатам «Абонплата за мобильные услуги»
 * subsFeeServChangeFeeFttbFilter(type: boolean) - query parameter - Фильтр по агрегатам Абонплата за домашние услуги
 * subsFeeServChangeFeeEquipFilter(type: boolean) - query parameter - Фильтр по агрегатам Абонплата за оборудование
 */
exports.getRequestPrepaiddetail = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('startDate', 'Invalid query parameter').notEmpty();
	req.checkQuery('endDate', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/requestAttachment
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, requestId
 * login(type: string) - query parameter - Логин пользователя USSS
 * requestId(type: integer) - query parameter - Номер запроса
 * unZip(type: boolean) - query parameter - Индикатор получения файла вложения в разархивированном виде
 */
exports.getRequestRequestattachment = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('requestId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/requestDetails
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, requestId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * requestId(type: string) - query parameter - Идентификатор заявки. USSS RequestId – для запросов USSS. H&lt;ticket_number&gt; – номер заявки hd (только для заявок на закрытие и заявки на переезд)
 */
exports.getRequestRequestdetails = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('requestId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/restoreCTN
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, actvDate, reasonCode
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * actvDate(type: DateWrapper) - query parameter - Дата отложенной активации
 * reasonCode(type: string) - query parameter - Код причины
 */
exports.getRequestRestorectn = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('actvDate', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/serviceActivate
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, serviceName, effDate, expDate, campId, subgroupId, channelType
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * serviceName(type: string) - query parameter - Код услуги из Ensemble
 * effDate(type: DateWrapper) - query parameter - Дата подключения услуги в будущем.
 * expDate(type: DateWrapper) - query parameter - Дата отключения услуги в будущем.
 * campId(type: integer) - query parameter - Идентификатор целевой кампании
 * subgroupId(type: integer) - query parameter - Идентификатор подгруппы/предложения целевой кампании.
 * channelType(type: integer) - query parameter - Канал предложения.
 * payType(type: com.amdocs.css.vip.offering.data.ServicePayType) - query parameter - Тип оплаты: <br>bonus - оплата за бонусы;<br>money - оплата за деньги.<br>Значение по умолчанию - money
 * periodNumber(type: integer) - query parameter - Количество периодов, на которые подключается услуга с оплатой за бонусы (анализируется при вызове метода с payType:'bonus')
 * periodType(type: ru.atc.uss.util.TimeIntervalType) - query parameter - Тип периода:<br>day - сутки;<br>month - месяц
 * employeeNumber(type: string) - query parameter - Табельный номер в системе ГЕСП
 */
exports.putRequestServiceactivate = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('serviceName', 'Invalid query parameter').notEmpty();
	req.checkQuery('channelType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/serviceDeactivate
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, serviceName, effDate
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * serviceName(type: string) - query parameter - Код услуги из Ensemble
 * effDate(type: DateWrapper) - query parameter - Дата отключения услуги в будущем
 */
exports.getRequestServicedeactivate = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('serviceName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //request/servicesActivate
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * effDate(type: DateWrapper) - query parameter - Дата подключения услуг в будущем.
 * expDate(type: DateWrapper) - query parameter - Дата отключения услуги в будущем.
 */
exports.putRequestServicesactivate = function(req, res) {
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
 * GET //request/subscription/remove
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, subscriptionId, type
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * subscriptionId(type: string) - query parameter - Идентификатор подписки. Если не указан, то отключаем все подписки
 * type(type: string) - query parameter - Идентификаторы источника подписки
 */
exports.getRequestSubscriptionRemove = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/suspendRestore
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, block, effDate, reasonCode, memo
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * block(type: boolean) - query parameter - true для блокировки, false для разблокировки
 * effDate(type: DateWrapper) - query parameter - Дата начала отложенной блокировки/разблокировки
 * reasonCode(type: string) - query parameter - Код причины блокировки/разблокировки
 * memo(type: string) - query parameter - Комментарий для биллинга
 */
exports.getRequestSuspendrestore = function(req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('block', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //request/unbilledCallsList
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * sendToEmail(type: boolean) - query parameter - Индикатор необходимости отправки файла детализации на e-mail
 */
exports.getRequestUnbilledcallslist = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};