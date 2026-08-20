// ASF ORGANIZATION — сайт маълумотлари (RU + UZ)
// Манба: asf-katalog/build.mjs (каталог 2026) — контент ўша ердан кўчирилган.

export const BRAND = {
  navy: '#021937', navy2: '#052a52', deep: '#010e20', ink: '#0e1c30',
  steel: '#5f7189', amber: '#e8a33d', amberD: '#c9821a',
};

export const CONTACTS = {
  phone1: '+998 99 731 77 57', phone1raw: '+998997317757',
  phone2: '+998 95 669 00 09', phone2raw: '+998956690009',
  email: 'ziyadullaev2003@gmail.com',
  telegram: 'https://t.me/+998997317757',
  address: {
    ru: 'Навоийская область, Карманинский район, Гулобод МФЙ, ул. Ташкент, 22',
    uz: "Navoiy viloyati, Karmana tumani, Gulobod MFY, Toshkent ko'chasi, 22",
  },
  hours: { ru: 'Ежедневно · 9:00 — 22:00', uz: 'Har kuni · 9:00 — 22:00' },
  geo: { ru: 'ТАШКЕНТ · НАВОИЙСКАЯ ОБЛАСТЬ · УЗБЕКИСТАН', uz: "TOSHKENT · NAVOIY VILOYATI · O'ZBEKISTON" },
  maps: 'https://maps.google.com/?q=' + encodeURIComponent('Карманинский район, Гулобод МФЙ, улица Ташкент 22'),
};

// ————— SVG сечения (каталогдан) —————
const IC = {
  sq: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="1"/><rect x="7" y="7" width="10" height="10" rx="0.5"/></svg>',
  round: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/></svg>',
  rebar: '<svg viewBox="0 0 24 24"><path d="M4 17 L17 4"/><path d="M7 20 L20 7"/><path d="M6.5 14.5l3 3M9.5 11.5l3 3M12.5 8.5l3 3M15.5 5.5l3 3"/></svg>',
  angle: '<svg viewBox="0 0 24 24"><path d="M5 4v16h15M9 4v12h11M5 4h4M20 16v4"/></svg>',
  channel: '<svg viewBox="0 0 24 24"><path d="M19 4H5v16h14M19 4v4h-10v8h10v4"/></svg>',
  wave: '<svg viewBox="0 0 24 24"><path d="M2 15l4-6 3 0 4 6 3 0 4-6"/><path d="M2 20l4-6 3 0 4 6 3 0 4-6"/></svg>',
  sandwich: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="3"/><rect x="3" y="9" width="18" height="6"/><rect x="3" y="17" width="18" height="3"/><path d="M6 9l3 6M11 9l3 6M16 9l3 6"/></svg>',
  cement: '<svg viewBox="0 0 24 24"><path d="M5 8.5h14V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M8.5 8.5V6A1.5 1.5 0 0 1 10 4.5h4A1.5 1.5 0 0 1 15.5 6v2.5"/><path d="M9 12.5h6M9 16h6"/></svg>',
  asphalt: '<svg viewBox="0 0 24 24"><path d="M8 4 5 20M16 4l3 16"/><path d="M12 4.5v3M12 10.5v3M12 16.5v3"/></svg>',
};

// cat калити: metal | roof | build
export const CATS = {
  metal: { ru: 'МЕТАЛЛОПРОКАТ', uz: 'METALLOPROKAT' },
  roof: { ru: 'КРОВЛЯ И ФАСАД', uz: 'TOM VA FASAD' },
  build: { ru: 'СТРОЙМАТЕРИАЛЫ', uz: 'QURILISH MATERIALLARI' },
};

