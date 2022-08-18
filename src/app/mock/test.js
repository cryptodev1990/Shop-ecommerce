const fs = require('fs');
const arr = [
  {
    en: 'BEAUTY & HEALTH',
    zh: '美妆/个护清洁',
    id: '10001',
    parentId: '',
    title: 'null',
    categoryId: '1'
  },
  {
    en: 'FASHION',
    zh: '时尚',
    id: '100002',
    parentId: '',
    title: 'shop-category-fashion',
    categoryId: '5'
  },
  {
    en: 'SPORTS & LEISURE',
    zh: '运动户外',
    id: '100003',
    parentId: '',
    title: 'shop-category-sports',
    categoryId: '13'
  },
  {
    en: 'DIGITAL & MOBILE',
    zh: '数码3C',
    id: '100004',
    parentId: '',
    title: 'Profile P',
    categoryId: '2'
  },
  {
    en: 'HOME & LIVING',
    zh: '居家生活',
    id: '100005',
    parentId: '',
    title: 'shop-category-home',
    categoryId: '27'
  },
  {
    en: 'FOOD & DINING',
    zh: '食品&餐饮',
    id: '100006',
    parentId: '',
    title: 'shop-category-snacks',
    categoryId: '8'
  },
  {
    en: 'BABY & KIDS',
    zh: '母婴童装',
    id: '100007',
    parentId: '',
    title: 'shop-category-baby',
    categoryId: '4'
  },
  {
    en: 'TOP-UP & VOUCHER',
    zh: '充值 & 优惠券',
    id: '100008',
    parentId: '',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Skin Care',
    zh: '皮肤护理',
    id: '20001',
    parentId: '10001',
    title: 'shop-subcategory-skin-care',
    categoryId: '164'
  },
  {
    en: 'Cosmetics',
    zh: '化妆品',
    id: '20002',
    parentId: '10001',
    title: 'shop-subcategory-cosmetics',
    categoryId: '330'
  },
  {
    en: 'Bath & Body',
    zh: '身体护理',
    id: '20003',
    parentId: '10001',
    title: 'shop-subcategory-bath-body',
    categoryId: '4069'
  },
  {
    en: 'Hair Care',
    zh: '美发护发',
    id: '20004',
    parentId: '10001',
    title: 'shop-subcategory-hair-care',
    categoryId: '277'
  },
  {
    en: 'Dietary Management',
    zh: '饮食管理',
    id: '20005',
    parentId: '10001',
    title: 'shop-subcategory-dietary-management',
    categoryId: 'null'
  },
  {
    en: 'Personal Care & Medical Supplies',
    zh: '个人护理和医疗用品',
    id: '20006',
    parentId: '10001',
    title: 'shop-subcategory-personal-care-medical-supplies',
    categoryId: '1791'
  },
  {
    en: 'Perfume & Luxury Beauty',
    zh: '香水彩妆',
    id: '20007',
    parentId: '10001',
    title: 'shop-subcategory-personal-care-medical-supplies',
    categoryId: '165'
  },
  {
    en: 'Women’s Clothing',
    zh: '女装',
    id: '20008',
    parentId: '100002',
    title: 'shop-subcategory-women-clothing',
    categoryId: '67'
  },
  {
    en: 'Lingerie & Sleepwear',
    zh: '内衣/家居服',
    id: '20009',
    parentId: '100002',
    title: 'shop-subcategory-lingerie-sleepwear',
    categoryId: '334'
  },
  {
    en: "Men's Accessories",
    zh: '男士配饰',
    id: '20010',
    parentId: '100002',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Men’s Clothing',
    zh: '男装',
    id: '20011',
    parentId: '100002',
    title: 'shop-subcategory-men-clothing',
    categoryId: '68'
  },
  {
    en: 'Bag & Wallet',
    zh: '箱包',
    id: '20012',
    parentId: '5',
    title: 'shop-subcategory-bags-wallets',
    categoryId: '71'
  },
  {
    en: 'Accessories',
    zh: '配饰',
    id: '20013',
    parentId: '100002',
    title: 'shop-subcategory-accessories',
    categoryId: '384'
  },
  {
    en: 'Shoes',
    zh: '鞋',
    id: '20014',
    parentId: '100002',
    title: 'shop-category-shoes',
    categoryId: '70'
  },
  {
    en: 'Watches',
    zh: '手表',
    id: '20015',
    parentId: '100002',
    title: 'shop-category-watches',
    categoryId: '285'
  },
  {
    en: 'Jewelry',
    zh: '珠宝',
    id: '20016',
    parentId: '100002',
    title: 'shop-category-jewelry',
    categoryId: '293'
  },
  {
    en: 'Sports Equipment',
    zh: '体育器材',
    id: '20017',
    parentId: '100003',
    title: 'shop-subcategory-sports-equipment',
    categoryId: '59'
  },
  {
    en: 'Sportswear',
    zh: '运动装',
    id: '20018',
    parentId: '100003',
    title: 'shop-subcategory-sportswear',
    categoryId: '454'
  },
  {
    en: "Women's Sports Apparel",
    zh: '女子运动服饰',
    id: '20019',
    parentId: '100003',
    title: 'shop-subcategory-link-women-sports-apparel',
    categoryId: 'null'
  },
  {
    en: 'Golf',
    zh: '高尔夫',
    id: '20020',
    parentId: '100003',
    title: 'shop-subcategory-link-golf',
    categoryId: '599'
  },
  {
    en: 'Men Sports Apparel',
    zh: '男士运动服饰',
    id: '20021',
    parentId: '100003',
    title: 'shop-subcategory-link-men-sports-apparel',
    categoryId: 'null'
  },
  {
    en: 'Cycling',
    zh: '骑行运动',
    id: '20022',
    parentId: '100003',
    title: 'shop-subcategory-link-cycling',
    categoryId: '287'
  },
  {
    en: 'Camping / Fishing',
    zh: '露营/垂钓',
    id: '20023',
    parentId: '100003',
    title: 'shop-subcategory-link-camping-fishing',
    categoryId: '230'
  },
  {
    en: 'Sports Accessories',
    zh: '运动用品',
    id: '20024',
    parentId: '100003',
    title: 'shop-subcategory-link-sports-accessories',
    categoryId: '6884'
  },
  {
    en: 'Swimming / Watersports',
    zh: '游泳/水上运动',
    id: '20025',
    parentId: '100003',
    title: 'shop-subcategory-link-swimming-watersports',
    categoryId: '231'
  },
  {
    en: 'Sports Bags',
    zh: '运动包',
    id: '20026',
    parentId: '100003',
    title: 'shop-subcategory-link-sports-bags',
    categoryId: '229'
  },
  {
    en: 'Mobile Accessories',
    zh: '手机配件',
    id: '20027',
    parentId: '100004',
    title: 'shop-subcategory-mobile-accessories',
    categoryId: '127'
  },
  {
    en: 'Small Appliances',
    zh: '小家电',
    id: '20028',
    parentId: '100004',
    title: 'shop-subcategory-small-appliances',
    categoryId: '477'
  },
  {
    en: 'Computer & Game',
    zh: '电脑与游戏',
    id: '20029',
    parentId: '100004',
    title: 'shop-subcategory-computer-games',
    categoryId: 'null'
  },
  {
    en: 'Cameras & Recorders',
    zh: '相机和录像机',
    id: '20030',
    parentId: '100004',
    title: 'shop-subcategory-cameras-recorders',
    categoryId: '209'
  },
  {
    en: 'Smart Tech',
    zh: '智能设备',
    id: '20031',
    parentId: '100004',
    title: 'shop-subcategory-smart-tech',
    categoryId: '168'
  },
  {
    en: 'Mobile Devices',
    zh: '移动设备',
    id: '20032',
    parentId: '100004',
    title: 'shop-subcategory-mobile-devices',
    categoryId: 'null'
  },
  {
    en: 'TV & Entertainment',
    zh: '影视娱乐',
    id: '20033',
    parentId: '100004',
    title: 'null',
    categoryId: '4023'
  },
  {
    en: 'Major Appliances',
    zh: '大家电',
    id: '20034',
    parentId: '100004',
    title: 'shop-subcategory-major-appliances',
    categoryId: '6905'
  },
  {
    en: 'Furniture & Deco',
    zh: '家装',
    id: '20035',
    parentId: '100005',
    title: 'shop-subcategory-furniture-deco',
    categoryId: '343'
  },
  {
    en: 'Household & Bedding',
    zh: '家居和寝具',
    id: '20036',
    parentId: '100005',
    title: 'shop-subcategory-household-bedding',
    categoryId: '389'
  },
  {
    en: 'Kitchen & Dining',
    zh: '厨房和餐厅',
    id: '20037',
    parentId: '100005',
    title: 'shop-subcategory-kitchen-dining',
    categoryId: '54'
  },
  {
    en: 'Automotive & Industry',
    zh: '汽车生活',
    id: '20038',
    parentId: '100005',
    title: 'null',
    categoryId: '12'
  },
  {
    en: 'Pet Care',
    zh: '宠物护理',
    id: '20039',
    parentId: '100005',
    title: 'shop-subcategory-pet-care',
    categoryId: '303'
  },
  {
    en: 'Tools & Gardening',
    zh: '工具&园艺',
    id: '20040',
    parentId: '100005',
    title: 'shop-subcategory-tools-gardening',
    categoryId: '4356'
  },
  {
    en: 'Stationery & Supplies',
    zh: '文具用品',
    id: '20041',
    parentId: '100005',
    title: 'null',
    categoryId: '478'
  },
  {
    en: 'Collectibles & Books',
    zh: '收藏品&图书',
    id: '20042',
    parentId: '100005',
    title: 'null',
    categoryId: '33'
  },
  {
    en: 'CD & DVD',
    zh: '光盘和 DVD',
    id: '20043',
    parentId: '100005',
    title: 'null',
    categoryId: '772'
  },
  {
    en: 'Fruits & Vegetables',
    zh: '蔬菜水果',
    id: '20044',
    parentId: '100006',
    title: 'shop-subcategory-fruits-vegetables',
    categoryId: 'null'
  },
  {
    en: 'Meat & Seafood',
    zh: '生鲜',
    id: '20045',
    parentId: '100006',
    title: 'shop-subcategory-meat-seafood',
    categoryId: '360'
  },
  {
    en: 'Dairy & Chilled',
    zh: '乳制品&冷藏食品',
    id: '20046',
    parentId: '100006',
    title: 'shop-subcategory-dairy-chilled',
    categoryId: '215'
  },
  {
    en: 'Food Staples',
    zh: '食材',
    id: '20047',
    parentId: '100006',
    title: 'shop-subcategory-food-staples',
    categoryId: 'null'
  },
  {
    en: 'Nutritious Items',
    zh: '营养品',
    id: '20048',
    parentId: '100006',
    title: 'shop-subcategory-nutritious-items',
    categoryId: '452'
  },
  {
    en: 'Drinks',
    zh: '饮品',
    id: '20049',
    parentId: '100006',
    title: 'shop-subcategory-drinks',
    categoryId: '1084'
  },
  {
    en: 'Cakes & Snacks',
    zh: '糕点&零食',
    id: '20050',
    parentId: '100006',
    title: 'shop-subcategory-cakes-snacks',
    categoryId: '6744'
  },
  {
    en: 'Kids Fashion',
    zh: '儿童时装',
    id: '20051',
    parentId: '100007',
    title: 'null',
    categoryId: '6935'
  },
  {
    en: 'Toys',
    zh: '玩具',
    id: '20052',
    parentId: '100007',
    title: 'null',
    categoryId: '17'
  },
  {
    en: 'Baby & Maternity',
    zh: '婴儿&孕妇',
    id: '20053',
    parentId: '100007',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Travel & Transportation',
    zh: '旅游&交通',
    id: '20054',
    parentId: '100008',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Top-Up & Gift Card',
    zh: '充值&礼品卡',
    id: '20055',
    parentId: '100008',
    title: 'null',
    categoryId: '5234'
  },
  {
    en: 'Massage & Spa',
    zh: '按摩&水疗',
    id: '20056',
    parentId: '100008',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Cleansers',
    zh: '洁面产品',
    id: '30001',
    parentId: '20001',
    title: 'shop-subcategory-link-cleansers',
    categoryId: '2717'
  },
  {
    en: 'Toners/Mist',
    zh: '化妆水、爽肤水',
    id: '30002',
    parentId: '20001',
    title: 'shop-subcategory-link-toners-mist',
    categoryId: '3317'
  },
  {
    en: 'Serum/Essence',
    zh: '安瓶、精华液',
    id: '30003',
    parentId: '20001',
    title: 'shop-subcategory-link-serum-essence',
    categoryId: '3195'
  },
  {
    en: 'Moisturizers/Creams',
    zh: '乳液/面霜',
    id: '30004',
    parentId: '20001',
    title: 'shop-subcategory-link-moisturizers-creams',
    categoryId: '1309'
  },
  {
    en: 'Masks',
    zh: '面膜',
    id: '30005',
    parentId: '20001',
    title: 'shop-subcategory-link-masks',
    categoryId: '1323'
  },
  {
    en: 'Eye Care',
    zh: '眼部护理',
    id: '30006',
    parentId: '20001',
    title: 'null',
    categoryId: '3331'
  },
  {
    en: 'Sun Care',
    zh: '防晒',
    id: '30007',
    parentId: '20001',
    title: 'null',
    categoryId: '1312'
  },
  {
    en: 'Targeted Skincare',
    zh: 'T区护理',
    id: '30008',
    parentId: '20001',
    title: 'null',
    categoryId: '1339'
  },
  {
    en: 'Lip',
    zh: '嘴唇',
    id: '30009',
    parentId: '20002',
    title: 'shop-subcategory-link-lip',
    categoryId: '6863'
  },
  {
    en: 'Face',
    zh: '脸部',
    id: '30010',
    parentId: '20002',
    title: 'shop-subcategory-link-face',
    categoryId: '6865'
  },
  {
    en: 'Eye Make Up',
    zh: '眼妆',
    id: '30011',
    parentId: '20002',
    title: 'shop-subcategory-link-eye-make-up',
    categoryId: '6866'
  },
  {
    en: 'Men’s Grooming',
    zh: '男士美容',
    id: '30012',
    parentId: '20002',
    title: 'shop-subcategory-link-men-grooming',
    categoryId: '6870'
  },
  {
    en: 'Beauty Tools',
    zh: '美容仪器',
    id: '30013',
    parentId: '20003',
    title: 'shop-subcategory-link-beauty-tools',
    categoryId: '47'
  },
  {
    en: 'Body / Shower',
    zh: '沐浴用品',
    id: '30014',
    parentId: '20003',
    title: 'shop-subcategory-link-body-shower',
    categoryId: '2492'
  },
  {
    en: 'Nail Care',
    zh: '美甲',
    id: '30015',
    parentId: '20003',
    title: 'shop-subcategory-link-nail-care',
    categoryId: '2546'
  },
  {
    en: 'Foot Care',
    zh: '足部护理',
    id: '30016',
    parentId: '20003',
    title: 'shop-subcategory-link-foot-care',
    categoryId: '2779'
  },
  {
    en: 'Shaving / Hair Removal',
    zh: '剃须/脱毛',
    id: '30017',
    parentId: '20003',
    title: 'null',
    categoryId: '1308'
  },
  {
    en: 'Lotion / Cream',
    zh: '乳液/面霜',
    id: '30018',
    parentId: '20003',
    title: 'shop-subcategory-link-lotion-cream',
    categoryId: '1309'
  },
  {
    en: 'Hand Care',
    zh: '手部护理',
    id: '30019',
    parentId: '20003',
    title: 'null',
    categoryId: '7570'
  },
  {
    en: 'Body Treatment',
    zh: '身体护理',
    id: '30020',
    parentId: '20003',
    title: 'null',
    categoryId: '4069'
  },
  {
    en: 'Shampoo',
    zh: '洗发水',
    id: '30021',
    parentId: '20004',
    title: 'shop-subcategory-link-shampoo',
    categoryId: '1975'
  },
  {
    en: 'Conditioner',
    zh: '护发素',
    id: '30022',
    parentId: '20004',
    title: 'shop-subcategory-link-conditioner',
    categoryId: '1976'
  },
  {
    en: 'Hair & Scalp Treatment',
    zh: '头发和头皮护理',
    id: '30023',
    parentId: '20004',
    title: 'shop-subcategory-link-hair-scalp-treatment',
    categoryId: '3187'
  },
  {
    en: 'Hair Styling & Tools',
    zh: '美发造型和工具',
    id: '30024',
    parentId: '20004',
    title: 'shop-subcategory-link-hair-styling-tools',
    categoryId: '6875'
  },
  {
    en: 'Hair Coloring',
    zh: '染发剂',
    id: '30025',
    parentId: '20004',
    title: 'null',
    categoryId: '2839'
  },
  {
    en: 'Salon Grade',
    zh: '',
    id: '30026',
    parentId: '20004',
    title: 'shop-subcategory-link-salon-grade',
    categoryId: 'null'
  },
  {
    en: 'Dietary Supplement',
    zh: '膳食补充剂',
    id: '30027',
    parentId: '20005',
    title: 'null',
    categoryId: '2906'
  },
  {
    en: 'Slimming Treatment',
    zh: '减肥配方',
    id: '30028',
    parentId: '20005',
    title: 'null',
    categoryId: '1480'
  },
  {
    en: 'Vitamins',
    zh: '维生素',
    id: '30029',
    parentId: '20005',
    title: 'null',
    categoryId: '7813'
  },
  {
    en: 'Superfood',
    zh: '超级食物',
    id: '30030',
    parentId: '20005',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Detox Drinks',
    zh: '排毒饮品',
    id: '30031',
    parentId: '20005',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Health Supplement',
    zh: '营养保健',
    id: '30032',
    parentId: '20005',
    title: 'null',
    categoryId: '32'
  },
  {
    en: 'Fish Oil',
    zh: '鱼油',
    id: '30033',
    parentId: '20005',
    title: 'null',
    categoryId: '1539'
  },
  {
    en: 'Collagen',
    zh: '胶原蛋白',
    id: '30034',
    parentId: '20005',
    title: 'null',
    categoryId: '1487'
  },
  {
    en: 'Sexual Wellness',
    zh: '计生情趣',
    id: '30035',
    parentId: '20006',
    title: 'null',
    categoryId: '178'
  },
  {
    en: 'Personal Hygienes',
    zh: '个人卫生',
    id: '30036',
    parentId: '20006',
    title: 'null',
    categoryId: '6390'
  },
  {
    en: 'OTC Medicine',
    zh: '非处方药',
    id: '30037',
    parentId: '20006',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Medical Supplies',
    zh: '医疗用品',
    id: '30038',
    parentId: '20006',
    title: 'null',
    categoryId: '1791'
  },
  {
    en: 'Eye & Ear Care',
    zh: '眼耳护理',
    id: '30039',
    parentId: '20006',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'First Aid',
    zh: '急救用品',
    id: '30040',
    parentId: '20006',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Stop Smoking & Sleeping Aid',
    zh: '戒烟和助眠',
    id: '30041',
    parentId: '20006',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Fragrance',
    zh: '香氛',
    id: '30042',
    parentId: '20007',
    title: 'null',
    categoryId: '7296'
  },
  {
    en: 'Brand Skincare/Cosmetics',
    zh: '品牌护肤品/彩妆',
    id: '30043',
    parentId: '20007',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Aroma Therapy',
    zh: '芳香疗法',
    id: '30044',
    parentId: '20007',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Dresses',
    zh: '连衣裙',
    id: '30045',
    parentId: '20008',
    title: 'shop-subcategory-link-dresses',
    categoryId: '1293'
  },
  {
    en: 'Tops',
    zh: '上衣',
    id: '30046',
    parentId: '20008',
    title: 'shop-subcategory-link-tops',
    categoryId: 'null'
  },
  {
    en: 'Shirts / Blouses',
    zh: '女式衬衫',
    id: '30047',
    parentId: '20008',
    title: 'shop-subcategory-link-shirts-blouses',
    categoryId: '2023'
  },
  {
    en: 'Skirts',
    zh: '半身裙',
    id: '30048',
    parentId: '20008',
    title: 'shop-subcategory-link-skirts',
    categoryId: '1305'
  },
  {
    en: 'Pants',
    zh: '裤子',
    id: '30049',
    parentId: '20008',
    title: 'shop-subcategory-link-pants',
    categoryId: '669'
  },
  {
    en: 'Jeans',
    zh: '牛仔裤',
    id: '30050',
    parentId: '20008',
    title: 'null',
    categoryId: '672'
  },
  {
    en: 'Shorts',
    zh: '短裤',
    id: '30051',
    parentId: '20008',
    title: 'null',
    categoryId: '670'
  },
  {
    en: 'Jackets',
    zh: '外套',
    id: '30052',
    parentId: '20008',
    title: 'null',
    categoryId: '662'
  },
  {
    en: 'Cardigans / Sweater',
    zh: '羊毛衫',
    id: '30053',
    parentId: '20008',
    title: 'null',
    categoryId: '2562'
  },
  {
    en: 'Hoodies',
    zh: '卫衣',
    id: '30054',
    parentId: '20008',
    title: 'null',
    categoryId: '661'
  },
  {
    en: 'Jumpsuits',
    zh: '连体裤',
    id: '30055',
    parentId: '20008',
    title: 'null',
    categoryId: '674'
  },
  {
    en: 'Traditional Clothes',
    zh: '传统服饰',
    id: '30056',
    parentId: '20008',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Plus Sizes',
    zh: '加大码',
    id: '30057',
    parentId: '20008',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Bras',
    zh: '文胸',
    id: '30058',
    parentId: '20009',
    title: 'shop-subcategory-link-bras',
    categoryId: '1275'
  },
  {
    en: 'Panties',
    zh: '内裤',
    id: '30059',
    parentId: '20009',
    title: 'shop-subcategory-link-panties',
    categoryId: '6774'
  },
  {
    en: 'Lingerie',
    zh: '内衣',
    id: '30060',
    parentId: '20009',
    title: 'shop-subcategory-link-lingerie',
    categoryId: '4053'
  },
  {
    en: 'Sleepwear',
    zh: '睡衣',
    id: '30061',
    parentId: '20009',
    title: 'shop-subcategory-link-sleepwear',
    categoryId: '6930'
  },
  {
    en: 'Body shapers',
    zh: '塑身衣',
    id: '30062',
    parentId: '20009',
    title: 'shop-subcategory-link-body-shapers',
    categoryId: '2478'
  },
  {
    en: 'Lingerie Accessories',
    zh: '内衣配件',
    id: '30063',
    parentId: '20009',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Shoes',
    zh: '鞋子',
    id: '30064',
    parentId: '20010',
    title: 'shop-category-shoes',
    categoryId: '70'
  },
  {
    en: 'Bags',
    zh: '包',
    id: '30065',
    parentId: '20010',
    title: 'shop-category-bags',
    categoryId: '652'
  },
  {
    en: 'Accessories',
    zh: '饰品',
    id: '30066',
    parentId: '20010',
    title: 'shop-subcategory-accessories',
    categoryId: '653'
  },
  {
    en: 'Travel/Luggages',
    zh: '旅行/箱包',
    id: '30067',
    parentId: '20010',
    title: 'null',
    categoryId: '7336'
  },
  {
    en: 'Wallet',
    zh: '钱包',
    id: '30068',
    parentId: '20010',
    title: 'shop-subcategory-link-wallets',
    categoryId: '7866'
  },
  {
    en: 'Jewelry',
    zh: '首饰',
    id: '30069',
    parentId: '20010',
    title: 'shop-category-jewelry',
    categoryId: '4054'
  },
  {
    en: 'Others',
    zh: '其他',
    id: '30070',
    parentId: '20010',
    title: 'shop-subcategory-link-others',
    categoryId: '42'
  },
  {
    en: 'T-Shirts/ Polo',
    zh: 'T 恤/ Polo 衫',
    id: '30071',
    parentId: '20011',
    title: 'shop-subcategory-link-t-shirts-polo',
    categoryId: '655'
  },
  {
    en: 'Sweater / Knitwear',
    zh: '毛衣/针织衫',
    id: '30072',
    parentId: '20011',
    title: 'shop-subcategory-link-sweater-knitwear',
    categoryId: '1295'
  },
  {
    en: 'Outerwear',
    zh: '外套',
    id: '30073',
    parentId: '20011',
    title: 'shop-subcategory-link-outerwear',
    categoryId: '662'
  },
  {
    en: 'Innerwear / Socks',
    zh: '内衣/袜子',
    id: '30074',
    parentId: '20011',
    title: 'shop-subcategory-link-innerwear-socks',
    categoryId: 'null'
  },
  {
    en: 'Winterwear',
    zh: '冬装',
    id: '30075',
    parentId: '20011',
    title: 'shop-subcategory-link-winter-wear',
    categoryId: 'null'
  },
  {
    en: 'Pants',
    zh: '裤子',
    id: '30076',
    parentId: '20011',
    title: 'shop-subcategory-link-pants',
    categoryId: '2066'
  },
  {
    en: 'Suits',
    zh: '西装',
    id: '30077',
    parentId: '20011',
    title: 'null',
    categoryId: '660'
  },
  {
    en: 'Shirts',
    zh: '衬衫',
    id: '30078',
    parentId: '20011',
    title: 'null',
    categoryId: '656'
  },
  {
    en: 'Shorts',
    zh: '短裤',
    id: '30079',
    parentId: '20011',
    title: 'null',
    categoryId: '670'
  },
  {
    en: 'Jeans',
    zh: '牛仔裤',
    id: '30080',
    parentId: '20011',
    title: 'null',
    categoryId: '672'
  },
  {
    en: 'Plus Sizes',
    zh: '加大码',
    id: '30081',
    parentId: '20011',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Traditional Clothes',
    zh: '传统服饰',
    id: '30082',
    parentId: '20011',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Handbags',
    zh: '手提包',
    id: '30083',
    parentId: '20012',
    title: 'shop-subcategory-link-handbags',
    categoryId: '1813'
  },
  {
    en: 'Wallets',
    zh: '钱包',
    id: '30084',
    parentId: '20012',
    title: 'shop-subcategory-link-wallets',
    categoryId: '1230'
  },
  {
    en: 'Backpacks',
    zh: '背包',
    id: '30085',
    parentId: '20012',
    title: 'shop-subcategory-link-backpacks',
    categoryId: '935'
  },
  {
    en: 'Luggages',
    zh: '行李箱',
    id: '30086',
    parentId: '20012',
    title: 'shop-subcategory-link-luggages',
    categoryId: '2995'
  },
  {
    en: 'Brand Bags',
    zh: '品牌箱包',
    id: '30087',
    parentId: '20012',
    title: 'shop-subcategory-brand-bags',
    categoryId: 'null'
  },
  {
    en: 'Bag Accessories',
    zh: '箱包配件',
    id: '30088',
    parentId: '20012',
    title: 'shop-category-bags-accessories',
    categoryId: '2185'
  },
  {
    en: 'Hair Goods',
    zh: '美发用品',
    id: '30089',
    parentId: '20013',
    title: 'shop-subcategory-link-hair-goods',
    categoryId: '277'
  },
  {
    en: 'Eyewear',
    zh: '眼镜',
    id: '30090',
    parentId: '20013',
    title: 'shop-subcategory-link-eyewear',
    categoryId: '650'
  },
  {
    en: 'Hats / Caps',
    zh: '帽子',
    id: '30091',
    parentId: '20013',
    title: 'shop-subcategory-link-hats-caps',
    categoryId: '651'
  },
  {
    en: 'Scarves',
    zh: '围巾',
    id: '30092',
    parentId: '20013',
    title: 'shop-subcategory-link-scarves',
    categoryId: '3315'
  },
  {
    en: 'Belts',
    zh: '腰带',
    id: '30093',
    parentId: '20013',
    title: 'shop-subcategory-link-belts',
    categoryId: '649'
  },
  {
    en: 'Stockings',
    zh: '长筒袜',
    id: '30094',
    parentId: '20013',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Socks',
    zh: '袜子',
    id: '30095',
    parentId: '20013',
    title: 'null',
    categoryId: '648'
  },
  {
    en: 'Fashion Accessories',
    zh: '时尚饰品',
    id: '30096',
    parentId: '20013',
    title: 'null',
    categoryId: '142'
  },
  {
    en: 'Sandals',
    zh: '凉鞋',
    id: '30097',
    parentId: '20014',
    title: 'null',
    categoryId: '1463'
  },
  {
    en: 'Heels',
    zh: '高跟鞋',
    id: '30098',
    parentId: '20014',
    title: 'null',
    categoryId: '1462'
  },
  {
    en: 'Slippers',
    zh: '拖鞋',
    id: '30099',
    parentId: '20014',
    title: 'null',
    categoryId: '1021'
  },
  {
    en: 'Boots',
    zh: '靴子',
    id: '30100',
    parentId: '20014',
    title: 'null',
    categoryId: '1243'
  },
  {
    en: 'Comfort Shoes',
    zh: '休闲鞋',
    id: '30101',
    parentId: '20014',
    title: 'null',
    categoryId: '966'
  },
  {
    en: 'Flats',
    zh: '平底鞋',
    id: '30102',
    parentId: '20014',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Sneakers',
    zh: '球鞋',
    id: '30103',
    parentId: '20014',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Brand Shoes',
    zh: '品牌鞋',
    id: '30104',
    parentId: '20014',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Shoe Accessories',
    zh: '鞋类配件',
    id: '30105',
    parentId: '20014',
    title: 'null',
    categoryId: '1461'
  },
  {
    en: 'Luxury Watches',
    zh: '奢侈手表',
    id: '30106',
    parentId: '20015',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Fashion Watches',
    zh: '时尚手表',
    id: '30107',
    parentId: '20015',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Digital Watches',
    zh: '电子手表',
    id: '30108',
    parentId: '20015',
    title: 'null',
    categoryId: '3417'
  },
  {
    en: 'Watch Accessories',
    zh: '腕表配件',
    id: '30109',
    parentId: '20015',
    title: 'null',
    categoryId: '799'
  },
  {
    en: 'Necklaces',
    zh: '项链',
    id: '30110',
    parentId: '20016',
    title: 'null',
    categoryId: '1131'
  },
  {
    en: 'Earrings',
    zh: '耳环',
    id: '30111',
    parentId: '20016',
    title: 'null',
    categoryId: '2795'
  },
  {
    en: 'Bracelets',
    zh: '手链',
    id: '30112',
    parentId: '20016',
    title: 'null',
    categoryId: '6217'
  },
  {
    en: 'Brooches',
    zh: '胸针',
    id: '30113',
    parentId: '20016',
    title: 'null',
    categoryId: '1178'
  },
  {
    en: 'Rings',
    zh: '戒指',
    id: '30114',
    parentId: '20016',
    title: 'null',
    categoryId: '6923'
  },
  {
    en: 'Gold/Silver Bar',
    zh: '金/银条',
    id: '30115',
    parentId: '20016',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Golf',
    zh: '高尔夫',
    id: '30116',
    parentId: '20017',
    title: 'shop-subcategory-link-golf',
    categoryId: '5504'
  },
  {
    en: 'Cycling',
    zh: '自行车',
    id: '30117',
    parentId: '20017',
    title: 'shop-subcategory-link-cycling',
    categoryId: '1434'
  },
  {
    en: 'Camping / Fishing',
    zh: '露营/钓鱼',
    id: '30118',
    parentId: '20017',
    title: 'shop-subcategory-link-camping-fishing',
    categoryId: '230'
  },
  {
    en: 'Swimming / Watersports',
    zh: '游泳/水上运动',
    id: '30119',
    parentId: '20017',
    title: 'shop-subcategory-link-swimming-watersports',
    categoryId: '231'
  },
  {
    en: 'Home Gym',
    zh: '健身用品',
    id: '30120',
    parentId: '20017',
    title: 'shop-subcategory-link-home-gym',
    categoryId: '5355'
  },
  {
    en: 'Yoga',
    zh: '瑜伽',
    id: '30121',
    parentId: '20017',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Team Sports',
    zh: '互动式运动设备',
    id: '30122',
    parentId: '20017',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Sport Supplements',
    zh: '运动补充剂',
    id: '30123',
    parentId: '20017',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Sports Aid',
    zh: '体育辅助',
    id: '30124',
    parentId: '20017',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Racket Sports',
    zh: '运动球拍',
    id: '30125',
    parentId: '20017',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Scooters / Skateboards',
    zh: '滑板车 / 滑板',
    id: '30126',
    parentId: '20017',
    title: 'null',
    categoryId: '2539'
  },
  {
    en: 'MMA / Boxing / Martial Arts',
    zh: '综合格斗/拳击/武术',
    id: '30127',
    parentId: '20017',
    title: 'null',
    categoryId: '999'
  },
  {
    en: 'Winter Sports',
    zh: '冬季运动',
    id: '30128',
    parentId: '20017',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Sports Accessories',
    zh: '运动配件',
    id: '30129',
    parentId: '20018',
    title: 'shop-subcategory-link-sports-accessories',
    categoryId: '1028'
  },
  {
    en: 'Sports Bags',
    zh: '运动包',
    id: '30130',
    parentId: '20018',
    title: 'shop-subcategory-link-sports-bags',
    categoryId: '982'
  },
  {
    en: 'Men Footwear',
    zh: '男士鞋类',
    id: '30131',
    parentId: '20018',
    title: 'shop-subcategory-link-men-footwear',
    categoryId: '227'
  },
  {
    en: 'Women Footwear',
    zh: '女士鞋类',
    id: '30132',
    parentId: '20018',
    title: 'null',
    categoryId: '228'
  },
  {
    en: 'Outerwear',
    zh: '外套',
    id: '30133',
    parentId: '20019',
    title: 'shop-subcategory-link-outerwear',
    categoryId: '662'
  },
  {
    en: 'Sports Bras',
    zh: '运动内衣',
    id: '30134',
    parentId: '20019',
    title: 'null',
    categoryId: '2953'
  },
  {
    en: 'Pants',
    zh: '裤子',
    id: '30135',
    parentId: '20019',
    title: 'shop-subcategory-link-pants',
    categoryId: '669'
  },
  {
    en: 'Tops',
    zh: '上衣',
    id: '30136',
    parentId: '20019',
    title: 'shop-subcategory-link-tops',
    categoryId: 'null'
  },
  {
    en: 'Shorts',
    zh: '短裤',
    id: '30137',
    parentId: '20019',
    title: 'null',
    categoryId: '670'
  },
  {
    en: 'Swimwear',
    zh: '泳装',
    id: '30138',
    parentId: '20019',
    title: 'null',
    categoryId: '2166'
  },
  {
    en: 'Socks',
    zh: '袜子',
    id: '30139',
    parentId: '20019',
    title: 'null',
    categoryId: '648'
  },
  {
    en: 'Compression wear',
    zh: '塑身衣',
    id: '30140',
    parentId: '20019',
    title: 'null',
    categoryId: '2478'
  },
  {
    en: 'Yoga Pants',
    zh: '瑜珈裤',
    id: '30141',
    parentId: '20019',
    title: 'null',
    categoryId: '7630'
  },
  {
    en: 'Golf Accessories',
    zh: '高尔夫配件',
    id: '30142',
    parentId: '20020',
    title: 'null',
    categoryId: '5504'
  },
  {
    en: 'Golf Gloves',
    zh: '高尔夫球手套',
    id: '30143',
    parentId: '20020',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Golf Clubs',
    zh: '高尔夫球杆',
    id: '30144',
    parentId: '20020',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Golf Balls',
    zh: '高尔夫球',
    id: '30145',
    parentId: '20020',
    title: 'null',
    categoryId: '5338'
  },
  {
    en: 'Golf Bags',
    zh: '高尔夫球袋',
    id: '30146',
    parentId: '20020',
    title: 'null',
    categoryId: '8146'
  },
  {
    en: 'Golf Towel',
    zh: '高尔夫球巾',
    id: '30147',
    parentId: '20020',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Golf Training Aids',
    zh: '高尔夫训练辅助工具',
    id: '30148',
    parentId: '20020',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Outerwear',
    zh: '外套',
    id: '30149',
    parentId: '20021',
    title: 'shop-subcategory-link-outerwear',
    categoryId: '662'
  },
  {
    en: 'Swimwear',
    zh: '泳装',
    id: '30150',
    parentId: '20021',
    title: 'null',
    categoryId: '2166'
  },
  {
    en: 'Tops',
    zh: '上衣',
    id: '30151',
    parentId: '20021',
    title: 'shop-subcategory-link-tops',
    categoryId: 'null'
  },
  {
    en: 'Trunks',
    zh: '运动短裤',
    id: '30152',
    parentId: '20021',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Pants',
    zh: '裤子',
    id: '30153',
    parentId: '20021',
    title: 'shop-subcategory-link-pants',
    categoryId: '669'
  },
  {
    en: 'Jerseys',
    zh: '球衣',
    id: '30154',
    parentId: '20021',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Shorts',
    zh: '短裤',
    id: '30155',
    parentId: '20021',
    title: 'null',
    categoryId: '670'
  },
  {
    en: 'Bike Jerseys',
    zh: '骑行服',
    id: '30156',
    parentId: '20021',
    title: 'null',
    categoryId: '4326'
  },
  {
    en: 'Socks',
    zh: '袜子',
    id: '30157',
    parentId: '20021',
    title: 'null',
    categoryId: '648'
  },
  {
    en: 'Bicycle',
    zh: '自行车',
    id: '30158',
    parentId: '20022',
    title: 'null',
    categoryId: '1434'
  },
  {
    en: 'Cycling Accessories',
    zh: '自行车配件',
    id: '30159',
    parentId: '20022',
    title: 'null',
    categoryId: '976'
  },
  {
    en: 'Protective Gear',
    zh: '防护用具',
    id: '30160',
    parentId: '20022',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Mountain Bicycle',
    zh: '登山车',
    id: '30161',
    parentId: '20022',
    title: 'null',
    categoryId: '957'
  },
  {
    en: 'Foldable Bicycle',
    zh: '折叠自行车',
    id: '30162',
    parentId: '20022',
    title: 'null',
    categoryId: '945'
  },
  {
    en: 'Cycling Light',
    zh: '自行车灯',
    id: '30163',
    parentId: '20022',
    title: 'null',
    categoryId: '4485'
  },
  {
    en: 'Cycling Helmet',
    zh: '骑行头盔',
    id: '30164',
    parentId: '20022',
    title: 'null',
    categoryId: '3167'
  },
  {
    en: 'Cycling Pump',
    zh: '单车泵',
    id: '30165',
    parentId: '20022',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Cycling Lock',
    zh: '自行车锁',
    id: '30166',
    parentId: '20022',
    title: 'null',
    categoryId: '4900'
  },
  {
    en: 'Cycling Bell',
    zh: '自行车铃',
    id: '30167',
    parentId: '20022',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Parts & Components',
    zh: '零件和组件',
    id: '30168',
    parentId: '20022',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Camping',
    zh: '露营',
    id: '30169',
    parentId: '20023',
    title: 'null',
    categoryId: '230'
  },
  {
    en: 'Hiking',
    zh: '徒步旅行',
    id: '30170',
    parentId: '20023',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Tents',
    zh: '帐篷',
    id: '30171',
    parentId: '20023',
    title: 'null',
    categoryId: '2164'
  },
  {
    en: 'Fishing',
    zh: '钓鱼',
    id: '30172',
    parentId: '20023',
    title: 'null',
    categoryId: '975'
  },
  {
    en: 'Survival Kit',
    zh: '生存用品',
    id: '30173',
    parentId: '20023',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Sleeping Bags',
    zh: '睡袋',
    id: '30174',
    parentId: '20023',
    title: 'null',
    categoryId: '936'
  },
  {
    en: 'Climbing Carabiners',
    zh: '攀岩扣环',
    id: '30175',
    parentId: '20023',
    title: 'null',
    categoryId: '971'
  },
  {
    en: 'Camping Chair',
    zh: '露营椅',
    id: '30176',
    parentId: '20023',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Compass',
    zh: '指南针',
    id: '30177',
    parentId: '20023',
    title: 'null',
    categoryId: '4923'
  },
  {
    en: 'Coolers',
    zh: '冷却器',
    id: '30178',
    parentId: '20023',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Armbands',
    zh: '臂章',
    id: '30179',
    parentId: '20024',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Knee Guards',
    zh: '护膝',
    id: '30180',
    parentId: '20024',
    title: 'null',
    categoryId: '4808'
  },
  {
    en: 'Gloves',
    zh: '手套',
    id: '30181',
    parentId: '20024',
    title: 'null',
    categoryId: '2287'
  },
  {
    en: 'Water Bottle',
    zh: '水瓶',
    id: '30182',
    parentId: '20024',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Sunglasses',
    zh: '墨镜',
    id: '30183',
    parentId: '20024',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Cycling',
    zh: '自行车',
    id: '30184',
    parentId: '20024',
    title: 'shop-subcategory-link-cycling',
    categoryId: '1434'
  },
  {
    en: 'Wrist Guards',
    zh: '护腕',
    id: '30185',
    parentId: '20024',
    title: 'null',
    categoryId: '913'
  },
  {
    en: 'Goggles',
    zh: '泳镜',
    id: '30186',
    parentId: '20025',
    title: 'null',
    categoryId: '940'
  },
  {
    en: 'Swim Caps',
    zh: '泳帽',
    id: '30187',
    parentId: '20025',
    title: 'null',
    categoryId: '948'
  },
  {
    en: 'Life Vests',
    zh: '救生衣',
    id: '30188',
    parentId: '20025',
    title: 'null',
    categoryId: '4473'
  },
  {
    en: 'Inflatable Boats',
    zh: '充气船',
    id: '30189',
    parentId: '20025',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Dry Bag',
    zh: '干燥袋',
    id: '30190',
    parentId: '20025',
    title: 'null',
    categoryId: '708'
  },
  {
    en: 'Diving & Snorkeling',
    zh: '潜水和浮潜',
    id: '30191',
    parentId: '20025',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Float',
    zh: '浮板',
    id: '30192',
    parentId: '20025',
    title: 'null',
    categoryId: '2319'
  },
  {
    en: 'Gym Bags',
    zh: '健身包',
    id: '30193',
    parentId: '20026',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Waterproof Bags',
    zh: '防水袋',
    id: '30194',
    parentId: '20026',
    title: 'null',
    categoryId: '3542'
  },
  {
    en: 'Drawstring Bags',
    zh: '束袋包',
    id: '30195',
    parentId: '20026',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Swimming Bags',
    zh: '游泳包',
    id: '30196',
    parentId: '20026',
    title: 'null',
    categoryId: '964'
  },
  {
    en: 'Shoe Bag',
    zh: '鞋包',
    id: '30197',
    parentId: '20026',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Yoga Mat Bags',
    zh: '瑜伽垫袋',
    id: '30198',
    parentId: '20026',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Badminton Racket Bag',
    zh: '羽毛球球拍袋',
    id: '30199',
    parentId: '20026',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Hiking Backpacks',
    zh: '徒步旅行背包',
    id: '30200',
    parentId: '20026',
    title: 'null',
    categoryId: '5724'
  },
  {
    en: 'Cases / Covers',
    zh: '手机壳',
    id: '30201',
    parentId: '20027',
    title: 'shop-subcategory-link-cases-covers',
    categoryId: '1055'
  },
  {
    en: 'Chargers / Cables',
    zh: '充电器 / 数据线',
    id: '30202',
    parentId: '20027',
    title: 'shop-subcategory-link-chargers-cables',
    categoryId: '1045'
  },
  {
    en: 'Earphones & Headsets',
    zh: '耳机和头戴式耳机',
    id: '30203',
    parentId: '20027',
    title: 'shop-subcategory-link-earphones-headsets',
    categoryId: '4021'
  },
  {
    en: 'Screen Protectors',
    zh: '屏幕保护膜',
    id: '30204',
    parentId: '20027',
    title: 'shop-subcategory-link-screen-protectors',
    categoryId: '3398'
  },
  {
    en: 'Powerbanks / Batteries',
    zh: '移动电源/电池',
    id: '30205',
    parentId: '20027',
    title: 'shop-subcategory-link-powerbanks-batteries',
    categoryId: '1046'
  },
  {
    en: 'Memory / Connectivity',
    zh: '内存/连接线',
    id: '30206',
    parentId: '20027',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Kitchen Appliances',
    zh: '厨房电器',
    id: '30207',
    parentId: '20028',
    title: 'shop-subcategory-link-kitchen-appliances',
    categoryId: '53'
  },
  {
    en: 'Medical Devices',
    zh: '医疗装置',
    id: '30208',
    parentId: '20028',
    title: 'shop-subcategory-link-medical-devices',
    categoryId: ''
  },
  {
    en: 'Fan',
    zh: '风扇',
    id: '30209',
    parentId: '20028',
    title: 'shop-subcategory-link-fan',
    categoryId: '2241'
  },
  {
    en: 'Vacuum Cleaner',
    zh: '吸尘器',
    id: '30210',
    parentId: '20028',
    title: 'shop-subcategory-link-vacuum-cleaner',
    categoryId: '717'
  },
  {
    en: 'Personal Grooming',
    zh: '修容用具',
    id: '30211',
    parentId: '20028',
    title: 'shop-subcategory-link-personal-grooming',
    categoryId: '3904'
  },
  {
    en: 'Water Care & Treatment',
    zh: '净水器',
    id: '30212',
    parentId: '20028',
    title: 'null',
    categoryId: '729'
  },
  {
    en: 'Humidifier / Dehumidifie',
    zh: '加湿器/除湿机',
    id: '30213',
    parentId: '20028',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Power Supply',
    zh: '电源供应',
    id: '30214',
    parentId: '20028',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Air Purifier',
    zh: '空气净化器',
    id: '30215',
    parentId: '20028',
    title: 'null',
    categoryId: '738'
  },
  {
    en: 'Home Security',
    zh: '居家监控',
    id: '30216',
    parentId: '20028',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Iron',
    zh: '挂烫机/熨斗',
    id: '30217',
    parentId: '20028',
    title: 'null',
    categoryId: '734'
  },
  {
    en: 'Telephone / FAX',
    zh: '电话/传真',
    id: '30218',
    parentId: '20028',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Sewing Machine',
    zh: '缝纫机',
    id: '30219',
    parentId: '20028',
    title: 'null',
    categoryId: '2594'
  },
  {
    en: 'Heating Pads',
    zh: '加热垫',
    id: '30220',
    parentId: '20028',
    title: 'null',
    categoryId: '4371'
  },
  {
    en: 'Others',
    zh: '其他',
    id: '30221',
    parentId: '20028',
    title: 'shop-subcategory-link-others',
    categoryId: '42'
  },
  {
    en: 'Desktops',
    zh: '台式机',
    id: '30222',
    parentId: '20029',
    title: 'shop-subcategory-link-desktops',
    categoryId: '1648'
  },
  {
    en: 'Peripherals / Accessories',
    zh: '周边/配件',
    id: '30223',
    parentId: '20029',
    title: 'shop-subcategory-link-peripherals-accessories',
    categoryId: 'null'
  },
  {
    en: 'Laptops',
    zh: '笔记本电脑',
    id: '30224',
    parentId: '20029',
    title: 'shop-subcategory-link-laptops',
    categoryId: '4034'
  },
  {
    en: 'Printers / Scanners',
    zh: '打印机/扫描仪',
    id: '30225',
    parentId: '20029',
    title: 'shop-subcategory-link-printers-scanners',
    categoryId: '1605'
  },
  {
    en: 'DIY / Computer Parts',
    zh: 'DIY / 电脑零件',
    id: '30226',
    parentId: '20029',
    title: 'shop-subcategory-link-diy-computer-parts',
    categoryId: 'null'
  },
  {
    en: 'Keyboards / Mouse / Input',
    zh: '键盘/鼠标',
    id: '30227',
    parentId: '20029',
    title: 'null',
    categoryId: '1616'
  },
  {
    en: 'Routers / Networking',
    zh: '路由器',
    id: '30228',
    parentId: '20029',
    title: 'null',
    categoryId: '1630'
  },
  {
    en: 'Game Titles',
    zh: '游戏',
    id: '30229',
    parentId: '20029',
    title: 'null',
    categoryId: '1662'
  },
  {
    en: 'Monitors / Projectors',
    zh: '显示器/投影仪',
    id: '30230',
    parentId: '20029',
    title: 'null',
    categoryId: '1615'
  },
  {
    en: 'External Drives / Storage',
    zh: '外置硬盘/存储',
    id: '30231',
    parentId: '20029',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'PC Software',
    zh: '电脑软件',
    id: '30232',
    parentId: '20029',
    title: 'null',
    categoryId: '7646'
  },
  {
    en: 'Game Consoles',
    zh: '游戏主机',
    id: '30233',
    parentId: '20029',
    title: 'null',
    categoryId: '1656'
  },
  {
    en: 'Camera Accessories',
    zh: '相机配件',
    id: '30234',
    parentId: '20030',
    title: 'shop-subcategory-link-camera-accessories',
    categoryId: 'null'
  },
  {
    en: 'Car Cam / Nav / Audio',
    zh: '车载摄像头/导航/音频',
    id: '30235',
    parentId: '20030',
    title: 'shop-subcategory-link-car-cam-nav-audio',
    categoryId: '3962'
  },
  {
    en: 'Camcorders / CCTV',
    zh: '摄像机',
    id: '30236',
    parentId: '20030',
    title: 'shop-subcategory-link-camcorders-cctv',
    categoryId: '1833'
  },
  {
    en: 'Action / Sports Camera',
    zh: '运动相机',
    id: '30237',
    parentId: '20030',
    title: 'shop-subcategory-link-action-sports-camera',
    categoryId: '1840'
  },
  {
    en: 'Digital Camera',
    zh: '数码相机',
    id: '30238',
    parentId: '20030',
    title: 'shop-subcategory-link-digital-camera',
    categoryId: '1831'
  },
  {
    en: 'Instant / Feature Cameras',
    zh: '功能相机',
    id: '30239',
    parentId: '20030',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'DSLR / Interchangeable',
    zh: '数码/单反相机',
    id: '30240',
    parentId: '20030',
    title: 'null',
    categoryId: '1826'
  },
  {
    en: 'Smart Gadgets',
    zh: '智能工具',
    id: '30241',
    parentId: '20031',
    title: 'shop-subcategory-link-smart-gadgets',
    categoryId: '168'
  },
  {
    en: 'Digital Wearables',
    zh: '数字可穿戴设备',
    id: '30242',
    parentId: '20031',
    title: 'shop-subcategory-link-digital-wearables',
    categoryId: 'null'
  },
  {
    en: 'Drones',
    zh: '无人机',
    id: '30243',
    parentId: '20031',
    title: 'shop-subcategory-link-drones',
    categoryId: '1847'
  },
  {
    en: 'Mobile Phones',
    zh: '手机',
    id: '30244',
    parentId: '20032',
    title: 'shop-subcategory-link-mobile-phones',
    categoryId: '1054'
  },
  {
    en: 'Speakers / Communicators',
    zh: '扬声器/通讯器',
    id: '30245',
    parentId: '20032',
    title: 'shop-subcategory-link-speakers-communicators',
    categoryId: 'null'
  },
  {
    en: 'Tablets & Ebooks',
    zh: '平板电脑 & 电子书',
    id: '30246',
    parentId: '20032',
    title: 'shop-subcategory-link-tablets-ebooks',
    categoryId: '1642'
  },
  {
    en: 'MP3 / Players',
    zh: 'MP3 / 播放器',
    id: '30247',
    parentId: '20032',
    title: 'shop-subcategory-link-mp3-players',
    categoryId: '5734'
  },
  {
    en: 'Mounts / Accessories',
    zh: '摆件支架/底座/配件',
    id: '30248',
    parentId: '20033',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Home Audio System',
    zh: '家庭音响系统',
    id: '30249',
    parentId: '20033',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'TV / Visual',
    zh: '电视 / 影像',
    id: '30250',
    parentId: '20033',
    title: 'null',
    categoryId: '342'
  },
  {
    en: 'Music / Media Players',
    zh: '音乐/媒体播放器',
    id: '30251',
    parentId: '20033',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Musical Instruments',
    zh: '乐器',
    id: '30252',
    parentId: '20033',
    title: 'null',
    categoryId: '4049'
  },
  {
    en: 'Refrigerators',
    zh: '冰箱',
    id: '30253',
    parentId: '20034',
    title: 'shop-subcategory-link-refrigerators',
    categoryId: '727'
  },
  {
    en: 'Washing Machine',
    zh: '洗衣机',
    id: '30254',
    parentId: '20034',
    title: 'shop-subcategory-link-washing-machine',
    categoryId: '744'
  },
  {
    en: 'Air Conditioner',
    zh: '空调',
    id: '30255',
    parentId: '20034',
    title: 'null',
    categoryId: '740'
  },
  {
    en: 'Mounted Fan',
    zh: '安装风扇',
    id: '30256',
    parentId: '20034',
    title: 'shop-subcategory-link-mounted-fan',
    categoryId: '2241'
  },
  {
    en: 'Cooking Equipment',
    zh: '炊具',
    id: '30257',
    parentId: '20034',
    title: 'shop-subcategory-link-cooking-equipment',
    categoryId: '6908'
  },
  {
    en: 'Water Heater',
    zh: '热水器',
    id: '30258',
    parentId: '20034',
    title: 'shop-subcategory-link-water-heater',
    categoryId: '4447'
  },
  {
    en: 'Bed / Mattress',
    zh: '床/床垫',
    id: '30259',
    parentId: '20035',
    title: 'shop-subcategory-link-bed-mattress',
    categoryId: '6420'
  },
  {
    en: 'Light / Lamp',
    zh: '灯具',
    id: '30260',
    parentId: '20035',
    title: 'shop-subcategory-link-light-lamp',
    categoryId: '4027'
  },
  {
    en: 'Sofa / Chair',
    zh: '沙发/椅子',
    id: '30261',
    parentId: '20035',
    title: 'shop-subcategory-link-sofa-chair',
    categoryId: 'null'
  },
  {
    en: 'Wardrobe / Drawer',
    zh: '衣柜/抽屉',
    id: '30262',
    parentId: '20035',
    title: 'shop-subcategory-link-wardrobe-drawer',
    categoryId: '6442'
  },
  {
    en: 'Carpet / Rug',
    zh: '地毯/地毯',
    id: '30263',
    parentId: '20035',
    title: 'shop-subcategory-link-carpet-rug',
    categoryId: '1203'
  },
  {
    en: 'Security / Alarm',
    zh: '安防监控',
    id: '30264',
    parentId: '20035',
    title: 'null',
    categoryId: '1665'
  },
  {
    en: 'Table / Desk',
    zh: '桌类、茶几',
    id: '30265',
    parentId: '20035',
    title: 'null',
    categoryId: '6270'
  },
  {
    en: 'Curtain',
    zh: '窗帘',
    id: '30266',
    parentId: '20035',
    title: 'null',
    categoryId: '1218'
  },
  {
    en: 'Bookshelf',
    zh: '书架',
    id: '30267',
    parentId: '20035',
    title: 'null',
    categoryId: '6413'
  },
  {
    en: 'Office Furniture',
    zh: '办公桌椅',
    id: '30268',
    parentId: '20035',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Home Deco / Improvement',
    zh: '软装饰品',
    id: '30269',
    parentId: '20035',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Home Organisation',
    zh: '家居清洁用品',
    id: '30270',
    parentId: '20035',
    title: 'null',
    categoryId: '366'
  },
  {
    en: 'Clock / Mirror',
    zh: '时钟/镜子',
    id: '30271',
    parentId: '20035',
    title: 'null',
    categoryId: '6881'
  },
  {
    en: 'Shoe Rack / Cabinet',
    zh: '鞋架/橱柜',
    id: '30272',
    parentId: '20035',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Fengshui',
    zh: '风水',
    id: '30273',
    parentId: '20035',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Housekeeping / Detergent',
    zh: '家用清洁',
    id: '30274',
    parentId: '20036',
    title: 'shop-subcategory-link-housekeeping-detergent',
    categoryId: '7736'
  },
  {
    en: 'Bathroom Supplies',
    zh: '卫浴用品',
    id: '30275',
    parentId: '20036',
    title: 'shop-subcategory-link-bathroom-supplies',
    categoryId: '305'
  },
  {
    en: 'Health / Correction',
    zh: '缓解疲劳',
    id: '30276',
    parentId: '20036',
    title: 'shop-subcategory-link-health-correction',
    categoryId: '1491'
  },
  {
    en: 'Hygiene Items',
    zh: '卫生用品',
    id: '30277',
    parentId: '20036',
    title: 'shop-subcategory-link-hygiene-items',
    categoryId: 'null'
  },
  {
    en: 'Medical Device',
    zh: '医疗设备',
    id: '30278',
    parentId: '20036',
    title: 'shop-subcategory-link-medical-device',
    categoryId: 'null'
  },
  {
    en: 'Beddings',
    zh: '寝具',
    id: '30279',
    parentId: '20036',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Oral Care',
    zh: '口腔护理',
    id: '30280',
    parentId: '20036',
    title: 'null',
    categoryId: '6878'
  },
  {
    en: 'Rain Coat/Umbrella',
    zh: '雨衣/雨伞',
    id: '30281',
    parentId: '20036',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Kitchen Goods',
    zh: '厨房用品',
    id: '30282',
    parentId: '20037',
    title: 'shop-subcategory-link-kitchen-goods',
    categoryId: '3905'
  },
  {
    en: 'Dishware',
    zh: '洗碗机',
    id: '30283',
    parentId: '20037',
    title: 'shop-subcategory-link-Dishware',
    categoryId: '761'
  },
  {
    en: 'Cooking Equipment',
    zh: '烹饪设备',
    id: '30284',
    parentId: '20037',
    title: 'shop-subcategory-link-cooking-equipment',
    categoryId: 'null'
  },
  {
    en: 'Kitchen Tools',
    zh: '厨具',
    id: '30285',
    parentId: '20037',
    title: 'shop-subcategory-link-kitchen-tools',
    categoryId: '389'
  },
  {
    en: 'Kitchen Storage',
    zh: '厨房储物',
    id: '30286',
    parentId: '20037',
    title: 'shop-subcategory-link-kitchen-storage',
    categoryId: '1559'
  },
  {
    en: 'Water Bottles',
    zh: '水瓶',
    id: '30287',
    parentId: '20037',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Bakeware',
    zh: '烘焙器具',
    id: '30288',
    parentId: '20037',
    title: 'null',
    categoryId: '411'
  },
  {
    en: 'Interior Accessories',
    zh: '汽车内饰',
    id: '30289',
    parentId: '20038',
    title: 'null',
    categoryId: '3352'
  },
  {
    en: 'Exterior Accessories',
    zh: '外部配件',
    id: '30290',
    parentId: '20038',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Emergency Tools',
    zh: '应急工具',
    id: '30291',
    parentId: '20038',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Cars',
    zh: '汽车',
    id: '30292',
    parentId: '20038',
    title: 'shop-category-cars',
    categoryId: 'null'
  },
  {
    en: 'Other Vehicles',
    zh: '其他交通工具',
    id: '30293',
    parentId: '20038',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Industrial Tools',
    zh: '工业工具',
    id: '30294',
    parentId: '20038',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Car Care',
    zh: '汽车保养',
    id: '30295',
    parentId: '20038',
    title: 'null',
    categoryId: '3652'
  },
  {
    en: 'Motorbike Accessories & Parts',
    zh: '摩托车配件和零件',
    id: '30296',
    parentId: '20038',
    title: 'null',
    categoryId: '508'
  },
  {
    en: 'Other Pets',
    zh: '其他宠物',
    id: '30297',
    parentId: '20039',
    title: 'shop-subcategory-link-other-pets',
    categoryId: 'null'
  },
  {
    en: 'Dogs / Cats - Accessories',
    zh: '狗/猫 - 饰品',
    id: '30298',
    parentId: '20039',
    title: 'shop-subcategory-link-dogs-cats-accessories',
    categoryId: 'null'
  },
  {
    en: 'Dogs / Cats - Food & Treats',
    zh: '狗 / 猫 - 食品和零食',
    id: '30299',
    parentId: '20039',
    title: 'shop-subcategory-link-dogs-cats-food-Treats',
    categoryId: '617'
  },
  {
    en: 'Dogs / Cats - Carrier',
    zh: '狗 / 猫窝、笼',
    id: '30300',
    parentId: '20039',
    title: 'shop-subcategory-link-dogs-cats-carrier',
    categoryId: '1748'
  },
  {
    en: 'Aquarium Fish',
    zh: '观赏鱼',
    id: '30301',
    parentId: '20039',
    title: 'shop-subcategory-link-aquarium-fish',
    categoryId: '4615'
  },
  {
    en: 'Dogs / Cats - Grooming Needs',
    zh: '狗/猫 - 美容需求',
    id: '30302',
    parentId: '20039',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Tools',
    zh: '工具',
    id: '30303',
    parentId: '20040',
    title: 'shop-subcategory-link-tools',
    categoryId: '5257'
  },
  {
    en: 'Gardening',
    zh: '园艺',
    id: '30304',
    parentId: '20040',
    title: 'shop-subcategory-link-gardening',
    categoryId: '4356'
  },
  {
    en: 'Electrical / Batteries',
    zh: '电器/电池',
    id: '30305',
    parentId: '20040',
    title: 'shop-subcategory-link-electrical-batteries',
    categoryId: '1816'
  },
  {
    en: 'Power Tools',
    zh: '电动工具',
    id: '30306',
    parentId: '20040',
    title: 'shop-subcategory-link-power-tools',
    categoryId: '1344'
  },
  {
    en: 'Plumbing',
    zh: '测量工具',
    id: '30307',
    parentId: '20040',
    title: 'null',
    categoryId: '1352'
  },
  {
    en: 'Paint & Chemical',
    zh: '油漆与化工',
    id: '30308',
    parentId: '20040',
    title: 'shop-subcategory-link-paint-chemical',
    categoryId: '1365'
  },
  {
    en: 'Ladder / Trolley',
    zh: '梯子 / 手推车',
    id: '30309',
    parentId: '20040',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Others',
    zh: '其他',
    id: '30310',
    parentId: '20040',
    title: 'shop-subcategory-link-others',
    categoryId: '42'
  },
  {
    en: 'Office / Stationery',
    zh: '办公文具',
    id: '30311',
    parentId: '20041',
    title: 'null',
    categoryId: '1618'
  },
  {
    en: 'School supplies',
    zh: '学习用品',
    id: '30312',
    parentId: '20041',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Office Machines',
    zh: '办公设备',
    id: '30313',
    parentId: '20041',
    title: 'null',
    categoryId: '4038'
  },
  {
    en: 'Files & Organisers',
    zh: '档案夹',
    id: '30314',
    parentId: '20041',
    title: 'null',
    categoryId: '6201'
  },
  {
    en: 'Pen/ Pencil',
    zh: '钢笔/铅笔',
    id: '30315',
    parentId: '20041',
    title: 'null',
    categoryId: '3710'
  },
  {
    en: 'Reading Goods',
    zh: '读物',
    id: '30316',
    parentId: '20041',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Notebooks/Paper/Card',
    zh: '笔记本/纸/卡片',
    id: '30317',
    parentId: '20041',
    title: 'null',
    categoryId: '2745'
  },
  {
    en: 'Envelopes & Forms',
    zh: '信封 & 表格',
    id: '30318',
    parentId: '20041',
    title: 'null',
    categoryId: '3467'
  },
  {
    en: 'Adhesives',
    zh: '胶水',
    id: '30319',
    parentId: '20041',
    title: 'null',
    categoryId: '3582'
  },
  {
    en: 'Labels',
    zh: '便签',
    id: '30320',
    parentId: '20041',
    title: 'null',
    categoryId: '1634'
  },
  {
    en: 'General Reading',
    zh: '通识读物',
    id: '30321',
    parentId: '20042',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Children Books',
    zh: '童书',
    id: '30322',
    parentId: '20042',
    title: 'null',
    categoryId: '6936'
  },
  {
    en: 'Collectibles',
    zh: '收藏品',
    id: '30323',
    parentId: '20042',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Comics & Magazines',
    zh: '漫画&杂志',
    id: '30324',
    parentId: '20042',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Vegetables',
    zh: '蔬菜',
    id: '30325',
    parentId: '20044',
    title: 'shop-subcategory-link-vegetables',
    categoryId: '224'
  },
  {
    en: 'Fruits / Tropical Fruits',
    zh: '水果 / 热带水果',
    id: '30326',
    parentId: '20044',
    title: 'shop-subcategory-link-fruits-tropical-fruits',
    categoryId: '73'
  },
  {
    en: 'Meat/Poultry',
    zh: '肉类/禽类',
    id: '30327',
    parentId: '20045',
    title: 'shop-subcategory-link-meat-poultry',
    categoryId: 'null'
  },
  {
    en: 'Seafood',
    zh: '海鲜',
    id: '30328',
    parentId: '20045',
    title: 'shop-subcategory-link-seafood',
    categoryId: '216'
  },
  {
    en: 'Ice Cream',
    zh: '雪糕',
    id: '30329',
    parentId: '20046',
    title: 'null',
    categoryId: '1939'
  },
  {
    en: 'Dairy Products',
    zh: '乳制品',
    id: '30330',
    parentId: '20046',
    title: 'shop-subcategory-link-dairy-products',
    categoryId: 'null'
  },
  {
    en: 'Yogurt',
    zh: '酸奶',
    id: '30331',
    parentId: '20046',
    title: 'null',
    categoryId: '5761'
  },
  {
    en: 'Baking Essentials',
    zh: '烘焙必备品',
    id: '30332',
    parentId: '20047',
    title: 'null',
    categoryId: '411'
  },
  {
    en: 'Ready-To-Eat Meals',
    zh: '方便速食',
    id: '30333',
    parentId: '20047',
    title: 'shop-subcategory-link-ready-to-eat-meals',
    categoryId: '7925'
  },
  {
    en: 'Cooking Oil',
    zh: '食用油',
    id: '30334',
    parentId: '20047',
    title: 'null',
    categoryId: '1087'
  },
  {
    en: 'Seasoning & Condiments',
    zh: '调味料',
    id: '30335',
    parentId: '20047',
    title: 'shop-subcategory-link-seasoning-condiments',
    categoryId: '1098'
  },
  {
    en: 'Rice / Mixed Grains',
    zh: '米饭 / 杂粮',
    id: '30336',
    parentId: '20047',
    title: 'shop-subcategory-link-rice-mixed-grains',
    categoryId: '1088'
  },
  {
    en: 'Dried food & Nuts',
    zh: '干粮和坚果',
    id: '30337',
    parentId: '20047',
    title: 'shop-subcategory-link-dried-food-nuts',
    categoryId: '6738'
  },
  {
    en: 'Noodles',
    zh: '面类',
    id: '30338',
    parentId: '20047',
    title: 'shop-subcategory-link-noodles',
    categoryId: '1099'
  },
  {
    en: 'Canned goods',
    zh: '罐头食品',
    id: '30339',
    parentId: '20047',
    title: 'null',
    categoryId: '282'
  },
  {
    en: 'Others',
    zh: '其他',
    id: '30340',
    parentId: '20047',
    title: 'shop-subcategory-link-others',
    categoryId: '42'
  },
  {
    en: 'Vitamin & Supplement',
    zh: '维生素补充剂',
    id: '30341',
    parentId: '20048',
    title: 'shop-subcategory-link-vitamin-supplement',
    categoryId: 'null'
  },
  {
    en: 'Honey/Royal Jelly',
    zh: '蜂蜜/蜂王浆',
    id: '30342',
    parentId: '20048',
    title: 'shop-subcategory-link-honey-royal-jelly',
    categoryId: '2671'
  },
  {
    en: 'Bird Nest',
    zh: '燕窝',
    id: '30343',
    parentId: '20048',
    title: 'shop-subcategory-link-bird-nest',
    categoryId: '1511'
  },
  {
    en: 'Ginseng',
    zh: '人参',
    id: '30344',
    parentId: '20048',
    title: 'shop-subcategory-link-ginseng',
    categoryId: '7512'
  },
  {
    en: 'Substitute Foods',
    zh: '代餐',
    id: '30345',
    parentId: '20048',
    title: 'shop-subcategory-link-substitute-foods',
    categoryId: 'null'
  },
  {
    en: 'Others',
    zh: '其他',
    id: '30346',
    parentId: '20048',
    title: 'shop-subcategory-link-others',
    categoryId: '42'
  },
  {
    en: 'Coffee & Tea',
    zh: '咖啡&茶',
    id: '30347',
    parentId: '20049',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Juice & Beverages',
    zh: '果汁饮料',
    id: '30348',
    parentId: '20049',
    title: 'null',
    categoryId: '1433'
  },
  {
    en: 'Water',
    zh: '饮用水',
    id: '30349',
    parentId: '20049',
    title: 'null',
    categoryId: '1108'
  },
  {
    en: 'Milk',
    zh: '牛奶',
    id: '30350',
    parentId: '20049',
    title: 'null',
    categoryId: '1103'
  },
  {
    en: 'Beer',
    zh: '啤酒',
    id: '30351',
    parentId: '20049',
    title: 'null',
    categoryId: '1070'
  },
  {
    en: 'Wine',
    zh: '红酒',
    id: '30352',
    parentId: '20049',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Spirits',
    zh: '白酒',
    id: '30353',
    parentId: '20049',
    title: 'null',
    categoryId: '1064'
  },
  {
    en: 'Snack',
    zh: '小吃',
    id: '30354',
    parentId: '20050',
    title: 'shop-subcategory-link-snack',
    categoryId: 'null'
  },
  {
    en: 'Cakes',
    zh: '蛋糕',
    id: '30355',
    parentId: '20050',
    title: 'shop-subcategory-link-cakes',
    categoryId: '2615'
  },
  {
    en: 'Chocolate & Malt',
    zh: '巧克力和麦芽糖',
    id: '30356',
    parentId: '20050',
    title: 'shop-subcategory-link-chocolate-malt',
    categoryId: 'null'
  },
  {
    en: 'Others',
    zh: '其他',
    id: '30357',
    parentId: '20050',
    title: 'shop-subcategory-link-others',
    categoryId: '42'
  },
  {
    en: 'Girl’s Clothing',
    zh: '女童装',
    id: '30358',
    parentId: '20051',
    title: 'shop-subcategory-link-girl-clothing',
    categoryId: '222'
  },
  {
    en: 'Etc Clothing',
    zh: '流行服饰',
    id: '30359',
    parentId: '20051',
    title: 'shop-subcategory-link-etc-clothing',
    categoryId: 'null'
  },
  {
    en: 'Bags / Shoes',
    zh: '包/鞋',
    id: '30360',
    parentId: '20051',
    title: 'shop-subcategory-link-bags-shoes',
    categoryId: '348'
  },
  {
    en: 'Boy’s Clothing',
    zh: '男童装',
    id: '30361',
    parentId: '20051',
    title: 'shop-subcategory-link-boy-clothing',
    categoryId: 'null'
  },
  {
    en: 'Hats / Socks',
    zh: '帽子/袜子',
    id: '30362',
    parentId: '20051',
    title: 'shop-subcategory-link-hats-socks',
    categoryId: 'null'
  },
  {
    en: 'Underwears / PJs',
    zh: '内衣/睡衣',
    id: '30363',
    parentId: '20051',
    title: 'null',
    categoryId: '6736'
  },
  {
    en: 'Accessories / More',
    zh: '配饰/更多',
    id: '30364',
    parentId: '20051',
    title: 'null',
    categoryId: '4058'
  },
  {
    en: 'Costumes',
    zh: '主题童装',
    id: '30365',
    parentId: '20051',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Educational & Stationeries',
    zh: '教育文具',
    id: '30366',
    parentId: '20052',
    title: 'shop-subcategory-link-educational-stationeries',
    categoryId: 'null'
  },
  {
    en: 'Board Games / Puzzles',
    zh: '棋盘游戏/拼图',
    id: '30367',
    parentId: '20052',
    title: 'shop-subcategory-link-board-games-puzzles',
    categoryId: '1855'
  },
  {
    en: 'Active Games',
    zh: '体感游戏',
    id: '30368',
    parentId: '20052',
    title: 'shop-subcategory-link-active-games',
    categoryId: 'null'
  },
  {
    en: 'Building Blocks',
    zh: '积木',
    id: '30369',
    parentId: '20052',
    title: 'shop-subcategory-link-building-blocks',
    categoryId: '1856'
  },
  {
    en: 'Plush Toys / Dolls',
    zh: '毛绒玩具/玩偶',
    id: '30370',
    parentId: '20052',
    title: 'shop-subcategory-link-plush-toys-dolls',
    categoryId: '470'
  },
  {
    en: 'Models & Kits',
    zh: '模型和工具包',
    id: '30371',
    parentId: '20052',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Robots / Vehicles',
    zh: '机器人 / 汽车',
    id: '30372',
    parentId: '20052',
    title: 'null',
    categoryId: '1889'
  },
  {
    en: 'Musical Instrument',
    zh: '乐器',
    id: '30373',
    parentId: '20052',
    title: 'null',
    categoryId: '4049'
  },
  {
    en: 'Role Play Toy Set',
    zh: '过家家玩具组',
    id: '30374',
    parentId: '20052',
    title: 'null',
    categoryId: '2629'
  },
  {
    en: 'Rides / Slides',
    zh: '游乐设施/滑梯',
    id: '30375',
    parentId: '20052',
    title: 'null',
    categoryId: '243'
  },
  {
    en: 'Kids Safety / Playmat',
    zh: '安全防护/游戏垫',
    id: '30376',
    parentId: '20052',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Maternity Clothings',
    zh: '孕妇装',
    id: '30377',
    parentId: '20053',
    title: 'shop-subcategory-link-maternity-clothing',
    categoryId: '538'
  },
  {
    en: 'Baby Clothing',
    zh: '婴儿服装',
    id: '30378',
    parentId: '20053',
    title: 'shop-subcategory-link-baby-clothing',
    categoryId: '6900'
  },
  {
    en: 'Feeding',
    zh: '哺乳用品',
    id: '30379',
    parentId: '20053',
    title: 'shop-subcategory-link-feeding',
    categoryId: '2599'
  },
  {
    en: 'Baby Health / Bath',
    zh: '婴儿健康 / 沐浴',
    id: '30380',
    parentId: '20053',
    title: 'shop-subcategory-link-baby-health-bath',
    categoryId: 'null'
  },
  {
    en: 'Home & Laundry Cleaner',
    zh: '家用和洗衣清洁剂',
    id: '30381',
    parentId: '20053',
    title: 'shop-subcategory-link-home-laundry-cleaner',
    categoryId: 'null'
  },
  {
    en: 'Diapering',
    zh: '尿布',
    id: '30382',
    parentId: '20053',
    title: 'null',
    categoryId: '5448'
  },
  {
    en: 'Baby Safety / Car Seats',
    zh: '汽车安全座椅',
    id: '30383',
    parentId: '20053',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Bedding / Furniture',
    zh: '寝具 / 家具',
    id: '30384',
    parentId: '20053',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Baby Skin Care',
    zh: '婴儿皮肤护理',
    id: '30385',
    parentId: '20053',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Postpartum Care Goods',
    zh: '产后护理用品',
    id: '30386',
    parentId: '20053',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Local Transportation',
    zh: '当地交通',
    id: '30387',
    parentId: '20054',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Local Travel & Attractions',
    zh: '当地旅游景点',
    id: '30388',
    parentId: '20054',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Overseas Travel & Transportation',
    zh: '海外旅游与交通',
    id: '30389',
    parentId: '20054',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Overseas Transportation',
    zh: '海外运输',
    id: '30390',
    parentId: '20054',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Accomodations',
    zh: '住宿设施',
    id: '30391',
    parentId: '20054',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Overseas Sim Card',
    zh: '海外电话卡',
    id: '30392',
    parentId: '20055',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Prepaid Top-Up',
    zh: '充值/预付',
    id: '30393',
    parentId: '20055',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Massage & Spa',
    zh: '按摩和水疗',
    id: '30394',
    parentId: '20056',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Beauty Services',
    zh: '美容服务',
    id: '30395',
    parentId: '20056',
    title: 'null',
    categoryId: 'null'
  },
  {
    en: 'Body & Fitness',
    zh: '身体与健身',
    id: '30396',
    parentId: '20056',
    title: 'null',
    categoryId: 'null'
  }
];

function getSubCategories(parentId) {
  const list = arr.filter(item => Object.is(item.parentId, parentId));
  return `[
    ${list.map(item => {
      const childList = arr.filter(child => Object.is(child.parentId, item.id));
      return `new ProductsCategoriesSubItem('${item.id}', '${item.title == 'null' ? item.zh || item.en : item.title}', [${childList.map(
        cItem =>
          `new ProductsCategoriesLinks('${cItem.id}', '/product/category?categoryId=${cItem.categoryId}', '${
            cItem.title == 'null' ? cItem.zh || cItem.en : cItem.title
          }')`
      )}])`;
    })}
  ]`;
}

const text = getSubCategories('100008');
fs.writeFileSync('./test.json', text);
