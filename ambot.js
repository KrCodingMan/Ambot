var kiman = []
var check = []
var persondic = {}
let reset;
var fixeddic  = {}
fixeddic["ReadMe","readme"] = ["readme1","reamd2"];


function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
java.lang.Thread.sleep(1000);

if(["안녕","ㅎㅇ"].includes(msg.trim()))
{
    replier.reply(randompicker(["ㅎㅇ","안녕","Hello","Hi","🖐"]));
}
else if(["?","??","???"].includes(msg.trim()))
{
    replier.reply(randompicker(["?","??","???","?_?"]));
}
else if(["ㅋ","ㅋㅋ","ㅋㅋㅋ"].includes(msg.trim()))
{
    replier.reply(randompicker(["ㅋ","ㅋㅋ","ㅋㅋㅋ","ㅋ_ㅋ","zzzzz","웃어?","웃음이 나와?", "뭐가 웃겨?", "ㅎㅎ","웃지마"]));
}
else if(["ㄷㄷ","ㄷㄷㄷ"].includes(msg.trim()))
{
    replier.reply(randompicker(["ㄷㄷ","ㄷㄷㄷ"]));
}
else if(["/디스코드","/디코","디스코드주소"].includes(msg.trim()))
{
    replier.reply("https://discord.gg/r4QgbbaX5y");
}
else if(["/소개양식","/소개좀","/소개ㄱ"].includes(msg.trim()))
{
    replier.reply("성별 :\n나이:\n가슴사이즈 :\n커플유무 :\n발사이즈:\n키:\n몸무게:\n재산:\n빚유무:\n엠생유무:\n직업:\n");
}
else if(["/점심","/저녁","/저녁추천","/점심추천"].includes(msg.trim()))
{
    replier.reply(randompicker(["청국장찌개", "순두부찌개", "고추장찌개","부대찌개","김치찌개","된장찌개","비지찌개","전찌개","동태찌개","갈비찜","닭볶음탕","스테이크","아귀찜","삼계탕","수육","월날쌈","불고기","찜닭","제육덮밥","비빔밥","오므라이스","카레덮밥","김치볶음밥","오징어덮밥","짜장밥","야채볶음밥","간장밥","육개장","떡국","미역국","콩나물국","북엇국","소고기무국","시래깃국","된장국","감잣국","튀김","소시지야채볶음","골뱅이소면","부침개","어묵탕","닭똥집볶음","순대볶음","토스트","또띠아","떡꼬치","쿠키","떡볶이","호떡","샌드위치","시리얼","팝시클","라면","토마토스파게티","크림스파게티","봉골레스파게티","잔치국수","비빔국수","칼국수","우동","볶음우동","콩국수","전복죽","추어탕","장어구이","낙지연포탕","갈비탕","훈제오리","닭죽","삼계탕","더덕구이","오니기리","캘리포니아롤","스시","유부초밥","밥버거","스팸","볶음밥","투움바파스타","김밥","알로하김밥","호두크림치즈김밥","바나나쉐이크","닭가슴살샐러드","리코타치즈","단호박스프","양배추스프","두부스테이크","연어덮밥","오차즈케","불고기브리또","샐러드파스타","크로크무슈","몬테크리스토","팬케이크","치킨마요덮밥","오믈렛","프렌치토스트","조개스프","에그베네딕트","만둣국","떡국","라자냐","칠리새우","잡채","누룽지","고추장찌개","포테이토피자","냉채라면","짜파구리","진라면","달걀","야채볶음","프리타타","계란말이","계란찜","스카치에그","스터프드에그","깐풍기","탕수육","두루치기","제육볶음","동파육","중국집볶음밥","잡채밥","짬뽕밥","짬뽕","삼선짜장","삼선짬뽕","쟁반짜장","닭갈비","치킨까스","돈까스","치즈돈까스","고구마치즈돈까스","주먹밥","리조또","크로켓","덴푸라","가츠동","하이라이스","오코노미야끼","미소시루","우동","규동","라멘","마파두부","고추잡채","곱창","막창","대창","해물파전","파전","쌈밥","칼국수","수제비","팥죽","그라탕","뇨끼","나폴리피자","페투치니알프레도","파니니","팟타이","카오팟","나시고랭","쌀국수","연유라떼","분짜","짜조","반미(바게트샌드위치)","허머스","팔라펠","케밥","삭슈카","페투쉬","필라프","쿠스쿠스","피타","무사카","맥앤치즈","클램차우더","핫도그","햄버거","불고기버거","빅맥","상하이버거","미트로프","후라이드치킨","양념치킨","간장치킨","닭강정","잠발라야","바비큐","라타투이","프렌치토스트","뵈프부르기뇽","뱅쇼","크로크무슈","마카롱","부야베스","끼슈","코코뱅","가리가리군", "가리비", "거북알", "거북이", "고드름", "구구콘", "깐도리", "꽃게랑", "누가바", "대롱대롱", "더블비얀코", "더위사냥", "돼지바", "마카롱아이스바", "말랑카우", "메로나", "바밤바", "보석바", "부라보콘", "붕어싸만코", "비비빅", "빅바", "빙빙바", "빠삐코", "빵또아", "빵빠레", "뽕따", "설레임", "셀렉션", "슈퍼콘", "쌍쌍바", "아맛나", "아시나요", "아이스파인", "엑설런트", "엔초", "요맘때", "옥메와까", "옥동자", "메가톤바", "와일드바디", "까마쿤", "와(아이스크림)", "와삭바", "울퉁불퉁", "월드콘", "조안나", "죠크박", "죠스바", "스크류바", "수박바", "쮸쮸바", "찬호박", "찰떡아이스", "캔디바", "쿠앤크", "쿠키오", "탱크보이", "테트리스", "토끼", "투게더", "티코", "폴라포", "하겐다즈", "호두마루", "홈런볼 아이스", "하겐다즈", "레드망고", "나뚜루", "구스띠모", "베스킨라빈스31","롯데리아","맥도날드","치즈버거","버거킹","족발","백숙","삼겹살","보쌈","육회","육사시미","육회비빔밥","순대","홍어회","물회","굴비","매운탕","북엇국","해물찜","오징어볶음","아귀찜","골뱅이무침","빈대떡","호박전","육전","동래파전","수제비","떡국","떡만둣국","시래기국","선지국","순댓국","소머리국밥","콩나물국밥","화채","토란국","재첩국","곰탕","닭곰탕","설렁탕","연포탕","닭도리탕","고기국수","막국수","비빔국수","김치말이국수","칼국수","초계국수","도토리묵","밀면","냉면","찹쌀도넛","회오리감자","너비아니","뒷고기","전복죽","야채죽"]));
}
else if(["/담배","/담배추천","담배"].includes(msg.trim()))
{
    replier.reply(randompicker(["말보루", "메비우스", "카멜","던힐","로스만","켄트","글로","팔리아멘트","버지니아 슬림","라크","오아시스 바이샤","아이코스","더원","디스","레종","보헴 시가","에쎄","타임","다비도프","클라우드 나인","엔츠","토니노 람보르기니","릴","장미","도라지","한라산","라일락","그냥 금연해,,,"]));
}
else if(["/vs","/대결","/ㄷㄱ"].includes(msg.trim()))
{
    replier.reply(randompicker(["폰헙 vs 히토미","탈모되고 방장이랑 사귀기 vs 풍성하고 평생 모쏠","출중한 외모지만 더러운 뒷과거(호빠,등..)의 이성과 사귀기 vs 개 씹못생긴 히키코모리와 사귀기","이 인생 다시살기 vs 어떻게 될지모를 인생으로 환생ex)개미,북한주민,이재용,밸희나 등","하스스톤 vs 유희왕","자기 애완견과 모르는사람이 동시에 물에 빠졌다. \n 애완견구하기 vs 모르는 사람 구하기","근무시간,다른 조건이 다 같다는하에 \n 주 5일제 세후 210 vs 주6일제 세후 280","추성훈 앞에서 사랑이 때리기 vs 사랑이 앞에서 추성훈 때리기","애 셋 낳고 1년 2000만원씩받기 vs 그냥 애없이 살기","다시 태어났는데\n 20살100억 vs 46살 만수르","10억받기 vs 원빈급 탑스타 외모 랜덤으로 가지기","똥 맛 카레 vs 카레맛 똥","짬짜면 vs 짜짬면","매운 진라면 vs 순한 진라면","순대에 소금 vs 간장 vs 쌈장","산악회 vs 기혼썸 오픈카톡방","동성이랑 여행가기 vs 이성이랑 코인노래방 방 따로잡고 놀기","미인 간호사만 있는 한의원 vs 늙은 화타가 있는 대학병원","안경 vs 렌즈","기혼썸 카카오톡 오픈채팅방 vs 앰생방","알고보니 연인이 페미니스트 vs 알고보니 연인이 빚이 2000만원","할머니 vs 할아버지","엄마 vs 아빠","고졸 경력 3년차 vs 대졸 무경력","앰생방 5년차 방장하기 vs 대통령 하루하고 탄핵되기","방장이랑 한방으로 일주일 보내기 vs 그냥 집에서 자기","부모님 패는 서울대생 vs 지나가는 배재대생","5억받고 밸휘나랑 5분칸 격렬키스 vs 그냥 살기" ,"킥라니박기 vs 자라니박기" ,"수학 vs 영어","씹덕 vs 겜창","치킨 vs 피자","아프리카tv vs 트위치","페북 vs 인스타","서울 vs 부산", "안드로이드 vs 아이폰","마블 vs DC","방장이랑 300만원으로 3일간 놀기 vs 아이유랑 밥 한끼 ","남침 vs 북침","네이버 웹툰 VS 다음 웹툰","포켓몬 vs 디지몬","드래곤볼 VS 슬램덩크","닌텐도 VS 소니 VS 마이크로소프트","버거킹 VS 맥도날드 VS 롯데리아 VS 맘스터치","GS25 VS CU VS 세븐일레븐","담배중독 vs 술중독", "한달연봉2억vs무기징역3년", "가슴 vs 골반","애니 vs 게임","소환사의협곡 vs 롤체","100억 받기 vs 고자되기","호랑이 VS 사자","부먹 vs 찍먹","개 VS 고양이","일베 vs 메갈","메시 vs 호날두","중국 VS 일본","미국 VS 중국","닭 VS 달걀","물냉 vs 비냉","후라이드 vs 양념","짜장면 vs 짬뽕","안심 vs 등심","족발 vs 보쌈","간장게장 vs 양념게장","히오스 vs 롤","소주 vs 맥주","밥 vs 빵 vs 면","코카콜라 vs 펩시콜라","여당 vs 야당","기독교 vs 불교","SK텔레콤 VS LG U+ VS KT","대한항공 VS 아시아나항공","CGV VS 롯데시네마 VS 메가박스"]));
    var r= Math.floor(Math.random()*5)
    if(r ==0)
    {
       var randnum = Math.floor(Math.random()*10000);
       java.lang.Thread.sleep(1000+randnum);
       var listt = ["ㄷㅎ","ㄷㅈ","닥후","닥전","이건 닥전이지ㅋㅋ","이건 닥후지ㅋㅋ"];
          var randdnum = Math.floor(Math.random()*listt.length);
          replier.reply(listt[randdnum]);
    }
}
else if(["/심심","/나심심해","/심심해","심심해","심심"].includes(msg.trim()))
{
    replier.reply(randompicker(["http://turnyournameintoaface.com/ \n 이름을 얼굴로 바꿔주는 사이트","https://www.16personalities.com/ko/ \n 성격 유형검사 ","어쩌라고","https://www.piku.co.kr \n 이상형 월드컵","https://bellruns.com/ \n 밸런스 게임","https://kr.vonvon.me/quiz/13650 \n 정신연령테스트","https://virtualpiano.net/ \n 피아노 치기", "http://www.coldvoid.com/ \n 거미줄 끊기"]));
}
else if(["/아재개그","/아재개그해줘"].includes(msg.trim()))
{
   replier.reply("준비중ㅎ;");
}
else if(["/시간","/지금","/지금시간"].includes(msg.trim()))
{
    var day = new Date();
    replier.reply("지금은 " + day.getHours() + "시 " + day.getMinutes() + "분 " + day.getSeconds() + "초입니다.");
}
 if(["/ㅊㅊ","/출첵"].includes(msg.trim())) {
    let sw = "";
    sw += ". " + sender
    check.push(sw)
    replier.reply(sw+" 출첵 완료")
}
if(msg.trim() == "/출석목록") {
    var day = new Date();
    let list = "";
    for(var i = 0; i < check.length; i++) {
        list += check[i] + "\n";
    }
    replier.reply("["+room+"]\n" + day.getFullYear()+"년 " + day.getMonth() + "월 "+ day.getDate() + "일\n" +  "[출석 리스트]\n"+list)
}
if(msg.trim()== "/출석리셋"){
check=[];
}


