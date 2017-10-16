var tokenValidator = require("../tokenValidation.js");

/*
 * GET //info/accumulators
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoAccumulators = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/arpu
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - номер CTN
 */
exports.getInfoArpu = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/autoPayment
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoAutopayment = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/availablePromisedPayment
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoAvailablepromisedpayment = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/billPeriods
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoBillperiods = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/blackList/calls
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: requestId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * requestId(type: integer) - query parameter - Номер запроса USS
 * ctn(type: string) - query parameter - Номер абонента (для УЛК)
 */
exports.getInfoBlacklistCalls = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('requestId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/blackList/numbers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoBlacklistNumbers = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/bonusTransfer
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, balanceType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * balanceType(type: string) - query parameter - Тип баланса, с которого запрашивается сумма для перевода: bonus - перевод бонусов NLP (значение по умолчанию)
 */
exports.getInfoBonustransfer = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/callForward
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: requestId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * requestId(type: integer) - query parameter - Номер запроса USS
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoCallforward = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('requestId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/checkChangePaymentMethodReady
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ban
 * login(type: string) - query parameter - login
 * ban(type: integer) - query parameter - ban
 */
exports.getInfoCheckchangepaymentmethodready = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/checkInternationalCalls
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - ctn
 */
exports.getInfoCheckinternationalcalls = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/checkInternetConnectionAvailability
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: houseId, flat
 * client(type: string) - query parameter - Наименование системы, использующей API
 * houseId(type: integer) - query parameter - Идентификатор дома
 * flat(type: integer) - query parameter - Номер квартиры
 */
exports.getInfoCheckinternetconnectionavailability = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('houseId', 'Invalid query parameter').notEmpty();
	req.checkQuery('flat', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/checkPersonalData
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, documentSerialNumber, documentNumber, firstName, middleName, lastName
 * ctn(type: string) - query parameter - ctn
 * serialNumber(type: string) - query parameter - Серия документа, на который зарегистрирован CTN.
 * number(type: string) - query parameter - Номер документа, на который зарегистрирован CTN.
 * firstName(type: string) - query parameter - Имя владельца CTN.
 * middleName(type: string) - query parameter - Отчество владельца CTN.
 * lastName(type: string) - query parameter - Фамилия владельца CTN.
 */
exports.getInfoCheckpersonaldata = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('serialNumber', 'Invalid query parameter').notEmpty();
	req.checkQuery('number', 'Invalid query parameter').notEmpty();
	req.checkQuery('firstName', 'Invalid query parameter').notEmpty();
	req.checkQuery('middleName', 'Invalid query parameter').notEmpty();
	req.checkQuery('lastName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/conflict
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, soc
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * soc(type: string) - query parameter - Услуга, конфликтующие с которой нужно найти
 */
exports.getInfoConflict = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('soc', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/connHistory
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, periodStart
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * ban(type: integer) - query parameter - ban
 * ctn(type: string) - query parameter - Номер CTN
 * start_date(type: DateWrapper) - query parameter - Дата начала периода
 * end_date(type: DateWrapper) - query parameter - Дата окончания периода
 */
exports.getInfoConnhistory = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('start_date', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/convergentActivatonStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * login(type: string) - query parameter - Логин FTTB-пользователя USSS
 */
exports.getInfoConvergentactivatonstatus = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/convergentRequestParams
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: accountNumber, ctn, houseId, flat, requestId, tokenSms
 * accountNumber(type: string) - query parameter - Номер лицевого счета. Если передан accountNumber, то метод вернет подробные параметры заявки (возвращаемые параметры servicesFTTB и mobileCtnInfo)
 * ctn(type: string) - query parameter - Номер CTN (Билайн или портируемый номер другого оператора)
 * houseId(type: integer) - query parameter - Идентификатор дома
 * flat(type: integer) - query parameter - Номер квартиры
 * requestId(type: integer) - query parameter - Id существующей заявки на конвергенцию в USSS
 * tokenSms(type: string) - query parameter - Уникальный идентификатор для поиска заявки на конвергенцию, созданной из неавторизованной зоны
 */
exports.getInfoConvergentrequestparams = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/creditLimit
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoCreditlimit = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/currentPromisedPayment
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoCurrentpromisedpayment = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/debtList
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, pendingCharges
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * pendingCharges(type: com.amdocs.uss.api.ubd.PendingChargesType) - query parameter - Тип запроса задолженности:<br>all (по всем задолженностям)<br>sf_only (только по АП)
 */
exports.getInfoDebtlist = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('pendingCharges', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //info/decodeAnalyticId
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие:
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.postInfoDecodeanalyticid = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/deposits
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * login(type: string) - query parameter - login
 * ctn(type: string) - query parameter - ctn
 */
exports.getInfoDeposits = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/dtm
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoDtm = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/genAnalyticId
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, login, type)
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * login(type: string) - query parameter - Логин пользователя USSS
 * type(type: string) - query parameter - MOBILE/FTTB - тип пользователя
 */
exports.getInfoGenanalyticid = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/geo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя.
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoGeo = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/getAvailableServices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: soc, accountType, market
 * soc(type: string) - query parameter - SOC тарифного плана
 * accountType(type: string) - query parameter - Account Type договора абонента
 * market(type: string) - query parameter - Маркет-код
 */
exports.getInfoGetavailableservices = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('market', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/getChangePaymentsData
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, soc, ban
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - ctn
 * soc(type: string) - query parameter - soc
 * ban(type: integer) - query parameter - ban
 */
exports.getInfoGetchangepaymentsdata = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('soc', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/invoicesInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * login(type: string) - query parameter - Идентификатор клиента API USSS
 * periodStart(type: DateWrapper) - query parameter - Дата начала периода (формат: yyyy-MM-dd)
 * periodEnd(type: DateWrapper) - query parameter - Дата окончания периода (формат: yyyy-MM-dd)
 */
exports.getInfoInvoicesinfo = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/loginConsolidation
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.getInfoLoginconsolidation = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/loginInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Идентификатор абонента (login, alias, ctn)
 */
exports.getInfoLogininfo = function (req, res) {
	tokenValidator.validateBeelineToken(req, res);
	//req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);
	// set response body and send
	//https://my.beeline.ru/api/docs/index.html#!/info_1/getLoginInfo
	var mockLoginInof = {
		"logins": [
			{
				"type": "B2B", // ['UNKNOWN' or ' B2B' or ' B2C' or ' FTTB' or ' ADMIN']
				"ussLogin": "USSSMockLoginNameNew",
				"tempPwd": false,
				"convergence": {
					"ctn": "",
					"login": "",
					"fttbLogin": "",
					"fttbAlias": "",
					"fttbCtn": "",
					"date": ""
				}
			}
		],
		"meta": {
			"status": "OK",
			"code": 2000,
			"message": ""
		}
	};

	res.json(mockLoginInof);
};

/*
 * GET //info/mcBalance
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoMcbalance = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/networkTechnology
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * ctn(type: string) - query parameter - CTN
 */
exports.getInfoNetworktechnology = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/nlpInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoNlpinfo = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/nrtbcBalance
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
exports.getInfoNrtbcbalance = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/onlineBillDetail
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, periodStart, periodEnd, sessionGroupFlag
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * periodStart(type: DateWrapper) - query parameter - Дата начала периода
 * periodEnd(type: DateWrapper) - query parameter - Дата окончания периода
 * sessionGroupFlag(type: boolean) - query parameter - Признак объединения интернет-сессий
 */
exports.getInfoOnlinebilldetail = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('periodStart', 'Invalid query parameter').notEmpty();
	req.checkQuery('periodEnd', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/payType
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.getInfoPaytype = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/payments/history
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, periodStart, periodEnd
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * periodStart(type: DateWrapper) - query parameter - Дата начала периода
 * periodEnd(type: DateWrapper) - query parameter - Дата окончания периода
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.getInfoPaymentsHistory = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/payments/historyFile
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, periodStart, periodEnd
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * periodStart(type: DateWrapper) - query parameter - Дата начала периода
 * periodEnd(type: DateWrapper) - query parameter - Дата окончания периода
 */
exports.getInfoPaymentsHistoryfile = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/pcl
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoPcl = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/pinPuk
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoPinpuk = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/portation
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoPortation = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/postpaidBalance
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
exports.getInfoPostpaidbalance = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/postpaidDebt
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, ban
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * ban(type: integer) - query parameter - Номер договора
 */
exports.getInfoPostpaiddebt = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/postpaidInvoiceDetails
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ctn, ben, invoiceNumber, invoiceDate, sessionGroupFlag
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * ben(type: integer) - query parameter - Номер группы счетов на договоре
 * ctn(type: string) - query parameter - Номер CTN
 * invoiceNumber(type: string) - query parameter - Номер счета
 * invoiceDate(type: DateWrapper) - query parameter - Дата выставления счета
 * sessionGroupFlag(type: boolean) - query parameter - Признак объединения интернет-сессий:<br>true - объединять интернет-сессии (значение по умолчанию);<br>false - не объединять интернет-сессии
 */
exports.getInfoPostpaidinvoicedetails = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/prepaidAddBalance
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoPrepaidaddbalance = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/prepaidBalance
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * startBalance(type: boolean) - query parameter - Признак того, что система должна вернуть параметры стартового баланса абонента
 */
exports.getInfoPrepaidbalance = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/pricePlan
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoPriceplan = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/pricePlanAvailableList
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, socList, nonPublic, showPublicInd
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * socList(type: string) - query parameter - Cписок услуг для фильтрации
 * nonPublic(type: boolean) - query parameter - Индикатор получения непубличных услуг. true - получаем непубличные. Значение по умолчанию - false
 * showPublicInd(type: boolean) - query parameter - Индикатор получения признака непубличности услуги. Значение по умолчанию - false
 * channelType(type: integer) - query parameter - Канал предложения.
 * commission(type: boolean) - query parameter - Признак того, что система должна вернуть комиссию. Значение по умолчанию - false.
 * employeeNumber(type: string) - query parameter - Табельный номер в системе ГЕСП
 */
exports.getInfoPriceplanavailablelist = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/pricePlanChangingAvailability
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, pricePlan
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * pricePlan(type: string) - query parameter - Код тарифного плана из Ensemble
 * campId(type: integer) - query parameter - Идентификатор целевой кампании
 * subgroupId(type: integer) - query parameter - Идентификатор подгруппы/предложения целевой кампании.
 * channelType(type: integer) - query parameter - Тип канала предложения. <br> 4 – Канал Личный кабинет<br> 5 – Канал Мобильное приложение
 * payType(type: com.amdocs.css.vip.offering.data.ServicePayType) - query parameter - Тип оплаты: <br>bonus - оплата за бонусы;<br>money - оплата за деньги.<br>Значение по умолчанию - money
 * crmCase(type: boolean) - query parameter - Создавать ли CRM кейс в случае ошибки подключения.
 * Validation-Settings(type: string) - header parameter - Настройки валидации
 * discountName(type: string) - query parameter - SOC скидки на АП тарифа
 */
exports.getInfoPriceplanchangingavailability = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('pricePlan', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/rests
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoRests = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/roleAndSecurityElements
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * login(type: string) - query parameter - Идентификатор абонента (login, alias, ctn)
 */
exports.getInfoRoleandsecurityelements = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/rolesInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие:
 * client(type: string) - query parameter - Наименование системы, использующей API
 * role(type: string) - query parameter - Роль администратора, если не заполнено, то возвращаем все FTTB роли
 */
exports.getInfoRolesinfo = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/sebInvitation
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, ctnExtra
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, отправившего приглашение (главный номер)
 * ctnExtra(type: string) - query parameter - Номер абонента, принимающего приглашение (дополнительный номер)
 */
exports.getInfoSebinvitation = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnMain', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnExtra', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/sendInvoiceToEmail
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, invoiceNumber, email
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS
 * invoiceNumber(type: string) - query parameter - Номер счета
 * email(type: string) - query parameter - Email
 */
exports.getInfoSendinvoicetoemail = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('invoiceNumber', 'Invalid query parameter').notEmpty();
	req.checkQuery('email', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/serviceAvailableList
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, socList, nonPublic, showPublicInd, hiddenService
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * socList(type: string) - query parameter - Cписок услуг для фильтрации
 * nonPublic(type: boolean) - query parameter - Индикатор получения непубличных услуг. true - получаем непубличные. Значение по умолчанию - false
 * showPublicInd(type: boolean) - query parameter - Индикатор получения признака непубличности услуги. Значение по умолчанию - false
 * hiddenService(type: boolean) - query parameter - Индикатор отображения данных по скрытым услугам. Значение по умолчанию - false, скрытые услуги не возвращаются
 * commission(type: boolean) - query parameter - Признак того, что система должна вернуть комиссию. Значение по умолчанию - false.
 * employeeNumber(type: string) - query parameter - Табельный номер в системе ГЕСП
 */
exports.getInfoServiceavailablelist = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/serviceList
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, hiddenService
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * hiddenService(type: boolean) - query parameter - Индикатор отображения данных по скрытым услугам. Значение по умолчанию - false, скрытые услуги не возвращаются
 */
exports.getInfoServicelist = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/serviceParams
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: serviceName
 * client(type: string) - query parameter - Наименование системы, использующей API
 * serviceName(type: string) - query parameter - Код услуги
 */
exports.getInfoServiceparams = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('serviceName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/serviceParamsValues
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, serviceName
 * ctn(type: string) - query parameter - Номер CTN
 * serviceName(type: string) - query parameter - Код услуги
 */
exports.getInfoServiceparamsvalues = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('serviceName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //info/setNotificationStatus
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName, notificationIds, status)
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 * notificationIds(type: string) - query parameter - Cписок идентификаторов через запятую
 * status(type: string) - query parameter - Статус уведомления (только статусы типа ‘DELETE’-удаленное, ‘READ’-прочитанное и ‘UNREAD'-непрочитанное)
 */
exports.postInfoSetnotificationstatus = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('notificationIds', 'Invalid query parameter').notEmpty();
	req.checkQuery('status', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/status
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, ban, extendedStatus
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * ban(type: integer) - query parameter - Номер договора
 * extendedStatus(type: boolean) - query parameter - Флаг необходимости получения статуса мнп, комверса, консолидированного статуса и т.д.
 */
exports.getInfoStatus = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/subscriptions
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoSubscriptions = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/targetedOffers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, channelType
 * ctn(type: string) - query parameter - Номер CTN
 * channelType(type: integer) - query parameter - Канал предложения.
 * reasonKey(type: string) - query parameter - Причина обращения. Используется для канала служебного приложения монобренда
 * employeeNumber(type: string) - query parameter - Табельный номер в системе ГЕСП
 */
exports.getInfoTargetedoffers = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('channelType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/targetedOffersHistory
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, channelType, response, direction, category, startDate, endDate, socType, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - 10-значный номер лицевого счета клиента FTTB.
 * channelType(type: integer) - query parameter - Идентификатор канала получения данных. Возможные значения:<br>1 - Голосовой канал CRM<br>2 - Монобренд<br>4 - Личный кабинет<br>5 - Мобильное приложение<br>12 - входящий IVR<br>13 - Toolbar<br>23 – Евросеть<br>25 – Канал ЛК FTTB (абонент ШПД)<br>-1 – все перечисленные<br>Значение по умолчанию: -1.
 * response(type: integer) - query parameter - Идентификатор ответа абонента. Справочник в системе CM (DIM_DIC.DIM_SUBSCRIBER_RESPONSE):<br>Будет - 538<br>Не будет - 539<br>Подумает - 11180<br>Все – -1<br>Значение по умолчанию: -1
 * direction(type: integer) - query parameter - Направление кампаний. Возможные значения:<br>0 - outbound<br>1 - inbound<br>-1 - outbound + inbound<br>Значение по умолчанию: -1
 * category(type: integer) - query parameter - Тип кампаний. Возможные значения:<br>0 - маркетинговые<br>1 - НЕмаркетинговые<br>-1 - маркетинговые + НЕмаркетинговые<br>Значение по умолчанию: -1
 * startDate(type: DateWrapper) - query parameter - Дата начала периода, за который необходима история (фильтрация будет осуществляться относительно даты начала информирования по кампании). По умолчанию не задано (в этом случае выдавать историю за последние 2 месяца).
 * endDate(type: DateWrapper) - query parameter - Дата окончания периода, за который необходима история фильтрация будет осуществляться относительно даты начала информирования по кампании). По умолчанию не задано (в этом случае выдавать историю за последние 2 месяца).
 * socType(type: integer) - query parameter - Тип услуги, предложенной абоненту в рамках кампании. Возможные значения:<br>1 - Услуга<br>2 - Тариф<br>3 - Акция<br>4 – Оборудование<br>5 – Предложение FTTB для Mobile<br>6 – Новость FTTB<br>-1 – все перечисленные, кроме 6-новость FTTB<br>-2 – все перечисленные, включая 6-новость, <br>Значение по умолчанию -1
 * login(type: string) - query parameter - Логин пользователя USSS/SSO
 */
exports.getInfoTargetedoffershistory = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/tickets
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, location, type, dateFrom.
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * location(type: string) - query parameter - Признак принадлежности заявки
 * type(type: string) - query parameter - Тип заявки. HD_MOVE – заявка на переезд (доступен только для location = HD), CRM_EQCHK – кейс на проверку оборудования в офисе (доступен только для location = CRM), HD_MOB_PKG – заявки на подключение мобильного комплекта(доступен только для location = HD), HD_IPTV – заявки на активацию IPTV (доступен только для location = HD), HD_REISSUE - заявки на переоформление договора ШПД через ЛК(доступен только для location = HD)HD_INSTALLMENT - заявки на покупка WIFI-роутера в рассрочку (доступен только для location = HD)
 * dateFrom(type: DateWrapper) - query parameter - Дата, начиная с которой будет осуществляться выбор заявок для отображения (формат yyyy-MM-ddTHH:mm:ss)
 */
exports.getInfoTickets = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('location', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/unbilledCalls
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, sessionGroupFlag
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * sessionGroupFlag(type: boolean) - query parameter - Признак объединения интернет-сессий
 */
exports.getInfoUnbilledcalls = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/unbilledCharges
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * X-API-Token(type: string) - header parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getInfoUnbilledcharges = function (req, res) {
	req.check('X-API-Token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/unpaidInvoice
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ban
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ban(type: integer) - query parameter - Номер договора
 */
exports.getInfoUnpaidinvoice = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ban', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/upsellPricePlan
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, pricePlan, channelType
 * ctn(type: string) - query parameter - Номер CTN
 * pricePlan(type: string) - query parameter - Код тарифного плана, выбранного абонентом для перехода.
 * channelType(type: integer) - query parameter - Канал предложения.
 * employeeNumber(type: string) - query parameter - Табельный номер в системе ГЕСП
 */
exports.getInfoUpsellpriceplan = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('pricePlan', 'Invalid query parameter').notEmpty();
	req.checkQuery('channelType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/userNotifications
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Usss-Language(type: string) - header parameter - Код локализации: ru_RU (значение по умолчанию), en_US
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, notificationId, dateFrom, typeNotification, groupNotification
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * notificationId(type: integer) - query parameter - Идентификатор уведомления
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * typeNotification(type: string) - query parameter - UPDATE_INFO - псевдоуведомления, NOTIF_INFO - уведомления
 * groupNotification(type: string) - query parameter - Группы оповещений: equip - Заказ оборудования (только для псевдоуведомлений), askHd - Вопросы в Службу поддержки и ограничение сервиса,(только для псевдоуведомлений), changeServ - Изменение сервиса (только для псевдоуведомлений), payFinance- Оплата и финансы, limitNews - Ограничения сервиса и плановые работы (только для уведомлений), ssoNotifications - уведомления о действиях с sso-привязками, ssoInvitations - приглашения к присоединению по sso, allGroups - все группы
 */
exports.getInfoUsernotifications = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //info/userType
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * cient(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.getInfoUsertype = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};