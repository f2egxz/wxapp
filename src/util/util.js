var string = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
export function randomString(n) {
    var tmp = "";
    for(var i = 0; i < n ; i ++) {
        var id = Math.floor(Math.random()*36);
        tmp += string[id];
    }
    return tmp;
}

export function orderNum (){
	const date = new Date(Date.now())
	return date.toLocaleString().replace(/\D/g,'')
}

export function signature(){

}

