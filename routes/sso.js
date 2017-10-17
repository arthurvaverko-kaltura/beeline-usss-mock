

/*
 * GET //sso/changeDefaultSSOLogin
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, newDefSSOLogin, newDefCtn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO. C пользовательским токеном login необязательный, с системным - обязательный
 * newDefSSOLogin(type: string) - query parameter - Новый дефотлный sso-логин
 * newDefCtn(type: string) - query parameter - Новый дефолтный CTN пользователя уровня ban/ben
 */
exports.getSsoChangedefaultssologin = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('newDefSSOLogin', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/contactData
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя в SSO
 */
exports.getSsoContactdata = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //sso/contactData/confirmName
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter -
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин B2C пользователя USSS
 */
exports.putSsoContactdataConfirmname = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //sso/createSSOSession
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя SSO
 */
exports.putSsoCreatessosession = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/delAccountLink
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, linkedLogin
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 * linkedLogin(type: string) - query parameter - Логин привязанный к пользователю USS/SSO
 */
exports.getSsoDelaccountlink = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('linkedLogin', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/delSocialID
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, socialId, socialName
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя
 * socialId(type: string) - query parameter - Идентификатор пользователя в соц. сети
 * socialName(type: string) - query parameter - Соц. сеть (FB или VK)
 */
exports.getSsoDelsocialid = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('socialId', 'Invalid query parameter').notEmpty();
	req.checkQuery('socialName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/enableRequestToLink
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, enableType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 * enableType(type: integer) - query parameter - 0 - разрешено, 1 - запрещена возможность привязывания вашего аккаунта
 */
exports.getSsoEnablerequesttolink = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('enableType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/findSSOAccountBySocialId
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: socialId, socialName
 * client(type: string) - query parameter - Наименование системы, использующей API
 * socialId(type: string) - query parameter - Идентификатор пользователя в соц. сети
 * socialName(type: string) - query parameter - Соц. сеть (FB или VK)
 */
exports.getSsoFindssoaccountbysocialid = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('socialId', 'Invalid query parameter').notEmpty();
	req.checkQuery('socialName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/getAccountLinks
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 */
exports.getSsoGetaccountlinks = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //sso/linkSocialAccount
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: socialName, socialId, reCreate, name, photo, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * socialName(type: string) - query parameter - Тип социальной сети (VK, FB)
 * socialId(type: string) - query parameter - Идентификатор пользователя в соц. сети
 * reCreate(type: boolean) - query parameter - Флаг создания/пересоздания привязкии
 * login(type: string) - query parameter - Логин абонента
 */
exports.putSsoLinksocialaccount = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('socialName', 'Invalid query parameter').notEmpty();
	req.checkQuery('socialId', 'Invalid query parameter').notEmpty();
	req.checkQuery('reCreate', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE //sso/linkage/accountNickname
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: linkedAccountLogin, linkedAccountCtn, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * linkedAccountLogin(type: string) - query parameter - Логин пользователя, которому меняется никнейм
 * linkedAccountCtn(type: string) - query parameter - CTN, доступный на SSO аккаунте уровня BAN/BEN, которому меняется никнейм
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 */
exports.deleteSsoLinkageAccountnickname = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('linkedAccountLogin', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //sso/linkage/changeLinkedAccountNickname
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: linkedAccountLogin, nickname, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 */
exports.putSsoLinkageChangelinkedaccountnickname = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/linkage/ctnAndSms/creation
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 * ctn(type: string) - query parameter - Номер абонента Билайн
 */
exports.getSsoLinkageCtnandsmsCreation = function(req, res) {
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
 * PUT //sso/linkage/ctnAndSms/creation
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: oneTimeToken, login, nickName
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.putSsoLinkageCtnandsmsCreation = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //sso/linkage/loginAndPassword/creation
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: linkedAccountPassword, linkedAccountLogin, Login, nickName
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.putSsoLinkageLoginandpasswordCreation = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //sso/linkage/request/cancel
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: linkedAccount, type, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Пользователь, который отправил приглашение
 */
exports.putSsoLinkageRequestCancel = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //sso/linkage/request/creation
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: requestType, linkedAccountLogin, login, nickName
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.postSsoLinkageRequestCreation = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //sso/linkage/request/update
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: linkedAccount, type, answerValue, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 */
exports.putSsoLinkageRequestUpdate = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/linkageRequests
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, requestType, requestDestination
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 * requestType(type: integer) - query parameter - Признак «Запрос на управление» (0), «Приглашение к управлению» (1)
 * requestDestination(type: integer) - query parameter - Признак «входящие запросы/приглашения» (0), «исходящие запросы/приглашения» (1)
 */
exports.getSsoLinkagerequests = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/list
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя в SSO
 */
exports.getSsoList = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/selectCTN
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, activeLogin, ctn, authCookie
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USSS
 * activeLogin(type: string) - query parameter - Выбранный логин USSS
 * ctn(type: string) - query parameter - Номер CTN
 * OAMAuthnCookie(type: string) - cookie parameter - Cookie
 */
exports.getSsoSelectctn = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('activeLogin', 'Invalid query parameter').notEmpty();
	req.check('OAMAuthnCookie', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/showEnableRequestToLink
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 */
exports.getSsoShowenablerequesttolink = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/socialAccount
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие:  следующие: socialName, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * socialName(type: string) - query parameter - Тип социальной сети (VK, FB)
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.getSsoSocialaccount = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('socialName', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/ssoOfferReaction
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, offerLogin, resultType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * initiatorName(type: string) - query parameter - Логин сотрудника ВО
 * login(type: string) - query parameter - Логин пользователя USS/SSO
 * offerLogin(type: string) - query parameter - Логин пользователя, предлагаемого для связки
 * resultType(type: integer) - query parameter - Тип ответа (1 - отложил предложение, 2 - отменил предложение)
 */
exports.getSsoSsoofferreaction = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('offerLogin', 'Invalid query parameter').notEmpty();
	req.checkQuery('resultType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //sso/subscribers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя в SSO
 */
exports.getSsoSubscribers = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};