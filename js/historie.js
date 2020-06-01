let articleTitle = document.getElementById("article-title");
let backButton = document.getElementById("back-button");
let fowardButton = document.getElementById("foward-button");
let articleDiv = document.getElementById("article");
let articleText = document.getElementById("article-text");
let legend = document.getElementById("legend");

let active = 0;
let paras = [
    {
        "title":"Historie Norska - stručné dějiny",
        "undertitle":"",
        "text":"<p>Každá země a kultura je formována především svou historií a specifickými přírodními podmínkami. Chce-li člověk tedy pochopit Nory, co v jejich zemi uvidí a co se tam vlastně děje, musí také vědět alespoň minimum o jejich minulosti. A norská historie se v něčem podobá i té naší: ve středověku bylo Norsko mocným královstvím, které se ale později stalo na několik století chudou provincií sousedních zemí, než se opět plně osamostatnilo počátkem 20. století.</p>"
    },
    {
        "title":"Skalní rytiny a runové kameny: svědectví dávných dob",
        "undertitle":"Pravěké rytiny",
        "text":"<p>Skalní rytiny jsou svědectvím z předhistorických období. Mohou být až několik tisíc let staré (obvykle se datují do doby bronzové nebo dokonce i kamenné). Nejslavnější je velké rytinové pole v severonorské Altě, ale rytiny najdete roztroušené na často velmi nenápadných a zapadlých místech po celém Norsku – obvykle se nalézají v místech bývalého mořského pobřeží, které ale mohlo už dávno velmi značně ustoupit.</p><p>Zobrazují obvykle výjevy z běžného života (lov, obřady, lyžaře či velké lodě) nebo více či méně abstraktní symboly. Pozoruhodné je, že na nich lze občas objevit i zjevné paralely s mnohem pozdější staroseverskou mytologií, jak se nám zachovala i v písemných pramenech (např. žehnání novomanželům Tórovým kladivem).</p>"
    },
    {
        "title":"Skalní rytiny a runové kameny: svědectví dávných dob",
        "undertitle":"Runové kameny - vzkazy z raného středověku",
        "text":"<p>Runové kameny jsou mnohem mladší: pocházejí zjevně ze středověku, od starých seveřanů (i když nejstarší nápisy byly datovány až do roku 200 n. l.). Runy, písmo ne zcela jednoznačného původu, speciálně uzpůsobené k rytí či tesání do kamene, používali staří Germáni před příchodem křesťanství (s nímž přišel i pergamen, inkoust a latinské písmo).</p><p>Nápisy na kamenech jsou většinou velmi strohé: „X vztyčil tento kámen na památku Y“. Občas však najdeme na kamenech i zlomky veršů či strof ze staroseverské poezie; v některých případech lze dokonce nápisy spojit i s konkrétními historickými událostmi.</p> <p>Praktičnost run pro rytí se však uplatnila i dlouho po zavedení latinky: pod bergenským Bryggenem byly nalezeny odštěpky dřeva s runovými poznámkami (od obchodních záznamů až po milostná vyznání) až ze 14. století. Nožík v kapse nosil tehdy přece jen asi kdekdo a kousky dřeva se také válely na každém rohu – zato kalamář, pergamen a brk asi nikoliv.</p>"
    },
    {
        "title":"Vikingové - lupiči nebo hrdinové?",
        "undertitle":"",
        "text":"<p>Když byl v roce 793 přepaden a vyloupen klášter Lindisfarne na východním pobřeží Velké Británie, začalo v Evropě více než dvousetleté období nazývané dnes obdobím Vikingů.</p>"
    },
    {
        "title":"Vikingové - lupiči nebo hrdinové?",
        "undertitle":"Obávání lupiči a nemilosrdní zabijáci",
        "text":"<p>Pohanští obyvatelé Skandinávie byli obávanými nájezdníky, kteří neznali slitování. Obzvláště kláštery jim připadaly jako snadno dostupné pokladnice plné bohatství. Se svými mělkými obratnými loděmi byli pány na moři i na řekách a sotvakdo se jim mohl vyrovnat.</p><p>Díky malému ponoru se dostali snadno na mělčiny i horní toky řek hluboko ve vnitrozemí. Lodě dokázali dokonce přenášet i mezi řekami. Díky tomu se dostali přes východní Evropu až do oblasti Černomoří a do Cařihradu (dnes Istanbulu), Kaspického moře a po souši až do Bagdádu.</p>"
    },
    {
        "title":"Vikingové - lupiči nebo hrdinové?",
        "undertitle":"Že by snad i zakladatelé Ruska?",
        "text":"<p>Nebyli to však jen bezvýhradně lupiči – to spíše když se nenabízela žádná jiná možnost. Vikingové z východní části Skandinávie (tedy dnešního Švédska, též Slovany nazývaní Varjagové) byli čilými obchodníky na ruských řekách (zvláště na Volze) i v oblasti Černého moře.</p><p>Slovo „Rus“ ostatně bylo původně patrně názvem pro vikinské válečníky ve službách ruských panovníků. A samotné Rusko vděčí do jisté míry za svůj vznik právě Vikingovi Rurikovi, zakladateli vládnoucí dynastie Rurikovců a Kyjevské Rusi.</p>"
    },
    {
        "title":"Vikingové - lupiči nebo hrdinové?",
        "undertitle":"Objevitelé a kolonizátoři nových zemí",
        "text":"<p>Vikingové z Dánska a Norska se vydávali především na západ, tedy na ostrovy v severním Atlantiku, které osídlili. Tak byly osídleny nejen Shetlandy a Orkneje, ale také Faerské ostrovy, Island a na nedlouhou dobu také pobřeží Grónska a (skutečně velmi krátce) pobřeží Severní Ameriky.</p><p>Ovládli dokonce i části Britských ostrovů, kde ale časem víceméně splynuli s místním obyvatelstvem (tehdy ještě hovořícím podobným jazykem) – pokud nebyli časem vyhnáni. Ostatně velmi podobně splynuli s obyvatelstvem i v oblasti francouzské Normandie („Norman“ znamená přece „seveřan“), kterou také dobyli a osídlili. Založili také mnoho významných měst v Irsku (včetně současného Dublinu či Corku). Objevili se i u pobřeží Španělska a Portugalska a kolem Gibraltaru dopluli až do Itálie.</p>"
    },
    {
        "title":"Vikingové - lupiči nebo hrdinové?",
        "undertitle":"Proč se seveřané vydávali na vikinské výpravy?",
        "text":"<p>O příčinách vikinské expanze se dodnes vedou spory. V případě prvních útoků na kláštery se například uvažuje i o možnosti odvety za násilnou christianizaci původních severských přistěhovalců na Britských ostrovech. Za jeden z nejvýznamnějších faktorů je však považován prostý fakt, že Skandinávie patrně nebyla schopna při tehdejší úrovni zemědělství uživit rychle narůstající populaci.</p><p>Mnohem populárnějším motivem je ovšem slavný hrdinský étos pohanských Vikingů, který zcela nepochybně hrál svou roli: boj dodával mužům čest a slávu a zemřít v boji bylo jedinou cestou do posmrtného ráje Vikingů, Valhaly. Smrt nemocí na posteli tak dobrý zvuk rozhodně neměla.</p>"
    },
    {
        "title":"Vikingové - lupiči nebo hrdinové?",
        "undertitle":"Vikingové neměli rohaté helmy!",
        "text":"<p>A mimochodem: Vikingové neměli na svých helmách (pokud vůbec nějakou helmu měli) žádné rohy! Tato obskurní romantická „image“ se jakýmsi způsobem ujala v turistickém průmyslu a rohatá helma je dnes mezinárodním symbolem „Vikingů“ – přinejmenším pro všechny, kdo se o skutečnou historii nezajímají tak, jako hlavně o pivo a hloupé suvenýry.</p><p>Je pravda, že staří Germáni (a Keltové, tedy přinejmenším ještě v době předvikinské) patrně občas nosili jakési helmy ozdobené třeba i zvířecími rohy, nicméně tak nanejvýš k obřadním účelům. Vzít si něco takového do boje by bylo asi stejné, jako si na sebe přidělat dvě bytelná madla, aby vás soupeř měl za co pořádně chytit, až ho dostanete na lopatky.</p>"
    },
    {
        "title":"Vznik, rozmach a pád Norského království",
        "undertitle":"Sjednocení Norska a konec „demokracie“",
        "text":"<p>Rok 872 se zapsal do dějin bitvou u Hafrsfjordu (dnes nenápadná zátoka na předměstí Stavangeru s pomníkem v podobě tří obřích mečů), která značí symbolický počátek sjednoceného Norského království, a současně také hlavní mezník odlišné norské a islandské národní identity (přinejmenším tak to je interpretováno pozdější dobou).</p><p>Do té doby Norsko žilo v patriarchální rodové společnosti víceméně rovnocenných rodů s lokálními náčelníky (z nichž se s rostoucími mocenskými ambicemi patrně vytvořili místní „králové“) a krajovými zákonodárnými sněmy, tzv. „tingy“ (dnes se tomu trochu nadneseně říká „nejstarší demokracie“).</p><p>Onoho roku se však údajně jednomu z náčelníků, Haraldovi Krásnovlasému, podařilo zlomit zbytky odporu konkurentů, sjednotit všechny kraje a stát se králem celého Norska. A jak praví legenda, totiž sága: za tím vším – i za těmi nestříhanými „krásnými“ vlasy a vousy – prý zase samozřejmě byla nějaká ženská!</p><p>Historie pozdějších mocenských a politických zmatků svědčí o tom, že proces sjednocování a feudalizace Norska byl mnohem delší a složitější, než jak by ho mnozí (ať už Norové či Islanďané) rádi viděli ve staroislandských ságách. Rod Haralda Krásnovlasého v něm však hrál zcela nepochybně klíčovou roli.</p>"
    },
    {
        "title":"Vznik, rozmach a pád Norského království",
        "undertitle":"Rebelové prchají na Island",
        "text":"<p>A tak zatímco Norové jsou i dnes (vážně!) hrdí na svého krále a milují ho (byť ke konkrétní osobě mohou být i značně kritičtí), Islanďané naopak staví svou národní identitu na tom, že oni jsou ti nezlomní svobodomyslní (ba dokonce snad i „demokratičtí“) rebelové, kteří raději opustili starou vlast a našli si novou, než aby se podrobili něčí nadvládě (a dokazují to ságami, které si ovšem – o několik století později – napsali sami).</p>"
    },
    {
        "title":"Vznik, rozmach a pád Norského království",
        "undertitle":"Národní patron svatý Olav (Olaf)",
        "text":"<p>Mezi norskými králi-nekráli se vyjímá hlavně postava Olava II. Haraldssona, který byl (samotnými Nory) svatořečen a stal se národním patronem a „věčným králem Norska“. Sám padl v bitvě u Stiklestadu (severně od Trondheimu) roku 1030, díky které se mu prý přesto podařilo definitivně pokřesťanštit Norsko. Jeho ostatky uchovávané v Nidaroské katedrále (starý název Trondheimu) se staly tradičním poutním cílem severní Evropy</p><p>Historie se oproti legendám o Olavovi vyjadřuje značně méně idylicky: hlavní motivací tu patrně byla pouze moc, a ačkoliv Olav křesťanství (mimochodem) opravdu šířil, činil tak doslova ohněm a mečem – s jeho praktikami si nezadají ani nejdrsnější pohanští Vikingové.</p><p>Historie se oproti legendám o Olavovi vyjadřuje značně méně idylicky: hlavní motivací tu patrně byla pouze moc, a ačkoliv Olav křesťanství (mimochodem) opravdu šířil, činil tak doslova ohněm a mečem – s jeho praktikami si nezadají ani nejdrsnější pohanští Vikingové.</p>"
    },
    {
        "title":"Vznik, rozmach a pád Norského království",
        "undertitle":"Norsko středověkou velmocí severu",
        "text":"<p>Navzdory klikatým peripetiím mocenských bojů se Norsko skutečně během následujících staletí stalo jednotným královstvím a zvláště ve 13. století i poměrně silnou velmocí evropského severu. Památkou na krále Håkona Håkonssona i jeho syna Magnuse Zákonodárce je velká gotická hala Håkonshallen v Bergenu, tehdy hlavním městě království.</p><p>Norští králové si také po celou dobu dělali nároky i na seveřany osídlené ostrovy v Atlantiku, včetně Islandu, který se jim podařilo získat pod svou korunu až roku 1262, kdy už se i islandská „demokracie“ rozpadla v krvavých mocenských sporech několika nejvlivnějších velmožů (mezi nimi byl i Snorri Sturluson, autor slavné prozaické Eddy, historiografické Heimskringly a dost možná i Ságy o Egilovi, hlavního pramene legend o sjednocení Norska).</p>"
    },
    {
        "title":"Vznik, rozmach a pád Norského království",
        "undertitle":"„Černá smrt“ a norské „období temna“",
        "text":"<p>Žádná sláva však není věčná a ta norská se zhroutila už po sto letech. „Černá smrt“, morová rána šířící se celou Evropou, zahubila v Norsku v polovině 14. století téměř dvě třetiny všech obyvatel. Dalekosáhlý efekt této katastrofy byl znásoben tím, že oběťmi byly především ženy a děti, ale také vrchní společenské vrstvy – šlechta a duchovní (kteří pečovali o nemocné nejvíce), nositelé politické moci, národní kultury a písemnictví.</p><p>Kromě toho se severské královské rodiny během 14. století zcela propojily manželskými svazky, což vyvrcholilo vznikem tzv. Kalmarské unie všech tří zemí na konci století. Švédsko se z ní po více než sto letech nakonec vymanilo, ale Norsko se (i kvůli oné ztrátě vlastní společenské špičky) postupně změnilo v periferní provincii Dánska, kterou zůstalo prakticky až do napoleonských válek.</p><p>V sérii dánských králů, střídajících bezmála pravidelně jména Frederik a Kristian, se našli nejen tací, kteří si Norska moc nehleděli, ale i tací, kteří ho pozvedli ze sutin. Staré královské město Oslo vděčí hlavně Kristianovi IV. za obnovu své slávy a po několik století (1624–1925) neslo také jméno Kristiania. V dánských válkách se Švédskem však Norsko naopak za vlády téhož panovníka přišlo o své provincie Jemtland a Herjedalen (1643). Dánské Kristiany a Frederiky najdete ovšem dodnes v názvech dalších norských měst.</p>"
    },
    {
        "title":"Vznik moderního Norska",
        "undertitle":"První krok ke znovuzrozenému Norsku",
        "text":"<p>Napoleonské války si se skandinávskými zeměmi pohrály celkem škodolibě: zatímco Švédové, tradiční sympatizanti Francie, se na poslední chvíli ocitli shodou okolností na straně vítězů, Dánsko nakonec neudrželo svou neutralitu a po ostřelování Kodaně Brity roku 1808 (Dánové nechtěli vydat svou námořní flotilu, jíž údajně ohrožovali britskou blokádu Francie) bylo dotlačeno na stranu (později) poražené Francie.</p><p>V Kielském míru si Norsko (ovšem už bez Islandu, Grónska a Faerských ostrovů) od poraženého Dánska nechali připsat Švédové, kteří si na něj dlouho brousili zuby. V poválečném zmatku si však izolovaní Norové stihli narychlo vybudovat samostatnou konstituční monarchii, založenou na velmi moderní a liberální ústavě, kterou si odhlasovali 17. května 1814 v Eidsvollu (tento den se slaví dodnes jako norský státní svátek).</p><p>Švédové na svém nároku na Norsko samozřejmě trvali, a tak málem došlo k norsko-švédské válce, na kterou ale už nikdo po napoleonských válkách neměl valnou chuť. Kompromisem byla nakonec unie obou zemí svázaná společným panovníkem, švédským králem, jehož pravomoci však svazovala nová norská ústava, která zůstala v platnosti a vymezila Norsku nebývalou autonomii.</p>"
    },
    {
        "title":"Vznik moderního Norska",
        "undertitle":"Národní obrození a vznik samostatného Norska",
        "text":"<p>Národní obrození se v průběhu 19. století nevyhnulo ani Norsku, které nalezlo svou národní identitu v osobě svobodného norského sedláka (zemi ovšem v tuto dobu vládl značně privilegovaný stav úředníků) a více či méně úspěšně zrekonstruovalo svou národní kulturu, symboly a jazyk.</p><p>Svou bohatou kulturou a politickými aktivitami si Norsko získalo značný respekt v  evropském a světovém povědomí. Díky tomu se mu podařilo nejen udržet všechna privilegia z roku 1814, ale naopak je ještě rozšiřovat, až se nakonec roku 1905 odtrhlo od Švédska definitivně. V rozhodujícím celonárodním referendu se k zachování unie přiklonilo pouze 184 lidí!</p><p>Za nového krále si Norové zvolili dánského prince Karla (rodina původně ze šlesvicko-holštýnského šlechtického rodu Oldenburgů), který přijal tradiční norské královské jméno Håkon VII. a jeho (tehdy ještě mladičký) syn Alexandr pak jméno norského národního patrona, sv. Olava. Současný král Harald V., Olavův syn, je tedy třetím panovníkem v této nové linii norských králů.</p>"
    },
    {
        "title":"Trauma druhé světové války",
        "undertitle":"",
        "text":"<p>Zatímco v první světové válce se Norsku (s urputným úsilím) podařilo vybalancovat relativní neutralitu, v té druhé se stalo obětí německé taktické okupace. Německé vojsko obsadilo Norsko 9. dubna 1940, vláda a král emigrovali do Londýna a formální vlády v Norsku se (samozřejmě pod řádným dohledem německých nacistů) ujala strana norských nacistů v čele se svým vůdcem Vidkunem Quislingem.</p><p>Norové ovšem nepropadli německé propagandě, prezentující je samotné jako výkvět „nordické“ rasy předurčené k světovládě. Naopak se (od začátku, ne pár dní před koncem války) vrhli do poměrně zoufalého a beznadějného partyzánského odboje. Mezinárodní paralelou „našeho“ atentátu na Heydricha se stala především úspěšná sabotáž vodní elektrárny v Rjukanu, kde si nacisté vyráběli těžkou vodu pro vývoj atomové zbraně.</p><p>Osvobození 7. května 1945 přineslo také nutnost vypořádat se s vlastizrádci. I zde si Norsko (na rozdíl od Československa) celkem zachovalo tvář. Popraven byl sice Vidkun Quisling (jeho jméno se v norštině stalo obecným synonymem „zrádce“) a dalších 36 lidí a několik tisíc lidí bylo odsouzeno k žaláři, ale žádné divoké veřejné lynčování se nekonalo.</p><p>Asi největších a nejdelších útrap se po válce dočkaly dívky, které se za války zapletly s mladými německými vojáky, a zvláště pak případné děti, které se z takových románků narodily. Národní dilema se také vyhrotilo v řízení se spisovatelem Knutem Hamsunem, národním bardem a nositelem Nobelovy ceny, který s nacisty také do jisté míry sympatizoval a veřejně se jich zastával.</p>"
    },
    {
        "title":"„Černé zlato“ a blahobyt",
        "undertitle":"",
        "text":"<p>Navzdory okupaci a aktivnímu odboji Norsko přeci jen válkou neutrpělo tolik jako jiné evropské země. Po válce se tak mohlo rychle postavit na nohy (také díky přistoupení k Marshallovu plánu) a pokračovat ve vývoji v jednu z nejmodernějších a nejliberálnějších zemí s pevnou národní identitou.</p><p>Vyostřená situace mezi východem a západem nakonec potlačila (dříve stejně neúspěšné) snahy o udržení vojenské neutrality, a Norsko se tak nakonec roku 1949 přidalo s Dánskem k Severoatlantické alianci (NATO). Blízkost Sovětského svazu a hrozba atomové války však přesto nenechala mnoho Norů po celá desetiletí příliš klidně spát (jak lze nezřídka vidět i v norské literatuře této doby).</p>Objevení a počátek těžby ropy v Severním moři pomohly Norsku vytvořit skutečnou společnost blahobytu s bezpečnou sociální sítí. Navzdory norské střídmosti se však země stává na obchodu s ropou stále více závislou a také snadněji zranitelnou vůči světovým trhům.<p></p><p>Norové nerozhazují, ale střádají si vydělané peníze z ropy do zvláštního fondu. Přesto je velmi nejisté, nakolik se této společnosti může podařit dosažený blahobyt udržet i po vyčerpání ropných zdrojů. Už v posledních desetiletích se hospodářský růst ukázal jako něco ne až tak samozřejmého a od tradiční sociální rovnostářské politiky se pomalu začalo ustupovat směrem k tržnímu hospodářství.</p>"
    },
    {
        "title":"„Černé zlato“ a blahobyt",
        "undertitle":"Norsko a Evropská unie",
        "text":"<p>Norsko se sice stalo členem Evropského hospodářského společenství (EHS) a Evropské asociace volného obchodu (EFTA), zato členství v Evropském společenství (dnes Evropská unie) bylo dvakrát těsnou většinou zamítnuto ve všelidovém referendu (1972 a 1994). Otázka plného členství v EU dodnes dělí národ na dvě víceméně shodné poloviny – výkyvy se pohybují obvykle jen v jednotkách procent.</p>"
    },
];

