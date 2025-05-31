document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const holidaySelect = document.getElementById('holiday');
    const senderInput = document.getElementById('sender');
    const generateBtn = document.getElementById('generate-btn');
    const downloadBtn = document.getElementById('download-btn');
    const cardPreview = document.getElementById('card-preview');
    const holidayTitle = document.querySelector('.holiday-title');
    const holidayIcon = document.querySelector('.holiday-icon');
    const greetingText = document.getElementById('greeting-text');
    const senderName = document.getElementById('sender-name');
    const currentDate = document.getElementById('current-date');

    // Holiday icons mapping
    const holidayIcons = {
        // 传统节日
        'spring-festival': '🧧',
        'lantern-festival': '🏮',
        'qingming-festival': '🌱',
        'dragon-boat': '🐉',
        'qixi-festival': '🌌',
        'mid-autumn': '🌕',
        'double-ninth': '🍂',
        'winter-solstice': '❄️',
        // 其他节日
        'new-year': '🎆',
        'valentine-day': '💘',
        'womens-day': '🌹',
        'april-fools': '🃏',
        'mothers-day': '💐',
        'childrens-day': '🎈',
        'fathers-day': '👔',
        'labor-day': '🔨',
        'teachers-day': '📚',
        'national-day': '🇨🇳',
        'halloween': '🎃',
        'thanksgiving': '🦃',
        'christmas': '🎄',
        'birthday': '🎂'
    };

    // Holiday titles mapping
    const holidayTitles = {
        // 传统节日
        'spring-festival': '春节快乐',
        'lantern-festival': '元宵节快乐',
        'qingming-festival': '清明追思',
        'dragon-boat': '端午节快乐',
        'qixi-festival': '七夕快乐',
        'mid-autumn': '中秋节快乐',
        'double-ninth': '重阳节快乐',
        'winter-solstice': '冬至安康',
        // 其他节日
        'new-year': '新年快乐',
        'valentine-day': '情人节快乐',
        'womens-day': '妇女节快乐',
        'april-fools': '愚人节快乐',
        'mothers-day': '母亲节快乐',
        'childrens-day': '儿童节快乐',
        'fathers-day': '父亲节快乐',
        'labor-day': '劳动节快乐',
        'teachers-day': '教师节快乐',
        'national-day': '国庆节快乐',
        'halloween': '万圣节快乐',
        'thanksgiving': '感恩节快乐',
        'christmas': '圣诞快乐',
        'birthday': '生日快乐'
    };

    // Greeting templates for each holiday
    const greetingTemplates = {
        // 传统节日
        'spring-festival': [
            '春节到，福气到！祝你新春快乐，阖家幸福，财源广进，万事如意！',
            '爆竹声中一岁除，春风送暖入屠苏。祝你在新的一年里福寿安康，事业兴旺！',
            '金龙献瑞，紫气东来。愿你在新的一年里龙马精神，龙腾虎跃，好运连连！',
            '辞旧迎新之际，祝福你和家人团团圆圆，共享天伦之乐，喜气洋洋！',
            '春节是中华民族的传统佳节，愿你在这美好的日子里，感受浓浓的年味和亲情！',
            '除夕夜的钟声即将敲响，愿你的生活如烟花般绚烂多彩，美不胜收！',
            '爆竹声声辞旧岁，喜气洋洋迎新春。祝愿你在新的一年里事业有成，家庭幸福！',
            '新春佳节，万象更新。祝你在龙年里龙行龘龘，龙腾四海，龙飞凤舞！',
            '值此新春佳节，衷心祝福你和家人幸福安康，万事如意，吉祥如意！',
            '辞旧迎新之际，愿你抛却过去的烦恼，迎接新一年的美好与希望！'
        ],
        'lantern-festival': [
            '元宵佳节，花好月圆。愿你的生活甜如汤圆，团团圆圆，幸福美满！',
            '明月高照，灯火辉煌。在这团圆的日子里，愿你和家人共享欢乐时光！',
            '元宵节到，祝福来到。愿你的生活像灯笼一样红红火火，像汤圆一样甜甜蜜蜜！',
            '正月十五闹元宵，灯火辉煌照天街。愿你的生活明亮如灯，温暖如光！',
            '元宵佳节吃汤圆，甜甜蜜蜜幸福年。祝愿你的生活甜如蜜，美如画！',
            '元宵赏月猜灯谜，欢声笑语伴左右。愿你和家人团团圆圆，其乐融融！',
            '一年中最圆的月亮，照耀着最美的祝福。元宵节快乐，阖家欢乐！',
            '千门万户曈曈日，总把新桃换旧符。元宵佳节，愿你新的一年红红火火！',
            '月上柳梢头，人约黄昏后。元宵佳节，愿你邂逅美好，收获幸福！',
            '花灯璀璨，月色如水。愿你在这美好的元宵之夜，感受传统文化的魅力！'
        ],
        'qingming-festival': [
            '清明时节雨纷纷，思念故人寄哀思。愿逝者安息，生者坚强。',
            '一束鲜花寄哀思，一缕清香表追忆。清明时节，愿故人在天堂安好。',
            '落花踏雨清明路，缅怀先人寄哀思。愿逝者安息，生者平安。',
            '青山依旧在，几度夕阳红。清明时节，愿故人在天堂微笑。',
            '细雨缠绵，丝丝思念。在这特殊的日子里，寄托我们对先人的敬意和追思。',
            '人间四月芳菲尽，山寺桃花始盛开。清明节，愿逝者安息，生者珍惜当下。',
            '清明时节，既是缅怀先人，也是感恩生活。愿你内心平静，怀揣感恩之心前行。',
            '草青青，雨蒙蒙，思念深深。愿先人在天堂安好，愿生者珍惜当下。',
            '清明节，不仅是对过去的缅怀，更是对未来的珍视。愿你继承先人的美德，创造美好的未来。',
            '柳絮飞，花儿谢，岁月静好。清明时节，愿你怀着感恩之心，珍惜眼前人。'
        ],
        'dragon-boat': [
            '端午安康！愿粽叶飘香的日子里，平安健康与你同在，幸福快乐伴你左右！',
            '端午节到，祝你像划龙舟一样，生活充满活力，事业勇往直前！',
            '艾叶飘香，粽香四溢。在这传统佳节，愿你吉祥如意，健康平安！',
            '端午佳节，祝你身体健康，家庭和睦，事业顺利，好运连连！',
            '五月五，是端阳。插艾叶，戴香囊。愿你平安健康，快乐无疆！',
            '端午节，粽飘香。驱瘟疫，保安康。祝你一生平安，万事如意！',
            '屈原的忠诚，龙舟的勇猛，艾草的清香，菖蒲的正气，都是端午的象征。祝你端午安康！',
            '端午节，愿你像龙舟一样勇往直前，像粽子一样香甜美满，像艾草一样清新高雅！',
            '五月五，过端午。戴香囊，挂菖蒲。吃粽子，赛龙舟。祝你端午节快乐！',
            '端午佳节至，粽香情更浓。愿你在这充满传统文化的节日里，感受浓浓的节日氛围！'
        ],
        'qixi-festival': [
            '七夕佳节，愿你如牛郎织女般，遇见命中注定的那个人，相守一生。',
            '鹊桥搭，心相连。七夕之夜，愿你的爱情美满，幸福长远。',
            '七夕之夜，星河璀璨。愿你的爱情如星光般闪耀，温暖永恒。',
            '在这浪漫的七夕之夜，愿你的心中充满爱意，生活中充满甜蜜。',
            '七夕是爱的节日，愿你的爱情如童话般美好，幸福快乐每一天。',
            '一年一度鹊桥会，天上人间共欢畅。七夕佳节，愿你的爱情甜蜜幸福。',
            '七夕佳节，愿你如织女般美丽，如牛郎般勤劳，两情相悦，白头偕老。',
            '银河之上，星光闪烁。七夕之夜，愿你的爱情坚贞不渝，历久弥新。',
            '七夕之夜，月光如水。愿你的爱情甜蜜浪漫，幸福美满。',
            '今日七夕，愿有情人终成眷属，愿你的爱情美满如意，幸福永远。'
        ],
        'mid-autumn': [
            '中秋佳节，月圆人圆。愿你和家人团团圆圆，共享这美好时刻！',
            '明月千里寄相思，祝你中秋快乐！愿你的生活如圆月般圆满，如月光般皎洁！',
            '但愿人长久，千里共婵娟。祝你中秋快乐，月圆人圆，幸福安康！',
            '中秋之夜，月色如水。愿你和家人共赏明月，共叙亲情。',
            '月到中秋分外明，人到佳节倍思亲。祝你中秋节快乐，阖家幸福！',
            '海上生明月，天涯共此时。中秋佳节，愿你和家人共享天伦之乐。',
            '月饼圆圆，月儿圆圆，心儿圆圆。中秋佳节，愿你和家人幸福美满！',
            '花好月圆人团圆，中秋佳节共婵娟。愿你的生活圆满如意，幸福安康！',
            '月有阴晴圆缺，人有悲欢离合。中秋佳节，愿你的生活只有圆满，没有缺憾。',
            '静夜思，床前明月光。中秋佳节，愿你的生活如月光般皎洁，如月饼般甜美！'
        ],
        'double-ninth': [
            '九九重阳，登高望远。愿你的生活步步高升，事业节节攀升！',
            '重阳佳节，登高赏秋。愿你在这金秋时节，收获满满，喜悦常在！',
            '金秋送爽，丹桂飘香。重阳佳节，愿你健康长寿，幸福安康！',
            '重阳节到，登高赏菊。愿你的生活如菊花般绚丽多彩，芬芳四溢！',
            '九九重阳，敬老爱老。愿你尊老敬老，传承美德，幸福安康！',
            '重阳佳节，菊花飘香。愿你的生活如秋日般灿烂，如菊花般芬芳！',
            '九九重阳，佳节思亲。愿你和家人健康长寿，幸福美满！',
            '重阳节，赏菊花，饮菊酒，登高远眺。愿你的生活步步高升，节节攀登！',
            '重阳佳节，丹桂飘香。愿你的生活如桂花般芬芳，如秋日般温暖！',
            '九九重阳，菊香四溢。愿你在这美好的日子里，感受秋日的温暖与丰收的喜悦！'
        ],
        'winter-solstice': [
            '冬至阳生，万物更新。愿你在这特殊的日子里，迎接新的希望与温暖！',
            '冬至到，阳气生。愿你在这寒冷的冬日里，感受温暖与关爱！',
            '冬至是一年中最长的黑夜，但也意味着光明即将到来。愿你的生活充满希望与光明！',
            '冬至饺子夏至面，每逢节气食不同。愿你在冬至佳节，品尝美食，享受幸福！',
            '冬至阴极阳生，寒尽春来。愿你在这特殊的日子里，感受生命的轮回与希望！',
            '冬至到，吃汤圆，全家团圆。愿你在这温馨的日子里，与家人共享天伦之乐！',
            '冬至是一年中最冷的时节，但也是家人团聚的时刻。愿你在这温馨的日子里，感受家的温暖！',
            '冬至一阳生，春回大地。愿你在这特殊的日子里，感受生命的律动与希望！',
            '冬至到，吃饺子，暖身又暖心。愿你在这寒冷的冬日里，感受美食带来的温暖与幸福！',
            '冬至是中国传统节气之一，也是一个重要的节日。愿你在这特殊的日子里，感受传统文化的魅力！'
        ],
        // 其他节日
        'new-year': [
            '新的一年，新的开始。愿你在新的一年里，健康快乐，事事顺利，心想事成！',
            '愿新年的钟声，敲响幸福的音符，带给你和家人无尽的祝福与希望！',
            '在这辞旧迎新的美好时刻，祝愿你的生活充满阳光，未来路上一帆风顺！',
            '新年伊始，万象更新。愿你的生活如日出东方，光彩夺目，温暖如春！',
            '新的一年，新的希望，新的梦想。祝你在新的一年里充满活力，梦想成真！',
            '时光荏苒，岁月如梭。愿你在新的一年里，笑口常开，好运连连，幸福满满！',
            '值此新年来临之际，祝你在新的一年里身体健康，工作顺利，阖家幸福！',
            '新年的脚步已经临近，祝你抖擞精神，以崭新的姿态迎接新的一年的挑战！',
            '在这个充满希望的季节里，祝愿你的生活像冬日里的阳光一样温暖，灿烂！',
            '新的一年，新的起点。愿你保持初心，砥砺前行，在人生的道路上创造更多精彩！'
        ],
        'valentine-day': [
            '情人节快乐！愿我们的爱情如美酒般醇厚，如花朵般绚丽，永远甜蜜幸福！',
            '在这特别的日子里，我想对你说：你是我生命中最美的风景，情人节快乐！',
            '情人节到了，愿我们的爱情如玫瑰般芬芳，如巧克力般甜蜜，永远浪漫！',
            '一年一度的情人节，愿我们的爱情历久弥新，地久天长！',
            '情人节快乐！愿我们的爱情像童话一样美好，像星光一样永恒！',
            '在这浪漫的日子里，我想告诉你：你是我最爱的人，情人节快乐！',
            '情人节到了，愿我们的爱情如红酒般醇厚，如巧克力般甜蜜，永远浪漫！',
            '亲爱的，情人节快乐！愿我们的爱情如星光般璀璨，如月光般柔美，永远浪漫！',
            '情人节的祝福，满载着我对你的爱意。愿我们的爱情天长地久，永远甜蜜！',
            '在这个属于爱情的日子里，我想对你说：你是我最爱的人，情人节快乐！'
        ],
        'womens-day': [
            '三八妇女节，向你致敬！感谢你的坚强与温柔，你是这个世界上最美丽的风景！',
            '愿你如花绽放，光彩夺目。三八妇女节快乐，每一天都闪耀着自信的光芒！',
            '致敬每一位了不起的女性！愿你在人生的旅途中，自信、独立、坚强，活出精彩！',
            '三八妇女节，愿你如春天的花朵一样，绽放出属于自己的美丽与芬芳！',
            '向所有坚强、优雅、智慧的女性致敬！愿你在自己的世界里自由翱翔！',
            '妇女节快乐！愿你在生活中保持微笑，在工作中保持热情，在逆境中保持坚强！',
            '感谢你用柔软的肩膀扛起生活的重担，三八妇女节，愿你被温柔以待！',
            '今天是属于你的节日，愿你抛开烦恼与疲惫，享受属于自己的美好时光！',
            '每一个微笑背后都有一个坚强的灵魂，祝所有女性朋友节日快乐，永远美丽！',
            '愿你如玫瑰绽放，带刺却依然美丽；如莲花盛开，出淤泥而不染。妇女节快乐！'
        ],
        'april-fools': [
            '愚人节快乐！愿你在这个充满欢笑的日子里，保持童心，享受欢乐！',
            '愚人节到了，愿你在这个特别的日子里，开怀大笑，忘却烦恼！',
            '今天是愚人节，愿你拥有足够的幽默感，享受这个充满恶作剧的日子！',
            '愚人节快乐！愿你在这个特别的日子里，展现你的创意和幽默，带给身边的人欢乐！',
            '愚人节到了，愿你在这个充满惊喜的日子里，保持微笑，享受快乐！',
            '今天是愚人节，愿你在这个特别的日子里，收获欢笑，传递快乐！',
            '愚人节快乐！愿你在这个充满恶作剧的日子里，展现你的幽默和智慧！',
            '今天是愚人节，愿你在这个特别的日子里，保持童心，享受生活的乐趣！',
            '愚人节到了，愿你在这个充满欢笑的日子里，释放压力，享受快乐！',
            '今天是愚人节，愿你在这个特别的日子里，收获欢笑，传递快乐！'
        ],
        'mothers-day': [
            '母亲节快乐！感谢您的养育之恩，愿您健康长寿，幸福安康！',
            '母爱如水，温柔而深沉。母亲节快乐，愿您永远幸福安康！',
            '感谢您的无私奉献，母亲节快乐！愿您的生活如花般绚丽，如春般温暖！',
            '母亲节到了，愿所有的祝福都化作温暖的阳光，照耀您的生活！',
            '母爱是世界上最伟大的爱，母亲节快乐！愿您健康长寿，幸福安康！',
            '感谢您的付出与关爱，母亲节快乐！愿您的生活如花般绚丽，如春般温暖！',
            '母亲节到了，愿所有的祝福都化作温暖的阳光，照耀您的生活！',
            '母爱是世界上最伟大的爱，母亲节快乐！愿您健康长寿，幸福安康！',
            '感谢您的养育之恩，母亲节快乐！愿您的生活如花般绚丽，如春般温暖！',
            '母亲节到了，愿所有的祝福都化作温暖的阳光，照耀您的生活！'
        ],
        'childrens-day': [
            '六一儿童节快乐！愿你永远保持童心，享受童年的快乐时光！',
            '儿童节到了，愿你的童年如彩虹般绚丽，如阳光般温暖！',
            '六一儿童节，愿你的生活充满欢笑，童年的记忆永远美好！',
            '儿童节快乐！愿你在这个属于你的节日里，尽情玩耍，快乐成长！',
            '六一儿童节，愿你的童年如花般绚丽，如春般温暖，如夏般热情！',
            '儿童节到了，愿你的童年充满欢笑，你的未来充满希望！',
            '六一儿童节快乐！愿你的童年如彩虹般绚丽，如阳光般温暖！',
            '儿童节到了，愿你在这个属于你的节日里，尽情玩耍，快乐成长！',
            '六一儿童节，愿你的童年充满欢笑，你的未来充满希望！',
            '儿童节快乐！愿你永远保持童心，享受童年的快乐时光！'
        ],
        'fathers-day': [
            '父亲节快乐！感谢您的养育之恩，愿您健康长寿，幸福安康！',
            '父爱如山，高大而坚强。父亲节快乐，愿您永远幸福安康！',
            '感谢您的无私奉献，父亲节快乐！愿您的生活如阳光般温暖，如山般坚强！',
            '父亲节到了，愿所有的祝福都化作温暖的阳光，照耀您的生活！',
            '父爱是世界上最伟大的爱，父亲节快乐！愿您健康长寿，幸福安康！',
            '感谢您的付出与关爱，父亲节快乐！愿您的生活如阳光般温暖，如山般坚强！',
            '父亲节到了，愿所有的祝福都化作温暖的阳光，照耀您的生活！',
            '父爱是世界上最伟大的爱，父亲节快乐！愿您健康长寿，幸福安康！',
            '感谢您的养育之恩，父亲节快乐！愿您的生活如阳光般温暖，如山般坚强！',
            '父亲节到了，愿所有的祝福都化作温暖的阳光，照耀您的生活！'
        ],
        'labor-day': [
            '劳动创造价值，奋斗成就未来。劳动节快乐，愿你的付出得到丰厚的回报！',
            '向辛勤工作的你致敬！劳动节快乐，愿你的努力都能开花结果，收获满满！',
            '五一劳动节，向每一位劳动者致敬！愿你的汗水浇灌出最美丽的花朵！',
            '劳动是一切幸福的源泉。愿你在劳动中获得快乐，在付出中收获成长！',
            '五一劳动节，向默默奉献的你表示敬意！你的努力是社会进步的动力！',
            '辛勤的汗水是你最美的勋章。劳动节快乐，愿你的付出得到应有的认可！',
            '致敬每一位用双手创造价值的人！愿你在劳动中找到自己的价值和意义！',
            '劳动节到了，放下工作，享受假期，给自己一个喘息的机会，快乐度假！',
            '劳动最光荣，奋斗最幸福。祝愿所有劳动者节日快乐，身体健康！',
            '没有人的生活是一帆风顺的，正是劳动让我们的生活更加充实和美好！'
        ],
        'teachers-day': [
            '教师节快乐！感谢您的教诲与引导，您的言传身教将永远照亮我前行的道路！',
            '桃李不言，下自成蹊。向敬爱的老师致以最诚挚的祝福，教师节快乐！',
            '一支粉笔，三尺讲台，培育了无数栋梁之才。祝您教师节快乐，身体健康！',
            '教师节到了，感谢您的耐心教导，愿您桃李满天下，春晖遍四方！',
            '感谢您的谆谆教诲，教师节快乐！愿您的生活如春般温暖，如夏般热情！',
            '教师节快乐！感谢您的无私奉献，您是我人生道路上最重要的引路人！',
            '一日为师，终身为父。教师节快乐，愿您身体健康，万事如意！',
            '教师节到了，感谢您的教诲与引导，愿您的生活如花般绚丽，如春般温暖！',
            '感谢您的谆谆教诲，教师节快乐！愿您桃李满天下，春晖遍四方！',
            '教师节快乐！感谢您的无私奉献，您是我人生道路上最重要的引路人！'
        ],
        'national-day': [
            '国庆佳节，举国同庆。祝你假期愉快，合家欢乐，共享祖国繁荣昌盛的喜悦！',
            '祖国生日快乐！愿你在这美好的日子里，感受到祖国的强大与温暖！',
            '五星红旗迎风飘扬，祝福祖国繁荣昌盛！祝你国庆快乐，心想事成！',
            '国庆节到了，愿你在这个喜庆的日子里，感受到祖国的强大与温暖！',
            '祖国在我心中，国旗在我手中。祝你国庆节快乐，祖国繁荣昌盛！',
            '国庆佳节，举国同庆。愿你在这个美好的日子里，感受到祖国的强大与温暖！',
            '五星红旗迎风飘扬，祝福祖国繁荣昌盛！祝你国庆快乐，心想事成！',
            '国庆节到了，愿你在这个喜庆的日子里，感受到祖国的强大与温暖！',
            '祖国在我心中，国旗在我手中。祝你国庆节快乐，祖国繁荣昌盛！',
            '国庆佳节，举国同庆。愿你在这个美好的日子里，感受到祖国的强大与温暖！'
        ],
        'halloween': [
            '万圣节快乐！愿你在这个充满神秘和欢乐的节日里，尽情享受"不给糖就捣蛋"的乐趣！',
            '万圣节到了，愿你在这个特别的日子里，体验不一样的刺激和快乐！',
            '万圣节快乐！愿你在这个充满神秘和欢乐的节日里，收获快乐，传递欢乐！',
            '万圣节到了，愿你在这个特别的日子里，尽情装扮，享受节日的氛围！',
            '万圣节快乐！愿你在这个充满神秘和欢乐的节日里，与朋友共度美好时光！',
            '万圣节到了，愿你在这个特别的日子里，收获快乐，传递欢乐！',
            '万圣节快乐！愿你在这个充满神秘和欢乐的节日里，尽情装扮，享受节日的氛围！',
            '万圣节到了，愿你在这个特别的日子里，体验不一样的刺激和快乐！',
            '万圣节快乐！愿你在这个充满神秘和欢乐的节日里，与朋友共度美好时光！',
            '万圣节到了，愿你在这个特别的日子里，收获快乐，传递欢乐！'
        ],
        'thanksgiving': [
            '感恩节快乐！愿你在这个特别的日子里，感恩生活，感恩身边的人，收获满满的幸福！',
            '感恩节到了，愿你在这个特别的日子里，感恩所有，收获幸福！',
            '感恩节快乐！愿你在这个特别的日子里，与家人共享天伦之乐，感恩生活中的点点滴滴！',
            '感恩节到了，愿你在这个特别的日子里，感恩所有，收获幸福！',
            '感恩节快乐！愿你在这个特别的日子里，感恩生活，感恩身边的人，收获满满的幸福！',
            '感恩节到了，愿你在这个特别的日子里，与家人共享天伦之乐，感恩生活中的点点滴滴！',
            '感恩节快乐！愿你在这个特别的日子里，感恩所有，收获幸福！',
            '感恩节到了，愿你在这个特别的日子里，感恩生活，感恩身边的人，收获满满的幸福！',
            '感恩节快乐！愿你在这个特别的日子里，与家人共享天伦之乐，感恩生活中的点点滴滴！',
            '感恩节到了，愿你在这个特别的日子里，感恩所有，收获幸福！'
        ],
        'christmas': [
            '圣诞快乐！愿圣诞老人为你带来礼物与惊喜，新的一年充满希望与喜悦！',
            '铃儿响叮当，圣诞节快乐！愿你的生活如圣诞树一样，五彩缤纷，充满温暖！',
            '圣诞节的祝福，平安夜的祈祷，愿你和家人在这温馨的日子里，幸福安康！',
            '圣诞节到了，愿你在这个充满祝福的日子里，收获快乐，传递温暖！',
            '圣诞快乐！愿你在这个特别的日子里，收到圣诞老人的礼物，感受节日的温暖！',
            '铃儿响叮当，圣诞节快乐！愿你的生活如圣诞树一样，五彩缤纷，充满温暖！',
            '圣诞节的祝福，平安夜的祈祷，愿你和家人在这温馨的日子里，幸福安康！',
            '圣诞节到了，愿你在这个充满祝福的日子里，收获快乐，传递温暖！',
            '圣诞快乐！愿你在这个特别的日子里，收到圣诞老人的礼物，感受节日的温暖！',
            '铃儿响叮当，圣诞节快乐！愿你的生活如圣诞树一样，五彩缤纷，充满温暖！'
        ],
        'birthday': [
            '生日快乐！愿你的生日充满欢笑与惊喜，未来的日子里健康、幸福、梦想成真！',
            '在你特别的日子里，送上我最诚挚的祝福！生日快乐，愿你笑口常开，好运连连！',
            '又长一岁意味着你比昨天更睿智、更成熟。祝你生日快乐，岁岁平安！',
            '生日快乐！愿你在这个特别的日子里，收获满满的祝福和惊喜！',
            '祝你生日快乐，心想事成！愿你的生活如鲜花般绚丽，如阳光般温暖！',
            '生日快乐！愿你在这个特别的日子里，感受生活的美好，收获满满的幸福！',
            '在你生日的这一天，愿你收获满满的祝福和惊喜！生日快乐，万事如意！',
            '生日快乐！愿你在新的一岁里，健康快乐，事事顺利，心想事成！',
            '在你特别的日子里，送上我最诚挚的祝福！生日快乐，愿你笑口常开，好运连连！',
            '生日快乐！愿你在这个特别的日子里，收获满满的祝福和惊喜！'
        ]
    };

    // Format date to Chinese format (YYYY年MM月DD日)
    function formatChineseDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}年${month}月${day}日`;
    }

    // Add animation effects to the card
    function addCardEffects() {
        const cardContent = cardPreview.querySelector('.card-content');
        
        // 移除之前可能已经添加的事件监听器
        cardPreview.removeEventListener('mousemove', handleMouseMove);
        cardPreview.removeEventListener('mouseleave', handleMouseLeave);
        
        // 添加新的事件监听器
        cardPreview.addEventListener('mousemove', handleMouseMove);
        cardPreview.addEventListener('mouseleave', handleMouseLeave);
        
        function handleMouseMove(e) {
            if (!cardPreview.classList.contains('generated')) return;
            
            const rect = cardPreview.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 20;
            const rotateX = (centerY - y) / 20;
            
            cardPreview.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            cardContent.style.transform = `translateZ(50px)`;
        }
        
        function handleMouseLeave() {
            cardPreview.style.transform = '';
            cardContent.style.transform = '';
            setTimeout(() => {
                cardPreview.style.transition = 'all 0.5s';
                cardContent.style.transition = 'transform 0.5s';
            }, 100);
        }
    }
    
    // 初始化时调用一次添加特效
    addCardEffects();

    // Generate random greeting from templates
    function generateRandomGreeting(holiday) {
        const templates = greetingTemplates[holiday];
        const randomIndex = Math.floor(Math.random() * templates.length);
        return templates[randomIndex];
    }

    // 设置分享功能
    const shareBtn = document.getElementById('share-btn');
    const shareModal = document.getElementById('share-modal');
    const closeShareBtn = document.querySelector('.close-share');
    const shareOptions = document.querySelectorAll('.share-option');

    // 当卡片生成后，启用分享按钮
    function enableShareButton() {
        shareBtn.disabled = false;
    }

    // 打开分享弹窗
    shareBtn.addEventListener('click', () => {
        shareModal.style.display = 'flex';
    });

    // 关闭分享弹窗
    closeShareBtn.addEventListener('click', () => {
        shareModal.style.display = 'none';
    });

    // 点击弹窗外区域关闭弹窗
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            shareModal.style.display = 'none';
        }
    });

    // 处理各平台分享选项的点击
    shareOptions.forEach(option => {
        option.addEventListener('click', () => {
            const platform = option.getAttribute('data-platform');
            shareToSocialMedia(platform);
        });
    });

    // 分享到社交平台（模拟实现）
    function shareToSocialMedia(platform) {
        // 生成卡片图像数据
        html2canvas(document.querySelector('#card-preview')).then(canvas => {
            // 创建临时链接
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `${holidaySelect.options[holidaySelect.selectedIndex].text}_祝福卡_${getPlatformName(platform)}.png`;
            
            // 触发下载
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // 关闭分享弹窗
            shareModal.style.display = 'none';
        });
    }

    // 获取平台名称
    function getPlatformName(platform) {
        const platforms = {
            'wechat': '微信',
            'qq': 'QQ',
            'douyin': '抖音',
            'xiaohongshu': '小红书'
        };
        return platforms[platform] || platform;
    }

    // 修改生成卡片函数，添加启用分享按钮
    function generateCard() {
        const selectedHoliday = holidaySelect.value;
        const sender = senderInput.value.trim() || '我';
        
        if (!selectedHoliday) {
            alert('请选择一个节日');
            return;
        }
        
        // 更新卡片内容
        cardPreview.setAttribute('data-holiday', selectedHoliday);
        greetingText.textContent = generateRandomGreeting(selectedHoliday);
        senderName.textContent = sender;
        currentDate.textContent = formatChineseDate(new Date());
        
        // 更新节日标题和图标
        holidayTitle.textContent = holidayTitles[selectedHoliday];
        holidayIcon.textContent = holidayIcons[selectedHoliday];
        
        // 添加动画和特效
        addCardEffects();
        
        // 启用下载和分享按钮
        downloadBtn.disabled = false;
        enableShareButton();
        
        // 添加生成动画
        cardPreview.classList.add('generated');
        setTimeout(() => {
            cardPreview.classList.remove('generated');
        }, 1000);
    }

    // 替换原来的按钮事件监听器
    generateBtn.addEventListener('click', generateCard);

    // Save card as image
    downloadBtn.addEventListener('click', () => {
        // Use html2canvas to capture the card
        html2canvas(cardPreview).then(canvas => {
            // Create a temporary link
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `${holidaySelect.options[holidaySelect.selectedIndex].text}_祝福卡.png`;
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

    // Reset card when holiday selection changes
    holidaySelect.addEventListener('change', () => {
        downloadBtn.disabled = true;
        shareBtn.disabled = true;
    });

    // 二维码点击放大功能
    const qrcodeImg = document.getElementById('qrcode-img');
    const qrcodeModal = document.getElementById('qrcode-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.querySelector('.close-modal');

    if (qrcodeImg && qrcodeModal && modalImg) {
        qrcodeImg.addEventListener('click', function() {
            qrcodeModal.style.display = 'block';
            modalImg.src = this.src;
        });
        
        closeModal.addEventListener('click', function() {
            qrcodeModal.style.display = 'none';
        });
        
        qrcodeModal.addEventListener('click', function(event) {
            if (event.target === qrcodeModal) {
                qrcodeModal.style.display = 'none';
            }
        });
    }
}); 