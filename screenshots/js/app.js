(function(){
'use strict';

angular.module('pictures', [])

.controller('AppController', AppController)

AppController.$inject = ['$scope'];

function AppController($scope){
    $scope.galname = null;
    $scope.found_num = 0;
    $scope.search_string = null;
    $scope.galtags = [];
    $scope.galleries = [{"name":"Mystery Manor","alias":"mm"},{"name":"Mirrors of Albion","alias":"ma"}];
	
let images_json = {    
"mm":[
{
"fname":"adel.jpg",
"descr" : "Адель",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"aelita.jpg",
"descr" : "Аэлита",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"agent_foks.jpg",
"descr" : "агент Фокс",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"alchimik_de_Leone.jpg",
"descr" : "алхимик де Леоне",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"amur_balovnik.jpeg",
"descr" : "амур-баловник",
"htags" : ["амуры"],
"created":"2017-02-21"
},
{
"fname":"amur_bedokur.jpeg",
"descr" : "амур-бедокур",
"htags" : ["амуры"],
"created":"2017-02-21"
},
{
"fname":"amur_postrel.jpeg",
"descr" : "амур-пострел",
"htags" : ["амуры"],
"created":"2017-02-21"
},
{
"fname":"amur_prokaznik.jpeg",
"descr" : "амур-проказник",
"htags" : ["амуры"],
"created":"2017-02-21"
},
{
"fname":"amur_shalun.jpeg",
"descr" : "амур-шалун",
"htags" : ["амуры"],
"created":"2017-02-21"
},
{
"fname":"architector.jpg",
"descr" : "архитектор",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"Arsen_Lyupen.jpg",
"descr" : "Арсен Люпен",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"asistent_Kateriny.jpg",
"descr" : "асистент Катерины",
"htags" : ["снэтчины"],
"created":"2017-02-04"
},
{
"fname":"assistentka_madamX.jpg",
"descr" : "асистентка мадам Х",
"htags" : ["первый этаж"],
"created":"2016-10-27"
},
{
"fname":"Astroida.jpg",
"descr" : "Астроида",
"htags" : ["персонажи"],
"created":"2017-07-07"
},
{
"fname":"Bekket_Taylor.jpg",
"descr" : "Беккет Тейлор",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"belyi_popugai.jpg",
"descr":"белый попугай",
"htags":["двор"],
"created":"2016-11-26"
},
{
"fname":"besedka_vlyublenyh.jpeg",
"descr":"беседка влюбленых",
"htags":["комнаты", "события"],
"created":"2017-02-19"
},
{
"fname":"biblioteka_prizraki.jpg",
"descr":"библиотека: призраки",
"htags":["первый этаж", "комнаты"],
"created":"2016-10-31"
},
{
"fname":"bilitersha_susan.jpg",
"descr":"билитерша Сьюзан",
"htags":["снэтчины", "двор"],
"created":"2016-11-10"
},
{
"fname":"bolshoi_zmei.jpg",
"descr":"большой змей",
"htags":["двор"],
"created":"2017-03-13"
},
{
"fname":"boy.jpg",
"descr":"уличное кафе",
"htags":["двор","бой"],
"created":"2016-12-29"
},
{
"fname":"bratya_Tvidl.jpg",
"descr":"братья Твидл",
"htags":["персонажи","второй этаж"],
"created":"2017-11-06"
},
{
"fname":"brodyachiy_yeti.jpg",
"descr":"бродячий йети",
"htags":["второй этаж"],
"created":"2017-03-01"
},
{
"fname":"buduyuschaya_zvezda.jpg",
"descr":"будущая звезда",
"htags":["двор"],
"created":"2016-10-27"
},
{
"fname":"CharlzLuis.jpg",
"descr":"Чарльз Льюис",
"htags":["персонажи"],
"created":"2017-07-07"
},
{
"fname":"chasovyh_del_snytchin.jpg",
"descr":"часовых дел снэтчин",
"htags":["снэтчины", "подвал"],
"created":"2017-11-09"
},
{
"fname":"chernyi_voron.jpg",
"descr":"черный ворон",
"htags":["двор"],
"created":"2016-11-26"
},
{
"fname":"cheshskii_yuvelir.jpg",
"descr":"чешский ювелир",
"htags":["первый этаж"],
"created":"2017-08-10"
},
{
"fname":"chopornyi_provodnik.jpg",
"descr":"чопорный проводник",
"htags":["двор"],
"created":"2017-12-02"
},
{
"fname":"chumnoi_doctor.jpg",
"descr":"чумной доктор",
"htags":["подвал"],
"created":"2016-11-26"
},
{
"fname":"citchen_prizraki.jpg",
"descr":"кухня: призраки",
"htags":["комнаты", "первый этаж"],
"created":"2016-10-28"
},
{
"fname":"club69_evri_beginning.jpg",
"descr":"клуб 69: начало боя",
"htags":["комнаты", "двор", "бой"],
"created":"2017-04-18"
},
{
"fname":"club69_evri_pobeda.jpg",
"descr":"клуб 69: победа",
"htags":["комнаты", "двор", "бой"],
"created":"2017-04-18"
},
{
"fname":"club69_evri_second.jpg",
"descr":"клуб 69: вторая часть",
"htags":["комнаты", "двор", "бой"],
"created":"2017-04-18"
},
{
"fname":"club69_evri_third.jpg",
"descr":"клуб 69: третья часть",
"htags":["комнаты", "двор", "бой"],
"created":"2017-04-18"
},
{
"fname":"covenok_lomaika.jpg",
"descr":"совенок Ломайка",
"htags":["персонажи", "второй этаж"],
"created":"2016-11-28"
},
{
"fname":"creativnyi_modnik.jpg",
"descr":"креативный модник",
"htags":["снэтчины", "первый этаж"],
"created":"2016-10-27"
},
{
"fname":"cvetuschii_dvorik.jpg",
"descr":"цветущий дворик",
"htags":["комнаты", "первый этаж", "события"],
"created":"2017-05-17"
},
{
"fname":"cyganchonok.jpg",
"descr":"цыганчонок",
"htags":["цыгане", "первый этаж"],
"created":"2016-11-21"
},
{
"fname":"cyganka.jpg",
"descr":"цыганка",
"htags":["цыгане", "первый этаж"],
"created":"2016-11-21"
},
{
"fname":"cyganskaya_devochka.jpg",
"descr":"цыганская девочка",
"htags":["цыгане", "первый этаж"],
"created":"2016-11-21"
},
{
"fname":"dobraya_medsestra.jpg",
"descr":"добрая медсестра",
"htags":["снэтчины", "двор"],
"created":"2016-11-26"
},
{
"fname":"dobryi_snegovik.jpg",
"descr":"добрый снеговик",
"htags":["первый этаж", "события"],
"created":"2017-07-02"
},
{
"fname":"domovoy_kusima.jpg",
"descr":"домовой Кузима",
"htags":["персонажи", "подвал"],
"created":"2016-11-28"
},
{
"fname":"duh_rycarya.jpg",
"descr":"Дух рыцаря",
"htags":["персонажи"],
"created":"2016-11-26"
},
{
"fname":"dze_ogorodnik.jpg",
"descr":"дзе-огородник",
"htags":["первый этаж"],
"created":"2016-11-26"
},
{
"fname":"Eddi_Edisson.jpg",
"descr" : "Эдди Эдиссон",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"Elaydja_Blic.jpg",
"descr" : "Элайджа Блиц",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"EmiliHaus.jpg",
"descr" : "Эмили Хаус",
"htags" : ["персонажи"],
"created":"2017-04-21"
},
{
"fname":"enot_mushtabel.jpg",
"descr" : "енот Муштабель",
"htags" : ["персонажи", "второй этаж"],
"created":"2016-11-26"
},
{
"fname":"etazh_1.jpg",
"descr" : "первый этаж",
"htags" : ["первый этаж", "этажи"],
"created":"2016-10-27"
},
{
"fname":"etazh_2.jpg",
"descr" : "второй этаж",
"htags" : ["второй этаж", "этажи"],
"created":"2016-10-27"
},
{
"fname":"etazh_dvor.jpg",
"descr" : "двор",
"htags" : ["двор", "этажи"],
"created":"2016-09-05"
},
{
"fname":"etazh_podval.jpg",
"descr" : "подвал",
"htags" : ["подвал", "этажи"],
"created":"2016-10-27"
},
{
"fname":"etazh_polnolunie.jpg",
"descr" : "полнолуние",
"htags" : ["полнолуние", "этажи"],
"created":"2016-10-27"
},
{
"fname":"etazh_polnolunie_vyzov.jpg",
"descr" : "полнолуние",
"htags" : ["полнолуние","этажи","события"],
"created":"2016-10-30"
},
{
"fname":"galateya.jpg",
"descr" : "Галатея",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"general_snytchinov.jpg",
"descr" : "генерал снэтчинов: добрый Генерал",
"htags" : ["снэтчины"],
"created":"2016-11-26"
},
{
"fname":"general_snytchinov_2.jpg",
"descr" : "генерал снэтчинов: больной Генерал",
"htags" : ["снэтчины"],
"created":"2016-11-26"
},
{
"fname":"Genzel_grustnyi.jpg",
"descr" : "Гензель",
"htags" : ["персонажи", "бой"],
"created":"2017-11-08"
},
{
"fname":"Genzel_schastiv.jpg",
"descr" : "Гензель",
"htags" : ["персонажи", "бой"],
"created":"2017-11-08"
},
{
"fname":"gerda.jpg",
"descr" : "Герда",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"Gerda_battle_1.jpg",
"descr" : "Герда",
"htags" : ["персонажи", "бой"],
"created":"2017-10-20"
},
{
"fname":"Gerda_battle_2.jpg",
"descr" : "Герда",
"htags" : ["персонажи", "бой"],
"created":"2017-10-20"
},
{
"fname":"goracio.jpg",
"descr" : "повар Горацио",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"gordye_naturschicy.jpg",
"descr" : "гордые натурщицы",
"htags" : ["второй этаж"],
"created":"2016-10-27"
},
{
"fname":"gorgulya_vergi.jpg",
"descr" : "горгулья Верги",
"htags" : ["персонажи"],
"created":"2016-10-30"
},
{
"fname":"gornichnaya_elsa.jpg",
"descr" : "горничная Эльза",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"gornyi_otshelnik.jpg",
"descr" : "горный отшельник",
"htags" : ["снэтчины", "портал"],
"created":"2017-03-03"
},
{
"fname":"gost_s_alfa_centavra.jpg",
"descr" : "гость с Альфа Центавра",
"htags" : ["экспедиции"],
"created":"2016-11-26"
},
{
"fname":"Gregory.jpg",
"descr" : "Грегори",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"grettel.jpg",
"descr" : "Греттель",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"Grettel_grustnaya.jpg",
"descr" : "Греттель",
"htags" : ["персонажи", "бой"],
"created":"2017-04-01"
},
{
"fname":"Grettel_veselaya.jpg",
"descr" : "Греттель",
"htags" : ["персонажи", "бой"],
"created":"2017-04-01"
},
{
"fname":"hellouin_dog.jpg",
"descr" : "собака Хеллоуини",
"htags" : ["собаки"],
"created":"2016-10-27"
},
{
"fname":"hitraya_slastena.jpg",
"descr" : "хитрая сластена",
"htags" : ["двор"],
"created":"2016-11-21"
},
{
"fname":"hranitel_lyubvi.jpg",
"descr" : "хранитель любви",
"htags" : ["снэтчины"],
"created":"2017-02-14"
},
{
"fname":"hranitel_nezhnosti.jpg",
"descr" : "хранитель нежности",
"htags" : ["снэтчины"],
"created":"2017-02-13"
},
{
"fname":"hranitel_tradicii.jpg",
"descr" : "хранитель традиций",
"htags" : ["снэтчины"],
"created":"2017-06-27"
},
{
"fname":"igor.jpg",
"descr" : "приспешник Игор",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"inoplanetyasha.jpg",
"descr" : "инопланетяша",
"htags" : ["экспедиции"],
"created":"2016-11-26"
},
{
"fname":"iskusnyi_elf.jpg",
"descr" : "искусный эльф",
"htags" : ["двор"],
"created":"2016-11-26"
},
{
"fname":"JackFlai.jpg",
"descr" : "Джек Флай",
"htags" : ["персонажи"],
"created":"2017-07-07"
},
{
"fname":"Jastin_Stark.jpg",
"descr" : "Джастин Старк",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"Kai_pobeda.jpg",
"descr" : "Кай",
"htags" : ["персонажи", "бой"],
"created":"2017-01-05"
},
{
"fname":"kapitan_patrulya.jpg",
"descr" : "капитан патруля",
"htags" : ["экспедиции"],
"created":"2016-11-26"
},
{
"fname":"kappa.jpg",
"descr" : "каппа",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"karl_frankenzai.jpg",
"descr" : "Карл Франкензай",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"keltskii_charodei.jpg",
"descr" : "кельтский чародей",
"htags" : ["снэтчины", "двор"],
"created":"2017-03-13"
},
{
"fname":"kompositor.jpg",
"descr" : "Иоганн Симмер",
"htags" : ["персонажи", "двор"],
"created":"2016-11-26"
},
{
"fname":"konkistador_don_guan.jpg",
"descr" : "конкистадор Дон Гуан",
"htags" : ["двор"],
"created":"2016-11-26"
},
{
"fname":"korol_pod_vodoi.jpg",
"descr" : "король под водой",
"htags" : ["портал"],
"created":"2016-11-26"
},
{
"fname":"koshka_udachi.jpg",
"descr":"японска кошка удачи",
"htags":["первый этаж"],
"created":"2017-12-02"
},
{
"fname":"kotobot.jpg",
"descr" : "котобот",
"htags" : ["экспедиции"],
"created":"2016-11-26"
},
{
"fname":"kovarnyi_krupie.jpg",
"descr" : "коварный крупье",
"htags" : ["первый этаж"],
"created":"2016-11-21"
},
{
"fname":"KroshkaElis.jpg",
"descr" : "Крошка Элис",
"htags" : ["персонажи"],
"created":"2017-11-09"
},
{
"fname":"krylataya_charovnica.jpg",
"descr" : "крылатая чаровница",
"htags" : ["второй этаж"],
"created":"2017-05-19"
},
{
"fname":"ksenofag.jpg",
"descr" : "ксенофаг",
"htags" : ["первый этаж"],
"created":"2016-11-21"
},
{
"fname":"kuchnya_izobilnaya.jpg",
"descr" : "кухня изобильная",
"htags" : ["первый этаж", "комнаты", "события"],
"created":"2016-11-26"
},
{
"fname":"kukla_derevyannyi_malchishka.jpg",
"descr" : "деревянный мальчишка",
"htags" : ["второй этаж"],
"created":"2016-11-01"
},
{
"fname":"kukla_Truffaldina.jpg",
"descr" : "кукла Труффальдина",
"htags" : ["второй этаж"],
"created":"2016-11-01"
},
{
"fname":"kukolnik_battle.jpg",
"descr":"кукольник",
"htags":["второй этаж","бой"],
"created":"2017-12-02"
},
{
"fname":"Leksi_Orton.jpg",
"descr" : "Лекси Ортон",
"htags" : ["персонажи"],
"created":"2016-11-11"
},
{
"fname":"Leon.jpg",
"descr" : "Леон",
"htags" : ["персонажи"],
"created":"2017-08-22"
},
{
"fname":"letuchaya_myshka.jpg",
"descr" : "летучая мышка",
"htags" : ["второй этаж"],
"created":"2017-10-28"
},
{
"fname":"letuchii_korabl.jpg",
"descr" : "летучий корабль",
"htags" : ["портал"],
"created":"2017-03-07"
},
{
"fname":"level_up.jpg",
"descr" : "новый уровень",
"htags" : ["события"],
"created":"2017-11-27"
},
{
"fname":"lift_prizraki.jpg",
"descr" : "лифт: призраки",
"htags" : ["комнаты"],
"created":"2016-10-30"
},
{
"fname":"lunnyi_ekai.jpg",
"descr" : "лунный Ёкай",
"htags" : ["екаи", "двор"],
"created":"2016-11-10"
},
{
"fname":"lutyi_pancerbiorn.jpg",
"descr" : "лютый панцербьорн",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"lyubitel_meda.jpg",
"descr" : "любитель меда",
"htags" : ["второй этаж"],
"created":"2017-05-19"
},
{
"fname":"magda.jpg",
"descr" : "Магда",
"htags" : ["персонажи", "цыгане"],
"created":"2016-11-26"
},
{
"fname":"mamontenok.jpg",
"descr" : "мамонтенок",
"htags" : ["персонажи"],
"created":"2017-04-20"
},
{
"fname":"martyshka_ispytatel.jpg",
"descr" : "мартышка-испытатель",
"htags" : ["экспедиции"],
"created":"2016-11-26"
},
{
"fname":"masterskaya_mnogoobrasie.jpg",
"descr" : "мастерская: многообразие",
"htags" : ["второй этаж","комнаты"],
"created":"2016-11-01"
},
{
"fname":"masterskaya_mosaika.jpg",
"descr" : "мастерская: мозаика",
"htags" : ["второй этаж", "комнаты"],
"created":"2016-10-31"
},
{
"fname":"master_na_vse_lapy.jpg",
"descr" : "мастер на все лапы",
"htags" : ["второй этаж", "снэтчины"],
"created":"2017-11-16"
},
{
"fname":"master_oformleniya.jpg",
"descr" : "мастер оформления",
"htags" : ["первый этаж", "снэтчины"],
"created":"2017-06-27"
},
{
"fname":"master_osvetitel.jpg",
"descr" : "мастер-осветитель",
"htags" : ["второй этаж", "снэтчины"],
"created":"2016-10-27"
},
{
"fname":"master_stilya.jpg",
"descr" : "мастер стиля",
"htags" : ["первый этаж","снэтчины"],
"created":"2017-06-27"
},
{
"fname":"master_ugoschenii.jpg",
"descr" : "мастер угощений",
"htags" : ["первый этаж", "снэтчины"],
"created":"2017-06-27"
},
{
"fname":"mechanik_Vincent.jpg",
"descr" : "механик Винсент",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"Mirlanda.jpg",
"descr" : "Мирланда",
"htags" : ["персонажи"],
"created":"2017-08-23"
},
{
"fname":"missisDzhivs.jpg",
"descr" : "Миссис Дживс",
"htags" : ["персонажи"],
"created":"2017-04-21"
},
{
"fname":"miss_trevers.jpg",
"descr" : "Мисс Трэверс",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"misterX.jpg",
"descr" : "Мистер Икс",
"htags" : ["персонажи"],
"created":"2017-11-08"
},
{
"fname":"model_evridica.jpg",
"descr" : "модель Эвридика",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"Myagkoserd.jpg",
"descr" : "Мягкосерд",
"htags" : ["персонажи"],
"created":"2017-11-12"
},
{
"fname":"nagrada_za_vernost.jpg",
"descr" : "награда за верность",
"htags" : ["события"],
"created":"2016-10-28"
},
{
"fname":"nashestvie_letuchih_myshey.jpg",
"descr" : "нашествие летучих мышей",
"htags" : ["полнолуние"],
"created":"2017-02-12"
},
{
"fname":"nastoyatel_klana_lotosa.jpg",
"descr":"настоятель клана лотоса",
"htags":["персонажи","двор"],
"created":"2017-12-02"
},
{
"fname":"natasha_pavlova.jpg",
"descr" : "Наташа Павлова",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"nelyudimyi_druid.jpg",
"descr" : "нелюдимый друид",
"htags" : ["портал"],
"created":"2016-11-26"
},
{
"fname":"nemeiskii_lev.jpg",
"descr" : "немейский лев",
"htags" : ["второй этаж"],
"created":"2017-11-13"
},
{
"fname":"nepodrazhaemyi_artist.jpg",
"descr" : "неподражаемый артист",
"htags" : ["персонажи"],
"created":"2017-11-13"
},
{
"fname":"neposeda_Lel.jpeg",
"descr" : "непоседа Лель",
"htags" : ["персонажи"],
"created":"2017-02-19"
},
{
"fname":"novogodnyaya_martyshka.jpg",
"descr" : "новогодняя мартышка",
"htags" : ["первый этаж"],
"created":"2016-12-10"
},
{
"fname":"obshitelnyi_yascher.jpg",
"descr" : "общительный ящер",
"htags" : ["портал"],
"created":"2017-03-05"
},
{
"fname":"odarennyi_matematik.jpg",
"descr" : "одаренный математик",
"htags" : ["первый этаж"],
"created":"2016-11-26"
},
{
"fname":"oderzhimiy.jpg",
"descr" : "одержимый",
"htags" : ["подвал"],
"created":"2016-11-26"
},
{
"fname":"ohotnichya_snytch.jpg",
"descr" : "охотничья: снэтчины",
"htags" : ["комнаты", "первый этаж"],
"created":"2016-09-05"
},
{
"fname":"ohotnik_johns.jpg",
"descr" : "охотник Джонс",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"olaf_gulbrancen.jpg",
"descr" : "Олаф Гульбрансен",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"OliverTvidl.jpg",
"descr" : "Оливер Твидл",
"htags" : ["персонажи"],
"created":"2017-11-08"
},
{
"fname":"olle.jpg",
"descr" : "О'Олле",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"onvazhnyi_myshonok.jpg",
"descr" : "отважный мышонок",
"htags" : ["полнолуние"],
"created":"2017-01-16"
},
{
"fname":"otchayannyi_popugai.jpg",
"descr" : "отчаянный попугай",
"htags" : ["подвал"],
"created":"2016-11-05"
},
{
"fname":"oyabun_lotos.jpg",
"descr" : "оябун клана Лотоса",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"ozornoy_sladkoezhka.jpg",
"descr" : "озорной сладкоежка",
"htags" : ["двор"],
"created":"2016-11-21"
},
{
"fname":"pancebiorn.jpg",
"descr" : "суровый панцербьорн",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"parovoi_intellect.jpg",
"descr" : "паровой интеллект",
"htags" : ["второй этаж"],
"created":"2017-11-16"
},
{
"fname":"pashalnyi_krolik.jpg",
"descr" : "пасхальный кролик",
"htags" : ["первый этаж", "события"],
"created":"2017-04-14"
},
{
"fname":"pernatyi_mudrec.jpg",
"descr" : "пернатый мудрец",
"htags" : ["полнолуние"],
"created":"2017-01-18"
},
{
"fname":"PetronellaWatt.jpg",
"descr" : "Петронелла Уатт",
"htags" : ["персонажи"],
"created":"2017-11-14"
},
{
"fname":"poetessa.jpg",
"descr" : "утонченная поэтесса",
"htags" : ["первый этаж"],
"created":"2016-10-27"
},
{
"fname":"pokoritel_voln.jpg",
"descr" : "покоритель волн",
"htags" : ["портал"],
"created":"2017-05-05"
},
{
"fname":"pomoshnik_Morozova.jpg",
"descr" : "помощник морозова",
"htags" : ["двор", "события"],
"created":"2017-02-04"
},
{
"fname":"porodistaya_ischeika.jpg",
"descr" : "породистая ищейка",
"htags" : ["собаки","подвал"],
"created":"2016-10-27"
},
{
"fname":"posledniy_centurion.jpg",
"descr" : "последний центурион",
"htags" : ["портал"],
"created":"2017-03-04"
},
{
"fname":"prachka_Sofia.jpg",
"descr" : "прачка София",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"pravdivyi_skazochnik.jpg",
"descr" : "правдивый сказочник",
"htags" : ["второй этаж","снэтчины"],
"created":"2016-10-27"
},
{
"fname":"prekrasnaya_kurortnica.jpg",
"descr" : "прекрасная курортница",
"htags" : ["первый этаж"],
"created":"2017-06-16"
},
{
"fname":"prekrasnaya_tancovschica.jpg",
"descr" : "прекрасная танцовщица",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"priveredlivyi_saksofon.jpg",
"descr" : "привередливый саксофон",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"prizrak_prazdnika.jpg",
"descr" : "призрак праздника",
"htags" : ["первый этаж"],
"created":"2016-10-27"
},
{
"fname":"professor_gagin.jpg",
"descr" : "профессор Гагин",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"pugalo.jpg",
"descr" : "пугало",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"razrushitel.jpg",
"descr" : "разрушитель",
"htags" : ["первый этаж"],
"created":"2016-11-24"
},
{
"fname":"redjinald.jpg",
"descr" : "Реджинальд",
"htags" : ["персонажи"],
"created":"2016-11-28"
},
{
"fname":"robot_lifter.jpg",
"descr" : "робот лифтер",
"htags" : ["первый этаж"],
"created":"2016-11-26"
},
{
"fname":"room_51.jpg",
"descr" : "комната 51",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-11-24"
},
{
"fname":"room_afrikanskaya_sravneniya.jpg",
"descr" : "африканская: сравнение",
"htags" : ["первый этаж","комнаты"],
"created":"2016-11-06"
},
{
"fname":"room_aviatorskaya.jpg",
"descr" : "авиаторская",
"htags" : ["подвал","комнаты"],
"created":"2017-10-03"
},
{
"fname":"room_banya.jpg",
"descr" : "баня",
"htags" : ["подвал", "комнаты"],
"created":"2016-12-06"
},
{
"fname":"room_bassein.jpg",
"descr" : "бассеин",
"htags" : ["подвал", "комнаты"],
"created":"2016-11-12"
},
{
"fname":"room_boilernaya.jpg",
"descr" : "бойлерная",
"htags" : ["подвал","комнаты"],
"created":"2016-12-06"
},
{
"fname":"room_chasovaya.jpg",
"descr" : "часовая",
"htags" : ["подвал", "комнаты"],
"created":"2017-11-06"
},
{
"fname":"room_chulan.jpg",
"descr" : "чулан",
"htags" : ["подвал", "комнаты"],
"created":"2016-11-04"
},
{
"fname":"room_chulan_kamennyi_idol.jpg",
"descr" : "чулан: каменный идол",
"htags" : ["подвал", "комнаты"],
"created":"2016-11-04"
},
{
"fname":"room_cifrovaya.jpg",
"descr" : "цифровая",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-11-27"
},
{
"fname":"room_cvetochnaya.jpg",
"descr" : "цветочная",
"htags" : ["второй этаж", "комнаты"],
"created":"2017-10-16"
},
{
"fname":"room_cyganskaya_stoyanka.jpg",
"descr" : "цыганская стоянка",
"htags" : ["двор", "комнаты"],
"created":"2016-11-24"
},
{
"fname":"room_detskaya.jpg",
"descr" : "детская",
"htags" : ["второй этаж", "комнаты"],
"created":"2016-11-01"
},
{
"fname":"room_domik_deda_moroza.jpg",
"descr" : "домик деда Мороза",
"htags" : ["комнаты"],
"created":"2017-02-04"
},
{
"fname":"room_fitnes_zal.jpg",
"descr" : "фитнес-зал",
"htags" : ["подвал", "комнаты"],
"created":"2016-11-04"
},
{
"fname":"room_fotostudiya.jpg",
"descr" : "фотостудия",
"htags" : ["второй этаж", "комнаты"],
"created":"2016-10-29"
},
{
"fname":"room_gadalnaya.jpg",
"descr" : "гадальная",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-11-06"
},
{
"fname":"room_gadalnaya_rozhdestvo.jpg",
"descr" : "гадальная: рождество",
"htags" : ["первый этаж", "комнаты", "события"],
"created":"2017-01-10"
},
{
"fname":"room_garazh.jpg",
"descr" : "гараж",
"htags" : ["подвал", "комнаты"],
"created":"2016-11-04"
},
{
"fname":"room_generala_snytchinov.jpg",
"descr" : "комната генерала снэтчинов",
"htags" : ["двор", "комнаты"],
"created":"2016-11-08"
},
{
"fname":"room_gentelmen_club.jpg",
"descr" : "клуб джентельменов",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-10-18"
},
{
"fname":"room_hall_proshlyh_svyatok.jpg",
"descr" : "холл: прошлые святки",
"htags" : ["первый этаж", "комнаты", "события"],
"created":"2016-12-25"
},
{
"fname":"room_hall_zodiak.jpg",
"descr" : "холл: зодиак",
"htags" : ["первый этаж"],
"created":"2017-01-18"
},
{
"fname":"room_holl.jpg",
"descr" : "холл",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-10-31"
},
{
"fname":"room_hram_lotosov.jpg",
"descr" : "храм лотосов",
"htags" : ["двор", "комнаты"],
"created":"2017-10-17"
},
{
"fname":"room_izobilnaya_kuhnya.jpg",
"descr" : "изобильная кухня",
"htags" : ["первый этаж", "комнаты", "события"],
"created":"2016-11-19"
},
{
"fname":"room_kabinet.jpg",
"descr" : "кабинет",
"htags" : ["первый этаж", "комнаты"],
"created":"2017-03-10"
},
{
"fname":"room_kabinet_vracha.jpg",
"descr" : "кабинет врача",
"htags" : ["двор", "комнаты"],
"created":"2017-08-09"
},
{
"fname":"room_kitchen_zodiak.jpg",
"descr" : "кухня: зодиак",
"htags" : ["первый этаж", "комнаты"],
"created":"2017-01-18"
},
{
"fname":"room_kladovaya_kukolnika.jpg",
"descr":"кладовая кукольника",
"htags":["второй этаж"],
"created":"2017-12-02"
},
{
"fname":"room_laboratoria.jpg",
"descr" : "лаборатория",
"htags" : ["первый этаж", "комнаты"],
"created":"2017-01-20"
},
{
"fname":"room_ledyanaya_pustynya.jpg",
"descr" : "ледяная пустыня",
"htags" : ["портал", "комнаты"],
"created":"2017-03-01"
},
{
"fname":"room_lesa_avalona.jpg",
"descr" : "леса Авалона",
"htags" : ["портал", "комнаты"],
"created":"2017-03-02"
},
{
"fname":"room_letayushie_ostrova.jpg",
"descr" : "летающие острова",
"htags" : ["портал", "комнаты"],
"created":"2017-03-07"
},
{
"fname":"room_lift.jpg",
"descr" : "лифт",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-11-04"
},
{
"fname":"room_masterskaya_puzyri.jpg",
"descr" : "мастерская: пузыри",
"htags" : ["второй этаж", "комнаты"],
"created":"2016-11-19"
},
{
"fname":"room_melnica.jpg",
"descr" : "мельница",
"htags" : ["двор", "комнаты"],
"created":"2017-10-16"
},
{
"fname":"room_mostovye_Pragi.jpg",
"descr" : "мостовые Праги",
"htags" : ["портал", "комнаты"],
"created":"2017-08-10"
},
{
"fname":"room_mramornaya.jpg",
"descr" : "мраморная",
"htags" : ["второй этаж", "комнаты"],
"created":"2017-11-13"
},
{
"fname":"room_naberezhnaya_sidneya.jpg",
"descr" : "набережная Сиднея",
"htags" : ["портал", "комнаты"],
"created":"2017-10-05"
},
{
"fname":"room_obitel_compositora.jpg",
"descr" : "обитель композитора",
"htags" : ["двор", "комнаты"],
"created":"2016-11-02"
},
{
"fname":"room_ohotn.jpg",
"descr" : "охотничья",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-09-05"
},
{
"fname":"room_okeanicheskaya.jpg",
"descr" : "океаническая",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-12-27"
},
{
"fname":"room_otel.jpg",
"descr" : "отель сердце весны",
"htags" : ["двор", "комнаты"],
"created":"2017-01-05"
},
{
"fname":"room_pereulok_Tokio.jpg",
"descr" : "переулок Токио",
"htags" : ["портал", "комнаты"],
"created":"2017-08-07"
},
{
"fname":"room_podvodnyi_gorod.jpg",
"descr" : "подводный город",
"htags" : ["портал", "комнаты"],
"created":"2017-03-01"
},
{
"fname":"room_pokoi_generala.jpg",
"descr" : "покои генерала",
"htags" : ["двор", "комнаты"],
"created":"2016-12-28"
},
{
"fname":"room_prazdnichnaya_luzhaika.jpg",
"descr" : "праздничная лужайка",
"htags" : ["первый этаж", "комнаты", "события"],
"created":"2017-07-07"
},
{
"fname":"room_prud_lotosov.jpg",
"descr" : "пруд лотосов",
"htags" : ["первый этаж", "комнаты"],
"created":"2017-04-05"
},
{
"fname":"room_pryanichnyi_domik.jpg",
"descr" : "пряничный домик",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-12-30"
},
{
"fname":"room_sacur.jpg",
"descr" : "комната сакур",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-10-27"
},
{
"fname":"room_sad_labirint.jpg",
"descr" : "сад-лабиринт",
"htags" : ["первый этаж"],
"created":"2017-10-17"
},
{
"fname":"room_salun.jpg",
"descr" : "салун",
"htags" : ["подвал", "комнаты"],
"created":"2017-01-29"
},
{
"fname":"room_sklep_nekromanta.jpg",
"descr" : "склеп некроманта",
"htags" : ["двор", "комнаты"],
"created":"2017-11-21"
},
{
"fname":"room_snezhnyi_dvorik.jpg",
"descr" : "снежный дворик",
"htags" : ["первый этаж", "комнаты", "события"],
"created":"2017-02-03"
},
{
"fname":"room_solnechnyi_dvorik.jpg",
"descr" : "солнечный дворик",
"htags" : ["первый этаж", "комнаты", "события"],
"created":"2017-08-28"
},
{
"fname":"room_sovinoe_gnezdo.jpg",
"descr" : "совиное гнездо",
"htags" : ["полнолуние", "комнаты"],
"created":"2017-01-20"
},
{
"fname":"room_spalnya_prizraki.jpg",
"descr" : "спальня: призраки",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-11-04"
},
{
"fname":"room_spalnya_sravnenie.jpg",
"descr" : "спальня: сравнение",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-11-16"
},
{
"fname":"room_tainik_arhitectora_mozaika.jpg",
"descr" : "тайник архитектора: мозаика",
"htags" : ["второй этаж", "комнаты"],
"created":"2016-11-03"
},
{
"fname":"room_tainstvennyi_sakvoyazh.jpg",
"descr":"таинственный саквояж",
"htags":["первый этаж", "комнаты"],
"created":"2017-12-02"
},
{
"fname":"room_temnaya_biblioteka.jpg",
"descr" : "темная библиотека",
"htags" : ["полнолуние", "комнаты"],
"created":"2016-12-15"
},
{
"fname":"room_thief.jpg",
"descr" : "комната вора",
"htags" : ["подвал", "комнаты"],
"created":"2017-01-24"
},
{
"fname":"room_ugolok_poeta.jpg",
"descr" : "уголок поэта",
"htags" : ["второй этаж", "комнаты"],
"created":"2017-10-16"
},
{
"fname":"room_ulichnoe_cafe.jpg",
"descr" : "уличное кафе",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-12-29"
},
{
"fname":"room_ulicy_Londona.jpg",
"descr" : "улицы Лондона",
"htags" : ["портал", "комнаты"],
"created":"2017-08-04"
},
{
"fname":"room_ulicy_pompei.jpg",
"descr" : "улицы Помпеи",
"htags" : ["портал", "комнаты"],
"created":"2017-04-04"
},
{
"fname":"room_vannaya.jpg",
"descr" : "ванная",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-11-06"
},
{
"fname":"room_vannaya_prizraki.jpg",
"descr" : "ванная: призраки",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-11-06"
},
{
"fname":"room_vechernyi_dvorik.jpg",
"descr" : "вечерний дворик",
"htags" : ["первый этаж","события", "комнаты"],
"created":"2017-10-18"
},
{
"fname":"room_vechernyi_dvorik_listya.jpg",
"descr" : "вечерний дворик: листья",
"htags" : ["первый этаж", "события", "комнаты"],
"created":"2017-11-06"
},
{
"fname":"room_veranda_madamX.jpg",
"descr" : "веранда мадам Икс",
"htags" : ["первый этаж", "комнаты"],
"created":"2017-03-10"
},
{
"fname":"room_vershiny_shangri_la.jpg",
"descr" : "вершины Шангри Ла",
"htags" : ["портал", "комнаты"],
"created":"2017-03-03"
},
{
"fname":"room_vinnyi_pogreb.jpg",
"descr" : "винный погреб",
"htags" : ["подвал", "комнаты"],
"created":"2017-03-11"
},
{
"fname":"room_yaponskiy_sad.jpg",
"descr" : "японский сад",
"htags" : ["первый этаж"],
"created":"2016-11-07"
},
{
"fname":"room_yaponskiy_sad_NG.jpg",
"descr" : "японский сад: игрушки",
"htags" : ["первый этаж", "комнаты"],
"created":"2016-12-29"
},
{
"fname":"room_zagadochnyi_ekspress.jpg",
"descr":"загадочный экспресс",
"htags":["двор","комнаты"],
"created":"2017-12-02"
},
{
"fname":"room_zateryannyi_mir.jpg",
"descr" : "Затерянный мир",
"htags" : ["портал", "комнаты"],
"created":"2017-04-05"
},
{
"fname":"rusalochka.jpg",
"descr":"русалочка",
"htags":["персонажи"],
"created":"2016-11-10"
},
{
"fname":"ryzhaya_razboinica.jpg",
"descr":"рыжая разбойница",
"htags":["второй этаж"],
"created":"2017-03-12"
},
{
"fname":"sakura.jpg",
"descr":"Цветок Сакуры",
"htags":["персонажи"],
"created":"2017-02-20"
},
{
"fname":"salvador_tirgamm.jpg",
"descr":"Сальвадор Тиргамм",
"htags":["персонажи"],
"created":"2016-11-26"
},
{
"fname":"santechnik.jpg",
"descr":"сантехник",
"htags":["персонажи"],
"created":"2016-11-26"
},
{
"fname":"saturnianin.jpg",
"descr":"сатурнианин",
"htags":["экспедиции"],
"created":"2016-11-26"
},
{
"fname":"scater.jpg",
"descr":"заставка: скейтер",
"htags":["заставки"],
"created":"2016-08-30"
},
{
"fname":"shalovlivyi_zaika.jpg",
"descr":"шаловливый зайка",
"htags":["первый этаж", "события"],
"created":"2017-03-31"
},
{
"fname":"shaman_mbongo.jpg",
"descr":"шаман Мбонто",
"htags":["персонажи"],
"created":"2016-11-28"
},
{
"fname":"Sharlotta_Backet.jpg",
"descr":"Шарлотта Бакет",
"htags":["персонажи"],
"created":"2017-09-20"
},
{
"fname":"sivka_burka.jpg",
"descr":"Сивка-бурка",
"htags":["двор"],
"created":"2016-11-24"
},
{
"fname":"skelet_zhrec.jpg",
"descr":"скелет-жрец",
"htags":["двор"],
"created":"2016-11-26"
},
{
"fname":"snegorminator.jpg",
"descr":"снегорминатор",
"htags":["двор"],
"created":"2017-06-27"
},
{
"fname":"snytch_administrator_cafe.jpg",
"descr" : "администратор кафе",
"htags" : ["снэтчины", "двор"],
"created":"2016-09-05"
},
{
"fname":"snytch_banschik.jpg",
"descr" : "снэтчин банщик",
"htags" : ["снэтчины", "подвал"],
"created":"2016-11-26"
},
{
"fname":"snytch_boec_soprotivlenia.jpg",
"descr" : "снэтчин-боец сопротивления",
"htags" : ["снэтчины","двор"],
"created":"2016-10-27"
},
{
"fname":"snytch_comediant.jpg",
"descr" : "снэтчин комедиант",
"htags" : ["снэтчины","подвал"],
"created":"2016-10-27"
},
{
"fname":"snytch_diversant.jpg",
"descr" : "снэтчин-диверсант",
"htags" : ["снэтчины", "двор"],
"created":"2016-10-27"
},
{
"fname":"snytch_domosed.jpg",
"descr" : "снэтчин-домосед",
"htags" : ["снэтчины", "второй этаж"],
"created":"2016-11-01"
},
{
"fname":"snytch_domovoy.jpg",
"descr" : "снэтчин-домовой",
"htags" : ["снэтчины","подвал"],
"created":"2017-02-25"
},
{
"fname":"snytch_glinyanyi.jpg",
"descr" : "глиняный снэтчин",
"htags" : ["снэтчины","подвал"],
"created":"2017-03-03"
},
{
"fname":"snytch_gryaznulin.jpg",
"descr" : "снэтчин-грязнулин",
"htags" : ["снэтчины","первый этаж"],
"created":"2016-09-05"
},
{
"fname":"snytch_gvaldeec.jpg",
"descr" : "снэтчин-гвалдеец",
"htags" : ["снэтчины", "двор"],
"created":"2016-09-05"
},
{
"fname":"snytch_kinoman.jpg",
"descr" : "снэтчин-киноман",
"htags" : ["снэтчины","подвал"],
"created":"2016-10-27"
},
{
"fname":"snytch_knigolyub.jpg",
"descr" : "снэтчин-кинолюб",
"htags" : ["снэтчины","первый этаж"],
"created":"2017-05-27"
},
{
"fname":"snytch_lycar.jpg",
"descr" : "снэтчин-лыцарь",
"htags" : ["снэтчины","подвал"],
"created":"2016-09-05"
},
{
"fname":"snytch_mechanik.jpg",
"descr" : "снэтчин-механик",
"htags" : ["снэтчины","подвал"],
"created":"2017-02-25"
},
{
"fname":"snytch_morozhenschik.jpg",
"descr" : "снэтчин-мороженщик",
"htags" : ["снэтчины","двор"],
"created":"2016-11-10"
},
{
"fname":"snytch_nyryalschik.jpg",
"descr" : "снэтчин-ныряльщик",
"htags" : ["снэтчины","подвал"],
"created":"2017-02-25"
},
{
"fname":"snytch_obzhora.jpg",
"descr" : "снэтчин-обжора",
"htags" : ["снэтчины","первый этаж"],
"created":"2017-05-27"
},
{
"fname":"snytch_paparaci.jpg",
"descr" : "снэтчин-папарацци",
"htags" : ["снэтчины","двор"],
"created":"2017-08-01"
},
{
"fname":"snytch_podsnezhnik.jpg",
"descr" : "снэтчин-подснежник",
"htags" : ["снэтчины","двор"],
"created":"2017-01-16"
},
{
"fname":"snytch_prachka.jpg",
"descr" : "снэтчин-прачка",
"htags" : ["снэтчины","подвал"],
"created":"2017-02-25"
},
{
"fname":"snytch_ranger.jpg",
"descr" : "снэтчин-рейнджер",
"htags" : ["снэтчины","подвал"],
"created":"2016-11-26"
},
{
"fname":"snytch_redactor.jpg",
"descr" : "снэтчин-редактор",
"htags" : ["снэтчины","двор"],
"created":"2017-08-01"
},
{
"fname":"snytch_sensei.jpg",
"descr" : "снэтчин-сенсей",
"htags" : ["снэтчины","двор"],
"created":"2016-10-27"
},
{
"fname":"snytch_snegurkin.jpg",
"descr" : "снэтчин-снегуркин",
"htags" : ["снэтчины","первый этаж"],
"created":"2016-09-06"
},
{
"fname":"snytch_snow.jpg",
"descr" : "снэтч Сноу",
"htags" : ["снэтчины","двор","персонажи"],
"created":"2017-02-19"
},
{
"fname":"snytch_sportsmen.jpg",
"descr" : "снэтчин-спортсмен",
"htags" : ["снэтчины","подвал"],
"created":"2017-02-25"
},
{
"fname":"snytch_svyazist.jpg",
"descr" : "снэтчин-связист",
"htags" : ["снэтчины","двор"],
"created":"2016-10-27"
},
{
"fname":"snytch_tancovschica.jpg",
"descr" : "снэтчин-танцовщица",
"htags" : ["снэтчины","второй этаж"],
"created":"2016-11-26"
},
{
"fname":"snytch_voryuga.jpg",
"descr" : "снэтчин-ворюга",
"htags" : ["снэтчины","первый этаж"],
"created":"2016-10-27"
},
{
"fname":"solnechnyi_ekai.jpg",
"descr" : "солнечный Ёкай",
"htags" : ["екаи","двор"],
"created":"2016-11-10"
},
{
"fname":"sputnica_gonchara.jpg",
"descr" : "спутница гончара",
"htags" : ["подвал"],
"created":"2017-03-03"
},
{
"fname":"sravnenie_gadalnaya.jpg",
"descr" : "гадальная: сравнение",
"htags" : ["комнаты","первый этаж"],
"created":"2016-10-31"
},
{
"fname":"stalnoi_sovenok.jpg",
"descr" : "стальной совенок",
"htags" : ["второй этаж"],
"created":"2016-10-27"
},
{
"fname":"staraya_cyganka.jpg",
"descr" : "старая цыганка",
"htags" : ["цыгане", "первый этаж"],
"created":"2017-05-27"
},
{
"fname":"staryi_cygan.jpg",
"descr" : "старый цыган",
"htags" : ["цыгане","первый этаж"],
"created":"2017-05-27"
},
{
"fname":"staryi_melnik.jpg",
"descr" : "старый мельник",
"htags" : ["двор"],
"created":"2017-09-20"
},
{
"fname":"sudarynya_metelica.jpg",
"descr" : "сударыня Метелица",
"htags" : ["первый этаж"],
"created":"2016-12-30"
},
{
"fname":"sudar_gololed.jpg",
"descr" : "сударь Гололед",
"htags" : ["первый этаж"],
"created":"2016-12-30"
},
{
"fname":"surok-prorok.jpg",
"descr" : "сурок-пророк",
"htags" : ["первый этаж"],
"created":"2017-02-02"
},
{
"fname":"takeshi.jpg",
"descr" : "садовник Такеши",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"talantlivaya_elfiyka.jpg",
"descr" : "талантливая эльфийка",
"htags" : ["двор"],
"created":"2016-11-26"
},
{
"fname":"trener_Fabio.jpg",
"descr" : "тренер Фабио",
"htags" : ["персонажи","подвал"],
"created":"2016-11-28"
},
{
"fname":"uchenicaGrettel.jpg",
"descr" : "ученица Греттель",
"htags" : ["персонажи", "события"],
"created":"2017-08-25"
},
{
"fname":"uchenica_maga.jpg",
"descr" : "ученица мага",
"htags" : ["второй этаж"],
"created":"2017-10-28"
},
{
"fname":"uchenikGenzel.jpg",
"descr" : "ученик Гензель",
"htags" : ["персонажи","события"],
"created":"2017-08-25"
},
{
"fname":"uchenik_surrealista.jpg",
"descr" : "ученик сюрреалиста",
"htags" : ["второй этаж"],
"created":"2016-10-27"
},
{
"fname":"uchitel_tancev.jpg",
"descr" : "учитель танцев",
"htags" : ["снэтчины", "второй этаж"],
"created":"2016-11-26"
},
{
"fname":"umelyi_podmasterie.jpg",
"descr" : "умелый подмастерье",
"htags" : ["второй этаж"],
"created":"2017-11-13"
},
{
"fname":"ushastyi_zlodei.jpg",
"descr" : "ушастый злодей",
"htags" : ["события"],
"created":"2017-04-14"
},
{
"fname":"Valentina.jpg",
"descr" : "Валентина",
"htags" : ["персонажи"],
"created":"2017-10-16"
},
{
"fname":"van_helsing.jpg",
"descr" : "Ван Хелсинг",
"htags" : ["персонажи"],
"created":"2016-11-26"
},
{
"fname":"vedma.jpg",
"descr" : "ведьма",
"htags" : ["двор"],
"created":"2016-10-27"
},
{
"fname":"velikii_kritik.jpg",
"descr" : "великий критик",
"htags" : ["второй этаж"],
"created":"2017-03-22"
},
{
"fname":"vnuchka_mastera.jpg",
"descr" : "внучка мастера",
"htags" : ["подвал"],
"created":"2017-11-08"
},
{
"fname":"volshebnik_samouchka.jpg",
"descr" : "волшебник-самоучка",
"htags" : ["двор", "события"],
"created":"2017-02-04"
},
{
"fname":"vosdushnyi_skakun.jpg",
"descr" : "воздушный скакун",
"htags" : ["второй этаж"],
"created":"2016-11-26"
},
{
"fname":"yaponskaya_shkolnica.jpg",
"descr" : "японская школьница",
"htags" : ["портал"],
"created":"2017-05-04"
},
{
"fname":"yunaya_ponoshnica.jpeg",
"descr" : "юная помощница",
"htags" : ["двор"],
"created":"2017-02-19"
},
{
"fname":"yunaya_venecianka.jpg",
"descr" : "юная венецианка",
"htags" : ["портал"],
"created":"2017-06-15"
},
{
"fname":"yunie_molodozheny.jpg",
"descr" : "юные молодожены",
"htags" : ["портал"],
"created":"2017-09-29"
},
{
"fname":"yuniy_inkub.jpg",
"descr" : "юный инкуб",
"htags" : ["подвал"],
"created":"2017-03-26"
},
{
"fname":"yuniy_sorvanec.jpg",
"descr":"юный сорванец",
"htags":["двор"],
"created":"2017-09-20"
},
{
"fname":"zadanie.jpg",
"descr":"задание",
"htags":["события", "снэтчины"],
"created":"2017-02-12"
},
{
"fname":"zapaslivaya_belochka.jpg",
"descr":"запасливая белочка",
"htags":["первый этаж"],
"created":"2017-03-31"
},
{
"fname":"zastavka_bike.jpg",
"descr":"заставка: модник",
"htags":["заставки"],
"created":"2016-10-27"
},
{
"fname":"zastavka_black_friday.jpg",
"descr":"заставка: черная пятница",
"htags":["заставки"],
"created":"2016-11-25"
},
{
"fname":"zastavka_deti.jpg",
"descr":"заставка: дети",
"htags":["заставки"],
"created":"2017-10-26"
},
{
"fname":"zastavka_deti_halloween.jpg",
"descr":"заставка: дети халоуин",
"htags":["заставки"],
"created":"2017-10-26"
},
{
"fname":"zastavka_mamontenok.jpg",
"descr":"заставка: мамонтенок",
"htags":["заставки"],
"created":"2016-08-27"
},
{
"fname":"zastavka_ng.jpg",
"descr":"заставка: новый год",
"htags":["заставки"],
"created":"2016-12-29"
},
{
"fname":"zastavka_nindzya.jpg",
"descr":"заставка: битва лотосов",
"htags":["заставки"],
"created":"2017-03-26"
},
{
"fname":"zastavka_pandora.jpg",
"descr":"заставка: пандора",
"htags":["заставки"],
"created":"2016-08-26"
},
{
"fname":"zastavka_vrata.jpg",
"descr":"заставка: портал",
"htags":["заставки"],
"created":"2017-11-13"
},
{
"fname":"zastavka_yaponka.jpg",
"descr":"заставка: японская школьница",
"htags":["заставки"],
"created":"2017-05-25"
},
{
"fname":"zelenyi_chelovechek.jpg",
"descr":"зеленый человечек",
"htags":["первый этаж"],
"created":"2016-11-24"
},
{
"fname":"zelenyi_programmist.jpg",
"descr":"зеленый программист",
"htags":["снэтчины", "первый этаж"],
"created":"2016-11-26"
},
{
"fname":"zhar-ptica.jpg",
"descr":"жар-птица",
"htags":["двор"],
"created":"2016-11-24"
},
{
"fname":"znatok_grammatiki.jpg",
"descr":"знаток грамматики",
"htags":["первый этаж", "портал"],
"created":"2017-05-02"
},
{
"fname":"zolotoi_idol.jpg",
"descr":"золотой идол",
"htags":["двор"],
"created":"2017-03-13"
},
{
"fname":"zvezdnyi_osminog.jpg",
"descr":"звездный осьминог",
"htags":["экспедиции"],
"created":"2016-11-26"
}],
"ma":[
{
"fname":"actrisa_faer_show.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"agentSekunda.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"Alisa.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"Belosnezhka.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"bezumnaya_fotoustica.jpg",
"descr":"",
"htags":[],
"created":"2017-08-10"
},
{
"fname":"bezumnyi_stilist.jpg",
"descr":"",
"htags":[],
"created":"2017-07-20"
},
{
"fname":"biznes_ledi.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"boginya_svobody.jpg",
"descr":"",
"htags":[],
"created":"2017-07-02"
},
{
"fname":"brandashmyg.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"brazilskii_tancor.jpg",
"descr":"",
"htags":[],
"created":"2017-05-25"
},
{
"fname":"brigadir.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"charodeika.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"Cheshirskii_halloween.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"Cheshirskii_Mladshii.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"Cheshirskii_Mladshii_sad.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"chudovische_frankensteina.jpg",
"descr":"",
"htags":[],
"created":"2017-06-19"
},
{
"fname":"cirkovaya_gimnastka.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"cirkXemsa.jpg",
"descr":"",
"htags":[],
"created":"2017-07-04"
},
{
"fname":"devochka_v_kostyume.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"Dubina.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"electrik.jpg",
"descr":"",
"htags":[],
"created":"2017-09-28"
},
{
"fname":"enot_vorishka.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"etalon_vremeni.jpg",
"descr":"",
"htags":[],
"created":"2017-05-05"
},
{
"fname":"FrenklinStein.jpg",
"descr":"",
"htags":[],
"created":"2017-06-28"
},
{
"fname":"futbolist_lyubitel.jpg",
"descr":"",
"htags":[],
"created":"2017-05-25"
},
{
"fname":"futbolist_professional.jpg",
"descr":"",
"htags":[],
"created":"2017-05-25"
},
{
"fname":"general_generalov.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"GercogHems.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"gnomNos.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"gremlinozavr.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"gremlin_ekskursovod.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"gremlin_pacient.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"gremlin_piligrim.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"gremlin_privedenie.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"gremlin_rulevoi.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"gremlin_serfingist.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"gremlin_shalun.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"gremlin_taschun.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"Gustav_van_Morzh.jpg",
"descr":"",
"htags":[],
"created":"2017-05-23"
},
{
"fname":"Hatter.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"hitryi_vzlomschik.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"Hlysch.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"hrabryi_malchischka.jpg",
"descr":"",
"htags":[],
"created":"2017-06-15"
},
{
"fname":"iskusnyi_prodavec.jpg",
"descr":"",
"htags":[],
"created":"2017-06-08"
},
{
"fname":"IzabellaBellini.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"JaneRight.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"JaneRight_teacher.jpg",
"descr":"",
"htags":[],
"created":"2017-08-22"
},
{
"fname":"JonatanNight.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"kapitan_Dreik.jpg",
"descr":"",
"htags":[],
"created":"2017-09-26"
},
{
"fname":"karnavalnyi_lemur.jpg",
"descr":"",
"htags":[],
"created":"2017-05-26"
},
{
"fname":"karta_desyatka.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"kartograf.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"koktelnyi_puding.jpg",
"descr":"",
"htags":[],
"created":"2017-08-10"
},
{
"fname":"konditerCerrigan.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"kontrabandist.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"korolevskii_grifon.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"krylataya_ustrica.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"laborant.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"LadyFlemming.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"letuchaya_myshka.jpg",
"descr":"",
"htags":[],
"created":"2017-10-30"
},
{
"fname":"lider_kart_shesterok.jpg",
"descr":"",
"htags":[],
"created":"2017-05-05"
},
{
"fname":"malchik_na_hodulyah.jpg",
"descr":"",
"htags":[],
"created":"2017-06-28"
},
{
"fname":"malchik_s_buketom.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"malchishka_karmannik.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"malchishka_vorishka.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"malchishka_v_kostyume.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"malchishka_v_maske.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"MariyaBonita.jpg",
"descr":"",
"htags":[],
"created":"2017-05-25"
},
{
"fname":"materyi_shalun.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"materyi_zhrun.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"metkii_amur.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"milye_detki.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"MissTomson.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"misterDouson.jpg",
"descr":"",
"htags":[],
"created":"2017-06-15"
},
{
"fname":"misterVremya.jpg",
"descr":"",
"htags":[],
"created":"2017-09-25"
},
{
"fname":"molodoi_prodavec.jpg",
"descr":"",
"htags":[],
"created":"2017-06-08"
},
{
"fname":"molodozheny.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"mumiya.jpg",
"descr":"",
"htags":[],
"created":"2017-06-15"
},
{
"fname":"muza_Frankensteina.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"muzykant.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"nachinayuschii_rezhisser.jpg",
"descr":"",
"htags":[],
"created":"2017-05-25"
},
{
"fname":"nastyrnyi_zombi.jpg",
"descr":"",
"htags":[],
"created":"2017-06-15"
},
{
"fname":"neopytnye_turisty.jpg",
"descr":"",
"htags":[],
"created":"2017-06-08"
},
{
"fname":"nevesta.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"nevesta_Frankensteina.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"neznakomec_s_venecianskogo_festivalya.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"neznakomka_s_venecianskogo_karnavala.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"obesyana_prizrak.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"odinokii_barmaglotik.jpg",
"descr":"",
"htags":[],
"created":"2017-05-11"
},
{
"fname":"opytnyi_rezhisser.jpg",
"descr":"",
"htags":[],
"created":"2017-05-25"
},
{
"fname":"osvobozhdennaya_indeika.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"OttoFonStrudel.jpg",
"descr":"",
"htags":[],
"created":"2017-08-27"
},
{
"fname":"parovoi_robot.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"pashalnyi_krolik.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"patrul.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"pervoklassnica.jpg",
"descr":"",
"htags":[],
"created":"2017-08-21"
},
{
"fname":"pervoklassnik.jpg",
"descr":"",
"htags":[],
"created":"2017-08-21"
},
{
"fname":"PettiFlai.jpg",
"descr":"",
"htags":[],
"created":"2017-10-26"
},
{
"fname":"piligrim.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"pirat_prizrak.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"plushevyi_medvezhonok.jpg",
"descr":"",
"htags":[],
"created":"2017-05-23"
},
{
"fname":"PolliAtkins.jpg",
"descr":"",
"htags":[],
"created":"2017-08-17"
},
{
"fname":"provodnica.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"puding_apelsinovyi.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"puding_krepkii_apelsinovyi.jpg",
"descr":"",
"htags":[],
"created":"2017-08-25"
},
{
"fname":"puding_krepkii_ezhevichnyi.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"puding_krepkii_yablochnyi.jpg",
"descr":"",
"htags":[],
"created":"2017-08-25"
},
{
"fname":"puding_mylnyi.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"puding_sumoist.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"puding_troinoy_ezhevichnyi.jpg",
"descr":"",
"htags":[],
"created":"2017-05-05"
},
{
"fname":"puding_tykvennyi.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"puding_zvezda.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"pugalo.jpg",
"descr":"",
"htags":[],
"created":"2017-06-15"
},
{
"fname":"razboinica_balovnica.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"robot_remontnik.jpg",
"descr":"",
"htags":[],
"created":"2017-05-27"
},
{
"fname":"robot_sanitar.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"room_biblioteka.jpg",
"descr":"",
"htags":[],
"created":"2017-10-17"
},
{
"fname":"room_buduar.jpg",
"descr":"",
"htags":[],
"created":"2017-05-04"
},
{
"fname":"room_derizhabl.jpg",
"descr":"",
"htags":[],
"created":"2017-05-24"
},
{
"fname":"room_dom_detektiva.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"room_komnata_Alisy.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"room_konditerskaya.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"room_parikmaherskaya.jpg",
"descr":"",
"htags":[],
"created":"2017-08-17"
},
{
"fname":"room_pod_mostom.jpg",
"descr":"",
"htags":[],
"created":"2017-05-18"
},
{
"fname":"room_port.jpg",
"descr":"",
"htags":[],
"created":"2017-09-26"
},
{
"fname":"room_sekretnyi_otdel.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"room_zadvorki.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"santehnik.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"sem_gnomov.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"shamanShikoba.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"shveicar.jpg",
"descr":"",
"htags":[],
"created":"2017-08-10"
},
{
"fname":"sinyaya_gusenica.jpg",
"descr":"",
"htags":[],
"created":"2017-05-05"
},
{
"fname":"sladkoezhka.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"slonenok_topiarii.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"smotritel_za_voronami.jpg",
"descr":"",
"htags":[],
"created":"2017-05-07"
},
{
"fname":"solidnaya_ustrica.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"strelochnik.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"sudia_recordium.jpg",
"descr":"",
"htags":[],
"created":"2017-07-19"
},
{
"fname":"sukkub.jpg",
"descr":"",
"htags":[],
"created":"2017-08-10"
},
{
"fname":"sumasschedshaya_ustrica.jpg",
"descr":"",
"htags":[],
"created":"2017-05-05"
},
{
"fname":"TainayaSova.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"tancovschica_samby.jpg",
"descr":"",
"htags":[],
"created":"2017-05-26"
},
{
"fname":"temnyi_druid.jpg",
"descr":"",
"htags":[],
"created":"2017-10-28"
},
{
"fname":"troika_chervei.jpg",
"descr":"",
"htags":[],
"created":"2017-08-10"
},
{
"fname":"TrulyaTralya.jpg",
"descr":"",
"htags":[],
"created":"2017-09-25"
},
{
"fname":"truslivyi_malchischka.jpg",
"descr":"",
"htags":[],
"created":"2017-06-15"
},
{
"fname":"turistka.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"tykvennyi_pirog.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"uchitel_sysknogo_dela.jpg",
"descr":"",
"htags":[],
"created":"2017-08-21"
},
{
"fname":"ustrica_torgovka.jpg",
"descr":"",
"htags":[],
"created":"2017-07-20"
},
{
"fname":"vampir.jpg",
"descr":"",
"htags":[],
"created":"2017-08-10"
},
{
"fname":"vedma.jpg",
"descr":"",
"htags":[],
"created":"2017-06-19"
},
{
"fname":"virtuoznyi_saksofonist.jpg",
"descr":"",
"htags":[],
"created":"2017-07-19"
},
{
"fname":"vlyublenyi_puding.jpg",
"descr":"",
"htags":[],
"created":"2017-07-19"
},
{
"fname":"vozhd_lemurov.jpg",
"descr":"",
"htags":[],
"created":"2017-05-25"
},
{
"fname":"vzlomschik_s_gvozdoderom.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"yablochnyi_puding.jpg",
"descr":"",
"htags":[],
"created":"2017-04-19"
},
{
"fname":"yaryi_patriot.jpg",
"descr":"",
"htags":[],
"created":"2017-06-28"
},
{
"fname":"yunaya_hudozhnica.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"yunga.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"zabiyaka_velikan.jpg",
"descr":"",
"htags":[],
"created":"2017-08-10"
},
{
"fname":"zagadochnaya_dama.jpg",
"descr":"",
"htags":[],
"created":"2017-08-10"
},
{
"fname":"zast_Alisa.jpg",
"descr":"",
"htags":[],
"created":"2017-04-17"
},
{
"fname":"ZataivshiisyaTigr.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"zayadlyi_puteshestvenniki.jpg",
"descr":"",
"htags":[],
"created":"2017-06-08"
},
{
"fname":"zharenaya_indeika.jpg",
"descr":"",
"htags":[],
"created":"2017-11-21"
},
{
"fname":"zhenih.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"zloveschee_derevo.jpg",
"descr":"",
"htags":[],
"created":"2017-10-16"
},
{
"fname":"znamenitaya_floristka.jpg",
"descr":"",
"htags":[],
"created":"2017-05-12"
},
{
"fname":"zolotoi_grifon.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
},
{
"fname":"zubnaya_feya.jpg",
"descr":"",
"htags":[],
"created":"2017-04-18"
}
]};	

	$scope.get_latest = function(n) {
		let found = [];
		$scope.galname = 'mm';
		$scope.search_string = "новинки";
		$scope.found_num = n;
        let pict_arr = images_json[$scope.galname];
		let today = Date.now();
		let i = 0;
        pict_arr.forEach(function(item){
			if(i >= n) return;
			let ict = new Date(item.created);
            if((today - ict) <= 1339200000) {
				found.push(item);
				i++
			}
        });
		return found;
	};
	
	$scope.pictures = $scope.get_latest(10);
    
    function get_gallery_name(alias){
        let name = null;
        $scope.galleries.forEach(function(item){
            if(item.alias == alias) name = item.name;
        });
        return name;
    };

    $scope.showGalery = function(alias){
        $scope.galname = alias;
        $scope.galtags = [];
        let found = images_json[alias];
        found.forEach(function(item){
            let tags = item.htags;
            tags.forEach(function(tag){
                if(!$scope.galtags.includes(tag))
                    $scope.galtags.push(tag);
            });
        });
		$scope.pictures = found;
        $scope.found_num = found.length;
        $scope.search_string = get_gallery_name(alias);
    };
    
    $scope.search_gal_tag = function(galname, ht){
        let found = [];
        let pict_arr = images_json[galname];
        pict_arr.forEach(function(item){
            if(item.htags.includes(ht)) found.push(item);
        });
        $scope.pictures = found;
        $scope.found_num = found.length;
        $scope.search_string = ht;
    };
    
    $scope.search = function(string){
        let found = [];
        $scope.galname = 'mm';
        let pict_arr = images_json[$scope.galname];
        pict_arr.forEach(function(item){
            if(item.htags.includes(string) || item.descr.includes(string))
            found.push(item);
        });
        $scope.pictures = found;
        $scope.found_num = found.length;
        $scope.search_string = string;
    };
   
};

})();