

/*
 * PUT //setting/changePassword
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName, oldPassword, newPassword, userType
 * Client-Type(type: string) - header parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 * oldPassword(type: string) - query parameter - Старый пароль пользователя
 * newPassword(type: string) - query parameter - Новый пароль пользователя<br>Допустимые символы пароля для FTTB:<br>а. Латинские символы<br>b. Цифры<br>Допустимые символы пароля для Мобильных пользователей: большие и маленькие латинские буквы, цифры, спецсимволы<br>Условия соответствия пароля правилам безопасности (валидация на web):<br>a. До 6 символов – «слишком короткий»;<br>b. 6 и более символов, только цифры/большие латинские буквы/маленькие<br> латинские буквы (напр. 123456, qwerty, QWERTY) – «ненадёжный»;<br>c. 6 и более символов, цифры + только большие или маленькие<br> латинские буквы (напр. 12345a, 12345A,) – «средней надёжности»;<br>d. 6 и более символов, цифры + большие латинские буквы + маленькие<br> латинские буквы (напр., 12345Аа) – «надёжный»;<br>e. возможное количество символов в пароле: <br>Для FTTB: от 6-ти до 24-ти символов<br>Для мобильных пользователей: от 6-ти до 255-ти символов
 * userType(type: string) - query parameter - Тип пользователя
 */
exports.putSettingChangepassword = function(req, res) {
	req.checkQuery('newPassword', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //setting/notifications
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 */
exports.getSettingNotifications = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //setting/notifications
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 */
exports.putSettingNotifications = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //setting/notifications/confirm
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: type, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * type(type: string) - query parameter - Тип подтверждаемой точки нотификации: SMS,EMAIL,PDPR_EMAIL
 * login(type: string) - query parameter - Логин абонента
 */
exports.getSettingNotificationsConfirm = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //setting/notifications/confirm
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 */
exports.putSettingNotificationsConfirm = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};