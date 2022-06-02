


$('#search').submit(function(e){
    e.preventDefault();






var appKey = '54f251cb2524e41c';
var key = 'zItil6Uh5D241bvzgdw8hR8PbSz6b0Zc';//注意：暴露appSecret，有被盗用造成损失的风险
var salt = (new Date).getTime();
var curtime = Math.round(new Date().getTime()/1000);
var query = $('#query').val();
// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
var from = 'en';
var to = 'ja';
var str1 = appKey + truncate(query) + salt + curtime + key;
var vocabId =  '您的用户词表ID';
//console.log('---',str1);

var sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex);
$.ajax({
    url: 'https://openapi.youdao.com/api',
    type: 'post',
    dataType: 'jsonp',
    data: {
        q: query,
        appKey: appKey,
        salt: salt,
        from: from,
        to: to,
        sign: sign,
        signType: "v3",
        curtime: curtime,
        vocabId: vocabId,
    },
    success: function (data) {
        console.log(data);
        $('#result').html(data.translation[0])
    } 
});

function truncate(q){
    var len = q.length;
    if(len<=20) return q;
    return q.substring(0, 10) + len + q.substring(len-10, len);
}



})