

/*
 * GET //smpp/deliver
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * status(type: integer) - query parameter - Статус сообщения
 * smsId(type: integer) - query parameter - Идентификатор отпарвленного sms
 */
exports.getSmppDeliver = function(req, res) {
	req.checkQuery('status', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};