export const PRODUCTS = [
  {
    n: '01', cat: 'metal', icon: IC.sq, img: 'assets/p1.jpg',
    title: { ru: 'Профильные трубы', uz: 'Profil quvurlar' },
    sub: { ru: 'Квадратное и прямоугольное сечение', uz: "Kvadrat va to'g'ri to'rtburchak kesim" },
    desc: {
      ru: 'Трубы квадратного и прямоугольного сечения — основа несущих металлоконструкций. Равномерное распределение металла по контуру делает профиль устойчивым к изгибающим и крутящим нагрузкам при экономичном расходе металла.',
      uz: "Kvadrat va to'g'ri to'rtburchak kesimli quvurlar — yuk ko'taruvchi metallokonstruksiyalarning asosi. Metallning kontur bo'ylab teng taqsimlanishi profilni egilish va buralish yuklariga chidamli qiladi, metall sarfi esa tejamli qoladi.",
    },
    specs: {
      ru: [['СЕЧЕНИЕ', '15×15 — 200×200', 'мм'], ['СТЕНКА', '1 — 8', 'мм'], ['ДЛИНА', '6 / 12', 'м']],
      uz: [['KESIM', '15×15 — 200×200', 'mm'], ['DEVOR', '1 — 8', 'mm'], ['UZUNLIK', '6 / 12', 'm']],
    },
    props: {
      ru: ['Высокая прочность на изгиб и кручение за счёт замкнутого контура', 'Широкий размерный ряд под любую нагрузку', 'Ровная поверхность — удобство сварки и монтажа', 'Оптимальное соотношение веса и несущей способности'],
      uz: ["Yopiq kontur hisobiga egilish va buralishga yuqori mustahkamlik", "Har qanday yukka mos keng o'lcham qatori", "Tekis yuza — payvandlash va montaj qulayligi", "Og'irlik va yuk ko'tarish qobiliyatining optimal nisbati"],
    },
    apps: {
      ru: ['Каркасное строительство', 'Ограждения', 'Ангары и навесы', 'Металлоконструкции', 'Мебельное производство'],
      uz: ['Karkas qurilishi', "To'siqlar", 'Angar va bostirmalar', 'Metallokonstruksiyalar', 'Mebel ishlab chiqarish'],
    },
    tbl: {
      note: 'ГОСТ 8639-82 / 8645-68',
      head: { ru: ['СЕЧЕНИЕ, ММ', 'СТЕНКА, ММ', 'ВЕС, КГ/М', 'МЕТРОВ В ТОННЕ'], uz: ['KESIM, MM', 'DEVOR, MM', "OG'IRLIK, KG/M", 'BIR TONNADA, M'] },
      rows: [
        ['20×20', '1.5', '0.87', '≈ 1 150'], ['25×25', '2.0', '1.44', '≈ 690'],
        ['40×40', '2.0', '2.39', '≈ 420'], ['50×50', '3.0', '4.43', '≈ 225'],
        ['60×60', '3.0', '5.37', '≈ 185'], ['80×80', '3.0', '7.25', '≈ 140'],
        ['100×100', '4.0', '12.06', '≈ 83'], ['150×150', '5.0', '22.77', '≈ 44'],
      ],
    },
  },
  {
    n: '02', cat: 'metal', icon: IC.round, img: 'assets/p2.jpg',
    title: { ru: 'Круглые трубы', uz: 'Dumaloq quvurlar' },
    sub: { ru: 'Электросварные и водогазопроводные', uz: 'Elektr payvand va suv-gaz quvurlari' },
    desc: {
      ru: 'Трубы круглого сечения всех типоразмеров — универсальный материал для трубопроводов, опорных конструкций и инженерных сетей. Круглая форма равномерно распределяет внутреннее давление и внешние нагрузки по всей окружности.',
      uz: "Barcha o'lchamdagi dumaloq kesimli quvurlar — quvur liniyalari, tayanch konstruksiyalar va muhandislik tarmoqlari uchun universal material. Dumaloq shakl ichki bosim va tashqi yuklarni butun aylana bo'ylab teng taqsimlaydi.",
    },
    specs: {
      ru: [['ДИАМЕТР', '15 — 530', 'мм'], ['СТЕНКА', '1.5 — 10', 'мм'], ['ДЛИНА', '6 / 12', 'м']],
      uz: [['DIAMETR', '15 — 530', 'mm'], ['DEVOR', '1.5 — 10', 'mm'], ['UZUNLIK', '6 / 12', 'm']],
    },
    props: {
      ru: ['Равномерное распределение давления по окружности сечения', 'Высокая пропускная способность для жидкостей и газов', 'Широкий диапазон диаметров и толщин стенки', 'Совместимость со стандартными фитингами'],
      uz: ["Bosimning kesim aylanasi bo'ylab teng taqsimlanishi", "Suyuqlik va gazlar uchun yuqori o'tkazuvchanlik", 'Diametr va devor qalinligining keng diapazoni', 'Standart fitinglar bilan moslik'],
    },
    apps: {
      ru: ['Водопроводные сети', 'Газопроводы', 'Опоры ЛЭП', 'Ограждения', 'Инженерные коммуникации'],
      uz: ['Suv tarmoqlari', 'Gaz quvurlari', 'EUL tayanchlari', "To'siqlar", 'Muhandislik kommunikatsiyalari'],
    },
    tbl: {
      note: 'ГОСТ 10704-91',
      head: { ru: ['ДИАМЕТР, ММ', 'СТЕНКА, ММ', 'ВЕС, КГ/М', 'МЕТРОВ В ТОННЕ'], uz: ['DIAMETR, MM', 'DEVOR, MM', "OG'IRLIK, KG/M", 'BIR TONNADA, M'] },
      rows: [
        ['20', '1.5', '0.68', '≈ 1 470'], ['32', '2.0', '1.48', '≈ 675'],
        ['57', '3.0', '4.00', '≈ 250'], ['76', '3.0', '5.40', '≈ 185'],
        ['89', '3.5', '7.38', '≈ 135'], ['108', '4.0', '10.26', '≈ 97'],
        ['159', '4.5', '17.15', '≈ 58'], ['219', '6.0', '31.52', '≈ 32'],
      ],
    },
  },
  {
    n: '03', cat: 'metal', icon: IC.rebar, img: 'assets/p3.jpg',
    title: { ru: 'Арматура А400 / А500', uz: 'Armatura A400 / A500' },
    sub: { ru: 'Сталь периодического профиля', uz: "Davriy profilli po'lat" },
    desc: {
      ru: 'Арматурная сталь периодического профиля классов А400 и А500 — ключевой элемент армирования железобетонных конструкций. Обеспечивает надёжное сцепление с бетоном и требуемую прочность каркаса.',
      uz: "A400 va A500 sinfidagi davriy profilli armatura po'lati — temir-beton konstruksiyalarni armaturalashning kalit elementi. Beton bilan ishonchli tishlashuv va karkasning talab qilingan mustahkamligini ta'minlaydi.",
    },
    specs: {
      ru: [['ДИАМЕТР', '6 — 40', 'мм'], ['КЛАСС', 'А400 / А500', ''], ['ДЛИНА', '6 / 11.7', 'м']],
      uz: [['DIAMETR', '6 — 40', 'mm'], ['SINF', 'A400 / A500', ''], ['UZUNLIK', '6 / 11.7', 'm']],
    },
    props: {
      ru: ['Периодический профиль — надёжное сцепление с бетоном', 'А400 — баланс прочности и пластичности', 'А500 — повышенная прочность, экономия металла', 'Устойчивость к статическим и динамическим нагрузкам'],
      uz: ['Davriy profil — beton bilan ishonchli tishlashuv', 'A400 — mustahkamlik va plastiklik balansi', 'A500 — oshirilgan mustahkamlik, metall tejash', 'Statik va dinamik yuklarga chidamlilik'],
    },
    apps: {
      ru: ['Фундаменты', 'Перекрытия', 'Колонны', 'Дорожное строительство', 'Мостовые конструкции'],
      uz: ['Poydevorlar', 'Yopmalar', 'Kolonnalar', "Yo'l qurilishi", "Ko'prik konstruksiyalari"],
    },
    tbl: {
      note: 'ГОСТ 5781-82 / 34028-2016',
      head: { ru: ['ДИАМЕТР', 'ВЕС, КГ/М', 'МЕТРОВ В ТОННЕ', 'СТЕРЖНЕЙ 11.7 М'], uz: ['DIAMETR', "OG'IRLIK, KG/M", 'BIR TONNADA, M', "11.7 M STERJEN"] },
      rows: [
        ['Ø 8', '0.395', '≈ 2 530', '≈ 216'], ['Ø 10', '0.617', '≈ 1 620', '≈ 139'],
        ['Ø 12', '0.888', '≈ 1 126', '≈ 96'], ['Ø 14', '1.210', '≈ 826', '≈ 71'],
        ['Ø 16', '1.580', '≈ 633', '≈ 54'], ['Ø 20', '2.470', '≈ 405', '≈ 35'],
        ['Ø 25', '3.850', '≈ 260', '≈ 22'], ['Ø 32', '6.310', '≈ 158', '≈ 14'],
      ],
    },
  },
  {
    n: '04', cat: 'metal', icon: IC.angle, img: 'assets/p4.jpg',
    title: { ru: 'Уголок стальной', uz: "Po'lat ugolok" },
    sub: { ru: 'Равнополочный и неравнополочный', uz: 'Teng va noteng tokchali' },
    desc: {
      ru: 'Равнополочный и неравнополочный стальной уголок — базовый профиль для лёгких и средних металлоконструкций. Сочетает жёсткость сечения с простотой соединения и монтажа.',
      uz: "Teng va noteng tokchali po'lat ugolok — yengil va o'rta metallokonstruksiyalar uchun bazaviy profil. Kesim qattiqligini ulash va montaj soddaligi bilan birlashtiradi.",
    },
    specs: {
      ru: [['ПОЛКА', '20×20 — 200×200', 'мм'], ['ТОЛЩИНА', '3 — 20', 'мм'], ['ДЛИНА', '6 / 12', 'м']],
      uz: [['TOKCHA', '20×20 — 200×200', 'mm'], ['QALINLIK', '3 — 20', 'mm'], ['UZUNLIK', '6 / 12', 'm']],
    },
    props: {
      ru: ['Высокая жёсткость профиля при небольшом весе', 'Простота соединения сваркой и болтами', 'Широкий диапазон размеров полок и толщин', 'Устойчивость к изгибающим нагрузкам'],
      uz: ["Kichik og'irlikda profilning yuqori qattiqligi", 'Payvand va bolt bilan ulash soddaligi', "Tokcha o'lchamlari va qalinliklarning keng diapazoni", 'Egilish yuklariga chidamlilik'],
    },
    apps: {
      ru: ['Фермы и каркасы', 'Опорные конструкции', 'Крепёжные узлы', 'Ограждения', 'Металлообработка'],
      uz: ['Fermalar va karkaslar', 'Tayanch konstruksiyalar', 'Mahkamlash uzellari', "To'siqlar", 'Metallga ishlov berish'],
    },
    tbl: {
      note: 'ГОСТ 8509-93',
      head: { ru: ['ПОЛКА, ММ', 'ТОЛЩИНА, ММ', 'ВЕС, КГ/М', 'МЕТРОВ В ТОННЕ'], uz: ['TOKCHA, MM', 'QALINLIK, MM', "OG'IRLIK, KG/M", 'BIR TONNADA, M'] },
      rows: [
        ['25×25', '3', '1.12', '≈ 890'], ['32×32', '3', '1.46', '≈ 685'],
        ['40×40', '4', '2.42', '≈ 413'], ['50×50', '5', '3.77', '≈ 265'],
        ['63×63', '5', '4.81', '≈ 208'], ['75×75', '6', '6.89', '≈ 145'],
        ['100×100', '8', '12.25', '≈ 82'], ['125×125', '8', '15.46', '≈ 65'],
      ],
    },
  },
  {
    n: '05', cat: 'metal', icon: IC.channel, img: 'assets/p5.jpg',
    title: { ru: 'Швеллер', uz: 'Shveller' },
    sub: { ru: 'Горячекатаный, П-образное сечение', uz: 'Issiq prokat, P-simon kesim' },
    desc: {
      ru: 'Стальной швеллер П-образного сечения — профиль для несущих балок и силовых каркасов. Форма сечения обеспечивает высокую сопротивляемость изгибу при рациональном расходе металла.',
      uz: "P-simon kesimli po'lat shveller — yuk ko'taruvchi balkalar va kuch karkaslari uchun profil. Kesim shakli metallning oqilona sarfida egilishga yuqori qarshilik beradi.",
    },
    specs: {
      ru: [['ВЫСОТА', '50 — 400', 'мм'], ['СТЕНКА', '4 — 9', 'мм'], ['ДЛИНА', '6 / 12', 'м']],
      uz: [['BALANDLIK', '50 — 400', 'mm'], ['DEVOR', '4 — 9', 'mm'], ['UZUNLIK', '6 / 12', 'm']],
    },
    props: {
      ru: ['Высокая несущая способность при работе на изгиб', 'Стабильность геометрии сечения под нагрузкой', 'Удобство монтажа в сборных конструкциях', 'Широкий сортамент по высоте и толщине'],
      uz: ["Egilishda yuqori yuk ko'tarish qobiliyati", 'Yuk ostida kesim geometriyasining barqarorligi', "Yig'ma konstruksiyalarda montaj qulayligi", 'Balandlik va qalinlik bo‘yicha keng sortament'],
    },
    apps: {
      ru: ['Балки перекрытий', 'Каркасы зданий', 'Эстакады', 'Машиностроение', 'Опорные рамы'],
      uz: ['Yopma balkalari', 'Bino karkaslari', 'Estakadalar', 'Mashinasozlik', 'Tayanch romlar'],
    },
    tbl: {
      note: 'ГОСТ 8240-97',
      head: { ru: ['НОМЕР', 'ВЫСОТА, ММ', 'ВЕС, КГ/М', 'МЕТРОВ В ТОННЕ'], uz: ['NOMER', 'BALANDLIK, MM', "OG'IRLIK, KG/M", 'BIR TONNADA, M'] },
      rows: [
        ['№ 8', '80', '7.05', '≈ 142'], ['№ 10', '100', '8.59', '≈ 116'],
        ['№ 12', '120', '10.40', '≈ 96'], ['№ 14', '140', '12.30', '≈ 81'],
        ['№ 16', '160', '14.20', '≈ 70'], ['№ 18', '180', '16.30', '≈ 61'],
        ['№ 20', '200', '18.40', '≈ 54'], ['№ 24', '240', '24.00', '≈ 42'],
      ],
    },
  },
  {
    n: '06', cat: 'roof', icon: IC.wave, img: 'assets/p6.jpg',
    title: { ru: 'Профнастил', uz: 'Profnastil' },
    sub: { ru: 'Оцинкованный и с полимерным покрытием', uz: 'Ruxlangan va polimer qoplamali' },
    desc: {
      ru: 'Профилированный оцинкованный лист с полимерным покрытием — кровельный и фасадный материал. Волнообразный профиль придаёт листу жёсткость при минимальной толщине и весе, а покрытие — широкую цветовую палитру под проект.',
      uz: "Polimer qoplamali profillangan ruxlangan list — tom va fasad materiali. To'lqinsimon profil listga minimal qalinlik va og'irlikda qattiqlik beradi, qoplama esa loyihaga mos keng rang palitrasini.",
    },
    specs: {
      ru: [['ТОЛЩИНА', '0.4 — 1.2', 'мм'], ['ВЫСОТА ВОЛНЫ', '8 — 75', 'мм'], ['ПОКРЫТИЕ', 'Цинк / полимер', '']],
      uz: [['QALINLIK', '0.4 — 1.2', 'mm'], ["TO'LQIN", '8 — 75', 'mm'], ['QOPLAMA', 'Rux / polimer', '']],
    },
    props: {
      ru: ['Оцинкованное основание — защита от коррозии', 'Полимерное покрытие — стойкость к УФ, влаге, перепадам температур', 'Лёгкий вес при высокой несущей способности волны', 'Быстрый монтаж, минимум отходов при раскрое'],
      uz: ['Ruxlangan asos — korroziyadan himoya', 'Polimer qoplama — UB, namlik va harorat farqiga chidamlilik', "To'lqinning yuqori yuk ko'tarishida yengil og'irlik", 'Tez montaj, kesishda minimal chiqindi'],
    },
    apps: {
      ru: ['Кровля', 'Фасады', 'Заборы и ограждения', 'Ангары', 'Складские здания'],
      uz: ['Tom', 'Fasadlar', "Devor va to'siqlar", 'Angarlar', 'Ombor binolari'],
    },
    tbl: {
      note: { ru: 'Основные марки профиля', uz: 'Asosiy profil markalari' },
      head: { ru: ['МАРКА', 'ТОЛЩИНА, ММ', 'ШИРИНА, ММ', 'ПРИМЕНЕНИЕ'], uz: ['MARKA', 'QALINLIK, MM', 'KENGLIK, MM', "QO'LLANISH"] },
      rows: [
        ['С8', '0.4 — 0.7', '1 150', { ru: 'Заборы · фасады', uz: "To'siq · fasad" }],
        ['МП20', '0.4 — 0.8', '1 100', { ru: 'Кровля · фасад', uz: 'Tom · fasad' }],
        ['С21', '0.4 — 0.8', '1 000', { ru: 'Кровля · ограждения', uz: "Tom · to'siqlar" }],
        ['НС35', '0.5 — 0.8', '1 000', { ru: 'Кровля с увеличенным шагом обрешётки', uz: 'Katta qadamli obreshotkali tom' }],
        ['Н60', '0.6 — 0.9', '845', { ru: 'Несущие настилы', uz: "Yuk ko'taruvchi nastillar" }],
        ['Н75', '0.7 — 1.0', '750', { ru: 'Несущие конструкции · опалубка', uz: "Yuk ko'taruvchi konstruksiya · opalubka" }],
      ],
    },
  },
  {
    n: '07', cat: 'roof', icon: IC.sandwich, img: 'assets/p7.jpg',
    title: { ru: 'Сэндвич-панели', uz: 'Sendvich-panellar' },
    sub: { ru: 'Стеновые и кровельные, ППС / минвата', uz: 'Devor va tom uchun, PPS / minvata' },
    desc: {
      ru: 'Трёхслойные сэндвич-панели с утеплителем между двумя металлическими облицовками — готовое решение для быстровозводимых зданий и энергоэффективных ограждающих конструкций.',
      uz: "Ikki metall qoplama orasida isitkichli uch qatlamli sendvich-panellar — tez quriladigan binolar va energiya tejamkor to'suvchi konstruksiyalar uchun tayyor yechim.",
    },
    specs: {
      ru: [['УТЕПЛИТЕЛЬ', '50 — 200', 'мм'], ['ШИРИНА', '1000 — 1190', 'мм'], ['НАПОЛНИТЕЛЬ', 'ППС / минвата', '']],
      uz: [['ISITKICH', '50 — 200', 'mm'], ['KENGLIK', '1000 — 1190', 'mm'], ["TO'LDIRGICH", 'PPS / minvata', '']],
    },
    props: {
      ru: ['Встроенная теплоизоляция — экономия на отоплении', 'Готовый к монтажу элемент — сокращение сроков стройки', 'Широкий выбор толщин утеплителя под климат', 'Ровная эстетичная поверхность без отделки'],
      uz: ["O'rnatilgan issiqlik izolyatsiyasi — isitishda tejash", 'Montajga tayyor element — qurilish muddatini qisqartirish', 'Iqlimga mos isitkich qalinliklari tanlovi', 'Pardozsiz tekis estetik yuza'],
    },
    apps: {
      ru: ['Быстровозводимые здания', 'Склады', 'Холодильные помещения', 'Производственные цеха', 'Фасады'],
      uz: ['Tez quriladigan binolar', 'Omborlar', 'Sovutish xonalari', 'Ishlab chiqarish sexlari', 'Fasadlar'],
    },
    tbl: {
      note: { ru: 'R — сопротивление теплопередаче, м²·°C/Вт', uz: "R — issiqlik o'tkazishga qarshilik, m²·°C/Vt" },
      head: { ru: ['ТОЛЩИНА, ММ', 'R · МИНВАТА', 'R · ППС', 'ПРИМЕНЕНИЕ'], uz: ['QALINLIK, MM', 'R · MINVATA', 'R · PPS', "QO'LLANISH"] },
      rows: [
        ['50', '≈ 1.2', '≈ 1.3', { ru: 'Перегородки · навесы', uz: "To'siq devor · bostirma" }],
        ['80', '≈ 1.9', '≈ 2.1', { ru: 'Склады', uz: 'Omborlar' }],
        ['100', '≈ 2.4', '≈ 2.6', { ru: 'Производственные здания', uz: 'Ishlab chiqarish binolari' }],
        ['120', '≈ 2.9', '≈ 3.2', { ru: 'Отапливаемые цеха', uz: 'Isitiladigan sexlar' }],
        ['150', '≈ 3.6', '≈ 4.0', { ru: 'Холодильные помещения', uz: 'Sovutish xonalari' }],
        ['200', '≈ 4.8', '≈ 5.3', { ru: 'Морозильные камеры', uz: 'Muzlatish kameralari' }],
      ],
    },
  },
  {
    n: '08', cat: 'build', icon: IC.cement, img: 'assets/p9.jpg',
    title: { ru: 'Цементы всех марок', uz: 'Barcha markadagi sementlar' },
    sub: { ru: 'Общестроительные и специальные', uz: 'Umumqurilish va maxsus' },
    desc: {
      ru: 'Портландцемент всех основных марок — от стяжки и кладочных растворов до монолита и ответственных конструкций. Поставка в мешках, биг-бэгах и навалом — фасовка под объём и логистику объекта.',
      uz: "Barcha asosiy markadagi portlandsement — stiajka va terish qorishmalaridan monolit va mas'uliyatli konstruksiyalargacha. Qop, big-beg va sochma holda yetkazib berish — obyekt hajmi va logistikasiga mos qadoq.",
    },
    specs: {
      ru: [['МАРКИ', 'М400 — М600', ''], ['ФАСОВКА', '25 / 50', 'кг'], ['ОТГРУЗКА', 'Биг-бэг / навал', '']],
      uz: [['MARKALAR', 'M400 — M600', ''], ['QADOQ', '25 / 50', 'kg'], ['YUKLASH', 'Big-beg / sochma', '']],
    },
    props: {
      ru: ['Марка под задачу — от раствора до высокопрочного бетона', 'Соответствие ГОСТ 10178 / ГОСТ 31108', 'Свежие партии — марочная прочность без потерь при хранении', 'Фасовка под объект: мешки, биг-бэги, навалом'],
      uz: ['Vazifaga mos marka — qorishmadan yuqori mustahkam betongacha', 'GOST 10178 / GOST 31108 ga muvofiqlik', "Yangi partiyalar — saqlashda yo'qotishsiz marka mustahkamligi", 'Obyektga mos qadoq: qop, big-beg, sochma'],
    },
    apps: {
      ru: ['Фундаменты и стяжки', 'Бетонные заводы', 'ЖБИ и растворы', 'Кладочные работы', 'Дорожное строительство'],
      uz: ['Poydevor va stiajkalar', 'Beton zavodlari', 'TBI va qorishmalar', 'Terish ishlari', "Yo'l qurilishi"],
    },
    tbl: {
      note: 'ГОСТ 10178-85 / ГОСТ 31108-2020',
      head: { ru: ['МАРКА', 'КЛАСС ПРОЧНОСТИ', 'ПРИМЕНЕНИЕ'], uz: ['MARKA', 'MUSTAHKAMLIK SINFI', "QO'LLANISH"] },
      rows: [
        ['М400 Д0', 'ЦЕМ I 32.5', { ru: 'Стяжки · растворы · общестрой', uz: 'Stiajka · qorishma · umumqurilish' }],
        ['М400 Д20', 'ЦЕМ II 32.5', { ru: 'Кладка · штукатурка · фундаменты', uz: 'Terish · suvoq · poydevor' }],
        ['М500 Д0', 'ЦЕМ I 42.5', { ru: 'Монолит · ЖБИ · ответственные конструкции', uz: "Monolit · TBI · mas'uliyatli konstruksiyalar" }],
        ['М500 Д20', 'ЦЕМ II 42.5', { ru: 'Фундаменты · перекрытия', uz: 'Poydevor · yopmalar' }],
        ['М600', 'ЦЕМ I 52.5', { ru: 'Высокопрочные бетоны · спецобъекты', uz: 'Yuqori mustahkam beton · maxsus obyektlar' }],
        ['ССПЦ', { ru: 'Сульфатостойкий', uz: 'Sulfatga chidamli' }, { ru: 'Фундаменты в агрессивных грунтах', uz: 'Agressiv gruntlardagi poydevorlar' }],
      ],
    },
  },
  {
    n: '09', cat: 'build', icon: IC.asphalt, img: 'assets/p10.jpg',
    title: { ru: 'Асфальт всех типов', uz: 'Barcha turdagi asfalt' },
    sub: { ru: 'Горячие и холодные асфальтобетонные смеси', uz: 'Issiq va sovuq asfaltbeton aralashmalari' },
    desc: {
      ru: 'Асфальтобетонные смеси всех основных типов — от магистральных дорог до дворовых территорий и ямочного ремонта. Отгрузка под график укладки с соблюдением температурного режима.',
      uz: "Barcha asosiy turdagi asfaltbeton aralashmalari — magistral yo'llardan hovli hududlari va chuqur ta'mirigacha. Harorat rejimiga rioya qilgan holda yotqizish grafigiga mos yuklash.",
    },
    specs: {
      ru: [['СМЕСИ', 'Горячие / холодные', ''], ['ТИПЫ', 'А · Б · В · ЩМА', ''], ['ОТГРУЗКА', 'По графику', '']],
      uz: [['ARALASHMALAR', 'Issiq / sovuq', ''], ['TIPLAR', 'A · B · V · ShchMA', ''], ['YUKLASH', "Grafik bo'yicha", '']],
    },
    props: {
      ru: ['Смеси под нагрузку — от тротуара до магистрали', 'ЩМА — износостойкое покрытие для интенсивного трафика', 'Холодные смеси — ямочный ремонт в любой сезон', 'Контроль температуры смеси при отгрузке и доставке'],
      uz: ['Yukka mos aralashmalar — trotuardan magistralgacha', "ShchMA — qizg'in trafik uchun yeyilishga chidamli qoplama", "Sovuq aralashmalar — istalgan mavsumda chuqur ta'miri", 'Yuklash va yetkazishda aralashma haroratini nazorat qilish'],
    },
    apps: {
      ru: ['Автодороги', 'Городские улицы', 'Парковки и дворы', 'Промышленные площадки', 'Ямочный ремонт'],
      uz: ["Avtoyo'llar", "Shahar ko'chalari", 'Avtoturargoh va hovlilar', 'Sanoat maydonchalari', "Chuqur ta'miri"],
    },
    tbl: {
      note: 'ГОСТ 9128-2013 / ГОСТ 31015-2002',
      head: { ru: ['ТИП', 'ХАРАКТЕР СМЕСИ', 'ПРИМЕНЕНИЕ'], uz: ['TIP', 'ARALASHMA XARAKTERI', "QO'LLANISH"] },
      rows: [
        [{ ru: 'Тип А', uz: 'A tipi' }, { ru: 'Плотная · мелкозернистая', uz: 'Zich · mayda donali' }, { ru: 'Верхний слой дорог с высокой нагрузкой', uz: "Yuqori yukli yo'llarning ustki qatlami" }],
        [{ ru: 'Тип Б', uz: 'B tipi' }, { ru: 'Плотная · мелкозернистая', uz: 'Zich · mayda donali' }, { ru: 'Городские дороги и улицы', uz: "Shahar yo'llari va ko'chalari" }],
        [{ ru: 'Тип В', uz: 'V tipi' }, { ru: 'Плотная · мелкозернистая', uz: 'Zich · mayda donali' }, { ru: 'Дворы · тротуары · площадки', uz: 'Hovli · trotuar · maydoncha' }],
        [{ ru: 'Крупнозернистая', uz: 'Yirik donali' }, { ru: 'Пористая', uz: "G'ovak" }, { ru: 'Нижний слой покрытия (биндер)', uz: 'Qoplamaning pastki qatlami (binder)' }],
        [{ ru: 'ЩМА', uz: 'ShchMA' }, { ru: 'Щебёночно-мастичная', uz: "Shag'al-mastikali" }, { ru: 'Магистрали · интенсивный трафик', uz: "Magistrallar · qizg'in trafik" }],
        [{ ru: 'Холодная', uz: 'Sovuq' }, { ru: 'Ремонтная', uz: "Ta'mir uchun" }, { ru: 'Ямочный ремонт круглый год', uz: "Yil bo'yi chuqur ta'miri" }],
      ],
    },
  },
];

