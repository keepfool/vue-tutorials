function AjaxHelper() {
	this.ajax = function(url, type, dataType, data, callback) {
		$.ajax({
			url: url,
			type: type,
			dataType: dataType,
			data: data,
			success: callback,
			error: function(xhr, errorType, error) {
				alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
			}
		})
	}
}
AjaxHelper.prototype.get = function(url, data, callback) {
	this.ajax(url, 'GET', 'json', data, callback)
}
AjaxHelper.prototype.post = function(url, data, callback) {
	this.ajax(url, 'POST', 'json', data, callback)
}

AjaxHelper.prototype.put = function(url, data, callback) {
	this.ajax(url, 'PUT', 'json', data, callback)
}

AjaxHelper.prototype.delete = function(url, data, callback) {
	this.ajax(url, 'DELETE', 'json', data, callback)
}

AjaxHelper.prototype.jsonp = function(url, data, callback) {
	this.ajax(url, 'GET', 'jsonp', data, callback)
}

AjaxHelper.prototype.constructor = AjaxHelper