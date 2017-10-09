

/*
 * GET //auth/auth
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * password(type: string) - query parameter - Пароль пользователя USSS Для пользователя Mobile: 6-15 символов - цифры, буквы латиницы и @#$%^&+=)Для пользователя FTTB:  цифры, буквы латиницы (без спецсимволов)
 */
exports.getAuthAuth = function (req, res) {
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('password', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //auth/auth
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * userType(type: string) - query parameter - Тип пользователя
 */
exports.putAuthAuth = function (req, res) {
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //auth/authBySocialID
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: socialId, socialName
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * socialId(type: string) - query parameter - Идентификатор учетной записи в социальной сети
 * socialName(type: string) - query parameter - Тип социальной сети (VK, FB)
 */
exports.getAuthAuthbysocialid = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('socialId', 'Invalid query parameter').notEmpty();
	req.checkQuery('socialName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //auth/authBySsoCookie
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * OAMAuthnCookie(type: string) - cookie parameter - sso  cookie (single sign on)
 */
exports.getAuthAuthbyssocookie = function (req, res) {
	req.check('OAMAuthnCookie', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //auth/authBySysToken
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.getAuthAuthbysystoken = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //auth/createSelfreg
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, email
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - Номер CTN
 * email(type: string) - query parameter - E-mail абонента
 */
exports.putAuthCreateselfreg = function (req, res) {
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //auth/externalManagementConfirmationRequest
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * ctn(type: string) - query parameter - Номер CTN
 */
exports.postAuthExternalmanagementconfirmationrequest = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //auth/generateOneTimeToken
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 */
exports.getAuthGenerateonetimetoken = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //auth/passReset
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 * channelType(type: string) - query parameter - Тип канала для доставки временного пароля
 * userType(type: string) - query parameter - Тип пользователя
 * targetType(type: string) - query parameter - Тип витрины, на которую нужно формировать ссылку в email
 */
exports.getAuthPassreset = function (req, res) {
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('channelType', 'Invalid query parameter').notEmpty();
	req.checkQuery('userType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	var resData = {
		"channel": "SMS",
		"codeId": "123",
		"oncePassInd": false,
		"meta": {
			"status": "ResultStatus",
			"code": 0,
			"message": ""
		}
	}
	res.json(resData);
};

/*
 * GET //auth/remindLogin
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: phoneNumber, email
 * client(type: string) - query parameter - Наименование системы, использующей API
 * phoneNumber(type: string) - query parameter - Контактный номера абонента (обязательно должно быть заполнено только одно из полей email или phoneNumber)
 * email(type: string) - query parameter - Контактный адрес электронной почты абонента (обязательно должно быть заполнено только одно из полей email или phoneNumber)
 */
exports.getAuthRemindlogin = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //auth/verifyOneTimeToken
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, oneTimeToken
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 * oneTimeToken(type: string) - query parameter - Одноразовый пароль/Token для проверки (получается в методе generateOneTimeToken)
 */
exports.getAuthVerifyonetimetoken = function (req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('oneTimeToken', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //auth/xbr
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * xbrToken(type: string) - query parameter - Токен XBR
 */
exports.getAuthXbr = function (req, res) {
	req.checkQuery('xbrToken', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400, req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};