// ————— Калькулятор: кг/м маълумотлари (ГОСТ жадваллардан) —————
export const CALC = [
  { id: 'profil', name: { ru: 'Профильная труба', uz: 'Profil quvur' }, unit: { ru: 'сечение × стенка', uz: 'kesim × devor' },
    sizes: [['20×20 × 1.5 мм', 0.87], ['25×25 × 2 мм', 1.44], ['40×40 × 2 мм', 2.39], ['50×50 × 3 мм', 4.43], ['60×60 × 3 мм', 5.37], ['80×80 × 3 мм', 7.25], ['100×100 × 4 мм', 12.06], ['150×150 × 5 мм', 22.77]] },
  { id: 'round', name: { ru: 'Круглая труба', uz: 'Dumaloq quvur' }, unit: { ru: 'диаметр × стенка', uz: 'diametr × devor' },
    sizes: [['Ø 20 × 1.5 мм', 0.68], ['Ø 32 × 2 мм', 1.48], ['Ø 57 × 3 мм', 4.00], ['Ø 76 × 3 мм', 5.40], ['Ø 89 × 3.5 мм', 7.38], ['Ø 108 × 4 мм', 10.26], ['Ø 159 × 4.5 мм', 17.15], ['Ø 219 × 6 мм', 31.52]] },
  { id: 'rebar', name: { ru: 'Арматура', uz: 'Armatura' }, unit: { ru: 'диаметр', uz: 'diametr' },
    sizes: [['Ø 8', 0.395], ['Ø 10', 0.617], ['Ø 12', 0.888], ['Ø 14', 1.210], ['Ø 16', 1.580], ['Ø 20', 2.470], ['Ø 25', 3.850], ['Ø 32', 6.310]] },
  { id: 'ugolok', name: { ru: 'Уголок', uz: 'Ugolok' }, unit: { ru: 'полка × толщина', uz: 'tokcha × qalinlik' },
    sizes: [['25×25 × 3 мм', 1.12], ['32×32 × 3 мм', 1.46], ['40×40 × 4 мм', 2.42], ['50×50 × 5 мм', 3.77], ['63×63 × 5 мм', 4.81], ['75×75 × 6 мм', 6.89], ['100×100 × 8 мм', 12.25], ['125×125 × 8 мм', 15.46]] },
  { id: 'shveller', name: { ru: 'Швеллер', uz: 'Shveller' }, unit: { ru: 'номер', uz: 'nomer' },
    sizes: [['№ 8', 7.05], ['№ 10', 8.59], ['№ 12', 10.40], ['№ 14', 12.30], ['№ 16', 14.20], ['№ 18', 16.30], ['№ 20', 18.40], ['№ 24', 24.00]] },
];