if(msg.indexOf("/기만자추가")==0) {
   var cut= msg.substr(7);
    kiman.push(cut + " (" + sender + " 추가함.)");
       replier.reply(cut+" 추가 완료")
}
else if(["/기만자목록","/기만자","/처형대상"].includes(msg.trim())) {
    let list = "";
    for(var i = 0; i < kiman.length; i++) {
        list += kiman[i] + "\n";
    }
    replier.reply("[기만자 리스트]\n"+list)
}
else if(["내가 왜 기만이야","/기만자목록리셋","/기만리셋"].includes(msg.trim())){
   kiman = [];
   replier.reply(" 리셋 완료 ")
}
if(["/앰생력확인","/앰확","/앰생력측정","/앰측"].includes(msg.trim())){
   if(sender in persondic)
   {
   }
   else
   {
      var rannum = Math.floor(Math.random()*30000);
      persondic[sender] = rannum;
   }
   replier.reply(sender + "님의 앰생력은 "   + persondic[sender] +  "입니다.");
}
if(msg.trim() == "엄"){
   replier.reply("준")
}if(msg.trim() == "준"){
   replier.reply("식")
}if(msg.trim() == "식"){
   var r= Math.floor(Math.random()*2) // r변수 선언 범위는 0~1까지의 정수
   if( r == 0 ) {             // 만약 r값이 0일때
   replier.reply("엄")
   }
   if( r == 1) {      //만약  r값이 1일때
   replier.reply("엄준식")
   }
}if(msg.trim() == "섹"){
   replier.reply("스")
}if(msg.trim() == "스"){
   replier.reply("섹")
}if(msg.trim() == "ㄹㅇ"){
   replier.reply("ㄹㅇㅋㅋ")
}if(msg.trim() == "ㄹㅇㅋㅋ"){
   replier.reply("ㅋㅋㄹㅇ")
}if(msg.trim() == "후"){
   replier.reply("장")
}if(msg.trim() == "쫀아!"||msg.trim() == "쫀밤!"){
   var same = msg;
      replier.reply(same);
}
else if(["미안","ㅈㅅ","죄송"].includes(msg.trim())){
   var list = ["미안하면 다야?","뭐가 미안한데? ","미안한건 알아?","미안한거 맞아?"];
   var rannum = Math.floor(Math.random()*list.length);
   replier.reply(list[rannum]);
}if(["/개발자","/이거누가만든겨","/누가만듬","이거누가만든겨"].includes(msg.trim())){ 
   replier.reply("만든사람 : 코딩맨 aka 치킨맨 \n 개발언어 : JAVa script");
}if(msg.trim() == "@Ambot"){
   replier.reply("왜");
}
if(["/명령어","/help","/?","/도와줘"].includes(msg.trim()))
{
	replier.reply("[만든이]코딩맨\n[버전]1.03\n[명령어]\n디스코드,디코,디코주소\n시간,지금\n소개양식\n점심,저녁\n출첵,ㅊㅊ,출석목록\n기만자추가,기만목록,기만자목록\n앰생력확인,앰생력측정\n궁합봐줘이름,이름\nvs,대결,ㄷㄱ\n궁합봐줘\n명령어,help\n개발자,이거누가만든겨")
}
if(sender in persondic)
{
   persondic[sender] = persondic[sender] + Math.floor(Math.random()*3);
}
}

function randompicker(list){
    var rannum = Math.floor(Math.random()*list.length);
    return list[rannum];
}

