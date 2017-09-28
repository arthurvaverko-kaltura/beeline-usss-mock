

/*
 * GET //invite/accept
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, ctnExtra, type
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, приславшего приглашение (главный номер)
 * ctnExtra(type: string) - query parameter - Номер абонента, принимающего приглашение (дополнительный номер)
 * type(type: string) - query parameter - Тип приглашения (SDB_OWNER, SEB_SHARE, PC_CHILD_ADD, PC_CHILD_REMOVE)
 * ssoLink(type: string) - query parameter - Индикатор создания привязки по sso
 */
exports.getInviteAccept = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnMain', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnExtra', 'Invalid query parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //invite/cancel
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, ctnExtra
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, отзывающего приглашение (главный номер)
 * ctnExtra(type: string) - query parameter - CTN абонента, которого необходимо у которого необходимо отозвать приглашение (дополнительный номер)
 */
exports.getInviteCancel = function(req, res) {
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
 * GET //invite/create
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, ctnExtra, type, soc
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, отправляющего приглашение (главный номер)
 * ctnExtra(type: string) - query parameter - Номер абонента, которому отправлено приглашение (дополнительный номер)
 * type(type: string) - query parameter - Тип приглашения (SDB_OWNER, SEB_SHARE, PC_CHILD_ADD, PC_CHILD_REMOVE)
 * soc(type: string) - query parameter - Имя выбранного в iNAC SOC
 */
exports.getInviteCreate = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnMain', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnExtra', 'Invalid query parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //invite/create
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, type
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, отправляющего приглашение (главный номер)
 * type(type: string) - query parameter - Тип приглашения (SDB_OWNER, SEB_SHARE, PC_CHILD_ADD, PC_CHILD_REMOVE)
 * soc(type: string) - query parameter - Имя выбранного в iNAC SOC
 */
exports.putInviteCreate = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnMain', 'Invalid query parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //invite/income
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - номер CTN
 */
exports.getInviteIncome = function(req, res) {
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
 * GET //invite/list
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctn, type
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - номер CTN
 * type(type: string) - query parameter - Тип приглашения
 */
exports.getInviteList = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //invite/reject
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: ctnMain, ctnExtra, type
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctnMain(type: string) - query parameter - Номер абонента, приславшего приглашение (главный номер)
 * ctnExtra(type: string) - query parameter - Номер абонента, отклоняющего приглашение (дополнительный номер)
 * type(type: string) - query parameter - Тип приглашения (SDB_OWNER, SEB_SHARE, PC_CHILD_ADD, PC_CHILD_REMOVE)
 */
exports.getInviteReject = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctnMain', 'Invalid query parameter').notEmpty();
	req.checkQuery('ctnExtra', 'Invalid query parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};