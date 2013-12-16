var SmsPlugin = function () {};

SmsPlugin.prototype.send = function (phone, message, method, successCallback, failureCallback) {    
    return PhoneGap.exec(successCallback, failureCallback, 'SmsPlugin', "SendSMS", [phone, message, method]);
};

//Check if the device has a possibility to send and receive SMS
SmsPlugin.prototype.isSupported = function(successCallback,failureCallback) {
    return PhoneGap.exec(successCallback, failureCallback, 'SmsPlugin', 'HasSMSPossibility', []);
}

  /**
   * Check if the device has a possibility to send and receive SMS
   * the successCallback function receives one string as parameter
   * formatted such as: [phonenumber]>[message].
   * Example: +32472345678>Hello World
   */
  SmsPlugin.prototype.startReception = function(successCallback,failureCallback) {
    return PhoneGap.exec(successCallback, failureCallback, 'SmsPlugin', 'StartReception', []);
  }

  /**
   * Stop the receiving sms.
   */
  SmsPlugin.prototype.stopReception = function(successCallback,failureCallback) {
    return PhoneGap.exec(successCallback, failureCallback, 'SmsPlugin', 'StopReception', []);
  }

PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("sms", new SmsPlugin());
});