onClick();


backButton.addEventListener("click", ()=>{
    active -= 1;
    onClick();
});
fowardButton.addEventListener("click", ()=>{
    active += 1;
    onClick();
})

let lilist = [];
let listintolist = [paras[0].title,[]];
let lasttitle = paras[0].title
for(let para of paras){
    if(para.title == lasttitle){
        listintolist[1].push(para.undertitle)}
    else{
        
        lilist.push([].concat(listintolist));
        listintolist[1] = [para.undertitle];
        listintolist[0] = para.title;}
    lasttitle = para.title;}

lilist.push([].concat(listintolist));
let res = "<ul>";
for(let theme of lilist){
    res += `<li><b class='${theme[1][0] == "" ? "clickable" : "unclickable" }'>${theme[0]}</b>\n`
    if(theme[1].length > 1){
        res += "<ul>";
        for(let para of theme[1]){
            if (para != ""){
                res += `<li class='clickable' style='list-style-type: disc'>${para}</li>\n`}}
        res += "</ul>";}
    res += `</li>\n`}
res += "</ul>\n"
legend.innerHTML = res;

let bselements = document.getElementsByClassName("clickable");
let elements = []
for(let element of bselements){elements.push(element);}
for(let element of elements){
    element.addEventListener("click", ()=>{
        active = elements.indexOf(element);
        onClick();
    });
    element.addEventListener("mouseenter", ()=>{
        if(elements.indexOf(element) == active)
            $(element).css({"text-decoration": "none"})
    })
}

function onClick(){
    if(active < 0)
        active = paras.length - 1;
    if(active == paras.length)
        active = 0;
    $(articleDiv).fadeOut("fast", ()=>{
        articleTitle.innerHTML = `<h2 style="font-size: 22px;"><b>${paras[active].title}</b></h2><h3 style="font-size: 18px;">${paras[active].undertitle}</h3>`;
        articleText.innerHTML = paras[active].text;
        elements.forEach(element => {
            $(element).css({"background-color": "white","border": ""});
            $(element).on("mouseenter", ()=>{
                $(element).css({"text-decoration": "underline"});
            });
            $(element).on("mouseleave", ()=>{
                $(element).css({"text-decoration": "none"});
            });
                            
        });
        $(elements[active]).css({"background-color": "rgb(240, 240, 240)", "border-top": "1px dashed black", "border-bottom": "1px dashed black","text-decoration": "none"});
        $(articleDiv).fadeIn("fast");
    });
}