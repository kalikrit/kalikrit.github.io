var app = angular.module('instantSearch',[]);

app.filter('searchFor', function(){
    return function(arr, searchString){

        if(!searchString) return [];
        
        var result = [];

        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){

            if(item.name.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

        });

        return result; 
    };               
});

function InstantSearchController($scope){
    $scope.items = [
        {name:'Antalya',n:1,
        users:[{'name': 'Бойко Мария', 'ava': 'https://sun9-11.userapi.com/c840637/v840637293/9ad/wGO_HX8c4hQ.jpg', 'id': 138825598}]
        },
        {name:'Bat Yam',n:1,
        users:[{'name': 'Харлашин Максим', 'ava': 'https://pp.userapi.com/c623325/v623325749/4d583/NFYL73ljYy4.jpg', 'id': 6648749}]
        },
        {name:'Bergamo',n:1,
        users:[{'name': 'Овчарик Роман', 'ava': 'https://pp.userapi.com/c841022/v841022788/17868/YEZJkLPJ0NE.jpg', 'id': 158926543}]
        },
        {name:'Berlin',n:1,
        users:[{'name': 'Schlotthauer Jürgen', 'ava': 'https://pp.userapi.com/c840338/v840338281/697a/RFvoalfrlcY.jpg', 'id': 355701402}]
        },
        {name:'Boston',n:3,
        users:[{'name': 'Kalinina Olga', 'ava': 'https://pp.userapi.com/c307510/v307510968/5866/mDdV459neGY.jpg', 'id': 11698968}, {'name': 'Шахов Артём', 'ava': 'https://pp.userapi.com/c637131/v637131996/4c91b/bmh0X4KBUtk.jpg', 'id': 33023996}, {'name': 'Ellington Nikolina', 'ava': 'https://pp.userapi.com/c639518/v639518032/3ca52/h9hrLwz9X34.jpg', 'id': 280232672}]
        },
        {name:'Bridgetown',n:1,
        users:[{'name': 'Bk Masta', 'ava': 'https://pp.userapi.com/c837528/v837528898/4ad41/tuvUC8-XEd4.jpg', 'id': 337312712}]
        },
        {name:'Brugge',n:1,
        users:[{'name': 'Кучеренко Александр', 'ava': 'https://pp.userapi.com/c629518/v629518578/4f6f5/O0fyA8FHgfg.jpg', 'id': 185847578}]
        },
        {name:'Buenos Aires',n:1,
        users:[{'name': 'Якимова Лера', 'ava': 'https://pp.userapi.com/c836635/v836635470/6064d/9kQQhpYR6O4.jpg', 'id': 253294977}]
        },
        {name:'California',n:1,
        users:[{'name': 'Today Just', 'ava': 'https://pp.userapi.com/c639420/v639420247/4edc2/yNVsCWbQSec.jpg', 'id': 306037287}]
        },
        {name:'Detroit',n:2,
        users:[{'name': 'Arustamyan Milena', 'ava': 'https://pp.userapi.com/c836721/v836721962/60f16/jKroZSC0CE8.jpg', 'id': 155368355}, {'name': 'Джалоян Вачик', 'ava': 'https://pp.userapi.com/c626825/v626825986/3abaf/hFGJt_Pu9Zs.jpg', 'id': 321271986}]
        },
        {name:'Doha',n:1,
        users:[{'name': 'Brailiak Liubov', 'ava': 'https://pp.userapi.com/c627125/v627125100/30a32/5rB2j2ODr_g.jpg', 'id': 298928100}]
        },
        {name:'Eindhoven',n:1,
        users:[{'name': 'Проданец Богдан', 'ava': 'https://pp.userapi.com/c836539/v836539095/5e852/AlQv4h2YdIc.jpg', 'id': 41614096}]
        },
        {name:'Formentera de Segura',n:1,
        users:[{'name': 'Ерогина Ирина', 'ava': 'https://pp.userapi.com/c836721/v836721018/4c510/xzsRf7Ak4JU.jpg', 'id': 16276947}]
        },
        {name:'Frankfurt am Main',n:2,
        users:[{'name': 'Bergerstein Alex', 'ava': 'https://pp.userapi.com/c631726/v631726354/5a/B8_Z6tNGQ_4.jpg', 'id': 334934354}, {'name': 'Константинов Алексей', 'ava': 'https://pp.userapi.com/c837421/v837421664/56c1c/PUPrQf7-rDc.jpg', 'id': 344394581}]
        },
        {name:'Gaborone',n:1,
        users:[{'name': 'Капитанов Олег', 'ava': 'https://sun9-11.userapi.com/c638924/v638924501/4b8f7/4nHG32_LTTI.jpg', 'id': 2127981}]
        },
        {name:'Helsingborg',n:1,
        users:[{'name': 'Чудакова Елена', 'ava': 'https://pp.userapi.com/c604628/v604628332/29abf/lHeNTejN_DQ.jpg', 'id': 90113332}]
        },
        {name:'Helsinki',n:2,
        users:[{'name': 'Беликов Павел', 'ava': 'https://pp.userapi.com/c316931/v316931311/6c46/ymOCBeVXobs.jpg', 'id': 2518311}, {'name': 'Иванов Алексей', 'ava': 'https://pp.userapi.com/c841438/v841438096/6897/lsy9PG9iLBs.jpg', 'id': 8210908}]
        },
        {name:'London',n:2,
        users:[{'name': 'Белякова Елена', 'ava': 'https://pp.userapi.com/c837231/v837231877/4f6a8/bQqzW2tyzXE.jpg', 'id': 4041877}, {'name': 'Пешков Александр', 'ava': 'https://pp.userapi.com/c639116/v639116225/21c7a/o8fZFPfQcYM.jpg', 'id': 97490225}]
        },
        {name:'Los Angeles',n:1,
        users:[{'name': 'Елисеев Дмитрий', 'ava': 'https://pp.userapi.com/c637317/v637317709/21bfb/l643mx03WXs.jpg', 'id': 229532709}]
        },
        {name:'Luanda',n:1,
        users:[{'name': 'Кирьянов Максим', 'ava': 'https://pp.userapi.com/c636426/v636426640/6c4fb/qqHijZ-NI4s.jpg', 'id': 17249640}]
        },
        {name:'Madaba',n:1,
        users:[{'name': 'Altworld Zhanna', 'ava': 'https://pp.userapi.com/c840437/v840437928/4a96/h9PZD741BjI.jpg', 'id': 41883011}]
        },
        {name:'Madrid',n:1,
        users:[{'name': 'Тимочко Юра', 'ava': 'https://pp.userapi.com/c836120/v836120964/60dda/KqNYtSDM2yY.jpg', 'id': 230097350}]
        },
        {name:'Manchester',n:1,
        users:[{'name': 'Hippopotamus Krutoinagluho', 'ava': 'https://pp.userapi.com/c840122/v840122338/148e6/n4mOnbMqp4g.jpg', 'id': 4770338}]
        },
        {name:'Miami',n:1,
        users:[{'name': 'Хантер Надежда', 'ava': 'https://pp.userapi.com/c840138/v840138182/26f81/M-dSUsXDS70.jpg', 'id': 339402356}]
        },
        {name:'New York City',n:1,
        users:[{'name': 'Занин Антон', 'ava': 'https://pp.userapi.com/c639921/v639921800/39706/bkIoM3b-U-E.jpg', 'id': 7349771}]
        },
        {name:'Nîmes',n:1,
        users:[{'name': 'Хохлов Павел', 'ava': 'https://pp.userapi.com/c424116/v424116311/915e/bWxmeByjdkc.jpg', 'id': 193025311}]
        },
        {name:'Oslo',n:1,
        users:[{'name': 'Дёке Сайдинг', 'ava': 'https://pp.userapi.com/c836739/v836739274/55b3c/of4jqHnhseY.jpg', 'id': 437408944}]
        },
        {name:'Philadelphia',n:1,
        users:[{'name': 'Висилиц Олег', 'ava': 'https://pp.userapi.com/c840334/v840334713/6dc8/RPwLwhm0czA.jpg', 'id': 235956953}]
        },
        {name:'Rio de Janeiro',n:1,
        users:[{'name': 'Сидоренко Дарья', 'ava': 'https://pp.userapi.com/c638227/v638227368/5db97/JDcIiq5o-uk.jpg', 'id': 180300684}]
        },
        {name:'Rīga',n:1,
        users:[{'name': 'Биктимиров Константин', 'ava': 'https://pp.userapi.com/c837127/v837127235/4099d/Kwmv3oXTLKA.jpg', 'id': 72318235}]
        },
        {name:'Saarbrücken',n:1,
        users:[{'name': 'Алябьев Роман', 'ava': 'https://pp.userapi.com/c604531/v604531029/1dc47/UPCFbCE1tkA.jpg', 'id': 9067029}]
        },
        {name:'Salzburg',n:1,
        users:[{'name': 'Федорова Снежана', 'ava': 'https://pp.userapi.com/c840337/v840337167/7523/bzXY8Ass01E.jpg', 'id': 53169504}]
        },
        {name:'Santa Monica',n:1,
        users:[{'name': 'Миракова Каролина', 'ava': 'https://pp.userapi.com/c841121/v841121545/15d6a/WSio9COkrWE.jpg', 'id': 182865523}]
        },
        {name:'Sderot',n:1,
        users:[{'name': 'Халитов Станислав', 'ava': 'https://pp.userapi.com/c841132/v841132021/b520/0vRFVedZ7Uk.jpg', 'id': 144053813}]
        },
        {name:'Sevilla',n:1,
        users:[{'name': 'Ражбадинов Темирхан', 'ava': 'https://pp.userapi.com/c638429/v638429922/47452/StZr7efe39c.jpg', 'id': 321229922}]
        },
        {name:'Stockholm',n:1,
        users:[{'name': 'Грицюс Элина', 'ava': 'https://pp.userapi.com/c639627/v639627757/38ec5/kRs4RHzlhZo.jpg', 'id': 94896341}]
        },
        {name:'Sydney',n:1,
        users:[{'name': 'Umurbaev Ravil', 'ava': 'https://sun9-11.userapi.com/c836621/v836621583/58e6c/k0E6_nDlUis.jpg', 'id': 361041496}]
        },
        {name:'São Paulo',n:1,
        users:[{'name': 'Garcia Leonardo', 'ava': 'https://pp.userapi.com/c837722/v837722830/5bc08/QbT0ep6Q0MU.jpg', 'id': 287210888}]
        },
        {name:'Tirana',n:1,
        users:[{'name': 'Мермер Феркан', 'ava': 'https://pp.userapi.com/c836135/v836135797/65bd4/fhzLNr2KhQ0.jpg', 'id': 153734220}]
        },
        {name:'Tokyo',n:1,
        users:[{'name': 'Киригая Кадзуто', 'ava': 'https://pp.userapi.com/c841431/v841431804/19c9c/FCCc6-w23U8.jpg', 'id': 429702600}]
        },
        {name:'Vilnius',n:1,
        users:[{'name': 'Sobolevskij Artur', 'ava': 'https://pp.userapi.com/c617624/v617624355/216c1/dBxZiXe7O48.jpg', 'id': 274560355}]
        },
        {name:'Wilhelmshaven',n:1,
        users:[{'name': 'Проценко Татьяна', 'ava': 'https://pp.userapi.com/c837724/v837724860/3dc2b/nxLPG00yv4I.jpg', 'id': 319860}]
        },
        {name:'Wrocław',n:1,
        users:[{'name': 'Gongalski Andrzej', 'ava': 'https://pp.userapi.com/c841535/v841535724/215f2/jikZ6LNUwAU.jpg', 'id': 285838640}]
        },
        {name:'Würzburg',n:1,
        users:[{'name': 'Шуткина Анастасия', 'ava': 'https://sun9-11.userapi.com/c837333/v837333998/7865f/mKE-7Dtmmt4.jpg', 'id': 9445625}]
        },
        {name:'Абакан',n:4,
        users:[{'name': 'Балакирев Андрей', 'ava': 'https://pp.userapi.com/c636625/v636625552/10f5b/vI4MUndQbbY.jpg', 'id': 2081552}, {'name': 'Винник Елена', 'ava': 'https://pp.userapi.com/c626529/v626529154/10e5b/TikHWg2gVGU.jpg', 'id': 17615154}, {'name': 'Бухтуев Георгий', 'ava': 'https://pp.userapi.com/c629407/v629407355/1da2d/EjKgmafydJE.jpg', 'id': 230627355}, {'name': 'Ряскина Полина', 'ava': 'https://pp.userapi.com/c837639/v837639519/5017c/JuufObXOmHQ.jpg', 'id': 252042361}]
        },
        {name:'Агинское',n:1,
        users:[{'name': 'Батомункуев Батожаб', 'ava': 'https://pp.userapi.com/c9809/u7192839/e_5cd86aa0.jpg', 'id': 7192839}]
        },
        {name:'Адлер',n:2,
        users:[{'name': 'Каменев Антон', 'ava': 'https://pp.userapi.com/c638519/v638519626/47b62/szJLoweYKsE.jpg', 'id': 61462626}, {'name': 'Златопольский Макс', 'ava': 'https://pp.userapi.com/c638527/v638527025/68b19/Gv7sHGbOvQg.jpg', 'id': 348234450}]
        },
        {name:'Азнакаево',n:1,
        users:[{'name': 'Хайруллин Илдар', 'ava': 'https://pp.userapi.com/c322325/v322325627/29cf/hb_m-ErKnzg.jpg', 'id': 105785627}]
        },
        {name:'Азов',n:4,
        users:[{'name': 'Данильченко Анатолий', 'ava': 'https://pp.userapi.com/c604527/v604527351/4ae4c/-QnAdHp0iUc.jpg', 'id': 225196351}, {'name': 'Povetkin Vlad', 'ava': 'https://pp.userapi.com/c836734/v836734397/5aff5/82_fki17bbI.jpg', 'id': 271674375}, {'name': 'Камалеева Наталья', 'ava': 'https://pp.userapi.com/c638621/v638621722/60a97/C_yuaF58_3A.jpg', 'id': 279384873}, {'name': 'Хворов Вячеслав', 'ava': 'https://pp.userapi.com/c836528/v836528258/37ea5/RQZV2L_7mCg.jpg', 'id': 398368258}]
        },
        {name:'Акбулак',n:1,
        users:[{'name': 'Ахметов Назарбай', 'ava': 'https://pp.userapi.com/c9672/v9672335/4d/_as-ief-G1Q.jpg', 'id': 228166335}]
        },
        {name:'Актаныш',n:2,
        users:[{'name': 'Кирамова Инзиля', 'ava': 'https://pp.userapi.com/c638125/v638125984/33a96/z1-TYeuN7ZM.jpg', 'id': 45642984}, {'name': 'Шириева Эльвира', 'ava': 'https://pp.userapi.com/c636926/v636926332/40e79/x95bi9rH_zE.jpg', 'id': 271332332}]
        },
        {name:'Актау',n:1,
        users:[{'name': 'Bazarbay Bagdat', 'ava': 'https://pp.userapi.com/c604619/v604619939/4773/CpZsE-S7VDY.jpg', 'id': 257071939}]
        },
        {name:'Актобе',n:1,
        users:[{'name': 'Амиров Айдын', 'ava': 'https://pp.userapi.com/c405920/v405920798/57de/LSoaEpZDLR8.jpg', 'id': 10872798}]
        },
        {name:'Александрия',n:1,
        users:[{'name': 'Белов Виталя', 'ava': 'https://pp.userapi.com/c841320/v841320852/1010c/AgdL-oMUyJ4.jpg', 'id': 337897974}]
        },
        {name:'Александров',n:1,
        users:[{'name': 'Вячеслав Иванов', 'ava': 'https://pp.userapi.com/c636716/v636716837/65e33/LTZuJxTPetU.jpg', 'id': 424261837}]
        },
        {name:'Алексин',n:2,
        users:[{'name': 'Серёгин Сергей', 'ava': 'https://pp.userapi.com/c626519/v626519753/4ac75/3aeguWgtJls.jpg', 'id': 21349753}, {'name': 'Зобков Сергей', 'ava': 'https://pp.userapi.com/c637827/v637827648/5ada7/1RrVNIT3Q90.jpg', 'id': 75587648}]
        },
        {name:'Алеховщина',n:1,
        users:[{'name': 'Устинкина Ирина', 'ava': 'https://pp.userapi.com/c841230/v841230932/1c126/SVSHIZa2wzk.jpg', 'id': 12703176}]
        },
        {name:'Алматы',n:9,
        users:[{'name': 'Ainabekov Azat', 'ava': 'https://pp.userapi.com/c410421/v410421264/a983/Ghwo6Fr1w-Y.jpg', 'id': 1104264}, {'name': 'Бойко Алексей', 'ava': 'https://pp.userapi.com/c412530/v412530195/98d1/F2E0hGLYCPs.jpg', 'id': 5186195}, {'name': 'Билерт Оля', 'ava': 'https://pp.userapi.com/c639117/v639117313/2adc1/wgrAE7GYhFI.jpg', 'id': 18495313}, {'name': 'Аленова Рита', 'ava': 'https://pp.userapi.com/c637222/v637222626/3587c/6WsYB75fEE0.jpg', 'id': 148189626}, {'name': 'Абилбаев Данияр', 'ava': 'https://pp.userapi.com/c623927/v623927350/13457/oBQL-UUFgqA.jpg', 'id': 195348350}, {'name': 'Абдреев Ислам', 'ava': 'https://pp.userapi.com/c841039/v841039832/14f39/wV9uhNOwzro.jpg', 'id': 215227368}, {'name': 'Кенжебакиев Нуржан', 'ava': 'https://pp.userapi.com/c627627/v627627617/50c43/dgX5uZYKtb8.jpg', 'id': 268154617}, {'name': 'Жакупов Арман', 'ava': 'https://pp.userapi.com/c836126/v836126688/5f89f/nSplhEfFXeo.jpg', 'id': 272049984}, {'name': 'Азаров Нурболат', 'ava': 'https://sun9-11.userapi.com/c540109/v540109913/26aae/vWSJqLncXgo.jpg', 'id': 320511913}]
        },
        {name:'Алушта',n:2,
        users:[{'name': 'Лапшин Михаил', 'ava': 'https://pp.userapi.com/c639222/v639222150/3931d/87BHR2MG_Ho.jpg', 'id': 5546954}, {'name': 'Пронькин Дима', 'ava': 'https://pp.userapi.com/c622422/v622422293/12b83/zMJ1ma_rh68.jpg', 'id': 262054293}]
        },
        {name:'Алчевск',n:1,
        users:[{'name': 'Мозолевская Анастасия', 'ava': 'https://pp.userapi.com/c638818/v638818529/6ac8f/Oay5zgiaXQE.jpg', 'id': 59014642}]
        },
        {name:'Альметьевск',n:4,
        users:[{'name': 'Мартынычев Андрей', 'ava': 'https://pp.userapi.com/c638220/v638220557/4f450/zGYCJvpfyn4.jpg', 'id': 30481104}, {'name': 'Ялалов Дамир', 'ava': 'https://pp.userapi.com/c638219/v638219446/3a934/xWTCKyeD_Sk.jpg', 'id': 163283446}, {'name': 'Зиннурова Милана', 'ava': 'https://pp.userapi.com/c625422/v625422151/214d9/ZRoMYUT6GjQ.jpg', 'id': 262992151}, {'name': 'Илюмжинова Лиля', 'ava': 'https://pp.userapi.com/c638226/v638226606/5937c/dAWAo8eYpMk.jpg', 'id': 319067349}]
        },
        {name:'Анапа',n:4,
        users:[{'name': 'Ткачук Артём', 'ava': 'https://pp.userapi.com/c638018/v638018170/5ba16/lgXTiWHAeB8.jpg', 'id': 253371}, {'name': 'Вершинин Николай', 'ava': 'https://pp.userapi.com/c402821/v402821947/446e/MR8KQELOql8.jpg', 'id': 26409947}, {'name': 'Кузьбар Мария', 'ava': 'https://pp.userapi.com/c638024/v638024600/67349/yMQls7pymeQ.jpg', 'id': 59311685}, {'name': 'Перевозкина Елена', 'ava': 'https://pp.userapi.com/c840227/v840227453/2b1d0/ROGDJg-gQKU.jpg', 'id': 80669396}]
        },
        {name:'Ангарск',n:2,
        users:[{'name': 'Козлов Андрей', 'ava': 'https://pp.userapi.com/c627723/v627723981/be51/Uhge0DvMiI0.jpg', 'id': 245992981}, {'name': 'Иванов Денис', 'ava': 'https://pp.userapi.com/c638131/v638131138/62d56/C3y0bl_3Gyg.jpg', 'id': 426159341}]
        },
        {name:'Апатиты',n:2,
        users:[{'name': 'Ретюнских Александра', 'ava': 'https://pp.userapi.com/c626429/v626429112/43b8c/yceg5OkalAk.jpg', 'id': 25299112}, {'name': 'Литош Михаил', 'ava': 'https://pp.userapi.com/c613516/v613516163/1cf4f/TJ0QC4ms000.jpg', 'id': 107112482}]
        },
        {name:'Арзамас',n:2,
        users:[{'name': 'Кудаков Сергей', 'ava': 'https://pp.userapi.com/c403823/v403823665/a91c/QR10RK6LAIc.jpg', 'id': 203393665}, {'name': 'Щербаков Максим', 'ava': 'https://pp.userapi.com/c638822/v638822035/2c234/49i7CjrtlHA.jpg', 'id': 291596035}]
        },
        {name:'Армавир',n:1,
        users:[{'name': 'Старынин Олег', 'ava': 'https://pp.userapi.com/c836525/v836525508/4f7dd/iutG7Mx9Nns.jpg', 'id': 147333798}]
        },
        {name:'Архангельск',n:10,
        users:[{'name': 'Неманова Оксана', 'ava': 'https://pp.userapi.com/c639430/v639430227/206b6/QnRfQPMv4a8.jpg', 'id': 6559227}, {'name': 'Левкова Елена', 'ava': 'https://pp.userapi.com/c638222/v638222335/c6ce/xPLxFPcC30E.jpg', 'id': 18852335}, {'name': 'Сметанин Артём', 'ava': 'https://pp.userapi.com/c837120/v837120450/478c6/5hQR-I3Qlc8.jpg', 'id': 19046075}, {'name': 'Пупышев Артём', 'ava': 'https://pp.userapi.com/c636719/v636719677/2d379/MgG2DM8AqVk.jpg', 'id': 31730677}, {'name': 'Ющенко Павел', 'ava': 'https://pp.userapi.com/c633728/v633728494/121bf/M2xX9NYwz_k.jpg', 'id': 42475494}, {'name': 'Tretyakov Ivan', 'ava': 'https://pp.userapi.com/c636723/v636723268/5084a/nmbClbXou7o.jpg', 'id': 49753268}, {'name': 'Луцева Ирина', 'ava': 'https://vk.com/images/camera_50.png', 'id': 231465751}, {'name': 'Карганов Александр', 'ava': 'https://pp.userapi.com/c837525/v837525034/242b7/5TyfmXXbvwA.jpg', 'id': 242463034}, {'name': 'Семенов Игнат', 'ava': 'https://pp.userapi.com/c617620/v617620966/16eec/UPc1pgL8FRY.jpg', 'id': 247634966}, {'name': 'Ritka Margo', 'ava': 'https://pp.userapi.com/c639116/v639116971/3788e/00_6zrNIEGc.jpg', 'id': 393309137}]
        },
        {name:'Астана',n:3,
        users:[{'name': 'Шиманский Николай', 'ava': 'https://pp.userapi.com/c841236/v841236945/f8c4/H9XyZA4-gG0.jpg', 'id': 69262841}, {'name': 'Муханбетжанов Сырым', 'ava': 'https://pp.userapi.com/c638716/v638716697/559e3/Pr45epgPBME.jpg', 'id': 149427633}, {'name': 'Саидов Тима', 'ava': 'https://pp.userapi.com/c837124/v837124910/c075/B3E5cdWro5w.jpg', 'id': 306673910}]
        },
        {name:'Астрахань',n:2,
        users:[{'name': 'Храмцовский Иван', 'ava': 'https://pp.userapi.com/c841527/v841527860/be74/g3TY_SoR9c4.jpg', 'id': 10694811}, {'name': 'Куликовская Дарья', 'ava': 'https://pp.userapi.com/c638324/v638324269/597e5/36Qcah7UYI0.jpg', 'id': 442778452}]
        },
        {name:'Атяшево',n:1,
        users:[{'name': 'Моисеев Александр', 'ava': 'https://pp.userapi.com/c837737/v837737271/208da/QTHbATr_BgA.jpg', 'id': 151776271}]
        },
        {name:'Ахтубинск',n:1,
        users:[{'name': 'Журавель Виктория', 'ava': 'https://pp.userapi.com/c841634/v841634207/17827/X_H0K_IP8J4.jpg', 'id': 50913643}]
        },
        {name:'Бабаево',n:1,
        users:[{'name': 'Королева Юлия', 'ava': 'https://pp.userapi.com/c637417/v637417778/569a5/4dMpf7HzXfc.jpg', 'id': 11369778}]
        },
        {name:'Балаково',n:3,
        users:[{'name': 'Зубаренков Андрей', 'ava': 'https://pp.userapi.com/c837138/v837138650/3abdc/mr4el_5OYUE.jpg', 'id': 2140650}, {'name': 'Краснова Наталья', 'ava': 'https://pp.userapi.com/c621509/v621509749/ac9e/UIM19HYXon0.jpg', 'id': 136645545}, {'name': 'Petrovskaya Lisa', 'ava': 'https://pp.userapi.com/c836429/v836429527/41ac8/z_PQD5Vm86k.jpg', 'id': 288917527}]
        },
        {name:'Балахна',n:1,
        users:[{'name': 'Антонов Санёк', 'ava': 'https://pp.userapi.com/c836231/v836231504/3eb4b/VIjwIO-QyI8.jpg', 'id': 21542504}]
        },
        {name:'Балашиха',n:5,
        users:[{'name': 'Яшин Сергей', 'ava': 'https://pp.userapi.com/c626925/v626925026/25a00/MAsHn3aLhFw.jpg', 'id': 1516026}, {'name': 'Рожнов Егор', 'ava': 'https://pp.userapi.com/c617716/v617716731/1e429/cihjwI4JHes.jpg', 'id': 4451731}, {'name': 'Лыков Евгений', 'ava': 'https://pp.userapi.com/c623327/v623327724/2d061/X38fGTH01WU.jpg', 'id': 108237724}, {'name': 'Белов Сергей', 'ava': 'https://pp.userapi.com/c638724/v638724068/53f7c/LauK16MjLNE.jpg', 'id': 254430068}, {'name': 'Кулешов Алексей', 'ava': 'https://pp.userapi.com/c841338/v841338844/1a681/rqG_6NZfShs.jpg', 'id': 268008421}]
        },
        {name:'Балтийск',n:1,
        users:[{'name': 'Волобуев Александр', 'ava': 'https://pp.userapi.com/c637226/v637226671/65c8b/XtorXtOkPsE.jpg', 'id': 11126251}]
        },
        {name:'Барановичи',n:2,
        users:[{'name': 'Лицкевич Михаил', 'ava': 'https://pp.userapi.com/c840029/v840029224/22550/LU8TNZJHTeo.jpg', 'id': 39360873}, {'name': 'Борисевич Виктор', 'ava': 'https://pp.userapi.com/c618017/v618017710/19994/82zUqdMXzzw.jpg', 'id': 140227710}]
        },
        {name:'Барнаул',n:5,
        users:[{'name': 'Абраменко Людмила', 'ava': 'https://pp.userapi.com/c636926/v636926390/33fd0/1QmgujPw6C8.jpg', 'id': 10073390}, {'name': 'Скляров Никита', 'ava': 'https://pp.userapi.com/c836628/v836628724/2614c/bMk_T-1GlhU.jpg', 'id': 30253724}, {'name': 'Леонтьева Снежана', 'ava': 'https://pp.userapi.com/c840125/v840125520/2624f/V8zwW7S1Meo.jpg', 'id': 257613442}, {'name': 'Середа Илья', 'ava': 'https://pp.userapi.com/c639228/v639228029/866b/JTeM3Qh9AV8.jpg', 'id': 277337029}, {'name': 'Машукова Ирина', 'ava': 'https://pp.userapi.com/c638231/v638231220/41880/Gt70Hyf1_1A.jpg', 'id': 331349220}]
        },
        {name:'Басим',n:1,
        users:[{'name': 'Нижегородов Виталий', 'ava': 'https://pp.userapi.com/c837728/v837728122/3ad3d/3djj23jToVY.jpg', 'id': 290140122}]
        },
        {name:'Белгород',n:17,
        users:[{'name': 'Пазюк Валерий', 'ava': 'https://sun9-11.userapi.com/c837626/v837626098/577f8/lyWS5DLzm-c.jpg', 'id': 1269438}, {'name': 'Цыбульник Тарас', 'ava': 'https://pp.userapi.com/c837723/v837723897/63f46/1FFyw2oxV7s.jpg', 'id': 1908920}, {'name': 'Кудинов Алексей', 'ava': 'https://pp.userapi.com/c619419/v619419173/14dd4/QgIxopvHMc4.jpg', 'id': 7397173}, {'name': 'Гиривенко Виталий', 'ava': 'https://pp.userapi.com/c837729/v837729475/54c13/UUsJnaJ4Q1M.jpg', 'id': 9473351}, {'name': 'Алферова Людмила', 'ava': 'https://pp.userapi.com/c841220/v841220172/1532d/67b3BzA5rYY.jpg', 'id': 11146133}, {'name': 'Парполита Екатерина', 'ava': 'https://pp.userapi.com/c639819/v639819860/431e0/cEocBaji_m0.jpg', 'id': 15907959}, {'name': 'Долгих Еля', 'ava': 'https://pp.userapi.com/c841033/v841033718/1a633/q6Wsj9LF41s.jpg', 'id': 18733352}, {'name': 'Нерубенко Александр', 'ava': 'https://pp.userapi.com/c837137/v837137664/fb5e/1NfxXSvyh_k.jpg', 'id': 21854664}, {'name': 'Покидов Виталий', 'ava': 'https://pp.userapi.com/c633630/v633630186/3b1ef/6qX5ubc0xJQ.jpg', 'id': 51215186}, {'name': 'Рубан Кирилл', 'ava': 'https://pp.userapi.com/c639825/v639825939/3f932/7BuCYnmuBvU.jpg', 'id': 87808432}, {'name': 'Резник Александр', 'ava': 'https://pp.userapi.com/c639726/v639726675/202a3/4iCebyNrM70.jpg', 'id': 161401675}, {'name': 'Гасанова Тамара', 'ava': 'https://pp.userapi.com/c624918/v624918879/35d2c/E9_1J2SBPno.jpg', 'id': 188036879}, {'name': 'Верховный Александр', 'ava': 'https://pp.userapi.com/c638030/v638030049/731e9/9PSIRII99P8.jpg', 'id': 255583987}, {'name': 'Попова Татьяна', 'ava': 'https://pp.userapi.com/c619129/v619129736/b0f5/_0V0HSyS3J4.jpg', 'id': 259996736}, {'name': 'Андреев Андрей', 'ava': 'https://pp.userapi.com/c636119/v636119865/3ae37/02CvYu708ds.jpg', 'id': 281204865}, {'name': 'Чуканова Елена', 'ava': 'https://pp.userapi.com/c638027/v638027032/641a7/x2KhLGHOz_M.jpg', 'id': 287843399}, {'name': 'Деревянных Алена', 'ava': 'https://pp.userapi.com/c837131/v837131498/1700c/cfNXgraozq8.jpg', 'id': 296050498}]
        },
        {name:'Белово',n:1,
        users:[{'name': 'Иванов Роман', 'ava': 'https://pp.userapi.com/c837425/v837425013/4bd3a/HYnwvEx9E18.jpg', 'id': 233897313}]
        },
        {name:'Белорецк',n:2,
        users:[{'name': 'Галиуллина Айгуль', 'ava': 'https://pp.userapi.com/c621704/v621704457/167bc/UUW55hIhVG0.jpg', 'id': 69163365}, {'name': 'Жаринов Павел', 'ava': 'https://pp.userapi.com/c631530/v631530126/4ec30/UEBKQ2bnTxo.jpg', 'id': 106658955}]
        },
        {name:'Белореченск',n:1,
        users:[{'name': 'Сафонов Александр', 'ava': 'https://pp.userapi.com/c841532/v841532087/1c471/3gj9uELq3MQ.jpg', 'id': 96592246}]
        },
        {name:'Бердск',n:1,
        users:[{'name': 'Залевская Анна', 'ava': 'https://pp.userapi.com/c841526/v841526594/1ae0f/yKsQcBGzWfQ.jpg', 'id': 3525644}]
        },
        {name:'Березники',n:6,
        users:[{'name': 'Куликова Наталья', 'ava': 'https://pp.userapi.com/c837231/v837231174/42498/yfQ4a8yfilw.jpg', 'id': 15205553}, {'name': 'Евшель Наталья', 'ava': 'https://sun9-11.userapi.com/c841034/v841034651/9f2e/xEHfloy4q8w.jpg', 'id': 26051651}, {'name': 'Юхимец Леся', 'ava': 'https://pp.userapi.com/c639429/v639429369/3bf6f/k0WWHCvukuQ.jpg', 'id': 98046369}, {'name': 'Коновалов Влад', 'ava': 'https://pp.userapi.com/c639424/v639424305/f421/HUMa26sPu2M.jpg', 'id': 103989305}, {'name': 'Спиридонов Олег', 'ava': 'https://pp.userapi.com/c619423/v619423443/1b5fb/QEzM3hmYPLM.jpg', 'id': 158092443}, {'name': 'Исупова Валерия', 'ava': 'https://pp.userapi.com/c836639/v836639441/62cde/j8Lu64prrEg.jpg', 'id': 428024571}]
        },
        {name:'Березно',n:1,
        users:[{'name': 'Столицький Артур', 'ava': 'https://pp.userapi.com/c840331/v840331091/9bc2/XlfiYcOVAZo.jpg', 'id': 183860609}]
        },
        {name:'Березовский',n:1,
        users:[{'name': 'Кузьменков Илья', 'ava': 'https://sun9-11.userapi.com/c840721/v840721820/9915/8yriZkNs0KE.jpg', 'id': 187615496}]
        },
        {name:'Бийск',n:1,
        users:[{'name': 'Хлыстов Миша', 'ava': 'https://pp.userapi.com/c836437/v836437970/37a85/YkuK7n_put0.jpg', 'id': 243444970}]
        },
        {name:'Бикин',n:1,
        users:[{'name': 'Рубан Жека', 'ava': 'https://pp.userapi.com/c841527/v841527250/12169/nMr1V6pgLNg.jpg', 'id': 343819164}]
        },
        {name:'Бишкек',n:2,
        users:[{'name': 'Ревякин Андрей', 'ava': 'https://pp.userapi.com/c633423/v633423377/209c5/f7H6AisMbTg.jpg', 'id': 181146377}, {'name': 'Dead Drop', 'ava': 'https://pp.userapi.com/c630431/v630431975/3e62b/2gL_YPZzzNI.jpg', 'id': 206556975}]
        },
        {name:'Бобруйск',n:1,
        users:[{'name': 'Бабицкий Кирилл', 'ava': 'https://sun9-11.userapi.com/c840638/v840638025/7059/wnzJLPsSIbU.jpg', 'id': 153913945}]
        },
        {name:'Большие Колпаны',n:1,
        users:[{'name': 'Жданов Валерий', 'ava': 'https://pp.userapi.com/c836335/v836335556/5a261/k5MsjIPQFbw.jpg', 'id': 27670728}]
        },
        {name:'Бор',n:1,
        users:[{'name': 'Борский Дмитрий', 'ava': 'https://pp.userapi.com/c836224/v836224734/5429c/r0cc6MHyTEk.jpg', 'id': 58270438}]
        },
        {name:'Борисоглебск',n:2,
        users:[{'name': 'Лыков Артём', 'ava': 'https://sun9-11.userapi.com/c639622/v639622171/2ccf3/bmWpl05FQ-w.jpg', 'id': 222068171}, {'name': 'Болотов Семён', 'ava': 'https://pp.userapi.com/c836239/v836239176/35830/FXI_a9idh1g.jpg', 'id': 284028176}]
        },
        {name:'Борисполь',n:1,
        users:[{'name': 'Буценко Владислав', 'ava': 'https://pp.userapi.com/c637520/v637520651/4c2d7/oyZUb_hcO0E.jpg', 'id': 285999651}]
        },
        {name:'Братск',n:1,
        users:[{'name': 'Исламов Савелий', 'ava': 'https://pp.userapi.com/c841621/v841621159/205c7/XB7j7dujNTg.jpg', 'id': 161448361}]
        },
        {name:'Брест',n:11,
        users:[{'name': 'Гапеев Алексей', 'ava': 'https://pp.userapi.com/c638830/v638830682/46bbe/XR1V4GR9DOw.jpg', 'id': 4391682}, {'name': 'Давидюк Денис', 'ava': 'https://pp.userapi.com/c638931/v638931692/51906/2AyW_v2XY_I.jpg', 'id': 4774692}, {'name': 'Dontsova Ella', 'ava': 'https://pp.userapi.com/c424218/v424218768/1b26/Gl3pa6a0K8E.jpg', 'id': 80027768}, {'name': 'Гайдукович Илона', 'ava': 'https://pp.userapi.com/c626426/v626426068/18e9c/GO_pAKooPQQ.jpg', 'id': 86003068}, {'name': 'Арсеньева Ирина', 'ava': 'https://pp.userapi.com/c626327/v626327037/6e292/6cpafhjAJQg.jpg', 'id': 88811037}, {'name': 'Лукьяненко Дмитрий', 'ava': 'https://pp.userapi.com/c639727/v639727616/42b06/KVjw5L-ttmM.jpg', 'id': 139736657}, {'name': 'Цяк Александр', 'ava': 'https://pp.userapi.com/c837732/v837732339/4aac9/Fk7W7vUzpnY.jpg', 'id': 160942006}, {'name': 'Лукьяненко Александр', 'ava': 'https://pp.userapi.com/c638828/v638828094/4d98f/Wouqzya4npY.jpg', 'id': 200574953}, {'name': 'Stromov Alex', 'ava': 'https://pp.userapi.com/c312630/v312630316/496e/MTT05v6Bp6Q.jpg', 'id': 227465316}, {'name': 'Борисовец Сергей', 'ava': 'https://pp.userapi.com/c621703/v621703693/11194/gihqKTvXTuM.jpg', 'id': 241350900}, {'name': 'Богомолов Иван', 'ava': 'https://pp.userapi.com/c638722/v638722880/703b4/buQm17PzrBM.jpg', 'id': 307601649}]
        },
        {name:'Брехово',n:1,
        users:[{'name': 'Макарец Ирина', 'ava': 'https://pp.userapi.com/c836732/v836732959/4be6f/N9MUwCJUZYE.jpg', 'id': 14908341}]
        },
        {name:'Брянка',n:1,
        users:[{'name': 'Кохно Анна', 'ava': 'https://pp.userapi.com/c840423/v840423045/3091/FOwuUOjrZc8.jpg', 'id': 30143922}]
        },
        {name:'Брянск',n:9,
        users:[{'name': 'Кулешов Владимир', 'ava': 'https://pp.userapi.com/c638330/v638330439/57de6/8y8iCok6QXo.jpg', 'id': 8926678}, {'name': 'Владимиров Максим', 'ava': 'https://pp.userapi.com/c638117/v638117464/27616/vkvBbMkPFA0.jpg', 'id': 10615464}, {'name': 'Ефимова Мария', 'ava': 'https://pp.userapi.com/c630331/v630331496/55679/t1DuqvG6PK0.jpg', 'id': 196231496}, {'name': 'Харитонова Оксана', 'ava': 'https://pp.userapi.com/c629125/v629125512/9eda/T4W3NVh14u8.jpg', 'id': 280910512}, {'name': 'Медведев Саня', 'ava': 'https://pp.userapi.com/c638322/v638322992/66778/CUPNzcbRgMg.jpg', 'id': 319622888}, {'name': 'Колбасин Роман', 'ava': 'https://pp.userapi.com/c626728/v626728117/3c7cc/GfrDBuFEJxQ.jpg', 'id': 338830117}, {'name': 'Ермилова Алина', 'ava': 'https://pp.userapi.com/c841326/v841326362/1f895/SGV4DW_pUOM.jpg', 'id': 340953942}, {'name': 'Афанасьев Андрей', 'ava': 'https://pp.userapi.com/c837737/v837737554/66f76/Z_xSyjc3e-I.jpg', 'id': 417432391}, {'name': 'Можаев Никита', 'ava': 'https://pp.userapi.com/c621509/v621509323/d52f/F6ctZOcMGuY.jpg', 'id': 422076889}]
        },
        {name:'Буздяк',n:2,
        users:[{'name': 'Мифтахов Дамир', 'ava': 'https://pp.userapi.com/c840437/v840437270/8e4f/-ZfYFjeXs3k.jpg', 'id': 36891388}, {'name': 'Нармухамедова Айгуль', 'ava': 'https://sun9-11.userapi.com/c840720/v840720441/1968/7YfxkBIBKiY.jpg', 'id': 138868264}]
        },
        {name:'Буинск',n:1,
        users:[{'name': 'Сабирзянов Руслан', 'ava': 'https://pp.userapi.com/c621707/v621707568/f119/rm9FZeYLNu8.jpg', 'id': 34674892}]
        },
        {name:'Великий Новгород',n:5,
        users:[{'name': 'Bragin Andrey', 'ava': 'https://pp.userapi.com/c638119/v638119969/4db90/twTqhtQCsqY.jpg', 'id': 58584815}, {'name': 'Чернуха Виталий', 'ava': 'https://pp.userapi.com/c403127/v403127439/9253/GGdsbtfg5yQ.jpg', 'id': 116150439}, {'name': 'Рамильевич Эрик', 'ava': 'https://pp.userapi.com/c639922/v639922863/460a8/C3mhjnju1CM.jpg', 'id': 182335651}, {'name': 'Корольков Игорь', 'ava': 'https://pp.userapi.com/c607519/v607519980/724b/c5pvrTb_BdU.jpg', 'id': 237572980}, {'name': 'Устинов Дмитрий', 'ava': 'https://pp.userapi.com/c626519/v626519308/5a6bf/wYs05X4ty5I.jpg', 'id': 349677308}]
        },
        {name:'Вельск',n:1,
        users:[{'name': 'Золотых Максим', 'ava': 'https://pp.userapi.com/c841337/v841337093/fb50/kOyX6isMaqU.jpg', 'id': 11337376}]
        },
        {name:'Верхнедвинск',n:1,
        users:[{'name': 'Томашевич Сергей', 'ava': 'https://pp.userapi.com/c636319/v636319854/5e9f8/5vWzmrmphL8.jpg', 'id': 20732854}]
        },
        {name:'Верхнеднепровский',n:1,
        users:[{'name': 'Закиров Дмитрий', 'ava': 'https://pp.userapi.com/c837638/v837638767/457e3/cCeFeGTjqEE.jpg', 'id': 407138767}]
        },
        {name:'Верхний Баскунчак',n:1,
        users:[{'name': 'Артюхов Олег', 'ava': 'https://pp.userapi.com/c637321/v637321759/44996/-RbpCa30hJU.jpg', 'id': 210669759}]
        },
        {name:'Верхний Тагил',n:1,
        users:[{'name': 'Андреева Татьяна', 'ava': 'https://pp.userapi.com/c837322/v837322512/48595/PgUoOn77tzc.jpg', 'id': 326214512}]
        },
        {name:'Верхняя Пышма',n:2,
        users:[{'name': 'Ovechkina Ksenia', 'ava': 'https://pp.userapi.com/c637820/v637820573/2c558/x7n6NG1ePyA.jpg', 'id': 150359573}, {'name': 'Кучин Дмитрий', 'ava': 'https://pp.userapi.com/c630127/v630127332/138dc/_qgrt3_2X1M.jpg', 'id': 198542332}]
        },
        {name:'Верхняя Салда',n:2,
        users:[{'name': 'Криворотов Сергей', 'ava': 'https://pp.userapi.com/c638619/v638619149/23f94/BRvKmg2pjEk.jpg', 'id': 234413149}, {'name': 'Семенов Сергей', 'ava': 'https://pp.userapi.com/c639830/v639830262/3f221/oJsEq2gIu9Y.jpg', 'id': 361474957}]
        },
        {name:'Верхоянск',n:1,
        users:[{'name': 'Нецветаев Иван', 'ava': 'https://pp.userapi.com/c626430/v626430114/58716/nyG7U8aHux8.jpg', 'id': 327804485}]
        },
        {name:'Веселый Гай',n:1,
        users:[{'name': 'Журавихин Мишка', 'ava': 'https://pp.userapi.com/c837127/v837127272/45334/8p8kz8jG4Ow.jpg', 'id': 113546109}]
        },
        {name:'Ветлуга',n:1,
        users:[{'name': 'Курочкина Полина', 'ava': 'https://vk.com/images/camera_50.png', 'id': 141024880}]
        },
        {name:'Вилейка',n:1,
        users:[{'name': 'Скобло Егор', 'ava': 'https://pp.userapi.com/c608131/v608131193/3df8/p2yOgLqzLzE.jpg', 'id': 91177193}]
        },
        {name:'Винница',n:2,
        users:[{'name': 'Кудлаенко Игорь', 'ava': 'https://pp.userapi.com/c638427/v638427513/e37d/0TwZxZcpYcA.jpg', 'id': 108810513}, {'name': 'Гуйван Василий', 'ava': 'https://pp.userapi.com/c836325/v836325139/317d8/n3SYPaeVGWU.jpg', 'id': 191936139}]
        },
        {name:'Витебск',n:4,
        users:[{'name': 'Будник Владимир', 'ava': 'https://pp.userapi.com/c841539/v841539639/13d81/XOAE7rbfCRY.jpg', 'id': 14913072}, {'name': 'Syuk Deni', 'ava': 'https://pp.userapi.com/c639227/v639227820/2c9a1/ZFV32AgO9Zg.jpg', 'id': 103211820}, {'name': 'Цыкунов Алексей', 'ava': 'https://pp.userapi.com/c638626/v638626091/58571/NbBMkP6fEr4.jpg', 'id': 141112041}, {'name': 'Cuba Cuba', 'ava': 'https://pp.userapi.com/c629524/v629524795/d2f0/ReqB_rG_0Vo.jpg', 'id': 296043795}]
        },
        {name:'Владивосток',n:13,
        users:[{'name': 'Белов Михаил', 'ava': 'https://pp.userapi.com/c837120/v837120627/3f3d/HE_GDINJ_lk.jpg', 'id': 270627}, {'name': 'Смола Виктория', 'ava': 'https://pp.userapi.com/c623625/v623625079/41f3e/H7f84ulaI8I.jpg', 'id': 1226079}, {'name': 'Лукьянова Анна', 'ava': 'https://pp.userapi.com/c837538/v837538860/56196/wJKKyscbRBE.jpg', 'id': 4260300}, {'name': 'Вечерковский Александр', 'ava': 'https://pp.userapi.com/c413325/v413325203/315b/MWgQu9J0Nng.jpg', 'id': 5048203}, {'name': 'Гарянин Дмитрий', 'ava': 'https://pp.userapi.com/c617629/v617629920/1b69d/oXILRWaTxog.jpg', 'id': 34375920}, {'name': 'Сафонова Аня', 'ava': 'https://pp.userapi.com/c836437/v836437611/66c9/DT4cPQZ6Z94.jpg', 'id': 79769611}, {'name': 'Шарипков Юрий', 'ava': 'https://pp.userapi.com/c637919/v637919132/5cb23/1bbp8JVrCQQ.jpg', 'id': 94790374}, {'name': 'Пономаренко Юля', 'ava': 'https://pp.userapi.com/c638526/v638526308/47a23/VHOD1v42jrY.jpg', 'id': 160863308}, {'name': 'Иванов Саша', 'ava': 'https://vk.com/images/camera_50.png', 'id': 189075584}, {'name': 'Токарь Тимофей', 'ava': 'https://pp.userapi.com/c638023/v638023181/27405/fvHRk7QjFmU.jpg', 'id': 238645181}, {'name': 'Zyravleva Elena', 'ava': 'https://pp.userapi.com/c633421/v633421466/184e0/fEYQR5Ca4Ao.jpg', 'id': 242198466}, {'name': 'Занькова Елена', 'ava': 'https://pp.userapi.com/c627218/v627218125/155b/vlagvUc_-nM.jpg', 'id': 313924125}, {'name': 'Вакульский Вадим', 'ava': 'https://pp.userapi.com/c841524/v841524042/1ffaf/KvgPQX5MyMY.jpg', 'id': 331652454}]
        },
        {name:'Владикавказ',n:1,
        users:[{'name': 'Тобоева Диана', 'ava': 'https://pp.userapi.com/c841020/v841020683/21e35/ABIjKrAWXq8.jpg', 'id': 306191340}]
        },
        {name:'Владимир',n:10,
        users:[{'name': 'Ситова Екатерина', 'ava': 'https://pp.userapi.com/c840221/v840221676/1f123/Hu0X5C0pdF0.jpg', 'id': 3328967}, {'name': 'Игнатов Алексей', 'ava': 'https://pp.userapi.com/c626518/v626518900/36c82/2fGcCspVzqo.jpg', 'id': 17431900}, {'name': 'Дубина Анастасия', 'ava': 'https://pp.userapi.com/c837238/v837238435/53117/LNcmqP6TQzg.jpg', 'id': 22030020}, {'name': 'Меркулова Елена', 'ava': 'https://pp.userapi.com/c637425/v637425551/6aa2a/oRIcde-3V9M.jpg', 'id': 33875146}, {'name': 'Михеев Алексей', 'ava': 'https://pp.userapi.com/c636926/v636926158/28565/NVtd1fD-bmg.jpg', 'id': 52959158}, {'name': 'Жарких Борис', 'ava': 'https://pp.userapi.com/c604519/v604519610/26a15/c_Hk5p-panM.jpg', 'id': 97076610}, {'name': 'Ниделяева Анастасия', 'ava': 'https://pp.userapi.com/c836430/v836430918/3c2e4/DDF_CQtWGQA.jpg', 'id': 123761918}, {'name': 'Артюх Катерина', 'ava': 'https://pp.userapi.com/c639720/v639720939/39e24/Qc9gHnH6EBU.jpg', 'id': 219434251}, {'name': 'Mikhaylovskiy Anton', 'ava': 'https://pp.userapi.com/c638217/v638217845/51035/q1nBdOGkl5w.jpg', 'id': 356375120}, {'name': 'Миронова Наталья', 'ava': 'https://pp.userapi.com/c841124/v841124693/c920/rEe0rSQVHVE.jpg', 'id': 415532042}]
        },
        {name:'Волгоград',n:15,
        users:[{'name': 'Курал Алина', 'ava': 'https://pp.userapi.com/c840124/v840124298/17e49/N3D9sbWkI3c.jpg', 'id': 3822917}, {'name': 'Зигангирова Рамиля', 'ava': 'https://pp.userapi.com/c638224/v638224500/5933a/6ewdeB6k1Iw.jpg', 'id': 27995483}, {'name': 'Richi Gay', 'ava': 'https://vk.com/images/camera_50.png', 'id': 28910988}, {'name': 'Бойков Антон', 'ava': 'https://pp.userapi.com/c637123/v637123768/fff4/cqRdj5XSMkg.jpg', 'id': 30240768}, {'name': 'Резникова Екатерина', 'ava': 'https://pp.userapi.com/c837133/v837133239/40f0d/cuGSUERaGjE.jpg', 'id': 34274239}, {'name': 'Уткин Александр', 'ava': 'https://pp.userapi.com/c841321/v841321424/a9c7/_7NpUrtP4pU.jpg', 'id': 68262097}, {'name': 'Селиванов Юрий', 'ava': 'https://pp.userapi.com/c424619/v424619901/2f9b/3HJd5zI14YA.jpg', 'id': 122983901}, {'name': 'Гайворонская Элла', 'ava': 'https://pp.userapi.com/c836626/v836626649/67e0c/Smy0UQv6U2o.jpg', 'id': 135471872}, {'name': 'Тоболина Кристина', 'ava': 'https://pp.userapi.com/c836339/v836339494/6572e/N0hXjs9ixbo.jpg', 'id': 153303951}, {'name': 'Джабраилова Вусала', 'ava': 'https://pp.userapi.com/c604729/v604729528/33ff/_tP9Y5sqaUw.jpg', 'id': 158430528}, {'name': 'Петров Максим', 'ava': 'https://vk.com/images/camera_50.png', 'id': 201091191}, {'name': 'Чернышева Дарья', 'ava': 'https://pp.userapi.com/c638623/v638623663/5ae87/2x3GBTemUCI.jpg', 'id': 258119696}, {'name': 'Sekyere Richard', 'ava': 'https://pp.userapi.com/c626919/v626919803/41d9c/aKZPNEm5tEY.jpg', 'id': 285210803}, {'name': 'Церенова Марина', 'ava': 'https://pp.userapi.com/c841023/v841023125/8b3f/nPQLmOpL6kc.jpg', 'id': 350092125}, {'name': 'Чугуевцева Юлия', 'ava': 'https://pp.userapi.com/c639224/v639224860/4096e/7vtGumGI140.jpg', 'id': 428470624}]
        },
        {name:'Волгодонск',n:5,
        users:[{'name': 'Цицорина Юлия', 'ava': 'https://pp.userapi.com/c622429/v622429327/2c68a/Q9hkoFlj5T4.jpg', 'id': 89811327}, {'name': 'Краев Игорь', 'ava': 'https://pp.userapi.com/c639724/v639724233/4c71f/sZHeKssADcY.jpg', 'id': 155865039}, {'name': 'Подборная Светлана', 'ava': 'https://pp.userapi.com/c638917/v638917714/5cb58/loQVGoafOIk.jpg', 'id': 162022313}, {'name': 'Силаева Марина', 'ava': 'https://pp.userapi.com/c639219/v639219492/3a6d6/UsM-yChjPU4.jpg', 'id': 210706217}, {'name': 'Федоренко Роман', 'ava': 'https://pp.userapi.com/c840236/v840236251/18ffa/mtroPU6yHCE.jpg', 'id': 339001504}]
        },
        {name:'Волжск',n:1,
        users:[{'name': 'Яковлев Антон', 'ava': 'https://pp.userapi.com/c638023/v638023119/34641/y40ZHR7fBB4.jpg', 'id': 63782119}]
        },
        {name:'Волжский',n:2,
        users:[{'name': 'Серёжникова Юлия', 'ava': 'https://pp.userapi.com/c639624/v639624878/447c7/UryMz9k4--8.jpg', 'id': 4321772}, {'name': 'Жумгалиева Татьяна', 'ava': 'https://pp.userapi.com/c836733/v836733695/55b0a/jTogf_KDAkU.jpg', 'id': 164332499}]
        },
        {name:'Воловец',n:1,
        users:[{'name': 'Беца Діма', 'ava': 'https://pp.userapi.com/c840236/v840236574/25620/VDPKy8C7vew.jpg', 'id': 322662829}]
        },
        {name:'Вологда',n:7,
        users:[{'name': 'Синяков Дмитрий', 'ava': 'https://pp.userapi.com/c837534/v837534426/52101/_T3EqZNnMi4.jpg', 'id': 4889806}, {'name': 'Дьяков Иван', 'ava': 'https://pp.userapi.com/c638231/v638231667/3cdcf/mgJi3pSgp00.jpg', 'id': 6028667}, {'name': 'Смирнова Алина', 'ava': 'https://pp.userapi.com/c836439/v836439699/4649d/vSe04ceDWEg.jpg', 'id': 9671699}, {'name': 'Денисов Александр', 'ava': 'https://pp.userapi.com/c840429/v840429775/5838/A7RvkuTw4ao.jpg', 'id': 15142964}, {'name': 'Смирнова Светлана', 'ava': 'https://pp.userapi.com/c836324/v836324261/636c3/qNcBjOeucUs.jpg', 'id': 73725607}, {'name': 'Хайруллин Ринат', 'ava': 'https://pp.userapi.com/c604326/v604326781/9dbc/SgNY_HtN6EM.jpg', 'id': 75477781}, {'name': 'Соколова Марина', 'ava': 'https://pp.userapi.com/c841328/v841328872/1a875/X5nyMshBzjk.jpg', 'id': 275920789}]
        },
        {name:'Волосово',n:1,
        users:[{'name': 'Михайличенко Максим', 'ava': 'https://pp.userapi.com/c629128/v629128793/4b35/PXMHIrtiYag.jpg', 'id': 9344793}]
        },
        {name:'Вольногорск',n:1,
        users:[{'name': 'Даниленко Станислав', 'ava': 'https://pp.userapi.com/c630229/v630229859/43f4a/nb-sV9h-1ZU.jpg', 'id': 294240859}]
        },
        {name:'Вольск',n:2,
        users:[{'name': 'Сафаргалиев Ильяс', 'ava': 'https://pp.userapi.com/c840138/v840138960/48e2/J1ujWtzHPTE.jpg', 'id': 168336960}, {'name': 'Добролюбов Алан', 'ava': 'https://pp.userapi.com/c604822/v604822583/114b0/6HTPRl8QAN0.jpg', 'id': 345606583}]
        },
        {name:'Воркута',n:1,
        users:[{'name': 'Митин Иван', 'ava': 'https://pp.userapi.com/c622521/v622521791/3062d/AafB0wa-UMU.jpg', 'id': 25122791}]
        },
        {name:'Воронеж',n:14,
        users:[{'name': 'Курносов Максим', 'ava': 'https://pp.userapi.com/c625827/v625827400/1b85b/SjDrfxINVnc.jpg', 'id': 1901400}, {'name': 'Трофимов Николай', 'ava': 'https://pp.userapi.com/c836437/v836437821/10ee3/VjZ-C2TLFsw.jpg', 'id': 3597821}, {'name': 'Гаврилов Максим', 'ava': 'https://pp.userapi.com/c311527/v311527523/50e/3egDNlR44zQ.jpg', 'id': 10294523}, {'name': 'Марасанов Владимир', 'ava': 'https://pp.userapi.com/c631317/v631317801/2d226/mymMnZpmNUI.jpg', 'id': 18518801}, {'name': 'Махмудов Исрофил', 'ava': 'https://pp.userapi.com/c638417/v638417320/574ca/N3kO_ZQmPto.jpg', 'id': 20257888}, {'name': 'Петренко Влад', 'ava': 'https://pp.userapi.com/c629111/v629111088/11693/pYkQ9qrEmN4.jpg', 'id': 28894088}, {'name': 'Лобыкин Алексей', 'ava': 'https://pp.userapi.com/c837122/v837122588/4d7e4/i4Z7KcF6mm0.jpg', 'id': 55942198}, {'name': 'Медведева Алина', 'ava': 'https://pp.userapi.com/c840225/v840225265/1c30b/ToNi3Za2Irk.jpg', 'id': 139129505}, {'name': 'Колесников Илья', 'ava': 'https://pp.userapi.com/c841434/v841434368/14ad7/7lmPCY2-DwI.jpg', 'id': 145715443}, {'name': 'Макаров Сергей', 'ava': 'https://pp.userapi.com/c638120/v638120186/42911/xE1qxsEknSg.jpg', 'id': 150336186}, {'name': 'Пономарева Галина', 'ava': 'https://pp.userapi.com/c639120/v639120070/3a7c0/LPrTqBxZEdc.jpg', 'id': 158035763}, {'name': 'Машкова Виктория', 'ava': 'https://pp.userapi.com/c639918/v639918809/3e1ab/CFKTD8kiPek.jpg', 'id': 221140793}, {'name': 'Мациенко Виталий', 'ava': 'https://pp.userapi.com/c836434/v836434146/2500d/pB1pCF4czzQ.jpg', 'id': 308788146}, {'name': 'No-Name Igor', 'ava': 'https://pp.userapi.com/c626627/v626627414/4751a/BLpvafvqgkQ.jpg', 'id': 326548414}]
        },
        {name:'Воткинск',n:2,
        users:[{'name': 'Широбоков Иван', 'ava': 'https://pp.userapi.com/c836235/v836235234/37f44/YUuQk7shVgQ.jpg', 'id': 203953234}, {'name': 'Шайхова Гульнара', 'ava': 'https://sun9-11.userapi.com/c840635/v840635119/955/MuGNktI6vuk.jpg', 'id': 262161124}]
        },
        {name:'Выборг',n:4,
        users:[{'name': 'Важенина Оксана', 'ava': 'https://pp.userapi.com/c638118/v638118062/543e8/V732SKFRPKE.jpg', 'id': 5883692}, {'name': 'Лосев Сергей', 'ava': 'https://pp.userapi.com/c402125/v402125520/7f38/HN0sERrbTB0.jpg', 'id': 197488520}, {'name': 'Иванов Евгений', 'ava': 'https://pp.userapi.com/c637428/v637428337/540f3/R_xH_I-oPf4.jpg', 'id': 274891337}, {'name': 'Васильев Александр', 'ava': 'https://pp.userapi.com/c629527/v629527220/1c392/bGT3V3HJ1vk.jpg', 'id': 336564220}]
        },
        {name:'Вычегодский',n:1,
        users:[{'name': 'Трубачев Сергей', 'ava': 'https://pp.userapi.com/c636826/v636826328/54e26/Xp46q_sWNc8.jpg', 'id': 57537328}]
        },
        {name:'Вышний Волочек',n:2,
        users:[{'name': 'Савельева Жанна', 'ava': 'https://pp.userapi.com/c623716/v623716017/2d3e9/6Bu7xsB1gTQ.jpg', 'id': 103833017}, {'name': 'Долиняк Лариса', 'ava': 'https://pp.userapi.com/c639829/v639829401/26758/jrBQhhfYNCs.jpg', 'id': 153803401}]
        },
        {name:'Вяземский',n:1,
        users:[{'name': 'Мамыкин Гриша', 'ava': 'https://pp.userapi.com/c622916/v622916181/933c/5ouRx0I7Phk.jpg', 'id': 197758181}]
        },
        {name:'Вязьма',n:1,
        users:[{'name': 'Волков Алексей', 'ava': 'https://pp.userapi.com/c836433/v836433742/76540/tCmlxGaNTjk.jpg', 'id': 23643742}]
        },
        {name:'Вятские Поляны',n:1,
        users:[{'name': 'Лошкарёв Кирилл', 'ava': 'https://pp.userapi.com/c836736/v836736965/25d0e/RNjGXxb2x_o.jpg', 'id': 144797965}]
        },
        {name:'Ганцевичи',n:1,
        users:[{'name': 'Демидок Андрей', 'ava': 'https://pp.userapi.com/c639626/v639626326/434a8/utXkkXd9XKE.jpg', 'id': 48339838}]
        },
        {name:'Гатчина',n:2,
        users:[{'name': 'Сапожникова Наталья', 'ava': 'https://pp.userapi.com/c622818/v622818658/2a2ae/BkqtfMf7Uw8.jpg', 'id': 27645658}, {'name': 'Башкирова Татьяна', 'ava': 'https://pp.userapi.com/c837221/v837221610/7112/3zVspOIkn0c.jpg', 'id': 93175610}]
        },
        {name:'Геленджик',n:4,
        users:[{'name': 'Багдасарян Артур', 'ava': 'https://pp.userapi.com/c837521/v837521241/574bb/mu6A1EmYPzY.jpg', 'id': 61604861}, {'name': 'Васильевич Владимир', 'ava': 'https://pp.userapi.com/c638522/v638522878/366c0/7hPCxBc-kf0.jpg', 'id': 120268878}, {'name': 'Лотоцкий Влад', 'ava': 'https://pp.userapi.com/c841637/v841637796/13d5e/S6Nh86mBibQ.jpg', 'id': 137481798}, {'name': 'Кадырова Эльвина', 'ava': 'https://pp.userapi.com/c638119/v638119870/5d3c3/zcExRg1J5dU.jpg', 'id': 329063107}]
        },
        {name:'Георгиевск',n:1,
        users:[{'name': 'Барканова Инна', 'ava': 'https://pp.userapi.com/c6113/v6113379/9427/OkWFTPSfut4.jpg', 'id': 21670379}]
        },
        {name:'Гжель',n:1,
        users:[{'name': 'Белоусов Александр', 'ava': 'https://pp.userapi.com/c633417/v633417455/12311/aGJsklXceHc.jpg', 'id': 67944455}]
        },
        {name:'Гомель',n:3,
        users:[{'name': 'Грабовец Паша', 'ava': 'https://pp.userapi.com/c639720/v639720685/45c99/467Rjqi8K9I.jpg', 'id': 53949131}, {'name': 'Андреева Ирина', 'ava': 'https://sun9-11.userapi.com/c638924/v638924195/5ba05/gCitTZzixfc.jpg', 'id': 125472803}, {'name': 'Тихомирова Александра', 'ava': 'https://pp.userapi.com/c638221/v638221320/5a28c/-rYIulgLJdA.jpg', 'id': 422895241}]
        },
        {name:'Горно-Алтайск',n:2,
        users:[{'name': 'Туянов Олег', 'ava': 'https://vk.com/images/camera_50.png', 'id': 137351192}, {'name': 'Хорошилов Евгений', 'ava': 'https://pp.userapi.com/c620616/v620616665/154b3/vnl8KpXBSVA.jpg', 'id': 268039665}]
        },
        {name:'Горноуральский',n:1,
        users:[{'name': 'Иванов Иван', 'ava': 'https://sun9-11.userapi.com/c638924/v638924697/2e23e/VXKIpG7Z0qo.jpg', 'id': 171396697}]
        },
        {name:'Гродно',n:4,
        users:[{'name': 'Кунда Андрей', 'ava': 'https://pp.userapi.com/c624227/v624227923/55421/5J-a-StMJrM.jpg', 'id': 12254923}, {'name': 'Ермак Михаил', 'ava': 'https://pp.userapi.com/c639228/v639228058/4d1b5/17_guaF0RZ4.jpg', 'id': 135465343}, {'name': 'Король Юлия', 'ava': 'https://pp.userapi.com/c841038/v841038871/bf43/KJXWaCGnG48.jpg', 'id': 170093292}, {'name': 'Иванов Павел', 'ava': 'https://pp.userapi.com/c836338/v836338678/5a29a/EacmTDMPzEY.jpg', 'id': 211398534}]
        },
        {name:'Грозный',n:1,
        users:[{'name': 'Nurmagomedov Muslim', 'ava': 'https://pp.userapi.com/c626222/v626222911/33b3b/P0rbexqrFwM.jpg', 'id': 393909911}]
        },
        {name:'Грязовец',n:1,
        users:[{'name': 'Комиссаров Владимир', 'ava': 'https://pp.userapi.com/c841526/v841526192/14eaa/y-5dat1wMjc.jpg', 'id': 61207096}]
        },
        {name:'Губкинский',n:1,
        users:[{'name': 'Замараева Маргарита', 'ava': 'https://pp.userapi.com/c837526/v837526236/564bc/wcTVpu4oBOo.jpg', 'id': 68919236}]
        },
        {name:'Гуково',n:2,
        users:[{'name': 'Яненко Андрей', 'ava': 'https://pp.userapi.com/c837730/v837730519/60257/A5s9iiywxHg.jpg', 'id': 190284681}, {'name': 'Сергеевич Иван', 'ava': 'https://pp.userapi.com/c637723/v637723833/5dd12/m_1UpMURFT4.jpg', 'id': 282398833}]
        },
        {name:'Гурьевск',n:1,
        users:[{'name': 'Сафронова Татьяна', 'ava': 'https://pp.userapi.com/c637516/v637516599/99a4/A9is-bGbEeQ.jpg', 'id': 140695599}]
        },
        {name:'Гусь-Хрустальный',n:1,
        users:[{'name': 'Рыбина Алена', 'ava': 'https://pp.userapi.com/c638625/v638625360/670db/byb5u1HtWHU.jpg', 'id': 181936945}]
        },
        {name:'Данилов',n:3,
        users:[{'name': 'Шарова Татьяна', 'ava': 'https://pp.userapi.com/c638630/v638630719/3e8d0/R5HtLFRa7PM.jpg', 'id': 5472719}, {'name': 'Талерова Ольга', 'ava': 'https://pp.userapi.com/c841232/v841232185/18404/Knrkn6MPsog.jpg', 'id': 120536058}, {'name': 'Фомин Игорь', 'ava': 'https://pp.userapi.com/c638616/v638616883/56ec4/_8D_n0hsPAc.jpg', 'id': 191425172}]
        },
        {name:'Дебальцево',n:1,
        users:[{'name': 'Шеремет Дмитрий', 'ava': 'https://pp.userapi.com/c636216/v636216787/57994/VbFEPeExUKQ.jpg', 'id': 188474787}]
        },
        {name:'Дегтярск',n:1,
        users:[{'name': 'Дегтярск Интерра', 'ava': 'https://pp.userapi.com/c639516/v639516945/2c3e1/saSQCqoDDAU.jpg', 'id': 135374945}]
        },
        {name:'Десногорск',n:1,
        users:[{'name': 'Тихов Николай', 'ava': 'https://pp.userapi.com/c319224/v319224818/587d/pgO9ye-DJXo.jpg', 'id': 158757818}]
        },
        {name:'Дзержинск',n:6,
        users:[{'name': 'Герцун Анастасия', 'ava': 'https://pp.userapi.com/c841439/v841439547/f1fc/Z_jH-VG0h7w.jpg', 'id': 1813476}, {'name': 'Аникин Сергей', 'ava': 'https://pp.userapi.com/c841335/v841335122/2ea6/HCiWZnr60FM.jpg', 'id': 52102122}, {'name': 'Ажиева Наталья', 'ava': 'https://pp.userapi.com/c630327/v630327970/52e19/6gp13jejMgc.jpg', 'id': 102433970}, {'name': 'Великанова Оксана', 'ava': 'https://pp.userapi.com/c624724/v624724950/38b67/sKBQ7DmozWI.jpg', 'id': 158877950}, {'name': 'Мишвелова Маргарита', 'ava': 'https://pp.userapi.com/c837337/v837337351/910d/BgGMgHHb2O8.jpg', 'id': 189442351}, {'name': 'Зайцев Михаил', 'ava': 'https://pp.userapi.com/c623324/v623324347/16927/4y7M4I8nPtw.jpg', 'id': 202509347}]
        },
        {name:'Димитровград',n:1,
        users:[{'name': 'Озеркин Николай', 'ava': 'https://pp.userapi.com/c316217/v316217475/80af/opfGrH89P8U.jpg', 'id': 210986475}]
        },
        {name:'Дмитров',n:2,
        users:[{'name': 'Хрустова Мариша', 'ava': 'https://pp.userapi.com/c636824/v636824912/36558/zMxvuOKU-8o.jpg', 'id': 5047912}, {'name': 'Стрелкова Марина', 'ava': 'https://pp.userapi.com/c638131/v638131144/8bb9e/egBX5ocQhyM.jpg', 'id': 34288889}]
        },
        {name:'Днепропетровск (Днепр)',n:2,
        users:[{'name': 'Рубан Алексей', 'ava': 'https://pp.userapi.com/c637923/v637923867/4898d/X0wuBN_L5cg.jpg', 'id': 299548867}, {'name': 'Новельская Камила', 'ava': 'https://pp.userapi.com/c416628/v416628019/bab9/dKrePL5khLk.jpg', 'id': 299786019}]
        },
        {name:'Добрянка',n:1,
        users:[{'name': 'Катаева Юлия', 'ava': 'https://pp.userapi.com/c837329/v837329583/591de/CkfHvhK7Cgs.jpg', 'id': 278375329}]
        },
        {name:'Домодедово',n:3,
        users:[{'name': 'Ганзвинд Егорка', 'ava': 'https://pp.userapi.com/c638431/v638431538/671b8/FRyknJXwhGs.jpg', 'id': 3871560}, {'name': 'Alder Alex', 'ava': 'https://pp.userapi.com/c626322/v626322143/577f5/Zkh7QWLFlYI.jpg', 'id': 5232143}, {'name': 'Позднякова Марина', 'ava': 'https://pp.userapi.com/c836330/v836330861/7ce7b/tvNYwJekoZA.jpg', 'id': 90040579}]
        },
        {name:'Донецк',n:9,
        users:[{'name': 'Смоголь Виталий', 'ava': 'https://pp.userapi.com/c840237/v840237017/1c97/eiPDVmJUEN8.jpg', 'id': 9945017}, {'name': 'Соловьёв Дмитрий', 'ava': 'https://pp.userapi.com/c840221/v840221595/2616a/PQF8wrWpxBY.jpg', 'id': 11958553}, {'name': 'Сирица Александр', 'ava': 'https://pp.userapi.com/c622120/v622120884/4f2ff/SBugU0KZQBs.jpg', 'id': 19456884}, {'name': 'Солнцева Ксения', 'ava': 'https://pp.userapi.com/c630217/v630217909/48556/6OigGXy7p9Q.jpg', 'id': 60369909}, {'name': 'Камчатная Янина', 'ava': 'https://pp.userapi.com/c637227/v637227044/5dfe8/cobIBAyucso.jpg', 'id': 90852044}, {'name': 'Кеник Яна', 'ava': 'https://pp.userapi.com/c638616/v638616813/5c6f0/X9sEe6iG2RI.jpg', 'id': 168075587}, {'name': 'Климов Игорь', 'ava': 'https://pp.userapi.com/c625830/v625830999/31a2e/ULXjHwsKYPg.jpg', 'id': 287179999}, {'name': 'Zyemtsev Alex', 'ava': 'https://pp.userapi.com/c836128/v836128751/34584/84LN6ITZm_g.jpg', 'id': 295098751}, {'name': 'Сковпень Марина', 'ava': 'https://vk.com/images/camera_50.png', 'id': 409090399}]
        },
        {name:'Дружковка',n:1,
        users:[{'name': 'Шкодинов Игорь', 'ava': 'https://pp.userapi.com/c636318/v636318597/7162d/cem4waJiJlo.jpg', 'id': 13850597}]
        },
        {name:'Дружный',n:1,
        users:[{'name': 'Иванов Паша', 'ava': 'https://pp.userapi.com/c840128/v840128339/118eb/EQcDDZ8sphE.jpg', 'id': 52611339}]
        },
        {name:'Дубна',n:2,
        users:[{'name': 'Топчубаев Александр', 'ava': 'https://pp.userapi.com/c636223/v636223991/13260/h9j7kb79yUo.jpg', 'id': 591991}, {'name': 'Архипов Андрей', 'ava': 'https://pp.userapi.com/c639430/v639430251/1cf6/38s3Xh71jiM.jpg', 'id': 409042251}]
        },
        {name:'Дятьково',n:1,
        users:[{'name': 'Горохов Евгений', 'ava': 'https://pp.userapi.com/c604720/v604720600/1a1a9/2z22Rp0HPog.jpg', 'id': 47411600}]
        },
        {name:'Ейск',n:1,
        users:[{'name': 'Мягков Игорь', 'ava': 'https://sun9-11.userapi.com/c840521/v840521072/4dcc/51jz6jSqh08.jpg', 'id': 326822906}]
        },
        {name:'Екатеринбург',n:46,
        users:[{'name': 'Гимаева Оля', 'ava': 'https://pp.userapi.com/c837228/v837228485/54117/7lm0gkOitS4.jpg', 'id': 1058816}, {'name': 'Попов Александр', 'ava': 'https://pp.userapi.com/c841625/v841625698/1de49/6IlLc7hcWI4.jpg', 'id': 2044493}, {'name': 'Шарифов Вячеслав', 'ava': 'https://pp.userapi.com/c636716/v636716650/145ca/GCBVlDQxuaU.jpg', 'id': 2809650}, {'name': 'Охотников Антон', 'ava': 'https://pp.userapi.com/c631423/v631423323/25956/FGDF4WRVl9k.jpg', 'id': 3066323}, {'name': 'Загребина Екатерина', 'ava': 'https://pp.userapi.com/c841427/v841427355/18bf5/Ui_x-9jjATA.jpg', 'id': 3337612}, {'name': 'Гимранов Ильшат', 'ava': 'https://pp.userapi.com/c836727/v836727178/8be7/xzs5MuqMU1I.jpg', 'id': 3379178}, {'name': 'Пархайтинов Дмитрий', 'ava': 'https://pp.userapi.com/c837233/v837233549/5fd89/ZGkyarrsaUg.jpg', 'id': 3820811}, {'name': 'Кошкина Мария', 'ava': 'https://pp.userapi.com/c419221/v419221484/87c2/Cwy1jfkCtUY.jpg', 'id': 4202484}, {'name': 'Потапова Женя', 'ava': 'https://pp.userapi.com/c639720/v639720700/3b1fb/9BUiswALUws.jpg', 'id': 4374837}, {'name': 'Батуев Пётр', 'ava': 'https://pp.userapi.com/c836736/v836736958/5ac9e/8e9-NNz5KH8.jpg', 'id': 4887740}, {'name': 'Захаров Павел', 'ava': 'https://pp.userapi.com/c841326/v841326536/d799/Qc2BmLCecQ0.jpg', 'id': 6665631}, {'name': 'Евтюхова Алёна', 'ava': 'https://pp.userapi.com/c638618/v638618828/53517/jJSSx_KR2Pg.jpg', 'id': 8313630}, {'name': 'Коротких Анна', 'ava': 'https://pp.userapi.com/c630627/v630627055/2b5de/6MuYku6bBsc.jpg', 'id': 9366055}, {'name': 'Нилова Геля', 'ava': 'https://pp.userapi.com/c637224/v637224253/1878e/nPXNYICN0Io.jpg', 'id': 11847253}, {'name': 'Шакиров Ридаль', 'ava': 'https://pp.userapi.com/c621515/v621515714/1435e/Epff3Y8hfsE.jpg', 'id': 13138388}, {'name': 'Иванов Сергей', 'ava': 'https://pp.userapi.com/c703/u13279096/e_e7da3bde.jpg', 'id': 13279096}, {'name': 'Sanin Александр', 'ava': 'https://pp.userapi.com/c322721/v322721740/57ec/OqKwAWSV3Gw.jpg', 'id': 15528740}, {'name': 'Турсунов Равшан', 'ava': 'https://pp.userapi.com/c836136/v836136957/6702e/hbbtsLyufc8.jpg', 'id': 17114762}, {'name': 'Мартынов Алексей', 'ava': 'https://pp.userapi.com/c636431/v636431952/38a0f/4rN1fXAXCPs.jpg', 'id': 18070952}, {'name': 'Паночкин Глеб', 'ava': 'https://pp.userapi.com/c631525/v631525797/1432e/zZdo_1aCpr8.jpg', 'id': 21808797}, {'name': 'Воздвиженский Евгений', 'ava': 'https://pp.userapi.com/c626226/v626226669/1bdaf/UYvuBEXTpKI.jpg', 'id': 23731669}, {'name': 'Аксанов Марсель', 'ava': 'https://pp.userapi.com/c630023/v630023999/57f0c/gaVvFWU8tU4.jpg', 'id': 24298999}, {'name': 'Копылова Светлана', 'ava': 'https://pp.userapi.com/c639624/v639624105/467d5/5zXuQBKopNM.jpg', 'id': 31526197}, {'name': 'Вовненко Наталья', 'ava': 'https://pp.userapi.com/c637423/v637423026/59bc6/V3tAHc7dXiA.jpg', 'id': 35581026}, {'name': 'Калитенко Ирина', 'ava': 'https://pp.userapi.com/c841238/v841238058/1f422/d8xteCWbpog.jpg', 'id': 44122897}, {'name': 'Mata Tanja', 'ava': 'https://pp.userapi.com/c622616/v622616572/4bfe9/aledMFvaiV0.jpg', 'id': 48023572}, {'name': 'Слободчиков Александр', 'ava': 'https://pp.userapi.com/c626320/v626320656/99329/amqJrIWAJd4.jpg', 'id': 58313656}, {'name': 'Игнатов Дмитрий', 'ava': 'https://pp.userapi.com/c305304/v305304405/a104/wrPIHQrjtf4.jpg', 'id': 69242405}, {'name': 'Антонов Алексей', 'ava': 'https://pp.userapi.com/c837122/v837122067/6344f/2LQdjdFic60.jpg', 'id': 94478574}, {'name': 'Хабибуллин Ильдар', 'ava': 'https://pp.userapi.com/c836220/v836220897/6555f/5os9_BYgq0U.jpg', 'id': 104741884}, {'name': 'Лылов Александр', 'ava': 'https://pp.userapi.com/c9476/u108669519/e_ae3d9a23.jpg', 'id': 108669519}, {'name': 'Кучин Павел', 'ava': 'https://sun9-11.userapi.com/c840720/v840720391/8ce6/gBvzUIHMMmU.jpg', 'id': 117272744}, {'name': 'Финогентова Ирина', 'ava': 'https://pp.userapi.com/c639130/v639130833/3d381/dwmAgqYSkD8.jpg', 'id': 126005363}, {'name': 'Лузина Елена', 'ava': 'https://pp.userapi.com/c620929/v620929111/809b/a9GpsyRQt0w.jpg', 'id': 138426111}, {'name': 'Гергерт Светик', 'ava': 'https://pp.userapi.com/c639730/v639730434/347d2/-qykZI_qJ8U.jpg', 'id': 146682384}, {'name': 'Sergeevich Mihail', 'ava': 'https://pp.userapi.com/c637825/v637825091/3a4c7/NBWxTd0Dgr8.jpg', 'id': 237725091}, {'name': 'Галимулин Денис', 'ava': 'https://pp.userapi.com/c617616/v617616872/580f/KeF5ZkuwiRU.jpg', 'id': 245820872}, {'name': 'Шестеркин Антон', 'ava': 'https://vk.com/images/camera_50.png', 'id': 247423900}, {'name': 'Долматов Юра', 'ava': 'https://pp.userapi.com/c638416/v638416709/4bbe6/h5_Cq1jjYtY.jpg', 'id': 247503961}, {'name': 'Майский Михаил', 'ava': 'https://pp.userapi.com/c638231/v638231780/3b1e0/0y5_pJNimuQ.jpg', 'id': 290023780}, {'name': 'Субботин Андрей', 'ava': 'https://pp.userapi.com/c627423/v627423953/42f6a/KzbCNsPvp_4.jpg', 'id': 294015953}, {'name': 'Vaseva Elena', 'ava': 'https://pp.userapi.com/c628416/v628416176/2e8ee/33IF9nWziGM.jpg', 'id': 316053176}, {'name': 'Мурашко Алексей', 'ava': 'https://pp.userapi.com/c837132/v837132935/396c2/_Y--wuxeI4Y.jpg', 'id': 316403935}, {'name': 'Русских Александр', 'ava': 'https://pp.userapi.com/c624924/v624924807/4ede7/QOzkSUHfY9U.jpg', 'id': 326329807}, {'name': 'Чиканцев Роман', 'ava': 'https://pp.userapi.com/c627930/v627930219/24790/473YfHHZDH8.jpg', 'id': 333770219}, {'name': 'Худяков Влад', 'ava': 'https://pp.userapi.com/c639430/v639430012/34226/gzQ45_qdMCw.jpg', 'id': 414252291}]
        },
        {name:'Елабуга',n:2,
        users:[{'name': 'Петрова Галина', 'ava': 'https://pp.userapi.com/c836326/v836326699/684de/hCzgGOg9STw.jpg', 'id': 25732565}, {'name': 'Зайнеева Екатерина', 'ava': 'https://pp.userapi.com/c124/u79898028/e_31fbfa84.jpg', 'id': 79898028}]
        },
        {name:'Елань',n:1,
        users:[{'name': 'Годов Никита', 'ava': 'https://pp.userapi.com/c837438/v837438055/4a80b/8Zu-XsO6rfc.jpg', 'id': 217167841}]
        },
        {name:'Елец',n:2,
        users:[{'name': 'Вольных Инна', 'ava': 'https://sun9-11.userapi.com/c639717/v639717441/433c5/NJpnqP8RRqU.jpg', 'id': 33759536}, {'name': 'Завальнюк Владимир', 'ava': 'https://pp.userapi.com/c840425/v840425830/3ac6/9KnbixTD5LY.jpg', 'id': 142477423}]
        },
        {name:'Железнодорожный (Балашиха)',n:2,
        users:[{'name': 'Гусарова Ангелина', 'ava': 'https://pp.userapi.com/c836225/v836225591/55062/uikcpoh1SH4.jpg', 'id': 2075804}, {'name': 'Khizhnyakova Anna', 'ava': 'https://pp.userapi.com/c604817/v604817670/47136/Kl7Q16F0OFk.jpg', 'id': 270210670}]
        },
        {name:'Жигулевск',n:3,
        users:[{'name': 'Илюткина Анютка', 'ava': 'https://pp.userapi.com/c637220/v637220558/5d473/l0ILO7oSIRg.jpg', 'id': 97640558}, {'name': 'Бабина Галина', 'ava': 'https://pp.userapi.com/c310526/v310526991/3121/kEd2IRGvhew.jpg', 'id': 138062991}, {'name': 'Красноярцева Ольга', 'ava': 'https://pp.userapi.com/c638628/v638628121/60bce/WqhCSwh6eJ0.jpg', 'id': 364448872}]
        },
        {name:'Житомир',n:1,
        users:[{'name': 'Мартынюк Михаил', 'ava': 'https://pp.userapi.com/c604618/v604618093/19b48/TGwaUKhMF48.jpg', 'id': 171901093}]
        },
        {name:'Жлобин',n:1,
        users:[{'name': 'Кротов Максим', 'ava': 'https://pp.userapi.com/c637418/v637418253/65c4a/0s72chYwCGg.jpg', 'id': 110923544}]
        },
        {name:'Жуковский',n:1,
        users:[{'name': 'Гавриков Евгений', 'ava': 'https://pp.userapi.com/c637422/v637422063/9644/wKKo2knGH4E.jpg', 'id': 292807063}]
        },
        {name:'Задонск',n:1,
        users:[{'name': 'Иванская Ксения', 'ava': 'https://sun9-11.userapi.com/c840723/v840723809/4ffd/FAeV6QNIkzQ.jpg', 'id': 191003818}]
        },
        {name:'Зайсан',n:1,
        users:[{'name': 'Демидов Андрей', 'ava': 'https://pp.userapi.com/c1500/u14410076/e_6f7ee8c2.jpg', 'id': 14410076}]
        },
        {name:'Заокский',n:1,
        users:[{'name': 'Khudoberdin Nikita', 'ava': 'https://pp.userapi.com/c639319/v639319524/51994/feCDwkZ-h0k.jpg', 'id': 323926757}]
        },
        {name:'Запорожье',n:6,
        users:[{'name': 'Бездольный Андрей', 'ava': 'https://pp.userapi.com/c621513/v621513317/1a367/DG3_Zi7qwn8.jpg', 'id': 11808269}, {'name': 'Викторович Александр', 'ava': 'https://pp.userapi.com/c836330/v836330520/67d8e/jkjs8D_rzjc.jpg', 'id': 20526767}, {'name': 'Гак Володимир', 'ava': 'https://pp.userapi.com/c836223/v836223687/62db4/mDlzyJwRW1k.jpg', 'id': 42601448}, {'name': 'Молько Владимир', 'ava': 'https://pp.userapi.com/c633226/v633226487/29c61/prkB69plJ28.jpg', 'id': 43426487}, {'name': 'Трофименко Рома', 'ava': 'https://pp.userapi.com/c622416/v622416449/2e482/vWB8WN5nMsc.jpg', 'id': 102626449}, {'name': 'Король Константин', 'ava': 'https://pp.userapi.com/c636431/v636431229/64eb9/VdROC0ZRJi4.jpg', 'id': 258250229}]
        },
        {name:'Заречное',n:1,
        users:[{'name': 'Павлина Иван', 'ava': 'https://pp.userapi.com/c841037/v841037300/1bdf5/xittHtOACoc.jpg', 'id': 14595094}]
        },
        {name:'Звенигород',n:1,
        users:[{'name': 'Yakubov Shuay', 'ava': 'https://pp.userapi.com/c307110/v307110155/beaf/Cd4B2SA5E4o.jpg', 'id': 152863155}]
        },
        {name:'Зеленоград',n:4,
        users:[{'name': 'Забродская Маргарита', 'ava': 'https://pp.userapi.com/c619823/v619823851/1f33a/KrjqNiSWMuU.jpg', 'id': 2987851}, {'name': 'Михайлов Андрей', 'ava': 'https://pp.userapi.com/c837732/v837732074/5941e/a-q0TWRKplc.jpg', 'id': 25932489}, {'name': 'Шевченко Александр', 'ava': 'https://pp.userapi.com/c639625/v639625598/34587/PX1E99lb2CY.jpg', 'id': 106597468}, {'name': 'Smith Sam', 'ava': 'https://pp.userapi.com/c637218/v637218405/5b337/R7POQr_FTmM.jpg', 'id': 239036405}]
        },
        {name:'Зима',n:2,
        users:[{'name': 'Бызов Сергей', 'ava': 'https://pp.userapi.com/c638723/v638723460/32a4/ixKhfCozMQo.jpg', 'id': 317040460}, {'name': 'Буринский Олег', 'ava': 'https://pp.userapi.com/c638218/v638218650/4bbec/f096EQtWpjU.jpg', 'id': 353978891}]
        },
        {name:'Златоуст',n:3,
        users:[{'name': 'Макрушина-Усманова Юлия', 'ava': 'https://pp.userapi.com/c840228/v840228562/1b2c/7M3jgCJFEIU.jpg', 'id': 4050611}, {'name': 'Аранцев Алексей', 'ava': 'https://pp.userapi.com/c837622/v837622631/444c2/auDGMmhwKxw.jpg', 'id': 28090631}, {'name': 'Фликер Ирина', 'ava': 'https://pp.userapi.com/c637722/v637722885/5a504/bjJbtQTuUgo.jpg', 'id': 365708885}]
        },
        {name:'Змиев',n:1,
        users:[{'name': 'Zavaliï Artem', 'ava': 'https://sun9-11.userapi.com/c840536/v840536328/64b2/8iN9YKQr9OI.jpg', 'id': 354299078}]
        },
        {name:'Знаменск',n:2,
        users:[{'name': 'Юсупова Светлана', 'ava': 'https://pp.userapi.com/c638030/v638030284/4b57a/Z8FWHYOVkiI.jpg', 'id': 18049105}, {'name': 'Филиппов Вячеслав', 'ava': 'https://pp.userapi.com/c837623/v837623835/42fcc/I8WnBT8O1Yw.jpg', 'id': 130126835}]
        },
        {name:'Ибреси',n:1,
        users:[{'name': 'Михайлова Кристина', 'ava': 'https://pp.userapi.com/c639921/v639921088/2d822/gtLV6FsXfEU.jpg', 'id': 115846088}]
        },
        {name:'Иваново',n:7,
        users:[{'name': 'Пожаров Евгений', 'ava': 'https://pp.userapi.com/c638828/v638828032/47cd6/rcwrDm3Jfys.jpg', 'id': 6661032}, {'name': 'Терлецкий Виталий', 'ava': 'https://pp.userapi.com/c836135/v836135021/4e2f1/7t0ZcixnLuI.jpg', 'id': 14245021}, {'name': 'Власов Александр', 'ava': 'https://pp.userapi.com/c837436/v837436457/2a089/S0YP_aSeD7k.jpg', 'id': 22557457}, {'name': 'Прозорова Елена', 'ava': 'https://pp.userapi.com/c841526/v841526495/187a7/NV4d4fgTsFI.jpg', 'id': 37232484}, {'name': 'Гордова Лиза', 'ava': 'https://pp.userapi.com/c622418/v622418637/4c7a4/VJcvlE5yr9o.jpg', 'id': 129891637}, {'name': 'Мышков Егор', 'ava': 'https://pp.userapi.com/c841227/v841227856/f2c0/S8X6c3Ad9Oc.jpg', 'id': 226231245}, {'name': 'Генатулин Амир', 'ava': 'https://pp.userapi.com/c837528/v837528000/9225/1F1PdYIpnN4.jpg', 'id': 392635000}]
        },
        {name:'Ивантеевка',n:1,
        users:[{'name': 'Петров Роман', 'ava': 'https://pp.userapi.com/c416623/v416623658/a58d/SL9fnOcARd0.jpg', 'id': 32837658}]
        },
        {name:'Иерусалим',n:1,
        users:[{'name': 'Заяц Паша', 'ava': 'https://pp.userapi.com/c837538/v837538497/710b9/T7ecWJWfHAI.jpg', 'id': 69936145}]
        },
        {name:'Ижевск',n:15,
        users:[{'name': 'Некрасов Денис', 'ava': 'https://pp.userapi.com/c88/u3280464/e_4fe43c0a.jpg', 'id': 3280464}, {'name': 'Павловских Анна', 'ava': 'https://pp.userapi.com/c1427/v1427986/a/7ipfjLIwP2A.jpg', 'id': 3740986}, {'name': 'Иванов Николай', 'ava': 'https://pp.userapi.com/c638224/v638224154/5ae56/4eLslVho7ng.jpg', 'id': 8492703}, {'name': 'Хитрина Татьяна', 'ava': 'https://pp.userapi.com/c836726/v836726796/3d9b3/Nu567Hwf5lY.jpg', 'id': 13593796}, {'name': 'Игнатьев Александр', 'ava': 'https://pp.userapi.com/c629500/v629500172/26717/TLZn0YyJUM0.jpg', 'id': 26648172}, {'name': 'Литвинов Максим', 'ava': 'https://pp.userapi.com/c626416/v626416487/2ded4/O08boz10ma8.jpg', 'id': 30147487}, {'name': 'Приказчиков Александр', 'ava': 'https://pp.userapi.com/c637925/v637925159/3f5ae/vaN5aL5LpJ0.jpg', 'id': 33083159}, {'name': 'Филиппов Владимир', 'ava': 'https://pp.userapi.com/c636630/v636630322/6e715/0KLjJx9HnKY.jpg', 'id': 38139322}, {'name': 'Касаткин Павел', 'ava': 'https://pp.userapi.com/c633820/v633820733/32b91/lq-kI-JtMo4.jpg', 'id': 64777733}, {'name': 'Шаймурзина Физалина', 'ava': 'https://pp.userapi.com/c621700/v621700727/10399/GjHcEZTjc9Y.jpg', 'id': 99179405}, {'name': 'Голяшова Любовь', 'ava': 'https://pp.userapi.com/c841222/v841222991/1a34b/P2jWsFOCKN8.jpg', 'id': 151798907}, {'name': 'Бродская Елена', 'ava': 'https://pp.userapi.com/c309126/u164315746/e_f93bc32e.jpg', 'id': 164315746}, {'name': 'Журавлева Ольга', 'ava': 'https://pp.userapi.com/c626823/v626823146/1052c/_D4lcjlHJ7g.jpg', 'id': 213112146}, {'name': 'Пушин Кирилл', 'ava': 'https://pp.userapi.com/c637420/v637420372/8a1/LGrY2t2w-xU.jpg', 'id': 234072372}, {'name': 'Вульф Анна', 'ava': 'https://pp.userapi.com/c836220/v836220814/6aa97/HMRUVZa_zo8.jpg', 'id': 308444447}]
        },
        {name:'Ирбит',n:1,
        users:[{'name': 'Величинских Андрей', 'ava': 'https://pp.userapi.com/c841335/v841335532/144e6/mK12m2ZZeR4.jpg', 'id': 139397796}]
        },
        {name:'Иркутск',n:7,
        users:[{'name': 'Колесников Денис', 'ava': 'https://pp.userapi.com/c639820/v639820536/99d8/Rr1UPlk9QHo.jpg', 'id': 10889536}, {'name': 'Савельев Александр', 'ava': 'https://pp.userapi.com/c9781/u77272135/e_bd195e7e.jpg', 'id': 77272135}, {'name': 'Хамируев Владимир', 'ava': 'https://pp.userapi.com/c5946/v5946461/5ff/1PdbPPKlCXo.jpg', 'id': 89615461}, {'name': 'Киселёва Кристина', 'ava': 'https://pp.userapi.com/c637231/v637231155/4d0b2/cEio3Tjuslw.jpg', 'id': 158993155}, {'name': 'Petrus Olesya', 'ava': 'https://pp.userapi.com/c837722/v837722300/5a663/x9OEyQNvBqI.jpg', 'id': 169705040}, {'name': 'Замятина Кристина', 'ava': 'https://sun9-11.userapi.com/c840630/v840630250/3f28/nuelYMVIiFY.jpg', 'id': 286821109}, {'name': 'Екимов Никита', 'ava': 'https://pp.userapi.com/c638030/v638030127/2ca2e/b0pqtXgYmQI.jpg', 'id': 318214127}]
        },
        {name:'Ишим',n:1,
        users:[{'name': 'Гаврилин Евгений', 'ava': 'https://pp.userapi.com/c633424/v633424183/74ad/uctABSzupNg.jpg', 'id': 339964183}]
        },
        {name:'Ишимбай',n:1,
        users:[{'name': 'Киреев Ринат', 'ava': 'https://pp.userapi.com/c624429/v624429563/1618d/GG10sH24GJY.jpg', 'id': 203377563}]
        },
        {name:'Йошкар-Ола',n:7,
        users:[{'name': 'Томеев Евгений', 'ava': 'https://sun9-11.userapi.com/c639717/v639717077/423b5/4C8DMg6_kUw.jpg', 'id': 4190694}, {'name': 'Антонов Владимир', 'ava': 'https://pp.userapi.com/c638725/v638725366/656ab/6AfqJ9_W3RM.jpg', 'id': 23796453}, {'name': 'Панов Юрий', 'ava': 'https://pp.userapi.com/c637527/v637527975/5c9b4/yHXdhquTEL8.jpg', 'id': 34478975}, {'name': 'Бахтин Андрей', 'ava': 'https://pp.userapi.com/c837538/v837538066/69a6d/ZBiDA1vj6EE.jpg', 'id': 58673715}, {'name': 'Войциховский Миша', 'ava': 'https://pp.userapi.com/c639226/v639226928/249a9/nacS3R8J4IY.jpg', 'id': 76899928}, {'name': 'Бердинский Николай', 'ava': 'https://pp.userapi.com/c836539/v836539408/4ed42/tw5PJ_9Y58s.jpg', 'id': 217634408}, {'name': 'Кутдусова Диля', 'ava': 'https://pp.userapi.com/c837725/v837725516/5a5d7/O1NencubRAw.jpg', 'id': 284329565}]
        },
        {name:'Кагул',n:1,
        users:[{'name': 'Mocanu Oleg', 'ava': 'https://vk.com/images/camera_50.png', 'id': 23163278}]
        },
        {name:'Кадуй',n:1,
        users:[{'name': 'Малкова Наташа', 'ava': 'https://pp.userapi.com/c840126/v840126418/fd09/50yG6He_jg4.jpg', 'id': 158243418}]
        },
        {name:'Казань',n:19,
        users:[{'name': 'Вайсенберг Елена', 'ava': 'https://pp.userapi.com/c638626/v638626630/5566f/4YPoXyVJu8A.jpg', 'id': 3193536}, {'name': 'Садыков Ленни', 'ava': 'https://pp.userapi.com/c622431/v622431266/48b6e/XuRHtUzrZ3M.jpg', 'id': 3800266}, {'name': 'Хисамов Олег', 'ava': 'https://pp.userapi.com/c639428/v639428492/406f3/SGoAhmVWnSI.jpg', 'id': 9256470}, {'name': 'Мартьянов Антон', 'ava': 'https://pp.userapi.com/c837238/v837238558/4915f/Q2MWI9B2YnE.jpg', 'id': 9742969}, {'name': 'Sidorov Oleg', 'ava': 'https://pp.userapi.com/c604324/v604324823/2139a/EVp7nU_tWTY.jpg', 'id': 10815823}, {'name': 'Воробьев Юрий', 'ava': 'https://pp.userapi.com/c409025/v409025069/837/VSS2bKmt054.jpg', 'id': 19401069}, {'name': 'Трошина Женя', 'ava': 'https://pp.userapi.com/c638921/v638921728/40340/ekjy0bkXCaw.jpg', 'id': 34151728}, {'name': 'Мостяков Дмитрий', 'ava': 'https://pp.userapi.com/c624516/v624516678/2e338/hkWU3f9C-ZY.jpg', 'id': 35389678}, {'name': 'Idrisova Adelya', 'ava': 'https://pp.userapi.com/c840430/v840430108/1152/ICcdrrs0Wto.jpg', 'id': 54299939}, {'name': 'Фазылова Диляра', 'ava': 'https://pp.userapi.com/c837623/v837623844/54257/lCC1UQciOUw.jpg', 'id': 64254496}, {'name': 'Миназов Ильнур', 'ava': 'https://pp.userapi.com/c836238/v836238878/488d3/p1zobZyHj5c.jpg', 'id': 71320878}, {'name': 'Киселёва Оля', 'ava': 'https://pp.userapi.com/c841324/v841324371/724e/sKkMhN0yESU.jpg', 'id': 142584398}, {'name': 'Тимерханов Сергей', 'ava': 'https://pp.userapi.com/c413922/v413922554/7eb7/4ne9sKlGAJo.jpg', 'id': 144837554}, {'name': 'Первякова Ирина', 'ava': 'https://pp.userapi.com/c836634/v836634776/5d5a5/KS70L4xzWjo.jpg', 'id': 162983383}, {'name': 'Дятлов Кирилл', 'ava': 'https://pp.userapi.com/c841433/v841433422/12d3a/WHjjanXaRE4.jpg', 'id': 220565793}, {'name': 'Сергеев Дмитрий', 'ava': 'https://pp.userapi.com/c311322/v311322948/47c1/rzq3084unto.jpg', 'id': 228008948}, {'name': 'Биксин Илья', 'ava': 'https://pp.userapi.com/c836220/v836220018/48467/FEX67ZufdDA.jpg', 'id': 234650555}, {'name': 'Газизянова Чулпан', 'ava': 'https://pp.userapi.com/c623319/v623319568/f89a/dOkSJKp5yD0.jpg', 'id': 244511568}, {'name': 'Загидуллин Марат', 'ava': 'https://pp.userapi.com/c836139/v836139166/4d5de/A5w91jv4sSg.jpg', 'id': 359749674}]
        },
        {name:'Калининград',n:20,
        users:[{'name': 'Мачкова Валерия', 'ava': 'https://pp.userapi.com/c836726/v836726451/5f776/chytx7ByfsE.jpg', 'id': 2313020}, {'name': 'Наумик Марина', 'ava': 'https://pp.userapi.com/c302408/u3140793/e_b4335395.jpg', 'id': 3140793}, {'name': 'Томилова Екатерина', 'ava': 'https://pp.userapi.com/c837726/v837726608/3c538/jlTR6mzBaPw.jpg', 'id': 3290608}, {'name': 'Стецурина Татьяна', 'ava': 'https://pp.userapi.com/c837427/v837427397/49187/gxVrBdt8er0.jpg', 'id': 4162537}, {'name': 'Боровская Елена', 'ava': 'https://pp.userapi.com/c630431/v630431253/54707/2UkahA5Ofg0.jpg', 'id': 4625122}, {'name': 'Новлянский Константин', 'ava': 'https://pp.userapi.com/c840234/v840234350/298d4/7sJtYYUvbmc.jpg', 'id': 4792251}, {'name': 'Сидоркович Юлия', 'ava': 'https://pp.userapi.com/c841025/v841025469/1c6c7/Sc-w9u5EELo.jpg', 'id': 6140386}, {'name': 'Машканцев Леонид', 'ava': 'https://pp.userapi.com/c418429/v418429041/ad91/5pcLtzHxQNM.jpg', 'id': 7635041}, {'name': 'Haratyan Mane', 'ava': 'https://pp.userapi.com/c841021/v841021333/12e27/LkARytnMe08.jpg', 'id': 7875265}, {'name': 'Царицина Арина', 'ava': 'https://pp.userapi.com/c636930/v636930376/c096/kApY7tQvd5o.jpg', 'id': 14149376}, {'name': 'Макаева Ирина', 'ava': 'https://pp.userapi.com/c639620/v639620901/50798/11UECUO5HSg.jpg', 'id': 14733593}, {'name': 'Гаевская Екатерина', 'ava': 'https://pp.userapi.com/c638126/v638126166/47dce/SngSfmbQVK8.jpg', 'id': 46560166}, {'name': 'Киселёв-Капшик Валентин', 'ava': 'https://pp.userapi.com/c836721/v836721244/59fc4/pd5wIo6PTGU.jpg', 'id': 92588373}, {'name': 'Коваль Станислав', 'ava': 'https://pp.userapi.com/c836335/v836335108/a7df/tww7Tr5WmRM.jpg', 'id': 207183108}, {'name': 'Gatiatyllin Zufar', 'ava': 'https://pp.userapi.com/c836223/v836223194/20ddd/EphQadLqAoA.jpg', 'id': 232799194}, {'name': 'Вакуленко Ксения', 'ava': 'https://pp.userapi.com/c629212/v629212915/32878/2EYuYM0NoYQ.jpg', 'id': 279575915}, {'name': 'Антонюк Александр', 'ava': 'https://pp.userapi.com/c637620/v637620531/23dd1/M6__7y6DhA8.jpg', 'id': 294993531}, {'name': 'Пугач Александр', 'ava': 'https://pp.userapi.com/c630517/v630517411/46087/x8HNvjmKwz8.jpg', 'id': 321285411}, {'name': 'Антонюк Григорий', 'ava': 'https://pp.userapi.com/c630625/v630625646/37db6/S272LFOB_eE.jpg', 'id': 328142646}, {'name': 'Иванов Алексей', 'ava': 'https://pp.userapi.com/c837629/v837629096/680e2/-QSmpo4f2iw.jpg', 'id': 411739744}]
        },
        {name:'Калуга',n:10,
        users:[{'name': 'Голофтеева Марина', 'ava': 'https://pp.userapi.com/c841038/v841038247/c18a/oFjtvnPyzqE.jpg', 'id': 3643164}, {'name': 'Половинкин Дмитрий', 'ava': 'https://pp.userapi.com/c836535/v836535708/1355f/xwJ1b6fBjGM.jpg', 'id': 4563708}, {'name': 'Куликов Александр', 'ava': 'https://pp.userapi.com/c837635/v837635263/143aa/OgWum4cLS2I.jpg', 'id': 19191263}, {'name': 'Гришина Анастасия', 'ava': 'https://pp.userapi.com/c637817/v637817628/5bd00/vAeoH-NM-y0.jpg', 'id': 55076165}, {'name': 'Грачева Ангелиша', 'ava': 'https://pp.userapi.com/c836733/v836733046/6077a/yxBM9ZjH7NI.jpg', 'id': 107464579}, {'name': 'Никитин Никита', 'ava': 'https://pp.userapi.com/c638831/v638831191/5e7e1/Lr2kG39tPv8.jpg', 'id': 122976649}, {'name': 'Галуцкая Елена', 'ava': 'https://pp.userapi.com/c638816/v638816752/3288b/FzMiiLfLEAQ.jpg', 'id': 151288752}, {'name': 'Тер-Погосян Рудольф', 'ava': 'https://pp.userapi.com/c638019/v638019145/520f7/RLAkSTpyhvc.jpg', 'id': 155143453}, {'name': 'Gonzalez Joaquin', 'ava': 'https://pp.userapi.com/c637123/v637123258/2040a/GaKXeON4yjk.jpg', 'id': 304018258}, {'name': 'Nikitin Daniil', 'ava': 'https://pp.userapi.com/c628617/v628617860/4743e/ZPpcOTr5phk.jpg', 'id': 344712860}]
        },
        {name:'Каменское / Днепродзержинск',n:2,
        users:[{'name': 'Толпекина Галина', 'ava': 'https://pp.userapi.com/c637824/v637824402/1cb6a/QglZgNGjcHE.jpg', 'id': 31955402}, {'name': 'Позычук Геннадий', 'ava': 'https://pp.userapi.com/c618227/v618227162/13ba6/TYYpJ3hiL2k.jpg', 'id': 34785162}]
        },
        {name:'Камень-Каширский',n:1,
        users:[{'name': 'Войчук Ангеліна', 'ava': 'https://pp.userapi.com/c837134/v837134051/52c0a/0_uQpuzycu4.jpg', 'id': 150899950}]
        },
        {name:'Камышин',n:3,
        users:[{'name': 'Ручников Егор', 'ava': 'https://sun9-11.userapi.com/c840736/v840736535/142b/SMoLXFyTVyo.jpg', 'id': 22505572}, {'name': 'Ручникова Мария', 'ava': 'https://pp.userapi.com/c836630/v836630704/570d4/G1Sw1JUDBvw.jpg', 'id': 159969642}, {'name': 'Шамшаков Денис', 'ava': 'https://pp.userapi.com/c837223/v837223750/5c840/us9baliKou0.jpg', 'id': 400243476}]
        },
        {name:'Карабаново',n:1,
        users:[{'name': 'Иванов Вячеслав', 'ava': 'https://pp.userapi.com/c622427/v622427620/5c37f/JCDrjMqhuW4.jpg', 'id': 205281620}]
        },
        {name:'Карагай',n:1,
        users:[{'name': 'Малыгин Алексей', 'ava': 'https://pp.userapi.com/c836124/v836124384/59324/TtVFdNi6_dY.jpg', 'id': 65505813}]
        },
        {name:'Караганда',n:1,
        users:[{'name': 'Kolosovski Andrew', 'ava': 'https://pp.userapi.com/c1477/u14823796/e_59825ff9.jpg', 'id': 14823796}]
        },
        {name:'Карачев',n:1,
        users:[{'name': 'Нечаев Дмитрий', 'ava': 'https://pp.userapi.com/c840029/v840029556/b60e/NGPrS8I8ZY0.jpg', 'id': 96466556}]
        },
        {name:'Карпинск',n:2,
        users:[{'name': 'Альдергот Макс', 'ava': 'https://pp.userapi.com/c629424/v629424933/47add/trEyWSWzOe4.jpg', 'id': 94744933}, {'name': 'Балабанов Георгий', 'ava': 'https://pp.userapi.com/c638521/v638521823/5a590/nm08gnrsPmU.jpg', 'id': 139154853}]
        },
        {name:'Каспийск',n:1,
        users:[{'name': 'Аминова Амина', 'ava': 'https://pp.userapi.com/c840130/v840130272/2502e/6-wlNFvLfIM.jpg', 'id': 150922597}]
        },
        {name:'Качканар',n:1,
        users:[{'name': 'Кузнецов Василий', 'ava': 'https://pp.userapi.com/c636516/v636516973/25bd2/OXTNplED3Bw.jpg', 'id': 45529973}]
        },
        {name:'Кашира',n:1,
        users:[{'name': 'Гуськова Татьяна', 'ava': 'https://pp.userapi.com/c11469/u171583342/e_52319667.jpg', 'id': 171583342}]
        },
        {name:'Кемерово',n:9,
        users:[{'name': 'Рябухина Катерина', 'ava': 'https://pp.userapi.com/c638431/v638431111/5cfd7/fvFX3bxbNBs.jpg', 'id': 11155280}, {'name': 'Ефремова Танюшка', 'ava': 'https://pp.userapi.com/c837520/v837520893/4c4be/QElVEotwiB4.jpg', 'id': 23424893}, {'name': 'Петроченко Алексей', 'ava': 'https://pp.userapi.com/c626119/v626119293/6284e/bU_CIAwx9Y8.jpg', 'id': 39314293}, {'name': 'Майтаков Сергей', 'ava': 'https://pp.userapi.com/c314418/v314418952/458e/KgBlrAO5DVs.jpg', 'id': 40519952}, {'name': 'Колесников Жека', 'ava': 'https://pp.userapi.com/c638929/v638929711/3e13a/7UXdsqppsdc.jpg', 'id': 93037711}, {'name': 'Клименкова Светлана', 'ava': 'https://pp.userapi.com/c840136/v840136421/28369/fkC5FERAQ2g.jpg', 'id': 136671252}, {'name': 'Санин Владислав', 'ava': 'https://pp.userapi.com/c638126/v638126905/34bb/daYwWzymx3Q.jpg', 'id': 196153905}, {'name': 'Коченов Иван', 'ava': 'https://pp.userapi.com/c837332/v837332048/394b6/FlxZ5TiJIsE.jpg', 'id': 217017048}, {'name': 'Байков Петр', 'ava': 'https://pp.userapi.com/c630830/v630830353/2664e/3gwRuAgOGYo.jpg', 'id': 345375353}]
        },
        {name:'Керчь',n:1,
        users:[{'name': 'Красникова Настасья', 'ava': 'https://pp.userapi.com/c841436/v841436216/1913e/sxlUF_RE9nA.jpg', 'id': 181208656}]
        },
        {name:'Киев',n:13,
        users:[{'name': 'Остапец Вадим', 'ava': 'https://pp.userapi.com/c637828/v637828347/47b93/W4ew3u5PTYA.jpg', 'id': 6913347}, {'name': 'Майберова Марина', 'ava': 'https://pp.userapi.com/c638822/v638822060/49b89/Hkz6Q9ThhKk.jpg', 'id': 10247954}, {'name': 'Синяченко Марина', 'ava': 'https://pp.userapi.com/c637726/v637726111/59a36/iaoen6Q9M9I.jpg', 'id': 10600462}, {'name': 'Секер Анатолий', 'ava': 'https://pp.userapi.com/c638027/v638027371/4ee64/i2HhGnbyRtU.jpg', 'id': 11603764}, {'name': 'Возняк Елена', 'ava': 'https://pp.userapi.com/c837425/v837425766/51966/nqorx-WlUb4.jpg', 'id': 87726390}, {'name': 'Сидоренко Артём', 'ava': 'https://pp.userapi.com/c639724/v639724636/47b18/29rnR25Fm8Y.jpg', 'id': 98244002}, {'name': 'Быба Вася', 'ava': 'https://pp.userapi.com/c638722/v638722909/45e82/WSQ9v-SAtxQ.jpg', 'id': 124217909}, {'name': 'Максимов Максим', 'ava': 'https://pp.userapi.com/c309629/v309629423/6dc7/SoLie2yVCfA.jpg', 'id': 159062423}, {'name': 'Винерау Арина', 'ava': 'https://pp.userapi.com/c639628/v639628166/3e0ff/2bltD2CyQuM.jpg', 'id': 161234009}, {'name': 'Украинец Слава', 'ava': 'https://pp.userapi.com/c313523/v313523683/59f7/phNtqixkh8s.jpg', 'id': 215832683}, {'name': 'Волошин Виталий', 'ava': 'https://pp.userapi.com/c637320/v637320287/4b8b0/9HdKV5ZkdpU.jpg', 'id': 260198287}, {'name': 'Гусев Сергей', 'ava': 'https://pp.userapi.com/c615729/v615729590/d20c/kpz-O9ZgV58.jpg', 'id': 364562590}, {'name': 'Дрёмин Владислав', 'ava': 'https://pp.userapi.com/c837435/v837435445/4ade0/RgDbbFhajPQ.jpg', 'id': 410478746}]
        },
        {name:'Кимры',n:1,
        users:[{'name': 'Постников Сергей', 'ava': 'https://pp.userapi.com/c638221/v638221262/3e210/KttjVZ13e3s.jpg', 'id': 250831262}]
        },
        {name:'Кинешма',n:2,
        users:[{'name': 'Касьянов Александр', 'ava': 'https://pp.userapi.com/c836632/v836632740/483fa/zwPc0b1Fsw4.jpg', 'id': 61708194}, {'name': 'Немцов Вячеслав', 'ava': 'https://sun9-11.userapi.com/c840730/v840730618/65ff/rzcgPk8MG5c.jpg', 'id': 89658371}]
        },
        {name:'Киржач',n:1,
        users:[{'name': 'Романов Сергей', 'ava': 'https://pp.userapi.com/c636121/v636121233/22ef3/3AWo6xVOBHo.jpg', 'id': 16841233}]
        },
        {name:'Кириши',n:3,
        users:[{'name': 'Кузин Егор', 'ava': 'https://pp.userapi.com/c631131/v631131280/34587/T_Q2vpSbKzs.jpg', 'id': 6591280}, {'name': 'Иванов Игорь', 'ava': 'https://pp.userapi.com/c624316/v624316352/2f3ed/bpoyx1pulqc.jpg', 'id': 19538352}, {'name': 'Лебедь Егор', 'ava': 'https://pp.userapi.com/c841232/v841232459/1d1ea/Y6uI8GU-iSo.jpg', 'id': 26095903}]
        },
        {name:'Киров',n:11,
        users:[{'name': 'Горячевская Анастасия', 'ava': 'https://pp.userapi.com/c629125/v629125930/110b8/8ULT1GNF28Y.jpg', 'id': 2282930}, {'name': 'Колобов Олег', 'ava': 'https://pp.userapi.com/c639425/v639425313/55647/Mt-oyEL9KUk.jpg', 'id': 3255133}, {'name': 'Матушкина Елена', 'ava': 'https://pp.userapi.com/c837124/v837124455/5269e/qBApPNNwxy4.jpg', 'id': 16492635}, {'name': 'Микрюкова Виктория', 'ava': 'https://pp.userapi.com/c629424/v629424698/12ec8/_SnvSLGRYx0.jpg', 'id': 20508698}, {'name': 'Куклин Алексей', 'ava': 'https://pp.userapi.com/c620620/v620620271/7ba5/fwfu_FW1B3g.jpg', 'id': 30861271}, {'name': 'Чайников Владимир', 'ava': 'https://pp.userapi.com/c620228/v620228711/1182/8qBpsDacIUk.jpg', 'id': 58390711}, {'name': 'Емельянов Станислав', 'ava': 'https://pp.userapi.com/c638319/v638319194/49304/YA5z0tfgYQw.jpg', 'id': 68339194}, {'name': 'Казакова Анастасия', 'ava': 'https://pp.userapi.com/c636425/v636425898/5dd93/KMEBJMJ7LRA.jpg', 'id': 69012898}, {'name': 'Гущин Николай', 'ava': 'https://pp.userapi.com/c638821/v638821960/51e01/FU1kGxbyWJs.jpg', 'id': 146068884}, {'name': 'Хаустов Сёма', 'ava': 'https://pp.userapi.com/c638031/v638031817/4a84/fGsmwFWuSNw.jpg', 'id': 180924817}, {'name': 'Митенёв Юрий', 'ava': 'https://pp.userapi.com/c639329/v639329455/1230f6/zRxe7fk_tx0.jpg', 'id': 186546271}]
        },
        {name:'Кирово-Чепецк',n:1,
        users:[{'name': 'Кайгородцева Ирина', 'ava': 'https://pp.userapi.com/c840125/v840125896/2c55f/X1sIt4CaQkc.jpg', 'id': 311025655}]
        },
        {name:'Кислово',n:1,
        users:[{'name': 'Ледяев Иван', 'ava': 'https://pp.userapi.com/c604529/v604529650/32730/5PE5x6KOytI.jpg', 'id': 161007650}]
        },
        {name:'Кисловодск',n:4,
        users:[{'name': 'Олегович Андрей', 'ava': 'https://pp.userapi.com/c9898/u141983076/e_66f23556.jpg', 'id': 141983076}, {'name': 'Александров Александр', 'ava': 'https://pp.userapi.com/c604430/v604430468/43e28/HfDyKlR3XCw.jpg', 'id': 154267468}, {'name': 'Букреева Надежда', 'ava': 'https://pp.userapi.com/c620221/v620221999/187d8/VUooSW2WicQ.jpg', 'id': 194353999}, {'name': 'Газаев Мурат', 'ava': 'https://pp.userapi.com/c604520/v604520500/38810/tYF7pQOYiXs.jpg', 'id': 297262500}]
        },
        {name:'Клин',n:2,
        users:[{'name': 'Комарова Юлия', 'ava': 'https://pp.userapi.com/c9544/v9544107/3ccd/StTLtS4VaCQ.jpg', 'id': 92529107}, {'name': 'Лобур Денис', 'ava': 'https://pp.userapi.com/c639629/v639629371/256c6/60dpTgyiaUM.jpg', 'id': 192274371}]
        },
        {name:'Ковдор',n:1,
        users:[{'name': 'Ермаков Виктор', 'ava': 'https://pp.userapi.com/c638925/v638925517/41c45/ozz20IgDUp8.jpg', 'id': 20530517}]
        },
        {name:'Ковель',n:1,
        users:[{'name': 'Чайка Дима', 'ava': 'https://pp.userapi.com/c637122/v637122081/5ef4a/Wd3DzcblfwE.jpg', 'id': 87491501}]
        },
        {name:'Ковров',n:4,
        users:[{'name': 'Тожокин Дмитрий', 'ava': 'https://pp.userapi.com/c638521/v638521615/40e0/L0wCs1_elTQ.jpg', 'id': 3309615}, {'name': 'Ковров Денис', 'ava': 'https://pp.userapi.com/c621700/v621700986/3fae/69kUzdzHBrU.jpg', 'id': 4773537}, {'name': 'Крутов Евгений', 'ava': 'https://pp.userapi.com/c837629/v837629612/41234/HOqQwE0No7U.jpg', 'id': 270646612}, {'name': 'Киреева Лада', 'ava': 'https://pp.userapi.com/c841620/v841620576/100d2/K_Dnt-kL7gY.jpg', 'id': 283962443}]
        },
        {name:'Ковылкино',n:1,
        users:[{'name': 'Ефимкин Денис', 'ava': 'https://pp.userapi.com/c836735/v836735569/54a07/lX5XDyrOnuI.jpg', 'id': 166860400}]
        },
        {name:'Козельск',n:1,
        users:[{'name': 'Бескровный Колян', 'ava': 'https://pp.userapi.com/c628321/v628321213/65ba/hEXcZwAo40k.jpg', 'id': 135630213}]
        },
        {name:'Коломна',n:6,
        users:[{'name': 'Кузнецова Валентина', 'ava': 'https://pp.userapi.com/c841322/v841322030/2d19/bvZsEJxul4Q.jpg', 'id': 5610030}, {'name': 'Кузьмина Марина', 'ava': 'https://pp.userapi.com/c5501/v5501365/4ba/1hcf-eIBowY.jpg', 'id': 21113365}, {'name': 'Свиденцева Наталия', 'ava': 'https://pp.userapi.com/c639316/v639316342/43396/QL0Zmtw4luM.jpg', 'id': 29440051}, {'name': 'Чернышов Сергей', 'ava': 'https://pp.userapi.com/c841327/v841327716/3ebb/j8UEgC22TCs.jpg', 'id': 64326716}, {'name': 'Чернышов Алексей', 'ava': 'https://pp.userapi.com/c626227/v626227917/64f19/TAj4eek1eC0.jpg', 'id': 158919917}, {'name': 'Домбровский Артем', 'ava': 'https://pp.userapi.com/c837130/v837130414/4a53c/G3h6FoIb9xM.jpg', 'id': 270607734}]
        },
        {name:'Комрат',n:1,
        users:[{'name': 'Узун Дима', 'ava': 'https://pp.userapi.com/c638721/v638721433/30035/9zsJ4XR7xhU.jpg', 'id': 252122433}]
        },
        {name:'Комсомольск-на-Амуре',n:2,
        users:[{'name': 'Артемьева Уля', 'ava': 'https://pp.userapi.com/c637518/v637518638/56930/pPQ8aqx8HQw.jpg', 'id': 265718638}, {'name': 'Боброва Анастасия', 'ava': 'https://pp.userapi.com/c637126/v637126670/459b1/YOzic1TotkY.jpg', 'id': 329025670}]
        },
        {name:'Конаково',n:1,
        users:[{'name': 'Пестриков Вячеслав', 'ava': 'https://pp.userapi.com/c639830/v639830625/4266a/h-zmWO8slJI.jpg', 'id': 351802725}]
        },
        {name:'Кондопога',n:1,
        users:[{'name': 'Мартынов Леонид', 'ava': 'https://pp.userapi.com/c627427/v627427770/3e34b/WdfSqVhz5rQ.jpg', 'id': 353329770}]
        },
        {name:'Коновалово',n:1,
        users:[{'name': 'Веретенников Павел', 'ava': 'https://pp.userapi.com/c841336/v841336210/f3f1/TBCbscsOdr0.jpg', 'id': 223047983}]
        },
        {name:'Конотоп',n:1,
        users:[{'name': 'Коваленко Анна', 'ava': 'https://sun9-11.userapi.com/c836520/v836520015/376b5/4wG8oqRPKjM.jpg', 'id': 253230015}]
        },
        {name:'Копейск',n:1,
        users:[{'name': 'Биба Антон', 'ava': 'https://pp.userapi.com/c841622/v841622689/187cd/wgVDxaDKpdw.jpg', 'id': 9179412}]
        },
        {name:'Королёв',n:4,
        users:[{'name': 'Шевченко Сергей', 'ava': 'https://pp.userapi.com/c625327/v625327773/13208/5IhvYTN0os8.jpg', 'id': 3109773}, {'name': 'Полянский Евгений', 'ava': 'https://pp.userapi.com/c638223/v638223721/4a24b/X6SkosTGhzI.jpg', 'id': 4030721}, {'name': 'Чиркова Мария', 'ava': 'https://pp.userapi.com/c841432/v841432583/1d1a9/fH66CpKrSW8.jpg', 'id': 49141044}, {'name': 'Ваня Дядя', 'ava': 'https://pp.userapi.com/c636724/v636724105/180ed/Z_MeNOlGIjg.jpg', 'id': 193925105}]
        },
        {name:'Корсаков',n:1,
        users:[{'name': 'Королёв Макс', 'ava': 'https://pp.userapi.com/c636027/v636027918/11892/fYPvSFX9R-A.jpg', 'id': 141101918}]
        },
        {name:'Корткерос',n:1,
        users:[{'name': 'Можаев Данил', 'ava': 'https://pp.userapi.com/c836234/v836234206/167a1/DrS3loxvK10.jpg', 'id': 183490206}]
        },
        {name:'Костанай',n:2,
        users:[{'name': 'Нурмагамбет Серик', 'ava': 'https://pp.userapi.com/c617716/v617716821/f997/gL7aycEmK-g.jpg', 'id': 215762821}, {'name': 'Марков Алексей', 'ava': 'https://pp.userapi.com/c638327/v638327507/5f5c7/wJZFQa0SBpE.jpg', 'id': 271859106}]
        },
        {name:'Костомукша',n:13,
        users:[{'name': 'Фенгольд Кристина', 'ava': 'https://pp.userapi.com/c639828/v639828759/1e0d3/UjzoIMkESxs.jpg', 'id': 459759}, {'name': 'Елфимов Сергей', 'ava': 'https://pp.userapi.com/c624824/v624824814/887b/NpAfiE31zMg.jpg', 'id': 797814}, {'name': 'Понявин Владимир', 'ava': 'https://pp.userapi.com/c5615/v5615776/3d/lNTT6_ZJMKk.jpg', 'id': 895776}, {'name': 'Гришкина Дина', 'ava': 'https://pp.userapi.com/c638319/v638319006/5ffcb/75lDd9y8i4M.jpg', 'id': 1323064}, {'name': 'Трушкова Светлана', 'ava': 'https://sun9-11.userapi.com/c840524/v840524878/7764/lzP7V2RUGPc.jpg', 'id': 4940873}, {'name': 'Денисова Жанна', 'ava': 'https://sun9-11.userapi.com/c840531/v840531506/8d2a/WfaJpiljYOc.jpg', 'id': 7819152}, {'name': 'Старикова Ирина', 'ava': 'https://pp.userapi.com/c837423/v837423776/4ed71/3571SAEmbYg.jpg', 'id': 9166185}, {'name': 'Коноплева Татьяна', 'ava': 'https://pp.userapi.com/c837135/v837135247/597b7/S1D7QDtn7O0.jpg', 'id': 38104892}, {'name': 'Подёргин Иван', 'ava': 'https://pp.userapi.com/c238/u64477345/e_490d9596.jpg', 'id': 64477345}, {'name': 'Фисенко Дмитрий', 'ava': 'https://pp.userapi.com/c627326/v627326249/4d772/Td2QHztKGlk.jpg', 'id': 99126249}, {'name': 'Логачева Наталья', 'ava': 'https://pp.userapi.com/c638824/v638824206/58823/xvkrpJqUMZw.jpg', 'id': 144485417}, {'name': 'Виктория Дина', 'ava': 'https://pp.userapi.com/c638225/v638225517/22b33/9d0Tavv-fro.jpg', 'id': 192822517}, {'name': 'Манько Андрей', 'ava': 'https://pp.userapi.com/c837524/v837524283/38152/4ruN2-SSMXY.jpg', 'id': 214267283}]
        },
        {name:'Кострома',n:4,
        users:[{'name': 'Гребенщиков Андрей', 'ava': 'https://pp.userapi.com/c630926/v630926921/3cbd7/UXgyN7vrT4c.jpg', 'id': 4110921}, {'name': 'Меньшенин Вадим', 'ava': 'https://pp.userapi.com/c637231/v637231783/5d1cc/Yojt_iHLr4o.jpg', 'id': 138417783}, {'name': 'Соколова Елена', 'ava': 'https://pp.userapi.com/c626121/v626121483/6722f/XMRKabUgQjM.jpg', 'id': 235241483}, {'name': 'Козлов Николай', 'ava': 'https://pp.userapi.com/c623923/v623923242/12cdf/CNt89HUvRCA.jpg', 'id': 285821242}]
        },
        {name:'Красноармейск',n:1,
        users:[{'name': 'Двойнишников Александр', 'ava': 'https://pp.userapi.com/c636616/v636616366/67d28/gyFH3AAXo84.jpg', 'id': 90668366}]
        },
        {name:'Красногорск',n:3,
        users:[{'name': 'Килязов Сергей', 'ava': 'https://pp.userapi.com/c309822/v309822041/3ae3/RuldFZ-OxxI.jpg', 'id': 1001041}, {'name': 'Курицын Дмитрий', 'ava': 'https://pp.userapi.com/c633223/v633223575/2f1d3/wScbUqfKGBM.jpg', 'id': 1021575}, {'name': 'Ветров Андрей', 'ava': 'https://pp.userapi.com/c636631/v636631089/49c8/7TXYHOG0O54.jpg', 'id': 13133089}]
        },
        {name:'Красноград',n:1,
        users:[{'name': 'Абдрахманов Владимир', 'ava': 'https://pp.userapi.com/c604529/v604529695/17939/43fGK8oN8Sw.jpg', 'id': 87027695}]
        },
        {name:'Краснодар',n:33,
        users:[{'name': 'Олегович Андрей', 'ava': 'https://vk.com/images/camera_50.png', 'id': 3961155}, {'name': 'Меркулов Андрей', 'ava': 'https://pp.userapi.com/c837538/v837538563/305b7/sXSgc5Jj_yI.jpg', 'id': 4239563}, {'name': 'Давыдов Александр', 'ava': 'https://pp.userapi.com/c637827/v637827211/26329/KqKewkTI91s.jpg', 'id': 6418211}, {'name': 'Нагорная Ксения', 'ava': 'https://pp.userapi.com/c840232/v840232256/49527/DUmAZ1ZTd44.jpg', 'id': 8834307}, {'name': 'Суслина Наталья', 'ava': 'https://pp.userapi.com/c638328/v638328449/61acb/E2mEltByqU4.jpg', 'id': 13646063}, {'name': 'Nosenko Anastasiya', 'ava': 'https://pp.userapi.com/c631226/v631226280/437db/aJFiO91e5OA.jpg', 'id': 18402280}, {'name': 'Косенко Сергей', 'ava': 'https://pp.userapi.com/c637131/v637131293/4d4cb/q6-VS0qUs04.jpg', 'id': 26943293}, {'name': 'Круглов Андрей', 'ava': 'https://pp.userapi.com/c638016/v638016352/22479/niRe53NQZlw.jpg', 'id': 29803352}, {'name': 'Назаренко Ассоль', 'ava': 'https://pp.userapi.com/c837327/v837327939/49d7e/-AcBytwow04.jpg', 'id': 31710977}, {'name': 'Бойко Ирина', 'ava': 'https://pp.userapi.com/c841230/v841230868/106cf/irgbaU1VpyA.jpg', 'id': 34320490}, {'name': 'Соколова Юлия', 'ava': 'https://pp.userapi.com/c638729/v638729067/70857/S3tHPetYs4I.jpg', 'id': 85397067}, {'name': 'Walker Sky', 'ava': 'https://pp.userapi.com/c639222/v639222025/3bbb0/5ZwY7IdE20U.jpg', 'id': 90300612}, {'name': 'Морозов Кирилл', 'ava': 'https://pp.userapi.com/c637317/v637317740/67ee4/bDwNtrqvyDw.jpg', 'id': 107484740}, {'name': 'Демина Инга', 'ava': 'https://pp.userapi.com/c837132/v837132244/46b2c/uxnDhxIrMOs.jpg', 'id': 126739303}, {'name': 'Боднар Лена', 'ava': 'https://pp.userapi.com/c837624/v837624865/31337/S3kJKBPQ4tQ.jpg', 'id': 141437865}, {'name': 'Буланова Елена', 'ava': 'https://pp.userapi.com/c638717/v638717479/5d023/xFN-lJK7F40.jpg', 'id': 149428700}, {'name': 'Свидовская Оля', 'ava': 'https://pp.userapi.com/c638521/v638521640/5943f/JSwBySdgOZ4.jpg', 'id': 156563617}, {'name': 'Прус Аня', 'ava': 'https://pp.userapi.com/c840429/v840429606/74ee/Xsaws8xLzbc.jpg', 'id': 181373208}, {'name': 'Di Konstantin', 'ava': 'https://pp.userapi.com/c837239/v837239483/68113/I7DokJujbqs.jpg', 'id': 191728483}, {'name': 'Исаев Юрий', 'ava': 'https://pp.userapi.com/c633124/v633124312/1dc26/8wi_jJdO3vg.jpg', 'id': 205331312}, {'name': 'Костян Катя', 'ava': 'https://pp.userapi.com/c639817/v639817759/3fbf1/PDE8mLWR3Zw.jpg', 'id': 214489599}, {'name': 'Волков Денис', 'ava': 'https://sun9-11.userapi.com/c840137/v840137110/23fb6/6i3Oxp6Dd8Y.jpg', 'id': 225866850}, {'name': 'Гуревич Максим', 'ava': 'https://pp.userapi.com/c627119/v627119664/2cf6b/3kdDlTsL_64.jpg', 'id': 234526664}, {'name': 'Саклаков Михаил', 'ava': 'https://pp.userapi.com/c836332/v836332279/605ea/G7bGk_H5osY.jpg', 'id': 235865220}, {'name': 'Квестор Иосиф', 'ava': 'https://vk.com/images/camera_50.png', 'id': 250546111}, {'name': 'Натальченко Александр', 'ava': 'https://pp.userapi.com/c617621/v617621128/62a9/uFm_auirRno.jpg', 'id': 269581128}, {'name': 'Алексеевич Сергей', 'ava': 'https://pp.userapi.com/c841131/v841131637/16556/YuxFbtStDPI.jpg', 'id': 288367741}, {'name': 'Скорик Катерина', 'ava': 'https://pp.userapi.com/c637823/v637823371/f26a/cLLVeTmECBc.jpg', 'id': 288513371}, {'name': 'Шевченко Алексей', 'ava': 'https://pp.userapi.com/c836626/v836626982/3b707/Fymq7F24Cxs.jpg', 'id': 291508982}, {'name': 'Шумилов Алексей', 'ava': 'https://pp.userapi.com/c638520/v638520529/4b039/Qx22fgy3gF0.jpg', 'id': 300939529}, {'name': 'Aleksenko Danil', 'ava': 'https://pp.userapi.com/c639317/v639317401/30cdd/UqeraTeuLZ0.jpg', 'id': 317063460}, {'name': 'Kaiv Dairin', 'ava': 'https://pp.userapi.com/c638816/v638816124/65422/LnaGcLiLyF0.jpg', 'id': 399774077}, {'name': 'Kirova Anastasia', 'ava': 'https://sun9-11.userapi.com/c840628/v840628896/7011/ZgQznnCk2Zk.jpg', 'id': 402715728}]
        },
        {name:'Краснодон',n:4,
        users:[{'name': 'Калинин Александр', 'ava': 'https://pp.userapi.com/c841224/v841224256/56e50/FPL7YjWAMY8.jpg', 'id': 6944627}, {'name': 'Вержбицкая Дарья', 'ava': 'https://pp.userapi.com/c836728/v836728820/50743/RccvXdEs0ms.jpg', 'id': 18031820}, {'name': 'Смирнов Михаил', 'ava': 'https://pp.userapi.com/c636429/v636429862/54391/LiLEkBLrvus.jpg', 'id': 18314862}, {'name': 'Куцаева Оксана', 'ava': 'https://pp.userapi.com/c836226/v836226237/5dab0/rdyFMKTzsI4.jpg', 'id': 20208640}]
        },
        {name:'Краснознаменск',n:3,
        users:[{'name': 'Александрович Эдуард', 'ava': 'https://pp.userapi.com/c637226/v637226435/28ea4/1JM92thrg7s.jpg', 'id': 5642435}, {'name': 'Емельяненко Александр', 'ava': 'https://pp.userapi.com/c841120/v841120700/e2d7/MZXiJotLAIY.jpg', 'id': 6397504}, {'name': 'Фетин Константин', 'ava': 'https://pp.userapi.com/c631416/v631416405/f924/wm8KI5CLrSs.jpg', 'id': 41520405}]
        },
        {name:'Красноярск',n:9,
        users:[{'name': 'Корейша Владимир', 'ava': 'https://pp.userapi.com/c836227/v836227514/5eaa0/Mt8M4aeA2sc.jpg', 'id': 9178141}, {'name': 'Терещенко Дмитрий', 'ava': 'https://pp.userapi.com/c841620/v841620830/1f41a/oV6k3Tvaifg.jpg', 'id': 10002770}, {'name': 'Антошин Илья', 'ava': 'https://pp.userapi.com/c841629/v841629520/1a04c/r4jVgBIKPf4.jpg', 'id': 15168900}, {'name': 'Козловский Артём', 'ava': 'https://pp.userapi.com/c637925/v637925402/490c7/Xt8j6XvXHlk.jpg', 'id': 27279402}, {'name': 'Гаряев Иван', 'ava': 'https://pp.userapi.com/c631518/v631518964/4d66c/mtMytEn9_JU.jpg', 'id': 27657964}, {'name': 'Шудров Андрей', 'ava': 'https://pp.userapi.com/c406117/v406117033/1180a/rpXKF3DKwiI.jpg', 'id': 29477033}, {'name': 'Строков Александр', 'ava': 'https://pp.userapi.com/c639325/v639325610/3f2f7/Q2_fP4wJFm4.jpg', 'id': 41213792}, {'name': 'Фрадено Ян', 'ava': 'https://pp.userapi.com/c837638/v837638079/612f0/DwLWBhz-4Wg.jpg', 'id': 197252094}, {'name': 'Анисимов Юрий', 'ava': 'https://pp.userapi.com/c418225/v418225959/62b3/akHt9YPqGuY.jpg', 'id': 221417959}]
        },
        {name:'Красный Стекловар',n:1,
        users:[{'name': 'Курушин Игорь', 'ava': 'https://pp.userapi.com/c406927/v406927048/9dc3/CDtW0DnU93I.jpg', 'id': 203254048}]
        },
        {name:'Кременчуг',n:1,
        users:[{'name': 'Гонтарь Оля', 'ava': 'https://pp.userapi.com/c837231/v837231226/4aed4/gqRnvRUi5ok.jpg', 'id': 58141226}]
        },
        {name:'Крестцы',n:1,
        users:[{'name': 'Киселёв Артём', 'ava': 'https://pp.userapi.com/c836531/v836531095/67560/ppgjItuin7k.jpg', 'id': 4724668}]
        },
        {name:'Кривой Рог',n:3,
        users:[{'name': 'Швалёва Аня', 'ava': 'https://pp.userapi.com/c837435/v837435806/5dacb/rf3Ci0p7-54.jpg', 'id': 10948577}, {'name': 'Рогозная Наталья', 'ava': 'https://pp.userapi.com/c636821/v636821522/48855/MMnNqEDKV5g.jpg', 'id': 14473522}, {'name': 'Redov Vlad', 'ava': 'https://vk.com/images/camera_50.png', 'id': 290849526}]
        },
        {name:'Кропачёво',n:1,
        users:[{'name': 'Юдин Александр', 'ava': 'https://pp.userapi.com/c637324/v637324213/25351/GO9v98sINp4.jpg', 'id': 44298213}]
        },
        {name:'Кропивницкий / Кировоград',n:2,
        users:[{'name': 'Левченко Татьяна', 'ava': 'https://pp.userapi.com/c623924/v623924852/45550/SvElEWUBkcY.jpg', 'id': 33927852}, {'name': 'Лишневский Александр', 'ava': 'https://pp.userapi.com/c836733/v836733437/42744/ILcGgG9Qvc4.jpg', 'id': 51526437}]
        },
        {name:'Кстово',n:2,
        users:[{'name': 'Сафин Богдан', 'ava': 'https://pp.userapi.com/c630022/v630022876/10055/6FpozkbjGQA.jpg', 'id': 5232876}, {'name': 'Тугов Олег', 'ava': 'https://pp.userapi.com/c619130/v619130929/1dd06/gk4SBDOh2nY.jpg', 'id': 219138929}]
        },
        {name:'Кузнецк',n:1,
        users:[{'name': 'Томашёва Танюшка', 'ava': 'https://pp.userapi.com/c841126/v841126838/16e18/3KUeuHRGmYQ.jpg', 'id': 203513824}]
        },
        {name:'Кулебаки',n:1,
        users:[{'name': 'Гладков Серега', 'ava': 'https://pp.userapi.com/c840135/v840135827/500d/Bua45XIcrBg.jpg', 'id': 97411827}]
        },
        {name:'Кумертау',n:4,
        users:[{'name': 'Кутлугужин Ильнур', 'ava': 'https://pp.userapi.com/c836228/v836228224/50c9f/yppTARtwPow.jpg', 'id': 1304224}, {'name': 'Liev Tima', 'ava': 'https://pp.userapi.com/c627624/v627624793/464ac/eZqjNRw8qUo.jpg', 'id': 5378793}, {'name': 'Усманова Айгуль', 'ava': 'https://pp.userapi.com/c836439/v836439039/71a64/bssgqTQNc_Y.jpg', 'id': 13657304}, {'name': 'Смагина Вероника', 'ava': 'https://pp.userapi.com/c639827/v639827557/45fa6/-MZGOoaydCs.jpg', 'id': 140763043}]
        },
        {name:'Кунгур',n:1,
        users:[{'name': 'Пономарева Вера', 'ava': 'https://pp.userapi.com/c836438/v836438169/57306/WGV7v65sUYA.jpg', 'id': 136643725}]
        },
        {name:'Курган',n:1,
        users:[{'name': 'Галямин Евгений', 'ava': 'https://pp.userapi.com/c315716/v315716808/ee52/dnFxxdhqkqU.jpg', 'id': 66874808}]
        },
        {name:'Куровское',n:1,
        users:[{'name': 'Логутов Евгений', 'ava': 'https://pp.userapi.com/c836736/v836736776/4f760/1Ow1jSMcajc.jpg', 'id': 349662776}]
        },
        {name:'Курск',n:8,
        users:[{'name': 'Лыков Михаил', 'ava': 'https://pp.userapi.com/c840027/v840027950/2aad6/Q8yEeyTuEIY.jpg', 'id': 11296687}, {'name': 'Подлесных Екатерина', 'ava': 'https://pp.userapi.com/c639325/v639325708/48fa3/DoRg34EpOEg.jpg', 'id': 107834709}, {'name': 'Банчуков Александр', 'ava': 'https://pp.userapi.com/c636128/v636128075/1e29/0BTf_dyD2mA.jpg', 'id': 113807075}, {'name': 'Латыш Николай', 'ava': 'https://pp.userapi.com/c637825/v637825101/35699/wjp4j5ENyK8.jpg', 'id': 146968101}, {'name': 'Михеев Владислав', 'ava': 'https://pp.userapi.com/c841030/v841030863/746c/y3-2GBKeXXk.jpg', 'id': 210910863}, {'name': 'Дрёмин Сергей', 'ava': 'https://pp.userapi.com/c836127/v836127587/5e667/iBV7TM4ZcE4.jpg', 'id': 224361435}, {'name': 'Куржупова Маша', 'ava': 'https://pp.userapi.com/c638825/v638825934/1a0d7/hF0iVWjLpjM.jpg', 'id': 358507934}, {'name': 'Кошечкина Маша', 'ava': 'https://pp.userapi.com/c637523/v637523610/56330/wpt3TpqQcRI.jpg', 'id': 364344610}]
        },
        {name:'Курчатов',n:2,
        users:[{'name': 'Коник Игорь', 'ava': 'https://pp.userapi.com/c625121/v625121057/3d879/KYEF2veiEWE.jpg', 'id': 62097057}, {'name': 'Белозёрова Татьяна', 'ava': 'https://pp.userapi.com/c630323/v630323221/4db63/KRnmu_IA6lw.jpg', 'id': 121368221}]
        },
        {name:'Кызылорда ',n:1,
        users:[{'name': 'Ондрей Жандаулет', 'ava': 'https://pp.userapi.com/c639731/v639731256/2eb1f/57i1zTLHxG0.jpg', 'id': 316782256}]
        },
        {name:'Кыштым',n:1,
        users:[{'name': 'Дайбова Алина', 'ava': 'https://pp.userapi.com/c840438/v840438214/4872/xvFPPexz_RQ.jpg', 'id': 228931704}]
        },
        {name:'Лангепас',n:1,
        users:[{'name': 'Гарипов Рустам', 'ava': 'https://pp.userapi.com/c614617/v614617694/1e057/9g_DLPV-QFY.jpg', 'id': 29883694}]
        },
        {name:'Лахденпохья',n:1,
        users:[{'name': 'Рудов Виталий', 'ava': 'https://pp.userapi.com/c837630/v837630737/4b16b/Z9i83w2s8ig.jpg', 'id': 17532737}]
        },
        {name:'Лениногорск',n:4,
        users:[{'name': 'Тихонова Елена', 'ava': 'https://pp.userapi.com/c617225/v617225931/5a27/_DCfUoGOyZg.jpg', 'id': 134539931}, {'name': 'Гараев Тимур', 'ava': 'https://pp.userapi.com/c629223/v629223461/22a33/N_2nE8aWtoo.jpg', 'id': 139809461}, {'name': 'Воронцов Фёдор', 'ava': 'https://pp.userapi.com/c639617/v639617116/375ec/4lZLamldgNU.jpg', 'id': 235508065}, {'name': 'Gallyamov Timur', 'ava': 'https://pp.userapi.com/c626226/v626226576/31eb4/nXEEhZC_fRs.jpg', 'id': 300888576}]
        },
        {name:'Ленинск-Кузнецкий',n:1,
        users:[{'name': 'Никифоров Антон', 'ava': 'https://pp.userapi.com/c836720/v836720494/48acb/57tbE3BSPL8.jpg', 'id': 120653494}]
        },
        {name:'Лесной',n:2,
        users:[{'name': 'Игошев Евгений', 'ava': 'https://pp.userapi.com/c639518/v639518498/4010d/YVZBfps1tBs.jpg', 'id': 217467163}, {'name': 'Кузнецова Ульяна', 'ava': 'https://pp.userapi.com/c637327/v637327218/66c33/rSlfJJGn_9g.jpg', 'id': 232054540}]
        },
        {name:'Лесосибирск',n:2,
        users:[{'name': 'Москвитин Артём', 'ava': 'https://pp.userapi.com/c841421/v841421619/19b2b/dho0zkb902I.jpg', 'id': 58974528}, {'name': 'Гребнев Иван', 'ava': 'https://pp.userapi.com/c638417/v638417191/5a158/IWZXIDARxok.jpg', 'id': 220411398}]
        },
        {name:'Ливны',n:2,
        users:[{'name': 'Агеев Сергей', 'ava': 'https://pp.userapi.com/c639727/v639727589/3532d/AUntXJT6BOU.jpg', 'id': 30828171}, {'name': 'Кожухов Владислав', 'ava': 'https://pp.userapi.com/c637225/v637225249/5da55/8b2rFv3Yt2E.jpg', 'id': 101173249}]
        },
        {name:'Ликино-Дулево',n:3,
        users:[{'name': 'Чеканов Олег', 'ava': 'https://pp.userapi.com/c636516/v636516484/119fe/rJorI2tXj_g.jpg', 'id': 7352484}, {'name': 'Буянова Екатерина', 'ava': 'https://pp.userapi.com/c836333/v836333098/50e1d/G5LjV_axLDk.jpg', 'id': 16198176}, {'name': 'Мурина Алёнка', 'ava': 'https://pp.userapi.com/c638727/v638727433/5866f/K_ccOabQ0dY.jpg', 'id': 26788175}]
        },
        {name:'Липецк',n:11,
        users:[{'name': 'Солдатова Елена', 'ava': 'https://pp.userapi.com/c639231/v639231711/50dac/m5osoGoy4pg.jpg', 'id': 356178}, {'name': 'Железняков Артем', 'ava': 'https://pp.userapi.com/c637429/v637429817/d004/bdY2LU7T5hY.jpg', 'id': 6734817}, {'name': 'Насонова Екатерина', 'ava': 'https://pp.userapi.com/c836333/v836333414/5fb84/mhF3aEz_aIw.jpg', 'id': 40221876}, {'name': 'Никитин Юрий', 'ava': 'https://pp.userapi.com/c639320/v639320785/3a20d/kTXl2_l-huI.jpg', 'id': 46616527}, {'name': 'Миронов Андрей', 'ava': 'https://pp.userapi.com/c626726/v626726847/233d5/f5cQk9r9sWs.jpg', 'id': 94633847}, {'name': 'Иванов Андрей', 'ava': 'https://pp.userapi.com/c837432/v837432761/4a1f7/1YlsE56bmuQ.jpg', 'id': 116180236}, {'name': 'Фокс Алексей', 'ava': 'https://pp.userapi.com/c620825/v620825498/67d7/lOiM1xc_Lf8.jpg', 'id': 159710498}, {'name': 'Климченков Сергей', 'ava': 'https://pp.userapi.com/c836321/v836321869/560a9/Vgwf4hwPqKs.jpg', 'id': 203847090}, {'name': 'Baskakova Sofya', 'ava': 'https://pp.userapi.com/c638621/v638621111/4934b/PvtsYZXIekE.jpg', 'id': 300122111}, {'name': 'Белотелова Галина', 'ava': 'https://pp.userapi.com/c836733/v836733055/71dd7/Dpdf9D27MNA.jpg', 'id': 326835108}, {'name': 'Капустин Игорь', 'ava': 'https://pp.userapi.com/c637529/v637529938/6e04d/PpzHgeswSps.jpg', 'id': 357425938}]
        },
        {name:'Лобня',n:2,
        users:[{'name': 'Гизатулин Роман', 'ava': 'https://pp.userapi.com/c840128/v840128775/9e24/3iQgeYzuDr8.jpg', 'id': 18586775}, {'name': 'Вихрова Наташа', 'ava': 'https://pp.userapi.com/c626628/v626628467/239ee/zs9X8dfhNoI.jpg', 'id': 98880467}]
        },
        {name:'Лосино-Петровский',n:1,
        users:[{'name': 'Чумичёва Ольга', 'ava': 'https://pp.userapi.com/c604730/v604730945/2051/DYqLsuJ5KQI.jpg', 'id': 23795945}]
        },
        {name:'Луганск',n:3,
        users:[{'name': 'Скороход Николай', 'ava': 'https://pp.userapi.com/c416430/v416430539/441b/y042CKAc8QA.jpg', 'id': 68906539}, {'name': 'Шулика Андрей', 'ava': 'https://pp.userapi.com/c637621/v637621288/1aa89/jFsoc81b-UA.jpg', 'id': 127024288}, {'name': 'Березовская Елена', 'ava': 'https://pp.userapi.com/c837120/v837120993/53e85/ks9k2-rSJsw.jpg', 'id': 191766993}]
        },
        {name:'Луховицы',n:1,
        users:[{'name': 'Гуртовая Анастасия', 'ava': 'https://pp.userapi.com/c837734/v837734204/7cc52/v4s0q2dDZ2I.jpg', 'id': 3914298}]
        },
        {name:'Львов',n:4,
        users:[{'name': 'Футков Слава', 'ava': 'https://pp.userapi.com/c314218/v314218167/68f5/q5BbnnbZcug.jpg', 'id': 7968167}, {'name': 'Кулай Тарас', 'ava': 'https://pp.userapi.com/c637430/v637430180/5afe3/Ae8XaB_THJw.jpg', 'id': 56359180}, {'name': 'Шостак Роман', 'ava': 'https://pp.userapi.com/c627818/v627818765/28a53/Cz4ICBmWvWI.jpg', 'id': 65420765}, {'name': 'Билоног Виталий', 'ava': 'https://pp.userapi.com/c841028/v841028608/1d162/3UvZA1K9f3w.jpg', 'id': 153389935}]
        },
        {name:'Люберцы',n:4,
        users:[{'name': 'Воронина Вероника', 'ava': 'https://pp.userapi.com/c409820/v409820038/ace3/MDHi-Y6nb_I.jpg', 'id': 6919038}, {'name': 'Гареев Руслан', 'ava': 'https://pp.userapi.com/c836733/v836733171/3c572/qgWRnQbPvQE.jpg', 'id': 9482171}, {'name': 'Фитисова Юлия', 'ava': 'https://pp.userapi.com/c837538/v837538080/54e72/ZZgl1rUTemc.jpg', 'id': 31518771}, {'name': 'Комлева Елена', 'ava': 'https://pp.userapi.com/c837421/v837421405/1bc45/nmHweb2Y7vw.jpg', 'id': 272017405}]
        },
        {name:'Люботин',n:1,
        users:[{'name': 'Гаврилюк Юлия', 'ava': 'https://pp.userapi.com/c636123/v636123658/2ea45/JbxdHaALsn0.jpg', 'id': 277388658}]
        },
        {name:'Людиново',n:2,
        users:[{'name': 'Евдокимова Анюта', 'ava': 'https://pp.userapi.com/c836637/v836637533/65fa3/YOycLjxk1pY.jpg', 'id': 3755282}, {'name': 'Пинахин Денис', 'ava': 'https://pp.userapi.com/c841326/v841326867/1aa27/qQesnFpgWl8.jpg', 'id': 21704159}]
        },
        {name:'Магадан',n:1,
        users:[{'name': 'Перкова Мария', 'ava': 'https://pp.userapi.com/c836337/v836337816/48ae3/iLU1PBt7BUw.jpg', 'id': 635607}]
        },
        {name:'Магнитогорск',n:4,
        users:[{'name': 'Алексеева Альбина', 'ava': 'https://pp.userapi.com/c149/v149955/9bc/Xnez3wQeN0E.jpg', 'id': 14791955}, {'name': 'Феоктистов Михаил', 'ava': 'https://pp.userapi.com/c638430/v638430770/4bc82/fZKgI_nzo8k.jpg', 'id': 95762770}, {'name': 'Мизинов Василий', 'ava': 'https://pp.userapi.com/c636024/v636024609/2e4d9/4tZtAQP5K4E.jpg', 'id': 125353609}, {'name': 'Затонская Надежда', 'ava': 'https://pp.userapi.com/c622930/v622930906/21975/wCBar2FW2Ok.jpg', 'id': 216304906}]
        },
        {name:'Майкоп',n:3,
        users:[{'name': 'Овчинников Роман', 'ava': 'https://pp.userapi.com/c604521/v604521302/1313/-WmAs2rbUCk.jpg', 'id': 216286302}, {'name': 'Владимирович Владимир', 'ava': 'https://pp.userapi.com/c837526/v837526121/4ed70/MuDdzIIZY4A.jpg', 'id': 316572326}, {'name': 'Малина Кира', 'ava': 'https://pp.userapi.com/c841530/v841530721/1f465/91YFRJliyuM.jpg', 'id': 427888639}]
        },
        {name:'Малин',n:1,
        users:[{'name': 'Порохнюк Олександр', 'ava': 'https://pp.userapi.com/c619929/v619929160/1d99f/2UAuIEY3_8c.jpg', 'id': 11357160}]
        },
        {name:'Манжерок',n:1,
        users:[{'name': 'Ермолова Галина', 'ava': 'https://pp.userapi.com/c5135/u162443734/e_1c043b2d.jpg', 'id': 162443734}]
        },
        {name:'Мариинский Посад',n:1,
        users:[{'name': 'Алексеев Стас', 'ava': 'https://pp.userapi.com/c836129/v836129610/5c01e/BEhs3ti8Pw0.jpg', 'id': 166374085}]
        },
        {name:'Мариуполь',n:2,
        users:[{'name': 'Васьковский Иван', 'ava': 'https://pp.userapi.com/c836420/v836420895/46a3f/p2j6W5OQ7BY.jpg', 'id': 41414182}, {'name': 'Комаров Жора', 'ava': 'https://pp.userapi.com/c837428/v837428976/473a7/cpx3LaM6caw.jpg', 'id': 409676266}]
        },
        {name:'Махачкала',n:2,
        users:[{'name': 'Магомедов Магомед', 'ava': 'https://pp.userapi.com/c10812/u117871901/e_47fa74cc.jpg', 'id': 117871901}, {'name': 'Оспанов Арсен', 'ava': 'https://pp.userapi.com/c637717/v637717528/3f3b0/X-2biEJwJX4.jpg', 'id': 420781528}]
        },
        {name:'Медвежий Угол',n:1,
        users:[{'name': 'Колганов Кирилл', 'ava': 'https://pp.userapi.com/c323830/v323830463/9b77/N5oJFHlAM9U.jpg', 'id': 938463}]
        },
        {name:'Медвежьегорск',n:1,
        users:[{'name': 'Блинов Виталий', 'ava': 'https://pp.userapi.com/c841433/v841433902/a123/ezk4jW1D0zQ.jpg', 'id': 188483210}]
        },
        {name:'Мелеуз',n:1,
        users:[{'name': 'Хасбатов Вячеслав', 'ava': 'https://pp.userapi.com/c637525/v637525549/15144/zROLq3TaJtI.jpg', 'id': 5119549}]
        },
        {name:'Миасс',n:4,
        users:[{'name': 'Ерохин Дмитрий', 'ava': 'https://pp.userapi.com/c617825/v617825063/1e4cc/MLFnrsXKOB8.jpg', 'id': 31990063}, {'name': 'Тетюев Андрей', 'ava': 'https://pp.userapi.com/c313427/v313427365/ddd/4_WntfDEhXg.jpg', 'id': 40707365}, {'name': 'Хакимов Вадим', 'ava': 'https://pp.userapi.com/c836137/v836137152/50fc7/nd_ECQrp7Mg.jpg', 'id': 65459225}, {'name': 'Бубловская Анастасия', 'ava': 'https://pp.userapi.com/c638526/v638526901/691e7/7lfmnk7FWNk.jpg', 'id': 185282829}]
        },
        {name:'Микунь',n:2,
        users:[{'name': 'Голиков Илья', 'ava': 'https://pp.userapi.com/c836137/v836137623/524c9/kiY46To-euk.jpg', 'id': 82500515}, {'name': 'Карелин Денис', 'ava': 'https://pp.userapi.com/c627225/v627225635/40a10/migVTZa176Y.jpg', 'id': 334212635}]
        },
        {name:'Минеральные Воды',n:1,
        users:[{'name': 'Иванов Иван', 'ava': 'https://pp.userapi.com/c841127/v841127776/16af8/Qhq2PjHWU4o.jpg', 'id': 201250272}]
        },
        {name:'Минск',n:24,
        users:[{'name': 'Морозов Кирилл', 'ava': 'https://pp.userapi.com/c639723/v639723899/44273/vBc8ufOhGmM.jpg', 'id': 7790392}, {'name': 'Васильченко Вадим', 'ava': 'https://pp.userapi.com/c837727/v837727741/30f5e/cGWTVqnHlUA.jpg', 'id': 24308741}, {'name': 'Нестеренко Татьяна', 'ava': 'https://pp.userapi.com/c836733/v836733049/57719/pXJhd6CQjUs.jpg', 'id': 27288775}, {'name': 'Гринько Анастасия', 'ava': 'https://pp.userapi.com/c836538/v836538089/6005f/kOodI4PHPUo.jpg', 'id': 29491972}, {'name': 'Korgan Nastassia', 'ava': 'https://pp.userapi.com/c837735/v837735620/4956a/hda-4AD2e5g.jpg', 'id': 30125356}, {'name': 'Цветков Вильям', 'ava': 'https://pp.userapi.com/c628131/v628131322/3bc2f/cOXU3RnT-Ps.jpg', 'id': 42660322}, {'name': 'Дубков Алексей', 'ava': 'https://pp.userapi.com/c624021/v624021977/3fd1d/xwEG4qxb4x0.jpg', 'id': 57916977}, {'name': 'Кошель Владимир', 'ava': 'https://pp.userapi.com/c637919/v637919708/176a2/Qs2nEAqea-4.jpg', 'id': 63207708}, {'name': 'Мишенькин Владимир', 'ava': 'https://pp.userapi.com/c636524/v636524886/51351/8wyUULTGJ1w.jpg', 'id': 69228886}, {'name': 'Тимоховский Александр', 'ava': 'https://pp.userapi.com/c638831/v638831756/1472/CIIH3FyZDt0.jpg', 'id': 74339756}, {'name': 'Маринченко Александр', 'ava': 'https://pp.userapi.com/c633528/v633528396/315db/ckoTWh6bvWM.jpg', 'id': 136471396}, {'name': 'Ромашко Любовь', 'ava': 'https://pp.userapi.com/c836238/v836238317/56d8a/5P8wr9Tjfrw.jpg', 'id': 144188564}, {'name': 'Бабицкий Вова', 'ava': 'https://pp.userapi.com/c638418/v638418149/56f86/jpGvYj035cU.jpg', 'id': 159497638}, {'name': 'Тютьман Алексей', 'ava': 'https://pp.userapi.com/c621119/v621119194/1a32e/hLwIoruqfmM.jpg', 'id': 164778194}, {'name': 'Войшнис Алиса', 'ava': 'https://pp.userapi.com/c837735/v837735552/320aa/N4PvF-myTQM.jpg', 'id': 167519552}, {'name': 'Пранович Ирэн', 'ava': 'https://pp.userapi.com/c627321/v627321688/929a/otISGoyfPQo.jpg', 'id': 199494688}, {'name': 'Суховей Михаил', 'ava': 'https://pp.userapi.com/c630431/v630431701/e582/xlo8pr9Mn3o.jpg', 'id': 200258701}, {'name': 'Траевский Владислав', 'ava': 'https://pp.userapi.com/c637421/v637421199/57ec5/4Rh8EzDv51U.jpg', 'id': 213408199}, {'name': 'Скорняков Павел', 'ava': 'https://pp.userapi.com/c639525/v639525624/2dcc0/qXq65cLigQk.jpg', 'id': 265686923}, {'name': 'Кузнец Гриша', 'ava': 'https://vk.com/images/camera_50.png', 'id': 269941420}, {'name': 'Павленко Денис', 'ava': 'https://pp.userapi.com/c637127/v637127121/e6d4/LIIwO4SPryY.jpg', 'id': 277043121}, {'name': 'Казачёнок Павел', 'ava': 'https://pp.userapi.com/c638025/v638025918/3abd0/owgm6Eq82eI.jpg', 'id': 312398918}, {'name': 'Гайдук Владимир', 'ava': 'https://pp.userapi.com/c639219/v639219132/4358f/jP_NimcJWWA.jpg', 'id': 332615327}, {'name': 'Карташев Вячеслав', 'ava': 'https://pp.userapi.com/c627416/v627416765/2cee5/wacTk3Lfz9A.jpg', 'id': 338425765}]
        },
        {name:'Минусинск',n:2,
        users:[{'name': 'Титов Костя', 'ava': 'https://pp.userapi.com/c315131/v315131328/bb74/Avk6wjmEBrQ.jpg', 'id': 48202328}, {'name': 'Ишков Денис', 'ava': 'https://pp.userapi.com/c837320/v837320579/44bbe/0oH5-ZRgL_I.jpg', 'id': 197623579}]
        },
        {name:'Мирный',n:4,
        users:[{'name': 'Войтенко Константин', 'ava': 'https://vk.com/images/camera_50.png', 'id': 944183}, {'name': 'Шайнуров Сергей', 'ava': 'https://pp.userapi.com/c625830/v625830154/67465/dzGym1wPf70.jpg', 'id': 14759154}, {'name': 'Карпенко Наталья', 'ava': 'https://pp.userapi.com/c841623/v841623934/136a6/vrQV8Mm_d7A.jpg', 'id': 66063814}, {'name': 'Киселёва Оленька', 'ava': 'https://pp.userapi.com/c639319/v639319313/3e2a9/XdUSPaneqcw.jpg', 'id': 70852961}]
        },
        {name:'Мичуринск',n:2,
        users:[{'name': 'Букатова Ольга', 'ava': 'https://pp.userapi.com/c4271/u79694449/e_c4bd04ca.jpg', 'id': 79694449}, {'name': 'Шишиморов Роман', 'ava': 'https://pp.userapi.com/c639820/v639820566/3d9a4/0ugXHZi-f6s.jpg', 'id': 420917374}]
        },
        {name:'Могилёв',n:5,
        users:[{'name': 'Карамазовы Братаны', 'ava': 'https://pp.userapi.com/c836230/v836230592/9e9d/9YO60LklESs.jpg', 'id': 34200592}, {'name': 'Якубенко Дмитрий', 'ava': 'https://pp.userapi.com/c9299/u55364217/e_6fcdecc7.jpg', 'id': 55364217}, {'name': 'Ли Виктор', 'ava': 'https://pp.userapi.com/c639130/v639130889/57fa2/_ATeTKa10Ic.jpg', 'id': 244854073}, {'name': 'Галуза Владислав', 'ava': 'https://pp.userapi.com/c639527/v639527459/3b50/HrTlC2PlZ9k.jpg', 'id': 251144459}, {'name': 'Галуза Максим', 'ava': 'https://pp.userapi.com/c841533/v841533360/1dea3/eHrLBTuoQQk.jpg', 'id': 268389445}]
        },
        {name:'Молодечно',n:1,
        users:[{'name': 'Вайдо Андрей', 'ava': 'https://pp.userapi.com/c638925/v638925361/18a47/TBTc52S_2h0.jpg', 'id': 150420361}]
        },
        {name:'Монино',n:2,
        users:[{'name': 'Голыгина Наталья', 'ava': 'https://pp.userapi.com/c836323/v836323755/4a00f/mUh39zoQts0.jpg', 'id': 32569755}, {'name': 'Гуреев Константин', 'ava': 'https://pp.userapi.com/c308325/v308325038/b937/s8DKHlUgHyg.jpg', 'id': 92136038}]
        },
        {name:'Мончегорск',n:3,
        users:[{'name': 'Амбулов Александр', 'ava': 'https://pp.userapi.com/c637125/v637125682/400cb/JmA9n1kNtnE.jpg', 'id': 12581682}, {'name': 'Арашкевич Евгений', 'ava': 'https://pp.userapi.com/c5849/u57338121/e_cb82ad88.jpg', 'id': 57338121}, {'name': 'Максимова Татьяна', 'ava': 'https://pp.userapi.com/c407330/v407330532/9e9d/-JKwdozFMPY.jpg', 'id': 195540532}]
        },
        {name:'Морозовск',n:1,
        users:[{'name': 'Сытников Максим', 'ava': 'https://pp.userapi.com/c627418/v627418434/226ad/OIXY9q3IAMc.jpg', 'id': 34391434}]
        },
        {name:'Москва',n:382,
        users:[{'name': 'Савин Александр', 'ava': 'https://pp.userapi.com/c403227/v403227720/2f26/B3T-IISi_G0.jpg', 'id': 25720}, {'name': 'Екимов Данила', 'ava': 'https://pp.userapi.com/c9249/u54620/e_50276caf.jpg', 'id': 54620}, {'name': 'Митраков Дмитрий', 'ava': 'https://pp.userapi.com/c626328/v626328528/610b7/t5erFNOo0QI.jpg', 'id': 76528}, {'name': 'Зверев Петр', 'ava': 'https://pp.userapi.com/c629524/v629524713/117e0/7KBj8YKEiS8.jpg', 'id': 127713}, {'name': 'Смирнов Антон', 'ava': 'https://pp.userapi.com/c411719/v411719576/899a/B9p-JJqs5YQ.jpg', 'id': 135576}, {'name': 'Калашникова Лена', 'ava': 'https://pp.userapi.com/c627430/v627430708/37076/gEwsza7YOe4.jpg', 'id': 138708}, {'name': 'Дулин Иван', 'ava': 'https://pp.userapi.com/c10895/u236972/e_2008c12c.jpg', 'id': 236972}, {'name': 'Грачёв Иван', 'ava': 'https://pp.userapi.com/c631925/v631925858/2bf23/roHLBA-3D4c.jpg', 'id': 266858}, {'name': 'Завалко Дмитрий', 'ava': 'https://pp.userapi.com/c623224/v623224275/10509/c9HR9fIvD0g.jpg', 'id': 291275}, {'name': 'Швец Катюшка', 'ava': 'https://pp.userapi.com/c604821/v604821997/2bb62/Wp8nV-shGzo.jpg', 'id': 351997}, {'name': 'Поликарпов Вадим', 'ava': 'https://pp.userapi.com/c638827/v638827335/38683/lPFcqIUNidY.jpg', 'id': 404335}, {'name': 'Михайлов Артём', 'ava': 'https://pp.userapi.com/c637727/v637727831/2275f/85y3eHSWmZg.jpg', 'id': 450831}, {'name': 'Гриненко Юлия', 'ava': 'https://pp.userapi.com/c424916/v424916545/90e0/4XWlI2zElXg.jpg', 'id': 455545}, {'name': 'Григорьева Настёна', 'ava': 'https://pp.userapi.com/c637128/v637128942/3b8b8/ThCfc3dU-Hw.jpg', 'id': 469942}, {'name': 'Швецов Максим', 'ava': 'https://pp.userapi.com/c622428/v622428847/4afa3/9Jy0N_MGECI.jpg', 'id': 598847}, {'name': 'Novikova Irina', 'ava': 'https://pp.userapi.com/c639218/v639218491/3c349/_zA9RK3becE.jpg', 'id': 622996}, {'name': 'Рыськов Андрей', 'ava': 'https://pp.userapi.com/c637823/v637823940/55455/Hb7MoLB9Bfk.jpg', 'id': 668940}, {'name': 'Непомнящая Елена', 'ava': 'https://pp.userapi.com/c320619/v320619405/e86/tqtFP9lcP6Y.jpg', 'id': 707405}, {'name': 'Подшибякина Мария', 'ava': 'https://pp.userapi.com/c636420/v636420664/35cf8/HyEuLwaQEMY.jpg', 'id': 735664}, {'name': 'Салов Глеб', 'ava': 'https://pp.userapi.com/c636519/v636519619/50d59/7tcZyS6pLG0.jpg', 'id': 814619}, {'name': 'Арманова Любовь', 'ava': 'https://pp.userapi.com/c638617/v638617218/44087/sLf87qBlCJM.jpg', 'id': 820732}, {'name': 'Николаева Татьяна', 'ava': 'https://pp.userapi.com/c621819/v621819267/2e5d1/z9b3nkkRdm8.jpg', 'id': 846267}, {'name': 'Бурага Александр', 'ava': 'https://pp.userapi.com/c425725/v425725655/1258/je-0g732boU.jpg', 'id': 889655}, {'name': 'Дмитриев Леонид', 'ava': 'https://sun9-11.userapi.com/c836723/v836723226/9214b/TxSL9bOP__A.jpg', 'id': 903938}, {'name': 'Антипова Дарья', 'ava': 'https://pp.userapi.com/c637817/v637817468/61023/cqzSjXEzm7U.jpg', 'id': 936245}, {'name': 'Самсонова Светлана', 'ava': 'https://pp.userapi.com/c638320/v638320478/58e90/zpruNNuge0w.jpg', 'id': 955941}, {'name': 'Срибный Костя', 'ava': 'https://sun9-11.userapi.com/c540103/v540103581/3d439/SUVBkKwXuhc.jpg', 'id': 1032581}, {'name': 'Гольдштейн Мария', 'ava': 'https://pp.userapi.com/c639820/v639820013/3640c/le9k-PMb_wA.jpg', 'id': 1089683}, {'name': 'Kapranova Olga', 'ava': 'https://pp.userapi.com/c836127/v836127187/60ddf/4rQNNJbhnE0.jpg', 'id': 1149885}, {'name': 'Титов Михаил', 'ava': 'https://pp.userapi.com/c604724/v604724931/382bc/ilKpSCaYq4w.jpg', 'id': 1277931}, {'name': 'Сулаева Екатерина', 'ava': 'https://pp.userapi.com/c639919/v639919088/4683e/VgbyJPI8t8M.jpg', 'id': 1393270}, {'name': 'Зикункова Александра', 'ava': 'https://pp.userapi.com/c638926/v638926824/3ad38/HI3VV3RuKp0.jpg', 'id': 1393824}, {'name': 'Синичкин Дмитрий', 'ava': 'https://pp.userapi.com/c633918/v633918627/109b9/ONMbaPcpLl8.jpg', 'id': 1503627}, {'name': 'Ивонькин Алексей', 'ava': 'https://pp.userapi.com/c636428/v636428304/19a99/NKhOOMy7lNY.jpg', 'id': 1510304}, {'name': 'Скульская Любовь', 'ava': 'https://pp.userapi.com/c840139/v840139483/59c1/my0tc3S--Ag.jpg', 'id': 1526483}, {'name': 'Привалова Аня', 'ava': 'https://pp.userapi.com/c631431/v631431560/3cfd4/y6bSlW1is5A.jpg', 'id': 1540560}, {'name': 'Богомолова Оксана', 'ava': 'https://pp.userapi.com/c841529/v841529325/1b275/e_6S7TLY5h0.jpg', 'id': 1593052}, {'name': 'Маланка Татьяна', 'ava': 'https://pp.userapi.com/c638427/v638427516/423a9/fhN-FYwPvQE.jpg', 'id': 1597516}, {'name': 'Платонова Елена', 'ava': 'https://pp.userapi.com/c837534/v837534463/426f7/4hyoZFeok5c.jpg', 'id': 1602463}, {'name': 'Маллеров Филипп', 'ava': 'https://pp.userapi.com/c626927/v626927199/4475d/MuyZw5eknFc.jpg', 'id': 1658199}, {'name': 'Тяпкина Оксана', 'ava': 'https://pp.userapi.com/c621702/v621702163/22f92/Oe6av0rQGeg.jpg', 'id': 1707960}, {'name': 'Рубашанов Александр', 'ava': 'https://pp.userapi.com/c639427/v639427604/318bf/v345wEZB778.jpg', 'id': 2097817}, {'name': 'Степашкина Анастасия', 'ava': 'https://pp.userapi.com/c631230/v631230446/47c76/ny_C6juMSv8.jpg', 'id': 2101446}, {'name': 'Brotash Olga', 'ava': 'https://pp.userapi.com/c836426/v836426553/6a7d2/Xk81hk5h_YU.jpg', 'id': 2126835}, {'name': 'Таранова Наталья', 'ava': 'https://pp.userapi.com/c639921/v639921367/2c1a2/XBLluxbB5UI.jpg', 'id': 2145432}, {'name': 'Калядин Денис', 'ava': 'https://pp.userapi.com/c837221/v837221578/2b7d8/nW31HJOGhZ4.jpg', 'id': 2238578}, {'name': 'Уткин Сергей', 'ava': 'https://pp.userapi.com/c633622/v633622666/265b7/41GB6mNyK-A.jpg', 'id': 2250666}, {'name': 'Цветков Антон', 'ava': 'https://pp.userapi.com/c407419/u2255078/e_04ff1a3a.jpg', 'id': 2255078}, {'name': 'Соловьева Анастасия', 'ava': 'https://pp.userapi.com/c837329/v837329760/4247d/MkkQM5EAHtE.jpg', 'id': 2511760}, {'name': 'Шкорбот Сергей', 'ava': 'https://pp.userapi.com/c628616/v628616753/39e/waoa4q-7xiU.jpg', 'id': 2563753}, {'name': 'Бельчик Никита', 'ava': 'https://pp.userapi.com/c637226/v637226584/285db/na5GLaYO_pQ.jpg', 'id': 2576584}, {'name': 'Вериго Ева', 'ava': 'https://pp.userapi.com/c631529/v631529768/28521/zQJKOEp1O-4.jpg', 'id': 2585768}, {'name': 'Иванов Николай', 'ava': 'https://pp.userapi.com/c311422/v311422832/5cbc/OlWDJthaTHg.jpg', 'id': 2645832}, {'name': 'Дадонов Игорь', 'ava': 'https://pp.userapi.com/c841530/v841530989/1e127/0gVFBj10cFg.jpg', 'id': 2664794}, {'name': 'Телегина Екатерина', 'ava': 'https://pp.userapi.com/c639731/v639731250/515e2/Wu6k47hOgEc.jpg', 'id': 2669802}, {'name': 'Архангельская Наталья', 'ava': 'https://pp.userapi.com/c841130/v841130019/18e9a/u6sew6Oh_Ng.jpg', 'id': 2684190}, {'name': 'Ветошкина Елена', 'ava': 'https://pp.userapi.com/c638218/v638218566/4daaf/PifTaQsdsRo.jpg', 'id': 2869870}, {'name': 'Крылова Светлана', 'ava': 'https://pp.userapi.com/c840127/v840127141/29cbc/hL6DFgZsG6M.jpg', 'id': 2873265}, {'name': 'Семенова Валерия', 'ava': 'https://pp.userapi.com/c631225/v631225655/4e5d4/MM52sKhzTl0.jpg', 'id': 2969655}, {'name': 'Тарова Наталья', 'ava': 'https://pp.userapi.com/c841226/v841226174/18b69/4Bsbrxtq5yg.jpg', 'id': 3219557}, {'name': 'Сандакова Ольга', 'ava': 'https://pp.userapi.com/c4549/u3342746/e_397feefa.jpg', 'id': 3342746}, {'name': 'Force Александр', 'ava': 'https://pp.userapi.com/c639129/v639129296/21628/iWoSAndEodQ.jpg', 'id': 3346296}, {'name': 'Себякин Игорь', 'ava': 'https://pp.userapi.com/c841623/v841623955/21109/8mCz2H8OMC4.jpg', 'id': 3518666}, {'name': 'Козлов Николай', 'ava': 'https://pp.userapi.com/c836134/v836134600/30a18/xpMsddVlrPI.jpg', 'id': 3658600}, {'name': 'Морозюк Ольга', 'ava': 'https://pp.userapi.com/c639130/v639130657/2d4d5/gxEkz6iI61c.jpg', 'id': 3736657}, {'name': 'Луганцев Андрей', 'ava': 'https://pp.userapi.com/c628531/v628531110/24765/6-p0LEZuOZ8.jpg', 'id': 3747110}, {'name': 'Николаев Дима', 'ava': 'https://pp.userapi.com/c639425/v639425377/a8fd/FJS_YY-rjto.jpg', 'id': 3842377}, {'name': 'Чертова Дарья', 'ava': 'https://pp.userapi.com/c625817/v625817787/1b8ec/uupnRQK0jhM.jpg', 'id': 3851787}, {'name': 'Фролов Алексей', 'ava': 'https://pp.userapi.com/c638122/v638122147/523cc/r7wDYFx-bAQ.jpg', 'id': 3977657}, {'name': 'Лотоцкий Андрей', 'ava': 'https://pp.userapi.com/c637616/v637616783/404d5/XrDihVW_MiU.jpg', 'id': 3979783}, {'name': 'Блинов Денис', 'ava': 'https://pp.userapi.com/c636230/v636230913/3b07/fypnTaWzZR0.jpg', 'id': 4039913}, {'name': 'Митичкина Татьяна', 'ava': 'https://pp.userapi.com/c639116/v639116517/47fc5/AacsA_whVV8.jpg', 'id': 4118017}, {'name': 'Горохов Дмитрий', 'ava': 'https://pp.userapi.com/c638131/v638131227/515eb/-DzEmloE8UA.jpg', 'id': 4206980}, {'name': 'Папков Серега', 'ava': 'https://pp.userapi.com/c622730/v622730334/19891/50GXJUpL_xg.jpg', 'id': 4258334}, {'name': 'Михайлов Андрей', 'ava': 'https://pp.userapi.com/c840229/v840229641/29e35/y0jyQHn7zeU.jpg', 'id': 4425034}, {'name': 'Беляев Максим', 'ava': 'https://pp.userapi.com/c637122/v637122117/3501a/vOh4-2owzpc.jpg', 'id': 4502117}, {'name': 'Зубов Евгений', 'ava': 'https://pp.userapi.com/c841227/v841227528/195af/TXHpF_94Hto.jpg', 'id': 4542948}, {'name': 'Моисеев Денис', 'ava': 'https://pp.userapi.com/c836625/v836625154/33cdd/vYNqziDB730.jpg', 'id': 4584154}, {'name': 'Саковский Михаил', 'ava': 'https://pp.userapi.com/c624226/v624226491/3a108/dVL8meBdxz8.jpg', 'id': 4635491}, {'name': 'Алексеенко Татьяна', 'ava': 'https://pp.userapi.com/c5350/v5350464/613/s68x78cG6do.jpg', 'id': 4863464}, {'name': 'Жукова Лена', 'ava': 'https://pp.userapi.com/c836137/v836137288/3ba8c/w7-pyTtTD8s.jpg', 'id': 4957288}, {'name': 'Тожокина Светлана', 'ava': 'https://pp.userapi.com/c637420/v637420891/dc44/tR5h1RrYBZM.jpg', 'id': 5020891}, {'name': 'Соколов Дмитрий', 'ava': 'https://pp.userapi.com/c626524/v626524947/1e483/R1z4LrazpNs.jpg', 'id': 5043947}, {'name': 'Алексеев Андрей', 'ava': 'https://pp.userapi.com/c841324/v841324996/1bf68/LbFfsma04T0.jpg', 'id': 5056333}, {'name': 'Секира Андрей', 'ava': 'https://pp.userapi.com/c4181/u5077911/e_d17566a0.jpg', 'id': 5077911}, {'name': 'Вишняков Денис', 'ava': 'https://pp.userapi.com/c836228/v836228290/249a/55eqtBJKQ8w.jpg', 'id': 5166290}, {'name': 'Толкова Татьяна', 'ava': 'https://pp.userapi.com/c638931/v638931818/25daa/QUrpUqchHqQ.jpg', 'id': 5244818}, {'name': 'Алексеев Иван', 'ava': 'https://pp.userapi.com/c424821/v424821408/687e/rpzfaFRrTQQ.jpg', 'id': 5392408}, {'name': 'Ульянова Татьяна', 'ava': 'https://pp.userapi.com/c837430/v837430314/4d7cb/jrzHkvr9eWQ.jpg', 'id': 5513444}, {'name': 'Старцев Андрей', 'ava': 'https://pp.userapi.com/c638127/v638127175/472d7/By10Lk2Heis.jpg', 'id': 5554175}, {'name': 'Копылов Максим', 'ava': 'https://pp.userapi.com/c638820/v638820758/1be62/W8edF_w4ct4.jpg', 'id': 5633758}, {'name': 'Андриевская Нелли', 'ava': 'https://pp.userapi.com/c621430/v621430519/6034/ys-Ts-wq2_8.jpg', 'id': 5818519}, {'name': 'Иванова Ксения', 'ava': 'https://pp.userapi.com/c604823/v604823083/41969/FrJ5-Om1Rh8.jpg', 'id': 5867083}, {'name': 'Ананьев Сергей', 'ava': 'https://pp.userapi.com/c840435/v840435906/607b/RO5Y2okWLZI.jpg', 'id': 5911743}, {'name': 'Ручкин Дмитрий', 'ava': 'https://pp.userapi.com/c636728/v636728063/3cca9/Y_KD2gp-8Jo.jpg', 'id': 6079063}, {'name': 'Куликова Татьяна', 'ava': 'https://pp.userapi.com/c637722/v637722016/8640/AdVX4dMs4jk.jpg', 'id': 6086016}, {'name': 'Ефимов Андрей', 'ava': 'https://pp.userapi.com/c639317/v639317270/42c60/2w2VQ5pDpm8.jpg', 'id': 6124562}, {'name': 'Брозас Алексей', 'ava': 'https://pp.userapi.com/c629322/v629322582/fd55/xVParBdtfa4.jpg', 'id': 6375582}, {'name': 'Колпаков Александр', 'ava': 'https://sun9-11.userapi.com/c840628/v840628463/8de3/f25YyuAG63g.jpg', 'id': 6444896}, {'name': 'Козлов Илья', 'ava': 'https://pp.userapi.com/c627628/v627628308/a43c6/72z3hno9cY4.jpg', 'id': 6573308}, {'name': 'Свечников Александр', 'ava': 'https://vk.com/images/camera_50.png', 'id': 6618559}, {'name': 'Давыдов Никита', 'ava': 'https://pp.userapi.com/c138/u6658303/e_7330f72a.jpg', 'id': 6658303}, {'name': 'Герливанова Елена', 'ava': 'https://pp.userapi.com/c837527/v837527204/2a124/uwyO399hplk.jpg', 'id': 6694204}, {'name': 'Захаров Павел', 'ava': 'https://pp.userapi.com/c633422/v633422664/2f5b8/HfqBtQtiEeU.jpg', 'id': 7093664}, {'name': 'Волкова Юлия', 'ava': 'https://pp.userapi.com/c836121/v836121459/6df97/-QPS9FSRdyY.jpg', 'id': 7455203}, {'name': 'Боев Илья', 'ava': 'https://pp.userapi.com/c622218/v622218815/1147d/A_4fkIcBhvk.jpg', 'id': 7761815}, {'name': 'Ширяева Лидия', 'ava': 'https://pp.userapi.com/c628319/v628319631/1ef41/WK1UoIrk7mE.jpg', 'id': 7856631}, {'name': 'Гусев Алексей', 'ava': 'https://pp.userapi.com/c320318/v320318974/868b/0m3ALNYrKPY.jpg', 'id': 7872974}, {'name': 'Соколова Юлия', 'ava': 'https://pp.userapi.com/c639623/v639623198/4db83/EtGTChnhk90.jpg', 'id': 8217430}, {'name': 'Жихар Анастасия', 'ava': 'https://sun9-11.userapi.com/c840739/v840739652/4ae6/OvGOmksXOQM.jpg', 'id': 8242421}, {'name': 'Сорокин Филипп', 'ava': 'https://pp.userapi.com/c836626/v836626839/5cb34/M9LQsPl5eq8.jpg', 'id': 8381072}, {'name': 'Зверев Андрей', 'ava': 'https://pp.userapi.com/c620431/v620431850/1b5e0/7IkUUXvb0fY.jpg', 'id': 8514850}, {'name': 'Третьякова Татьяна', 'ava': 'https://pp.userapi.com/c628528/v628528555/4c4e7/l_LgLrzQ-lk.jpg', 'id': 8849555}, {'name': 'Суточников Дмитрий', 'ava': 'https://pp.userapi.com/c10430/u8905219/e_23aca0d2.jpg', 'id': 8905219}, {'name': 'Иванова Валентина', 'ava': 'https://pp.userapi.com/c639331/v639331270/3e4f9/uutaOV8xb_c.jpg', 'id': 9122960}, {'name': 'Сергеева Светлана', 'ava': 'https://pp.userapi.com/c630225/v630225513/45535/Dg5ZjQc2c1o.jpg', 'id': 9212513}, {'name': 'Чаругина Татьяна', 'ava': 'https://pp.userapi.com/c638431/v638431738/3f86a/1rT8d9lmo9w.jpg', 'id': 9291738}, {'name': 'Савин Денис', 'ava': 'https://pp.userapi.com/c618129/v618129994/1a01a/GTmSy-tXl6E.jpg', 'id': 9957994}, {'name': 'Мишечкина Наталья', 'ava': 'https://pp.userapi.com/c639425/v639425720/3d536/9K9KfI_zJdg.jpg', 'id': 10087393}, {'name': 'Гусь Александра', 'ava': 'https://pp.userapi.com/c625330/v625330800/44e8a/sQrLylKPazQ.jpg', 'id': 10381800}, {'name': 'Терентьев Максим', 'ava': 'https://pp.userapi.com/c836637/v836637937/4b3bf/I25r0RxN29I.jpg', 'id': 10885140}, {'name': 'Даньков Владимир', 'ava': 'https://pp.userapi.com/c421828/v421828826/9d99/zD0HqQNALtE.jpg', 'id': 10891826}, {'name': 'Шостак Дина', 'ava': 'https://pp.userapi.com/c637321/v637321720/3fd62/Chsmr6zAmbA.jpg', 'id': 11292720}, {'name': 'Лопатникова Марина', 'ava': 'https://sun9-11.userapi.com/c639717/v639717694/35137/uuIggPObPs4.jpg', 'id': 11321685}, {'name': 'Терёхина Ирина', 'ava': 'https://pp.userapi.com/c639527/v639527462/314cb/eNZU-NdA3ws.jpg', 'id': 11566431}, {'name': 'Мурзашев Адильхан', 'ava': 'https://sun9-11.userapi.com/c639717/v639717034/4584b/MUcNXp9y2qA.jpg', 'id': 11788247}, {'name': 'Меркулова Анна', 'ava': 'https://pp.userapi.com/c9568/u11895994/e_aed7a9ef.jpg', 'id': 11895994}, {'name': 'Шарипова Эльвира', 'ava': 'https://pp.userapi.com/c841235/v841235613/12988/3uP00Mywm4U.jpg', 'id': 12287599}, {'name': 'Вальба Настя', 'ava': 'https://pp.userapi.com/c621513/v621513461/bb4f/CjXtRUS8mTA.jpg', 'id': 12393207}, {'name': 'Белый Дима', 'ava': 'https://pp.userapi.com/c636929/v636929866/31ce3/MPZi_5dhXEQ.jpg', 'id': 12547866}, {'name': 'Кругликов Дима', 'ava': 'https://pp.userapi.com/c837137/v837137717/58892/DoYul-Muc9A.jpg', 'id': 12576303}, {'name': 'Мазова Ева', 'ava': 'https://pp.userapi.com/c836527/v836527947/4f56c/YpkFvW3orHw.jpg', 'id': 12937111}, {'name': 'Барченков Иван', 'ava': 'https://pp.userapi.com/c620624/v620624433/15fdf/mqJkbX_V66o.jpg', 'id': 13535433}, {'name': 'Кузнецова Светлана', 'ava': 'https://pp.userapi.com/c630829/v630829380/18e1e/164d4qBuNp0.jpg', 'id': 13539380}, {'name': 'Кабанов Дмитрий', 'ava': 'https://pp.userapi.com/c425428/v425428317/96e0/MxVAA1jRbXY.jpg', 'id': 13636317}, {'name': 'Кутявин Алексей', 'ava': 'https://pp.userapi.com/c638923/v638923892/6a578/kVv9CfieIJM.jpg', 'id': 14437923}, {'name': 'Бирюков Владислав', 'ava': 'https://pp.userapi.com/c639820/v639820079/204f3/UbvKLC0hGrA.jpg', 'id': 14456079}, {'name': 'Подгорный Сергей', 'ava': 'https://pp.userapi.com/c303/u14586631/e_f6ae771a.jpg', 'id': 14586631}, {'name': 'Воронина Евгения', 'ava': 'https://pp.userapi.com/c628218/v628218344/2c1c5/T7jxIaATJv4.jpg', 'id': 14968344}, {'name': 'Лукьянов Александр', 'ava': 'https://pp.userapi.com/c618919/v618919755/fa9b/vsLfSvILYHM.jpg', 'id': 15001755}, {'name': 'Богатырева Валентина', 'ava': 'https://pp.userapi.com/c841632/v841632594/179df/W7YVkHxOJ94.jpg', 'id': 15134454}, {'name': 'Марчук Екатерина', 'ava': 'https://sun9-11.userapi.com/c639324/v639324150/39573/INwxejcbDkQ.jpg', 'id': 15228014}, {'name': 'Сондор Михаил', 'ava': 'https://pp.userapi.com/c836125/v836125456/545e0/jKxqDmqeMLM.jpg', 'id': 16604602}, {'name': 'Кричевская Настюшка', 'ava': 'https://pp.userapi.com/c638025/v638025559/5a20b/jeGG-nBnaGw.jpg', 'id': 16768293}, {'name': 'Князев Максим', 'ava': 'https://pp.userapi.com/c623924/v623924244/15c87/eJb-3cNj3gk.jpg', 'id': 16869244}, {'name': 'Вознюк Роман', 'ava': 'https://pp.userapi.com/c628324/v628324698/3446c/2pmqBecDOmw.jpg', 'id': 16936698}, {'name': 'Остапченко Андрей', 'ava': 'https://pp.userapi.com/c841526/v841526922/4a8e/foEIyQB7rkE.jpg', 'id': 17703922}, {'name': 'Власов Владимир', 'ava': 'https://pp.userapi.com/c9853/u17863820/e_000779a5.jpg', 'id': 17863820}, {'name': 'Лазарев Дмитрий', 'ava': 'https://pp.userapi.com/c836431/v836431765/4c866/6kwuEbScyOo.jpg', 'id': 18407022}, {'name': 'Раби Стешa', 'ava': 'https://pp.userapi.com/c836126/v836126873/3cb4b/6E49W4ppi2k.jpg', 'id': 18793873}, {'name': 'Кононенко Константин', 'ava': 'https://pp.userapi.com/c637525/v637525458/5e9ac/4BZdD96Zd-Y.jpg', 'id': 20055458}, {'name': 'Мартынов Александр', 'ava': 'https://pp.userapi.com/c841225/v841225724/96d8/hTgYjOOimIk.jpg', 'id': 20256529}, {'name': 'Белякова Татьяна', 'ava': 'https://pp.userapi.com/c841438/v841438780/22943/0YOc1Nomzn8.jpg', 'id': 20516093}, {'name': 'Slanov David', 'ava': 'https://pp.userapi.com/c628019/v628019134/12a28/KQ7T_rCZE58.jpg', 'id': 20769134}, {'name': 'Гусман Эльвира', 'ava': 'https://pp.userapi.com/c421331/v421331410/19f9/KA7nVK9XoVo.jpg', 'id': 21598410}, {'name': 'Sultanova Raisa', 'ava': 'https://pp.userapi.com/c625218/v625218354/28c1b/yiRP2UqlnjI.jpg', 'id': 21801354}, {'name': 'Бармина Екатерина', 'ava': 'https://pp.userapi.com/c837437/v837437794/227b1/nxz9QA7K2RI.jpg', 'id': 22019794}, {'name': 'Спос Колян', 'ava': 'https://pp.userapi.com/c626426/v626426795/2973a/G5sLgFKHDUs.jpg', 'id': 23815795}, {'name': 'Михалева Наталья', 'ava': 'https://pp.userapi.com/c637724/v637724467/73f48/qikmlguV56o.jpg', 'id': 24443152}, {'name': 'Тюрин Иван', 'ava': 'https://pp.userapi.com/c637517/v637517449/5ca01/_1lukY9LkxU.jpg', 'id': 25146989}, {'name': 'Олешевич Алена', 'ava': 'https://pp.userapi.com/c622517/v622517750/36163/jDMlizFj4e8.jpg', 'id': 25935750}, {'name': 'Isaev Dan', 'ava': 'https://pp.userapi.com/c622920/v622920765/67c5/X0BlAbHMwvc.jpg', 'id': 26169765}, {'name': 'Наумова Эля', 'ava': 'https://pp.userapi.com/c639321/v639321557/30f28/sm73utgz-Us.jpg', 'id': 26932557}, {'name': 'Гетун Андрей', 'ava': 'https://pp.userapi.com/c837730/v837730042/2af57/e0rVVE3C3sE.jpg', 'id': 27128042}, {'name': 'Курильчик Анна', 'ava': 'https://pp.userapi.com/c639329/v639329081/36528/oORsHNZMap8.jpg', 'id': 28049738}, {'name': 'Рысев Алексей', 'ava': 'https://pp.userapi.com/c841138/v841138413/200d5/26DVKg4IOq8.jpg', 'id': 28264128}, {'name': 'Алов Борис', 'ava': 'https://pp.userapi.com/c841227/v841227752/e209/7pRxWDYBtZo.jpg', 'id': 28317957}, {'name': 'Лактионов Игорь', 'ava': 'https://pp.userapi.com/c637419/v637419702/3b37e/qS2SpzNMz_Y.jpg', 'id': 28946702}, {'name': 'М******** Марина', 'ava': 'https://pp.userapi.com/c631126/v631126076/1bd1c/0wXd0swt8J4.jpg', 'id': 30030076}, {'name': 'Творцов Дмитрий', 'ava': 'https://pp.userapi.com/c637116/v637116157/55a01/QPVTA13CHaA.jpg', 'id': 30116157}, {'name': 'Косарев Илья', 'ava': 'https://pp.userapi.com/c412827/v412827310/95d1/oAVZaNjg1iA.jpg', 'id': 30542310}, {'name': 'Колесникова Екатерина', 'ava': 'https://pp.userapi.com/c637117/v637117524/657f7/D_BE2Wa19bY.jpg', 'id': 30556917}, {'name': 'Тимшин Дмитрий', 'ava': 'https://pp.userapi.com/c836732/v836732490/32bae/uzPIbdJBFd0.jpg', 'id': 30865490}, {'name': 'Горючкин Виталий', 'ava': 'https://pp.userapi.com/c5705/u31412395/e_a6ace023.jpg', 'id': 31412395}, {'name': 'Ходос Екатерина', 'ava': 'https://pp.userapi.com/c836632/v836632136/4e5dc/LDfk8vZi25k.jpg', 'id': 31749286}, {'name': 'Фомина Светлана', 'ava': 'https://pp.userapi.com/c841630/v841630209/1b74c/0jqxXE1hsyA.jpg', 'id': 31753967}, {'name': 'Иванов Алексей', 'ava': 'https://pp.userapi.com/c633231/v633231710/1c697/d8xqjupt52s.jpg', 'id': 31757710}, {'name': 'Грачев Борис', 'ava': 'https://pp.userapi.com/c636231/v636231020/35ed5/Oex78rg7PJs.jpg', 'id': 32085020}, {'name': 'Меркулов Сергей', 'ava': 'https://pp.userapi.com/c841025/v841025241/14d94/vy50J40ocDg.jpg', 'id': 32935377}, {'name': 'Каменская Ксения', 'ava': 'https://pp.userapi.com/c841328/v841328781/f538/nWNNrYja8sQ.jpg', 'id': 35156666}, {'name': 'Майоренко Марина', 'ava': 'https://pp.userapi.com/c638227/v638227791/5b3a1/O-xZWbLFJSg.jpg', 'id': 35321864}, {'name': 'Солодовниченко Ольга', 'ava': 'https://pp.userapi.com/c317222/v317222537/b9af/f26vkrPe4ys.jpg', 'id': 35650537}, {'name': 'Шамшур Евгений', 'ava': 'https://pp.userapi.com/c628823/v628823497/29ba6/tH6E3_KM8xk.jpg', 'id': 37945497}, {'name': 'Яковенко Сергей', 'ava': 'https://pp.userapi.com/c636828/v636828090/6b756/Lqy24EvrHHM.jpg', 'id': 38037090}, {'name': 'Ардабьев Дмитрий', 'ava': 'https://pp.userapi.com/c841122/v841122661/1571e/GsGNmedM_PI.jpg', 'id': 40629553}, {'name': 'Климов Николай', 'ava': 'https://pp.userapi.com/c637727/v637727322/55494/QpS4OVqhQJA.jpg', 'id': 40632322}, {'name': 'Брик Оля', 'ava': 'https://pp.userapi.com/c836538/v836538217/58b26/vIaKAJNFklk.jpg', 'id': 40878188}, {'name': 'Кудрявцева Елена', 'ava': 'https://pp.userapi.com/c406923/v406923490/91c1/4ch2xE3K91w.jpg', 'id': 41221490}, {'name': 'Ермаков Алексей', 'ava': 'https://pp.userapi.com/c836136/v836136622/1be66/Y4MgLWGptZ4.jpg', 'id': 44048622}, {'name': 'Верникович Ипполит', 'ava': 'https://pp.userapi.com/c841526/v841526372/1298f/Gxv3X7FCOlA.jpg', 'id': 44537897}, {'name': 'Лзд Серега', 'ava': 'https://pp.userapi.com/c9925/v9925847/1c0/Fcl_cJ6clbU.jpg', 'id': 45277847}, {'name': 'Завьялова Дарья', 'ava': 'https://pp.userapi.com/c633917/v633917271/327c4/lcRSiDTuevE.jpg', 'id': 45352271}, {'name': 'Харламов Михаил', 'ava': 'https://pp.userapi.com/c841429/v841429572/1554f/FeQdmTDIRxY.jpg', 'id': 45757637}, {'name': 'Кец Евгений', 'ava': 'https://pp.userapi.com/c637216/v637216768/242da/dB7rQyLjXzY.jpg', 'id': 46289768}, {'name': 'Адамович Альбина', 'ava': 'https://pp.userapi.com/c836225/v836225011/682c6/zdwYIIL93tQ.jpg', 'id': 48074129}, {'name': 'Лень Оксана', 'ava': 'https://pp.userapi.com/c637924/v637924884/59899/Ohiil3RxeHQ.jpg', 'id': 48603884}, {'name': 'Веробей Евгений', 'ava': 'https://pp.userapi.com/c616719/v616719804/3c5b/raq5HaIIvjk.jpg', 'id': 48843804}, {'name': 'Гревцева Юлия', 'ava': 'https://pp.userapi.com/c841529/v841529769/1c97e/TPDAFOjIx_E.jpg', 'id': 50318100}, {'name': 'Худяков Алексей', 'ava': 'https://pp.userapi.com/c836234/v836234383/70eaa/J5zpVl-y1os.jpg', 'id': 51386178}, {'name': 'Анатольевич Sergey', 'ava': 'https://pp.userapi.com/c836429/v836429328/2e869/jX3TQKerkXc.jpg', 'id': 52938328}, {'name': 'Степанова Ирина', 'ava': 'https://pp.userapi.com/c636023/v636023099/14d97/UZWr_T1B9YU.jpg', 'id': 54442099}, {'name': 'Ильянов Дмитрий', 'ava': 'https://pp.userapi.com/c639827/v639827574/3ff54/NCvC8y7MEY8.jpg', 'id': 54957624}, {'name': 'Кузнецов Алексей', 'ava': 'https://pp.userapi.com/c840231/v840231444/2c955/s_0EjuPipuA.jpg', 'id': 55194106}, {'name': 'Усычкин Сергей', 'ava': 'https://pp.userapi.com/c4676/u56011348/e_09598841.jpg', 'id': 56011348}, {'name': 'Подлесной Артем', 'ava': 'https://pp.userapi.com/c637623/v637623743/62e2b/ehQwxYOWhw8.jpg', 'id': 56197743}, {'name': 'Андреева Валентина', 'ava': 'https://pp.userapi.com/c633221/v633221880/c928/wSgJDufj6zA.jpg', 'id': 57399880}, {'name': 'Полибин Михаил', 'ava': 'https://pp.userapi.com/c836135/v836135536/6d72b/cMBr6XwhfWY.jpg', 'id': 57536247}, {'name': 'Лайне Лиза', 'ava': 'https://pp.userapi.com/c638419/v638419124/5d4ab/eVuwWhgkqyk.jpg', 'id': 58027809}, {'name': 'Демьянова (Иванова) Мария', 'ava': 'https://pp.userapi.com/c10622/u58078325/e_cc62d134.jpg', 'id': 58078325}, {'name': 'Замалина Екатерина', 'ava': 'https://pp.userapi.com/c639629/v639629112/4c888/3QESYoXt1ww.jpg', 'id': 59790681}, {'name': 'Хуламханова Амина', 'ava': 'https://sun9-11.userapi.com/c836621/v836621034/5b998/lkXKihrcmjI.jpg', 'id': 62479096}, {'name': 'Конев Денис', 'ava': 'https://pp.userapi.com/c637229/v637229637/5a109/crH1w5lfYbc.jpg', 'id': 66830354}, {'name': 'Осипова Алёна', 'ava': 'https://pp.userapi.com/c639617/v639617905/3d62a/xitZGgCj9QI.jpg', 'id': 69444491}, {'name': 'Федоров Сергей', 'ava': 'https://pp.userapi.com/c624216/v624216238/40dd0/G8bAneD8qUQ.jpg', 'id': 71916238}, {'name': 'Ivanov Petr', 'ava': 'https://pp.userapi.com/c9831/u72185035/e_51981f35.jpg', 'id': 72185035}, {'name': 'Фирсов Александр', 'ava': 'https://pp.userapi.com/c836527/v836527794/6a31b/RB124Izu3ao.jpg', 'id': 72590865}, {'name': 'Меренков Виталий', 'ava': 'https://pp.userapi.com/c840231/v840231736/2a83/x7ZlKzuAFSI.jpg', 'id': 76052736}, {'name': 'Кузнецова Катюшка', 'ava': 'https://pp.userapi.com/c638928/v638928902/41e4d/fwGkl1FcqiE.jpg', 'id': 76548902}, {'name': 'Рыбянец Анна', 'ava': 'https://pp.userapi.com/c639716/v639716576/36491/QY5VlU4KOsk.jpg', 'id': 81733950}, {'name': 'Горт Диас Андрей', 'ava': 'https://pp.userapi.com/c621729/v621729667/39f6e/v69FOlPJBFE.jpg', 'id': 82767667}, {'name': 'Ларцев Денис', 'ava': 'https://pp.userapi.com/c638024/v638024475/4a1f0/rHOsvMmxtdQ.jpg', 'id': 84500475}, {'name': 'Сковорода Константин', 'ava': 'https://pp.userapi.com/c636124/v636124305/204a5/28s0XgmOjOg.jpg', 'id': 84648305}, {'name': 'Шуйский Руслан', 'ava': 'https://pp.userapi.com/c638229/v638229053/60b73/SX4nqYweUFo.jpg', 'id': 87619739}, {'name': 'Крупышев Александр', 'ava': 'https://pp.userapi.com/c637526/v637526234/46c43/bQxVxNSA_5c.jpg', 'id': 89299234}, {'name': 'Дротиков Геннадий', 'ava': 'https://pp.userapi.com/c622721/v622721553/48afd/PxxtafOJxoA.jpg', 'id': 92752553}, {'name': 'Бутин Сергей', 'ava': 'https://pp.userapi.com/c303107/u95535213/e_4b977011.jpg', 'id': 95535213}, {'name': 'Лашев Денис', 'ava': 'https://pp.userapi.com/c841026/v841026334/1c9e7/enNihklmoyc.jpg', 'id': 95563004}, {'name': 'Гольдман Александра', 'ava': 'https://pp.userapi.com/c837732/v837732468/340e3/euxA37xwq8A.jpg', 'id': 95596468}, {'name': 'Горбачева Мария', 'ava': 'https://pp.userapi.com/c837131/v837131941/5b8ef/C8_x6RF1ivY.jpg', 'id': 96994008}, {'name': 'Мдиванян Эдуард', 'ava': 'https://sun9-11.userapi.com/c836621/v836621639/5dec3/a-7-M5_IcZo.jpg', 'id': 99345353}, {'name': 'Валитов Евгений', 'ava': 'https://pp.userapi.com/c638921/v638921448/3671/K3HOfyQ_Jec.jpg', 'id': 100404448}, {'name': 'Бурганов Роберт', 'ava': 'https://pp.userapi.com/c637827/v637827506/56f4b/KMQ-zkMzKPc.jpg', 'id': 100882506}, {'name': 'Пасик Михаил', 'ava': 'https://pp.userapi.com/c623219/v623219235/262b8/E2rUvd2lCWs.jpg', 'id': 111712235}, {'name': 'Фокин Василий', 'ava': 'https://pp.userapi.com/c841427/v841427599/1c7ea/O46KN4F5bTM.jpg', 'id': 113525244}, {'name': 'Бурбаев Константин', 'ava': 'https://pp.userapi.com/c836337/v836337341/18cb8/mEI-qiYYLGE.jpg', 'id': 114459341}, {'name': 'Шаповалов Андрей', 'ava': 'https://pp.userapi.com/c623716/v623716820/4ffdb/NgaMabst1gA.jpg', 'id': 120564820}, {'name': 'Леонов Денис', 'ava': 'https://vk.com/images/camera_50.png', 'id': 124472713}, {'name': 'Лебедевская Татьяна', 'ava': 'https://pp.userapi.com/c604726/v604726376/12256/7NGfq2weIkM.jpg', 'id': 126369376}, {'name': 'Матков Роман', 'ava': 'https://pp.userapi.com/c836622/v836622638/56964/Nrcl_gZoEhI.jpg', 'id': 127019174}, {'name': 'Румянцева Евгения', 'ava': 'https://pp.userapi.com/c619216/v619216699/150bc/GpDAt1eNX08.jpg', 'id': 127397699}, {'name': 'Евсеенко Вячеслав', 'ava': 'https://pp.userapi.com/c837123/v837123101/36d5/OX-5vvnxzMk.jpg', 'id': 132937101}, {'name': 'Хисматулина Юля', 'ava': 'https://pp.userapi.com/c623122/v623122196/226f1/INkwXM8Iq6s.jpg', 'id': 133813196}, {'name': 'Филатова Светлана', 'ava': 'https://pp.userapi.com/c637321/v637321273/dcb1/jIqfLkAGTN8.jpg', 'id': 134801273}, {'name': 'Таймусов Руслан', 'ava': 'https://pp.userapi.com/c836435/v836435123/55b62/kKnw1RVFOwU.jpg', 'id': 136959564}, {'name': 'Метёлкина Светлана', 'ava': 'https://pp.userapi.com/c837531/v837531196/6f743/FZeXJtnkI_I.jpg', 'id': 137300858}, {'name': 'Патова Анастасия', 'ava': 'https://pp.userapi.com/c840127/v840127718/298e2/O6b_DaIWStM.jpg', 'id': 137485470}, {'name': 'Хайден Сергей', 'ava': 'https://pp.userapi.com/c621319/v621319352/25291/gQeFVh3c_rM.jpg', 'id': 137798352}, {'name': 'Elesin Denis', 'ava': 'https://pp.userapi.com/c419216/v419216864/9b96/1ZSLI0-hfEg.jpg', 'id': 137913864}, {'name': 'Викторов Владислав', 'ava': 'https://pp.userapi.com/c11030/u138500231/e_47c207c2.jpg', 'id': 138500231}, {'name': 'Настюшкин Александр', 'ava': 'https://pp.userapi.com/c638020/v638020229/141df/rogiEkUbjPg.jpg', 'id': 139192229}, {'name': 'Креветкин Саша', 'ava': 'https://pp.userapi.com/c638929/v638929479/58667/dAgaW_SU_30.jpg', 'id': 139684454}, {'name': 'Пчелинцев Иван', 'ava': 'https://pp.userapi.com/c840024/v840024595/1f672/AJ44lHOJYvo.jpg', 'id': 140970855}, {'name': 'Дудорова Елена', 'ava': 'https://pp.userapi.com/c841623/v841623307/12ea4/B2pG9_opl3M.jpg', 'id': 141881868}, {'name': 'Калачёва Мария', 'ava': 'https://pp.userapi.com/c836423/v836423302/53479/aXXJLJ6N4MA.jpg', 'id': 142274581}, {'name': 'Сафин Альберт', 'ava': 'https://pp.userapi.com/c402318/v402318364/6b57/770WRjySBbk.jpg', 'id': 142344364}, {'name': 'Зинченко Алексей', 'ava': 'https://pp.userapi.com/c638330/v638330933/5123c/8DWxqYv_f4M.jpg', 'id': 144399714}, {'name': 'Шамакова Вера', 'ava': 'https://pp.userapi.com/c10358/v10358017/151/6lKsTF-BXxo.jpg', 'id': 146442017}, {'name': 'Терентьев Андрей', 'ava': 'https://pp.userapi.com/c837527/v837527232/7524f/UWihwqBFe5A.jpg', 'id': 150481939}, {'name': 'Летов Вячеслав', 'ava': 'https://pp.userapi.com/c604722/v604722000/3b137/2IhtD4hsoqM.jpg', 'id': 152317000}, {'name': 'Беспалова Екатерина', 'ava': 'https://pp.userapi.com/c837625/v837625166/3287f/DjtJXcNL_qw.jpg', 'id': 153401166}, {'name': 'Нигматулина Альфира', 'ava': 'https://pp.userapi.com/c836528/v836528214/851a3/C1fTXrwf3xA.jpg', 'id': 153678702}, {'name': 'Тарасов Олег', 'ava': 'https://pp.userapi.com/c302712/v302712601/6d4d/BzluTvRyuZI.jpg', 'id': 156498601}, {'name': 'Крапивнюк Егор', 'ava': 'https://pp.userapi.com/c837535/v837535304/6cc1e/M49EZq6VFI0.jpg', 'id': 162098691}, {'name': 'Валитов Денис', 'ava': 'https://pp.userapi.com/c837326/v837326306/e22a/nvJ2KOGQYl8.jpg', 'id': 162406306}, {'name': 'Терентьева Екатерина', 'ava': 'https://pp.userapi.com/c9950/u164508263/e_830752bf.jpg', 'id': 164508263}, {'name': 'Приведенная Юлия', 'ava': 'https://pp.userapi.com/c620221/v620221118/138d5/YX-73cX3NAg.jpg', 'id': 167161118}, {'name': 'Бокорёва Алёна', 'ava': 'https://pp.userapi.com/c638523/v638523557/5f76b/sPNOJ315tmk.jpg', 'id': 167274105}, {'name': 'Осадчая Оля', 'ava': 'https://pp.userapi.com/c836525/v836525713/74200/h05eatz4nWE.jpg', 'id': 167926509}, {'name': 'Шарова Ольга', 'ava': 'https://pp.userapi.com/c630721/v630721705/3fce0/YovwzG5OC5o.jpg', 'id': 170073705}, {'name': 'Герасимов Саша', 'ava': 'https://pp.userapi.com/c841136/v841136773/20688/ehLL2ZWLxNI.jpg', 'id': 170468613}, {'name': 'Кёзин Бахит', 'ava': 'https://pp.userapi.com/c633923/v633923463/3a05c/kc8N-4kl1Gk.jpg', 'id': 180194463}, {'name': 'Аштаев Алексей', 'ava': 'https://pp.userapi.com/c626119/v626119526/67297/1gwvvygK1pU.jpg', 'id': 182720526}, {'name': 'Гудков Никита', 'ava': 'https://vk.com/images/camera_50.png', 'id': 183778906}, {'name': 'Иванов Аслябий', 'ava': 'https://pp.userapi.com/c841622/v841622236/1bfa4/ptIRr607cEY.jpg', 'id': 185743594}, {'name': 'Демченко Слава', 'ava': 'https://pp.userapi.com/c316830/v316830013/5a28/xhdBC7BrD7E.jpg', 'id': 185933013}, {'name': 'Петров Иван', 'ava': 'https://vk.com/images/camera_50.png', 'id': 190129765}, {'name': 'Kulanov Anton', 'ava': 'https://pp.userapi.com/c637229/v637229902/4a18/cEXgjkd29Ck.jpg', 'id': 196900902}, {'name': 'Белова Таня', 'ava': 'https://pp.userapi.com/c639825/v639825854/3b590/o7nDItR8zBI.jpg', 'id': 200314843}, {'name': 'Подгородная Галина', 'ava': 'https://pp.userapi.com/c637220/v637220260/3fc41/0I3T-kQMAYk.jpg', 'id': 203080260}, {'name': 'Соколова Вероника', 'ava': 'https://pp.userapi.com/c638131/v638131247/58ae7/XgaJoCqm3A4.jpg', 'id': 205404294}, {'name': 'Veselov Andrey', 'ava': 'https://pp.userapi.com/c639320/v639320547/3309a/_yqFC2Ohggg.jpg', 'id': 211874781}, {'name': 'Крылов Александр', 'ava': 'https://pp.userapi.com/c410929/v410929867/9439/TMdy5YFacZc.jpg', 'id': 214643867}, {'name': 'Усманов Руслан', 'ava': 'https://pp.userapi.com/c840135/v840135152/21c87/GQBZJf47VMQ.jpg', 'id': 217782624}, {'name': 'Selena Selena', 'ava': 'https://pp.userapi.com/c637622/v637622830/175c9/rEY1cZIHTnE.jpg', 'id': 218591830}, {'name': 'Yourself Respect', 'ava': 'https://pp.userapi.com/c617317/v617317611/a093/aJJdBAkpieQ.jpg', 'id': 219036611}, {'name': 'Романов Роман', 'ava': 'https://pp.userapi.com/c836425/v836425650/57251/3-NCJ0k0fcA.jpg', 'id': 222622393}, {'name': 'Ausev Adam', 'ava': 'https://pp.userapi.com/c628221/v628221334/3e039/8GuPUaBnm-A.jpg', 'id': 224200334}, {'name': 'Xep Pycckuu', 'ava': 'https://pp.userapi.com/c322319/v322319761/240b/MmyVDHDHzYs.jpg', 'id': 226279761}, {'name': 'Йениавджи Елена', 'ava': 'https://pp.userapi.com/c639422/v639422182/2261f/dNE4SSpfTxo.jpg', 'id': 226459182}, {'name': 'Анохина Ольга', 'ava': 'https://pp.userapi.com/c313927/v313927809/33e8/Hivjls_w2w4.jpg', 'id': 227901809}, {'name': 'Елисов Динис', 'ava': 'https://pp.userapi.com/c841226/v841226237/214e4/r8Tp9YJYTOk.jpg', 'id': 229172002}, {'name': 'Власкин Константин', 'ava': 'https://pp.userapi.com/c639821/v639821604/4db79/e8UuKb1d7OQ.jpg', 'id': 229227845}, {'name': 'Meyers Nata', 'ava': 'https://pp.userapi.com/c836136/v836136373/48961/gScL23Wquws.jpg', 'id': 230540373}, {'name': 'Слепых Светлана', 'ava': 'https://pp.userapi.com/c622529/v622529462/4f1d8/RzWVD4ujseA.jpg', 'id': 230724462}, {'name': 'Мороз Есения', 'ava': 'https://pp.userapi.com/c637327/v637327295/275bf/0TyW0FWyODU.jpg', 'id': 234122295}, {'name': 'Бархатова Ольга', 'ava': 'https://pp.userapi.com/c622621/v622621834/286c9/2Tx5J5tW2YQ.jpg', 'id': 234298834}, {'name': 'Коуч Ольга', 'ava': 'https://pp.userapi.com/c637118/v637118488/3e2f3/N3GDIPDHjNs.jpg', 'id': 234939488}, {'name': 'Пахомов Александр', 'ava': 'https://pp.userapi.com/c627726/v627726199/16972/qL1UWF2MRwE.jpg', 'id': 235283199}, {'name': 'Валерьевич Антон', 'ava': 'https://pp.userapi.com/c837723/v837723852/3b7d2/_3R4AKTMBf4.jpg', 'id': 236771852}, {'name': 'Харин Александр', 'ava': 'https://pp.userapi.com/c639117/v639117073/41802/wcXS33RkADM.jpg', 'id': 237997046}, {'name': 'Хельгюсон Сергей', 'ava': 'https://pp.userapi.com/c841320/v841320634/c444/7aQND4mW0N8.jpg', 'id': 238402555}, {'name': 'Мишин Денис', 'ava': 'https://pp.userapi.com/c637524/v637524169/1787/fdA_gIpv2_U.jpg', 'id': 243258169}, {'name': 'Свирина Наталья', 'ava': 'https://pp.userapi.com/c836128/v836128705/5967e/YKmVMXjMRoY.jpg', 'id': 245114500}, {'name': 'Ruffneck Soul', 'ava': 'https://pp.userapi.com/c607518/v607518488/5964/dtLzyGV0Z2Q.jpg', 'id': 246725488}, {'name': 'Фуртат Юлия', 'ava': 'https://pp.userapi.com/c626917/v626917507/2c1d9/odeNzdXuRtI.jpg', 'id': 248397507}, {'name': 'Fil Kris', 'ava': 'https://pp.userapi.com/c616728/v616728915/1cad4/Q165cOboAQQ.jpg', 'id': 248849915}, {'name': 'Онисенко Поля', 'ava': 'https://pp.userapi.com/c638931/v638931488/54510/5hC2BXrhrlY.jpg', 'id': 248986004}, {'name': 'Поклонский Матвей', 'ava': 'https://pp.userapi.com/c629513/v629513552/1483b/NB7Rqvg_jVI.jpg', 'id': 249172552}, {'name': 'Закиров Руслан', 'ava': 'https://pp.userapi.com/c626928/v626928825/a4e7/RscQs-YdTiQ.jpg', 'id': 251961825}, {'name': 'Зарипова Камила', 'ava': 'https://pp.userapi.com/c836728/v836728540/67a03/4vRVaEX3vXY.jpg', 'id': 253620676}, {'name': 'Волкова Света', 'ava': 'https://pp.userapi.com/c638325/v638325791/4e902/nYj1cMLTGuc.jpg', 'id': 256750791}, {'name': 'Alanji Alen', 'ava': 'https://pp.userapi.com/c639222/v639222575/1bb6f/KW8vKUf07q0.jpg', 'id': 257419575}, {'name': 'Рахманова Катерина', 'ava': 'https://pp.userapi.com/c639424/v639424446/46b5f/nxOWeXQnezI.jpg', 'id': 258721618}, {'name': 'Ильяшенко Лада', 'ava': 'https://pp.userapi.com/c836721/v836721540/571d8/lMugYODLHZc.jpg', 'id': 260915111}, {'name': 'Лотос Белый', 'ava': 'https://pp.userapi.com/c622921/v622921966/4d929/ez85a1EOm6k.jpg', 'id': 266205966}, {'name': 'Носов Серёга', 'ava': 'https://pp.userapi.com/c619726/v619726589/1515e/7Oc5H-u-NXo.jpg', 'id': 267921589}, {'name': 'Рыбак Александр', 'ava': 'https://pp.userapi.com/c836525/v836525540/23128/2c4b0ApUZWU.jpg', 'id': 268288540}, {'name': 'Баринова Элина', 'ava': 'https://pp.userapi.com/c840434/v840434123/84d9/rZIjvAfdnwo.jpg', 'id': 281458545}, {'name': 'Fly Nina', 'ava': 'https://pp.userapi.com/c639527/v639527274/3965b/7OjrdbUdlnw.jpg', 'id': 281720749}, {'name': 'Bondarenko Maria', 'ava': 'https://vk.com/images/camera_50.png', 'id': 283072265}, {'name': 'Кочетков Александр', 'ava': 'https://pp.userapi.com/c639221/v639221140/26cb1/oMYMyyUDoLc.jpg', 'id': 287259140}, {'name': 'Аюб Шаик', 'ava': 'https://pp.userapi.com/c633719/v633719192/30738/8fgG2Xz9V9g.jpg', 'id': 287893192}, {'name': 'Андреева Кристина', 'ava': 'https://pp.userapi.com/c628021/v628021181/41221/1nSHudyeue8.jpg', 'id': 288869181}, {'name': 'Шехмаметьев Тимур', 'ava': 'https://pp.userapi.com/c638626/v638626899/4e7c5/GMGOHXd1II8.jpg', 'id': 291845037}, {'name': 'Савельева Марина', 'ava': 'https://pp.userapi.com/c627528/v627528795/2a95b/p5xjQVRpkCs.jpg', 'id': 292952795}, {'name': 'Никитина Анна', 'ava': 'https://pp.userapi.com/c621116/v621116027/1004d/fci5hPMB_to.jpg', 'id': 293055027}, {'name': 'Найн Алекс', 'ava': 'https://pp.userapi.com/c627528/v627528169/49577/jx3G1PQfLvg.jpg', 'id': 294270169}, {'name': 'Н-А-У-М-Е-Н-К-О Денис', 'ava': 'https://pp.userapi.com/c604324/v604324678/45bb/sYo0dRtWBok.jpg', 'id': 298912678}, {'name': 'Шеметова Полина', 'ava': 'https://pp.userapi.com/c837522/v837522370/5b17a/Q7FvjuElfg0.jpg', 'id': 299789894}, {'name': 'Крылов Паша', 'ava': 'https://pp.userapi.com/c604318/v604318244/60814/r13Lrq3y_J8.jpg', 'id': 300046244}, {'name': 'Невский Игорь', 'ava': 'https://pp.userapi.com/c836229/v836229829/2dae9/xfdshT0fLMU.jpg', 'id': 303577829}, {'name': 'Маланка Андрей', 'ava': 'https://pp.userapi.com/c836225/v836225180/55bd/flzou2MUYPw.jpg', 'id': 306524180}, {'name': 'Алешин Андрей', 'ava': 'https://vk.com/images/camera_50.png', 'id': 309524289}, {'name': 'Белая Маша', 'ava': 'https://pp.userapi.com/c837129/v837129356/4cc97/xBlXa9bu6WI.jpg', 'id': 311029542}, {'name': 'Кочергин Олег', 'ava': 'https://pp.userapi.com/c639216/v639216540/3a821/ftkkd-9QlFc.jpg', 'id': 313902726}, {'name': 'Цюпа Антон', 'ava': 'https://pp.userapi.com/c836435/v836435944/3ca1f/E1NxYJE4QCw.jpg', 'id': 314915944}, {'name': 'Ковальчук Вячеслав', 'ava': 'https://pp.userapi.com/c622019/v622019766/3f55b/LdX9eawnO4k.jpg', 'id': 316125766}, {'name': 'Champion Olympic', 'ava': 'https://pp.userapi.com/c836727/v836727534/7b6d/aHlR840jxGw.jpg', 'id': 316765534}, {'name': 'Магамедов Заур', 'ava': 'https://pp.userapi.com/c837222/v837222643/30979/7ulw41F1IuQ.jpg', 'id': 316851643}, {'name': 'Мартынов Игорь', 'ava': 'https://pp.userapi.com/c636228/v636228687/5d91c/hmaDvcNMcMY.jpg', 'id': 317715687}, {'name': 'Russia Mizuno', 'ava': 'https://pp.userapi.com/c604818/v604818900/30836/pOhrpyAgIfQ.jpg', 'id': 326140900}, {'name': 'Иванов Андрей', 'ava': 'https://pp.userapi.com/c639225/v639225709/42c89/txluf7PmKqs.jpg', 'id': 326714619}, {'name': 'Мариев Александр', 'ava': 'https://pp.userapi.com/c630927/v630927860/7e6a/Snhi8zqSNsI.jpg', 'id': 327085860}, {'name': 'Алиев Али', 'ava': 'https://pp.userapi.com/c639322/v639322496/4051b/MgnD1HiVG4U.jpg', 'id': 330073331}, {'name': 'Терехов Михаил', 'ava': 'https://pp.userapi.com/c841220/v841220665/ff1a/5D94IEgQvDQ.jpg', 'id': 330316501}, {'name': 'Михайлова Рита', 'ava': 'https://pp.userapi.com/c841530/v841530235/16c96/I6b37OIOo_w.jpg', 'id': 331371180}, {'name': 'Классный Никита', 'ava': 'https://vk.com/images/camera_50.png', 'id': 331382342}, {'name': 'Дубовицкая Евгения', 'ava': 'https://sun9-11.userapi.com/c837333/v837333010/e628/J2L4tX-qOPI.jpg', 'id': 331714010}, {'name': 'Знаменский Денис', 'ava': 'https://vk.com/images/camera_50.png', 'id': 331842872}, {'name': 'Makarov Denis', 'ava': 'https://pp.userapi.com/c604624/v604624661/481a9/1mn5byIUl8Q.jpg', 'id': 335015661}, {'name': 'Атони Ася', 'ava': 'https://pp.userapi.com/c626226/v626226168/5d9fe/7kcQfqPb56g.jpg', 'id': 336146168}, {'name': 'Нестеров Артем', 'ava': 'https://pp.userapi.com/c628616/v628616806/2a589/yJK50PdUkM8.jpg', 'id': 338816806}, {'name': 'Aleksandrovich Ivan', 'ava': 'https://pp.userapi.com/c639121/v639121481/306f0/EaqIi_MD5g8.jpg', 'id': 343624481}, {'name': 'Шебалин Виктор', 'ava': 'https://pp.userapi.com/c638428/v638428823/4d01a/vvkLoXqqU68.jpg', 'id': 345009803}, {'name': 'Илья Саблин', 'ava': 'https://pp.userapi.com/c638828/v638828510/2d447/ik3rP5uf3mM.jpg', 'id': 345315510}, {'name': 'Петрищев Максим', 'ava': 'https://pp.userapi.com/c841530/v841530946/1c94b/C5VM5JODVSM.jpg', 'id': 350246953}, {'name': 'Солнечная Алиса', 'ava': 'https://pp.userapi.com/c637326/v637326187/48fbe/QYWfSFjcGtc.jpg', 'id': 350428187}, {'name': 'Allenova Margalina', 'ava': 'https://pp.userapi.com/c639918/v639918348/27ce1/mjZ6R9yOTlE.jpg', 'id': 355576348}, {'name': 'Петрова Мария', 'ava': 'https://pp.userapi.com/c636426/v636426069/36eb7/4Fw6uiTEc-o.jpg', 'id': 357041069}, {'name': 'Гаврилов Степан', 'ava': 'https://pp.userapi.com/c636525/v636525467/38397/dENji_EqLbg.jpg', 'id': 358024467}, {'name': 'Spareparts Liftrussia', 'ava': 'https://sun9-11.userapi.com/c840226/v840226254/8a36/nnWPqsgijWg.jpg', 'id': 358885254}, {'name': 'Ерохин Дмитрий', 'ava': 'https://pp.userapi.com/c836124/v836124847/4a426/AJSOHIyTJTM.jpg', 'id': 359574113}, {'name': 'Степанов Алексей', 'ava': 'https://pp.userapi.com/c837624/v837624414/49786/eVMTO6f3myw.jpg', 'id': 360543414}, {'name': 'Αксенов Artem', 'ava': 'https://pp.userapi.com/c639520/v639520111/49e3d/ohFwGIskkdU.jpg', 'id': 362520664}, {'name': 'Казаков Андрей', 'ava': 'https://pp.userapi.com/c604616/v604616905/46a04/wvrjVObILBY.jpg', 'id': 392113905}, {'name': 'Борзаковский Иван', 'ava': 'https://pp.userapi.com/c637922/v637922470/68f2d/nSDo6TRga34.jpg', 'id': 393561653}, {'name': 'Спиваченко Александр', 'ava': 'https://sun9-11.userapi.com/c639717/v639717589/331c8/OEw3C9TdSxM.jpg', 'id': 395835589}, {'name': 'Прокофьев Александр', 'ava': 'https://vk.com/images/camera_50.png', 'id': 396934100}, {'name': 'Кострова Яна', 'ava': 'https://pp.userapi.com/c836428/v836428102/15c92/DGqVcTPg3Oo.jpg', 'id': 400316102}, {'name': 'Болотов Тема', 'ava': 'https://pp.userapi.com/c638725/v638725789/1a060/ShkfcuoAdYA.jpg', 'id': 400380789}, {'name': 'Айя Айя', 'ava': 'https://pp.userapi.com/c841624/v841624938/17dca/6a4ott0m1Hs.jpg', 'id': 404103813}, {'name': 'Собянин Рома', 'ava': 'https://pp.userapi.com/c638127/v638127816/29371/uARJk4XEq1U.jpg', 'id': 406507816}, {'name': 'Русланович Роберт', 'ava': 'https://sun9-11.userapi.com/c836723/v836723703/59029/-QPRl267kV0.jpg', 'id': 406791440}, {'name': 'Северный Ветер', 'ava': 'https://pp.userapi.com/c637424/v637424380/6a9c7/RHOFtpOnpI4.jpg', 'id': 408509616}, {'name': 'Лепихов Виталий', 'ava': 'https://pp.userapi.com/c836528/v836528196/2e0e8/U0OIhoR_DTc.jpg', 'id': 411246196}, {'name': 'Кумейко Сергей', 'ava': 'https://pp.userapi.com/c837327/v837327075/28570/rbxWMcEVvrg.jpg', 'id': 414788075}, {'name': 'Панова Даша', 'ava': 'https://pp.userapi.com/c841137/v841137053/1e734/im5M7FnaCDU.jpg', 'id': 415745252}, {'name': 'Веденеева Кристина', 'ava': 'https://pp.userapi.com/c836233/v836233246/60a0c/Dj9ZB_mql-I.jpg', 'id': 422373057}, {'name': 'Бабаян Роксана', 'ava': 'https://pp.userapi.com/c637617/v637617429/552de/4jD3CWMkNC0.jpg', 'id': 430352429}, {'name': 'Шарова Лидия', 'ava': 'https://pp.userapi.com/c639319/v639319883/4f32b/82W-DpAooww.jpg', 'id': 441402883}, {'name': 'Шатохин Сергей', 'ava': 'https://sun9-11.userapi.com/c840724/v840724499/1087/puiEwszJ5Js.jpg', 'id': 443502995}, {'name': 'Никонова Елена', 'ava': 'https://pp.userapi.com/c639828/v639828150/3ce88/Q9OUrYkw9Lw.jpg', 'id': 445888462}]
        },
        {name:'Мурманск',n:21,
        users:[{'name': 'Ра Дмитрий', 'ava': 'https://pp.userapi.com/c637517/v637517703/2baab/b7mfrbiJOfM.jpg', 'id': 1067703}, {'name': 'Плисова Светлана', 'ava': 'https://pp.userapi.com/c604530/v604530850/4620a/mkpq0ymSvLA.jpg', 'id': 1236089}, {'name': 'Геращенко Оксана', 'ava': 'https://pp.userapi.com/c639623/v639623273/44876/Y7h6OopLAYo.jpg', 'id': 1599022}, {'name': 'Калашников Андрей', 'ava': 'https://pp.userapi.com/c841227/v841227558/1c4cf/JJwDmttIHnU.jpg', 'id': 1706220}, {'name': 'Ласенко Александр', 'ava': 'https://pp.userapi.com/c836121/v836121004/6f6d0/AHcncxUZhsg.jpg', 'id': 1738602}, {'name': 'Удалая Марина', 'ava': 'https://pp.userapi.com/c637621/v637621336/5d521/XbwxbqQrYAw.jpg', 'id': 10179844}, {'name': 'Ермохина Татьяна', 'ava': 'https://pp.userapi.com/c624628/v624628854/58c92/lOFUQ8wnqy4.jpg', 'id': 17957592}, {'name': 'Нагорный Иван', 'ava': 'https://pp.userapi.com/c621718/v621718426/3634d/M2ArIvGCC7Q.jpg', 'id': 20233426}, {'name': 'Артимонова Наталья', 'ava': 'https://pp.userapi.com/c841237/v841237592/16d76/3XDirPrioQ0.jpg', 'id': 32437464}, {'name': 'Руднянский Дмитрий', 'ava': 'https://sun9-11.userapi.com/c840534/v840534820/6abb/86DowD8xcAc.jpg', 'id': 32706332}, {'name': 'Ждунов Эдуард', 'ava': 'https://pp.userapi.com/c639327/v639327037/5b026/cvNaU_2xz4g.jpg', 'id': 47461915}, {'name': 'Нефедовская Инка', 'ava': 'https://pp.userapi.com/c841332/v841332090/1a1a3/BKCQv7n3q7Q.jpg', 'id': 56230879}, {'name': 'Кошкина Наталья', 'ava': 'https://pp.userapi.com/c627222/v627222440/4a9a5/Yrtyxv5nyhc.jpg', 'id': 61773440}, {'name': 'Платонов Александр', 'ava': 'https://pp.userapi.com/c604324/v604324529/504de/DT7oMDQ7IjY.jpg', 'id': 89947529}, {'name': 'Кузавков Виталий', 'ava': 'https://pp.userapi.com/c836533/v836533682/29f1d/FrVTACnM6JY.jpg', 'id': 96678682}, {'name': 'Кохан Марина', 'ava': 'https://pp.userapi.com/c604821/v604821250/6c05/yKtsP3OpeYw.jpg', 'id': 99212250}, {'name': 'Каштанова Анастасия', 'ava': 'https://pp.userapi.com/c837530/v837530927/55d66/AD_p21rowcg.jpg', 'id': 120948213}, {'name': 'Север Роман', 'ava': 'https://pp.userapi.com/c837338/v837338683/58ec0/dEbxxrUQBBs.jpg', 'id': 148952904}, {'name': 'Духовников Илья', 'ava': 'https://pp.userapi.com/c836637/v836637569/628e6/z9qgPS45ayA.jpg', 'id': 191957230}, {'name': 'Aleksandrovna Anna', 'ava': 'https://pp.userapi.com/c836634/v836634975/46120/xYqXPn7iMEA.jpg', 'id': 213347943}, {'name': 'Пищаскин Андрей', 'ava': 'https://pp.userapi.com/c841028/v841028034/20259/QAakQOsWdOA.jpg', 'id': 228132117}]
        },
        {name:'Муром',n:2,
        users:[{'name': 'Сафронов Сергей', 'ava': 'https://pp.userapi.com/c638216/v638216046/a592/U3zb8dQJS1s.jpg', 'id': 57520046}, {'name': 'Сергеев Дмитрий', 'ava': 'https://pp.userapi.com/c837523/v837523276/57987/XA8seZOTbmc.jpg', 'id': 134638185}]
        },
        {name:'Мценск',n:1,
        users:[{'name': 'Касторский Буба', 'ava': 'https://pp.userapi.com/c636529/v636529917/3d9c4/ge5Fh0S0RtE.jpg', 'id': 297040917}]
        },
        {name:'Мытищи',n:2,
        users:[{'name': 'Копылов Никита', 'ava': 'https://pp.userapi.com/c303103/v303103221/56e3/DvzMK72_Yz8.jpg', 'id': 2692221}, {'name': 'Изотов Анатолий', 'ava': 'https://pp.userapi.com/c619521/v619521304/19903/8NclkxUJjvE.jpg', 'id': 57108304}]
        },
        {name:'Мышкин',n:4,
        users:[{'name': 'Крымский Вячеслав', 'ava': 'https://pp.userapi.com/c841429/v841429976/ada5/TqHJBR29g9Q.jpg', 'id': 76480358}, {'name': 'Рыжова Екатерина', 'ava': 'https://pp.userapi.com/c841031/v841031220/16c03/Igp9stAcpgc.jpg', 'id': 114069218}, {'name': 'Ерофеевская Юлия', 'ava': 'https://pp.userapi.com/c841335/v841335180/21aa8/SnHkHWKinQE.jpg', 'id': 116947205}, {'name': 'Молявкина Светлана', 'ava': 'https://pp.userapi.com/c417227/v417227921/db29/J2QCCebpYz4.jpg', 'id': 186937921}]
        },
        {name:'Набережные Челны',n:14,
        users:[{'name': 'Янгиров Вадим', 'ava': 'https://pp.userapi.com/c836131/v836131970/5ec00/bLy3pUgch5o.jpg', 'id': 5575081}, {'name': 'Киреев Артур', 'ava': 'https://pp.userapi.com/c840435/v840435248/3e8b/3S3Lgtn9fGI.jpg', 'id': 6290687}, {'name': 'Тут Ильдар', 'ava': 'https://pp.userapi.com/c627123/v627123676/4327c/3PrUxBzeXDY.jpg', 'id': 7547676}, {'name': 'Мугинов Айдар', 'ava': 'https://pp.userapi.com/c639320/v639320967/223b8/my5k4MFn08k.jpg', 'id': 17688967}, {'name': 'Хуснуллин Руслан', 'ava': 'https://pp.userapi.com/c626825/v626825275/573a5/b6I8RLOpZss.jpg', 'id': 33565275}, {'name': 'Иванов Иван', 'ava': 'https://pp.userapi.com/c631521/v631521554/37a04/eRBh9Lj8f4U.jpg', 'id': 36596554}, {'name': 'Набиуллин Айдар', 'ava': 'https://pp.userapi.com/c622724/v622724260/3bc0e/5Vs1-l0raDI.jpg', 'id': 87230260}, {'name': "Garipov Il'nar", 'ava': 'https://vk.com/images/camera_50.png', 'id': 106354965}, {'name': 'Фазлыев Азат', 'ava': 'https://pp.userapi.com/c604429/v604429118/23ad7/hf5FHc-514M.jpg', 'id': 109534118}, {'name': 'M-галеев Руслан', 'ava': 'https://pp.userapi.com/c638719/v638719366/5972f/uouE2bgxSHg.jpg', 'id': 142541848}, {'name': 'Сухановский Сергей', 'ava': 'https://pp.userapi.com/c621703/v621703609/22a3/F3si2eoP5ro.jpg', 'id': 153655609}, {'name': 'Фесик Алексей', 'ava': 'https://pp.userapi.com/c604329/v604329265/19a64/g-KxdjSWg7o.jpg', 'id': 198067265}, {'name': 'Фардиева Самира', 'ava': 'https://pp.userapi.com/c636917/v636917650/3aff6/UjiN0Ukg280.jpg', 'id': 331534650}, {'name': 'Кырганов Вадим', 'ava': 'https://pp.userapi.com/c836533/v836533253/5d7eb/Fc4diTmJZZ8.jpg', 'id': 337286977}]
        },
        {name:'Навашино',n:1,
        users:[{'name': 'Филиппов Вячеслав', 'ava': 'https://vk.com/images/camera_50.png', 'id': 22944593}]
        },
        {name:'Налобиха',n:1,
        users:[{'name': 'Непорожний Александр', 'ava': 'https://pp.userapi.com/c627129/v627129659/1a0b0/MXzBL78qRPs.jpg', 'id': 191675659}]
        },
        {name:'Нальчик',n:3,
        users:[{'name': 'Крючкова Александра', 'ava': 'https://pp.userapi.com/c638920/v638920205/5f0b2/wgAgfl--8l8.jpg', 'id': 75173989}, {'name': 'Бекулов Ахмед', 'ava': 'https://pp.userapi.com/c841531/v841531068/1aac9/fnxXWuApbwg.jpg', 'id': 144647660}, {'name': 'Боренов Асланбек', 'ava': 'https://vk.com/images/camera_50.png', 'id': 218874196}]
        },
        {name:'Наро-Фоминск',n:1,
        users:[{'name': 'Соловьева Юлия', 'ava': 'https://sun9-11.userapi.com/c840528/v840528066/6c6d/1DoJ8BQm5XY.jpg', 'id': 279530081}]
        },
        {name:'Нарьян-Мар',n:1,
        users:[{'name': 'Лунёва Екатерина', 'ava': 'https://pp.userapi.com/c631526/v631526245/4917f/nqvD9J9c0Ig.jpg', 'id': 5383245}]
        },
        {name:'Невель',n:1,
        users:[{'name': 'Егоров Максим', 'ava': 'https://pp.userapi.com/c631321/v631321978/3ace6/fd-ZuJGqhoc.jpg', 'id': 80248978}]
        },
        {name:'Невинномысск',n:1,
        users:[{'name': 'Изотова Анастасия', 'ava': 'https://pp.userapi.com/c639523/v639523902/3f032/8z-IloCVtEs.jpg', 'id': 277274386}]
        },
        {name:'Невьянск',n:1,
        users:[{'name': 'Иванова Люда', 'ava': 'https://pp.userapi.com/c638926/v638926921/5ea54/wl_MqdZmfRg.jpg', 'id': 213119235}]
        },
        {name:'Нерюнгри',n:1,
        users:[{'name': 'Шелопугин Артём', 'ava': 'https://pp.userapi.com/c627117/v627117121/50ce6/amqbtwP4FFQ.jpg', 'id': 57295121}]
        },
        {name:'Несолонь',n:1,
        users:[{'name': 'Тарасюк Ольга', 'ava': 'https://pp.userapi.com/c837728/v837728642/ccfc/IGCp5CVKTWM.jpg', 'id': 134547642}]
        },
        {name:'Нефтекамск',n:1,
        users:[{'name': 'Шумский Денис', 'ava': 'https://pp.userapi.com/c307112/v307112489/872f/UtG6-eeEKJs.jpg', 'id': 78328489}]
        },
        {name:'Нефтеюганск',n:2,
        users:[{'name': 'Кин Алексей', 'ava': 'https://pp.userapi.com/c403128/v403128981/7825/OAYPNU7aQbM.jpg', 'id': 204693981}, {'name': 'Кин Алексей', 'ava': 'https://pp.userapi.com/c627728/v627728388/9c14/1pirbjMEo88.jpg', 'id': 303101388}]
        },
        {name:'Нижневартовск',n:5,
        users:[{'name': 'Валюкевич Славомир', 'ava': 'https://pp.userapi.com/c411031/v411031073/7579/ql-wTAnIaLw.jpg', 'id': 16087073}, {'name': 'Крашенинников Андрей', 'ava': 'https://pp.userapi.com/c639727/v639727958/43f7f/XPpB505b_sM.jpg', 'id': 41722425}, {'name': 'Кульпин Сергей', 'ava': 'https://pp.userapi.com/c638231/v638231860/5de96/GJVPzQ6Z360.jpg', 'id': 140609721}, {'name': 'Ильичев Александр', 'ava': 'https://pp.userapi.com/c639818/v639818226/20eab/INrb79Jg9Js.jpg', 'id': 203411226}, {'name': 'Болячкин Николай', 'ava': 'https://pp.userapi.com/c836624/v836624164/59b8c/aOprl75XE7k.jpg', 'id': 267662129}]
        },
        {name:'Нижнекамск',n:2,
        users:[{'name': 'Валова Елена', 'ava': 'https://pp.userapi.com/c633831/v633831560/36c0b/pCuQbcJDadU.jpg', 'id': 26218560}, {'name': 'Герасимова Вера', 'ava': 'https://pp.userapi.com/c631324/v631324501/4cf20/AKMCVq7jF3E.jpg', 'id': 193097501}]
        },
        {name:'Нижний Новгород',n:37,
        users:[{'name': 'Груздева Ольга', 'ava': 'https://pp.userapi.com/c841133/v841133098/1e71d/xML0vAsNP18.jpg', 'id': 640355}, {'name': 'Конюченко Алексей', 'ava': 'https://pp.userapi.com/c622220/v622220187/4602/BoKZrH0Rmps.jpg', 'id': 1199187}, {'name': 'Королев Роман', 'ava': 'https://pp.userapi.com/c625122/v625122875/46ee/jE_lANWko-A.jpg', 'id': 2793875}, {'name': 'Шишкова Анна', 'ava': 'https://pp.userapi.com/c638217/v638217289/56d89/s4C1GPmjTiQ.jpg', 'id': 3621289}, {'name': 'Еллиев Ефрем', 'ava': 'https://pp.userapi.com/c9567/u6136053/e_205abf5f.jpg', 'id': 6136053}, {'name': 'Конюченко Наташа', 'ava': 'https://pp.userapi.com/c626217/v626217765/27ad5/ae4oUGtxWao.jpg', 'id': 7208765}, {'name': 'Богаткина Ольга', 'ava': 'https://pp.userapi.com/c11350/u8128444/e_7a06677f.jpg', 'id': 8128444}, {'name': 'Кусакина Наташа', 'ava': 'https://pp.userapi.com/c617729/v617729893/ece6/icMvqYYn9bQ.jpg', 'id': 8575893}, {'name': 'Якимюк Артем', 'ava': 'https://pp.userapi.com/c837236/v837236866/15e6e/-p2AzVfwVqY.jpg', 'id': 9500866}, {'name': 'Крейчик Оля', 'ava': 'https://pp.userapi.com/c841625/v841625315/d10b/2mZowyLmpEE.jpg', 'id': 9768961}, {'name': 'Babushkina Lera', 'ava': 'https://pp.userapi.com/c639920/v639920311/adb/wkQpY5OOkbA.jpg', 'id': 12923311}, {'name': 'Лушкин Сергей', 'ava': 'https://pp.userapi.com/c627122/v627122244/2a89b/KcaWlTmMa-I.jpg', 'id': 13027244}, {'name': 'Grigorian Akob', 'ava': 'https://pp.userapi.com/c617420/v617420827/25c31/83oVa2dlZXk.jpg', 'id': 13826827}, {'name': 'Чалышев Илья', 'ava': 'https://pp.userapi.com/c639129/v639129164/1ad10/zaqb0IsrUCE.jpg', 'id': 21160164}, {'name': 'Серебрякова Алёна', 'ava': 'https://pp.userapi.com/c636430/v636430830/4a062/_J1C3TMMjSU.jpg', 'id': 21625830}, {'name': 'Назаровская Евгения', 'ava': 'https://pp.userapi.com/c604516/v604516659/1fef9/hw24CZt_2aA.jpg', 'id': 23503659}, {'name': 'Smirnova Mariya', 'ava': 'https://pp.userapi.com/c836736/v836736496/676d9/350tTFVeLg8.jpg', 'id': 25840819}, {'name': 'Тимин Павел', 'ava': 'https://pp.userapi.com/c639224/v639224872/397c7/Ml9kL2B1oD8.jpg', 'id': 29248092}, {'name': 'Чивкунова Наталья', 'ava': 'https://pp.userapi.com/c639231/v639231786/4c266/3iuJvNYpuPc.jpg', 'id': 31074915}, {'name': 'Великий Дмитрий', 'ava': 'https://pp.userapi.com/c840122/v840122271/24465/WF0xTcRJ2t0.jpg', 'id': 37305705}, {'name': 'Салтыков Максим', 'ava': 'https://pp.userapi.com/c840127/v840127347/1909d/AlczS1_xeeI.jpg', 'id': 47832301}, {'name': 'Фатькин Илья', 'ava': 'https://pp.userapi.com/c633531/v633531351/f345/Xwkqv0SRby4.jpg', 'id': 53094351}, {'name': 'Масеев Владимир', 'ava': 'https://pp.userapi.com/c837337/v837337765/633eb/g8IfeWsRfxg.jpg', 'id': 75645765}, {'name': 'Жуков Андрей', 'ava': 'https://pp.userapi.com/c10947/u105448162/e_1f3fefd1.jpg', 'id': 105448162}, {'name': 'Хейфец Максим', 'ava': 'https://pp.userapi.com/c837421/v837421473/21004/gXUwIqoPTkg.jpg', 'id': 130890473}, {'name': 'Пархоменко Лена', 'ava': 'https://pp.userapi.com/c840436/v840436331/6e94/UCuFaMbJjc0.jpg', 'id': 147278044}, {'name': 'Булаева Вероника', 'ava': 'https://pp.userapi.com/c836326/v836326310/393ba/eXQJB4vzEPI.jpg', 'id': 157353310}, {'name': 'Katina Olga', 'ava': 'https://pp.userapi.com/c622316/v622316384/1c51d/QzLZB-Ua7Kc.jpg', 'id': 160577384}, {'name': 'Булавин Олег', 'ava': 'https://pp.userapi.com/c840138/v840138258/1d755/VCX5f_D71mg.jpg', 'id': 181251857}, {'name': 'Орлов Егор', 'ava': 'https://pp.userapi.com/c836134/v836134336/504e9/f_jKIWvEijY.jpg', 'id': 224417469}, {'name': 'Паникаров Сергей', 'ava': 'https://pp.userapi.com/c625524/v625524369/1d2f/Y7Ysuv7oGq0.jpg', 'id': 264993369}, {'name': 'Молодецкий Алексей', 'ava': 'https://pp.userapi.com/c638919/v638919698/24717/8z3ttNIff80.jpg', 'id': 301836698}, {'name': 'Кузнецов Дима', 'ava': 'https://pp.userapi.com/c637919/v637919879/50b0a/2sotPpfjHz8.jpg', 'id': 318324879}, {'name': 'Стайерович Марафон', 'ava': 'https://vk.com/images/camera_50.png', 'id': 343055988}, {'name': 'Sadullaev Ravshan', 'ava': 'https://pp.userapi.com/c837537/v837537841/52020/02s-MLIdlDI.jpg', 'id': 395879539}, {'name': 'Богачев Тимур', 'ava': 'https://pp.userapi.com/c638523/v638523355/29c4d/jWj4fykgr7o.jpg', 'id': 401427355}, {'name': 'Дулепов Николай', 'ava': 'https://pp.userapi.com/c638322/v638322114/53e7e/BL7Bhr9VJkc.jpg', 'id': 436468114}]
        },
        {name:'Нижний Тагил',n:8,
        users:[{'name': 'Мусатова Елена', 'ava': 'https://pp.userapi.com/c604726/v604726652/729ec/_knyttV1MlY.jpg', 'id': 8660652}, {'name': 'Медведев Петр', 'ava': 'https://pp.userapi.com/c626523/v626523817/55103/NENZc-1TiS4.jpg', 'id': 19641817}, {'name': 'Бабайлов Евгений', 'ava': 'https://pp.userapi.com/c836122/v836122007/5591a/fHvJqB-rWJw.jpg', 'id': 41930288}, {'name': 'Захарова Елена', 'ava': 'https://pp.userapi.com/c637423/v637423878/3df51/pYHON_EmQNA.jpg', 'id': 68723878}, {'name': 'Маслов Антон', 'ava': 'https://pp.userapi.com/c626120/v626120683/5bf8a/gHnQgRBgbJM.jpg', 'id': 98839683}, {'name': 'Nt Forward', 'ava': 'https://pp.userapi.com/c626226/v626226930/689c1/A5twc4Orcv0.jpg', 'id': 163599930}, {'name': 'Бабина Наталия', 'ava': 'https://pp.userapi.com/c639219/v639219469/5ad78/28Dka_EugQw.jpg', 'id': 231244264}, {'name': 'My Dusha', 'ava': 'https://pp.userapi.com/c616122/v616122983/1e524/l9sfdzcGWrM.jpg', 'id': 261252983}]
        },
        {name:'Николаев',n:1,
        users:[{'name': 'Ян Сергей', 'ava': 'https://pp.userapi.com/c638021/v638021141/35d2f/3keP2DrLFRo.jpg', 'id': 8257141}]
        },
        {name:'Никольск',n:1,
        users:[{'name': 'Ежова Светлана', 'ava': 'https://pp.userapi.com/c639121/v639121999/41d52/vEcDKT9-5Qg.jpg', 'id': 131735902}]
        },
        {name:'Нововоронеж',n:2,
        users:[{'name': 'Шульженко Александр', 'ava': 'https://pp.userapi.com/c841328/v841328431/cb25/XfPW3ZLE4Bo.jpg', 'id': 15951580}, {'name': 'Карасёва-Саввина Татьяна', 'ava': 'https://pp.userapi.com/c628428/v628428229/21439/p3vdXmpXbU8.jpg', 'id': 196274229}]
        },
        {name:'Новое Юшкозеро',n:1,
        users:[{'name': 'Тишковская Евгения', 'ava': 'https://pp.userapi.com/c403521/v403521066/8259/Scu34alQZT8.jpg', 'id': 208543066}]
        },
        {name:'Новокузнецк',n:3,
        users:[{'name': 'Лавренюк Алексей', 'ava': 'https://pp.userapi.com/c840237/v840237456/19fe6/U7dcg0wvj9w.jpg', 'id': 30741879}, {'name': 'Гнетнев Алексей', 'ava': 'https://pp.userapi.com/c639726/v639726803/2f627/I0mXnTP9AoA.jpg', 'id': 59264803}, {'name': 'Борисов Алексей', 'ava': 'https://pp.userapi.com/c639219/v639219763/4a4b4/Pm6evuffFMc.jpg', 'id': 132635996}]
        },
        {name:'Новомичуринск',n:1,
        users:[{'name': 'Vad Vadim', 'ava': 'https://pp.userapi.com/c837439/v837439904/5561c/5VQ4z2GpPmQ.jpg', 'id': 392865426}]
        },
        {name:'Новомосковск',n:1,
        users:[{'name': 'Карасев Илья', 'ava': 'https://pp.userapi.com/c636218/v636218377/63f2/VlT8d910EX0.jpg', 'id': 53440377}]
        },
        {name:'Новополоцк',n:1,
        users:[{'name': 'Березовский Андрей', 'ava': 'https://pp.userapi.com/c837639/v837639332/44077/kLIm4rZ89y0.jpg', 'id': 61718332}]
        },
        {name:'Новосибирск',n:34,
        users:[{'name': 'Игнатов Сергей', 'ava': 'https://pp.userapi.com/c625418/v625418058/10f38/2c9C6IhgD1Q.jpg', 'id': 848058}, {'name': 'Троицкий Артем', 'ava': 'https://pp.userapi.com/c638716/v638716260/4e2f0/7yZdF42ZWxY.jpg', 'id': 1075431}, {'name': 'Гредин Роман', 'ava': 'https://pp.userapi.com/c636720/v636720545/2f86c/_ztjIMDuliM.jpg', 'id': 1201545}, {'name': 'Сухарев Дмитрий', 'ava': 'https://pp.userapi.com/c836338/v836338162/50a78/J4Nz9Fdi5Mc.jpg', 'id': 1675949}, {'name': 'Доронина Анна', 'ava': 'https://pp.userapi.com/c836127/v836127746/61b7c/NQ1bgbJaBmY.jpg', 'id': 1893098}, {'name': 'Sumin Alexander', 'ava': 'https://pp.userapi.com/c622229/v622229132/35390/9QdiIzDTnTo.jpg', 'id': 2464132}, {'name': 'Чернякова Алевтина', 'ava': 'https://pp.userapi.com/c840223/v840223259/2a10b/tOMAh57i1KY.jpg', 'id': 3718065}, {'name': 'Саркисянц Елизавета', 'ava': 'https://pp.userapi.com/c836639/v836639395/6817f/B5_y5kRI1ss.jpg', 'id': 3965076}, {'name': 'Кулешов Евгений', 'ava': 'https://pp.userapi.com/c639121/v639121607/4828e/MQn3XYP1PLM.jpg', 'id': 5131036}, {'name': 'Чапайкина Ольга', 'ava': 'https://pp.userapi.com/c301211/v301211785/42a0/acWCsF8rpb8.jpg', 'id': 5146785}, {'name': 'Миронов Сергей', 'ava': 'https://pp.userapi.com/c6011/u5396903/e_0b039161.jpg', 'id': 5396903}, {'name': 'Тарасова Наталья', 'ava': 'https://pp.userapi.com/c633616/v633616774/3340a/ke75zI6PmFU.jpg', 'id': 5535774}, {'name': 'Первухин Владимир', 'ava': 'https://pp.userapi.com/c638722/v638722437/4b571/Ki8ol1QWCfU.jpg', 'id': 22559437}, {'name': 'Мавлин Руслан', 'ava': 'https://pp.userapi.com/c836336/v836336853/43c12/R2nsXp4kr8Y.jpg', 'id': 37757853}, {'name': 'Аксёнова Таня', 'ava': 'https://pp.userapi.com/c637628/v637628800/51a1c/5SxBgetIxgg.jpg', 'id': 51424381}, {'name': 'Горбачёв Василий', 'ava': 'https://pp.userapi.com/c626829/v626829406/3ac93/9Elr08oyc2I.jpg', 'id': 51689406}, {'name': 'Ведяскина Елена', 'ava': 'https://pp.userapi.com/c836631/v836631045/5d81a/RX8JC1LyCTg.jpg', 'id': 95856989}, {'name': 'Платунова Марина', 'ava': 'https://pp.userapi.com/c628524/v628524254/1bd89/9r9SZB717-c.jpg', 'id': 137181254}, {'name': 'Губарева Дарья', 'ava': 'https://pp.userapi.com/c639523/v639523225/4a601/KiIZVoDXNZw.jpg', 'id': 151366904}, {'name': 'Каплин Анатолий', 'ava': 'https://pp.userapi.com/c837428/v837428879/4a528/5CtkuSKm0sk.jpg', 'id': 156923879}, {'name': 'Колечкина Вероль', 'ava': 'https://pp.userapi.com/c841431/v841431218/16127/GYIePtun3eY.jpg', 'id': 162607916}, {'name': 'Molor San', 'ava': 'https://pp.userapi.com/c613430/v613430944/e278/O1saCZtDKG4.jpg', 'id': 184560944}, {'name': 'Андреев Андрей', 'ava': 'https://pp.userapi.com/c616624/v616624373/16873/V6klcaRoe7o.jpg', 'id': 187607373}, {'name': 'Заборская Ольга', 'ava': 'https://pp.userapi.com/c639821/v639821115/46908/oBh1JK9a6Mw.jpg', 'id': 220997292}, {'name': 'Мавлютова Снежана', 'ava': 'https://pp.userapi.com/c837429/v837429658/54af9/zzRBkehF2hA.jpg', 'id': 262932647}, {'name': 'Кошечкин Макар', 'ava': 'https://vk.com/images/camera_50.png', 'id': 269284879}, {'name': 'Чуралев Павел', 'ava': 'https://pp.userapi.com/c637929/v637929350/2452f/8IFjG-FbbUw.jpg', 'id': 291457350}, {'name': 'Шайхутдинов Рустам', 'ava': 'https://pp.userapi.com/c636420/v636420628/1dfa2/AhdGq--Lu2E.jpg', 'id': 293631628}, {'name': 'Шишкин Евгений', 'ava': 'https://pp.userapi.com/c639519/v639519916/436b5/lOg5QoSA6ZU.jpg', 'id': 297793656}, {'name': 'Тарская Анна', 'ava': 'https://pp.userapi.com/c638117/v638117390/27ef3/9CleIwWsYBo.jpg', 'id': 354000390}, {'name': 'Даурская Лилия', 'ava': 'https://pp.userapi.com/c637124/v637124916/acc2d/-lyOP7rMj_c.jpg', 'id': 358260916}, {'name': 'Ковальчук Илья', 'ava': 'https://sun9-11.userapi.com/c639622/v639622603/4b682/8qJ0ATqW5ls.jpg', 'id': 400165373}, {'name': 'Ожогин Матвей', 'ava': 'https://pp.userapi.com/c837320/v837320595/6b403/rkspYY7I_8E.jpg', 'id': 416641568}, {'name': 'Лука Валера', 'ava': 'https://pp.userapi.com/c840126/v840126673/258b5/KaYZdVpL6ps.jpg', 'id': 442581220}]
        },
        {name:'Новоугольный',n:1,
        users:[{'name': 'Елена Дементьева', 'ava': 'https://pp.userapi.com/c836427/v836427760/512de/b_YpCGeyFkU.jpg', 'id': 343092327}]
        },
        {name:'Новоуральск',n:1,
        users:[{'name': 'Коновалов Сергей', 'ava': 'https://pp.userapi.com/c638128/v638128368/4f895/cqJ7lo9xVC4.jpg', 'id': 314574700}]
        },
        {name:'Новочебоксарск',n:3,
        users:[{'name': 'Захаров Вадим', 'ava': 'https://pp.userapi.com/c841636/v841636505/1befe/aCG0-GuLTEk.jpg', 'id': 11266475}, {'name': 'Шемякина Марина', 'ava': 'https://pp.userapi.com/c837520/v837520604/53212/cQs1IHcmM38.jpg', 'id': 154023154}, {'name': 'Жилина Виктория', 'ava': 'https://pp.userapi.com/c639422/v639422114/3618a/36bqO4anaPY.jpg', 'id': 155828394}]
        },
        {name:'Новочеркасск',n:1,
        users:[{'name': 'Толченко Михаил', 'ava': 'https://pp.userapi.com/c636822/v636822101/4d0df/ADoZZFw_gTU.jpg', 'id': 221419101}]
        },
        {name:'Новошахтинск',n:1,
        users:[{'name': 'Рукавишникова Мария', 'ava': 'https://pp.userapi.com/c836720/v836720330/4ae57/GLQR4WqkAQA.jpg', 'id': 279803330}]
        },
        {name:'Новый Уренгой',n:1,
        users:[{'name': 'Якупов Ильнур', 'ava': 'https://vk.com/images/camera_50.png', 'id': 345212376}]
        },
        {name:'Ноябрьск',n:2,
        users:[{'name': 'Шмаков Сергей', 'ava': 'https://pp.userapi.com/c626327/v626327536/33a55/WUQC-11AROk.jpg', 'id': 3156536}, {'name': 'Шубин Виталя', 'ava': 'https://pp.userapi.com/c639127/v639127893/4bb64/FpVrkzJqgKE.jpg', 'id': 58274737}]
        },
        {name:'Нытва',n:1,
        users:[{'name': 'Косков Сергей', 'ava': 'https://pp.userapi.com/c638920/v638920755/3ba55/XHxhLDMXCAQ.jpg', 'id': 108147755}]
        },
        {name:'Нягань',n:1,
        users:[{'name': 'Петренко Роман', 'ava': 'https://pp.userapi.com/c637416/v637416168/51829/XdXuUQ-ov4U.jpg', 'id': 326701168}]
        },
        {name:'Няндома',n:2,
        users:[{'name': 'Карчевская Юлия', 'ava': 'https://pp.userapi.com/c606031/v606031889/87c2/citX2prKzjw.jpg', 'id': 92067889}, {'name': 'Чернецкий Юрий', 'ava': 'https://pp.userapi.com/c836536/v836536792/6e79/xukbXQya-eY.jpg', 'id': 224020792}]
        },
        {name:'Обнинск',n:1,
        users:[{'name': 'Храпов Игорь', 'ava': 'https://pp.userapi.com/c837228/v837228474/52597/X0QIYuB_qCU.jpg', 'id': 311314841}]
        },
        {name:'Одесса',n:7,
        users:[{'name': 'Гилевич Виталий', 'ava': 'https://pp.userapi.com/c637330/v637330651/479d4/TMsPT71mO7E.jpg', 'id': 4598651}, {'name': 'Сурганова Оля', 'ava': 'https://pp.userapi.com/c636627/v636627663/350b9/bjoxSOoJ25A.jpg', 'id': 8408663}, {'name': 'Назаров Андрей', 'ava': 'https://pp.userapi.com/c623418/v623418258/2d09d/H-l74CkGK6Q.jpg', 'id': 23751258}, {'name': 'Ревенко Анатолий', 'ava': 'https://pp.userapi.com/c837624/v837624196/5b848/9DmBc2gtlHA.jpg', 'id': 93638754}, {'name': 'Шевченко Виктория', 'ava': 'https://pp.userapi.com/c836620/v836620997/88b11/T8ILflJAYdU.jpg', 'id': 116586295}, {'name': 'Заколодяжный Павел', 'ava': 'https://pp.userapi.com/c627424/v627424141/378f4/jiNcc1UiXvA.jpg', 'id': 121547141}, {'name': 'Чеботарь Сергей', 'ava': 'https://pp.userapi.com/c411116/v411116417/63fc/ARq2ltL8BXg.jpg', 'id': 204062417}]
        },
        {name:'Одинцово',n:1,
        users:[{'name': 'Федотов Сергей', 'ava': 'https://pp.userapi.com/c638228/v638228578/63fd4/nwPjWbaIYJk.jpg', 'id': 262664973}]
        },
        {name:'Озерск',n:2,
        users:[{'name': 'Табачкова Юля', 'ava': 'https://pp.userapi.com/c836230/v836230435/62b6d/m9Lndymn4aM.jpg', 'id': 58416881}, {'name': 'Табачков Роман', 'ava': 'https://pp.userapi.com/c841325/v841325892/1e408/uh93XlJqv-o.jpg', 'id': 318744872}]
        },
        {name:'Озёры',n:1,
        users:[{'name': 'Конышев Юрий', 'ava': 'https://pp.userapi.com/c639418/v639418567/4c49d/wrV0KKQk8F8.jpg', 'id': 180944901}]
        },
        {name:'Октябрьский',n:1,
        users:[{'name': 'Гибадуллина Гульназ', 'ava': 'https://pp.userapi.com/c836529/v836529520/57023/HoWM7bwVR0c.jpg', 'id': 79688704}]
        },
        {name:'Оленегорск',n:2,
        users:[{'name': 'Новикова Алёна', 'ava': 'https://pp.userapi.com/c638024/v638024910/5b515/gJrmYH7cGKU.jpg', 'id': 60512541}, {'name': 'Тимофеева-Ипатова Виктория', 'ava': 'https://pp.userapi.com/c841331/v841331405/20785/CufEWqQoMJw.jpg', 'id': 106932029}]
        },
        {name:'Омск',n:12,
        users:[{'name': 'Тудос Владимир', 'ava': 'https://pp.userapi.com/c636525/v636525988/1b2a1/mTbWhaBUCNM.jpg', 'id': 23076988}, {'name': 'Джанныева Анастасия', 'ava': 'https://pp.userapi.com/c639229/v639229183/39dd0/0I6-8-nfRr0.jpg', 'id': 25216940}, {'name': 'Плюхин Андрей', 'ava': 'https://pp.userapi.com/c4185/v4185710/3a/vDQRiJV_dRQ.jpg', 'id': 26294710}, {'name': 'Джоли Наталья', 'ava': 'https://pp.userapi.com/c836238/v836238004/5ff7b/mhq9_Cgiwb0.jpg', 'id': 53847070}, {'name': 'Бугаёва Татьяна', 'ava': 'https://pp.userapi.com/c638531/v638531142/64147/xxD-O3wtAlI.jpg', 'id': 56354500}, {'name': 'Широков Артём', 'ava': 'https://pp.userapi.com/c841226/v841226634/17ab8/42kN9jqpyAc.jpg', 'id': 62184449}, {'name': 'Жмакина Света', 'ava': 'https://vk.com/images/camera_50.png', 'id': 85838939}, {'name': 'Машталеров Евгений', 'ava': 'https://pp.userapi.com/c837128/v837128948/453c9/_T82MVaZCQo.jpg', 'id': 109840948}, {'name': 'Гришков Денис', 'ava': 'https://pp.userapi.com/c630018/v630018915/47735/vcJrXmifDgc.jpg', 'id': 153632915}, {'name': 'Дробот Даша', 'ava': 'https://pp.userapi.com/c837630/v837630461/61e69/S-GZp9zzh1o.jpg', 'id': 194212953}, {'name': 'Соболевы Константин-И-Дашуличка', 'ava': 'https://pp.userapi.com/c841226/v841226710/a5f8/YYHITJLTkD0.jpg', 'id': 205415661}, {'name': 'Марафон Ирина', 'ava': 'https://pp.userapi.com/c638827/v638827740/5fe3d/pyURLg1Pgng.jpg', 'id': 337642275}]
        },
        {name:'Оренбург',n:5,
        users:[{'name': 'Грызунова Нелли', 'ava': 'https://pp.userapi.com/c840120/v840120852/14f19/1bdSgNV2Iao.jpg', 'id': 11309877}, {'name': 'Исингалиева Асия', 'ava': 'https://pp.userapi.com/c840321/v840321432/9a9c/4M7SWEOoImk.jpg', 'id': 107461720}, {'name': 'Палагин Денис', 'ava': 'https://pp.userapi.com/c638528/v638528982/508cf/NKXeDkMItq4.jpg', 'id': 137686982}, {'name': 'Швед Мария', 'ava': 'https://pp.userapi.com/c841223/v841223045/1c394/YtbxXsQfFJs.jpg', 'id': 263497607}, {'name': 'Ягофарова Лилия', 'ava': 'https://pp.userapi.com/c638824/v638824834/1cf70/6xc8-dSrqio.jpg', 'id': 349709834}]
        },
        {name:'Орехово-Зуево',n:3,
        users:[{'name': 'Савельев Денис', 'ava': 'https://pp.userapi.com/c637921/v637921901/2e61f/MwJmZEyau1Q.jpg', 'id': 17563901}, {'name': 'Фоломкин Александр', 'ava': 'https://pp.userapi.com/c837639/v837639969/52fd7/FwHcj33KCmU.jpg', 'id': 25655976}, {'name': 'Филимонова Анастасия', 'ava': 'https://pp.userapi.com/c837630/v837630074/684b1/xRzSMSeadDE.jpg', 'id': 327321958}]
        },
        {name:'Орск',n:1,
        users:[{'name': 'Миндубаева Мария', 'ava': 'https://pp.userapi.com/c621707/v621707443/12905/CeaRmS0Ny7I.jpg', 'id': 78827370}]
        },
        {name:'Орша',n:1,
        users:[{'name': 'Бездушный Август', 'ava': 'https://pp.userapi.com/c836429/v836429961/859bb/ROhRavqNfaA.jpg', 'id': 271933733}]
        },
        {name:'Орёл',n:8,
        users:[{'name': 'Лапкин Александр', 'ava': 'https://pp.userapi.com/c604427/v604427716/3cc7a/0gwNYmboxOI.jpg', 'id': 5316716}, {'name': 'Линьков Вадим', 'ava': 'https://pp.userapi.com/c403725/v403725815/3a6d/FTaTPSeK1Qo.jpg', 'id': 5761815}, {'name': 'Савин Алексей', 'ava': 'https://pp.userapi.com/c638825/v638825750/5b89d/STfw7E4uz4U.jpg', 'id': 83333768}, {'name': 'Журавлев Валерий', 'ava': 'https://pp.userapi.com/c836437/v836437072/4e51f/MHn4lJHw6tM.jpg', 'id': 160902072}, {'name': 'Алехина Татьяна', 'ava': 'https://pp.userapi.com/c639720/v639720448/3d8c7/Fmz7s8ZUEGI.jpg', 'id': 163068357}, {'name': 'Пимакова Ольга', 'ava': 'https://pp.userapi.com/c638624/v638624715/2ac5c/h5vyz1Xycpo.jpg', 'id': 253073715}, {'name': 'Отрошенко Юрий', 'ava': 'https://pp.userapi.com/c630526/v630526467/29177/OvB42cZDFXc.jpg', 'id': 271464467}, {'name': 'Астахов Павел', 'ava': 'https://pp.userapi.com/c630427/v630427741/170fc/hDvsOVicAp8.jpg', 'id': 324632741}]
        },
        {name:'Оса',n:1,
        users:[{'name': 'Богомягков Андрей', 'ava': 'https://pp.userapi.com/c638018/v638018384/50602/4gafKEH6of4.jpg', 'id': 58766384}]
        },
        {name:'Осиповичи',n:1,
        users:[{'name': 'Гурская Таня', 'ava': 'https://pp.userapi.com/c837735/v837735781/63535/q2lDTuVO0qI.jpg', 'id': 205452781}]
        },
        {name:'Острог',n:1,
        users:[{'name': 'Андросюк Олександр', 'ava': 'https://pp.userapi.com/c617117/v617117037/14611/zw5VifNVxjk.jpg', 'id': 62623037}]
        },
        {name:'Оха',n:1,
        users:[{'name': 'Наташкин Дмитрий', 'ava': 'https://pp.userapi.com/c638822/v638822000/5ee40/D9sCGQqieEo.jpg', 'id': 101603209}]
        },
        {name:'Оханск',n:1,
        users:[{'name': 'Молотилов Дмитрий', 'ava': 'https://pp.userapi.com/c631329/v631329960/1d310/AM7FFqEaHmQ.jpg', 'id': 10946960}]
        },
        {name:'Павлово',n:1,
        users:[{'name': 'Петерсон Виталий', 'ava': 'https://pp.userapi.com/c11012/u72509824/e_dd7448a6.jpg', 'id': 72509824}]
        },
        {name:'Павловская',n:1,
        users:[{'name': 'Кривего Саша', 'ava': 'https://pp.userapi.com/c837733/v837733001/6e128/pUregUlHEFA.jpg', 'id': 33239890}]
        },
        {name:'Павловский Посад',n:1,
        users:[{'name': 'Ровковский Михаил', 'ava': 'https://pp.userapi.com/c629506/v629506550/3e21/jOSRvu-Yw-g.jpg', 'id': 2637550}]
        },
        {name:'Павлодар',n:2,
        users:[{'name': 'Овцынов Павел', 'ava': 'https://pp.userapi.com/c630518/v630518493/3b59b/Kyb2BvSS93U.jpg', 'id': 241387493}, {'name': 'Иванов Григорий', 'ava': 'https://vk.com/images/camera_50.png', 'id': 323343994}]
        },
        {name:'Пенза',n:8,
        users:[{'name': 'Русинов Евгений', 'ava': 'https://pp.userapi.com/c626127/v626127093/2c371/1t97iArxpZg.jpg', 'id': 746093}, {'name': 'Кузнецов Кирилл', 'ava': 'https://pp.userapi.com/c836637/v836637271/cd1e/DxS52a3tR3g.jpg', 'id': 33855271}, {'name': 'Пронькин Александр', 'ava': 'https://pp.userapi.com/c619422/v619422083/e2fe/E8XkLX-lG3Y.jpg', 'id': 52763083}, {'name': 'Акельев Артем', 'ava': 'https://pp.userapi.com/c836129/v836129053/4cd91/JMKOYXdkb5U.jpg', 'id': 171826053}, {'name': 'Столяров Антон', 'ava': 'https://pp.userapi.com/c638722/v638722208/5a722/reWYnMVKXe4.jpg', 'id': 280045716}, {'name': 'Смирнов Дмитрий', 'ava': 'https://pp.userapi.com/c622325/v622325972/4f03b/LhfBsziZlOE.jpg', 'id': 286243972}, {'name': 'Краюшкин Григорий', 'ava': 'https://pp.userapi.com/c629306/v629306687/34753/shl9gIaTE5Q.jpg', 'id': 349352687}, {'name': 'Черкасова Татьяна', 'ava': 'https://pp.userapi.com/c639316/v639316180/3d2d6/QlRDNRUpvG4.jpg', 'id': 367286550}]
        },
        {name:'Первоуральск',n:1,
        users:[{'name': 'Зыков Ваня', 'ava': 'https://pp.userapi.com/c837227/v837227525/4ca9d/pk5Q7XfAlQE.jpg', 'id': 120907313}]
        },
        {name:'Переславль-Залесский',n:1,
        users:[{'name': 'Одинцова Екатерина', 'ava': 'https://pp.userapi.com/c837234/v837234961/18463/fH9owR6Ra7E.jpg', 'id': 236302961}]
        },
        {name:'Пермь',n:40,
        users:[{'name': 'Кошкина Настенька', 'ava': 'https://pp.userapi.com/c636216/v636216934/15e2/_VAbxyOLiWU.jpg', 'id': 2443934}, {'name': 'Миненко Митя', 'ava': 'https://pp.userapi.com/c837534/v837534603/3dc61/doh4rMcgPt8.jpg', 'id': 4610603}, {'name': 'Попов Серж', 'ava': 'https://pp.userapi.com/c837735/v837735933/a253/xgyrgAcJVU4.jpg', 'id': 5600933}, {'name': 'Винакова Наталья', 'ava': 'https://pp.userapi.com/c639316/v639316134/4afe3/kP-4l0C0X6k.jpg', 'id': 9919297}, {'name': 'Желтышев Егор', 'ava': 'https://pp.userapi.com/c625617/v625617626/554f0/CxitZ32WwAQ.jpg', 'id': 12292626}, {'name': 'Крохалёва Виктория', 'ava': 'https://pp.userapi.com/c639830/v639830616/44813/jgJbzy2zIWo.jpg', 'id': 32895831}, {'name': 'Анянова Лариса', 'ava': 'https://pp.userapi.com/c637931/v637931715/5cdd6/P0zt8O7359M.jpg', 'id': 34306735}, {'name': 'Дроздов Михаил', 'ava': 'https://pp.userapi.com/c631424/v631424956/1bce1/-2IXLq3o17k.jpg', 'id': 38843956}, {'name': 'Кулешов Ростислав', 'ava': 'https://pp.userapi.com/c633625/v633625100/2bb47/J0fmKhj_f68.jpg', 'id': 39824100}, {'name': 'Колпащиков Алексей', 'ava': 'https://pp.userapi.com/c418317/v418317746/873c/q3Dvyf3Rhkk.jpg', 'id': 40092746}, {'name': 'Останина Ольга', 'ava': 'https://pp.userapi.com/c637323/v637323062/65c76/KdNefZjkKb0.jpg', 'id': 46341062}, {'name': 'Коркунов Павел', 'ava': 'https://pp.userapi.com/c836128/v836128778/66d85/DG1T0Iog9z0.jpg', 'id': 51735778}, {'name': 'Баринов Саша', 'ava': 'https://pp.userapi.com/c636421/v636421903/4edb3/hmVhtkaWcIg.jpg', 'id': 56158903}, {'name': 'Пичкалёв Евгений', 'ava': 'https://pp.userapi.com/c637820/v637820650/44f30/DQb8Q6yb9rk.jpg', 'id': 57845650}, {'name': 'Шадрин Максим', 'ava': 'https://pp.userapi.com/c622227/v622227395/3f43b/kskG3fhG_N0.jpg', 'id': 63599395}, {'name': 'Неганова Леонора', 'ava': 'https://pp.userapi.com/c638826/v638826327/479e5/s3RLZdZiK9I.jpg', 'id': 64463327}, {'name': 'Орлова Лена', 'ava': 'https://pp.userapi.com/c836421/v836421448/637d9/mI466KClP60.jpg', 'id': 77594480}, {'name': 'Нечаев Александр', 'ava': 'https://pp.userapi.com/c841633/v841633442/f1f5/5DvhJMes_XM.jpg', 'id': 90964733}, {'name': 'Тюрин Андрей', 'ava': 'https://pp.userapi.com/c638517/v638517105/55eb1/GRnGBdihNws.jpg', 'id': 94010892}, {'name': 'Шардина Ксения', 'ava': 'https://pp.userapi.com/c621704/v621704655/1fcb6/bch6LBaa-h8.jpg', 'id': 103940409}, {'name': 'Перминова Даша', 'ava': 'https://pp.userapi.com/c639316/v639316830/2ee04/zXBSvTzkvq4.jpg', 'id': 115510830}, {'name': 'Забоев Иван', 'ava': 'https://pp.userapi.com/c837628/v837628728/686d/LU0PIx5Imug.jpg', 'id': 137589728}, {'name': 'Столбов Сергей', 'ava': 'https://pp.userapi.com/c836536/v836536440/3d06c/YFoGddhXyFg.jpg', 'id': 141240440}, {'name': 'Захарчук Елена', 'ava': 'https://pp.userapi.com/c410116/v410116582/aaa8/VZm7VcUl9uY.jpg', 'id': 145903582}, {'name': 'Ларюкина Екатерина', 'ava': 'https://pp.userapi.com/c639231/v639231770/5026f/-BRZdsFY3Ok.jpg', 'id': 147406427}, {'name': 'Усова Екатерина', 'ava': 'https://pp.userapi.com/c631229/v631229237/48575/3RNzEUOjdsw.jpg', 'id': 148938237}, {'name': 'Шахова Поля', 'ava': 'https://pp.userapi.com/c836238/v836238140/6ccdd/cgNw7SIHF1o.jpg', 'id': 152364214}, {'name': 'Зырянова Ксюша', 'ava': 'https://pp.userapi.com/c639323/v639323248/36630/v7qEHENj5-A.jpg', 'id': 155010248}, {'name': 'Шакин Андрей', 'ava': 'https://pp.userapi.com/c837228/v837228955/35453/IZy1Va2wWRE.jpg', 'id': 183780955}, {'name': 'Котов Гриша', 'ava': 'https://pp.userapi.com/c837326/v837326417/3c6e1/EWF9eF8319w.jpg', 'id': 213493417}, {'name': 'Суслова Юленька', 'ava': 'https://pp.userapi.com/c625121/v625121034/4b66f/YBvLTL_-Xzc.jpg', 'id': 219065034}, {'name': 'Ратегова Ирина', 'ava': 'https://pp.userapi.com/c639320/v639320754/202bf/CPoU-0vfv4k.jpg', 'id': 220416754}, {'name': 'Фадеева Анастасия', 'ava': 'https://pp.userapi.com/c639631/v639631763/3fa43/XLnMkX4hnnQ.jpg', 'id': 226096463}, {'name': 'Васильев Ярослав', 'ava': 'https://pp.userapi.com/c638027/v638027954/51e4a/pF_16cccXxI.jpg', 'id': 268238517}, {'name': 'Быков Сергей', 'ava': 'https://pp.userapi.com/c836525/v836525395/3e321/jngPDlJDhYQ.jpg', 'id': 292367395}, {'name': 'Ваулин Андрей', 'ava': 'https://pp.userapi.com/c841133/v841133698/18337/RpgRQI5IJYw.jpg', 'id': 309438227}, {'name': 'Жеффре Кирилл', 'ava': 'https://pp.userapi.com/c630228/v630228709/4f939/_5OEqCHtk7I.jpg', 'id': 313747709}, {'name': 'Сарманаев Рафиль', 'ava': 'https://pp.userapi.com/c636122/v636122914/4a2ae/xNx1lyZZvVU.jpg', 'id': 315594914}, {'name': 'Останин Эдуард', 'ava': 'https://pp.userapi.com/c837129/v837129251/52902/vMSHTNN9neM.jpg', 'id': 334016964}, {'name': 'Нуриев Олег', 'ava': 'https://pp.userapi.com/c638922/v638922790/30b05/yj5UoOe2PWc.jpg', 'id': 352372790}]
        },
        {name:'Петрозаводск',n:10,
        users:[{'name': 'Гонтарь Евгения', 'ava': 'https://pp.userapi.com/c836226/v836226324/5e6e9/XKWFotCL23Q.jpg', 'id': 2688133}, {'name': 'Андрейчук Людмила', 'ava': 'https://pp.userapi.com/c625225/v625225939/529b4/qhMdD9Q2tBY.jpg', 'id': 6269973}, {'name': 'Кишкин Александр', 'ava': 'https://pp.userapi.com/c626518/v626518027/23744/An1cafOz1fM.jpg', 'id': 8351027}, {'name': 'Мясников Владислав', 'ava': 'https://pp.userapi.com/c638030/v638030974/4f56b/eenq01SiN9Q.jpg', 'id': 12042151}, {'name': 'Лебедев Владимир', 'ava': 'https://pp.userapi.com/c637616/v637616359/4d6c1/Ne03HQ_R2no.jpg', 'id': 36506359}, {'name': 'Богданова Татьяна', 'ava': 'https://pp.userapi.com/c625517/v625517608/4793a/jTqAZ55pauE.jpg', 'id': 38173608}, {'name': 'Котик Джордан', 'ava': 'https://pp.userapi.com/c604322/v604322841/2747/zLlILcrR_Bc.jpg', 'id': 201091841}, {'name': 'Корсаков Лешик', 'ava': 'https://pp.userapi.com/c639617/v639617627/42d59/ya3deX9NafM.jpg', 'id': 220312147}, {'name': 'Джура Юлия', 'ava': 'https://pp.userapi.com/c841530/v841530901/1a205/HcOTyHMDz24.jpg', 'id': 247502273}, {'name': 'Волков Павел', 'ava': 'https://pp.userapi.com/c841222/v841222146/13e72/HRnJh0tj4yc.jpg', 'id': 406178459}]
        },
        {name:'Петропавловск',n:4,
        users:[{'name': 'Беленок Константин', 'ava': 'https://pp.userapi.com/c626821/v626821799/2f409/V8zFrikOwgo.jpg', 'id': 36068799}, {'name': 'Чупринскас Виктор', 'ava': 'https://pp.userapi.com/c622728/v622728747/51626/tkW8McPehRY.jpg', 'id': 41657747}, {'name': 'Халиуллин Ильдар', 'ava': 'https://pp.userapi.com/c626218/v626218587/52e59/VvHIQ6e5cNw.jpg', 'id': 90441587}, {'name': 'Горобченко Алексей', 'ava': 'https://pp.userapi.com/c630329/v630329277/402ae/qcQ8QOMHepI.jpg', 'id': 329359277}]
        },
        {name:'Петропавловск-Камчатский',n:2,
        users:[{'name': 'Шмаков Евгений', 'ava': 'https://sun9-11.userapi.com/c639824/v639824279/3b4e5/E0YqG4DSCE0.jpg', 'id': 19465102}, {'name': 'Гарибов Андрей', 'ava': 'https://pp.userapi.com/c639623/v639623991/b1ca/Wy3i8iuRBgY.jpg', 'id': 305141991}]
        },
        {name:'Пиль-Егор',n:1,
        users:[{'name': 'Канев Володя', 'ava': 'https://pp.userapi.com/c631230/v631230525/2072d/5XxGXRkyU2M.jpg', 'id': 75367525}]
        },
        {name:'Пинск',n:3,
        users:[{'name': 'Пилипенко Вячеслав', 'ava': 'https://pp.userapi.com/c637827/v637827031/589a9/_HDmI3cjo2A.jpg', 'id': 14694031}, {'name': 'Нефидович Евгений', 'ava': 'https://pp.userapi.com/c841324/v841324757/19252/V9IxNjvbkEI.jpg', 'id': 251389739}, {'name': 'Якимчук Алексей', 'ava': 'https://pp.userapi.com/c633530/v633530292/30d19/sz7Lh-Jf4vM.jpg', 'id': 349949292}]
        },
        {name:'Пионерский',n:1,
        users:[{'name': 'Суханов Владимир', 'ava': 'https://pp.userapi.com/c306804/u125207036/e_b200f9fa.jpg', 'id': 125207036}]
        },
        {name:'Питер',n:1,
        users:[{'name': 'Петрова Ксения', 'ava': 'https://pp.userapi.com/c837339/v837339678/17b7f/NOWCJf6SrJc.jpg', 'id': 1118678}]
        },
        {name:'Платнировская',n:1,
        users:[{'name': 'Касалыга Анна', 'ava': 'https://pp.userapi.com/c836133/v836133046/36d90/BpXxoZYQR0A.jpg', 'id': 112328046}]
        },
        {name:'Плеханово',n:1,
        users:[{'name': 'Мусихин Сергей', 'ava': 'https://pp.userapi.com/c841028/v841028552/1b10b/3eq5Fgm3Ky0.jpg', 'id': 95585631}]
        },
        {name:'Подольск',n:1,
        users:[{'name': 'Ибодуллаев Абу', 'ava': 'https://pp.userapi.com/c636730/v636730290/2ad88/q_TqiutCvco.jpg', 'id': 215930290}]
        },
        {name:'Подстепки',n:1,
        users:[{'name': 'Яковлева Люба', 'ava': 'https://pp.userapi.com/c637919/v637919662/63bb0/926EJwtW2PU.jpg', 'id': 41368056}]
        },
        {name:'Пойковский',n:1,
        users:[{'name': 'Дрогушев Виктор', 'ava': 'https://pp.userapi.com/c837332/v837332844/46875/uCJH1-BC1C4.jpg', 'id': 279422844}]
        },
        {name:'Полевской',n:3,
        users:[{'name': 'Чураев Шама', 'ava': 'https://pp.userapi.com/c9301/u22144785/e_19c47fee.jpg', 'id': 22144785}, {'name': 'Афлитонов Александр', 'ava': 'https://pp.userapi.com/c625423/v625423737/4edaa/eD_-sl7Tf1I.jpg', 'id': 327247737}, {'name': 'Муллахметов Руслан', 'ava': 'https://pp.userapi.com/c626420/v626420968/4653a/SyCj5KzSJFw.jpg', 'id': 328902968}]
        },
        {name:'Полоцк',n:1,
        users:[{'name': 'Тофоров Дмитрий', 'ava': 'https://pp.userapi.com/c638928/v638928318/61b17/0BsTyU20Jlo.jpg', 'id': 82585404}]
        },
        {name:'Полярный',n:1,
        users:[{'name': 'Данилова Оксана', 'ava': 'https://pp.userapi.com/c424127/v424127731/443e/0cuL-46_lxk.jpg', 'id': 198246731}]
        },
        {name:'Похвистнево',n:1,
        users:[{'name': 'Ерушов Виталий', 'ava': 'https://sun9-11.userapi.com/c840528/v840528885/549a/aj6Y2eObGj4.jpg', 'id': 82677758}]
        },
        {name:'Почапки',n:1,
        users:[{'name': 'Самолюк Назар', 'ava': 'https://pp.userapi.com/c837539/v837539858/325ec/vmnT1eQSIho.jpg', 'id': 300642858}]
        },
        {name:'Прилуки',n:1,
        users:[{'name': 'Домашенко Вячеслав', 'ava': 'https://pp.userapi.com/c626621/v626621638/5d664/n9cun9WgJL8.jpg', 'id': 222057638}]
        },
        {name:'Протвино',n:1,
        users:[{'name': 'Суров Алексей', 'ava': 'https://pp.userapi.com/c841621/v841621696/138ac/iOb0m-80pj8.jpg', 'id': 62076826}]
        },
        {name:'Псков',n:8,
        users:[{'name': 'Царегородцева Алиса', 'ava': 'https://pp.userapi.com/c836129/v836129806/384d1/Fm7-Zc3I03Y.jpg', 'id': 1529806}, {'name': 'Печёркина Анастасия', 'ava': 'https://pp.userapi.com/c638617/v638617258/5c2ec/pt21-WuqWWA.jpg', 'id': 4287312}, {'name': 'Гаврилов Сергей', 'ava': 'https://pp.userapi.com/c837234/v837234476/526db/TpZSUe14icc.jpg', 'id': 6011262}, {'name': 'Чемоганский Сергей', 'ava': 'https://pp.userapi.com/c836725/v836725088/4ac9a/XixZ2k5ahgs.jpg', 'id': 13578088}, {'name': 'Григорьева Маргарита', 'ava': 'https://pp.userapi.com/c626716/v626716637/3a1dc/k74W_SgsJks.jpg', 'id': 37094637}, {'name': 'Петров Александр', 'ava': 'https://pp.userapi.com/c639424/v639424553/348fe/9PYJhF5zbUU.jpg', 'id': 38743887}, {'name': 'Home Noice', 'ava': 'https://pp.userapi.com/c837633/v837633719/53d92/Qi-WyhNupxo.jpg', 'id': 121827693}, {'name': 'Жеребцов Дмитрий', 'ava': 'https://pp.userapi.com/c841522/v841522362/1a5bc/r7G-ev3Zd5U.jpg', 'id': 394443176}]
        },
        {name:'Пугачев',n:1,
        users:[{'name': 'Рябченко Екатерина', 'ava': 'https://pp.userapi.com/c638219/v638219559/52ef7/PooKIGnvr-o.jpg', 'id': 168413559}]
        },
        {name:'Пудож',n:1,
        users:[{'name': 'Фишер Таня', 'ava': 'https://pp.userapi.com/c627822/v627822867/38a55/IYDSohfs4gU.jpg', 'id': 2311867}]
        },
        {name:'Пучеж',n:1,
        users:[{'name': 'Косолюкин Александр', 'ava': 'https://pp.userapi.com/c638217/v638217479/55db2/oBNJsCQGarA.jpg', 'id': 255481395}]
        },
        {name:'Пушкин',n:2,
        users:[{'name': 'Папст Наталья', 'ava': 'https://pp.userapi.com/c841136/v841136242/15aa1/wPwSJkt3PwA.jpg', 'id': 4053159}, {'name': 'Гришан Юлия', 'ava': 'https://pp.userapi.com/c636319/v636319106/61d26/M3Tz34s3vak.jpg', 'id': 6348106}]
        },
        {name:'Пушкино',n:1,
        users:[{'name': 'Чернега Александр', 'ava': 'https://pp.userapi.com/c604328/v604328836/3096f/IeowyGdMn0I.jpg', 'id': 306065836}]
        },
        {name:'Радужный',n:1,
        users:[{'name': 'Колпакова Татьяна', 'ava': 'https://pp.userapi.com/c638626/v638626649/5e64c/dSNH5hiGac8.jpg', 'id': 42453548}]
        },
        {name:'Раменское',n:1,
        users:[{'name': 'Аникеев Иван', 'ava': 'https://pp.userapi.com/c639530/v639530872/25c94/L6XVvZWTQbQ.jpg', 'id': 2786872}]
        },
        {name:'Ревда',n:2,
        users:[{'name': 'Мценский Павел', 'ava': 'https://pp.userapi.com/c837624/v837624849/67d3c/a9N2bcuC5g8.jpg', 'id': 1127965}, {'name': 'Наговицын Роман', 'ava': 'https://pp.userapi.com/c4552/u23591020/e_6070bd74.jpg', 'id': 23591020}]
        },
        {name:'Ришон ЛеЦион',n:1,
        users:[{'name': 'Ковнацкая Лена', 'ava': 'https://pp.userapi.com/c837726/v837726841/4873b/5eXhC2OG3Xc.jpg', 'id': 6188213}]
        },
        {name:'Ровно',n:1,
        users:[{'name': 'Паламар Владимир', 'ava': 'https://pp.userapi.com/c621509/v621509090/16591/AyPBoKTNSfg.jpg', 'id': 355922533}]
        },
        {name:'Рогачев',n:1,
        users:[{'name': 'Бинецкий Андрей', 'ava': 'https://pp.userapi.com/c630319/v630319067/42f99/FsC9MyqsG04.jpg', 'id': 277354067}]
        },
        {name:'Роза',n:1,
        users:[{'name': 'Морозов Алексей', 'ava': 'https://pp.userapi.com/c836335/v836335061/26c39/aJD-Z-2jioQ.jpg', 'id': 93240061}]
        },
        {name:'Рославль',n:1,
        users:[{'name': 'Сафоненкова Ольга', 'ava': 'https://pp.userapi.com/c621511/v621511603/15ab4/U0-NR584VHc.jpg', 'id': 155799704}]
        },
        {name:'Ростов',n:5,
        users:[{'name': 'Никольский Денис', 'ava': 'https://pp.userapi.com/c837320/v837320529/3252e/78GUlExcd04.jpg', 'id': 10800529}, {'name': 'Щетков Виталий', 'ava': 'https://pp.userapi.com/c837233/v837233217/4eb58/Fj0Uyhl5NbE.jpg', 'id': 70449972}, {'name': 'Галочкина Лилия', 'ava': 'https://pp.userapi.com/c638329/v638329569/6206a/zS_eC9-eGyw.jpg', 'id': 148228234}, {'name': 'Каленский Дмитрий', 'ava': 'https://pp.userapi.com/c840238/v840238098/2645d/qF61N8Ckt0E.jpg', 'id': 151467018}, {'name': 'Тагирова Эльвира', 'ava': 'https://pp.userapi.com/c425031/v425031134/70c0/ajnlTiMjEro.jpg', 'id': 228337134}]
        },
        {name:'Ростов-на-Дону',n:27,
        users:[{'name': 'Богачёв Денис', 'ava': 'https://pp.userapi.com/c836731/v836731989/58cca/ZPFDT1yAz90.jpg', 'id': 1377841}, {'name': 'Филиппов Юрий', 'ava': 'https://pp.userapi.com/c629427/v629427662/2d45/oSto8lAE58I.jpg', 'id': 4096662}, {'name': 'Тютюнников Александр', 'ava': 'https://pp.userapi.com/c630216/v630216095/2cee2/ZavKgNuEWT0.jpg', 'id': 4727095}, {'name': 'Корбан Олег', 'ava': 'https://pp.userapi.com/c630223/v630223276/3f7e2/ARgEqsRwZvQ.jpg', 'id': 5860276}, {'name': 'Закитина Любовь', 'ava': 'https://pp.userapi.com/c837722/v837722063/6180e/g9_WKzJEMJk.jpg', 'id': 6768932}, {'name': 'Чернышева Аня', 'ava': 'https://pp.userapi.com/c841536/v841536541/f4f4/DPuzbW0BTAI.jpg', 'id': 7797781}, {'name': 'Шульга Елена', 'ava': 'https://pp.userapi.com/c836727/v836727257/727af/8Cfa7ZFrkeg.jpg', 'id': 10125637}, {'name': 'Тимошенко Дарья', 'ava': 'https://pp.userapi.com/c636924/v636924659/569f8/CgAlIgXxeLk.jpg', 'id': 17739659}, {'name': 'Шаталов Владимир', 'ava': 'https://pp.userapi.com/c639123/v639123519/3bbdd/wZd33vp-LM8.jpg', 'id': 34381285}, {'name': 'Мигуля Маргарита', 'ava': 'https://pp.userapi.com/c837739/v837739055/422e0/66QaUkkosyE.jpg', 'id': 35536991}, {'name': 'Корсков Владимир', 'ava': 'https://pp.userapi.com/c622118/v622118087/3ad31/Oy3g5179WtE.jpg', 'id': 42368087}, {'name': 'Казанский Альберт', 'ava': 'https://pp.userapi.com/c836122/v836122222/48611/bpotv0DF2XE.jpg', 'id': 54546222}, {'name': 'Емельяненко Евгений', 'ava': 'https://pp.userapi.com/c840237/v840237628/2229e/4VHS6HyWTjI.jpg', 'id': 85312313}, {'name': 'Артёмов Артём', 'ava': 'https://pp.userapi.com/c840434/v840434524/735d/sdN2-hHtqks.jpg', 'id': 90501542}, {'name': 'Абулкасов Захар', 'ava': 'https://pp.userapi.com/c625121/v625121413/23a0/yxTr0aSxcWk.jpg', 'id': 125507413}, {'name': 'Калинина Алина', 'ava': 'https://pp.userapi.com/c836529/v836529434/5e486/gyM6UGaM0eg.jpg', 'id': 130526542}, {'name': 'Бугрова Диана', 'ava': 'https://pp.userapi.com/c628026/v628026800/9e9e/Fkh0rxsfMLY.jpg', 'id': 136966800}, {'name': 'Голубцова Кристина', 'ava': 'https://pp.userapi.com/c639118/v639118317/21bb0/DxuioRHiDHs.jpg', 'id': 147271317}, {'name': 'Зайцев Алексей', 'ava': 'https://pp.userapi.com/c638129/v638129513/446c3/0zbaRsnv_fg.jpg', 'id': 153405513}, {'name': 'Степанишин Степан', 'ava': 'https://pp.userapi.com/c624221/v624221125/56b60/CwfqXyU-vi8.jpg', 'id': 217903125}, {'name': 'Минакова Татьяна', 'ava': 'https://pp.userapi.com/c604320/v604320964/4aac9/CjnwPDQx6W4.jpg', 'id': 243250964}, {'name': 'Костенко Артём', 'ava': 'https://pp.userapi.com/c837334/v837334005/45667/_rqaLRhUGnE.jpg', 'id': 253475005}, {'name': 'Серебряков Александр', 'ava': 'https://pp.userapi.com/c637121/v637121786/597d1/JZuO110vPO8.jpg', 'id': 261324703}, {'name': 'Старков Анатолий', 'ava': 'https://pp.userapi.com/c836739/v836739227/1c639/O9fuLsSVqZw.jpg', 'id': 264267227}, {'name': 'Зинин Руслан', 'ava': 'https://pp.userapi.com/c841030/v841030382/1bb0e/W40xHjhpZZI.jpg', 'id': 287256172}, {'name': 'Поддубенский Илья', 'ava': 'https://pp.userapi.com/c638523/v638523268/3eeb8/TDUPh0J-FYE.jpg', 'id': 326299268}, {'name': 'Аруш Гаяна', 'ava': 'https://pp.userapi.com/c638817/v638817044/570ca/xXyKaA7OHeg.jpg', 'id': 364014553}]
        },
        {name:'Рудня',n:1,
        users:[{'name': 'Федорова Ольга', 'ava': 'https://pp.userapi.com/c638621/v638621897/5bacf/_SZE0skdQ9U.jpg', 'id': 92384317}]
        },
        {name:'Рыбинск',n:6,
        users:[{'name': 'Смирнова Маргарита', 'ava': 'https://pp.userapi.com/c625520/v625520389/500ac/V8Tx6bHzND4.jpg', 'id': 15078389}, {'name': 'Левин Денис', 'ava': 'https://pp.userapi.com/c9606/u81367740/e_db4145b3.jpg', 'id': 81367740}, {'name': 'Гмызов Алексей', 'ava': 'https://pp.userapi.com/c425216/v425216522/6e4c/ClJMbDJGv9U.jpg', 'id': 136230522}, {'name': 'Горун Павел', 'ava': 'https://pp.userapi.com/c616916/v616916433/9dc2/b8pJv-rDUlc.jpg', 'id': 189263433}, {'name': 'Белый Андрей', 'ava': 'https://pp.userapi.com/c636825/v636825553/4157b/s1dz81jXB-o.jpg', 'id': 407332553}, {'name': 'Владимировна Татьяна', 'ava': 'https://pp.userapi.com/c837224/v837224016/48f78/1Zd_ZufFIZw.jpg', 'id': 424361942}]
        },
        {name:'Рылеево',n:1,
        users:[{'name': 'Огнёва Анна', 'ava': 'https://pp.userapi.com/c837238/v837238985/43439/VSH03a2oT_8.jpg', 'id': 180971985}]
        },
        {name:'Рязань',n:1,
        users:[{'name': 'Кубикова Елена', 'ava': 'https://pp.userapi.com/c626617/v626617716/f8ef/BSvWpifzyN0.jpg', 'id': 59472716}]
        },
        {name:'Саки',n:1,
        users:[{'name': 'Ларенков Сережа', 'ava': 'https://pp.userapi.com/c633616/v633616197/182f6/8P_g_WnTsmI.jpg', 'id': 15199197}]
        },
        {name:'Салават',n:1,
        users:[{'name': 'Мазитова Ирина', 'ava': 'https://pp.userapi.com/c638419/v638419482/5cfd6/kNsXS2vYJZ4.jpg', 'id': 220312062}]
        },
        {name:'Самара',n:28,
        users:[{'name': 'Чернов Виталий', 'ava': 'https://pp.userapi.com/c419119/v419119552/8100/F85AME_Mlj0.jpg', 'id': 1182552}, {'name': 'Коновалова Татьяна', 'ava': 'https://pp.userapi.com/c836128/v836128933/37f12/Rv8cZRnosis.jpg', 'id': 1227933}, {'name': 'Баранов Федор', 'ava': 'https://sun9-11.userapi.com/c836723/v836723501/e36f/VXPE27YfPyM.jpg', 'id': 3248501}, {'name': 'Митрохин Владимир', 'ava': 'https://pp.userapi.com/c837225/v837225018/3f26c/sAXNKgDVc2U.jpg', 'id': 5223018}, {'name': 'Родина Юлия', 'ava': 'https://pp.userapi.com/c4320/v4320300/e3/dmvFKLVi8Kw.jpg', 'id': 6087300}, {'name': 'Бунеев Ярослав', 'ava': 'https://pp.userapi.com/c837428/v837428914/53f8e/uN68KRQIz0A.jpg', 'id': 8461914}, {'name': 'Трушков Александр', 'ava': 'https://pp.userapi.com/c636529/v636529641/65157/yguQjXT2CyQ.jpg', 'id': 19108641}, {'name': 'Краснеев Роман', 'ava': 'https://pp.userapi.com/c630526/v630526130/2ac36/KjAG5emrXYE.jpg', 'id': 19140130}, {'name': 'Разин Алексей', 'ava': 'https://pp.userapi.com/c621509/v621509680/199f3/g9-Sg0EqiU4.jpg', 'id': 23524310}, {'name': 'Гарипов Марат', 'ava': 'https://pp.userapi.com/c604424/v604424289/39452/dvDODJQccBg.jpg', 'id': 25881289}, {'name': 'Одинецкая Анна', 'ava': 'https://pp.userapi.com/c841135/v841135564/1a9c2/l0SgyZ81zFw.jpg', 'id': 34003675}, {'name': 'Абрашитова Фатима', 'ava': 'https://pp.userapi.com/c638928/v638928467/e3ba/ed30qAx_5EA.jpg', 'id': 38040467}, {'name': 'Жамкоцян Карен', 'ava': 'https://pp.userapi.com/c637619/v637619330/3e22e/jWlMNAERYsc.jpg', 'id': 57553330}, {'name': 'Crass Славик', 'ava': 'https://pp.userapi.com/c626717/v626717206/1bafd/yIwvXJZi0OE.jpg', 'id': 67807206}, {'name': 'Ефимов Алексей', 'ava': 'https://pp.userapi.com/c630931/v630931397/109c/Ce7hpsV2YMQ.jpg', 'id': 68321397}, {'name': 'Челушкина Татьяна', 'ava': 'https://pp.userapi.com/c836633/v836633985/68170/_YjgwIJ2wgM.jpg', 'id': 70766985}, {'name': 'Канюкаева Лилия', 'ava': 'https://pp.userapi.com/c637430/v637430557/5730f/sN9wWzeK6gw.jpg', 'id': 82086557}, {'name': 'Кожин Дмитрий', 'ava': 'https://pp.userapi.com/c616131/v616131378/744a/q6mk0In-MP0.jpg', 'id': 90900378}, {'name': 'Семьянцев Сергей', 'ava': 'https://pp.userapi.com/c622230/v622230059/6c85/JZwz8iRVvgk.jpg', 'id': 98683059}, {'name': 'Болдырева Ирина', 'ava': 'https://pp.userapi.com/c639922/v639922723/5361c/fGUJxfhGHio.jpg', 'id': 101963380}, {'name': 'Червина Мария', 'ava': 'https://vk.com/images/camera_50.png', 'id': 121245486}, {'name': 'Павлухин Александр', 'ava': 'https://pp.userapi.com/c837635/v837635748/5d8f3/55I0Kd0-Ddk.jpg', 'id': 152535748}, {'name': 'Колобов Сергей', 'ava': 'https://pp.userapi.com/c636020/v636020609/25268/X6tr-CEooeU.jpg', 'id': 185205609}, {'name': 'Жукина Александра', 'ava': 'https://pp.userapi.com/c638925/v638925465/4a2ba/o0ZEn5Oosqo.jpg', 'id': 190286465}, {'name': 'Иванцова Лиля', 'ava': 'https://pp.userapi.com/c836332/v836332191/7457a/uoIKEwtTxSU.jpg', 'id': 194650867}, {'name': 'Романенко Владимир', 'ava': 'https://pp.userapi.com/c629318/v629318671/18689/KlOxBaGR-EU.jpg', 'id': 258803671}, {'name': 'Оченев Константин', 'ava': 'https://pp.userapi.com/c836323/v836323038/600ee/xx8Wf363f-A.jpg', 'id': 269757253}, {'name': 'Лобанов Юра', 'ava': 'https://pp.userapi.com/c841329/v841329787/134df/upXadyCMNGI.jpg', 'id': 281385341}]
        },
        {name:'Санкт-Петербург',n:258,
        users:[{'name': 'Литвинова Надька', 'ava': 'https://pp.userapi.com/c637526/v637526080/2cbb/WHPVk32HKJg.jpg', 'id': 2080}, {'name': 'Власенко Андрей', 'ava': 'https://pp.userapi.com/c10841/u30384/e_abf4c16c.jpg', 'id': 30384}, {'name': 'Белякова Ирина', 'ava': 'https://pp.userapi.com/c637417/v637417812/4cc08/E256mIM-J6U.jpg', 'id': 30812}, {'name': 'Белецкая Мария', 'ava': 'https://pp.userapi.com/c841232/v841232883/11224/FpJXD28g4Kg.jpg', 'id': 35856}, {'name': 'Гюппенен Мария', 'ava': 'https://pp.userapi.com/c836131/v836131288/4553e/gmjUeVAmGDM.jpg', 'id': 41288}, {'name': 'Лукогорская Ольга', 'ava': 'https://pp.userapi.com/c638922/v638922999/7b337/jH_kgWM9m2E.jpg', 'id': 51979}, {'name': 'Макарова Алёна', 'ava': 'https://pp.userapi.com/c841624/v841624774/1586a/IAN3MNPDmrI.jpg', 'id': 63715}, {'name': 'Сивенко Ася', 'ava': 'https://pp.userapi.com/c636920/v636920377/437d7/mnuFcmFQC0A.jpg', 'id': 96377}, {'name': 'Назарова Татьяна', 'ava': 'https://pp.userapi.com/c604621/v604621050/4af3/6E9-14NqQG0.jpg', 'id': 136050}, {'name': 'Орезович Дмитрий', 'ava': 'https://pp.userapi.com/c633230/v633230835/1353c/pD8yYN_F7bc.jpg', 'id': 168835}, {'name': 'Шитикова Женя', 'ava': 'https://pp.userapi.com/c840233/v840233967/22757/tE88SRQjUt8.jpg', 'id': 187294}, {'name': 'Taratuta Anton', 'ava': 'https://pp.userapi.com/c315128/v315128085/8721/0XuqhZC_JUU.jpg', 'id': 192085}, {'name': 'Барановская Наталия', 'ava': 'https://pp.userapi.com/c10352/v10352863/6a5/BXKvVBeDAYg.jpg', 'id': 197863}, {'name': 'Богданов Евгений', 'ava': 'https://pp.userapi.com/c636322/v636322821/3b4c1/U3wtNPgOaFE.jpg', 'id': 199821}, {'name': 'Евстратов Рома', 'ava': 'https://pp.userapi.com/c627130/v627130788/783b/5kKbEwDoXPA.jpg', 'id': 201788}, {'name': 'Малин Сергей', 'ava': 'https://pp.userapi.com/c629404/v629404688/a18a/UcGu1L3H1-k.jpg', 'id': 206688}, {'name': 'Перелыгин Максим', 'ava': 'https://pp.userapi.com/c637717/v637717291/4b5cc/CB4zEPiih4o.jpg', 'id': 211291}, {'name': 'Николаева Хельга', 'ava': 'https://pp.userapi.com/c638219/v638219785/3bdea/Qorr2bbqJyo.jpg', 'id': 276785}, {'name': 'Требунских Алексей', 'ava': 'https://pp.userapi.com/c619929/v619929850/19281/N_8UxgBdmiY.jpg', 'id': 317850}, {'name': 'Печалина Анна', 'ava': 'https://pp.userapi.com/c187/v187774/189d/jhZhpPrryAU.jpg', 'id': 342774}, {'name': 'Эльвова Лидия', 'ava': 'https://pp.userapi.com/c841628/v841628485/228b9/C0s1Wm0ixE4.jpg', 'id': 348268}, {'name': 'Паньшина Екатерина', 'ava': 'https://pp.userapi.com/c841430/v841430549/80d0/tF3B78wj23Y.jpg', 'id': 377575}, {'name': 'Домащенко Андрей', 'ava': 'https://pp.userapi.com/c619221/v619221470/1bf0a/Ei3lHrpinYo.jpg', 'id': 384470}, {'name': 'Уханова Карина', 'ava': 'https://pp.userapi.com/c836724/v836724972/5e1da/bMkGYelHSBo.jpg', 'id': 388073}, {'name': 'Андрусов Кирилл', 'ava': 'https://pp.userapi.com/c317217/u388264/e_17501473.jpg', 'id': 388264}, {'name': 'Десятерик Илья', 'ava': 'https://pp.userapi.com/c307705/v307705760/96ef/9LNRP5XklCI.jpg', 'id': 402760}, {'name': 'Селиверстова Анна', 'ava': 'https://pp.userapi.com/c841424/v841424570/110e3/qS2VnHWeLDc.jpg', 'id': 412159}, {'name': 'Партанен Александр', 'ava': 'https://pp.userapi.com/c322121/v322121336/5c94/WwvHYUagoFI.jpg', 'id': 417336}, {'name': 'Гуменюк Алина', 'ava': 'https://pp.userapi.com/c836733/v836733624/64df0/y6DidcL0H8A.jpg', 'id': 445420}, {'name': 'Костюк Артем', 'ava': 'https://pp.userapi.com/c638521/v638521163/6fb30/Sy9fj5QIM04.jpg', 'id': 481596}, {'name': 'Глузман Борис', 'ava': 'https://pp.userapi.com/c637518/v637518493/efed/mtqmrPcxZeg.jpg', 'id': 484493}, {'name': 'Kostina-Vinogradova Maria', 'ava': 'https://pp.userapi.com/c837238/v837238084/4cf28/6q_vvd3IG94.jpg', 'id': 488495}, {'name': 'Рыбаков Алексей', 'ava': 'https://pp.userapi.com/c636725/v636725391/23532/5XUHyLjZRrQ.jpg', 'id': 617391}, {'name': 'Федотов Борис', 'ava': 'https://pp.userapi.com/c629427/v629427412/4e764/qvXEH8Uabl0.jpg', 'id': 636412}, {'name': 'Прищепенко Алена', 'ava': 'https://pp.userapi.com/c604418/v604418588/43db3/HiQ3k-fZRJc.jpg', 'id': 682588}, {'name': 'Ковалева Ирина', 'ava': 'https://pp.userapi.com/c421320/v421320660/5b04/QUtMr0TFZSo.jpg', 'id': 720660}, {'name': 'Пырсов Вячеслав', 'ava': 'https://pp.userapi.com/c638621/v638621151/1518f/NEcixnq0-Uc.jpg', 'id': 728151}, {'name': 'Канг Лю', 'ava': 'https://pp.userapi.com/c623430/v623430167/a98c/_j6CAVNc2k8.jpg', 'id': 731167}, {'name': 'Grishatkina Natalya', 'ava': 'https://pp.userapi.com/c837533/v837533771/2aa73/D4kUpYzfN3w.jpg', 'id': 751771}, {'name': 'Григорьева Анна', 'ava': 'https://pp.userapi.com/c837633/v837633274/59b2c/1dQEkkJQMWs.jpg', 'id': 767336}, {'name': 'Смирнов Кирилл', 'ava': 'https://pp.userapi.com/c837624/v837624231/5e916/Zy9kpl09Xic.jpg', 'id': 796117}, {'name': 'Зубрилина Анька', 'ava': 'https://pp.userapi.com/c633926/v633926079/2d76c/Ojw_1kSIEek.jpg', 'id': 813079}, {'name': 'Капранов Константин', 'ava': 'https://pp.userapi.com/c633929/v633929505/13c74/KIPEw54_3P4.jpg', 'id': 833505}, {'name': 'Махонен Тимо', 'ava': 'https://pp.userapi.com/c638123/v638123439/43a6a/tOjJ-NxLtJo.jpg', 'id': 915439}, {'name': 'Коссе Дмитрий', 'ava': 'https://pp.userapi.com/c629426/v629426600/e2f2/NfwAPUBxl8s.jpg', 'id': 1028600}, {'name': 'Лиманская Анна', 'ava': 'https://pp.userapi.com/c841127/v841127305/16205/7ivRy45lphw.jpg', 'id': 1078425}, {'name': 'Марков Олег', 'ava': 'https://pp.userapi.com/c626519/v626519911/41d7/34-LG5e8t7U.jpg', 'id': 1082911}, {'name': 'Матвеева Александра', 'ava': 'https://pp.userapi.com/c638531/v638531322/34656/HAHLnHjTIgM.jpg', 'id': 1136322}, {'name': 'Мамонтова Илона', 'ava': 'https://pp.userapi.com/c639525/v639525762/44bf4/JQKiqVtrZQM.jpg', 'id': 1143233}, {'name': 'Карасева Анечка', 'ava': 'https://pp.userapi.com/c638919/v638919673/61826/4WsMzAOmkoE.jpg', 'id': 1180018}, {'name': 'Филатов Даниил', 'ava': 'https://pp.userapi.com/c639722/v639722445/4485b/u3jY7raPqBU.jpg', 'id': 1222521}, {'name': 'Лисичкина Ирина', 'ava': 'https://pp.userapi.com/c638224/v638224580/5a425/j5Zj0n2CyLA.jpg', 'id': 1247427}, {'name': 'Шерматов Рустам', 'ava': 'https://pp.userapi.com/c836531/v836531801/2efcd/d9XtdE6K7O4.jpg', 'id': 1280801}, {'name': 'Дмитриева Мария', 'ava': 'https://pp.userapi.com/c638022/v638022117/567fb/2Rk2fjDHxMo.jpg', 'id': 1305078}, {'name': 'Можаев Дмитрий', 'ava': 'https://pp.userapi.com/c412618/v412618000/891c/gJ0qAVGgjzo.jpg', 'id': 1362000}, {'name': 'Хижняк Анна', 'ava': 'https://pp.userapi.com/c440/u1431183/e_e1ab7610.jpg', 'id': 1431183}, {'name': 'Иванов Андрей', 'ava': 'https://pp.userapi.com/c837727/v837727615/4ac87/Rf6IW788ick.jpg', 'id': 1441697}, {'name': 'Иванов Юрий', 'ava': 'https://pp.userapi.com/c4287/u1540625/e_6324d053.jpg', 'id': 1540625}, {'name': 'Димов Сергей', 'ava': 'https://pp.userapi.com/c638627/v638627287/61c0a/xF-qhc0NTlw.jpg', 'id': 1571620}, {'name': 'Белозерцева Анастасия', 'ava': 'https://pp.userapi.com/c837737/v837737031/52e76/Z9_Tn9X92ec.jpg', 'id': 1725946}, {'name': 'Коваленко Наталия', 'ava': 'https://pp.userapi.com/c628828/v628828662/12f54/pHdNq8Zp9C0.jpg', 'id': 1842662}, {'name': 'Кузьмин Алексей', 'ava': 'https://pp.userapi.com/c1246/u1846244/e_dce37cd6.jpg', 'id': 1846244}, {'name': 'Литвиненко Ева', 'ava': 'https://pp.userapi.com/c841425/v841425850/1726a/yM_8E7YD1ow.jpg', 'id': 1902001}, {'name': 'Баженов Евгений', 'ava': 'https://pp.userapi.com/c638928/v638928939/4da83/25436YJZEG8.jpg', 'id': 1976939}, {'name': 'Матюш Ксения', 'ava': 'https://pp.userapi.com/c639321/v639321657/3eedb/1lWd3TMHuxg.jpg', 'id': 2206186}, {'name': 'Сашина Наталья', 'ava': 'https://pp.userapi.com/c628018/v628018077/ee85/y3sSF6t94V8.jpg', 'id': 2238077}, {'name': 'Сидункова Татьяна', 'ava': 'https://pp.userapi.com/c639522/v639522000/3d4c1/3SEIf-UZ6Lc.jpg', 'id': 2557278}, {'name': 'Калашников Дима', 'ava': 'https://pp.userapi.com/c637521/v637521303/5d2fc/qnZBK9hCtWM.jpg', 'id': 2677920}, {'name': 'Богданова Валерия', 'ava': 'https://pp.userapi.com/c840328/v840328018/562f/5H8wjiQ2Vec.jpg', 'id': 2888356}, {'name': 'Новиков Игорь', 'ava': 'https://pp.userapi.com/c638119/v638119114/51d3d/Ui84ywuc_rg.jpg', 'id': 3233114}, {'name': 'Пискарёва Юлия', 'ava': 'https://pp.userapi.com/c629217/v629217261/121ce/9zankKaySbg.jpg', 'id': 3371261}, {'name': 'Броститов Илья', 'ava': 'https://pp.userapi.com/c637723/v637723435/48e67/WUjvRbL5Q3o.jpg', 'id': 3474435}, {'name': 'Каменецкий Андрей', 'ava': 'https://pp.userapi.com/c5602/u3515005/e_7764847c.jpg', 'id': 3515005}, {'name': 'Киевич Елена', 'ava': 'https://sun9-11.userapi.com/c840724/v840724674/543c/rqIJSSVlaCw.jpg', 'id': 3520799}, {'name': 'Журавель Маша', 'ava': 'https://pp.userapi.com/c639423/v639423772/30a18/8nrJMwki34k.jpg', 'id': 3610931}, {'name': 'Леонтьева Анна', 'ava': 'https://pp.userapi.com/c639231/v639231651/29995/-2d4KGRQft0.jpg', 'id': 3656651}, {'name': 'Суровцев Даниил', 'ava': 'https://pp.userapi.com/c636825/v636825722/63a37/MRtRRJWDRAY.jpg', 'id': 3780722}, {'name': 'Брязгина Ольга', 'ava': 'https://pp.userapi.com/c836437/v836437984/63161/ktMSvEv3ImQ.jpg', 'id': 3811522}, {'name': 'Булахова Юля', 'ava': 'https://pp.userapi.com/c628629/v628629427/42c6d/u4KS3-yQ3xg.jpg', 'id': 3815427}, {'name': 'Vinogradova Наталия', 'ava': 'https://pp.userapi.com/c637526/v637526194/4c3cd/LXeICTsHHK0.jpg', 'id': 3864194}, {'name': 'Барабанова Елена', 'ava': 'https://pp.userapi.com/c837735/v837735502/6df7a/XTUCcwfPcrE.jpg', 'id': 4022897}, {'name': 'Перман Андрей', 'ava': 'https://pp.userapi.com/c636431/v636431788/1ab20/T3reBbMGqHI.jpg', 'id': 4076788}, {'name': 'Абросимов Дмитрий', 'ava': 'https://pp.userapi.com/c638720/v638720575/507f9/1SJJtkLqJow.jpg', 'id': 4159818}, {'name': 'Алексеев Кирилл', 'ava': 'https://pp.userapi.com/c638027/v638027723/4f729/RcZvAAugzJU.jpg', 'id': 4361571}, {'name': 'Соколова Наташа', 'ava': 'https://pp.userapi.com/c638428/v638428108/49eb7/AZiduHApqeU.jpg', 'id': 4362108}, {'name': 'Пилипчук Сергей', 'ava': 'https://pp.userapi.com/c620017/v620017597/482d/F-xoJTv7sw8.jpg', 'id': 4374597}, {'name': 'Феферман Евгений', 'ava': 'https://pp.userapi.com/c631623/v631623158/38424/pWAYdwkePuk.jpg', 'id': 4417158}, {'name': 'фон Штакельберг Тихон', 'ava': 'https://pp.userapi.com/c616029/v616029597/26967/FtLslWdArTw.jpg', 'id': 4656597}, {'name': 'Кандричин Антон', 'ava': 'https://pp.userapi.com/c639325/v639325924/464cc/VQK15yV_pBQ.jpg', 'id': 4796975}, {'name': 'Сало Дмитрий', 'ava': 'https://pp.userapi.com/c622816/v622816041/4e539/i5J_M3y9d88.jpg', 'id': 4864041}, {'name': 'Егорова Анастасия', 'ava': 'https://pp.userapi.com/c841335/v841335717/dfa9/Spps3GA8fQY.jpg', 'id': 5117935}, {'name': 'Дятлова Алёна', 'ava': 'https://pp.userapi.com/c637819/v637819565/608da/9hviUsFstOI.jpg', 'id': 5441653}, {'name': 'Григорьева Камилла', 'ava': 'https://pp.userapi.com/c840028/v840028607/24b31/shWKYiRlo4U.jpg', 'id': 6490548}, {'name': 'Фокеев Олег', 'ava': 'https://pp.userapi.com/c630018/v630018014/430c9/xkCWFxDNS8g.jpg', 'id': 6537014}, {'name': 'Фенглер Юлия', 'ava': 'https://pp.userapi.com/c639130/v639130045/3738a/EMFu0_SANnY.jpg', 'id': 6618366}, {'name': 'Белавина Анна', 'ava': 'https://pp.userapi.com/c841232/v841232187/ecb4/n7yvd9yfi8k.jpg', 'id': 6745290}, {'name': 'Кириков Саша', 'ava': 'https://pp.userapi.com/c836639/v836639265/5b1e5/98uJfjH7YAg.jpg', 'id': 6832327}, {'name': 'Мальцева Татьяна', 'ava': 'https://pp.userapi.com/c841237/v841237189/184bf/yrwMp1oWzZs.jpg', 'id': 6957548}, {'name': 'Максимов Константин', 'ava': 'https://pp.userapi.com/c841425/v841425414/ab96/0XTeckPvXUw.jpg', 'id': 7138102}, {'name': 'Zakharchenko Anastasia', 'ava': 'https://sun9-11.userapi.com/c840631/v840631314/8228/f1rkgBFz20s.jpg', 'id': 7283787}, {'name': 'Timofeeva Natali', 'ava': 'https://pp.userapi.com/c639522/v639522782/4b192/1ORCDEevkOw.jpg', 'id': 7438109}, {'name': 'Писаренко Игорь', 'ava': 'https://pp.userapi.com/c638217/v638217387/5a53a/4Y1dy2XlBVA.jpg', 'id': 7682684}, {'name': 'Носков Юрий', 'ava': 'https://pp.userapi.com/c636918/v636918116/65e01/bg6ipUhbFCQ.jpg', 'id': 7709116}, {'name': 'Троицкий Олег', 'ava': 'https://pp.userapi.com/c627623/v627623916/2a03c/n5roaVJGJeo.jpg', 'id': 7898916}, {'name': 'Кондакова Людмила', 'ava': 'https://pp.userapi.com/c625828/v625828366/43b32/NM5rh0zwr0s.jpg', 'id': 7996366}, {'name': 'Стёпина Татьяна', 'ava': 'https://pp.userapi.com/c638219/v638219389/54410/yl95tRf7N8A.jpg', 'id': 8180592}, {'name': 'Угольников Алексей', 'ava': 'https://pp.userapi.com/c627923/v627923260/239c5/fgpslCtvEhE.jpg', 'id': 8494260}, {'name': 'Шилков Алексей', 'ava': 'https://sun9-11.userapi.com/c840638/v840638457/3c02/Kbq4FdEQm60.jpg', 'id': 8527018}, {'name': 'Ямгуров Рамиль', 'ava': 'https://pp.userapi.com/c837322/v837322867/1735/NF5H40KxEKs.jpg', 'id': 8570867}, {'name': 'Дмитриева Валентинка', 'ava': 'https://pp.userapi.com/c621702/v621702667/12cbc/T2vUOmjKogY.jpg', 'id': 8704638}, {'name': 'Рогачёва Леночка', 'ava': 'https://pp.userapi.com/c639427/v639427240/3ec48/TxLHdQeH21M.jpg', 'id': 9595698}, {'name': 'Крезуб Олег', 'ava': 'https://pp.userapi.com/c836425/v836425310/ca85/rVL4oXc8PJc.jpg', 'id': 9707310}, {'name': 'Рачинин Александр', 'ava': 'https://pp.userapi.com/c637921/v637921374/3ddfc/YSTQdCL8pHs.jpg', 'id': 9721374}, {'name': 'Зыкин Артём', 'ava': 'https://pp.userapi.com/c639427/v639427546/3c6e/LlLdV5J3EtQ.jpg', 'id': 10167546}, {'name': 'Пискова Тоня', 'ava': 'https://pp.userapi.com/c626128/v626128205/2acc1/q8GC8IQvERM.jpg', 'id': 10327205}, {'name': 'Калмыкова Анна', 'ava': 'https://pp.userapi.com/c837330/v837330681/4da06/38CWSxyqoJ4.jpg', 'id': 10597054}, {'name': 'Крапивина Татьяна', 'ava': 'https://pp.userapi.com/c836222/v836222701/3eb93/dfvxE2fAcG0.jpg', 'id': 11292701}, {'name': 'Гуреев Максим', 'ava': 'https://pp.userapi.com/c837133/v837133317/1c35b/p6g3DGvzBHw.jpg', 'id': 11397317}, {'name': 'Король Руслан', 'ava': 'https://pp.userapi.com/c837536/v837536599/45758/grL1OmlzbTw.jpg', 'id': 11437599}, {'name': 'Борзенкова Елизавета', 'ava': 'https://pp.userapi.com/c841220/v841220284/113e7/AqudZyjvHx0.jpg', 'id': 11743166}, {'name': 'Никитина Елена', 'ava': 'https://pp.userapi.com/c841028/v841028864/2f15/rfg-QUt3Nbc.jpg', 'id': 11776864}, {'name': 'Kulieva Yulia', 'ava': 'https://pp.userapi.com/c841523/v841523312/1a6d8/Ncl2Zxw71CQ.jpg', 'id': 11813188}, {'name': 'Дмитриева Татьяна', 'ava': 'https://pp.userapi.com/c604519/v604519017/235c9/qalFVVLvnzs.jpg', 'id': 11883017}, {'name': 'Гончаров Артем', 'ava': 'https://pp.userapi.com/c841524/v841524234/1cfbc/EP_zUZiUSy4.jpg', 'id': 12656913}, {'name': 'Никитин Игорь', 'ava': 'https://pp.userapi.com/c621703/v621703632/16803/y8BqOBdsvto.jpg', 'id': 12787749}, {'name': 'Razmanova Anastasiia', 'ava': 'https://pp.userapi.com/c638618/v638618436/41422/lGbkLAXSf5g.jpg', 'id': 14597436}, {'name': 'Рыбакин Михаил', 'ava': 'https://pp.userapi.com/c639620/v639620919/351cb/_clpdB_oFeg.jpg', 'id': 15391063}, {'name': 'Хаматдинов Василь', 'ava': 'https://pp.userapi.com/c624321/v624321087/375e8/08orFE7ExPs.jpg', 'id': 16718087}, {'name': 'Медведюк Владимир', 'ava': 'https://pp.userapi.com/c620019/v620019663/1ca0d/4o4v9bXZWdE.jpg', 'id': 17776663}, {'name': 'Иванова Мария', 'ava': 'https://sun9-11.userapi.com/c840528/v840528463/4640/p53sBCSr00I.jpg', 'id': 18334280}, {'name': 'Задворных Сергей', 'ava': 'https://pp.userapi.com/c836433/v836433202/62d2f/zdVo4AyQbkM.jpg', 'id': 18929202}, {'name': 'Морган Дарья', 'ava': 'https://pp.userapi.com/c841138/v841138393/feb9/FcoWxf_SRHE.jpg', 'id': 19360709}, {'name': 'Швецова Светлана', 'ava': 'https://pp.userapi.com/c837632/v837632615/496e0/I-B_9MyuIY0.jpg', 'id': 22556615}, {'name': 'Сидоров Глеб', 'ava': 'https://pp.userapi.com/c841122/v841122910/1c2b6/oUH-kfg73Fk.jpg', 'id': 22557263}, {'name': 'Пашнин Валерий', 'ava': 'https://pp.userapi.com/c841033/v841033349/20201/koOYeTOas0A.jpg', 'id': 23619213}, {'name': 'Дементьев Иван', 'ava': 'https://pp.userapi.com/c637629/v637629434/5115f/18I-Usn_OXs.jpg', 'id': 24589434}, {'name': 'Арсеньев Денис', 'ava': 'https://pp.userapi.com/c604731/v604731876/24782/7YDFKsOv2Tw.jpg', 'id': 24924876}, {'name': 'Козлова Марина', 'ava': 'https://pp.userapi.com/c9987/u25042079/e_c4e2199b.jpg', 'id': 25042079}, {'name': 'Катаной Кристина', 'ava': 'https://pp.userapi.com/c639321/v639321804/3f505/wbQaJiByHDs.jpg', 'id': 26082615}, {'name': 'Амировна Адиля', 'ava': 'https://pp.userapi.com/c412316/v412316577/8879/TiymZT_EUaI.jpg', 'id': 26504576}, {'name': 'Филимонов Андрей', 'ava': 'https://pp.userapi.com/c638525/v638525890/3f44b/YNKopvwUZnE.jpg', 'id': 27737890}, {'name': 'Бычков Коля', 'ava': 'https://pp.userapi.com/c630227/v630227618/53f2e/ipMP0T_R_tU.jpg', 'id': 29564618}, {'name': 'Яковлева Анна', 'ava': 'https://pp.userapi.com/c837723/v837723704/6395e/DKG_qjVJET4.jpg', 'id': 30847397}, {'name': 'Аникин Виталий', 'ava': 'https://pp.userapi.com/c841435/v841435354/177a1/Ld_h5UEf860.jpg', 'id': 32452053}, {'name': 'Клим Татьяна', 'ava': 'https://pp.userapi.com/c636918/v636918151/51fdc/i7kKjmqdByk.jpg', 'id': 35219151}, {'name': 'Иванова Татьяна', 'ava': 'https://pp.userapi.com/c837429/v837429324/4ab4c/VHvMSkZI2Dw.jpg', 'id': 35987152}, {'name': 'Рассказчикова Анна', 'ava': 'https://pp.userapi.com/c628428/v628428032/1511f/qovNCaxmsc8.jpg', 'id': 36069032}, {'name': 'Хмелевский Алексей', 'ava': 'https://pp.userapi.com/c619430/v619430615/16f87/mDi8U8Ydmjg.jpg', 'id': 37340615}, {'name': 'Гапеев Владимир', 'ava': 'https://pp.userapi.com/c841037/v841037846/ef4b/SpGg1uJvhPE.jpg', 'id': 38170390}, {'name': 'Бубенцова Дарья', 'ava': 'https://pp.userapi.com/c837433/v837433744/53aff/F_CA-JF8yDo.jpg', 'id': 40479155}, {'name': 'Алешин Алексей', 'ava': 'https://pp.userapi.com/c636721/v636721925/3714e/A0lZSTLBu8I.jpg', 'id': 44152925}, {'name': 'Бордукова Светлана', 'ava': 'https://pp.userapi.com/c608824/v608824118/9212/H8oD6BtHfNQ.jpg', 'id': 44817118}, {'name': 'Банникова Лера', 'ava': 'https://pp.userapi.com/c638517/v638517574/4de2a/ajAh9za2pEU.jpg', 'id': 44919869}, {'name': 'Румянцев Сергей', 'ava': 'https://pp.userapi.com/c638825/v638825818/55c6f/XvqotoISD_0.jpg', 'id': 46198810}, {'name': 'Исакова Светлана', 'ava': 'https://pp.userapi.com/c624731/v624731229/14a90/atE02zC8ZTQ.jpg', 'id': 51094229}, {'name': 'Балянов Дима', 'ava': 'https://pp.userapi.com/c841634/v841634158/e546/piIxjZKnQn8.jpg', 'id': 54842994}, {'name': 'Безносова Екатерина', 'ava': 'https://pp.userapi.com/c841525/v841525924/15aa9/4hViKQ8KICM.jpg', 'id': 55492995}, {'name': 'Диане Диана', 'ava': 'https://pp.userapi.com/c639223/v639223983/40766/X8d6k8D-qyE.jpg', 'id': 57581746}, {'name': 'Knyazev Artem', 'ava': 'https://pp.userapi.com/c639625/v639625993/37ce7/zxeTzhUnRKk.jpg', 'id': 57735710}, {'name': 'Erofeev Mikhail', 'ava': 'https://pp.userapi.com/c840136/v840136815/22f34/3Bn5Qupg_UQ.jpg', 'id': 59195676}, {'name': 'Нугис Александр', 'ava': 'https://pp.userapi.com/c836325/v836325130/5bcdb/gQEOef9m4Aw.jpg', 'id': 59317141}, {'name': 'Корольков Алексей', 'ava': 'https://pp.userapi.com/c322622/v322622085/1d57/0Y-IJQXQIdk.jpg', 'id': 59853085}, {'name': 'Сибгатулина Анастасия', 'ava': 'https://pp.userapi.com/c636629/v636629123/67d0d/-5EaafY6rl4.jpg', 'id': 66334123}, {'name': 'Солнце Оля', 'ava': 'https://pp.userapi.com/c841636/v841636223/1cae7/_ZTOLy3Erkk.jpg', 'id': 69011029}, {'name': 'Заколупин Родион', 'ava': 'https://pp.userapi.com/c638219/v638219459/21493/q2gXfUjBFig.jpg', 'id': 69830459}, {'name': 'Антонишина Марья', 'ava': 'https://pp.userapi.com/c840222/v840222634/b7e4/y5cywbSIKkk.jpg', 'id': 72232634}, {'name': 'Матвеев Николай', 'ava': 'https://pp.userapi.com/c625324/v625324725/2da9c/O9T0O6-tDkg.jpg', 'id': 72821725}, {'name': 'Дриси Тимур', 'ava': 'https://pp.userapi.com/c639420/v639420680/36c1b/zwk3vHjoFTY.jpg', 'id': 73037948}, {'name': 'Молчанов Олег', 'ava': 'https://pp.userapi.com/c639121/v639121584/6ce2/7_Qvj6f8nus.jpg', 'id': 78831584}, {'name': 'Дмитриева Анна', 'ava': 'https://pp.userapi.com/c840121/v840121524/22eee/IebEKAYMef0.jpg', 'id': 82739271}, {'name': 'Смирнов Антон', 'ava': 'https://pp.userapi.com/c638328/v638328356/644f6/oe8Lx-V0QBw.jpg', 'id': 85911161}, {'name': 'Захаров Сергей', 'ava': 'https://pp.userapi.com/c638131/v638131593/5cd04/QbS4hoSPY_w.jpg', 'id': 88183505}, {'name': 'Плаксин Руслан', 'ava': 'https://pp.userapi.com/c836428/v836428361/53002/kBnnab9oqhE.jpg', 'id': 90240220}, {'name': 'Терновик Иван', 'ava': 'https://pp.userapi.com/c629509/v629509708/3ea41/9X-ci3QBkzM.jpg', 'id': 91852708}, {'name': 'Харясова Ирина', 'ava': 'https://pp.userapi.com/c836120/v836120439/58e42/3ZALD9EtW5g.jpg', 'id': 93755920}, {'name': 'Самарина Елена', 'ava': 'https://pp.userapi.com/c636322/v636322299/564e3/sAX_xJWcj3k.jpg', 'id': 95317299}, {'name': 'Грицюк Александр', 'ava': 'https://pp.userapi.com/c630916/v630916353/2a32b/5rWoUeHXaac.jpg', 'id': 95387353}, {'name': 'Кохович Лена', 'ava': 'https://pp.userapi.com/c836135/v836135365/51100/dsCMpGNhb6w.jpg', 'id': 96522456}, {'name': 'Кузнецова Маша', 'ava': 'https://pp.userapi.com/c840133/v840133540/2529e/fOmCbRnu5_4.jpg', 'id': 100789552}, {'name': 'Петров Евгений', 'ava': 'https://pp.userapi.com/c836737/v836737060/58ba0/DrgpPUQFh-s.jpg', 'id': 108792382}, {'name': 'Медведева Ярослава', 'ava': 'https://pp.userapi.com/c836322/v836322804/1f2ae/mg7kRRgmqgs.jpg', 'id': 109460804}, {'name': 'Алёхин Александр', 'ava': 'https://pp.userapi.com/c836437/v836437278/599fb/eoHYbxQofbU.jpg', 'id': 112579356}, {'name': 'Nevskiy Evgeniy', 'ava': 'https://pp.userapi.com/c841126/v841126772/d4a9/o5mOKfflCRw.jpg', 'id': 118394689}, {'name': 'Семёнова Виктория', 'ava': 'https://pp.userapi.com/c637829/v637829760/65feb/NJvL4fpUhoM.jpg', 'id': 120048760}, {'name': 'Ролич Лариса', 'ava': 'https://pp.userapi.com/c624428/v624428885/4a12c/ccc96zsZvTQ.jpg', 'id': 122157885}, {'name': 'Поляков Дмитрий', 'ava': 'https://pp.userapi.com/c9251/u123735774/e_6c63741d.jpg', 'id': 123735774}, {'name': 'Белоусов Алексей', 'ava': 'https://pp.userapi.com/c638920/v638920113/512bb/mVvXtoY6-YY.jpg', 'id': 131861492}, {'name': 'Алтышова Катя', 'ava': 'https://pp.userapi.com/c638523/v638523986/5209d/w32nrqOwQP0.jpg', 'id': 134366122}, {'name': 'Козлова Марина', 'ava': 'https://sun9-11.userapi.com/c837626/v837626602/4f920/1WuoeVuKiMo.jpg', 'id': 135496593}, {'name': 'Болячкин Денис', 'ava': 'https://pp.userapi.com/c837336/v837336588/63e7c/FezX0wmgSoc.jpg', 'id': 139927994}, {'name': 'Hartjenstein Sébastien', 'ava': 'https://pp.userapi.com/c638425/v638425223/3f07e/A2mFRhNBfFk.jpg', 'id': 140357223}, {'name': 'Плотников Сергей', 'ava': 'https://pp.userapi.com/c638627/v638627468/4a991/rL3k4q6dPAQ.jpg', 'id': 140406531}, {'name': 'Зиновьев Степан', 'ava': 'https://pp.userapi.com/c637418/v637418754/736ce/f9AGHMSuDo0.jpg', 'id': 143125062}, {'name': 'Митрушина Наталья', 'ava': 'https://pp.userapi.com/c639127/v639127506/184e0/yIlbEy6WR14.jpg', 'id': 144211506}, {'name': 'Алексеев Эдуард', 'ava': 'https://pp.userapi.com/c840335/v840335053/1916/m2zhMuuQypc.jpg', 'id': 145711518}, {'name': 'Байкова Наталья', 'ava': 'https://pp.userapi.com/c639628/v639628769/1ec97/3UGhRZSVmq8.jpg', 'id': 145838769}, {'name': 'Азимов Данияр', 'ava': 'https://pp.userapi.com/c837726/v837726350/67c60/353PbyMDJHA.jpg', 'id': 146419234}, {'name': 'Rodicheva Anastasia', 'ava': 'https://pp.userapi.com/c837627/v837627560/6b74/TgRm7PNnZpY.jpg', 'id': 147491560}, {'name': 'Надоричев Олег', 'ava': 'https://pp.userapi.com/c636424/v636424229/21b14/6ZCE9ObCBm0.jpg', 'id': 147544229}, {'name': 'Питерская Катя', 'ava': 'https://pp.userapi.com/c841532/v841532269/18e70/N18oxBPG0dw.jpg', 'id': 152163466}, {'name': 'Остроумов Денис', 'ava': 'https://pp.userapi.com/c837725/v837725585/59f0f/qqM_GCJaazI.jpg', 'id': 154224858}, {'name': 'Волков Алексей', 'ava': 'https://pp.userapi.com/c621931/v621931968/30e46/LijGaVeMgvU.jpg', 'id': 154854968}, {'name': 'Пономарева Марина', 'ava': 'https://pp.userapi.com/c836531/v836531896/5eebe/7u-VFgkqUno.jpg', 'id': 155158615}, {'name': 'Холматов Андрей', 'ava': 'https://pp.userapi.com/c638817/v638817642/6b93d/DEgdPd_GArw.jpg', 'id': 159211856}, {'name': 'Суворов Андрей', 'ava': 'https://vk.com/images/camera_50.png', 'id': 165146437}, {'name': 'Усова Вита', 'ava': 'https://pp.userapi.com/c837728/v837728866/43cbc/ex8qIqW6vmg.jpg', 'id': 166980866}, {'name': 'Деденева Наталия', 'ava': 'https://pp.userapi.com/c620919/v620919688/19aff/ibisCmGeSB4.jpg', 'id': 169351688}, {'name': 'Ma St', 'ava': 'https://pp.userapi.com/c638428/v638428280/54251/aUt9kcPXPAo.jpg', 'id': 180527600}, {'name': 'Зюзиков Константин', 'ava': 'https://pp.userapi.com/c604620/v604620623/100ea/wJP7UxabaTA.jpg', 'id': 181425623}, {'name': 'Dybinin Dan', 'ava': 'https://pp.userapi.com/c626519/v626519318/229b5/f8U7Al2Ogew.jpg', 'id': 181643318}, {'name': 'Ляпунова Марта', 'ava': 'https://pp.userapi.com/c639127/v639127967/14bd7/B-BOqaXvv_g.jpg', 'id': 181725967}, {'name': 'Галина Попова', 'ava': 'https://pp.userapi.com/c631116/v631116394/33269/qlIjfe9q6so.jpg', 'id': 187698394}, {'name': 'Зубкова Ирина', 'ava': 'https://pp.userapi.com/c638325/v638325027/43cbf/a86vnGlIj5w.jpg', 'id': 187933027}, {'name': 'Биячуева Наталья', 'ava': 'https://pp.userapi.com/c305602/v305602136/5382/GmYFQIc9qXU.jpg', 'id': 192105136}, {'name': 'Lapinsky Alexander', 'ava': 'https://pp.userapi.com/c837330/v837330253/48fcf/3wd3tCqU90Q.jpg', 'id': 192715613}, {'name': 'Рудская Кристина', 'ava': 'https://pp.userapi.com/c638631/v638631692/5b9bc/DLBIHVDaDDI.jpg', 'id': 194580420}, {'name': 'Морозов Сергей', 'ava': 'https://pp.userapi.com/c841524/v841524562/9dfe/V2Cd78vyxbk.jpg', 'id': 196642984}, {'name': 'Гольцов Евгений', 'ava': 'https://sun9-11.userapi.com/c840226/v840226108/15675/oVdaUdvanFo.jpg', 'id': 197379666}, {'name': 'Ivanov Denis', 'ava': 'https://pp.userapi.com/c604326/v604326151/10aea/wpP-6cjzMM4.jpg', 'id': 202350151}, {'name': 'Матвеева Анна', 'ava': 'https://pp.userapi.com/c638426/v638426785/2ecec/Sb0mcMBmDIg.jpg', 'id': 208284785}, {'name': 'Санникова Дарья', 'ava': 'https://pp.userapi.com/c637831/v637831502/4f240/TKz0wp5d7q0.jpg', 'id': 209588502}, {'name': 'Озерский Александр', 'ava': 'https://pp.userapi.com/c836135/v836135121/5dc37/eGA9l4KPufM.jpg', 'id': 210253056}, {'name': 'Metal-Heart Elena', 'ava': 'https://pp.userapi.com/c837725/v837725524/80b14/B3Zi7HAfZTA.jpg', 'id': 214211875}, {'name': 'Рыжова Хельга', 'ava': 'https://pp.userapi.com/c627625/v627625783/2266d/DLOL0npbnJQ.jpg', 'id': 224132783}, {'name': 'Михаил Некий', 'ava': 'https://pp.userapi.com/c638626/v638626422/5de8f/dn1E73KwNaI.jpg', 'id': 236788044}, {'name': 'Орлова Ирина', 'ava': 'https://pp.userapi.com/c841429/v841429548/13bc9/CjWeo-E5ARo.jpg', 'id': 241006168}, {'name': 'Олеговна Наталья', 'ava': 'https://pp.userapi.com/c639219/v639219522/42625/ZDNzvo8qRj8.jpg', 'id': 241859703}, {'name': 'Прищенко Алина', 'ava': 'https://pp.userapi.com/c638728/v638728270/55dc4/mTYQaupu1Tw.jpg', 'id': 244610689}, {'name': 'Коваль Ольга', 'ava': 'https://pp.userapi.com/c837228/v837228448/b6e80/g2YwFAix0bo.jpg', 'id': 249231084}, {'name': 'Хармс Даниил', 'ava': 'https://pp.userapi.com/c616428/v616428746/e632/8J-zOmCrRCU.jpg', 'id': 255544746}, {'name': 'Смыковская Анна', 'ava': 'https://vk.com/images/camera_50.png', 'id': 258206493}, {'name': 'Степаненко Сергей', 'ava': 'https://pp.userapi.com/c625425/v625425074/15106/EDJ8T_nmnL4.jpg', 'id': 260583074}, {'name': 'Максимова Ксения', 'ava': 'https://pp.userapi.com/c636117/v636117631/1632a/16eeU9pasEE.jpg', 'id': 263739631}, {'name': 'Зарубин Александр', 'ava': 'https://pp.userapi.com/c639829/v639829249/1d6a1/cyAY9UEcZq4.jpg', 'id': 275233249}, {'name': 'Михайлов Василий', 'ava': 'https://pp.userapi.com/c841432/v841432582/1e236/PSp06_loYMI.jpg', 'id': 275503015}, {'name': 'Калина Татьяна', 'ava': 'https://pp.userapi.com/c628625/v628625258/2b549/LyEDu9LIANM.jpg', 'id': 277323258}, {'name': 'Хлебников Семен', 'ava': 'https://pp.userapi.com/c639131/v639131119/204da/rUQGKLPurVU.jpg', 'id': 278555119}, {'name': 'Moon Viacheslav', 'ava': 'https://pp.userapi.com/c637318/v637318938/46f31/kFqTQFE-_Xw.jpg', 'id': 297601938}, {'name': 'Батура Костя', 'ava': 'https://pp.userapi.com/c841039/v841039427/1d072/_Q8dDLpK0eM.jpg', 'id': 300438902}, {'name': 'Shellapared Vittorio', 'ava': 'https://pp.userapi.com/c637331/v637331190/2b278/9TOO-BDW5-U.jpg', 'id': 301539190}, {'name': 'Александровна Наталья', 'ava': 'https://pp.userapi.com/c638526/v638526044/59406/LPvDhLUbJv8.jpg', 'id': 313892353}, {'name': 'Куликов Дмитрий', 'ava': 'https://pp.userapi.com/c638322/v638322037/3a35a/7OxvjyUhYjw.jpg', 'id': 319477037}, {'name': 'Деменков Денис', 'ava': 'https://pp.userapi.com/c636929/v636929061/636/MlAA5ZxVKzM.jpg', 'id': 336349061}, {'name': 'Shalyakin Igor', 'ava': 'https://pp.userapi.com/c637519/v637519552/38a65/ul5UM_ZUxps.jpg', 'id': 340722552}, {'name': 'Полухин Валерий', 'ava': 'https://pp.userapi.com/c627529/v627529770/73daa/OFhQ-o0D0zk.jpg', 'id': 352136770}, {'name': 'Зуев Евгений', 'ava': 'https://pp.userapi.com/c836433/v836433221/5466a/8g7ZGAW0pPk.jpg', 'id': 354295941}, {'name': 'Плащ Черный', 'ava': 'https://pp.userapi.com/c836729/v836729972/60240/olTaAs0XGEI.jpg', 'id': 361123683}, {'name': 'Бучельников Денис', 'ava': 'https://pp.userapi.com/c615716/v615716242/9902/3qQscfe3KaM.jpg', 'id': 361418242}, {'name': 'Лебовский Сергей', 'ava': 'https://pp.userapi.com/c639419/v639419070/15058/JC0Rq7HaIJ8.jpg', 'id': 366111070}, {'name': 'Горбунов Капитон', 'ava': 'https://pp.userapi.com/c637217/v637217424/1a42f/0xLaaPs5ct4.jpg', 'id': 393046424}, {'name': 'Романова Эля', 'ava': 'https://pp.userapi.com/c841432/v841432350/1ceba/SIYMHlDKvWc.jpg', 'id': 395146552}, {'name': 'Тыныштыкбай Нурсултан', 'ava': 'https://pp.userapi.com/c638323/v638323182/316c4/FbMOySsTi-I.jpg', 'id': 401649182}, {'name': 'Грифони Елена', 'ava': 'https://pp.userapi.com/c638723/v638723460/1a0bb/e5FsdPAh3e0.jpg', 'id': 406766460}, {'name': 'Андреевич Артур', 'ava': 'https://pp.userapi.com/c637530/v637530333/33443/qCQ67qoTLZY.jpg', 'id': 412377333}, {'name': 'Суворов Максим', 'ava': 'https://pp.userapi.com/c837423/v837423021/51a0d/U8pPCwLHTbE.jpg', 'id': 420216021}, {'name': 'Паутов Игорь', 'ava': 'https://pp.userapi.com/c836129/v836129623/3822a/Jq57CYnMs7s.jpg', 'id': 422212623}, {'name': 'Кутепов Вячеслав', 'ava': 'https://pp.userapi.com/c837634/v837634886/3baea/ve2-Xaslk58.jpg', 'id': 429831886}, {'name': 'Зарубин Александр', 'ava': 'https://pp.userapi.com/c837229/v837229047/4b57d/YrIehH5k0dc.jpg', 'id': 444516729}]
        },
        {name:'Саранск',n:7,
        users:[{'name': 'Сухова Мария', 'ava': 'https://pp.userapi.com/c841636/v841636305/c466/CxOrJtzOqWw.jpg', 'id': 22099169}, {'name': 'Салехов Марат', 'ava': 'https://vk.com/images/camera_50.png', 'id': 95260173}, {'name': 'Константинов Александр', 'ava': 'https://pp.userapi.com/c837525/v837525575/3d4f6/df_gUgq1PxE.jpg', 'id': 98187575}, {'name': 'Кугушев Руслан', 'ava': 'https://pp.userapi.com/c614727/v614727185/f817/6A1iCO__SLA.jpg', 'id': 137762185}, {'name': 'Мичиганин Олег', 'ava': 'https://pp.userapi.com/c638922/v638922524/23af5/IwCPOUyzOw4.jpg', 'id': 196016524}, {'name': 'Бебенова Настя', 'ava': 'https://pp.userapi.com/c639317/v639317422/44cfe/1k4nZN9R1aM.jpg', 'id': 252272962}, {'name': 'Борисычев Святослав', 'ava': 'https://vk.com/images/camera_50.png', 'id': 338670817}]
        },
        {name:'Сарапул',n:1,
        users:[{'name': 'Фазлиев Ильназ', 'ava': 'https://pp.userapi.com/c837327/v837327621/48521/zPYRQwhQjPU.jpg', 'id': 238508896}]
        },
        {name:'Саратов',n:25,
        users:[{'name': 'Пальчикова Ольга', 'ava': 'https://pp.userapi.com/c841634/v841634061/3b54/ShxnkQaCjYA.jpg', 'id': 5722061}, {'name': 'Салтыкова Татьяна', 'ava': 'https://pp.userapi.com/c638024/v638024839/58ce9/PA5w1nSLtZM.jpg', 'id': 6362082}, {'name': 'Николаевич Артём', 'ava': 'https://pp.userapi.com/c629307/v629307483/1f95f/f19sEjxVwT0.jpg', 'id': 8086483}, {'name': 'Жарков Денис', 'ava': 'https://pp.userapi.com/c10301/u11341362/e_d84b11b6.jpg', 'id': 11341362}, {'name': 'Топильская Ольга', 'ava': 'https://pp.userapi.com/c638317/v638317763/50e23/QzQP7rrYxJI.jpg', 'id': 12277081}, {'name': 'Бекирова Виктория', 'ava': 'https://pp.userapi.com/c637621/v637621106/4cd26/jnOiuMjwnGo.jpg', 'id': 12587106}, {'name': 'Руковичникова Лина', 'ava': 'https://pp.userapi.com/c836137/v836137141/5720e/Ycs6ci7plKk.jpg', 'id': 18731257}, {'name': 'Житников Валера', 'ava': 'https://pp.userapi.com/c626325/v626325052/2e735/AQjgZ_SAnp4.jpg', 'id': 23207052}, {'name': 'Иванова Ирина', 'ava': 'https://pp.userapi.com/c613419/v613419636/1b0f2/pLkCHDHD5p0.jpg', 'id': 25605636}, {'name': 'Петров Артем', 'ava': 'https://pp.userapi.com/c837136/v837136836/46350/8YpoKxPFflE.jpg', 'id': 26076066}, {'name': 'Abdrashitov Oleg', 'ava': 'https://pp.userapi.com/c633224/v633224208/3c717/j83dxnKiP4k.jpg', 'id': 26538208}, {'name': 'Бочкарева Марина', 'ava': 'https://pp.userapi.com/c637631/v637631469/3f3a7/lVOAIcEo4HE.jpg', 'id': 119022469}, {'name': 'Денисов Роман', 'ava': 'https://pp.userapi.com/c630223/v630223956/1c9a0/Xbp-0LkwTeE.jpg', 'id': 139985956}, {'name': 'Щербаков Роман', 'ava': 'https://pp.userapi.com/c623220/v623220005/48d3f/6q-vpkBBlYM.jpg', 'id': 153074005}, {'name': 'Хальзов Александр', 'ava': 'https://pp.userapi.com/c841431/v841431240/190de/-gnvPQACZ8E.jpg', 'id': 160553061}, {'name': 'Сидоров Александр', 'ava': 'https://pp.userapi.com/c841136/v841136961/152ec/CJmpIhhcZOY.jpg', 'id': 165320141}, {'name': 'Алилуев Алексей', 'ava': 'https://pp.userapi.com/c637930/v637930802/1fbd2/nGEFiQ5Px4I.jpg', 'id': 165983802}, {'name': 'Осипов Алексей', 'ava': 'https://pp.userapi.com/c405921/v405921338/9af3/vMf9Q4tSZj4.jpg', 'id': 205299338}, {'name': 'Фомин Антон', 'ava': 'https://pp.userapi.com/c841336/v841336502/196e7/v_i12gI3Gko.jpg', 'id': 208498558}, {'name': 'Плеханов Константин', 'ava': 'https://pp.userapi.com/c618724/v618724724/20821/27H5bnAl4TA.jpg', 'id': 226767724}, {'name': 'Костерин Игорь', 'ava': 'https://pp.userapi.com/c637629/v637629200/4e212/brhCsZzf1oY.jpg', 'id': 246490200}, {'name': 'Макухин Артем', 'ava': 'https://pp.userapi.com/c841339/v841339305/4406/5DukNNXmqiw.jpg', 'id': 249710305}, {'name': 'Белов Евгений', 'ava': 'https://pp.userapi.com/c625130/v625130351/69d6e/X6djU8vo6O0.jpg', 'id': 254800351}, {'name': 'Тремасова Ксения', 'ava': 'https://pp.userapi.com/c841228/v841228529/1fc56/mlGHTb7bXqc.jpg', 'id': 403063576}, {'name': 'Двойнишева Наталья', 'ava': 'https://pp.userapi.com/c840424/v840424731/8da5/I5jktG2CIp4.jpg', 'id': 414635536}]
        },
        {name:'Сватово',n:1,
        users:[{'name': 'Цапко Андрей', 'ava': 'https://pp.userapi.com/c841321/v841321422/12358/ujXlDlSLd0U.jpg', 'id': 141341058}]
        },
        {name:'Свирск',n:1,
        users:[{'name': 'Михайлова Аня', 'ava': 'https://pp.userapi.com/c841421/v841421144/1d408/9f1eNLzyRCw.jpg', 'id': 234816164}]
        },
        {name:'Свободный',n:1,
        users:[{'name': 'Гогуадзе Ламара', 'ava': 'https://pp.userapi.com/c840121/v840121698/27c8e/Lngb9YJtIZM.jpg', 'id': 264666668}]
        },
        {name:'Севастополь',n:7,
        users:[{'name': 'Мельникова Юлия', 'ava': 'https://sun9-11.userapi.com/c840739/v840739788/3ddc/WOViZd5bKoQ.jpg', 'id': 1135085}, {'name': 'Ермолаев Алексей', 'ava': 'https://pp.userapi.com/c626325/v626325663/82c28/ViIgN9JD7Ck.jpg', 'id': 2353663}, {'name': 'Ойстрик Александр', 'ava': 'https://pp.userapi.com/c638929/v638929405/1b957/3mCAzE5Rtgg.jpg', 'id': 2541405}, {'name': 'Новак Василий', 'ava': 'https://pp.userapi.com/c636228/v636228993/b57c/06tUhJ7E5to.jpg', 'id': 7330993}, {'name': 'Koltysheva Dasha', 'ava': 'https://pp.userapi.com/c638317/v638317302/3001f/J_Mq2Pv-I1M.jpg', 'id': 7533302}, {'name': 'Волотко Михаил', 'ava': 'https://pp.userapi.com/c638326/v638326022/492da/ziHqMXbLpqU.jpg', 'id': 211256022}, {'name': 'Королев Роман', 'ava': 'https://pp.userapi.com/c637622/v637622464/402b3/TzLvkRzy6XU.jpg', 'id': 316089464}]
        },
        {name:'Северодвинск',n:2,
        users:[{'name': 'Зыбин Никита', 'ava': 'https://pp.userapi.com/c639629/v639629232/3f4f6/mvneqSWKXg8.jpg', 'id': 1011427}, {'name': 'Булич Женя', 'ava': 'https://pp.userapi.com/c836231/v836231087/4e8cd/ECFzxL3FgFE.jpg', 'id': 163582906}]
        },
        {name:'Североморск',n:1,
        users:[{'name': 'Цуман Евгений', 'ava': 'https://pp.userapi.com/c841634/v841634099/100ff/rlLfgnGp1G4.jpg', 'id': 120213199}]
        },
        {name:'Северская',n:1,
        users:[{'name': 'Аксенов Денис', 'ava': 'https://pp.userapi.com/c639624/v639624445/3953a/Zek_OSohoMs.jpg', 'id': 10550445}]
        },
        {name:'Сегежа',n:1,
        users:[{'name': 'Заломаева Юлька', 'ava': 'https://pp.userapi.com/c631326/v631326237/ae42/v_Fbi2KlCm0.jpg', 'id': 11599237}]
        },
        {name:'Селятино',n:1,
        users:[{'name': 'Лабутин Денис', 'ava': 'https://pp.userapi.com/c638020/v638020407/25210/_Fm0x7EqQeo.jpg', 'id': 6310407}]
        },
        {name:'Сергиев Посад',n:6,
        users:[{'name': 'Вельдин Андрей', 'ava': 'https://pp.userapi.com/c639130/v639130439/20bbb/F3ZqXb49oAE.jpg', 'id': 4736439}, {'name': 'Крылов Валерий', 'ava': 'https://pp.userapi.com/c837728/v837728011/32b34/WWmfdG1ON5Q.jpg', 'id': 51441011}, {'name': 'Сорокин Денис', 'ava': 'https://pp.userapi.com/c626130/v626130362/5680c/UtXVlcmMg1M.jpg', 'id': 64190362}, {'name': 'Махов Сергей', 'ava': 'https://pp.userapi.com/c837528/v837528844/48670/2BLlBQFHmdo.jpg', 'id': 79959844}, {'name': 'Panshin Evgenie', 'ava': 'https://pp.userapi.com/c638223/v638223027/1cdf5/gV3TK-PJnx0.jpg', 'id': 151510027}, {'name': 'Селезнева Анастасия', 'ava': 'https://pp.userapi.com/c639517/v639517261/69932/EpJ7hW2qodo.jpg', 'id': 169015092}]
        },
        {name:'Сердобск',n:1,
        users:[{'name': 'Солянов Николай', 'ava': 'https://pp.userapi.com/c10664/u56363063/e_ea302b92.jpg', 'id': 56363063}]
        },
        {name:'Серпухов',n:2,
        users:[{'name': 'Горбачева Ольга', 'ava': 'https://pp.userapi.com/c638919/v638919974/5ac0f/ZFG4uV_pg3U.jpg', 'id': 54955436}, {'name': 'Калинина Анна', 'ava': 'https://pp.userapi.com/c836234/v836234665/677f4/EZSAFz1um8w.jpg', 'id': 316381603}]
        },
        {name:'Сибай',n:1,
        users:[{'name': 'Ягудин Ильдар', 'ava': 'https://pp.userapi.com/c628117/v628117883/26803/9ycR1laP-7A.jpg', 'id': 13474883}]
        },
        {name:'Симферополь',n:11,
        users:[{'name': 'Валерьевич Станислав', 'ava': 'https://pp.userapi.com/c836122/v836122017/8fae8/EwX_-YGPM7g.jpg', 'id': 422039}, {'name': 'Бережной Антон', 'ava': 'https://pp.userapi.com/c836435/v836435826/3eda1/Py72YTsiemQ.jpg', 'id': 1582826}, {'name': 'Шмиголь Николай', 'ava': 'https://pp.userapi.com/c637324/v637324274/1b55c/W9OuBkeT-M4.jpg', 'id': 6575274}, {'name': 'Стебливская Светлана', 'ava': 'https://pp.userapi.com/c629328/v629328154/10321/US9MWJM79Xk.jpg', 'id': 7872154}, {'name': 'Дункан Анна', 'ava': 'https://pp.userapi.com/c837336/v837336577/43f8a/Fl_oINMPtyA.jpg', 'id': 43277760}, {'name': 'Васильева Екатерина', 'ava': 'https://sun9-11.userapi.com/c639824/v639824163/25604/S3pJcNzccTA.jpg', 'id': 45700163}, {'name': 'Володин Юрий', 'ava': 'https://pp.userapi.com/c836536/v836536581/581e7/GsS0vxe-pgM.jpg', 'id': 59198705}, {'name': 'Николаевна Светлана', 'ava': 'https://pp.userapi.com/c637522/v637522120/52d80/jmUIC2PfLDE.jpg', 'id': 62642120}, {'name': 'Новикова Юлия', 'ava': 'https://pp.userapi.com/c406329/v406329905/11bf8/HS3mMYNygKc.jpg', 'id': 151556905}, {'name': 'Обеременко Вадим', 'ava': 'https://pp.userapi.com/c418730/v418730673/2bf3/Dbmsorr9r6w.jpg', 'id': 161400673}, {'name': 'Boyko Aurika', 'ava': 'https://pp.userapi.com/c621918/v621918687/27638/7Wm9PXk50j0.jpg', 'id': 269238687}]
        },
        {name:'Славгород',n:1,
        users:[{'name': 'Балашов Максим', 'ava': 'https://pp.userapi.com/c637823/v637823826/9167/mFm99H-U3nc.jpg', 'id': 81955826}]
        },
        {name:'Сланцы',n:2,
        users:[{'name': 'Брагин Николай', 'ava': 'https://pp.userapi.com/c837531/v837531905/62713/BskJOySNMHg.jpg', 'id': 10411812}, {'name': 'Леонов Сергей', 'ava': 'https://pp.userapi.com/c626424/v626424858/6a50d/T_zioSnZCL0.jpg', 'id': 17208858}]
        },
        {name:'Слоним',n:1,
        users:[{'name': 'Боковец Павел', 'ava': 'https://pp.userapi.com/c637216/v637216090/1faa2/n9LacOhiFRg.jpg', 'id': 45217090}]
        },
        {name:'Смоленск',n:4,
        users:[{'name': 'Ершова Анна', 'ava': 'https://pp.userapi.com/c301304/u4765912/e_debab5e4.jpg', 'id': 4765912}, {'name': 'Анциферова Маша', 'ava': 'https://pp.userapi.com/c837523/v837523059/5bc6c/YXNpvJRLRJM.jpg', 'id': 27293518}, {'name': 'Верезубова Светлана', 'ava': 'https://pp.userapi.com/c637724/v637724081/527c1/yegbMksxuho.jpg', 'id': 139380081}, {'name': 'Шевцов Влад', 'ava': 'https://pp.userapi.com/c836330/v836330015/64260/gvLakEVAags.jpg', 'id': 269451069}]
        },
        {name:'Снегири',n:1,
        users:[{'name': 'Голованова Ксения', 'ava': 'https://pp.userapi.com/c837525/v837525895/5fa37/HReIaiEareU.jpg', 'id': 6092382}]
        },
        {name:'Снежинск',n:2,
        users:[{'name': 'Швецов Денис', 'ava': 'https://pp.userapi.com/c840230/v840230845/5c0a/fJeYza3D6sE.jpg', 'id': 145661845}, {'name': 'Лопандина Наталья', 'ava': 'https://pp.userapi.com/c543101/v543101744/24b1f/Ovv8nOlKmdg.jpg', 'id': 360827232}]
        },
        {name:'Советский',n:1,
        users:[{'name': 'Березкин Андрей', 'ava': 'https://pp.userapi.com/c627421/v627421266/ada0/zCrf9j_HsO0.jpg', 'id': 162276266}]
        },
        {name:'Сокол',n:1,
        users:[{'name': 'Ефимов Артем', 'ava': 'https://pp.userapi.com/c639817/v639817908/4a99d/gFSKUw84Z-g.jpg', 'id': 259271447}]
        },
        {name:'Соледар',n:1,
        users:[{'name': 'Чубаренко Николай', 'ava': 'https://pp.userapi.com/c627823/v627823577/32bf9/WUgCNfXBFJI.jpg', 'id': 64374577}]
        },
        {name:'Солигорск',n:5,
        users:[{'name': 'Жукова Марина', 'ava': 'https://pp.userapi.com/c836126/v836126221/4756d/q-e-4sHfH-4.jpg', 'id': 28814213}, {'name': 'Грек Николай', 'ava': 'https://pp.userapi.com/c9505/u65517068/e_f7c1b143.jpg', 'id': 65517068}, {'name': 'Бельмач Артём', 'ava': 'https://pp.userapi.com/c841627/v841627573/1c3b9/sldGjfWTNEE.jpg', 'id': 128877973}, {'name': 'Leonov Lesha', 'ava': 'https://pp.userapi.com/c616416/v616416368/1e4a6/8fpIleszzFw.jpg', 'id': 143831368}, {'name': 'Karol Ivan', 'ava': 'https://pp.userapi.com/c633131/v633131386/3b997/mMAw36G4yRw.jpg', 'id': 314929386}]
        },
        {name:'Соликамск',n:2,
        users:[{'name': 'Баландина Юлия', 'ava': 'https://pp.userapi.com/c841229/v841229309/10849/5Q5uCTxY28I.jpg', 'id': 182520547}, {'name': 'Александровна Кристина', 'ava': 'https://pp.userapi.com/c837226/v837226621/548c6/l1t-KfqhZKw.jpg', 'id': 273765617}]
        },
        {name:'Солнечногорск',n:2,
        users:[{'name': 'Зимкина Юлия', 'ava': 'https://pp.userapi.com/c627322/v627322230/12fb/8fShKYM5Fq0.jpg', 'id': 3865230}, {'name': 'Hozhiev Fedya', 'ava': 'https://pp.userapi.com/c621920/v621920833/1e91b/YprSrI7mmi8.jpg', 'id': 116577833}]
        },
        {name:'Сольцы',n:1,
        users:[{'name': 'Савинов Глеб', 'ava': 'https://pp.userapi.com/c639316/v639316203/405da/5g2StuINWlE.jpg', 'id': 220374658}]
        },
        {name:'Сосновый Бор',n:4,
        users:[{'name': 'Иванова Вероника', 'ava': 'https://pp.userapi.com/c639429/v639429148/445b/sPjuiqmugJk.jpg', 'id': 329148}, {'name': 'Кожар Борис', 'ava': 'https://sun9-11.userapi.com/c840632/v840632379/940c/Q_8Tttr99pE.jpg', 'id': 44178122}, {'name': 'Свиридова Татьяна', 'ava': 'https://pp.userapi.com/c625521/v625521235/56106/-RrC1j1jaok.jpg', 'id': 81028235}, {'name': 'Ляшов Денис', 'ava': 'https://pp.userapi.com/c837534/v837534189/5c4e9/3qHcA_7saf0.jpg', 'id': 362946562}]
        },
        {name:'Сочи',n:7,
        users:[{'name': 'Николаенко Антон', 'ava': 'https://pp.userapi.com/c638624/v638624122/4b8b3/DUqUOaBZYx4.jpg', 'id': 17052122}, {'name': 'Сергеева Елена', 'ava': 'https://pp.userapi.com/c636324/v636324179/5a31a/5N4wnm_3SO8.jpg', 'id': 67522179}, {'name': 'Рублёв Андрей', 'ava': 'https://pp.userapi.com/c836120/v836120568/563df/V9AG3_BQJxU.jpg', 'id': 71976278}, {'name': 'Галанцев Владимир', 'ava': 'https://pp.userapi.com/c837633/v837633581/48b7b/mlNvbtj6N0I.jpg', 'id': 188606581}, {'name': 'Звезденкова Анна', 'ava': 'https://pp.userapi.com/c608919/v608919534/ee83/wvAjHKvz67k.jpg', 'id': 196589534}, {'name': 'Чечеткин Сергей', 'ava': 'https://pp.userapi.com/c837127/v837127268/18bc9/lwziwS_4KMU.jpg', 'id': 331264268}, {'name': 'Богданов Денис', 'ava': 'https://pp.userapi.com/c636027/v636027109/3fd4c/w7Snzmnq6Os.jpg', 'id': 393794109}]
        },
        {name:'Спасск-Дальний',n:1,
        users:[{'name': 'Вольф Анюта', 'ava': 'https://pp.userapi.com/c623224/v623224255/21da/nePA36y0-co.jpg', 'id': 232856255}]
        },
        {name:'Спасское',n:1,
        users:[{'name': 'Недошитов Дмитрий', 'ava': 'https://pp.userapi.com/c616631/v616631161/160c8/1RLEN1zY14g.jpg', 'id': 11570161}]
        },
        {name:'Спирово',n:1,
        users:[{'name': 'Петрова Татьяна', 'ava': 'https://pp.userapi.com/c837230/v837230968/5b024/Lk5lmkM6R7A.jpg', 'id': 66193638}]
        },
        {name:'Среднеуральск',n:3,
        users:[{'name': 'Ляшенко Александр', 'ava': 'https://pp.userapi.com/c621705/v621705320/14a22/6QwVwp2Rr8Q.jpg', 'id': 11668144}, {'name': 'Кучин Женя', 'ava': 'https://pp.userapi.com/c841138/v841138873/14d18/Scks-Y2T5lM.jpg', 'id': 28541386}, {'name': 'Ляшенко Дарья', 'ava': 'https://pp.userapi.com/c837239/v837239746/533aa/vcCPdkveBg4.jpg', 'id': 32031735}]
        },
        {name:'Ставрополь',n:14,
        users:[{'name': 'Колодяжный Анатолий', 'ava': 'https://pp.userapi.com/c637829/v637829655/512d4/CWi6Xf1ZF4c.jpg', 'id': 7130655}, {'name': 'Борцова Юлиана', 'ava': 'https://pp.userapi.com/c639831/v639831957/455aa/_M6ZyVG17wo.jpg', 'id': 21486000}, {'name': 'Лукьянченко Виктория', 'ava': 'https://pp.userapi.com/c837738/v837738771/4b886/L7NF7WwVblA.jpg', 'id': 42722939}, {'name': 'Лютэр Татьяна', 'ava': 'https://pp.userapi.com/c624916/v624916535/41614/nLsnnVOWsdw.jpg', 'id': 74017535}, {'name': 'Flux Energy', 'ava': 'https://pp.userapi.com/c637721/v637721073/57ac1/Fc3gQPQQqvk.jpg', 'id': 89380349}, {'name': 'Кириченко Сергей', 'ava': 'https://pp.userapi.com/c836734/v836734870/60bec/q7tPwZVzsaI.jpg', 'id': 136309909}, {'name': 'Окулов Павел', 'ava': 'https://pp.userapi.com/c628729/v628729639/1a5a7/vAbcQ6UusiU.jpg', 'id': 144519639}, {'name': 'Тимофеева Людмила', 'ava': 'https://sun9-11.userapi.com/c840638/v840638840/336f/tNXAOfBDGx0.jpg', 'id': 145962539}, {'name': 'Будков Антон', 'ava': 'https://pp.userapi.com/c604524/v604524778/2a465/kdzGwFPcttg.jpg', 'id': 187266778}, {'name': 'Чечухина Катерина', 'ava': 'https://pp.userapi.com/c639523/v639523383/1d991/QLSydcyoQoo.jpg', 'id': 206898383}, {'name': 'Есина Елена', 'ava': 'https://sun9-11.userapi.com/c840723/v840723953/6db1/yEe0IwxKQ7s.jpg', 'id': 231412516}, {'name': 'Зотова Ирина', 'ava': 'https://pp.userapi.com/c638718/v638718148/4df9c/K-E-hjGd6cI.jpg', 'id': 235312653}, {'name': 'Гуливатый Петр', 'ava': 'https://pp.userapi.com/c841332/v841332359/17792/bVZHLVLjC4Y.jpg', 'id': 247196802}, {'name': 'Костин Николай', 'ava': 'https://pp.userapi.com/c639830/v639830570/efc4/AJfMwR8gRGE.jpg', 'id': 305541570}]
        },
        {name:'Старый Оскол',n:3,
        users:[{'name': 'Зубковский Андрей', 'ava': 'https://pp.userapi.com/c425118/v425118488/7ec3/u6Tn4A-dILg.jpg', 'id': 1882488}, {'name': 'Добродомов Дмитрий', 'ava': 'https://pp.userapi.com/c4220/u16321576/e_098b289c.jpg', 'id': 16321576}, {'name': 'Базулина Анна', 'ava': 'https://pp.userapi.com/c604626/v604626393/be0/VOcbNrCfcaQ.jpg', 'id': 40615393}]
        },
        {name:'Стаханов',n:1,
        users:[{'name': 'Хайло Олександр', 'ava': 'https://pp.userapi.com/c627520/v627520053/396c6/8dpNGzxc6DA.jpg', 'id': 12511053}]
        },
        {name:'Степногорск',n:1,
        users:[{'name': 'Военков Евгений', 'ava': 'https://pp.userapi.com/c837120/v837120592/2435f/FuNjL5NvHWg.jpg', 'id': 48140592}]
        },
        {name:'Стерлитамак',n:4,
        users:[{'name': 'Шаталина Стася', 'ava': 'https://pp.userapi.com/c840621/v840621884/4db2/QxXvBpaeQPk.jpg', 'id': 67296270}, {'name': 'Сайфутдинов Ильгам', 'ava': 'https://pp.userapi.com/c836227/v836227201/54925/PPrFfqNTOfg.jpg', 'id': 94641890}, {'name': 'Шибирдин Айдар', 'ava': 'https://sun9-11.userapi.com/c840624/v840624656/3c27/qRQUb7BAaBg.jpg', 'id': 137777774}, {'name': 'Габбасова Екатерина', 'ava': 'https://pp.userapi.com/c841239/v841239724/7ffb/EdGYkuSDBu0.jpg', 'id': 276168724}]
        },
        {name:'Ступино',n:1,
        users:[{'name': 'Родионов Сергей', 'ava': 'https://pp.userapi.com/c636016/v636016898/42037/XG0G7W-NJpI.jpg', 'id': 232944898}]
        },
        {name:'Сумы',n:2,
        users:[{'name': 'Мигаль Андрей', 'ava': 'https://pp.userapi.com/c626221/v626221344/56c5/jObwNsk2DsQ.jpg', 'id': 12261344}, {'name': 'Шевченко Артем', 'ava': 'https://pp.userapi.com/c837137/v837137254/47f86/TvvMljrHmB8.jpg', 'id': 298288012}]
        },
        {name:'Сургут',n:4,
        users:[{'name': 'Пушкарёв Иван', 'ava': 'https://pp.userapi.com/c837436/v837436875/4b771/6-XAtzg7NV8.jpg', 'id': 49688223}, {'name': 'Сусликов Сергей', 'ava': 'https://pp.userapi.com/c623922/v623922938/4aaf5/adkT93Dukow.jpg', 'id': 111361938}, {'name': 'Сербова Леночка', 'ava': 'https://pp.userapi.com/c639628/v639628879/43e1c/M_tj-HlHIDE.jpg', 'id': 128214778}, {'name': 'Васильковский Роман', 'ava': 'https://pp.userapi.com/c630129/v630129135/14d09/IeDLVaD9xbs.jpg', 'id': 226569135}]
        },
        {name:'Сухой Лог',n:1,
        users:[{'name': 'Желнин Валера', 'ava': 'https://pp.userapi.com/c637418/v637418960/4bec/ZJjkVjea6t8.jpg', 'id': 21615960}]
        },
        {name:'Сухоречка',n:1,
        users:[{'name': 'Султанов Руслан', 'ava': 'https://pp.userapi.com/c4750/u114247675/e_9c99f7e5.jpg', 'id': 114247675}]
        },
        {name:'Сызрань',n:2,
        users:[{'name': 'Потапова Екатерина', 'ava': 'https://pp.userapi.com/c837526/v837526111/72668/7Lpv-dbMXnM.jpg', 'id': 23954233}, {'name': 'Быков Виталий', 'ava': 'https://pp.userapi.com/c638331/v638331299/536e8/Rw4v2t4VojU.jpg', 'id': 234957719}]
        },
        {name:'Сыктывкар',n:1,
        users:[{'name': 'Абдурманов Денис', 'ava': 'https://pp.userapi.com/c638918/v638918353/4ae7d/qqUc0mRKxAo.jpg', 'id': 27486415}]
        },
        {name:'Сысерть',n:1,
        users:[{'name': 'Седов Владимир', 'ava': 'https://pp.userapi.com/c636617/v636617816/17970/ui-UFIq179U.jpg', 'id': 235610816}]
        },
        {name:'Талдом',n:2,
        users:[{'name': 'Жуков Денис', 'ava': 'https://pp.userapi.com/c639631/v639631683/43b0f/2npUjiFLemY.jpg', 'id': 44077213}, {'name': 'Акулова Татьяна', 'ava': 'https://pp.userapi.com/c837322/v837322084/64d46/FxXMDVZqrAE.jpg', 'id': 226047084}]
        },
        {name:'Тамбов',n:13,
        users:[{'name': 'Абраменко Сергей', 'ava': 'https://pp.userapi.com/c841127/v841127241/9ece/C5trMbtvuh4.jpg', 'id': 21793671}, {'name': 'Зеленов Олег', 'ava': 'https://pp.userapi.com/c638220/v638220494/843f7/LsuJs6y_zHo.jpg', 'id': 47951627}, {'name': 'Болдина Светлана', 'ava': 'https://pp.userapi.com/c621826/v621826439/3962b/-BtjHpK4XGY.jpg', 'id': 51154096}, {'name': 'Жилин Вадим', 'ava': 'https://pp.userapi.com/c639321/v639321330/28853/XT-4BeOV23I.jpg', 'id': 53099330}, {'name': 'Горелкин Дмитрий', 'ava': 'https://pp.userapi.com/c841522/v841522239/17593/6rKf3O0cfzo.jpg', 'id': 148146737}, {'name': 'Конфетова Лана', 'ava': 'https://pp.userapi.com/c837227/v837227121/517e7/2N4b72tmomg.jpg', 'id': 215571130}, {'name': 'Медведев Михаил', 'ava': 'https://pp.userapi.com/c636416/v636416671/c93f/Y_fnVrNGAeo.jpg', 'id': 224243671}, {'name': 'Лотц Николай', 'ava': 'https://pp.userapi.com/c836529/v836529148/5013c/nAbLAITNwx8.jpg', 'id': 236315289}, {'name': 'Третьяков Фёдор', 'ava': 'https://pp.userapi.com/c627424/v627424879/81a0/VIQ1UjnAg6A.jpg', 'id': 241284879}, {'name': 'Gorelkina Virsaviya', 'ava': 'https://pp.userapi.com/c620922/v620922718/15193/m-0C_lQxm64.jpg', 'id': 269815718}, {'name': 'Носова Наташа', 'ava': 'https://pp.userapi.com/c638127/v638127263/5b417/DuZLR3_DQqM.jpg', 'id': 308373393}, {'name': 'Лакомкин Виталий', 'ava': 'https://pp.userapi.com/c840221/v840221354/2e325/IPrQFiaiww8.jpg', 'id': 337541081}, {'name': 'Панин Борис', 'ava': 'https://pp.userapi.com/c639528/v639528930/35da9/RzSsDWpyzHQ.jpg', 'id': 358478174}]
        },
        {name:'Тарко-Сале',n:1,
        users:[{'name': 'Королевич Наталья', 'ava': 'https://pp.userapi.com/c631825/v631825052/518a4/jkNOmJzGEec.jpg', 'id': 64262052}]
        },
        {name:'Татарск',n:1,
        users:[{'name': 'Вилкун Сергей', 'ava': 'https://pp.userapi.com/c637218/v637218176/6a8b7/TXlADzKop1g.jpg', 'id': 248165444}]
        },
        {name:'Таттинский',n:1,
        users:[{'name': 'Лазарев Мичил', 'ava': 'https://pp.userapi.com/c630516/v630516568/36e3c/JPZ39es05UA.jpg', 'id': 362076568}]
        },
        {name:'Ташкент',n:1,
        users:[{'name': 'Wrest Wrest', 'ava': 'https://vk.com/images/camera_50.png', 'id': 354113971}]
        },
        {name:'Тверь',n:13,
        users:[{'name': 'Котелевская Юлия', 'ava': 'https://pp.userapi.com/c638020/v638020169/3c3b2/KUZngzfFiuw.jpg', 'id': 461169}, {'name': 'Оленченко Ольга', 'ava': 'https://pp.userapi.com/c836333/v836333244/7509f/FZCZgyeD2Ys.jpg', 'id': 2467413}, {'name': 'Лебедева Вера', 'ava': 'https://pp.userapi.com/c837222/v837222664/573d4/NpstSYUXriM.jpg', 'id': 3129723}, {'name': 'Титова Елена', 'ava': 'https://pp.userapi.com/c627822/v627822771/1717c/0WzzPXbOmqM.jpg', 'id': 13352771}, {'name': 'Кора Алёна', 'ava': 'https://pp.userapi.com/c837635/v837635917/65734/Ly9LQa-xwY4.jpg', 'id': 65057558}, {'name': 'Карасёв Алексей', 'ava': 'https://pp.userapi.com/c620720/v620720182/13e17/3jnqUse5VNw.jpg', 'id': 90777182}, {'name': 'Каулина Александра', 'ava': 'https://pp.userapi.com/c836620/v836620424/5360c/_g2KrsC37Ng.jpg', 'id': 211894347}, {'name': 'Прокофьева Лариса', 'ava': 'https://pp.userapi.com/c837236/v837236054/1aa/4_8a6WDuR_c.jpg', 'id': 237280054}, {'name': 'Глущенко Олеся', 'ava': 'https://pp.userapi.com/c841521/v841521459/1bef7/9ao1BAfnwEc.jpg', 'id': 237817481}, {'name': 'Кот Алина', 'ava': 'https://pp.userapi.com/c837435/v837435975/8f4f0/Wd_qoJvVDhg.jpg', 'id': 303397799}, {'name': 'Медовая Ирина', 'ava': 'https://pp.userapi.com/c623724/v623724545/36be5/ckXj2Te-Pjo.jpg', 'id': 306100545}, {'name': 'Колосай Юрий', 'ava': 'https://pp.userapi.com/c637429/v637429432/10fb2/vdvYJWMjrOI.jpg', 'id': 323476432}, {'name': 'Поселенова Ульяна', 'ava': 'https://pp.userapi.com/c638625/v638625402/50239/kDSj22yjEt0.jpg', 'id': 323495175}]
        },
        {name:'Тейково',n:5,
        users:[{'name': 'Костычева Ольга', 'ava': 'https://pp.userapi.com/c837727/v837727903/69cac/KHobcef0Ljc.jpg', 'id': 52659849}, {'name': 'Кубарев Андрей', 'ava': 'https://pp.userapi.com/c837120/v837120298/f95/-8ECYPaLhKI.jpg', 'id': 86484298}, {'name': 'Хохряков Алексей', 'ava': 'https://pp.userapi.com/c638925/v638925014/17ec/QvO06uAhs34.jpg', 'id': 153923014}, {'name': 'Пересвет Александр', 'ava': 'https://pp.userapi.com/c636020/v636020842/1a7fa/rggYK7o5vpw.jpg', 'id': 282010842}, {'name': 'Лукьянова Мария', 'ava': 'https://pp.userapi.com/c638725/v638725655/5b9d0/fzWR39OjAp8.jpg', 'id': 325699587}]
        },
        {name:'Тель-Авив',n:1,
        users:[{'name': 'Никольский Константин', 'ava': 'https://pp.userapi.com/c836633/v836633041/33778/T9l2MDUXtDQ.jpg', 'id': 223237041}]
        },
        {name:'Тирасполь',n:3,
        users:[{'name': 'Шевченко Александр', 'ava': 'https://pp.userapi.com/c837735/v837735032/5cae3/oeqtMv1pfm8.jpg', 'id': 2510501}, {'name': 'Поповский Олег', 'ava': 'https://pp.userapi.com/c1355/u4090263/e_dd5e3198.jpg', 'id': 4090263}, {'name': 'Рублева Татьяна', 'ava': 'https://pp.userapi.com/c836439/v836439482/6289a/7Y-RajyyIq4.jpg', 'id': 114344581}]
        },
        {name:'Тихвин',n:2,
        users:[{'name': 'Самигуллина Елена', 'ava': 'https://pp.userapi.com/c841239/v841239971/171be/938878JeHmg.jpg', 'id': 20672873}, {'name': 'Мур Марина', 'ava': 'https://pp.userapi.com/c836532/v836532381/5fb3b/yLgGVNRlWdc.jpg', 'id': 139663304}]
        },
        {name:'Тобольск',n:2,
        users:[{'name': 'Ракецкая Елена', 'ava': 'https://pp.userapi.com/c836329/v836329835/588ea/-CggCmbLezg.jpg', 'id': 1166642}, {'name': 'Гумеров Станислав', 'ava': 'https://pp.userapi.com/c836132/v836132736/41751/U2vlwNmEoc8.jpg', 'id': 159215736}]
        },
        {name:'Толбазы',n:1,
        users:[{'name': 'Абсалямов Рифат', 'ava': 'https://pp.userapi.com/c639525/v639525676/1cf3d/VtXsoOPyXEo.jpg', 'id': 24748676}]
        },
        {name:'Толвуя',n:1,
        users:[{'name': 'Леонтьев Андрей', 'ava': 'https://pp.userapi.com/c406219/v406219277/d12b/qGSbDA3K4Bw.jpg', 'id': 201212277}]
        },
        {name:'Тольятти',n:7,
        users:[{'name': 'Панченко Евгения', 'ava': 'https://sun9-11.userapi.com/c840523/v840523796/7abd/JHeNspGgYCY.jpg', 'id': 1901933}, {'name': 'Белякова Екатерина', 'ava': 'https://pp.userapi.com/c841325/v841325806/1b23b/GRBj6IQjg88.jpg', 'id': 2737052}, {'name': 'Набиев Андрей', 'ava': 'https://pp.userapi.com/c622121/v622121017/c56c/8FtSO6uCc6o.jpg', 'id': 2896017}, {'name': 'Митрофанов Роман', 'ava': 'https://pp.userapi.com/c841230/v841230739/f6f0/lkJ6TGV2aCM.jpg', 'id': 4470782}, {'name': 'Чахеев Юрий', 'ava': 'https://pp.userapi.com/c841423/v841423069/1ef3f/v_apyjrudi4.jpg', 'id': 12306199}, {'name': 'Серов Игорь', 'ava': 'https://pp.userapi.com/c637323/v637323197/79f/fsGWdJwRzmA.jpg', 'id': 23267197}, {'name': 'Максимов Валентин', 'ava': 'https://pp.userapi.com/c639831/v639831107/3d44f/1ywN9OKJ3k4.jpg', 'id': 23628093}]
        },
        {name:'Томск',n:7,
        users:[{'name': 'Филатов Егор', 'ava': 'https://pp.userapi.com/c638825/v638825212/661c1/h1SyTKipWPU.jpg', 'id': 2110409}, {'name': 'Мицкевич Антон', 'ava': 'https://pp.userapi.com/c639123/v639123867/3abff/C5U9-pANKCo.jpg', 'id': 6914805}, {'name': 'Калинин Андрей', 'ava': 'https://pp.userapi.com/c5353/u104430511/e_61c15fa5.jpg', 'id': 104430511}, {'name': 'Некрасов Слава', 'ava': 'https://pp.userapi.com/c639427/v639427730/3ebd3/-sDwa17fMiY.jpg', 'id': 159891193}, {'name': 'Хомченко Дмитрий', 'ava': 'https://pp.userapi.com/c639425/v639425571/3c67b/bu_iPzxf6w4.jpg', 'id': 181878682}, {'name': 'Бетенекова Надежда', 'ava': 'https://pp.userapi.com/c638431/v638431415/197db/89c26m-aFd8.jpg', 'id': 184076415}, {'name': 'Котова Наталия', 'ava': 'https://pp.userapi.com/c837429/v837429056/512a4/xJlcTcfeaFg.jpg', 'id': 292485697}]
        },
        {name:'Топки',n:1,
        users:[{'name': 'Кривов Николай', 'ava': 'https://pp.userapi.com/c639623/v639623555/3f7db/z4WyNA32T1s.jpg', 'id': 16176531}]
        },
        {name:'Торжок',n:2,
        users:[{'name': 'Кириллов Олег', 'ava': 'https://pp.userapi.com/c636429/v636429023/c0c07/I48mRfu5Fkc.jpg', 'id': 359005023}, {'name': 'Котова Сандра', 'ava': 'https://pp.userapi.com/c637128/v637128077/69806/FP5IFHw8gVU.jpg', 'id': 417154158}]
        },
        {name:'Тосно',n:1,
        users:[{'name': 'Метелёва Юлия', 'ava': 'https://pp.userapi.com/c639226/v639226122/3dc02/SBm3mq7zYhc.jpg', 'id': 22191316}]
        },
        {name:'Туапсе',n:1,
        users:[{'name': 'Юров Алексей', 'ava': 'https://pp.userapi.com/c623229/v623229651/49b9a/ooM9Bwcg12k.jpg', 'id': 155421651}]
        },
        {name:'Тула',n:14,
        users:[{'name': 'Bogolyubova Dasha', 'ava': 'https://pp.userapi.com/c639919/v639919567/38bad/43VuAUBUBhk.jpg', 'id': 2320936}, {'name': 'Высоцкий Виталий', 'ava': 'https://pp.userapi.com/c613519/v613519158/2710b/mzr3W_2H8EM.jpg', 'id': 6458158}, {'name': 'Чуйкин Павел', 'ava': 'https://pp.userapi.com/c604323/v604323103/f9a2/VQQ0FnECt7U.jpg', 'id': 9706103}, {'name': 'Голоскоков Николай', 'ava': 'https://pp.userapi.com/c622017/v622017801/41964/XwUF225DS38.jpg', 'id': 9783801}, {'name': 'Usanov Andrew', 'ava': 'https://pp.userapi.com/c630618/v630618390/ea32/wsUwHsgCRRE.jpg', 'id': 19111390}, {'name': 'Сидоров Павел', 'ava': 'https://pp.userapi.com/c628225/v628225965/3dd4b/UQtknw4tlWg.jpg', 'id': 23502965}, {'name': 'Гавриков Александр', 'ava': 'https://pp.userapi.com/c618323/v618323844/15dc5/2cnorilrtoM.jpg', 'id': 27630844}, {'name': 'Толмачева Наталия', 'ava': 'https://pp.userapi.com/c841629/v841629285/c997/284emjyRZnM.jpg', 'id': 60460448}, {'name': 'Пятчанин Иван', 'ava': 'https://pp.userapi.com/c639422/v639422260/49fc/omOX2magd2Q.jpg', 'id': 65834260}, {'name': 'Кузнецов Андрей', 'ava': 'https://pp.userapi.com/c619526/v619526724/19694/CYhnSft2gmM.jpg', 'id': 109846724}, {'name': 'Гончаров Артем', 'ava': 'https://pp.userapi.com/c638826/v638826231/584cd/UPRHlD7yLqU.jpg', 'id': 199564485}, {'name': 'Сидоров Сергей', 'ava': 'https://pp.userapi.com/c412228/v412228576/32be/7hgSK_9iiQA.jpg', 'id': 221116576}, {'name': 'Григорьева Ирина', 'ava': 'https://pp.userapi.com/c639316/v639316092/2c9e4/RVWcR8ok_u8.jpg', 'id': 243930092}, {'name': 'Кашковский Владимир', 'ava': 'https://pp.userapi.com/c837331/v837331783/443f2/C-ibr2EKLKY.jpg', 'id': 428787783}]
        },
        {name:'Тутаев',n:1,
        users:[{'name': 'Кокорин Евгений', 'ava': 'https://pp.userapi.com/c320221/v320221114/3a07/6-DXttS3YiI.jpg', 'id': 226162114}]
        },
        {name:'Тюмень',n:23,
        users:[{'name': 'Антоненко Сергей', 'ava': 'https://pp.userapi.com/c424231/v424231182/9945/5FaSD9_Pa2c.jpg', 'id': 1177182}, {'name': 'Ушаров Дмитрий', 'ava': 'https://pp.userapi.com/c631220/v631220593/23d26/rAfrvV5hXJM.jpg', 'id': 1507593}, {'name': 'Куликова Елена', 'ava': 'https://pp.userapi.com/c307503/v307503486/4da5/dp_cUlWqnj8.jpg', 'id': 2673486}, {'name': 'Берг Владимир', 'ava': 'https://pp.userapi.com/c837536/v837536607/3af8e/kvKpEVm6IHc.jpg', 'id': 3959607}, {'name': 'Чалков Михаил', 'ava': 'https://sun9-11.userapi.com/c840524/v840524890/1af4/ESqSpBv2xpA.jpg', 'id': 4154708}, {'name': 'Скорнякова Анна', 'ava': 'https://pp.userapi.com/c628519/v628519176/55a6/Au9W3pPY1gc.jpg', 'id': 6256176}, {'name': 'Степанов Иннокентий', 'ava': 'https://pp.userapi.com/c626120/v626120379/57d85/1B-xC9lYMAg.jpg', 'id': 7189379}, {'name': 'Климович Марина', 'ava': 'https://pp.userapi.com/c841538/v841538851/20274/0vOOrkcu_J8.jpg', 'id': 10906067}, {'name': 'Коваленко Евгений', 'ava': 'https://pp.userapi.com/c629117/v629117688/26333/hXLcM7NS7Y8.jpg', 'id': 13450688}, {'name': 'Онохов Леонид', 'ava': 'https://pp.userapi.com/c638519/v638519006/470ac/4u1QqN5pxq0.jpg', 'id': 13814006}, {'name': 'Гимадиева Анастасия', 'ava': 'https://pp.userapi.com/c836626/v836626488/56b4f/r3PQqcw4HGI.jpg', 'id': 14302219}, {'name': 'Яковлев Евгений', 'ava': 'https://pp.userapi.com/c627329/v627329333/3ddd5/H0xg0lBnnyE.jpg', 'id': 15157333}, {'name': 'Тюменцев Сергей', 'ava': 'https://pp.userapi.com/c638023/v638023989/7fc0/sxMgt21hJfI.jpg', 'id': 16192989}, {'name': 'Жидков Андрей', 'ava': 'https://pp.userapi.com/c836528/v836528741/6384e/urrl1LjHPBg.jpg', 'id': 22455024}, {'name': 'Филимонов Николай', 'ava': 'https://pp.userapi.com/c638130/v638130967/84963/C4dGaO1hgyw.jpg', 'id': 55065023}, {'name': 'Данилова Наталья', 'ava': 'https://pp.userapi.com/c626129/v626129799/647e4/dZ8tcUGI3Wg.jpg', 'id': 66176799}, {'name': 'Хохлова Наталья', 'ava': 'https://pp.userapi.com/c636927/v636927186/4b95b/SbTm_nYtgVc.jpg', 'id': 84988186}, {'name': 'Коротун Юрий', 'ava': 'https://sun9-11.userapi.com/c836621/v836621785/496da/goZxFea-TTM.jpg', 'id': 98580785}, {'name': 'Щеглова Светлана', 'ava': 'https://pp.userapi.com/c836528/v836528930/606e5/pMWt3-29tn4.jpg', 'id': 223589794}, {'name': 'Kuandykov Bahtiyar', 'ava': 'https://pp.userapi.com/c837630/v837630842/26250/yYgRGN3AsfU.jpg', 'id': 245370842}, {'name': 'Мякишев Виктор', 'ava': 'https://pp.userapi.com/c837633/v837633914/2ddec/wdQO_k6k7CM.jpg', 'id': 276038914}, {'name': 'Гайнулина Милена', 'ava': 'https://pp.userapi.com/c837538/v837538106/70ffa/fc9tcQvBUtk.jpg', 'id': 321006083}, {'name': 'Дегтярёва Анастасия', 'ava': 'https://pp.userapi.com/c836128/v836128459/431ef/4xuROtm2JF0.jpg', 'id': 323649459}]
        },
        {name:'Уварово',n:2,
        users:[{'name': 'Юрасова Наталия', 'ava': 'https://pp.userapi.com/c638923/v638923305/5e0d0/3op036aq1W8.jpg', 'id': 20860096}, {'name': 'Гунин Александр', 'ava': 'https://pp.userapi.com/c9602/u56560351/e_76f17f41.jpg', 'id': 56560351}]
        },
        {name:'Уват',n:1,
        users:[{'name': 'Мальцев Алексей', 'ava': 'https://pp.userapi.com/c302511/u167657506/e_5ee15b6f.jpg', 'id': 167657506}]
        },
        {name:'Углич',n:2,
        users:[{'name': 'Фома Саша', 'ava': 'https://pp.userapi.com/c638629/v638629191/5ca1f/SO_6wttAbiA.jpg', 'id': 34812287}, {'name': 'Волкова Марьяна', 'ava': 'https://pp.userapi.com/c637125/v637125187/50339/WXbdN815T2M.jpg', 'id': 224246187}]
        },
        {name:'Удальцово',n:1,
        users:[{'name': 'Леппинд Игорь', 'ava': 'https://pp.userapi.com/c639527/v639527985/1fa72/jsteIF5vtj0.jpg', 'id': 150757985}]
        },
        {name:'Улан-Удэ',n:4,
        users:[{'name': 'Измайлов Александр', 'ava': 'https://pp.userapi.com/c639116/v639116577/ba55/EoTQbPG02AU.jpg', 'id': 10378577}, {'name': 'Мальцев Павел', 'ava': 'https://pp.userapi.com/c837522/v837522718/46814/Z2QjZJ4OX94.jpg', 'id': 21258718}, {'name': 'Санжижапова Юлия', 'ava': 'https://pp.userapi.com/c837721/v837721867/4d2c4/J73MDHA5ZK0.jpg', 'id': 68563867}, {'name': 'Тирская Юля', 'ava': 'https://pp.userapi.com/c637427/v637427905/5c357/M4G_Oh2bhH8.jpg', 'id': 113877922}]
        },
        {name:'Ульяновск',n:11,
        users:[{'name': 'Алексеев Антон', 'ava': 'https://pp.userapi.com/c638727/v638727335/37f75/t0ZM_jfZYYA.jpg', 'id': 13434335}, {'name': 'Каменская Виктория', 'ava': 'https://pp.userapi.com/c638125/v638125848/1d07c/BdoI9xQYfPE.jpg', 'id': 15248848}, {'name': 'Колотик-Каменева Олеся', 'ava': 'https://pp.userapi.com/c408118/v408118707/9d9b/EKLuM1gUVmo.jpg', 'id': 24508707}, {'name': 'Афанасьева Алёна', 'ava': 'https://pp.userapi.com/c638123/v638123484/4a457/RQDOY7Xs75g.jpg', 'id': 25514711}, {'name': 'Якушев Андрей', 'ava': 'https://pp.userapi.com/c639530/v639530863/13630/RK3bbn-03FY.jpg', 'id': 61804863}, {'name': 'Родионов Степан', 'ava': 'https://pp.userapi.com/c837631/v837631146/17e83/5kLxCn19oWM.jpg', 'id': 63913146}, {'name': 'Приголовкин Василий', 'ava': 'https://pp.userapi.com/c638426/v638426830/34e19/ljVE7FAz1Zo.jpg', 'id': 219227830}, {'name': 'Сидоров Вячеслав', 'ava': 'https://pp.userapi.com/c636722/v636722949/3947e/w-i_xmFIqqE.jpg', 'id': 248482949}, {'name': 'Панова Ольга', 'ava': 'https://pp.userapi.com/c638630/v638630462/5b5c3/poc6xy8Mlr4.jpg', 'id': 265267462}, {'name': 'Михайловна Анна', 'ava': 'https://pp.userapi.com/c638530/v638530762/5eca6/0t11wDjEnzg.jpg', 'id': 276515448}, {'name': 'Колотик Лена', 'ava': 'https://pp.userapi.com/c631228/v631228994/27508/8KLu7cdn4qw.jpg', 'id': 331011994}]
        },
        {name:'Уральск',n:3,
        users:[{'name': 'Мясников Александр', 'ava': 'https://pp.userapi.com/c836432/v836432303/6096c/wUGvqYm5h1M.jpg', 'id': 23110293}, {'name': 'Беркалиев Рустам', 'ava': 'https://pp.userapi.com/c631721/v631721219/4b3c3/PoiEwaBPtZc.jpg', 'id': 30120219}, {'name': 'Таумова Алия', 'ava': 'https://pp.userapi.com/c639221/v639221764/39eb2/PvlukdAofUc.jpg', 'id': 283172764}]
        },
        {name:'Уржум',n:1,
        users:[{'name': 'Данилов Игорь', 'ava': 'https://pp.userapi.com/c630019/v630019215/3b4bb/_3DKVnYTGLE.jpg', 'id': 69519215}]
        },
        {name:'Урюпинск',n:1,
        users:[{'name': 'Зюзин Рома', 'ava': 'https://pp.userapi.com/c627223/v627223882/22335/AA7B0LCo870.jpg', 'id': 2662882}]
        },
        {name:'Уссурийск',n:2,
        users:[{'name': 'Скобеев Роман', 'ava': 'https://pp.userapi.com/c312617/v312617242/a0fa/FzbLVw4_XD8.jpg', 'id': 17930242}, {'name': 'Плеханов Денис', 'ava': 'https://pp.userapi.com/c836323/v836323246/a1d5/ETZgjQ37sqI.jpg', 'id': 44364246}]
        },
        {name:'Усть-Тарка',n:1,
        users:[{'name': 'Казанцева Алёна', 'ava': 'https://pp.userapi.com/c636417/v636417249/5b086/61yzlz-cXNQ.jpg', 'id': 78010249}]
        },
        {name:'Уфа',n:24,
        users:[{'name': 'Газиев Рафаэль', 'ava': 'https://pp.userapi.com/c629529/v629529262/3118e/QB3UcOHX2cU.jpg', 'id': 413262}, {'name': 'Фахретдинова Диана', 'ava': 'https://pp.userapi.com/c637424/v637424334/540b9/6LAn8kF9b9w.jpg', 'id': 548334}, {'name': 'Фаткуллин Ринат', 'ava': 'https://pp.userapi.com/c604726/v604726928/2a23f/blFVlBIQWUE.jpg', 'id': 9435928}, {'name': 'Нафиков Ильдар', 'ava': 'https://pp.userapi.com/c461/v461838/12/qXdmRnO8Of4.jpg', 'id': 9813838}, {'name': 'Киселева Надежда', 'ava': 'https://pp.userapi.com/c836522/v836522546/48284/_e7PQ2qsT60.jpg', 'id': 32283546}, {'name': 'Володина Наталья', 'ava': 'https://pp.userapi.com/c841023/v841023823/139c7/vzWXR0rd-4U.jpg', 'id': 34822990}, {'name': 'Фазылова Дилара', 'ava': 'https://pp.userapi.com/c837635/v837635338/43ae8/0w2m3MmQeIw.jpg', 'id': 42648338}, {'name': 'Дельмухаметова Индира', 'ava': 'https://pp.userapi.com/c626631/v626631312/60a34/-_QQHdxldeQ.jpg', 'id': 58249312}, {'name': 'Исхакова Эвелина', 'ava': 'https://pp.userapi.com/c840336/v840336938/1edd/VPeb1SEVmyQ.jpg', 'id': 124939421}, {'name': 'Дворецких Иван', 'ava': 'https://pp.userapi.com/c639724/v639724406/5849b/ObIGKRo9K_U.jpg', 'id': 134026566}, {'name': 'Сайфуллин Марат', 'ava': 'https://pp.userapi.com/c841137/v841137219/ec8/prrs7dIJ-Q0.jpg', 'id': 135494219}, {'name': 'Рашитова Алина', 'ava': 'https://pp.userapi.com/c837326/v837326681/42d73/n7s2glxPH9I.jpg', 'id': 136943681}, {'name': 'Жоглик Ольга', 'ava': 'https://pp.userapi.com/c837525/v837525516/5f883/igyO5viSok0.jpg', 'id': 139099001}, {'name': 'Нуриев Нурлан', 'ava': 'https://pp.userapi.com/c840433/v840433136/6d9e/RhIMHTNyVtg.jpg', 'id': 146275475}, {'name': 'Исенбаева Надежда', 'ava': 'https://pp.userapi.com/c837537/v837537337/41325/eILI59uq1rI.jpg', 'id': 148938337}, {'name': 'Махмутов Вильдан', 'ava': 'https://pp.userapi.com/c841228/v841228431/1900f/Gsn_j2L0XIk.jpg', 'id': 151151232}, {'name': 'Саттарова Гузель', 'ava': 'https://pp.userapi.com/c639719/v639719311/4ad0c/XaNjvnKKEzc.jpg', 'id': 156906657}, {'name': 'Родионов Александр', 'ava': 'https://pp.userapi.com/c631326/v631326742/5039a/OZ8zHqdsUVo.jpg', 'id': 223318742}, {'name': 'Хусаинов Артур', 'ava': 'https://pp.userapi.com/c837438/v837438703/48cb0/j6bPMFxvZys.jpg', 'id': 228832193}, {'name': 'Ахметсафина Карина', 'ava': 'https://pp.userapi.com/c837628/v837628815/5e483/HB12wT291qQ.jpg', 'id': 252361381}, {'name': 'Маратович Батыр', 'ava': 'https://pp.userapi.com/c637728/v637728451/6fa53/kWSSinYr7pY.jpg', 'id': 263099609}, {'name': 'Ахметов Флорид', 'ava': 'https://pp.userapi.com/c841628/v841628760/f234/OztHmGC6GqI.jpg', 'id': 287894886}, {'name': 'Лахов Дмитрий', 'ava': 'https://pp.userapi.com/c841129/v841129918/f33/yXo08tBigyc.jpg', 'id': 320813918}, {'name': 'Файрузов Расим', 'ava': 'https://pp.userapi.com/c636329/v636329419/3e480/Q_ebJPUO-vI.jpg', 'id': 364770419}]
        },
        {name:'Ухта',n:1,
        users:[{'name': 'Ванеев Денис', 'ava': 'https://pp.userapi.com/c639831/v639831822/4c327/J2L1bmXlUMQ.jpg', 'id': 54791405}]
        },
        {name:'Феодосия',n:1,
        users:[{'name': 'Михайлова Юлия', 'ava': 'https://pp.userapi.com/c639722/v639722561/1ab0b/34UaIFi_od8.jpg', 'id': 83667561}]
        },
        {name:'Фрязино',n:2,
        users:[{'name': 'Сахаров Роман', 'ava': 'https://pp.userapi.com/c613429/v613429502/9ce9/1haauAAOoPc.jpg', 'id': 31447502}, {'name': 'Буров Михаил', 'ava': 'https://pp.userapi.com/c638318/v638318163/151f3/_1IkDNfsF28.jpg', 'id': 222869163}]
        },
        {name:'Хабаровск',n:6,
        users:[{'name': 'Цветников Владимир', 'ava': 'https://pp.userapi.com/c841428/v841428505/1683d/vtfVTiUY9BI.jpg', 'id': 4920503}, {'name': 'Пасечник Андрей', 'ava': 'https://pp.userapi.com/c616922/v616922742/192b5/rh20Lgt2nuk.jpg', 'id': 7207742}, {'name': 'Бурдуковский Алексей', 'ava': 'https://pp.userapi.com/c639528/v639528022/422f3/l2TbbrYZRlI.jpg', 'id': 13346801}, {'name': 'Мезенцев Ульян', 'ava': 'https://pp.userapi.com/c625318/v625318216/30c6/Xjqvo9qQILk.jpg', 'id': 186190216}, {'name': 'Байрамова Настя', 'ava': 'https://pp.userapi.com/c638818/v638818498/5c750/AZecEzpNQFM.jpg', 'id': 229639752}, {'name': 'Боровик Сергей', 'ava': 'https://pp.userapi.com/c636225/v636225819/cebf/3CRj86WPOTg.jpg', 'id': 230719819}]
        },
        {name:'Харьков',n:12,
        users:[{'name': 'Stepanian Arthur', 'ava': 'https://sun9-11.userapi.com/c836537/v836537351/32de6/huYeevoSsh4.jpg', 'id': 4917351}, {'name': 'Манохин Андрей', 'ava': 'https://sun9-11.userapi.com/c840636/v840636653/9dec/mPbpZBGMBxE.jpg', 'id': 7801214}, {'name': 'Рязанова Анастасия', 'ava': 'https://pp.userapi.com/c637525/v637525126/e787/wtMLMWpGGMs.jpg', 'id': 10127126}, {'name': 'Гришин Максим', 'ava': 'https://pp.userapi.com/c836220/v836220307/32bde/ZvJRTWvz2Uc.jpg', 'id': 13535307}, {'name': 'Ковалёв Владимир', 'ava': 'https://pp.userapi.com/c840734/v840734261/1e05/qliWqja0a4U.jpg', 'id': 25740245}, {'name': 'Лысенко Максим', 'ava': 'https://pp.userapi.com/c637531/v637531184/5e076/NEJPUTEeKiA.jpg', 'id': 26648698}, {'name': 'Пресцкорник Серёжа', 'ava': 'https://pp.userapi.com/c841636/v841636630/132/2CGIHf0uc0w.jpg', 'id': 50380630}, {'name': 'Вавенко Жека', 'ava': 'https://pp.userapi.com/c636316/v636316494/6ecef/-gg5Q8SbLW0.jpg', 'id': 133737494}, {'name': 'Дерябин Евгений', 'ava': 'https://pp.userapi.com/c840327/v840327831/1e40/2HoDPm3CpI8.jpg', 'id': 169440946}, {'name': 'Кныш Ира', 'ava': 'https://pp.userapi.com/c639127/v639127509/40e96/V1TbP6DNQTs.jpg', 'id': 227546935}, {'name': 'Бурма Нестор', 'ava': 'https://pp.userapi.com/c639224/v639224214/3f19d/6dA-fYQv6JM.jpg', 'id': 306467025}, {'name': 'Кравченко Николай', 'ava': 'https://pp.userapi.com/c637826/v637826441/163b/_D6HPGxirWw.jpg', 'id': 314333441}]
        },
        {name:'Херсон',n:1,
        users:[{'name': 'Бодняк Олена', 'ava': 'https://pp.userapi.com/c638528/v638528366/46dde/lG8AkBHo2EM.jpg', 'id': 123126366}]
        },
        {name:'Химки',n:1,
        users:[{'name': 'Костенко Мария', 'ava': 'https://pp.userapi.com/c639424/v639424246/3c5aa/seaXuf7fCrQ.jpg', 'id': 24840024}]
        },
        {name:'Хойники',n:1,
        users:[{'name': 'Дедицкий Дмитрий', 'ava': 'https://pp.userapi.com/c627730/v627730347/9074/y5EEqj-8ThE.jpg', 'id': 78955347}]
        },
        {name:'Чайковский',n:3,
        users:[{'name': 'Наборщиков Алексей', 'ava': 'https://pp.userapi.com/c604531/v604531917/332fd/H7C-h47wGLw.jpg', 'id': 5913917}, {'name': 'Кетов Данил', 'ava': 'https://pp.userapi.com/c408318/v408318425/89d0/GWndzsq9BiM.jpg', 'id': 71199425}, {'name': 'Леонид Тихомиров', 'ava': 'https://pp.userapi.com/c639723/v639723378/98f2/13BDek5V5nQ.jpg', 'id': 329845378}]
        },
        {name:'Чебаркуль',n:1,
        users:[{'name': 'Столбова Наталья', 'ava': 'https://pp.userapi.com/c638326/v638326970/7a0c6/TRH9dM-YIy8.jpg', 'id': 37403931}]
        },
        {name:'Чебоксары',n:10,
        users:[{'name': 'Аникина Елена', 'ava': 'https://pp.userapi.com/c630625/v630625485/3fe0b/WCisM2he6pE.jpg', 'id': 11028485}, {'name': 'Мясников Евгений', 'ava': 'https://pp.userapi.com/c626730/v626730523/27a7c/FC-ImxvmPQU.jpg', 'id': 12111523}, {'name': 'Едифанов Юрий', 'ava': 'https://pp.userapi.com/c841526/v841526505/9b6b/RX1Kk1awOzg.jpg', 'id': 17479505}, {'name': 'Сергеев Андрей', 'ava': 'https://pp.userapi.com/c637124/v637124057/4eddb/wBrOQF8gVw4.jpg', 'id': 21808057}, {'name': 'Борисова Татьяна', 'ava': 'https://pp.userapi.com/c841429/v841429850/1ca5e/5DfcG5glBWg.jpg', 'id': 47078399}, {'name': 'Матвеев Денис', 'ava': 'https://sun9-11.userapi.com/c639622/v639622941/37001/HIwTXcqF64M.jpg', 'id': 56905249}, {'name': 'Трофимова Даша', 'ava': 'https://pp.userapi.com/c840231/v840231407/23fd4/cxcqX12eK6s.jpg', 'id': 157814656}, {'name': 'Перлов Алексей', 'ava': 'https://pp.userapi.com/c310816/v310816865/692b/MZqORWJWoL4.jpg', 'id': 183865865}, {'name': 'Козлова Катя', 'ava': 'https://pp.userapi.com/c639417/v639417276/10c9c/TLa0uMDriSI.jpg', 'id': 191573276}, {'name': 'Петров Лев', 'ava': 'https://pp.userapi.com/c625119/v625119011/2dca1/ytu04I1a9zE.jpg', 'id': 268078011}]
        },
        {name:'Челябинск',n:41,
        users:[{'name': 'Сажин Евгений', 'ava': 'https://pp.userapi.com/c840028/v840028728/23cde/lx0UG-nlL8w.jpg', 'id': 619131}, {'name': 'Шумилов Владимир', 'ava': 'https://pp.userapi.com/c624328/v624328682/4c07a/aKYMSB9UdA0.jpg', 'id': 3378682}, {'name': 'Кожухова Ирина', 'ava': 'https://pp.userapi.com/c5490/u4056115/e_8f049e8c.jpg', 'id': 4056115}, {'name': 'Зуев Сергей', 'ava': 'https://pp.userapi.com/c638818/v638818734/52933/KmwQaiti1cs.jpg', 'id': 6150196}, {'name': 'Конюхова Гульнара', 'ava': 'https://pp.userapi.com/c637326/v637326572/2622a/EGk3r6Ixqqg.jpg', 'id': 7270572}, {'name': 'Смеян Катрин', 'ava': 'https://pp.userapi.com/c639123/v639123827/1beaf/cnJRHPFWkYA.jpg', 'id': 8324827}, {'name': 'Холодилина Наталья', 'ava': 'https://pp.userapi.com/c626730/v626730506/37858/xPTS6aW1k0E.jpg', 'id': 9241506}, {'name': 'Зиатдинов Марат', 'ava': 'https://sun9-11.userapi.com/c840530/v840530991/7e7a/Ftdzy3SDOpA.jpg', 'id': 9588401}, {'name': 'Котов Виктор', 'ava': 'https://pp.userapi.com/c302801/u14952813/e_0101424b.jpg', 'id': 14952813}, {'name': 'Гайнуллина Лиана', 'ava': 'https://pp.userapi.com/c840136/v840136901/17e43/yeHIPnZRZww.jpg', 'id': 16520721}, {'name': 'Кашкарова Яна', 'ava': 'https://sun9-11.userapi.com/c840726/v840726091/88f1/o66Jrlku1TM.jpg', 'id': 17828431}, {'name': 'Кочеткова Анастасия', 'ava': 'https://pp.userapi.com/c638919/v638919463/54c9a/pEnmM3bA96I.jpg', 'id': 17902358}, {'name': 'Крыванов Данила', 'ava': 'https://pp.userapi.com/c836322/v836322665/1fe71/MXl-jwx7ZU4.jpg', 'id': 22345665}, {'name': 'Честюнин Андрей', 'ava': 'https://pp.userapi.com/c638527/v638527210/59f32/Rh58JIfqhbU.jpg', 'id': 22608638}, {'name': 'Ворухайло Дмитрий', 'ava': 'https://pp.userapi.com/c638730/v638730833/45dc9/zWP1p0aMqUQ.jpg', 'id': 22684833}, {'name': 'Абрамов Антоха', 'ava': 'https://pp.userapi.com/c618330/v618330869/1c75f/qlQbilHgMvA.jpg', 'id': 23256869}, {'name': 'Быкова Ирина', 'ava': 'https://pp.userapi.com/c623119/v623119480/343b5/7DF3h1lb23Q.jpg', 'id': 26049480}, {'name': 'Мезенцев Валерий', 'ava': 'https://pp.userapi.com/c836236/v836236669/89993/LyC4ObeC7qo.jpg', 'id': 26723228}, {'name': 'Устюгов Сергей', 'ava': 'https://pp.userapi.com/c837620/v837620162/4aa07/8mkf59pCAPw.jpg', 'id': 28558740}, {'name': 'Петрова Марина', 'ava': 'https://pp.userapi.com/c639917/v639917793/482f5/FxXTuW3MINA.jpg', 'id': 28710230}, {'name': 'Мартакова Ирина', 'ava': 'https://pp.userapi.com/c836529/v836529643/83ab4/JhXRmI1BDfc.jpg', 'id': 29574744}, {'name': 'Ефремов Игорь', 'ava': 'https://pp.userapi.com/c836430/v836430096/557d0/m1dNhrlQrns.jpg', 'id': 56252745}, {'name': 'Юлдыбаева Лариса', 'ava': 'https://pp.userapi.com/c836127/v836127552/5a3f7/KY7fngM6KJA.jpg', 'id': 63608351}, {'name': 'Ростовская Алина', 'ava': 'https://pp.userapi.com/c637529/v637529242/36d7/KiWsMpPEtqo.jpg', 'id': 81264242}, {'name': 'Валиханов Роман', 'ava': 'https://pp.userapi.com/c840424/v840424314/8ba4/bCiFP0LfBtk.jpg', 'id': 88334799}, {'name': 'Приходько Владимир', 'ava': 'https://pp.userapi.com/c841633/v841633023/c0a/-zkF-bwZYmI.jpg', 'id': 90211023}, {'name': 'Карелин Алексей', 'ava': 'https://pp.userapi.com/c618718/v618718251/1c9cb/BxhRkNNfPFU.jpg', 'id': 98168251}, {'name': 'Юзеев Николай', 'ava': 'https://pp.userapi.com/c637526/v637526871/5b9d5/NhAVPWNS59w.jpg', 'id': 119581871}, {'name': 'Спирин Максим', 'ava': 'https://pp.userapi.com/c837736/v837736604/3aa91/ybzcRNrrlQ4.jpg', 'id': 119694604}, {'name': 'Власенко Валерия', 'ava': 'https://pp.userapi.com/c626319/v626319223/5e1e1/_DN_vlm8mrU.jpg', 'id': 142079244}, {'name': 'Сажаев Алексей', 'ava': 'https://pp.userapi.com/c836324/v836324541/5e3fe/IEd697VClqI.jpg', 'id': 159021229}, {'name': 'Закирова Юлия', 'ava': 'https://pp.userapi.com/c841026/v841026603/1cfb0/WKN7125ogmY.jpg', 'id': 183847762}, {'name': 'Потапушкин Алексей', 'ava': 'https://pp.userapi.com/c841037/v841037811/16980/hiiIkVCRcnw.jpg', 'id': 220716036}, {'name': 'Плотников Иван', 'ava': 'https://pp.userapi.com/c836331/v836331086/64f78/5UBvaslIvWk.jpg', 'id': 243791744}, {'name': 'Александрович Евгений', 'ava': 'https://pp.userapi.com/c622931/v622931485/34034/E2Pa6bw8Qg4.jpg', 'id': 304292485}, {'name': 'Makhmuzov Kayum', 'ava': 'https://pp.userapi.com/c836334/v836334557/27af0/aHPjE2ffdtI.jpg', 'id': 315609557}, {'name': 'Бушминкин Алексей', 'ava': 'https://vk.com/images/camera_50.png', 'id': 324036998}, {'name': 'Румянцева Эллина', 'ava': 'https://pp.userapi.com/c841031/v841031972/7a1c/w9u5UfyIGq0.jpg', 'id': 332837972}, {'name': 'Галямова Наталия', 'ava': 'https://pp.userapi.com/c638729/v638729945/51753/8x81bWZweoc.jpg', 'id': 336838296}, {'name': 'Назимова Настасья', 'ava': 'https://pp.userapi.com/c841533/v841533135/19c68/C_nx9Q1vyKI.jpg', 'id': 404728293}, {'name': 'Терентьева Ольга', 'ava': 'https://pp.userapi.com/c638128/v638128848/591ac/R-nr9-oq2R8.jpg', 'id': 405265227}]
        },
        {name:'Череповец',n:11,
        users:[{'name': 'Дубовик Виталий', 'ava': 'https://pp.userapi.com/c302111/v302111738/90d4/4z7tu-sSM74.jpg', 'id': 3129738}, {'name': 'Садырин Святослав', 'ava': 'https://pp.userapi.com/c636530/v636530168/3a6a5/seXzgkj-iD4.jpg', 'id': 7048168}, {'name': 'Виноградов Александр', 'ava': 'https://pp.userapi.com/c630624/v630624959/2e758/defL2eFraI0.jpg', 'id': 23975959}, {'name': 'Тихоненкова Оксана', 'ava': 'https://pp.userapi.com/c638327/v638327380/641ba/_sFx-886row.jpg', 'id': 35319141}, {'name': 'Конобеев Олег', 'ava': 'https://pp.userapi.com/c638016/v638016749/44c9/ky3fZwmvN4c.jpg', 'id': 38180749}, {'name': 'Погодина Катя', 'ava': 'https://pp.userapi.com/c638620/v638620399/6052f/G_Av3XPxUaE.jpg', 'id': 47653324}, {'name': 'Виноградова Наталия', 'ava': 'https://pp.userapi.com/c836128/v836128620/645a5/t_3lzoMYik4.jpg', 'id': 115268577}, {'name': 'Аня Рыбка', 'ava': 'https://pp.userapi.com/c636125/v636125279/14429/t91wXvrqq50.jpg', 'id': 157792279}, {'name': 'Егоренков Максим', 'ava': 'https://pp.userapi.com/c639421/v639421026/9f0a/g6nno9YcZrw.jpg', 'id': 184316026}, {'name': 'Кузнецов Николай', 'ava': 'https://pp.userapi.com/c638331/v638331581/13359/sCi2yVEsGQA.jpg', 'id': 205493581}, {'name': 'Смирнов Александр', 'ava': 'https://pp.userapi.com/c631230/v631230521/46ab6/zX-YfytLT0s.jpg', 'id': 210662521}]
        },
        {name:'Черкассы',n:1,
        users:[{'name': 'Ващишина Оля', 'ava': 'https://pp.userapi.com/c639218/v639218879/e4a3/MW1_bXI6prQ.jpg', 'id': 181227879}]
        },
        {name:'Чернигов',n:2,
        users:[{'name': 'Булах Виктория', 'ava': 'https://pp.userapi.com/c626229/v626229149/516ec/wJqQaMiX06U.jpg', 'id': 181670149}, {'name': 'Шаповал Олег', 'ava': 'https://pp.userapi.com/c638225/v638225347/d023/PlPw3WflwVg.jpg', 'id': 400050347}]
        },
        {name:'Черновцы',n:2,
        users:[{'name': 'Головач Рома', 'ava': 'https://pp.userapi.com/c629130/v629130134/5697/AWYLnalu-uU.jpg', 'id': 47362134}, {'name': 'Сизоненко Віктор', 'ava': 'https://pp.userapi.com/c836235/v836235541/3e2fa/wQMEGLi5RRw.jpg', 'id': 277133541}]
        },
        {name:'Черноморское',n:1,
        users:[{'name': 'Ястремский Роман', 'ava': 'https://pp.userapi.com/c10574/u60138583/e_2f9bc38d.jpg', 'id': 60138583}]
        },
        {name:'Чернушка',n:1,
        users:[{'name': 'Казанцев Владислав', 'ava': 'https://pp.userapi.com/c837525/v837525348/5fda3/njyT00HWrlU.jpg', 'id': 140427551}]
        },
        {name:'Чехов',n:2,
        users:[{'name': 'Загруев Михаил', 'ava': 'https://pp.userapi.com/c406227/v406227210/7f28/6-kJvwUi37M.jpg', 'id': 6581210}, {'name': 'Стрижова Лариса', 'ava': 'https://pp.userapi.com/c638331/v638331475/54be1/1VocDPBDf8s.jpg', 'id': 39724329}]
        },
        {name:'Чик',n:1,
        users:[{'name': 'Капинос Евгений', 'ava': 'https://pp.userapi.com/c637524/v637524171/3f8f6/y4V1IT6KMMo.jpg', 'id': 290491171}]
        },
        {name:'Чита',n:8,
        users:[{'name': 'Брюханов Андрей', 'ava': 'https://pp.userapi.com/c836324/v836324368/65545/cVCdBUpuJ7Y.jpg', 'id': 84721963}, {'name': 'Гайко Леонид', 'ava': 'https://pp.userapi.com/c638018/v638018935/581a1/Ay4-BAI-vgM.jpg', 'id': 144831059}, {'name': 'Петрулина Надежда', 'ava': 'https://pp.userapi.com/c840139/v840139594/27649/MynajCrIk6w.jpg', 'id': 203634310}, {'name': 'Карбушев Михаил', 'ava': 'https://pp.userapi.com/c625619/v625619405/13049/o81jP5kN9R4.jpg', 'id': 207296405}, {'name': 'Горбунов Виталька', 'ava': 'https://pp.userapi.com/c639125/v639125793/51845/-TNj1HbFPNg.jpg', 'id': 293624888}, {'name': 'Аксентьев Александр', 'ava': 'https://pp.userapi.com/c636922/v636922956/4279d/TjAkp2hTQRA.jpg', 'id': 296005956}, {'name': 'Кужелев Дмитрий', 'ava': 'https://pp.userapi.com/c639830/v639830971/4e4e4/8qGz_naiwgw.jpg', 'id': 324755951}, {'name': 'Savotenkov Artyom', 'ava': 'https://pp.userapi.com/c628621/v628621679/2716c/dKvfPynEFOo.jpg', 'id': 324989679}]
        },
        {name:'Шадринск',n:1,
        users:[{'name': 'Glushkov Kolyan', 'ava': 'https://pp.userapi.com/c841230/v841230109/17e69/ms1MgtkYxII.jpg', 'id': 401527452}]
        },
        {name:'Шатура',n:2,
        users:[{'name': 'Щипанова Мария', 'ava': 'https://pp.userapi.com/c604518/v604518152/3dcae/WEKD7G3x1n8.jpg', 'id': 8293152}, {'name': 'Мишакин Иван', 'ava': 'https://pp.userapi.com/c637329/v637329215/5119d/VDWW32C3hIc.jpg', 'id': 58274215}]
        },
        {name:'Шебекино',n:1,
        users:[{'name': 'Сидоренко Владимир', 'ava': 'https://pp.userapi.com/c837426/v837426943/43705/4Czgvl1x7PM.jpg', 'id': 232660372}]
        },
        {name:'Шексна',n:1,
        users:[{'name': 'Емельянова Наталья', 'ava': 'https://pp.userapi.com/c627131/v627131114/3cb92/iJjW_al-j6w.jpg', 'id': 3984114}]
        },
        {name:'Шелехов',n:1,
        users:[{'name': 'Шабанов Виктор', 'ava': 'https://pp.userapi.com/c837525/v837525055/70ca1/jg8yVdbGHYA.jpg', 'id': 31124878}]
        },
        {name:'Шугозеро',n:1,
        users:[{'name': 'Фомин Вадим', 'ava': 'https://pp.userapi.com/c622318/v622318193/369de/N0-8hQG8wY4.jpg', 'id': 2662193}]
        },
        {name:'Шумерля',n:2,
        users:[{'name': 'Назиров Владислав', 'ava': 'https://pp.userapi.com/c836732/v836732248/4a2a1/aK8l5qkrg20.jpg', 'id': 4588248}, {'name': 'Назирова Ольга', 'ava': 'https://pp.userapi.com/c836422/v836422389/53e8b/LYH7ywY4mis.jpg', 'id': 35176075}]
        },
        {name:'Шумиха',n:1,
        users:[{'name': 'Вековшинин Филипп', 'ava': 'https://pp.userapi.com/c836532/v836532140/453ba/WkjfNoEu0G4.jpg', 'id': 192679140}]
        },
        {name:'Шымкент',n:3,
        users:[{'name': 'Нехорошев Митяй', 'ava': 'https://pp.userapi.com/c638216/v638216878/2ecb6/PFcspL_A7Z4.jpg', 'id': 163804878}, {'name': 'Абдукаюмов Абдулазиз', 'ava': 'https://pp.userapi.com/c837525/v837525654/5e5c5/E9JsFNCpYHc.jpg', 'id': 338399180}, {'name': 'Кулмырза Серик', 'ava': 'https://pp.userapi.com/c638923/v638923263/4a42f/Pt-9V22cWZ0.jpg', 'id': 347112757}]
        },
        {name:'Щомыслица',n:1,
        users:[{'name': 'Карпович Лёша', 'ava': 'https://pp.userapi.com/c636928/v636928374/30797/eX7jtvhWGT0.jpg', 'id': 9324374}]
        },
        {name:'Щёлково',n:3,
        users:[{'name': 'Берников Евгений', 'ava': 'https://pp.userapi.com/c4175/u16043517/e_37e9a47c.jpg', 'id': 16043517}, {'name': 'Тарантинова Ольга', 'ava': 'https://pp.userapi.com/c622721/v622721821/43365/BPsdBHsxoZI.jpg', 'id': 18233821}, {'name': 'Дьякова Екатерина', 'ava': 'https://pp.userapi.com/c841531/v841531085/1387e/jCGJP7xY8Hk.jpg', 'id': 23065214}]
        },
        {name:'Экибастуз',n:1,
        users:[{'name': 'Дмитриев Тимур', 'ava': 'https://pp.userapi.com/c836622/v836622751/4bd1c/OA7GJxajgyE.jpg', 'id': 251288751}]
        },
        {name:'Электросталь',n:4,
        users:[{'name': 'Роговая Яна', 'ava': 'https://pp.userapi.com/c837122/v837122725/3a370/srHVafpFtuk.jpg', 'id': 3448725}, {'name': 'Эскендерова Дарья', 'ava': 'https://pp.userapi.com/c638831/v638831301/5a0ae/J4H6nqWCAzA.jpg', 'id': 19110491}, {'name': 'Виноградова Ольга', 'ava': 'https://pp.userapi.com/c639918/v639918492/3bee4/2QBNX9UFaxc.jpg', 'id': 33064196}, {'name': 'Мелихова Екатерина', 'ava': 'https://pp.userapi.com/c638529/v638529049/cb23/ccnbTsKhZf8.jpg', 'id': 162211049}]
        },
        {name:'Элиста',n:1,
        users:[{'name': 'Хаминова Анна', 'ava': 'https://pp.userapi.com/c604317/v604317962/1c15c/EzfFZ4E5sNU.jpg', 'id': 282677962}]
        },
        {name:'Эльбрус',n:1,
        users:[{'name': 'Паламарчук Ярослав', 'ava': 'https://pp.userapi.com/c837732/v837732552/6906c/7QyhPBT-4K0.jpg', 'id': 42278115}]
        },
        {name:'Энгельс',n:4,
        users:[{'name': 'Русских Сергей', 'ava': 'https://pp.userapi.com/c638128/v638128450/40c08/P84uix-_9p8.jpg', 'id': 19700450}, {'name': 'Лощинина Анна', 'ava': 'https://sun9-11.userapi.com/c840733/v840733448/55e/cRWzMj65zXI.jpg', 'id': 66951757}, {'name': 'Войщева Анастасия', 'ava': 'https://pp.userapi.com/c626420/v626420856/64441/xsiRYY2RGto.jpg', 'id': 193789856}, {'name': 'Левицкий Владислав', 'ava': 'https://pp.userapi.com/c841027/v841027899/8c5f/O-BKUJ40Esk.jpg', 'id': 227421899}]
        },
        {name:'Югорск',n:1,
        users:[{'name': 'Ravilevich Timyr', 'ava': 'https://vk.com/images/camera_50.png', 'id': 410258923}]
        },
        {name:'Южноуральск',n:1,
        users:[{'name': 'Дворянинова Людмила', 'ava': 'https://pp.userapi.com/c837421/v837421181/4b7b2/h-4zojeJQmk.jpg', 'id': 185634761}]
        },
        {name:'Юрга',n:1,
        users:[{'name': 'Заверуха Валерия', 'ava': 'https://pp.userapi.com/c841224/v841224844/1ce38/FshlWl0y0tA.jpg', 'id': 225721348}]
        },
        {name:'Якутск',n:7,
        users:[{'name': 'Григорьева Ульяна', 'ava': 'https://pp.userapi.com/c636424/v636424497/2cd64/YIU2t8w0G5Y.jpg', 'id': 24410497}, {'name': 'Аммосов Алексей', 'ava': 'https://pp.userapi.com/c626520/v626520633/50cf7/FkXAtgSW_kM.jpg', 'id': 52720633}, {'name': 'Титова Татьяна', 'ava': 'https://pp.userapi.com/c836129/v836129876/3238f/_guL1vZw9Uw.jpg', 'id': 88353876}, {'name': 'Потапова Саина', 'ava': 'https://pp.userapi.com/c627924/v627924487/24464/bVm3MmpeJ28.jpg', 'id': 89708487}, {'name': 'Киров Андрей', 'ava': 'https://pp.userapi.com/c621621/v621621199/223bb/FYcOHUTl4Zc.jpg', 'id': 118944199}, {'name': 'Макаров Прокопий', 'ava': 'https://vk.com/images/camera_50.png', 'id': 271904670}, {'name': 'Давыдова Диана', 'ava': 'https://pp.userapi.com/c639918/v639918013/3bc8b/CUsccEgPb10.jpg', 'id': 351422157}]
        },
        {name:'Ялта',n:1,
        users:[{'name': 'Виненчук Даша', 'ava': 'https://pp.userapi.com/c638420/v638420747/5a849/qgtyYjAIMjo.jpg', 'id': 90284361}]
        },
        {name:'Яр',n:1,
        users:[{'name': 'Сотников Николай', 'ava': 'https://pp.userapi.com/c637421/v637421774/59f53/7y5c5hifGUk.jpg', 'id': 66983270}]
        },
        {name:'Ярославль',n:3,
        users:[{'name': 'Овчинникова Татьянка', 'ava': 'https://pp.userapi.com/c840220/v840220659/2a39b/BsmEPkrwwTQ.jpg', 'id': 24421575}, {'name': 'Крюков Андрей', 'ava': 'https://pp.userapi.com/c636925/v636925152/5de26/B3bRPpe57Ow.jpg', 'id': 49610152}, {'name': 'Nosov Pavel', 'ava': 'https://pp.userapi.com/c314319/v314319613/42db/AZ-VjMORzO4.jpg', 'id': 52864613}]
        }                
    ]
}