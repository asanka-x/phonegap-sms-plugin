var SmsPlugin = function () {};

SmsPlugin.prototype.send = function (phone, message, method, successCallback, failureCallback) {    
    return PhoneGap.exec(successCallback, failureCallback, 'SmsPlugin', "SendSMS", [phone, message, method]);
};

//Check if the device has a possibility to send and receive SMS
SmsInboxPlugin.prototype.isSupported = function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'SmsInboxPlugin', 'HasSMSPossibility', []);
}

  /**
   * Check if the device has a possibility to send and receive SMS
   * the successCallback function receives one string as parameter
   * formatted such as: [phonenumber]>[message].
   * Example: +32472345678>Hello World
   */
  SmsInboxPlugin.prototype.startReception = function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'SmsInboxPlugin', 'StartReception', []);
  }

  /**
   * Stop the receiving sms.
   */
  SmsInboxPlugin.prototype.stopReception = function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'SmsInboxPlugin', 'StopReception', []);
  }

PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("sms", new SmsPlugin());
});
