import CryptoJS from "crypto-js";

export default {
	// 加密
	encrypt(str) {
		var IV = '8NONwyJtHesysWpM';
        var KEY = '1234567898882222';
        var data = 'ABCDEFGH';
		 var key = CryptoJS.enc.Utf8.parse(KEY);
            var iv = CryptoJS.enc.Utf8.parse(IV);
            var encrypted = CryptoJS.AES.encrypt(str,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7});
            return encrypted.toString();
	},
	// 解密
	decrypt(word, keyStr, ivStr) {
		var IV = '8NONwyJtHesysWpM';
        var KEY = '1234567898882222';
        var data = 'ABCDEFGH';
        var key = CryptoJS.enc.Utf8.parse(KEY);
        var iv = CryptoJS.enc.Utf8.parse(IV);
        var decrypted = CryptoJS.AES.decrypt(str,key,{iv:iv,padding:CryptoJS.pad.Pkcs7});
        return decrypted.toString(CryptoJS.enc.Utf8);
	}
};
