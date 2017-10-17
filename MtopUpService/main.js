



var MTopUpService_svc = require("./routes/MTopUpService_svc.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ActivateAutoPayment", "ActivateAutoPayment", MTopUpService_svc.ActivateAutoPayment);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ActivateAutoPayment2", "ActivateAutoPayment2", MTopUpService_svc.ActivateAutoPayment2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ChangeAutoPaymentCTNSettings", "ChangeAutoPaymentCTNSettings", MTopUpService_svc.ChangeAutoPaymentCTNSettings);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ChangeAutoPaymentCTNSettings2", "ChangeAutoPaymentCTNSettings2", MTopUpService_svc.ChangeAutoPaymentCTNSettings2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ChangeCardExpirationDate", "ChangeCardExpirationDate", MTopUpService_svc.ChangeCardExpirationDate);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ChangeCardExpirationDate2", "ChangeCardExpirationDate2", MTopUpService_svc.ChangeCardExpirationDate2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ChangePassword", "ChangePassword", MTopUpService_svc.ChangePassword);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ChangePassword2", "ChangePassword2", MTopUpService_svc.ChangePassword2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ClearSkipSKCheck", "ClearSkipSKCheck", MTopUpService_svc.ClearSkipSKCheck);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ClearSkipSKCheck2", "ClearSkipSKCheck2", MTopUpService_svc.ClearSkipSKCheck2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/CloseSession", "CloseSession", MTopUpService_svc.CloseSession);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/CreateSession", "CreateSession", MTopUpService_svc.CreateSession);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetAutoPaymentCTNs", "GetAutoPaymentCTNs", MTopUpService_svc.GetAutoPaymentCTNs);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetAutoPaymentCTNs2", "GetAutoPaymentCTNs2", MTopUpService_svc.GetAutoPaymentCTNs2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetBasicCustomerInfo", "GetBasicCustomerInfo", MTopUpService_svc.GetBasicCustomerInfo);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetCustomerCards", "GetCustomerCards", MTopUpService_svc.GetCustomerCards);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetCustomerCards2", "GetCustomerCards2", MTopUpService_svc.GetCustomerCards2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetCustomerInfo", "GetCustomerInfo", MTopUpService_svc.GetCustomerInfo);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetFullCustomerInfo", "GetFullCustomerInfo", MTopUpService_svc.GetFullCustomerInfo);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetFullCustomerInfo2", "GetFullCustomerInfo2", MTopUpService_svc.GetFullCustomerInfo2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/GetPaymentStatus", "GetPaymentStatus", MTopUpService_svc.GetPaymentStatus);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ImmediateCardPayment", "ImmediateCardPayment", MTopUpService_svc.ImmediateCardPayment);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/ImmediateCardPayment2", "ImmediateCardPayment2", MTopUpService_svc.ImmediateCardPayment2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/RegisterAutoPaymentCTN", "RegisterAutoPaymentCTN", MTopUpService_svc.RegisterAutoPaymentCTN);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/RegisterAutoPaymentCTN2", "RegisterAutoPaymentCTN2", MTopUpService_svc.RegisterAutoPaymentCTN2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/RegisterAutoPaymentCTNCustom", "RegisterAutoPaymentCTNCustom", MTopUpService_svc.RegisterAutoPaymentCTNCustom);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/RegisterCardPayment", "RegisterCardPayment", MTopUpService_svc.RegisterCardPayment);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/RestorePassword", "RestorePassword", MTopUpService_svc.RestorePassword);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/SetActiveCard", "SetActiveCard", MTopUpService_svc.SetActiveCard);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/SetActiveCard2", "SetActiveCard2", MTopUpService_svc.SetActiveCard2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/SetReceiptDelivery", "SetReceiptDelivery", MTopUpService_svc.SetReceiptDelivery);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/SetSkipSKCheck", "SetSkipSKCheck", MTopUpService_svc.SetSkipSKCheck);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/SetSkipSKCheck2", "SetSkipSKCheck2", MTopUpService_svc.SetSkipSKCheck2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/SIMChangeBlockOff", "SIMChangeBlockOff", MTopUpService_svc.SIMChangeBlockOff);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/StopAutoPayment", "StopAutoPayment", MTopUpService_svc.StopAutoPayment);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/StopAutoPayment2", "StopAutoPayment2", MTopUpService_svc.StopAutoPayment2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/StopService", "StopService", MTopUpService_svc.StopService);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/StopService2", "StopService2", MTopUpService_svc.StopService2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/UnregisterAutoPaymentCTN", "UnregisterAutoPaymentCTN", MTopUpService_svc.UnregisterAutoPaymentCTN);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/UnregisterAutoPaymentCTN2", "UnregisterAutoPaymentCTN2", MTopUpService_svc.UnregisterAutoPaymentCTN2);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/UnregisterCard", "UnregisterCard", MTopUpService_svc.UnregisterCard);
Sandbox.soap("/MTopUpService.svc", "http://www.beeline.ru/mTopUpService/IMTopUpService/UnregisterCard2", "UnregisterCard2", MTopUpService_svc.UnregisterCard2);