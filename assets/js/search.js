document.addEventListener("touchstart", function(){}, true);


var scan_result_value=[0,0,0,0];
var search_output=["1","2","3","4"];


function	show_search_result(){
for(var i=0;i<search_output.length;i++){
$('scan_result'+(i+1)).text(search_output[i]);
}
}
function reset_search(){
for(var i=0;i<search_output.length;i++){
 // alert("hi");
search_output[i]="";
scan_result_value[i]=0;
}
//$("#d_list_search").text("");
}

for(var ii=0;ii<search_output.length;ii++){
$("scan_result"+(ii+1)).click(function(){
       		 $("show_scan_result").hide('100');
					alert(search_output[$(this).data("l")-1]);
});
}

$(".search-box").keydown(function (event) {
 
        if (event.which == 13) {
  
        		var search_list_number=search_output.length;
       		 $("show_scan_result").show('100');
    
        		reset_search();
          
        		var str=document.getElementById("search-box").value;
        		alert(str);                       
            	for(var j=0;j<6;j++)		//政府分級1-5+其他
              	{		
                    var dl_data=disease_data[0][j].split(",");	//分割,取出疾病
                    //找出疾病的權重值
                    //alert(str);  
                    s_value=0;
                    for(var k=0;k<dl_data.length;k++){
                    	//alert(dl_data[k]);
                      s_value=0;
	                    for(var z=0;z<str.length;z++)
																if(dl_data[k].indexOf(str.substring(z,z+1))!=-1)
                          	s_value++;
                      if(s_value>0)
                   		///  	 alert(s_value.toString());
                      //比對權重值
                      var check=0;
                      
                      for(kk=0;(kk<search_list_number)&check==0;kk++)
                      	if(s_value>scan_result_value[kk]){
                        	
                          	for(var tmp=search_list_number-1;tmp>kk;tmp--)	//將value往後移一格
                            {                            		 			
                                 scan_result_value[tmp]=scan_result_value[tmp-1];
                              	 search_output[tmp]=search_output[tmp-1];	
                                 }
                          search_output[kk]=dl_data[k];	
                        	scan_result_value[kk]=s_value;
													check=1;
                          
                          }
                      }      
                } //*/
                show_search_result();
    
        }
    });


var disease_data=[3];
disease_data[0]=["第一類法定傳染病","第二類法定傳染病","第三類法定傳染病",
                 "第四類法定傳染病","第五類法定傳染病","其他傳染病"];

				 
//法定疾病
disease_data[0][0]="流感,嚴重急性呼吸道症候群,鼠疫,狂犬病";
disease_data[0][1]="登革熱,德國麻疹,霍亂,流行性斑疹傷寒,白喉,流行性腦脊髓膜炎,西尼羅熱,傷寒,副傷寒,小兒麻痺症/急性無力肢體麻痺,桿菌性痢疾,阿米巴性痢疾,瘧疾,麻疹,急性病毒性Ａ型肝炎,腸道出血性大腸桿菌感染症,漢他病毒症候群,多重抗藥性結核病,屈公病,炭疽病";


disease_data[0][2]="腸病毒感染併發重症,結核病,人類免疫缺乏病毒感染,漢生病,百日咳,新生兒破傷風,破傷風,急性病毒性Ｂ型肝炎,急性病毒性Ｃ型肝炎,急性病毒性Ｄ型肝炎,急性病毒性Ｅ型肝炎,流行性腮腺炎,梅毒,淋病,侵襲性ｂ型嗜血桿菌感染症,退伍軍人病,先天性德國麻疹症候群,日本腦炎";

disease_data[0][3]="流感併發重症,肉毒桿菌中毒,庫賈氏病,鉤端螺旋體病,萊姆病,類鼻疽,地方性斑疹傷寒,Q熱,水痘併發症,恙蟲病,兔熱病,侵襲性肺炎鏈球菌感染症,疱疹B病毒感染症,弓形蟲感染症,布氏桿菌病";

disease_data[0][4]="新型A型流感,中東呼吸症候群冠狀病毒感染症,黃熱病,伊波拉病毒感染,拉薩熱,馬堡病毒出血熱,裂谷熱";

disease_data[0][5]="棘狀阿米巴,茲卡病毒感染,福氏內格里阿米巴腦膜腦炎,貓抓病,NDM-1腸道菌感染症,發熱伴血小板減少綜合症,細菌性腸胃炎,常見腸道寄生蟲病簡介,中華肝吸蟲感染症,旋毛蟲感染症,肺吸蟲感染症,廣東住血線蟲感染症,鸚鵡熱,亨德拉病毒及立百病毒感染症,第二型豬鏈球菌感染症,病毒性腸胃炎,沙門氏菌感染症,疥瘡感染症,頭蝨感染症,李斯特菌症,隱球菌症,RE抗藥性檢測,VISA/VRSA抗藥性檢測,肺囊蟲肺炎,淋巴絲蟲病";
//傳染疾病
disease_data[1]=["蟲媒傳染","食物或飲水傳染","空氣或飛沫傳染",
                 "性接觸或血液傳染","接觸傳染"];
				 
disease_data[1][0]="登革熱,日本腦炎,西尼羅熱,萊姆病,裂谷熱,屈公病,鼠疫,地方性斑疹傷寒,黃熱病,發熱伴血小板減少綜合症,瘧疾,恙蟲病,流行性斑疹傷寒,茲卡病毒感染,淋巴絲蟲病";

disease_data[1][1]="腸病毒感染併發重症,副傷寒,阿米巴性痢疾,庫賈氏病,急性病毒性Ａ型肝炎,弓形蟲感染症,第二型豬鏈球菌感染症,旋毛蟲感染症,人芽囊原蟲感染,腸道出血性大腸桿菌感染症,沙門氏菌感染症,霍亂,病毒性腸胃炎,急性病毒性Ｅ型肝炎,李斯特菌症,常見腸道寄生蟲病簡介,肺吸蟲感染症,傷寒,桿菌性痢疾,肉毒桿菌中毒,細菌性腸胃炎,小兒麻痺症/急性無力肢體麻痺,布氏桿菌病,中華肝吸蟲感染症,廣東住血線蟲感染症";

disease_data[1][2]="新型A型流感,多重抗藥性結核病,嚴重急性呼吸道症候群,先天性德國麻疹症候群,百日咳,流行性腦脊髓膜炎,漢他病毒症候群,Ｑ熱,水痘併發症,流感,麻疹,流行性腮腺炎,侵襲性肺炎鏈球菌感染症,退伍軍人病,肺囊蟲肺炎,鸚鵡熱,結核病,中東呼吸症候群冠狀病毒感染症,德國麻疹,白喉,侵襲性ｂ型嗜血桿菌感染症,天花,隱球菌症";

disease_data[1][3]="人類免疫缺乏病毒感染,急性病毒性Ｂ型肝炎,梅毒,急性病毒性Ｃ型肝炎,淋病,急性病毒性Ｄ型肝炎";

disease_data[1][4]="福氏內格里阿米巴腦膜腦炎,類鼻疽,新生兒破傷風,漢生病,疱疹B病毒感染症,馬堡病毒出血熱,狂犬病,鉤端螺旋體病,疥瘡感染症,貓抓病,亨德拉病毒及立百病毒感染症,伊波拉病毒感染,炭疽病,破傷風,頭蝨感染症,兔熱病,拉薩熱";

//常見疾病
disease_data[2]=["登革熱","嚴重急性呼吸道症候群","結核病","新型A型流感"];