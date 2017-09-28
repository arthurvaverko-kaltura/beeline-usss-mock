

/*
 * GET //fttb/authParams
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: fttbLogin, mobileCtn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * fttbLogin(type: string) - query parameter - Логин INAC fttb-абонента
 * mobileCtn(type: string) - query parameter - CTN мобильного абонента для поиска конвергентной связки
 */
exports.getFttbAuthparams = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //fttb/createAccount
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: json.getLogin(), json.getCtn()
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.postFttbCreateaccount = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //fttb/createAlias
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: json.getLogin, json.getAlias
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.postFttbCreatealias = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //fttb/notifications
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин FTTB
 * ctn(type: string) - query parameter - FTTB ctn
 */
exports.putFttbNotifications = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //fttb/setPassword
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, hash, ldapHash, type
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.postFttbSetpassword = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //fttb/sync
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: fttbLogin, convCtn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * fttbLogin(type: string) - query parameter - Логин INAC fttb-абонента
 * convCtn(type: string) - query parameter - Конвергентный номер ctn.
 */
exports.putFttbSync = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};