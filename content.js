

// １．過去カルテ監視
//var resule = confirm("カルテ変更監視スタート");

//get url  and check login page or not

var currenturl = window.location.href;
    
// patient_detail_page
 if(currenturl.includes("pid")){
    //alert(" patient page "+currenturl);

 }  
 // login page 
 else{
        alert(" login page "+currenturl);
        $('input[type=submit]').click(function() {
            //alert(' login clicked');
              var user_id = $('input[name=id]').val();
            alert(user_id);
  
        });

 }
   
   $("#p2").contents("#button_id").on("click", "#startDiag" , function(e) {
   alert($(this).find("span").text()+"clickeedddd。"); 
   });
  
    $(document).on("click", "#startDiag" , function(e) {
   alert($(this).find("span").text()+"をクリックしました。"); 
   });
   
   $(document).on("click", "#startDiag2" , function(e) {
   alert($(this).find("span").text()+"をクリックしました。"); 
   });
   
   $(document).on("click", "#statusDiag" , function(e) {
   alert($(this).find("span").text()+"をクリックしました。"); 
   });
  
   $(document).on("click", "#endDiag" , function(e) {
   alert($(this).find("span").text()+"をクリックしました。"); 
   });
   
   $(document).on("click", "#stopDiag" , function(e) {
   alert($(this).find("span").text()+"をクリックしました。"); 
   });
   
   $(document).on("click", "#holdDiag" , function(e) {
   alert($(this).find("span").text()+"をクリックしました。"); 
   });

   
////const target = document.getElementById('page_edit');
////const target = document.getElementById('karteList');
////const target = document.getElementById('body');
// 
//// オブザーバインスタンスを作成
//const observer = new MutationObserver(MutationRecords => {
//    MutationRecords.forEach(function (MutationRecord) {
//        console.log('type', MutationRecord.type);
//        console.log('addedNodes', MutationRecord.addedNodes);
//        console.log('removedNodes', MutationRecord.removedNodes);
//        console.log('previousSibling', MutationRecord.previousSibling);
//        console.log('nextSibling', MutationRecord.nextSibling);
//        console.log('attributeName', MutationRecord.attributeName);
//        console.log('attributeNamespace', MutationRecord.attributeNamespace);
//        console.log('oldValue', MutationRecord.oldValue);
//        console.log('target',MutationRecord.target);
//        console.log('-----');
//
//        //２．カルテを取得して算定recomendを作成      
//        //過去カルテタブが選択されているかチェック
//        var frameset = MutationRecord.target;
//        var frameset2 = frameset.outerHTML;
//        //      console.log(frameset);
//        console.log(frameset2);
//        if(frameset2.indexOf('cols="100%,0,0,0,0"') != -1){
//            //★★★★★★KOKOから★★★★★★
//            var resuleUpdate = confirm("算定データも作成する？");
//        };
//    });
//
//  });
//
//// オブザーバの設定
//const config = { 
///*
//    attributes: true,
//    attributeOldValue: true,
//    characterData: true,
//    characterDataOldValue: true,
//    childList: true,
//    subtree: true
//*/
//    attributes: true
//};
// 
//// 対象ノードとオブザーバの設定を渡す
////observer.observe(target, config);
//observer.observe(document.body, config);
//
//// 後ほど、監視を中止
////observer.disconnect();
