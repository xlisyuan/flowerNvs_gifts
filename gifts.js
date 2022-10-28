// toUpdat add giftStory/ (spritePosChr,spritePosGift) with spriteUrls if needed / giftList /chr<rarity>NameList
var giftStory = {
    "紫檀木鳥籠": "名匠用紫檀木打造的鳥籠,堅固且輕便 ,還能防風化和蟲豸,實乃精品。可以增加160點好感度。",
    "筮竹": "用於卜卦的枚筮,昔者恆娥竊不死之藥以奔月,將往而枚筮之於有黃。可以增加160點好感度。",
    "狐紋面具": "祕銀鍛造,附著著精緻的孤紋,感不感覺這狐狸有點像某人?可以增加160點好感度。",
    "青色玉佩": "看到這種和花家很相似的青色物件,就會想到一個總是穿著青色的傢伙呢。可以增加160點好感度。",
    "失傳古譜": "難得的古琴譜,據說是失傳已久的請本, ,對音律最執著之人一定很想要。可以增加160點好感度。",
    "秘製調料": "獨家秘製的特別醬汁,刷在烤肉上別有風味。可以增加160點好感度。",
    "綠豆冰糕": "以綠豆為主料的冰糕,消暑解僱,微甜的滋味和軟糯的口感,深受孩子們的喜愛。可以增加160點好感度。",
    "精棉紗布": "手藝極為出眾的紗布,透氣性極好,即使沒有傷口,也不會悶出問題。可以增加160點好感度。",
    "沙盤遊戲": "上等桐木、南海白沙,由一流匠人精雕,細琢每塊模型,支援五大地勢、九大陣型,喜愛行軍佈陣之人的不二之選。可以增加160點好感度。",
    "手製荷花酥": "親手做的三色荷花酥,趁還熱著,送給喜愛甜點的人吧。可以增加160點好感度。",
    "紫玉冠": "紫玉製成的精美髮冠,送給某個總是下 了朝就散開頭髮的人吧。可以增加160點好感度。",
    "小米辣": "為了做這碗正宗的小米辣被熏哭了好幾次……送給最嗜辣的那個人吧。可以增加160點好感度。",
    "西洋禮帽": "南塘布莊自產的仿西洋制式布帽，誰會喜歡這種帽子呢？可以增加160點好感度。",
    "護膚霜": "產自越陽，在海風肆虐中保持肌膚潤滑細嫩的必備之物。可以增加160點好感度。",
    "流蘇珠釵": "珠光寶氣的發釵，原料金貴，製作精良，千金難求，非富貴之人不可入手之物。可以增加160點好感度。",
    "鈴鐺繩結": "掛有鈴鐺的繩結，許多人戴在手上作為裝飾物，也有少量大戶人家，將其用作寵物的飾品。可以增加160點好感度。",
    "暗器套組": "一套形色各異的暗器，說是套組，能熟練掌握各種暗器的人本就不多，大多都是買來收藏，鮮有人會投入實用。可以增加160點好感度。",
    "精雕劍匣": "劍匣周身出自同一棵古樹，渾然天成，只有最珍貴的寶劍才能當得上這樣的容器。可以增加160點好感度。",
    "龍紋香薰球": "香薰球飄出清淡宜人的香氣，集結秋天的氣息，舒心養顏，放鬆減壓，安神助眠。可以增加160點好感度。",
    "藍玉髮簪": "且末藍和田玉，產量稀少色調獨特。用其製成髮簪，將長髮鬆鬆挽起，再配上幽藍長裙，可謂典雅美人標配。可以增加160點好感度。",
    "武器掛托": "隨身攜帶武器所必需的外掛裝置，除了武器商之外，用到它的人應該不多。可以增加160點好感度。",
    "冰螭佩": "螭是羅宛神話中的聖靈，精巧的冰螭玉佩，也向來深受羅宛人的喜愛。可以增加160點好感度。",
    "苦丁茶": "陳年苦丁茶葉，入口濃郁苦澀，色如藥湯，是常人難以接受的味道。可以增加160點好感度。",
    "案牘書簡": "記載著繁雜事項的書簡，紀錄情報、反芻訊息，是培養超群記憶力的第一步。可以增加160點好感度。",
    "清涼衫": "冰蠶絲織成的罩衫，清涼飄逸，柔若無物，解暑熱，降燥火。可以增加160點好感度。",
    "黃金剪": "別致精巧的剪刀，刀刃鋒利，裁剪自如，最得設計匠人的喜愛。可以增加160點好感度。",
    "南塘藕粉": "南塘知名的風味小食，觀感簡樸，口感醇厚，是童年記憶中難忘的味道。可以增加160點好感度。",
    "葉子戲牌": "市井間的趣味遊戲，擅長奇術的人可以用它上演精采的猜心術。可以增加160點好感度。",
    "寶石粉末": "礦物寶石經悉心打磨，各色粉末便是岩彩畫的上佳顏料。可以增加160點好感度。",
    "雙尾金魚": "靈動的金魚，在水中舒展鰭尾，來去自如。提起景朝作金魚圖的名家，必是那位先生了。可以增加160點好感度。",
    "束髮髮帶": "行動敏捷又愛夜行的俠女梳妝盒中常備之物。可以增加160點好感度。",
    "曜日玄甲": "玄甲曜日，朱旗絳天。以青銅片製成的玉林鐵甲，精鍛細密，是戍邊騎將的最佳戰鬥裝備。可以增加160點好感度。",
    "浮雕茶具": "遠洋好生保管運來的茶具，不僅有著觀賞價值，更可以作為身分的象徵。可以增加160點好感度。",
    "檀木胡笳": "胡笳本就不是尋常人能夠演奏好的樂器，更別提這檀木所製的胡笳，更非常人所能駕馭。可以增加160點好感度。",
    "絕跡琴譜": "古舊的琴譜，泛黃的書頁上記載著失傳的樂章，靜靜訴說著失落的美好。可以增加160點好感度。",
    "夜光杯": "葡萄美酒夜光杯，這對西域翡翠雕琢而出的月光杯，價值連城。可以增加160點好感度。",
    "花釀胭脂": "寶劍配英雄，胭脂贈佳麗。對美人而言，美麗就是最奪目鋒利的武器。可以增加160點好感度。",
    "羽扇": "孔明和某左丘姓男子都喜歡拿在手裡的東西。可以增加160點好感度。",
    "炙烤羊排": "取新鮮羔羊精排於烈火烤製而成，肉質酥爛，滋味鮮美，鮮嫩多汁，濃香四溢。鄔蘭族人的最愛。可以增加160點好感度。",
    "桑落釀": "不知桑落時，今歲誰與傾。色比涼漿猶嫩，香同甘露永春。聞之令人口齒生津、垂涎欲滴。可以增加160點好感度。",
    "藏紅花": "產自埃蘭沙的藏紅花，有活血行氣之效，可以用於泡茶，也能食用。奇異的外形，彷彿蘊藏了什麼異樣的力量。可以增加160點好感度。",
    "狼頭肩甲": "通常將帥的甲冑都有不同的寓意，這幅肩鎧亦是如此，肅殺的狼頭造型，透露著穿戴者的血性。可以增加160點好感度。",
    "白玉書撥": "為防在古籍書頁留下手紋汙跡的書撥，以白玉製成，銘文「擁書萬卷」，價值不菲。可以增加160點好感度。",
    "文房四寶": "諸葛筆、安廬墨、龍宿硯、蒼陽紙，並稱景朝四大文寶，備受文人雅士推崇。可以增加160點好感度。",
    "銀紋臂釧": "相較於其他臂釧的小巧華麗，它實在有些分量，這是因其暗藏玄機，方便攜帶藥物粉末等。可以增加160點好感度。",
    "山海經": "記滿神鬼志怪之說的奇書,裡面怪獸的名字經常被用來嚇唬不聽話的小孩子。可以增加160點好感度。",
    "兔兒平安符": "兔兒形的平安符，小巧別緻，暗有沁香，出自祈靈閣。可以增加160點好感度。",
    "明雍院花": "一枝被風雨吹落的明雍書院的院花，也不知誰會憐惜？可以增加160點好感度。",
    "兔毛暖手筒": "非常保暖的暖手筒，還是用兔毛做的，喜歡兔子的人一定會喜歡。可以增加160點好感度。",
    "玫瑰花種": "一包罕見的玫瑰花種。有些外表果決強硬的人，說不定也會願意種花養性呢，但得選對花種才可以。可以增加160點好感度。",
    "食鐵獸玩偶": "這玩偶做成了蜀中特有的食鐵獸模樣，大概只有不懼其威力的人才會心生喜愛吧。可以增加160點好感度。",
    "錦繡眼罩": "用越陽特有的無盡靡面料織造而成的單邊眼罩，雖然刺繡繁複但質地十分柔軟親膚，可見織匠技藝之精湛。可以增加160點好感度。",
    "荊棘長鞭": "荊棘紮成的長鞭，看起來輕巧，可甩在人身上可不是鬧著玩的。可以增加160點好感度。",
    "藏袖銀針": "精銀打造的細針，可醫用，可刺繡，亦可作為暗襲者的特殊武器。可以增加160點好感度。",
    "紅珊瑚珠": "質地上乘的珊瑚珠，散發著瑩潤柔和的光芒。可以增加160點好感度。",
    "天然琥珀": "凝萬物魂靈，化石成珀，掩埋地下千萬年，可趨吉避凶。可以增加160點好感度。",
    "琉璃點墨筆": "琉璃所製,純淨通透。可以增加160點好感度。",
    "星辰懷錶": "攬星河入錶盤,映雲色於金邊。可以增加160點好感度。",
    "景繡絲巾": "傳承千年,手工景繡。柔軟親膚,細膩順滑。可以增加160點好感度。",
    "寶石項鍊": "璀璨之石,鑲於銀鏈。綺麗,光彩照人。可以增加160點好感度。",
    "錯金銀銅骰子": "金絲錯卷雲紋的精緻骰子,看著華麗,分量不輕。可以增加160點好感度。",
    //violet
    "青萍花": "又稱浮萍花，有水處便能活，極儘自由美麗，為虞氏小姐所喜。可以增加80點好感度。",
    "戰馬韁轡": "孔穎達疏：轡，御馬索也。以堅韌皮具製成嚼子，結實麻繩紮成韁繩，是以驅服烈性戰馬，馳騁沙場。可以增加80點好感度。",
    "繡花摺扇": "由大師級工匠精製的摺扇，造價不菲，深受豪門千金的喜愛。可以增加80點好感度。",
    "瓷器餐具": "陶瓷烤製的餐具，花紋和陶藝均為上品，對廚藝所有偏愛之人的不二之選。可以增加80點好感度。",
    "蠶絲冰弦": "由冰蠶蠶絲精製的琴弦，手感順滑，韌性極佳，在愛琴人士中流傳甚廣，可謂上品。可以增加80點好感度。",
    "玉笛": "純玉雕製的橫笛，據說可以吹出動人心弦的音色。可以增加80點好感度。",
    "箜篌琴弦": "潔淨美麗的絲線，在某些人手中能夠成為柔韌的箜篌琴弦。可以增加80點好感度。",
    "星盤": "便於隨身攜帶的星盤掛件，適合喜歡觀星推演之人。可以增加80點好感度。",
    "鐵製箭鏃": "遊牧民族使用的空心銎式箭頭，穿透力比青銅制更強，是狩獵時的好幫手。可以增加80點好感度。",
    "精瓷盞": "景德精瓷製得小巧茶盞，其上繪製時令花神紋樣，最受文人雅士欣賞。可以增加80點好感度。",
    "白磷粉包": "裝有磷粉的口袋，本身由特殊材質製成，阻絕白磷燃燒，但隨時隨地燃火的便攜性，還是受到了許多人的青睞。可以增加80點好感度。",
    "焦黃烤魚": "大火烤至焦熟的整魚，色味俱佳，吃上一口回味無窮，尤其是那些許久無法嘗到的人，更是偏愛這口。可以增加80點好感度。",
    "紙鳶": "引線乘風，扶搖直上。祈願自由無拘人生的紙鳶。可以增加80點好感度。",
    "彩繪葫蘆": "葫蘆繪上的畫工雖稍顯稚嫩，但五彩斑斕的顏色，總會讓人不自覺心情好起來。可以增加80點好感度。",
    "鎏金釵": "一眼只覺端莊規矩，細看便能發現鏤空花紋精巧細緻，似有懷才於身卻深藏不露之意。可以增加80點好感度。",
    "野果子": "長在山間的野果，味道酸酸甜甜，想想就讓人流口水。可以增加80點好感度。",
    "捕夢網": "由色澤明豔的羽毛編製而成，常被寄託思念、祈願之情。可以增加80點好感度。",
    "經學課業簿": "厚厚一本的經學課業簿，彷彿永遠寫不完似的。可以增加80點好感度。",
    "毛絨吊墜": "軟綿綿輕飄飄，摸它就像是在撫摸一隻可愛的小動物。可以增加80點好感度。",
    "腳鈴": "腳踏鈴響，羈束難逃。可以增加80點好感度。",
    "蛇膽汁": "蛇膽可以入藥，有清涼明目、袪風除濕之效。但於心術不正之人，亦有別的用途。可以增加80點好感度。",
    //blue
    "精鐵司南": "沉迷遠路，詎見司南之機。對於不識阡陌的人來說，大有益處。可以增加40點好感度。",
    "紫鋒狼毫": "去冬收集黃鼠狼的尾毛，今春製成上好的毛筆放在櫥中細心收藏，等待與之相配的主人。可以增加40點好感度。",
    "詩苑札記": "前人讀詩作時摘記的要點見聞及心得體會，「或學而有得，或思而有得，輒札記之」。可以增加40點好感度。",
    "念雲蜜棗": "蜜棗乃是當朝最為常見的果品，念雲蜜棗又當屬個中翹楚，深受各地人民喜愛。可以增加40點好感度。",
    "打鐵套組": "雖說是常見的打鐵道具，但會這麼小心保管的，只有那些心懷敬畏的職業匠人了。可以增加40點好感度。",
    "鎮紙": "造型別致的山水鎮紙，為性情嫻靜，喜伏案閱讀的人所喜。可以增加40點好感度。",
    "東炎湯": "口味獨特的湯品，由異國沙雅流傳而來，奇妙的口味讓許多人十分貪戀。可以增加40點好感度。",
    "絲綿淨帕": "極其細膩單純的淨帕，用來擦拭琉璃等光潔物品效果絕佳。可以增加40點好感度。",
    "書籤": "簡易美觀的書浮，可掛攜在書頁之上以示標記。可以增加40點好感度。",
    "望遠鏡": "海外才有的望遠鏡，不知為什麼某人很喜歡收集這個。可以增加40點好感度。",
    "開山鎬": "精鐵鍛造，輕便省力，是開採礦石必不可少的工具。可以增加40點好感度。",
    "古董鍋蘸料": "特製古董鍋蘸料，沒有放芝麻醬的那種哦。可以增加40點好感度。",
    "玲瓏扇墜": "冰藍玉石製成的精巧扇墜，玲瓏可愛，頗受女孩子喜歡。可以增加40點好感度。",
    "虎頭帽": "精緻布料製成的帽子，戴起來像長出了一對老虎耳朵，虎頭虎腦可能就是從這而來的。可以增加40點好感度。",
    "念雲石": "質地晶瑩的石頭，出自念雲河畔。離鄉人總會懷揣幾塊，每當思鄉之時，便拿把玩。可以增加40點好感度。",
    "鋒利短刃": "質地輕巧、刀口尖利的短刀，是貼身侍衛用來保護主人的上佳武器。可以增加40點好感度。",
    "鑲花飾物": "綠冰糯種蛋面鑲嵌花型墜飾，精美華貴又不失格調，受到諸多愛美之人的追捧。可以增加40點好感度。",
    "奇異羽毛": "奇珍飛禽身上脫落的羽毛，顏色奇異，經久不退，但除了作為顏料的原材料，沒有什麼實際作用。可以增加40點好感度。",
    "竹編螳螂": "竹葉編織的螳螂，玲瓏精巧，最受男孩子喜愛。可以增加40點好感度。",
    "撥浪鼓": "只手輕撥，鼓聲點點，在一頓一頓的聲響之中，是塵封已久的歷史。可以增加40點好感度。",
    //green
    "鯉魚布偶": "棉布織成的魚型玩偶，手感十分舒適。可以增加20點好感度。",
    "天景邸抄": "承永發行量最高的邸報，各種新鮮見聞上面都有記載。可以增加20點好感度。",
    "純銀護頸": "純銀打造的精緻護頸，軍士們必不可少的裝備之一。可以增加20點好感度。",
    "黃花梨藥箱": "精緻的藥箱，比起美觀，黃花梨木能封住藥性阻止流失，才是更為重要的。可以增加20點好感度。",
    "紅木墊枕": "據說此枕能讓人安神助眠，但對嗜睡之人而言，想必任何枕頭都有此功效吧。可以增加20點好感度。",
    "風乾楓葉": "楓葉流舟,如爍彩霞,霜葉紅於二月花。可以增加20點好感度。",
    "護心鏡": "取堅硬玉石,由能工巧匠打造的護心鏡。刀槍火器無眼，護心即為平安。可以增加20點好感度。",
    "單片眼鏡": "金絲鑲邊的單片眼鏡，鑒寶愛好者的身分象徵，不過許多人戴著只是覺得好看罷了。可以增加20點好感度。",
    "刀具保養套裝": "綠油石是上佳的磨刀原石，再來一塊細棉布，是愛刀之人都無法抗拒的刀具護養套裝。可以增加20點好感度。",
    "可愛糕點模具": "能做出可愛形狀糕點的模具，少女專用。可以增加20點好感度。",
    "荔枝黏糖": "荔枝汁子做的糖飴，不僅味道好，還能把人的牙黏住。可以增加20點好感度。",
    "桃花包子": "桃花餡兒的包子還真少見，會喜歡吃的人怕是個有故事的。可以增加20點好感度。",
    "護肝丸": "愛嗔怒之人肝火旺盛，為身體著想，應多備此良藥。可以增加20點好感度。",
    "南塘詩選": "南塘有著夢中名府之稱，風雅之氣盛行，常有文人墨客聚集，結社成詩。南唐詩也向來為景朝文人所推崇。適用於所有名士，可以增加25點好感度。",
    "護身符": "從香火鼎盛又十分靈驗的廟中求來的護身符，將它送給經常在外遊歷的人，希望他們旅途平安，風雨無虞。可以增加20點好感度。",
    //all
    "明前龍井": "說到南塘特產，除卻刺繡與絲綢，便是龍井了。尤以清明之前採摘的嫩葉為上佳之品。適用於所有名士，可以增加50點好感度。",
    "前朝人形燈": "這件人形燈青銅打造，底座刻有盤龍，構造精巧，是前朝御用之物。適用於所有名士，可以增加100點好感度。",
    "寶鈿瑞獸銅鏡": "此鏡人物、禽鳥刻畫清晰，螺片光澤瑩潤，整體別致出新，是本朝難得的精品。適用於所有名士，可以增加100點好感度。",
    "描金銅燈": "銅製的燈具，山水樓閣的銅製燈罩上有金線細細勾勒，流光溢彩，為夜色增添幾分優雅溫馨。適用於所有名士，可以增加100點好感度。",
    "藍色薔薇": "珍稀的異色薔薇，生長在玉湖之淨。是星河贈與我的禮物，也可以贈與名士增加100點好感度。",
    "花家環佩": "外界傳聞南國公曾獲一批名玉，並將其打造為數枚環佩，贈與良友，維繫良緣。不知誰會有幸收到呢。適用於所有名士，可以增加200點好感度。"
}
// gift and chr
var spriteUrls = {
    "chr": "https://i.imgur.com/bUvn3TT.png",
    "chr1": "https://i.imgur.com/XD8WrTZ.png",
    "chr2": "https://i.imgur.com/XN5w38i.png",
    "chr3": "https://i.imgur.com/Qh07CrR.png",
    "gift": "https://i.imgur.com/g5OwIPO.png",
    "gift1": "https://i.imgur.com/Ui8oHKj.png",
    "gift2": "https://i.imgur.com/CxKHIWi.png",
    "gift3": "https://i.imgur.com/sS0cFhu.png",
};
var spritePosChr = {
    //'所有名士': "-00px -00px",
    //chr 
    '雲無羈': "-00px -00px",
    '驚墨': "-100px 0px",
    '玉澤': "-200px 0px",
    '季元啟': "-300px 0px",
    '安如是': "-400px 0px",
    '宣望鈞': "0px -100px",
    '凌晏如': "-100px -100px",
    '文司宥': "-200px -100px",
    '月憐': "-300px -100px",
    '陵': "-400px -100px",
    '未央': "0px 100px",
    '步夜': "-100px 100px",
    '謝行逸': "-200px 100px",
    '星河': "-300px 100px",
    '了了': "-400px 100px",
    //chr1
    '昭陽公主': "-00px -00px",
    '虞沐陽': "-100px -00px",
    '沐英嵐': "-200px -00px",
    '洛凌塵': "-300px -00px",
    '月靈': "-400px -00px",
    '宣連隱': "-00px -100px",
    '逍遙先生': "-100px -100px",
    '樂仙兒': "-200px -100px",
    '左丘肅': "-300px -100px",
    '阿古達木': "-400px -100px",
    '沈南柯': "-00px -200px",
    '耶律炎': "-100px -200px",
    '封子羽': "-200px -200px",
    '言千曉': "-300px -200px",
    '何必': "-400px -200px",
    '程筠': "-00px -300px",
    '鹿蜀': "-100px -300px",
    '瑩兒': "-200px -300px",
    '司業': "-300px -300px",
    '易七': "-400px -300px",
    '陌雲': "-00px -400px",
    '夏婉蓮': "-100px -400px",
    '蘇望丘': "-200px -400px",
    '司空澈': "-300px -400px",
    '林珊': "-400px -400px",
    //chr2
    '梵': "-00px -00px",
    '紅闕': "-100px -00px",
    '秋符蝶': "-200px -00px",
    '文司晏': "-300px -00px",
    '何號': "-400px -00px",
    '楚禺': "-00px -100px",
    '辰香': "-100px -100px",
    '阿武': "-200px -100px",
    '蘇望夷': "-300px -100px",
    '木微霜': "-400px -100px",
    '桃山客': "-00px -200px",
    '賀之洲': "-100px -200px",
    '喬憶橋': "-200px -200px",
    '冷瑤': "-300px -200px",
    '元化': "-400px -200px",
    '趙孤鳴': "-00px -300px",
    '阿刃': "-100px -300px",
    '伍校尉': "-200px -300px",
    '尹冰': "-300px -300px",
    '曹小月': "-400px -300px",
    '白蕊兒': "-00px -400px",
    '青隱': "-100px -400px",
    '季元鴻': "-200px -400px",
    '俞不平': "-300px -400px",
    '唐堂': "-400px -400px",
    //chr3
    '杜懷音': "-00px -00px",
    '胡小梁': "-100px -00px",
    '路滄崖': "-200px -00px",
    '吾冥': "-300px -00px",
    '伽華': "-400px -00px",
    '銀朱': "-00px -100px",
    '弋蘭天': "-100px -100px",
    '薔': "-200px -100px",
    '十四夜': "-300px -100px",
    '滇離': "-400px -100px",
    '守伊': "-00px -200px",
}
var spritePosGift = {
    //'禮物': "-0px -0px",
    '沙盤遊戲': "-600px 0px",
    '手製荷花酥': "-500px 0px",
    '南塘藕粉': "0px -100px",
    '藍色薔薇': "-500px -300px",
    '綠豆冰糕': "-500px -200px",
    '龍紋香薰球': "-100px -200px",
    '西洋禮帽': "-700px -0px",
    '苦丁茶': "-200px -0px",
    '案牘書簡': "-100px -0px",
    '紫玉冠': "-600px -100px",
    '小米辣': "-700px -100px",
    '護膚霜': "-400px -100px",
    '流蘇珠釵': "-200px -300px",
    '鈴鐺繩結': "-600px -200px",
    '精棉紗布': "-700px -200px",
    '武器掛托': "-0px -200px",
    '精雕劍匣': "-0px -300px",
    '寶石粉末': "-200px -100px",
    '雙尾金魚': "-300px -100px",
    '鎏金釵': "-600px -300px",
    '紙鳶': "-700px -300px",
    '束髮髮帶': "-400px -0px",
    '曜日玄甲': "-400px -300px",
    '浮雕茶具': "-500px -100px",
    '檀木胡笳': "-100px -300px",
    '花釀胭脂': "-300px -300px",
    '羽扇': "-300px -200px",
    '桑落釀': "-200px -200px",
    '狼頭肩甲': "-400px -200px",
    '白玉書撥': "-300px -0px",
    '文房四寶': "-100px -100px",
    '銀紋臂釧': "-0px -0px",
    '青萍花': "-300px -100px",
    '戰馬韁轡': "-100px -200px",
    '繡花摺扇': "-200px -200px",
    '瓷器餐具': "-100px -100px",
    '蠶絲冰弦': "-0px -200px",
    '箜篌琴弦': "-200px -100px",
    '星盤': "-0px -100px",
    '鐵製箭鏃': "-100px -300px",
    '精瓷盞': "-300px 0px",
    '白磷粉包': "-0px -300px",
    '焦黃烤魚': "-300px -200px",
    '彩繪葫蘆': "-100px -0px",
    '野果子': "-200px -0px",
    '經學課業簿': "-0px -0px",
    //gift2
    '筮竹': "-600px -200px",
    '狐紋面具': "-600px -100px",
    '秘製調料': "-400px -100px",
    '清涼衫': "-700px -100px",
    '黃金剪': "-700px -0px",
    '葉子戲牌': "-700px -200px",
    '花家環佩': "-400px -300px",
    '炙烤羊排': "-400px -200px",
    '玉笛': "-500px -200px",
    '捕夢網': "-500px -100px",
    '奇異羽毛': "-700px -300px",
    '明前龍井': "-600px -300px",
    '南塘詩選': "-500px -300px",
    '描金銅燈': "-400px -0px",
    '天景邸抄': "-0px -0px",
    '風乾楓葉': "-0px -100px",
    '可愛糕點模具': "-0px -200px",
    '純銀護頸': "-100px -0px",
    '護心鏡': "-100px -100px",
    '荔枝黏糖': "-100px -200px",
    '黃花梨藥箱': "-200px -0px",
    '單片眼鏡': "-200px -100px",
    '桃花包子': "-200px -200px",
    '紅木墊枕': "-300px -0px",
    '刀具保養套裝': "-300px -100px",
    '護肝丸': "-300px -200px",
    '玫瑰花種': "-500px -0px",
    '兔毛暖手筒': "-600px -0px",
    '夜光杯': "-300px -300px",
    '兔兒平安符': "-00px -300px",
    '明雍院花': "-100px -300px",
    '護身符': "-200px -300px",
    //
    '鯉魚布偶': "-700px -300px",
    '精鐵司南': "-200px -300px",
    '紫鋒狼毫': "-300px -300px",
    '詩苑札記': "-400px -0px",
    '念雲蜜棗': "-500px -0px",
    '打鐵套組': "-600px -0px",
    '鎮紙': "-700px -0px",
    '東炎湯': "-400px -100px",
    '絲綿淨帕': "-500px -100px",
    '書籤': "-600px -100px",
    '望遠鏡': "-700px -100px",
    '開山鎬': "-400px -200px",
    '古董鍋蘸料': "-500px -200px",
    '玲瓏扇墜': "-600px -200px",
    '虎頭帽': "-700px -200px",
    '念雲石': "-400px -300px",
    '鋒利短刃': "-500px -300px",
    '鑲花飾物': "-600px -300px",
    //gift3
    '紫檀木鳥籠': "-00px -00px",
    '青色玉佩': "-100px -00px",
    '失傳古譜': "-200px -00px",
    '暗器套組': "-300px -00px",
    '藍玉髮簪': "-400px -00px",
    '冰螭佩': "-500px -00px",
    '絕跡琴譜': "-600px -00px",
    '藏紅花': "-700px -00px",
    '山海經': "-00px -100px",
    '前朝人形燈': "-100px -100px",
    '寶鈿瑞獸銅鏡': "-200px -100px",
    '食鐵獸玩偶': "-300px -100px",
    '錦繡眼罩': "-400px -100px",
    '荊棘長鞭': "-500px -100px",
    '毛絨吊墜': "-600px -100px",
    '竹編螳螂': "-700px -100px",
    '藏袖銀針': "-00px -200px",
    '紅珊瑚珠': "-100px -200px",
    '天然琥珀': "-200px -200px",
    '腳鈴': "-300px -200px",
    '撥浪鼓': "-400px -200px",
    '琉璃點墨筆': "-500px -200px",
    '星辰懷錶': "-600px -200px",
    '景繡絲巾': "-700px -200px",
    '寶石項鍊': "-00px -300px",
    '錯金銀銅骰子': "-100px -300px",
    '蛇膽汁': "-200px -300px",
}
var giftList = {
    '紫檀木鳥籠': { gift: "紫檀木鳥籠", name: "驚墨", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr" },
    '筮竹': { gift: "筮竹", name: "驚墨", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr" },
    '狐紋面具': { gift: "狐紋面具", name: "玉澤", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr" },
    '青色玉佩': { gift: "青色玉佩", name: "玉澤", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr" },
    '失傳古譜': { gift: "失傳古譜", name: "季元啟", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr" },
    '秘製調料': { gift: "秘製調料", name: "季元啟", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr" },
    '綠豆冰糕': { gift: "綠豆冰糕", name: "安如是", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '精棉紗布': { gift: "精棉紗布", name: "安如是", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '沙盤遊戲': { gift: "沙盤遊戲", name: "宣望鈞", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '手製荷花酥': { gift: "手製荷花酥", name: "宣望鈞", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '紫玉冠': { gift: "紫玉冠", name: "凌晏如", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '小米辣': { gift: "小米辣", name: "凌晏如", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '西洋禮帽': { gift: "西洋禮帽", name: "文司宥", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '護膚霜': { gift: "護膚霜", name: "文司宥", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '流蘇珠釵': { gift: "流蘇珠釵", name: "月憐", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '鈴鐺繩結': { gift: "鈴鐺繩結", name: "月憐", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '暗器套組': { gift: "暗器套組", name: "陵", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr" },
    '精雕劍匣': { gift: "精雕劍匣", name: "陵", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '龍紋香薰球': { gift: "龍紋香薰球", name: "未央", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '藍玉髮簪': { gift: "藍玉髮簪", name: "未央", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr" },
    '武器掛托': { gift: "武器掛托", name: "雲無羈", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '冰螭佩': { gift: "冰螭佩", name: "雲無羈", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr" },
    '步夜禮物1': { gift: "苦丁茶", name: "步夜", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '步夜禮物2': { gift: "案牘書簡", name: "步夜", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '謝行逸禮物1': { gift: "清涼衫", name: "謝行逸", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr" },
    '謝行逸禮物2': { gift: "黃金剪", name: "謝行逸", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr" },
    '星河禮物1': { gift: "南塘藕粉", name: "星河", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '星河禮物2': { gift: "葉子戲牌", name: "星河", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr" },
    '了了禮物1': { gift: "寶石粉末", name: "了了", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '了了禮物2': { gift: "雙尾金魚", name: "了了", rarity: ".orange", giftSprite: "gift", chrSprite: "chr" },
    '兔毛暖手筒': { gift: "兔毛暖手筒", name: "昭陽公主", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr1" },
    '玫瑰花種': { gift: "玫瑰花種", name: "昭陽公主", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr1" },
    '食鐵獸玩偶': { gift: "食鐵獸玩偶", name: "弋蘭天", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '錦繡眼罩': { gift: "錦繡眼罩", name: "弋蘭天", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '藏袖銀針': { gift: "藏袖銀針", name: "十四夜", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '紅珊瑚珠': { gift: "紅珊瑚珠", name: "十四夜", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '天然琥珀': { gift: "天然琥珀", name: "滇離", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '琉璃點墨筆': { gift: "琉璃點墨筆", name: "伽華", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '星辰懷錶': { gift: "星辰懷錶", name: "伽華", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '景繡絲巾': { gift: "景繡絲巾", name: "銀朱", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '寶石項鍊': { gift: "寶石項鍊", name: "銀朱", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    //SSR
    '束髮髮帶': { gift: "束髮髮帶", name: "虞沐陽", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '青萍花': { gift: "青萍花", name: "虞沐陽", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '曜日玄甲': { gift: "曜日玄甲", name: "沐英嵐", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '戰馬韁轡': { gift: "戰馬韁轡", name: "沐英嵐", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '浮雕茶具': { gift: "浮雕茶具", name: "洛凌塵", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '繡花摺扇': { gift: "繡花摺扇", name: "洛凌塵", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '檀木胡笳': { gift: "檀木胡笳", name: "月靈", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '瓷器餐具': { gift: "瓷器餐具", name: "月靈", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '絕跡琴譜': { gift: "絕跡琴譜", name: "宣連隱", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr1" },
    '蠶絲冰弦': { gift: "蠶絲冰弦", name: "宣連隱", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '夜光杯': { gift: "夜光杯", name: "逍遙先生", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr1" },
    '玉笛': { gift: "玉笛", name: "逍遙先生", rarity: ".violet", giftSprite: "gift2", chrSprite: "chr1" },
    '花釀胭脂': { gift: "花釀胭脂", name: "樂仙兒", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '箜篌琴弦': { gift: "箜篌琴弦", name: "樂仙兒", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '羽扇': { gift: "羽扇", name: "左丘肅", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '星盤': { gift: "星盤", name: "左丘肅", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '炙烤羊排': { gift: "炙烤羊排", name: "阿古達木", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr1" },
    '鐵製箭鏃': { gift: "鐵製箭鏃", name: "阿古達木", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '桑落釀': { gift: "桑落釀", name: "沈南柯", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '精瓷盞': { gift: "精瓷盞", name: "沈南柯", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '藏紅花': { gift: "藏紅花", name: "耶律炎", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr1" },
    '白磷粉包': { gift: "白磷粉包", name: "耶律炎", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '狼頭肩甲': { gift: "狼頭肩甲", name: "封子羽", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '焦黃烤魚': { gift: "焦黃烤魚", name: "封子羽", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '白玉書撥': { gift: "白玉書撥", name: "言千曉", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '紙鳶': { gift: "紙鳶", name: "言千曉", rarity: ".violet", giftSprite: "gift", chrSprite: "chr1" },
    '文房四寶': { gift: "文房四寶", name: "何必", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '彩繪葫蘆': { gift: "彩繪葫蘆", name: "何必", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '銀紋臂釧': { gift: "銀紋臂釧", name: "程筠", rarity: ".orange", giftSprite: "gift", chrSprite: "chr1" },
    '鎏金釵': { gift: "鎏金釵", name: "程筠", rarity: ".violet", giftSprite: "gift", chrSprite: "chr1" },
    '山海經': { gift: "山海經", name: "鹿蜀", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr1" },
    '野果子': { gift: "野果子", name: "鹿蜀", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '兔兒平安符': { gift: "兔兒平安符", name: "瑩兒", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr1" },
    '捕夢網': { gift: "捕夢網", name: "瑩兒", rarity: ".violet", giftSprite: "gift2", chrSprite: "chr1" },
    '明雍院花': { gift: "明雍院花", name: "司業", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr1" },
    '經學課業簿': { gift: "經學課業簿", name: "司業", rarity: ".violet", giftSprite: "gift1", chrSprite: "chr1" },
    '荊棘長鞭': { gift: "荊棘長鞭", name: "薔", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '毛絨吊墜': { gift: "毛絨吊墜", name: "薔", rarity: ".violet", giftSprite: "gift3", chrSprite: "chr3" },
    '腳鈴': { gift: "腳鈴", name: "滇離", rarity: ".violet", giftSprite: "gift3", chrSprite: "chr3" },
    '錯金銀銅骰子': { gift: "錯金銀銅骰子", name: "吾冥", rarity: ".orange", giftSprite: "gift3", chrSprite: "chr3" },
    '蛇膽汁': { gift: "蛇膽汁", name: "吾冥", rarity: ".violet", giftSprite: "gift3", chrSprite: "chr3" },
    //
    //橙
    '花家環佩': { gift: "花家環佩", name: "所有名士", rarity: ".orange", giftSprite: "gift2", chrSprite: "chr" },
    //紫
    '描金銅燈': { gift: "描金銅燈", name: "所有名士", rarity: ".violet", giftSprite: "gift2", chrSprite: "chr" },
    '前朝人形燈': { gift: "前朝人形燈", name: "所有名士", rarity: ".violet", giftSprite: "gift3", chrSprite: "chr" },
    '寶鈿瑞獸銅鏡': { gift: "寶鈿瑞獸銅鏡", name: "所有名士", rarity: ".violet", giftSprite: "gift3", chrSprite: "chr" },
    '藍色薔薇': { gift: "藍色薔薇", name: "星河送我的", rarity: ".violet", giftSprite: "gift", chrSprite: "chr" },
    //藍
    '精鐵司南': { gift: "精鐵司南", name: "易七", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr1" },
    '紫鋒狼毫': { gift: "紫鋒狼毫", name: "陌雲", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr1" },
    '詩苑札記': { gift: "詩苑札記", name: "夏婉蓮", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr1" },
    '念雲蜜棗': { gift: "念雲蜜棗", name: "蘇望丘", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr1" },
    '打鐵套組': { gift: "打鐵套組", name: "司空澈", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr1" },
    '鎮紙': { gift: "鎮紙", name: "林珊", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr1" },
    '東炎湯': { gift: "東炎湯", name: "梵", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '絲綿淨帕': { gift: "絲綿淨帕", name: "紅闕", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '書籤': { gift: "書籤", name: "秋符蝶", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '望遠鏡': { gift: "望遠鏡", name: "文司晏", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '開山鎬': { gift: "開山鎬", name: "何號", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '古董鍋蘸料': { gift: "古董鍋蘸料", name: "楚禺", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '玲瓏扇墜': { gift: "玲瓏扇墜", name: "辰香", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '虎頭帽': { gift: "虎頭帽", name: "阿武", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '念雲石': { gift: "念雲石", name: "蘇望夷", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '鋒利短刃': { gift: "鋒利短刃", name: "木微霜", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '鑲花飾物': { gift: "鑲花飾物", name: "桃山客", rarity: ".blue", giftSprite: "gift1", chrSprite: "chr2" },
    '奇異羽毛': { gift: "奇異羽毛", name: "賀之洲", rarity: ".blue", giftSprite: "gift2", chrSprite: "chr2" },
    '竹編螳螂': { gift: "竹編螳螂", name: "胡小梁", rarity: ".blue", giftSprite: "gift3", chrSprite: "chr3" },
    '撥浪鼓': { gift: "撥浪鼓", name: "守伊", rarity: ".blue", giftSprite: "gift3", chrSprite: "chr3" },
    //
    '明前龍井': { gift: "明前龍井", name: "所有名士", rarity: ".blue", giftSprite: "gift2", chrSprite: "chr2" },
    //綠
    '天景邸抄': { gift: "天景邸抄", name: "喬憶橋", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '純銀護頸': { gift: "純銀護頸", name: "冷瑤", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '黃花梨藥箱': { gift: "黃花梨藥箱", name: "元化", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '紅木墊枕': { gift: "紅木墊枕", name: "趙孤鳴", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '風乾楓葉': { gift: "風乾楓葉", name: "阿刃", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '護心鏡': { gift: "護心鏡", name: "伍校尉", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '單片眼鏡': { gift: "單片眼鏡", name: "尹冰", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '刀具保養套裝': { gift: "刀具保養套裝", name: "曹小月", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '可愛糕點模具': { gift: "可愛糕點模具", name: "白蕊兒", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '荔枝黏糖': { gift: "荔枝黏糖", name: "青隱", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '桃花包子': { gift: "桃花包子", name: "季元鴻", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '護肝丸': { gift: "護肝丸", name: "俞不平", rarity: ".green", giftSprite: "gift2", chrSprite: "chr2" },
    '鯉魚布偶': { gift: "鯉魚布偶", name: "唐堂", rarity: ".green", giftSprite: "gift1", chrSprite: "chr2" },
    '護身符': { gift: "護身符", name: "杜懷音", rarity: ".green", giftSprite: "gift2", chrSprite: "chr3" },
    //
    '南塘詩選': { gift: "南塘詩選", name: "所有名士", rarity: ".green", giftSprite: "gift2", chrSprite: "chr" },
}
var spriteSize = { gift: 800, chr: 500 };
// rarity
var rarityName = {
    //red: "紅",
    orange: "橙",
    violet: "紫",
    blue: "藍",
    green: "綠"
}
var rarity = {
    //red: {id:0,color:"red"},
    orange: { id: 0, color: "orange" },
    violet: { id: 1, color: "violet" },
    blue: { id: 2, color: "blue" },
    green: { id: 3, color: "green" }
}
var currentRarity = rarity.orange;
//character
var currentChrVisible = false;
//chr filter
var filterOn = false;
var showChrList = false;
var pageUrl = window.location.origin + window.location.pathname;
var chrFilterURL = "";
var chrURNameList = ["驚墨", "玉澤", "季元啟", "安如是", "宣望鈞", "凌晏如", "文司宥", "月憐", "陵", "未央", "雲無羈", "步夜", "謝行逸", "星河", "了了", "昭陽公主", "弋蘭天", "十四夜", "伽華", "銀朱"];
var chrSSRNameList = ["虞沐陽", "沐英嵐", "洛凌塵", "月靈", "宣連隱", "逍遙先生", "樂仙兒", "左丘肅", "阿古達木", "沈南柯", "耶律炎", "封子羽", "言千曉", "何必", "程筠", "鹿蜀", "瑩兒", "司業", "薔", "滇離", "吾冥"];
var chrSRNameList = ["易七", "陌雲", "夏婉蓮", "蘇望丘", "司空澈", "林珊", "梵", "紅闕", "秋符蝶", "文司晏", "何號", "楚禺", "辰香", "阿武", "蘇望夷", "木微霜", "桃山客", "賀之洲", "胡小梁", "守伊"];
var chrRNameList = ["喬憶橋", "冷瑤", "元化", "趙孤鳴", "阿刃", "伍校尉", "尹冰", "曹小月", "白蕊兒", "青隱", "季元鴻", "俞不平", "唐堂", "杜懷音"];
// pre
const preGiftChr = "<li class='giftChr' gift={{GIFT}} name={{NAME}} giftSprite={{gSPRITE}} chrSprite={{cSPRITE}} ><div class='gift'></div><div class='giftName'> </div><div class='chr'></div><div class='chrName'> </div></li>"
const preChrCheckBox = "<div class='chrCheckBoxLabel'><input class='chrCB' type='checkbox' id='{{NAME}}'><label class='chrLabel' for='{{NAME}}'>{{NAME}}</label></div>";

setup();

function setup() {
    //set gift list
    Object.values(giftList).forEach((giftData) => {
        var cGiftChr = preGiftChr.replace("{{GIFT}}", giftData.gift).replace("{{NAME}}", giftData.name).replace("{{gSPRITE}}", giftData.giftSprite).replace("{{cSPRITE}}", giftData.chrSprite);
        $(giftData.rarity).find(".giftChrList").append(cGiftChr);
    });

    //set image and text
    $(".giftChr").each(function (index) {

        var gift = $(this).attr("gift");
        var name = $(this).attr("name");
        var giftSprite = $(this).attr("giftSprite");
        var chrSprite = $(this).attr("chrSprite");

        $(this).find(".gift").css({
            "background": "url(" + spriteUrls[giftSprite] + ")" + spritePosGift[gift],
            "background-size": spriteSize["gift"] + "px"
        });
        $(this).find(".giftName").text(gift);

        $(this).find(".chr").css({
            "background": "url(" + spriteUrls[chrSprite] + ")" + spritePosChr[name],
            "background-size": spriteSize["chr"] + "px"
        });
        $(this).find(".chrName").text(name);
    });

    updateRarity(currentRarity);
    setUpChrList();
    checkUrlFilter();
}

function updateRarity(r) {
    $("." + currentRarity.color).css("display", "none");
    currentRarity = r;
    $(".title").text(rarityName[currentRarity.color]);
    $("." + currentRarity.color).css("display", "flex");

}

//品階左右分頁
$(".rBtn").click(
    function () {
        var cId = (currentRarity.id < Object.keys(rarity).length - 1) ? currentRarity.id + 1 : 0;
        updateRarity(rarity[Object.keys(rarity)[cId]]);
    }
);

$(".lBtn").click(
    function () {
        var cId = (currentRarity.id == 0) ? Object.keys(rarity).length - 1 : currentRarity.id - 1;
        updateRarity(rarity[Object.keys(rarity)[cId]]);
    }
);

// 顯示名士頭像
$(".showChr").click(
    function () {
        currentChrVisible = !currentChrVisible;

        var btnText = (currentChrVisible) ? "關閉名士頭像" : "顯示名士頭像";
        $(this).text(btnText);

        //var displaySetting = (currentChrVisible)?"block":"none";
        //$(".chr").css("display",displaySetting);

        var height = (currentChrVisible) ? "100px" : "0px";
        $(".chr").css("height", height);

    }
);

//攻略
$(".giftTips").click(
    function () {
        $(".giftTipsContent").toggle();
    }
);

// discordID
$(".dc").click(
    function () {
        var copyText = "lis#5203";
        navigator.clipboard.writeText(copyText);
        $(this).find(".tip").text("成功複製 : " + copyText);
    }
);

$(".dc").mouseout(
    function () {
        $(this).find(".tip").text("複製到剪貼簿");
    }
)

//禮物描述
var openGiftStory = "";
var openedGiftStory = "";
var isStoryPopup = false;
//scroll >> check story status
$(".gift").click(
    function () {
        var giftName = $(this).parent().attr("gift");
        if (giftName in giftStory) {
            openGiftStory = giftName;
            openPopup(giftName, giftStory[giftName]);
        }

    }
);

function checkGiftStoryStatus() {
    if (!isStoryPopup) return;
    if (openGiftStory != openedGiftStory) {
        openedGiftStory = openGiftStory;
    } else {
        openGiftStory = "";
        openedGiftStory = "";
        closePopup();
    }
}

function openPopup($title, $story) {
    $(".popup").find(".pTitle").text($title);
    $(".popup").find(".pStory").text($story);
    if (!isStoryPopup) {
        $(".popup").css("display", "block");
        isStoryPopup = true;
    }
}

function closePopup() {
    $(".popup").find(".pTitle").text("");
    $(".popup").find(".pStory").text("");
    $(".popup").css("display", "none");
    isStoryPopup = false;
}

//chr list
//todo filterlist>url parameter
function setUpChrList() {
    //ur ssr sr r
    chrURNameList.forEach(function (value) {
        var chrHtml = preChrCheckBox.replaceAll("{{NAME}}", value);
        $(".chrList.ur").append(chrHtml);
    });
    chrSSRNameList.forEach(function (value) {
        var chrHtml = preChrCheckBox.replaceAll("{{NAME}}", value);
        $(".chrList.ssr").append(chrHtml);
    });
    chrSRNameList.forEach(function (value) {
        var chrHtml = preChrCheckBox.replaceAll("{{NAME}}", value);
        $(".chrList.sr").append(chrHtml);
    });
    chrRNameList.forEach(function (value) {
        var chrHtml = preChrCheckBox.replaceAll("{{NAME}}", value);
        $(".chrList.r").append(chrHtml);
    });
    //expend only UR
    $(".ssr").css("display", "none");
    $(".sr").css("display", "none");
    $(".r").css("display", "none");
}

$(".toggleChrListBtn").click(
    function () {
        toggleChrList();
    }
)

function toggleChrList(force) {
    if (filterOn) return;
    if (force != undefined) {
        showChrList = force;
    } else {
        showChrList = !showChrList;
    }
    var chrPanel = $(".toggleChrListBtn").siblings(".chrPanel");
    var listBtn = $(".toggleChrListBtn").parent();
    listBtn.css("background-color", showChrList ? "#e76f51" : "#e0e0e0");
    listBtn.css("color", showChrList ? "#ededed" : "black");
    chrPanel.css("display", showChrList ? "block" : "none");
}

$(".chrListResetBtn").click(
    function () {
        $(".chrCB").prop("checked", false);
    }
)

$(".chrListRarity").click(
    function () {
        var t = $(this).text();
        if ($(this).attr("expand") == "true") {
            $(this).attr("expand", "false");
            $(this).text(t.replace("-", "+"));
            $("." + $(this).attr("rarity")).css("display", "none");
        } else {
            $(this).attr("expand", "true");
            $(this).text(t.replace("+", "-"));
            $("." + $(this).attr("rarity")).css("display", "block");
        }
    }
)

//filter
function enableFilter() {
    toggleChrList(false);
    filterOn = true;
    $(".filterChr").css("background-color", "#e76f51");
    $(".filterChr").css("color", "#ededed");
    $(".chrListBtn").css("display", "none");
    //display all itemPanel
    Object.values(rarity).forEach((r) => {
        $("." + r.color).css("display", "flex");
    });
    $(".rBtn").css("display", "none");
    $(".lBtn").css("display", "none");

    //chr filter
    var filterArray = [];
    $("input:checkbox:checked").each(function (index) {
        var chrName = $(this).attr("id");
        filterArray.push(chrName);
    });
    var title = "選取名士:";
    chrFilterURL = pageUrl + "?filter=";
    filterArray.forEach(function (value) {
        title = title + " " + value;
        chrFilterURL = chrFilterURL + value + ","
    });
    if (filterArray.length == 0) {
        title = title + " (無選取名士)";
        $(".filterURLCopy").css("display", "none");
    } else {
        $(".filterURLCopy").css("display", "block");
    }
    $(".title").text(title);
    $(".giftChr").each(function (index) {
        var name = $(this).attr("name");
        if (!filterArray.includes(name)) {
            $(this).css("display", "none");
        }
    });
}

function disableFilter() {
    filterOn = false;
    $(".filterChr").css("background-color", "#e0e0e0");
    $(".filterChr").css("color", "black");
    $(".chrListBtn").css("display", "block");
    $(".filterURLCopy").css("display", "none");
    //display default itemPanel and hide others
    Object.values(rarity).forEach((r) => {
        $("." + r.color).css("display", "none");
    });
    $(".rBtn").css("display", "block");
    $(".lBtn").css("display", "block");
    updateRarity(currentRarity);
    //chr filter
    $(".giftChr").each(function (index) {
        $(this).css("display", "block");
    });
}

$(".filterChr").click(
    function () {
        if (filterOn) {
            disableFilter();
        }
        else {
            enableFilter();
        }
    }
);

function checkUrlFilter() {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('filter')) {
        var filterList = searchParams.get('filter').split(',');
        if (filterList.length < 2) return;
        $('.chrCB').each(
            function () {
                if (filterList.includes($(this).attr('id'))) {
                    $(this).prop('checked', true);
                }
            }
        )

        enableFilter();
    }
}

// filterURLCopy
$(".filterURLCopy").click(
    function () {
        navigator.clipboard.writeText(chrFilterURL);
        $(this).find(".tip").text("已複製到剪貼簿!");
    }
);

$(".filterURLCopy").mouseout(
    function () {
        $(this).find(".tip").text("複製到剪貼簿");
    }
);

//event
$("body").click(
    function () {
        checkGiftStoryStatus();
    }
);

$(window).bind('mousewheel DOMMouseScroll', function (event) {
    checkGiftStoryStatus();
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // scroll up
    }
    else {
        // scroll down
    }
});

