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
        {name:'Bat Yam',n:1,
        users:[{'ava': 'https://pp.userapi.com/c623325/v623325749/4d583/NFYL73ljYy4.jpg', 'name': 'Харлашин Максим', 'id': 6648749}]
        },
        {name:'Boston',n:1,
        users:[{'ava': 'https://pp.userapi.com/c307510/v307510968/5866/mDdV459neGY.jpg', 'name': 'Kalinina Olga', 'id': 11698968}]
        },
        {name:'Formentera de Segura',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836721/v836721018/4c510/xzsRf7Ak4JU.jpg', 'name': 'Ерогина Ирина', 'id': 16276947}]
        },
        {name:'Gaborone',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c638924/v638924501/4b8f7/4nHG32_LTTI.jpg', 'name': 'Капитанов Олег', 'id': 2127981}]
        },
        {name:'Helsinki',n:2,
        users:[{'ava': 'https://pp.userapi.com/c316931/v316931311/6c46/ymOCBeVXobs.jpg', 'name': 'Беликов Павел', 'id': 2518311}, {'ava': 'https://pp.userapi.com/c841438/v841438096/6897/lsy9PG9iLBs.jpg', 'name': 'Иванов Алексей', 'id': 8210908}]
        },
        {name:'London',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837231/v837231877/4f6a8/bQqzW2tyzXE.jpg', 'name': 'Белякова Елена', 'id': 4041877}]
        },
        {name:'Luanda',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636426/v636426640/6c4fb/qqHijZ-NI4s.jpg', 'name': 'Кирьянов Максим', 'id': 17249640}]
        },
        {name:'Manchester',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840122/v840122338/148e6/n4mOnbMqp4g.jpg', 'name': 'Hippopotamus Krutoinagluho', 'id': 4770338}]
        },
        {name:'New York City',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639921/v639921800/39706/bkIoM3b-U-E.jpg', 'name': 'Занин Антон', 'id': 7349771}]
        },
        {name:'Saarbrücken',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604531/v604531029/1dc47/UPCFbCE1tkA.jpg', 'name': 'Алябьев Роман', 'id': 9067029}]
        },
        {name:'Wilhelmshaven',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837724/v837724860/3dc2b/nxLPG00yv4I.jpg', 'name': 'Проценко Татьяна', 'id': 319860}]
        },
        {name:'Würzburg',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c837333/v837333998/7865f/mKE-7Dtmmt4.jpg', 'name': 'Шуткина Анастасия', 'id': 9445625}]
        },
        {name:'Абакан',n:2,
        users:[{'ava': 'https://pp.userapi.com/c636625/v636625552/10f5b/vI4MUndQbbY.jpg', 'name': 'Балакирев Андрей', 'id': 2081552}, {'ava': 'https://pp.userapi.com/c626529/v626529154/10e5b/TikHWg2gVGU.jpg', 'name': 'Винник Елена', 'id': 17615154}]
        },
        {name:'Агинское',n:1,
        users:[{'ava': 'https://pp.userapi.com/c9809/u7192839/e_5cd86aa0.jpg', 'name': 'Батомункуев Батожаб', 'id': 7192839}]
        },
        {name:'Актобе',n:1,
        users:[{'ava': 'https://pp.userapi.com/c405920/v405920798/57de/LSoaEpZDLR8.jpg', 'name': 'Амиров Айдын', 'id': 10872798}]
        },
        {name:'Алексин',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626519/v626519753/4ac75/3aeguWgtJls.jpg', 'name': 'Серёгин Сергей', 'id': 21349753}]
        },
        {name:'Алеховщина',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841230/v841230932/1c126/SVSHIZa2wzk.jpg', 'name': 'Устинкина Ирина', 'id': 12703176}]
        },
        {name:'Алматы',n:3,
        users:[{'ava': 'https://pp.userapi.com/c410421/v410421264/a983/Ghwo6Fr1w-Y.jpg', 'name': 'Ainabekov Azat', 'id': 1104264}, {'ava': 'https://pp.userapi.com/c412530/v412530195/98d1/F2E0hGLYCPs.jpg', 'name': 'Бойко Алексей', 'id': 5186195}, {'ava': 'https://pp.userapi.com/c639117/v639117313/2adc1/wgrAE7GYhFI.jpg', 'name': 'Билерт Оля', 'id': 18495313}]
        },
        {name:'Алушта',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639222/v639222150/3931d/87BHR2MG_Ho.jpg', 'name': 'Лапшин Михаил', 'id': 5546954}]
        },
        {name:'Альметьевск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638220/v638220557/4f450/zGYCJvpfyn4.jpg', 'name': 'Мартынычев Андрей', 'id': 30481104}]
        },
        {name:'Анапа',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638018/v638018170/5ba16/lgXTiWHAeB8.jpg', 'name': 'Ткачук Артём', 'id': 253371}, {'ava': 'https://pp.userapi.com/c402821/v402821947/446e/MR8KQELOql8.jpg', 'name': 'Вершинин Николай', 'id': 26409947}]
        },
        {name:'Апатиты',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626429/v626429112/43b8c/yceg5OkalAk.jpg', 'name': 'Ретюнских Александра', 'id': 25299112}]
        },
        {name:'Архангельск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c639430/v639430227/206b6/QnRfQPMv4a8.jpg', 'name': 'Неманова Оксана', 'id': 6559227}, {'ava': 'https://pp.userapi.com/c638222/v638222335/c6ce/xPLxFPcC30E.jpg', 'name': 'Левкова Елена', 'id': 18852335}, {'ava': 'https://pp.userapi.com/c837120/v837120450/478c6/5hQR-I3Qlc8.jpg', 'name': 'Сметанин Артём', 'id': 19046075}]
        },
        {name:'Астрахань',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841527/v841527860/be74/g3TY_SoR9c4.jpg', 'name': 'Храмцовский Иван', 'id': 10694811}]
        },
        {name:'Бабаево',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637417/v637417778/569a5/4dMpf7HzXfc.jpg', 'name': 'Королева Юлия', 'id': 11369778}]
        },
        {name:'Балаково',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837138/v837138650/3abdc/mr4el_5OYUE.jpg', 'name': 'Зубаренков Андрей', 'id': 2140650}]
        },
        {name:'Балахна',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836231/v836231504/3eb4b/VIjwIO-QyI8.jpg', 'name': 'Антонов Санёк', 'id': 21542504}]
        },
        {name:'Балашиха',n:2,
        users:[{'ava': 'https://pp.userapi.com/c626925/v626925026/25a00/MAsHn3aLhFw.jpg', 'name': 'Яшин Сергей', 'id': 1516026}, {'ava': 'https://pp.userapi.com/c617716/v617716731/1e429/cihjwI4JHes.jpg', 'name': 'Рожнов Егор', 'id': 4451731}]
        },
        {name:'Балтийск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637226/v637226671/65c8b/XtorXtOkPsE.jpg', 'name': 'Волобуев Александр', 'id': 11126251}]
        },
        {name:'Барнаул',n:2,
        users:[{'ava': 'https://pp.userapi.com/c636926/v636926390/33fd0/1QmgujPw6C8.jpg', 'name': 'Абраменко Людмила', 'id': 10073390}, {'ava': 'https://pp.userapi.com/c836628/v836628724/2614c/bMk_T-1GlhU.jpg', 'name': 'Скляров Никита', 'id': 30253724}]
        },
        {name:'Белгород',n:8,
        users:[{'ava': 'https://sun9-11.userapi.com/c837626/v837626098/577f8/lyWS5DLzm-c.jpg', 'name': 'Пазюк Валерий', 'id': 1269438}, {'ava': 'https://pp.userapi.com/c837723/v837723897/63f46/1FFyw2oxV7s.jpg', 'name': 'Цыбульник Тарас', 'id': 1908920}, {'ava': 'https://pp.userapi.com/c619419/v619419173/14dd4/QgIxopvHMc4.jpg', 'name': 'Кудинов Алексей', 'id': 7397173}, {'ava': 'https://pp.userapi.com/c837729/v837729475/54c13/UUsJnaJ4Q1M.jpg', 'name': 'Гиривенко Виталий', 'id': 9473351}, {'ava': 'https://pp.userapi.com/c841220/v841220172/1532d/67b3BzA5rYY.jpg', 'name': 'Алферова Людмила', 'id': 11146133}, {'ava': 'https://pp.userapi.com/c639819/v639819860/431e0/cEocBaji_m0.jpg', 'name': 'Парполита Екатерина', 'id': 15907959}, {'ava': 'https://pp.userapi.com/c841033/v841033718/1a633/q6Wsj9LF41s.jpg', 'name': 'Долгих Еля', 'id': 18733352}, {'ava': 'https://pp.userapi.com/c837137/v837137664/fb5e/1NfxXSvyh_k.jpg', 'name': 'Нерубенко Александр', 'id': 21854664}]
        },
        {name:'Бердск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841526/v841526594/1ae0f/yKsQcBGzWfQ.jpg', 'name': 'Залевская Анна', 'id': 3525644}]
        },
        {name:'Березники',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837231/v837231174/42498/yfQ4a8yfilw.jpg', 'name': 'Куликова Наталья', 'id': 15205553}, {'ava': 'https://sun9-11.userapi.com/c841034/v841034651/9f2e/xEHfloy4q8w.jpg', 'name': 'Евшель Наталья', 'id': 26051651}]
        },
        {name:'Большие Колпаны',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836335/v836335556/5a261/k5MsjIPQFbw.jpg', 'name': 'Жданов Валерий', 'id': 27670728}]
        },
        {name:'Брест',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638830/v638830682/46bbe/XR1V4GR9DOw.jpg', 'name': 'Гапеев Алексей', 'id': 4391682}, {'ava': 'https://pp.userapi.com/c638931/v638931692/51906/2AyW_v2XY_I.jpg', 'name': 'Давидюк Денис', 'id': 4774692}]
        },
        {name:'Брехово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836732/v836732959/4be6f/N9MUwCJUZYE.jpg', 'name': 'Макарец Ирина', 'id': 14908341}]
        },
        {name:'Брянка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840423/v840423045/3091/FOwuUOjrZc8.jpg', 'name': 'Кохно Анна', 'id': 30143922}]
        },
        {name:'Брянск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638330/v638330439/57de6/8y8iCok6QXo.jpg', 'name': 'Кулешов Владимир', 'id': 8926678}, {'ava': 'https://pp.userapi.com/c638117/v638117464/27616/vkvBbMkPFA0.jpg', 'name': 'Владимиров Максим', 'id': 10615464}]
        },
        {name:'Вельск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841337/v841337093/fb50/kOyX6isMaqU.jpg', 'name': 'Золотых Максим', 'id': 11337376}]
        },
        {name:'Верхнедвинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636319/v636319854/5e9f8/5vWzmrmphL8.jpg', 'name': 'Томашевич Сергей', 'id': 20732854}]
        },
        {name:'Витебск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841539/v841539639/13d81/XOAE7rbfCRY.jpg', 'name': 'Будник Владимир', 'id': 14913072}]
        },
        {name:'Владивосток',n:4,
        users:[{'ava': 'https://pp.userapi.com/c837120/v837120627/3f3d/HE_GDINJ_lk.jpg', 'name': 'Белов Михаил', 'id': 270627}, {'ava': 'https://pp.userapi.com/c623625/v623625079/41f3e/H7f84ulaI8I.jpg', 'name': 'Смола Виктория', 'id': 1226079}, {'ava': 'https://pp.userapi.com/c837538/v837538860/56196/wJKKyscbRBE.jpg', 'name': 'Лукьянова Анна', 'id': 4260300}, {'ava': 'https://pp.userapi.com/c413325/v413325203/315b/MWgQu9J0Nng.jpg', 'name': 'Вечерковский Александр', 'id': 5048203}]
        },
        {name:'Владимир',n:3,
        users:[{'ava': 'https://pp.userapi.com/c840221/v840221676/1f123/Hu0X5C0pdF0.jpg', 'name': 'Ситова Екатерина', 'id': 3328967}, {'ava': 'https://pp.userapi.com/c626518/v626518900/36c82/2fGcCspVzqo.jpg', 'name': 'Игнатов Алексей', 'id': 17431900}, {'ava': 'https://pp.userapi.com/c837238/v837238435/53117/LNcmqP6TQzg.jpg', 'name': 'Дубина Анастасия', 'id': 22030020}]
        },
        {name:'Волгоград',n:4,
        users:[{'ava': 'https://pp.userapi.com/c840124/v840124298/17e49/N3D9sbWkI3c.jpg', 'name': 'Курал Алина', 'id': 3822917}, {'ava': 'https://pp.userapi.com/c638224/v638224500/5933a/6ewdeB6k1Iw.jpg', 'name': 'Зигангирова Рамиля', 'id': 27995483}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Richi Gay', 'id': 28910988}, {'ava': 'https://pp.userapi.com/c637123/v637123768/fff4/cqRdj5XSMkg.jpg', 'name': 'Бойков Антон', 'id': 30240768}]
        },
        {name:'Волжский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639624/v639624878/447c7/UryMz9k4--8.jpg', 'name': 'Серёжникова Юлия', 'id': 4321772}]
        },
        {name:'Вологда',n:4,
        users:[{'ava': 'https://pp.userapi.com/c837534/v837534426/52101/_T3EqZNnMi4.jpg', 'name': 'Синяков Дмитрий', 'id': 4889806}, {'ava': 'https://pp.userapi.com/c638231/v638231667/3cdcf/mgJi3pSgp00.jpg', 'name': 'Дьяков Иван', 'id': 6028667}, {'ava': 'https://pp.userapi.com/c836439/v836439699/4649d/vSe04ceDWEg.jpg', 'name': 'Смирнова Алина', 'id': 9671699}, {'ava': 'https://pp.userapi.com/c840429/v840429775/5838/A7RvkuTw4ao.jpg', 'name': 'Денисов Александр', 'id': 15142964}]
        },
        {name:'Волосово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c629128/v629128793/4b35/PXMHIrtiYag.jpg', 'name': 'Михайличенко Максим', 'id': 9344793}]
        },
        {name:'Воркута',n:1,
        users:[{'ava': 'https://pp.userapi.com/c622521/v622521791/3062d/AafB0wa-UMU.jpg', 'name': 'Митин Иван', 'id': 25122791}]
        },
        {name:'Воронеж',n:6,
        users:[{'ava': 'https://pp.userapi.com/c625827/v625827400/1b85b/SjDrfxINVnc.jpg', 'name': 'Курносов Максим', 'id': 1901400}, {'ava': 'https://pp.userapi.com/c836437/v836437821/10ee3/VjZ-C2TLFsw.jpg', 'name': 'Трофимов Николай', 'id': 3597821}, {'ava': 'https://pp.userapi.com/c311527/v311527523/50e/3egDNlR44zQ.jpg', 'name': 'Гаврилов Максим', 'id': 10294523}, {'ava': 'https://pp.userapi.com/c631317/v631317801/2d226/mymMnZpmNUI.jpg', 'name': 'Марасанов Владимир', 'id': 18518801}, {'ava': 'https://pp.userapi.com/c638417/v638417320/574ca/N3kO_ZQmPto.jpg', 'name': 'Махмудов Исрофил', 'id': 20257888}, {'ava': 'https://pp.userapi.com/c629111/v629111088/11693/pYkQ9qrEmN4.jpg', 'name': 'Петренко Влад', 'id': 28894088}]
        },
        {name:'Выборг',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638118/v638118062/543e8/V732SKFRPKE.jpg', 'name': 'Важенина Оксана', 'id': 5883692}]
        },
        {name:'Вязьма',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836433/v836433742/76540/tCmlxGaNTjk.jpg', 'name': 'Волков Алексей', 'id': 23643742}]
        },
        {name:'Гатчина',n:1,
        users:[{'ava': 'https://pp.userapi.com/c622818/v622818658/2a2ae/BkqtfMf7Uw8.jpg', 'name': 'Сапожникова Наталья', 'id': 27645658}]
        },
        {name:'Георгиевск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c6113/v6113379/9427/OkWFTPSfut4.jpg', 'name': 'Барканова Инна', 'id': 21670379}]
        },
        {name:'Гродно',n:1,
        users:[{'ava': 'https://pp.userapi.com/c624227/v624227923/55421/5J-a-StMJrM.jpg', 'name': 'Кунда Андрей', 'id': 12254923}]
        },
        {name:'Данилов',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638630/v638630719/3e8d0/R5HtLFRa7PM.jpg', 'name': 'Шарова Татьяна', 'id': 5472719}]
        },
        {name:'Дзержинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841439/v841439547/f1fc/Z_jH-VG0h7w.jpg', 'name': 'Герцун Анастасия', 'id': 1813476}]
        },
        {name:'Дмитров',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636824/v636824912/36558/zMxvuOKU-8o.jpg', 'name': 'Хрустова Мариша', 'id': 5047912}]
        },
        {name:'Домодедово',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638431/v638431538/671b8/FRyknJXwhGs.jpg', 'name': 'Ганзвинд Егорка', 'id': 3871560}, {'ava': 'https://pp.userapi.com/c626322/v626322143/577f5/Zkh7QWLFlYI.jpg', 'name': 'Alder Alex', 'id': 5232143}]
        },
        {name:'Донецк',n:3,
        users:[{'ava': 'https://pp.userapi.com/c840237/v840237017/1c97/eiPDVmJUEN8.jpg', 'name': 'Смоголь Виталий', 'id': 9945017}, {'ava': 'https://pp.userapi.com/c840221/v840221595/2616a/PQF8wrWpxBY.jpg', 'name': 'Соловьёв Дмитрий', 'id': 11958553}, {'ava': 'https://pp.userapi.com/c622120/v622120884/4f2ff/SBugU0KZQBs.jpg', 'name': 'Сирица Александр', 'id': 19456884}]
        },
        {name:'Дружковка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636318/v636318597/7162d/cem4waJiJlo.jpg', 'name': 'Шкодинов Игорь', 'id': 13850597}]
        },
        {name:'Дубна',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636223/v636223991/13260/h9j7kb79yUo.jpg', 'name': 'Топчубаев Александр', 'id': 591991}]
        },
        {name:'Екатеринбург',n:22,
        users:[{'ava': 'https://pp.userapi.com/c837228/v837228485/54117/7lm0gkOitS4.jpg', 'name': 'Гимаева Оля', 'id': 1058816}, {'ava': 'https://pp.userapi.com/c841625/v841625698/1de49/6IlLc7hcWI4.jpg', 'name': 'Попов Александр', 'id': 2044493}, {'ava': 'https://pp.userapi.com/c636716/v636716650/145ca/GCBVlDQxuaU.jpg', 'name': 'Шарифов Вячеслав', 'id': 2809650}, {'ava': 'https://pp.userapi.com/c631423/v631423323/25956/FGDF4WRVl9k.jpg', 'name': 'Охотников Антон', 'id': 3066323}, {'ava': 'https://pp.userapi.com/c841427/v841427355/18bf5/Ui_x-9jjATA.jpg', 'name': 'Загребина Екатерина', 'id': 3337612}, {'ava': 'https://pp.userapi.com/c836727/v836727178/8be7/xzs5MuqMU1I.jpg', 'name': 'Гимранов Ильшат', 'id': 3379178}, {'ava': 'https://pp.userapi.com/c837233/v837233549/5fd89/ZGkyarrsaUg.jpg', 'name': 'Пархайтинов Дмитрий', 'id': 3820811}, {'ava': 'https://pp.userapi.com/c419221/v419221484/87c2/Cwy1jfkCtUY.jpg', 'name': 'Кошкина Мария', 'id': 4202484}, {'ava': 'https://pp.userapi.com/c639720/v639720700/3b1fb/9BUiswALUws.jpg', 'name': 'Потапова Женя', 'id': 4374837}, {'ava': 'https://pp.userapi.com/c836736/v836736958/5ac9e/8e9-NNz5KH8.jpg', 'name': 'Батуев Пётр', 'id': 4887740}, {'ava': 'https://pp.userapi.com/c841326/v841326536/d799/Qc2BmLCecQ0.jpg', 'name': 'Захаров Павел', 'id': 6665631}, {'ava': 'https://pp.userapi.com/c638618/v638618828/53517/jJSSx_KR2Pg.jpg', 'name': 'Евтюхова Алёна', 'id': 8313630}, {'ava': 'https://pp.userapi.com/c630627/v630627055/2b5de/6MuYku6bBsc.jpg', 'name': 'Коротких Анна', 'id': 9366055}, {'ava': 'https://pp.userapi.com/c637224/v637224253/1878e/nPXNYICN0Io.jpg', 'name': 'Нилова Геля', 'id': 11847253}, {'ava': 'https://pp.userapi.com/c621515/v621515714/1435e/Epff3Y8hfsE.jpg', 'name': 'Шакиров Ридаль', 'id': 13138388}, {'ava': 'https://pp.userapi.com/c703/u13279096/e_e7da3bde.jpg', 'name': 'Иванов Сергей', 'id': 13279096}, {'ava': 'https://pp.userapi.com/c322721/v322721740/57ec/OqKwAWSV3Gw.jpg', 'name': 'Sanin Александр', 'id': 15528740}, {'ava': 'https://pp.userapi.com/c836136/v836136957/6702e/hbbtsLyufc8.jpg', 'name': 'Турсунов Равшан', 'id': 17114762}, {'ava': 'https://pp.userapi.com/c636431/v636431952/38a0f/4rN1fXAXCPs.jpg', 'name': 'Мартынов Алексей', 'id': 18070952}, {'ava': 'https://pp.userapi.com/c631525/v631525797/1432e/zZdo_1aCpr8.jpg', 'name': 'Паночкин Глеб', 'id': 21808797}, {'ava': 'https://pp.userapi.com/c626226/v626226669/1bdaf/UYvuBEXTpKI.jpg', 'name': 'Воздвиженский Евгений', 'id': 23731669}, {'ava': 'https://pp.userapi.com/c630023/v630023999/57f0c/gaVvFWU8tU4.jpg', 'name': 'Аксанов Марсель', 'id': 24298999}]
        },
        {name:'Елабуга',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836326/v836326699/684de/hCzgGOg9STw.jpg', 'name': 'Петрова Галина', 'id': 25732565}]
        },
        {name:'Железнодорожный (Балашиха)',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836225/v836225591/55062/uikcpoh1SH4.jpg', 'name': 'Гусарова Ангелина', 'id': 2075804}]
        },
        {name:'Зайсан',n:1,
        users:[{'ava': 'https://pp.userapi.com/c1500/u14410076/e_6f7ee8c2.jpg', 'name': 'Демидов Андрей', 'id': 14410076}]
        },
        {name:'Запорожье',n:2,
        users:[{'ava': 'https://pp.userapi.com/c621513/v621513317/1a367/DG3_Zi7qwn8.jpg', 'name': 'Бездольный Андрей', 'id': 11808269}, {'ava': 'https://pp.userapi.com/c836330/v836330520/67d8e/jkjs8D_rzjc.jpg', 'name': 'Викторович Александр', 'id': 20526767}]
        },
        {name:'Заречное',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841037/v841037300/1bdf5/xittHtOACoc.jpg', 'name': 'Павлина Иван', 'id': 14595094}]
        },
        {name:'Зеленоград',n:2,
        users:[{'ava': 'https://pp.userapi.com/c619823/v619823851/1f33a/KrjqNiSWMuU.jpg', 'name': 'Забродская Маргарита', 'id': 2987851}, {'ava': 'https://pp.userapi.com/c837732/v837732074/5941e/a-q0TWRKplc.jpg', 'name': 'Михайлов Андрей', 'id': 25932489}]
        },
        {name:'Златоуст',n:2,
        users:[{'ava': 'https://pp.userapi.com/c840228/v840228562/1b2c/7M3jgCJFEIU.jpg', 'name': 'Макрушина-Усманова Юлия', 'id': 4050611}, {'ava': 'https://pp.userapi.com/c837622/v837622631/444c2/auDGMmhwKxw.jpg', 'name': 'Аранцев Алексей', 'id': 28090631}]
        },
        {name:'Знаменск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638030/v638030284/4b57a/Z8FWHYOVkiI.jpg', 'name': 'Юсупова Светлана', 'id': 18049105}]
        },
        {name:'Иваново',n:3,
        users:[{'ava': 'https://pp.userapi.com/c638828/v638828032/47cd6/rcwrDm3Jfys.jpg', 'name': 'Пожаров Евгений', 'id': 6661032}, {'ava': 'https://pp.userapi.com/c836135/v836135021/4e2f1/7t0ZcixnLuI.jpg', 'name': 'Терлецкий Виталий', 'id': 14245021}, {'ava': 'https://pp.userapi.com/c837436/v837436457/2a089/S0YP_aSeD7k.jpg', 'name': 'Власов Александр', 'id': 22557457}]
        },
        {name:'Ижевск',n:6,
        users:[{'ava': 'https://pp.userapi.com/c88/u3280464/e_4fe43c0a.jpg', 'name': 'Некрасов Денис', 'id': 3280464}, {'ava': 'https://pp.userapi.com/c1427/v1427986/a/7ipfjLIwP2A.jpg', 'name': 'Павловских Анна', 'id': 3740986}, {'ava': 'https://pp.userapi.com/c638224/v638224154/5ae56/4eLslVho7ng.jpg', 'name': 'Иванов Николай', 'id': 8492703}, {'ava': 'https://pp.userapi.com/c836726/v836726796/3d9b3/Nu567Hwf5lY.jpg', 'name': 'Хитрина Татьяна', 'id': 13593796}, {'ava': 'https://pp.userapi.com/c629500/v629500172/26717/TLZn0YyJUM0.jpg', 'name': 'Игнатьев Александр', 'id': 26648172}, {'ava': 'https://pp.userapi.com/c626416/v626416487/2ded4/O08boz10ma8.jpg', 'name': 'Литвинов Максим', 'id': 30147487}]
        },
        {name:'Иркутск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639820/v639820536/99d8/Rr1UPlk9QHo.jpg', 'name': 'Колесников Денис', 'id': 10889536}]
        },
        {name:'Йошкар-Ола',n:2,
        users:[{'ava': 'https://sun9-11.userapi.com/c639717/v639717077/423b5/4C8DMg6_kUw.jpg', 'name': 'Томеев Евгений', 'id': 4190694}, {'ava': 'https://pp.userapi.com/c638725/v638725366/656ab/6AfqJ9_W3RM.jpg', 'name': 'Антонов Владимир', 'id': 23796453}]
        },
        {name:'Кагул',n:1,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Mocanu Oleg', 'id': 23163278}]
        },
        {name:'Казань',n:6,
        users:[{'ava': 'https://pp.userapi.com/c638626/v638626630/5566f/4YPoXyVJu8A.jpg', 'name': 'Вайсенберг Елена', 'id': 3193536}, {'ava': 'https://pp.userapi.com/c622431/v622431266/48b6e/XuRHtUzrZ3M.jpg', 'name': 'Садыков Ленни', 'id': 3800266}, {'ava': 'https://pp.userapi.com/c639428/v639428492/406f3/SGoAhmVWnSI.jpg', 'name': 'Хисамов Олег', 'id': 9256470}, {'ava': 'https://pp.userapi.com/c837238/v837238558/4915f/Q2MWI9B2YnE.jpg', 'name': 'Мартьянов Антон', 'id': 9742969}, {'ava': 'https://pp.userapi.com/c604324/v604324823/2139a/EVp7nU_tWTY.jpg', 'name': 'Sidorov Oleg', 'id': 10815823}, {'ava': 'https://pp.userapi.com/c409025/v409025069/837/VSS2bKmt054.jpg', 'name': 'Воробьев Юрий', 'id': 19401069}]
        },
        {name:'Калининград',n:11,
        users:[{'ava': 'https://pp.userapi.com/c836726/v836726451/5f776/chytx7ByfsE.jpg', 'name': 'Мачкова Валерия', 'id': 2313020}, {'ava': 'https://pp.userapi.com/c302408/u3140793/e_b4335395.jpg', 'name': 'Наумик Марина', 'id': 3140793}, {'ava': 'https://pp.userapi.com/c837726/v837726608/3c538/jlTR6mzBaPw.jpg', 'name': 'Томилова Екатерина', 'id': 3290608}, {'ava': 'https://pp.userapi.com/c837427/v837427397/49187/gxVrBdt8er0.jpg', 'name': 'Стецурина Татьяна', 'id': 4162537}, {'ava': 'https://pp.userapi.com/c630431/v630431253/54707/2UkahA5Ofg0.jpg', 'name': 'Боровская Елена', 'id': 4625122}, {'ava': 'https://pp.userapi.com/c840234/v840234350/298d4/7sJtYYUvbmc.jpg', 'name': 'Новлянский Константин', 'id': 4792251}, {'ava': 'https://pp.userapi.com/c841025/v841025469/1c6c7/Sc-w9u5EELo.jpg', 'name': 'Сидоркович Юлия', 'id': 6140386}, {'ava': 'https://pp.userapi.com/c418429/v418429041/ad91/5pcLtzHxQNM.jpg', 'name': 'Машканцев Леонид', 'id': 7635041}, {'ava': 'https://pp.userapi.com/c841021/v841021333/12e27/LkARytnMe08.jpg', 'name': 'Haratyan Mane', 'id': 7875265}, {'ava': 'https://pp.userapi.com/c636930/v636930376/c096/kApY7tQvd5o.jpg', 'name': 'Царицина Арина', 'id': 14149376}, {'ava': 'https://pp.userapi.com/c639620/v639620901/50798/11UECUO5HSg.jpg', 'name': 'Макаева Ирина', 'id': 14733593}]
        },
        {name:'Калуга',n:3,
        users:[{'ava': 'https://pp.userapi.com/c841038/v841038247/c18a/oFjtvnPyzqE.jpg', 'name': 'Голофтеева Марина', 'id': 3643164}, {'ava': 'https://pp.userapi.com/c836535/v836535708/1355f/xwJ1b6fBjGM.jpg', 'name': 'Половинкин Дмитрий', 'id': 4563708}, {'ava': 'https://pp.userapi.com/c837635/v837635263/143aa/OgWum4cLS2I.jpg', 'name': 'Куликов Александр', 'id': 19191263}]
        },
        {name:'Камышин',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c840736/v840736535/142b/SMoLXFyTVyo.jpg', 'name': 'Ручников Егор', 'id': 22505572}]
        },
        {name:'Караганда',n:1,
        users:[{'ava': 'https://pp.userapi.com/c1477/u14823796/e_59825ff9.jpg', 'name': 'Kolosovski Andrew', 'id': 14823796}]
        },
        {name:'Кемерово',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638431/v638431111/5cfd7/fvFX3bxbNBs.jpg', 'name': 'Рябухина Катерина', 'id': 11155280}, {'ava': 'https://pp.userapi.com/c837520/v837520893/4c4be/QElVEotwiB4.jpg', 'name': 'Ефремова Танюшка', 'id': 23424893}]
        },
        {name:'Киев',n:4,
        users:[{'ava': 'https://pp.userapi.com/c637828/v637828347/47b93/W4ew3u5PTYA.jpg', 'name': 'Остапец Вадим', 'id': 6913347}, {'ava': 'https://pp.userapi.com/c638822/v638822060/49b89/Hkz6Q9ThhKk.jpg', 'name': 'Майберова Марина', 'id': 10247954}, {'ava': 'https://pp.userapi.com/c637726/v637726111/59a36/iaoen6Q9M9I.jpg', 'name': 'Синяченко Марина', 'id': 10600462}, {'ava': 'https://pp.userapi.com/c638027/v638027371/4ee64/i2HhGnbyRtU.jpg', 'name': 'Секер Анатолий', 'id': 11603764}]
        },
        {name:'Киржач',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636121/v636121233/22ef3/3AWo6xVOBHo.jpg', 'name': 'Романов Сергей', 'id': 16841233}]
        },
        {name:'Кириши',n:3,
        users:[{'ava': 'https://pp.userapi.com/c631131/v631131280/34587/T_Q2vpSbKzs.jpg', 'name': 'Кузин Егор', 'id': 6591280}, {'ava': 'https://pp.userapi.com/c624316/v624316352/2f3ed/bpoyx1pulqc.jpg', 'name': 'Иванов Игорь', 'id': 19538352}, {'ava': 'https://pp.userapi.com/c841232/v841232459/1d1ea/Y6uI8GU-iSo.jpg', 'name': 'Лебедь Егор', 'id': 26095903}]
        },
        {name:'Киров',n:5,
        users:[{'ava': 'https://pp.userapi.com/c629125/v629125930/110b8/8ULT1GNF28Y.jpg', 'name': 'Горячевская Анастасия', 'id': 2282930}, {'ava': 'https://pp.userapi.com/c639425/v639425313/55647/Mt-oyEL9KUk.jpg', 'name': 'Колобов Олег', 'id': 3255133}, {'ava': 'https://pp.userapi.com/c837124/v837124455/5269e/qBApPNNwxy4.jpg', 'name': 'Матушкина Елена', 'id': 16492635}, {'ava': 'https://pp.userapi.com/c629424/v629424698/12ec8/_SnvSLGRYx0.jpg', 'name': 'Микрюкова Виктория', 'id': 20508698}, {'ava': 'https://pp.userapi.com/c620620/v620620271/7ba5/fwfu_FW1B3g.jpg', 'name': 'Куклин Алексей', 'id': 30861271}]
        },
        {name:'Ковдор',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638925/v638925517/41c45/ozz20IgDUp8.jpg', 'name': 'Ермаков Виктор', 'id': 20530517}]
        },
        {name:'Ковров',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638521/v638521615/40e0/L0wCs1_elTQ.jpg', 'name': 'Тожокин Дмитрий', 'id': 3309615}, {'ava': 'https://pp.userapi.com/c621700/v621700986/3fae/69kUzdzHBrU.jpg', 'name': 'Ковров Денис', 'id': 4773537}]
        },
        {name:'Коломна',n:3,
        users:[{'ava': 'https://pp.userapi.com/c841322/v841322030/2d19/bvZsEJxul4Q.jpg', 'name': 'Кузнецова Валентина', 'id': 5610030}, {'ava': 'https://pp.userapi.com/c5501/v5501365/4ba/1hcf-eIBowY.jpg', 'name': 'Кузьмина Марина', 'id': 21113365}, {'ava': 'https://pp.userapi.com/c639316/v639316342/43396/QL0Zmtw4luM.jpg', 'name': 'Свиденцева Наталия', 'id': 29440051}]
        },
        {name:'Копейск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841622/v841622689/187cd/wgVDxaDKpdw.jpg', 'name': 'Биба Антон', 'id': 9179412}]
        },
        {name:'Королёв',n:2,
        users:[{'ava': 'https://pp.userapi.com/c625327/v625327773/13208/5IhvYTN0os8.jpg', 'name': 'Шевченко Сергей', 'id': 3109773}, {'ava': 'https://pp.userapi.com/c638223/v638223721/4a24b/X6SkosTGhzI.jpg', 'name': 'Полянский Евгений', 'id': 4030721}]
        },
        {name:'Костомукша',n:7,
        users:[{'ava': 'https://pp.userapi.com/c639828/v639828759/1e0d3/UjzoIMkESxs.jpg', 'name': 'Фенгольд Кристина', 'id': 459759}, {'ava': 'https://pp.userapi.com/c624824/v624824814/887b/NpAfiE31zMg.jpg', 'name': 'Елфимов Сергей', 'id': 797814}, {'ava': 'https://pp.userapi.com/c5615/v5615776/3d/lNTT6_ZJMKk.jpg', 'name': 'Понявин Владимир', 'id': 895776}, {'ava': 'https://pp.userapi.com/c638319/v638319006/5ffcb/75lDd9y8i4M.jpg', 'name': 'Гришкина Дина', 'id': 1323064}, {'ava': 'https://sun9-11.userapi.com/c840524/v840524878/7764/lzP7V2RUGPc.jpg', 'name': 'Трушкова Светлана', 'id': 4940873}, {'ava': 'https://sun9-11.userapi.com/c840531/v840531506/8d2a/WfaJpiljYOc.jpg', 'name': 'Денисова Жанна', 'id': 7819152}, {'ava': 'https://pp.userapi.com/c837423/v837423776/4ed71/3571SAEmbYg.jpg', 'name': 'Старикова Ирина', 'id': 9166185}]
        },
        {name:'Кострома',n:1,
        users:[{'ava': 'https://pp.userapi.com/c630926/v630926921/3cbd7/UXgyN7vrT4c.jpg', 'name': 'Гребенщиков Андрей', 'id': 4110921}]
        },
        {name:'Красногорск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c309822/v309822041/3ae3/RuldFZ-OxxI.jpg', 'name': 'Килязов Сергей', 'id': 1001041}, {'ava': 'https://pp.userapi.com/c633223/v633223575/2f1d3/wScbUqfKGBM.jpg', 'name': 'Курицын Дмитрий', 'id': 1021575}, {'ava': 'https://pp.userapi.com/c636631/v636631089/49c8/7TXYHOG0O54.jpg', 'name': 'Ветров Андрей', 'id': 13133089}]
        },
        {name:'Краснодар',n:8,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Олегович Андрей', 'id': 3961155}, {'ava': 'https://pp.userapi.com/c837538/v837538563/305b7/sXSgc5Jj_yI.jpg', 'name': 'Меркулов Андрей', 'id': 4239563}, {'ava': 'https://pp.userapi.com/c637827/v637827211/26329/KqKewkTI91s.jpg', 'name': 'Давыдов Александр', 'id': 6418211}, {'ava': 'https://pp.userapi.com/c840232/v840232256/49527/DUmAZ1ZTd44.jpg', 'name': 'Нагорная Ксения', 'id': 8834307}, {'ava': 'https://pp.userapi.com/c638328/v638328449/61acb/E2mEltByqU4.jpg', 'name': 'Суслина Наталья', 'id': 13646063}, {'ava': 'https://pp.userapi.com/c631226/v631226280/437db/aJFiO91e5OA.jpg', 'name': 'Nosenko Anastasiya', 'id': 18402280}, {'ava': 'https://pp.userapi.com/c637131/v637131293/4d4cb/q6-VS0qUs04.jpg', 'name': 'Косенко Сергей', 'id': 26943293}, {'ava': 'https://pp.userapi.com/c638016/v638016352/22479/niRe53NQZlw.jpg', 'name': 'Круглов Андрей', 'id': 29803352}]
        },
        {name:'Краснодон',n:4,
        users:[{'ava': 'https://pp.userapi.com/c841224/v841224256/56e50/FPL7YjWAMY8.jpg', 'name': 'Калинин Александр', 'id': 6944627}, {'ava': 'https://pp.userapi.com/c836728/v836728820/50743/RccvXdEs0ms.jpg', 'name': 'Вержбицкая Дарья', 'id': 18031820}, {'ava': 'https://pp.userapi.com/c636429/v636429862/54391/LiLEkBLrvus.jpg', 'name': 'Смирнов Михаил', 'id': 18314862}, {'ava': 'https://pp.userapi.com/c836226/v836226237/5dab0/rdyFMKTzsI4.jpg', 'name': 'Куцаева Оксана', 'id': 20208640}]
        },
        {name:'Краснознаменск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c637226/v637226435/28ea4/1JM92thrg7s.jpg', 'name': 'Александрович Эдуард', 'id': 5642435}, {'ava': 'https://pp.userapi.com/c841120/v841120700/e2d7/MZXiJotLAIY.jpg', 'name': 'Емельяненко Александр', 'id': 6397504}]
        },
        {name:'Красноярск',n:6,
        users:[{'ava': 'https://pp.userapi.com/c836227/v836227514/5eaa0/Mt8M4aeA2sc.jpg', 'name': 'Корейша Владимир', 'id': 9178141}, {'ava': 'https://pp.userapi.com/c841620/v841620830/1f41a/oV6k3Tvaifg.jpg', 'name': 'Терещенко Дмитрий', 'id': 10002770}, {'ava': 'https://pp.userapi.com/c841629/v841629520/1a04c/r4jVgBIKPf4.jpg', 'name': 'Антошин Илья', 'id': 15168900}, {'ava': 'https://pp.userapi.com/c637925/v637925402/490c7/Xt8j6XvXHlk.jpg', 'name': 'Козловский Артём', 'id': 27279402}, {'ava': 'https://pp.userapi.com/c631518/v631518964/4d66c/mtMytEn9_JU.jpg', 'name': 'Гаряев Иван', 'id': 27657964}, {'ava': 'https://pp.userapi.com/c406117/v406117033/1180a/rpXKF3DKwiI.jpg', 'name': 'Шудров Андрей', 'id': 29477033}]
        },
        {name:'Крестцы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836531/v836531095/67560/ppgjItuin7k.jpg', 'name': 'Киселёв Артём', 'id': 4724668}]
        },
        {name:'Кривой Рог',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837435/v837435806/5dacb/rf3Ci0p7-54.jpg', 'name': 'Швалёва Аня', 'id': 10948577}, {'ava': 'https://pp.userapi.com/c636821/v636821522/48855/MMnNqEDKV5g.jpg', 'name': 'Рогозная Наталья', 'id': 14473522}]
        },
        {name:'Кстово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c630022/v630022876/10055/6FpozkbjGQA.jpg', 'name': 'Сафин Богдан', 'id': 5232876}]
        },
        {name:'Кумертау',n:3,
        users:[{'ava': 'https://pp.userapi.com/c836228/v836228224/50c9f/yppTARtwPow.jpg', 'name': 'Кутлугужин Ильнур', 'id': 1304224}, {'ava': 'https://pp.userapi.com/c627624/v627624793/464ac/eZqjNRw8qUo.jpg', 'name': 'Liev Tima', 'id': 5378793}, {'ava': 'https://pp.userapi.com/c836439/v836439039/71a64/bssgqTQNc_Y.jpg', 'name': 'Усманова Айгуль', 'id': 13657304}]
        },
        {name:'Курган',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840220/v840220127/25196/DQSbASBYbso.jpg', 'name': 'Шестаков Николай', 'id': 21856423}]
        },
        {name:'Курск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840027/v840027950/2aad6/Q8yEeyTuEIY.jpg', 'name': 'Лыков Михаил', 'id': 11296687}]
        },
        {name:'Лангепас',n:1,
        users:[{'ava': 'https://pp.userapi.com/c614617/v614617694/1e057/9g_DLPV-QFY.jpg', 'name': 'Гарипов Рустам', 'id': 29883694}]
        },
        {name:'Лахденпохья',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837630/v837630737/4b16b/Z9i83w2s8ig.jpg', 'name': 'Рудов Виталий', 'id': 17532737}]
        },
        {name:'Лесной',n:1,
        users:[{'ava': 'https://pp.userapi.com/c308817/v308817152/af7d/cln3qr4YhcQ.jpg', 'name': 'Чумаков Андрей', 'id': 14057152}]
        },
        {name:'Ливны',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639727/v639727589/3532d/AUntXJT6BOU.jpg', 'name': 'Агеев Сергей', 'id': 30828171}]
        },
        {name:'Ликино-Дулево',n:3,
        users:[{'ava': 'https://pp.userapi.com/c636516/v636516484/119fe/rJorI2tXj_g.jpg', 'name': 'Чеканов Олег', 'id': 7352484}, {'ava': 'https://pp.userapi.com/c836333/v836333098/50e1d/G5LjV_axLDk.jpg', 'name': 'Буянова Екатерина', 'id': 16198176}, {'ava': 'https://pp.userapi.com/c638727/v638727433/5866f/K_ccOabQ0dY.jpg', 'name': 'Мурина Алёнка', 'id': 26788175}]
        },
        {name:'Липецк',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639231/v639231711/50dac/m5osoGoy4pg.jpg', 'name': 'Солдатова Елена', 'id': 356178}, {'ava': 'https://pp.userapi.com/c637429/v637429817/d004/bdY2LU7T5hY.jpg', 'name': 'Железняков Артем', 'id': 6734817}]
        },
        {name:'Лобня',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840128/v840128775/9e24/3iQgeYzuDr8.jpg', 'name': 'Гизатулин Роман', 'id': 18586775}]
        },
        {name:'Лосино-Петровский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604730/v604730945/2051/DYqLsuJ5KQI.jpg', 'name': 'Чумичёва Ольга', 'id': 23795945}]
        },
        {name:'Луховицы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837734/v837734204/7cc52/v4s0q2dDZ2I.jpg', 'name': 'Гуртовая Анастасия', 'id': 3914298}]
        },
        {name:'Львов',n:1,
        users:[{'ava': 'https://pp.userapi.com/c314218/v314218167/68f5/q5BbnnbZcug.jpg', 'name': 'Футков Слава', 'id': 7968167}]
        },
        {name:'Люберцы',n:2,
        users:[{'ava': 'https://pp.userapi.com/c409820/v409820038/ace3/MDHi-Y6nb_I.jpg', 'name': 'Воронина Вероника', 'id': 6919038}, {'ava': 'https://pp.userapi.com/c836733/v836733171/3c572/qgWRnQbPvQE.jpg', 'name': 'Гареев Руслан', 'id': 9482171}]
        },
        {name:'Людиново',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836637/v836637533/65fa3/YOycLjxk1pY.jpg', 'name': 'Евдокимова Анюта', 'id': 3755282}, {'ava': 'https://pp.userapi.com/c841326/v841326867/1aa27/qQesnFpgWl8.jpg', 'name': 'Пинахин Денис', 'id': 21704159}]
        },
        {name:'Магадан',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836337/v836337816/48ae3/iLU1PBt7BUw.jpg', 'name': 'Перкова Мария', 'id': 635607}]
        },
        {name:'Магнитогорск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c149/v149955/9bc/Xnez3wQeN0E.jpg', 'name': 'Алексеева Альбина', 'id': 14791955}]
        },
        {name:'Малин',n:1,
        users:[{'ava': 'https://pp.userapi.com/c619929/v619929160/1d99f/2UAuIEY3_8c.jpg', 'name': 'Порохнюк Олександр', 'id': 11357160}]
        },
        {name:'Медвежий Угол',n:1,
        users:[{'ava': 'https://pp.userapi.com/c323830/v323830463/9b77/N5oJFHlAM9U.jpg', 'name': 'Колганов Кирилл', 'id': 938463}]
        },
        {name:'Мелеуз',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637525/v637525549/15144/zROLq3TaJtI.jpg', 'name': 'Хасбатов Вячеслав', 'id': 5119549}]
        },
        {name:'Минск',n:5,
        users:[{'ava': 'https://pp.userapi.com/c639723/v639723899/44273/vBc8ufOhGmM.jpg', 'name': 'Морозов Кирилл', 'id': 7790392}, {'ava': 'https://pp.userapi.com/c837727/v837727741/30f5e/cGWTVqnHlUA.jpg', 'name': 'Васильченко Вадим', 'id': 24308741}, {'ava': 'https://pp.userapi.com/c836733/v836733049/57719/pXJhd6CQjUs.jpg', 'name': 'Нестеренко Татьяна', 'id': 27288775}, {'ava': 'https://pp.userapi.com/c836538/v836538089/6005f/kOodI4PHPUo.jpg', 'name': 'Гринько Анастасия', 'id': 29491972}, {'ava': 'https://pp.userapi.com/c837735/v837735620/4956a/hda-4AD2e5g.jpg', 'name': 'Korgan Nastassia', 'id': 30125356}]
        },
        {name:'Мирный',n:2,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Войтенко Константин', 'id': 944183}, {'ava': 'https://pp.userapi.com/c625830/v625830154/67465/dzGym1wPf70.jpg', 'name': 'Шайнуров Сергей', 'id': 14759154}]
        },
        {name:'Мончегорск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637125/v637125682/400cb/JmA9n1kNtnE.jpg', 'name': 'Амбулов Александр', 'id': 12581682}]
        },
        {name:'Москва',n:173,
        users:[{'ava': 'https://pp.userapi.com/c403227/v403227720/2f26/B3T-IISi_G0.jpg', 'name': 'Савин Александр', 'id': 25720}, {'ava': 'https://pp.userapi.com/c9249/u54620/e_50276caf.jpg', 'name': 'Екимов Данила', 'id': 54620}, {'ava': 'https://pp.userapi.com/c626328/v626328528/610b7/t5erFNOo0QI.jpg', 'name': 'Митраков Дмитрий', 'id': 76528}, {'ava': 'https://pp.userapi.com/c629524/v629524713/117e0/7KBj8YKEiS8.jpg', 'name': 'Зверев Петр', 'id': 127713}, {'ava': 'https://pp.userapi.com/c411719/v411719576/899a/B9p-JJqs5YQ.jpg', 'name': 'Смирнов Антон', 'id': 135576}, {'ava': 'https://pp.userapi.com/c627430/v627430708/37076/gEwsza7YOe4.jpg', 'name': 'Калашникова Лена', 'id': 138708}, {'ava': 'https://pp.userapi.com/c10895/u236972/e_2008c12c.jpg', 'name': 'Дулин Иван', 'id': 236972}, {'ava': 'https://pp.userapi.com/c631925/v631925858/2bf23/roHLBA-3D4c.jpg', 'name': 'Грачёв Иван', 'id': 266858}, {'ava': 'https://pp.userapi.com/c623224/v623224275/10509/c9HR9fIvD0g.jpg', 'name': 'Завалко Дмитрий', 'id': 291275}, {'ava': 'https://pp.userapi.com/c604821/v604821997/2bb62/Wp8nV-shGzo.jpg', 'name': 'Швец Катюшка', 'id': 351997}, {'ava': 'https://pp.userapi.com/c638827/v638827335/38683/lPFcqIUNidY.jpg', 'name': 'Поликарпов Вадим', 'id': 404335}, {'ava': 'https://pp.userapi.com/c637727/v637727831/2275f/85y3eHSWmZg.jpg', 'name': 'Михайлов Артём', 'id': 450831}, {'ava': 'https://pp.userapi.com/c424916/v424916545/90e0/4XWlI2zElXg.jpg', 'name': 'Гриненко Юлия', 'id': 455545}, {'ava': 'https://pp.userapi.com/c637128/v637128942/3b8b8/ThCfc3dU-Hw.jpg', 'name': 'Григорьева Настёна', 'id': 469942}, {'ava': 'https://pp.userapi.com/c622428/v622428847/4afa3/9Jy0N_MGECI.jpg', 'name': 'Швецов Максим', 'id': 598847}, {'ava': 'https://pp.userapi.com/c639218/v639218491/3c349/_zA9RK3becE.jpg', 'name': 'Novikova Irina', 'id': 622996}, {'ava': 'https://pp.userapi.com/c637823/v637823940/55455/Hb7MoLB9Bfk.jpg', 'name': 'Рыськов Андрей', 'id': 668940}, {'ava': 'https://pp.userapi.com/c320619/v320619405/e86/tqtFP9lcP6Y.jpg', 'name': 'Непомнящая Елена', 'id': 707405}, {'ava': 'https://pp.userapi.com/c636420/v636420664/35cf8/HyEuLwaQEMY.jpg', 'name': 'Подшибякина Мария', 'id': 735664}, {'ava': 'https://pp.userapi.com/c636519/v636519619/50d59/7tcZyS6pLG0.jpg', 'name': 'Салов Глеб', 'id': 814619}, {'ava': 'https://pp.userapi.com/c638617/v638617218/44087/sLf87qBlCJM.jpg', 'name': 'Арманова Любовь', 'id': 820732}, {'ava': 'https://pp.userapi.com/c621819/v621819267/2e5d1/z9b3nkkRdm8.jpg', 'name': 'Николаева Татьяна', 'id': 846267}, {'ava': 'https://pp.userapi.com/c425725/v425725655/1258/je-0g732boU.jpg', 'name': 'Бурага Александр', 'id': 889655}, {'ava': 'https://sun9-11.userapi.com/c836723/v836723226/9214b/TxSL9bOP__A.jpg', 'name': 'Дмитриев Леонид', 'id': 903938}, {'ava': 'https://pp.userapi.com/c637817/v637817468/61023/cqzSjXEzm7U.jpg', 'name': 'Антипова Дарья', 'id': 936245}, {'ava': 'https://pp.userapi.com/c638320/v638320478/58e90/zpruNNuge0w.jpg', 'name': 'Самсонова Светлана', 'id': 955941}, {'ava': 'https://sun9-11.userapi.com/c540103/v540103581/3d439/SUVBkKwXuhc.jpg', 'name': 'Срибный Костя', 'id': 1032581}, {'ava': 'https://pp.userapi.com/c639820/v639820013/3640c/le9k-PMb_wA.jpg', 'name': 'Гольдштейн Мария', 'id': 1089683}, {'ava': 'https://pp.userapi.com/c836127/v836127187/60ddf/4rQNNJbhnE0.jpg', 'name': 'Kapranova Olga', 'id': 1149885}, {'ava': 'https://pp.userapi.com/c604724/v604724931/382bc/ilKpSCaYq4w.jpg', 'name': 'Титов Михаил', 'id': 1277931}, {'ava': 'https://pp.userapi.com/c639919/v639919088/4683e/VgbyJPI8t8M.jpg', 'name': 'Сулаева Екатерина', 'id': 1393270}, {'ava': 'https://pp.userapi.com/c638926/v638926824/3ad38/HI3VV3RuKp0.jpg', 'name': 'Зикункова Александра', 'id': 1393824}, {'ava': 'https://pp.userapi.com/c633918/v633918627/109b9/ONMbaPcpLl8.jpg', 'name': 'Синичкин Дмитрий', 'id': 1503627}, {'ava': 'https://pp.userapi.com/c636428/v636428304/19a99/NKhOOMy7lNY.jpg', 'name': 'Ивонькин Алексей', 'id': 1510304}, {'ava': 'https://pp.userapi.com/c840139/v840139483/59c1/my0tc3S--Ag.jpg', 'name': 'Скульская Любовь', 'id': 1526483}, {'ava': 'https://pp.userapi.com/c631431/v631431560/3cfd4/y6bSlW1is5A.jpg', 'name': 'Привалова Аня', 'id': 1540560}, {'ava': 'https://pp.userapi.com/c841529/v841529325/1b275/e_6S7TLY5h0.jpg', 'name': 'Богомолова Оксана', 'id': 1593052}, {'ava': 'https://pp.userapi.com/c638427/v638427516/423a9/fhN-FYwPvQE.jpg', 'name': 'Маланка Татьяна', 'id': 1597516}, {'ava': 'https://pp.userapi.com/c837534/v837534463/426f7/4hyoZFeok5c.jpg', 'name': 'Платонова Елена', 'id': 1602463}, {'ava': 'https://pp.userapi.com/c626927/v626927199/4475d/MuyZw5eknFc.jpg', 'name': 'Маллеров Филипп', 'id': 1658199}, {'ava': 'https://pp.userapi.com/c621702/v621702163/22f92/Oe6av0rQGeg.jpg', 'name': 'Тяпкина Оксана', 'id': 1707960}, {'ava': 'https://pp.userapi.com/c639427/v639427604/318bf/v345wEZB778.jpg', 'name': 'Рубашанов Александр', 'id': 2097817}, {'ava': 'https://pp.userapi.com/c631230/v631230446/47c76/ny_C6juMSv8.jpg', 'name': 'Степашкина Анастасия', 'id': 2101446}, {'ava': 'https://pp.userapi.com/c836426/v836426553/6a7d2/Xk81hk5h_YU.jpg', 'name': 'Brotash Olga', 'id': 2126835}, {'ava': 'https://pp.userapi.com/c639921/v639921367/2c1a2/XBLluxbB5UI.jpg', 'name': 'Таранова Наталья', 'id': 2145432}, {'ava': 'https://pp.userapi.com/c837221/v837221578/2b7d8/nW31HJOGhZ4.jpg', 'name': 'Калядин Денис', 'id': 2238578}, {'ava': 'https://pp.userapi.com/c633622/v633622666/265b7/41GB6mNyK-A.jpg', 'name': 'Уткин Сергей', 'id': 2250666}, {'ava': 'https://pp.userapi.com/c407419/u2255078/e_04ff1a3a.jpg', 'name': 'Цветков Антон', 'id': 2255078}, {'ava': 'https://pp.userapi.com/c837329/v837329760/4247d/MkkQM5EAHtE.jpg', 'name': 'Соловьева Анастасия', 'id': 2511760}, {'ava': 'https://pp.userapi.com/c628616/v628616753/39e/waoa4q-7xiU.jpg', 'name': 'Шкорбот Сергей', 'id': 2563753}, {'ava': 'https://pp.userapi.com/c637226/v637226584/285db/na5GLaYO_pQ.jpg', 'name': 'Бельчик Никита', 'id': 2576584}, {'ava': 'https://pp.userapi.com/c631529/v631529768/28521/zQJKOEp1O-4.jpg', 'name': 'Вериго Ева', 'id': 2585768}, {'ava': 'https://pp.userapi.com/c311422/v311422832/5cbc/OlWDJthaTHg.jpg', 'name': 'Иванов Николай', 'id': 2645832}, {'ava': 'https://pp.userapi.com/c841530/v841530989/1e127/0gVFBj10cFg.jpg', 'name': 'Дадонов Игорь', 'id': 2664794}, {'ava': 'https://pp.userapi.com/c639731/v639731250/515e2/Wu6k47hOgEc.jpg', 'name': 'Телегина Екатерина', 'id': 2669802}, {'ava': 'https://pp.userapi.com/c841130/v841130019/18e9a/u6sew6Oh_Ng.jpg', 'name': 'Архангельская Наталья', 'id': 2684190}, {'ava': 'https://pp.userapi.com/c638218/v638218566/4daaf/PifTaQsdsRo.jpg', 'name': 'Ветошкина Елена', 'id': 2869870}, {'ava': 'https://pp.userapi.com/c840127/v840127141/29cbc/hL6DFgZsG6M.jpg', 'name': 'Крылова Светлана', 'id': 2873265}, {'ava': 'https://pp.userapi.com/c631225/v631225655/4e5d4/MM52sKhzTl0.jpg', 'name': 'Семенова Валерия', 'id': 2969655}, {'ava': 'https://pp.userapi.com/c841226/v841226174/18b69/4Bsbrxtq5yg.jpg', 'name': 'Тарова Наталья', 'id': 3219557}, {'ava': 'https://pp.userapi.com/c4549/u3342746/e_397feefa.jpg', 'name': 'Сандакова Ольга', 'id': 3342746}, {'ava': 'https://pp.userapi.com/c639129/v639129296/21628/iWoSAndEodQ.jpg', 'name': 'Force Александр', 'id': 3346296}, {'ava': 'https://pp.userapi.com/c841623/v841623955/21109/8mCz2H8OMC4.jpg', 'name': 'Себякин Игорь', 'id': 3518666}, {'ava': 'https://pp.userapi.com/c836134/v836134600/30a18/xpMsddVlrPI.jpg', 'name': 'Козлов Николай', 'id': 3658600}, {'ava': 'https://pp.userapi.com/c639130/v639130657/2d4d5/gxEkz6iI61c.jpg', 'name': 'Морозюк Ольга', 'id': 3736657}, {'ava': 'https://pp.userapi.com/c628531/v628531110/24765/6-p0LEZuOZ8.jpg', 'name': 'Луганцев Андрей', 'id': 3747110}, {'ava': 'https://pp.userapi.com/c639425/v639425377/a8fd/FJS_YY-rjto.jpg', 'name': 'Николаев Дима', 'id': 3842377}, {'ava': 'https://pp.userapi.com/c625817/v625817787/1b8ec/uupnRQK0jhM.jpg', 'name': 'Чертова Дарья', 'id': 3851787}, {'ava': 'https://pp.userapi.com/c638122/v638122147/523cc/r7wDYFx-bAQ.jpg', 'name': 'Фролов Алексей', 'id': 3977657}, {'ava': 'https://pp.userapi.com/c637616/v637616783/404d5/XrDihVW_MiU.jpg', 'name': 'Лотоцкий Андрей', 'id': 3979783}, {'ava': 'https://pp.userapi.com/c636230/v636230913/3b07/fypnTaWzZR0.jpg', 'name': 'Блинов Денис', 'id': 4039913}, {'ava': 'https://pp.userapi.com/c639116/v639116517/47fc5/AacsA_whVV8.jpg', 'name': 'Митичкина Татьяна', 'id': 4118017}, {'ava': 'https://pp.userapi.com/c638131/v638131227/515eb/-DzEmloE8UA.jpg', 'name': 'Горохов Дмитрий', 'id': 4206980}, {'ava': 'https://pp.userapi.com/c622730/v622730334/19891/50GXJUpL_xg.jpg', 'name': 'Папков Серега', 'id': 4258334}, {'ava': 'https://pp.userapi.com/c840229/v840229641/29e35/y0jyQHn7zeU.jpg', 'name': 'Михайлов Андрей', 'id': 4425034}, {'ava': 'https://pp.userapi.com/c637122/v637122117/3501a/vOh4-2owzpc.jpg', 'name': 'Беляев Максим', 'id': 4502117}, {'ava': 'https://pp.userapi.com/c841227/v841227528/195af/TXHpF_94Hto.jpg', 'name': 'Зубов Евгений', 'id': 4542948}, {'ava': 'https://pp.userapi.com/c836625/v836625154/33cdd/vYNqziDB730.jpg', 'name': 'Моисеев Денис', 'id': 4584154}, {'ava': 'https://pp.userapi.com/c624226/v624226491/3a108/dVL8meBdxz8.jpg', 'name': 'Саковский Михаил', 'id': 4635491}, {'ava': 'https://pp.userapi.com/c5350/v5350464/613/s68x78cG6do.jpg', 'name': 'Алексеенко Татьяна', 'id': 4863464}, {'ava': 'https://pp.userapi.com/c836137/v836137288/3ba8c/w7-pyTtTD8s.jpg', 'name': 'Жукова Лена', 'id': 4957288}, {'ava': 'https://pp.userapi.com/c637420/v637420891/dc44/tR5h1RrYBZM.jpg', 'name': 'Тожокина Светлана', 'id': 5020891}, {'ava': 'https://pp.userapi.com/c626524/v626524947/1e483/R1z4LrazpNs.jpg', 'name': 'Соколов Дмитрий', 'id': 5043947}, {'ava': 'https://pp.userapi.com/c841324/v841324996/1bf68/LbFfsma04T0.jpg', 'name': 'Алексеев Андрей', 'id': 5056333}, {'ava': 'https://pp.userapi.com/c4181/u5077911/e_d17566a0.jpg', 'name': 'Секира Андрей', 'id': 5077911}, {'ava': 'https://pp.userapi.com/c836228/v836228290/249a/55eqtBJKQ8w.jpg', 'name': 'Вишняков Денис', 'id': 5166290}, {'ava': 'https://pp.userapi.com/c638931/v638931818/25daa/QUrpUqchHqQ.jpg', 'name': 'Толкова Татьяна', 'id': 5244818}, {'ava': 'https://pp.userapi.com/c424821/v424821408/687e/rpzfaFRrTQQ.jpg', 'name': 'Алексеев Иван', 'id': 5392408}, {'ava': 'https://pp.userapi.com/c837430/v837430314/4d7cb/jrzHkvr9eWQ.jpg', 'name': 'Ульянова Татьяна', 'id': 5513444}, {'ava': 'https://pp.userapi.com/c638127/v638127175/472d7/By10Lk2Heis.jpg', 'name': 'Старцев Андрей', 'id': 5554175}, {'ava': 'https://pp.userapi.com/c638820/v638820758/1be62/W8edF_w4ct4.jpg', 'name': 'Копылов Максим', 'id': 5633758}, {'ava': 'https://pp.userapi.com/c621430/v621430519/6034/ys-Ts-wq2_8.jpg', 'name': 'Андриевская Нелли', 'id': 5818519}, {'ava': 'https://pp.userapi.com/c604823/v604823083/41969/FrJ5-Om1Rh8.jpg', 'name': 'Иванова Ксения', 'id': 5867083}, {'ava': 'https://pp.userapi.com/c840435/v840435906/607b/RO5Y2okWLZI.jpg', 'name': 'Ананьев Сергей', 'id': 5911743}, {'ava': 'https://pp.userapi.com/c636728/v636728063/3cca9/Y_KD2gp-8Jo.jpg', 'name': 'Ручкин Дмитрий', 'id': 6079063}, {'ava': 'https://pp.userapi.com/c637722/v637722016/8640/AdVX4dMs4jk.jpg', 'name': 'Куликова Татьяна', 'id': 6086016}, {'ava': 'https://pp.userapi.com/c639317/v639317270/42c60/2w2VQ5pDpm8.jpg', 'name': 'Ефимов Андрей', 'id': 6124562}, {'ava': 'https://pp.userapi.com/c629322/v629322582/fd55/xVParBdtfa4.jpg', 'name': 'Брозас Алексей', 'id': 6375582}, {'ava': 'https://sun9-11.userapi.com/c840628/v840628463/8de3/f25YyuAG63g.jpg', 'name': 'Колпаков Александр', 'id': 6444896}, {'ava': 'https://pp.userapi.com/c627628/v627628308/a43c6/72z3hno9cY4.jpg', 'name': 'Козлов Илья', 'id': 6573308}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Свечников Александр', 'id': 6618559}, {'ava': 'https://pp.userapi.com/c138/u6658303/e_7330f72a.jpg', 'name': 'Давыдов Никита', 'id': 6658303}, {'ava': 'https://pp.userapi.com/c837527/v837527204/2a124/uwyO399hplk.jpg', 'name': 'Герливанова Елена', 'id': 6694204}, {'ava': 'https://pp.userapi.com/c633422/v633422664/2f5b8/HfqBtQtiEeU.jpg', 'name': 'Захаров Павел', 'id': 7093664}, {'ava': 'https://pp.userapi.com/c836121/v836121459/6df97/-QPS9FSRdyY.jpg', 'name': 'Волкова Юлия', 'id': 7455203}, {'ava': 'https://pp.userapi.com/c622218/v622218815/1147d/A_4fkIcBhvk.jpg', 'name': 'Боев Илья', 'id': 7761815}, {'ava': 'https://pp.userapi.com/c628319/v628319631/1ef41/WK1UoIrk7mE.jpg', 'name': 'Ширяева Лидия', 'id': 7856631}, {'ava': 'https://pp.userapi.com/c320318/v320318974/868b/0m3ALNYrKPY.jpg', 'name': 'Гусев Алексей', 'id': 7872974}, {'ava': 'https://pp.userapi.com/c639623/v639623198/4db83/EtGTChnhk90.jpg', 'name': 'Соколова Юлия', 'id': 8217430}, {'ava': 'https://sun9-11.userapi.com/c840739/v840739652/4ae6/OvGOmksXOQM.jpg', 'name': 'Жихар Анастасия', 'id': 8242421}, {'ava': 'https://pp.userapi.com/c836626/v836626839/5cb34/M9LQsPl5eq8.jpg', 'name': 'Сорокин Филипп', 'id': 8381072}, {'ava': 'https://pp.userapi.com/c620431/v620431850/1b5e0/7IkUUXvb0fY.jpg', 'name': 'Зверев Андрей', 'id': 8514850}, {'ava': 'https://pp.userapi.com/c628528/v628528555/4c4e7/l_LgLrzQ-lk.jpg', 'name': 'Третьякова Татьяна', 'id': 8849555}, {'ava': 'https://pp.userapi.com/c10430/u8905219/e_23aca0d2.jpg', 'name': 'Суточников Дмитрий', 'id': 8905219}, {'ava': 'https://pp.userapi.com/c639331/v639331270/3e4f9/uutaOV8xb_c.jpg', 'name': 'Иванова Валентина', 'id': 9122960}, {'ava': 'https://pp.userapi.com/c630225/v630225513/45535/Dg5ZjQc2c1o.jpg', 'name': 'Сергеева Светлана', 'id': 9212513}, {'ava': 'https://pp.userapi.com/c638431/v638431738/3f86a/1rT8d9lmo9w.jpg', 'name': 'Чаругина Татьяна', 'id': 9291738}, {'ava': 'https://pp.userapi.com/c618129/v618129994/1a01a/GTmSy-tXl6E.jpg', 'name': 'Савин Денис', 'id': 9957994}, {'ava': 'https://pp.userapi.com/c639425/v639425720/3d536/9K9KfI_zJdg.jpg', 'name': 'Мишечкина Наталья', 'id': 10087393}, {'ava': 'https://pp.userapi.com/c625330/v625330800/44e8a/sQrLylKPazQ.jpg', 'name': 'Гусь Александра', 'id': 10381800}, {'ava': 'https://pp.userapi.com/c836637/v836637937/4b3bf/I25r0RxN29I.jpg', 'name': 'Терентьев Максим', 'id': 10885140}, {'ava': 'https://pp.userapi.com/c421828/v421828826/9d99/zD0HqQNALtE.jpg', 'name': 'Даньков Владимир', 'id': 10891826}, {'ava': 'https://pp.userapi.com/c637321/v637321720/3fd62/Chsmr6zAmbA.jpg', 'name': 'Шостак Дина', 'id': 11292720}, {'ava': 'https://sun9-11.userapi.com/c639717/v639717694/35137/uuIggPObPs4.jpg', 'name': 'Лопатникова Марина', 'id': 11321685}, {'ava': 'https://pp.userapi.com/c639527/v639527462/314cb/eNZU-NdA3ws.jpg', 'name': 'Терёхина Ирина', 'id': 11566431}, {'ava': 'https://sun9-11.userapi.com/c639717/v639717034/4584b/MUcNXp9y2qA.jpg', 'name': 'Мурзашев Адильхан', 'id': 11788247}, {'ava': 'https://pp.userapi.com/c9568/u11895994/e_aed7a9ef.jpg', 'name': 'Меркулова Анна', 'id': 11895994}, {'ava': 'https://pp.userapi.com/c841235/v841235613/12988/3uP00Mywm4U.jpg', 'name': 'Шарипова Эльвира', 'id': 12287599}, {'ava': 'https://pp.userapi.com/c621513/v621513461/bb4f/CjXtRUS8mTA.jpg', 'name': 'Вальба Настя', 'id': 12393207}, {'ava': 'https://pp.userapi.com/c636929/v636929866/31ce3/MPZi_5dhXEQ.jpg', 'name': 'Белый Дима', 'id': 12547866}, {'ava': 'https://pp.userapi.com/c837137/v837137717/58892/DoYul-Muc9A.jpg', 'name': 'Кругликов Дима', 'id': 12576303}, {'ava': 'https://pp.userapi.com/c836527/v836527947/4f56c/YpkFvW3orHw.jpg', 'name': 'Мазова Ева', 'id': 12937111}, {'ava': 'https://pp.userapi.com/c620624/v620624433/15fdf/mqJkbX_V66o.jpg', 'name': 'Барченков Иван', 'id': 13535433}, {'ava': 'https://pp.userapi.com/c630829/v630829380/18e1e/164d4qBuNp0.jpg', 'name': 'Кузнецова Светлана', 'id': 13539380}, {'ava': 'https://pp.userapi.com/c425428/v425428317/96e0/MxVAA1jRbXY.jpg', 'name': 'Кабанов Дмитрий', 'id': 13636317}, {'ava': 'https://pp.userapi.com/c638923/v638923892/6a578/kVv9CfieIJM.jpg', 'name': 'Кутявин Алексей', 'id': 14437923}, {'ava': 'https://pp.userapi.com/c639820/v639820079/204f3/UbvKLC0hGrA.jpg', 'name': 'Бирюков Владислав', 'id': 14456079}, {'ava': 'https://pp.userapi.com/c303/u14586631/e_f6ae771a.jpg', 'name': 'Подгорный Сергей', 'id': 14586631}, {'ava': 'https://pp.userapi.com/c628218/v628218344/2c1c5/T7jxIaATJv4.jpg', 'name': 'Воронина Евгения', 'id': 14968344}, {'ava': 'https://pp.userapi.com/c618919/v618919755/fa9b/vsLfSvILYHM.jpg', 'name': 'Лукьянов Александр', 'id': 15001755}, {'ava': 'https://pp.userapi.com/c841632/v841632594/179df/W7YVkHxOJ94.jpg', 'name': 'Богатырева Валентина', 'id': 15134454}, {'ava': 'https://sun9-11.userapi.com/c639324/v639324150/39573/INwxejcbDkQ.jpg', 'name': 'Марчук Екатерина', 'id': 15228014}, {'ava': 'https://pp.userapi.com/c836125/v836125456/545e0/jKxqDmqeMLM.jpg', 'name': 'Сондор Михаил', 'id': 16604602}, {'ava': 'https://pp.userapi.com/c638025/v638025559/5a20b/jeGG-nBnaGw.jpg', 'name': 'Кричевская Настюшка', 'id': 16768293}, {'ava': 'https://pp.userapi.com/c623924/v623924244/15c87/eJb-3cNj3gk.jpg', 'name': 'Князев Максим', 'id': 16869244}, {'ava': 'https://pp.userapi.com/c628324/v628324698/3446c/2pmqBecDOmw.jpg', 'name': 'Вознюк Роман', 'id': 16936698}, {'ava': 'https://pp.userapi.com/c841526/v841526922/4a8e/foEIyQB7rkE.jpg', 'name': 'Остапченко Андрей', 'id': 17703922}, {'ava': 'https://pp.userapi.com/c9853/u17863820/e_000779a5.jpg', 'name': 'Власов Владимир', 'id': 17863820}, {'ava': 'https://pp.userapi.com/c836431/v836431765/4c866/6kwuEbScyOo.jpg', 'name': 'Лазарев Дмитрий', 'id': 18407022}, {'ava': 'https://pp.userapi.com/c836126/v836126873/3cb4b/6E49W4ppi2k.jpg', 'name': 'Раби Стешa', 'id': 18793873}, {'ava': 'https://pp.userapi.com/c637525/v637525458/5e9ac/4BZdD96Zd-Y.jpg', 'name': 'Кононенко Константин', 'id': 20055458}, {'ava': 'https://pp.userapi.com/c841225/v841225724/96d8/hTgYjOOimIk.jpg', 'name': 'Мартынов Александр', 'id': 20256529}, {'ava': 'https://pp.userapi.com/c841438/v841438780/22943/0YOc1Nomzn8.jpg', 'name': 'Белякова Татьяна', 'id': 20516093}, {'ava': 'https://pp.userapi.com/c628019/v628019134/12a28/KQ7T_rCZE58.jpg', 'name': 'Slanov David', 'id': 20769134}, {'ava': 'https://pp.userapi.com/c421331/v421331410/19f9/KA7nVK9XoVo.jpg', 'name': 'Гусман Эльвира', 'id': 21598410}, {'ava': 'https://pp.userapi.com/c625218/v625218354/28c1b/yiRP2UqlnjI.jpg', 'name': 'Sultanova Raisa', 'id': 21801354}, {'ava': 'https://pp.userapi.com/c837437/v837437794/227b1/nxz9QA7K2RI.jpg', 'name': 'Бармина Екатерина', 'id': 22019794}, {'ava': 'https://pp.userapi.com/c626426/v626426795/2973a/G5sLgFKHDUs.jpg', 'name': 'Спос Колян', 'id': 23815795}, {'ava': 'https://pp.userapi.com/c637724/v637724467/73f48/qikmlguV56o.jpg', 'name': 'Михалева Наталья', 'id': 24443152}, {'ava': 'https://pp.userapi.com/c637517/v637517449/5ca01/_1lukY9LkxU.jpg', 'name': 'Тюрин Иван', 'id': 25146989}, {'ava': 'https://pp.userapi.com/c622517/v622517750/36163/jDMlizFj4e8.jpg', 'name': 'Олешевич Алена', 'id': 25935750}, {'ava': 'https://pp.userapi.com/c622920/v622920765/67c5/X0BlAbHMwvc.jpg', 'name': 'Isaev Dan', 'id': 26169765}, {'ava': 'https://pp.userapi.com/c639321/v639321557/30f28/sm73utgz-Us.jpg', 'name': 'Наумова Эля', 'id': 26932557}, {'ava': 'https://pp.userapi.com/c837730/v837730042/2af57/e0rVVE3C3sE.jpg', 'name': 'Гетун Андрей', 'id': 27128042}, {'ava': 'https://pp.userapi.com/c639329/v639329081/36528/oORsHNZMap8.jpg', 'name': 'Курильчик Анна', 'id': 28049738}, {'ava': 'https://pp.userapi.com/c841138/v841138413/200d5/26DVKg4IOq8.jpg', 'name': 'Рысев Алексей', 'id': 28264128}, {'ava': 'https://pp.userapi.com/c841227/v841227752/e209/7pRxWDYBtZo.jpg', 'name': 'Алов Борис', 'id': 28317957}, {'ava': 'https://pp.userapi.com/c637419/v637419702/3b37e/qS2SpzNMz_Y.jpg', 'name': 'Лактионов Игорь', 'id': 28946702}, {'ava': 'https://pp.userapi.com/c631126/v631126076/1bd1c/0wXd0swt8J4.jpg', 'name': 'М******** Марина', 'id': 30030076}, {'ava': 'https://pp.userapi.com/c637116/v637116157/55a01/QPVTA13CHaA.jpg', 'name': 'Творцов Дмитрий', 'id': 30116157}, {'ava': 'https://pp.userapi.com/c412827/v412827310/95d1/oAVZaNjg1iA.jpg', 'name': 'Косарев Илья', 'id': 30542310}, {'ava': 'https://pp.userapi.com/c637117/v637117524/657f7/D_BE2Wa19bY.jpg', 'name': 'Колесникова Екатерина', 'id': 30556917}, {'ava': 'https://pp.userapi.com/c836732/v836732490/32bae/uzPIbdJBFd0.jpg', 'name': 'Тимшин Дмитрий', 'id': 30865490}]
        },
        {name:'Мурманск',n:8,
        users:[{'ava': 'https://pp.userapi.com/c637517/v637517703/2baab/b7mfrbiJOfM.jpg', 'name': 'Ра Дмитрий', 'id': 1067703}, {'ava': 'https://pp.userapi.com/c604530/v604530850/4620a/mkpq0ymSvLA.jpg', 'name': 'Плисова Светлана', 'id': 1236089}, {'ava': 'https://pp.userapi.com/c639623/v639623273/44876/Y7h6OopLAYo.jpg', 'name': 'Геращенко Оксана', 'id': 1599022}, {'ava': 'https://pp.userapi.com/c841227/v841227558/1c4cf/JJwDmttIHnU.jpg', 'name': 'Калашников Андрей', 'id': 1706220}, {'ava': 'https://pp.userapi.com/c836121/v836121004/6f6d0/AHcncxUZhsg.jpg', 'name': 'Ласенко Александр', 'id': 1738602}, {'ava': 'https://pp.userapi.com/c637621/v637621336/5d521/XbwxbqQrYAw.jpg', 'name': 'Удалая Марина', 'id': 10179844}, {'ava': 'https://pp.userapi.com/c624628/v624628854/58c92/lOFUQ8wnqy4.jpg', 'name': 'Ермохина Татьяна', 'id': 17957592}, {'ava': 'https://pp.userapi.com/c621718/v621718426/3634d/M2ArIvGCC7Q.jpg', 'name': 'Нагорный Иван', 'id': 20233426}]
        },
        {name:'Мытищи',n:1,
        users:[{'ava': 'https://pp.userapi.com/c303103/v303103221/56e3/DvzMK72_Yz8.jpg', 'name': 'Копылов Никита', 'id': 2692221}]
        },
        {name:'Набережные Челны',n:4,
        users:[{'ava': 'https://pp.userapi.com/c836131/v836131970/5ec00/bLy3pUgch5o.jpg', 'name': 'Янгиров Вадим', 'id': 5575081}, {'ava': 'https://pp.userapi.com/c840435/v840435248/3e8b/3S3Lgtn9fGI.jpg', 'name': 'Киреев Артур', 'id': 6290687}, {'ava': 'https://pp.userapi.com/c627123/v627123676/4327c/3PrUxBzeXDY.jpg', 'name': 'Тут Ильдар', 'id': 7547676}, {'ava': 'https://pp.userapi.com/c639320/v639320967/223b8/my5k4MFn08k.jpg', 'name': 'Мугинов Айдар', 'id': 17688967}]
        },
        {name:'Навашино',n:1,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Филиппов Вячеслав', 'id': 22944593}]
        },
        {name:'Нарьян-Мар',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631526/v631526245/4917f/nqvD9J9c0Ig.jpg', 'name': 'Лунёва Екатерина', 'id': 5383245}]
        },
        {name:'Нижневартовск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c411031/v411031073/7579/ql-wTAnIaLw.jpg', 'name': 'Валюкевич Славомир', 'id': 16087073}]
        },
        {name:'Нижнекамск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c633831/v633831560/36c0b/pCuQbcJDadU.jpg', 'name': 'Валова Елена', 'id': 26218560}]
        },
        {name:'Нижний Новгород',n:19,
        users:[{'ava': 'https://pp.userapi.com/c841133/v841133098/1e71d/xML0vAsNP18.jpg', 'name': 'Груздева Ольга', 'id': 640355}, {'ava': 'https://pp.userapi.com/c622220/v622220187/4602/BoKZrH0Rmps.jpg', 'name': 'Конюченко Алексей', 'id': 1199187}, {'ava': 'https://pp.userapi.com/c625122/v625122875/46ee/jE_lANWko-A.jpg', 'name': 'Королев Роман', 'id': 2793875}, {'ava': 'https://pp.userapi.com/c638217/v638217289/56d89/s4C1GPmjTiQ.jpg', 'name': 'Шишкова Анна', 'id': 3621289}, {'ava': 'https://pp.userapi.com/c9567/u6136053/e_205abf5f.jpg', 'name': 'Еллиев Ефрем', 'id': 6136053}, {'ava': 'https://pp.userapi.com/c626217/v626217765/27ad5/ae4oUGtxWao.jpg', 'name': 'Конюченко Наташа', 'id': 7208765}, {'ava': 'https://pp.userapi.com/c11350/u8128444/e_7a06677f.jpg', 'name': 'Богаткина Ольга', 'id': 8128444}, {'ava': 'https://pp.userapi.com/c617729/v617729893/ece6/icMvqYYn9bQ.jpg', 'name': 'Кусакина Наташа', 'id': 8575893}, {'ava': 'https://pp.userapi.com/c837236/v837236866/15e6e/-p2AzVfwVqY.jpg', 'name': 'Якимюк Артем', 'id': 9500866}, {'ava': 'https://pp.userapi.com/c841625/v841625315/d10b/2mZowyLmpEE.jpg', 'name': 'Крейчик Оля', 'id': 9768961}, {'ava': 'https://pp.userapi.com/c639920/v639920311/adb/wkQpY5OOkbA.jpg', 'name': 'Babushkina Lera', 'id': 12923311}, {'ava': 'https://pp.userapi.com/c627122/v627122244/2a89b/KcaWlTmMa-I.jpg', 'name': 'Лушкин Сергей', 'id': 13027244}, {'ava': 'https://pp.userapi.com/c617420/v617420827/25c31/83oVa2dlZXk.jpg', 'name': 'Grigorian Akob', 'id': 13826827}, {'ava': 'https://pp.userapi.com/c639129/v639129164/1ad10/zaqb0IsrUCE.jpg', 'name': 'Чалышев Илья', 'id': 21160164}, {'ava': 'https://pp.userapi.com/c636430/v636430830/4a062/_J1C3TMMjSU.jpg', 'name': 'Серебрякова Алёна', 'id': 21625830}, {'ava': 'https://pp.userapi.com/c604516/v604516659/1fef9/hw24CZt_2aA.jpg', 'name': 'Назаровская Евгения', 'id': 23503659}, {'ava': 'https://pp.userapi.com/c836736/v836736496/676d9/350tTFVeLg8.jpg', 'name': 'Smirnova Mariya', 'id': 25840819}, {'ava': 'https://pp.userapi.com/c639224/v639224872/397c7/Ml9kL2B1oD8.jpg', 'name': 'Тимин Павел', 'id': 29248092}, {'ava': 'https://pp.userapi.com/c639231/v639231786/4c266/3iuJvNYpuPc.jpg', 'name': 'Чивкунова Наталья', 'id': 31074915}]
        },
        {name:'Нижний Тагил',n:2,
        users:[{'ava': 'https://pp.userapi.com/c604726/v604726652/729ec/_knyttV1MlY.jpg', 'name': 'Мусатова Елена', 'id': 8660652}, {'ava': 'https://pp.userapi.com/c626523/v626523817/55103/NENZc-1TiS4.jpg', 'name': 'Медведев Петр', 'id': 19641817}]
        },
        {name:'Николаев',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638021/v638021141/35d2f/3keP2DrLFRo.jpg', 'name': 'Ян Сергей', 'id': 8257141}]
        },
        {name:'Нововоронеж',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841328/v841328431/cb25/XfPW3ZLE4Bo.jpg', 'name': 'Шульженко Александр', 'id': 15951580}]
        },
        {name:'Новокузнецк',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840237/v840237456/19fe6/U7dcg0wvj9w.jpg', 'name': 'Лавренюк Алексей', 'id': 30741879}]
        },
        {name:'Новосибирск',n:13,
        users:[{'ava': 'https://pp.userapi.com/c625418/v625418058/10f38/2c9C6IhgD1Q.jpg', 'name': 'Игнатов Сергей', 'id': 848058}, {'ava': 'https://pp.userapi.com/c638716/v638716260/4e2f0/7yZdF42ZWxY.jpg', 'name': 'Троицкий Артем', 'id': 1075431}, {'ava': 'https://pp.userapi.com/c636720/v636720545/2f86c/_ztjIMDuliM.jpg', 'name': 'Гредин Роман', 'id': 1201545}, {'ava': 'https://pp.userapi.com/c836338/v836338162/50a78/J4Nz9Fdi5Mc.jpg', 'name': 'Сухарев Дмитрий', 'id': 1675949}, {'ava': 'https://pp.userapi.com/c836127/v836127746/61b7c/NQ1bgbJaBmY.jpg', 'name': 'Доронина Анна', 'id': 1893098}, {'ava': 'https://pp.userapi.com/c622229/v622229132/35390/9QdiIzDTnTo.jpg', 'name': 'Sumin Alexander', 'id': 2464132}, {'ava': 'https://pp.userapi.com/c840223/v840223259/2a10b/tOMAh57i1KY.jpg', 'name': 'Чернякова Алевтина', 'id': 3718065}, {'ava': 'https://pp.userapi.com/c836639/v836639395/6817f/B5_y5kRI1ss.jpg', 'name': 'Саркисянц Елизавета', 'id': 3965076}, {'ava': 'https://pp.userapi.com/c639121/v639121607/4828e/MQn3XYP1PLM.jpg', 'name': 'Кулешов Евгений', 'id': 5131036}, {'ava': 'https://pp.userapi.com/c301211/v301211785/42a0/acWCsF8rpb8.jpg', 'name': 'Чапайкина Ольга', 'id': 5146785}, {'ava': 'https://pp.userapi.com/c6011/u5396903/e_0b039161.jpg', 'name': 'Миронов Сергей', 'id': 5396903}, {'ava': 'https://pp.userapi.com/c633616/v633616774/3340a/ke75zI6PmFU.jpg', 'name': 'Тарасова Наталья', 'id': 5535774}, {'ava': 'https://pp.userapi.com/c638722/v638722437/4b571/Ki8ol1QWCfU.jpg', 'name': 'Первухин Владимир', 'id': 22559437}]
        },
        {name:'Новочебоксарск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841636/v841636505/1befe/aCG0-GuLTEk.jpg', 'name': 'Захаров Вадим', 'id': 11266475}]
        },
        {name:'Ноябрьск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626327/v626327536/33a55/WUQC-11AROk.jpg', 'name': 'Шмаков Сергей', 'id': 3156536}]
        },
        {name:'Одесса',n:3,
        users:[{'ava': 'https://pp.userapi.com/c637330/v637330651/479d4/TMsPT71mO7E.jpg', 'name': 'Гилевич Виталий', 'id': 4598651}, {'ava': 'https://pp.userapi.com/c636627/v636627663/350b9/bjoxSOoJ25A.jpg', 'name': 'Сурганова Оля', 'id': 8408663}, {'ava': 'https://pp.userapi.com/c623418/v623418258/2d09d/H-l74CkGK6Q.jpg', 'name': 'Назаров Андрей', 'id': 23751258}]
        },
        {name:'Октябрьский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c5583/v5583748/511/GTorAagnh1c.jpg', 'name': 'Макиенок Альберт', 'id': 7889748}]
        },
        {name:'Омск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c636525/v636525988/1b2a1/mTbWhaBUCNM.jpg', 'name': 'Тудос Владимир', 'id': 23076988}, {'ava': 'https://pp.userapi.com/c639229/v639229183/39dd0/0I6-8-nfRr0.jpg', 'name': 'Джанныева Анастасия', 'id': 25216940}, {'ava': 'https://pp.userapi.com/c4185/v4185710/3a/vDQRiJV_dRQ.jpg', 'name': 'Плюхин Андрей', 'id': 26294710}]
        },
        {name:'Оренбург',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840120/v840120852/14f19/1bdSgNV2Iao.jpg', 'name': 'Грызунова Нелли', 'id': 11309877}]
        },
        {name:'Орехово-Зуево',n:2,
        users:[{'ava': 'https://pp.userapi.com/c637921/v637921901/2e61f/MwJmZEyau1Q.jpg', 'name': 'Савельев Денис', 'id': 17563901}, {'ava': 'https://pp.userapi.com/c837639/v837639969/52fd7/FwHcj33KCmU.jpg', 'name': 'Фоломкин Александр', 'id': 25655976}]
        },
        {name:'Орёл',n:2,
        users:[{'ava': 'https://pp.userapi.com/c604427/v604427716/3cc7a/0gwNYmboxOI.jpg', 'name': 'Лапкин Александр', 'id': 5316716}, {'ava': 'https://pp.userapi.com/c403725/v403725815/3a6d/FTaTPSeK1Qo.jpg', 'name': 'Линьков Вадим', 'id': 5761815}]
        },
        {name:'Оханск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631329/v631329960/1d310/AM7FFqEaHmQ.jpg', 'name': 'Молотилов Дмитрий', 'id': 10946960}]
        },
        {name:'Павловский Посад',n:1,
        users:[{'ava': 'https://pp.userapi.com/c629506/v629506550/3e21/jOSRvu-Yw-g.jpg', 'name': 'Ровковский Михаил', 'id': 2637550}]
        },
        {name:'Пенза',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626127/v626127093/2c371/1t97iArxpZg.jpg', 'name': 'Русинов Евгений', 'id': 746093}]
        },
        {name:'Пермь',n:5,
        users:[{'ava': 'https://pp.userapi.com/c636216/v636216934/15e2/_VAbxyOLiWU.jpg', 'name': 'Кошкина Настенька', 'id': 2443934}, {'ava': 'https://pp.userapi.com/c837534/v837534603/3dc61/doh4rMcgPt8.jpg', 'name': 'Миненко Митя', 'id': 4610603}, {'ava': 'https://pp.userapi.com/c837735/v837735933/a253/xgyrgAcJVU4.jpg', 'name': 'Попов Серж', 'id': 5600933}, {'ava': 'https://pp.userapi.com/c639316/v639316134/4afe3/kP-4l0C0X6k.jpg', 'name': 'Винакова Наталья', 'id': 9919297}, {'ava': 'https://pp.userapi.com/c625617/v625617626/554f0/CxitZ32WwAQ.jpg', 'name': 'Желтышев Егор', 'id': 12292626}]
        },
        {name:'Петрозаводск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c836226/v836226324/5e6e9/XKWFotCL23Q.jpg', 'name': 'Гонтарь Евгения', 'id': 2688133}, {'ava': 'https://pp.userapi.com/c625225/v625225939/529b4/qhMdD9Q2tBY.jpg', 'name': 'Андрейчук Людмила', 'id': 6269973}, {'ava': 'https://pp.userapi.com/c626518/v626518027/23744/An1cafOz1fM.jpg', 'name': 'Кишкин Александр', 'id': 8351027}, {'ava': 'https://pp.userapi.com/c638030/v638030974/4f56b/eenq01SiN9Q.jpg', 'name': 'Мясников Владислав', 'id': 12042151}]
        },
        {name:'Петропавловск-Камчатский',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c639824/v639824279/3b4e5/E0YqG4DSCE0.jpg', 'name': 'Шмаков Евгений', 'id': 19465102}]
        },
        {name:'Пинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637827/v637827031/589a9/_HDmI3cjo2A.jpg', 'name': 'Пилипенко Вячеслав', 'id': 14694031}]
        },
        {name:'Питер',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837339/v837339678/17b7f/NOWCJf6SrJc.jpg', 'name': 'Петрова Ксения', 'id': 1118678}]
        },
        {name:'Полевской',n:1,
        users:[{'ava': 'https://pp.userapi.com/c9301/u22144785/e_19c47fee.jpg', 'name': 'Чураев Шама', 'id': 22144785}]
        },
        {name:'Псков',n:4,
        users:[{'ava': 'https://pp.userapi.com/c836129/v836129806/384d1/Fm7-Zc3I03Y.jpg', 'name': 'Царегородцева Алиса', 'id': 1529806}, {'ava': 'https://pp.userapi.com/c638617/v638617258/5c2ec/pt21-WuqWWA.jpg', 'name': 'Печёркина Анастасия', 'id': 4287312}, {'ava': 'https://pp.userapi.com/c837234/v837234476/526db/TpZSUe14icc.jpg', 'name': 'Гаврилов Сергей', 'id': 6011262}, {'ava': 'https://pp.userapi.com/c836725/v836725088/4ac9a/XixZ2k5ahgs.jpg', 'name': 'Чемоганский Сергей', 'id': 13578088}]
        },
        {name:'Пудож',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627822/v627822867/38a55/IYDSohfs4gU.jpg', 'name': 'Фишер Таня', 'id': 2311867}]
        },
        {name:'Пушкин',n:2,
        users:[{'ava': 'https://pp.userapi.com/c841136/v841136242/15aa1/wPwSJkt3PwA.jpg', 'name': 'Папст Наталья', 'id': 4053159}, {'ava': 'https://pp.userapi.com/c636319/v636319106/61d26/M3Tz34s3vak.jpg', 'name': 'Гришан Юлия', 'id': 6348106}]
        },
        {name:'Раменское',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639530/v639530872/25c94/L6XVvZWTQbQ.jpg', 'name': 'Аникеев Иван', 'id': 2786872}]
        },
        {name:'Ревда',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837624/v837624849/67d3c/a9N2bcuC5g8.jpg', 'name': 'Мценский Павел', 'id': 1127965}, {'ava': 'https://pp.userapi.com/c4552/u23591020/e_6070bd74.jpg', 'name': 'Наговицын Роман', 'id': 23591020}]
        },
        {name:'Ришон ЛеЦион',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837726/v837726841/4873b/5eXhC2OG3Xc.jpg', 'name': 'Ковнацкая Лена', 'id': 6188213}]
        },
        {name:'Ростов',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837320/v837320529/3252e/78GUlExcd04.jpg', 'name': 'Никольский Денис', 'id': 10800529}]
        },
        {name:'Ростов-на-Дону',n:8,
        users:[{'ava': 'https://pp.userapi.com/c836731/v836731989/58cca/ZPFDT1yAz90.jpg', 'name': 'Богачёв Денис', 'id': 1377841}, {'ava': 'https://pp.userapi.com/c629427/v629427662/2d45/oSto8lAE58I.jpg', 'name': 'Филиппов Юрий', 'id': 4096662}, {'ava': 'https://pp.userapi.com/c630216/v630216095/2cee2/ZavKgNuEWT0.jpg', 'name': 'Тютюнников Александр', 'id': 4727095}, {'ava': 'https://pp.userapi.com/c630223/v630223276/3f7e2/ARgEqsRwZvQ.jpg', 'name': 'Корбан Олег', 'id': 5860276}, {'ava': 'https://pp.userapi.com/c837722/v837722063/6180e/g9_WKzJEMJk.jpg', 'name': 'Закитина Любовь', 'id': 6768932}, {'ava': 'https://pp.userapi.com/c841536/v841536541/f4f4/DPuzbW0BTAI.jpg', 'name': 'Чернышева Аня', 'id': 7797781}, {'ava': 'https://pp.userapi.com/c836727/v836727257/727af/8Cfa7ZFrkeg.jpg', 'name': 'Шульга Елена', 'id': 10125637}, {'ava': 'https://pp.userapi.com/c636924/v636924659/569f8/CgAlIgXxeLk.jpg', 'name': 'Тимошенко Дарья', 'id': 17739659}]
        },
        {name:'Рыбинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c625520/v625520389/500ac/V8Tx6bHzND4.jpg', 'name': 'Смирнова Маргарита', 'id': 15078389}]
        },
        {name:'Рязань',n:5,
        users:[{'ava': 'https://pp.userapi.com/c638231/v638231346/4d7de/ZuNZfiog2VY.jpg', 'name': 'Раева Александра', 'id': 3335346}, {'ava': 'https://pp.userapi.com/c630617/v630617672/3bdb0/eYvTFLv5dCg.jpg', 'name': 'Московкин Владимир', 'id': 4434672}, {'ava': 'https://pp.userapi.com/c633930/v633930886/e6d8/VKISm6Cy_0E.jpg', 'name': 'Стерликов Макс', 'id': 9639886}, {'ava': 'https://pp.userapi.com/c639526/v639526831/4152d/t7xpEqPK6v8.jpg', 'name': 'Астафьев Вячеслав', 'id': 16858974}, {'ava': 'https://pp.userapi.com/c4564/u18003638/e_6247d429.jpg', 'name': 'Тырнов Иван', 'id': 18003638}]
        },
        {name:'Саки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c633616/v633616197/182f6/8P_g_WnTsmI.jpg', 'name': 'Ларенков Сережа', 'id': 15199197}]
        },
        {name:'Самара',n:10,
        users:[{'ava': 'https://pp.userapi.com/c419119/v419119552/8100/F85AME_Mlj0.jpg', 'name': 'Чернов Виталий', 'id': 1182552}, {'ava': 'https://pp.userapi.com/c836128/v836128933/37f12/Rv8cZRnosis.jpg', 'name': 'Коновалова Татьяна', 'id': 1227933}, {'ava': 'https://sun9-11.userapi.com/c836723/v836723501/e36f/VXPE27YfPyM.jpg', 'name': 'Баранов Федор', 'id': 3248501}, {'ava': 'https://pp.userapi.com/c837225/v837225018/3f26c/sAXNKgDVc2U.jpg', 'name': 'Митрохин Владимир', 'id': 5223018}, {'ava': 'https://pp.userapi.com/c4320/v4320300/e3/dmvFKLVi8Kw.jpg', 'name': 'Родина Юлия', 'id': 6087300}, {'ava': 'https://pp.userapi.com/c837428/v837428914/53f8e/uN68KRQIz0A.jpg', 'name': 'Бунеев Ярослав', 'id': 8461914}, {'ava': 'https://pp.userapi.com/c636529/v636529641/65157/yguQjXT2CyQ.jpg', 'name': 'Трушков Александр', 'id': 19108641}, {'ava': 'https://pp.userapi.com/c630526/v630526130/2ac36/KjAG5emrXYE.jpg', 'name': 'Краснеев Роман', 'id': 19140130}, {'ava': 'https://pp.userapi.com/c621509/v621509680/199f3/g9-Sg0EqiU4.jpg', 'name': 'Разин Алексей', 'id': 23524310}, {'ava': 'https://pp.userapi.com/c604424/v604424289/39452/dvDODJQccBg.jpg', 'name': 'Гарипов Марат', 'id': 25881289}]
        },
        {name:'Санкт-Петербург',n:143,
        users:[{'ava': 'https://pp.userapi.com/c637526/v637526080/2cbb/WHPVk32HKJg.jpg', 'name': 'Литвинова Надька', 'id': 2080}, {'ava': 'https://pp.userapi.com/c10841/u30384/e_abf4c16c.jpg', 'name': 'Власенко Андрей', 'id': 30384}, {'ava': 'https://pp.userapi.com/c637417/v637417812/4cc08/E256mIM-J6U.jpg', 'name': 'Белякова Ирина', 'id': 30812}, {'ava': 'https://pp.userapi.com/c841232/v841232883/11224/FpJXD28g4Kg.jpg', 'name': 'Белецкая Мария', 'id': 35856}, {'ava': 'https://pp.userapi.com/c836131/v836131288/4553e/gmjUeVAmGDM.jpg', 'name': 'Гюппенен Мария', 'id': 41288}, {'ava': 'https://pp.userapi.com/c638922/v638922999/7b337/jH_kgWM9m2E.jpg', 'name': 'Лукогорская Ольга', 'id': 51979}, {'ava': 'https://pp.userapi.com/c841624/v841624774/1586a/IAN3MNPDmrI.jpg', 'name': 'Макарова Алёна', 'id': 63715}, {'ava': 'https://pp.userapi.com/c636920/v636920377/437d7/mnuFcmFQC0A.jpg', 'name': 'Сивенко Ася', 'id': 96377}, {'ava': 'https://pp.userapi.com/c604621/v604621050/4af3/6E9-14NqQG0.jpg', 'name': 'Назарова Татьяна', 'id': 136050}, {'ava': 'https://pp.userapi.com/c633230/v633230835/1353c/pD8yYN_F7bc.jpg', 'name': 'Орезович Дмитрий', 'id': 168835}, {'ava': 'https://pp.userapi.com/c840233/v840233967/22757/tE88SRQjUt8.jpg', 'name': 'Шитикова Женя', 'id': 187294}, {'ava': 'https://pp.userapi.com/c315128/v315128085/8721/0XuqhZC_JUU.jpg', 'name': 'Taratuta Anton', 'id': 192085}, {'ava': 'https://pp.userapi.com/c10352/v10352863/6a5/BXKvVBeDAYg.jpg', 'name': 'Барановская Наталия', 'id': 197863}, {'ava': 'https://pp.userapi.com/c636322/v636322821/3b4c1/U3wtNPgOaFE.jpg', 'name': 'Богданов Евгений', 'id': 199821}, {'ava': 'https://pp.userapi.com/c627130/v627130788/783b/5kKbEwDoXPA.jpg', 'name': 'Евстратов Рома', 'id': 201788}, {'ava': 'https://pp.userapi.com/c629404/v629404688/a18a/UcGu1L3H1-k.jpg', 'name': 'Малин Сергей', 'id': 206688}, {'ava': 'https://pp.userapi.com/c637717/v637717291/4b5cc/CB4zEPiih4o.jpg', 'name': 'Перелыгин Максим', 'id': 211291}, {'ava': 'https://pp.userapi.com/c638219/v638219785/3bdea/Qorr2bbqJyo.jpg', 'name': 'Николаева Хельга', 'id': 276785}, {'ava': 'https://pp.userapi.com/c619929/v619929850/19281/N_8UxgBdmiY.jpg', 'name': 'Требунских Алексей', 'id': 317850}, {'ava': 'https://pp.userapi.com/c187/v187774/189d/jhZhpPrryAU.jpg', 'name': 'Печалина Анна', 'id': 342774}, {'ava': 'https://pp.userapi.com/c836622/v836622002/66c3b/6Seb848e0JY.jpg', 'name': 'Эльвова Лидия', 'id': 348268}, {'ava': 'https://pp.userapi.com/c841430/v841430549/80d0/tF3B78wj23Y.jpg', 'name': 'Паньшина Екатерина', 'id': 377575}, {'ava': 'https://pp.userapi.com/c619221/v619221470/1bf0a/Ei3lHrpinYo.jpg', 'name': 'Домащенко Андрей', 'id': 384470}, {'ava': 'https://pp.userapi.com/c836724/v836724972/5e1da/bMkGYelHSBo.jpg', 'name': 'Уханова Карина', 'id': 388073}, {'ava': 'https://pp.userapi.com/c317217/u388264/e_17501473.jpg', 'name': 'Андрусов Кирилл', 'id': 388264}, {'ava': 'https://pp.userapi.com/c307705/v307705760/96ef/9LNRP5XklCI.jpg', 'name': 'Десятерик Илья', 'id': 402760}, {'ava': 'https://pp.userapi.com/c841424/v841424570/110e3/qS2VnHWeLDc.jpg', 'name': 'Селиверстова Анна', 'id': 412159}, {'ava': 'https://pp.userapi.com/c322121/v322121336/5c94/WwvHYUagoFI.jpg', 'name': 'Партанен Александр', 'id': 417336}, {'ava': 'https://pp.userapi.com/c836733/v836733624/64df0/y6DidcL0H8A.jpg', 'name': 'Гуменюк Алина', 'id': 445420}, {'ava': 'https://pp.userapi.com/c638521/v638521163/6fb30/Sy9fj5QIM04.jpg', 'name': 'Костюк Артем', 'id': 481596}, {'ava': 'https://pp.userapi.com/c637518/v637518493/efed/mtqmrPcxZeg.jpg', 'name': 'Глузман Борис', 'id': 484493}, {'ava': 'https://pp.userapi.com/c837238/v837238084/4cf28/6q_vvd3IG94.jpg', 'name': 'Kostina-Vinogradova Maria', 'id': 488495}, {'ava': 'https://pp.userapi.com/c636725/v636725391/23532/5XUHyLjZRrQ.jpg', 'name': 'Рыбаков Алексей', 'id': 617391}, {'ava': 'https://pp.userapi.com/c629427/v629427412/4e764/qvXEH8Uabl0.jpg', 'name': 'Федотов Борис', 'id': 636412}, {'ava': 'https://pp.userapi.com/c604418/v604418588/43db3/HiQ3k-fZRJc.jpg', 'name': 'Прищепенко Алена', 'id': 682588}, {'ava': 'https://pp.userapi.com/c421320/v421320660/5b04/QUtMr0TFZSo.jpg', 'name': 'Ковалева Ирина', 'id': 720660}, {'ava': 'https://pp.userapi.com/c638621/v638621151/1518f/NEcixnq0-Uc.jpg', 'name': 'Пырсов Вячеслав', 'id': 728151}, {'ava': 'https://pp.userapi.com/c623430/v623430167/a98c/_j6CAVNc2k8.jpg', 'name': 'Канг Лю', 'id': 731167}, {'ava': 'https://pp.userapi.com/c837533/v837533771/2aa73/D4kUpYzfN3w.jpg', 'name': 'Grishatkina Natalya', 'id': 751771}, {'ava': 'https://pp.userapi.com/c837633/v837633274/59b2c/1dQEkkJQMWs.jpg', 'name': 'Григорьева Анна', 'id': 767336}, {'ava': 'https://pp.userapi.com/c837624/v837624231/5e916/Zy9kpl09Xic.jpg', 'name': 'Смирнов Кирилл', 'id': 796117}, {'ava': 'https://pp.userapi.com/c633926/v633926079/2d76c/Ojw_1kSIEek.jpg', 'name': 'Зубрилина Анька', 'id': 813079}, {'ava': 'https://pp.userapi.com/c633929/v633929505/13c74/KIPEw54_3P4.jpg', 'name': 'Капранов Константин', 'id': 833505}, {'ava': 'https://pp.userapi.com/c638123/v638123439/43a6a/tOjJ-NxLtJo.jpg', 'name': 'Махонен Тимо', 'id': 915439}, {'ava': 'https://pp.userapi.com/c629426/v629426600/e2f2/NfwAPUBxl8s.jpg', 'name': 'Коссе Дмитрий', 'id': 1028600}, {'ava': 'https://pp.userapi.com/c841127/v841127305/16205/7ivRy45lphw.jpg', 'name': 'Лиманская Анна', 'id': 1078425}, {'ava': 'https://pp.userapi.com/c626519/v626519911/41d7/34-LG5e8t7U.jpg', 'name': 'Марков Олег', 'id': 1082911}, {'ava': 'https://pp.userapi.com/c638531/v638531322/34656/HAHLnHjTIgM.jpg', 'name': 'Матвеева Александра', 'id': 1136322}, {'ava': 'https://pp.userapi.com/c639525/v639525762/44bf4/JQKiqVtrZQM.jpg', 'name': 'Мамонтова Илона', 'id': 1143233}, {'ava': 'https://pp.userapi.com/c638919/v638919673/61826/4WsMzAOmkoE.jpg', 'name': 'Карасева Анечка', 'id': 1180018}, {'ava': 'https://pp.userapi.com/c639722/v639722445/4485b/u3jY7raPqBU.jpg', 'name': 'Филатов Даниил', 'id': 1222521}, {'ava': 'https://pp.userapi.com/c638224/v638224580/5a425/j5Zj0n2CyLA.jpg', 'name': 'Лисичкина Ирина', 'id': 1247427}, {'ava': 'https://pp.userapi.com/c836531/v836531801/2efcd/d9XtdE6K7O4.jpg', 'name': 'Шерматов Рустам', 'id': 1280801}, {'ava': 'https://pp.userapi.com/c638022/v638022117/567fb/2Rk2fjDHxMo.jpg', 'name': 'Дмитриева Мария', 'id': 1305078}, {'ava': 'https://pp.userapi.com/c412618/v412618000/891c/gJ0qAVGgjzo.jpg', 'name': 'Можаев Дмитрий', 'id': 1362000}, {'ava': 'https://pp.userapi.com/c440/u1431183/e_e1ab7610.jpg', 'name': 'Хижняк Анна', 'id': 1431183}, {'ava': 'https://pp.userapi.com/c837727/v837727615/4ac87/Rf6IW788ick.jpg', 'name': 'Иванов Андрей', 'id': 1441697}, {'ava': 'https://pp.userapi.com/c4287/u1540625/e_6324d053.jpg', 'name': 'Иванов Юрий', 'id': 1540625}, {'ava': 'https://pp.userapi.com/c638627/v638627287/61c0a/xF-qhc0NTlw.jpg', 'name': 'Димов Сергей', 'id': 1571620}, {'ava': 'https://pp.userapi.com/c837737/v837737031/52e76/Z9_Tn9X92ec.jpg', 'name': 'Белозерцева Анастасия', 'id': 1725946}, {'ava': 'https://pp.userapi.com/c628828/v628828662/12f54/pHdNq8Zp9C0.jpg', 'name': 'Коваленко Наталия', 'id': 1842662}, {'ava': 'https://pp.userapi.com/c1246/u1846244/e_dce37cd6.jpg', 'name': 'Кузьмин Алексей', 'id': 1846244}, {'ava': 'https://pp.userapi.com/c841425/v841425850/1726a/yM_8E7YD1ow.jpg', 'name': 'Литвиненко Ева', 'id': 1902001}, {'ava': 'https://pp.userapi.com/c638928/v638928939/4da83/25436YJZEG8.jpg', 'name': 'Баженов Евгений', 'id': 1976939}, {'ava': 'https://pp.userapi.com/c639321/v639321657/3eedb/1lWd3TMHuxg.jpg', 'name': 'Матюш Ксения', 'id': 2206186}, {'ava': 'https://pp.userapi.com/c628018/v628018077/ee85/y3sSF6t94V8.jpg', 'name': 'Сашина Наталья', 'id': 2238077}, {'ava': 'https://pp.userapi.com/c639522/v639522000/3d4c1/3SEIf-UZ6Lc.jpg', 'name': 'Сидункова Татьяна', 'id': 2557278}, {'ava': 'https://pp.userapi.com/c637521/v637521303/5d2fc/qnZBK9hCtWM.jpg', 'name': 'Калашников Дима', 'id': 2677920}, {'ava': 'https://pp.userapi.com/c840328/v840328018/562f/5H8wjiQ2Vec.jpg', 'name': 'Богданова Валерия', 'id': 2888356}, {'ava': 'https://pp.userapi.com/c638119/v638119114/51d3d/Ui84ywuc_rg.jpg', 'name': 'Новиков Игорь', 'id': 3233114}, {'ava': 'https://pp.userapi.com/c629217/v629217261/121ce/9zankKaySbg.jpg', 'name': 'Пискарёва Юлия', 'id': 3371261}, {'ava': 'https://pp.userapi.com/c637723/v637723435/48e67/WUjvRbL5Q3o.jpg', 'name': 'Броститов Илья', 'id': 3474435}, {'ava': 'https://pp.userapi.com/c5602/u3515005/e_7764847c.jpg', 'name': 'Каменецкий Андрей', 'id': 3515005}, {'ava': 'https://sun9-11.userapi.com/c840724/v840724674/543c/rqIJSSVlaCw.jpg', 'name': 'Киевич Елена', 'id': 3520799}, {'ava': 'https://pp.userapi.com/c639423/v639423772/30a18/8nrJMwki34k.jpg', 'name': 'Журавель Маша', 'id': 3610931}, {'ava': 'https://pp.userapi.com/c639231/v639231651/29995/-2d4KGRQft0.jpg', 'name': 'Леонтьева Анна', 'id': 3656651}, {'ava': 'https://pp.userapi.com/c636825/v636825722/63a37/MRtRRJWDRAY.jpg', 'name': 'Суровцев Даниил', 'id': 3780722}, {'ava': 'https://pp.userapi.com/c836437/v836437984/63161/ktMSvEv3ImQ.jpg', 'name': 'Брязгина Ольга', 'id': 3811522}, {'ava': 'https://pp.userapi.com/c628629/v628629427/42c6d/u4KS3-yQ3xg.jpg', 'name': 'Булахова Юля', 'id': 3815427}, {'ava': 'https://pp.userapi.com/c637526/v637526194/4c3cd/LXeICTsHHK0.jpg', 'name': 'Vinogradova Наталия', 'id': 3864194}, {'ava': 'https://pp.userapi.com/c837735/v837735502/6df7a/XTUCcwfPcrE.jpg', 'name': 'Барабанова Елена', 'id': 4022897}, {'ava': 'https://pp.userapi.com/c636431/v636431788/1ab20/T3reBbMGqHI.jpg', 'name': 'Перман Андрей', 'id': 4076788}, {'ava': 'https://pp.userapi.com/c638720/v638720575/507f9/1SJJtkLqJow.jpg', 'name': 'Абросимов Дмитрий', 'id': 4159818}, {'ava': 'https://pp.userapi.com/c638027/v638027723/4f729/RcZvAAugzJU.jpg', 'name': 'Алексеев Кирилл', 'id': 4361571}, {'ava': 'https://pp.userapi.com/c638428/v638428108/49eb7/AZiduHApqeU.jpg', 'name': 'Соколова Наташа', 'id': 4362108}, {'ava': 'https://pp.userapi.com/c620017/v620017597/482d/F-xoJTv7sw8.jpg', 'name': 'Пилипчук Сергей', 'id': 4374597}, {'ava': 'https://pp.userapi.com/c631623/v631623158/38424/pWAYdwkePuk.jpg', 'name': 'Феферман Евгений', 'id': 4417158}, {'ava': 'https://pp.userapi.com/c616029/v616029597/26967/FtLslWdArTw.jpg', 'name': 'фон Штакельберг Тихон', 'id': 4656597}, {'ava': 'https://pp.userapi.com/c639325/v639325924/464cc/VQK15yV_pBQ.jpg', 'name': 'Кандричин Антон', 'id': 4796975}, {'ava': 'https://pp.userapi.com/c622816/v622816041/4e539/i5J_M3y9d88.jpg', 'name': 'Сало Дмитрий', 'id': 4864041}, {'ava': 'https://pp.userapi.com/c841335/v841335717/dfa9/Spps3GA8fQY.jpg', 'name': 'Егорова Анастасия', 'id': 5117935}, {'ava': 'https://pp.userapi.com/c637819/v637819565/608da/9hviUsFstOI.jpg', 'name': 'Дятлова Алёна', 'id': 5441653}, {'ava': 'https://pp.userapi.com/c840028/v840028607/24b31/shWKYiRlo4U.jpg', 'name': 'Григорьева Камилла', 'id': 6490548}, {'ava': 'https://pp.userapi.com/c630018/v630018014/430c9/xkCWFxDNS8g.jpg', 'name': 'Фокеев Олег', 'id': 6537014}, {'ava': 'https://pp.userapi.com/c639130/v639130045/3738a/EMFu0_SANnY.jpg', 'name': 'Фенглер Юлия', 'id': 6618366}, {'ava': 'https://pp.userapi.com/c841232/v841232187/ecb4/n7yvd9yfi8k.jpg', 'name': 'Белавина Анна', 'id': 6745290}, {'ava': 'https://pp.userapi.com/c836639/v836639265/5b1e5/98uJfjH7YAg.jpg', 'name': 'Кириков Саша', 'id': 6832327}, {'ava': 'https://pp.userapi.com/c841237/v841237189/184bf/yrwMp1oWzZs.jpg', 'name': 'Мальцева Татьяна', 'id': 6957548}, {'ava': 'https://pp.userapi.com/c841425/v841425414/ab96/0XTeckPvXUw.jpg', 'name': 'Максимов Константин', 'id': 7138102}, {'ava': 'https://sun9-11.userapi.com/c840631/v840631314/8228/f1rkgBFz20s.jpg', 'name': 'Zakharchenko Anastasia', 'id': 7283787}, {'ava': 'https://pp.userapi.com/c639522/v639522782/4b192/1ORCDEevkOw.jpg', 'name': 'Timofeeva Natali', 'id': 7438109}, {'ava': 'https://pp.userapi.com/c638217/v638217387/5a53a/4Y1dy2XlBVA.jpg', 'name': 'Писаренко Игорь', 'id': 7682684}, {'ava': 'https://pp.userapi.com/c636918/v636918116/65e01/bg6ipUhbFCQ.jpg', 'name': 'Носков Юрий', 'id': 7709116}, {'ava': 'https://pp.userapi.com/c627623/v627623916/2a03c/n5roaVJGJeo.jpg', 'name': 'Троицкий Олег', 'id': 7898916}, {'ava': 'https://pp.userapi.com/c625828/v625828366/43b32/NM5rh0zwr0s.jpg', 'name': 'Кондакова Людмила', 'id': 7996366}, {'ava': 'https://pp.userapi.com/c638219/v638219389/54410/yl95tRf7N8A.jpg', 'name': 'Стёпина Татьяна', 'id': 8180592}, {'ava': 'https://pp.userapi.com/c627923/v627923260/239c5/fgpslCtvEhE.jpg', 'name': 'Угольников Алексей', 'id': 8494260}, {'ava': 'https://sun9-11.userapi.com/c840638/v840638457/3c02/Kbq4FdEQm60.jpg', 'name': 'Шилков Алексей', 'id': 8527018}, {'ava': 'https://pp.userapi.com/c837322/v837322867/1735/NF5H40KxEKs.jpg', 'name': 'Ямгуров Рамиль', 'id': 8570867}, {'ava': 'https://pp.userapi.com/c621702/v621702667/12cbc/T2vUOmjKogY.jpg', 'name': 'Дмитриева Валентинка', 'id': 8704638}, {'ava': 'https://pp.userapi.com/c639427/v639427240/3ec48/TxLHdQeH21M.jpg', 'name': 'Рогачёва Леночка', 'id': 9595698}, {'ava': 'https://pp.userapi.com/c836425/v836425310/ca85/rVL4oXc8PJc.jpg', 'name': 'Крезуб Олег', 'id': 9707310}, {'ava': 'https://pp.userapi.com/c637921/v637921374/3ddfc/YSTQdCL8pHs.jpg', 'name': 'Рачинин Александр', 'id': 9721374}, {'ava': 'https://pp.userapi.com/c639427/v639427546/3c6e/LlLdV5J3EtQ.jpg', 'name': 'Зыкин Артём', 'id': 10167546}, {'ava': 'https://pp.userapi.com/c626128/v626128205/2acc1/q8GC8IQvERM.jpg', 'name': 'Пискова Тоня', 'id': 10327205}, {'ava': 'https://pp.userapi.com/c837330/v837330681/4da06/38CWSxyqoJ4.jpg', 'name': 'Калмыкова Анна', 'id': 10597054}, {'ava': 'https://pp.userapi.com/c836222/v836222701/3eb93/dfvxE2fAcG0.jpg', 'name': 'Крапивина Татьяна', 'id': 11292701}, {'ava': 'https://pp.userapi.com/c837133/v837133317/1c35b/p6g3DGvzBHw.jpg', 'name': 'Гуреев Максим', 'id': 11397317}, {'ava': 'https://pp.userapi.com/c837536/v837536599/45758/grL1OmlzbTw.jpg', 'name': 'Король Руслан', 'id': 11437599}, {'ava': 'https://pp.userapi.com/c841220/v841220284/113e7/AqudZyjvHx0.jpg', 'name': 'Борзенкова Елизавета', 'id': 11743166}, {'ava': 'https://pp.userapi.com/c841028/v841028864/2f15/rfg-QUt3Nbc.jpg', 'name': 'Никитина Елена', 'id': 11776864}, {'ava': 'https://pp.userapi.com/c841523/v841523312/1a6d8/Ncl2Zxw71CQ.jpg', 'name': 'Kulieva Yulia', 'id': 11813188}, {'ava': 'https://pp.userapi.com/c604519/v604519017/235c9/qalFVVLvnzs.jpg', 'name': 'Дмитриева Татьяна', 'id': 11883017}, {'ava': 'https://pp.userapi.com/c841524/v841524234/1cfbc/EP_zUZiUSy4.jpg', 'name': 'Гончаров Артем', 'id': 12656913}, {'ava': 'https://pp.userapi.com/c621703/v621703632/16803/y8BqOBdsvto.jpg', 'name': 'Никитин Игорь', 'id': 12787749}, {'ava': 'https://pp.userapi.com/c638618/v638618436/41422/lGbkLAXSf5g.jpg', 'name': 'Razmanova Anastasiia', 'id': 14597436}, {'ava': 'https://pp.userapi.com/c639620/v639620919/351cb/_clpdB_oFeg.jpg', 'name': 'Рыбакин Михаил', 'id': 15391063}, {'ava': 'https://pp.userapi.com/c624321/v624321087/375e8/08orFE7ExPs.jpg', 'name': 'Хаматдинов Василь', 'id': 16718087}, {'ava': 'https://pp.userapi.com/c620019/v620019663/1ca0d/4o4v9bXZWdE.jpg', 'name': 'Медведюк Владимир', 'id': 17776663}, {'ava': 'https://sun9-11.userapi.com/c840528/v840528463/4640/p53sBCSr00I.jpg', 'name': 'Иванова Мария', 'id': 18334280}, {'ava': 'https://pp.userapi.com/c836433/v836433202/62d2f/zdVo4AyQbkM.jpg', 'name': 'Задворных Сергей', 'id': 18929202}, {'ava': 'https://pp.userapi.com/c841138/v841138393/feb9/FcoWxf_SRHE.jpg', 'name': 'Морган Дарья', 'id': 19360709}, {'ava': 'https://pp.userapi.com/c837632/v837632615/496e0/I-B_9MyuIY0.jpg', 'name': 'Швецова Светлана', 'id': 22556615}, {'ava': 'https://pp.userapi.com/c841122/v841122910/1c2b6/oUH-kfg73Fk.jpg', 'name': 'Сидоров Глеб', 'id': 22557263}, {'ava': 'https://pp.userapi.com/c841033/v841033349/20201/koOYeTOas0A.jpg', 'name': 'Пашнин Валерий', 'id': 23619213}, {'ava': 'https://pp.userapi.com/c637629/v637629434/5115f/18I-Usn_OXs.jpg', 'name': 'Дементьев Иван', 'id': 24589434}, {'ava': 'https://pp.userapi.com/c604731/v604731876/24782/7YDFKsOv2Tw.jpg', 'name': 'Арсеньев Денис', 'id': 24924876}, {'ava': 'https://pp.userapi.com/c9987/u25042079/e_c4e2199b.jpg', 'name': 'Козлова Марина', 'id': 25042079}, {'ava': 'https://pp.userapi.com/c639321/v639321804/3f505/wbQaJiByHDs.jpg', 'name': 'Катаной Кристина', 'id': 26082615}, {'ava': 'https://pp.userapi.com/c412316/v412316577/8879/TiymZT_EUaI.jpg', 'name': 'Амировна Адиля', 'id': 26504576}, {'ava': 'https://pp.userapi.com/c638525/v638525890/3f44b/YNKopvwUZnE.jpg', 'name': 'Филимонов Андрей', 'id': 27737890}, {'ava': 'https://pp.userapi.com/c630227/v630227618/53f2e/ipMP0T_R_tU.jpg', 'name': 'Бычков Коля', 'id': 29564618}, {'ava': 'https://pp.userapi.com/c837723/v837723704/6395e/DKG_qjVJET4.jpg', 'name': 'Яковлева Анна', 'id': 30847397}]
        },
        {name:'Саранск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841636/v841636305/c466/CxOrJtzOqWw.jpg', 'name': 'Сухова Мария', 'id': 22099169}]
        },
        {name:'Саратов',n:11,
        users:[{'ava': 'https://pp.userapi.com/c841634/v841634061/3b54/ShxnkQaCjYA.jpg', 'name': 'Пальчикова Ольга', 'id': 5722061}, {'ava': 'https://pp.userapi.com/c638024/v638024839/58ce9/PA5w1nSLtZM.jpg', 'name': 'Салтыкова Татьяна', 'id': 6362082}, {'ava': 'https://pp.userapi.com/c629307/v629307483/1f95f/f19sEjxVwT0.jpg', 'name': 'Николаевич Артём', 'id': 8086483}, {'ava': 'https://pp.userapi.com/c10301/u11341362/e_d84b11b6.jpg', 'name': 'Жарков Денис', 'id': 11341362}, {'ava': 'https://pp.userapi.com/c638317/v638317763/50e23/QzQP7rrYxJI.jpg', 'name': 'Топильская Ольга', 'id': 12277081}, {'ava': 'https://pp.userapi.com/c637621/v637621106/4cd26/jnOiuMjwnGo.jpg', 'name': 'Бекирова Виктория', 'id': 12587106}, {'ava': 'https://pp.userapi.com/c836137/v836137141/5720e/Ycs6ci7plKk.jpg', 'name': 'Руковичникова Лина', 'id': 18731257}, {'ava': 'https://pp.userapi.com/c626325/v626325052/2e735/AQjgZ_SAnp4.jpg', 'name': 'Житников Валера', 'id': 23207052}, {'ava': 'https://pp.userapi.com/c613419/v613419636/1b0f2/pLkCHDHD5p0.jpg', 'name': 'Иванова Ирина', 'id': 25605636}, {'ava': 'https://pp.userapi.com/c837136/v837136836/46350/8YpoKxPFflE.jpg', 'name': 'Петров Артем', 'id': 26076066}, {'ava': 'https://pp.userapi.com/c633224/v633224208/3c717/j83dxnKiP4k.jpg', 'name': 'Abdrashitov Oleg', 'id': 26538208}]
        },
        {name:'Севастополь',n:5,
        users:[{'ava': 'https://sun9-11.userapi.com/c840739/v840739788/3ddc/WOViZd5bKoQ.jpg', 'name': 'Мельникова Юлия', 'id': 1135085}, {'ava': 'https://pp.userapi.com/c626325/v626325663/82c28/ViIgN9JD7Ck.jpg', 'name': 'Ермолаев Алексей', 'id': 2353663}, {'ava': 'https://pp.userapi.com/c638929/v638929405/1b957/3mCAzE5Rtgg.jpg', 'name': 'Ойстрик Александр', 'id': 2541405}, {'ava': 'https://pp.userapi.com/c636228/v636228993/b57c/06tUhJ7E5to.jpg', 'name': 'Новак Василий', 'id': 7330993}, {'ava': 'https://pp.userapi.com/c638317/v638317302/3001f/J_Mq2Pv-I1M.jpg', 'name': 'Koltysheva Dasha', 'id': 7533302}]
        },
        {name:'Северодвинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639629/v639629232/3f4f6/mvneqSWKXg8.jpg', 'name': 'Зыбин Никита', 'id': 1011427}]
        },
        {name:'Северская',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639624/v639624445/3953a/Zek_OSohoMs.jpg', 'name': 'Аксенов Денис', 'id': 10550445}]
        },
        {name:'Сегежа',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631326/v631326237/ae42/v_Fbi2KlCm0.jpg', 'name': 'Заломаева Юлька', 'id': 11599237}]
        },
        {name:'Селятино',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638020/v638020407/25210/_Fm0x7EqQeo.jpg', 'name': 'Лабутин Денис', 'id': 6310407}]
        },
        {name:'Сергиев Посад',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639130/v639130439/20bbb/F3ZqXb49oAE.jpg', 'name': 'Вельдин Андрей', 'id': 4736439}]
        },
        {name:'Сибай',n:1,
        users:[{'ava': 'https://pp.userapi.com/c628117/v628117883/26803/9ycR1laP-7A.jpg', 'name': 'Ягудин Ильдар', 'id': 13474883}]
        },
        {name:'Симферополь',n:4,
        users:[{'ava': 'https://pp.userapi.com/c836122/v836122017/8fae8/EwX_-YGPM7g.jpg', 'name': 'Валерьевич Станислав', 'id': 422039}, {'ava': 'https://pp.userapi.com/c836435/v836435826/3eda1/Py72YTsiemQ.jpg', 'name': 'Бережной Антон', 'id': 1582826}, {'ava': 'https://pp.userapi.com/c637324/v637324274/1b55c/W9OuBkeT-M4.jpg', 'name': 'Шмиголь Николай', 'id': 6575274}, {'ava': 'https://pp.userapi.com/c629328/v629328154/10321/US9MWJM79Xk.jpg', 'name': 'Стебливская Светлана', 'id': 7872154}]
        },
        {name:'Сланцы',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837531/v837531905/62713/BskJOySNMHg.jpg', 'name': 'Брагин Николай', 'id': 10411812}, {'ava': 'https://pp.userapi.com/c626424/v626424858/6a50d/T_zioSnZCL0.jpg', 'name': 'Леонов Сергей', 'id': 17208858}]
        },
        {name:'Смоленск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c301304/u4765912/e_debab5e4.jpg', 'name': 'Ершова Анна', 'id': 4765912}, {'ava': 'https://pp.userapi.com/c837523/v837523059/5bc6c/YXNpvJRLRJM.jpg', 'name': 'Анциферова Маша', 'id': 27293518}]
        },
        {name:'Снегири',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837525/v837525895/5fa37/HReIaiEareU.jpg', 'name': 'Голованова Ксения', 'id': 6092382}]
        },
        {name:'Солигорск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836126/v836126221/4756d/q-e-4sHfH-4.jpg', 'name': 'Жукова Марина', 'id': 28814213}]
        },
        {name:'Солнечногорск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627322/v627322230/12fb/8fShKYM5Fq0.jpg', 'name': 'Зимкина Юлия', 'id': 3865230}]
        },
        {name:'Сосновый Бор',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639429/v639429148/445b/sPjuiqmugJk.jpg', 'name': 'Иванова Вероника', 'id': 329148}]
        },
        {name:'Сочи',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638624/v638624122/4b8b3/DUqUOaBZYx4.jpg', 'name': 'Николаенко Антон', 'id': 17052122}]
        },
        {name:'Спасское',n:1,
        users:[{'ava': 'https://pp.userapi.com/c616631/v616631161/160c8/1RLEN1zY14g.jpg', 'name': 'Недошитов Дмитрий', 'id': 11570161}]
        },
        {name:'Среднеуральск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c621705/v621705320/14a22/6QwVwp2Rr8Q.jpg', 'name': 'Ляшенко Александр', 'id': 11668144}, {'ava': 'https://pp.userapi.com/c841138/v841138873/14d18/Scks-Y2T5lM.jpg', 'name': 'Кучин Женя', 'id': 28541386}]
        },
        {name:'Ставрополь',n:2,
        users:[{'ava': 'https://pp.userapi.com/c637829/v637829655/512d4/CWi6Xf1ZF4c.jpg', 'name': 'Колодяжный Анатолий', 'id': 7130655}, {'ava': 'https://pp.userapi.com/c639831/v639831957/455aa/_M6ZyVG17wo.jpg', 'name': 'Борцова Юлиана', 'id': 21486000}]
        },
        {name:'Старый Оскол',n:2,
        users:[{'ava': 'https://pp.userapi.com/c425118/v425118488/7ec3/u6Tn4A-dILg.jpg', 'name': 'Зубковский Андрей', 'id': 1882488}, {'ava': 'https://pp.userapi.com/c4220/u16321576/e_098b289c.jpg', 'name': 'Добродомов Дмитрий', 'id': 16321576}]
        },
        {name:'Стаханов',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627520/v627520053/396c6/8dpNGzxc6DA.jpg', 'name': 'Хайло Олександр', 'id': 12511053}]
        },
        {name:'Сумы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626221/v626221344/56c5/jObwNsk2DsQ.jpg', 'name': 'Мигаль Андрей', 'id': 12261344}]
        },
        {name:'Сухой Лог',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637418/v637418960/4bec/ZJjkVjea6t8.jpg', 'name': 'Желнин Валера', 'id': 21615960}]
        },
        {name:'Сызрань',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837526/v837526111/72668/7Lpv-dbMXnM.jpg', 'name': 'Потапова Екатерина', 'id': 23954233}]
        },
        {name:'Сыктывкар',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638918/v638918353/4ae7d/qqUc0mRKxAo.jpg', 'name': 'Абдурманов Денис', 'id': 27486415}]
        },
        {name:'Тамбов',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841127/v841127241/9ece/C5trMbtvuh4.jpg', 'name': 'Абраменко Сергей', 'id': 21793671}]
        },
        {name:'Тверь',n:4,
        users:[{'ava': 'https://pp.userapi.com/c638020/v638020169/3c3b2/KUZngzfFiuw.jpg', 'name': 'Котелевская Юлия', 'id': 461169}, {'ava': 'https://pp.userapi.com/c836333/v836333244/7509f/FZCZgyeD2Ys.jpg', 'name': 'Оленченко Ольга', 'id': 2467413}, {'ava': 'https://pp.userapi.com/c837222/v837222664/573d4/NpstSYUXriM.jpg', 'name': 'Лебедева Вера', 'id': 3129723}, {'ava': 'https://pp.userapi.com/c627822/v627822771/1717c/0WzzPXbOmqM.jpg', 'name': 'Титова Елена', 'id': 13352771}]
        },
        {name:'Тирасполь',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837735/v837735032/5cae3/oeqtMv1pfm8.jpg', 'name': 'Шевченко Александр', 'id': 2510501}, {'ava': 'https://pp.userapi.com/c1355/u4090263/e_dd5e3198.jpg', 'name': 'Поповский Олег', 'id': 4090263}]
        },
        {name:'Тихвин',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841239/v841239971/171be/938878JeHmg.jpg', 'name': 'Самигуллина Елена', 'id': 20672873}]
        },
        {name:'Тобольск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836329/v836329835/588ea/-CggCmbLezg.jpg', 'name': 'Ракецкая Елена', 'id': 1166642}]
        },
        {name:'Толбазы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639525/v639525676/1cf3d/VtXsoOPyXEo.jpg', 'name': 'Абсалямов Рифат', 'id': 24748676}]
        },
        {name:'Тольятти',n:7,
        users:[{'ava': 'https://sun9-11.userapi.com/c840523/v840523796/7abd/JHeNspGgYCY.jpg', 'name': 'Панченко Евгения', 'id': 1901933}, {'ava': 'https://pp.userapi.com/c841325/v841325806/1b23b/GRBj6IQjg88.jpg', 'name': 'Белякова Екатерина', 'id': 2737052}, {'ava': 'https://pp.userapi.com/c622121/v622121017/c56c/8FtSO6uCc6o.jpg', 'name': 'Набиев Андрей', 'id': 2896017}, {'ava': 'https://pp.userapi.com/c841230/v841230739/f6f0/lkJ6TGV2aCM.jpg', 'name': 'Митрофанов Роман', 'id': 4470782}, {'ava': 'https://pp.userapi.com/c841423/v841423069/1ef3f/v_apyjrudi4.jpg', 'name': 'Чахеев Юрий', 'id': 12306199}, {'ava': 'https://pp.userapi.com/c637323/v637323197/79f/fsGWdJwRzmA.jpg', 'name': 'Серов Игорь', 'id': 23267197}, {'ava': 'https://pp.userapi.com/c639831/v639831107/3d44f/1ywN9OKJ3k4.jpg', 'name': 'Максимов Валентин', 'id': 23628093}]
        },
        {name:'Томск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638825/v638825212/661c1/h1SyTKipWPU.jpg', 'name': 'Филатов Егор', 'id': 2110409}, {'ava': 'https://pp.userapi.com/c639123/v639123867/3abff/C5U9-pANKCo.jpg', 'name': 'Мицкевич Антон', 'id': 6914805}]
        },
        {name:'Топки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639623/v639623555/3f7db/z4WyNA32T1s.jpg', 'name': 'Кривов Николай', 'id': 16176531}]
        },
        {name:'Тосно',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639226/v639226122/3dc02/SBm3mq7zYhc.jpg', 'name': 'Метелёва Юлия', 'id': 22191316}]
        },
        {name:'Тула',n:7,
        users:[{'ava': 'https://pp.userapi.com/c639919/v639919567/38bad/43VuAUBUBhk.jpg', 'name': 'Bogolyubova Dasha', 'id': 2320936}, {'ava': 'https://pp.userapi.com/c613519/v613519158/2710b/mzr3W_2H8EM.jpg', 'name': 'Высоцкий Виталий', 'id': 6458158}, {'ava': 'https://pp.userapi.com/c604323/v604323103/f9a2/VQQ0FnECt7U.jpg', 'name': 'Чуйкин Павел', 'id': 9706103}, {'ava': 'https://pp.userapi.com/c622017/v622017801/41964/XwUF225DS38.jpg', 'name': 'Голоскоков Николай', 'id': 9783801}, {'ava': 'https://pp.userapi.com/c630618/v630618390/ea32/wsUwHsgCRRE.jpg', 'name': 'Usanov Andrew', 'id': 19111390}, {'ava': 'https://pp.userapi.com/c628225/v628225965/3dd4b/UQtknw4tlWg.jpg', 'name': 'Сидоров Павел', 'id': 23502965}, {'ava': 'https://pp.userapi.com/c618323/v618323844/15dc5/2cnorilrtoM.jpg', 'name': 'Гавриков Александр', 'id': 27630844}]
        },
        {name:'Тюмень',n:14,
        users:[{'ava': 'https://pp.userapi.com/c424231/v424231182/9945/5FaSD9_Pa2c.jpg', 'name': 'Антоненко Сергей', 'id': 1177182}, {'ava': 'https://pp.userapi.com/c631220/v631220593/23d26/rAfrvV5hXJM.jpg', 'name': 'Ушаров Дмитрий', 'id': 1507593}, {'ava': 'https://pp.userapi.com/c307503/v307503486/4da5/dp_cUlWqnj8.jpg', 'name': 'Куликова Елена', 'id': 2673486}, {'ava': 'https://pp.userapi.com/c837536/v837536607/3af8e/kvKpEVm6IHc.jpg', 'name': 'Берг Владимир', 'id': 3959607}, {'ava': 'https://sun9-11.userapi.com/c840524/v840524890/1af4/ESqSpBv2xpA.jpg', 'name': 'Чалков Михаил', 'id': 4154708}, {'ava': 'https://pp.userapi.com/c628519/v628519176/55a6/Au9W3pPY1gc.jpg', 'name': 'Скорнякова Анна', 'id': 6256176}, {'ava': 'https://pp.userapi.com/c626120/v626120379/57d85/1B-xC9lYMAg.jpg', 'name': 'Степанов Иннокентий', 'id': 7189379}, {'ava': 'https://pp.userapi.com/c841538/v841538851/20274/0vOOrkcu_J8.jpg', 'name': 'Климович Марина', 'id': 10906067}, {'ava': 'https://pp.userapi.com/c629117/v629117688/26333/hXLcM7NS7Y8.jpg', 'name': 'Коваленко Евгений', 'id': 13450688}, {'ava': 'https://pp.userapi.com/c638519/v638519006/470ac/4u1QqN5pxq0.jpg', 'name': 'Онохов Леонид', 'id': 13814006}, {'ava': 'https://pp.userapi.com/c836626/v836626488/56b4f/r3PQqcw4HGI.jpg', 'name': 'Гимадиева Анастасия', 'id': 14302219}, {'ava': 'https://pp.userapi.com/c627329/v627329333/3ddd5/H0xg0lBnnyE.jpg', 'name': 'Яковлев Евгений', 'id': 15157333}, {'ava': 'https://pp.userapi.com/c638023/v638023989/7fc0/sxMgt21hJfI.jpg', 'name': 'Тюменцев Сергей', 'id': 16192989}, {'ava': 'https://pp.userapi.com/c836528/v836528741/6384e/urrl1LjHPBg.jpg', 'name': 'Жидков Андрей', 'id': 22455024}]
        },
        {name:'Уварово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638923/v638923305/5e0d0/3op036aq1W8.jpg', 'name': 'Юрасова Наталия', 'id': 20860096}]
        },
        {name:'Улан-Удэ',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639116/v639116577/ba55/EoTQbPG02AU.jpg', 'name': 'Измайлов Александр', 'id': 10378577}, {'ava': 'https://pp.userapi.com/c837522/v837522718/46814/Z2QjZJ4OX94.jpg', 'name': 'Мальцев Павел', 'id': 21258718}]
        },
        {name:'Ульяновск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c638727/v638727335/37f75/t0ZM_jfZYYA.jpg', 'name': 'Алексеев Антон', 'id': 13434335}, {'ava': 'https://pp.userapi.com/c638125/v638125848/1d07c/BdoI9xQYfPE.jpg', 'name': 'Каменская Виктория', 'id': 15248848}, {'ava': 'https://pp.userapi.com/c408118/v408118707/9d9b/EKLuM1gUVmo.jpg', 'name': 'Колотик-Каменева Олеся', 'id': 24508707}, {'ava': 'https://pp.userapi.com/c638123/v638123484/4a457/RQDOY7Xs75g.jpg', 'name': 'Афанасьева Алёна', 'id': 25514711}]
        },
        {name:'Уральск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836432/v836432303/6096c/wUGvqYm5h1M.jpg', 'name': 'Мясников Александр', 'id': 23110293}, {'ava': 'https://pp.userapi.com/c631721/v631721219/4b3c3/PoiEwaBPtZc.jpg', 'name': 'Беркалиев Рустам', 'id': 30120219}]
        },
        {name:'Урюпинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627223/v627223882/22335/AA7B0LCo870.jpg', 'name': 'Зюзин Рома', 'id': 2662882}]
        },
        {name:'Уссурийск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c312617/v312617242/a0fa/FzbLVw4_XD8.jpg', 'name': 'Скобеев Роман', 'id': 17930242}]
        },
        {name:'Уфа',n:4,
        users:[{'ava': 'https://pp.userapi.com/c629529/v629529262/3118e/QB3UcOHX2cU.jpg', 'name': 'Газиев Рафаэль', 'id': 413262}, {'ava': 'https://pp.userapi.com/c637424/v637424334/540b9/6LAn8kF9b9w.jpg', 'name': 'Фахретдинова Диана', 'id': 548334}, {'ava': 'https://pp.userapi.com/c604726/v604726928/2a23f/blFVlBIQWUE.jpg', 'name': 'Фаткуллин Ринат', 'id': 9435928}, {'ava': 'https://pp.userapi.com/c461/v461838/12/qXdmRnO8Of4.jpg', 'name': 'Нафиков Ильдар', 'id': 9813838}]
        },
        {name:'Хабаровск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c841428/v841428505/1683d/vtfVTiUY9BI.jpg', 'name': 'Цветников Владимир', 'id': 4920503}, {'ava': 'https://pp.userapi.com/c616922/v616922742/192b5/rh20Lgt2nuk.jpg', 'name': 'Пасечник Андрей', 'id': 7207742}, {'ava': 'https://pp.userapi.com/c639528/v639528022/422f3/l2TbbrYZRlI.jpg', 'name': 'Бурдуковский Алексей', 'id': 13346801}]
        },
        {name:'Харьков',n:6,
        users:[{'ava': 'https://sun9-11.userapi.com/c836537/v836537351/32de6/huYeevoSsh4.jpg', 'name': 'Stepanian Arthur', 'id': 4917351}, {'ava': 'https://sun9-11.userapi.com/c840636/v840636355/75df/hijwHA8vLqw.jpg', 'name': 'Манохин Андрей', 'id': 7801214}, {'ava': 'https://pp.userapi.com/c637525/v637525126/e787/wtMLMWpGGMs.jpg', 'name': 'Рязанова Анастасия', 'id': 10127126}, {'ava': 'https://pp.userapi.com/c836220/v836220307/32bde/ZvJRTWvz2Uc.jpg', 'name': 'Гришин Максим', 'id': 13535307}, {'ava': 'https://pp.userapi.com/c840734/v840734261/1e05/qliWqja0a4U.jpg', 'name': 'Ковалёв Владимир', 'id': 25740245}, {'ava': 'https://pp.userapi.com/c637531/v637531184/5e076/NEJPUTEeKiA.jpg', 'name': 'Лысенко Максим', 'id': 26648698}]
        },
        {name:'Химки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639424/v639424246/3c5aa/seaXuf7fCrQ.jpg', 'name': 'Костенко Мария', 'id': 24840024}]
        },
        {name:'Чайковский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604531/v604531917/332fd/H7C-h47wGLw.jpg', 'name': 'Наборщиков Алексей', 'id': 5913917}]
        },
        {name:'Чебоксары',n:4,
        users:[{'ava': 'https://pp.userapi.com/c630625/v630625485/3fe0b/WCisM2he6pE.jpg', 'name': 'Аникина Елена', 'id': 11028485}, {'ava': 'https://pp.userapi.com/c626730/v626730523/27a7c/FC-ImxvmPQU.jpg', 'name': 'Мясников Евгений', 'id': 12111523}, {'ava': 'https://pp.userapi.com/c841526/v841526505/9b6b/RX1Kk1awOzg.jpg', 'name': 'Едифанов Юрий', 'id': 17479505}, {'ava': 'https://pp.userapi.com/c637124/v637124057/4eddb/wBrOQF8gVw4.jpg', 'name': 'Сергеев Андрей', 'id': 21808057}]
        },
        {name:'Челябинск',n:21,
        users:[{'ava': 'https://pp.userapi.com/c840028/v840028728/23cde/lx0UG-nlL8w.jpg', 'name': 'Сажин Евгений', 'id': 619131}, {'ava': 'https://pp.userapi.com/c624328/v624328682/4c07a/aKYMSB9UdA0.jpg', 'name': 'Шумилов Владимир', 'id': 3378682}, {'ava': 'https://pp.userapi.com/c5490/u4056115/e_8f049e8c.jpg', 'name': 'Кожухова Ирина', 'id': 4056115}, {'ava': 'https://pp.userapi.com/c638818/v638818734/52933/KmwQaiti1cs.jpg', 'name': 'Зуев Сергей', 'id': 6150196}, {'ava': 'https://pp.userapi.com/c637326/v637326572/2622a/EGk3r6Ixqqg.jpg', 'name': 'Конюхова Гульнара', 'id': 7270572}, {'ava': 'https://pp.userapi.com/c639123/v639123827/1beaf/cnJRHPFWkYA.jpg', 'name': 'Смеян Катрин', 'id': 8324827}, {'ava': 'https://pp.userapi.com/c626730/v626730506/37858/xPTS6aW1k0E.jpg', 'name': 'Холодилина Наталья', 'id': 9241506}, {'ava': 'https://sun9-11.userapi.com/c840530/v840530991/7e7a/Ftdzy3SDOpA.jpg', 'name': 'Зиатдинов Марат', 'id': 9588401}, {'ava': 'https://pp.userapi.com/c302801/u14952813/e_0101424b.jpg', 'name': 'Котов Виктор', 'id': 14952813}, {'ava': 'https://pp.userapi.com/c840136/v840136901/17e43/yeHIPnZRZww.jpg', 'name': 'Гайнуллина Лиана', 'id': 16520721}, {'ava': 'https://sun9-11.userapi.com/c840726/v840726091/88f1/o66Jrlku1TM.jpg', 'name': 'Кашкарова Яна', 'id': 17828431}, {'ava': 'https://pp.userapi.com/c638919/v638919463/54c9a/pEnmM3bA96I.jpg', 'name': 'Кочеткова Анастасия', 'id': 17902358}, {'ava': 'https://pp.userapi.com/c836322/v836322665/1fe71/MXl-jwx7ZU4.jpg', 'name': 'Крыванов Данила', 'id': 22345665}, {'ava': 'https://pp.userapi.com/c638527/v638527210/59f32/Rh58JIfqhbU.jpg', 'name': 'Честюнин Андрей', 'id': 22608638}, {'ava': 'https://pp.userapi.com/c638730/v638730833/45dc9/zWP1p0aMqUQ.jpg', 'name': 'Ворухайло Дмитрий', 'id': 22684833}, {'ava': 'https://pp.userapi.com/c618330/v618330869/1c75f/qlQbilHgMvA.jpg', 'name': 'Абрамов Антоха', 'id': 23256869}, {'ava': 'https://pp.userapi.com/c623119/v623119480/343b5/7DF3h1lb23Q.jpg', 'name': 'Быкова Ирина', 'id': 26049480}, {'ava': 'https://pp.userapi.com/c836236/v836236669/89993/LyC4ObeC7qo.jpg', 'name': 'Мезенцев Валерий', 'id': 26723228}, {'ava': 'https://pp.userapi.com/c837620/v837620162/4aa07/8mkf59pCAPw.jpg', 'name': 'Устюгов Сергей', 'id': 28558740}, {'ava': 'https://pp.userapi.com/c639917/v639917793/482f5/FxXTuW3MINA.jpg', 'name': 'Петрова Марина', 'id': 28710230}, {'ava': 'https://pp.userapi.com/c836529/v836529643/83ab4/JhXRmI1BDfc.jpg', 'name': 'Мартакова Ирина', 'id': 29574744}]
        },
        {name:'Череповец',n:3,
        users:[{'ava': 'https://pp.userapi.com/c302111/v302111738/90d4/4z7tu-sSM74.jpg', 'name': 'Дубовик Виталий', 'id': 3129738}, {'ava': 'https://pp.userapi.com/c636530/v636530168/3a6a5/seXzgkj-iD4.jpg', 'name': 'Садырин Святослав', 'id': 7048168}, {'ava': 'https://pp.userapi.com/c630624/v630624959/2e758/defL2eFraI0.jpg', 'name': 'Виноградов Александр', 'id': 23975959}]
        },
        {name:'Чехов',n:1,
        users:[{'ava': 'https://pp.userapi.com/c406227/v406227210/7f28/6-kJvwUi37M.jpg', 'name': 'Загруев Михаил', 'id': 6581210}]
        },
        {name:'Шатура',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604518/v604518152/3dcae/WEKD7G3x1n8.jpg', 'name': 'Щипанова Мария', 'id': 8293152}]
        },
        {name:'Шексна',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627131/v627131114/3cb92/iJjW_al-j6w.jpg', 'name': 'Емельянова Наталья', 'id': 3984114}]
        },
        {name:'Шугозеро',n:1,
        users:[{'ava': 'https://pp.userapi.com/c622318/v622318193/369de/N0-8hQG8wY4.jpg', 'name': 'Фомин Вадим', 'id': 2662193}]
        },
        {name:'Шумерля',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836732/v836732248/4a2a1/aK8l5qkrg20.jpg', 'name': 'Назиров Владислав', 'id': 4588248}]
        },
        {name:'Щомыслица',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636928/v636928374/30797/eX7jtvhWGT0.jpg', 'name': 'Карпович Лёша', 'id': 9324374}]
        },
        {name:'Щёлково',n:3,
        users:[{'ava': 'https://pp.userapi.com/c4175/u16043517/e_37e9a47c.jpg', 'name': 'Берников Евгений', 'id': 16043517}, {'ava': 'https://pp.userapi.com/c622721/v622721821/43365/BPsdBHsxoZI.jpg', 'name': 'Тарантинова Ольга', 'id': 18233821}, {'ava': 'https://pp.userapi.com/c841531/v841531085/1387e/jCGJP7xY8Hk.jpg', 'name': 'Дьякова Екатерина', 'id': 23065214}]
        },
        {name:'Электросталь',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837122/v837122725/3a370/srHVafpFtuk.jpg', 'name': 'Роговая Яна', 'id': 3448725}, {'ava': 'https://pp.userapi.com/c638831/v638831301/5a0ae/J4H6nqWCAzA.jpg', 'name': 'Эскендерова Дарья', 'id': 19110491}]
        },
        {name:'Энгельс',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638128/v638128450/40c08/P84uix-_9p8.jpg', 'name': 'Русских Сергей', 'id': 19700450}]
        },
        {name:'Якутск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636424/v636424497/2cd64/YIU2t8w0G5Y.jpg', 'name': 'Григорьева Ульяна', 'id': 24410497}]
        },
        {name:'Ярославль',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840220/v840220659/2a39b/BsmEPkrwwTQ.jpg', 'name': 'Овчинникова Татьянка', 'id': 24421575}]
        }        
    ]
}