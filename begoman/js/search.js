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
        {name:'Москва',n:396,
        users:[{'ava': 'https://pp.userapi.com/c403227/v403227720/2f26/B3T-IISi_G0.jpg', 'name': 'Савин Александр', 'id': 25720}, {'ava': 'https://pp.userapi.com/c9249/u54620/e_50276caf.jpg', 'name': 'Екимов Данила', 'id': 54620}, {'ava': 'https://pp.userapi.com/c626328/v626328528/610b7/t5erFNOo0QI.jpg', 'name': 'Митраков Дмитрий', 'id': 76528}, {'ava': 'https://pp.userapi.com/c629524/v629524713/117e0/7KBj8YKEiS8.jpg', 'name': 'Зверев Петр', 'id': 127713}, {'ava': 'https://pp.userapi.com/c411719/v411719576/899a/B9p-JJqs5YQ.jpg', 'name': 'Смирнов Антон', 'id': 135576}, {'ava': 'https://pp.userapi.com/c627430/v627430708/37076/gEwsza7YOe4.jpg', 'name': 'Калашникова Лена', 'id': 138708}, {'ava': 'https://pp.userapi.com/c10895/u236972/e_2008c12c.jpg', 'name': 'Дулин Иван', 'id': 236972}, {'ava': 'https://pp.userapi.com/c631925/v631925858/2bf23/roHLBA-3D4c.jpg', 'name': 'Грачёв Иван', 'id': 266858}, {'ava': 'https://pp.userapi.com/c623224/v623224275/10509/c9HR9fIvD0g.jpg', 'name': 'Завалко Дмитрий', 'id': 291275}, {'ava': 'https://pp.userapi.com/c604821/v604821997/2bb62/Wp8nV-shGzo.jpg', 'name': 'Швец Катюшка', 'id': 351997}, {'ava': 'https://pp.userapi.com/c638827/v638827335/38683/lPFcqIUNidY.jpg', 'name': 'Поликарпов Вадим', 'id': 404335}, {'ava': 'https://pp.userapi.com/c637727/v637727831/2275f/85y3eHSWmZg.jpg', 'name': 'Михайлов Артём', 'id': 450831}, {'ava': 'https://pp.userapi.com/c424916/v424916545/90e0/4XWlI2zElXg.jpg', 'name': 'Гриненко Юлия', 'id': 455545}, {'ava': 'https://pp.userapi.com/c637128/v637128942/3b8b8/ThCfc3dU-Hw.jpg', 'name': 'Григорьева Настёна', 'id': 469942}, {'ava': 'https://pp.userapi.com/c622428/v622428847/4afa3/9Jy0N_MGECI.jpg', 'name': 'Швецов Максим', 'id': 598847}, {'ava': 'https://pp.userapi.com/c639218/v639218491/3c349/_zA9RK3becE.jpg', 'name': 'Novikova Irina', 'id': 622996}, {'ava': 'https://pp.userapi.com/c637823/v637823940/55455/Hb7MoLB9Bfk.jpg', 'name': 'Рыськов Андрей', 'id': 668940}, {'ava': 'https://pp.userapi.com/c320619/v320619405/e86/tqtFP9lcP6Y.jpg', 'name': 'Непомнящая Елена', 'id': 707405}, {'ava': 'https://pp.userapi.com/c636420/v636420664/35cf8/HyEuLwaQEMY.jpg', 'name': 'Подшибякина Мария', 'id': 735664}, {'ava': 'https://pp.userapi.com/c636519/v636519619/50d59/7tcZyS6pLG0.jpg', 'name': 'Салов Глеб', 'id': 814619}, {'ava': 'https://pp.userapi.com/c638617/v638617218/44087/sLf87qBlCJM.jpg', 'name': 'Арманова Любовь', 'id': 820732}, {'ava': 'https://pp.userapi.com/c621819/v621819267/2e5d1/z9b3nkkRdm8.jpg', 'name': 'Николаева Татьяна', 'id': 846267}, {'ava': 'https://pp.userapi.com/c425725/v425725655/1258/je-0g732boU.jpg', 'name': 'Бурага Александр', 'id': 889655}, {'ava': 'https://sun9-11.userapi.com/c836723/v836723226/9214b/TxSL9bOP__A.jpg', 'name': 'Дмитриев Леонид', 'id': 903938}, {'ava': 'https://pp.userapi.com/c637817/v637817468/61023/cqzSjXEzm7U.jpg', 'name': 'Антипова Дарья', 'id': 936245}, {'ava': 'https://pp.userapi.com/c638320/v638320478/58e90/zpruNNuge0w.jpg', 'name': 'Самсонова Светлана', 'id': 955941}, {'ava': 'https://sun9-11.userapi.com/c540103/v540103581/3d439/SUVBkKwXuhc.jpg', 'name': 'Срибный Костя', 'id': 1032581}, {'ava': 'https://pp.userapi.com/c639820/v639820013/3640c/le9k-PMb_wA.jpg', 'name': 'Гольдштейн Мария', 'id': 1089683}, {'ava': 'https://pp.userapi.com/c836127/v836127187/60ddf/4rQNNJbhnE0.jpg', 'name': 'Kapranova Olga', 'id': 1149885}, {'ava': 'https://pp.userapi.com/c604724/v604724931/382bc/ilKpSCaYq4w.jpg', 'name': 'Титов Михаил', 'id': 1277931}, {'ava': 'https://pp.userapi.com/c639919/v639919088/4683e/VgbyJPI8t8M.jpg', 'name': 'Сулаева Екатерина', 'id': 1393270}, {'ava': 'https://pp.userapi.com/c638926/v638926824/3ad38/HI3VV3RuKp0.jpg', 'name': 'Зикункова Александра', 'id': 1393824}, {'ava': 'https://pp.userapi.com/c633918/v633918627/109b9/ONMbaPcpLl8.jpg', 'name': 'Синичкин Дмитрий', 'id': 1503627}, {'ava': 'https://pp.userapi.com/c636428/v636428304/19a99/NKhOOMy7lNY.jpg', 'name': 'Ивонькин Алексей', 'id': 1510304}, {'ava': 'https://pp.userapi.com/c840139/v840139483/59c1/my0tc3S--Ag.jpg', 'name': 'Скульская Любовь', 'id': 1526483}, {'ava': 'https://pp.userapi.com/c631431/v631431560/3cfd4/y6bSlW1is5A.jpg', 'name': 'Привалова Аня', 'id': 1540560}, {'ava': 'https://pp.userapi.com/c841529/v841529325/1b275/e_6S7TLY5h0.jpg', 'name': 'Богомолова Оксана', 'id': 1593052}, {'ava': 'https://pp.userapi.com/c638427/v638427516/423a9/fhN-FYwPvQE.jpg', 'name': 'Маланка Татьяна', 'id': 1597516}, {'ava': 'https://pp.userapi.com/c837534/v837534463/426f7/4hyoZFeok5c.jpg', 'name': 'Платонова Елена', 'id': 1602463}, {'ava': 'https://pp.userapi.com/c626927/v626927199/4475d/MuyZw5eknFc.jpg', 'name': 'Маллеров Филипп', 'id': 1658199}, {'ava': 'https://pp.userapi.com/c621702/v621702163/22f92/Oe6av0rQGeg.jpg', 'name': 'Тяпкина Оксана', 'id': 1707960}, {'ava': 'https://pp.userapi.com/c631721/v631721164/41c08/STgLwNWhccc.jpg', 'name': 'Окорочкова Надя', 'id': 2050164}, {'ava': 'https://pp.userapi.com/c639427/v639427604/318bf/v345wEZB778.jpg', 'name': 'Рубашанов Александр', 'id': 2097817}, {'ava': 'https://pp.userapi.com/c631230/v631230446/47c76/ny_C6juMSv8.jpg', 'name': 'Степашкина Анастасия', 'id': 2101446}, {'ava': 'https://pp.userapi.com/c836426/v836426553/6a7d2/Xk81hk5h_YU.jpg', 'name': 'Brotash Olga', 'id': 2126835}, {'ava': 'https://pp.userapi.com/c639921/v639921367/2c1a2/XBLluxbB5UI.jpg', 'name': 'Таранова Наталья', 'id': 2145432}, {'ava': 'https://pp.userapi.com/c837221/v837221578/2b7d8/nW31HJOGhZ4.jpg', 'name': 'Калядин Денис', 'id': 2238578}, {'ava': 'https://pp.userapi.com/c633622/v633622666/265b7/41GB6mNyK-A.jpg', 'name': 'Уткин Сергей', 'id': 2250666}, {'ava': 'https://pp.userapi.com/c407419/u2255078/e_04ff1a3a.jpg', 'name': 'Цветков Антон', 'id': 2255078}, {'ava': 'https://pp.userapi.com/c837329/v837329760/4247d/MkkQM5EAHtE.jpg', 'name': 'Соловьева Анастасия', 'id': 2511760}, {'ava': 'https://pp.userapi.com/c628616/v628616753/39e/waoa4q-7xiU.jpg', 'name': 'Шкорбот Сергей', 'id': 2563753}, {'ava': 'https://pp.userapi.com/c637226/v637226584/285db/na5GLaYO_pQ.jpg', 'name': 'Бельчик Никита', 'id': 2576584}, {'ava': 'https://pp.userapi.com/c631529/v631529768/28521/zQJKOEp1O-4.jpg', 'name': 'Вериго Ева', 'id': 2585768}, {'ava': 'https://pp.userapi.com/c311422/v311422832/5cbc/OlWDJthaTHg.jpg', 'name': 'Иванов Николай', 'id': 2645832}, {'ava': 'https://sun9-11.userapi.com/c840630/v840630521/afc5/iT2prYxegNY.jpg', 'name': 'Дадонов Игорь', 'id': 2664794}, {'ava': 'https://pp.userapi.com/c639731/v639731250/515e2/Wu6k47hOgEc.jpg', 'name': 'Телегина Екатерина', 'id': 2669802}, {'ava': 'https://pp.userapi.com/c841130/v841130019/18e9a/u6sew6Oh_Ng.jpg', 'name': 'Архангельская Наталья', 'id': 2684190}, {'ava': 'https://pp.userapi.com/c638218/v638218566/4daaf/PifTaQsdsRo.jpg', 'name': 'Ветошкина Елена', 'id': 2869870}, {'ava': 'https://pp.userapi.com/c840127/v840127141/29cbc/hL6DFgZsG6M.jpg', 'name': 'Крылова Светлана', 'id': 2873265}, {'ava': 'https://pp.userapi.com/c631225/v631225655/4e5d4/MM52sKhzTl0.jpg', 'name': 'Семенова Валерия', 'id': 2969655}, {'ava': 'https://pp.userapi.com/c841226/v841226174/18b69/4Bsbrxtq5yg.jpg', 'name': 'Тарова Наталья', 'id': 3219557}, {'ava': 'https://pp.userapi.com/c4549/u3342746/e_397feefa.jpg', 'name': 'Сандакова Ольга', 'id': 3342746}, {'ava': 'https://pp.userapi.com/c639129/v639129296/21628/iWoSAndEodQ.jpg', 'name': 'Force Александр', 'id': 3346296}, {'ava': 'https://pp.userapi.com/c841623/v841623955/21109/8mCz2H8OMC4.jpg', 'name': 'Себякин Игорь', 'id': 3518666}, {'ava': 'https://pp.userapi.com/c836134/v836134600/30a18/xpMsddVlrPI.jpg', 'name': 'Козлов Николай', 'id': 3658600}, {'ava': 'https://pp.userapi.com/c639130/v639130657/2d4d5/gxEkz6iI61c.jpg', 'name': 'Морозюк Ольга', 'id': 3736657}, {'ava': 'https://pp.userapi.com/c628531/v628531110/24765/6-p0LEZuOZ8.jpg', 'name': 'Луганцев Андрей', 'id': 3747110}, {'ava': 'https://pp.userapi.com/c639425/v639425377/a8fd/FJS_YY-rjto.jpg', 'name': 'Николаев Дима', 'id': 3842377}, {'ava': 'https://pp.userapi.com/c625817/v625817787/1b8ec/uupnRQK0jhM.jpg', 'name': 'Чертова Дарья', 'id': 3851787}, {'ava': 'https://pp.userapi.com/c638122/v638122147/523cc/r7wDYFx-bAQ.jpg', 'name': 'Фролов Алексей', 'id': 3977657}, {'ava': 'https://pp.userapi.com/c637616/v637616783/404d5/XrDihVW_MiU.jpg', 'name': 'Лотоцкий Андрей', 'id': 3979783}, {'ava': 'https://pp.userapi.com/c636230/v636230913/3b07/fypnTaWzZR0.jpg', 'name': 'Блинов Денис', 'id': 4039913}, {'ava': 'https://pp.userapi.com/c639116/v639116517/47fc5/AacsA_whVV8.jpg', 'name': 'Митичкина Татьяна', 'id': 4118017}, {'ava': 'https://pp.userapi.com/c638131/v638131227/515eb/-DzEmloE8UA.jpg', 'name': 'Горохов Дмитрий', 'id': 4206980}, {'ava': 'https://pp.userapi.com/c622730/v622730334/19891/50GXJUpL_xg.jpg', 'name': 'Папков Серега', 'id': 4258334}, {'ava': 'https://pp.userapi.com/c840229/v840229641/29e35/y0jyQHn7zeU.jpg', 'name': 'Михайлов Андрей', 'id': 4425034}, {'ava': 'https://pp.userapi.com/c637122/v637122117/3501a/vOh4-2owzpc.jpg', 'name': 'Беляев Максим', 'id': 4502117}, {'ava': 'https://pp.userapi.com/c841227/v841227528/195af/TXHpF_94Hto.jpg', 'name': 'Зубов Евгений', 'id': 4542948}, {'ava': 'https://pp.userapi.com/c836625/v836625154/33cdd/vYNqziDB730.jpg', 'name': 'Моисеев Денис', 'id': 4584154}, {'ava': 'https://pp.userapi.com/c624226/v624226491/3a108/dVL8meBdxz8.jpg', 'name': 'Саковский Михаил', 'id': 4635491}, {'ava': 'https://pp.userapi.com/c5350/v5350464/613/s68x78cG6do.jpg', 'name': 'Алексеенко Татьяна', 'id': 4863464}, {'ava': 'https://pp.userapi.com/c836137/v836137288/3ba8c/w7-pyTtTD8s.jpg', 'name': 'Жукова Лена', 'id': 4957288}, {'ava': 'https://pp.userapi.com/c637420/v637420891/dc44/tR5h1RrYBZM.jpg', 'name': 'Тожокина Светлана', 'id': 5020891}, {'ava': 'https://pp.userapi.com/c626524/v626524947/1e483/R1z4LrazpNs.jpg', 'name': 'Соколов Дмитрий', 'id': 5043947}, {'ava': 'https://pp.userapi.com/c841324/v841324996/1bf68/LbFfsma04T0.jpg', 'name': 'Алексеев Андрей', 'id': 5056333}, {'ava': 'https://pp.userapi.com/c4181/u5077911/e_d17566a0.jpg', 'name': 'Секира Андрей', 'id': 5077911}, {'ava': 'https://pp.userapi.com/c836228/v836228290/249a/55eqtBJKQ8w.jpg', 'name': 'Вишняков Денис', 'id': 5166290}, {'ava': 'https://pp.userapi.com/c638931/v638931818/25daa/QUrpUqchHqQ.jpg', 'name': 'Толкова Татьяна', 'id': 5244818}, {'ava': 'https://pp.userapi.com/c424821/v424821408/687e/rpzfaFRrTQQ.jpg', 'name': 'Алексеев Иван', 'id': 5392408}, {'ava': 'https://pp.userapi.com/c837430/v837430314/4d7cb/jrzHkvr9eWQ.jpg', 'name': 'Ульянова Татьяна', 'id': 5513444}, {'ava': 'https://pp.userapi.com/c638127/v638127175/472d7/By10Lk2Heis.jpg', 'name': 'Старцев Андрей', 'id': 5554175}, {'ava': 'https://pp.userapi.com/c638820/v638820758/1be62/W8edF_w4ct4.jpg', 'name': 'Копылов Максим', 'id': 5633758}, {'ava': 'https://pp.userapi.com/c621430/v621430519/6034/ys-Ts-wq2_8.jpg', 'name': 'Андриевская Нелли', 'id': 5818519}, {'ava': 'https://pp.userapi.com/c604823/v604823083/41969/FrJ5-Om1Rh8.jpg', 'name': 'Иванова Ксения', 'id': 5867083}, {'ava': 'https://pp.userapi.com/c840435/v840435906/607b/RO5Y2okWLZI.jpg', 'name': 'Ананьев Сергей', 'id': 5911743}, {'ava': 'https://pp.userapi.com/c636728/v636728063/3cca9/Y_KD2gp-8Jo.jpg', 'name': 'Ручкин Дмитрий', 'id': 6079063}, {'ava': 'https://pp.userapi.com/c637722/v637722016/8640/AdVX4dMs4jk.jpg', 'name': 'Куликова Татьяна', 'id': 6086016}, {'ava': 'https://pp.userapi.com/c639317/v639317270/42c60/2w2VQ5pDpm8.jpg', 'name': 'Ефимов Андрей', 'id': 6124562}, {'ava': 'https://pp.userapi.com/c629322/v629322582/fd55/xVParBdtfa4.jpg', 'name': 'Брозас Алексей', 'id': 6375582}, {'ava': 'https://sun9-11.userapi.com/c840628/v840628463/8de3/f25YyuAG63g.jpg', 'name': 'Колпаков Александр', 'id': 6444896}, {'ava': 'https://pp.userapi.com/c627628/v627628308/a43c6/72z3hno9cY4.jpg', 'name': 'Козлов Илья', 'id': 6573308}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Свечников Александр', 'id': 6618559}, {'ava': 'https://pp.userapi.com/c138/u6658303/e_7330f72a.jpg', 'name': 'Давыдов Никита', 'id': 6658303}, {'ava': 'https://pp.userapi.com/c837527/v837527204/2a124/uwyO399hplk.jpg', 'name': 'Герливанова Елена', 'id': 6694204}, {'ava': 'https://pp.userapi.com/c633422/v633422664/2f5b8/HfqBtQtiEeU.jpg', 'name': 'Захаров Павел', 'id': 7093664}, {'ava': 'https://pp.userapi.com/c836121/v836121459/6df97/-QPS9FSRdyY.jpg', 'name': 'Волкова Юлия', 'id': 7455203}, {'ava': 'https://pp.userapi.com/c622218/v622218815/1147d/A_4fkIcBhvk.jpg', 'name': 'Боев Илья', 'id': 7761815}, {'ava': 'https://pp.userapi.com/c628319/v628319631/1ef41/WK1UoIrk7mE.jpg', 'name': 'Ширяева Лидия', 'id': 7856631}, {'ava': 'https://pp.userapi.com/c320318/v320318974/868b/0m3ALNYrKPY.jpg', 'name': 'Гусев Алексей', 'id': 7872974}, {'ava': 'https://pp.userapi.com/c639623/v639623198/4db83/EtGTChnhk90.jpg', 'name': 'Соколова Юлия', 'id': 8217430}, {'ava': 'https://sun9-11.userapi.com/c840739/v840739652/4ae6/OvGOmksXOQM.jpg', 'name': 'Жихар Анастасия', 'id': 8242421}, {'ava': 'https://pp.userapi.com/c836626/v836626839/5cb34/M9LQsPl5eq8.jpg', 'name': 'Сорокин Филипп', 'id': 8381072}, {'ava': 'https://pp.userapi.com/c620431/v620431850/1b5e0/7IkUUXvb0fY.jpg', 'name': 'Зверев Андрей', 'id': 8514850}, {'ava': 'https://pp.userapi.com/c628528/v628528555/4c4e7/l_LgLrzQ-lk.jpg', 'name': 'Третьякова Татьяна', 'id': 8849555}, {'ava': 'https://pp.userapi.com/c10430/u8905219/e_23aca0d2.jpg', 'name': 'Суточников Дмитрий', 'id': 8905219}, {'ava': 'https://pp.userapi.com/c639331/v639331270/3e4f9/uutaOV8xb_c.jpg', 'name': 'Иванова Валентина', 'id': 9122960}, {'ava': 'https://pp.userapi.com/c630225/v630225513/45535/Dg5ZjQc2c1o.jpg', 'name': 'Сергеева Светлана', 'id': 9212513}, {'ava': 'https://pp.userapi.com/c638431/v638431738/3f86a/1rT8d9lmo9w.jpg', 'name': 'Чаругина Татьяна', 'id': 9291738}, {'ava': 'https://pp.userapi.com/c618129/v618129994/1a01a/GTmSy-tXl6E.jpg', 'name': 'Савин Денис', 'id': 9957994}, {'ava': 'https://pp.userapi.com/c639425/v639425720/3d536/9K9KfI_zJdg.jpg', 'name': 'Мишечкина Наталья', 'id': 10087393}, {'ava': 'https://pp.userapi.com/c625330/v625330800/44e8a/sQrLylKPazQ.jpg', 'name': 'Гусь Александра', 'id': 10381800}, {'ava': 'https://pp.userapi.com/c836637/v836637937/4b3bf/I25r0RxN29I.jpg', 'name': 'Терентьев Максим', 'id': 10885140}, {'ava': 'https://pp.userapi.com/c421828/v421828826/9d99/zD0HqQNALtE.jpg', 'name': 'Даньков Владимир', 'id': 10891826}, {'ava': 'https://pp.userapi.com/c637321/v637321720/3fd62/Chsmr6zAmbA.jpg', 'name': 'Шостак Дина', 'id': 11292720}, {'ava': 'https://sun9-11.userapi.com/c639717/v639717694/35137/uuIggPObPs4.jpg', 'name': 'Лопатникова Марина', 'id': 11321685}, {'ava': 'https://pp.userapi.com/c639527/v639527462/314cb/eNZU-NdA3ws.jpg', 'name': 'Терёхина Ирина', 'id': 11566431}, {'ava': 'https://sun9-11.userapi.com/c639717/v639717034/4584b/MUcNXp9y2qA.jpg', 'name': 'Мурзашев Адильхан', 'id': 11788247}, {'ava': 'https://pp.userapi.com/c9568/u11895994/e_aed7a9ef.jpg', 'name': 'Меркулова Анна', 'id': 11895994}, {'ava': 'https://pp.userapi.com/c841235/v841235613/12988/3uP00Mywm4U.jpg', 'name': 'Шарипова Эльвира', 'id': 12287599}, {'ava': 'https://pp.userapi.com/c621513/v621513461/bb4f/CjXtRUS8mTA.jpg', 'name': 'Вальба Настя', 'id': 12393207}, {'ava': 'https://pp.userapi.com/c636929/v636929866/31ce3/MPZi_5dhXEQ.jpg', 'name': 'Белый Дима', 'id': 12547866}, {'ava': 'https://pp.userapi.com/c837137/v837137717/58892/DoYul-Muc9A.jpg', 'name': 'Кругликов Дима', 'id': 12576303}, {'ava': 'https://pp.userapi.com/c836527/v836527947/4f56c/YpkFvW3orHw.jpg', 'name': 'Мазова Ева', 'id': 12937111}, {'ava': 'https://pp.userapi.com/c620624/v620624433/15fdf/mqJkbX_V66o.jpg', 'name': 'Барченков Иван', 'id': 13535433}, {'ava': 'https://pp.userapi.com/c630829/v630829380/18e1e/164d4qBuNp0.jpg', 'name': 'Кузнецова Светлана', 'id': 13539380}, {'ava': 'https://pp.userapi.com/c425428/v425428317/96e0/MxVAA1jRbXY.jpg', 'name': 'Кабанов Дмитрий', 'id': 13636317}, {'ava': 'https://pp.userapi.com/c638923/v638923892/6a578/kVv9CfieIJM.jpg', 'name': 'Кутявин Алексей', 'id': 14437923}, {'ava': 'https://pp.userapi.com/c639820/v639820079/204f3/UbvKLC0hGrA.jpg', 'name': 'Бирюков Владислав', 'id': 14456079}, {'ava': 'https://pp.userapi.com/c303/u14586631/e_f6ae771a.jpg', 'name': 'Подгорный Сергей', 'id': 14586631}, {'ava': 'https://pp.userapi.com/c628218/v628218344/2c1c5/T7jxIaATJv4.jpg', 'name': 'Воронина Евгения', 'id': 14968344}, {'ava': 'https://pp.userapi.com/c618919/v618919755/fa9b/vsLfSvILYHM.jpg', 'name': 'Лукьянов Александр', 'id': 15001755}, {'ava': 'https://pp.userapi.com/c841632/v841632594/179df/W7YVkHxOJ94.jpg', 'name': 'Богатырева Валентина', 'id': 15134454}, {'ava': 'https://sun9-11.userapi.com/c639324/v639324150/39573/INwxejcbDkQ.jpg', 'name': 'Марчук Екатерина', 'id': 15228014}, {'ava': 'https://pp.userapi.com/c836125/v836125456/545e0/jKxqDmqeMLM.jpg', 'name': 'Сондор Михаил', 'id': 16604602}, {'ava': 'https://pp.userapi.com/c638025/v638025559/5a20b/jeGG-nBnaGw.jpg', 'name': 'Кричевская Настюшка', 'id': 16768293}, {'ava': 'https://pp.userapi.com/c623924/v623924244/15c87/eJb-3cNj3gk.jpg', 'name': 'Князев Максим', 'id': 16869244}, {'ava': 'https://pp.userapi.com/c628324/v628324698/3446c/2pmqBecDOmw.jpg', 'name': 'Вознюк Роман', 'id': 16936698}, {'ava': 'https://pp.userapi.com/c841526/v841526922/4a8e/foEIyQB7rkE.jpg', 'name': 'Остапченко Андрей', 'id': 17703922}, {'ava': 'https://pp.userapi.com/c9853/u17863820/e_000779a5.jpg', 'name': 'Власов Владимир', 'id': 17863820}, {'ava': 'https://pp.userapi.com/c836431/v836431765/4c866/6kwuEbScyOo.jpg', 'name': 'Лазарев Дмитрий', 'id': 18407022}, {'ava': 'https://pp.userapi.com/c836126/v836126873/3cb4b/6E49W4ppi2k.jpg', 'name': 'Раби Стешa', 'id': 18793873}, {'ava': 'https://pp.userapi.com/c637525/v637525458/5e9ac/4BZdD96Zd-Y.jpg', 'name': 'Кононенко Константин', 'id': 20055458}, {'ava': 'https://pp.userapi.com/c841225/v841225724/96d8/hTgYjOOimIk.jpg', 'name': 'Мартынов Александр', 'id': 20256529}, {'ava': 'https://pp.userapi.com/c841438/v841438780/22943/0YOc1Nomzn8.jpg', 'name': 'Белякова Татьяна', 'id': 20516093}, {'ava': 'https://pp.userapi.com/c628019/v628019134/12a28/KQ7T_rCZE58.jpg', 'name': 'Slanov David', 'id': 20769134}, {'ava': 'https://pp.userapi.com/c421331/v421331410/19f9/KA7nVK9XoVo.jpg', 'name': 'Гусман Эльвира', 'id': 21598410}, {'ava': 'https://pp.userapi.com/c625218/v625218354/28c1b/yiRP2UqlnjI.jpg', 'name': 'Sultanova Raisa', 'id': 21801354}, {'ava': 'https://pp.userapi.com/c837437/v837437794/227b1/nxz9QA7K2RI.jpg', 'name': 'Бармина Екатерина', 'id': 22019794}, {'ava': 'https://pp.userapi.com/c626426/v626426795/2973a/G5sLgFKHDUs.jpg', 'name': 'Спос Колян', 'id': 23815795}, {'ava': 'https://pp.userapi.com/c637724/v637724467/73f48/qikmlguV56o.jpg', 'name': 'Михалева Наталья', 'id': 24443152}, {'ava': 'https://pp.userapi.com/c637517/v637517449/5ca01/_1lukY9LkxU.jpg', 'name': 'Тюрин Иван', 'id': 25146989}, {'ava': 'https://pp.userapi.com/c622517/v622517750/36163/jDMlizFj4e8.jpg', 'name': 'Олешевич Алена', 'id': 25935750}, {'ava': 'https://pp.userapi.com/c622920/v622920765/67c5/X0BlAbHMwvc.jpg', 'name': 'Isaev Dan', 'id': 26169765}, {'ava': 'https://pp.userapi.com/c639321/v639321557/30f28/sm73utgz-Us.jpg', 'name': 'Наумова Эля', 'id': 26932557}, {'ava': 'https://pp.userapi.com/c837730/v837730042/2af57/e0rVVE3C3sE.jpg', 'name': 'Гетун Андрей', 'id': 27128042}, {'ava': 'https://pp.userapi.com/c639329/v639329081/36528/oORsHNZMap8.jpg', 'name': 'Курильчик Анна', 'id': 28049738}, {'ava': 'https://pp.userapi.com/c841138/v841138413/200d5/26DVKg4IOq8.jpg', 'name': 'Рысев Алексей', 'id': 28264128}, {'ava': 'https://pp.userapi.com/c841227/v841227752/e209/7pRxWDYBtZo.jpg', 'name': 'Алов Борис', 'id': 28317957}, {'ava': 'https://pp.userapi.com/c637419/v637419702/3b37e/qS2SpzNMz_Y.jpg', 'name': 'Лактионов Игорь', 'id': 28946702}, {'ava': 'https://pp.userapi.com/c631126/v631126076/1bd1c/0wXd0swt8J4.jpg', 'name': 'М******** Марина', 'id': 30030076}, {'ava': 'https://pp.userapi.com/c637116/v637116157/55a01/QPVTA13CHaA.jpg', 'name': 'Творцов Дмитрий', 'id': 30116157}, {'ava': 'https://pp.userapi.com/c412827/v412827310/95d1/oAVZaNjg1iA.jpg', 'name': 'Косарев Илья', 'id': 30542310}, {'ava': 'https://pp.userapi.com/c637117/v637117524/657f7/D_BE2Wa19bY.jpg', 'name': 'Колесникова Екатерина', 'id': 30556917}, {'ava': 'https://pp.userapi.com/c836732/v836732490/32bae/uzPIbdJBFd0.jpg', 'name': 'Тимшин Дмитрий', 'id': 30865490}, {'ava': 'https://pp.userapi.com/c5705/u31412395/e_a6ace023.jpg', 'name': 'Горючкин Виталий', 'id': 31412395}, {'ava': 'https://pp.userapi.com/c836632/v836632136/4e5dc/LDfk8vZi25k.jpg', 'name': 'Ходос Екатерина', 'id': 31749286}, {'ava': 'https://pp.userapi.com/c841630/v841630209/1b74c/0jqxXE1hsyA.jpg', 'name': 'Фомина Светлана', 'id': 31753967}, {'ava': 'https://pp.userapi.com/c633231/v633231710/1c697/d8xqjupt52s.jpg', 'name': 'Иванов Алексей', 'id': 31757710}, {'ava': 'https://pp.userapi.com/c636231/v636231020/35ed5/Oex78rg7PJs.jpg', 'name': 'Грачев Борис', 'id': 32085020}, {'ava': 'https://pp.userapi.com/c841025/v841025241/14d94/vy50J40ocDg.jpg', 'name': 'Меркулов Сергей', 'id': 32935377}, {'ava': 'https://pp.userapi.com/c841328/v841328781/f538/nWNNrYja8sQ.jpg', 'name': 'Каменская Ксения', 'id': 35156666}, {'ava': 'https://pp.userapi.com/c638227/v638227791/5b3a1/O-xZWbLFJSg.jpg', 'name': 'Майоренко Марина', 'id': 35321864}, {'ava': 'https://pp.userapi.com/c317222/v317222537/b9af/f26vkrPe4ys.jpg', 'name': 'Солодовниченко Ольга', 'id': 35650537}, {'ava': 'https://pp.userapi.com/c628823/v628823497/29ba6/tH6E3_KM8xk.jpg', 'name': 'Шамшур Евгений', 'id': 37945497}, {'ava': 'https://pp.userapi.com/c636828/v636828090/6b756/Lqy24EvrHHM.jpg', 'name': 'Яковенко Сергей', 'id': 38037090}, {'ava': 'https://pp.userapi.com/c841122/v841122661/1571e/GsGNmedM_PI.jpg', 'name': 'Ардабьев Дмитрий', 'id': 40629553}, {'ava': 'https://pp.userapi.com/c637727/v637727322/55494/QpS4OVqhQJA.jpg', 'name': 'Климов Николай', 'id': 40632322}, {'ava': 'https://pp.userapi.com/c836538/v836538217/58b26/vIaKAJNFklk.jpg', 'name': 'Брик Оля', 'id': 40878188}, {'ava': 'https://pp.userapi.com/c406923/v406923490/91c1/4ch2xE3K91w.jpg', 'name': 'Кудрявцева Елена', 'id': 41221490}, {'ava': 'https://pp.userapi.com/c836136/v836136622/1be66/Y4MgLWGptZ4.jpg', 'name': 'Ермаков Алексей', 'id': 44048622}, {'ava': 'https://pp.userapi.com/c841526/v841526372/1298f/Gxv3X7FCOlA.jpg', 'name': 'Верникович Ипполит', 'id': 44537897}, {'ava': 'https://pp.userapi.com/c9925/v9925847/1c0/Fcl_cJ6clbU.jpg', 'name': 'Лзд Серега', 'id': 45277847}, {'ava': 'https://pp.userapi.com/c633917/v633917271/327c4/lcRSiDTuevE.jpg', 'name': 'Завьялова Дарья', 'id': 45352271}, {'ava': 'https://pp.userapi.com/c841429/v841429572/1554f/FeQdmTDIRxY.jpg', 'name': 'Харламов Михаил', 'id': 45757637}, {'ava': 'https://pp.userapi.com/c637216/v637216768/242da/dB7rQyLjXzY.jpg', 'name': 'Кец Евгений', 'id': 46289768}, {'ava': 'https://pp.userapi.com/c836225/v836225011/682c6/zdwYIIL93tQ.jpg', 'name': 'Адамович Альбина', 'id': 48074129}, {'ava': 'https://pp.userapi.com/c637924/v637924884/59899/Ohiil3RxeHQ.jpg', 'name': 'Лень Оксана', 'id': 48603884}, {'ava': 'https://pp.userapi.com/c616719/v616719804/3c5b/raq5HaIIvjk.jpg', 'name': 'Веробей Евгений', 'id': 48843804}, {'ava': 'https://pp.userapi.com/c841529/v841529769/1c97e/TPDAFOjIx_E.jpg', 'name': 'Гревцева Юлия', 'id': 50318100}, {'ava': 'https://pp.userapi.com/c836234/v836234383/70eaa/J5zpVl-y1os.jpg', 'name': 'Худяков Алексей', 'id': 51386178}, {'ava': 'https://pp.userapi.com/c836429/v836429328/2e869/jX3TQKerkXc.jpg', 'name': 'Анатольевич Sergey', 'id': 52938328}, {'ava': 'https://pp.userapi.com/c636023/v636023099/14d97/UZWr_T1B9YU.jpg', 'name': 'Степанова Ирина', 'id': 54442099}, {'ava': 'https://pp.userapi.com/c639827/v639827574/3ff54/NCvC8y7MEY8.jpg', 'name': 'Ильянов Дмитрий', 'id': 54957624}, {'ava': 'https://pp.userapi.com/c840231/v840231444/2c955/s_0EjuPipuA.jpg', 'name': 'Кузнецов Алексей', 'id': 55194106}, {'ava': 'https://pp.userapi.com/c4676/u56011348/e_09598841.jpg', 'name': 'Усычкин Сергей', 'id': 56011348}, {'ava': 'https://pp.userapi.com/c637623/v637623743/62e2b/ehQwxYOWhw8.jpg', 'name': 'Подлесной Артем', 'id': 56197743}, {'ava': 'https://pp.userapi.com/c633221/v633221880/c928/wSgJDufj6zA.jpg', 'name': 'Андреева Валентина', 'id': 57399880}, {'ava': 'https://pp.userapi.com/c836135/v836135536/6d72b/cMBr6XwhfWY.jpg', 'name': 'Полибин Михаил', 'id': 57536247}, {'ava': 'https://pp.userapi.com/c638419/v638419124/5d4ab/eVuwWhgkqyk.jpg', 'name': 'Лайне Лиза', 'id': 58027809}, {'ava': 'https://pp.userapi.com/c10622/u58078325/e_cc62d134.jpg', 'name': 'Демьянова (Иванова) Мария', 'id': 58078325}, {'ava': 'https://pp.userapi.com/c639629/v639629112/4c888/3QESYoXt1ww.jpg', 'name': 'Замалина Екатерина', 'id': 59790681}, {'ava': 'https://sun9-11.userapi.com/c836621/v836621034/5b998/lkXKihrcmjI.jpg', 'name': 'Хуламханова Амина', 'id': 62479096}, {'ava': 'https://pp.userapi.com/c637229/v637229637/5a109/crH1w5lfYbc.jpg', 'name': 'Конев Денис', 'id': 66830354}, {'ava': 'https://pp.userapi.com/c639617/v639617905/3d62a/xitZGgCj9QI.jpg', 'name': 'Осипова Алёна', 'id': 69444491}, {'ava': 'https://pp.userapi.com/c624216/v624216238/40dd0/G8bAneD8qUQ.jpg', 'name': 'Федоров Сергей', 'id': 71916238}, {'ava': 'https://pp.userapi.com/c9831/u72185035/e_51981f35.jpg', 'name': 'Ivanov Petr', 'id': 72185035}, {'ava': 'https://pp.userapi.com/c836527/v836527794/6a31b/RB124Izu3ao.jpg', 'name': 'Фирсов Александр', 'id': 72590865}, {'ava': 'https://pp.userapi.com/c840231/v840231736/2a83/x7ZlKzuAFSI.jpg', 'name': 'Меренков Виталий', 'id': 76052736}, {'ava': 'https://pp.userapi.com/c638928/v638928902/41e4d/fwGkl1FcqiE.jpg', 'name': 'Кузнецова Катюшка', 'id': 76548902}, {'ava': 'https://pp.userapi.com/c639716/v639716576/36491/QY5VlU4KOsk.jpg', 'name': 'Рыбянец Анна', 'id': 81733950}, {'ava': 'https://pp.userapi.com/c621729/v621729667/39f6e/v69FOlPJBFE.jpg', 'name': 'Горт Диас Андрей', 'id': 82767667}, {'ava': 'https://pp.userapi.com/c638024/v638024475/4a1f0/rHOsvMmxtdQ.jpg', 'name': 'Ларцев Денис', 'id': 84500475}, {'ava': 'https://pp.userapi.com/c636124/v636124305/204a5/28s0XgmOjOg.jpg', 'name': 'Сковорода Константин', 'id': 84648305}, {'ava': 'https://pp.userapi.com/c638229/v638229053/60b73/SX4nqYweUFo.jpg', 'name': 'Шуйский Руслан', 'id': 87619739}, {'ava': 'https://pp.userapi.com/c637526/v637526234/46c43/bQxVxNSA_5c.jpg', 'name': 'Крупышев Александр', 'id': 89299234}, {'ava': 'https://pp.userapi.com/c622721/v622721553/48afd/PxxtafOJxoA.jpg', 'name': 'Дротиков Геннадий', 'id': 92752553}, {'ava': 'https://pp.userapi.com/c303107/u95535213/e_4b977011.jpg', 'name': 'Бутин Сергей', 'id': 95535213}, {'ava': 'https://pp.userapi.com/c841026/v841026334/1c9e7/enNihklmoyc.jpg', 'name': 'Лашев Денис', 'id': 95563004}, {'ava': 'https://pp.userapi.com/c837732/v837732468/340e3/euxA37xwq8A.jpg', 'name': 'Гольдман Александра', 'id': 95596468}, {'ava': 'https://pp.userapi.com/c837131/v837131941/5b8ef/C8_x6RF1ivY.jpg', 'name': 'Горбачева Мария', 'id': 96994008}, {'ava': 'https://sun9-11.userapi.com/c836621/v836621639/5dec3/a-7-M5_IcZo.jpg', 'name': 'Мдиванян Эдуард', 'id': 99345353}, {'ava': 'https://pp.userapi.com/c638921/v638921448/3671/K3HOfyQ_Jec.jpg', 'name': 'Валитов Евгений', 'id': 100404448}, {'ava': 'https://pp.userapi.com/c637827/v637827506/56f4b/KMQ-zkMzKPc.jpg', 'name': 'Бурганов Роберт', 'id': 100882506}, {'ava': 'https://pp.userapi.com/c623219/v623219235/262b8/E2rUvd2lCWs.jpg', 'name': 'Пасик Михаил', 'id': 111712235}, {'ava': 'https://pp.userapi.com/c841427/v841427599/1c7ea/O46KN4F5bTM.jpg', 'name': 'Фокин Василий', 'id': 113525244}, {'ava': 'https://pp.userapi.com/c836337/v836337341/18cb8/mEI-qiYYLGE.jpg', 'name': 'Бурбаев Константин', 'id': 114459341}, {'ava': 'https://pp.userapi.com/c623716/v623716820/4ffdb/NgaMabst1gA.jpg', 'name': 'Шаповалов Андрей', 'id': 120564820}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Леонов Денис', 'id': 124472713}, {'ava': 'https://pp.userapi.com/c604726/v604726376/12256/7NGfq2weIkM.jpg', 'name': 'Лебедевская Татьяна', 'id': 126369376}, {'ava': 'https://pp.userapi.com/c836622/v836622638/56964/Nrcl_gZoEhI.jpg', 'name': 'Матков Роман', 'id': 127019174}, {'ava': 'https://pp.userapi.com/c619216/v619216699/150bc/GpDAt1eNX08.jpg', 'name': 'Румянцева Евгения', 'id': 127397699}, {'ava': 'https://pp.userapi.com/c837123/v837123101/36d5/OX-5vvnxzMk.jpg', 'name': 'Евсеенко Вячеслав', 'id': 132937101}, {'ava': 'https://pp.userapi.com/c623122/v623122196/226f1/INkwXM8Iq6s.jpg', 'name': 'Хисматулина Юля', 'id': 133813196}, {'ava': 'https://pp.userapi.com/c637321/v637321273/dcb1/jIqfLkAGTN8.jpg', 'name': 'Филатова Светлана', 'id': 134801273}, {'ava': 'https://pp.userapi.com/c836435/v836435123/55b62/kKnw1RVFOwU.jpg', 'name': 'Таймусов Руслан', 'id': 136959564}, {'ava': 'https://pp.userapi.com/c837531/v837531196/6f743/FZeXJtnkI_I.jpg', 'name': 'Метёлкина Светлана', 'id': 137300858}, {'ava': 'https://pp.userapi.com/c840127/v840127718/298e2/O6b_DaIWStM.jpg', 'name': 'Патова Анастасия', 'id': 137485470}, {'ava': 'https://pp.userapi.com/c621319/v621319352/25291/gQeFVh3c_rM.jpg', 'name': 'Хайден Сергей', 'id': 137798352}, {'ava': 'https://pp.userapi.com/c419216/v419216864/9b96/1ZSLI0-hfEg.jpg', 'name': 'Elesin Denis', 'id': 137913864}, {'ava': 'https://pp.userapi.com/c11030/u138500231/e_47c207c2.jpg', 'name': 'Викторов Владислав', 'id': 138500231}, {'ava': 'https://pp.userapi.com/c638020/v638020229/141df/rogiEkUbjPg.jpg', 'name': 'Настюшкин Александр', 'id': 139192229}, {'ava': 'https://pp.userapi.com/c638929/v638929479/58667/dAgaW_SU_30.jpg', 'name': 'Креветкин Саша', 'id': 139684454}, {'ava': 'https://pp.userapi.com/c840024/v840024595/1f672/AJ44lHOJYvo.jpg', 'name': 'Пчелинцев Иван', 'id': 140970855}, {'ava': 'https://pp.userapi.com/c841623/v841623307/12ea4/B2pG9_opl3M.jpg', 'name': 'Дудорова Елена', 'id': 141881868}, {'ava': 'https://pp.userapi.com/c836423/v836423302/53479/aXXJLJ6N4MA.jpg', 'name': 'Калачёва Мария', 'id': 142274581}, {'ava': 'https://pp.userapi.com/c402318/v402318364/6b57/770WRjySBbk.jpg', 'name': 'Сафин Альберт', 'id': 142344364}, {'ava': 'https://pp.userapi.com/c638330/v638330933/5123c/8DWxqYv_f4M.jpg', 'name': 'Зинченко Алексей', 'id': 144399714}, {'ava': 'https://pp.userapi.com/c10358/v10358017/151/6lKsTF-BXxo.jpg', 'name': 'Шамакова Вера', 'id': 146442017}, {'ava': 'https://pp.userapi.com/c837527/v837527232/7524f/UWihwqBFe5A.jpg', 'name': 'Терентьев Андрей', 'id': 150481939}, {'ava': 'https://pp.userapi.com/c604722/v604722000/3b137/2IhtD4hsoqM.jpg', 'name': 'Летов Вячеслав', 'id': 152317000}, {'ava': 'https://pp.userapi.com/c837625/v837625166/3287f/DjtJXcNL_qw.jpg', 'name': 'Беспалова Екатерина', 'id': 153401166}, {'ava': 'https://pp.userapi.com/c836528/v836528214/851a3/C1fTXrwf3xA.jpg', 'name': 'Нигматулина Альфира', 'id': 153678702}, {'ava': 'https://pp.userapi.com/c302712/v302712601/6d4d/BzluTvRyuZI.jpg', 'name': 'Тарасов Олег', 'id': 156498601}, {'ava': 'https://pp.userapi.com/c837535/v837535304/6cc1e/M49EZq6VFI0.jpg', 'name': 'Крапивнюк Егор', 'id': 162098691}, {'ava': 'https://pp.userapi.com/c837326/v837326306/e22a/nvJ2KOGQYl8.jpg', 'name': 'Валитов Денис', 'id': 162406306}, {'ava': 'https://pp.userapi.com/c9950/u164508263/e_830752bf.jpg', 'name': 'Терентьева Екатерина', 'id': 164508263}, {'ava': 'https://pp.userapi.com/c620221/v620221118/138d5/YX-73cX3NAg.jpg', 'name': 'Приведенная Юлия', 'id': 167161118}, {'ava': 'https://pp.userapi.com/c638523/v638523557/5f76b/sPNOJ315tmk.jpg', 'name': 'Бокорёва Алёна', 'id': 167274105}, {'ava': 'https://pp.userapi.com/c836525/v836525713/74200/h05eatz4nWE.jpg', 'name': 'Осадчая Оля', 'id': 167926509}, {'ava': 'https://pp.userapi.com/c630721/v630721705/3fce0/YovwzG5OC5o.jpg', 'name': 'Шарова Ольга', 'id': 170073705}, {'ava': 'https://pp.userapi.com/c841136/v841136773/20688/ehLL2ZWLxNI.jpg', 'name': 'Герасимов Саша', 'id': 170468613}, {'ava': 'https://pp.userapi.com/c841128/v841128461/16b99/NGxKE_YQGb4.jpg', 'name': 'Куликов Антон', 'id': 172752768}, {'ava': 'https://pp.userapi.com/c623917/v623917700/17a68/rJPbgMRWgKY.jpg', 'name': 'Nazarov Dmitry', 'id': 172875700}, {'ava': 'https://pp.userapi.com/c836528/v836528966/4ec8a/dnVJYoj1eBw.jpg', 'name': 'Майоров Виталий', 'id': 173584966}, {'ava': 'https://pp.userapi.com/c625126/v625126766/2801b/Eq4Mwof5gl0.jpg', 'name': 'Tozhokina Natalka', 'id': 174951766}, {'ava': 'https://pp.userapi.com/c631430/v631430203/55253/VmSc1vh94BU.jpg', 'name': 'Смотрицкий Валерий', 'id': 176484203}, {'ava': 'https://pp.userapi.com/c633923/v633923463/3a05c/kc8N-4kl1Gk.jpg', 'name': 'Кёзин Бахит', 'id': 180194463}, {'ava': 'https://pp.userapi.com/c626119/v626119526/67297/1gwvvygK1pU.jpg', 'name': 'Аштаев Алексей', 'id': 182720526}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Гудков Никита', 'id': 183778906}, {'ava': 'https://pp.userapi.com/c841622/v841622236/1bfa4/ptIRr607cEY.jpg', 'name': 'Иванов Аслябий', 'id': 185743594}, {'ava': 'https://pp.userapi.com/c316830/v316830013/5a28/xhdBC7BrD7E.jpg', 'name': 'Демченко Слава', 'id': 185933013}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Петров Иван', 'id': 190129765}, {'ava': 'https://pp.userapi.com/c637229/v637229902/4a18/cEXgjkd29Ck.jpg', 'name': 'Kulanov Anton', 'id': 196900902}, {'ava': 'https://pp.userapi.com/c639825/v639825854/3b590/o7nDItR8zBI.jpg', 'name': 'Белова Таня', 'id': 200314843}, {'ava': 'https://pp.userapi.com/c637220/v637220260/3fc41/0I3T-kQMAYk.jpg', 'name': 'Подгородная Галина', 'id': 203080260}, {'ava': 'https://pp.userapi.com/c638131/v638131247/58ae7/XgaJoCqm3A4.jpg', 'name': 'Соколова Вероника', 'id': 205404294}, {'ava': 'https://pp.userapi.com/c639320/v639320547/3309a/_yqFC2Ohggg.jpg', 'name': 'Veselov Andrey', 'id': 211874781}, {'ava': 'https://pp.userapi.com/c410929/v410929867/9439/TMdy5YFacZc.jpg', 'name': 'Крылов Александр', 'id': 214643867}, {'ava': 'https://pp.userapi.com/c840135/v840135152/21c87/GQBZJf47VMQ.jpg', 'name': 'Усманов Руслан', 'id': 217782624}, {'ava': 'https://pp.userapi.com/c637622/v637622830/175c9/rEY1cZIHTnE.jpg', 'name': 'Selena Selena', 'id': 218591830}, {'ava': 'https://pp.userapi.com/c617317/v617317611/a093/aJJdBAkpieQ.jpg', 'name': 'Yourself Respect', 'id': 219036611}, {'ava': 'https://sun9-11.userapi.com/c836425/v836425650/57251/3-NCJ0k0fcA.jpg', 'name': 'Романов Роман', 'id': 222622393}, {'ava': 'https://pp.userapi.com/c628221/v628221334/3e039/8GuPUaBnm-A.jpg', 'name': 'Ausev Adam', 'id': 224200334}, {'ava': 'https://pp.userapi.com/c322319/v322319761/240b/MmyVDHDHzYs.jpg', 'name': 'Xep Pycckuu', 'id': 226279761}, {'ava': 'https://pp.userapi.com/c639422/v639422182/2261f/dNE4SSpfTxo.jpg', 'name': 'Йениавджи Елена', 'id': 226459182}, {'ava': 'https://pp.userapi.com/c313927/v313927809/33e8/Hivjls_w2w4.jpg', 'name': 'Анохина Ольга', 'id': 227901809}, {'ava': 'https://pp.userapi.com/c841226/v841226237/214e4/r8Tp9YJYTOk.jpg', 'name': 'Елисов Динис', 'id': 229172002}, {'ava': 'https://sun9-11.userapi.com/c639821/v639821604/4db79/e8UuKb1d7OQ.jpg', 'name': 'Власкин Константин', 'id': 229227845}, {'ava': 'https://pp.userapi.com/c836136/v836136373/48961/gScL23Wquws.jpg', 'name': 'Meyers Nata', 'id': 230540373}, {'ava': 'https://pp.userapi.com/c622529/v622529462/4f1d8/RzWVD4ujseA.jpg', 'name': 'Слепых Светлана', 'id': 230724462}, {'ava': 'https://pp.userapi.com/c637327/v637327295/275bf/0TyW0FWyODU.jpg', 'name': 'Мороз Есения', 'id': 234122295}, {'ava': 'https://pp.userapi.com/c622621/v622621834/286c9/2Tx5J5tW2YQ.jpg', 'name': 'Бархатова Ольга', 'id': 234298834}, {'ava': 'https://pp.userapi.com/c637118/v637118488/3e2f3/N3GDIPDHjNs.jpg', 'name': 'Коуч Ольга', 'id': 234939488}, {'ava': 'https://pp.userapi.com/c627726/v627726199/16972/qL1UWF2MRwE.jpg', 'name': 'Пахомов Александр', 'id': 235283199}, {'ava': 'https://pp.userapi.com/c837723/v837723852/3b7d2/_3R4AKTMBf4.jpg', 'name': 'Валерьевич Антон', 'id': 236771852}, {'ava': 'https://pp.userapi.com/c639117/v639117073/41802/wcXS33RkADM.jpg', 'name': 'Харин Александр', 'id': 237997046}, {'ava': 'https://pp.userapi.com/c841320/v841320634/c444/7aQND4mW0N8.jpg', 'name': 'Хельгюсон Сергей', 'id': 238402555}, {'ava': 'https://pp.userapi.com/c637524/v637524169/1787/fdA_gIpv2_U.jpg', 'name': 'Мишин Денис', 'id': 243258169}, {'ava': 'https://pp.userapi.com/c836128/v836128705/5967e/YKmVMXjMRoY.jpg', 'name': 'Свирина Наталья', 'id': 245114500}, {'ava': 'https://pp.userapi.com/c607518/v607518488/5964/dtLzyGV0Z2Q.jpg', 'name': 'Ruffneck Soul', 'id': 246725488}, {'ava': 'https://pp.userapi.com/c626917/v626917507/2c1d9/odeNzdXuRtI.jpg', 'name': 'Фуртат Юлия', 'id': 248397507}, {'ava': 'https://pp.userapi.com/c616728/v616728915/1cad4/Q165cOboAQQ.jpg', 'name': 'Fil Kris', 'id': 248849915}, {'ava': 'https://pp.userapi.com/c638931/v638931488/54510/5hC2BXrhrlY.jpg', 'name': 'Онисенко Поля', 'id': 248986004}, {'ava': 'https://pp.userapi.com/c629513/v629513552/1483b/NB7Rqvg_jVI.jpg', 'name': 'Поклонский Матвей', 'id': 249172552}, {'ava': 'https://pp.userapi.com/c626928/v626928825/a4e7/RscQs-YdTiQ.jpg', 'name': 'Закиров Руслан', 'id': 251961825}, {'ava': 'https://pp.userapi.com/c836728/v836728540/67a03/4vRVaEX3vXY.jpg', 'name': 'Зарипова Камила', 'id': 253620676}, {'ava': 'https://pp.userapi.com/c638325/v638325791/4e902/nYj1cMLTGuc.jpg', 'name': 'Волкова Света', 'id': 256750791}, {'ava': 'https://pp.userapi.com/c639222/v639222575/1bb6f/KW8vKUf07q0.jpg', 'name': 'Alanji Alen', 'id': 257419575}, {'ava': 'https://pp.userapi.com/c639129/v639129708/54a3b/vcKEYWv7tj0.jpg', 'name': 'Рахманова Катерина', 'id': 258721618}, {'ava': 'https://pp.userapi.com/c836721/v836721540/571d8/lMugYODLHZc.jpg', 'name': 'Ильяшенко Лада', 'id': 260915111}, {'ava': 'https://pp.userapi.com/c622921/v622921966/4d929/ez85a1EOm6k.jpg', 'name': 'Лотос Белый', 'id': 266205966}, {'ava': 'https://pp.userapi.com/c619726/v619726589/1515e/7Oc5H-u-NXo.jpg', 'name': 'Носов Серёга', 'id': 267921589}, {'ava': 'https://pp.userapi.com/c836525/v836525540/23128/2c4b0ApUZWU.jpg', 'name': 'Рыбак Александр', 'id': 268288540}, {'ava': 'https://pp.userapi.com/c840434/v840434123/84d9/rZIjvAfdnwo.jpg', 'name': 'Баринова Элина', 'id': 281458545}, {'ava': 'https://pp.userapi.com/c639527/v639527274/3965b/7OjrdbUdlnw.jpg', 'name': 'Fly Nina', 'id': 281720749}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Bondarenko Maria', 'id': 283072265}, {'ava': 'https://pp.userapi.com/c639221/v639221140/26cb1/oMYMyyUDoLc.jpg', 'name': 'Кочетков Александр', 'id': 287259140}, {'ava': 'https://pp.userapi.com/c633719/v633719192/30738/8fgG2Xz9V9g.jpg', 'name': 'Аюб Шаик', 'id': 287893192}, {'ava': 'https://pp.userapi.com/c628021/v628021181/41221/1nSHudyeue8.jpg', 'name': 'Андреева Кристина', 'id': 288869181}, {'ava': 'https://pp.userapi.com/c638626/v638626899/4e7c5/GMGOHXd1II8.jpg', 'name': 'Шехмаметьев Тимур', 'id': 291845037}, {'ava': 'https://pp.userapi.com/c627528/v627528795/2a95b/p5xjQVRpkCs.jpg', 'name': 'Савельева Марина', 'id': 292952795}, {'ava': 'https://pp.userapi.com/c621116/v621116027/1004d/fci5hPMB_to.jpg', 'name': 'Никитина Анна', 'id': 293055027}, {'ava': 'https://pp.userapi.com/c627528/v627528169/49577/jx3G1PQfLvg.jpg', 'name': 'Найн Алекс', 'id': 294270169}, {'ava': 'https://pp.userapi.com/c604324/v604324678/45bb/sYo0dRtWBok.jpg', 'name': 'Н-А-У-М-Е-Н-К-О Денис', 'id': 298912678}, {'ava': 'https://pp.userapi.com/c837522/v837522370/5b17a/Q7FvjuElfg0.jpg', 'name': 'Шеметова Полина', 'id': 299789894}, {'ava': 'https://pp.userapi.com/c604318/v604318244/60814/r13Lrq3y_J8.jpg', 'name': 'Крылов Паша', 'id': 300046244}, {'ava': 'https://pp.userapi.com/c836229/v836229829/2dae9/xfdshT0fLMU.jpg', 'name': 'Невский Игорь', 'id': 303577829}, {'ava': 'https://pp.userapi.com/c836225/v836225180/55bd/flzou2MUYPw.jpg', 'name': 'Маланка Андрей', 'id': 306524180}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Алешин Андрей', 'id': 309524289}, {'ava': 'https://pp.userapi.com/c837129/v837129356/4cc97/xBlXa9bu6WI.jpg', 'name': 'Белая Маша', 'id': 311029542}, {'ava': 'https://pp.userapi.com/c639216/v639216540/3a821/ftkkd-9QlFc.jpg', 'name': 'Кочергин Олег', 'id': 313902726}, {'ava': 'https://pp.userapi.com/c836435/v836435944/3ca1f/E1NxYJE4QCw.jpg', 'name': 'Цюпа Антон', 'id': 314915944}, {'ava': 'https://pp.userapi.com/c622019/v622019766/3f55b/LdX9eawnO4k.jpg', 'name': 'Ковальчук Вячеслав', 'id': 316125766}, {'ava': 'https://pp.userapi.com/c836727/v836727534/7b6d/aHlR840jxGw.jpg', 'name': 'Champion Olympic', 'id': 316765534}, {'ava': 'https://pp.userapi.com/c837222/v837222643/30979/7ulw41F1IuQ.jpg', 'name': 'Магамедов Заур', 'id': 316851643}, {'ava': 'https://pp.userapi.com/c636228/v636228687/5d91c/hmaDvcNMcMY.jpg', 'name': 'Мартынов Игорь', 'id': 317715687}, {'ava': 'https://pp.userapi.com/c604818/v604818900/30836/pOhrpyAgIfQ.jpg', 'name': 'Russia Mizuno', 'id': 326140900}, {'ava': 'https://pp.userapi.com/c639225/v639225709/42c89/txluf7PmKqs.jpg', 'name': 'Иванов Андрей', 'id': 326714619}, {'ava': 'https://pp.userapi.com/c630927/v630927860/7e6a/Snhi8zqSNsI.jpg', 'name': 'Мариев Александр', 'id': 327085860}, {'ava': 'https://pp.userapi.com/c639322/v639322496/4051b/MgnD1HiVG4U.jpg', 'name': 'Алиев Али', 'id': 330073331}, {'ava': 'https://pp.userapi.com/c841220/v841220665/ff1a/5D94IEgQvDQ.jpg', 'name': 'Терехов Михаил', 'id': 330316501}, {'ava': 'https://pp.userapi.com/c841530/v841530235/16c96/I6b37OIOo_w.jpg', 'name': 'Михайлова Рита', 'id': 331371180}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Классный Никита', 'id': 331382342}, {'ava': 'https://sun9-11.userapi.com/c837333/v837333010/e628/J2L4tX-qOPI.jpg', 'name': 'Дубовицкая Евгения', 'id': 331714010}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Знаменский Денис', 'id': 331842872}, {'ava': 'https://pp.userapi.com/c604624/v604624661/481a9/1mn5byIUl8Q.jpg', 'name': 'Makarov Denis', 'id': 335015661}, {'ava': 'https://pp.userapi.com/c626226/v626226168/5d9fe/7kcQfqPb56g.jpg', 'name': 'Атони Ася', 'id': 336146168}, {'ava': 'https://pp.userapi.com/c628616/v628616806/2a589/yJK50PdUkM8.jpg', 'name': 'Нестеров Артем', 'id': 338816806}, {'ava': 'https://pp.userapi.com/c639121/v639121481/306f0/EaqIi_MD5g8.jpg', 'name': 'Aleksandrovich Ivan', 'id': 343624481}, {'ava': 'https://pp.userapi.com/c638428/v638428823/4d01a/vvkLoXqqU68.jpg', 'name': 'Шебалин Виктор', 'id': 345009803}, {'ava': 'https://pp.userapi.com/c638828/v638828510/2d447/ik3rP5uf3mM.jpg', 'name': 'Илья Саблин', 'id': 345315510}, {'ava': 'https://pp.userapi.com/c841530/v841530946/1c94b/C5VM5JODVSM.jpg', 'name': 'Петрищев Максим', 'id': 350246953}, {'ava': 'https://pp.userapi.com/c637326/v637326187/48fbe/QYWfSFjcGtc.jpg', 'name': 'Солнечная Алиса', 'id': 350428187}, {'ava': 'https://pp.userapi.com/c639918/v639918348/27ce1/mjZ6R9yOTlE.jpg', 'name': 'Allenova Margalina', 'id': 355576348}, {'ava': 'https://pp.userapi.com/c636426/v636426069/36eb7/4Fw6uiTEc-o.jpg', 'name': 'Петрова Мария', 'id': 357041069}, {'ava': 'https://pp.userapi.com/c636525/v636525467/38397/dENji_EqLbg.jpg', 'name': 'Гаврилов Степан', 'id': 358024467}, {'ava': 'https://sun9-11.userapi.com/c840226/v840226254/8a36/nnWPqsgijWg.jpg', 'name': 'Spareparts Liftrussia', 'id': 358885254}, {'ava': 'https://pp.userapi.com/c836124/v836124847/4a426/AJSOHIyTJTM.jpg', 'name': 'Ерохин Дмитрий', 'id': 359574113}, {'ava': 'https://pp.userapi.com/c837624/v837624414/49786/eVMTO6f3myw.jpg', 'name': 'Степанов Алексей', 'id': 360543414}, {'ava': 'https://pp.userapi.com/c639520/v639520111/49e3d/ohFwGIskkdU.jpg', 'name': 'Αксенов Artem', 'id': 362520664}, {'ava': 'https://pp.userapi.com/c836533/v836533922/5c64e/xBSmx9tYqUY.jpg', 'name': 'Березин Павел', 'id': 368704185}, {'ava': 'https://pp.userapi.com/c636927/v636927513/137a4/WZWjSLQtinY.jpg', 'name': 'Гайзатов Руслан', 'id': 371055513}, {'ava': 'https://pp.userapi.com/c638631/v638631289/5e95f/9S2Ub8S-WNw.jpg', 'name': 'Зотова Надежда', 'id': 375706746}, {'ava': 'https://pp.userapi.com/c637616/v637616554/3302/HD_XpaUTNTI.jpg', 'name': 'Бадюк Сергей', 'id': 377194554}, {'ava': 'https://pp.userapi.com/c639625/v639625302/1ab20/3I_PTvQu02o.jpg', 'name': 'Devil Angel', 'id': 383493302}, {'ava': 'https://pp.userapi.com/c840223/v840223885/a675/8yPeFnLqsLI.jpg', 'name': 'Копосов Аристотель', 'id': 386736885}, {'ava': 'https://pp.userapi.com/c837138/v837138711/37dce/otBtX3dzVA8.jpg', 'name': 'Морозова Олеся', 'id': 389695711}, {'ava': 'https://pp.userapi.com/c636425/v636425190/5c91a/iVZRrTLBtCM.jpg', 'name': 'Кузин Сергей', 'id': 391886190}, {'ava': 'https://pp.userapi.com/c604616/v604616905/46a04/wvrjVObILBY.jpg', 'name': 'Казаков Андрей', 'id': 392113905}, {'ava': 'https://pp.userapi.com/c637922/v637922470/68f2d/nSDo6TRga34.jpg', 'name': 'Борзаковский Иван', 'id': 393561653}, {'ava': 'https://sun9-11.userapi.com/c639717/v639717589/331c8/OEw3C9TdSxM.jpg', 'name': 'Спиваченко Александр', 'id': 395835589}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Прокофьев Александр', 'id': 396934100}, {'ava': 'https://pp.userapi.com/c836428/v836428102/15c92/DGqVcTPg3Oo.jpg', 'name': 'Кострова Яна', 'id': 400316102}, {'ava': 'https://pp.userapi.com/c638725/v638725789/1a060/ShkfcuoAdYA.jpg', 'name': 'Болотов Тема', 'id': 400380789}, {'ava': 'https://pp.userapi.com/c841624/v841624938/17dca/6a4ott0m1Hs.jpg', 'name': 'Айя Айя', 'id': 404103813}, {'ava': 'https://pp.userapi.com/c638127/v638127816/29371/uARJk4XEq1U.jpg', 'name': 'Собянин Рома', 'id': 406507816}, {'ava': 'https://sun9-11.userapi.com/c836723/v836723703/59029/-QPRl267kV0.jpg', 'name': 'Русланович Роберт', 'id': 406791440}, {'ava': 'https://pp.userapi.com/c637424/v637424380/6a9c7/RHOFtpOnpI4.jpg', 'name': 'Северный Ветер', 'id': 408509616}, {'ava': 'https://pp.userapi.com/c836528/v836528196/2e0e8/U0OIhoR_DTc.jpg', 'name': 'Лепихов Виталий', 'id': 411246196}, {'ava': 'https://pp.userapi.com/c837327/v837327075/28570/rbxWMcEVvrg.jpg', 'name': 'Кумейко Сергей', 'id': 414788075}, {'ava': 'https://pp.userapi.com/c841137/v841137053/1e734/im5M7FnaCDU.jpg', 'name': 'Панова Даша', 'id': 415745252}, {'ava': 'https://pp.userapi.com/c836233/v836233246/60a0c/Dj9ZB_mql-I.jpg', 'name': 'Веденеева Кристина', 'id': 422373057}, {'ava': 'https://pp.userapi.com/c637617/v637617429/552de/4jD3CWMkNC0.jpg', 'name': 'Бабаян Роксана', 'id': 430352429}, {'ava': 'https://pp.userapi.com/c639319/v639319883/4f32b/82W-DpAooww.jpg', 'name': 'Шарова Лидия', 'id': 441402883}, {'ava': 'https://pp.userapi.com/c840323/v840323379/9f2d/aeDZ9sRU-4c.jpg', 'name': 'Шатохин Сергей', 'id': 443502995}, {'ava': 'https://pp.userapi.com/c639828/v639828150/3ce88/Q9OUrYkw9Lw.jpg', 'name': 'Никонова Елена', 'id': 445888462}]
        },
        {name:'Санкт-Петербург',n:265,
        users:[{'ava': 'https://pp.userapi.com/c637526/v637526080/2cbb/WHPVk32HKJg.jpg', 'name': 'Литвинова Надька', 'id': 2080}, {'ava': 'https://pp.userapi.com/c10841/u30384/e_abf4c16c.jpg', 'name': 'Власенко Андрей', 'id': 30384}, {'ava': 'https://pp.userapi.com/c637417/v637417812/4cc08/E256mIM-J6U.jpg', 'name': 'Белякова Ирина', 'id': 30812}, {'ava': 'https://pp.userapi.com/c841232/v841232883/11224/FpJXD28g4Kg.jpg', 'name': 'Белецкая Мария', 'id': 35856}, {'ava': 'https://pp.userapi.com/c836131/v836131288/4553e/gmjUeVAmGDM.jpg', 'name': 'Гюппенен Мария', 'id': 41288}, {'ava': 'https://pp.userapi.com/c638922/v638922999/7b337/jH_kgWM9m2E.jpg', 'name': 'Лукогорская Ольга', 'id': 51979}, {'ava': 'https://pp.userapi.com/c841624/v841624774/1586a/IAN3MNPDmrI.jpg', 'name': 'Макарова Алёна', 'id': 63715}, {'ava': 'https://pp.userapi.com/c636920/v636920377/437d7/mnuFcmFQC0A.jpg', 'name': 'Сивенко Ася', 'id': 96377}, {'ava': 'https://pp.userapi.com/c604621/v604621050/4af3/6E9-14NqQG0.jpg', 'name': 'Назарова Татьяна', 'id': 136050}, {'ava': 'https://pp.userapi.com/c633230/v633230835/1353c/pD8yYN_F7bc.jpg', 'name': 'Орезович Дмитрий', 'id': 168835}, {'ava': 'https://pp.userapi.com/c840233/v840233967/22757/tE88SRQjUt8.jpg', 'name': 'Шитикова Женя', 'id': 187294}, {'ava': 'https://pp.userapi.com/c315128/v315128085/8721/0XuqhZC_JUU.jpg', 'name': 'Taratuta Anton', 'id': 192085}, {'ava': 'https://pp.userapi.com/c10352/v10352863/6a5/BXKvVBeDAYg.jpg', 'name': 'Барановская Наталия', 'id': 197863}, {'ava': 'https://pp.userapi.com/c636322/v636322821/3b4c1/U3wtNPgOaFE.jpg', 'name': 'Богданов Евгений', 'id': 199821}, {'ava': 'https://pp.userapi.com/c627130/v627130788/783b/5kKbEwDoXPA.jpg', 'name': 'Евстратов Рома', 'id': 201788}, {'ava': 'https://pp.userapi.com/c629404/v629404688/a18a/UcGu1L3H1-k.jpg', 'name': 'Малин Сергей', 'id': 206688}, {'ava': 'https://pp.userapi.com/c637717/v637717291/4b5cc/CB4zEPiih4o.jpg', 'name': 'Перелыгин Максим', 'id': 211291}, {'ava': 'https://pp.userapi.com/c638219/v638219785/3bdea/Qorr2bbqJyo.jpg', 'name': 'Николаева Хельга', 'id': 276785}, {'ava': 'https://pp.userapi.com/c619929/v619929850/19281/N_8UxgBdmiY.jpg', 'name': 'Требунских Алексей', 'id': 317850}, {'ava': 'https://pp.userapi.com/c187/v187774/189d/jhZhpPrryAU.jpg', 'name': 'Печалина Анна', 'id': 342774}, {'ava': 'https://pp.userapi.com/c841628/v841628485/228b9/C0s1Wm0ixE4.jpg', 'name': 'Эльвова Лидия', 'id': 348268}, {'ava': 'https://pp.userapi.com/c841430/v841430549/80d0/tF3B78wj23Y.jpg', 'name': 'Паньшина Екатерина', 'id': 377575}, {'ava': 'https://pp.userapi.com/c619221/v619221470/1bf0a/Ei3lHrpinYo.jpg', 'name': 'Домащенко Андрей', 'id': 384470}, {'ava': 'https://pp.userapi.com/c836724/v836724972/5e1da/bMkGYelHSBo.jpg', 'name': 'Уханова Карина', 'id': 388073}, {'ava': 'https://pp.userapi.com/c317217/u388264/e_17501473.jpg', 'name': 'Андрусов Кирилл', 'id': 388264}, {'ava': 'https://pp.userapi.com/c307705/v307705760/96ef/9LNRP5XklCI.jpg', 'name': 'Десятерик Илья', 'id': 402760}, {'ava': 'https://pp.userapi.com/c841424/v841424570/110e3/qS2VnHWeLDc.jpg', 'name': 'Селиверстова Анна', 'id': 412159}, {'ava': 'https://pp.userapi.com/c322121/v322121336/5c94/WwvHYUagoFI.jpg', 'name': 'Партанен Александр', 'id': 417336}, {'ava': 'https://pp.userapi.com/c836733/v836733624/64df0/y6DidcL0H8A.jpg', 'name': 'Гуменюк Алина', 'id': 445420}, {'ava': 'https://pp.userapi.com/c638521/v638521163/6fb30/Sy9fj5QIM04.jpg', 'name': 'Костюк Артем', 'id': 481596}, {'ava': 'https://pp.userapi.com/c637518/v637518493/efed/mtqmrPcxZeg.jpg', 'name': 'Глузман Борис', 'id': 484493}, {'ava': 'https://pp.userapi.com/c837238/v837238084/4cf28/6q_vvd3IG94.jpg', 'name': 'Kostina-Vinogradova Maria', 'id': 488495}, {'ava': 'https://pp.userapi.com/c636725/v636725391/23532/5XUHyLjZRrQ.jpg', 'name': 'Рыбаков Алексей', 'id': 617391}, {'ava': 'https://pp.userapi.com/c629427/v629427412/4e764/qvXEH8Uabl0.jpg', 'name': 'Федотов Борис', 'id': 636412}, {'ava': 'https://pp.userapi.com/c604418/v604418588/43db3/HiQ3k-fZRJc.jpg', 'name': 'Прищепенко Алена', 'id': 682588}, {'ava': 'https://pp.userapi.com/c421320/v421320660/5b04/QUtMr0TFZSo.jpg', 'name': 'Ковалева Ирина', 'id': 720660}, {'ava': 'https://pp.userapi.com/c638621/v638621151/1518f/NEcixnq0-Uc.jpg', 'name': 'Пырсов Вячеслав', 'id': 728151}, {'ava': 'https://pp.userapi.com/c623430/v623430167/a98c/_j6CAVNc2k8.jpg', 'name': 'Канг Лю', 'id': 731167}, {'ava': 'https://pp.userapi.com/c837533/v837533771/2aa73/D4kUpYzfN3w.jpg', 'name': 'Grishatkina Natalya', 'id': 751771}, {'ava': 'https://pp.userapi.com/c837633/v837633274/59b2c/1dQEkkJQMWs.jpg', 'name': 'Григорьева Анна', 'id': 767336}, {'ava': 'https://pp.userapi.com/c837624/v837624231/5e916/Zy9kpl09Xic.jpg', 'name': 'Смирнов Кирилл', 'id': 796117}, {'ava': 'https://pp.userapi.com/c633926/v633926079/2d76c/Ojw_1kSIEek.jpg', 'name': 'Зубрилина Анька', 'id': 813079}, {'ava': 'https://pp.userapi.com/c633929/v633929505/13c74/KIPEw54_3P4.jpg', 'name': 'Капранов Константин', 'id': 833505}, {'ava': 'https://pp.userapi.com/c638123/v638123439/43a6a/tOjJ-NxLtJo.jpg', 'name': 'Махонен Тимо', 'id': 915439}, {'ava': 'https://pp.userapi.com/c629426/v629426600/e2f2/NfwAPUBxl8s.jpg', 'name': 'Коссе Дмитрий', 'id': 1028600}, {'ava': 'https://pp.userapi.com/c841127/v841127305/16205/7ivRy45lphw.jpg', 'name': 'Лиманская Анна', 'id': 1078425}, {'ava': 'https://pp.userapi.com/c626519/v626519911/41d7/34-LG5e8t7U.jpg', 'name': 'Марков Олег', 'id': 1082911}, {'ava': 'https://pp.userapi.com/c638531/v638531322/34656/HAHLnHjTIgM.jpg', 'name': 'Матвеева Александра', 'id': 1136322}, {'ava': 'https://pp.userapi.com/c639525/v639525762/44bf4/JQKiqVtrZQM.jpg', 'name': 'Мамонтова Илона', 'id': 1143233}, {'ava': 'https://pp.userapi.com/c638919/v638919673/61826/4WsMzAOmkoE.jpg', 'name': 'Карасева Анечка', 'id': 1180018}, {'ava': 'https://pp.userapi.com/c639722/v639722445/4485b/u3jY7raPqBU.jpg', 'name': 'Филатов Даниил', 'id': 1222521}, {'ava': 'https://pp.userapi.com/c638224/v638224580/5a425/j5Zj0n2CyLA.jpg', 'name': 'Лисичкина Ирина', 'id': 1247427}, {'ava': 'https://pp.userapi.com/c836531/v836531801/2efcd/d9XtdE6K7O4.jpg', 'name': 'Шерматов Рустам', 'id': 1280801}, {'ava': 'https://pp.userapi.com/c638022/v638022117/567fb/2Rk2fjDHxMo.jpg', 'name': 'Дмитриева Мария', 'id': 1305078}, {'ava': 'https://pp.userapi.com/c412618/v412618000/891c/gJ0qAVGgjzo.jpg', 'name': 'Можаев Дмитрий', 'id': 1362000}, {'ava': 'https://pp.userapi.com/c440/u1431183/e_e1ab7610.jpg', 'name': 'Хижняк Анна', 'id': 1431183}, {'ava': 'https://pp.userapi.com/c837727/v837727615/4ac87/Rf6IW788ick.jpg', 'name': 'Иванов Андрей', 'id': 1441697}, {'ava': 'https://pp.userapi.com/c4287/u1540625/e_6324d053.jpg', 'name': 'Иванов Юрий', 'id': 1540625}, {'ava': 'https://pp.userapi.com/c638627/v638627287/61c0a/xF-qhc0NTlw.jpg', 'name': 'Димов Сергей', 'id': 1571620}, {'ava': 'https://pp.userapi.com/c837737/v837737031/52e76/Z9_Tn9X92ec.jpg', 'name': 'Белозерцева Анастасия', 'id': 1725946}, {'ava': 'https://pp.userapi.com/c628828/v628828662/12f54/pHdNq8Zp9C0.jpg', 'name': 'Коваленко Наталия', 'id': 1842662}, {'ava': 'https://pp.userapi.com/c1246/u1846244/e_dce37cd6.jpg', 'name': 'Кузьмин Алексей', 'id': 1846244}, {'ava': 'https://pp.userapi.com/c841425/v841425850/1726a/yM_8E7YD1ow.jpg', 'name': 'Литвиненко Ева', 'id': 1902001}, {'ava': 'https://pp.userapi.com/c638928/v638928939/4da83/25436YJZEG8.jpg', 'name': 'Баженов Евгений', 'id': 1976939}, {'ava': 'https://pp.userapi.com/c639321/v639321657/3eedb/1lWd3TMHuxg.jpg', 'name': 'Матюш Ксения', 'id': 2206186}, {'ava': 'https://pp.userapi.com/c628018/v628018077/ee85/y3sSF6t94V8.jpg', 'name': 'Сашина Наталья', 'id': 2238077}, {'ava': 'https://pp.userapi.com/c639522/v639522000/3d4c1/3SEIf-UZ6Lc.jpg', 'name': 'Сидункова Татьяна', 'id': 2557278}, {'ava': 'https://pp.userapi.com/c637521/v637521303/5d2fc/qnZBK9hCtWM.jpg', 'name': 'Калашников Дима', 'id': 2677920}, {'ava': 'https://pp.userapi.com/c840328/v840328018/562f/5H8wjiQ2Vec.jpg', 'name': 'Богданова Валерия', 'id': 2888356}, {'ava': 'https://pp.userapi.com/c638119/v638119114/51d3d/Ui84ywuc_rg.jpg', 'name': 'Новиков Игорь', 'id': 3233114}, {'ava': 'https://pp.userapi.com/c629217/v629217261/121ce/9zankKaySbg.jpg', 'name': 'Пискарёва Юлия', 'id': 3371261}, {'ava': 'https://pp.userapi.com/c637723/v637723435/48e67/WUjvRbL5Q3o.jpg', 'name': 'Броститов Илья', 'id': 3474435}, {'ava': 'https://pp.userapi.com/c5602/u3515005/e_7764847c.jpg', 'name': 'Каменецкий Андрей', 'id': 3515005}, {'ava': 'https://sun9-11.userapi.com/c840724/v840724674/543c/rqIJSSVlaCw.jpg', 'name': 'Киевич Елена', 'id': 3520799}, {'ava': 'https://pp.userapi.com/c639423/v639423772/30a18/8nrJMwki34k.jpg', 'name': 'Журавель Маша', 'id': 3610931}, {'ava': 'https://pp.userapi.com/c639231/v639231651/29995/-2d4KGRQft0.jpg', 'name': 'Леонтьева Анна', 'id': 3656651}, {'ava': 'https://pp.userapi.com/c636825/v636825722/63a37/MRtRRJWDRAY.jpg', 'name': 'Суровцев Даниил', 'id': 3780722}, {'ava': 'https://pp.userapi.com/c836437/v836437984/63161/ktMSvEv3ImQ.jpg', 'name': 'Брязгина Ольга', 'id': 3811522}, {'ava': 'https://pp.userapi.com/c628629/v628629427/42c6d/u4KS3-yQ3xg.jpg', 'name': 'Булахова Юля', 'id': 3815427}, {'ava': 'https://pp.userapi.com/c637526/v637526194/4c3cd/LXeICTsHHK0.jpg', 'name': 'Vinogradova Наталия', 'id': 3864194}, {'ava': 'https://pp.userapi.com/c837735/v837735502/6df7a/XTUCcwfPcrE.jpg', 'name': 'Барабанова Елена', 'id': 4022897}, {'ava': 'https://pp.userapi.com/c636431/v636431788/1ab20/T3reBbMGqHI.jpg', 'name': 'Перман Андрей', 'id': 4076788}, {'ava': 'https://pp.userapi.com/c638720/v638720575/507f9/1SJJtkLqJow.jpg', 'name': 'Абросимов Дмитрий', 'id': 4159818}, {'ava': 'https://pp.userapi.com/c638027/v638027723/4f729/RcZvAAugzJU.jpg', 'name': 'Алексеев Кирилл', 'id': 4361571}, {'ava': 'https://pp.userapi.com/c638428/v638428108/49eb7/AZiduHApqeU.jpg', 'name': 'Соколова Наташа', 'id': 4362108}, {'ava': 'https://pp.userapi.com/c620017/v620017597/482d/F-xoJTv7sw8.jpg', 'name': 'Пилипчук Сергей', 'id': 4374597}, {'ava': 'https://pp.userapi.com/c631623/v631623158/38424/pWAYdwkePuk.jpg', 'name': 'Феферман Евгений', 'id': 4417158}, {'ava': 'https://pp.userapi.com/c616029/v616029597/26967/FtLslWdArTw.jpg', 'name': 'фон Штакельберг Тихон', 'id': 4656597}, {'ava': 'https://pp.userapi.com/c639325/v639325924/464cc/VQK15yV_pBQ.jpg', 'name': 'Кандричин Антон', 'id': 4796975}, {'ava': 'https://pp.userapi.com/c622816/v622816041/4e539/i5J_M3y9d88.jpg', 'name': 'Сало Дмитрий', 'id': 4864041}, {'ava': 'https://pp.userapi.com/c841335/v841335717/dfa9/Spps3GA8fQY.jpg', 'name': 'Егорова Анастасия', 'id': 5117935}, {'ava': 'https://pp.userapi.com/c637819/v637819565/608da/9hviUsFstOI.jpg', 'name': 'Дятлова Алёна', 'id': 5441653}, {'ava': 'https://pp.userapi.com/c840028/v840028607/24b31/shWKYiRlo4U.jpg', 'name': 'Григорьева Камилла', 'id': 6490548}, {'ava': 'https://pp.userapi.com/c630018/v630018014/430c9/xkCWFxDNS8g.jpg', 'name': 'Фокеев Олег', 'id': 6537014}, {'ava': 'https://pp.userapi.com/c639130/v639130045/3738a/EMFu0_SANnY.jpg', 'name': 'Фенглер Юлия', 'id': 6618366}, {'ava': 'https://pp.userapi.com/c841232/v841232187/ecb4/n7yvd9yfi8k.jpg', 'name': 'Белавина Анна', 'id': 6745290}, {'ava': 'https://pp.userapi.com/c836639/v836639265/5b1e5/98uJfjH7YAg.jpg', 'name': 'Кириков Саша', 'id': 6832327}, {'ava': 'https://pp.userapi.com/c841237/v841237189/184bf/yrwMp1oWzZs.jpg', 'name': 'Мальцева Татьяна', 'id': 6957548}, {'ava': 'https://pp.userapi.com/c841425/v841425414/ab96/0XTeckPvXUw.jpg', 'name': 'Максимов Константин', 'id': 7138102}, {'ava': 'https://sun9-11.userapi.com/c840631/v840631314/8228/f1rkgBFz20s.jpg', 'name': 'Zakharchenko Anastasia', 'id': 7283787}, {'ava': 'https://pp.userapi.com/c639522/v639522782/4b192/1ORCDEevkOw.jpg', 'name': 'Timofeeva Natali', 'id': 7438109}, {'ava': 'https://pp.userapi.com/c638217/v638217387/5a53a/4Y1dy2XlBVA.jpg', 'name': 'Писаренко Игорь', 'id': 7682684}, {'ava': 'https://pp.userapi.com/c636918/v636918116/65e01/bg6ipUhbFCQ.jpg', 'name': 'Носков Юрий', 'id': 7709116}, {'ava': 'https://pp.userapi.com/c627623/v627623916/2a03c/n5roaVJGJeo.jpg', 'name': 'Троицкий Олег', 'id': 7898916}, {'ava': 'https://pp.userapi.com/c625828/v625828366/43b32/NM5rh0zwr0s.jpg', 'name': 'Кондакова Людмила', 'id': 7996366}, {'ava': 'https://pp.userapi.com/c638219/v638219389/54410/yl95tRf7N8A.jpg', 'name': 'Стёпина Татьяна', 'id': 8180592}, {'ava': 'https://pp.userapi.com/c627923/v627923260/239c5/fgpslCtvEhE.jpg', 'name': 'Угольников Алексей', 'id': 8494260}, {'ava': 'https://sun9-11.userapi.com/c840638/v840638457/3c02/Kbq4FdEQm60.jpg', 'name': 'Шилков Алексей', 'id': 8527018}, {'ava': 'https://pp.userapi.com/c837322/v837322867/1735/NF5H40KxEKs.jpg', 'name': 'Ямгуров Рамиль', 'id': 8570867}, {'ava': 'https://pp.userapi.com/c621702/v621702667/12cbc/T2vUOmjKogY.jpg', 'name': 'Дмитриева Валентинка', 'id': 8704638}, {'ava': 'https://pp.userapi.com/c639427/v639427240/3ec48/TxLHdQeH21M.jpg', 'name': 'Рогачёва Леночка', 'id': 9595698}, {'ava': 'https://sun9-11.userapi.com/c836425/v836425310/ca85/rVL4oXc8PJc.jpg', 'name': 'Крезуб Олег', 'id': 9707310}, {'ava': 'https://pp.userapi.com/c637921/v637921374/3ddfc/YSTQdCL8pHs.jpg', 'name': 'Рачинин Александр', 'id': 9721374}, {'ava': 'https://pp.userapi.com/c639427/v639427546/3c6e/LlLdV5J3EtQ.jpg', 'name': 'Зыкин Артём', 'id': 10167546}, {'ava': 'https://pp.userapi.com/c626128/v626128205/2acc1/q8GC8IQvERM.jpg', 'name': 'Пискова Тоня', 'id': 10327205}, {'ava': 'https://pp.userapi.com/c837330/v837330681/4da06/38CWSxyqoJ4.jpg', 'name': 'Калмыкова Анна', 'id': 10597054}, {'ava': 'https://pp.userapi.com/c836222/v836222701/3eb93/dfvxE2fAcG0.jpg', 'name': 'Крапивина Татьяна', 'id': 11292701}, {'ava': 'https://pp.userapi.com/c837133/v837133317/1c35b/p6g3DGvzBHw.jpg', 'name': 'Гуреев Максим', 'id': 11397317}, {'ava': 'https://pp.userapi.com/c837536/v837536599/45758/grL1OmlzbTw.jpg', 'name': 'Король Руслан', 'id': 11437599}, {'ava': 'https://pp.userapi.com/c841220/v841220284/113e7/AqudZyjvHx0.jpg', 'name': 'Борзенкова Елизавета', 'id': 11743166}, {'ava': 'https://pp.userapi.com/c841028/v841028864/2f15/rfg-QUt3Nbc.jpg', 'name': 'Никитина Елена', 'id': 11776864}, {'ava': 'https://pp.userapi.com/c841523/v841523312/1a6d8/Ncl2Zxw71CQ.jpg', 'name': 'Kulieva Yulia', 'id': 11813188}, {'ava': 'https://pp.userapi.com/c604519/v604519017/235c9/qalFVVLvnzs.jpg', 'name': 'Дмитриева Татьяна', 'id': 11883017}, {'ava': 'https://pp.userapi.com/c841524/v841524234/1cfbc/EP_zUZiUSy4.jpg', 'name': 'Гончаров Артем', 'id': 12656913}, {'ava': 'https://pp.userapi.com/c621703/v621703632/16803/y8BqOBdsvto.jpg', 'name': 'Никитин Игорь', 'id': 12787749}, {'ava': 'https://pp.userapi.com/c638618/v638618436/41422/lGbkLAXSf5g.jpg', 'name': 'Razmanova Anastasiia', 'id': 14597436}, {'ava': 'https://pp.userapi.com/c639620/v639620919/351cb/_clpdB_oFeg.jpg', 'name': 'Рыбакин Михаил', 'id': 15391063}, {'ava': 'https://pp.userapi.com/c624321/v624321087/375e8/08orFE7ExPs.jpg', 'name': 'Хаматдинов Василь', 'id': 16718087}, {'ava': 'https://pp.userapi.com/c620019/v620019663/1ca0d/4o4v9bXZWdE.jpg', 'name': 'Медведюк Владимир', 'id': 17776663}, {'ava': 'https://sun9-11.userapi.com/c840528/v840528463/4640/p53sBCSr00I.jpg', 'name': 'Иванова Мария', 'id': 18334280}, {'ava': 'https://pp.userapi.com/c836433/v836433202/62d2f/zdVo4AyQbkM.jpg', 'name': 'Задворных Сергей', 'id': 18929202}, {'ava': 'https://pp.userapi.com/c841138/v841138393/feb9/FcoWxf_SRHE.jpg', 'name': 'Морган Дарья', 'id': 19360709}, {'ava': 'https://pp.userapi.com/c837632/v837632615/496e0/I-B_9MyuIY0.jpg', 'name': 'Швецова Светлана', 'id': 22556615}, {'ava': 'https://pp.userapi.com/c841122/v841122910/1c2b6/oUH-kfg73Fk.jpg', 'name': 'Сидоров Глеб', 'id': 22557263}, {'ava': 'https://pp.userapi.com/c841033/v841033349/20201/koOYeTOas0A.jpg', 'name': 'Пашнин Валерий', 'id': 23619213}, {'ava': 'https://pp.userapi.com/c637629/v637629434/5115f/18I-Usn_OXs.jpg', 'name': 'Дементьев Иван', 'id': 24589434}, {'ava': 'https://pp.userapi.com/c604731/v604731876/24782/7YDFKsOv2Tw.jpg', 'name': 'Арсеньев Денис', 'id': 24924876}, {'ava': 'https://pp.userapi.com/c9987/u25042079/e_c4e2199b.jpg', 'name': 'Козлова Марина', 'id': 25042079}, {'ava': 'https://pp.userapi.com/c639321/v639321804/3f505/wbQaJiByHDs.jpg', 'name': 'Катаной Кристина', 'id': 26082615}, {'ava': 'https://pp.userapi.com/c412316/v412316577/8879/TiymZT_EUaI.jpg', 'name': 'Амировна Адиля', 'id': 26504576}, {'ava': 'https://pp.userapi.com/c638525/v638525890/3f44b/YNKopvwUZnE.jpg', 'name': 'Филимонов Андрей', 'id': 27737890}, {'ava': 'https://pp.userapi.com/c630227/v630227618/53f2e/ipMP0T_R_tU.jpg', 'name': 'Бычков Коля', 'id': 29564618}, {'ava': 'https://pp.userapi.com/c837723/v837723704/6395e/DKG_qjVJET4.jpg', 'name': 'Яковлева Анна', 'id': 30847397}, {'ava': 'https://pp.userapi.com/c841435/v841435354/177a1/Ld_h5UEf860.jpg', 'name': 'Аникин Виталий', 'id': 32452053}, {'ava': 'https://pp.userapi.com/c636918/v636918151/51fdc/i7kKjmqdByk.jpg', 'name': 'Клим Татьяна', 'id': 35219151}, {'ava': 'https://pp.userapi.com/c837429/v837429324/4ab4c/VHvMSkZI2Dw.jpg', 'name': 'Иванова Татьяна', 'id': 35987152}, {'ava': 'https://pp.userapi.com/c628428/v628428032/1511f/qovNCaxmsc8.jpg', 'name': 'Рассказчикова Анна', 'id': 36069032}, {'ava': 'https://pp.userapi.com/c619430/v619430615/16f87/mDi8U8Ydmjg.jpg', 'name': 'Хмелевский Алексей', 'id': 37340615}, {'ava': 'https://pp.userapi.com/c841037/v841037846/ef4b/SpGg1uJvhPE.jpg', 'name': 'Гапеев Владимир', 'id': 38170390}, {'ava': 'https://pp.userapi.com/c837433/v837433744/53aff/F_CA-JF8yDo.jpg', 'name': 'Бубенцова Дарья', 'id': 40479155}, {'ava': 'https://pp.userapi.com/c636721/v636721925/3714e/A0lZSTLBu8I.jpg', 'name': 'Алешин Алексей', 'id': 44152925}, {'ava': 'https://pp.userapi.com/c608824/v608824118/9212/H8oD6BtHfNQ.jpg', 'name': 'Бордукова Светлана', 'id': 44817118}, {'ava': 'https://pp.userapi.com/c638517/v638517574/4de2a/ajAh9za2pEU.jpg', 'name': 'Банникова Лера', 'id': 44919869}, {'ava': 'https://pp.userapi.com/c638825/v638825818/55c6f/XvqotoISD_0.jpg', 'name': 'Румянцев Сергей', 'id': 46198810}, {'ava': 'https://pp.userapi.com/c624731/v624731229/14a90/atE02zC8ZTQ.jpg', 'name': 'Исакова Светлана', 'id': 51094229}, {'ava': 'https://pp.userapi.com/c841634/v841634158/e546/piIxjZKnQn8.jpg', 'name': 'Балянов Дима', 'id': 54842994}, {'ava': 'https://pp.userapi.com/c841525/v841525924/15aa9/4hViKQ8KICM.jpg', 'name': 'Безносова Екатерина', 'id': 55492995}, {'ava': 'https://pp.userapi.com/c639223/v639223983/40766/X8d6k8D-qyE.jpg', 'name': 'Диане Диана', 'id': 57581746}, {'ava': 'https://pp.userapi.com/c639625/v639625993/37ce7/zxeTzhUnRKk.jpg', 'name': 'Knyazev Artem', 'id': 57735710}, {'ava': 'https://pp.userapi.com/c840136/v840136815/22f34/3Bn5Qupg_UQ.jpg', 'name': 'Erofeev Mikhail', 'id': 59195676}, {'ava': 'https://pp.userapi.com/c836325/v836325130/5bcdb/gQEOef9m4Aw.jpg', 'name': 'Нугис Александр', 'id': 59317141}, {'ava': 'https://pp.userapi.com/c322622/v322622085/1d57/0Y-IJQXQIdk.jpg', 'name': 'Корольков Алексей', 'id': 59853085}, {'ava': 'https://pp.userapi.com/c636629/v636629123/67d0d/-5EaafY6rl4.jpg', 'name': 'Сибгатулина Анастасия', 'id': 66334123}, {'ava': 'https://pp.userapi.com/c841636/v841636223/1cae7/_ZTOLy3Erkk.jpg', 'name': 'Солнце Оля', 'id': 69011029}, {'ava': 'https://pp.userapi.com/c638219/v638219459/21493/q2gXfUjBFig.jpg', 'name': 'Заколупин Родион', 'id': 69830459}, {'ava': 'https://pp.userapi.com/c840222/v840222634/b7e4/y5cywbSIKkk.jpg', 'name': 'Антонишина Марья', 'id': 72232634}, {'ava': 'https://pp.userapi.com/c625324/v625324725/2da9c/O9T0O6-tDkg.jpg', 'name': 'Матвеев Николай', 'id': 72821725}, {'ava': 'https://pp.userapi.com/c639420/v639420680/36c1b/zwk3vHjoFTY.jpg', 'name': 'Дриси Тимур', 'id': 73037948}, {'ava': 'https://pp.userapi.com/c639121/v639121584/6ce2/7_Qvj6f8nus.jpg', 'name': 'Молчанов Олег', 'id': 78831584}, {'ava': 'https://pp.userapi.com/c840121/v840121524/22eee/IebEKAYMef0.jpg', 'name': 'Дмитриева Анна', 'id': 82739271}, {'ava': 'https://pp.userapi.com/c638328/v638328356/644f6/oe8Lx-V0QBw.jpg', 'name': 'Смирнов Антон', 'id': 85911161}, {'ava': 'https://pp.userapi.com/c638131/v638131593/5cd04/QbS4hoSPY_w.jpg', 'name': 'Захаров Сергей', 'id': 88183505}, {'ava': 'https://pp.userapi.com/c836428/v836428361/53002/kBnnab9oqhE.jpg', 'name': 'Плаксин Руслан', 'id': 90240220}, {'ava': 'https://pp.userapi.com/c629509/v629509708/3ea41/9X-ci3QBkzM.jpg', 'name': 'Терновик Иван', 'id': 91852708}, {'ava': 'https://sun9-11.userapi.com/c836120/v836120439/58e42/3ZALD9EtW5g.jpg', 'name': 'Харясова Ирина', 'id': 93755920}, {'ava': 'https://pp.userapi.com/c636322/v636322299/564e3/sAX_xJWcj3k.jpg', 'name': 'Самарина Елена', 'id': 95317299}, {'ava': 'https://pp.userapi.com/c630916/v630916353/2a32b/5rWoUeHXaac.jpg', 'name': 'Грицюк Александр', 'id': 95387353}, {'ava': 'https://pp.userapi.com/c836135/v836135365/51100/dsCMpGNhb6w.jpg', 'name': 'Кохович Лена', 'id': 96522456}, {'ava': 'https://pp.userapi.com/c840133/v840133540/2529e/fOmCbRnu5_4.jpg', 'name': 'Кузнецова Маша', 'id': 100789552}, {'ava': 'https://pp.userapi.com/c836737/v836737060/58ba0/DrgpPUQFh-s.jpg', 'name': 'Петров Евгений', 'id': 108792382}, {'ava': 'https://pp.userapi.com/c836322/v836322804/1f2ae/mg7kRRgmqgs.jpg', 'name': 'Медведева Ярослава', 'id': 109460804}, {'ava': 'https://pp.userapi.com/c836437/v836437278/599fb/eoHYbxQofbU.jpg', 'name': 'Алёхин Александр', 'id': 112579356}, {'ava': 'https://pp.userapi.com/c841126/v841126772/d4a9/o5mOKfflCRw.jpg', 'name': 'Nevskiy Evgeniy', 'id': 118394689}, {'ava': 'https://pp.userapi.com/c637829/v637829760/65feb/NJvL4fpUhoM.jpg', 'name': 'Семёнова Виктория', 'id': 120048760}, {'ava': 'https://pp.userapi.com/c624428/v624428885/4a12c/ccc96zsZvTQ.jpg', 'name': 'Ролич Лариса', 'id': 122157885}, {'ava': 'https://pp.userapi.com/c9251/u123735774/e_6c63741d.jpg', 'name': 'Поляков Дмитрий', 'id': 123735774}, {'ava': 'https://pp.userapi.com/c638920/v638920113/512bb/mVvXtoY6-YY.jpg', 'name': 'Белоусов Алексей', 'id': 131861492}, {'ava': 'https://pp.userapi.com/c638523/v638523986/5209d/w32nrqOwQP0.jpg', 'name': 'Алтышова Катя', 'id': 134366122}, {'ava': 'https://sun9-11.userapi.com/c837626/v837626602/4f920/1WuoeVuKiMo.jpg', 'name': 'Козлова Марина', 'id': 135496593}, {'ava': 'https://pp.userapi.com/c837336/v837336588/63e7c/FezX0wmgSoc.jpg', 'name': 'Болячкин Денис', 'id': 139927994}, {'ava': 'https://pp.userapi.com/c638425/v638425223/3f07e/A2mFRhNBfFk.jpg', 'name': 'Hartjenstein Sébastien', 'id': 140357223}, {'ava': 'https://pp.userapi.com/c638627/v638627468/4a991/rL3k4q6dPAQ.jpg', 'name': 'Плотников Сергей', 'id': 140406531}, {'ava': 'https://pp.userapi.com/c637418/v637418754/736ce/f9AGHMSuDo0.jpg', 'name': 'Зиновьев Степан', 'id': 143125062}, {'ava': 'https://pp.userapi.com/c639127/v639127506/184e0/yIlbEy6WR14.jpg', 'name': 'Митрушина Наталья', 'id': 144211506}, {'ava': 'https://pp.userapi.com/c840335/v840335053/1916/m2zhMuuQypc.jpg', 'name': 'Алексеев Эдуард', 'id': 145711518}, {'ava': 'https://pp.userapi.com/c639628/v639628769/1ec97/3UGhRZSVmq8.jpg', 'name': 'Байкова Наталья', 'id': 145838769}, {'ava': 'https://pp.userapi.com/c837726/v837726350/67c60/353PbyMDJHA.jpg', 'name': 'Азимов Данияр', 'id': 146419234}, {'ava': 'https://pp.userapi.com/c837627/v837627560/6b74/TgRm7PNnZpY.jpg', 'name': 'Rodicheva Anastasia', 'id': 147491560}, {'ava': 'https://pp.userapi.com/c636424/v636424229/21b14/6ZCE9ObCBm0.jpg', 'name': 'Надоричев Олег', 'id': 147544229}, {'ava': 'https://pp.userapi.com/c841532/v841532269/18e70/N18oxBPG0dw.jpg', 'name': 'Питерская Катя', 'id': 152163466}, {'ava': 'https://pp.userapi.com/c837725/v837725585/59f0f/qqM_GCJaazI.jpg', 'name': 'Остроумов Денис', 'id': 154224858}, {'ava': 'https://pp.userapi.com/c621931/v621931968/30e46/LijGaVeMgvU.jpg', 'name': 'Волков Алексей', 'id': 154854968}, {'ava': 'https://pp.userapi.com/c836531/v836531896/5eebe/7u-VFgkqUno.jpg', 'name': 'Пономарева Марина', 'id': 155158615}, {'ava': 'https://pp.userapi.com/c638817/v638817642/6b93d/DEgdPd_GArw.jpg', 'name': 'Холматов Андрей', 'id': 159211856}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Суворов Андрей', 'id': 165146437}, {'ava': 'https://pp.userapi.com/c837728/v837728866/43cbc/ex8qIqW6vmg.jpg', 'name': 'Усова Вита', 'id': 166980866}, {'ava': 'https://pp.userapi.com/c620919/v620919688/19aff/ibisCmGeSB4.jpg', 'name': 'Деденева Наталия', 'id': 169351688}, {'ava': 'https://pp.userapi.com/c840234/v840234137/7d17/Vl7SLSiRrNc.jpg', 'name': 'Пластков Александр', 'id': 172820137}, {'ava': 'https://pp.userapi.com/c636319/v636319194/2da58/4YExTlfhfRo.jpg', 'name': 'Чеснеков Никита', 'id': 174991194}, {'ava': 'https://pp.userapi.com/c836131/v836131107/671ab/HntCCf6___c.jpg', 'name': 'Гаврилюк Сергей', 'id': 178012107}, {'ava': 'https://pp.userapi.com/c638428/v638428280/54251/aUt9kcPXPAo.jpg', 'name': 'Ma St', 'id': 180527600}, {'ava': 'https://pp.userapi.com/c604620/v604620623/100ea/wJP7UxabaTA.jpg', 'name': 'Зюзиков Константин', 'id': 181425623}, {'ava': 'https://pp.userapi.com/c626519/v626519318/229b5/f8U7Al2Ogew.jpg', 'name': 'Dybinin Dan', 'id': 181643318}, {'ava': 'https://pp.userapi.com/c639127/v639127967/14bd7/B-BOqaXvv_g.jpg', 'name': 'Ляпунова Марта', 'id': 181725967}, {'ava': 'https://pp.userapi.com/c631116/v631116394/33269/qlIjfe9q6so.jpg', 'name': 'Галина Попова', 'id': 187698394}, {'ava': 'https://pp.userapi.com/c638325/v638325027/43cbf/a86vnGlIj5w.jpg', 'name': 'Зубкова Ирина', 'id': 187933027}, {'ava': 'https://pp.userapi.com/c305602/v305602136/5382/GmYFQIc9qXU.jpg', 'name': 'Биячуева Наталья', 'id': 192105136}, {'ava': 'https://pp.userapi.com/c837330/v837330253/48fcf/3wd3tCqU90Q.jpg', 'name': 'Lapinsky Alexander', 'id': 192715613}, {'ava': 'https://pp.userapi.com/c638631/v638631692/5b9bc/DLBIHVDaDDI.jpg', 'name': 'Рудская Кристина', 'id': 194580420}, {'ava': 'https://pp.userapi.com/c841524/v841524562/9dfe/V2Cd78vyxbk.jpg', 'name': 'Морозов Сергей', 'id': 196642984}, {'ava': 'https://sun9-11.userapi.com/c840226/v840226108/15675/oVdaUdvanFo.jpg', 'name': 'Гольцов Евгений', 'id': 197379666}, {'ava': 'https://pp.userapi.com/c604326/v604326151/10aea/wpP-6cjzMM4.jpg', 'name': 'Ivanov Denis', 'id': 202350151}, {'ava': 'https://pp.userapi.com/c638426/v638426785/2ecec/Sb0mcMBmDIg.jpg', 'name': 'Матвеева Анна', 'id': 208284785}, {'ava': 'https://pp.userapi.com/c637831/v637831502/4f240/TKz0wp5d7q0.jpg', 'name': 'Санникова Дарья', 'id': 209588502}, {'ava': 'https://pp.userapi.com/c836135/v836135121/5dc37/eGA9l4KPufM.jpg', 'name': 'Озерский Александр', 'id': 210253056}, {'ava': 'https://pp.userapi.com/c837725/v837725524/80b14/B3Zi7HAfZTA.jpg', 'name': 'Metal-Heart Elena', 'id': 214211875}, {'ava': 'https://pp.userapi.com/c627625/v627625783/2266d/DLOL0npbnJQ.jpg', 'name': 'Рыжова Хельга', 'id': 224132783}, {'ava': 'https://pp.userapi.com/c638626/v638626422/5de8f/dn1E73KwNaI.jpg', 'name': 'Михаил Некий', 'id': 236788044}, {'ava': 'https://pp.userapi.com/c836330/v836330824/5fd2d/0cKk3dl0NwI.jpg', 'name': 'Орлова Ирина', 'id': 241006168}, {'ava': 'https://pp.userapi.com/c639219/v639219522/42625/ZDNzvo8qRj8.jpg', 'name': 'Олеговна Наталья', 'id': 241859703}, {'ava': 'https://pp.userapi.com/c638728/v638728270/55dc4/mTYQaupu1Tw.jpg', 'name': 'Прищенко Алина', 'id': 244610689}, {'ava': 'https://pp.userapi.com/c837228/v837228448/b6e80/g2YwFAix0bo.jpg', 'name': 'Коваль Ольга', 'id': 249231084}, {'ava': 'https://pp.userapi.com/c616428/v616428746/e632/8J-zOmCrRCU.jpg', 'name': 'Хармс Даниил', 'id': 255544746}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Смыковская Анна', 'id': 258206493}, {'ava': 'https://pp.userapi.com/c625425/v625425074/15106/EDJ8T_nmnL4.jpg', 'name': 'Степаненко Сергей', 'id': 260583074}, {'ava': 'https://pp.userapi.com/c636117/v636117631/1632a/16eeU9pasEE.jpg', 'name': 'Максимова Ксения', 'id': 263739631}, {'ava': 'https://pp.userapi.com/c639829/v639829249/1d6a1/cyAY9UEcZq4.jpg', 'name': 'Зарубин Александр', 'id': 275233249}, {'ava': 'https://pp.userapi.com/c841432/v841432582/1e236/PSp06_loYMI.jpg', 'name': 'Михайлов Василий', 'id': 275503015}, {'ava': 'https://pp.userapi.com/c628625/v628625258/2b549/LyEDu9LIANM.jpg', 'name': 'Калина Татьяна', 'id': 277323258}, {'ava': 'https://pp.userapi.com/c639131/v639131119/204da/rUQGKLPurVU.jpg', 'name': 'Хлебников Семен', 'id': 278555119}, {'ava': 'https://pp.userapi.com/c638522/v638522547/4e7de/t1m8an6wv64.jpg', 'name': 'Георгиева Юлия', 'id': 282101547}, {'ava': 'https://pp.userapi.com/c637318/v637318938/46f31/kFqTQFE-_Xw.jpg', 'name': 'Moon Viacheslav', 'id': 297601938}, {'ava': 'https://pp.userapi.com/c841039/v841039427/1d072/_Q8dDLpK0eM.jpg', 'name': 'Батура Костя', 'id': 300438902}, {'ava': 'https://pp.userapi.com/c637331/v637331190/2b278/9TOO-BDW5-U.jpg', 'name': 'Shellapared Vittorio', 'id': 301539190}, {'ava': 'https://pp.userapi.com/c638526/v638526044/59406/LPvDhLUbJv8.jpg', 'name': 'Александровна Наталья', 'id': 313892353}, {'ava': 'https://pp.userapi.com/c638322/v638322037/3a35a/7OxvjyUhYjw.jpg', 'name': 'Куликов Дмитрий', 'id': 319477037}, {'ava': 'https://pp.userapi.com/c636929/v636929061/636/MlAA5ZxVKzM.jpg', 'name': 'Деменков Денис', 'id': 336349061}, {'ava': 'https://pp.userapi.com/c637519/v637519552/38a65/ul5UM_ZUxps.jpg', 'name': 'Shalyakin Igor', 'id': 340722552}, {'ava': 'https://pp.userapi.com/c627529/v627529770/73daa/OFhQ-o0D0zk.jpg', 'name': 'Полухин Валерий', 'id': 352136770}, {'ava': 'https://pp.userapi.com/c836433/v836433221/5466a/8g7ZGAW0pPk.jpg', 'name': 'Зуев Евгений', 'id': 354295941}, {'ava': 'https://pp.userapi.com/c836729/v836729972/60240/olTaAs0XGEI.jpg', 'name': 'Плащ Черный', 'id': 361123683}, {'ava': 'https://pp.userapi.com/c615716/v615716242/9902/3qQscfe3KaM.jpg', 'name': 'Бучельников Денис', 'id': 361418242}, {'ava': 'https://pp.userapi.com/c639419/v639419070/15058/JC0Rq7HaIJ8.jpg', 'name': 'Лебовский Сергей', 'id': 366111070}, {'ava': 'https://pp.userapi.com/c630923/v630923626/516d8/oBhFd8KGRsc.jpg', 'name': 'Ковалев Алексей', 'id': 374175626}, {'ava': 'https://pp.userapi.com/c836337/v836337392/29aec/cfcENlp1G1c.jpg', 'name': 'Алексеев Илья', 'id': 380997392}, {'ava': 'https://pp.userapi.com/c837637/v837637078/3eded/JZB_OyZ9b-8.jpg', 'name': 'Ввв Антон', 'id': 389828078}, {'ava': 'https://pp.userapi.com/c637217/v637217424/1a42f/0xLaaPs5ct4.jpg', 'name': 'Горбунов Капитон', 'id': 393046424}, {'ava': 'https://pp.userapi.com/c841432/v841432350/1ceba/SIYMHlDKvWc.jpg', 'name': 'Романова Эля', 'id': 395146552}, {'ava': 'https://pp.userapi.com/c638323/v638323182/316c4/FbMOySsTi-I.jpg', 'name': 'Тыныштыкбай Нурсултан', 'id': 401649182}, {'ava': 'https://pp.userapi.com/c638723/v638723460/1a0bb/e5FsdPAh3e0.jpg', 'name': 'Грифони Елена', 'id': 406766460}, {'ava': 'https://pp.userapi.com/c637530/v637530333/33443/qCQ67qoTLZY.jpg', 'name': 'Андреевич Артур', 'id': 412377333}, {'ava': 'https://pp.userapi.com/c837423/v837423021/51a0d/U8pPCwLHTbE.jpg', 'name': 'Суворов Максим', 'id': 420216021}, {'ava': 'https://pp.userapi.com/c836129/v836129623/3822a/Jq57CYnMs7s.jpg', 'name': 'Паутов Игорь', 'id': 422212623}, {'ava': 'https://pp.userapi.com/c837634/v837634886/3baea/ve2-Xaslk58.jpg', 'name': 'Кутепов Вячеслав', 'id': 429831886}, {'ava': 'https://pp.userapi.com/c837229/v837229047/4b57d/YrIehH5k0dc.jpg', 'name': 'Зарубин Александр', 'id': 444516729}]
        },
        {name:'Череповец',n:11,
        users:[{'ava': 'https://pp.userapi.com/c302111/v302111738/90d4/4z7tu-sSM74.jpg', 'name': 'Дубовик Виталий', 'id': 3129738}, {'ava': 'https://pp.userapi.com/c636530/v636530168/3a6a5/seXzgkj-iD4.jpg', 'name': 'Садырин Святослав', 'id': 7048168}, {'ava': 'https://pp.userapi.com/c630624/v630624959/2e758/defL2eFraI0.jpg', 'name': 'Виноградов Александр', 'id': 23975959}, {'ava': 'https://pp.userapi.com/c638327/v638327380/641ba/_sFx-886row.jpg', 'name': 'Тихоненкова Оксана', 'id': 35319141}, {'ava': 'https://pp.userapi.com/c638016/v638016749/44c9/ky3fZwmvN4c.jpg', 'name': 'Конобеев Олег', 'id': 38180749}, {'ava': 'https://pp.userapi.com/c638620/v638620399/6052f/G_Av3XPxUaE.jpg', 'name': 'Погодина Катя', 'id': 47653324}, {'ava': 'https://pp.userapi.com/c836128/v836128620/645a5/t_3lzoMYik4.jpg', 'name': 'Виноградова Наталия', 'id': 115268577}, {'ava': 'https://pp.userapi.com/c636125/v636125279/14429/t91wXvrqq50.jpg', 'name': 'Аня Рыбка', 'id': 157792279}, {'ava': 'https://pp.userapi.com/c639421/v639421026/9f0a/g6nno9YcZrw.jpg', 'name': 'Егоренков Максим', 'id': 184316026}, {'ava': 'https://pp.userapi.com/c638331/v638331581/13359/sCi2yVEsGQA.jpg', 'name': 'Кузнецов Николай', 'id': 205493581}, {'ava': 'https://pp.userapi.com/c631230/v631230521/46ab6/zX-YfytLT0s.jpg', 'name': 'Смирнов Александр', 'id': 210662521}]
        },
        {name:'Buenos Aires',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836635/v836635470/6064d/9kQQhpYR6O4.jpg', 'name': 'Якимова Лера', 'id': 253294977}]
        },
        {name:'Волгоград',n:16,
        users:[{'ava': 'https://pp.userapi.com/c840124/v840124298/17e49/N3D9sbWkI3c.jpg', 'name': 'Курал Алина', 'id': 3822917}, {'ava': 'https://pp.userapi.com/c638224/v638224500/5933a/6ewdeB6k1Iw.jpg', 'name': 'Зигангирова Рамиля', 'id': 27995483}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Richi Gay', 'id': 28910988}, {'ava': 'https://pp.userapi.com/c637123/v637123768/fff4/cqRdj5XSMkg.jpg', 'name': 'Бойков Антон', 'id': 30240768}, {'ava': 'https://pp.userapi.com/c837133/v837133239/40f0d/cuGSUERaGjE.jpg', 'name': 'Резникова Екатерина', 'id': 34274239}, {'ava': 'https://pp.userapi.com/c841321/v841321424/a9c7/_7NpUrtP4pU.jpg', 'name': 'Уткин Александр', 'id': 68262097}, {'ava': 'https://pp.userapi.com/c424619/v424619901/2f9b/3HJd5zI14YA.jpg', 'name': 'Селиванов Юрий', 'id': 122983901}, {'ava': 'https://pp.userapi.com/c836626/v836626649/67e0c/Smy0UQv6U2o.jpg', 'name': 'Гайворонская Элла', 'id': 135471872}, {'ava': 'https://pp.userapi.com/c836339/v836339494/6572e/N0hXjs9ixbo.jpg', 'name': 'Тоболина Кристина', 'id': 153303951}, {'ava': 'https://pp.userapi.com/c604729/v604729528/33ff/_tP9Y5sqaUw.jpg', 'name': 'Джабраилова Вусала', 'id': 158430528}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Петров Максим', 'id': 201091191}, {'ava': 'https://pp.userapi.com/c638623/v638623663/5ae87/2x3GBTemUCI.jpg', 'name': 'Чернышева Дарья', 'id': 258119696}, {'ava': 'https://pp.userapi.com/c626919/v626919803/41d9c/aKZPNEm5tEY.jpg', 'name': 'Sekyere Richard', 'id': 285210803}, {'ava': 'https://pp.userapi.com/c841023/v841023125/8b3f/nPQLmOpL6kc.jpg', 'name': 'Церенова Марина', 'id': 350092125}, {'ava': 'https://pp.userapi.com/c636520/v636520142/5aff6/ILWenaRsW4g.jpg', 'name': 'Zozo Ivan', 'id': 385924142}, {'ava': 'https://pp.userapi.com/c639224/v639224860/4096e/7vtGumGI140.jpg', 'name': 'Чугуевцева Юлия', 'id': 428470624}]
        },
        {name:'Северодвинск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639629/v639629232/3f4f6/mvneqSWKXg8.jpg', 'name': 'Зыбин Никита', 'id': 1011427}, {'ava': 'https://pp.userapi.com/c836231/v836231087/4e8cd/ECFzxL3FgFE.jpg', 'name': 'Булич Женя', 'id': 163582906}]
        },
        {name:'Пушкин',n:2,
        users:[{'ava': 'https://pp.userapi.com/c841136/v841136242/15aa1/wPwSJkt3PwA.jpg', 'name': 'Папст Наталья', 'id': 4053159}, {'ava': 'https://pp.userapi.com/c636319/v636319106/61d26/M3Tz34s3vak.jpg', 'name': 'Гришан Юлия', 'id': 6348106}]
        },
        {name:'Астана',n:3,
        users:[{'ava': 'https://pp.userapi.com/c841236/v841236945/f8c4/H9XyZA4-gG0.jpg', 'name': 'Шиманский Николай', 'id': 69262841}, {'ava': 'https://pp.userapi.com/c638716/v638716697/559e3/Pr45epgPBME.jpg', 'name': 'Муханбетжанов Сырым', 'id': 149427633}, {'ava': 'https://pp.userapi.com/c837124/v837124910/c075/B3E5cdWro5w.jpg', 'name': 'Саидов Тима', 'id': 306673910}]
        },
        {name:'Абакан',n:4,
        users:[{'ava': 'https://pp.userapi.com/c636625/v636625552/10f5b/vI4MUndQbbY.jpg', 'name': 'Балакирев Андрей', 'id': 2081552}, {'ava': 'https://pp.userapi.com/c626529/v626529154/10e5b/TikHWg2gVGU.jpg', 'name': 'Винник Елена', 'id': 17615154}, {'ava': 'https://pp.userapi.com/c629407/v629407355/1da2d/EjKgmafydJE.jpg', 'name': 'Бухтуев Георгий', 'id': 230627355}, {'ava': 'https://pp.userapi.com/c837639/v837639519/5017c/JuufObXOmHQ.jpg', 'name': 'Ряскина Полина', 'id': 252042361}]
        },
        {name:'Альметьевск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c638220/v638220557/4f450/zGYCJvpfyn4.jpg', 'name': 'Мартынычев Андрей', 'id': 30481104}, {'ava': 'https://pp.userapi.com/c638219/v638219446/3a934/xWTCKyeD_Sk.jpg', 'name': 'Ялалов Дамир', 'id': 163283446}, {'ava': 'https://pp.userapi.com/c625422/v625422151/214d9/ZRoMYUT6GjQ.jpg', 'name': 'Зиннурова Милана', 'id': 262992151}, {'ava': 'https://pp.userapi.com/c638226/v638226606/5937c/dAWAo8eYpMk.jpg', 'name': 'Илюмжинова Лиля', 'id': 319067349}]
        },
        {name:'Ангарск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c627723/v627723981/be51/Uhge0DvMiI0.jpg', 'name': 'Козлов Андрей', 'id': 245992981}, {'ava': 'https://pp.userapi.com/c638131/v638131138/62d56/C3y0bl_3Gyg.jpg', 'name': 'Иванов Денис', 'id': 426159341}]
        },
        {name:'Арзамас',n:2,
        users:[{'ava': 'https://pp.userapi.com/c403823/v403823665/a91c/QR10RK6LAIc.jpg', 'name': 'Кудаков Сергей', 'id': 203393665}, {'ava': 'https://pp.userapi.com/c638822/v638822035/2c234/49i7CjrtlHA.jpg', 'name': 'Щербаков Максим', 'id': 291596035}]
        },
        {name:'Армавир',n:3,
        users:[{'ava': 'https://pp.userapi.com/c638326/v638326516/3543d/9JrPiMqZyNE.jpg', 'name': 'Проказина Наталия', 'id': 71347516}, {'ava': 'https://pp.userapi.com/c637426/v637426665/56ea1/qItgcwQEPog.jpg', 'name': 'Кузнецова Кристина', 'id': 143428665}, {'ava': 'https://pp.userapi.com/c841324/v841324049/224fa/hgmxYYIjSt0.jpg', 'name': 'Пескова Александра', 'id': 402524333}]
        },
        {name:'Архангельск',n:11,
        users:[{'ava': 'https://pp.userapi.com/c639430/v639430227/206b6/QnRfQPMv4a8.jpg', 'name': 'Неманова Оксана', 'id': 6559227}, {'ava': 'https://pp.userapi.com/c638222/v638222335/c6ce/xPLxFPcC30E.jpg', 'name': 'Левкова Елена', 'id': 18852335}, {'ava': 'https://pp.userapi.com/c837120/v837120450/478c6/5hQR-I3Qlc8.jpg', 'name': 'Сметанин Артём', 'id': 19046075}, {'ava': 'https://pp.userapi.com/c636719/v636719677/2d379/MgG2DM8AqVk.jpg', 'name': 'Пупышев Артём', 'id': 31730677}, {'ava': 'https://pp.userapi.com/c633728/v633728494/121bf/M2xX9NYwz_k.jpg', 'name': 'Ющенко Павел', 'id': 42475494}, {'ava': 'https://pp.userapi.com/c636723/v636723268/5084a/nmbClbXou7o.jpg', 'name': 'Tretyakov Ivan', 'id': 49753268}, {'ava': 'https://pp.userapi.com/c425518/v425518861/4ce2/lRlbLY9x-jY.jpg', 'name': 'Яковлева Ольга', 'id': 175468861}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Луцева Ирина', 'id': 231465751}, {'ava': 'https://pp.userapi.com/c837525/v837525034/242b7/5TyfmXXbvwA.jpg', 'name': 'Карганов Александр', 'id': 242463034}, {'ava': 'https://pp.userapi.com/c617620/v617620966/16eec/UPc1pgL8FRY.jpg', 'name': 'Семенов Игнат', 'id': 247634966}, {'ava': 'https://pp.userapi.com/c639116/v639116971/3788e/00_6zrNIEGc.jpg', 'name': 'Ritka Margo', 'id': 393309137}]
        },
        {name:'Астрахань',n:2,
        users:[{'ava': 'https://pp.userapi.com/c841527/v841527860/be74/g3TY_SoR9c4.jpg', 'name': 'Храмцовский Иван', 'id': 10694811}, {'ava': 'https://pp.userapi.com/c638324/v638324269/597e5/36Qcah7UYI0.jpg', 'name': 'Куликовская Дарья', 'id': 442778452}]
        },
        {name:'Балашиха',n:5,
        users:[{'ava': 'https://pp.userapi.com/c626925/v626925026/25a00/MAsHn3aLhFw.jpg', 'name': 'Яшин Сергей', 'id': 1516026}, {'ava': 'https://pp.userapi.com/c617716/v617716731/1e429/cihjwI4JHes.jpg', 'name': 'Рожнов Егор', 'id': 4451731}, {'ava': 'https://pp.userapi.com/c623327/v623327724/2d061/X38fGTH01WU.jpg', 'name': 'Лыков Евгений', 'id': 108237724}, {'ava': 'https://pp.userapi.com/c638724/v638724068/53f7c/LauK16MjLNE.jpg', 'name': 'Белов Сергей', 'id': 254430068}, {'ava': 'https://pp.userapi.com/c841338/v841338844/1a681/rqG_6NZfShs.jpg', 'name': 'Кулешов Алексей', 'id': 268008421}]
        },
        {name:'Барнаул',n:6,
        users:[{'ava': 'https://pp.userapi.com/c636926/v636926390/33fd0/1QmgujPw6C8.jpg', 'name': 'Абраменко Людмила', 'id': 10073390}, {'ava': 'https://pp.userapi.com/c836628/v836628724/2614c/bMk_T-1GlhU.jpg', 'name': 'Скляров Никита', 'id': 30253724}, {'ava': 'https://pp.userapi.com/c837723/v837723151/5109c/3PTKb0NzYA8.jpg', 'name': 'Кропотина Мария', 'id': 177612240}, {'ava': 'https://pp.userapi.com/c840125/v840125520/2624f/V8zwW7S1Meo.jpg', 'name': 'Леонтьева Снежана', 'id': 257613442}, {'ava': 'https://pp.userapi.com/c639228/v639228029/866b/JTeM3Qh9AV8.jpg', 'name': 'Середа Илья', 'id': 277337029}, {'ava': 'https://pp.userapi.com/c638231/v638231220/41880/Gt70Hyf1_1A.jpg', 'name': 'Машукова Ирина', 'id': 331349220}]
        },
        {name:'Белгород',n:17,
        users:[{'ava': 'https://sun9-11.userapi.com/c837626/v837626098/577f8/lyWS5DLzm-c.jpg', 'name': 'Пазюк Валерий', 'id': 1269438}, {'ava': 'https://pp.userapi.com/c837723/v837723897/63f46/1FFyw2oxV7s.jpg', 'name': 'Цыбульник Тарас', 'id': 1908920}, {'ava': 'https://pp.userapi.com/c619419/v619419173/14dd4/QgIxopvHMc4.jpg', 'name': 'Кудинов Алексей', 'id': 7397173}, {'ava': 'https://pp.userapi.com/c837729/v837729475/54c13/UUsJnaJ4Q1M.jpg', 'name': 'Гиривенко Виталий', 'id': 9473351}, {'ava': 'https://pp.userapi.com/c841220/v841220172/1532d/67b3BzA5rYY.jpg', 'name': 'Алферова Людмила', 'id': 11146133}, {'ava': 'https://pp.userapi.com/c639819/v639819860/431e0/cEocBaji_m0.jpg', 'name': 'Парполита Екатерина', 'id': 15907959}, {'ava': 'https://pp.userapi.com/c841033/v841033718/1a633/q6Wsj9LF41s.jpg', 'name': 'Долгих Еля', 'id': 18733352}, {'ava': 'https://pp.userapi.com/c837137/v837137664/fb5e/1NfxXSvyh_k.jpg', 'name': 'Нерубенко Александр', 'id': 21854664}, {'ava': 'https://pp.userapi.com/c633630/v633630186/3b1ef/6qX5ubc0xJQ.jpg', 'name': 'Покидов Виталий', 'id': 51215186}, {'ava': 'https://pp.userapi.com/c639825/v639825939/3f932/7BuCYnmuBvU.jpg', 'name': 'Рубан Кирилл', 'id': 87808432}, {'ava': 'https://pp.userapi.com/c639726/v639726675/202a3/4iCebyNrM70.jpg', 'name': 'Резник Александр', 'id': 161401675}, {'ava': 'https://pp.userapi.com/c624918/v624918879/35d2c/E9_1J2SBPno.jpg', 'name': 'Гасанова Тамара', 'id': 188036879}, {'ava': 'https://pp.userapi.com/c639616/v639616052/4ce55/XuA226SxJc4.jpg', 'name': 'Верховный Александр', 'id': 255583987}, {'ava': 'https://pp.userapi.com/c619129/v619129736/b0f5/_0V0HSyS3J4.jpg', 'name': 'Попова Татьяна', 'id': 259996736}, {'ava': 'https://pp.userapi.com/c636119/v636119865/3ae37/02CvYu708ds.jpg', 'name': 'Андреев Андрей', 'id': 281204865}, {'ava': 'https://pp.userapi.com/c638027/v638027032/641a7/x2KhLGHOz_M.jpg', 'name': 'Чуканова Елена', 'id': 287843399}, {'ava': 'https://pp.userapi.com/c837131/v837131498/1700c/cfNXgraozq8.jpg', 'name': 'Деревянных Алена', 'id': 296050498}]
        },
        {name:'Бийск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836437/v836437970/37a85/YkuK7n_put0.jpg', 'name': 'Хлыстов Миша', 'id': 243444970}]
        },
        {name:'Бор',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637925/v637925256/6981a/HgYOg45hxeU.jpg', 'name': 'Волк Анастасия', 'id': 418892077}]
        },
        {name:'Братск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841621/v841621159/205c7/XB7j7dujNTg.jpg', 'name': 'Исламов Савелий', 'id': 161448361}]
        },
        {name:'Брянск',n:9,
        users:[{'ava': 'https://pp.userapi.com/c638330/v638330439/57de6/8y8iCok6QXo.jpg', 'name': 'Кулешов Владимир', 'id': 8926678}, {'ava': 'https://pp.userapi.com/c638117/v638117464/27616/vkvBbMkPFA0.jpg', 'name': 'Владимиров Максим', 'id': 10615464}, {'ava': 'https://pp.userapi.com/c630331/v630331496/55679/t1DuqvG6PK0.jpg', 'name': 'Ефимова Мария', 'id': 196231496}, {'ava': 'https://pp.userapi.com/c629125/v629125512/9eda/T4W3NVh14u8.jpg', 'name': 'Харитонова Оксана', 'id': 280910512}, {'ava': 'https://pp.userapi.com/c638322/v638322992/66778/CUPNzcbRgMg.jpg', 'name': 'Медведев Саня', 'id': 319622888}, {'ava': 'https://pp.userapi.com/c626728/v626728117/3c7cc/GfrDBuFEJxQ.jpg', 'name': 'Колбасин Роман', 'id': 338830117}, {'ava': 'https://pp.userapi.com/c841326/v841326362/1f895/SGV4DW_pUOM.jpg', 'name': 'Ермилова Алина', 'id': 340953942}, {'ava': 'https://pp.userapi.com/c837737/v837737554/66f76/Z_xSyjc3e-I.jpg', 'name': 'Афанасьев Андрей', 'id': 417432391}, {'ava': 'https://pp.userapi.com/c621509/v621509323/d52f/F6ctZOcMGuY.jpg', 'name': 'Можаев Никита', 'id': 422076889}]
        },
        {name:'Великий Новгород',n:5,
        users:[{'ava': 'https://pp.userapi.com/c638119/v638119969/4db90/twTqhtQCsqY.jpg', 'name': 'Bragin Andrey', 'id': 58584815}, {'ava': 'https://pp.userapi.com/c403127/v403127439/9253/GGdsbtfg5yQ.jpg', 'name': 'Чернуха Виталий', 'id': 116150439}, {'ava': 'https://sun9-11.userapi.com/c639922/v639922863/460a8/C3mhjnju1CM.jpg', 'name': 'Рамильевич Эрик', 'id': 182335651}, {'ava': 'https://pp.userapi.com/c607519/v607519980/724b/c5pvrTb_BdU.jpg', 'name': 'Корольков Игорь', 'id': 237572980}, {'ava': 'https://pp.userapi.com/c626519/v626519308/5a6bf/wYs05X4ty5I.jpg', 'name': 'Устинов Дмитрий', 'id': 349677308}]
        },
        {name:'Владивосток',n:13,
        users:[{'ava': 'https://pp.userapi.com/c837120/v837120627/3f3d/HE_GDINJ_lk.jpg', 'name': 'Белов Михаил', 'id': 270627}, {'ava': 'https://pp.userapi.com/c623625/v623625079/41f3e/H7f84ulaI8I.jpg', 'name': 'Смола Виктория', 'id': 1226079}, {'ava': 'https://pp.userapi.com/c837538/v837538860/56196/wJKKyscbRBE.jpg', 'name': 'Лукьянова Анна', 'id': 4260300}, {'ava': 'https://pp.userapi.com/c413325/v413325203/315b/MWgQu9J0Nng.jpg', 'name': 'Вечерковский Александр', 'id': 5048203}, {'ava': 'https://pp.userapi.com/c617629/v617629920/1b69d/oXILRWaTxog.jpg', 'name': 'Гарянин Дмитрий', 'id': 34375920}, {'ava': 'https://pp.userapi.com/c836437/v836437611/66c9/DT4cPQZ6Z94.jpg', 'name': 'Сафонова Аня', 'id': 79769611}, {'ava': 'https://pp.userapi.com/c637919/v637919132/5cb23/1bbp8JVrCQQ.jpg', 'name': 'Шарипков Юрий', 'id': 94790374}, {'ava': 'https://pp.userapi.com/c638526/v638526308/47a23/VHOD1v42jrY.jpg', 'name': 'Пономаренко Юля', 'id': 160863308}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Иванов Саша', 'id': 189075584}, {'ava': 'https://pp.userapi.com/c638023/v638023181/27405/fvHRk7QjFmU.jpg', 'name': 'Токарь Тимофей', 'id': 238645181}, {'ava': 'https://pp.userapi.com/c633421/v633421466/184e0/fEYQR5Ca4Ao.jpg', 'name': 'Zyravleva Elena', 'id': 242198466}, {'ava': 'https://pp.userapi.com/c627218/v627218125/155b/vlagvUc_-nM.jpg', 'name': 'Занькова Елена', 'id': 313924125}, {'ava': 'https://pp.userapi.com/c841524/v841524042/1ffaf/KvgPQX5MyMY.jpg', 'name': 'Вакульский Вадим', 'id': 331652454}]
        },
        {name:'Владикавказ',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841020/v841020683/21e35/ABIjKrAWXq8.jpg', 'name': 'Тобоева Диана', 'id': 306191340}]
        },
        {name:'Владимир',n:12,
        users:[{'ava': 'https://pp.userapi.com/c840221/v840221676/1f123/Hu0X5C0pdF0.jpg', 'name': 'Ситова Екатерина', 'id': 3328967}, {'ava': 'https://pp.userapi.com/c626518/v626518900/36c82/2fGcCspVzqo.jpg', 'name': 'Игнатов Алексей', 'id': 17431900}, {'ava': 'https://pp.userapi.com/c837238/v837238435/53117/LNcmqP6TQzg.jpg', 'name': 'Дубина Анастасия', 'id': 22030020}, {'ava': 'https://pp.userapi.com/c637425/v637425551/6aa2a/oRIcde-3V9M.jpg', 'name': 'Меркулова Елена', 'id': 33875146}, {'ava': 'https://pp.userapi.com/c636926/v636926158/28565/NVtd1fD-bmg.jpg', 'name': 'Михеев Алексей', 'id': 52959158}, {'ava': 'https://pp.userapi.com/c604519/v604519610/26a15/c_Hk5p-panM.jpg', 'name': 'Жарких Борис', 'id': 97076610}, {'ava': 'https://pp.userapi.com/c836430/v836430918/3c2e4/DDF_CQtWGQA.jpg', 'name': 'Ниделяева Анастасия', 'id': 123761918}, {'ava': 'https://pp.userapi.com/c543106/v543106509/60a2f/BYFllKluC1g.jpg', 'name': 'Царькова Алена', 'id': 177637300}, {'ava': 'https://pp.userapi.com/c639720/v639720939/39e24/Qc9gHnH6EBU.jpg', 'name': 'Артюх Катерина', 'id': 219434251}, {'ava': 'https://pp.userapi.com/c638217/v638217845/51035/q1nBdOGkl5w.jpg', 'name': 'Mikhaylovskiy Anton', 'id': 356375120}, {'ava': 'https://pp.userapi.com/c638823/v638823056/53528/c1lPReORAWU.jpg', 'name': 'Ковин Иван', 'id': 382052473}, {'ava': 'https://pp.userapi.com/c841124/v841124693/c920/rEe0rSQVHVE.jpg', 'name': 'Миронова Наталья', 'id': 415532042}]
        },
        {name:'Волжский',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639624/v639624878/447c7/UryMz9k4--8.jpg', 'name': 'Серёжникова Юлия', 'id': 4321772}, {'ava': 'https://pp.userapi.com/c836733/v836733695/55b0a/jTogf_KDAkU.jpg', 'name': 'Жумгалиева Татьяна', 'id': 164332499}]
        },
        {name:'Вологда',n:7,
        users:[{'ava': 'https://pp.userapi.com/c837534/v837534426/52101/_T3EqZNnMi4.jpg', 'name': 'Синяков Дмитрий', 'id': 4889806}, {'ava': 'https://pp.userapi.com/c638231/v638231667/3cdcf/mgJi3pSgp00.jpg', 'name': 'Дьяков Иван', 'id': 6028667}, {'ava': 'https://pp.userapi.com/c836439/v836439699/4649d/vSe04ceDWEg.jpg', 'name': 'Смирнова Алина', 'id': 9671699}, {'ava': 'https://pp.userapi.com/c840429/v840429775/5838/A7RvkuTw4ao.jpg', 'name': 'Денисов Александр', 'id': 15142964}, {'ava': 'https://pp.userapi.com/c836324/v836324261/636c3/qNcBjOeucUs.jpg', 'name': 'Смирнова Светлана', 'id': 73725607}, {'ava': 'https://pp.userapi.com/c604326/v604326781/9dbc/SgNY_HtN6EM.jpg', 'name': 'Хайруллин Ринат', 'id': 75477781}, {'ava': 'https://pp.userapi.com/c841328/v841328872/1a875/X5nyMshBzjk.jpg', 'name': 'Соколова Марина', 'id': 275920789}]
        },
        {name:'Воронеж',n:14,
        users:[{'ava': 'https://pp.userapi.com/c625827/v625827400/1b85b/SjDrfxINVnc.jpg', 'name': 'Курносов Максим', 'id': 1901400}, {'ava': 'https://pp.userapi.com/c836437/v836437821/10ee3/VjZ-C2TLFsw.jpg', 'name': 'Трофимов Николай', 'id': 3597821}, {'ava': 'https://pp.userapi.com/c311527/v311527523/50e/3egDNlR44zQ.jpg', 'name': 'Гаврилов Максим', 'id': 10294523}, {'ava': 'https://pp.userapi.com/c631317/v631317801/2d226/mymMnZpmNUI.jpg', 'name': 'Марасанов Владимир', 'id': 18518801}, {'ava': 'https://pp.userapi.com/c638417/v638417320/574ca/N3kO_ZQmPto.jpg', 'name': 'Махмудов Исрофил', 'id': 20257888}, {'ava': 'https://pp.userapi.com/c629111/v629111088/11693/pYkQ9qrEmN4.jpg', 'name': 'Петренко Влад', 'id': 28894088}, {'ava': 'https://pp.userapi.com/c837122/v837122588/4d7e4/i4Z7KcF6mm0.jpg', 'name': 'Лобыкин Алексей', 'id': 55942198}, {'ava': 'https://pp.userapi.com/c840225/v840225265/1c30b/ToNi3Za2Irk.jpg', 'name': 'Медведева Алина', 'id': 139129505}, {'ava': 'https://pp.userapi.com/c841434/v841434368/14ad7/7lmPCY2-DwI.jpg', 'name': 'Колесников Илья', 'id': 145715443}, {'ava': 'https://pp.userapi.com/c638120/v638120186/42911/xE1qxsEknSg.jpg', 'name': 'Макаров Сергей', 'id': 150336186}, {'ava': 'https://pp.userapi.com/c639120/v639120070/3a7c0/LPrTqBxZEdc.jpg', 'name': 'Пономарева Галина', 'id': 158035763}, {'ava': 'https://pp.userapi.com/c639918/v639918809/3e1ab/CFKTD8kiPek.jpg', 'name': 'Машкова Виктория', 'id': 221140793}, {'ava': 'https://pp.userapi.com/c836434/v836434146/2500d/pB1pCF4czzQ.jpg', 'name': 'Мациенко Виталий', 'id': 308788146}, {'ava': 'https://pp.userapi.com/c626627/v626627414/4751a/BLpvafvqgkQ.jpg', 'name': 'No-Name Igor', 'id': 326548414}]
        },
        {name:'Геленджик',n:4,
        users:[{'ava': 'https://pp.userapi.com/c837521/v837521241/574bb/mu6A1EmYPzY.jpg', 'name': 'Багдасарян Артур', 'id': 61604861}, {'ava': 'https://pp.userapi.com/c638522/v638522878/366c0/7hPCxBc-kf0.jpg', 'name': 'Васильевич Владимир', 'id': 120268878}, {'ava': 'https://pp.userapi.com/c841637/v841637796/13d5e/S6Nh86mBibQ.jpg', 'name': 'Лотоцкий Влад', 'id': 137481798}, {'ava': 'https://pp.userapi.com/c638119/v638119870/5d3c3/zcExRg1J5dU.jpg', 'name': 'Кадырова Эльвина', 'id': 329063107}]
        },
        {name:'Горно-Алтайск',n:2,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Туянов Олег', 'id': 137351192}, {'ava': 'https://pp.userapi.com/c620616/v620616665/154b3/vnl8KpXBSVA.jpg', 'name': 'Хорошилов Евгений', 'id': 268039665}]
        },
        {name:'Екатеринбург',n:46,
        users:[{'ava': 'https://pp.userapi.com/c837228/v837228485/54117/7lm0gkOitS4.jpg', 'name': 'Гимаева Оля', 'id': 1058816}, {'ava': 'https://pp.userapi.com/c841625/v841625698/1de49/6IlLc7hcWI4.jpg', 'name': 'Попов Александр', 'id': 2044493}, {'ava': 'https://pp.userapi.com/c636716/v636716650/145ca/GCBVlDQxuaU.jpg', 'name': 'Шарифов Вячеслав', 'id': 2809650}, {'ava': 'https://pp.userapi.com/c631423/v631423323/25956/FGDF4WRVl9k.jpg', 'name': 'Охотников Антон', 'id': 3066323}, {'ava': 'https://pp.userapi.com/c841427/v841427355/18bf5/Ui_x-9jjATA.jpg', 'name': 'Загребина Екатерина', 'id': 3337612}, {'ava': 'https://pp.userapi.com/c836727/v836727178/8be7/xzs5MuqMU1I.jpg', 'name': 'Гимранов Ильшат', 'id': 3379178}, {'ava': 'https://pp.userapi.com/c837233/v837233549/5fd89/ZGkyarrsaUg.jpg', 'name': 'Пархайтинов Дмитрий', 'id': 3820811}, {'ava': 'https://pp.userapi.com/c419221/v419221484/87c2/Cwy1jfkCtUY.jpg', 'name': 'Кошкина Мария', 'id': 4202484}, {'ava': 'https://pp.userapi.com/c639720/v639720700/3b1fb/9BUiswALUws.jpg', 'name': 'Потапова Женя', 'id': 4374837}, {'ava': 'https://pp.userapi.com/c836736/v836736958/5ac9e/8e9-NNz5KH8.jpg', 'name': 'Батуев Пётр', 'id': 4887740}, {'ava': 'https://pp.userapi.com/c841326/v841326536/d799/Qc2BmLCecQ0.jpg', 'name': 'Захаров Павел', 'id': 6665631}, {'ava': 'https://pp.userapi.com/c638618/v638618828/53517/jJSSx_KR2Pg.jpg', 'name': 'Евтюхова Алёна', 'id': 8313630}, {'ava': 'https://pp.userapi.com/c630627/v630627055/2b5de/6MuYku6bBsc.jpg', 'name': 'Коротких Анна', 'id': 9366055}, {'ava': 'https://pp.userapi.com/c637224/v637224253/1878e/nPXNYICN0Io.jpg', 'name': 'Нилова Геля', 'id': 11847253}, {'ava': 'https://pp.userapi.com/c621515/v621515714/1435e/Epff3Y8hfsE.jpg', 'name': 'Шакиров Ридаль', 'id': 13138388}, {'ava': 'https://pp.userapi.com/c703/u13279096/e_e7da3bde.jpg', 'name': 'Иванов Сергей', 'id': 13279096}, {'ava': 'https://pp.userapi.com/c322721/v322721740/57ec/OqKwAWSV3Gw.jpg', 'name': 'Sanin Александр', 'id': 15528740}, {'ava': 'https://pp.userapi.com/c836136/v836136957/6702e/hbbtsLyufc8.jpg', 'name': 'Турсунов Равшан', 'id': 17114762}, {'ava': 'https://pp.userapi.com/c636431/v636431952/38a0f/4rN1fXAXCPs.jpg', 'name': 'Мартынов Алексей', 'id': 18070952}, {'ava': 'https://pp.userapi.com/c631525/v631525797/1432e/zZdo_1aCpr8.jpg', 'name': 'Паночкин Глеб', 'id': 21808797}, {'ava': 'https://pp.userapi.com/c626226/v626226669/1bdaf/UYvuBEXTpKI.jpg', 'name': 'Воздвиженский Евгений', 'id': 23731669}, {'ava': 'https://pp.userapi.com/c630023/v630023999/57f0c/gaVvFWU8tU4.jpg', 'name': 'Аксанов Марсель', 'id': 24298999}, {'ava': 'https://pp.userapi.com/c639624/v639624105/467d5/5zXuQBKopNM.jpg', 'name': 'Копылова Светлана', 'id': 31526197}, {'ava': 'https://pp.userapi.com/c637423/v637423026/59bc6/V3tAHc7dXiA.jpg', 'name': 'Вовненко Наталья', 'id': 35581026}, {'ava': 'https://pp.userapi.com/c841238/v841238058/1f422/d8xteCWbpog.jpg', 'name': 'Калитенко Ирина', 'id': 44122897}, {'ava': 'https://pp.userapi.com/c622616/v622616572/4bfe9/aledMFvaiV0.jpg', 'name': 'Mata Tanja', 'id': 48023572}, {'ava': 'https://pp.userapi.com/c626320/v626320656/99329/amqJrIWAJd4.jpg', 'name': 'Слободчиков Александр', 'id': 58313656}, {'ava': 'https://pp.userapi.com/c305304/v305304405/a104/wrPIHQrjtf4.jpg', 'name': 'Игнатов Дмитрий', 'id': 69242405}, {'ava': 'https://pp.userapi.com/c837122/v837122067/6344f/2LQdjdFic60.jpg', 'name': 'Антонов Алексей', 'id': 94478574}, {'ava': 'https://pp.userapi.com/c836220/v836220897/6555f/5os9_BYgq0U.jpg', 'name': 'Хабибуллин Ильдар', 'id': 104741884}, {'ava': 'https://pp.userapi.com/c9476/u108669519/e_ae3d9a23.jpg', 'name': 'Лылов Александр', 'id': 108669519}, {'ava': 'https://sun9-11.userapi.com/c840720/v840720391/8ce6/gBvzUIHMMmU.jpg', 'name': 'Кучин Павел', 'id': 117272744}, {'ava': 'https://pp.userapi.com/c639130/v639130833/3d381/dwmAgqYSkD8.jpg', 'name': 'Финогентова Ирина', 'id': 126005363}, {'ava': 'https://pp.userapi.com/c620929/v620929111/809b/a9GpsyRQt0w.jpg', 'name': 'Лузина Елена', 'id': 138426111}, {'ava': 'https://pp.userapi.com/c639730/v639730434/347d2/-qykZI_qJ8U.jpg', 'name': 'Гергерт Светик', 'id': 146682384}, {'ava': 'https://pp.userapi.com/c637825/v637825091/3a4c7/NBWxTd0Dgr8.jpg', 'name': 'Sergeevich Mihail', 'id': 237725091}, {'ava': 'https://pp.userapi.com/c617616/v617616872/580f/KeF5ZkuwiRU.jpg', 'name': 'Галимулин Денис', 'id': 245820872}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Шестеркин Антон', 'id': 247423900}, {'ava': 'https://pp.userapi.com/c638416/v638416709/4bbe6/h5_Cq1jjYtY.jpg', 'name': 'Долматов Юра', 'id': 247503961}, {'ava': 'https://pp.userapi.com/c638231/v638231780/3b1e0/0y5_pJNimuQ.jpg', 'name': 'Майский Михаил', 'id': 290023780}, {'ava': 'https://pp.userapi.com/c627423/v627423953/42f6a/KzbCNsPvp_4.jpg', 'name': 'Субботин Андрей', 'id': 294015953}, {'ava': 'https://pp.userapi.com/c628416/v628416176/2e8ee/33IF9nWziGM.jpg', 'name': 'Vaseva Elena', 'id': 316053176}, {'ava': 'https://pp.userapi.com/c837132/v837132935/396c2/_Y--wuxeI4Y.jpg', 'name': 'Мурашко Алексей', 'id': 316403935}, {'ava': 'https://pp.userapi.com/c624924/v624924807/4ede7/QOzkSUHfY9U.jpg', 'name': 'Русских Александр', 'id': 326329807}, {'ava': 'https://pp.userapi.com/c627930/v627930219/24790/473YfHHZDH8.jpg', 'name': 'Чиканцев Роман', 'id': 333770219}, {'ava': 'https://pp.userapi.com/c639430/v639430012/34226/gzQ45_qdMCw.jpg', 'name': 'Худяков Влад', 'id': 414252291}]
        },
        {name:'Елабуга',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836326/v836326699/684de/hCzgGOg9STw.jpg', 'name': 'Петрова Галина', 'id': 25732565}, {'ava': 'https://pp.userapi.com/c124/u79898028/e_31fbfa84.jpg', 'name': 'Зайнеева Екатерина', 'id': 79898028}]
        },
        {name:'Елец',n:2,
        users:[{'ava': 'https://sun9-11.userapi.com/c639717/v639717441/433c5/NJpnqP8RRqU.jpg', 'name': 'Вольных Инна', 'id': 33759536}, {'ava': 'https://pp.userapi.com/c840425/v840425830/3ac6/9KnbixTD5LY.jpg', 'name': 'Завальнюк Владимир', 'id': 142477423}]
        },
        {name:'Жуковский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637422/v637422063/9644/wKKo2knGH4E.jpg', 'name': 'Гавриков Евгений', 'id': 292807063}]
        },
        {name:'Иваново',n:7,
        users:[{'ava': 'https://pp.userapi.com/c638828/v638828032/47cd6/rcwrDm3Jfys.jpg', 'name': 'Пожаров Евгений', 'id': 6661032}, {'ava': 'https://pp.userapi.com/c836135/v836135021/4e2f1/7t0ZcixnLuI.jpg', 'name': 'Терлецкий Виталий', 'id': 14245021}, {'ava': 'https://pp.userapi.com/c837436/v837436457/2a089/S0YP_aSeD7k.jpg', 'name': 'Власов Александр', 'id': 22557457}, {'ava': 'https://pp.userapi.com/c841526/v841526495/187a7/NV4d4fgTsFI.jpg', 'name': 'Прозорова Елена', 'id': 37232484}, {'ava': 'https://pp.userapi.com/c622418/v622418637/4c7a4/VJcvlE5yr9o.jpg', 'name': 'Гордова Лиза', 'id': 129891637}, {'ava': 'https://pp.userapi.com/c841227/v841227856/f2c0/S8X6c3Ad9Oc.jpg', 'name': 'Мышков Егор', 'id': 226231245}, {'ava': 'https://pp.userapi.com/c837528/v837528000/9225/1F1PdYIpnN4.jpg', 'name': 'Генатулин Амир', 'id': 392635000}]
        },
        {name:'Ижевск',n:16,
        users:[{'ava': 'https://pp.userapi.com/c88/u3280464/e_4fe43c0a.jpg', 'name': 'Некрасов Денис', 'id': 3280464}, {'ava': 'https://pp.userapi.com/c1427/v1427986/a/7ipfjLIwP2A.jpg', 'name': 'Павловских Анна', 'id': 3740986}, {'ava': 'https://pp.userapi.com/c638224/v638224154/5ae56/4eLslVho7ng.jpg', 'name': 'Иванов Николай', 'id': 8492703}, {'ava': 'https://pp.userapi.com/c836726/v836726796/3d9b3/Nu567Hwf5lY.jpg', 'name': 'Хитрина Татьяна', 'id': 13593796}, {'ava': 'https://pp.userapi.com/c629500/v629500172/26717/TLZn0YyJUM0.jpg', 'name': 'Игнатьев Александр', 'id': 26648172}, {'ava': 'https://pp.userapi.com/c626416/v626416487/2ded4/O08boz10ma8.jpg', 'name': 'Литвинов Максим', 'id': 30147487}, {'ava': 'https://pp.userapi.com/c637925/v637925159/3f5ae/vaN5aL5LpJ0.jpg', 'name': 'Приказчиков Александр', 'id': 33083159}, {'ava': 'https://pp.userapi.com/c636630/v636630322/6e715/0KLjJx9HnKY.jpg', 'name': 'Филиппов Владимир', 'id': 38139322}, {'ava': 'https://pp.userapi.com/c633820/v633820733/32b91/lq-kI-JtMo4.jpg', 'name': 'Касаткин Павел', 'id': 64777733}, {'ava': 'https://pp.userapi.com/c621700/v621700727/10399/GjHcEZTjc9Y.jpg', 'name': 'Шаймурзина Физалина', 'id': 99179405}, {'ava': 'https://pp.userapi.com/c841222/v841222991/1a34b/P2jWsFOCKN8.jpg', 'name': 'Голяшова Любовь', 'id': 151798907}, {'ava': 'https://pp.userapi.com/c309126/u164315746/e_f93bc32e.jpg', 'name': 'Бродская Елена', 'id': 164315746}, {'ava': 'https://pp.userapi.com/c836334/v836334442/368fa/PDJRYV1vx4E.jpg', 'name': 'Калимуллин Александр', 'id': 178900442}, {'ava': 'https://pp.userapi.com/c626823/v626823146/1052c/_D4lcjlHJ7g.jpg', 'name': 'Журавлева Ольга', 'id': 213112146}, {'ava': 'https://pp.userapi.com/c637420/v637420372/8a1/LGrY2t2w-xU.jpg', 'name': 'Пушин Кирилл', 'id': 234072372}, {'ava': 'https://pp.userapi.com/c836220/v836220814/6aa97/HMRUVZa_zo8.jpg', 'name': 'Вульф Анна', 'id': 308444447}]
        },
        {name:'Иркутск',n:7,
        users:[{'ava': 'https://pp.userapi.com/c639820/v639820536/99d8/Rr1UPlk9QHo.jpg', 'name': 'Колесников Денис', 'id': 10889536}, {'ava': 'https://pp.userapi.com/c9781/u77272135/e_bd195e7e.jpg', 'name': 'Савельев Александр', 'id': 77272135}, {'ava': 'https://pp.userapi.com/c5946/v5946461/5ff/1PdbPPKlCXo.jpg', 'name': 'Хамируев Владимир', 'id': 89615461}, {'ava': 'https://pp.userapi.com/c637231/v637231155/4d0b2/cEio3Tjuslw.jpg', 'name': 'Киселёва Кристина', 'id': 158993155}, {'ava': 'https://pp.userapi.com/c837722/v837722300/5a663/x9OEyQNvBqI.jpg', 'name': 'Petrus Olesya', 'id': 169705040}, {'ava': 'https://sun9-11.userapi.com/c840630/v840630250/3f28/nuelYMVIiFY.jpg', 'name': 'Замятина Кристина', 'id': 286821109}, {'ava': 'https://pp.userapi.com/c638030/v638030127/2ca2e/b0pqtXgYmQI.jpg', 'name': 'Екимов Никита', 'id': 318214127}]
        },
        {name:'Ишим',n:1,
        users:[{'ava': 'https://pp.userapi.com/c633424/v633424183/74ad/uctABSzupNg.jpg', 'name': 'Гаврилин Евгений', 'id': 339964183}]
        },
        {name:'Йошкар-Ола',n:9,
        users:[{'ava': 'https://sun9-11.userapi.com/c639717/v639717077/423b5/4C8DMg6_kUw.jpg', 'name': 'Томеев Евгений', 'id': 4190694}, {'ava': 'https://pp.userapi.com/c638725/v638725366/656ab/6AfqJ9_W3RM.jpg', 'name': 'Антонов Владимир', 'id': 23796453}, {'ava': 'https://pp.userapi.com/c637527/v637527975/5c9b4/yHXdhquTEL8.jpg', 'name': 'Панов Юрий', 'id': 34478975}, {'ava': 'https://pp.userapi.com/c837538/v837538066/69a6d/ZBiDA1vj6EE.jpg', 'name': 'Бахтин Андрей', 'id': 58673715}, {'ava': 'https://pp.userapi.com/c639226/v639226928/249a9/nacS3R8J4IY.jpg', 'name': 'Войциховский Миша', 'id': 76899928}, {'ava': 'https://pp.userapi.com/c836539/v836539408/4ed42/tw5PJ_9Y58s.jpg', 'name': 'Бердинский Николай', 'id': 217634408}, {'ava': 'https://pp.userapi.com/c837725/v837725516/5a5d7/O1NencubRAw.jpg', 'name': 'Кутдусова Диля', 'id': 284329565}, {'ava': 'https://pp.userapi.com/c836129/v836129025/6efc/OZQ4HYynUhc.jpg', 'name': 'Бутылкин Анатолий', 'id': 391315025}, {'ava': 'https://pp.userapi.com/c836725/v836725790/563e1/Y9mP6f0w87M.jpg', 'name': 'Konstantinova Mila', 'id': 392039440}]
        },
        {name:'Казань',n:21,
        users:[{'ava': 'https://pp.userapi.com/c638626/v638626630/5566f/4YPoXyVJu8A.jpg', 'name': 'Вайсенберг Елена', 'id': 3193536}, {'ava': 'https://pp.userapi.com/c622431/v622431266/48b6e/XuRHtUzrZ3M.jpg', 'name': 'Садыков Ленни', 'id': 3800266}, {'ava': 'https://pp.userapi.com/c639428/v639428492/406f3/SGoAhmVWnSI.jpg', 'name': 'Хисамов Олег', 'id': 9256470}, {'ava': 'https://pp.userapi.com/c837238/v837238558/4915f/Q2MWI9B2YnE.jpg', 'name': 'Мартьянов Антон', 'id': 9742969}, {'ava': 'https://pp.userapi.com/c604324/v604324823/2139a/EVp7nU_tWTY.jpg', 'name': 'Sidorov Oleg', 'id': 10815823}, {'ava': 'https://pp.userapi.com/c409025/v409025069/837/VSS2bKmt054.jpg', 'name': 'Воробьев Юрий', 'id': 19401069}, {'ava': 'https://pp.userapi.com/c638921/v638921728/40340/ekjy0bkXCaw.jpg', 'name': 'Трошина Женя', 'id': 34151728}, {'ava': 'https://pp.userapi.com/c624516/v624516678/2e338/hkWU3f9C-ZY.jpg', 'name': 'Мостяков Дмитрий', 'id': 35389678}, {'ava': 'https://pp.userapi.com/c840430/v840430108/1152/ICcdrrs0Wto.jpg', 'name': 'Idrisova Adelya', 'id': 54299939}, {'ava': 'https://pp.userapi.com/c837623/v837623844/54257/lCC1UQciOUw.jpg', 'name': 'Фазылова Диляра', 'id': 64254496}, {'ava': 'https://pp.userapi.com/c836238/v836238878/488d3/p1zobZyHj5c.jpg', 'name': 'Миназов Ильнур', 'id': 71320878}, {'ava': 'https://pp.userapi.com/c841324/v841324371/724e/sKkMhN0yESU.jpg', 'name': 'Киселёва Оля', 'id': 142584398}, {'ava': 'https://pp.userapi.com/c413922/v413922554/7eb7/4ne9sKlGAJo.jpg', 'name': 'Тимерханов Сергей', 'id': 144837554}, {'ava': 'https://pp.userapi.com/c836634/v836634776/5d5a5/KS70L4xzWjo.jpg', 'name': 'Первякова Ирина', 'id': 162983383}, {'ava': 'https://pp.userapi.com/c841236/v841236011/6311/SrlE38uHoOg.jpg', 'name': 'Мельников Никита', 'id': 173522011}, {'ava': 'https://pp.userapi.com/c305714/u175424448/e_18f13179.jpg', 'name': 'Захаров Сергей', 'id': 175424448}, {'ava': 'https://pp.userapi.com/c841433/v841433422/12d3a/WHjjanXaRE4.jpg', 'name': 'Дятлов Кирилл', 'id': 220565793}, {'ava': 'https://pp.userapi.com/c311322/v311322948/47c1/rzq3084unto.jpg', 'name': 'Сергеев Дмитрий', 'id': 228008948}, {'ava': 'https://pp.userapi.com/c836220/v836220018/48467/FEX67ZufdDA.jpg', 'name': 'Биксин Илья', 'id': 234650555}, {'ava': 'https://pp.userapi.com/c623319/v623319568/f89a/dOkSJKp5yD0.jpg', 'name': 'Газизянова Чулпан', 'id': 244511568}, {'ava': 'https://pp.userapi.com/c836139/v836139166/4d5de/A5w91jv4sSg.jpg', 'name': 'Загидуллин Марат', 'id': 359749674}]
        },
        {name:'Калининград',n:20,
        users:[{'ava': 'https://pp.userapi.com/c836726/v836726451/5f776/chytx7ByfsE.jpg', 'name': 'Мачкова Валерия', 'id': 2313020}, {'ava': 'https://pp.userapi.com/c302408/u3140793/e_b4335395.jpg', 'name': 'Наумик Марина', 'id': 3140793}, {'ava': 'https://pp.userapi.com/c837726/v837726608/3c538/jlTR6mzBaPw.jpg', 'name': 'Томилова Екатерина', 'id': 3290608}, {'ava': 'https://pp.userapi.com/c837427/v837427397/49187/gxVrBdt8er0.jpg', 'name': 'Стецурина Татьяна', 'id': 4162537}, {'ava': 'https://pp.userapi.com/c630431/v630431253/54707/2UkahA5Ofg0.jpg', 'name': 'Боровская Елена', 'id': 4625122}, {'ava': 'https://pp.userapi.com/c840234/v840234350/298d4/7sJtYYUvbmc.jpg', 'name': 'Новлянский Константин', 'id': 4792251}, {'ava': 'https://pp.userapi.com/c841025/v841025469/1c6c7/Sc-w9u5EELo.jpg', 'name': 'Сидоркович Юлия', 'id': 6140386}, {'ava': 'https://pp.userapi.com/c418429/v418429041/ad91/5pcLtzHxQNM.jpg', 'name': 'Машканцев Леонид', 'id': 7635041}, {'ava': 'https://pp.userapi.com/c841021/v841021333/12e27/LkARytnMe08.jpg', 'name': 'Haratyan Mane', 'id': 7875265}, {'ava': 'https://pp.userapi.com/c636930/v636930376/c096/kApY7tQvd5o.jpg', 'name': 'Царицина Арина', 'id': 14149376}, {'ava': 'https://pp.userapi.com/c639620/v639620901/50798/11UECUO5HSg.jpg', 'name': 'Макаева Ирина', 'id': 14733593}, {'ava': 'https://pp.userapi.com/c638126/v638126166/47dce/SngSfmbQVK8.jpg', 'name': 'Гаевская Екатерина', 'id': 46560166}, {'ava': 'https://pp.userapi.com/c836721/v836721244/59fc4/pd5wIo6PTGU.jpg', 'name': 'Киселёв-Капшик Валентин', 'id': 92588373}, {'ava': 'https://pp.userapi.com/c836335/v836335108/a7df/tww7Tr5WmRM.jpg', 'name': 'Коваль Станислав', 'id': 207183108}, {'ava': 'https://pp.userapi.com/c836223/v836223194/20ddd/EphQadLqAoA.jpg', 'name': 'Gatiatyllin Zufar', 'id': 232799194}, {'ava': 'https://pp.userapi.com/c629212/v629212915/32878/2EYuYM0NoYQ.jpg', 'name': 'Вакуленко Ксения', 'id': 279575915}, {'ava': 'https://pp.userapi.com/c637620/v637620531/23dd1/M6__7y6DhA8.jpg', 'name': 'Антонюк Александр', 'id': 294993531}, {'ava': 'https://pp.userapi.com/c630517/v630517411/46087/x8HNvjmKwz8.jpg', 'name': 'Пугач Александр', 'id': 321285411}, {'ava': 'https://pp.userapi.com/c630625/v630625646/37db6/S272LFOB_eE.jpg', 'name': 'Антонюк Григорий', 'id': 328142646}, {'ava': 'https://pp.userapi.com/c837629/v837629096/680e2/-QSmpo4f2iw.jpg', 'name': 'Иванов Алексей', 'id': 411739744}]
        },
        {name:'Калуга',n:10,
        users:[{'ava': 'https://pp.userapi.com/c841038/v841038247/c18a/oFjtvnPyzqE.jpg', 'name': 'Голофтеева Марина', 'id': 3643164}, {'ava': 'https://pp.userapi.com/c836535/v836535708/1355f/xwJ1b6fBjGM.jpg', 'name': 'Половинкин Дмитрий', 'id': 4563708}, {'ava': 'https://pp.userapi.com/c837635/v837635263/143aa/OgWum4cLS2I.jpg', 'name': 'Куликов Александр', 'id': 19191263}, {'ava': 'https://pp.userapi.com/c637817/v637817628/5bd00/vAeoH-NM-y0.jpg', 'name': 'Гришина Анастасия', 'id': 55076165}, {'ava': 'https://pp.userapi.com/c836733/v836733046/6077a/yxBM9ZjH7NI.jpg', 'name': 'Грачева Ангелиша', 'id': 107464579}, {'ava': 'https://pp.userapi.com/c638831/v638831191/5e7e1/Lr2kG39tPv8.jpg', 'name': 'Никитин Никита', 'id': 122976649}, {'ava': 'https://pp.userapi.com/c638816/v638816752/3288b/FzMiiLfLEAQ.jpg', 'name': 'Галуцкая Елена', 'id': 151288752}, {'ava': 'https://pp.userapi.com/c638019/v638019145/520f7/RLAkSTpyhvc.jpg', 'name': 'Тер-Погосян Рудольф', 'id': 155143453}, {'ava': 'https://pp.userapi.com/c637123/v637123258/2040a/GaKXeON4yjk.jpg', 'name': 'Gonzalez Joaquin', 'id': 304018258}, {'ava': 'https://pp.userapi.com/c628617/v628617860/4743e/ZPpcOTr5phk.jpg', 'name': 'Nikitin Daniil', 'id': 344712860}]
        },
        {name:'Кемерово',n:10,
        users:[{'ava': 'https://pp.userapi.com/c638431/v638431111/5cfd7/fvFX3bxbNBs.jpg', 'name': 'Рябухина Катерина', 'id': 11155280}, {'ava': 'https://pp.userapi.com/c837520/v837520893/4c4be/QElVEotwiB4.jpg', 'name': 'Ефремова Танюшка', 'id': 23424893}, {'ava': 'https://pp.userapi.com/c626119/v626119293/6284e/bU_CIAwx9Y8.jpg', 'name': 'Петроченко Алексей', 'id': 39314293}, {'ava': 'https://pp.userapi.com/c314418/v314418952/458e/KgBlrAO5DVs.jpg', 'name': 'Майтаков Сергей', 'id': 40519952}, {'ava': 'https://pp.userapi.com/c638929/v638929711/3e13a/7UXdsqppsdc.jpg', 'name': 'Колесников Жека', 'id': 93037711}, {'ava': 'https://pp.userapi.com/c840136/v840136421/28369/fkC5FERAQ2g.jpg', 'name': 'Клименкова Светлана', 'id': 136671252}, {'ava': 'https://pp.userapi.com/c638930/v638930246/60d6f/sNEcygCrOW8.jpg', 'name': 'Цветко Михаил', 'id': 177855266}, {'ava': 'https://pp.userapi.com/c638126/v638126905/34bb/daYwWzymx3Q.jpg', 'name': 'Санин Владислав', 'id': 196153905}, {'ava': 'https://pp.userapi.com/c837332/v837332048/394b6/FlxZ5TiJIsE.jpg', 'name': 'Коченов Иван', 'id': 217017048}, {'ava': 'https://pp.userapi.com/c630830/v630830353/2664e/3gwRuAgOGYo.jpg', 'name': 'Байков Петр', 'id': 345375353}]
        },
        {name:'Киров',n:11,
        users:[{'ava': 'https://pp.userapi.com/c629125/v629125930/110b8/8ULT1GNF28Y.jpg', 'name': 'Горячевская Анастасия', 'id': 2282930}, {'ava': 'https://pp.userapi.com/c639425/v639425313/55647/Mt-oyEL9KUk.jpg', 'name': 'Колобов Олег', 'id': 3255133}, {'ava': 'https://pp.userapi.com/c837124/v837124455/5269e/qBApPNNwxy4.jpg', 'name': 'Матушкина Елена', 'id': 16492635}, {'ava': 'https://pp.userapi.com/c629424/v629424698/12ec8/_SnvSLGRYx0.jpg', 'name': 'Микрюкова Виктория', 'id': 20508698}, {'ava': 'https://pp.userapi.com/c620620/v620620271/7ba5/fwfu_FW1B3g.jpg', 'name': 'Куклин Алексей', 'id': 30861271}, {'ava': 'https://pp.userapi.com/c620228/v620228711/1182/8qBpsDacIUk.jpg', 'name': 'Чайников Владимир', 'id': 58390711}, {'ava': 'https://pp.userapi.com/c638319/v638319194/49304/YA5z0tfgYQw.jpg', 'name': 'Емельянов Станислав', 'id': 68339194}, {'ava': 'https://pp.userapi.com/c636425/v636425898/5dd93/KMEBJMJ7LRA.jpg', 'name': 'Казакова Анастасия', 'id': 69012898}, {'ava': 'https://pp.userapi.com/c638821/v638821960/51e01/FU1kGxbyWJs.jpg', 'name': 'Гущин Николай', 'id': 146068884}, {'ava': 'https://pp.userapi.com/c638031/v638031817/4a84/fGsmwFWuSNw.jpg', 'name': 'Хаустов Сёма', 'id': 180924817}, {'ava': 'https://pp.userapi.com/c639329/v639329455/1230f6/zRxe7fk_tx0.jpg', 'name': 'Митенёв Юрий', 'id': 186546271}]
        },
        {name:'Кисловодск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c9898/u141983076/e_66f23556.jpg', 'name': 'Олегович Андрей', 'id': 141983076}, {'ava': 'https://pp.userapi.com/c604430/v604430468/43e28/HfDyKlR3XCw.jpg', 'name': 'Александров Александр', 'id': 154267468}, {'ava': 'https://pp.userapi.com/c620221/v620221999/187d8/VUooSW2WicQ.jpg', 'name': 'Букреева Надежда', 'id': 194353999}, {'ava': 'https://pp.userapi.com/c604520/v604520500/38810/tYF7pQOYiXs.jpg', 'name': 'Газаев Мурат', 'id': 297262500}]
        },
        {name:'Ковров',n:4,
        users:[{'ava': 'https://pp.userapi.com/c638521/v638521615/40e0/L0wCs1_elTQ.jpg', 'name': 'Тожокин Дмитрий', 'id': 3309615}, {'ava': 'https://pp.userapi.com/c621700/v621700986/3fae/69kUzdzHBrU.jpg', 'name': 'Ковров Денис', 'id': 4773537}, {'ava': 'https://pp.userapi.com/c837629/v837629612/41234/HOqQwE0No7U.jpg', 'name': 'Крутов Евгений', 'id': 270646612}, {'ava': 'https://pp.userapi.com/c841620/v841620576/100d2/K_Dnt-kL7gY.jpg', 'name': 'Киреева Лада', 'id': 283962443}]
        },
        {name:'Коломна',n:6,
        users:[{'ava': 'https://pp.userapi.com/c841322/v841322030/2d19/bvZsEJxul4Q.jpg', 'name': 'Кузнецова Валентина', 'id': 5610030}, {'ava': 'https://pp.userapi.com/c5501/v5501365/4ba/1hcf-eIBowY.jpg', 'name': 'Кузьмина Марина', 'id': 21113365}, {'ava': 'https://pp.userapi.com/c639316/v639316342/43396/QL0Zmtw4luM.jpg', 'name': 'Свиденцева Наталия', 'id': 29440051}, {'ava': 'https://pp.userapi.com/c841327/v841327716/3ebb/j8UEgC22TCs.jpg', 'name': 'Чернышов Сергей', 'id': 64326716}, {'ava': 'https://pp.userapi.com/c626227/v626227917/64f19/TAj4eek1eC0.jpg', 'name': 'Чернышов Алексей', 'id': 158919917}, {'ava': 'https://pp.userapi.com/c837130/v837130414/4a53c/G3h6FoIb9xM.jpg', 'name': 'Домбровский Артем', 'id': 270607734}]
        },
        {name:'Комсомольск-на-Амуре',n:2,
        users:[{'ava': 'https://pp.userapi.com/c637518/v637518638/56930/pPQ8aqx8HQw.jpg', 'name': 'Артемьева Уля', 'id': 265718638}, {'ava': 'https://pp.userapi.com/c637126/v637126670/459b1/YOzic1TotkY.jpg', 'name': 'Боброва Анастасия', 'id': 329025670}]
        },
        {name:'Кострома',n:5,
        users:[{'ava': 'https://pp.userapi.com/c630926/v630926921/3cbd7/UXgyN7vrT4c.jpg', 'name': 'Гребенщиков Андрей', 'id': 4110921}, {'ava': 'https://pp.userapi.com/c637231/v637231783/5d1cc/Yojt_iHLr4o.jpg', 'name': 'Меньшенин Вадим', 'id': 138417783}, {'ava': 'https://pp.userapi.com/c841335/v841335854/18549/_3JHRKz-n3U.jpg', 'name': 'Асланян Лилит', 'id': 180145075}, {'ava': 'https://pp.userapi.com/c626121/v626121483/6722f/XMRKabUgQjM.jpg', 'name': 'Соколова Елена', 'id': 235241483}, {'ava': 'https://pp.userapi.com/c623923/v623923242/12cdf/CNt89HUvRCA.jpg', 'name': 'Козлов Николай', 'id': 285821242}]
        },
        {name:'Краснодар',n:34,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Олегович Андрей', 'id': 3961155}, {'ava': 'https://pp.userapi.com/c837538/v837538563/305b7/sXSgc5Jj_yI.jpg', 'name': 'Меркулов Андрей', 'id': 4239563}, {'ava': 'https://pp.userapi.com/c637827/v637827211/26329/KqKewkTI91s.jpg', 'name': 'Давыдов Александр', 'id': 6418211}, {'ava': 'https://pp.userapi.com/c840232/v840232256/49527/DUmAZ1ZTd44.jpg', 'name': 'Нагорная Ксения', 'id': 8834307}, {'ava': 'https://pp.userapi.com/c638328/v638328449/61acb/E2mEltByqU4.jpg', 'name': 'Суслина Наталья', 'id': 13646063}, {'ava': 'https://pp.userapi.com/c631226/v631226280/437db/aJFiO91e5OA.jpg', 'name': 'Nosenko Anastasiya', 'id': 18402280}, {'ava': 'https://pp.userapi.com/c637131/v637131293/4d4cb/q6-VS0qUs04.jpg', 'name': 'Косенко Сергей', 'id': 26943293}, {'ava': 'https://pp.userapi.com/c638016/v638016352/22479/niRe53NQZlw.jpg', 'name': 'Круглов Андрей', 'id': 29803352}, {'ava': 'https://pp.userapi.com/c837327/v837327939/49d7e/-AcBytwow04.jpg', 'name': 'Назаренко Ассоль', 'id': 31710977}, {'ava': 'https://pp.userapi.com/c841230/v841230868/106cf/irgbaU1VpyA.jpg', 'name': 'Бойко Ирина', 'id': 34320490}, {'ava': 'https://pp.userapi.com/c638729/v638729067/70857/S3tHPetYs4I.jpg', 'name': 'Соколова Юлия', 'id': 85397067}, {'ava': 'https://pp.userapi.com/c639222/v639222025/3bbb0/5ZwY7IdE20U.jpg', 'name': 'Walker Sky', 'id': 90300612}, {'ava': 'https://pp.userapi.com/c637317/v637317740/67ee4/bDwNtrqvyDw.jpg', 'name': 'Морозов Кирилл', 'id': 107484740}, {'ava': 'https://pp.userapi.com/c837132/v837132244/46b2c/uxnDhxIrMOs.jpg', 'name': 'Демина Инга', 'id': 126739303}, {'ava': 'https://pp.userapi.com/c837624/v837624865/31337/S3kJKBPQ4tQ.jpg', 'name': 'Боднар Лена', 'id': 141437865}, {'ava': 'https://pp.userapi.com/c638717/v638717479/5d023/xFN-lJK7F40.jpg', 'name': 'Буланова Елена', 'id': 149428700}, {'ava': 'https://pp.userapi.com/c638521/v638521640/5943f/JSwBySdgOZ4.jpg', 'name': 'Свидовская Оля', 'id': 156563617}, {'ava': 'https://pp.userapi.com/c840429/v840429606/74ee/Xsaws8xLzbc.jpg', 'name': 'Прус Аня', 'id': 181373208}, {'ava': 'https://pp.userapi.com/c837239/v837239483/68113/I7DokJujbqs.jpg', 'name': 'Di Konstantin', 'id': 191728483}, {'ava': 'https://pp.userapi.com/c633124/v633124312/1dc26/8wi_jJdO3vg.jpg', 'name': 'Исаев Юрий', 'id': 205331312}, {'ava': 'https://pp.userapi.com/c639817/v639817759/3fbf1/PDE8mLWR3Zw.jpg', 'name': 'Костян Катя', 'id': 214489599}, {'ava': 'https://sun9-11.userapi.com/c840137/v840137110/23fb6/6i3Oxp6Dd8Y.jpg', 'name': 'Волков Денис', 'id': 225866850}, {'ava': 'https://pp.userapi.com/c627119/v627119664/2cf6b/3kdDlTsL_64.jpg', 'name': 'Гуревич Максим', 'id': 234526664}, {'ava': 'https://pp.userapi.com/c836332/v836332279/605ea/G7bGk_H5osY.jpg', 'name': 'Саклаков Михаил', 'id': 235865220}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Квестор Иосиф', 'id': 250546111}, {'ava': 'https://pp.userapi.com/c617621/v617621128/62a9/uFm_auirRno.jpg', 'name': 'Натальченко Александр', 'id': 269581128}, {'ava': 'https://pp.userapi.com/c841131/v841131637/16556/YuxFbtStDPI.jpg', 'name': 'Алексеевич Сергей', 'id': 288367741}, {'ava': 'https://pp.userapi.com/c637823/v637823371/f26a/cLLVeTmECBc.jpg', 'name': 'Скорик Катерина', 'id': 288513371}, {'ava': 'https://pp.userapi.com/c836626/v836626982/3b707/Fymq7F24Cxs.jpg', 'name': 'Шевченко Алексей', 'id': 291508982}, {'ava': 'https://pp.userapi.com/c638520/v638520529/4b039/Qx22fgy3gF0.jpg', 'name': 'Шумилов Алексей', 'id': 300939529}, {'ava': 'https://pp.userapi.com/c639317/v639317401/30cdd/UqeraTeuLZ0.jpg', 'name': 'Aleksenko Danil', 'id': 317063460}, {'ava': 'https://pp.userapi.com/c636321/v636321664/5d9ce/jwM4DUjOfk4.jpg', 'name': 'Тихий Тихон', 'id': 367702664}, {'ava': 'https://pp.userapi.com/c638816/v638816124/65422/LnaGcLiLyF0.jpg', 'name': 'Kaiv Dairin', 'id': 399774077}, {'ava': 'https://sun9-11.userapi.com/c840628/v840628896/7011/ZgQznnCk2Zk.jpg', 'name': 'Kirova Anastasia', 'id': 402715728}]
        },
        {name:'Красноярск',n:9,
        users:[{'ava': 'https://pp.userapi.com/c836227/v836227514/5eaa0/Mt8M4aeA2sc.jpg', 'name': 'Корейша Владимир', 'id': 9178141}, {'ava': 'https://pp.userapi.com/c841620/v841620830/1f41a/oV6k3Tvaifg.jpg', 'name': 'Терещенко Дмитрий', 'id': 10002770}, {'ava': 'https://pp.userapi.com/c841629/v841629520/1a04c/r4jVgBIKPf4.jpg', 'name': 'Антошин Илья', 'id': 15168900}, {'ava': 'https://pp.userapi.com/c637925/v637925402/490c7/Xt8j6XvXHlk.jpg', 'name': 'Козловский Артём', 'id': 27279402}, {'ava': 'https://pp.userapi.com/c631518/v631518964/4d66c/mtMytEn9_JU.jpg', 'name': 'Гаряев Иван', 'id': 27657964}, {'ava': 'https://pp.userapi.com/c406117/v406117033/1180a/rpXKF3DKwiI.jpg', 'name': 'Шудров Андрей', 'id': 29477033}, {'ava': 'https://pp.userapi.com/c639325/v639325610/3f2f7/Q2_fP4wJFm4.jpg', 'name': 'Строков Александр', 'id': 41213792}, {'ava': 'https://pp.userapi.com/c837638/v837638079/612f0/DwLWBhz-4Wg.jpg', 'name': 'Фрадено Ян', 'id': 197252094}, {'ava': 'https://pp.userapi.com/c418225/v418225959/62b3/akHt9YPqGuY.jpg', 'name': 'Анисимов Юрий', 'id': 221417959}]
        },
        {name:'Курган',n:4,
        users:[{'ava': 'https://pp.userapi.com/c315716/v315716808/ee52/dnFxxdhqkqU.jpg', 'name': 'Галямин Евгений', 'id': 66874808},{'ava': 'https://pp.userapi.com/c840220/v840220127/25196/DQSbASBYbso.jpg', 'name': 'Шестаков Николай', 'id': 21856423}, {'ava': 'https://pp.userapi.com/c631323/v631323125/37e53/mW3Di0sbnXI.jpg', 'name': 'Николаев Николай', 'id': 44222125}, {'ava': 'https://pp.userapi.com/c638121/v638121732/5cfff/iaUxY9bgYJc.jpg', 'name': 'Паклин Михаил', 'id': 178153538}]
        },
        {name:'Курск',n:9,
        users:[{'ava': 'https://pp.userapi.com/c840027/v840027950/2aad6/Q8yEeyTuEIY.jpg', 'name': 'Лыков Михаил', 'id': 11296687}, {'ava': 'https://pp.userapi.com/c639325/v639325708/48fa3/DoRg34EpOEg.jpg', 'name': 'Подлесных Екатерина', 'id': 107834709}, {'ava': 'https://pp.userapi.com/c636128/v636128075/1e29/0BTf_dyD2mA.jpg', 'name': 'Банчуков Александр', 'id': 113807075}, {'ava': 'https://pp.userapi.com/c637825/v637825101/35699/wjp4j5ENyK8.jpg', 'name': 'Латыш Николай', 'id': 146968101}, {'ava': 'https://pp.userapi.com/c638128/v638128299/5e70f/eIpD9Uc7qBw.jpg', 'name': 'Калуцких Владимир', 'id': 176211770}, {'ava': 'https://pp.userapi.com/c841030/v841030863/746c/y3-2GBKeXXk.jpg', 'name': 'Михеев Владислав', 'id': 210910863}, {'ava': 'https://pp.userapi.com/c836127/v836127587/5e667/iBV7TM4ZcE4.jpg', 'name': 'Дрёмин Сергей', 'id': 224361435}, {'ava': 'https://pp.userapi.com/c638825/v638825934/1a0d7/hF0iVWjLpjM.jpg', 'name': 'Куржупова Маша', 'id': 358507934}, {'ava': 'https://pp.userapi.com/c637523/v637523610/56330/wpt3TpqQcRI.jpg', 'name': 'Кошечкина Маша', 'id': 364344610}]
        },
        {name:'Липецк',n:11,
        users:[{'ava': 'https://pp.userapi.com/c639231/v639231711/50dac/m5osoGoy4pg.jpg', 'name': 'Солдатова Елена', 'id': 356178}, {'ava': 'https://pp.userapi.com/c637429/v637429817/d004/bdY2LU7T5hY.jpg', 'name': 'Железняков Артем', 'id': 6734817}, {'ava': 'https://pp.userapi.com/c836333/v836333414/5fb84/mhF3aEz_aIw.jpg', 'name': 'Насонова Екатерина', 'id': 40221876}, {'ava': 'https://pp.userapi.com/c639320/v639320785/3a20d/kTXl2_l-huI.jpg', 'name': 'Никитин Юрий', 'id': 46616527}, {'ava': 'https://pp.userapi.com/c626726/v626726847/233d5/f5cQk9r9sWs.jpg', 'name': 'Миронов Андрей', 'id': 94633847}, {'ava': 'https://pp.userapi.com/c837432/v837432761/4a1f7/1YlsE56bmuQ.jpg', 'name': 'Иванов Андрей', 'id': 116180236}, {'ava': 'https://pp.userapi.com/c620825/v620825498/67d7/lOiM1xc_Lf8.jpg', 'name': 'Фокс Алексей', 'id': 159710498}, {'ava': 'https://pp.userapi.com/c836321/v836321869/560a9/Vgwf4hwPqKs.jpg', 'name': 'Климченков Сергей', 'id': 203847090}, {'ava': 'https://pp.userapi.com/c638621/v638621111/4934b/PvtsYZXIekE.jpg', 'name': 'Baskakova Sofya', 'id': 300122111}, {'ava': 'https://pp.userapi.com/c836733/v836733055/71dd7/Dpdf9D27MNA.jpg', 'name': 'Белотелова Галина', 'id': 326835108}, {'ava': 'https://pp.userapi.com/c637529/v637529938/6e04d/PpzHgeswSps.jpg', 'name': 'Капустин Игорь', 'id': 357425938}]
        },
        {name:'Люберцы',n:4,
        users:[{'ava': 'https://pp.userapi.com/c409820/v409820038/ace3/MDHi-Y6nb_I.jpg', 'name': 'Воронина Вероника', 'id': 6919038}, {'ava': 'https://pp.userapi.com/c836733/v836733171/3c572/qgWRnQbPvQE.jpg', 'name': 'Гареев Руслан', 'id': 9482171}, {'ava': 'https://pp.userapi.com/c837538/v837538080/54e72/ZZgl1rUTemc.jpg', 'name': 'Фитисова Юлия', 'id': 31518771}, {'ava': 'https://pp.userapi.com/c837421/v837421405/1bc45/nmHweb2Y7vw.jpg', 'name': 'Комлева Елена', 'id': 272017405}]
        },
        {name:'Магадан',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836337/v836337816/48ae3/iLU1PBt7BUw.jpg', 'name': 'Перкова Мария', 'id': 635607}]
        },
        {name:'Магнитогорск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c149/v149955/9bc/Xnez3wQeN0E.jpg', 'name': 'Алексеева Альбина', 'id': 14791955}, {'ava': 'https://pp.userapi.com/c638430/v638430770/4bc82/fZKgI_nzo8k.jpg', 'name': 'Феоктистов Михаил', 'id': 95762770}, {'ava': 'https://pp.userapi.com/c636024/v636024609/2e4d9/4tZtAQP5K4E.jpg', 'name': 'Мизинов Василий', 'id': 125353609}, {'ava': 'https://pp.userapi.com/c622930/v622930906/21975/wCBar2FW2Ok.jpg', 'name': 'Затонская Надежда', 'id': 216304906}]
        },
        {name:'Майкоп',n:3,
        users:[{'ava': 'https://pp.userapi.com/c604521/v604521302/1313/-WmAs2rbUCk.jpg', 'name': 'Овчинников Роман', 'id': 216286302}, {'ava': 'https://pp.userapi.com/c837526/v837526121/4ed70/MuDdzIIZY4A.jpg', 'name': 'Владимирович Владимир', 'id': 316572326}, {'ava': 'https://pp.userapi.com/c841530/v841530721/1f465/91YFRJliyuM.jpg', 'name': 'Малина Кира', 'id': 427888639}]
        },
        {name:'Махачкала',n:2,
        users:[{'ava': 'https://pp.userapi.com/c10812/u117871901/e_47fa74cc.jpg', 'name': 'Магомедов Магомед', 'id': 117871901}, {'ava': 'https://pp.userapi.com/c637717/v637717528/3f3b0/X-2biEJwJX4.jpg', 'name': 'Оспанов Арсен', 'id': 420781528}]
        },
        {name:'Мичуринск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639120/v639120996/205d3/TzjxSm3gfvY.jpg', 'name': 'Павленко Люба', 'id': 86527996}]
        },
        {name:'Мурманск',n:22,
        users:[{'ava': 'https://pp.userapi.com/c637517/v637517703/2baab/b7mfrbiJOfM.jpg', 'name': 'Ра Дмитрий', 'id': 1067703}, {'ava': 'https://pp.userapi.com/c604530/v604530850/4620a/mkpq0ymSvLA.jpg', 'name': 'Плисова Светлана', 'id': 1236089}, {'ava': 'https://pp.userapi.com/c639623/v639623273/44876/Y7h6OopLAYo.jpg', 'name': 'Геращенко Оксана', 'id': 1599022}, {'ava': 'https://pp.userapi.com/c841227/v841227558/1c4cf/JJwDmttIHnU.jpg', 'name': 'Калашников Андрей', 'id': 1706220}, {'ava': 'https://pp.userapi.com/c836121/v836121004/6f6d0/AHcncxUZhsg.jpg', 'name': 'Ласенко Александр', 'id': 1738602}, {'ava': 'https://pp.userapi.com/c637621/v637621336/5d521/XbwxbqQrYAw.jpg', 'name': 'Удалая Марина', 'id': 10179844}, {'ava': 'https://pp.userapi.com/c624628/v624628854/58c92/lOFUQ8wnqy4.jpg', 'name': 'Ермохина Татьяна', 'id': 17957592}, {'ava': 'https://pp.userapi.com/c621718/v621718426/3634d/M2ArIvGCC7Q.jpg', 'name': 'Нагорный Иван', 'id': 20233426}, {'ava': 'https://pp.userapi.com/c841237/v841237592/16d76/3XDirPrioQ0.jpg', 'name': 'Артимонова Наталья', 'id': 32437464}, {'ava': 'https://sun9-11.userapi.com/c840534/v840534820/6abb/86DowD8xcAc.jpg', 'name': 'Руднянский Дмитрий', 'id': 32706332}, {'ava': 'https://pp.userapi.com/c639327/v639327037/5b026/cvNaU_2xz4g.jpg', 'name': 'Ждунов Эдуард', 'id': 47461915}, {'ava': 'https://pp.userapi.com/c841332/v841332090/1a1a3/BKCQv7n3q7Q.jpg', 'name': 'Нефедовская Инка', 'id': 56230879}, {'ava': 'https://pp.userapi.com/c627222/v627222440/4a9a5/Yrtyxv5nyhc.jpg', 'name': 'Кошкина Наталья', 'id': 61773440}, {'ava': 'https://pp.userapi.com/c604324/v604324529/504de/DT7oMDQ7IjY.jpg', 'name': 'Платонов Александр', 'id': 89947529}, {'ava': 'https://pp.userapi.com/c836533/v836533682/29f1d/FrVTACnM6JY.jpg', 'name': 'Кузавков Виталий', 'id': 96678682}, {'ava': 'https://pp.userapi.com/c604821/v604821250/6c05/yKtsP3OpeYw.jpg', 'name': 'Кохан Марина', 'id': 99212250}, {'ava': 'https://pp.userapi.com/c837530/v837530927/55d66/AD_p21rowcg.jpg', 'name': 'Каштанова Анастасия', 'id': 120948213}, {'ava': 'https://pp.userapi.com/c837338/v837338683/58ec0/dEbxxrUQBBs.jpg', 'name': 'Север Роман', 'id': 148952904}, {'ava': 'https://pp.userapi.com/c836637/v836637569/628e6/z9qgPS45ayA.jpg', 'name': 'Духовников Илья', 'id': 191957230}, {'ava': 'https://pp.userapi.com/c836634/v836634975/46120/xYqXPn7iMEA.jpg', 'name': 'Aleksandrovna Anna', 'id': 213347943}, {'ava': 'https://pp.userapi.com/c841028/v841028034/20259/QAakQOsWdOA.jpg', 'name': 'Пищаскин Андрей', 'id': 228132117}, {'ava': 'https://pp.userapi.com/c621705/v621705952/1d28a/SZfJ2ttiRrw.jpg', 'name': 'Паныч Ира', 'id': 376661859}]
        },
        {name:'Набережные Челны',n:14,
        users:[{'ava': 'https://pp.userapi.com/c836131/v836131970/5ec00/bLy3pUgch5o.jpg', 'name': 'Янгиров Вадим', 'id': 5575081}, {'ava': 'https://pp.userapi.com/c840435/v840435248/3e8b/3S3Lgtn9fGI.jpg', 'name': 'Киреев Артур', 'id': 6290687}, {'ava': 'https://pp.userapi.com/c627123/v627123676/4327c/3PrUxBzeXDY.jpg', 'name': 'Тут Ильдар', 'id': 7547676}, {'ava': 'https://pp.userapi.com/c639320/v639320967/223b8/my5k4MFn08k.jpg', 'name': 'Мугинов Айдар', 'id': 17688967}, {'ava': 'https://pp.userapi.com/c626825/v626825275/573a5/b6I8RLOpZss.jpg', 'name': 'Хуснуллин Руслан', 'id': 33565275}, {'ava': 'https://pp.userapi.com/c631521/v631521554/37a04/eRBh9Lj8f4U.jpg', 'name': 'Иванов Иван', 'id': 36596554}, {'ava': 'https://pp.userapi.com/c622724/v622724260/3bc0e/5Vs1-l0raDI.jpg', 'name': 'Набиуллин Айдар', 'id': 87230260}, {'ava': 'https://vk.com/images/camera_50.png', 'name': "Garipov Il'nar", 'id': 106354965}, {'ava': 'https://pp.userapi.com/c604429/v604429118/23ad7/hf5FHc-514M.jpg', 'name': 'Фазлыев Азат', 'id': 109534118}, {'ava': 'https://pp.userapi.com/c638719/v638719366/5972f/uouE2bgxSHg.jpg', 'name': 'M-галеев Руслан', 'id': 142541848}, {'ava': 'https://pp.userapi.com/c621703/v621703609/22a3/F3si2eoP5ro.jpg', 'name': 'Сухановский Сергей', 'id': 153655609}, {'ava': 'https://pp.userapi.com/c604329/v604329265/19a64/g-KxdjSWg7o.jpg', 'name': 'Фесик Алексей', 'id': 198067265}, {'ava': 'https://pp.userapi.com/c636917/v636917650/3aff6/UjiN0Ukg280.jpg', 'name': 'Фардиева Самира', 'id': 331534650}, {'ava': 'https://pp.userapi.com/c836533/v836533253/5d7eb/Fc4diTmJZZ8.jpg', 'name': 'Кырганов Вадим', 'id': 337286977}]
        },
        {name:'Нальчик',n:3,
        users:[{'ava': 'https://pp.userapi.com/c638920/v638920205/5f0b2/wgAgfl--8l8.jpg', 'name': 'Крючкова Александра', 'id': 75173989}, {'ava': 'https://pp.userapi.com/c841531/v841531068/1aac9/fnxXWuApbwg.jpg', 'name': 'Бекулов Ахмед', 'id': 144647660}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Боренов Асланбек', 'id': 218874196}]
        },
        {name:'Невинномысск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639523/v639523902/3f032/8z-IloCVtEs.jpg', 'name': 'Изотова Анастасия', 'id': 277274386}, {'ava': 'https://pp.userapi.com/c636520/v636520663/6a31e/D_9q_ZM29y8.jpg', 'name': 'Savina Anastasia', 'id': 375129987}]
        },
        {name:'Нижневартовск',n:5,
        users:[{'ava': 'https://pp.userapi.com/c411031/v411031073/7579/ql-wTAnIaLw.jpg', 'name': 'Валюкевич Славомир', 'id': 16087073}, {'ava': 'https://pp.userapi.com/c639727/v639727958/43f7f/XPpB505b_sM.jpg', 'name': 'Крашенинников Андрей', 'id': 41722425}, {'ava': 'https://pp.userapi.com/c638231/v638231860/5de96/GJVPzQ6Z360.jpg', 'name': 'Кульпин Сергей', 'id': 140609721}, {'ava': 'https://pp.userapi.com/c639818/v639818226/20eab/INrb79Jg9Js.jpg', 'name': 'Ильичев Александр', 'id': 203411226}, {'ava': 'https://pp.userapi.com/c836624/v836624164/59b8c/aOprl75XE7k.jpg', 'name': 'Болячкин Николай', 'id': 267662129}]
        },
        {name:'Нижнекамск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c633831/v633831560/36c0b/pCuQbcJDadU.jpg', 'name': 'Валова Елена', 'id': 26218560}, {'ava': 'https://pp.userapi.com/c631324/v631324501/4cf20/AKMCVq7jF3E.jpg', 'name': 'Герасимова Вера', 'id': 193097501}]
        },
        {name:'Нижний Новгород',n:39,
        users:[{'ava': 'https://pp.userapi.com/c841133/v841133098/1e71d/xML0vAsNP18.jpg', 'name': 'Груздева Ольга', 'id': 640355}, {'ava': 'https://pp.userapi.com/c622220/v622220187/4602/BoKZrH0Rmps.jpg', 'name': 'Конюченко Алексей', 'id': 1199187}, {'ava': 'https://pp.userapi.com/c625122/v625122875/46ee/jE_lANWko-A.jpg', 'name': 'Королев Роман', 'id': 2793875}, {'ava': 'https://pp.userapi.com/c638217/v638217289/56d89/s4C1GPmjTiQ.jpg', 'name': 'Шишкова Анна', 'id': 3621289}, {'ava': 'https://pp.userapi.com/c9567/u6136053/e_205abf5f.jpg', 'name': 'Еллиев Ефрем', 'id': 6136053}, {'ava': 'https://pp.userapi.com/c626217/v626217765/27ad5/ae4oUGtxWao.jpg', 'name': 'Конюченко Наташа', 'id': 7208765}, {'ava': 'https://pp.userapi.com/c11350/u8128444/e_7a06677f.jpg', 'name': 'Богаткина Ольга', 'id': 8128444}, {'ava': 'https://pp.userapi.com/c617729/v617729893/ece6/icMvqYYn9bQ.jpg', 'name': 'Кусакина Наташа', 'id': 8575893}, {'ava': 'https://pp.userapi.com/c837236/v837236866/15e6e/-p2AzVfwVqY.jpg', 'name': 'Якимюк Артем', 'id': 9500866}, {'ava': 'https://pp.userapi.com/c841625/v841625315/d10b/2mZowyLmpEE.jpg', 'name': 'Крейчик Оля', 'id': 9768961}, {'ava': 'https://pp.userapi.com/c639920/v639920311/adb/wkQpY5OOkbA.jpg', 'name': 'Babushkina Lera', 'id': 12923311}, {'ava': 'https://pp.userapi.com/c627122/v627122244/2a89b/KcaWlTmMa-I.jpg', 'name': 'Лушкин Сергей', 'id': 13027244}, {'ava': 'https://pp.userapi.com/c617420/v617420827/25c31/83oVa2dlZXk.jpg', 'name': 'Grigorian Akob', 'id': 13826827}, {'ava': 'https://pp.userapi.com/c639129/v639129164/1ad10/zaqb0IsrUCE.jpg', 'name': 'Чалышев Илья', 'id': 21160164}, {'ava': 'https://pp.userapi.com/c636430/v636430830/4a062/_J1C3TMMjSU.jpg', 'name': 'Серебрякова Алёна', 'id': 21625830}, {'ava': 'https://pp.userapi.com/c604516/v604516659/1fef9/hw24CZt_2aA.jpg', 'name': 'Назаровская Евгения', 'id': 23503659}, {'ava': 'https://pp.userapi.com/c836736/v836736496/676d9/350tTFVeLg8.jpg', 'name': 'Smirnova Mariya', 'id': 25840819}, {'ava': 'https://pp.userapi.com/c639224/v639224872/397c7/Ml9kL2B1oD8.jpg', 'name': 'Тимин Павел', 'id': 29248092}, {'ava': 'https://pp.userapi.com/c639231/v639231786/4c266/3iuJvNYpuPc.jpg', 'name': 'Чивкунова Наталья', 'id': 31074915}, {'ava': 'https://pp.userapi.com/c840122/v840122271/24465/WF0xTcRJ2t0.jpg', 'name': 'Великий Дмитрий', 'id': 37305705}, {'ava': 'https://pp.userapi.com/c840127/v840127347/1909d/AlczS1_xeeI.jpg', 'name': 'Салтыков Максим', 'id': 47832301}, {'ava': 'https://pp.userapi.com/c633531/v633531351/f345/Xwkqv0SRby4.jpg', 'name': 'Фатькин Илья', 'id': 53094351}, {'ava': 'https://pp.userapi.com/c837337/v837337765/633eb/g8IfeWsRfxg.jpg', 'name': 'Масеев Владимир', 'id': 75645765}, {'ava': 'https://pp.userapi.com/c10947/u105448162/e_1f3fefd1.jpg', 'name': 'Жуков Андрей', 'id': 105448162}, {'ava': 'https://pp.userapi.com/c837421/v837421473/21004/gXUwIqoPTkg.jpg', 'name': 'Хейфец Максим', 'id': 130890473}, {'ava': 'https://pp.userapi.com/c840436/v840436331/6e94/UCuFaMbJjc0.jpg', 'name': 'Пархоменко Лена', 'id': 147278044}, {'ava': 'https://pp.userapi.com/c836326/v836326310/393ba/eXQJB4vzEPI.jpg', 'name': 'Булаева Вероника', 'id': 157353310}, {'ava': 'https://pp.userapi.com/c622316/v622316384/1c51d/QzLZB-Ua7Kc.jpg', 'name': 'Katina Olga', 'id': 160577384}, {'ava': 'https://pp.userapi.com/c836136/v836136955/5d2fc/QX0g7VHfzxg.jpg', 'name': 'Бо Игорь', 'id': 173183258}, {'ava': 'https://pp.userapi.com/c621730/v621730317/3dd8a/RmGgquhud58.jpg', 'name': 'Корепанов Дмитрий', 'id': 179612317}, {'ava': 'https://pp.userapi.com/c840138/v840138258/1d755/VCX5f_D71mg.jpg', 'name': 'Булавин Олег', 'id': 181251857}, {'ava': 'https://pp.userapi.com/c836134/v836134336/504e9/f_jKIWvEijY.jpg', 'name': 'Орлов Егор', 'id': 224417469}, {'ava': 'https://pp.userapi.com/c625524/v625524369/1d2f/Y7Ysuv7oGq0.jpg', 'name': 'Паникаров Сергей', 'id': 264993369}, {'ava': 'https://pp.userapi.com/c638919/v638919698/24717/8z3ttNIff80.jpg', 'name': 'Молодецкий Алексей', 'id': 301836698}, {'ava': 'https://pp.userapi.com/c637919/v637919879/50b0a/2sotPpfjHz8.jpg', 'name': 'Кузнецов Дима', 'id': 318324879}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Стайерович Марафон', 'id': 343055988}, {'ava': 'https://sun9-11.userapi.com/c837537/v837537841/52020/02s-MLIdlDI.jpg', 'name': 'Sadullaev Ravshan', 'id': 395879539}, {'ava': 'https://pp.userapi.com/c638523/v638523355/29c4d/jWj4fykgr7o.jpg', 'name': 'Богачев Тимур', 'id': 401427355}, {'ava': 'https://pp.userapi.com/c638322/v638322114/53e7e/BL7Bhr9VJkc.jpg', 'name': 'Дулепов Николай', 'id': 436468114}]
        },
        {name:'Нижний Тагил',n:8,
        users:[{'ava': 'https://pp.userapi.com/c604726/v604726652/729ec/_knyttV1MlY.jpg', 'name': 'Мусатова Елена', 'id': 8660652}, {'ava': 'https://pp.userapi.com/c626523/v626523817/55103/NENZc-1TiS4.jpg', 'name': 'Медведев Петр', 'id': 19641817}, {'ava': 'https://pp.userapi.com/c836122/v836122007/5591a/fHvJqB-rWJw.jpg', 'name': 'Бабайлов Евгений', 'id': 41930288}, {'ava': 'https://pp.userapi.com/c637423/v637423878/3df51/pYHON_EmQNA.jpg', 'name': 'Захарова Елена', 'id': 68723878}, {'ava': 'https://pp.userapi.com/c626120/v626120683/5bf8a/gHnQgRBgbJM.jpg', 'name': 'Маслов Антон', 'id': 98839683}, {'ava': 'https://pp.userapi.com/c626226/v626226930/689c1/A5twc4Orcv0.jpg', 'name': 'Nt Forward', 'id': 163599930}, {'ava': 'https://pp.userapi.com/c639219/v639219469/5ad78/28Dka_EugQw.jpg', 'name': 'Бабина Наталия', 'id': 231244264}, {'ava': 'https://pp.userapi.com/c616122/v616122983/1e524/l9sfdzcGWrM.jpg', 'name': 'My Dusha', 'id': 261252983}]
        },
        {name:'Новокузнецк',n:3,
        users:[{'ava': 'https://pp.userapi.com/c840237/v840237456/19fe6/U7dcg0wvj9w.jpg', 'name': 'Лавренюк Алексей', 'id': 30741879}, {'ava': 'https://pp.userapi.com/c639726/v639726803/2f627/I0mXnTP9AoA.jpg', 'name': 'Гнетнев Алексей', 'id': 59264803}, {'ava': 'https://pp.userapi.com/c639219/v639219763/4a4b4/Pm6evuffFMc.jpg', 'name': 'Борисов Алексей', 'id': 132635996}]
        },
        {name:'Новосибирск',n:36,
        users:[{'ava': 'https://pp.userapi.com/c625418/v625418058/10f38/2c9C6IhgD1Q.jpg', 'name': 'Игнатов Сергей', 'id': 848058}, {'ava': 'https://pp.userapi.com/c638716/v638716260/4e2f0/7yZdF42ZWxY.jpg', 'name': 'Троицкий Артем', 'id': 1075431}, {'ava': 'https://pp.userapi.com/c636720/v636720545/2f86c/_ztjIMDuliM.jpg', 'name': 'Гредин Роман', 'id': 1201545}, {'ava': 'https://pp.userapi.com/c836338/v836338162/50a78/J4Nz9Fdi5Mc.jpg', 'name': 'Сухарев Дмитрий', 'id': 1675949}, {'ava': 'https://pp.userapi.com/c836127/v836127746/61b7c/NQ1bgbJaBmY.jpg', 'name': 'Доронина Анна', 'id': 1893098}, {'ava': 'https://pp.userapi.com/c622229/v622229132/35390/9QdiIzDTnTo.jpg', 'name': 'Sumin Alexander', 'id': 2464132}, {'ava': 'https://pp.userapi.com/c840223/v840223259/2a10b/tOMAh57i1KY.jpg', 'name': 'Чернякова Алевтина', 'id': 3718065}, {'ava': 'https://pp.userapi.com/c836639/v836639395/6817f/B5_y5kRI1ss.jpg', 'name': 'Саркисянц Елизавета', 'id': 3965076}, {'ava': 'https://pp.userapi.com/c639121/v639121607/4828e/MQn3XYP1PLM.jpg', 'name': 'Кулешов Евгений', 'id': 5131036}, {'ava': 'https://pp.userapi.com/c301211/v301211785/42a0/acWCsF8rpb8.jpg', 'name': 'Чапайкина Ольга', 'id': 5146785}, {'ava': 'https://pp.userapi.com/c6011/u5396903/e_0b039161.jpg', 'name': 'Миронов Сергей', 'id': 5396903}, {'ava': 'https://pp.userapi.com/c633616/v633616774/3340a/ke75zI6PmFU.jpg', 'name': 'Тарасова Наталья', 'id': 5535774}, {'ava': 'https://pp.userapi.com/c638722/v638722437/4b571/Ki8ol1QWCfU.jpg', 'name': 'Первухин Владимир', 'id': 22559437}, {'ava': 'https://pp.userapi.com/c836336/v836336853/43c12/R2nsXp4kr8Y.jpg', 'name': 'Мавлин Руслан', 'id': 37757853}, {'ava': 'https://pp.userapi.com/c637628/v637628800/51a1c/5SxBgetIxgg.jpg', 'name': 'Аксёнова Таня', 'id': 51424381}, {'ava': 'https://pp.userapi.com/c626829/v626829406/3ac93/9Elr08oyc2I.jpg', 'name': 'Горбачёв Василий', 'id': 51689406}, {'ava': 'https://pp.userapi.com/c836631/v836631045/5d81a/RX8JC1LyCTg.jpg', 'name': 'Ведяскина Елена', 'id': 95856989}, {'ava': 'https://pp.userapi.com/c628524/v628524254/1bd89/9r9SZB717-c.jpg', 'name': 'Платунова Марина', 'id': 137181254}, {'ava': 'https://pp.userapi.com/c639523/v639523225/4a601/KiIZVoDXNZw.jpg', 'name': 'Губарева Дарья', 'id': 151366904}, {'ava': 'https://pp.userapi.com/c837428/v837428879/4a528/5CtkuSKm0sk.jpg', 'name': 'Каплин Анатолий', 'id': 156923879}, {'ava': 'https://pp.userapi.com/c841431/v841431218/16127/GYIePtun3eY.jpg', 'name': 'Колечкина Вероль', 'id': 162607916}, {'ava': 'https://pp.userapi.com/c621513/v621513623/111e4/7bJ4PcVMp38.jpg', 'name': 'Dendendenis Den', 'id': 179756922}, {'ava': 'https://pp.userapi.com/c613430/v613430944/e278/O1saCZtDKG4.jpg', 'name': 'Molor San', 'id': 184560944}, {'ava': 'https://pp.userapi.com/c616624/v616624373/16873/V6klcaRoe7o.jpg', 'name': 'Андреев Андрей', 'id': 187607373}, {'ava': 'https://sun9-11.userapi.com/c639821/v639821115/46908/oBh1JK9a6Mw.jpg', 'name': 'Заборская Ольга', 'id': 220997292}, {'ava': 'https://pp.userapi.com/c837429/v837429658/54af9/zzRBkehF2hA.jpg', 'name': 'Мавлютова Снежана', 'id': 262932647}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Кошечкин Макар', 'id': 269284879}, {'ava': 'https://pp.userapi.com/c637929/v637929350/2452f/8IFjG-FbbUw.jpg', 'name': 'Чуралев Павел', 'id': 291457350}, {'ava': 'https://pp.userapi.com/c636420/v636420628/1dfa2/AhdGq--Lu2E.jpg', 'name': 'Шайхутдинов Рустам', 'id': 293631628}, {'ava': 'https://pp.userapi.com/c837234/v837234982/53143/u6hstrLo72g.jpg', 'name': 'Шишкин Евгений', 'id': 297793656}, {'ava': 'https://pp.userapi.com/c638117/v638117390/27ef3/9CleIwWsYBo.jpg', 'name': 'Тарская Анна', 'id': 354000390}, {'ava': 'https://pp.userapi.com/c637124/v637124916/acc2d/-lyOP7rMj_c.jpg', 'name': 'Даурская Лилия', 'id': 358260916}, {'ava': 'https://pp.userapi.com/c841627/v841627483/db34/8owNlTKgjkw.jpg', 'name': 'Искандер Александр', 'id': 384383374}, {'ava': 'https://sun9-11.userapi.com/c639622/v639622603/4b682/8qJ0ATqW5ls.jpg', 'name': 'Ковальчук Илья', 'id': 400165373}, {'ava': 'https://pp.userapi.com/c837320/v837320595/6b403/rkspYY7I_8E.jpg', 'name': 'Ожогин Матвей', 'id': 416641568}, {'ava': 'https://pp.userapi.com/c840126/v840126673/258b5/KaYZdVpL6ps.jpg', 'name': 'Лука Валера', 'id': 442581220}]
        },
        {name:'Новоуральск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638128/v638128368/4f895/cqJ7lo9xVC4.jpg', 'name': 'Коновалов Сергей', 'id': 314574700}]
        },
        {name:'Новочеркасск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636822/v636822101/4d0df/ADoZZFw_gTU.jpg', 'name': 'Толченко Михаил', 'id': 221419101}]
        },
        {name:'Обнинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837228/v837228474/52597/X0QIYuB_qCU.jpg', 'name': 'Храпов Игорь', 'id': 311314841}]
        },
        {name:'Омск',n:13,
        users:[{'ava': 'https://pp.userapi.com/c636525/v636525988/1b2a1/mTbWhaBUCNM.jpg', 'name': 'Тудос Владимир', 'id': 23076988}, {'ava': 'https://pp.userapi.com/c639229/v639229183/39dd0/0I6-8-nfRr0.jpg', 'name': 'Джанныева Анастасия', 'id': 25216940}, {'ava': 'https://pp.userapi.com/c4185/v4185710/3a/vDQRiJV_dRQ.jpg', 'name': 'Плюхин Андрей', 'id': 26294710}, {'ava': 'https://pp.userapi.com/c836238/v836238004/5ff7b/mhq9_Cgiwb0.jpg', 'name': 'Джоли Наталья', 'id': 53847070}, {'ava': 'https://pp.userapi.com/c638531/v638531142/64147/xxD-O3wtAlI.jpg', 'name': 'Бугаёва Татьяна', 'id': 56354500}, {'ava': 'https://pp.userapi.com/c841226/v841226634/17ab8/42kN9jqpyAc.jpg', 'name': 'Широков Артём', 'id': 62184449}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Жмакина Света', 'id': 85838939}, {'ava': 'https://pp.userapi.com/c837128/v837128948/453c9/_T82MVaZCQo.jpg', 'name': 'Машталеров Евгений', 'id': 109840948}, {'ava': 'https://pp.userapi.com/c630018/v630018915/47735/vcJrXmifDgc.jpg', 'name': 'Гришков Денис', 'id': 153632915}, {'ava': 'https://pp.userapi.com/c837630/v837630461/61e69/S-GZp9zzh1o.jpg', 'name': 'Дробот Даша', 'id': 194212953}, {'ava': 'https://pp.userapi.com/c841226/v841226710/a5f8/YYHITJLTkD0.jpg', 'name': 'Соболевы Константин-И-Дашуличка', 'id': 205415661}, {'ava': 'https://pp.userapi.com/c638827/v638827740/5fe3d/pyURLg1Pgng.jpg', 'name': 'Марафон Ирина', 'id': 337642275}, {'ava': 'https://pp.userapi.com/c630317/v630317711/3e020/hgFYvRfIgWE.jpg', 'name': 'Лузин Виктор', 'id': 375551711}]
        },
        {name:'Орёл',n:8,
        users:[{'ava': 'https://pp.userapi.com/c604427/v604427716/3cc7a/0gwNYmboxOI.jpg', 'name': 'Лапкин Александр', 'id': 5316716}, {'ava': 'https://pp.userapi.com/c403725/v403725815/3a6d/FTaTPSeK1Qo.jpg', 'name': 'Линьков Вадим', 'id': 5761815}, {'ava': 'https://pp.userapi.com/c638825/v638825750/5b89d/STfw7E4uz4U.jpg', 'name': 'Савин Алексей', 'id': 83333768}, {'ava': 'https://pp.userapi.com/c836437/v836437072/4e51f/MHn4lJHw6tM.jpg', 'name': 'Журавлев Валерий', 'id': 160902072}, {'ava': 'https://pp.userapi.com/c639720/v639720448/3d8c7/Fmz7s8ZUEGI.jpg', 'name': 'Алехина Татьяна', 'id': 163068357}, {'ava': 'https://pp.userapi.com/c638624/v638624715/2ac5c/h5vyz1Xycpo.jpg', 'name': 'Пимакова Ольга', 'id': 253073715}, {'ava': 'https://pp.userapi.com/c630526/v630526467/29177/OvB42cZDFXc.jpg', 'name': 'Отрошенко Юрий', 'id': 271464467}, {'ava': 'https://pp.userapi.com/c630427/v630427741/170fc/hDvsOVicAp8.jpg', 'name': 'Астахов Павел', 'id': 324632741}]
        },
        {name:'Оренбург',n:5,
        users:[{'ava': 'https://pp.userapi.com/c840120/v840120852/14f19/1bdSgNV2Iao.jpg', 'name': 'Грызунова Нелли', 'id': 11309877}, {'ava': 'https://pp.userapi.com/c840321/v840321432/9a9c/4M7SWEOoImk.jpg', 'name': 'Исингалиева Асия', 'id': 107461720}, {'ava': 'https://pp.userapi.com/c638528/v638528982/508cf/NKXeDkMItq4.jpg', 'name': 'Палагин Денис', 'id': 137686982}, {'ava': 'https://pp.userapi.com/c841223/v841223045/1c394/YtbxXsQfFJs.jpg', 'name': 'Швед Мария', 'id': 263497607}, {'ava': 'https://pp.userapi.com/c638824/v638824834/1cf70/6xc8-dSrqio.jpg', 'name': 'Ягофарова Лилия', 'id': 349709834}]
        },
        {name:'Орехово-Зуево',n:3,
        users:[{'ava': 'https://pp.userapi.com/c637921/v637921901/2e61f/MwJmZEyau1Q.jpg', 'name': 'Савельев Денис', 'id': 17563901}, {'ava': 'https://pp.userapi.com/c837639/v837639969/52fd7/FwHcj33KCmU.jpg', 'name': 'Фоломкин Александр', 'id': 25655976}, {'ava': 'https://pp.userapi.com/c837630/v837630074/684b1/xRzSMSeadDE.jpg', 'name': 'Филимонова Анастасия', 'id': 327321958}]
        },
        {name:'Орск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c621707/v621707443/12905/CeaRmS0Ny7I.jpg', 'name': 'Миндубаева Мария', 'id': 78827370}, {'ava': 'https://pp.userapi.com/c638131/v638131197/58d54/4N9_kWOJOWY.jpg', 'name': 'Лин Виктория', 'id': 389127197}]
        },
        {name:'Пенза',n:9,
        users:[{'ava': 'https://pp.userapi.com/c626127/v626127093/2c371/1t97iArxpZg.jpg', 'name': 'Русинов Евгений', 'id': 746093}, {'ava': 'https://pp.userapi.com/c836637/v836637271/cd1e/DxS52a3tR3g.jpg', 'name': 'Кузнецов Кирилл', 'id': 33855271}, {'ava': 'https://pp.userapi.com/c619422/v619422083/e2fe/E8XkLX-lG3Y.jpg', 'name': 'Пронькин Александр', 'id': 52763083}, {'ava': 'https://pp.userapi.com/c836129/v836129053/4cd91/JMKOYXdkb5U.jpg', 'name': 'Акельев Артем', 'id': 171826053}, {'ava': 'https://pp.userapi.com/c837724/v837724179/60304/UA5fN9-v0Og.jpg', 'name': 'Трояшкин Дмитрий', 'id': 173589427}, {'ava': 'https://pp.userapi.com/c840324/v840324716/a54e/ckwjTSMeZOU.jpg', 'name': 'Столяров Антон', 'id': 280045716}, {'ava': 'https://pp.userapi.com/c622325/v622325972/4f03b/LhfBsziZlOE.jpg', 'name': 'Смирнов Дмитрий', 'id': 286243972}, {'ava': 'https://pp.userapi.com/c629306/v629306687/34753/shl9gIaTE5Q.jpg', 'name': 'Краюшкин Григорий', 'id': 349352687}, {'ava': 'https://pp.userapi.com/c639316/v639316180/3d2d6/QlRDNRUpvG4.jpg', 'name': 'Черкасова Татьяна', 'id': 367286550}]
        },
        {name:'Пермь',n:40,
        users:[{'ava': 'https://pp.userapi.com/c636216/v636216934/15e2/_VAbxyOLiWU.jpg', 'name': 'Кошкина Настенька', 'id': 2443934}, {'ava': 'https://pp.userapi.com/c837534/v837534603/3dc61/doh4rMcgPt8.jpg', 'name': 'Миненко Митя', 'id': 4610603}, {'ava': 'https://pp.userapi.com/c837735/v837735933/a253/xgyrgAcJVU4.jpg', 'name': 'Попов Серж', 'id': 5600933}, {'ava': 'https://pp.userapi.com/c639316/v639316134/4afe3/kP-4l0C0X6k.jpg', 'name': 'Винакова Наталья', 'id': 9919297}, {'ava': 'https://pp.userapi.com/c625617/v625617626/554f0/CxitZ32WwAQ.jpg', 'name': 'Желтышев Егор', 'id': 12292626}, {'ava': 'https://pp.userapi.com/c639830/v639830616/44813/jgJbzy2zIWo.jpg', 'name': 'Крохалёва Виктория', 'id': 32895831}, {'ava': 'https://pp.userapi.com/c637931/v637931715/5cdd6/P0zt8O7359M.jpg', 'name': 'Анянова Лариса', 'id': 34306735}, {'ava': 'https://pp.userapi.com/c631424/v631424956/1bce1/-2IXLq3o17k.jpg', 'name': 'Дроздов Михаил', 'id': 38843956}, {'ava': 'https://pp.userapi.com/c633625/v633625100/2bb47/J0fmKhj_f68.jpg', 'name': 'Кулешов Ростислав', 'id': 39824100}, {'ava': 'https://pp.userapi.com/c418317/v418317746/873c/q3Dvyf3Rhkk.jpg', 'name': 'Колпащиков Алексей', 'id': 40092746}, {'ava': 'https://pp.userapi.com/c637323/v637323062/65c76/KdNefZjkKb0.jpg', 'name': 'Останина Ольга', 'id': 46341062}, {'ava': 'https://pp.userapi.com/c836128/v836128778/66d85/DG1T0Iog9z0.jpg', 'name': 'Коркунов Павел', 'id': 51735778}, {'ava': 'https://pp.userapi.com/c636421/v636421903/4edb3/hmVhtkaWcIg.jpg', 'name': 'Баринов Саша', 'id': 56158903}, {'ava': 'https://pp.userapi.com/c637820/v637820650/44f30/DQb8Q6yb9rk.jpg', 'name': 'Пичкалёв Евгений', 'id': 57845650}, {'ava': 'https://pp.userapi.com/c622227/v622227395/3f43b/kskG3fhG_N0.jpg', 'name': 'Шадрин Максим', 'id': 63599395}, {'ava': 'https://pp.userapi.com/c638826/v638826327/479e5/s3RLZdZiK9I.jpg', 'name': 'Неганова Леонора', 'id': 64463327}, {'ava': 'https://pp.userapi.com/c836421/v836421448/637d9/mI466KClP60.jpg', 'name': 'Орлова Лена', 'id': 77594480}, {'ava': 'https://pp.userapi.com/c841633/v841633442/f1f5/5DvhJMes_XM.jpg', 'name': 'Нечаев Александр', 'id': 90964733}, {'ava': 'https://pp.userapi.com/c638517/v638517105/55eb1/GRnGBdihNws.jpg', 'name': 'Тюрин Андрей', 'id': 94010892}, {'ava': 'https://pp.userapi.com/c639830/v639830438/45b8b/k4FmEz4LfOo.jpg', 'name': 'Шардина Ксения', 'id': 103940409}, {'ava': 'https://pp.userapi.com/c639316/v639316830/2ee04/zXBSvTzkvq4.jpg', 'name': 'Перминова Даша', 'id': 115510830}, {'ava': 'https://pp.userapi.com/c837628/v837628728/686d/LU0PIx5Imug.jpg', 'name': 'Забоев Иван', 'id': 137589728}, {'ava': 'https://sun9-11.userapi.com/c836536/v836536440/3d06c/YFoGddhXyFg.jpg', 'name': 'Столбов Сергей', 'id': 141240440}, {'ava': 'https://pp.userapi.com/c410116/v410116582/aaa8/VZm7VcUl9uY.jpg', 'name': 'Захарчук Елена', 'id': 145903582}, {'ava': 'https://sun9-11.userapi.com/c840532/v840532543/9a31/k4-3Cq9z_xI.jpg', 'name': 'Ларюкина Екатерина', 'id': 147406427}, {'ava': 'https://pp.userapi.com/c631229/v631229237/48575/3RNzEUOjdsw.jpg', 'name': 'Усова Екатерина', 'id': 148938237}, {'ava': 'https://pp.userapi.com/c836238/v836238140/6ccdd/cgNw7SIHF1o.jpg', 'name': 'Шахова Поля', 'id': 152364214}, {'ava': 'https://pp.userapi.com/c639323/v639323248/36630/v7qEHENj5-A.jpg', 'name': 'Зырянова Ксюша', 'id': 155010248}, {'ava': 'https://pp.userapi.com/c837228/v837228955/35453/IZy1Va2wWRE.jpg', 'name': 'Шакин Андрей', 'id': 183780955}, {'ava': 'https://pp.userapi.com/c837326/v837326417/3c6e1/EWF9eF8319w.jpg', 'name': 'Котов Гриша', 'id': 213493417}, {'ava': 'https://pp.userapi.com/c625121/v625121034/4b66f/YBvLTL_-Xzc.jpg', 'name': 'Суслова Юленька', 'id': 219065034}, {'ava': 'https://pp.userapi.com/c639320/v639320754/202bf/CPoU-0vfv4k.jpg', 'name': 'Ратегова Ирина', 'id': 220416754}, {'ava': 'https://pp.userapi.com/c639631/v639631763/3fa43/XLnMkX4hnnQ.jpg', 'name': 'Фадеева Анастасия', 'id': 226096463}, {'ava': 'https://pp.userapi.com/c638027/v638027954/51e4a/pF_16cccXxI.jpg', 'name': 'Васильев Ярослав', 'id': 268238517}, {'ava': 'https://pp.userapi.com/c836525/v836525395/3e321/jngPDlJDhYQ.jpg', 'name': 'Быков Сергей', 'id': 292367395}, {'ava': 'https://pp.userapi.com/c841133/v841133698/18337/RpgRQI5IJYw.jpg', 'name': 'Ваулин Андрей', 'id': 309438227}, {'ava': 'https://pp.userapi.com/c630228/v630228709/4f939/_5OEqCHtk7I.jpg', 'name': 'Жеффре Кирилл', 'id': 313747709}, {'ava': 'https://pp.userapi.com/c636122/v636122914/4a2ae/xNx1lyZZvVU.jpg', 'name': 'Сарманаев Рафиль', 'id': 315594914}, {'ava': 'https://pp.userapi.com/c837129/v837129251/52902/vMSHTNN9neM.jpg', 'name': 'Останин Эдуард', 'id': 334016964}, {'ava': 'https://pp.userapi.com/c638922/v638922790/30b05/yj5UoOe2PWc.jpg', 'name': 'Нуриев Олег', 'id': 352372790}]
        },
        {name:'Петрозаводск',n:10,
        users:[{'ava': 'https://pp.userapi.com/c836226/v836226324/5e6e9/XKWFotCL23Q.jpg', 'name': 'Гонтарь Евгения', 'id': 2688133}, {'ava': 'https://pp.userapi.com/c625225/v625225939/529b4/qhMdD9Q2tBY.jpg', 'name': 'Андрейчук Людмила', 'id': 6269973}, {'ava': 'https://pp.userapi.com/c626518/v626518027/23744/An1cafOz1fM.jpg', 'name': 'Кишкин Александр', 'id': 8351027}, {'ava': 'https://pp.userapi.com/c638030/v638030974/4f56b/eenq01SiN9Q.jpg', 'name': 'Мясников Владислав', 'id': 12042151}, {'ava': 'https://pp.userapi.com/c637616/v637616359/4d6c1/Ne03HQ_R2no.jpg', 'name': 'Лебедев Владимир', 'id': 36506359}, {'ava': 'https://pp.userapi.com/c625517/v625517608/4793a/jTqAZ55pauE.jpg', 'name': 'Богданова Татьяна', 'id': 38173608}, {'ava': 'https://pp.userapi.com/c604322/v604322841/2747/zLlILcrR_Bc.jpg', 'name': 'Котик Джордан', 'id': 201091841}, {'ava': 'https://pp.userapi.com/c639617/v639617627/42d59/ya3deX9NafM.jpg', 'name': 'Корсаков Лешик', 'id': 220312147}, {'ava': 'https://pp.userapi.com/c841530/v841530901/1a205/HcOTyHMDz24.jpg', 'name': 'Джура Юлия', 'id': 247502273}, {'ava': 'https://pp.userapi.com/c841222/v841222146/13e72/HRnJh0tj4yc.jpg', 'name': 'Волков Павел', 'id': 406178459}]
        },
        {name:'Петропавловск-Камчатский',n:2,
        users:[{'ava': 'https://sun9-11.userapi.com/c639824/v639824279/3b4e5/E0YqG4DSCE0.jpg', 'name': 'Шмаков Евгений', 'id': 19465102}, {'ava': 'https://pp.userapi.com/c639623/v639623991/b1ca/Wy3i8iuRBgY.jpg', 'name': 'Гарибов Андрей', 'id': 305141991}]
        },
        {name:'Псков',n:8,
        users:[{'ava': 'https://pp.userapi.com/c836129/v836129806/384d1/Fm7-Zc3I03Y.jpg', 'name': 'Царегородцева Алиса', 'id': 1529806}, {'ava': 'https://pp.userapi.com/c638617/v638617258/5c2ec/pt21-WuqWWA.jpg', 'name': 'Печёркина Анастасия', 'id': 4287312}, {'ava': 'https://pp.userapi.com/c837234/v837234476/526db/TpZSUe14icc.jpg', 'name': 'Гаврилов Сергей', 'id': 6011262}, {'ava': 'https://pp.userapi.com/c836725/v836725088/4ac9a/XixZ2k5ahgs.jpg', 'name': 'Чемоганский Сергей', 'id': 13578088}, {'ava': 'https://pp.userapi.com/c626716/v626716637/3a1dc/k74W_SgsJks.jpg', 'name': 'Григорьева Маргарита', 'id': 37094637}, {'ava': 'https://pp.userapi.com/c639424/v639424553/348fe/9PYJhF5zbUU.jpg', 'name': 'Петров Александр', 'id': 38743887}, {'ava': 'https://pp.userapi.com/c837633/v837633719/53d92/Qi-WyhNupxo.jpg', 'name': 'Home Noice', 'id': 121827693}, {'ava': 'https://pp.userapi.com/c841522/v841522362/1a5bc/r7G-ev3Zd5U.jpg', 'name': 'Жеребцов Дмитрий', 'id': 394443176}]
        },
        {name:'Раменское',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639530/v639530872/25c94/L6XVvZWTQbQ.jpg', 'name': 'Аникеев Иван', 'id': 2786872}]
        },
        {name:'Ростов-на-Дону',n:27,
        users:[{'ava': 'https://pp.userapi.com/c836731/v836731989/58cca/ZPFDT1yAz90.jpg', 'name': 'Богачёв Денис', 'id': 1377841}, {'ava': 'https://pp.userapi.com/c629427/v629427662/2d45/oSto8lAE58I.jpg', 'name': 'Филиппов Юрий', 'id': 4096662}, {'ava': 'https://pp.userapi.com/c630216/v630216095/2cee2/ZavKgNuEWT0.jpg', 'name': 'Тютюнников Александр', 'id': 4727095}, {'ava': 'https://pp.userapi.com/c630223/v630223276/3f7e2/ARgEqsRwZvQ.jpg', 'name': 'Корбан Олег', 'id': 5860276}, {'ava': 'https://pp.userapi.com/c837722/v837722063/6180e/g9_WKzJEMJk.jpg', 'name': 'Закитина Любовь', 'id': 6768932}, {'ava': 'https://pp.userapi.com/c841536/v841536541/f4f4/DPuzbW0BTAI.jpg', 'name': 'Чернышева Аня', 'id': 7797781}, {'ava': 'https://pp.userapi.com/c836727/v836727257/727af/8Cfa7ZFrkeg.jpg', 'name': 'Шульга Елена', 'id': 10125637}, {'ava': 'https://pp.userapi.com/c636924/v636924659/569f8/CgAlIgXxeLk.jpg', 'name': 'Тимошенко Дарья', 'id': 17739659}, {'ava': 'https://pp.userapi.com/c639123/v639123519/3bbdd/wZd33vp-LM8.jpg', 'name': 'Шаталов Владимир', 'id': 34381285}, {'ava': 'https://pp.userapi.com/c837739/v837739055/422e0/66QaUkkosyE.jpg', 'name': 'Мигуля Маргарита', 'id': 35536991}, {'ava': 'https://pp.userapi.com/c622118/v622118087/3ad31/Oy3g5179WtE.jpg', 'name': 'Корсков Владимир', 'id': 42368087}, {'ava': 'https://pp.userapi.com/c836122/v836122222/48611/bpotv0DF2XE.jpg', 'name': 'Казанский Альберт', 'id': 54546222}, {'ava': 'https://pp.userapi.com/c840237/v840237628/2229e/4VHS6HyWTjI.jpg', 'name': 'Емельяненко Евгений', 'id': 85312313}, {'ava': 'https://pp.userapi.com/c840434/v840434524/735d/sdN2-hHtqks.jpg', 'name': 'Артёмов Артём', 'id': 90501542}, {'ava': 'https://pp.userapi.com/c625121/v625121413/23a0/yxTr0aSxcWk.jpg', 'name': 'Абулкасов Захар', 'id': 125507413}, {'ava': 'https://sun9-11.userapi.com/c840620/v840620652/b5fe/C4nVw6ykb_8.jpg', 'name': 'Калинина Алина', 'id': 130526542}, {'ava': 'https://pp.userapi.com/c628026/v628026800/9e9e/Fkh0rxsfMLY.jpg', 'name': 'Бугрова Диана', 'id': 136966800}, {'ava': 'https://sun9-11.userapi.com/c639118/v639118317/21bb0/DxuioRHiDHs.jpg', 'name': 'Голубцова Кристина', 'id': 147271317}, {'ava': 'https://pp.userapi.com/c638129/v638129513/446c3/0zbaRsnv_fg.jpg', 'name': 'Зайцев Алексей', 'id': 153405513}, {'ava': 'https://pp.userapi.com/c624221/v624221125/56b60/CwfqXyU-vi8.jpg', 'name': 'Степанишин Степан', 'id': 217903125}, {'ava': 'https://pp.userapi.com/c604320/v604320964/4aac9/CjnwPDQx6W4.jpg', 'name': 'Минакова Татьяна', 'id': 243250964}, {'ava': 'https://pp.userapi.com/c837334/v837334005/45667/_rqaLRhUGnE.jpg', 'name': 'Костенко Артём', 'id': 253475005}, {'ava': 'https://pp.userapi.com/c637121/v637121786/597d1/JZuO110vPO8.jpg', 'name': 'Серебряков Александр', 'id': 261324703}, {'ava': 'https://pp.userapi.com/c836739/v836739227/1c639/O9fuLsSVqZw.jpg', 'name': 'Старков Анатолий', 'id': 264267227}, {'ava': 'https://pp.userapi.com/c841030/v841030382/1bb0e/W40xHjhpZZI.jpg', 'name': 'Зинин Руслан', 'id': 287256172}, {'ava': 'https://pp.userapi.com/c638523/v638523268/3eeb8/TDUPh0J-FYE.jpg', 'name': 'Поддубенский Илья', 'id': 326299268}, {'ava': 'https://pp.userapi.com/c638817/v638817044/570ca/xXyKaA7OHeg.jpg', 'name': 'Аруш Гаяна', 'id': 364014553}]
        },
        {name:'Рыбинск',n:6,
        users:[{'ava': 'https://pp.userapi.com/c625520/v625520389/500ac/V8Tx6bHzND4.jpg', 'name': 'Смирнова Маргарита', 'id': 15078389}, {'ava': 'https://pp.userapi.com/c9606/u81367740/e_db4145b3.jpg', 'name': 'Левин Денис', 'id': 81367740}, {'ava': 'https://pp.userapi.com/c425216/v425216522/6e4c/ClJMbDJGv9U.jpg', 'name': 'Гмызов Алексей', 'id': 136230522}, {'ava': 'https://pp.userapi.com/c616916/v616916433/9dc2/b8pJv-rDUlc.jpg', 'name': 'Горун Павел', 'id': 189263433}, {'ava': 'https://pp.userapi.com/c636825/v636825553/4157b/s1dz81jXB-o.jpg', 'name': 'Белый Андрей', 'id': 407332553}, {'ava': 'https://pp.userapi.com/c837224/v837224016/48f78/1Zd_ZufFIZw.jpg', 'name': 'Владимировна Татьяна', 'id': 424361942}]
        },
        {name:'Рязань',n:19,
        users:[{'ava': 'https://pp.userapi.com/c626617/v626617716/f8ef/BSvWpifzyN0.jpg', 'name': 'Кубикова Елена', 'id': 59472716},{'ava': 'https://pp.userapi.com/c638231/v638231346/4d7de/ZuNZfiog2VY.jpg', 'name': 'Раева Александра', 'id': 3335346}, {'ava': 'https://pp.userapi.com/c630617/v630617672/3bdb0/eYvTFLv5dCg.jpg', 'name': 'Московкин Владимир', 'id': 4434672}, {'ava': 'https://pp.userapi.com/c633930/v633930886/e6d8/VKISm6Cy_0E.jpg', 'name': 'Стерликов Макс', 'id': 9639886}, {'ava': 'https://pp.userapi.com/c639526/v639526831/4152d/t7xpEqPK6v8.jpg', 'name': 'Астафьев Вячеслав', 'id': 16858974}, {'ava': 'https://pp.userapi.com/c4564/u18003638/e_6247d429.jpg', 'name': 'Тырнов Иван', 'id': 18003638}, {'ava': 'https://pp.userapi.com/c9279/u33662528/e_1000f450.jpg', 'name': 'Могучев Славон', 'id': 33662528}, {'ava': 'https://pp.userapi.com/c836529/v836529576/11de3/X1uHXwIOvd8.jpg', 'name': 'Ардемасов Александр', 'id': 35641576}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Кузнецов Роман', 'id': 37155646}, {'ava': 'https://pp.userapi.com/c317323/u53712079/e_1eb392b2.jpg', 'name': 'Кренделев Николай', 'id': 53712079}, {'ava': 'https://pp.userapi.com/c840337/v840337866/9b48/zLq97LF25Dg.jpg', 'name': 'Позднякова Татьяна', 'id': 107443730}, {'ava': 'https://pp.userapi.com/c617124/v617124164/5618/L1npHXBsxdU.jpg', 'name': 'Александров Роман', 'id': 141870164}, {'ava': 'https://pp.userapi.com/c841338/v841338188/1f634/Jx6jTaIhMdk.jpg', 'name': 'Буравлев Николай', 'id': 200878061}, {'ava': 'https://sun9-11.userapi.com/c836534/v836534308/64f0c/ojzXHoiNPR4.jpg', 'name': 'Харламова Анастасия', 'id': 204087214}, {'ava': 'https://pp.userapi.com/c837724/v837724006/76ec7/b7MWOpmBvjk.jpg', 'name': 'Орловский Кирилл', 'id': 224198356}, {'ava': 'https://pp.userapi.com/c637625/v637625209/49495/_ezM7WPEq7E.jpg', 'name': 'Трифонов Дмитрий', 'id': 250858209}, {'ava': 'https://pp.userapi.com/c841434/v841434962/17a92/UtO09IXwwxY.jpg', 'name': 'Радучич Юлия', 'id': 290665944}, {'ava': 'https://pp.userapi.com/c841321/v841321550/1850a/OYuIeu158Wo.jpg', 'name': 'Иноземцева Лера', 'id': 299241021}, {'ava': 'https://pp.userapi.com/c836535/v836535399/670e6/v73wgGdqDu8.jpg', 'name': 'Степашкин Виктор', 'id': 405335717}]
        },
        {name:'Самара',n:29,
        users:[{'ava': 'https://pp.userapi.com/c419119/v419119552/8100/F85AME_Mlj0.jpg', 'name': 'Чернов Виталий', 'id': 1182552}, {'ava': 'https://pp.userapi.com/c836128/v836128933/37f12/Rv8cZRnosis.jpg', 'name': 'Коновалова Татьяна', 'id': 1227933}, {'ava': 'https://sun9-11.userapi.com/c836723/v836723501/e36f/VXPE27YfPyM.jpg', 'name': 'Баранов Федор', 'id': 3248501}, {'ava': 'https://pp.userapi.com/c837225/v837225018/3f26c/sAXNKgDVc2U.jpg', 'name': 'Митрохин Владимир', 'id': 5223018}, {'ava': 'https://pp.userapi.com/c4320/v4320300/e3/dmvFKLVi8Kw.jpg', 'name': 'Родина Юлия', 'id': 6087300}, {'ava': 'https://pp.userapi.com/c837428/v837428914/53f8e/uN68KRQIz0A.jpg', 'name': 'Бунеев Ярослав', 'id': 8461914}, {'ava': 'https://pp.userapi.com/c636529/v636529641/65157/yguQjXT2CyQ.jpg', 'name': 'Трушков Александр', 'id': 19108641}, {'ava': 'https://pp.userapi.com/c630526/v630526130/2ac36/KjAG5emrXYE.jpg', 'name': 'Краснеев Роман', 'id': 19140130}, {'ava': 'https://pp.userapi.com/c621509/v621509680/199f3/g9-Sg0EqiU4.jpg', 'name': 'Разин Алексей', 'id': 23524310}, {'ava': 'https://pp.userapi.com/c604424/v604424289/39452/dvDODJQccBg.jpg', 'name': 'Гарипов Марат', 'id': 25881289}, {'ava': 'https://pp.userapi.com/c841135/v841135564/1a9c2/l0SgyZ81zFw.jpg', 'name': 'Одинецкая Анна', 'id': 34003675}, {'ava': 'https://pp.userapi.com/c638928/v638928467/e3ba/ed30qAx_5EA.jpg', 'name': 'Абрашитова Фатима', 'id': 38040467}, {'ava': 'https://pp.userapi.com/c637619/v637619330/3e22e/jWlMNAERYsc.jpg', 'name': 'Жамкоцян Карен', 'id': 57553330}, {'ava': 'https://pp.userapi.com/c626717/v626717206/1bafd/yIwvXJZi0OE.jpg', 'name': 'Crass Славик', 'id': 67807206}, {'ava': 'https://pp.userapi.com/c630931/v630931397/109c/Ce7hpsV2YMQ.jpg', 'name': 'Ефимов Алексей', 'id': 68321397}, {'ava': 'https://pp.userapi.com/c836633/v836633985/68170/_YjgwIJ2wgM.jpg', 'name': 'Челушкина Татьяна', 'id': 70766985}, {'ava': 'https://pp.userapi.com/c637430/v637430557/5730f/sN9wWzeK6gw.jpg', 'name': 'Канюкаева Лилия', 'id': 82086557}, {'ava': 'https://pp.userapi.com/c616131/v616131378/744a/q6mk0In-MP0.jpg', 'name': 'Кожин Дмитрий', 'id': 90900378}, {'ava': 'https://pp.userapi.com/c622230/v622230059/6c85/JZwz8iRVvgk.jpg', 'name': 'Семьянцев Сергей', 'id': 98683059}, {'ava': 'https://sun9-11.userapi.com/c639922/v639922723/5361c/fGUJxfhGHio.jpg', 'name': 'Болдырева Ирина', 'id': 101963380}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Червина Мария', 'id': 121245486}, {'ava': 'https://pp.userapi.com/c837635/v837635748/5d8f3/55I0Kd0-Ddk.jpg', 'name': 'Павлухин Александр', 'id': 152535748}, {'ava': 'https://pp.userapi.com/c636020/v636020609/25268/X6tr-CEooeU.jpg', 'name': 'Колобов Сергей', 'id': 185205609}, {'ava': 'https://pp.userapi.com/c638925/v638925465/4a2ba/o0ZEn5Oosqo.jpg', 'name': 'Жукина Александра', 'id': 190286465}, {'ava': 'https://pp.userapi.com/c638324/v638324317/60c0d/Pi7i-a3GlR4.jpg', 'name': 'Иванцова Лиля', 'id': 194650867}, {'ava': 'https://pp.userapi.com/c629318/v629318671/18689/KlOxBaGR-EU.jpg', 'name': 'Романенко Владимир', 'id': 258803671}, {'ava': 'https://pp.userapi.com/c836323/v836323038/600ee/xx8Wf363f-A.jpg', 'name': 'Оченев Константин', 'id': 269757253}, {'ava': 'https://pp.userapi.com/c841329/v841329787/134df/upXadyCMNGI.jpg', 'name': 'Лобанов Юра', 'id': 281385341}, {'ava': 'https://pp.userapi.com/c636827/v636827968/1b364/aeRf9uy0Vhc.jpg', 'name': 'Залевский Владимир', 'id': 376855968}]
        },
        {name:'Саранск',n:8,
        users:[{'ava': 'https://pp.userapi.com/c841636/v841636305/c466/CxOrJtzOqWw.jpg', 'name': 'Сухова Мария', 'id': 22099169}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Салехов Марат', 'id': 95260173}, {'ava': 'https://pp.userapi.com/c837525/v837525575/3d4f6/df_gUgq1PxE.jpg', 'name': 'Константинов Александр', 'id': 98187575}, {'ava': 'https://pp.userapi.com/c614727/v614727185/f817/6A1iCO__SLA.jpg', 'name': 'Кугушев Руслан', 'id': 137762185}, {'ava': 'https://pp.userapi.com/c638922/v638922524/23af5/IwCPOUyzOw4.jpg', 'name': 'Мичиганин Олег', 'id': 196016524}, {'ava': 'https://pp.userapi.com/c639317/v639317422/44cfe/1k4nZN9R1aM.jpg', 'name': 'Бебенова Настя', 'id': 252272962}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Борисычев Святослав', 'id': 338670817}, {'ava': 'https://pp.userapi.com/c626625/v626625050/2cd3c/LZkuc6g4M98.jpg', 'name': 'Ларин Сергей', 'id': 379121050}]
        },
        {name:'Саратов',n:26,
        users:[{'ava': 'https://pp.userapi.com/c841634/v841634061/3b54/ShxnkQaCjYA.jpg', 'name': 'Пальчикова Ольга', 'id': 5722061}, {'ava': 'https://pp.userapi.com/c638024/v638024839/58ce9/PA5w1nSLtZM.jpg', 'name': 'Салтыкова Татьяна', 'id': 6362082}, {'ava': 'https://pp.userapi.com/c629307/v629307483/1f95f/f19sEjxVwT0.jpg', 'name': 'Николаевич Артём', 'id': 8086483}, {'ava': 'https://pp.userapi.com/c10301/u11341362/e_d84b11b6.jpg', 'name': 'Жарков Денис', 'id': 11341362}, {'ava': 'https://pp.userapi.com/c638317/v638317763/50e23/QzQP7rrYxJI.jpg', 'name': 'Топильская Ольга', 'id': 12277081}, {'ava': 'https://pp.userapi.com/c637621/v637621106/4cd26/jnOiuMjwnGo.jpg', 'name': 'Бекирова Виктория', 'id': 12587106}, {'ava': 'https://pp.userapi.com/c836137/v836137141/5720e/Ycs6ci7plKk.jpg', 'name': 'Руковичникова Лина', 'id': 18731257}, {'ava': 'https://pp.userapi.com/c626325/v626325052/2e735/AQjgZ_SAnp4.jpg', 'name': 'Житников Валера', 'id': 23207052}, {'ava': 'https://pp.userapi.com/c613419/v613419636/1b0f2/pLkCHDHD5p0.jpg', 'name': 'Иванова Ирина', 'id': 25605636}, {'ava': 'https://pp.userapi.com/c837136/v837136836/46350/8YpoKxPFflE.jpg', 'name': 'Петров Артем', 'id': 26076066}, {'ava': 'https://pp.userapi.com/c633224/v633224208/3c717/j83dxnKiP4k.jpg', 'name': 'Abdrashitov Oleg', 'id': 26538208}, {'ava': 'https://pp.userapi.com/c637631/v637631469/3f3a7/lVOAIcEo4HE.jpg', 'name': 'Бочкарева Марина', 'id': 119022469}, {'ava': 'https://pp.userapi.com/c630223/v630223956/1c9a0/Xbp-0LkwTeE.jpg', 'name': 'Денисов Роман', 'id': 139985956}, {'ava': 'https://pp.userapi.com/c623220/v623220005/48d3f/6q-vpkBBlYM.jpg', 'name': 'Щербаков Роман', 'id': 153074005}, {'ava': 'https://pp.userapi.com/c841431/v841431240/190de/-gnvPQACZ8E.jpg', 'name': 'Хальзов Александр', 'id': 160553061}, {'ava': 'https://pp.userapi.com/c841136/v841136961/152ec/CJmpIhhcZOY.jpg', 'name': 'Сидоров Александр', 'id': 165320141}, {'ava': 'https://pp.userapi.com/c637930/v637930802/1fbd2/nGEFiQ5Px4I.jpg', 'name': 'Алилуев Алексей', 'id': 165983802}, {'ava': 'https://pp.userapi.com/c405921/v405921338/9af3/vMf9Q4tSZj4.jpg', 'name': 'Осипов Алексей', 'id': 205299338}, {'ava': 'https://pp.userapi.com/c841336/v841336502/196e7/v_i12gI3Gko.jpg', 'name': 'Фомин Антон', 'id': 208498558}, {'ava': 'https://pp.userapi.com/c618724/v618724724/20821/27H5bnAl4TA.jpg', 'name': 'Плеханов Константин', 'id': 226767724}, {'ava': 'https://pp.userapi.com/c637629/v637629200/4e212/brhCsZzf1oY.jpg', 'name': 'Костерин Игорь', 'id': 246490200}, {'ava': 'https://pp.userapi.com/c841339/v841339305/4406/5DukNNXmqiw.jpg', 'name': 'Макухин Артем', 'id': 249710305}, {'ava': 'https://pp.userapi.com/c625130/v625130351/69d6e/X6djU8vo6O0.jpg', 'name': 'Белов Евгений', 'id': 254800351}, {'ava': 'https://pp.userapi.com/c639318/v639318027/10bf1/bu5dxzTfivs.jpg', 'name': 'Манушин Андрей', 'id': 368053027}, {'ava': 'https://pp.userapi.com/c841228/v841228529/1fc56/mlGHTb7bXqc.jpg', 'name': 'Тремасова Ксения', 'id': 403063576}, {'ava': 'https://pp.userapi.com/c840424/v840424731/8da5/I5jktG2CIp4.jpg', 'name': 'Двойнишева Наталья', 'id': 414635536}]
        },
        {name:'Смоленск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c301304/u4765912/e_debab5e4.jpg', 'name': 'Ершова Анна', 'id': 4765912}, {'ava': 'https://pp.userapi.com/c837523/v837523059/5bc6c/YXNpvJRLRJM.jpg', 'name': 'Анциферова Маша', 'id': 27293518}, {'ava': 'https://pp.userapi.com/c637724/v637724081/527c1/yegbMksxuho.jpg', 'name': 'Верезубова Светлана', 'id': 139380081}, {'ava': 'https://pp.userapi.com/c836330/v836330015/64260/gvLakEVAags.jpg', 'name': 'Шевцов Влад', 'id': 269451069}]
        },
        {name:'Снежинск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c639219/v639219418/43f9f/U3gWjPQIQNg.jpg', 'name': 'Хисматуллин Ринат', 'id': 38750939}, {'ava': 'https://pp.userapi.com/c840230/v840230845/5c0a/fJeYza3D6sE.jpg', 'name': 'Швецов Денис', 'id': 145661845}, {'ava': 'https://pp.userapi.com/c543101/v543101744/24b1f/Ovv8nOlKmdg.jpg', 'name': 'Лопандина Наталья', 'id': 360827232}]
        },
        {name:'Соликамск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c841229/v841229309/10849/5Q5uCTxY28I.jpg', 'name': 'Баландина Юлия', 'id': 182520547}, {'ava': 'https://pp.userapi.com/c837226/v837226621/548c6/l1t-KfqhZKw.jpg', 'name': 'Александровна Кристина', 'id': 273765617}]
        },
        {name:'Сочи',n:8,
        users:[{'ava': 'https://pp.userapi.com/c638624/v638624122/4b8b3/DUqUOaBZYx4.jpg', 'name': 'Николаенко Антон', 'id': 17052122}, {'ava': 'https://pp.userapi.com/c636324/v636324179/5a31a/5N4wnm_3SO8.jpg', 'name': 'Сергеева Елена', 'id': 67522179}, {'ava': 'https://sun9-11.userapi.com/c836120/v836120568/563df/V9AG3_BQJxU.jpg', 'name': 'Рублёв Андрей', 'id': 71976278}, {'ava': 'https://pp.userapi.com/c837633/v837633581/48b7b/mlNvbtj6N0I.jpg', 'name': 'Галанцев Владимир', 'id': 188606581}, {'ava': 'https://pp.userapi.com/c608919/v608919534/ee83/wvAjHKvz67k.jpg', 'name': 'Звезденкова Анна', 'id': 196589534}, {'ava': 'https://pp.userapi.com/c837127/v837127268/18bc9/lwziwS_4KMU.jpg', 'name': 'Чечеткин Сергей', 'id': 331264268}, {'ava': 'https://pp.userapi.com/c836230/v836230957/5bf37/MxDq-ZM1xRw.jpg', 'name': 'Алексеевич Алексей', 'id': 380500057}, {'ava': 'https://pp.userapi.com/c636027/v636027109/3fd4c/w7Snzmnq6Os.jpg', 'name': 'Богданов Денис', 'id': 393794109}]
        },
        {name:'Ставрополь',n:15,
        users:[{'ava': 'https://pp.userapi.com/c637829/v637829655/512d4/CWi6Xf1ZF4c.jpg', 'name': 'Колодяжный Анатолий', 'id': 7130655}, {'ava': 'https://pp.userapi.com/c639831/v639831957/455aa/_M6ZyVG17wo.jpg', 'name': 'Борцова Юлиана', 'id': 21486000}, {'ava': 'https://pp.userapi.com/c837738/v837738771/4b886/L7NF7WwVblA.jpg', 'name': 'Лукьянченко Виктория', 'id': 42722939}, {'ava': 'https://pp.userapi.com/c624916/v624916535/41614/nLsnnVOWsdw.jpg', 'name': 'Лютэр Татьяна', 'id': 74017535}, {'ava': 'https://pp.userapi.com/c637721/v637721073/57ac1/Fc3gQPQQqvk.jpg', 'name': 'Flux Energy', 'id': 89380349}, {'ava': 'https://pp.userapi.com/c836734/v836734870/60bec/q7tPwZVzsaI.jpg', 'name': 'Кириченко Сергей', 'id': 136309909}, {'ava': 'https://pp.userapi.com/c628729/v628729639/1a5a7/vAbcQ6UusiU.jpg', 'name': 'Окулов Павел', 'id': 144519639}, {'ava': 'https://sun9-11.userapi.com/c840638/v840638840/336f/tNXAOfBDGx0.jpg', 'name': 'Тимофеева Людмила', 'id': 145962539}, {'ava': 'https://pp.userapi.com/c616023/v616023633/3337/MNlfdU2ocRE.jpg', 'name': 'Радышев Сергей', 'id': 173158633}, {'ava': 'https://pp.userapi.com/c604524/v604524778/2a465/kdzGwFPcttg.jpg', 'name': 'Будков Антон', 'id': 187266778}, {'ava': 'https://pp.userapi.com/c639523/v639523383/1d991/QLSydcyoQoo.jpg', 'name': 'Чечухина Катерина', 'id': 206898383}, {'ava': 'https://sun9-11.userapi.com/c840723/v840723953/6db1/yEe0IwxKQ7s.jpg', 'name': 'Есина Елена', 'id': 231412516}, {'ava': 'https://pp.userapi.com/c638718/v638718148/4df9c/K-E-hjGd6cI.jpg', 'name': 'Зотова Ирина', 'id': 235312653}, {'ava': 'https://pp.userapi.com/c841332/v841332359/17792/bVZHLVLjC4Y.jpg', 'name': 'Гуливатый Петр', 'id': 247196802}, {'ava': 'https://pp.userapi.com/c639830/v639830570/efc4/AJfMwR8gRGE.jpg', 'name': 'Костин Николай', 'id': 305541570}]
        },
        {name:'Стерлитамак',n:4,
        users:[{'ava': 'https://sun9-11.userapi.com/c840621/v840621884/4db2/QxXvBpaeQPk.jpg', 'name': 'Шаталина Стася', 'id': 67296270}, {'ava': 'https://pp.userapi.com/c836227/v836227201/54925/PPrFfqNTOfg.jpg', 'name': 'Сайфутдинов Ильгам', 'id': 94641890}, {'ava': 'https://sun9-11.userapi.com/c840624/v840624656/3c27/qRQUb7BAaBg.jpg', 'name': 'Шибирдин Айдар', 'id': 137777774}, {'ava': 'https://pp.userapi.com/c841239/v841239724/7ffb/EdGYkuSDBu0.jpg', 'name': 'Габбасова Екатерина', 'id': 276168724}]
        },
        {name:'Сургут',n:4,
        users:[{'ava': 'https://pp.userapi.com/c837436/v837436875/4b771/6-XAtzg7NV8.jpg', 'name': 'Пушкарёв Иван', 'id': 49688223}, {'ava': 'https://pp.userapi.com/c623922/v623922938/4aaf5/adkT93Dukow.jpg', 'name': 'Сусликов Сергей', 'id': 111361938}, {'ava': 'https://pp.userapi.com/c639628/v639628879/43e1c/M_tj-HlHIDE.jpg', 'name': 'Сербова Леночка', 'id': 128214778}, {'ava': 'https://pp.userapi.com/c630129/v630129135/14d09/IeDLVaD9xbs.jpg', 'name': 'Васильковский Роман', 'id': 226569135}]
        },
        {name:'Сыктывкар',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638918/v638918353/4ae7d/qqUc0mRKxAo.jpg', 'name': 'Абдурманов Денис', 'id': 27486415}]
        },
        {name:'Тамбов',n:13,
        users:[{'ava': 'https://pp.userapi.com/c841127/v841127241/9ece/C5trMbtvuh4.jpg', 'name': 'Абраменко Сергей', 'id': 21793671}, {'ava': 'https://pp.userapi.com/c638220/v638220494/843f7/LsuJs6y_zHo.jpg', 'name': 'Зеленов Олег', 'id': 47951627}, {'ava': 'https://pp.userapi.com/c621826/v621826439/3962b/-BtjHpK4XGY.jpg', 'name': 'Болдина Светлана', 'id': 51154096}, {'ava': 'https://pp.userapi.com/c639321/v639321330/28853/XT-4BeOV23I.jpg', 'name': 'Жилин Вадим', 'id': 53099330}, {'ava': 'https://pp.userapi.com/c841522/v841522239/17593/6rKf3O0cfzo.jpg', 'name': 'Горелкин Дмитрий', 'id': 148146737}, {'ava': 'https://pp.userapi.com/c837227/v837227121/517e7/2N4b72tmomg.jpg', 'name': 'Конфетова Лана', 'id': 215571130}, {'ava': 'https://pp.userapi.com/c636416/v636416671/c93f/Y_fnVrNGAeo.jpg', 'name': 'Медведев Михаил', 'id': 224243671}, {'ava': 'https://pp.userapi.com/c836529/v836529148/5013c/nAbLAITNwx8.jpg', 'name': 'Лотц Николай', 'id': 236315289}, {'ava': 'https://pp.userapi.com/c627424/v627424879/81a0/VIQ1UjnAg6A.jpg', 'name': 'Третьяков Фёдор', 'id': 241284879}, {'ava': 'https://pp.userapi.com/c620922/v620922718/15193/m-0C_lQxm64.jpg', 'name': 'Gorelkina Virsaviya', 'id': 269815718}, {'ava': 'https://pp.userapi.com/c638127/v638127263/5b417/DuZLR3_DQqM.jpg', 'name': 'Носова Наташа', 'id': 308373393}, {'ava': 'https://pp.userapi.com/c840221/v840221354/2e325/IPrQFiaiww8.jpg', 'name': 'Лакомкин Виталий', 'id': 337541081}, {'ava': 'https://pp.userapi.com/c639528/v639528930/35da9/RzSsDWpyzHQ.jpg', 'name': 'Панин Борис', 'id': 358478174}]
        },
        {name:'Тверь',n:13,
        users:[{'ava': 'https://pp.userapi.com/c638020/v638020169/3c3b2/KUZngzfFiuw.jpg', 'name': 'Котелевская Юлия', 'id': 461169}, {'ava': 'https://pp.userapi.com/c836333/v836333244/7509f/FZCZgyeD2Ys.jpg', 'name': 'Оленченко Ольга', 'id': 2467413}, {'ava': 'https://pp.userapi.com/c837222/v837222664/573d4/NpstSYUXriM.jpg', 'name': 'Лебедева Вера', 'id': 3129723}, {'ava': 'https://pp.userapi.com/c627822/v627822771/1717c/0WzzPXbOmqM.jpg', 'name': 'Титова Елена', 'id': 13352771}, {'ava': 'https://pp.userapi.com/c837635/v837635917/65734/Ly9LQa-xwY4.jpg', 'name': 'Кора Алёна', 'id': 65057558}, {'ava': 'https://pp.userapi.com/c620720/v620720182/13e17/3jnqUse5VNw.jpg', 'name': 'Карасёв Алексей', 'id': 90777182}, {'ava': 'https://pp.userapi.com/c836620/v836620424/5360c/_g2KrsC37Ng.jpg', 'name': 'Каулина Александра', 'id': 211894347}, {'ava': 'https://pp.userapi.com/c837236/v837236054/1aa/4_8a6WDuR_c.jpg', 'name': 'Прокофьева Лариса', 'id': 237280054}, {'ava': 'https://pp.userapi.com/c841521/v841521459/1bef7/9ao1BAfnwEc.jpg', 'name': 'Глущенко Олеся', 'id': 237817481}, {'ava': 'https://pp.userapi.com/c837435/v837435975/8f4f0/Wd_qoJvVDhg.jpg', 'name': 'Кот Алина', 'id': 303397799}, {'ava': 'https://pp.userapi.com/c623724/v623724545/36be5/ckXj2Te-Pjo.jpg', 'name': 'Медовая Ирина', 'id': 306100545}, {'ava': 'https://pp.userapi.com/c637429/v637429432/10fb2/vdvYJWMjrOI.jpg', 'name': 'Колосай Юрий', 'id': 323476432}, {'ava': 'https://pp.userapi.com/c638625/v638625402/50239/kDSj22yjEt0.jpg', 'name': 'Поселенова Ульяна', 'id': 323495175}]
        },
        {name:'Тольятти',n:7,
        users:[{'ava': 'https://sun9-11.userapi.com/c840523/v840523796/7abd/JHeNspGgYCY.jpg', 'name': 'Панченко Евгения', 'id': 1901933}, {'ava': 'https://pp.userapi.com/c841325/v841325806/1b23b/GRBj6IQjg88.jpg', 'name': 'Белякова Екатерина', 'id': 2737052}, {'ava': 'https://pp.userapi.com/c622121/v622121017/c56c/8FtSO6uCc6o.jpg', 'name': 'Набиев Андрей', 'id': 2896017}, {'ava': 'https://pp.userapi.com/c841230/v841230739/f6f0/lkJ6TGV2aCM.jpg', 'name': 'Митрофанов Роман', 'id': 4470782}, {'ava': 'https://pp.userapi.com/c841423/v841423069/1ef3f/v_apyjrudi4.jpg', 'name': 'Чахеев Юрий', 'id': 12306199}, {'ava': 'https://pp.userapi.com/c637323/v637323197/79f/fsGWdJwRzmA.jpg', 'name': 'Серов Игорь', 'id': 23267197}, {'ava': 'https://pp.userapi.com/c639831/v639831107/3d44f/1ywN9OKJ3k4.jpg', 'name': 'Максимов Валентин', 'id': 23628093}]
        },
        {name:'Томск',n:7,
        users:[{'ava': 'https://pp.userapi.com/c638825/v638825212/661c1/h1SyTKipWPU.jpg', 'name': 'Филатов Егор', 'id': 2110409}, {'ava': 'https://pp.userapi.com/c639123/v639123867/3abff/C5U9-pANKCo.jpg', 'name': 'Мицкевич Антон', 'id': 6914805}, {'ava': 'https://pp.userapi.com/c5353/u104430511/e_61c15fa5.jpg', 'name': 'Калинин Андрей', 'id': 104430511}, {'ava': 'https://pp.userapi.com/c639427/v639427730/3ebd3/-sDwa17fMiY.jpg', 'name': 'Некрасов Слава', 'id': 159891193}, {'ava': 'https://pp.userapi.com/c639425/v639425571/3c67b/bu_iPzxf6w4.jpg', 'name': 'Хомченко Дмитрий', 'id': 181878682}, {'ava': 'https://pp.userapi.com/c638431/v638431415/197db/89c26m-aFd8.jpg', 'name': 'Бетенекова Надежда', 'id': 184076415}, {'ava': 'https://pp.userapi.com/c837429/v837429056/512a4/xJlcTcfeaFg.jpg', 'name': 'Котова Наталия', 'id': 292485697}]
        },
        {name:'Тула',n:14,
        users:[{'ava': 'https://pp.userapi.com/c639919/v639919567/38bad/43VuAUBUBhk.jpg', 'name': 'Bogolyubova Dasha', 'id': 2320936}, {'ava': 'https://pp.userapi.com/c613519/v613519158/2710b/mzr3W_2H8EM.jpg', 'name': 'Высоцкий Виталий', 'id': 6458158}, {'ava': 'https://pp.userapi.com/c604323/v604323103/f9a2/VQQ0FnECt7U.jpg', 'name': 'Чуйкин Павел', 'id': 9706103}, {'ava': 'https://pp.userapi.com/c622017/v622017801/41964/XwUF225DS38.jpg', 'name': 'Голоскоков Николай', 'id': 9783801}, {'ava': 'https://pp.userapi.com/c630618/v630618390/ea32/wsUwHsgCRRE.jpg', 'name': 'Usanov Andrew', 'id': 19111390}, {'ava': 'https://pp.userapi.com/c628225/v628225965/3dd4b/UQtknw4tlWg.jpg', 'name': 'Сидоров Павел', 'id': 23502965}, {'ava': 'https://pp.userapi.com/c618323/v618323844/15dc5/2cnorilrtoM.jpg', 'name': 'Гавриков Александр', 'id': 27630844}, {'ava': 'https://pp.userapi.com/c841629/v841629285/c997/284emjyRZnM.jpg', 'name': 'Толмачева Наталия', 'id': 60460448}, {'ava': 'https://pp.userapi.com/c639422/v639422260/49fc/omOX2magd2Q.jpg', 'name': 'Пятчанин Иван', 'id': 65834260}, {'ava': 'https://pp.userapi.com/c619526/v619526724/19694/CYhnSft2gmM.jpg', 'name': 'Кузнецов Андрей', 'id': 109846724}, {'ava': 'https://pp.userapi.com/c638826/v638826231/584cd/UPRHlD7yLqU.jpg', 'name': 'Гончаров Артем', 'id': 199564485}, {'ava': 'https://pp.userapi.com/c412228/v412228576/32be/7hgSK_9iiQA.jpg', 'name': 'Сидоров Сергей', 'id': 221116576}, {'ava': 'https://pp.userapi.com/c639316/v639316092/2c9e4/RVWcR8ok_u8.jpg', 'name': 'Григорьева Ирина', 'id': 243930092}, {'ava': 'https://pp.userapi.com/c837331/v837331783/443f2/C-ibr2EKLKY.jpg', 'name': 'Кашковский Владимир', 'id': 428787783}]
        },
        {name:'Тюмень',n:24,
        users:[{'ava': 'https://pp.userapi.com/c424231/v424231182/9945/5FaSD9_Pa2c.jpg', 'name': 'Антоненко Сергей', 'id': 1177182}, {'ava': 'https://pp.userapi.com/c631220/v631220593/23d26/rAfrvV5hXJM.jpg', 'name': 'Ушаров Дмитрий', 'id': 1507593}, {'ava': 'https://pp.userapi.com/c307503/v307503486/4da5/dp_cUlWqnj8.jpg', 'name': 'Куликова Елена', 'id': 2673486}, {'ava': 'https://pp.userapi.com/c837536/v837536607/3af8e/kvKpEVm6IHc.jpg', 'name': 'Берг Владимир', 'id': 3959607}, {'ava': 'https://sun9-11.userapi.com/c840524/v840524890/1af4/ESqSpBv2xpA.jpg', 'name': 'Чалков Михаил', 'id': 4154708}, {'ava': 'https://pp.userapi.com/c628519/v628519176/55a6/Au9W3pPY1gc.jpg', 'name': 'Скорнякова Анна', 'id': 6256176}, {'ava': 'https://pp.userapi.com/c626120/v626120379/57d85/1B-xC9lYMAg.jpg', 'name': 'Степанов Иннокентий', 'id': 7189379}, {'ava': 'https://pp.userapi.com/c841538/v841538851/20274/0vOOrkcu_J8.jpg', 'name': 'Климович Марина', 'id': 10906067}, {'ava': 'https://pp.userapi.com/c629117/v629117688/26333/hXLcM7NS7Y8.jpg', 'name': 'Коваленко Евгений', 'id': 13450688}, {'ava': 'https://pp.userapi.com/c638519/v638519006/470ac/4u1QqN5pxq0.jpg', 'name': 'Онохов Леонид', 'id': 13814006}, {'ava': 'https://pp.userapi.com/c836626/v836626488/56b4f/r3PQqcw4HGI.jpg', 'name': 'Гимадиева Анастасия', 'id': 14302219}, {'ava': 'https://pp.userapi.com/c627329/v627329333/3ddd5/H0xg0lBnnyE.jpg', 'name': 'Яковлев Евгений', 'id': 15157333}, {'ava': 'https://pp.userapi.com/c638023/v638023989/7fc0/sxMgt21hJfI.jpg', 'name': 'Тюменцев Сергей', 'id': 16192989}, {'ava': 'https://pp.userapi.com/c836528/v836528741/6384e/urrl1LjHPBg.jpg', 'name': 'Жидков Андрей', 'id': 22455024}, {'ava': 'https://pp.userapi.com/c638130/v638130967/84963/C4dGaO1hgyw.jpg', 'name': 'Филимонов Николай', 'id': 55065023}, {'ava': 'https://pp.userapi.com/c626129/v626129799/647e4/dZ8tcUGI3Wg.jpg', 'name': 'Данилова Наталья', 'id': 66176799}, {'ava': 'https://pp.userapi.com/c636927/v636927186/4b95b/SbTm_nYtgVc.jpg', 'name': 'Хохлова Наталья', 'id': 84988186}, {'ava': 'https://sun9-11.userapi.com/c836621/v836621785/496da/goZxFea-TTM.jpg', 'name': 'Коротун Юрий', 'id': 98580785}, {'ava': 'https://pp.userapi.com/c836528/v836528930/606e5/pMWt3-29tn4.jpg', 'name': 'Щеглова Светлана', 'id': 223589794}, {'ava': 'https://pp.userapi.com/c837630/v837630842/26250/yYgRGN3AsfU.jpg', 'name': 'Kuandykov Bahtiyar', 'id': 245370842}, {'ava': 'https://pp.userapi.com/c837633/v837633914/2ddec/wdQO_k6k7CM.jpg', 'name': 'Мякишев Виктор', 'id': 276038914}, {'ava': 'https://pp.userapi.com/c837538/v837538106/70ffa/fc9tcQvBUtk.jpg', 'name': 'Гайнулина Милена', 'id': 321006083}, {'ava': 'https://pp.userapi.com/c836128/v836128459/431ef/4xuROtm2JF0.jpg', 'name': 'Дегтярёва Анастасия', 'id': 323649459}, {'ava': 'https://pp.userapi.com/c638631/v638631799/66817/tNY7tQWYvMY.jpg', 'name': 'Leonteva Elena', 'id': 385417721}]
        },
        {name:'Улан-Удэ',n:5,
        users:[{'ava': 'https://pp.userapi.com/c639116/v639116577/ba55/EoTQbPG02AU.jpg', 'name': 'Измайлов Александр', 'id': 10378577}, {'ava': 'https://pp.userapi.com/c837522/v837522718/46814/Z2QjZJ4OX94.jpg', 'name': 'Мальцев Павел', 'id': 21258718}, {'ava': 'https://pp.userapi.com/c837721/v837721867/4d2c4/J73MDHA5ZK0.jpg', 'name': 'Санжижапова Юлия', 'id': 68563867}, {'ava': 'https://pp.userapi.com/c637427/v637427905/5c357/M4G_Oh2bhH8.jpg', 'name': 'Тирская Юля', 'id': 113877922}, {'ava': 'https://pp.userapi.com/c637130/v637130034/e787/9Rp7T27max4.jpg', 'name': 'Sungrapov Bato', 'id': 377232034}]
        },
        {name:'Ульяновск',n:12,
        users:[{'ava': 'https://pp.userapi.com/c638727/v638727335/37f75/t0ZM_jfZYYA.jpg', 'name': 'Алексеев Антон', 'id': 13434335}, {'ava': 'https://pp.userapi.com/c638125/v638125848/1d07c/BdoI9xQYfPE.jpg', 'name': 'Каменская Виктория', 'id': 15248848}, {'ava': 'https://pp.userapi.com/c408118/v408118707/9d9b/EKLuM1gUVmo.jpg', 'name': 'Колотик-Каменева Олеся', 'id': 24508707}, {'ava': 'https://pp.userapi.com/c638123/v638123484/4a457/RQDOY7Xs75g.jpg', 'name': 'Афанасьева Алёна', 'id': 25514711}, {'ava': 'https://pp.userapi.com/c639530/v639530863/13630/RK3bbn-03FY.jpg', 'name': 'Якушев Андрей', 'id': 61804863}, {'ava': 'https://pp.userapi.com/c837631/v837631146/17e83/5kLxCn19oWM.jpg', 'name': 'Родионов Степан', 'id': 63913146}, {'ava': 'https://pp.userapi.com/c638426/v638426830/34e19/ljVE7FAz1Zo.jpg', 'name': 'Приголовкин Василий', 'id': 219227830}, {'ava': 'https://pp.userapi.com/c636722/v636722949/3947e/w-i_xmFIqqE.jpg', 'name': 'Сидоров Вячеслав', 'id': 248482949}, {'ava': 'https://pp.userapi.com/c638630/v638630462/5b5c3/poc6xy8Mlr4.jpg', 'name': 'Панова Ольга', 'id': 265267462}, {'ava': 'https://pp.userapi.com/c841532/v841532110/1e618/kkN-bgc_Vlc.jpg', 'name': 'Михайловна Анна', 'id': 276515448}, {'ava': 'https://pp.userapi.com/c631228/v631228994/27508/8KLu7cdn4qw.jpg', 'name': 'Колотик Лена', 'id': 331011994}, {'ava': 'https://pp.userapi.com/c630826/v630826012/477b0/unqnx2fd0i8.jpg', 'name': 'Садовников Дмитрий', 'id': 381329012}]
        },
        {name:'Уссурийск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c312617/v312617242/a0fa/FzbLVw4_XD8.jpg', 'name': 'Скобеев Роман', 'id': 17930242}, {'ava': 'https://pp.userapi.com/c836323/v836323246/a1d5/ETZgjQ37sqI.jpg', 'name': 'Плеханов Денис', 'id': 44364246}]
        },
        {name:'Уфа',n:25,
        users:[{'ava': 'https://pp.userapi.com/c629529/v629529262/3118e/QB3UcOHX2cU.jpg', 'name': 'Газиев Рафаэль', 'id': 413262}, {'ava': 'https://pp.userapi.com/c637424/v637424334/540b9/6LAn8kF9b9w.jpg', 'name': 'Фахретдинова Диана', 'id': 548334}, {'ava': 'https://pp.userapi.com/c604726/v604726928/2a23f/blFVlBIQWUE.jpg', 'name': 'Фаткуллин Ринат', 'id': 9435928}, {'ava': 'https://pp.userapi.com/c461/v461838/12/qXdmRnO8Of4.jpg', 'name': 'Нафиков Ильдар', 'id': 9813838}, {'ava': 'https://pp.userapi.com/c836522/v836522546/48284/_e7PQ2qsT60.jpg', 'name': 'Киселева Надежда', 'id': 32283546}, {'ava': 'https://pp.userapi.com/c841023/v841023823/139c7/vzWXR0rd-4U.jpg', 'name': 'Володина Наталья', 'id': 34822990}, {'ava': 'https://pp.userapi.com/c837635/v837635338/43ae8/0w2m3MmQeIw.jpg', 'name': 'Фазылова Дилара', 'id': 42648338}, {'ava': 'https://pp.userapi.com/c626631/v626631312/60a34/-_QQHdxldeQ.jpg', 'name': 'Дельмухаметова Индира', 'id': 58249312}, {'ava': 'https://pp.userapi.com/c840336/v840336938/1edd/VPeb1SEVmyQ.jpg', 'name': 'Исхакова Эвелина', 'id': 124939421}, {'ava': 'https://pp.userapi.com/c639724/v639724406/5849b/ObIGKRo9K_U.jpg', 'name': 'Дворецких Иван', 'id': 134026566}, {'ava': 'https://pp.userapi.com/c841137/v841137219/ec8/prrs7dIJ-Q0.jpg', 'name': 'Сайфуллин Марат', 'id': 135494219}, {'ava': 'https://pp.userapi.com/c837326/v837326681/42d73/n7s2glxPH9I.jpg', 'name': 'Рашитова Алина', 'id': 136943681}, {'ava': 'https://pp.userapi.com/c837525/v837525516/5f883/igyO5viSok0.jpg', 'name': 'Жоглик Ольга', 'id': 139099001}, {'ava': 'https://pp.userapi.com/c840433/v840433136/6d9e/RhIMHTNyVtg.jpg', 'name': 'Нуриев Нурлан', 'id': 146275475}, {'ava': 'https://sun9-11.userapi.com/c837537/v837537337/41325/eILI59uq1rI.jpg', 'name': 'Исенбаева Надежда', 'id': 148938337}, {'ava': 'https://pp.userapi.com/c841228/v841228431/1900f/Gsn_j2L0XIk.jpg', 'name': 'Махмутов Вильдан', 'id': 151151232}, {'ava': 'https://pp.userapi.com/c639719/v639719311/4ad0c/XaNjvnKKEzc.jpg', 'name': 'Саттарова Гузель', 'id': 156906657}, {'ava': 'https://pp.userapi.com/c631326/v631326742/5039a/OZ8zHqdsUVo.jpg', 'name': 'Родионов Александр', 'id': 223318742}, {'ava': 'https://pp.userapi.com/c837438/v837438703/48cb0/j6bPMFxvZys.jpg', 'name': 'Хусаинов Артур', 'id': 228832193}, {'ava': 'https://pp.userapi.com/c837628/v837628815/5e483/HB12wT291qQ.jpg', 'name': 'Ахметсафина Карина', 'id': 252361381}, {'ava': 'https://pp.userapi.com/c637728/v637728451/6fa53/kWSSinYr7pY.jpg', 'name': 'Маратович Батыр', 'id': 263099609}, {'ava': 'https://pp.userapi.com/c841628/v841628760/f234/OztHmGC6GqI.jpg', 'name': 'Ахметов Флорид', 'id': 287894886}, {'ava': 'https://pp.userapi.com/c841129/v841129918/f33/yXo08tBigyc.jpg', 'name': 'Лахов Дмитрий', 'id': 320813918}, {'ava': 'https://pp.userapi.com/c636329/v636329419/3e480/Q_ebJPUO-vI.jpg', 'name': 'Файрузов Расим', 'id': 364770419}, {'ava': 'https://pp.userapi.com/c638025/v638025369/61409/MCaY0NB6Nk4.jpg', 'name': 'Ivanov Ivan', 'id': 385253811}]
        },
        {name:'Ухта',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639831/v639831822/4c327/J2L1bmXlUMQ.jpg', 'name': 'Ванеев Денис', 'id': 54791405}]
        },
        {name:'Хабаровск',n:6,
        users:[{'ava': 'https://pp.userapi.com/c841428/v841428505/1683d/vtfVTiUY9BI.jpg', 'name': 'Цветников Владимир', 'id': 4920503}, {'ava': 'https://pp.userapi.com/c616922/v616922742/192b5/rh20Lgt2nuk.jpg', 'name': 'Пасечник Андрей', 'id': 7207742}, {'ava': 'https://pp.userapi.com/c639528/v639528022/422f3/l2TbbrYZRlI.jpg', 'name': 'Бурдуковский Алексей', 'id': 13346801}, {'ava': 'https://pp.userapi.com/c625318/v625318216/30c6/Xjqvo9qQILk.jpg', 'name': 'Мезенцев Ульян', 'id': 186190216}, {'ava': 'https://pp.userapi.com/c638818/v638818498/5c750/AZecEzpNQFM.jpg', 'name': 'Байрамова Настя', 'id': 229639752}, {'ava': 'https://pp.userapi.com/c636225/v636225819/cebf/3CRj86WPOTg.jpg', 'name': 'Боровик Сергей', 'id': 230719819}]
        },
        {name:'Химки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639424/v639424246/3c5aa/seaXuf7fCrQ.jpg', 'name': 'Костенко Мария', 'id': 24840024}]
        },
        {name:'Чайковский',n:3,
        users:[{'ava': 'https://pp.userapi.com/c604531/v604531917/332fd/H7C-h47wGLw.jpg', 'name': 'Наборщиков Алексей', 'id': 5913917}, {'ava': 'https://pp.userapi.com/c408318/v408318425/89d0/GWndzsq9BiM.jpg', 'name': 'Кетов Данил', 'id': 71199425}, {'ava': 'https://pp.userapi.com/c639723/v639723378/98f2/13BDek5V5nQ.jpg', 'name': 'Леонид Тихомиров', 'id': 329845378}]
        },
        {name:'Чебоксары',n:10,
        users:[{'ava': 'https://pp.userapi.com/c630625/v630625485/3fe0b/WCisM2he6pE.jpg', 'name': 'Аникина Елена', 'id': 11028485}, {'ava': 'https://pp.userapi.com/c626730/v626730523/27a7c/FC-ImxvmPQU.jpg', 'name': 'Мясников Евгений', 'id': 12111523}, {'ava': 'https://pp.userapi.com/c841526/v841526505/9b6b/RX1Kk1awOzg.jpg', 'name': 'Едифанов Юрий', 'id': 17479505}, {'ava': 'https://pp.userapi.com/c637124/v637124057/4eddb/wBrOQF8gVw4.jpg', 'name': 'Сергеев Андрей', 'id': 21808057}, {'ava': 'https://pp.userapi.com/c841429/v841429850/1ca5e/5DfcG5glBWg.jpg', 'name': 'Борисова Татьяна', 'id': 47078399}, {'ava': 'https://sun9-11.userapi.com/c639622/v639622941/37001/HIwTXcqF64M.jpg', 'name': 'Матвеев Денис', 'id': 56905249}, {'ava': 'https://pp.userapi.com/c840231/v840231407/23fd4/cxcqX12eK6s.jpg', 'name': 'Трофимова Даша', 'id': 157814656}, {'ava': 'https://pp.userapi.com/c310816/v310816865/692b/MZqORWJWoL4.jpg', 'name': 'Перлов Алексей', 'id': 183865865}, {'ava': 'https://pp.userapi.com/c639417/v639417276/10c9c/TLa0uMDriSI.jpg', 'name': 'Козлова Катя', 'id': 191573276}, {'ava': 'https://pp.userapi.com/c625119/v625119011/2dca1/ytu04I1a9zE.jpg', 'name': 'Петров Лев', 'id': 268078011}]
        },
        {name:'Челябинск',n:42,
        users:[{'ava': 'https://pp.userapi.com/c840028/v840028728/23cde/lx0UG-nlL8w.jpg', 'name': 'Сажин Евгений', 'id': 619131}, {'ava': 'https://pp.userapi.com/c624328/v624328682/4c07a/aKYMSB9UdA0.jpg', 'name': 'Шумилов Владимир', 'id': 3378682}, {'ava': 'https://pp.userapi.com/c5490/u4056115/e_8f049e8c.jpg', 'name': 'Кожухова Ирина', 'id': 4056115}, {'ava': 'https://pp.userapi.com/c638818/v638818734/52933/KmwQaiti1cs.jpg', 'name': 'Зуев Сергей', 'id': 6150196}, {'ava': 'https://pp.userapi.com/c637326/v637326572/2622a/EGk3r6Ixqqg.jpg', 'name': 'Конюхова Гульнара', 'id': 7270572}, {'ava': 'https://pp.userapi.com/c639123/v639123827/1beaf/cnJRHPFWkYA.jpg', 'name': 'Смеян Катрин', 'id': 8324827}, {'ava': 'https://pp.userapi.com/c626730/v626730506/37858/xPTS6aW1k0E.jpg', 'name': 'Холодилина Наталья', 'id': 9241506}, {'ava': 'https://sun9-11.userapi.com/c840530/v840530991/7e7a/Ftdzy3SDOpA.jpg', 'name': 'Зиатдинов Марат', 'id': 9588401}, {'ava': 'https://pp.userapi.com/c302801/u14952813/e_0101424b.jpg', 'name': 'Котов Виктор', 'id': 14952813}, {'ava': 'https://pp.userapi.com/c840136/v840136901/17e43/yeHIPnZRZww.jpg', 'name': 'Гайнуллина Лиана', 'id': 16520721}, {'ava': 'https://sun9-11.userapi.com/c840726/v840726091/88f1/o66Jrlku1TM.jpg', 'name': 'Кашкарова Яна', 'id': 17828431}, {'ava': 'https://pp.userapi.com/c638919/v638919463/54c9a/pEnmM3bA96I.jpg', 'name': 'Кочеткова Анастасия', 'id': 17902358}, {'ava': 'https://pp.userapi.com/c836322/v836322665/1fe71/MXl-jwx7ZU4.jpg', 'name': 'Крыванов Данила', 'id': 22345665}, {'ava': 'https://pp.userapi.com/c638527/v638527210/59f32/Rh58JIfqhbU.jpg', 'name': 'Честюнин Андрей', 'id': 22608638}, {'ava': 'https://pp.userapi.com/c638730/v638730833/45dc9/zWP1p0aMqUQ.jpg', 'name': 'Ворухайло Дмитрий', 'id': 22684833}, {'ava': 'https://pp.userapi.com/c618330/v618330869/1c75f/qlQbilHgMvA.jpg', 'name': 'Абрамов Антоха', 'id': 23256869}, {'ava': 'https://pp.userapi.com/c623119/v623119480/343b5/7DF3h1lb23Q.jpg', 'name': 'Быкова Ирина', 'id': 26049480}, {'ava': 'https://pp.userapi.com/c836236/v836236669/89993/LyC4ObeC7qo.jpg', 'name': 'Мезенцев Валерий', 'id': 26723228}, {'ava': 'https://pp.userapi.com/c837620/v837620162/4aa07/8mkf59pCAPw.jpg', 'name': 'Устюгов Сергей', 'id': 28558740}, {'ava': 'https://pp.userapi.com/c639917/v639917793/482f5/FxXTuW3MINA.jpg', 'name': 'Петрова Марина', 'id': 28710230}, {'ava': 'https://pp.userapi.com/c836529/v836529643/83ab4/JhXRmI1BDfc.jpg', 'name': 'Мартакова Ирина', 'id': 29574744}, {'ava': 'https://pp.userapi.com/c836430/v836430096/557d0/m1dNhrlQrns.jpg', 'name': 'Ефремов Игорь', 'id': 56252745}, {'ava': 'https://pp.userapi.com/c836127/v836127552/5a3f7/KY7fngM6KJA.jpg', 'name': 'Юлдыбаева Лариса', 'id': 63608351}, {'ava': 'https://pp.userapi.com/c637529/v637529242/36d7/KiWsMpPEtqo.jpg', 'name': 'Ростовская Алина', 'id': 81264242}, {'ava': 'https://pp.userapi.com/c840424/v840424314/8ba4/bCiFP0LfBtk.jpg', 'name': 'Валиханов Роман', 'id': 88334799}, {'ava': 'https://pp.userapi.com/c841633/v841633023/c0a/-zkF-bwZYmI.jpg', 'name': 'Приходько Владимир', 'id': 90211023}, {'ava': 'https://pp.userapi.com/c618718/v618718251/1c9cb/BxhRkNNfPFU.jpg', 'name': 'Карелин Алексей', 'id': 98168251}, {'ava': 'https://pp.userapi.com/c637526/v637526871/5b9d5/NhAVPWNS59w.jpg', 'name': 'Юзеев Николай', 'id': 119581871}, {'ava': 'https://pp.userapi.com/c837736/v837736604/3aa91/ybzcRNrrlQ4.jpg', 'name': 'Спирин Максим', 'id': 119694604}, {'ava': 'https://pp.userapi.com/c626319/v626319223/5e1e1/_DN_vlm8mrU.jpg', 'name': 'Власенко Валерия', 'id': 142079244}, {'ava': 'https://pp.userapi.com/c836324/v836324541/5e3fe/IEd697VClqI.jpg', 'name': 'Сажаев Алексей', 'id': 159021229}, {'ava': 'https://pp.userapi.com/c841026/v841026603/1cfb0/WKN7125ogmY.jpg', 'name': 'Закирова Юлия', 'id': 183847762}, {'ava': 'https://pp.userapi.com/c841037/v841037811/16980/hiiIkVCRcnw.jpg', 'name': 'Потапушкин Алексей', 'id': 220716036}, {'ava': 'https://pp.userapi.com/c836331/v836331086/64f78/5UBvaslIvWk.jpg', 'name': 'Плотников Иван', 'id': 243791744}, {'ava': 'https://pp.userapi.com/c622931/v622931485/34034/E2Pa6bw8Qg4.jpg', 'name': 'Александрович Евгений', 'id': 304292485}, {'ava': 'https://pp.userapi.com/c836334/v836334557/27af0/aHPjE2ffdtI.jpg', 'name': 'Makhmuzov Kayum', 'id': 315609557}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Бушминкин Алексей', 'id': 324036998}, {'ava': 'https://pp.userapi.com/c841031/v841031972/7a1c/w9u5UfyIGq0.jpg', 'name': 'Румянцева Эллина', 'id': 332837972}, {'ava': 'https://pp.userapi.com/c638729/v638729945/51753/8x81bWZweoc.jpg', 'name': 'Галямова Наталия', 'id': 336838296}, {'ava': 'https://pp.userapi.com/c638124/v638124988/61b9a/ZDCZjkpnEC0.jpg', 'name': 'Кёниг Павел', 'id': 377489988}, {'ava': 'https://pp.userapi.com/c841533/v841533135/19c68/C_nx9Q1vyKI.jpg', 'name': 'Назимова Настасья', 'id': 404728293}, {'ava': 'https://pp.userapi.com/c638128/v638128848/591ac/R-nr9-oq2R8.jpg', 'name': 'Терентьева Ольга', 'id': 405265227}]
        },
        {name:'Грозный',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626222/v626222911/33b3b/P0rbexqrFwM.jpg', 'name': 'Nurmagomedov Muslim', 'id': 393909911}]
        },
        {name:'Чита',n:9,
        users:[{'ava': 'https://pp.userapi.com/c836324/v836324368/65545/cVCdBUpuJ7Y.jpg', 'name': 'Брюханов Андрей', 'id': 84721963}, {'ava': 'https://pp.userapi.com/c638018/v638018935/581a1/Ay4-BAI-vgM.jpg', 'name': 'Гайко Леонид', 'id': 144831059}, {'ava': 'https://pp.userapi.com/c836224/v836224885/5b326/Gxp6fNRZjE0.jpg', 'name': 'Смирнова Елена', 'id': 177496682}, {'ava': 'https://pp.userapi.com/c840139/v840139594/27649/MynajCrIk6w.jpg', 'name': 'Петрулина Надежда', 'id': 203634310}, {'ava': 'https://pp.userapi.com/c625619/v625619405/13049/o81jP5kN9R4.jpg', 'name': 'Карбушев Михаил', 'id': 207296405}, {'ava': 'https://pp.userapi.com/c639125/v639125793/51845/-TNj1HbFPNg.jpg', 'name': 'Горбунов Виталька', 'id': 293624888}, {'ava': 'https://pp.userapi.com/c636922/v636922956/4279d/TjAkp2hTQRA.jpg', 'name': 'Аксентьев Александр', 'id': 296005956}, {'ava': 'https://pp.userapi.com/c639830/v639830971/4e4e4/8qGz_naiwgw.jpg', 'name': 'Кужелев Дмитрий', 'id': 324755951}, {'ava': 'https://pp.userapi.com/c628621/v628621679/2716c/dKvfPynEFOo.jpg', 'name': 'Savotenkov Artyom', 'id': 324989679}]
        },
        {name:'Шадринск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841230/v841230109/17e69/ms1MgtkYxII.jpg', 'name': 'Glushkov Kolyan', 'id': 401527452}]
        },
        {name:'Элиста',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604317/v604317962/1c15c/EzfFZ4E5sNU.jpg', 'name': 'Хаминова Анна', 'id': 282677962}]
        },
        {name:'Якутск',n:7,
        users:[{'ava': 'https://pp.userapi.com/c636424/v636424497/2cd64/YIU2t8w0G5Y.jpg', 'name': 'Григорьева Ульяна', 'id': 24410497}, {'ava': 'https://pp.userapi.com/c626520/v626520633/50cf7/FkXAtgSW_kM.jpg', 'name': 'Аммосов Алексей', 'id': 52720633}, {'ava': 'https://pp.userapi.com/c836129/v836129876/3238f/_guL1vZw9Uw.jpg', 'name': 'Титова Татьяна', 'id': 88353876}, {'ava': 'https://pp.userapi.com/c627924/v627924487/24464/bVm3MmpeJ28.jpg', 'name': 'Потапова Саина', 'id': 89708487}, {'ava': 'https://pp.userapi.com/c621621/v621621199/223bb/FYcOHUTl4Zc.jpg', 'name': 'Киров Андрей', 'id': 118944199}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Макаров Прокопий', 'id': 271904670}, {'ava': 'https://pp.userapi.com/c639918/v639918013/3bc8b/CUsccEgPb10.jpg', 'name': 'Давыдова Диана', 'id': 351422157}]
        },
        {name:'Ярославль',n:27,
        users:[{'ava': 'https://pp.userapi.com/c840220/v840220659/2a39b/BsmEPkrwwTQ.jpg', 'name': 'Овчинникова Татьянка', 'id': 24421575}, {'ava': 'https://pp.userapi.com/c636925/v636925152/5de26/B3bRPpe57Ow.jpg', 'name': 'Крюков Андрей', 'id': 49610152}, {'ava': 'https://pp.userapi.com/c314319/v314319613/42db/AZ-VjMORzO4.jpg', 'name': 'Nosov Pavel', 'id': 52864613},{'ava': 'https://pp.userapi.com/c637917/v637917979/45c4a/h5lMadzf0og.jpg', 'name': 'Гуляев Александр', 'id': 2146979}, {'ava': 'https://pp.userapi.com/c9988/u5661994/e_900f3f94.jpg', 'name': 'Лежнев Александр', 'id': 5661994}, {'ava': 'https://pp.userapi.com/c402830/v402830430/46b4/tHbP2C_uSrI.jpg', 'name': 'Малюков Евгений', 'id': 5695430}, {'ava': 'https://pp.userapi.com/c637529/v637529143/6474f/woiuILD49aM.jpg', 'name': 'Лобастов Дмитрий', 'id': 6319143}, {'ava': 'https://pp.userapi.com/c841532/v841532910/19b6d/UBgOBfl9AC4.jpg', 'name': 'Ершова Анюта', 'id': 11942715}, {'ava': 'https://pp.userapi.com/c639325/v639325810/33d95/LeT8Iasly2c.jpg', 'name': 'Куликова Любовь', 'id': 32719833}, {'ava': 'https://pp.userapi.com/c837720/v837720863/57a4f/Jv-9AySwAtw.jpg', 'name': 'Лебедева Анастасия', 'id': 49290231}, {'ava': 'https://sun9-11.userapi.com/c840622/v840622040/2ece/S-v281wTQGM.jpg', 'name': 'Кибалина Оля', 'id': 52224042}, {'ava': 'https://pp.userapi.com/c630326/v630326357/34baa/CZw4w52SosU.jpg', 'name': 'Кашин Александр', 'id': 59490357}, {'ava': 'https://pp.userapi.com/c628819/v628819065/1f50a/4vGnIjc2Tdo.jpg', 'name': 'Коробенина Оленька', 'id': 72139065}, {'ava': 'https://pp.userapi.com/c633230/v633230686/79dd/0IlKaYImDYk.jpg', 'name': 'Максимов Николай', 'id': 73963686}, {'ava': 'https://pp.userapi.com/c638922/v638922989/64ec8/BzcXcHK2SlI.jpg', 'name': 'Мокеева Виктория', 'id': 76297567}, {'ava': 'https://pp.userapi.com/c836431/v836431034/5beb0/wNw1Z2KmV7Q.jpg', 'name': 'Соловьева Елена', 'id': 116966867}, {'ava': 'https://pp.userapi.com/c837237/v837237387/36c70/5n-ZSP7Q0Ss.jpg', 'name': 'Карпенко Степан', 'id': 144294387}, {'ava': 'https://pp.userapi.com/c836622/v836622968/56107/TKIvZIq5cns.jpg', 'name': 'Овчинников Дмитрий', 'id': 145255259}, {'ava': 'https://pp.userapi.com/c630318/v630318349/45757/iwjpI1M1_cI.jpg', 'name': 'Bystrova Nata', 'id': 180326349}, {'ava': 'https://pp.userapi.com/c837236/v837236071/485af/9INypF7PdRc.jpg', 'name': 'Качалов Николай', 'id': 181114071}, {'ava': 'https://pp.userapi.com/c840330/v840330978/7c86/42z75fQ0-38.jpg', 'name': 'Павличенко Лада', 'id': 206578609}, {'ava': 'https://pp.userapi.com/c638629/v638629504/539c3/suweT5eA6QA.jpg', 'name': 'Юшкова Даша', 'id': 221995975}, {'ava': 'https://pp.userapi.com/c617327/v617327961/115e1/aOF5MaLgQP4.jpg', 'name': 'Тогер Данил', 'id': 223097961}, {'ava': 'https://pp.userapi.com/c638531/v638531986/4ba50/5B7I6iOAU6k.jpg', 'name': 'Матякин Андрей', 'id': 374075986}, {'ava': 'https://pp.userapi.com/c841526/v841526720/14450/fFj4wxQOxTE.jpg', 'name': 'Темников Артём', 'id': 386464288}, {'ava': 'https://pp.userapi.com/c840224/v840224331/d1f2/bflsGf9xViU.jpg', 'name': 'Soul Sergey', 'id': 403508331}, {'ava': 'https://pp.userapi.com/c837722/v837722575/5b6e7/1-ZrJvzvq44.jpg', 'name': 'Andronova Xenia', 'id': 408653105}]
        },
        {name:'Североморск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841634/v841634099/100ff/rlLfgnGp1G4.jpg', 'name': 'Цуман Евгений', 'id': 120213199}]
        },
        {name:'Апатиты',n:2,
        users:[{'ava': 'https://pp.userapi.com/c626429/v626429112/43b8c/yceg5OkalAk.jpg', 'name': 'Ретюнских Александра', 'id': 25299112}, {'ava': 'https://pp.userapi.com/c613516/v613516163/1cf4f/TJ0QC4ms000.jpg', 'name': 'Литош Михаил', 'id': 107112482}]
        },
        {name:'Выборг',n:4,
        users:[{'ava': 'https://pp.userapi.com/c638118/v638118062/543e8/V732SKFRPKE.jpg', 'name': 'Важенина Оксана', 'id': 5883692}, {'ava': 'https://pp.userapi.com/c402125/v402125520/7f38/HN0sERrbTB0.jpg', 'name': 'Лосев Сергей', 'id': 197488520}, {'ava': 'https://pp.userapi.com/c637428/v637428337/540f3/R_xH_I-oPf4.jpg', 'name': 'Иванов Евгений', 'id': 274891337}, {'ava': 'https://pp.userapi.com/c629527/v629527220/1c392/bGT3V3HJ1vk.jpg', 'name': 'Васильев Александр', 'id': 336564220}]
        },
        {name:'Тобольск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836329/v836329835/588ea/-CggCmbLezg.jpg', 'name': 'Ракецкая Елена', 'id': 1166642}, {'ava': 'https://pp.userapi.com/c836132/v836132736/41751/U2vlwNmEoc8.jpg', 'name': 'Гумеров Станислав', 'id': 159215736}]
        },
        {name:'Алматы',n:9,
        users:[{'ava': 'https://pp.userapi.com/c410421/v410421264/a983/Ghwo6Fr1w-Y.jpg', 'name': 'Ainabekov Azat', 'id': 1104264}, {'ava': 'https://pp.userapi.com/c412530/v412530195/98d1/F2E0hGLYCPs.jpg', 'name': 'Бойко Алексей', 'id': 5186195}, {'ava': 'https://pp.userapi.com/c639117/v639117313/2adc1/wgrAE7GYhFI.jpg', 'name': 'Билерт Оля', 'id': 18495313}, {'ava': 'https://pp.userapi.com/c637222/v637222626/3587c/6WsYB75fEE0.jpg', 'name': 'Аленова Рита', 'id': 148189626}, {'ava': 'https://pp.userapi.com/c623927/v623927350/13457/oBQL-UUFgqA.jpg', 'name': 'Абилбаев Данияр', 'id': 195348350}, {'ava': 'https://pp.userapi.com/c841039/v841039832/14f39/wV9uhNOwzro.jpg', 'name': 'Абдреев Ислам', 'id': 215227368}, {'ava': 'https://pp.userapi.com/c627627/v627627617/50c43/dgX5uZYKtb8.jpg', 'name': 'Кенжебакиев Нуржан', 'id': 268154617}, {'ava': 'https://pp.userapi.com/c836126/v836126688/5f89f/nSplhEfFXeo.jpg', 'name': 'Жакупов Арман', 'id': 272049984}, {'ava': 'https://sun9-11.userapi.com/c540109/v540109913/26aae/vWSJqLncXgo.jpg', 'name': 'Азаров Нурболат', 'id': 320511913}]
        },
        {name:'Севастополь',n:7,
        users:[{'ava': 'https://sun9-11.userapi.com/c840739/v840739788/3ddc/WOViZd5bKoQ.jpg', 'name': 'Мельникова Юлия', 'id': 1135085}, {'ava': 'https://pp.userapi.com/c626325/v626325663/82c28/ViIgN9JD7Ck.jpg', 'name': 'Ермолаев Алексей', 'id': 2353663}, {'ava': 'https://pp.userapi.com/c638929/v638929405/1b957/3mCAzE5Rtgg.jpg', 'name': 'Ойстрик Александр', 'id': 2541405}, {'ava': 'https://pp.userapi.com/c636228/v636228993/b57c/06tUhJ7E5to.jpg', 'name': 'Новак Василий', 'id': 7330993}, {'ava': 'https://pp.userapi.com/c638317/v638317302/3001f/J_Mq2Pv-I1M.jpg', 'name': 'Koltysheva Dasha', 'id': 7533302}, {'ava': 'https://pp.userapi.com/c638326/v638326022/492da/ziHqMXbLpqU.jpg', 'name': 'Волотко Михаил', 'id': 211256022}, {'ava': 'https://pp.userapi.com/c637622/v637622464/402b3/TzLvkRzy6XU.jpg', 'name': 'Королев Роман', 'id': 316089464}]
        },
        {name:'Тихвин',n:2,
        users:[{'ava': 'https://pp.userapi.com/c841239/v841239971/171be/938878JeHmg.jpg', 'name': 'Самигуллина Елена', 'id': 20672873}, {'ava': 'https://pp.userapi.com/c836532/v836532381/5fb3b/yLgGVNRlWdc.jpg', 'name': 'Мур Марина', 'id': 139663304}]
        },
        {name:'Мончегорск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c637125/v637125682/400cb/JmA9n1kNtnE.jpg', 'name': 'Амбулов Александр', 'id': 12581682}, {'ava': 'https://pp.userapi.com/c5849/u57338121/e_cb82ad88.jpg', 'name': 'Арашкевич Евгений', 'id': 57338121}, {'ava': 'https://pp.userapi.com/c407330/v407330532/9e9d/-JKwdozFMPY.jpg', 'name': 'Максимова Татьяна', 'id': 195540532}]
        },
        {name:'Воркута',n:1,
        users:[{'ava': 'https://pp.userapi.com/c622521/v622521791/3062d/AafB0wa-UMU.jpg', 'name': 'Митин Иван', 'id': 25122791}]
        },
        {name:'Ташкент',n:1,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Wrest Wrest', 'id': 354113971}]
        },
        {name:'Новомичуринск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837439/v837439904/5561c/5VQ4z2GpPmQ.jpg', 'name': 'Vad Vadim', 'id': 392865426}]
        },
        {name:'Бишкек',n:2,
        users:[{'ava': 'https://pp.userapi.com/c633423/v633423377/209c5/f7H6AisMbTg.jpg', 'name': 'Ревякин Андрей', 'id': 181146377}, {'ava': 'https://pp.userapi.com/c630431/v630431975/3e62b/2gL_YPZzzNI.jpg', 'name': 'Dead Drop', 'id': 206556975}]
        },
        {name:'Frankfurt am Main',n:2,
        users:[{'ava': 'https://pp.userapi.com/c631726/v631726354/5a/B8_Z6tNGQ_4.jpg', 'name': 'Bergerstein Alex', 'id': 334934354}, {'ava': 'https://pp.userapi.com/c837421/v837421664/56c1c/PUPrQf7-rDc.jpg', 'name': 'Константинов Алексей', 'id': 344394581}]
        },
        {name:'Донецк',n:9,
        users:[{'ava': 'https://pp.userapi.com/c840237/v840237017/1c97/eiPDVmJUEN8.jpg', 'name': 'Смоголь Виталий', 'id': 9945017}, {'ava': 'https://pp.userapi.com/c840221/v840221595/2616a/PQF8wrWpxBY.jpg', 'name': 'Соловьёв Дмитрий', 'id': 11958553}, {'ava': 'https://pp.userapi.com/c622120/v622120884/4f2ff/SBugU0KZQBs.jpg', 'name': 'Сирица Александр', 'id': 19456884}, {'ava': 'https://pp.userapi.com/c630217/v630217909/48556/6OigGXy7p9Q.jpg', 'name': 'Солнцева Ксения', 'id': 60369909}, {'ava': 'https://pp.userapi.com/c637227/v637227044/5dfe8/cobIBAyucso.jpg', 'name': 'Камчатная Янина', 'id': 90852044}, {'ava': 'https://pp.userapi.com/c638616/v638616813/5c6f0/X9sEe6iG2RI.jpg', 'name': 'Кеник Яна', 'id': 168075587}, {'ava': 'https://pp.userapi.com/c625830/v625830999/31a2e/ULXjHwsKYPg.jpg', 'name': 'Климов Игорь', 'id': 287179999}, {'ava': 'https://pp.userapi.com/c836128/v836128751/34584/84LN6ITZm_g.jpg', 'name': 'Zyemtsev Alex', 'id': 295098751}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Сковпень Марина', 'id': 409090399}]
        },
        {name:'Оленегорск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638024/v638024910/5b515/gJrmYH7cGKU.jpg', 'name': 'Новикова Алёна', 'id': 60512541}, {'ava': 'https://pp.userapi.com/c841331/v841331405/20785/CufEWqQoMJw.jpg', 'name': 'Тимофеева-Ипатова Виктория', 'id': 106932029}]
        },
        {name:'Нефтекамск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c307112/v307112489/872f/UtG6-eeEKJs.jpg', 'name': 'Шумский Денис', 'id': 78328489}]
        },
        {name:'Витебск',n:5,
        users:[{'ava': 'https://pp.userapi.com/c841539/v841539639/13d81/XOAE7rbfCRY.jpg', 'name': 'Будник Владимир', 'id': 14913072}, {'ava': 'https://pp.userapi.com/c639227/v639227820/2c9a1/ZFV32AgO9Zg.jpg', 'name': 'Syuk Deni', 'id': 103211820}, {'ava': 'https://pp.userapi.com/c638626/v638626091/58571/NbBMkP6fEr4.jpg', 'name': 'Цыкунов Алексей', 'id': 141112041}, {'ava': 'https://pp.userapi.com/c629524/v629524795/d2f0/ReqB_rG_0Vo.jpg', 'name': 'Cuba Cuba', 'id': 296043795}, {'ava': 'https://pp.userapi.com/c637230/v637230051/6c4ab/ROfo6YY4Wv4.jpg', 'name': 'Суркова Надежда', 'id': 369970051}]
        },
        {name:'Юрга',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841224/v841224844/1ce38/FshlWl0y0tA.jpg', 'name': 'Заверуха Валерия', 'id': 225721348}]
        },
        {name:'Салават',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638419/v638419482/5cfd6/kNsXS2vYJZ4.jpg', 'name': 'Мазитова Ирина', 'id': 220312062}]
        },
        {name:'Подольск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636730/v636730290/2ad88/q_TqiutCvco.jpg', 'name': 'Ибодуллаев Абу', 'id': 215930290}]
        },
        {name:'Старый Оскол',n:3,
        users:[{'ava': 'https://pp.userapi.com/c425118/v425118488/7ec3/u6Tn4A-dILg.jpg', 'name': 'Зубковский Андрей', 'id': 1882488}, {'ava': 'https://pp.userapi.com/c4220/u16321576/e_098b289c.jpg', 'name': 'Добродомов Дмитрий', 'id': 16321576}, {'ava': 'https://pp.userapi.com/c604626/v604626393/be0/VOcbNrCfcaQ.jpg', 'name': 'Базулина Анна', 'id': 40615393}]
        },
        {name:'Кременчуг',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837231/v837231226/4aed4/gqRnvRUi5ok.jpg', 'name': 'Гонтарь Оля', 'id': 58141226}]
        },
        {name:'Харьков',n:12,
        users:[{'ava': 'https://sun9-11.userapi.com/c836537/v836537351/32de6/huYeevoSsh4.jpg', 'name': 'Stepanian Arthur', 'id': 4917351}, {'ava': 'https://sun9-11.userapi.com/c840636/v840636653/9dec/mPbpZBGMBxE.jpg', 'name': 'Манохин Андрей', 'id': 7801214}, {'ava': 'https://pp.userapi.com/c637525/v637525126/e787/wtMLMWpGGMs.jpg', 'name': 'Рязанова Анастасия', 'id': 10127126}, {'ava': 'https://pp.userapi.com/c836220/v836220307/32bde/ZvJRTWvz2Uc.jpg', 'name': 'Гришин Максим', 'id': 13535307}, {'ava': 'https://sun9-11.userapi.com/c840734/v840734261/1e05/qliWqja0a4U.jpg', 'name': 'Ковалёв Владимир', 'id': 25740245}, {'ava': 'https://pp.userapi.com/c637531/v637531184/5e076/NEJPUTEeKiA.jpg', 'name': 'Лысенко Максим', 'id': 26648698}, {'ava': 'https://pp.userapi.com/c837534/v837534686/5a18b/L5dNTS7x5VE.jpg', 'name': 'Пресцкорник Серёжа', 'id': 50380630}, {'ava': 'https://pp.userapi.com/c636316/v636316494/6ecef/-gg5Q8SbLW0.jpg', 'name': 'Вавенко Жека', 'id': 133737494}, {'ava': 'https://pp.userapi.com/c840327/v840327831/1e40/2HoDPm3CpI8.jpg', 'name': 'Дерябин Евгений', 'id': 169440946}, {'ava': 'https://pp.userapi.com/c639127/v639127509/40e96/V1TbP6DNQTs.jpg', 'name': 'Кныш Ира', 'id': 227546935}, {'ava': 'https://pp.userapi.com/c639224/v639224214/3f19d/6dA-fYQv6JM.jpg', 'name': 'Бурма Нестор', 'id': 306467025}, {'ava': 'https://pp.userapi.com/c637826/v637826441/163b/_D6HPGxirWw.jpg', 'name': 'Кравченко Николай', 'id': 314333441}]
        },
        {name:'Брест',n:11,
        users:[{'ava': 'https://pp.userapi.com/c638830/v638830682/46bbe/XR1V4GR9DOw.jpg', 'name': 'Гапеев Алексей', 'id': 4391682}, {'ava': 'https://pp.userapi.com/c638931/v638931692/51906/2AyW_v2XY_I.jpg', 'name': 'Давидюк Денис', 'id': 4774692}, {'ava': 'https://pp.userapi.com/c424218/v424218768/1b26/Gl3pa6a0K8E.jpg', 'name': 'Dontsova Ella', 'id': 80027768}, {'ava': 'https://pp.userapi.com/c626426/v626426068/18e9c/GO_pAKooPQQ.jpg', 'name': 'Гайдукович Илона', 'id': 86003068}, {'ava': 'https://pp.userapi.com/c626327/v626327037/6e292/6cpafhjAJQg.jpg', 'name': 'Арсеньева Ирина', 'id': 88811037}, {'ava': 'https://pp.userapi.com/c639727/v639727616/42b06/KVjw5L-ttmM.jpg', 'name': 'Лукьяненко Дмитрий', 'id': 139736657}, {'ava': 'https://pp.userapi.com/c837732/v837732339/4aac9/Fk7W7vUzpnY.jpg', 'name': 'Цяк Александр', 'id': 160942006}, {'ava': 'https://pp.userapi.com/c638828/v638828094/4d98f/Wouqzya4npY.jpg', 'name': 'Лукьяненко Александр', 'id': 200574953}, {'ava': 'https://pp.userapi.com/c312630/v312630316/496e/MTT05v6Bp6Q.jpg', 'name': 'Stromov Alex', 'id': 227465316}, {'ava': 'https://pp.userapi.com/c621703/v621703693/11194/gihqKTvXTuM.jpg', 'name': 'Борисовец Сергей', 'id': 241350900}, {'ava': 'https://pp.userapi.com/c638722/v638722880/703b4/buQm17PzrBM.jpg', 'name': 'Богомолов Иван', 'id': 307601649}]
        },
        {name:'Минск',n:27,
        users:[{'ava': 'https://pp.userapi.com/c639723/v639723899/44273/vBc8ufOhGmM.jpg', 'name': 'Морозов Кирилл', 'id': 7790392}, {'ava': 'https://pp.userapi.com/c837727/v837727741/30f5e/cGWTVqnHlUA.jpg', 'name': 'Васильченко Вадим', 'id': 24308741}, {'ava': 'https://pp.userapi.com/c836733/v836733049/57719/pXJhd6CQjUs.jpg', 'name': 'Нестеренко Татьяна', 'id': 27288775}, {'ava': 'https://pp.userapi.com/c836538/v836538089/6005f/kOodI4PHPUo.jpg', 'name': 'Гринько Анастасия', 'id': 29491972}, {'ava': 'https://pp.userapi.com/c837735/v837735620/4956a/hda-4AD2e5g.jpg', 'name': 'Korgan Nastassia', 'id': 30125356}, {'ava': 'https://pp.userapi.com/c628131/v628131322/3bc2f/cOXU3RnT-Ps.jpg', 'name': 'Цветков Вильям', 'id': 42660322}, {'ava': 'https://pp.userapi.com/c624021/v624021977/3fd1d/xwEG4qxb4x0.jpg', 'name': 'Дубков Алексей', 'id': 57916977}, {'ava': 'https://pp.userapi.com/c637919/v637919708/176a2/Qs2nEAqea-4.jpg', 'name': 'Кошель Владимир', 'id': 63207708}, {'ava': 'https://pp.userapi.com/c636524/v636524886/51351/8wyUULTGJ1w.jpg', 'name': 'Мишенькин Владимир', 'id': 69228886}, {'ava': 'https://pp.userapi.com/c638831/v638831756/1472/CIIH3FyZDt0.jpg', 'name': 'Тимоховский Александр', 'id': 74339756}, {'ava': 'https://pp.userapi.com/c633528/v633528396/315db/ckoTWh6bvWM.jpg', 'name': 'Маринченко Александр', 'id': 136471396}, {'ava': 'https://pp.userapi.com/c836238/v836238317/56d8a/5P8wr9Tjfrw.jpg', 'name': 'Ромашко Любовь', 'id': 144188564}, {'ava': 'https://pp.userapi.com/c638418/v638418149/56f86/jpGvYj035cU.jpg', 'name': 'Бабицкий Вова', 'id': 159497638}, {'ava': 'https://pp.userapi.com/c621119/v621119194/1a32e/hLwIoruqfmM.jpg', 'name': 'Тютьман Алексей', 'id': 164778194}, {'ava': 'https://pp.userapi.com/c837735/v837735552/320aa/N4PvF-myTQM.jpg', 'name': 'Войшнис Алиса', 'id': 167519552}, {'ava': 'https://pp.userapi.com/c638918/v638918487/6eaa5/BAMe7IFsQfE.jpg', 'name': 'Zenkowa Olgy', 'id': 173093972}, {'ava': 'https://pp.userapi.com/c627321/v627321688/929a/otISGoyfPQo.jpg', 'name': 'Пранович Ирэн', 'id': 199494688}, {'ava': 'https://pp.userapi.com/c630431/v630431701/e582/xlo8pr9Mn3o.jpg', 'name': 'Суховей Михаил', 'id': 200258701}, {'ava': 'https://pp.userapi.com/c637421/v637421199/57ec5/4Rh8EzDv51U.jpg', 'name': 'Траевский Владислав', 'id': 213408199}, {'ava': 'https://pp.userapi.com/c639525/v639525624/2dcc0/qXq65cLigQk.jpg', 'name': 'Скорняков Павел', 'id': 265686923}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Кузнец Гриша', 'id': 269941420}, {'ava': 'https://pp.userapi.com/c637127/v637127121/e6d4/LIIwO4SPryY.jpg', 'name': 'Павленко Денис', 'id': 277043121}, {'ava': 'https://pp.userapi.com/c638025/v638025918/3abd0/owgm6Eq82eI.jpg', 'name': 'Казачёнок Павел', 'id': 312398918}, {'ava': 'https://pp.userapi.com/c639219/v639219132/4358f/jP_NimcJWWA.jpg', 'name': 'Гайдук Владимир', 'id': 332615327}, {'ava': 'https://pp.userapi.com/c627416/v627416765/2cee5/wacTk3Lfz9A.jpg', 'name': 'Карташев Вячеслав', 'id': 338425765}, {'ava': 'https://pp.userapi.com/c837625/v837625560/8cd4f/AVH2zgP60jo.jpg', 'name': 'Юрьевич Владимир', 'id': 376221197}, {'ava': 'https://sun9-11.userapi.com/c836536/v836536289/49bb4/B5jOsDSdQxs.jpg', 'name': 'Кудин Сергей', 'id': 384345780}]
        },
        {name:'Караганда',n:3,
        users:[{'ava': 'https://pp.userapi.com/c1477/u14823796/e_59825ff9.jpg', 'name': 'Kolosovski Andrew', 'id': 14823796},{'ava': 'https://pp.userapi.com/c639321/v639321613/4a78a/Vo5l77hH4aY.jpg', 'name': 'Kriger Alexsander', 'id': 319178819}, {'ava': 'https://pp.userapi.com/c636423/v636423990/530ff/qjoJKGCLI2Q.jpg', 'name': 'Шевченко Галина', 'id': 324609990}]
        },
        {name:'Курчатов',n:2,
        users:[{'ava': 'https://pp.userapi.com/c625121/v625121057/3d879/KYEF2veiEWE.jpg', 'name': 'Коник Игорь', 'id': 62097057}, {'ava': 'https://pp.userapi.com/c630323/v630323221/4db63/KRnmu_IA6lw.jpg', 'name': 'Белозёрова Татьяна', 'id': 121368221}]
        },
        {name:'Одесса',n:7,
        users:[{'ava': 'https://pp.userapi.com/c637330/v637330651/479d4/TMsPT71mO7E.jpg', 'name': 'Гилевич Виталий', 'id': 4598651}, {'ava': 'https://pp.userapi.com/c636627/v636627663/350b9/bjoxSOoJ25A.jpg', 'name': 'Сурганова Оля', 'id': 8408663}, {'ava': 'https://pp.userapi.com/c623418/v623418258/2d09d/H-l74CkGK6Q.jpg', 'name': 'Назаров Андрей', 'id': 23751258}, {'ava': 'https://pp.userapi.com/c837624/v837624196/5b848/9DmBc2gtlHA.jpg', 'name': 'Ревенко Анатолий', 'id': 93638754}, {'ava': 'https://pp.userapi.com/c836620/v836620997/88b11/T8ILflJAYdU.jpg', 'name': 'Шевченко Виктория', 'id': 116586295}, {'ava': 'https://pp.userapi.com/c627424/v627424141/378f4/jiNcc1UiXvA.jpg', 'name': 'Заколодяжный Павел', 'id': 121547141}, {'ava': 'https://pp.userapi.com/c411116/v411116417/63fc/ARq2ltL8BXg.jpg', 'name': 'Чеботарь Сергей', 'id': 204062417}]
        },
        {name:'Балтийск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637226/v637226671/65c8b/XtorXtOkPsE.jpg', 'name': 'Волобуев Александр', 'id': 11126251}]
        },
        {name:'London',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837231/v837231877/4f6a8/bQqzW2tyzXE.jpg', 'name': 'Белякова Елена', 'id': 4041877}, {'ava': 'https://pp.userapi.com/c639116/v639116225/21c7a/o8fZFPfQcYM.jpg', 'name': 'Пешков Александр', 'id': 97490225}]
        },
        {name:'Мытищи',n:2,
        users:[{'ava': 'https://pp.userapi.com/c303103/v303103221/56e3/DvzMK72_Yz8.jpg', 'name': 'Копылов Никита', 'id': 2692221}, {'ava': 'https://pp.userapi.com/c619521/v619521304/19903/8NclkxUJjvE.jpg', 'name': 'Изотов Анатолий', 'id': 57108304}]
        },
        {name:'Киев',n:13,
        users:[{'ava': 'https://pp.userapi.com/c637828/v637828347/47b93/W4ew3u5PTYA.jpg', 'name': 'Остапец Вадим', 'id': 6913347}, {'ava': 'https://pp.userapi.com/c638822/v638822060/49b89/Hkz6Q9ThhKk.jpg', 'name': 'Майберова Марина', 'id': 10247954}, {'ava': 'https://pp.userapi.com/c637726/v637726111/59a36/iaoen6Q9M9I.jpg', 'name': 'Синяченко Марина', 'id': 10600462}, {'ava': 'https://pp.userapi.com/c638027/v638027371/4ee64/i2HhGnbyRtU.jpg', 'name': 'Секер Анатолий', 'id': 11603764}, {'ava': 'https://pp.userapi.com/c837425/v837425766/51966/nqorx-WlUb4.jpg', 'name': 'Возняк Елена', 'id': 87726390}, {'ava': 'https://pp.userapi.com/c639724/v639724636/47b18/29rnR25Fm8Y.jpg', 'name': 'Сидоренко Артём', 'id': 98244002}, {'ava': 'https://pp.userapi.com/c638722/v638722909/45e82/WSQ9v-SAtxQ.jpg', 'name': 'Быба Вася', 'id': 124217909}, {'ava': 'https://pp.userapi.com/c309629/v309629423/6dc7/SoLie2yVCfA.jpg', 'name': 'Максимов Максим', 'id': 159062423}, {'ava': 'https://pp.userapi.com/c639628/v639628166/3e0ff/2bltD2CyQuM.jpg', 'name': 'Винерау Арина', 'id': 161234009}, {'ava': 'https://pp.userapi.com/c313523/v313523683/59f7/phNtqixkh8s.jpg', 'name': 'Украинец Слава', 'id': 215832683}, {'ava': 'https://pp.userapi.com/c637320/v637320287/4b8b0/9HdKV5ZkdpU.jpg', 'name': 'Волошин Виталий', 'id': 260198287}, {'ava': 'https://pp.userapi.com/c615729/v615729590/d20c/kpz-O9ZgV58.jpg', 'name': 'Гусев Сергей', 'id': 364562590}, {'ava': 'https://pp.userapi.com/c837435/v837435445/4ade0/RgDbbFhajPQ.jpg', 'name': 'Дрёмин Владислав', 'id': 410478746}]
        },
        {name:'Алексин',n:2,
        users:[{'ava': 'https://pp.userapi.com/c626519/v626519753/4ac75/3aeguWgtJls.jpg', 'name': 'Серёгин Сергей', 'id': 21349753}, {'ava': 'https://pp.userapi.com/c637827/v637827648/5ada7/1RrVNIT3Q90.jpg', 'name': 'Зобков Сергей', 'id': 75587648}]
        },
        {name:'Нерюнгри',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627117/v627117121/50ce6/amqbtwP4FFQ.jpg', 'name': 'Шелопугин Артём', 'id': 57295121}]
        },
        {name:'Торжок',n:2,
        users:[{'ava': 'https://pp.userapi.com/c636429/v636429023/c0c07/I48mRfu5Fkc.jpg', 'name': 'Кириллов Олег', 'id': 359005023}, {'ava': 'https://pp.userapi.com/c637128/v637128077/69806/FP5IFHw8gVU.jpg', 'name': 'Котова Сандра', 'id': 417154158}]
        },
        {name:'Серпухов',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638919/v638919974/5ac0f/ZFG4uV_pg3U.jpg', 'name': 'Горбачева Ольга', 'id': 54955436}, {'ava': 'https://pp.userapi.com/c836234/v836234665/677f4/EZSAFz1um8w.jpg', 'name': 'Калинина Анна', 'id': 316381603}]
        },
        {name:'Кирово-Чепецк',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840125/v840125896/2c55f/X1sIt4CaQkc.jpg', 'name': 'Кайгородцева Ирина', 'id': 311025655}]
        },
        {name:'Солнечногорск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c627322/v627322230/12fb/8fShKYM5Fq0.jpg', 'name': 'Зимкина Юлия', 'id': 3865230}, {'ava': 'https://pp.userapi.com/c621920/v621920833/1e91b/YprSrI7mmi8.jpg', 'name': 'Hozhiev Fedya', 'id': 116577833}]
        },
        {name:'Анапа',n:4,
        users:[{'ava': 'https://pp.userapi.com/c638018/v638018170/5ba16/lgXTiWHAeB8.jpg', 'name': 'Ткачук Артём', 'id': 253371}, {'ava': 'https://pp.userapi.com/c402821/v402821947/446e/MR8KQELOql8.jpg', 'name': 'Вершинин Николай', 'id': 26409947}, {'ava': 'https://pp.userapi.com/c638024/v638024600/67349/yMQls7pymeQ.jpg', 'name': 'Кузьбар Мария', 'id': 59311685}, {'ava': 'https://pp.userapi.com/c840227/v840227453/2b1d0/ROGDJg-gQKU.jpg', 'name': 'Перевозкина Елена', 'id': 80669396}]
        },
        {name:'Ишимбай',n:1,
        users:[{'ava': 'https://pp.userapi.com/c624429/v624429563/1618d/GG10sH24GJY.jpg', 'name': 'Киреев Ринат', 'id': 203377563}]
        },
        {name:'Гусь-Хрустальный',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638625/v638625360/670db/byb5u1HtWHU.jpg', 'name': 'Рыбина Алена', 'id': 181936945}]
        },
        {name:'Конаково',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639830/v639830625/4266a/h-zmWO8slJI.jpg', 'name': 'Пестриков Вячеслав', 'id': 351802725}]
        },
        {name:'Тирасполь',n:3,
        users:[{'ava': 'https://pp.userapi.com/c837735/v837735032/5cae3/oeqtMv1pfm8.jpg', 'name': 'Шевченко Александр', 'id': 2510501}, {'ava': 'https://pp.userapi.com/c1355/u4090263/e_dd5e3198.jpg', 'name': 'Поповский Олег', 'id': 4090263}, {'ava': 'https://pp.userapi.com/c836439/v836439482/6289a/7Y-RajyyIq4.jpg', 'name': 'Рублева Татьяна', 'id': 114344581}]
        },
        {name:'Николаев',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638021/v638021141/35d2f/3keP2DrLFRo.jpg', 'name': 'Ян Сергей', 'id': 8257141}]
        },
        {name:'New York City',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639921/v639921800/39706/bkIoM3b-U-E.jpg', 'name': 'Занин Антон', 'id': 7349771}, {'ava': 'https://pp.userapi.com/c638128/v638128005/174eb/ojZNsRq2mZM.jpg', 'name': 'Курилин Иван', 'id': 387059005}]
        },
        {name:'Нефтеюганск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c403128/v403128981/7825/OAYPNU7aQbM.jpg', 'name': 'Кин Алексей', 'id': 204693981}, {'ava': 'https://pp.userapi.com/c627728/v627728388/9c14/1pirbjMEo88.jpg', 'name': 'Кин Алексей', 'id': 303101388}]
        },
        {name:'Гомель',n:3,
        users:[{'ava': 'https://pp.userapi.com/c639720/v639720685/45c99/467Rjqi8K9I.jpg', 'name': 'Грабовец Паша', 'id': 53949131}, {'ava': 'https://sun9-11.userapi.com/c638924/v638924195/5ba05/gCitTZzixfc.jpg', 'name': 'Андреева Ирина', 'id': 125472803}, {'ava': 'https://pp.userapi.com/c836531/v836531698/8578b/kylKt0bEaRQ.jpg', 'name': 'Тихомирова Александра', 'id': 422895241}]
        },
        {name:'Ступино',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636016/v636016898/42037/XG0G7W-NJpI.jpg', 'name': 'Родионов Сергей', 'id': 232944898}]
        },
        {name:'Александров',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636716/v636716837/65e33/LTZuJxTPetU.jpg', 'name': 'Вячеслав Иванов', 'id': 424261837}]
        },
        {name:'Ноябрьск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c626327/v626327536/33a55/WUQC-11AROk.jpg', 'name': 'Шмаков Сергей', 'id': 3156536}, {'ava': 'https://pp.userapi.com/c639127/v639127893/4bb64/FpVrkzJqgKE.jpg', 'name': 'Шубин Виталя', 'id': 58274737}]
        },
        {name:'Херсон',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638528/v638528366/46dde/lG8AkBHo2EM.jpg', 'name': 'Бодняк Олена', 'id': 123126366}, {'ava': 'https://pp.userapi.com/c630426/v630426093/56b6b/-my9J6Af2Iw.jpg', 'name': 'Капара Сашка', 'id': 373940093}]
        },
        {name:'Чернигов',n:2,
        users:[{'ava': 'https://pp.userapi.com/c626229/v626229149/516ec/wJqQaMiX06U.jpg', 'name': 'Булах Виктория', 'id': 181670149}, {'ava': 'https://pp.userapi.com/c638225/v638225347/d023/PlPw3WflwVg.jpg', 'name': 'Шаповал Олег', 'id': 400050347}]
        },
        {name:'Протвино',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841621/v841621696/138ac/iOb0m-80pj8.jpg', 'name': 'Суров Алексей', 'id': 62076826}]
        },
        {name:'Мариуполь',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836420/v836420895/46a3f/p2j6W5OQ7BY.jpg', 'name': 'Васьковский Иван', 'id': 41414182}, {'ava': 'https://pp.userapi.com/c837428/v837428976/473a7/cpx3LaM6caw.jpg', 'name': 'Комаров Жора', 'id': 409676266}]
        },
        {name:'Berlin',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840338/v840338281/697a/RFvoalfrlcY.jpg', 'name': 'Schlotthauer Jürgen', 'id': 355701402}]
        },
        {name:'Вышний Волочек',n:2,
        users:[{'ava': 'https://pp.userapi.com/c623716/v623716017/2d3e9/6Bu7xsB1gTQ.jpg', 'name': 'Савельева Жанна', 'id': 103833017}, {'ava': 'https://pp.userapi.com/c639829/v639829401/26758/jrBQhhfYNCs.jpg', 'name': 'Долиняк Лариса', 'id': 153803401}]
        },
        {name:'Новошахтинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836720/v836720330/4ae57/GLQR4WqkAQA.jpg', 'name': 'Рукавишникова Мария', 'id': 279803330}]
        },
        {name:'Могилёв',n:5,
        users:[{'ava': 'https://pp.userapi.com/c836230/v836230592/9e9d/9YO60LklESs.jpg', 'name': 'Карамазовы Братаны', 'id': 34200592}, {'ava': 'https://pp.userapi.com/c9299/u55364217/e_6fcdecc7.jpg', 'name': 'Якубенко Дмитрий', 'id': 55364217}, {'ava': 'https://pp.userapi.com/c639130/v639130889/57fa2/_ATeTKa10Ic.jpg', 'name': 'Ли Виктор', 'id': 244854073}, {'ava': 'https://pp.userapi.com/c639527/v639527459/3b50/HrTlC2PlZ9k.jpg', 'name': 'Галуза Владислав', 'id': 251144459}, {'ava': 'https://pp.userapi.com/c841533/v841533360/1dea3/eHrLBTuoQQk.jpg', 'name': 'Галуза Максим', 'id': 268389445}]
        },
        {name:'Костомукша',n:13,
        users:[{'ava': 'https://pp.userapi.com/c639828/v639828759/1e0d3/UjzoIMkESxs.jpg', 'name': 'Фенгольд Кристина', 'id': 459759}, {'ava': 'https://pp.userapi.com/c624824/v624824814/887b/NpAfiE31zMg.jpg', 'name': 'Елфимов Сергей', 'id': 797814}, {'ava': 'https://pp.userapi.com/c5615/v5615776/3d/lNTT6_ZJMKk.jpg', 'name': 'Понявин Владимир', 'id': 895776}, {'ava': 'https://pp.userapi.com/c638319/v638319006/5ffcb/75lDd9y8i4M.jpg', 'name': 'Гришкина Дина', 'id': 1323064}, {'ava': 'https://sun9-11.userapi.com/c840524/v840524878/7764/lzP7V2RUGPc.jpg', 'name': 'Трушкова Светлана', 'id': 4940873}, {'ava': 'https://sun9-11.userapi.com/c840531/v840531506/8d2a/WfaJpiljYOc.jpg', 'name': 'Денисова Жанна', 'id': 7819152}, {'ava': 'https://pp.userapi.com/c837423/v837423776/4ed71/3571SAEmbYg.jpg', 'name': 'Старикова Ирина', 'id': 9166185}, {'ava': 'https://pp.userapi.com/c837135/v837135247/597b7/S1D7QDtn7O0.jpg', 'name': 'Коноплева Татьяна', 'id': 38104892}, {'ava': 'https://pp.userapi.com/c238/u64477345/e_490d9596.jpg', 'name': 'Подёргин Иван', 'id': 64477345}, {'ava': 'https://pp.userapi.com/c627326/v627326249/4d772/Td2QHztKGlk.jpg', 'name': 'Фисенко Дмитрий', 'id': 99126249}, {'ava': 'https://pp.userapi.com/c638824/v638824206/58823/xvkrpJqUMZw.jpg', 'name': 'Логачева Наталья', 'id': 144485417}, {'ava': 'https://pp.userapi.com/c638225/v638225517/22b33/9d0Tavv-fro.jpg', 'name': 'Виктория Дина', 'id': 192822517}, {'ava': 'https://pp.userapi.com/c837524/v837524283/38152/4ruN2-SSMXY.jpg', 'name': 'Манько Андрей', 'id': 214267283}]
        },
        {name:'Димитровград',n:1,
        users:[{'ava': 'https://pp.userapi.com/c316217/v316217475/80af/opfGrH89P8U.jpg', 'name': 'Озеркин Николай', 'id': 210986475}]
        },
        {name:'Керчь',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841436/v841436216/1913e/sxlUF_RE9nA.jpg', 'name': 'Красникова Настасья', 'id': 181208656}]
        },
        {name:'Кузнецк',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841126/v841126838/16e18/3KUeuHRGmYQ.jpg', 'name': 'Томашёва Танюшка', 'id': 203513824}]
        },
        {name:'Красногорск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c309822/v309822041/3ae3/RuldFZ-OxxI.jpg', 'name': 'Килязов Сергей', 'id': 1001041}, {'ava': 'https://pp.userapi.com/c633223/v633223575/2f1d3/wScbUqfKGBM.jpg', 'name': 'Курицын Дмитрий', 'id': 1021575}, {'ava': 'https://pp.userapi.com/c636631/v636631089/49c8/7TXYHOG0O54.jpg', 'name': 'Ветров Андрей', 'id': 13133089}]
        },
        {name:'Сарапул',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837327/v837327621/48521/zPYRQwhQjPU.jpg', 'name': 'Фазлиев Ильназ', 'id': 238508896}]
        },
        {name:'Борисоглебск',n:2,
        users:[{'ava': 'https://sun9-11.userapi.com/c639622/v639622171/2ccf3/bmWpl05FQ-w.jpg', 'name': 'Лыков Артём', 'id': 222068171}, {'ava': 'https://pp.userapi.com/c836239/v836239176/35830/FXI_a9idh1g.jpg', 'name': 'Болотов Семён', 'id': 284028176}]
        },
        {name:'Белорецк',n:3,
        users:[{'ava': 'https://pp.userapi.com/c621704/v621704457/167bc/UUW55hIhVG0.jpg', 'name': 'Галиуллина Айгуль', 'id': 69163365}, {'ava': 'https://pp.userapi.com/c631530/v631530126/4ec30/UEBKQ2bnTxo.jpg', 'name': 'Жаринов Павел', 'id': 106658955}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Зарипов Даниил', 'id': 173652928}]
        },
        {name:'Сланцы',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837531/v837531905/62713/BskJOySNMHg.jpg', 'name': 'Брагин Николай', 'id': 10411812}, {'ava': 'https://pp.userapi.com/c626424/v626424858/6a50d/T_zioSnZCL0.jpg', 'name': 'Леонов Сергей', 'id': 17208858}]
        },
        {name:'Сумы',n:2,
        users:[{'ava': 'https://pp.userapi.com/c626221/v626221344/56c5/jObwNsk2DsQ.jpg', 'name': 'Мигаль Андрей', 'id': 12261344}, {'ava': 'https://pp.userapi.com/c837137/v837137254/47f86/TvvMljrHmB8.jpg', 'name': 'Шевченко Артем', 'id': 298288012}]
        },
        {name:'Павлодар',n:2,
        users:[{'ava': 'https://pp.userapi.com/c630518/v630518493/3b59b/Kyb2BvSS93U.jpg', 'name': 'Овцынов Павел', 'id': 241387493}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Иванов Григорий', 'id': 323343994}]
        },
        {name:'Барановичи',n:2,
        users:[{'ava': 'https://pp.userapi.com/c840029/v840029224/22550/LU8TNZJHTeo.jpg', 'name': 'Лицкевич Михаил', 'id': 39360873}, {'ava': 'https://pp.userapi.com/c618017/v618017710/19994/82zUqdMXzzw.jpg', 'name': 'Борисевич Виктор', 'id': 140227710}]
        },
        {name:'Камышин',n:3,
        users:[{'ava': 'https://sun9-11.userapi.com/c840736/v840736535/142b/SMoLXFyTVyo.jpg', 'name': 'Ручников Егор', 'id': 22505572}, {'ava': 'https://pp.userapi.com/c836630/v836630704/570d4/G1Sw1JUDBvw.jpg', 'name': 'Ручникова Мария', 'id': 159969642}, {'ava': 'https://pp.userapi.com/c837223/v837223750/5c840/us9baliKou0.jpg', 'name': 'Шамшаков Денис', 'id': 400243476}]
        },
        {name:'Кстово',n:2,
        users:[{'ava': 'https://pp.userapi.com/c630022/v630022876/10055/6FpozkbjGQA.jpg', 'name': 'Сафин Богдан', 'id': 5232876}, {'ava': 'https://pp.userapi.com/c619130/v619130929/1dd06/gk4SBDOh2nY.jpg', 'name': 'Тугов Олег', 'id': 219138929}]
        },
        {name:'Луганск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c416430/v416430539/441b/y042CKAc8QA.jpg', 'name': 'Скороход Николай', 'id': 68906539}, {'ava': 'https://pp.userapi.com/c637621/v637621288/1aa89/jFsoc81b-UA.jpg', 'name': 'Шулика Андрей', 'id': 127024288}, {'ava': 'https://pp.userapi.com/c837120/v837120993/53e85/ks9k2-rSJsw.jpg', 'name': 'Березовская Елена', 'id': 191766993}, {'ava': 'https://pp.userapi.com/c638919/v638919981/5ddf5/A9eFDQ5uhxo.jpg', 'name': 'Викторов Александр', 'id': 385088970}]
        },
        {name:'Электросталь',n:4,
        users:[{'ava': 'https://pp.userapi.com/c837122/v837122725/3a370/srHVafpFtuk.jpg', 'name': 'Роговая Яна', 'id': 3448725}, {'ava': 'https://pp.userapi.com/c638831/v638831301/5a0ae/J4H6nqWCAzA.jpg', 'name': 'Эскендерова Дарья', 'id': 19110491}, {'ava': 'https://pp.userapi.com/c639918/v639918492/3bee4/2QBNX9UFaxc.jpg', 'name': 'Виноградова Ольга', 'id': 33064196}, {'ava': 'https://pp.userapi.com/c638529/v638529049/cb23/ccnbTsKhZf8.jpg', 'name': 'Мелихова Екатерина', 'id': 162211049}]
        },
        {name:'Manchester',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840122/v840122338/148e6/n4mOnbMqp4g.jpg', 'name': 'Hippopotamus Krutoinagluho', 'id': 4770338}]
        },
        {name:'Фрязино',n:2,
        users:[{'ava': 'https://pp.userapi.com/c613429/v613429502/9ce9/1haauAAOoPc.jpg', 'name': 'Сахаров Роман', 'id': 31447502}, {'ava': 'https://pp.userapi.com/c638318/v638318163/151f3/_1IkDNfsF28.jpg', 'name': 'Буров Михаил', 'id': 222869163}]
        },
        {name:'Морозовск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627418/v627418434/226ad/OIXY9q3IAMc.jpg', 'name': 'Сытников Максим', 'id': 34391434}]
        },
        {name:'Качканар',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636516/v636516973/25bd2/OXTNplED3Bw.jpg', 'name': 'Кузнецов Василий', 'id': 45529973}]
        },
        {name:'Мценск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636529/v636529917/3d9c4/ge5Fh0S0RtE.jpg', 'name': 'Касторский Буба', 'id': 297040917}]
        },
        {name:'Пинск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c637827/v637827031/589a9/_HDmI3cjo2A.jpg', 'name': 'Пилипенко Вячеслав', 'id': 14694031}, {'ava': 'https://pp.userapi.com/c841324/v841324757/19252/V9IxNjvbkEI.jpg', 'name': 'Нефидович Евгений', 'id': 251389739}, {'ava': 'https://pp.userapi.com/c633530/v633530292/30d19/sz7Lh-Jf4vM.jpg', 'name': 'Якимчук Алексей', 'id': 349949292}]
        },
        {name:'Невель',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631321/v631321978/3ace6/fd-ZuJGqhoc.jpg', 'name': 'Егоров Максим', 'id': 80248978}]
        },
        {name:'Дзержинск',n:6,
        users:[{'ava': 'https://pp.userapi.com/c841439/v841439547/f1fc/Z_jH-VG0h7w.jpg', 'name': 'Герцун Анастасия', 'id': 1813476}, {'ava': 'https://pp.userapi.com/c841335/v841335122/2ea6/HCiWZnr60FM.jpg', 'name': 'Аникин Сергей', 'id': 52102122}, {'ava': 'https://pp.userapi.com/c630327/v630327970/52e19/6gp13jejMgc.jpg', 'name': 'Ажиева Наталья', 'id': 102433970}, {'ava': 'https://pp.userapi.com/c624724/v624724950/38b67/sKBQ7DmozWI.jpg', 'name': 'Великанова Оксана', 'id': 158877950}, {'ava': 'https://pp.userapi.com/c837337/v837337351/910d/BgGMgHHb2O8.jpg', 'name': 'Мишвелова Маргарита', 'id': 189442351}, {'ava': 'https://pp.userapi.com/c623324/v623324347/16927/4y7M4I8nPtw.jpg', 'name': 'Зайцев Михаил', 'id': 202509347}]
        },
        {name:'Дмитров',n:2,
        users:[{'ava': 'https://pp.userapi.com/c636824/v636824912/36558/zMxvuOKU-8o.jpg', 'name': 'Хрустова Мариша', 'id': 5047912}, {'ava': 'https://pp.userapi.com/c638131/v638131144/8bb9e/egBX5ocQhyM.jpg', 'name': 'Стрелкова Марина', 'id': 34288889}]
        },
        {name:'Симферополь',n:11,
        users:[{'ava': 'https://pp.userapi.com/c836122/v836122017/8fae8/EwX_-YGPM7g.jpg', 'name': 'Валерьевич Станислав', 'id': 422039}, {'ava': 'https://pp.userapi.com/c836435/v836435826/3eda1/Py72YTsiemQ.jpg', 'name': 'Бережной Антон', 'id': 1582826}, {'ava': 'https://pp.userapi.com/c637324/v637324274/1b55c/W9OuBkeT-M4.jpg', 'name': 'Шмиголь Николай', 'id': 6575274}, {'ava': 'https://pp.userapi.com/c629328/v629328154/10321/US9MWJM79Xk.jpg', 'name': 'Стебливская Светлана', 'id': 7872154}, {'ava': 'https://pp.userapi.com/c837336/v837336577/43f8a/Fl_oINMPtyA.jpg', 'name': 'Дункан Анна', 'id': 43277760}, {'ava': 'https://sun9-11.userapi.com/c639824/v639824163/25604/S3pJcNzccTA.jpg', 'name': 'Васильева Екатерина', 'id': 45700163}, {'ava': 'https://sun9-11.userapi.com/c836536/v836536581/581e7/GsS0vxe-pgM.jpg', 'name': 'Володин Юрий', 'id': 59198705}, {'ava': 'https://pp.userapi.com/c637522/v637522120/52d80/jmUIC2PfLDE.jpg', 'name': 'Николаевна Светлана', 'id': 62642120}, {'ava': 'https://pp.userapi.com/c406329/v406329905/11bf8/HS3mMYNygKc.jpg', 'name': 'Новикова Юлия', 'id': 151556905}, {'ava': 'https://pp.userapi.com/c418730/v418730673/2bf3/Dbmsorr9r6w.jpg', 'name': 'Обеременко Вадим', 'id': 161400673}, {'ava': 'https://pp.userapi.com/c621918/v621918687/27638/7Wm9PXk50j0.jpg', 'name': 'Boyko Aurika', 'id': 269238687}]
        },
        {name:'Запорожье',n:7,
        users:[{'ava': 'https://pp.userapi.com/c621513/v621513317/1a367/DG3_Zi7qwn8.jpg', 'name': 'Бездольный Андрей', 'id': 11808269}, {'ava': 'https://pp.userapi.com/c836330/v836330520/67d8e/jkjs8D_rzjc.jpg', 'name': 'Викторович Александр', 'id': 20526767}, {'ava': 'https://pp.userapi.com/c836223/v836223687/62db4/mDlzyJwRW1k.jpg', 'name': 'Гак Володимир', 'id': 42601448}, {'ava': 'https://pp.userapi.com/c633226/v633226487/29c61/prkB69plJ28.jpg', 'name': 'Молько Владимир', 'id': 43426487}, {'ava': 'https://pp.userapi.com/c622416/v622416449/2e482/vWB8WN5nMsc.jpg', 'name': 'Трофименко Рома', 'id': 102626449}, {'ava': 'https://pp.userapi.com/c636431/v636431229/64eb9/VdROC0ZRJi4.jpg', 'name': 'Король Константин', 'id': 258250229}, {'ava': 'https://pp.userapi.com/c638526/v638526314/61b4d/GZ-gQYdE3YU.jpg', 'name': 'Kornyushin Vova', 'id': 381361836}]
        },
        {name:'Гуково',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837730/v837730519/60257/A5s9iiywxHg.jpg', 'name': 'Яненко Андрей', 'id': 190284681}, {'ava': 'https://pp.userapi.com/c637723/v637723833/5dd12/m_1UpMURFT4.jpg', 'name': 'Сергеевич Иван', 'id': 282398833}]
        },
        {name:'Гродно',n:4,
        users:[{'ava': 'https://pp.userapi.com/c624227/v624227923/55421/5J-a-StMJrM.jpg', 'name': 'Кунда Андрей', 'id': 12254923}, {'ava': 'https://pp.userapi.com/c639228/v639228058/4d1b5/17_guaF0RZ4.jpg', 'name': 'Ермак Михаил', 'id': 135465343}, {'ava': 'https://pp.userapi.com/c841038/v841038871/bf43/KJXWaCGnG48.jpg', 'name': 'Король Юлия', 'id': 170093292}, {'ava': 'https://pp.userapi.com/c836338/v836338678/5a29a/EacmTDMPzEY.jpg', 'name': 'Иванов Павел', 'id': 211398534}]
        },
        {name:'Днепропетровск (Днепр)',n:2,
        users:[{'ava': 'https://pp.userapi.com/c637923/v637923867/4898d/X0wuBN_L5cg.jpg', 'name': 'Рубан Алексей', 'id': 299548867}, {'ava': 'https://pp.userapi.com/c416628/v416628019/bab9/dKrePL5khLk.jpg', 'name': 'Новельская Камила', 'id': 299786019}]
        },
        {name:'Переславль-Залесский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837234/v837234961/18463/fH9owR6Ra7E.jpg', 'name': 'Одинцова Екатерина', 'id': 236302961}]
        },
        {name:'Конотоп',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c836520/v836520015/376b5/4wG8oqRPKjM.jpg', 'name': 'Коваленко Анна', 'id': 253230015}]
        },
        {name:'Сольцы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639316/v639316203/405da/5g2StuINWlE.jpg', 'name': 'Савинов Глеб', 'id': 220374658}]
        },
        {name:'Sydney',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c836621/v836621583/58e6c/k0E6_nDlUis.jpg', 'name': 'Umurbaev Ravil', 'id': 361041496}]
        },
        {name:'Уральск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c836432/v836432303/6096c/wUGvqYm5h1M.jpg', 'name': 'Мясников Александр', 'id': 23110293}, {'ava': 'https://pp.userapi.com/c631721/v631721219/4b3c3/PoiEwaBPtZc.jpg', 'name': 'Беркалиев Рустам', 'id': 30120219}, {'ava': 'https://pp.userapi.com/c639221/v639221764/39eb2/PvlukdAofUc.jpg', 'name': 'Таумова Алия', 'id': 283172764}]
        },
        {name:'Рогачев',n:1,
        users:[{'ava': 'https://pp.userapi.com/c630319/v630319067/42f99/FsC9MyqsG04.jpg', 'name': 'Бинецкий Андрей', 'id': 277354067}]
        },
        {name:'Светлоград',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631226/v631226123/2f1a0/b4WpYH2KsCI.jpg', 'name': 'Костин Евгений', 'id': 367502123}]
        },
        {name:'Углич',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638629/v638629191/5ca1f/SO_6wttAbiA.jpg', 'name': 'Фома Саша', 'id': 34812287}, {'ava': 'https://pp.userapi.com/c637125/v637125187/50339/WXbdN815T2M.jpg', 'name': 'Волкова Марьяна', 'id': 224246187}]
        },
        {name:'Винница',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638427/v638427513/e37d/0TwZxZcpYcA.jpg', 'name': 'Кудлаенко Игорь', 'id': 108810513}, {'ava': 'https://pp.userapi.com/c836325/v836325139/317d8/n3SYPaeVGWU.jpg', 'name': 'Гуйван Василий', 'id': 191936139}]
        },
        {name:'Урюпинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627223/v627223882/22335/AA7B0LCo870.jpg', 'name': 'Зюзин Рома', 'id': 2662882}]
        },
        {name:'Десногорск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c319224/v319224818/587d/pgO9ye-DJXo.jpg', 'name': 'Тихов Николай', 'id': 158757818}]
        },
        {name:'Ейск',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c840521/v840521072/4dcc/51jz6jSqh08.jpg', 'name': 'Мягков Игорь', 'id': 326822906}]
        },
        {name:'Златоуст',n:3,
        users:[{'ava': 'https://pp.userapi.com/c840228/v840228562/1b2c/7M3jgCJFEIU.jpg', 'name': 'Макрушина-Усманова Юлия', 'id': 4050611}, {'ava': 'https://pp.userapi.com/c837622/v837622631/444c2/auDGMmhwKxw.jpg', 'name': 'Аранцев Алексей', 'id': 28090631}, {'ava': 'https://pp.userapi.com/c637722/v637722885/5a504/bjJbtQTuUgo.jpg', 'name': 'Фликер Ирина', 'id': 365708885}]
        },
        {name:'Муром',n:3,
        users:[{'ava': 'https://pp.userapi.com/c638216/v638216046/a592/U3zb8dQJS1s.jpg', 'name': 'Сафронов Сергей', 'id': 57520046}, {'ava': 'https://pp.userapi.com/c837523/v837523276/57987/XA8seZOTbmc.jpg', 'name': 'Сергеев Дмитрий', 'id': 134638185}, {'ava': 'https://pp.userapi.com/c638122/v638122068/4e036/F70EMa16BUU.jpg', 'name': 'Харитонова Юлия', 'id': 175672122}]
        },
        {name:'Ялта',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638420/v638420747/5a849/qgtyYjAIMjo.jpg', 'name': 'Виненчук Даша', 'id': 90284361}]
        },
        {name:'Гагарин',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836328/v836328453/8e724/fXnxQocEsn4.jpg', 'name': 'Зенова Настя', 'id': 370977599}]
        },
        {name:'Шатура',n:2,
        users:[{'ava': 'https://pp.userapi.com/c604518/v604518152/3dcae/WEKD7G3x1n8.jpg', 'name': 'Щипанова Мария', 'id': 8293152}, {'ava': 'https://pp.userapi.com/c637329/v637329215/5119d/VDWW32C3hIc.jpg', 'name': 'Мишакин Иван', 'id': 58274215}]
        },
        {name:'Навашино',n:1,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Филиппов Вячеслав', 'id': 22944593}]
        },
        {name:'Королёв',n:4,
        users:[{'ava': 'https://pp.userapi.com/c625327/v625327773/13208/5IhvYTN0os8.jpg', 'name': 'Шевченко Сергей', 'id': 3109773}, {'ava': 'https://pp.userapi.com/c638223/v638223721/4a24b/X6SkosTGhzI.jpg', 'name': 'Полянский Евгений', 'id': 4030721}, {'ava': 'https://pp.userapi.com/c841432/v841432583/1d1a9/fH66CpKrSW8.jpg', 'name': 'Чиркова Мария', 'id': 49141044}, {'ava': 'https://pp.userapi.com/c636724/v636724105/180ed/Z_MeNOlGIjg.jpg', 'name': 'Ваня Дядя', 'id': 193925105}]
        },
        {name:'Чехов',n:2,
        users:[{'ava': 'https://pp.userapi.com/c406227/v406227210/7f28/6-kJvwUi37M.jpg', 'name': 'Загруев Михаил', 'id': 6581210}, {'ava': 'https://pp.userapi.com/c638331/v638331475/54be1/1VocDPBDf8s.jpg', 'name': 'Стрижова Лариса', 'id': 39724329}]
        },
        {name:'Березники',n:6,
        users:[{'ava': 'https://pp.userapi.com/c837231/v837231174/42498/yfQ4a8yfilw.jpg', 'name': 'Куликова Наталья', 'id': 15205553}, {'ava': 'https://sun9-11.userapi.com/c841034/v841034651/9f2e/xEHfloy4q8w.jpg', 'name': 'Евшель Наталья', 'id': 26051651}, {'ava': 'https://pp.userapi.com/c639429/v639429369/3bf6f/k0WWHCvukuQ.jpg', 'name': 'Юхимец Леся', 'id': 98046369}, {'ava': 'https://pp.userapi.com/c639424/v639424305/f421/HUMa26sPu2M.jpg', 'name': 'Коновалов Влад', 'id': 103989305}, {'ava': 'https://pp.userapi.com/c619423/v619423443/1b5fb/QEzM3hmYPLM.jpg', 'name': 'Спиридонов Олег', 'id': 158092443}, {'ava': 'https://pp.userapi.com/c836639/v836639441/62cde/j8Lu64prrEg.jpg', 'name': 'Исупова Валерия', 'id': 428024571}]
        },
        {name:'Кривой Рог',n:3,
        users:[{'ava': 'https://pp.userapi.com/c837435/v837435806/5dacb/rf3Ci0p7-54.jpg', 'name': 'Швалёва Аня', 'id': 10948577}, {'ava': 'https://pp.userapi.com/c636821/v636821522/48855/MMnNqEDKV5g.jpg', 'name': 'Рогозная Наталья', 'id': 14473522}, {'ava': 'https://vk.com/images/camera_50.png', 'name': 'Redov Vlad', 'id': 290849526}]
        },
        {name:'Озерск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836230/v836230435/62b6d/m9Lndymn4aM.jpg', 'name': 'Табачкова Юля', 'id': 58416881}, {'ava': 'https://pp.userapi.com/c841325/v841325892/1e408/uh93XlJqv-o.jpg', 'name': 'Табачков Роман', 'id': 318744872}]
        },
        {name:'Сызрань',n:3,
        users:[{'ava': 'https://pp.userapi.com/c837526/v837526111/72668/7Lpv-dbMXnM.jpg', 'name': 'Потапова Екатерина', 'id': 23954233}, {'ava': 'https://pp.userapi.com/c639719/v639719279/35fc1/PXsFefhjaU8.jpg', 'name': 'Самуйлов Виктор', 'id': 175627645}, {'ava': 'https://pp.userapi.com/c638331/v638331299/536e8/Rw4v2t4VojU.jpg', 'name': 'Быков Виталий', 'id': 234957719}]
        },
        {name:'Куровское',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836736/v836736776/4f760/1Ow1jSMcajc.jpg', 'name': 'Логутов Евгений', 'id': 349662776}]
        },
        {name:'Новомосковск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636218/v636218377/63f2/VlT8d910EX0.jpg', 'name': 'Карасев Илья', 'id': 53440377}]
        },
        {name:'Рославль',n:1,
        users:[{'ava': 'https://pp.userapi.com/c621511/v621511603/15ab4/U0-NR584VHc.jpg', 'name': 'Сафоненкова Ольга', 'id': 155799704}]
        },
        {name:'Белово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837425/v837425013/4bd3a/HYnwvEx9E18.jpg', 'name': 'Иванов Роман', 'id': 233897313}]
        },
        {name:'Актау',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604619/v604619939/4773/CpZsE-S7VDY.jpg', 'name': 'Bazarbay Bagdat', 'id': 257071939}]
        },
        {name:'Кашира',n:1,
        users:[{'ava': 'https://pp.userapi.com/c11469/u171583342/e_52319667.jpg', 'name': 'Гуськова Татьяна', 'id': 171583342}]
        },
        {name:'Полоцк',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638928/v638928318/61b17/0BsTyU20Jlo.jpg', 'name': 'Тофоров Дмитрий', 'id': 82585404}]
        },
        {name:'Пудож',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627822/v627822867/38a55/IYDSohfs4gU.jpg', 'name': 'Фишер Таня', 'id': 2311867}]
        },
        {name:'Львов',n:4,
        users:[{'ava': 'https://pp.userapi.com/c314218/v314218167/68f5/q5BbnnbZcug.jpg', 'name': 'Футков Слава', 'id': 7968167}, {'ava': 'https://pp.userapi.com/c637430/v637430180/5afe3/Ae8XaB_THJw.jpg', 'name': 'Кулай Тарас', 'id': 56359180}, {'ava': 'https://pp.userapi.com/c627818/v627818765/28a53/Cz4ICBmWvWI.jpg', 'name': 'Шостак Роман', 'id': 65420765}, {'ava': 'https://pp.userapi.com/c841028/v841028608/1d162/3UvZA1K9f3w.jpg', 'name': 'Билоног Виталий', 'id': 153389935}]
        },
        {name:'Каменское / Днепродзержинск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c637824/v637824402/1cb6a/QglZgNGjcHE.jpg', 'name': 'Толпекина Галина', 'id': 31955402}, {'ava': 'https://pp.userapi.com/c618227/v618227162/13ba6/TYYpJ3hiL2k.jpg', 'name': 'Позычук Геннадий', 'id': 34785162}]
        },
        {name:'Лахденпохья',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837630/v837630737/4b16b/Z9i83w2s8ig.jpg', 'name': 'Рудов Виталий', 'id': 17532737}]
        },
        {name:'Кондопога',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627427/v627427770/3e34b/WdfSqVhz5rQ.jpg', 'name': 'Мартынов Леонид', 'id': 353329770}]
        },
        {name:'Ковдор',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638925/v638925517/41c45/ozz20IgDUp8.jpg', 'name': 'Ермаков Виктор', 'id': 20530517}]
        },
        {name:'Воткинск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836235/v836235234/37f44/YUuQk7shVgQ.jpg', 'name': 'Широбоков Иван', 'id': 203953234}, {'ava': 'https://sun9-11.userapi.com/c840635/v840635119/955/MuGNktI6vuk.jpg', 'name': 'Шайхова Гульнара', 'id': 262161124}]
        },
        {name:'Бобруйск',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c840638/v840638025/7059/wnzJLPsSIbU.jpg', 'name': 'Бабицкий Кирилл', 'id': 153913945}]
        },
        {name:'Бердск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841526/v841526594/1ae0f/yKsQcBGzWfQ.jpg', 'name': 'Залевская Анна', 'id': 3525644}]
        },
        {name:'Туапсе',n:1,
        users:[{'ava': 'https://pp.userapi.com/c623229/v623229651/49b9a/ooM9Bwcg12k.jpg', 'name': 'Юров Алексей', 'id': 155421651}]
        },
        {name:'Житомир',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604618/v604618093/19b48/TGwaUKhMF48.jpg', 'name': 'Мартынюк Михаил', 'id': 171901093}]
        },
        {name:'Георгиевск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c6113/v6113379/9427/OkWFTPSfut4.jpg', 'name': 'Барканова Инна', 'id': 21670379}]
        },
        {name:'Гурьевск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637516/v637516599/99a4/A9is-bGbEeQ.jpg', 'name': 'Сафронова Татьяна', 'id': 140695599}]
        },
        {name:'Тарко-Сале',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631825/v631825052/518a4/jkNOmJzGEec.jpg', 'name': 'Королевич Наталья', 'id': 64262052}]
        },
        {name:'Орша',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836429/v836429961/859bb/ROhRavqNfaA.jpg', 'name': 'Бездушный Август', 'id': 271933733}]
        },
        {name:'Кумертау',n:5,
        users:[{'ava': 'https://pp.userapi.com/c836228/v836228224/50c9f/yppTARtwPow.jpg', 'name': 'Кутлугужин Ильнур', 'id': 1304224}, {'ava': 'https://pp.userapi.com/c627624/v627624793/464ac/eZqjNRw8qUo.jpg', 'name': 'Liev Tima', 'id': 5378793}, {'ava': 'https://pp.userapi.com/c639226/v639226229/4588c/x-e_fhc2r3M.jpg', 'name': 'Усманова Айгуль', 'id': 13657304}, {'ava': 'https://pp.userapi.com/c836728/v836728346/78437/RSiojxXDh-8.jpg', 'name': 'Смагина Вероника', 'id': 140763043}, {'ava': 'https://pp.userapi.com/c619829/v619829850/4397/Rqs7ic_09Rk.jpg', 'name': 'Нафиков Вадим', 'id': 175900850}]
        },
        {name:'Знаменск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638030/v638030284/4b57a/Z8FWHYOVkiI.jpg', 'name': 'Юсупова Светлана', 'id': 18049105}, {'ava': 'https://pp.userapi.com/c837623/v837623835/42fcc/I8WnBT8O1Yw.jpg', 'name': 'Филиппов Вячеслав', 'id': 130126835}]
        },
        {name:'Detroit',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836721/v836721962/60f16/jKroZSC0CE8.jpg', 'name': 'Arustamyan Milena', 'id': 155368355}, {'ava': 'https://pp.userapi.com/c626825/v626825986/3abaf/hFGJt_Pu9Zs.jpg', 'name': 'Джалоян Вачик', 'id': 321271986}]
        },
        {name:'Южноуральск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837421/v837421181/4b7b2/h-4zojeJQmk.jpg', 'name': 'Дворянинова Людмила', 'id': 185634761}]
        },
        {name:'Щёлково',n:3,
        users:[{'ava': 'https://pp.userapi.com/c4175/u16043517/e_37e9a47c.jpg', 'name': 'Берников Евгений', 'id': 16043517}, {'ava': 'https://pp.userapi.com/c622721/v622721821/43365/BPsdBHsxoZI.jpg', 'name': 'Тарантинова Ольга', 'id': 18233821}, {'ava': 'https://pp.userapi.com/c841531/v841531085/1387e/jCGJP7xY8Hk.jpg', 'name': 'Дьякова Екатерина', 'id': 23065214}]
        },
        {name:'Новополоцк',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837639/v837639332/44077/kLIm4rZ89y0.jpg', 'name': 'Березовский Андрей', 'id': 61718332}]
        },
        {name:'Клин',n:2,
        users:[{'ava': 'https://pp.userapi.com/c9544/v9544107/3ccd/StTLtS4VaCQ.jpg', 'name': 'Комарова Юлия', 'id': 92529107}, {'ava': 'https://pp.userapi.com/c639629/v639629371/256c6/60dpTgyiaUM.jpg', 'name': 'Лобур Денис', 'id': 192274371}]
        },
        {name:'Верхняя Пышма',n:2,
        users:[{'ava': 'https://pp.userapi.com/c637820/v637820573/2c558/x7n6NG1ePyA.jpg', 'name': 'Ovechkina Ksenia', 'id': 150359573}, {'ava': 'https://pp.userapi.com/c630127/v630127332/138dc/_qgrt3_2X1M.jpg', 'name': 'Кучин Дмитрий', 'id': 198542332}]
        },
        {name:'Вилейка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c608131/v608131193/3df8/p2yOgLqzLzE.jpg', 'name': 'Скобло Егор', 'id': 91177193}]
        },
        {name:'Сергиев Посад',n:6,
        users:[{'ava': 'https://pp.userapi.com/c639130/v639130439/20bbb/F3ZqXb49oAE.jpg', 'name': 'Вельдин Андрей', 'id': 4736439}, {'ava': 'https://pp.userapi.com/c837728/v837728011/32b34/WWmfdG1ON5Q.jpg', 'name': 'Крылов Валерий', 'id': 51441011}, {'ava': 'https://pp.userapi.com/c626130/v626130362/5680c/UtXVlcmMg1M.jpg', 'name': 'Сорокин Денис', 'id': 64190362}, {'ava': 'https://pp.userapi.com/c837528/v837528844/48670/2BLlBQFHmdo.jpg', 'name': 'Махов Сергей', 'id': 79959844}, {'ava': 'https://pp.userapi.com/c638223/v638223027/1cdf5/gV3TK-PJnx0.jpg', 'name': 'Panshin Evgenie', 'id': 151510027}, {'ava': 'https://pp.userapi.com/c639517/v639517261/69932/EpJ7hW2qodo.jpg', 'name': 'Селезнева Анастасия', 'id': 169015092}]
        },
        {name:'Радужный',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638626/v638626649/5e64c/dSNH5hiGac8.jpg', 'name': 'Колпакова Татьяна', 'id': 42453548}]
        },
        {name:'Eindhoven',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836539/v836539095/5e852/AlQv4h2YdIc.jpg', 'name': 'Проданец Богдан', 'id': 41614096}]
        },
        {name:'Бикин',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841527/v841527250/12169/nMr1V6pgLNg.jpg', 'name': 'Рубан Жека', 'id': 343819164}]
        },
        {name:'Лениногорск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c617225/v617225931/5a27/_DCfUoGOyZg.jpg', 'name': 'Тихонова Елена', 'id': 134539931}, {'ava': 'https://pp.userapi.com/c629223/v629223461/22a33/N_2nE8aWtoo.jpg', 'name': 'Гараев Тимур', 'id': 139809461}, {'ava': 'https://pp.userapi.com/c639617/v639617116/375ec/4lZLamldgNU.jpg', 'name': 'Воронцов Фёдор', 'id': 235508065}, {'ava': 'https://pp.userapi.com/c626226/v626226576/31eb4/nXEEhZC_fRs.jpg', 'name': 'Gallyamov Timur', 'id': 300888576}]
        },
        {name:'Зеленоград',n:4,
        users:[{'ava': 'https://pp.userapi.com/c619823/v619823851/1f33a/KrjqNiSWMuU.jpg', 'name': 'Забродская Маргарита', 'id': 2987851}, {'ava': 'https://pp.userapi.com/c837732/v837732074/5941e/a-q0TWRKplc.jpg', 'name': 'Михайлов Андрей', 'id': 25932489}, {'ava': 'https://pp.userapi.com/c639625/v639625598/34587/PX1E99lb2CY.jpg', 'name': 'Шевченко Александр', 'id': 106597468}, {'ava': 'https://pp.userapi.com/c637218/v637218405/5b337/R7POQr_FTmM.jpg', 'name': 'Smith Sam', 'id': 239036405}]
        },
        {name:'Энгельс',n:4,
        users:[{'ava': 'https://pp.userapi.com/c638128/v638128450/40c08/P84uix-_9p8.jpg', 'name': 'Русских Сергей', 'id': 19700450}, {'ava': 'https://sun9-11.userapi.com/c840733/v840733448/55e/cRWzMj65zXI.jpg', 'name': 'Лощинина Анна', 'id': 66951757}, {'ava': 'https://pp.userapi.com/c626420/v626420856/64441/xsiRYY2RGto.jpg', 'name': 'Войщева Анастасия', 'id': 193789856}, {'ava': 'https://pp.userapi.com/c841027/v841027899/8c5f/O-BKUJ40Esk.jpg', 'name': 'Левицкий Владислав', 'id': 227421899}]
        },
        {name:'Феодосия',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639722/v639722561/1ab0b/34UaIFi_od8.jpg', 'name': 'Михайлова Юлия', 'id': 83667561}]
        },
        {name:'Сегежа',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631326/v631326237/ae42/v_Fbi2KlCm0.jpg', 'name': 'Заломаева Юлька', 'id': 11599237}]
        },
        {name:'Азнакаево',n:1,
        users:[{'ava': 'https://pp.userapi.com/c322325/v322325627/29cf/hb_m-ErKnzg.jpg', 'name': 'Хайруллин Илдар', 'id': 105785627}]
        },
        {name:'Жлобин',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637418/v637418253/65c4a/0s72chYwCGg.jpg', 'name': 'Кротов Максим', 'id': 110923544}]
        },
        {name:'Верхоянск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626430/v626430114/58716/nyG7U8aHux8.jpg', 'name': 'Нецветаев Иван', 'id': 327804485}]
        },
        {name:'Гатчина',n:2,
        users:[{'ava': 'https://pp.userapi.com/c622818/v622818658/2a2ae/BkqtfMf7Uw8.jpg', 'name': 'Сапожникова Наталья', 'id': 27645658}, {'ava': 'https://pp.userapi.com/c837221/v837221610/7112/3zVspOIkn0c.jpg', 'name': 'Башкирова Татьяна', 'id': 93175610}]
        },
        {name:'Микунь',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836137/v836137623/524c9/kiY46To-euk.jpg', 'name': 'Голиков Илья', 'id': 82500515}, {'ava': 'https://pp.userapi.com/c627225/v627225635/40a10/migVTZa176Y.jpg', 'name': 'Карелин Денис', 'id': 334212635}]
        },
        {name:'Луховицы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837734/v837734204/7cc52/v4s0q2dDZ2I.jpg', 'name': 'Гуртовая Анастасия', 'id': 3914298}]
        },
        {name:'Слоним',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637216/v637216090/1faa2/n9LacOhiFRg.jpg', 'name': 'Боковец Павел', 'id': 45217090}]
        },
        {name:'Черновцы',n:2,
        users:[{'ava': 'https://pp.userapi.com/c629130/v629130134/5697/AWYLnalu-uU.jpg', 'name': 'Головач Рома', 'id': 47362134}, {'ava': 'https://pp.userapi.com/c836235/v836235541/3e2fa/wQMEGLi5RRw.jpg', 'name': 'Сизоненко Віктор', 'id': 277133541}]
        },
        {name:'Полтава',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639224/v639224762/3c9a9/upJgckedGcs.jpg', 'name': 'Савченко Юлия', 'id': 382706898}]
        },
        {name:'Тутаев',n:1,
        users:[{'ava': 'https://pp.userapi.com/c320221/v320221114/3a07/6-DXttS3YiI.jpg', 'name': 'Кокорин Евгений', 'id': 226162114}]
        },
        {name:'Ахтубинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841634/v841634207/17827/X_H0K_IP8J4.jpg', 'name': 'Журавель Виктория', 'id': 50913643}]
        },
        {name:'Губкинский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837526/v837526236/564bc/wcTVpu4oBOo.jpg', 'name': 'Замараева Маргарита', 'id': 68919236}]
        },
        {name:'Ирбит',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841335/v841335532/144e6/mK12m2ZZeR4.jpg', 'name': 'Величинских Андрей', 'id': 139397796}]
        },
        {name:'Наро-Фоминск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c840234/v840234251/136b5/zz6zB9gYhRI.jpg', 'name': 'Абдурашидов Гаджимурад', 'id': 179701235}, {'ava': 'https://sun9-11.userapi.com/c840528/v840528066/6c6d/1DoJ8BQm5XY.jpg', 'name': 'Соловьева Юлия', 'id': 279530081}]
        },
        {name:'Осиповичи',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837735/v837735781/63535/q2lDTuVO0qI.jpg', 'name': 'Гурская Таня', 'id': 205452781}]
        },
        {name:'Кириши',n:3,
        users:[{'ava': 'https://pp.userapi.com/c631131/v631131280/34587/T_Q2vpSbKzs.jpg', 'name': 'Кузин Егор', 'id': 6591280}, {'ava': 'https://pp.userapi.com/c624316/v624316352/2f3ed/bpoyx1pulqc.jpg', 'name': 'Иванов Игорь', 'id': 19538352}, {'ava': 'https://pp.userapi.com/c841232/v841232459/1d1ea/Y6uI8GU-iSo.jpg', 'name': 'Лебедь Егор', 'id': 26095903}]
        },
        {name:'Сибай',n:1,
        users:[{'ava': 'https://pp.userapi.com/c628117/v628117883/26803/9ycR1laP-7A.jpg', 'name': 'Ягудин Ильдар', 'id': 13474883}]
        },
        {name:'Кимры',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638221/v638221262/3e210/KttjVZ13e3s.jpg', 'name': 'Постников Сергей', 'id': 250831262}]
        },
        {name:'Верхняя Салда',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638619/v638619149/23f94/BRvKmg2pjEk.jpg', 'name': 'Криворотов Сергей', 'id': 234413149}, {'ava': 'https://pp.userapi.com/c639830/v639830262/3f221/oJsEq2gIu9Y.jpg', 'name': 'Семенов Сергей', 'id': 361474957}]
        },
        {name:'Кулебаки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840135/v840135827/500d/Bua45XIcrBg.jpg', 'name': 'Гладков Серега', 'id': 97411827}]
        },
        {name:'Минеральные Воды',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841127/v841127776/16af8/Qhq2PjHWU4o.jpg', 'name': 'Иванов Иван', 'id': 201250272}]
        },
        {name:'Ленинск-Кузнецкий',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836720/v836720494/48acb/57tbE3BSPL8.jpg', 'name': 'Никифоров Антон', 'id': 120653494}]
        },
        {name:'Уварово',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638923/v638923305/5e0d0/3op036aq1W8.jpg', 'name': 'Юрасова Наталия', 'id': 20860096}, {'ava': 'https://pp.userapi.com/c9602/u56560351/e_76f17f41.jpg', 'name': 'Гунин Александр', 'id': 56560351}]
        },
        {name:'Прилуки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626621/v626621638/5d664/n9cun9WgJL8.jpg', 'name': 'Домашенко Вячеслав', 'id': 222057638}]
        },
        {name:'Верхнеднепровский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837638/v837638767/457e3/cCeFeGTjqEE.jpg', 'name': 'Закиров Дмитрий', 'id': 407138767}]
        },
        {name:'Колпино',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638622/v638622974/6c155/L44Qe4yofkk.jpg', 'name': 'Тяжелоногий Станислав', 'id': 370404724}, {'ava': 'https://pp.userapi.com/c626129/v626129809/336e4/kXMGXH7rWeo.jpg', 'name': 'Смирнов Евгений', 'id': 384927809}]
        },
        {name:'Нягань',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637416/v637416168/51829/XdXuUQ-ov4U.jpg', 'name': 'Петренко Роман', 'id': 326701168}]
        },
        {name:'Первоуральск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837227/v837227525/4ca9d/pk5Q7XfAlQE.jpg', 'name': 'Зыков Ваня', 'id': 120907313}]
        },
        {name:'Мелеуз',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637525/v637525549/15144/zROLq3TaJtI.jpg', 'name': 'Хасбатов Вячеслав', 'id': 5119549}]
        },
        {name:'Вычегодский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636826/v636826328/54e26/Xp46q_sWNc8.jpg', 'name': 'Трубачев Сергей', 'id': 57537328}]
        },
        {name:'Никольск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639121/v639121999/41d52/vEcDKT9-5Qg.jpg', 'name': 'Ежова Светлана', 'id': 131735902}]
        },
        {name:'Молодечно',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638925/v638925361/18a47/TBTc52S_2h0.jpg', 'name': 'Вайдо Андрей', 'id': 150420361}]
        },
        {name:'Белореченск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841532/v841532087/1c471/3gj9uELq3MQ.jpg', 'name': 'Сафонов Александр', 'id': 96592246}]
        },
        {name:'Солигорск',n:5,
        users:[{'ava': 'https://pp.userapi.com/c836126/v836126221/4756d/q-e-4sHfH-4.jpg', 'name': 'Жукова Марина', 'id': 28814213}, {'ava': 'https://pp.userapi.com/c9505/u65517068/e_f7c1b143.jpg', 'name': 'Грек Николай', 'id': 65517068}, {'ava': 'https://pp.userapi.com/c841627/v841627573/1c3b9/sldGjfWTNEE.jpg', 'name': 'Бельмач Артём', 'id': 128877973}, {'ava': 'https://pp.userapi.com/c616416/v616416368/1e4a6/8fpIleszzFw.jpg', 'name': 'Leonov Lesha', 'id': 143831368}, {'ava': 'https://pp.userapi.com/c633131/v633131386/3b997/mMAw36G4yRw.jpg', 'name': 'Karol Ivan', 'id': 314929386}]
        },
        {name:'Краснознаменск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c637226/v637226435/28ea4/1JM92thrg7s.jpg', 'name': 'Александрович Эдуард', 'id': 5642435}, {'ava': 'https://pp.userapi.com/c841120/v841120700/e2d7/MZXiJotLAIY.jpg', 'name': 'Емельяненко Александр', 'id': 6397504}, {'ava': 'https://pp.userapi.com/c631416/v631416405/f924/wm8KI5CLrSs.jpg', 'name': 'Фетин Константин', 'id': 41520405}]
        },
        {name:'Кропивницкий / Кировоград',n:3,
        users:[{'ava': 'https://pp.userapi.com/c623924/v623924852/45550/SvElEWUBkcY.jpg', 'name': 'Левченко Татьяна', 'id': 33927852}, {'ava': 'https://pp.userapi.com/c836733/v836733437/42744/ILcGgG9Qvc4.jpg', 'name': 'Лишневский Александр', 'id': 51526437}, {'ava': 'https://sun9-11.userapi.com/c840625/v840625524/b3d6/Sa74DOLyi6s.jpg', 'name': 'Демченко Вікторія', 'id': 386361543}]
        },
        {name:'Шексна',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627131/v627131114/3cb92/iJjW_al-j6w.jpg', 'name': 'Емельянова Наталья', 'id': 3984114}]
        },
        {name:'Спасск-Дальний',n:1,
        users:[{'ava': 'https://pp.userapi.com/c623224/v623224255/21da/nePA36y0-co.jpg', 'name': 'Вольф Анюта', 'id': 232856255}]
        },
        {name:'Югорск',n:1,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Ravilevich Timyr', 'id': 410258923}]
        },
        {name:'Экибастуз',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836622/v836622751/4bd1c/OA7GJxajgyE.jpg', 'name': 'Дмитриев Тимур', 'id': 251288751}]
        },
        {name:'Алеховщина',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841230/v841230932/1c126/SVSHIZa2wzk.jpg', 'name': 'Устинкина Ирина', 'id': 12703176}]
        },
        {name:'Людиново',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836637/v836637533/65fa3/YOycLjxk1pY.jpg', 'name': 'Евдокимова Анюта', 'id': 3755282}, {'ava': 'https://pp.userapi.com/c841326/v841326867/1aa27/qQesnFpgWl8.jpg', 'name': 'Пинахин Денис', 'id': 21704159}]
        },
        {name:'Ликино-Дулево',n:3,
        users:[{'ava': 'https://pp.userapi.com/c636516/v636516484/119fe/rJorI2tXj_g.jpg', 'name': 'Чеканов Олег', 'id': 7352484}, {'ava': 'https://pp.userapi.com/c836333/v836333098/50e1d/G5LjV_axLDk.jpg', 'name': 'Буянова Екатерина', 'id': 16198176}, {'ava': 'https://pp.userapi.com/c638727/v638727433/5866f/K_ccOabQ0dY.jpg', 'name': 'Мурина Алёнка', 'id': 26788175}]
        },
        {name:'Новочебоксарск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c841636/v841636505/1befe/aCG0-GuLTEk.jpg', 'name': 'Захаров Вадим', 'id': 11266475}, {'ava': 'https://pp.userapi.com/c837520/v837520604/53212/cQs1IHcmM38.jpg', 'name': 'Шемякина Марина', 'id': 154023154}, {'ava': 'https://pp.userapi.com/c639422/v639422114/3618a/36bqO4anaPY.jpg', 'name': 'Жилина Виктория', 'id': 155828394}]
        },
        {name:'Нарьян-Мар',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631526/v631526245/4917f/nqvD9J9c0Ig.jpg', 'name': 'Лунёва Екатерина', 'id': 5383245}]
        },
        {name:'Дружковка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636318/v636318597/7162d/cem4waJiJlo.jpg', 'name': 'Шкодинов Игорь', 'id': 13850597}]
        },
        {name:'Алушта',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639222/v639222150/3931d/87BHR2MG_Ho.jpg', 'name': 'Лапшин Михаил', 'id': 5546954}, {'ava': 'https://pp.userapi.com/c622422/v622422293/12b83/zMJ1ma_rh68.jpg', 'name': 'Пронькин Дима', 'id': 262054293}]
        },
        {name:'Монино',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836323/v836323755/4a00f/mUh39zoQts0.jpg', 'name': 'Голыгина Наталья', 'id': 32569755}, {'ava': 'https://pp.userapi.com/c308325/v308325038/b937/s8DKHlUgHyg.jpg', 'name': 'Гуреев Константин', 'id': 92136038}]
        },
        {name:'Иерусалим',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837538/v837538497/710b9/T7ecWJWfHAI.jpg', 'name': 'Заяц Паша', 'id': 69936145}]
        },
        {name:'Черкассы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639218/v639218879/e4a3/MW1_bXI6prQ.jpg', 'name': 'Ващишина Оля', 'id': 181227879}]
        },
        {name:'Кадуй',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840126/v840126418/fd09/50yG6He_jg4.jpg', 'name': 'Малкова Наташа', 'id': 158243418}]
        },
        {name:'Зима',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638723/v638723460/32a4/ixKhfCozMQo.jpg', 'name': 'Бызов Сергей', 'id': 317040460}, {'ava': 'https://pp.userapi.com/c638218/v638218650/4bbec/f096EQtWpjU.jpg', 'name': 'Буринский Олег', 'id': 353978891}]
        },
        {name:'Вольск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c840138/v840138960/48e2/J1ujWtzHPTE.jpg', 'name': 'Сафаргалиев Ильяс', 'id': 168336960}, {'ava': 'https://pp.userapi.com/c604822/v604822583/114b0/6HTPRl8QAN0.jpg', 'name': 'Добролюбов Алан', 'id': 345606583}]
        },
        {name:'Luanda',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636426/v636426640/6c4fb/qqHijZ-NI4s.jpg', 'name': 'Кирьянов Максим', 'id': 17249640}]
        },
        {name:'Oslo',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836739/v836739274/55b3c/of4jqHnhseY.jpg', 'name': 'Дёке Сайдинг', 'id': 437408944}]
        },
        {name:'Шелехов',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837525/v837525055/70ca1/jg8yVdbGHYA.jpg', 'name': 'Шабанов Виктор', 'id': 31124878}]
        },
        {name:'Würzburg',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c837333/v837333998/7865f/mKE-7Dtmmt4.jpg', 'name': 'Шуткина Анастасия', 'id': 9445625}]
        },
        {name:'Медвежьегорск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841433/v841433902/a123/ezk4jW1D0zQ.jpg', 'name': 'Блинов Виталий', 'id': 188483210}]
        },
        {name:'Нытва',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638920/v638920755/3ba55/XHxhLDMXCAQ.jpg', 'name': 'Косков Сергей', 'id': 108147755}]
        },
        {name:'Октябрьский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c616127/v616127948/1ad07/JAAJYmWIORA.jpg', 'name': 'Шестаков Игорь', 'id': 266732948}]
        },
        {name:'Вяземский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c622916/v622916181/933c/5ouRx0I7Phk.jpg', 'name': 'Мамыкин Гриша', 'id': 197758181}]
        },
        {name:'Вязьма',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836433/v836433742/76540/tCmlxGaNTjk.jpg', 'name': 'Волков Алексей', 'id': 23643742}]
        },
        {name:'Каспийск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840130/v840130272/2502e/6-wlNFvLfIM.jpg', 'name': 'Аминова Амина', 'id': 150922597}]
        },
        {name:'Агинское',n:1,
        users:[{'ava': 'https://pp.userapi.com/c9809/u7192839/e_5cd86aa0.jpg', 'name': 'Батомункуев Батожаб', 'id': 7192839}]
        },
        {name:'Лесосибирск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c841421/v841421619/19b2b/dho0zkb902I.jpg', 'name': 'Москвитин Артём', 'id': 58974528}, {'ava': 'https://pp.userapi.com/c638417/v638417191/5a158/IWZXIDARxok.jpg', 'name': 'Гребнев Иван', 'id': 220411398}]
        },
        {name:'Карпинск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c629424/v629424933/47add/trEyWSWzOe4.jpg', 'name': 'Альдергот Макс', 'id': 94744933}, {'ava': 'https://pp.userapi.com/c638521/v638521823/5a590/nm08gnrsPmU.jpg', 'name': 'Балабанов Георгий', 'id': 139154853}]
        },
        {name:'Ровно',n:1,
        users:[{'ava': 'https://pp.userapi.com/c621509/v621509090/16591/AyPBoKTNSfg.jpg', 'name': 'Паламар Владимир', 'id': 355922533}]
        },
        {name:'Шымкент',n:4,
        users:[{'ava': 'https://pp.userapi.com/c638216/v638216878/2ecb6/PFcspL_A7Z4.jpg', 'name': 'Нехорошев Митяй', 'id': 163804878}, {'ava': 'https://pp.userapi.com/c406531/u172758904/e_85f94069.jpg', 'name': 'Zharov Kostya', 'id': 172758904}, {'ava': 'https://pp.userapi.com/c837525/v837525654/5e5c5/E9JsFNCpYHc.jpg', 'name': 'Абдукаюмов Абдулазиз', 'id': 338399180}, {'ava': 'https://pp.userapi.com/c638923/v638923263/4a42f/Pt-9V22cWZ0.jpg', 'name': 'Кулмырза Серик', 'id': 347112757}]
        },
        {name:'Адлер',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638519/v638519626/47b62/szJLoweYKsE.jpg', 'name': 'Каменев Антон', 'id': 61462626}, {'ava': 'https://pp.userapi.com/c638527/v638527025/68b19/Gv7sHGbOvQg.jpg', 'name': 'Златопольский Макс', 'id': 348234450}]
        },
        {name:'Кяхта',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837735/v837735325/6f006/47ciWB7nmGw.jpg', 'name': 'Семицветов Владимир', 'id': 384098198}]
        },
        {name:'Топки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639623/v639623555/3f7db/z4WyNA32T1s.jpg', 'name': 'Кривов Николай', 'id': 16176531}]
        },
        {name:'Волжск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638023/v638023119/34641/y40ZHR7fBB4.jpg', 'name': 'Яковлев Антон', 'id': 63782119}]
        },
        {name:'Чебаркуль',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638326/v638326970/7a0c6/TRH9dM-YIy8.jpg', 'name': 'Столбова Наталья', 'id': 37403931}]
        },
        {name:'Тель-Авив',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836633/v836633041/33778/T9l2MDUXtDQ.jpg', 'name': 'Никольский Константин', 'id': 223237041}]
        },
        {name:'Стаханов',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627520/v627520053/396c6/8dpNGzxc6DA.jpg', 'name': 'Хайло Олександр', 'id': 12511053}]
        },
        {name:'Киржач',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636121/v636121233/22ef3/3AWo6xVOBHo.jpg', 'name': 'Романов Сергей', 'id': 16841233}]
        },
        {name:'Мариинский Посад',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836129/v836129610/5c01e/BEhs3ti8Pw0.jpg', 'name': 'Алексеев Стас', 'id': 166374085}]
        },
        {name:'Азов',n:4,
        users:[{'ava': 'https://pp.userapi.com/c604527/v604527351/4ae4c/-QnAdHp0iUc.jpg', 'name': 'Данильченко Анатолий', 'id': 225196351}, {'ava': 'https://pp.userapi.com/c836734/v836734397/5aff5/82_fki17bbI.jpg', 'name': 'Povetkin Vlad', 'id': 271674375}, {'ava': 'https://pp.userapi.com/c638621/v638621722/60a97/C_yuaF58_3A.jpg', 'name': 'Камалеева Наталья', 'id': 279384873}, {'ava': 'https://pp.userapi.com/c836528/v836528258/37ea5/RQZV2L_7mCg.jpg', 'name': 'Хворов Вячеслав', 'id': 398368258}]
        },
        {name:'Мирный',n:5,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Войтенко Константин', 'id': 944183}, {'ava': 'https://pp.userapi.com/c625830/v625830154/67465/dzGym1wPf70.jpg', 'name': 'Шайнуров Сергей', 'id': 14759154}, {'ava': 'https://pp.userapi.com/c841623/v841623934/136a6/vrQV8Mm_d7A.jpg', 'name': 'Карпенко Наталья', 'id': 66063814}, {'ava': 'https://pp.userapi.com/c639319/v639319313/3e2a9/XdUSPaneqcw.jpg', 'name': 'Киселёва Оленька', 'id': 70852961}, {'ava': 'https://pp.userapi.com/c637425/v637425369/9978/umuFicu4c04.jpg', 'name': 'Юрьев Георгий', 'id': 382706369}]
        },
        {name:'Няндома',n:2,
        users:[{'ava': 'https://pp.userapi.com/c606031/v606031889/87c2/citX2prKzjw.jpg', 'name': 'Карчевская Юлия', 'id': 92067889}, {'ava': 'https://sun9-11.userapi.com/c836536/v836536792/6e79/xukbXQya-eY.jpg', 'name': 'Чернецкий Юрий', 'id': 224020792}]
        },
        {name:'Минусинск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c315131/v315131328/bb74/Avk6wjmEBrQ.jpg', 'name': 'Титов Костя', 'id': 48202328}, {'ava': 'https://pp.userapi.com/c837320/v837320579/44bbe/0oH5-ZRgL_I.jpg', 'name': 'Ишков Денис', 'id': 197623579}]
        },
        {name:'Волгодонск',n:5,
        users:[{'ava': 'https://pp.userapi.com/c622429/v622429327/2c68a/Q9hkoFlj5T4.jpg', 'name': 'Цицорина Юлия', 'id': 89811327}, {'ava': 'https://pp.userapi.com/c639724/v639724233/4c71f/sZHeKssADcY.jpg', 'name': 'Краев Игорь', 'id': 155865039}, {'ava': 'https://pp.userapi.com/c638917/v638917714/5cb58/loQVGoafOIk.jpg', 'name': 'Подборная Светлана', 'id': 162022313}, {'ava': 'https://pp.userapi.com/c639219/v639219492/3a6d6/UsM-yChjPU4.jpg', 'name': 'Силаева Марина', 'id': 210706217}, {'ava': 'https://pp.userapi.com/c840236/v840236251/18ffa/mtroPU6yHCE.jpg', 'name': 'Федоренко Роман', 'id': 339001504}]
        },
        {name:'Жигулевск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c637220/v637220558/5d473/l0ILO7oSIRg.jpg', 'name': 'Илюткина Анютка', 'id': 97640558}, {'ava': 'https://pp.userapi.com/c310526/v310526991/3121/kEd2IRGvhew.jpg', 'name': 'Бабина Галина', 'id': 138062991}, {'ava': 'https://pp.userapi.com/c638628/v638628121/60bce/WqhCSwh6eJ0.jpg', 'name': 'Красноярцева Ольга', 'id': 364448872}]
        },
        {name:'Кинешма',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836632/v836632740/483fa/zwPc0b1Fsw4.jpg', 'name': 'Касьянов Александр', 'id': 61708194}, {'ava': 'https://sun9-11.userapi.com/c840730/v840730618/65ff/rzcgPk8MG5c.jpg', 'name': 'Немцов Вячеслав', 'id': 89658371}]
        },
        {name:'Звенигород',n:1,
        users:[{'ava': 'https://pp.userapi.com/c307110/v307110155/beaf/Cd4B2SA5E4o.jpg', 'name': 'Yakubov Shuay', 'id': 152863155}]
        },
        {name:'Комрат',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638721/v638721433/30035/9zsJ4XR7xhU.jpg', 'name': 'Узун Дима', 'id': 252122433}]
        },
        {name:'Шугозеро',n:1,
        users:[{'ava': 'https://pp.userapi.com/c622318/v622318193/369de/N0-8hQG8wY4.jpg', 'name': 'Фомин Вадим', 'id': 2662193}]
        },
        {name:'Ливны',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639727/v639727589/3532d/AUntXJT6BOU.jpg', 'name': 'Агеев Сергей', 'id': 30828171}, {'ava': 'https://pp.userapi.com/c637225/v637225249/5da55/8b2rFv3Yt2E.jpg', 'name': 'Кожухов Владислав', 'id': 101173249}]
        },
        {name:'Ростов',n:5,
        users:[{'ava': 'https://pp.userapi.com/c837320/v837320529/3252e/78GUlExcd04.jpg', 'name': 'Никольский Денис', 'id': 10800529}, {'ava': 'https://pp.userapi.com/c837233/v837233217/4eb58/Fj0Uyhl5NbE.jpg', 'name': 'Щетков Виталий', 'id': 70449972}, {'ava': 'https://pp.userapi.com/c638329/v638329569/6206a/zS_eC9-eGyw.jpg', 'name': 'Галочкина Лилия', 'id': 148228234}, {'ava': 'https://pp.userapi.com/c840238/v840238098/2645d/qF61N8Ckt0E.jpg', 'name': 'Каленский Дмитрий', 'id': 151467018}, {'ava': 'https://pp.userapi.com/c425031/v425031134/70c0/ajnlTiMjEro.jpg', 'name': 'Тагирова Эльвира', 'id': 228337134}]
        },
        {name:'Верхний Баскунчак',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637321/v637321759/44996/-RbpCa30hJU.jpg', 'name': 'Артюхов Олег', 'id': 210669759}]
        },
        {name:'Саки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c633616/v633616197/182f6/8P_g_WnTsmI.jpg', 'name': 'Ларенков Сережа', 'id': 15199197}]
        },
        {name:'Добрянка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837329/v837329583/591de/CkfHvhK7Cgs.jpg', 'name': 'Катаева Юлия', 'id': 278375329}]
        },
        {name:'Павловский Посад',n:1,
        users:[{'ava': 'https://pp.userapi.com/c629506/v629506550/3e21/jOSRvu-Yw-g.jpg', 'name': 'Ровковский Михаил', 'id': 2637550}]
        },
        {name:'Одинцово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638228/v638228578/63fd4/nwPjWbaIYJk.jpg', 'name': 'Федотов Сергей', 'id': 262664973}]
        },
        {name:'Катав-Ивановск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841536/v841536442/18b63/zy0sVgI4kIk.jpg', 'name': 'Суяргулова Роза', 'id': 370732717}]
        },
        {name:'Свирск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841421/v841421144/1d408/9f1eNLzyRCw.jpg', 'name': 'Михайлова Аня', 'id': 234816164}]
        },
        {name:'Копейск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841622/v841622689/187cd/wgVDxaDKpdw.jpg', 'name': 'Биба Антон', 'id': 9179412}]
        },
        {name:'Ибреси',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639921/v639921088/2d822/gtLV6FsXfEU.jpg', 'name': 'Михайлова Кристина', 'id': 115846088}]
        },
        {name:'Малин',n:1,
        users:[{'ava': 'https://pp.userapi.com/c619929/v619929160/1d99f/2UAuIEY3_8c.jpg', 'name': 'Порохнюк Олександр', 'id': 11357160}]
        },
        {name:'Шебекино',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837426/v837426943/43705/4Czgvl1x7PM.jpg', 'name': 'Сидоренко Владимир', 'id': 232660372}]
        },
        {name:'Шумиха',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836532/v836532140/453ba/WkjfNoEu0G4.jpg', 'name': 'Вековшинин Филипп', 'id': 192679140}]
        },
        {name:'Los Angeles',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637317/v637317709/21bfb/l643mx03WXs.jpg', 'name': 'Елисеев Дмитрий', 'id': 229532709}]
        },
        {name:'Сысерть',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636617/v636617816/17970/ui-UFIq179U.jpg', 'name': 'Седов Владимир', 'id': 235610816}]
        },
        {name:'Озёры',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639418/v639418567/4c49d/wrV0KKQk8F8.jpg', 'name': 'Конышев Юрий', 'id': 180944901}]
        },
        {name:'Кунгур',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836438/v836438169/57306/WGV7v65sUYA.jpg', 'name': 'Пономарева Вера', 'id': 136643725}]
        },
        {name:'Тейково',n:5,
        users:[{'ava': 'https://pp.userapi.com/c837727/v837727903/69cac/KHobcef0Ljc.jpg', 'name': 'Костычева Ольга', 'id': 52659849}, {'ava': 'https://pp.userapi.com/c837120/v837120298/f95/-8ECYPaLhKI.jpg', 'name': 'Кубарев Андрей', 'id': 86484298}, {'ava': 'https://pp.userapi.com/c638925/v638925014/17ec/QvO06uAhs34.jpg', 'name': 'Хохряков Алексей', 'id': 153923014}, {'ava': 'https://pp.userapi.com/c636020/v636020842/1a7fa/rggYK7o5vpw.jpg', 'name': 'Пересвет Александр', 'id': 282010842}, {'ava': 'https://pp.userapi.com/c638725/v638725655/5b9d0/fzWR39OjAp8.jpg', 'name': 'Лукьянова Мария', 'id': 325699587}]
        },
        {name:'Степногорск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837120/v837120592/2435f/FuNjL5NvHWg.jpg', 'name': 'Военков Евгений', 'id': 48140592}]
        },
        {name:'Верхнедвинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636319/v636319854/5e9f8/5vWzmrmphL8.jpg', 'name': 'Томашевич Сергей', 'id': 20732854}]
        },
        {name:'Платнировская',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836133/v836133046/36d90/BpXxoZYQR0A.jpg', 'name': 'Касалыга Анна', 'id': 112328046}]
        },
        {name:'Алчевск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638818/v638818529/6ac8f/Oay5zgiaXQE.jpg', 'name': 'Мозолевская Анастасия', 'id': 59014642}]
        },
        {name:'Пугачев',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638219/v638219559/52ef7/PooKIGnvr-o.jpg', 'name': 'Рябченко Екатерина', 'id': 168413559}]
        },
        {name:'Ковель',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637122/v637122081/5ef4a/Wd3DzcblfwE.jpg', 'name': 'Чайка Дима', 'id': 87491501}]
        },
        {name:'Шумерля',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836732/v836732248/4a2a1/aK8l5qkrg20.jpg', 'name': 'Назиров Владислав', 'id': 4588248}, {'ava': 'https://pp.userapi.com/c836422/v836422389/53e8b/LYH7ywY4mis.jpg', 'name': 'Назирова Ольга', 'id': 35176075}]
        },
        {name:'Кыштым',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840438/v840438214/4872/xvFPPexz_RQ.jpg', 'name': 'Дайбова Алина', 'id': 228931704}]
        },
        {name:'Балахна',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836231/v836231504/3eb4b/VIjwIO-QyI8.jpg', 'name': 'Антонов Санёк', 'id': 21542504}]
        },
        {name:'Актаныш',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638125/v638125984/33a96/z1-TYeuN7ZM.jpg', 'name': 'Кирамова Инзиля', 'id': 45642984}, {'ava': 'https://pp.userapi.com/c636926/v636926332/40e79/x95bi9rH_zE.jpg', 'name': 'Шириева Эльвира', 'id': 271332332}]
        },
        {name:'Пионерский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c306804/u125207036/e_b200f9fa.jpg', 'name': 'Суханов Владимир', 'id': 125207036}]
        },
        {name:'Слободской',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637227/v637227992/971c/xzua_tIvAtQ.jpg', 'name': 'Самарин Андрей', 'id': 381093992}]
        },
        {name:'Атяшево',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837737/v837737271/208da/QTHbATr_BgA.jpg', 'name': 'Моисеев Александр', 'id': 151776271}]
        },
        {name:'Акбулак',n:1,
        users:[{'ava': 'https://pp.userapi.com/c9672/v9672335/4d/_as-ief-G1Q.jpg', 'name': 'Ахметов Назарбай', 'id': 228166335}]
        },
        {name:'Уржум',n:1,
        users:[{'ava': 'https://pp.userapi.com/c630019/v630019215/3b4bb/_3DKVnYTGLE.jpg', 'name': 'Данилов Игорь', 'id': 69519215}]
        },
        {name:'Талдом',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639631/v639631683/43b0f/2npUjiFLemY.jpg', 'name': 'Жуков Денис', 'id': 44077213}, {'ava': 'https://pp.userapi.com/c837322/v837322084/64d46/FxXMDVZqrAE.jpg', 'name': 'Акулова Татьяна', 'id': 226047084}]
        },
        {name:'Северская',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639624/v639624445/3953a/Zek_OSohoMs.jpg', 'name': 'Аксенов Денис', 'id': 10550445}]
        },
        {name:'Данилов',n:3,
        users:[{'ava': 'https://pp.userapi.com/c638630/v638630719/3e8d0/R5HtLFRa7PM.jpg', 'name': 'Шарова Татьяна', 'id': 5472719}, {'ava': 'https://pp.userapi.com/c841232/v841232185/18404/Knrkn6MPsog.jpg', 'name': 'Талерова Ольга', 'id': 120536058}, {'ava': 'https://pp.userapi.com/c638616/v638616883/56ec4/_8D_n0hsPAc.jpg', 'name': 'Фомин Игорь', 'id': 191425172}]
        },
        {name:'Чернушка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837525/v837525348/5fda3/njyT00HWrlU.jpg', 'name': 'Казанцев Владислав', 'id': 140427551}]
        },
        {name:'Яр',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637421/v637421774/59f53/7y5c5hifGUk.jpg', 'name': 'Сотников Николай', 'id': 66983270}]
        },
        {name:'Волосово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c629128/v629128793/4b35/PXMHIrtiYag.jpg', 'name': 'Михайличенко Максим', 'id': 9344793}]
        },
        {name:'Ковылкино',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836735/v836735569/54a07/lX5XDyrOnuI.jpg', 'name': 'Ефимкин Денис', 'id': 166860400}]
        },
        {name:'Задонск',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c840723/v840723809/4ffd/FAeV6QNIkzQ.jpg', 'name': 'Иванская Ксения', 'id': 191003818}]
        },
        {name:'Корсаков',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636027/v636027918/11892/fYPvSFX9R-A.jpg', 'name': 'Королёв Макс', 'id': 141101918}]
        },
        {name:'Миасс',n:4,
        users:[{'ava': 'https://pp.userapi.com/c617825/v617825063/1e4cc/MLFnrsXKOB8.jpg', 'name': 'Ерохин Дмитрий', 'id': 31990063}, {'ava': 'https://pp.userapi.com/c313427/v313427365/ddd/4_WntfDEhXg.jpg', 'name': 'Тетюев Андрей', 'id': 40707365}, {'ava': 'https://pp.userapi.com/c836137/v836137152/50fc7/nd_ECQrp7Mg.jpg', 'name': 'Хакимов Вадим', 'id': 65459225}, {'ava': 'https://pp.userapi.com/c638526/v638526901/691e7/7lfmnk7FWNk.jpg', 'name': 'Бубловская Анастасия', 'id': 185282829}]
        },
        {name:'Краснодон',n:4,
        users:[{'ava': 'https://pp.userapi.com/c841224/v841224256/56e50/FPL7YjWAMY8.jpg', 'name': 'Калинин Александр', 'id': 6944627}, {'ava': 'https://pp.userapi.com/c836728/v836728820/50743/RccvXdEs0ms.jpg', 'name': 'Вержбицкая Дарья', 'id': 18031820}, {'ava': 'https://pp.userapi.com/c636429/v636429862/54391/LiLEkBLrvus.jpg', 'name': 'Смирнов Михаил', 'id': 18314862}, {'ava': 'https://pp.userapi.com/c836226/v836226237/5dab0/rdyFMKTzsI4.jpg', 'name': 'Куцаева Оксана', 'id': 20208640}]
        },
        {name:'Ельня',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837426/v837426377/4fbba/_L6S1whCQpw.jpg', 'name': 'Макешина Лилия', 'id': 390560752}]
        },
        {name:'Петропавловск',n:4,
        users:[{'ava': 'https://pp.userapi.com/c626821/v626821799/2f409/V8zFrikOwgo.jpg', 'name': 'Беленок Константин', 'id': 36068799}, {'ava': 'https://pp.userapi.com/c622728/v622728747/51626/tkW8McPehRY.jpg', 'name': 'Чупринскас Виктор', 'id': 41657747}, {'ava': 'https://pp.userapi.com/c626218/v626218587/52e59/VvHIQ6e5cNw.jpg', 'name': 'Халиуллин Ильдар', 'id': 90441587}, {'ava': 'https://pp.userapi.com/c630329/v630329277/402ae/qcQ8QOMHepI.jpg', 'name': 'Горобченко Алексей', 'id': 329359277}]
        },
        {name:'Дружный',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840128/v840128339/118eb/EQcDDZ8sphE.jpg', 'name': 'Иванов Паша', 'id': 52611339}]
        },
        {name:'Рудня',n:2,
        users:[{'ava': 'https://pp.userapi.com/c638621/v638621897/5bacf/_SZE0skdQ9U.jpg', 'name': 'Федорова Ольга', 'id': 92384317}, {'ava': 'https://pp.userapi.com/c837634/v837634871/50a70/xbzleow_E_4.jpg', 'name': 'Малашенкова-Прудникова Ольга', 'id': 178895727}]
        },
        {name:'Борисполь',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637520/v637520651/4c2d7/oyZUb_hcO0E.jpg', 'name': 'Буценко Владислав', 'id': 285999651}]
        },
        {name:'Заокский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639319/v639319524/51994/feCDwkZ-h0k.jpg', 'name': 'Khudoberdin Nikita', 'id': 323926757}]
        },
        {name:'Лосино-Петровский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604730/v604730945/2051/DYqLsuJ5KQI.jpg', 'name': 'Чумичёва Ольга', 'id': 23795945}]
        },
        {name:'Среднеуральск',n:3,
        users:[{'ava': 'https://pp.userapi.com/c621705/v621705320/14a22/6QwVwp2Rr8Q.jpg', 'name': 'Ляшенко Александр', 'id': 11668144}, {'ava': 'https://pp.userapi.com/c841138/v841138873/14d18/Scks-Y2T5lM.jpg', 'name': 'Кучин Женя', 'id': 28541386}, {'ava': 'https://pp.userapi.com/c837239/v837239746/533aa/vcCPdkveBg4.jpg', 'name': 'Ляшенко Дарья', 'id': 32031735}]
        },
        {name:'Лобня',n:2,
        users:[{'ava': 'https://pp.userapi.com/c840128/v840128775/9e24/3iQgeYzuDr8.jpg', 'name': 'Гизатулин Роман', 'id': 18586775}, {'ava': 'https://pp.userapi.com/c626628/v626628467/239ee/zs9X8dfhNoI.jpg', 'name': 'Вихрова Наташа', 'id': 98880467}]
        },
        {name:'Кагул',n:1,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Mocanu Oleg', 'id': 23163278}]
        },
        {name:'Красноград',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604529/v604529695/17939/43fGK8oN8Sw.jpg', 'name': 'Абдрахманов Владимир', 'id': 87027695}]
        },
        {name:'Оса',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638018/v638018384/50602/4gafKEH6of4.jpg', 'name': 'Богомягков Андрей', 'id': 58766384}]
        },
        {name:'Октябрьский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836529/v836529520/57023/HoWM7bwVR0c.jpg', 'name': 'Гибадуллина Гульназ', 'id': 79688704}]
        },
        {name:'Буинск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c621707/v621707568/f119/rm9FZeYLNu8.jpg', 'name': 'Сабирзянов Руслан', 'id': 34674892}]
        },
        {name:'Карабаново',n:1,
        users:[{'ava': 'https://pp.userapi.com/c622427/v622427620/5c37f/JCDrjMqhuW4.jpg', 'name': 'Иванов Вячеслав', 'id': 205281620}]
        },
        {name:'Сокол',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639817/v639817908/4a99d/gFSKUw84Z-g.jpg', 'name': 'Ефимов Артем', 'id': 259271447}]
        },
        {name:'Старотитаровская',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631618/v631618430/27939/xFN5psqEhTk.jpg', 'name': 'Ерёменко Егор', 'id': 174708430}]
        },
        {name:'Татарск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637218/v637218176/6a8b7/TXlADzKop1g.jpg', 'name': 'Вилкун Сергей', 'id': 248165444}]
        },
        {name:'Корткерос',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836234/v836234206/167a1/DrS3loxvK10.jpg', 'name': 'Можаев Данил', 'id': 183490206}]
        },
        {name:'Дятьково',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604720/v604720600/1a1a9/2z22Rp0HPog.jpg', 'name': 'Горохов Евгений', 'id': 47411600}]
        },
        {name:'Балаково',n:3,
        users:[{'ava': 'https://pp.userapi.com/c837138/v837138650/3abdc/mr4el_5OYUE.jpg', 'name': 'Зубаренков Андрей', 'id': 2140650}, {'ava': 'https://pp.userapi.com/c621509/v621509749/ac9e/UIM19HYXon0.jpg', 'name': 'Краснова Наталья', 'id': 136645545}, {'ava': 'https://pp.userapi.com/c836429/v836429527/41ac8/z_PQD5Vm86k.jpg', 'name': 'Petrovskaya Lisa', 'id': 288917527}]
        },
        {name:'Острог',n:1,
        users:[{'ava': 'https://pp.userapi.com/c617117/v617117037/14611/zw5VifNVxjk.jpg', 'name': 'Андросюк Олександр', 'id': 62623037}]
        },
        {name:'Горноуральский',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c638924/v638924697/2e23e/VXKIpG7Z0qo.jpg', 'name': 'Иванов Иван', 'id': 171396697}]
        },
        {name:'Santa Monica',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841121/v841121545/15d6a/WSio9COkrWE.jpg', 'name': 'Миракова Каролина', 'id': 182865523}]
        },
        {name:'Дегтярск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639516/v639516945/2c3e1/saSQCqoDDAU.jpg', 'name': 'Дегтярск Интерра', 'id': 135374945}]
        },
        {name:'Карачев',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840029/v840029556/b60e/NGPrS8I8ZY0.jpg', 'name': 'Нечаев Дмитрий', 'id': 96466556}]
        },
        {name:'Намцы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639119/v639119014/4afd8/i4nhihbZRRU.jpg', 'name': 'Назарова Саргылана', 'id': 380145012}]
        },
        {name:'Гжель',n:1,
        users:[{'ava': 'https://pp.userapi.com/c633417/v633417455/12311/aGJsklXceHc.jpg', 'name': 'Белоусов Александр', 'id': 67944455}]
        },
        {name:'Невьянск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638926/v638926921/5ea54/wl_MqdZmfRg.jpg', 'name': 'Иванова Люда', 'id': 213119235}]
        },
        {name:'Эльбрус',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837732/v837732552/6906c/7QyhPBT-4K0.jpg', 'name': 'Паламарчук Ярослав', 'id': 42278115}]
        },
        {name:'Люботин',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636123/v636123658/2ea45/JbxdHaALsn0.jpg', 'name': 'Гаврилюк Юлия', 'id': 277388658}]
        },
        {name:'Лесной',n:2,
        users:[{'ava': 'https://pp.userapi.com/c639518/v639518498/4010d/YVZBfps1tBs.jpg', 'name': 'Игошев Евгений', 'id': 217467163}, {'ava': 'https://pp.userapi.com/c637327/v637327218/66c33/rSlfJJGn_9g.jpg', 'name': 'Кузнецова Ульяна', 'id': 232054540}]
        },
        {name:'Вольногорск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c630229/v630229859/43f4a/nb-sV9h-1ZU.jpg', 'name': 'Даниленко Станислав', 'id': 294240859}]
        },
        {name:'Salzburg',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840337/v840337167/7523/bzXY8Ass01E.jpg', 'name': 'Федорова Снежана', 'id': 53169504}]
        },
        {name:'Лангепас',n:1,
        users:[{'ava': 'https://pp.userapi.com/c614617/v614617694/1e057/9g_DLPV-QFY.jpg', 'name': 'Гарипов Рустам', 'id': 29883694}]
        },
        {name:'Вельск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841337/v841337093/fb50/kOyX6isMaqU.jpg', 'name': 'Золотых Максим', 'id': 11337376}]
        },
        {name:'Зайсан',n:1,
        users:[{'ava': 'https://pp.userapi.com/c1500/u14410076/e_6f7ee8c2.jpg', 'name': 'Демидов Андрей', 'id': 14410076}]
        },
        {name:'Чик',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637524/v637524171/3f8f6/y4V1IT6KMMo.jpg', 'name': 'Капинос Евгений', 'id': 290491171}]
        },
        {name:'Bergamo',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841022/v841022788/17868/YEZJkLPJ0NE.jpg', 'name': 'Овчарик Роман', 'id': 158926543}]
        },
        {name:'Буздяк',n:2,
        users:[{'ava': 'https://pp.userapi.com/c840437/v840437270/8e4f/-ZfYFjeXs3k.jpg', 'name': 'Мифтахов Дамир', 'id': 36891388}, {'ava': 'https://sun9-11.userapi.com/c840720/v840720441/1968/7YfxkBIBKiY.jpg', 'name': 'Нармухамедова Айгуль', 'id': 138868264}]
        },
        {name:'Брянка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840423/v840423045/3091/FOwuUOjrZc8.jpg', 'name': 'Кохно Анна', 'id': 30143922}]
        },
        {name:'Brugge',n:1,
        users:[{'ava': 'https://pp.userapi.com/c629518/v629518578/4f6f5/O0fyA8FHgfg.jpg', 'name': 'Кучеренко Александр', 'id': 185847578}]
        },
        {name:'Налобиха',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627129/v627129659/1a0b0/MXzBL78qRPs.jpg', 'name': 'Непорожний Александр', 'id': 191675659}]
        },
        {name:'Толбазы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639525/v639525676/1cf3d/VtXsoOPyXEo.jpg', 'name': 'Абсалямов Рифат', 'id': 24748676}]
        },
        {name:'Вятские Поляны',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836736/v836736965/25d0e/RNjGXxb2x_o.jpg', 'name': 'Лошкарёв Кирилл', 'id': 144797965}]
        },
        {name:'Грязовец',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841526/v841526192/14eaa/y-5dat1wMjc.jpg', 'name': 'Комиссаров Владимир', 'id': 61207096}]
        },
        {name:'Уват',n:1,
        users:[{'ava': 'https://pp.userapi.com/c302511/u167657506/e_5ee15b6f.jpg', 'name': 'Мальцев Алексей', 'id': 167657506}]
        },
        {name:'Усть-Тарка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636417/v636417249/5b086/61yzlz-cXNQ.jpg', 'name': 'Казанцева Алёна', 'id': 78010249}]
        },
        {name:'Павловская',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837733/v837733001/6e128/pUregUlHEFA.jpg', 'name': 'Кривего Саша', 'id': 33239890}]
        },
        {name:'Спасское',n:1,
        users:[{'ava': 'https://pp.userapi.com/c616631/v616631161/160c8/1RLEN1zY14g.jpg', 'name': 'Недошитов Дмитрий', 'id': 11570161}]
        },
        {name:'Похвистнево',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c840528/v840528885/549a/aj6Y2eObGj4.jpg', 'name': 'Ерушов Виталий', 'id': 82677758}]
        },
        {name:'Черноморское',n:1,
        users:[{'ava': 'https://pp.userapi.com/c10574/u60138583/e_2f9bc38d.jpg', 'name': 'Ястремский Роман', 'id': 60138583}]
        },
        {name:'Пойковский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837332/v837332844/46875/uCJH1-BC1C4.jpg', 'name': 'Дрогушев Виктор', 'id': 279422844}]
        },
        {name:'Сватово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841321/v841321422/12358/ujXlDlSLd0U.jpg', 'name': 'Цапко Андрей', 'id': 141341058}]
        },
        {name:'Грахово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c626223/v626223959/2f224/Oo7V1Cl0jCI.jpg', 'name': 'Головизнин Андрей', 'id': 176317959}]
        },
        {name:'Сердобск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c10664/u56363063/e_ea302b92.jpg', 'name': 'Солянов Николай', 'id': 56363063}]
        },
        {name:'Ветлуга',n:1,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Курочкина Полина', 'id': 141024880}]
        },
        {name:'Ганцевичи',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639626/v639626326/434a8/utXkkXd9XKE.jpg', 'name': 'Демидок Андрей', 'id': 48339838}]
        },
        {name:'Змиев',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c840536/v840536328/64b2/8iN9YKQr9OI.jpg', 'name': 'Zavaliï Artem', 'id': 354299078}]
        },
        {name:'Дебальцево',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636216/v636216787/57994/VbFEPeExUKQ.jpg', 'name': 'Шеремет Дмитрий', 'id': 188474787}]
        },
        {name:'Козельск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c628321/v628321213/65ba/hEXcZwAo40k.jpg', 'name': 'Бескровный Колян', 'id': 135630213}]
        },
        {name:'Оха',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638822/v638822000/5ee40/D9sCGQqieEo.jpg', 'name': 'Наташкин Дмитрий', 'id': 101603209}]
        },
        {name:'Славгород',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637823/v637823826/9167/mFm99H-U3nc.jpg', 'name': 'Балашов Максим', 'id': 81955826}]
        },
        {name:'Нововоронеж',n:2,
        users:[{'ava': 'https://pp.userapi.com/c841328/v841328431/cb25/XfPW3ZLE4Bo.jpg', 'name': 'Шульженко Александр', 'id': 15951580}, {'ava': 'https://pp.userapi.com/c628428/v628428229/21439/p3vdXmpXbU8.jpg', 'name': 'Карасёва-Саввина Татьяна', 'id': 196274229}]
        },
        {name:'Большие Колпаны',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836335/v836335556/5a261/k5MsjIPQFbw.jpg', 'name': 'Жданов Валерий', 'id': 27670728}]
        },
        {name:'Пучеж',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638217/v638217479/55db2/oBNJsCQGarA.jpg', 'name': 'Косолюкин Александр', 'id': 255481395}]
        },
        {name:'Хойники',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627730/v627730347/9074/y5EEqj-8ThE.jpg', 'name': 'Дедицкий Дмитрий', 'id': 78955347}]
        },
        {name:'Полевской',n:3,
        users:[{'ava': 'https://pp.userapi.com/c9301/u22144785/e_19c47fee.jpg', 'name': 'Чураев Шама', 'id': 22144785}, {'ava': 'https://pp.userapi.com/c625423/v625423737/4edaa/eD_-sl7Tf1I.jpg', 'name': 'Афлитонов Александр', 'id': 327247737}, {'ava': 'https://pp.userapi.com/c626420/v626420968/4653a/SyCj5KzSJFw.jpg', 'name': 'Муллахметов Руслан', 'id': 328902968}]
        },
        {name:'Ивантеевка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c416623/v416623658/a58d/SL9fnOcARd0.jpg', 'name': 'Петров Роман', 'id': 32837658}]
        },
        {name:'Тосно',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639226/v639226122/3dc02/SBm3mq7zYhc.jpg', 'name': 'Метелёва Юлия', 'id': 22191316}]
        },
        {name:'Новый Уренгой',n:2,
        users:[{'ava': 'https://vk.com/images/camera_50.png', 'name': 'Якупов Ильнур', 'id': 345212376}, {'ava': 'https://pp.userapi.com/c636019/v636019743/1f373/WdzQbv1sDlc.jpg', 'name': 'Блужин Николай', 'id': 376780743}]
        },
        {name:'Дубна',n:2,
        users:[{'ava': 'https://pp.userapi.com/c636223/v636223991/13260/h9j7kb79yUo.jpg', 'name': 'Топчубаев Александр', 'id': 591991}, {'ava': 'https://pp.userapi.com/c639430/v639430251/1cf6/38s3Xh71jiM.jpg', 'name': 'Архипов Андрей', 'id': 409042251}]
        },
        {name:'Советский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627421/v627421266/ada0/zCrf9j_HsO0.jpg', 'name': 'Березкин Андрей', 'id': 162276266}]
        },
        {name:'Железнодорожный (Балашиха)',n:2,
        users:[{'ava': 'https://pp.userapi.com/c836225/v836225591/55062/uikcpoh1SH4.jpg', 'name': 'Гусарова Ангелина', 'id': 2075804}, {'ava': 'https://pp.userapi.com/c604817/v604817670/47136/Kl7Q16F0OFk.jpg', 'name': 'Khizhnyakova Anna', 'id': 270210670}]
        },
        {name:'Костанай',n:3,
        users:[{'ava': 'https://pp.userapi.com/c617716/v617716821/f997/gL7aycEmK-g.jpg', 'name': 'Нурмагамбет Серик', 'id': 215762821}, {'ava': 'https://pp.userapi.com/c638327/v638327507/5f5c7/wJZFQa0SBpE.jpg', 'name': 'Марков Алексей', 'id': 271859106}, {'ava': 'https://pp.userapi.com/c628728/v628728917/43f9a/AquWNvA_MjI.jpg', 'name': 'Лебедева Наталья', 'id': 374170917}]
        },
        {name:'Мичуринск',n:2,
        users:[{'ava': 'https://pp.userapi.com/c4271/u79694449/e_c4bd04ca.jpg', 'name': 'Букатова Ольга', 'id': 79694449}, {'ava': 'https://pp.userapi.com/c639820/v639820566/3d9a4/0ugXHZi-f6s.jpg', 'name': 'Шишиморов Роман', 'id': 420917374}]
        },
        {name:'Верхний Тагил',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837322/v837322512/48595/PgUoOn77tzc.jpg', 'name': 'Андреева Татьяна', 'id': 326214512}]
        },
        {name:'Камень-Каширский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837134/v837134051/52c0a/0_uQpuzycu4.jpg', 'name': 'Войчук Ангеліна', 'id': 150899950}]
        },
        {name:'Свободный',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840121/v840121698/27c8e/Lngb9YJtIZM.jpg', 'name': 'Гогуадзе Ламара', 'id': 264666668}]
        },
        {name:'Ревда',n:2,
        users:[{'ava': 'https://pp.userapi.com/c837624/v837624849/67d3c/a9N2bcuC5g8.jpg', 'name': 'Мценский Павел', 'id': 1127965}, {'ava': 'https://pp.userapi.com/c4552/u23591020/e_6070bd74.jpg', 'name': 'Наговицын Роман', 'id': 23591020}]
        },
        {name:'Bat Yam',n:1,
        users:[{'ava': 'https://pp.userapi.com/c623325/v623325749/4d583/NFYL73ljYy4.jpg', 'name': 'Харлашин Максим', 'id': 6648749}]
        },
        {name:'Березовский',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c840721/v840721820/9915/8yriZkNs0KE.jpg', 'name': 'Кузьменков Илья', 'id': 187615496}]
        },
        {name:'Октябрьский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c5583/v5583748/511/GTorAagnh1c.jpg', 'name': 'Макиенок Альберт', 'id': 7889748}]
        },
        {name:'Веселый Гай',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837127/v837127272/45334/8p8kz8jG4Ow.jpg', 'name': 'Журавихин Мишка', 'id': 113546109}]
        },
        {name:'Кислово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604529/v604529650/32730/5PE5x6KOytI.jpg', 'name': 'Ледяев Иван', 'id': 161007650}]
        },
        {name:'Бабаево',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637417/v637417778/569a5/4dMpf7HzXfc.jpg', 'name': 'Королева Юлия', 'id': 11369778}]
        },
        {name:'Новое Юшкозеро',n:1,
        users:[{'ava': 'https://pp.userapi.com/c403521/v403521066/8259/Scu34alQZT8.jpg', 'name': 'Тишковская Евгения', 'id': 208543066}]
        },
        {name:'Толвуя',n:1,
        users:[{'ava': 'https://pp.userapi.com/c406219/v406219277/d12b/qGSbDA3K4Bw.jpg', 'name': 'Леонтьев Андрей', 'id': 201212277}]
        },
        {name:'Полярный',n:1,
        users:[{'ava': 'https://pp.userapi.com/c424127/v424127731/443e/0cuL-46_lxk.jpg', 'name': 'Данилова Оксана', 'id': 198246731}]
        },
        {name:'Пиль-Егор',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631230/v631230525/2072d/5XxGXRkyU2M.jpg', 'name': 'Канев Володя', 'id': 75367525}]
        },
        {name:'Удальцово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639527/v639527985/1fa72/jsteIF5vtj0.jpg', 'name': 'Леппинд Игорь', 'id': 150757985}]
        },
        {name:'Сосновый Бор',n:4,
        users:[{'ava': 'https://pp.userapi.com/c639429/v639429148/445b/sPjuiqmugJk.jpg', 'name': 'Иванова Вероника', 'id': 329148}, {'ava': 'https://sun9-11.userapi.com/c840632/v840632379/940c/Q_8Tttr99pE.jpg', 'name': 'Кожар Борис', 'id': 44178122}, {'ava': 'https://pp.userapi.com/c625521/v625521235/56106/-RrC1j1jaok.jpg', 'name': 'Свиридова Татьяна', 'id': 81028235}, {'ava': 'https://pp.userapi.com/c837534/v837534189/5c4e9/3qHcA_7saf0.jpg', 'name': 'Ляшов Денис', 'id': 362946562}]
        },
        {name:'Красный Стекловар',n:1,
        users:[{'ava': 'https://pp.userapi.com/c406927/v406927048/9dc3/CDtW0DnU93I.jpg', 'name': 'Курушин Игорь', 'id': 203254048}]
        },
        {name:'Домодедово',n:3,
        users:[{'ava': 'https://pp.userapi.com/c638431/v638431538/671b8/FRyknJXwhGs.jpg', 'name': 'Ганзвинд Егорка', 'id': 3871560}, {'ava': 'https://pp.userapi.com/c626322/v626322143/577f5/Zkh7QWLFlYI.jpg', 'name': 'Alder Alex', 'id': 5232143}, {'ava': 'https://pp.userapi.com/c836330/v836330861/7ce7b/tvNYwJekoZA.jpg', 'name': 'Позднякова Марина', 'id': 90040579}]
        },
        {name:'Красноармейск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636616/v636616366/67d28/gyFH3AAXo84.jpg', 'name': 'Двойнишников Александр', 'id': 90668366}]
        },
        {name:'Селятино',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638020/v638020407/25210/_Fm0x7EqQeo.jpg', 'name': 'Лабутин Денис', 'id': 6310407}]
        },
        {name:'Пушкино',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604328/v604328836/3096f/IeowyGdMn0I.jpg', 'name': 'Чернега Александр', 'id': 306065836}]
        },
        {name:'Рылеево',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837238/v837238985/43439/VSH03a2oT_8.jpg', 'name': 'Огнёва Анна', 'id': 180971985}]
        },
        {name:'Брехово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836732/v836732959/4be6f/N9MUwCJUZYE.jpg', 'name': 'Макарец Ирина', 'id': 14908341}]
        },
        {name:'Крестцы',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836531/v836531095/67560/ppgjItuin7k.jpg', 'name': 'Киселёв Артём', 'id': 4724668}]
        },
        {name:'Самара',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637621/v637621477/546cf/VUGXX0CKc3o.jpg', 'name': 'Демиденко Света', 'id': 54770477}]
        },
        {name:'Подстепки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637919/v637919662/63bb0/926EJwtW2PU.jpg', 'name': 'Яковлева Люба', 'id': 41368056}]
        },
        {name:'Спирово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837230/v837230968/5b024/Lk5lmkM6R7A.jpg', 'name': 'Петрова Татьяна', 'id': 66193638}]
        },
        {name:'Новоугольный',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836427/v836427760/512de/b_YpCGeyFkU.jpg', 'name': 'Елена Дементьева', 'id': 343092327}]
        },
        {name:'Кропачёво',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637324/v637324213/25351/GO9v98sINp4.jpg', 'name': 'Юдин Александр', 'id': 44298213}]
        },
        {name:'Наследницкий',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840135/v840135229/26f7f/8v0B8CJLbDs.jpg', 'name': 'Буребаев Руслан', 'id': 376950065}]
        },
        {name:'Роза',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836335/v836335061/26c39/aJD-Z-2jioQ.jpg', 'name': 'Морозов Алексей', 'id': 93240061}]
        },
        {name:'Мышкин',n:4,
        users:[{'ava': 'https://pp.userapi.com/c841429/v841429976/ada5/TqHJBR29g9Q.jpg', 'name': 'Крымский Вячеслав', 'id': 76480358}, {'ava': 'https://pp.userapi.com/c841031/v841031220/16c03/Igp9stAcpgc.jpg', 'name': 'Рыжова Екатерина', 'id': 114069218}, {'ava': 'https://pp.userapi.com/c841335/v841335180/21aa8/SnHkHWKinQE.jpg', 'name': 'Ерофеевская Юлия', 'id': 116947205}, {'ava': 'https://pp.userapi.com/c417227/v417227921/db29/J2QCCebpYz4.jpg', 'name': 'Молявкина Светлана', 'id': 186937921}]
        },
        {name:'Манжерок',n:1,
        users:[{'ava': 'https://pp.userapi.com/c5135/u162443734/e_1c043b2d.jpg', 'name': 'Ермолова Галина', 'id': 162443734}]
        },
        {name:'Тужинка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836330/v836330590/5846c/2SO943-g5ss.jpg', 'name': 'Агильдин Александр', 'id': 377556548}]
        },
        {name:'Лесной',n:1,
        users:[{'ava': 'https://pp.userapi.com/c308817/v308817152/af7d/cln3qr4YhcQ.jpg', 'name': 'Чумаков Андрей', 'id': 14057152}]
        },
        {name:'Коновалово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841336/v841336210/f3f1/TBCbscsOdr0.jpg', 'name': 'Веретенников Павел', 'id': 223047983}]
        },
        {name:'Бор',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836224/v836224734/5429c/r0cc6MHyTEk.jpg', 'name': 'Борский Дмитрий', 'id': 58270438}]
        },
        {name:'Павлово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c11012/u72509824/e_dd7448a6.jpg', 'name': 'Петерсон Виталий', 'id': 72509824}]
        },
        {name:'Сухоречка',n:1,
        users:[{'ava': 'https://pp.userapi.com/c4750/u114247675/e_9c99f7e5.jpg', 'name': 'Султанов Руслан', 'id': 114247675}]
        },
        {name:'Карагай',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836124/v836124384/59324/TtVFdNi6_dY.jpg', 'name': 'Малыгин Алексей', 'id': 65505813}]
        },
        {name:'Плеханово',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841028/v841028552/1b10b/3eq5Fgm3Ky0.jpg', 'name': 'Мусихин Сергей', 'id': 95585631}]
        },
        {name:'Оханск',n:1,
        users:[{'ava': 'https://pp.userapi.com/c631329/v631329960/1d310/AM7FFqEaHmQ.jpg', 'name': 'Молотилов Дмитрий', 'id': 10946960}]
        },
        {name:'Березники',n:1,
        users:[{'ava': 'https://pp.userapi.com/c630231/v630231969/4b140/S_s2gfzOzV8.jpg', 'name': 'Перов Кирилл', 'id': 16710969}]
        },
        {name:'Северный Коммунар',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840233/v840233681/202fc/KXap_USaujw.jpg', 'name': 'Шевченко Владимир', 'id': 172596862}]
        },
        {name:'Басим',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837728/v837728122/3ad3d/3djj23jToVY.jpg', 'name': 'Нижегородов Виталий', 'id': 290140122}]
        },
        {name:'Питер',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837339/v837339678/17b7f/NOWCJf6SrJc.jpg', 'name': 'Петрова Ксения', 'id': 1118678}]
        },
        {name:'Таттинский',n:1,
        users:[{'ava': 'https://pp.userapi.com/c630516/v630516568/36e3c/JPZ39es05UA.jpg', 'name': 'Лазарев Мичил', 'id': 362076568}]
        },
        {name:'Елань',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837438/v837438055/4a80b/8Zu-XsO6rfc.jpg', 'name': 'Годов Никита', 'id': 217167841}]
        },
        {name:'Сухой Лог',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637418/v637418960/4bec/ZJjkVjea6t8.jpg', 'name': 'Желнин Валера', 'id': 21615960}]
        },
        {name:'Медвежий Угол',n:1,
        users:[{'ava': 'https://pp.userapi.com/c323830/v323830463/9b77/N5oJFHlAM9U.jpg', 'name': 'Колганов Кирилл', 'id': 938463}]
        },
        {name:'Кременец',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639529/v639529783/3b784/htKt2XklmpA.jpg', 'name': 'Снітинська Іра', 'id': 373969200}]
        },
        {name:'Соледар',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627823/v627823577/32bf9/WUgCNfXBFJI.jpg', 'name': 'Чубаренко Николай', 'id': 64374577}]
        },
        {name:'Несолонь',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837728/v837728642/ccfc/IGCp5CVKTWM.jpg', 'name': 'Тарасюк Ольга', 'id': 134547642}]
        },
        {name:'Воловец',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840236/v840236574/25620/VDPKy8C7vew.jpg', 'name': 'Беца Діма', 'id': 322662829}]
        },
        {name:'Березно',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840331/v840331091/9bc2/XlfiYcOVAZo.jpg', 'name': 'Столицький Артур', 'id': 183860609}]
        },
        {name:'Почапки',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837539/v837539858/325ec/vmnT1eQSIho.jpg', 'name': 'Самолюк Назар', 'id': 300642858}]
        },
        {name:'Ришон ЛеЦион',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837726/v837726841/4873b/5eXhC2OG3Xc.jpg', 'name': 'Ковнацкая Лена', 'id': 6188213}]
        },
        {name:'Wrocław',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841535/v841535724/215f2/jikZ6LNUwAU.jpg', 'name': 'Gongalski Andrzej', 'id': 285838640}]
        },
        {name:'Boston',n:3,
        users:[{'ava': 'https://pp.userapi.com/c307510/v307510968/5866/mDdV459neGY.jpg', 'name': 'Kalinina Olga', 'id': 11698968}, {'ava': 'https://pp.userapi.com/c637131/v637131996/4c91b/bmh0X4KBUtk.jpg', 'name': 'Шахов Артём', 'id': 33023996}, {'ava': 'https://pp.userapi.com/c639518/v639518032/3ca52/h9hrLwz9X34.jpg', 'name': 'Ellington Nikolina', 'id': 280232672}]
        },
        {name:'Madrid',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c836120/v836120964/60dda/KqNYtSDM2yY.jpg', 'name': 'Тимочко Юра', 'id': 230097350}]
        },
        {name:'Sderot',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841132/v841132021/b520/0vRFVedZ7Uk.jpg', 'name': 'Халитов Станислав', 'id': 144053813}]
        },
        {name:'Кызылорда ',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639731/v639731256/2eb1f/57i1zTLHxG0.jpg', 'name': 'Ондрей Жандаулет', 'id': 316782256}]
        },
        {name:'Актобе',n:1,
        users:[{'ava': 'https://pp.userapi.com/c620117/v620117902/8417/xatmpzd1Lrg.jpg', 'name': 'Еламанов Баламан', 'id': 256072902}]
        },
        {name:'Щомыслица',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636928/v636928374/30797/eX7jtvhWGT0.jpg', 'name': 'Карпович Лёша', 'id': 9324374}]
        },
        {name:'Актобе',n:1,
        users:[{'ava': 'https://pp.userapi.com/c405920/v405920798/57de/LSoaEpZDLR8.jpg', 'name': 'Амиров Айдын', 'id': 10872798}]
        },
        {name:'Заречное',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841037/v841037300/1bdf5/xittHtOACoc.jpg', 'name': 'Павлина Иван', 'id': 14595094}]
        },
        {name:'Александрия',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841320/v841320852/1010c/AgdL-oMUyJ4.jpg', 'name': 'Белов Виталя', 'id': 337897974}]
        },
        {name:'Армавир',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836525/v836525508/4f7dd/iutG7Mx9Nns.jpg', 'name': 'Старынин Олег', 'id': 147333798}]
        },
        {name:'Philadelphia',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840334/v840334713/6dc8/RPwLwhm0czA.jpg', 'name': 'Висилиц Олег', 'id': 235956953}]
        },
        {name:'Rio de Janeiro',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638227/v638227368/5db97/JDcIiq5o-uk.jpg', 'name': 'Сидоренко Дарья', 'id': 180300684}]
        },
        {name:'Saarbrücken',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604531/v604531029/1dc47/UPCFbCE1tkA.jpg', 'name': 'Алябьев Роман', 'id': 9067029}]
        },
        {name:'Miami',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837427/v837427829/5f1e4/1YwhJLniLkY.jpg', 'name': 'Хантер Надежда', 'id': 339402356}]
        },
        {name:'Gaborone',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c638924/v638924501/4b8f7/4nHG32_LTTI.jpg', 'name': 'Капитанов Олег', 'id': 2127981}]
        },
        {name:'Helsinki',n:2,
        users:[{'ava': 'https://pp.userapi.com/c316931/v316931311/6c46/ymOCBeVXobs.jpg', 'name': 'Беликов Павел', 'id': 2518311}, {'ava': 'https://pp.userapi.com/c841438/v841438096/6897/lsy9PG9iLBs.jpg', 'name': 'Иванов Алексей', 'id': 8210908}]
        },
        {name:'Bridgetown',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837528/v837528898/4ad41/tuvUC8-XEd4.jpg', 'name': 'Bk Masta', 'id': 337312712}]
        },
        {name:'Wilhelmshaven',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837724/v837724860/3dc2b/nxLPG00yv4I.jpg', 'name': 'Проценко Татьяна', 'id': 319860}]
        },
        {name:'Tokyo',n:1,
        users:[{'ava': 'https://pp.userapi.com/c841431/v841431804/19c9c/FCCc6-w23U8.jpg', 'name': 'Киригая Кадзуто', 'id': 429702600}]
        },
        {name:'Rīga',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837127/v837127235/4099d/Kwmv3oXTLKA.jpg', 'name': 'Биктимиров Константин', 'id': 72318235}]
        },
        {name:'Doha',n:1,
        users:[{'ava': 'https://pp.userapi.com/c627125/v627125100/30a32/5rB2j2ODr_g.jpg', 'name': 'Brailiak Liubov', 'id': 298928100}]
        },
        {name:'Vilnius',n:1,
        users:[{'ava': 'https://pp.userapi.com/c617624/v617624355/216c1/dBxZiXe7O48.jpg', 'name': 'Sobolevskij Artur', 'id': 274560355}]
        },
        {name:'Sevilla',n:1,
        users:[{'ava': 'https://pp.userapi.com/c638429/v638429922/47452/StZr7efe39c.jpg', 'name': 'Ражбадинов Темирхан', 'id': 321229922}]
        },
        {name:'Tirana',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836135/v836135797/65bd4/fhzLNr2KhQ0.jpg', 'name': 'Мермер Феркан', 'id': 153734220}]
        },
        {name:'Antalya',n:1,
        users:[{'ava': 'https://sun9-11.userapi.com/c840637/v840637293/9ad/wGO_HX8c4hQ.jpg', 'name': 'Бойко Мария', 'id': 138825598}]
        },
        {name:'Nîmes',n:1,
        users:[{'ava': 'https://pp.userapi.com/c424116/v424116311/915e/bWxmeByjdkc.jpg', 'name': 'Хохлов Павел', 'id': 193025311}]
        },
        {name:'Stockholm',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639627/v639627757/38ec5/kRs4RHzlhZo.jpg', 'name': 'Грицюс Элина', 'id': 94896341}]
        },
        {name:'Madaba',n:1,
        users:[{'ava': 'https://pp.userapi.com/c840437/v840437928/4a96/h9PZD741BjI.jpg', 'name': 'Altworld Zhanna', 'id': 41883011}]
        },
        {name:'Снегири',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837525/v837525895/5fa37/HReIaiEareU.jpg', 'name': 'Голованова Ксения', 'id': 6092382}]
        },
        {name:'Tenkodogo',n:1,
        users:[{'ava': 'https://pp.userapi.com/c636430/v636430730/263fd/XFxPp-Bh03s.jpg', 'name': 'Prospector Special', 'id': 388855730}]
        },
        {name:'Formentera de Segura',n:1,
        users:[{'ava': 'https://pp.userapi.com/c836721/v836721018/4c510/xzsRf7Ak4JU.jpg', 'name': 'Ерогина Ирина', 'id': 16276947}]
        },
        {name:'Helsingborg',n:1,
        users:[{'ava': 'https://pp.userapi.com/c604628/v604628332/29abf/lHeNTejN_DQ.jpg', 'name': 'Чудакова Елена', 'id': 90113332}]
        },
        {name:'São Paulo',n:1,
        users:[{'ava': 'https://pp.userapi.com/c837722/v837722830/5bc08/QbT0ep6Q0MU.jpg', 'name': 'Garcia Leonardo', 'id': 287210888}]
        },
        {name:'California',n:1,
        users:[{'ava': 'https://pp.userapi.com/c639420/v639420247/4edc2/yNVsCWbQSec.jpg', 'name': 'Today Just', 'id': 306037287}]
        },
        {name:'California City',n:1,
        users:[{'ava': 'https://pp.userapi.com/c637124/v637124345/4447b/0RDylhkY9Yg.jpg', 'name': 'Игнатьев Алексей', 'id': 391219345}]
        }                       
    ]
}