// ————— UI матнлари —————
export const I18N = {
  ru: {
    lang: 'ru', htmlLang: 'ru', other: 'uz', otherLabel: "O'ZB", selfLabel: 'РУС',
    title: 'ASF ORGANIZATION — металлопрокат и стройматериалы в Узбекистане',
    metaDesc: 'Профтруба, круглая труба, арматура, уголок, швеллер, профнастил, сэндвич-панели, цемент, асфальт. Поставка оптом и в розницу по Узбекистану. ☎ +998 99 731 77 57',
    nav: { products: 'Продукция', calc: 'Калькулятор', about: 'О компании', partner: 'Партнёрам', contacts: 'Контакты' },
    heroKicker: 'МЕТАЛЛОПРОКАТ И СТРОЙМАТЕРИАЛЫ · УЗБЕКИСТАН',
    slogan: 'Прочность, на которую можно положиться',
    heroSub: 'Поставка металлопроката и материалов для строительства и инфраструктуры. Один поставщик — весь металл объекта, с одним ответственным.',
    ctaCatalog: 'Смотреть продукцию', ctaPdf: 'Каталог PDF', ctaCall: 'Позвонить', ctaTg: 'Telegram',
    scrollDown: 'ЛИСТАЙТЕ ВНИЗ',
    marquee: ['ПРОФТРУБА', 'КРУГЛАЯ ТРУБА', 'АРМАТУРА А400/А500', 'УГОЛОК', 'ШВЕЛЛЕР', 'ПРОФНАСТИЛ', 'СЭНДВИЧ-ПАНЕЛИ', 'ЦЕМЕНТ М400—М600', 'АСФАЛЬТ'],
    stats: [
      { v: 9, suf: '', k: 'товарных групп<br>в каталоге' },
      { v: 500, suf: '+', k: 'типоразмеров<br>проката' },
      { v: 0, txt: '6–12 м', k: 'стандартные<br>длины' },
      { v: 0, txt: 'ГОСТ', k: 'профили по<br>ГОСТ и ТУ' },
    ],
    productsKicker: 'ПРОДУКЦИЯ · 01 — 09', productsTitle: 'Девять групп<br>продукции',
    productsNote: 'Нажмите на карточку — внутри характеристики, сортамент и вес по ГОСТ.',
    filterAll: 'Все',
    more: 'Подробнее',
    specsT: 'ХАРАКТЕРИСТИКИ', propsT: 'СВОЙСТВА И ПРЕИМУЩЕСТВА', appsT: 'ОБЛАСТЬ ПРИМЕНЕНИЯ', tblT: 'СОРТАМЕНТ И ВЕС',
    priceTitle: 'Узнать цену и наличие', priceNote: 'Цены на металл меняются вместе с рынком — актуальную цену назовём по телефону за две минуты и зафиксируем в коммерческом предложении.',
    calcKicker: 'РАСЧЁТ ОБЪЁМА', calcTitle: 'Тонны ⇄ метры',
    calcSub: 'Сколько метров проката в тонне? Выберите позицию — калькулятор пересчитает вес в метры и обратно по теоретическому весу ГОСТ.',
    calcProduct: 'Продукция', calcSize: 'Типоразмер', calcTons: 'ВЕС, ТОНН', calcMeters: 'ДЛИНА, МЕТРОВ',
    calcPerM: 'вес 1 метра', calcNote: '* Теоретический вес по ГОСТ. Фактический вес партии может отличаться в пределах допусков.',
    calcCta: 'Зафиксировать цену на этот объём',
    howKicker: 'КАК МЫ РАБОТАЕМ', howTitle: 'Четыре шага<br>до поставки',
    steps: [
      ['Заявка', 'По телефону или e-mail — свободной формой или спецификацией проекта'],
      ['Расчёт', 'Просчёт спецификации и коммерческое предложение с фиксацией цен'],
      ['Договор', 'Согласование условий оплаты, объёмов и графика поставки'],
      ['Поставка', 'Отгрузка со склада или доставка на объект заказчика'],
    ],
    aboutKicker: 'О КОМПАНИИ', aboutTitle: 'Металл для тех,<br>кто строит всерьёз',
    aboutText: 'ASF ORGANIZATION — поставщик металлопроката, кровельных, фасадных и общестроительных материалов. Мы работаем со строительными компаниями, производствами и частными заказчиками, закрывая потребность объекта в материалах — одной поставкой, с одним ответственным.',
    partnerKicker: 'ПАРТНЁРАМ', partnerTitle: 'Один поставщик —<br>весь металл объекта',
    pcards: [
      ['Опт и розница', 'Отгрузка от одной единицы до оптовых партий под график стройки. Цены фиксируются в коммерческом предложении.'],
      ['Гос. закупки и тендеры', 'Комплектация объектов государственных заказчиков: документация, спецификации и поставка в требуемые сроки.'],
      ['Доставка по регионам', 'Отгрузка со складов в Ташкенте и Навоийской области, доставка на объект по согласованному графику.'],
      ['Под заказ', 'Нестандартные типоразмеры и материалы под проект — по индивидуальной заявке.'],
    ],
    quoteT: 'Просчитаем вашу спецификацию', quoteD: 'Позвоните — назовём актуальные цены и зафиксируем их в коммерческом предложении',
    contactsKicker: 'КОНТАКТЫ', contactsTitle: 'Свяжитесь<br>с нами',
    cPhone: 'ТЕЛЕФОН', cMail: 'E-MAIL', cAddr: 'АДРЕС', cHours: 'РЕЖИМ РАБОТЫ', cMap: 'Открыть на карте',
    footNav: 'Разделы', footDocs: 'Материалы', footPdf: 'Каталог продукции 2026 (PDF)',
    footRights: 'Поставка металлопроката и строительных материалов',
    mobCall: 'Позвонить', mobTg: 'Telegram',
  },
  uz: {
    lang: 'uz', htmlLang: 'uz', other: 'ru', otherLabel: 'РУС', selfLabel: "O'ZB",
    title: "ASF ORGANIZATION — metalloprokat va qurilish materiallari | O'zbekiston",
    metaDesc: "Profil quvur, dumaloq quvur, armatura, ugolok, shveller, profnastil, sendvich-panel, sement, asfalt. O'zbekiston bo'ylab ulgurji va chakana yetkazib berish. ☎ +998 99 731 77 57",
    nav: { products: 'Mahsulotlar', calc: 'Kalkulyator', about: 'Biz haqimizda', partner: 'Hamkorlarga', contacts: 'Aloqa' },
    heroKicker: "METALLOPROKAT VA QURILISH MATERIALLARI · O'ZBEKISTON",
    slogan: "Tayansa bo'ladigan mustahkamlik",
    heroSub: "Qurilish va infratuzilma uchun metalloprokat hamda materiallar yetkazib berish. Bitta yetkazib beruvchi — obyektning butun metalli, bitta mas'ul bilan.",
    ctaCatalog: "Mahsulotlarni ko'rish", ctaPdf: 'Katalog PDF', ctaCall: "Qo'ng'iroq qilish", ctaTg: 'Telegram',
    scrollDown: 'PASTGA VARAQLANG',
    marquee: ['PROFIL QUVUR', 'DUMALOQ QUVUR', 'ARMATURA A400/A500', 'UGOLOK', 'SHVELLER', 'PROFNASTIL', 'SENDVICH-PANELLAR', 'SEMENT M400—M600', 'ASFALT'],
    stats: [
      { v: 9, suf: '', k: 'katalogdagi<br>tovar guruhi' },
      { v: 500, suf: '+', k: 'prokat<br>tipo-o‘lchami' },
      { v: 0, txt: '6–12 m', k: 'standart<br>uzunliklar' },
      { v: 0, txt: 'GOST', k: 'GOST va TU<br>bo‘yicha profillar' },
    ],
    productsKicker: 'MAHSULOTLAR · 01 — 09', productsTitle: "To'qqiz guruh<br>mahsulot",
    productsNote: "Kartochkani bosing — ichida xususiyatlar, sortament va GOST bo'yicha og'irlik.",
    filterAll: 'Hammasi',
    more: 'Batafsil',
    specsT: 'XUSUSIYATLAR', propsT: 'AFZALLIKLAR', appsT: "QO'LLANISH SOHASI", tblT: "SORTAMENT VA OG'IRLIK",
    priceTitle: 'Narx va mavjudlikni bilish', priceNote: "Metall narxi bozor bilan birga o'zgaradi — dolzarb narxni telefonda ikki daqiqada aytamiz va tijorat taklifida qayd etamiz.",
    calcKicker: 'HAJM HISOBI', calcTitle: 'Tonna ⇄ metr',
    calcSub: "Bir tonnada necha metr prokat bor? Pozitsiyani tanlang — kalkulyator GOST nazariy og'irligi bo'yicha tonnani metrga va aksincha hisoblaydi.",
    calcProduct: 'Mahsulot', calcSize: "Tipo-o'lcham", calcTons: 'VAZN, TONNA', calcMeters: 'UZUNLIK, METR',
    calcPerM: '1 metr vazni', calcNote: "* GOST bo'yicha nazariy og'irlik. Partiyaning amaldagi vazni ruxsat etilgan chegarada farq qilishi mumkin.",
    calcCta: 'Shu hajmga narxni qayd etish',
    howKicker: 'QANDAY ISHLAYMIZ', howTitle: 'Yetkazib berishgacha<br>to‘rt qadam',
    steps: [
      ['Ariza', "Telefon yoki e-mail orqali — erkin shaklda yoki loyiha spetsifikatsiyasi bilan"],
      ['Hisob', 'Spetsifikatsiya hisobi va narxlar qayd etilgan tijorat taklifi'],
      ['Shartnoma', "To'lov shartlari, hajm va yetkazib berish grafigini kelishish"],
      ['Yetkazish', 'Ombordan yuklash yoki buyurtmachi obyektiga yetkazib berish'],
    ],
    aboutKicker: 'BIZ HAQIMIZDA', aboutTitle: 'Jiddiy quruvchilar<br>uchun metall',
    aboutText: "ASF ORGANIZATION — metalloprokat, tom, fasad va umumqurilish materiallari yetkazib beruvchisi. Qurilish kompaniyalari, ishlab chiqarishlar va xususiy buyurtmachilar bilan ishlaymiz — obyektning material ehtiyojini bitta yetkazib berish, bitta mas'ul bilan yopamiz.",
    partnerKicker: 'HAMKORLARGA', partnerTitle: 'Bitta yetkazib beruvchi —<br>obyektning butun metalli',
    pcards: [
      ['Ulgurji va chakana', "Bitta donadan qurilish grafigiga mos ulgurji partiyalargacha yuklash. Narxlar tijorat taklifida qayd etiladi."],
      ['Davlat xaridlari va tenderlar', "Davlat buyurtmachilari obyektlarini butlash: hujjatlar, spetsifikatsiyalar va belgilangan muddatda yetkazib berish."],
      ['Hududlarga yetkazish', "Toshkent va Navoiy viloyatidagi omborlardan yuklash, kelishilgan grafik bo'yicha obyektga yetkazish."],
      ['Buyurtma asosida', "Nostandart o'lchamlar va loyihaga mos materiallar — individual ariza bo'yicha."],
    ],
    quoteT: 'Spetsifikatsiyangizni hisoblaymiz', quoteD: "Qo'ng'iroq qiling — dolzarb narxlarni aytamiz va tijorat taklifida qayd etamiz",
    contactsKicker: 'ALOQA', contactsTitle: 'Biz bilan<br>bog‘laning',
    cPhone: 'TELEFON', cMail: 'E-MAIL', cAddr: 'MANZIL', cHours: 'ISH VAQTI', cMap: 'Xaritada ochish',
    footNav: "Bo'limlar", footDocs: 'Materiallar', footPdf: 'Mahsulot katalogi 2026 (PDF)',
    footRights: 'Metalloprokat va qurilish materiallari yetkazib berish',
    mobCall: "Qo'ng'iroq", mobTg: 'Telegram',
  },
};
