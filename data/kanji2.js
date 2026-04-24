// 小学2年生 漢字学習データ（160文字）
// kanji    : 漢字
// reading  : 読み（TTS用・代表訓読み）
// meaning  : 意味ラベル（イラスト代替テキスト用）
// category : 分類タグ
// bushu    : 部首
// image    : イラストパス（未用意はnull）
// related  : 誤答候補プール（視覚的類似・カテゴリー類似・熟語類似）

const KANJI_DATA = [
  {
    kanji: "東",
    reading: "ひがし",
    meaning: "東（ひがし）",
    category: "方角",
    bushu: "木",
    image: null,
    related: ["西", "南", "北", "束"]
  },
  {
    kanji: "西",
    reading: "にし",
    meaning: "西（にし）",
    category: "方角",
    bushu: "西",
    image: null,
    related: ["東", "南", "北", "酉"]
  },
  {
    kanji: "南",
    reading: "みなみ",
    meaning: "南（みなみ）",
    category: "方角",
    bushu: "十",
    image: null,
    related: ["北", "東", "西", "楠"]
  },
  {
    kanji: "北",
    reading: "きた",
    meaning: "北（きた）",
    category: "方角",
    bushu: "匕",
    image: null,
    related: ["南", "東", "西", "背"]
  },
  {
    kanji: "春",
    reading: "はる",
    meaning: "春（はる）",
    category: "季節",
    bushu: "日",
    image: null,
    related: ["夏", "秋", "冬", "椿"]
  },
  {
    kanji: "夏",
    reading: "なつ",
    meaning: "夏（なつ）",
    category: "季節",
    bushu: "夂",
    image: null,
    related: ["春", "秋", "冬", "夃"]
  },
  {
    kanji: "秋",
    reading: "あき",
    meaning: "秋（あき）",
    category: "季節",
    bushu: "禾",
    image: null,
    related: ["春", "夏", "冬", "愁"]
  },
  {
    kanji: "冬",
    reading: "ふゆ",
    meaning: "冬（ふゆ）",
    category: "季節",
    bushu: "冫",
    image: null,
    related: ["春", "夏", "秋", "各"]
  },
  {
    kanji: "朝",
    reading: "あさ",
    meaning: "朝（あさ）",
    category: "時間",
    bushu: "月",
    image: null,
    related: ["昼", "夕", "夜", "潮"]
  },
  {
    kanji: "昼",
    reading: "ひる",
    meaning: "昼（ひる）",
    category: "時間",
    bushu: "日",
    image: null,
    related: ["朝", "夕", "夜", "尽"]
  },
  {
    kanji: "夜",
    reading: "よる",
    meaning: "夜（よる）",
    category: "時間",
    bushu: "夕",
    image: null,
    related: ["朝", "昼", "夕", "液"]
  },
  {
    kanji: "今",
    reading: "いま",
    meaning: "今（いま）",
    category: "時間",
    bushu: "人",
    image: null,
    related: ["昔", "前", "後", "令"]
  },
  {
    kanji: "週",
    reading: "しゅう",
    meaning: "週（しゅう）",
    category: "時間",
    bushu: "辶",
    image: null,
    related: ["曜", "時", "分", "遇"]
  },
  {
    kanji: "曜",
    reading: "よう",
    meaning: "曜日（ようび）",
    category: "時間",
    bushu: "日",
    image: null,
    related: ["週", "時", "分", "躍"]
  },
  {
    kanji: "時",
    reading: "じ",
    meaning: "時（じ）",
    category: "時間",
    bushu: "日",
    image: null,
    related: ["分", "秒", "曜", "持"]
  },
  {
    kanji: "分",
    reading: "ふん",
    meaning: "分（ふん）",
    category: "時間",
    bushu: "刀",
    image: null,
    related: ["時", "秒", "半", "粉"]
  },
  {
    kanji: "風",
    reading: "かぜ",
    meaning: "風（かぜ）",
    category: "自然",
    bushu: "風",
    image: null,
    related: ["雨", "雪", "雲", "凬"]
  },
  {
    kanji: "雪",
    reading: "ゆき",
    meaning: "雪（ゆき）",
    category: "自然",
    bushu: "雨",
    image: null,
    related: ["雨", "風", "氷", "霜"]
  },
  {
    kanji: "雲",
    reading: "くも",
    meaning: "雲（くも）",
    category: "自然",
    bushu: "雨",
    image: null,
    related: ["雨", "雪", "空", "運"]
  },
  {
    kanji: "海",
    reading: "うみ",
    meaning: "海（うみ）",
    category: "自然",
    bushu: "氵",
    image: null,
    related: ["川", "山", "池", "毎"]
  },
  {
    kanji: "池",
    reading: "いけ",
    meaning: "池（いけ）",
    category: "自然",
    bushu: "氵",
    image: null,
    related: ["海", "川", "湖", "地"]
  },
  {
    kanji: "岩",
    reading: "いわ",
    meaning: "岩（いわ）",
    category: "自然",
    bushu: "山",
    image: null,
    related: ["石", "山", "谷", "巌"]
  },
  {
    kanji: "星",
    reading: "ほし",
    meaning: "星（ほし）",
    category: "自然",
    bushu: "日",
    image: null,
    related: ["月", "空", "光", "晶"]
  },
  {
    kanji: "光",
    reading: "ひかり",
    meaning: "光（ひかり）",
    category: "自然",
    bushu: "儿",
    image: null,
    related: ["星", "火", "色", "晃"]
  },
  {
    kanji: "色",
    reading: "いろ",
    meaning: "色（いろ）",
    category: "自然",
    bushu: "色",
    image: null,
    related: ["光", "形", "絵", "巴"]
  },
  {
    kanji: "鳥",
    reading: "とり",
    meaning: "鳥（とり）",
    category: "生き物",
    bushu: "鳥",
    image: null,
    related: ["魚", "虫", "馬", "島"]
  },
  {
    kanji: "魚",
    reading: "さかな",
    meaning: "魚（さかな）",
    category: "生き物",
    bushu: "魚",
    image: null,
    related: ["鳥", "虫", "肉", "漁"]
  },
  {
    kanji: "馬",
    reading: "うま",
    meaning: "馬（うま）",
    category: "生き物",
    bushu: "馬",
    image: null,
    related: ["牛", "鳥", "犬", "騎"]
  },
  {
    kanji: "牛",
    reading: "うし",
    meaning: "牛（うし）",
    category: "生き物",
    bushu: "牛",
    image: null,
    related: ["馬", "羊", "肉", "件"]
  },
  {
    kanji: "羽",
    reading: "はね",
    meaning: "羽（はね）",
    category: "生き物",
    bushu: "羽",
    image: null,
    related: ["鳥", "毛", "翼", "習"]
  },
  {
    kanji: "毛",
    reading: "け",
    meaning: "毛（け）",
    category: "生き物",
    bushu: "毛",
    image: null,
    related: ["羽", "皮", "糸", "耗"]
  },
  {
    kanji: "茶",
    reading: "ちゃ",
    meaning: "茶（ちゃ）",
    category: "植物",
    bushu: "艸",
    image: null,
    related: ["米", "麦", "食", "荼"]
  },
  {
    kanji: "米",
    reading: "こめ",
    meaning: "米（こめ）",
    category: "食べ物",
    bushu: "米",
    image: null,
    related: ["麦", "茶", "食", "粉"]
  },
  {
    kanji: "麦",
    reading: "むぎ",
    meaning: "麦（むぎ）",
    category: "食べ物",
    bushu: "麦",
    image: null,
    related: ["米", "茶", "食", "来"]
  },
  {
    kanji: "肉",
    reading: "にく",
    meaning: "肉（にく）",
    category: "食べ物",
    bushu: "肉",
    image: null,
    related: ["魚", "米", "食", "内"]
  },
  {
    kanji: "頭",
    reading: "あたま",
    meaning: "頭（あたま）",
    category: "体",
    bushu: "頁",
    image: null,
    related: ["顔", "首", "足", "豆"]
  },
  {
    kanji: "顔",
    reading: "かお",
    meaning: "顔（かお）",
    category: "体",
    bushu: "頁",
    image: null,
    related: ["頭", "首", "目", "彦"]
  },
  {
    kanji: "首",
    reading: "くび",
    meaning: "首（くび）",
    category: "体",
    bushu: "首",
    image: null,
    related: ["頭", "顔", "体", "道"]
  },
  {
    kanji: "体",
    reading: "からだ",
    meaning: "体（からだ）",
    category: "体",
    bushu: "人",
    image: null,
    related: ["首", "足", "手", "休"]
  },
  {
    kanji: "心",
    reading: "こころ",
    meaning: "心（こころ）",
    category: "体",
    bushu: "心",
    image: null,
    related: ["体", "気", "力", "必"]
  },
  {
    kanji: "声",
    reading: "こえ",
    meaning: "声（こえ）",
    category: "体",
    bushu: "士",
    image: null,
    related: ["音", "歌", "話", "磬"]
  },
  {
    kanji: "万",
    reading: "まん",
    meaning: "万（まん）",
    category: "数",
    bushu: "一",
    image: null,
    related: ["千", "百", "億", "方"]
  },
  {
    kanji: "半",
    reading: "はん",
    meaning: "半分（はんぶん）",
    category: "数",
    bushu: "十",
    image: null,
    related: ["分", "全", "多", "牛"]
  },
  {
    kanji: "多",
    reading: "おおい",
    meaning: "多い（おおい）",
    category: "数",
    bushu: "夕",
    image: null,
    related: ["少", "半", "全", "夕"]
  },
  {
    kanji: "少",
    reading: "すくない",
    meaning: "少ない（すくない）",
    category: "数",
    bushu: "小",
    image: null,
    related: ["多", "小", "半", "沙"]
  },
  {
    kanji: "丸",
    reading: "まる",
    meaning: "丸い（まるい）",
    category: "形",
    bushu: "丿",
    image: null,
    related: ["四", "角", "直", "九"]
  },
  {
    kanji: "直",
    reading: "まっすぐ",
    meaning: "直線（ちょくせん）",
    category: "形",
    bushu: "目",
    image: null,
    related: ["丸", "角", "曲", "値"]
  },
  {
    kanji: "角",
    reading: "かど",
    meaning: "角（かど）",
    category: "形",
    bushu: "角",
    image: null,
    related: ["丸", "直", "線", "用"]
  },
  {
    kanji: "太",
    reading: "ふとい",
    meaning: "太い（ふとい）",
    category: "形",
    bushu: "大",
    image: null,
    related: ["細", "長", "短", "犬"]
  },
  {
    kanji: "細",
    reading: "ほそい",
    meaning: "細い（ほそい）",
    category: "形",
    bushu: "糸",
    image: null,
    related: ["太", "長", "短", "組"]
  },
  {
    kanji: "長",
    reading: "ながい",
    meaning: "長い（ながい）",
    category: "形",
    bushu: "長",
    image: null,
    related: ["短", "太", "細", "張"]
  },
  {
    kanji: "広",
    reading: "ひろい",
    meaning: "広い（ひろい）",
    category: "形",
    bushu: "广",
    image: null,
    related: ["狭", "大", "小", "鉱"]
  },
  {
    kanji: "高",
    reading: "たかい",
    meaning: "高い（たかい）",
    category: "形",
    bushu: "高",
    image: null,
    related: ["低", "大", "広", "享"]
  },
  {
    kanji: "国",
    reading: "くに",
    meaning: "国（くに）",
    category: "場所",
    bushu: "囗",
    image: null,
    related: ["市", "町", "村", "玉"]
  },
  {
    kanji: "市",
    reading: "し",
    meaning: "市（し）",
    category: "場所",
    bushu: "巾",
    image: null,
    related: ["国", "町", "村", "帝"]
  },
  {
    kanji: "室",
    reading: "しつ",
    meaning: "部屋（へや）",
    category: "場所",
    bushu: "宀",
    image: null,
    related: ["家", "門", "戸", "至"]
  },
  {
    kanji: "家",
    reading: "いえ",
    meaning: "家（いえ）",
    category: "場所",
    bushu: "宀",
    image: null,
    related: ["室", "門", "店", "豕"]
  },
  {
    kanji: "門",
    reading: "もん",
    meaning: "門（もん）",
    category: "場所",
    bushu: "門",
    image: null,
    related: ["家", "室", "戸", "問"]
  },
  {
    kanji: "店",
    reading: "みせ",
    meaning: "お店（おみせ）",
    category: "場所",
    bushu: "广",
    image: null,
    related: ["家", "室", "市", "占"]
  },
  {
    kanji: "道",
    reading: "みち",
    meaning: "道（みち）",
    category: "場所",
    bushu: "辶",
    image: null,
    related: ["通", "走", "歩", "首"]
  },
  {
    kanji: "通",
    reading: "とおる",
    meaning: "通る（とおる）",
    category: "場所",
    bushu: "辶",
    image: null,
    related: ["道", "走", "行", "甬"]
  },
  {
    kanji: "場",
    reading: "ば",
    meaning: "場所（ばしょ）",
    category: "場所",
    bushu: "土",
    image: null,
    related: ["地", "所", "広", "湯"]
  },
  {
    kanji: "地",
    reading: "ち",
    meaning: "土地（とち）",
    category: "場所",
    bushu: "土",
    image: null,
    related: ["場", "野", "国", "池"]
  },
  {
    kanji: "野",
    reading: "の",
    meaning: "野原（のはら）",
    category: "場所",
    bushu: "里",
    image: null,
    related: ["地", "山", "谷", "予"]
  },
  {
    kanji: "谷",
    reading: "たに",
    meaning: "谷（たに）",
    category: "場所",
    bushu: "谷",
    image: null,
    related: ["野", "山", "岩", "容"]
  },
  {
    kanji: "父",
    reading: "ちち",
    meaning: "お父さん",
    category: "家族",
    bushu: "父",
    image: null,
    related: ["母", "兄", "姉", "交"]
  },
  {
    kanji: "母",
    reading: "はは",
    meaning: "お母さん",
    category: "家族",
    bushu: "母",
    image: null,
    related: ["父", "姉", "妹", "毎"]
  },
  {
    kanji: "兄",
    reading: "あに",
    meaning: "お兄さん",
    category: "家族",
    bushu: "人",
    image: null,
    related: ["弟", "父", "姉", "克"]
  },
  {
    kanji: "弟",
    reading: "おとうと",
    meaning: "弟（おとうと）",
    category: "家族",
    bushu: "弓",
    image: null,
    related: ["兄", "妹", "父", "第"]
  },
  {
    kanji: "姉",
    reading: "あね",
    meaning: "お姉さん",
    category: "家族",
    bushu: "女",
    image: null,
    related: ["妹", "母", "兄", "市"]
  },
  {
    kanji: "妹",
    reading: "いもうと",
    meaning: "妹（いもうと）",
    category: "家族",
    bushu: "女",
    image: null,
    related: ["姉", "弟", "母", "末"]
  },
  {
    kanji: "友",
    reading: "とも",
    meaning: "友だち（ともだち）",
    category: "人",
    bushu: "又",
    image: null,
    related: ["仲", "人", "話", "反"]
  },
  {
    kanji: "親",
    reading: "おや",
    meaning: "親（おや）",
    category: "家族",
    bushu: "見",
    image: null,
    related: ["父", "母", "家", "新"]
  },
  {
    kanji: "科",
    reading: "か",
    meaning: "科目（かもく）",
    category: "学校",
    bushu: "禾",
    image: null,
    related: ["教", "算", "語", "料"]
  },
  {
    kanji: "算",
    reading: "さん",
    meaning: "計算（けいさん）",
    category: "学校",
    bushu: "竹",
    image: null,
    related: ["数", "計", "科", "筆"]
  },
  {
    kanji: "数",
    reading: "かず",
    meaning: "数（かず）",
    category: "学校",
    bushu: "攴",
    image: null,
    related: ["算", "計", "字", "婁"]
  },
  {
    kanji: "語",
    reading: "ご",
    meaning: "言葉（ことば）",
    category: "学校",
    bushu: "言",
    image: null,
    related: ["話", "読", "書", "吾"]
  },
  {
    kanji: "話",
    reading: "はなし",
    meaning: "話す（はなす）",
    category: "学校",
    bushu: "言",
    image: null,
    related: ["語", "読", "聞", "舌"]
  },
  {
    kanji: "読",
    reading: "よむ",
    meaning: "読む（よむ）",
    category: "学校",
    bushu: "言",
    image: null,
    related: ["書", "語", "話", "売"]
  },
  {
    kanji: "書",
    reading: "かく",
    meaning: "書く（かく）",
    category: "学校",
    bushu: "曰",
    image: null,
    related: ["読", "語", "紙", "者"]
  },
  {
    kanji: "聞",
    reading: "きく",
    meaning: "聞く（きく）",
    category: "学校",
    bushu: "耳",
    image: null,
    related: ["話", "音", "声", "問"]
  },
  {
    kanji: "教",
    reading: "おしえる",
    meaning: "教える（おしえる）",
    category: "学校",
    bushu: "攴",
    image: null,
    related: ["習", "学", "科", "孝"]
  },
  {
    kanji: "計",
    reading: "はかる",
    meaning: "計る（はかる）",
    category: "学校",
    bushu: "言",
    image: null,
    related: ["算", "数", "時", "十"]
  },
  {
    kanji: "図",
    reading: "ず",
    meaning: "図（ず）",
    category: "学校",
    bushu: "囗",
    image: null,
    related: ["絵", "形", "地", "回"]
  },
  {
    kanji: "工",
    reading: "こう",
    meaning: "工作（こうさく）",
    category: "学校",
    bushu: "工",
    image: null,
    related: ["作", "図", "画", "巧"]
  },
  {
    kanji: "画",
    reading: "が",
    meaning: "絵画（かいが）",
    category: "学校",
    bushu: "田",
    image: null,
    related: ["絵", "図", "色", "劃"]
  },
  {
    kanji: "絵",
    reading: "え",
    meaning: "絵（え）",
    category: "学校",
    bushu: "糸",
    image: null,
    related: ["画", "図", "色", "会"]
  },
  {
    kanji: "紙",
    reading: "かみ",
    meaning: "紙（かみ）",
    category: "学校",
    bushu: "糸",
    image: null,
    related: ["本", "書", "絵", "氏"]
  },
  {
    kanji: "行",
    reading: "いく",
    meaning: "行く（いく）",
    category: "動作",
    bushu: "行",
    image: null,
    related: ["来", "帰", "走", "航"]
  },
  {
    kanji: "来",
    reading: "くる",
    meaning: "来る（くる）",
    category: "動作",
    bushu: "木",
    image: null,
    related: ["行", "帰", "入", "麦"]
  },
  {
    kanji: "帰",
    reading: "かえる",
    meaning: "帰る（かえる）",
    category: "動作",
    bushu: "巾",
    image: null,
    related: ["行", "来", "出", "師"]
  },
  {
    kanji: "走",
    reading: "はしる",
    meaning: "走る（はしる）",
    category: "動作",
    bushu: "走",
    image: null,
    related: ["歩", "飛", "通", "赤"]
  },
  {
    kanji: "歩",
    reading: "あるく",
    meaning: "歩く（あるく）",
    category: "動作",
    bushu: "止",
    image: null,
    related: ["走", "通", "道", "渉"]
  },
  {
    kanji: "食",
    reading: "たべる",
    meaning: "食べる（たべる）",
    category: "動作",
    bushu: "食",
    image: null,
    related: ["飲", "肉", "米", "良"]
  },
  {
    kanji: "作",
    reading: "つくる",
    meaning: "作る（つくる）",
    category: "動作",
    bushu: "人",
    image: null,
    related: ["工", "画", "書", "昨"]
  },
  {
    kanji: "売",
    reading: "うる",
    meaning: "売る（うる）",
    category: "動作",
    bushu: "士",
    image: null,
    related: ["買", "店", "市", "読"]
  },
  {
    kanji: "買",
    reading: "かう",
    meaning: "買う（かう）",
    category: "動作",
    bushu: "貝",
    image: null,
    related: ["売", "店", "市", "買"]
  },
  {
    kanji: "引",
    reading: "ひく",
    meaning: "引く（ひく）",
    category: "動作",
    bushu: "弓",
    image: null,
    related: ["押", "弓", "矢", "弔"]
  },
  {
    kanji: "合",
    reading: "あう",
    meaning: "合う（あう）",
    category: "動作",
    bushu: "口",
    image: null,
    related: ["分", "入", "会", "今"]
  },
  {
    kanji: "会",
    reading: "あう",
    meaning: "会う（あう）",
    category: "動作",
    bushu: "人",
    image: null,
    related: ["合", "話", "友", "今"]
  },
  {
    kanji: "切",
    reading: "きる",
    meaning: "切る（きる）",
    category: "動作",
    bushu: "刀",
    image: null,
    related: ["分", "引", "合", "七"]
  },
  {
    kanji: "止",
    reading: "とまる",
    meaning: "止まる（とまる）",
    category: "動作",
    bushu: "止",
    image: null,
    related: ["歩", "走", "立", "正"]
  },
  {
    kanji: "思",
    reading: "おもう",
    meaning: "思う（おもう）",
    category: "動作",
    bushu: "心",
    image: null,
    related: ["考", "知", "心", "恩"]
  },
  {
    kanji: "考",
    reading: "かんがえる",
    meaning: "考える（かんがえる）",
    category: "動作",
    bushu: "老",
    image: null,
    related: ["思", "知", "心", "老"]
  },
  {
    kanji: "知",
    reading: "しる",
    meaning: "知る（しる）",
    category: "動作",
    bushu: "矢",
    image: null,
    related: ["思", "考", "学", "矢"]
  },
  {
    kanji: "記",
    reading: "しるす",
    meaning: "記す（しるす）",
    category: "動作",
    bushu: "言",
    image: null,
    related: ["書", "読", "語", "己"]
  },
  {
    kanji: "言",
    reading: "いう",
    meaning: "言う（いう）",
    category: "動作",
    bushu: "言",
    image: null,
    related: ["話", "語", "聞", "訓"]
  },
  {
    kanji: "鳴",
    reading: "なく",
    meaning: "鳴く（なく）",
    category: "動作",
    bushu: "鳥",
    image: null,
    related: ["声", "音", "歌", "名"]
  },
  {
    kanji: "歌",
    reading: "うた",
    meaning: "歌（うた）",
    category: "動作",
    bushu: "欠",
    image: null,
    related: ["声", "音", "鳴", "哥"]
  },
  {
    kanji: "明",
    reading: "あかるい",
    meaning: "明るい（あかるい）",
    category: "様子",
    bushu: "日",
    image: null,
    related: ["暗", "光", "白", "盟"]
  },
  {
    kanji: "新",
    reading: "あたらしい",
    meaning: "新しい（あたらしい）",
    category: "様子",
    bushu: "斤",
    image: null,
    related: ["古", "若", "元", "親"]
  },
  {
    kanji: "古",
    reading: "ふるい",
    meaning: "古い（ふるい）",
    category: "様子",
    bushu: "口",
    image: null,
    related: ["新", "昔", "旧", "故"]
  },
  {
    kanji: "強",
    reading: "つよい",
    meaning: "強い（つよい）",
    category: "様子",
    bushu: "弓",
    image: null,
    related: ["弱", "大", "力", "弘"]
  },
  {
    kanji: "弱",
    reading: "よわい",
    meaning: "弱い（よわい）",
    category: "様子",
    bushu: "弓",
    image: null,
    related: ["強", "小", "細", "粥"]
  },
  {
    kanji: "元",
    reading: "もと",
    meaning: "元（もと）",
    category: "様子",
    bushu: "儿",
    image: null,
    related: ["本", "原", "始", "兄"]
  },
  {
    kanji: "原",
    reading: "はら",
    meaning: "原っぱ（はらっぱ）",
    category: "場所",
    bushu: "厂",
    image: null,
    related: ["野", "元", "本", "源"]
  },
  {
    kanji: "刀",
    reading: "かたな",
    meaning: "刀（かたな）",
    category: "道具",
    bushu: "刀",
    image: null,
    related: ["矢", "弓", "引", "力"]
  },
  {
    kanji: "弓",
    reading: "ゆみ",
    meaning: "弓（ゆみ）",
    category: "道具",
    bushu: "弓",
    image: null,
    related: ["矢", "刀", "引", "弔"]
  },
  {
    kanji: "矢",
    reading: "や",
    meaning: "矢（や）",
    category: "道具",
    bushu: "矢",
    image: null,
    related: ["弓", "刀", "知", "疾"]
  },
  {
    kanji: "船",
    reading: "ふね",
    meaning: "船（ふね）",
    category: "乗り物",
    bushu: "舟",
    image: null,
    related: ["電", "車", "飛", "般"]
  },
  {
    kanji: "電",
    reading: "でん",
    meaning: "電気（でんき）",
    category: "道具",
    bushu: "雨",
    image: null,
    related: ["光", "車", "船", "雷"]
  },
  {
    kanji: "台",
    reading: "だい",
    meaning: "台（だい）",
    category: "道具",
    bushu: "口",
    image: null,
    related: ["上", "立", "机", "始"]
  },
  {
    kanji: "戸",
    reading: "と",
    meaning: "戸（と）",
    category: "道具",
    bushu: "戸",
    image: null,
    related: ["門", "室", "家", "所"]
  },
  {
    kanji: "線",
    reading: "せん",
    meaning: "線（せん）",
    category: "形",
    bushu: "糸",
    image: null,
    related: ["角", "丸", "道", "泉"]
  },
  {
    kanji: "点",
    reading: "てん",
    meaning: "点（てん）",
    category: "形",
    bushu: "火",
    image: null,
    related: ["線", "丸", "角", "占"]
  },
  {
    kanji: "前",
    reading: "まえ",
    meaning: "前（まえ）",
    category: "方向",
    bushu: "刀",
    image: null,
    related: ["後", "上", "下", "剪"]
  },
  {
    kanji: "後",
    reading: "うしろ",
    meaning: "後ろ（うしろ）",
    category: "方向",
    bushu: "彳",
    image: null,
    related: ["前", "上", "下", "幻"]
  },
  {
    kanji: "内",
    reading: "うち",
    meaning: "内（うち）",
    category: "方向",
    bushu: "冂",
    image: null,
    related: ["外", "中", "家", "肉"]
  },
  {
    kanji: "外",
    reading: "そと",
    meaning: "外（そと）",
    category: "方向",
    bushu: "夕",
    image: null,
    related: ["内", "中", "出", "夕"]
  },
  {
    kanji: "間",
    reading: "あいだ",
    meaning: "間（あいだ）",
    category: "方向",
    bushu: "門",
    image: null,
    related: ["中", "内", "外", "問"]
  },
  {
    kanji: "同",
    reading: "おなじ",
    meaning: "同じ（おなじ）",
    category: "様子",
    bushu: "口",
    image: null,
    related: ["合", "等", "一", "向"]
  },
  {
    kanji: "当",
    reading: "あたる",
    meaning: "当たる（あたる）",
    category: "様子",
    bushu: "田",
    image: null,
    related: ["合", "正", "的", "堂"]
  },
  {
    kanji: "番",
    reading: "ばん",
    meaning: "番号（ばんごう）",
    category: "数",
    bushu: "田",
    image: null,
    related: ["号", "数", "順", "審"]
  },
  {
    kanji: "公",
    reading: "こう",
    meaning: "公園（こうえん）",
    category: "場所",
    bushu: "八",
    image: null,
    related: ["国", "市", "広", "私"]
  },
  {
    kanji: "用",
    reading: "よう",
    meaning: "用（よう）",
    category: "動作",
    bushu: "用",
    image: null,
    related: ["角", "工", "作", "甬"]
  },
  {
    kanji: "形",
    reading: "かたち",
    meaning: "形（かたち）",
    category: "形",
    bushu: "彡",
    image: null,
    related: ["色", "絵", "丸", "開"]
  },
  {
    kanji: "才",
    reading: "さい",
    meaning: "才能（さいのう）",
    category: "人",
    bushu: "手",
    image: null,
    related: ["力", "知", "技", "材"]
  },
  {
    kanji: "汽",
    reading: "き",
    meaning: "汽車（きしゃ）",
    category: "乗り物",
    bushu: "氵",
    image: null,
    related: ["車", "船", "電", "気"]
  },
  {
    kanji: "活",
    reading: "かつ",
    meaning: "生活（せいかつ）",
    category: "動作",
    bushu: "氵",
    image: null,
    related: ["生", "動", "働", "舌"]
  },
  {
    kanji: "社",
    reading: "しゃ",
    meaning: "会社（かいしゃ）",
    category: "場所",
    bushu: "示",
    image: null,
    related: ["会", "市", "店", "土"]
  },
  {
    kanji: "回",
    reading: "まわる",
    meaning: "回る（まわる）",
    category: "動作",
    bushu: "囗",
    image: null,
    related: ["図", "国", "丸", "囲"]
  },
  {
    kanji: "楽",
    reading: "たのしい",
    meaning: "楽しい（たのしい）",
    category: "様子",
    bushu: "木",
    image: null,
    related: ["明", "喜", "元", "薬"]
  },
  {
    kanji: "理",
    reading: "り",
    meaning: "理科（りか）",
    category: "学校",
    bushu: "王",
    image: null,
    related: ["科", "算", "地", "里"]
  },
  {
    kanji: "組",
    reading: "くみ",
    meaning: "組（くみ）",
    category: "学校",
    bushu: "糸",
    image: null,
    related: ["級", "番", "科", "祖"]
  },
  {
    kanji: "何",
    reading: "なに",
    meaning: "何（なに）",
    category: "言葉",
    bushu: "人",
    image: null,
    related: ["誰", "言", "話", "荷"]
  },
  {
    kanji: "毎",
    reading: "まい",
    meaning: "毎日（まいにち）",
    category: "時間",
    bushu: "母",
    image: null,
    related: ["朝", "週", "回", "母"]
  },
  {
    kanji: "黒",
    reading: "くろ",
    meaning: "黒（くろ）",
    category: "色",
    bushu: "黒",
    image: null,
    related: ["白", "赤", "青", "墨"]
  },
  {
    kanji: "答",
    reading: "こたえ",
    meaning: "答え（こたえ）",
    category: "学校",
    bushu: "竹",
    image: null,
    related: ["問", "聞", "考", "合"]
  },
  {
    kanji: "寺",
    reading: "てら",
    meaning: "お寺（おてら）",
    category: "場所",
    bushu: "寸",
    image: null,
    related: ["家", "社", "門", "時"]
  },
  {
    kanji: "近",
    reading: "ちかい",
    meaning: "近い（ちかい）",
    category: "方向",
    bushu: "辶",
    image: null,
    related: ["遠", "道", "通", "斤"]
  },
  {
    kanji: "午",
    reading: "ご",
    meaning: "午前（ごぜん）",
    category: "時間",
    bushu: "十",
    image: null,
    related: ["朝", "昼", "夜", "牛"]
  },
  {
    kanji: "交",
    reading: "まじわる",
    meaning: "交わる（まじわる）",
    category: "動作",
    bushu: "亠",
    image: null,
    related: ["合", "通", "道", "父"]
  },
  {
    kanji: "里",
    reading: "さと",
    meaning: "里（さと）",
    category: "場所",
    bushu: "里",
    image: null,
    related: ["野", "村", "道", "理"]
  },
  {
    kanji: "方",
    reading: "ほう",
    meaning: "方向（ほうこう）",
    category: "方角",
    bushu: "方",
    image: null,
    related: ["東", "南", "北", "旅"]
  },
  {
    kanji: "園",
    reading: "えん",
    meaning: "公園（こうえん）",
    category: "場所",
    bushu: "囗",
    image: null,
    related: ["公", "野", "国", "遠"]
  },
  {
    kanji: "晴",
    reading: "はれ",
    meaning: "晴れ（はれ）",
    category: "自然",
    bushu: "日",
    image: null,
    related: ["雨", "雪", "雲", "青"]
  },
  {
    kanji: "自",
    reading: "じぶん",
    meaning: "自分（じぶん）",
    category: "人",
    bushu: "自",
    image: null,
    related: ["体", "分", "己", "目"]
  },
  {
    kanji: "黄",
    reading: "きいろ",
    meaning: "黄色（きいろ）",
    category: "色",
    bushu: "黄",
    image: null,
    related: ["黒", "白", "赤", "横"]
  },
  {
    kanji: "遠",
    reading: "とおい",
    meaning: "遠い（とおい）",
    category: "方向",
    bushu: "辶",
    image: null,
    related: ["近", "道", "通", "袁"]
  },
  {
    kanji: "京",
    reading: "きょう",
    meaning: "京都（きょうと）",
    category: "場所",
    bushu: "亠",
    image: null,
    related: ["国", "市", "都", "景"]
  }
];

// 重複除去フェイルセーフ
const seen_set = new Set();
const KANJI_DATA_UNIQUE = KANJI_DATA.filter(k => {
  if (seen_set.has(k.kanji)) return false;
  seen_set.add(k.kanji);
  return true;
});
