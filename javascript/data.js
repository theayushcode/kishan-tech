/* Kishan - Tech - Embedded Crop Data (150 crops, 50 per season) */
/* Includes soil type needed to grow each crop */

const CROP_DATA = {
  "summer": [
    {
      "name": "Watermelon",
      "wiki": "Watermelon",
      "desc": "A refreshing summer fruit with sweet red flesh and high water content, grown widely in the hot season across sandy loam soils.",
      "rain": "250-500 mm",
      "region": "Uttar Pradesh, Rajasthan, Punjab, Maharashtra, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/960px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg",
      "soil": "Well-drained sandy loam or loamy soil, rich in organic matter; pH 6.0–7.0",
      "hindi": "तरबूज"
    },
    {
      "name": "Muskmelon",
      "wiki": "Muskmelon",
      "desc": "A sweet, aromatic summer melon rich in vitamins A and C, thriving in warm dry climate with good sunlight.",
      "rain": "350-600 mm",
      "region": "Uttar Pradesh, Punjab, Tamil Nadu, Rajasthan, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Meloen_vrucht_met_bloem.jpg",
      "soil": "Sandy loam to loamy, well-drained soil with good fertility; pH 6.0–7.5",
      "hindi": "खरबूज"
    },
    {
      "name": "Cucumber",
      "wiki": "Cucumber",
      "desc": "A cooling summer vegetable with high water content, fast growing and suited to warm weather and light soils.",
      "rain": "400-600 mm",
      "region": "Karnataka, Tamil Nadu, Andhra Pradesh, West Bengal, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/960px-ARS_cucumber.jpg",
      "soil": "Well-drained fertile sandy loam to loam; pH 6.0–7.0",
      "hindi": "खीरा"
    },
    {
      "name": "Pumpkin",
      "wiki": "Pumpkin",
      "desc": "A trailing summer gourd with large yellow fruit rich in beta-carotene, tolerant of heat and grown on a range of soils.",
      "rain": "400-700 mm",
      "region": "Odisha, West Bengal, Bihar, Uttar Pradesh, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FrenchMarketPumpkinsB.jpg/960px-FrenchMarketPumpkinsB.jpg",
      "soil": "Wide range but best on well-drained sandy loam to loam; pH 5.5–7.5",
      "hindi": "कद्दू"
    },
    {
      "name": "Bitter Gourd",
      "wiki": "Momordica charantia",
      "desc": "A climbing summer vegetable with bitter green fruit valued for its medicinal and blood-sugar regulating properties.",
      "rain": "500-800 mm",
      "region": "Maharashtra, Karnataka, Andhra Pradesh, Tamil Nadu, Uttar Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Momordica_charantia_Blanco2.357.png/960px-Momordica_charantia_Blanco2.357.png",
      "soil": "Well-drained sandy loam to loam, rich in organic matter; pH 5.5–6.7",
      "hindi": "करेला"
    },
    {
      "name": "Bottle Gourd",
      "wiki": "Calabash",
      "desc": "A climbing summer gourd with light green bottle-shaped fruit, easy to digest and a staple summer vegetable in India.",
      "rain": "400-700 mm",
      "region": "Uttar Pradesh, Bihar, Punjab, Maharashtra, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Courge_encore_verte.jpg",
      "soil": "Loamy, well-drained fertile soil; pH 6.0–7.0",
      "hindi": "लौकी"
    },
    {
      "name": "Ridge Gourd",
      "wiki": "Luffa acutangula",
      "desc": "A ridged climbing summer gourd with tender green fruit used widely in Indian cooking, grown in warm humid weather.",
      "rain": "500-800 mm",
      "region": "Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Luffa_acutangula_Chinese_okra.jpg/960px-Luffa_acutangula_Chinese_okra.jpg",
      "soil": "Well-drained sandy loam to loam; pH 6.0–7.0",
      "hindi": "तोरई"
    },
    {
      "name": "Sponge Gourd",
      "wiki": "Luffa aegyptiaca",
      "desc": "A cylindrical smooth summer gourd whose fibrous interior is used as a sponge; tender fruits are cooked as vegetable.",
      "rain": "500-800 mm",
      "region": "Uttar Pradesh, Bihar, West Bengal, Odisha, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Luffa_aegyptiaca_compose.jpg/960px-Luffa_aegyptiaca_compose.jpg",
      "soil": "Well-drained sandy loam to loamy soil; pH 6.0–7.0",
      "hindi": "नेनुआ"
    },
    {
      "name": "Tinda",
      "wiki": "Tinda",
      "desc": "A small round summer gourd (apple gourd) with tender flesh, popular in North Indian cuisine during summer.",
      "rain": "400-600 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Rajasthan, Delhi",
      "img": "https://upload.wikimedia.org/wikipedia/commons/8/80/Tinda.jpg",
      "soil": "Loamy, well-drained fertile soil; pH 6.0–7.5",
      "hindi": "टिंडा"
    },
    {
      "name": "Okra",
      "wiki": "Okra",
      "desc": "Also called lady's finger, a heat-loving summer vegetable with green pods rich in fibre and vitamins.",
      "rain": "500-800 mm",
      "region": "Gujarat, Maharashtra, Andhra Pradesh, Bihar, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hong_Kong_Okra_Aug_25_2012.JPG/960px-Hong_Kong_Okra_Aug_25_2012.JPG",
      "soil": "Well-drained fertile loam to sandy loam; pH 6.0–6.8",
      "hindi": "भिंडी"
    },
    {
      "name": "Pointed Gourd",
      "wiki": "Trichosanthes dioica",
      "desc": "A perennial climbing summer vine with pointed green fruit, known as parwal and prized in eastern India.",
      "rain": "600-900 mm",
      "region": "Bihar, West Bengal, Odisha, Uttar Pradesh, Assam",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Pointed_gourd.jpg/960px-Pointed_gourd.jpg",
      "soil": "Loamy, well-drained soil rich in organic matter; pH 6.0–7.0",
      "hindi": "परवल"
    },
    {
      "name": "Teasle Gourd",
      "wiki": "Momordica dioica",
      "desc": "A spiny small summer gourd with crisp flesh, a delicacy in eastern and central India during hot months.",
      "rain": "600-900 mm",
      "region": "Odisha, West Bengal, Bihar, Chhattisgarh, Jharkhand",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Erumapaval.JPG/960px-Erumapaval.JPG",
      "soil": "Well-drained loamy soil rich in organic matter; pH 5.5–7.0",
      "hindi": "कांटा करेला"
    },
    {
      "name": "Spine Gourd",
      "wiki": "Momordica cochinchinensis",
      "desc": "A climbing summer vine bearing spiny nutritious fruit, also called kakrol, grown in warm humid regions.",
      "rain": "700-1000 mm",
      "region": "West Bengal, Odisha, Assam, Tripura, Kerala",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Qua_Gac.JPG/960px-Qua_Gac.JPG",
      "soil": "Loamy, well-drained fertile soil; pH 5.5–7.0",
      "hindi": "ककोरा"
    },
    {
      "name": "Ivy Gourd",
      "wiki": "Coccinia grandis",
      "desc": "A fast growing climbing summer vine with small cucumber-like fruit, used as vegetable across India.",
      "rain": "500-800 mm",
      "region": "Tamil Nadu, Karnataka, Andhra Pradesh, Kerala, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coccinia_grandis_fruit.jpg/960px-Coccinia_grandis_fruit.jpg",
      "soil": "Wide range, prefers well-drained loam; pH 6.0–7.5",
      "hindi": "कुंदरू"
    },
    {
      "name": "Amaranth",
      "wiki": "Amaranth",
      "desc": "A hardy summer leafy vegetable and grain crop rich in iron and calcium, tolerant of heat and drought.",
      "rain": "300-600 mm",
      "region": "Tamil Nadu, Karnataka, Andhra Pradesh, Maharashtra, Kerala",
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/91/Amaranthus_tricolor0.jpg",
      "soil": "Well-drained loam to sandy loam; pH 5.5–7.5",
      "hindi": "चौलाई"
    },
    {
      "name": "Drumstick",
      "wiki": "Moringa oleifera",
      "desc": "A drought-tolerant summer tree whose pods and leaves are highly nutritious; thrives in semi-arid hot climate.",
      "rain": "250-500 mm",
      "region": "Tamil Nadu, Andhra Pradesh, Karnataka, Odisha, Gujarat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/DrumstickFlower.jpg/960px-DrumstickFlower.jpg",
      "soil": "Loamy sandy well-drained soil; drought tolerant; pH 6.0–7.0",
      "hindi": "सहजन"
    },
    {
      "name": "Yam",
      "wiki": "Yam",
      "desc": "A tuber crop grown in warm humid summer conditions, providing starchy energy-rich underground corms.",
      "rain": "800-1200 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Odisha, Assam",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Yam_at_monday_market_kaduna_state_01.jpg/960px-Yam_at_monday_market_kaduna_state_01.jpg",
      "soil": "Loose, well-drained fertile loam, deep soil; pH 5.5–6.5",
      "hindi": "जिमीकंद"
    },
    {
      "name": "Taro",
      "wiki": "Taro",
      "desc": "A tropical tuber crop (arbi) with edible corms and leaves, grown in warm wet summer soils.",
      "rain": "800-1200 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Odisha, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Songe-R%C3%A9union.JPG/960px-Songe-R%C3%A9union.JPG",
      "soil": "Moist, rich loamy to clay loam, well-drained; pH 5.5–6.5",
      "hindi": "अरबी"
    },
    {
      "name": "Elephant Foot Yam",
      "wiki": "Amorphophallus paeoniifolius",
      "desc": "A large tuber summer crop called suran, rich in starch and grown in humid tropical regions of India.",
      "rain": "800-1200 mm",
      "region": "Kerala, Tamil Nadu, Andhra Pradesh, Maharashtra, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Amorphophallus_Paeoniifolius_g.jpg/960px-Amorphophallus_Paeoniifolius_g.jpg",
      "soil": "Well-drained fertile loam, rich in organic matter; pH 5.5–7.0",
      "hindi": "सूरन"
    },
    {
      "name": "Malabar Spinach",
      "wiki": "Basella alba",
      "desc": "A heat-tolerant climbing summer leafy vegetable with thick glossy leaves, grown in warm humid weather.",
      "rain": "500-800 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Basella_alba-2.JPG/960px-Basella_alba-2.JPG",
      "soil": "Loamy, moisture-retentive fertile soil; pH 6.0–7.0",
      "hindi": "पोई भाजी"
    },
    {
      "name": "Roselle",
      "wiki": "Roselle",
      "desc": "A summer shrub whose fleshy red calyces are used for drinks and fibre; thrives in warm tropical climate.",
      "rain": "600-900 mm",
      "region": "Andhra Pradesh, Telangana, Odisha, Maharashtra, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Roselle%2C_Hibiscus_sabdariffa%2C_2014_01.JPG/960px-Roselle%2C_Hibiscus_sabdariffa%2C_2014_01.JPG",
      "soil": "Well-drained loam to sandy loam; pH 6.0–7.0",
      "hindi": "अम्सोल"
    },
    {
      "name": "Curry Leaf",
      "wiki": "Curry tree",
      "desc": "An aromatic summer tree whose leaves are an essential seasoning in South Indian cuisine.",
      "rain": "400-700 mm",
      "region": "Tamil Nadu, Karnataka, Andhra Pradesh, Kerala, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Curry_Trees.jpg/960px-Curry_Trees.jpg",
      "soil": "Well-drained loamy to red soil; pH 5.5–7.0",
      "hindi": "करी पत्ता"
    },
    {
      "name": "Mango",
      "wiki": "Mango",
      "desc": "The king of Indian fruits, a summer delight with hundreds of varieties thriving in warm dry to humid climate.",
      "rain": "500-900 mm",
      "region": "Uttar Pradesh, Maharashtra, Andhra Pradesh, Gujarat, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/960px-Mangos_-_single_and_halved.jpg",
      "soil": "Wide range, best on well-drained loam to sandy loam; pH 5.5–7.5",
      "hindi": "आम"
    },
    {
      "name": "Lychee",
      "wiki": "Lychee",
      "desc": "A juicy summer fruit with sweet translucent pulp, requiring warm humid subtropical climate.",
      "rain": "800-1200 mm",
      "region": "Bihar, West Bengal, Uttar Pradesh, Jharkhand, Assam",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Litchi_chinensis_fruits.JPG/960px-Litchi_chinensis_fruits.JPG",
      "soil": "Deep, well-drained loam to sandy loam; pH 5.5–7.0",
      "hindi": "लीची"
    },
    {
      "name": "Jamun",
      "wiki": "Syzygium cumini",
      "desc": "A purple summer fruit (black plum) with astringent sweet pulp, grown across tropical India.",
      "rain": "600-1000 mm",
      "region": "Maharashtra, Tamil Nadu, Andhra Pradesh, Uttar Pradesh, Gujarat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Syzygium_cumini_Bra30.png/960px-Syzygium_cumini_Bra30.png",
      "soil": "Loamy, well-drained soil; tolerates waterlogging; pH 6.0–7.5",
      "hindi": "जामुन"
    },
    {
      "name": "Phalsa",
      "wiki": "Grewia asiatica",
      "desc": "A small tangy-sweet summer berry rich in antioxidants, grown in North and Central India.",
      "rain": "400-700 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Maharashtra, Rajasthan",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Phalsa03_Asit.jpg/960px-Phalsa03_Asit.jpg",
      "soil": "Well-drained loam to sandy loam; pH 6.0–7.5",
      "hindi": "फालसा"
    },
    {
      "name": "Karonda",
      "wiki": "Carissa carandas",
      "desc": "A tart summer berry used for pickles and jams, drought hardy and grown in arid and semi-arid regions.",
      "rain": "300-600 mm",
      "region": "Rajasthan, Gujarat, Maharashtra, Uttar Pradesh, Madhya Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Carissa_carandas_flowers.JPG/960px-Carissa_carandas_flowers.JPG",
      "soil": "Wide range including poor gravelly soils; pH 5.5–7.5",
      "hindi": "करोंदा"
    },
    {
      "name": "Bael",
      "wiki": "Aegle marmelos",
      "desc": "A sacred summer fruit with hard shell and aromatic pulp, valued for digestion and grown in dry regions.",
      "rain": "300-600 mm",
      "region": "Uttar Pradesh, Madhya Pradesh, Maharashtra, Bihar, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bael_%28Aegle_marmelos%29_tree_at_Narendrapur_W_IMG_4116.jpg",
      "soil": "Wide range, thrives in well-drained loam; pH 6.0–8.0",
      "hindi": "बेल"
    },
    {
      "name": "Aonla",
      "wiki": "Phyllanthus emblica",
      "desc": "The Indian gooseberry, a vitamin-C rich summer fruit used fresh and in preserves; drought tolerant.",
      "rain": "300-600 mm",
      "region": "Uttar Pradesh, Maharashtra, Gujarat, Rajasthan, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Phyllanthus_officinalis.jpg",
      "soil": "Well-drained loam to sandy loam; tolerates sodic soils; pH 6.0–9.5",
      "hindi": "आँवला"
    },
    {
      "name": "Jackfruit",
      "wiki": "Jackfruit",
      "desc": "The largest tree-borne summer fruit with sweet yellow bulbs, grown in humid tropical regions of India.",
      "rain": "800-1500 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Maharashtra, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/The_jackfruit_is_holding_on_to_the_tree.jpg/960px-The_jackfruit_is_holding_on_to_the_tree.jpg",
      "soil": "Well-drained loam to sandy loam, deep soil; pH 5.0–7.5",
      "hindi": "कटहल"
    },
    {
      "name": "Sapodilla",
      "wiki": "Sapodilla",
      "desc": "A brown sweet summer fruit (chikoo) with grainy pulp, grown in warm coastal climates of India.",
      "rain": "600-1000 mm",
      "region": "Gujarat, Maharashtra, Tamil Nadu, Karnataka, Andhra Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%E0%B4%B8%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B5%8B%E0%B4%9F%E0%B5%8D%E0%B4%9F.jpg/960px-%E0%B4%B8%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B5%8B%E0%B4%9F%E0%B5%8D%E0%B4%9F.jpg",
      "soil": "Well-drained loam to sandy loam, calcareous soils; pH 6.0–8.0",
      "hindi": "चीकू"
    },
    {
      "name": "Date Palm",
      "wiki": "Date palm",
      "desc": "A heat-loving summer palm yielding sweet dates, cultivated in arid irrigated regions of western India.",
      "rain": "200-400 mm (with irrigation)",
      "region": "Rajasthan, Gujarat, Punjab, Haryana, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dates005.jpg/960px-Dates005.jpg",
      "soil": "Sandy loam to loam, tolerates saline/alkaline soils; pH 7.0–8.5",
      "hindi": "खजूर"
    },
    {
      "name": "Palmyra Palm",
      "wiki": "Borassus flabellifer",
      "desc": "A tall summer palm yielding sweet nira and tender ice-apple fruit, common in coastal dry regions.",
      "rain": "400-700 mm",
      "region": "Tamil Nadu, Andhra Pradesh, Odisha, West Bengal, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/C%C3%A2y_th%E1%BB%91t_n%E1%BB%91t.jpg/960px-C%C3%A2y_th%E1%BB%91t_n%E1%BB%91t.jpg",
      "soil": "Sandy to sandy loam, coastal soils; pH 6.0–8.0",
      "hindi": "ताड़"
    },
    {
      "name": "Lemon",
      "wiki": "Lemon",
      "desc": "A tangy summer citrus fruit rich in vitamin C, grown in warm subtropical and tropical regions.",
      "rain": "600-900 mm",
      "region": "Andhra Pradesh, Maharashtra, Gujarat, Tamil Nadu, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/P1030323.JPG/960px-P1030323.JPG",
      "soil": "Well-drained loam to sandy loam; pH 5.5–7.0",
      "hindi": "नींबू"
    },
    {
      "name": "Lime",
      "wiki": "Lime (fruit)",
      "desc": "A small sour summer citrus fruit used widely for flavouring, thriving in warm humid climate.",
      "rain": "600-900 mm",
      "region": "Andhra Pradesh, Maharashtra, Gujarat, Tamil Nadu, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Lime_Blossom.jpg/960px-Lime_Blossom.jpg",
      "soil": "Well-drained loam to sandy loam; pH 5.5–7.5",
      "hindi": "हरा नींबू"
    },
    {
      "name": "Pomelo",
      "wiki": "Pomelo",
      "desc": "The largest citrus summer fruit with sweet-sour pulp, grown in warm humid regions of northeast and south.",
      "rain": "800-1200 mm",
      "region": "Manipur, Assam, West Bengal, Kerala, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Pomelo_fruit.jpg/960px-Pomelo_fruit.jpg",
      "soil": "Deep, well-drained loamy soil; pH 5.5–7.0",
      "hindi": "चकोतरा"
    },
    {
      "name": "Mulberry",
      "wiki": "Mulberry",
      "desc": "A sweet summer berry eaten fresh and fed to silkworms, grown in subtropical warm regions.",
      "rain": "500-900 mm",
      "region": "Karnataka, Andhra Pradesh, Tamil Nadu, West Bengal, Jammu & Kashmir",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Rosales_-_Morus_alba_-_3.jpg/960px-Rosales_-_Morus_alba_-_3.jpg",
      "soil": "Well-drained loam to sandy loam; pH 5.5–7.0",
      "hindi": "शहतूत"
    },
    {
      "name": "Fig",
      "wiki": "Common fig",
      "desc": "A soft sweet summer fruit rich in fibre, grown in dry subtropical and temperate regions.",
      "rain": "400-700 mm",
      "region": "Maharashtra, Karnataka, Uttar Pradesh, Gujarat, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ficus-carica_-_bancal_20110416a.jpg/960px-Ficus-carica_-_bancal_20110416a.jpg",
      "soil": "Well-drained loam to sandy loam, calcareous soils; pH 6.0–8.0",
      "hindi": "अंजीर"
    },
    {
      "name": "Hyacinth Bean",
      "wiki": "Lablab purpureus",
      "desc": "A climbing summer legume with edible pods and seeds, drought hardy and grown across India.",
      "rain": "400-700 mm",
      "region": "Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh, Bihar",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Leiden_University_Library_-_Seikei_Zusetsu_vol._18%2C_page_038_-_%E7%99%BD%E8%8A%B1%E7%A8%A8%E8%B1%86_-_Lablab_purpureus_%28L.%29_Sweet%2C_1804.jpg",
      "soil": "Wide range, prefers well-drained loam; pH 5.5–7.0",
      "hindi": "सेम"
    },
    {
      "name": "Winged Bean",
      "wiki": "Winged bean",
      "desc": "A high-protein summer legume whose pods, seeds and tubers are all edible; suited to humid tropics.",
      "rain": "800-1200 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Psophocarpus_tetragonolobus_Blanco2.293.png/960px-Psophocarpus_tetragonolobus_Blanco2.293.png",
      "soil": "Well-drained loamy soil; pH 5.5–7.0",
      "hindi": "पंख फली"
    },
    {
      "name": "Yardlong Bean",
      "wiki": "Yardlong bean",
      "desc": "A climbing summer bean with long slender pods, fast growing and suited to warm humid climate.",
      "rain": "600-900 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/0/08/Lobia.jpg",
      "soil": "Well-drained loam to sandy loam; pH 5.5–7.0",
      "hindi": "बरबटी"
    },
    {
      "name": "Sword Bean",
      "wiki": "Canavalia gladiata",
      "desc": "A climbing summer bean with large sword-shaped pods, hardy and grown in tropical regions.",
      "rain": "600-900 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Canavalia_gladiata2.jpg/960px-Canavalia_gladiata2.jpg",
      "soil": "Well-drained loam, tolerates poor soils; pH 5.5–7.0",
      "hindi": "तलवार फली"
    },
    {
      "name": "Velvet Bean",
      "wiki": "Mucuna pruriens",
      "desc": "A climbing summer legume valued as green manure and for its medicinal seeds; heat tolerant.",
      "rain": "500-800 mm",
      "region": "Andhra Pradesh, Telangana, Maharashtra, Karnataka, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mucuna_pruriens_flower.jpg/960px-Mucuna_pruriens_flower.jpg",
      "soil": "Well-drained sandy loam to loam; pH 5.5–7.0",
      "hindi": "कोंच"
    },
    {
      "name": "Dhaincha",
      "wiki": "Sesbania bispinosa",
      "desc": "A fast-growing summer green-manure legume that enriches soil nitrogen; thrives in warm wet weather.",
      "rain": "600-900 mm",
      "region": "West Bengal, Odisha, Andhra Pradesh, Tamil Nadu, Bihar",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sesbania_bispinosa5836.JPG/960px-Sesbania_bispinosa5836.JPG",
      "soil": "Loam to clay loam, tolerates waterlogging; pH 5.0–8.0",
      "hindi": "ढैंचा"
    },
    {
      "name": "Butterfly Pea",
      "wiki": "Clitoria ternatea",
      "desc": "A climbing summer legume with striking blue flowers used as natural dye and herbal tea; heat loving.",
      "rain": "400-700 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Maharashtra, Andhra Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Asian_pigeonwings_in_Bhopal_04.jpg/960px-Asian_pigeonwings_in_Bhopal_04.jpg",
      "soil": "Well-drained loam to sandy loam; pH 5.5–7.0",
      "hindi": "अपराजिता"
    },
    {
      "name": "Snake Gourd",
      "wiki": "Trichosanthes cucumerina",
      "desc": "A long slender climbing summer gourd with mild flavoured fruit, common in South Indian cuisine.",
      "rain": "600-900 mm",
      "region": "Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Trichosanthes_cucumerina_var._anguina_compose.jpg",
      "soil": "Well-drained sandy loam to loam; pH 6.0–7.0",
      "hindi": "चिचिंडा"
    },
    {
      "name": "Ash Gourd",
      "wiki": "Benincasa hispida",
      "desc": "A large waxy summer gourd (petha) with white flesh, long-storing and grown in warm regions.",
      "rain": "500-800 mm",
      "region": "Uttar Pradesh, Punjab, Andhra Pradesh, Tamil Nadu, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Benincasa_hispida_compose.jpg/960px-Benincasa_hispida_compose.jpg",
      "soil": "Well-drained loamy soil, rich in organic matter; pH 6.0–7.0",
      "hindi": "पेठा"
    },
    {
      "name": "Carambola",
      "wiki": "Carambola",
      "desc": "The star fruit, a tangy-sweet summer fruit rich in vitamin C, grown in warm humid lowlands.",
      "rain": "800-1200 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Maharashtra, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Averrhoa_carambola_ARS_k5735-7.jpg/960px-Averrhoa_carambola_ARS_k5735-7.jpg",
      "soil": "Well-drained loam to sandy loam; pH 5.5–6.5",
      "hindi": "कमरख"
    },
    {
      "name": "Wood Apple",
      "wiki": "Limonia acidissima",
      "desc": "A hard-shelled summer fruit with sweet aromatic pulp, drought hardy and grown in dry regions.",
      "rain": "300-600 mm",
      "region": "Maharashtra, Tamil Nadu, Andhra Pradesh, Gujarat, Madhya Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wood-apple_tree.JPG/960px-Wood-apple_tree.JPG",
      "soil": "Well-drained loam to sandy loam, drought hardy; pH 6.0–8.0",
      "hindi": "कैथ"
    },
    {
      "name": "Rose Apple",
      "wiki": "Syzygium jambos",
      "desc": "A bell-shaped crisp summer fruit with rose-like aroma, grown in warm humid regions of India.",
      "rain": "800-1200 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Syzygium_jambos.JPG/960px-Syzygium_jambos.JPG",
      "soil": "Loamy, moist well-drained soil; pH 5.5–7.0",
      "hindi": "गुलाब जाम"
    }
  ],
  "winter": [
    {
      "name": "Wheat",
      "wiki": "Wheat",
      "desc": "The most important rabi cereal and staple food grain of India, grown in cool winter and harvested in spring.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, Punjab, Haryana, Madhya Pradesh, Rajasthan",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vehn%C3%A4pelto_6.jpg/960px-Vehn%C3%A4pelto_6.jpg",
      "soil": "Well-drained loam to clay loam, fertile; pH 6.0–7.5",
      "hindi": "गेहूं"
    },
    {
      "name": "Barley",
      "wiki": "Barley",
      "desc": "A hardy rabi cereal used for food, feed and malt, tolerant of drought and salinity in cool winter.",
      "rain": "300-500 mm",
      "region": "Rajasthan, Uttar Pradesh, Madhya Pradesh, Punjab, Haryana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Barley_%28Hordeum_vulgare%29_-_United_States_National_Arboretum_-_24_May_2009.jpg/960px-Barley_%28Hordeum_vulgare%29_-_United_States_National_Arboretum_-_24_May_2009.jpg",
      "soil": "Loam to sandy loam; tolerates saline & alkaline soils; pH 6.0–8.5",
      "hindi": "जौ"
    },
    {
      "name": "Mustard",
      "wiki": "Brassica juncea",
      "desc": "The chief rabi oilseed of India yielding pungent edible oil; grown in cool dry winter plains.",
      "rain": "350-500 mm",
      "region": "Rajasthan, Madhya Pradesh, Uttar Pradesh, Haryana, Gujarat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/4/42/Brassica_juncea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-168.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.5",
      "hindi": "सरसों"
    },
    {
      "name": "Chickpea",
      "wiki": "Chickpea",
      "desc": "The major rabi pulse (gram) rich in protein, grown on residual soil moisture in cool dry winter.",
      "rain": "350-550 mm",
      "region": "Madhya Pradesh, Rajasthan, Maharashtra, Uttar Pradesh, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Chickpea_BNC.jpg/960px-Chickpea_BNC.jpg",
      "soil": "Loam to sandy loam, well-drained; avoids waterlogging; pH 6.0–8.0",
      "hindi": "चना"
    },
    {
      "name": "Grass Pea",
      "wiki": "Lathyrus sativus",
      "desc": "A hardy rabi pulse (khesari) grown on marginal soils with minimal inputs in cool winter.",
      "rain": "300-450 mm",
      "region": "Madhya Pradesh, Uttar Pradesh, Bihar, West Bengal, Chhattisgarh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Lathyrus_sativus_flowers_Bangladesh_cropped.JPG",
      "soil": "Wide range, tolerates poor & waterlogged soils; pH 5.5–8.0",
      "hindi": "खेसारी"
    },
    {
      "name": "Lentil",
      "wiki": "Lentil",
      "desc": "An important rabi pulse (masur) with flat lens-shaped seeds, suited to cool dry winter conditions.",
      "rain": "300-450 mm",
      "region": "Madhya Pradesh, Uttar Pradesh, Rajasthan, Bihar, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/3_types_of_lentil.png/960px-3_types_of_lentil.png",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.5",
      "hindi": "मसूर"
    },
    {
      "name": "Linseed",
      "wiki": "Flax",
      "desc": "A rabi oilseed and fibre crop (alsi) yielding linseed oil; grown in cool temperate winter.",
      "rain": "300-450 mm",
      "region": "Madhya Pradesh, Uttar Pradesh, Maharashtra, Bihar, Rajasthan",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_%28Plate_16%29_BHL303594.jpg/960px-K%C3%B6hler%27s_Medizinal-Pflanzen_in_naturgetreuen_Abbildungen_mit_kurz_erl%C3%A4uterndem_Texte_%28Plate_16%29_BHL303594.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 5.5–7.0",
      "hindi": "अलसी"
    },
    {
      "name": "Safflower",
      "wiki": "Safflower",
      "desc": "A drought-tolerant rabi oilseed with thistle-like flowers; suited to dry winter black soils.",
      "rain": "300-500 mm",
      "region": "Maharashtra, Karnataka, Andhra Pradesh, Telangana, Madhya Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Safflower.jpg",
      "soil": "Black cotton soil (deep) to well-drained loam; pH 6.0–8.0",
      "hindi": "कुसुम"
    },
    {
      "name": "Fenugreek",
      "wiki": "Fenugreek",
      "desc": "A winter leafy vegetable and seed spice (methi) with bitter aromatic leaves; cool season crop.",
      "rain": "350-500 mm",
      "region": "Rajasthan, Gujarat, Madhya Pradesh, Uttar Pradesh, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Illustration_Trigonella_foenum-graecum0_clean.jpg/960px-Illustration_Trigonella_foenum-graecum0_clean.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–7.5",
      "hindi": "मेथी"
    },
    {
      "name": "Coriander",
      "wiki": "Coriander",
      "desc": "A cool-season herb whose leaves and seeds (dhania) are widely used spices in Indian cooking.",
      "rain": "400-600 mm",
      "region": "Rajasthan, Madhya Pradesh, Gujarat, Andhra Pradesh, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/1/13/Coriandrum_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-193.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–8.0",
      "hindi": "धनिया"
    },
    {
      "name": "Cumin",
      "wiki": "Cumin",
      "desc": "An aromatic rabi seed spice (jeera) valued in Indian cuisine; grown in cool dry winter.",
      "rain": "300-450 mm",
      "region": "Gujarat, Rajasthan, Uttar Pradesh, Madhya Pradesh, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/5/58/Cuminum_cyminum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-198.jpg",
      "soil": "Sandy loam to loam, well-drained; pH 6.8–8.3",
      "hindi": "जीरा"
    },
    {
      "name": "Fennel",
      "wiki": "Fennel",
      "desc": "A sweet aromatic rabi seed spice (saunf) used in cooking and medicine; cool season crop.",
      "rain": "350-500 mm",
      "region": "Gujarat, Rajasthan, Uttar Pradesh, Madhya Pradesh, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Foeniculum_July_2011-1a.jpg/960px-Foeniculum_July_2011-1a.jpg",
      "soil": "Loam to sandy loam, well-drained calcareous; pH 6.0–8.0",
      "hindi": "सौंफ"
    },
    {
      "name": "Carom",
      "wiki": "Ajwain",
      "desc": "A pungent rabi seed spice (ajwain) used in Indian cooking and remedies; grown in cool winter.",
      "rain": "300-450 mm",
      "region": "Gujarat, Rajasthan, Madhya Pradesh, Uttar Pradesh, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Carom_Flowers.jpg/960px-Carom_Flowers.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.5–8.0",
      "hindi": "अजवायन"
    },
    {
      "name": "Nigella",
      "wiki": "Nigella sativa",
      "desc": "A peppery rabi seed spice (kalonji) with medicinal value; grown in cool dry winter.",
      "rain": "300-450 mm",
      "region": "Uttar Pradesh, Punjab, Rajasthan, Bihar, West Bengal",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Nsativa001Wien.jpg/960px-Nsativa001Wien.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.5",
      "hindi": "कलौंजी"
    },
    {
      "name": "Poppy Seed",
      "wiki": "Poppy seed",
      "desc": "An oilseed and culinary seed (khus-khus) from the opium poppy; licensed rabi crop in India.",
      "rain": "400-600 mm",
      "region": "Madhya Pradesh, Uttar Pradesh, Rajasthan, Gujarat, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Poppy_seeds.jpg/960px-Poppy_seeds.jpg",
      "soil": "Loam to sandy loam, highly fertile well-drained; pH 6.0–7.5",
      "hindi": "खसखस"
    },
    {
      "name": "Isabgol",
      "wiki": "Psyllium",
      "desc": "A medicinal rabi seed crop whose husk is a natural laxative; grown in cool dry winter.",
      "rain": "300-450 mm",
      "region": "Gujarat, Rajasthan, Madhya Pradesh, Uttar Pradesh, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Plantago_afra_kz6.jpg/960px-Plantago_afra_kz6.jpg",
      "soil": "Sandy loam to loam, well-drained light soil; pH 6.5–8.0",
      "hindi": "इसबगोल"
    },
    {
      "name": "Potato",
      "wiki": "Potato",
      "desc": "The most important rabi vegetable tuber, grown in cool winter and harvested before the heat.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, West Bengal, Bihar, Punjab, Gujarat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/960px-Patates.jpg",
      "soil": "Well-drained loam to sandy loam, loose & fertile; pH 5.0–6.5",
      "hindi": "आलू"
    },
    {
      "name": "Onion",
      "wiki": "Onion",
      "desc": "A key rabi vegetable bulb grown in cool winter and stored for the lean season; high value crop.",
      "rain": "400-650 mm",
      "region": "Maharashtra, Karnataka, Madhya Pradesh, Gujarat, Bihar",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/960px-Mixed_onions.jpg",
      "soil": "Silty loam to sandy loam, well-drained; pH 6.0–7.0",
      "hindi": "प्याज"
    },
    {
      "name": "Garlic",
      "wiki": "Garlic",
      "desc": "A pungent rabi bulb crop valued as spice and medicine; grown in cool dry winter climate.",
      "rain": "400-600 mm",
      "region": "Madhya Pradesh, Rajasthan, Gujarat, Uttar Pradesh, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg",
      "soil": "Silty loam to sandy loam, well-drained; pH 6.0–7.0",
      "hindi": "लहसुन"
    },
    {
      "name": "Carrot",
      "wiki": "Carrot",
      "desc": "A cool-season root vegetable rich in beta-carotene, grown in winter across India.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, Punjab, Haryana, Maharashtra, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/960px-Vegetable-Carrot-Bundle-wStalks.jpg",
      "soil": "Deep, loose sandy loam free of stones; pH 6.0–7.0",
      "hindi": "गाजर"
    },
    {
      "name": "Cabbage",
      "wiki": "Cabbage",
      "desc": "A cool-season leafy vegetable forming tight heads; a major winter crop in India.",
      "rain": "400-650 mm",
      "region": "Uttar Pradesh, West Bengal, Odisha, Bihar, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/960px-Cabbage_and_cross_section_on_white.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–7.5",
      "hindi": "पत्तागोभी"
    },
    {
      "name": "Cauliflower",
      "wiki": "Cauliflower",
      "desc": "A cool-season vegetable with compact white curd; widely grown rabi crop across India.",
      "rain": "400-650 mm",
      "region": "West Bengal, Uttar Pradesh, Bihar, Odisha, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/960px-Chou-fleur_02.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–7.5",
      "hindi": "फूलगोभी"
    },
    {
      "name": "Broccoli",
      "wiki": "Broccoli",
      "desc": "A nutritious cool-season vegetable with green flower heads; premium winter crop.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, Punjab, Haryana, Maharashtra, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/960px-Broccoli_and_cross_section_edit.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–7.0",
      "hindi": "ब्रोकली"
    },
    {
      "name": "Spinach",
      "wiki": "Spinach",
      "desc": "A cool-season leafy vegetable (palak) rich in iron; fast growing winter crop.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, Punjab, Haryana, Maharashtra, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/37/Spinacia_oleracea_Spinazie_bloeiend.jpg",
      "soil": "Loam to sandy loam, moisture-retentive; pH 6.0–7.5",
      "hindi": "पालक"
    },
    {
      "name": "Lettuce",
      "wiki": "Lettuce",
      "desc": "A tender cool-season salad leaf; grown in winter in northern and hilly regions of India.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, Punjab, Himachal Pradesh, Karnataka, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Iceberg_lettuce_in_SB.jpg/960px-Iceberg_lettuce_in_SB.jpg",
      "soil": "Sandy loam to loam, well-drained fertile; pH 6.0–7.0",
      "hindi": "सलाद पत्ता"
    },
    {
      "name": "Radish",
      "wiki": "Radish",
      "desc": "A fast-growing cool-season root vegetable (mooli); a popular winter crop in India.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, Punjab, West Bengal, Maharashtra, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Radish_3371103037_4ab07db0bf_o.jpg/960px-Radish_3371103037_4ab07db0bf_o.jpg",
      "soil": "Loose, deep sandy loam free of stones; pH 6.0–7.0",
      "hindi": "मूली"
    },
    {
      "name": "Turnip",
      "wiki": "Turnip",
      "desc": "A cool-season root vegetable with edible root and leaves; grown in winter plains.",
      "rain": "400-600 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Himachal Pradesh, Jammu & Kashmir",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/960px-Turnip_2622027.jpg",
      "soil": "Loose, deep sandy loam to loam; pH 5.5–7.0",
      "hindi": "शलजम"
    },
    {
      "name": "Beetroot",
      "wiki": "Beetroot",
      "desc": "A cool-season root rich in iron and natural colour; grown in winter across India.",
      "rain": "400-600 mm",
      "region": "Maharashtra, Uttar Pradesh, Punjab, Haryana, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Detroitdarkredbeets.png/960px-Detroitdarkredbeets.png",
      "soil": "Loose, deep sandy loam to loam; pH 6.0–7.5",
      "hindi": "चुकंदर"
    },
    {
      "name": "Kohlrabi",
      "wiki": "Kohlrabi",
      "desc": "A cool-season vegetable with swollen edible stem; grown in winter in northern India.",
      "rain": "400-600 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Himachal Pradesh, Jammu & Kashmir",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Brassica_oleracea_var._gongylodes_%28kohlrabi%29.jpg/960px-Brassica_oleracea_var._gongylodes_%28kohlrabi%29.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–7.5",
      "hindi": "गांठ गोभी"
    },
    {
      "name": "Mustard Greens",
      "wiki": "Mustard greens",
      "desc": "The leafy form of mustard (sarson saag) eaten as a cooked winter vegetable in North India.",
      "rain": "350-500 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Rajasthan, Madhya Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Komatsuna.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–7.5",
      "hindi": "सरसों का साग"
    },
    {
      "name": "Bathua",
      "wiki": "Chenopodium album",
      "desc": "A fast-growing winter leafy green rich in iron; a traditional rabi vegetable of North India.",
      "rain": "350-500 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Rajasthan, Madhya Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Melganzenvoet_bloeiwijze_Chenopodium_album.jpg/960px-Melganzenvoet_bloeiwijze_Chenopodium_album.jpg",
      "soil": "Loam to sandy loam, thrives in fertile soils; pH 6.0–8.0",
      "hindi": "बथुआ"
    },
    {
      "name": "Capsicum",
      "wiki": "Bell pepper",
      "desc": "A mild sweet pepper grown as a rabi vegetable in cooler weather; high value winter crop.",
      "rain": "450-650 mm",
      "region": "Karnataka, Tamil Nadu, Maharashtra, Uttar Pradesh, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Green-Yellow-Red-Pepper-2009.jpg/960px-Green-Yellow-Red-Pepper-2009.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–6.8",
      "hindi": "शिमला मिर्च"
    },
    {
      "name": "Garden Pea",
      "wiki": "Pea",
      "desc": "A cool-season green pod vegetable (matar) rich in protein; popular winter crop in India.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, Punjab, Haryana, Madhya Pradesh, Himachal Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Peas_in_pods_-_Studio.jpg/960px-Peas_in_pods_-_Studio.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.5",
      "hindi": "मटर"
    },
    {
      "name": "Celery",
      "wiki": "Celery",
      "desc": "A cool-season salad vegetable with crisp petioles; grown in winter in northern India.",
      "rain": "450-650 mm",
      "region": "Punjab, Uttar Pradesh, Haryana, Himachal Pradesh, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Celery_1.jpg/960px-Celery_1.jpg",
      "soil": "Muck/peaty or loamy, moisture-retentive; pH 5.8–7.0",
      "hindi": "अजमोद"
    },
    {
      "name": "Parsley",
      "wiki": "Parsley",
      "desc": "A cool-season herb used as garnish and flavouring; grown in winter across India.",
      "rain": "400-600 mm",
      "region": "Punjab, Uttar Pradesh, Karnataka, Tamil Nadu, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Petroselinum.jpg/960px-Petroselinum.jpg",
      "soil": "Rich loamy, moisture-retentive well-drained; pH 5.5–6.7",
      "hindi": "हरा धनिया"
    },
    {
      "name": "Leek",
      "wiki": "Leek",
      "desc": "A mild cool-season allium with tender blanched stem; grown in winter in northern hills and plains.",
      "rain": "400-600 mm",
      "region": "Himachal Pradesh, Jammu & Kashmir, Punjab, Uttar Pradesh, Uttarakhand",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Leek_on_white_background_-_0947.jpg/960px-Leek_on_white_background_-_0947.jpg",
      "soil": "Loam to sandy loam, moisture-retentive fertile; pH 6.0–7.0",
      "hindi": "हरा प्याज"
    },
    {
      "name": "Kale",
      "wiki": "Kale",
      "desc": "A hardy cool-season leafy vegetable super-rich in vitamins; grown in winter and hills.",
      "rain": "400-600 mm",
      "region": "Himachal Pradesh, Uttarakhand, Punjab, Uttar Pradesh, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Boerenkool.jpg/960px-Boerenkool.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–7.5",
      "hindi": "केल"
    },
    {
      "name": "Swiss Chard",
      "wiki": "Chard",
      "desc": "A cool-season leafy vegetable with colourful stems; nutritious winter crop.",
      "rain": "400-600 mm",
      "region": "Himachal Pradesh, Uttarakhand, Punjab, Uttar Pradesh, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chard_%28Beta_vulgaris_var_cicla%29.jpg/960px-Chard_%28Beta_vulgaris_var_cicla%29.jpg",
      "soil": "Loam to sandy loam, moisture-retentive fertile; pH 6.0–7.5",
      "hindi": "स्विस चार्ड"
    },
    {
      "name": "Arugula",
      "wiki": "Arugula",
      "desc": "A peppery cool-season salad leaf (rocket); fast growing winter crop.",
      "rain": "400-600 mm",
      "region": "Uttar Pradesh, Punjab, Haryana, Karnataka, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Eruca_vesicaria_BM010755249.jpg/960px-Eruca_vesicaria_BM010755249.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.0",
      "hindi": "तरामीरा"
    },
    {
      "name": "Oats",
      "wiki": "Oat",
      "desc": "A cool-season cereal grown for grain and fodder; a hardy rabi crop in India.",
      "rain": "350-500 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Bihar",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/AvenaSativa3.jpg/960px-AvenaSativa3.jpg",
      "soil": "Loam to clay loam, well-drained; pH 5.5–7.0",
      "hindi": "जई"
    },
    {
      "name": "Anise",
      "wiki": "Anise",
      "desc": "An aromatic rabi seed spice (saunf/anise) used in cooking and confectionery; cool season crop.",
      "rain": "350-500 mm",
      "region": "Rajasthan, Uttar Pradesh, Punjab, Madhya Pradesh, Gujarat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Koehler1887-PimpinellaAnisum.jpg",
      "soil": "Sandy loam to loam, well-drained calcareous; pH 6.0–7.5",
      "hindi": "बड़ी सौंफ"
    },
    {
      "name": "Berseem",
      "wiki": "Berseem",
      "desc": "A fast-growing winter fodder legume providing multiple cuttings; major rabi fodder crop.",
      "rain": "400-600 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Rajasthan",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Trifolium_alexandrinum_eF.jpg/960px-Trifolium_alexandrinum_eF.jpg",
      "soil": "Loam to clay loam, fertile, tolerates waterlogging; pH 6.0–7.5",
      "hindi": "बरसीम"
    },
    {
      "name": "Bok Choy",
      "wiki": "Bok choy",
      "desc": "A tender cool-season Chinese cabbage; a premium winter leafy vegetable in India.",
      "rain": "400-600 mm",
      "region": "Punjab, Uttar Pradesh, Karnataka, Himachal Pradesh, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bok_Choy_%2849553125456%29.jpg/960px-Bok_Choy_%2849553125456%29.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–7.5",
      "hindi": "चीनी पत्तागोभी"
    },
    {
      "name": "Asparagus",
      "wiki": "Asparagus",
      "desc": "A perennial cool-season vegetable prized for tender spears; grown in winter and hills.",
      "rain": "400-600 mm",
      "region": "Himachal Pradesh, Uttarakhand, Punjab, Karnataka, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Asparagus-Bundle.jpg/960px-Asparagus-Bundle.jpg",
      "soil": "Deep, well-drained sandy loam; pH 6.5–7.5",
      "hindi": "शतावरी"
    },
    {
      "name": "Artichoke",
      "wiki": "Globe artichoke",
      "desc": "A cool-season perennial vegetable with edible flower buds; niche winter crop in India.",
      "rain": "400-600 mm",
      "region": "Himachal Pradesh, Uttarakhand, Punjab, Haryana, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Artichoke_in_Turkish_Bazaar.jpg/960px-Artichoke_in_Turkish_Bazaar.jpg",
      "soil": "Deep, well-drained sandy loam; pH 6.5–8.0",
      "hindi": "आर्टिचोक"
    },
    {
      "name": "Brussels Sprouts",
      "wiki": "Brussels sprout",
      "desc": "A cool-season vegetable forming miniature cabbage-like sprouts; grown in winter and hills.",
      "rain": "400-600 mm",
      "region": "Himachal Pradesh, Uttarakhand, Jammu & Kashmir, Punjab, Haryana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Brussels_sprout_closeup.jpg/960px-Brussels_sprout_closeup.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 6.0–6.8",
      "hindi": "छोटी गोभी"
    },
    {
      "name": "Endive",
      "wiki": "Endive",
      "desc": "A slightly bitter cool-season salad leaf; grown in winter in northern India.",
      "rain": "400-600 mm",
      "region": "Punjab, Uttar Pradesh, Himachal Pradesh, Karnataka, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG/960px-Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG",
      "soil": "Loam to sandy loam, well-drained fertile; pH 5.5–6.8",
      "hindi": "कासनी"
    },
    {
      "name": "Radicchio",
      "wiki": "Radicchio",
      "desc": "A red cool-season chicory leaf used in salads; a premium winter crop.",
      "rain": "400-600 mm",
      "region": "Himachal Pradesh, Uttarakhand, Punjab, Karnataka, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Radicchio%2C_halbiert.jpg/960px-Radicchio%2C_halbiert.jpg",
      "soil": "Loam to sandy loam, well-drained fertile; pH 5.5–6.8",
      "hindi": "लाल चिकोरी"
    },
    {
      "name": "Rapeseed",
      "wiki": "Rapeseed",
      "desc": "A major rabi oilseed (toria/sarson) yielding edible oil; grown in cool winter plains.",
      "rain": "350-500 mm",
      "region": "Rajasthan, Madhya Pradesh, Uttar Pradesh, Haryana, Assam",
      "img": "https://upload.wikimedia.org/wikipedia/commons/5/57/Brassica_napus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-169.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.5",
      "hindi": "तोरिया"
    },
    {
      "name": "Alfalfa",
      "wiki": "Alfalfa",
      "desc": "A perennial winter fodder legume (lucerne) rich in protein; deep-rooted and drought hardy.",
      "rain": "400-600 mm",
      "region": "Punjab, Haryana, Uttar Pradesh, Gujarat, Madhya Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/eb/75_Medicago_sativa_L.jpg",
      "soil": "Deep, well-drained loam; tolerates drought & salinity; pH 6.5–7.5",
      "hindi": "लूसर्न"
    }
  ],
  "rain": [
    {
      "name": "Rice",
      "wiki": "Rice",
      "desc": "The staple food of India and chief kharif cereal, needing warm wet monsoon and standing water.",
      "rain": "900-2500 mm",
      "region": "West Bengal, Uttar Pradesh, Punjab, Andhra Pradesh, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/960px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg",
      "soil": "Clay to clay loam, water-retentive (puddled); pH 5.5–7.0",
      "hindi": "धान"
    },
    {
      "name": "Maize",
      "wiki": "Maize",
      "desc": "A versatile kharif cereal used for food, feed and industry; grown across warm monsoon regions.",
      "rain": "600-900 mm",
      "region": "Karnataka, Madhya Pradesh, Maharashtra, Telangana, Bihar",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg",
      "soil": "Well-drained loam to sandy loam, fertile; pH 5.5–7.0",
      "hindi": "मक्का"
    },
    {
      "name": "Cotton",
      "wiki": "Cotton",
      "desc": "The prime kharif fibre crop of India, the world's largest cotton grower; needs warm rain then dry ripening.",
      "rain": "600-1000 mm",
      "region": "Gujarat, Maharashtra, Telangana, Andhra Pradesh, Madhya Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/CottonPlant.JPG/960px-CottonPlant.JPG",
      "soil": "Deep black cotton soil (regur) or sandy loam; pH 6.0–8.0",
      "hindi": "कपास"
    },
    {
      "name": "Soybean",
      "wiki": "Soybean",
      "desc": "A high-protein kharif oilseed and pulse crop; major in central India's black soils.",
      "rain": "600-800 mm",
      "region": "Madhya Pradesh, Maharashtra, Rajasthan, Karnataka, Telangana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/8/82/Soybean.USDA.jpg",
      "soil": "Loam to clay loam, well-drained; pH 6.0–7.5",
      "hindi": "सोयाबीन"
    },
    {
      "name": "Groundnut",
      "wiki": "Peanut",
      "desc": "A major kharif oilseed (mungfali) grown for edible oil and snacks; suited to sandy loam.",
      "rain": "500-800 mm",
      "region": "Gujarat, Andhra Pradesh, Tamil Nadu, Rajasthan, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Arachis_hypogaea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-163.jpg/960px-Arachis_hypogaea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-163.jpg",
      "soil": "Well-drained sandy loam to loam; pH 6.0–7.5",
      "hindi": "मूंगफली"
    },
    {
      "name": "Pearl Millet",
      "wiki": "Pearl millet",
      "desc": "A drought-hardy kharif cereal (bajra) staple in arid regions; needs warm rainy season.",
      "rain": "400-700 mm",
      "region": "Rajasthan, Maharashtra, Gujarat, Uttar Pradesh, Haryana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Grain_millet%2C_early_grain_fill%2C_Tifton%2C_7-3-02.jpg/960px-Grain_millet%2C_early_grain_fill%2C_Tifton%2C_7-3-02.jpg",
      "soil": "Sandy to sandy loam, light well-drained; pH 6.0–7.5",
      "hindi": "बाजरा"
    },
    {
      "name": "Sorghum",
      "wiki": "Sorghum",
      "desc": "A hardy kharif cereal and fodder crop (jowar) tolerating dry monsoon; grown on black soils.",
      "rain": "400-700 mm",
      "region": "Maharashtra, Karnataka, Telangana, Madhya Pradesh, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sorghum_bicolor03.jpg/960px-Sorghum_bicolor03.jpg",
      "soil": "Wide range, best on deep loam to clay loam; pH 6.0–8.0",
      "hindi": "ज्वार"
    },
    {
      "name": "Finger Millet",
      "wiki": "Finger millet",
      "desc": "A nutritious kharif millet (ragi) rich in calcium; grown in rainfed hilly regions.",
      "rain": "500-800 mm",
      "region": "Karnataka, Tamil Nadu, Andhra Pradesh, Odisha, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Finger_millet_3_11-21-02.jpg/960px-Finger_millet_3_11-21-02.jpg",
      "soil": "Wide range, tolerates poor & lateritic soils; pH 5.0–8.0",
      "hindi": "रागी"
    },
    {
      "name": "Pigeon Pea",
      "wiki": "Pigeon pea",
      "desc": "A major kharif pulse (tur/arhar) rich in protein; deep-rooted and drought tolerant.",
      "rain": "600-800 mm",
      "region": "Maharashtra, Karnataka, Uttar Pradesh, Telangana, Gujarat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Cajanus_cajan_Blanco1.167-cropped.jpg/960px-Cajanus_cajan_Blanco1.167-cropped.jpg",
      "soil": "Wide range, deep well-drained loam; pH 6.0–8.0",
      "hindi": "अरहर"
    },
    {
      "name": "Black Gram",
      "wiki": "Vigna mungo",
      "desc": "An important kharif pulse (urad) rich in protein; grown in warm rainy season.",
      "rain": "600-800 mm",
      "region": "Madhya Pradesh, Uttar Pradesh, Maharashtra, Andhra Pradesh, Rajasthan",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Black_gram.jpg/960px-Black_gram.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.5",
      "hindi": "उड़द"
    },
    {
      "name": "Green Gram",
      "wiki": "Mung bean",
      "desc": "A short-duration kharif pulse (moong) rich in protein; suited to warm monsoon.",
      "rain": "500-700 mm",
      "region": "Rajasthan, Maharashtra, Karnataka, Madhya Pradesh, Andhra Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mung_beans_%28Vigna_radiata%29.jpg/960px-Mung_beans_%28Vigna_radiata%29.jpg",
      "soil": "Sandy loam to loam, well-drained; pH 6.0–7.5",
      "hindi": "मूंग"
    },
    {
      "name": "Sesame",
      "wiki": "Sesame",
      "desc": "A drought-tolerant kharif oilseed (til) with high-quality oil; grown in warm dry monsoon.",
      "rain": "450-650 mm",
      "region": "Gujarat, Rajasthan, West Bengal, Uttar Pradesh, Madhya Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/70/Sesamum_indicum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-129.jpg",
      "soil": "Sandy loam to loam, well-drained light soil; pH 6.0–8.0",
      "hindi": "तिल"
    },
    {
      "name": "Castor",
      "wiki": "Castor oil plant",
      "desc": "A kharif industrial oilseed (arandi) yielding non-edible oil; suited to warm dry regions.",
      "rain": "500-800 mm",
      "region": "Gujarat, Rajasthan, Andhra Pradesh, Telangana, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ricinus_March_2010-1.jpg/960px-Ricinus_March_2010-1.jpg",
      "soil": "Deep, well-drained loam to sandy loam; pH 5.5–7.0",
      "hindi": "अरंडी"
    },
    {
      "name": "Sunflower",
      "wiki": "Sunflower",
      "desc": "A versatile kharif/summer oilseed with high oil content; needs bright sun and moderate rain.",
      "rain": "500-750 mm",
      "region": "Karnataka, Maharashtra, Andhra Pradesh, Telangana, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Eberndorf_K%C3%B6cking_Sonnenblumenfeld_Biohof_Tomic_18072014_0792.jpg/960px-Eberndorf_K%C3%B6cking_Sonnenblumenfeld_Biohof_Tomic_18072014_0792.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.5",
      "hindi": "सूरजमुखी"
    },
    {
      "name": "Sugarcane",
      "wiki": "Sugarcane",
      "desc": "A long-duration kharif cash crop supplying sugar; needs warm wet climate and ample water.",
      "rain": "1500-2500 mm",
      "region": "Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu, Bihar",
      "img": "https://upload.wikimedia.org/wikipedia/commons/7/74/Saccharum_officinarum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-125.jpg",
      "soil": "Deep, fertile loam to clay loam, water-retentive; pH 6.0–8.0",
      "hindi": "गन्ना"
    },
    {
      "name": "Jute",
      "wiki": "Jute",
      "desc": "A kharif fibre crop (golden fibre) grown for sacks and bags; needs warm humid monsoon.",
      "rain": "1500-2500 mm",
      "region": "West Bengal, Bihar, Assam, Odisha, Meghalaya",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Jute_-_Kolkata_2003-10-31_00538.JPG/960px-Jute_-_Kolkata_2003-10-31_00538.JPG",
      "soil": "Silty loam to clay loam, alluvial & moisture-retentive; pH 6.0–7.5",
      "hindi": "जूट"
    },
    {
      "name": "Kenaf",
      "wiki": "Kenaf",
      "desc": "A kharif fibre crop (mesta) used for paper and cordage; grown in warm humid regions.",
      "rain": "1200-2000 mm",
      "region": "Andhra Pradesh, West Bengal, Odisha, Maharashtra, Telangana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kenaf_Plant.jpg/960px-Kenaf_Plant.jpg",
      "soil": "Loam to clay loam, alluvial moisture-retentive; pH 6.0–7.0",
      "hindi": "मेस्टा"
    },
    {
      "name": "Guar",
      "wiki": "Guar",
      "desc": "A drought-hardy kharif legume whose gum is an industrial export; suited to arid monsoon.",
      "rain": "300-500 mm",
      "region": "Rajasthan, Gujarat, Haryana, Punjab, Uttar Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cluster_bean-guar-Cyamopsis_psoralioides-Cyamopsis_tetragonolobus-TAMIL_NADU73.jpg",
      "soil": "Sandy to sandy loam, well-drained; pH 7.0–8.0",
      "hindi": "ग्वार"
    },
    {
      "name": "Cowpea",
      "wiki": "Cowpea",
      "desc": "A versatile kharif pulse and fodder (lobia) tolerating heat and poor soils.",
      "rain": "500-800 mm",
      "region": "Rajasthan, Gujarat, Maharashtra, Andhra Pradesh, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/0/08/Lobia.jpg",
      "soil": "Wide range, loam to sandy loam; pH 5.5–7.5",
      "hindi": "लोबिया"
    },
    {
      "name": "Niger Seed",
      "wiki": "Guizotia abyssinica",
      "desc": "A kharif oilseed (ramtil) grown in tribal rainfed uplands; yields edible oil.",
      "rain": "500-800 mm",
      "region": "Madhya Pradesh, Odisha, Chhattisgarh, Maharashtra, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Guizotia_abyssinica_niger.jpg/960px-Guizotia_abyssinica_niger.jpg",
      "soil": "Wide range, tolerates poor & eroded soils; pH 5.5–7.0",
      "hindi": "रामतिल"
    },
    {
      "name": "Horse Gram",
      "wiki": "Macrotyloma uniflorum",
      "desc": "A hardy kharif pulse (kulthi) on poor soils; highly drought tolerant.",
      "rain": "400-600 mm",
      "region": "Maharashtra, Karnataka, Andhra Pradesh, Odisha, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Horse_Gram_BNC.jpg/960px-Horse_Gram_BNC.jpg",
      "soil": "Wide range, thrives on poor gravelly soils; pH 5.0–8.0",
      "hindi": "कुलथी"
    },
    {
      "name": "Moth Bean",
      "wiki": "Vigna aconitifolia",
      "desc": "A drought-resistant kharif pulse (moth) grown in arid sandy regions.",
      "rain": "300-500 mm",
      "region": "Rajasthan, Maharashtra, Gujarat, Haryana, Punjab",
      "img": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Matki.JPG",
      "soil": "Sandy to sandy loam, light drought-prone soils; pH 5.5–8.0",
      "hindi": "मोठ"
    },
    {
      "name": "Foxtail Millet",
      "wiki": "Foxtail millet",
      "desc": "A short-duration kharif millet (kangni) rich in fibre; suited to dry rainfed areas.",
      "rain": "400-600 mm",
      "region": "Andhra Pradesh, Karnataka, Telangana, Tamil Nadu, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Japanese_Foxtail_millet_02.jpg/960px-Japanese_Foxtail_millet_02.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 5.5–7.5",
      "hindi": "कांगनी"
    },
    {
      "name": "Proso Millet",
      "wiki": "Proso millet",
      "desc": "A fast-growing kharif millet (cheena) needing least water among millets; drought hardy.",
      "rain": "350-550 mm",
      "region": "Madhya Pradesh, Andhra Pradesh, Karnataka, Tamil Nadu, Uttarakhand",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Mature_Proso_Millet_Panicles.jpg/960px-Mature_Proso_Millet_Panicles.jpg",
      "soil": "Loam to sandy loam, well-drained light soil; pH 5.5–7.5",
      "hindi": "चेना"
    },
    {
      "name": "Kodo Millet",
      "wiki": "Paspalum scrobiculatum",
      "desc": "A hardy kharif millet (kodo) on marginal soils; very drought tolerant.",
      "rain": "400-600 mm",
      "region": "Madhya Pradesh, Chhattisgarh, Maharashtra, Odisha, Andhra Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Paspalum_scrobiculatum_224164066.jpg/960px-Paspalum_scrobiculatum_224164066.jpg",
      "soil": "Wide range, tolerates poor gravelly & lateritic soils; pH 5.0–7.5",
      "hindi": "कोदो"
    },
    {
      "name": "Little Millet",
      "wiki": "Panicum sumatrense",
      "desc": "A nutritious kharif millet (kutki) suited to rainfed uplands; short duration.",
      "rain": "400-600 mm",
      "region": "Madhya Pradesh, Chhattisgarh, Andhra Pradesh, Odisha, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/A_crop_%22samai_%22_grown_in_the_rain_water_only_itself.jpg/960px-A_crop_%22samai_%22_grown_in_the_rain_water_only_itself.jpg",
      "soil": "Loam to sandy loam, upland well-drained; pH 5.5–7.5",
      "hindi": "कुटकी"
    },
    {
      "name": "Barnyard Millet",
      "wiki": "Echinochloa esculenta",
      "desc": "A fast kharif millet (sanwa) tolerating waterlogging and drought; grown on marginal lands.",
      "rain": "400-600 mm",
      "region": "Uttarakhand, Uttar Pradesh, Tamil Nadu, Karnataka, Bihar",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Echinochloa_esculenta_sl2.jpg/960px-Echinochloa_esculenta_sl2.jpg",
      "soil": "Wide range, tolerates waterlogging & poor soils; pH 5.5–7.5",
      "hindi": "सांवा"
    },
    {
      "name": "Sunhemp",
      "wiki": "Crotalaria juncea",
      "desc": "A kharif green-manure and fibre crop enriching soil and suppressing weeds; fast growing.",
      "rain": "500-800 mm",
      "region": "Maharashtra, Karnataka, Andhra Pradesh, Tamil Nadu, Telangana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Crotalaria_juncea_Da220020.JPG",
      "soil": "Loam to sandy loam, well-drained; pH 5.5–7.5",
      "hindi": "सनई"
    },
    {
      "name": "Chilli",
      "wiki": "Chili pepper",
      "desc": "A spicy kharif vegetable and spice crop; India is a leading producer of chillies.",
      "rain": "600-900 mm",
      "region": "Andhra Pradesh, Telangana, Karnataka, Madhya Pradesh, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Madame_Jeanette_and_other_chillies.jpg/960px-Madame_Jeanette_and_other_chillies.jpg",
      "soil": "Well-drained loam to sandy loam, fertile; pH 6.0–7.0",
      "hindi": "मिर्च"
    },
    {
      "name": "Brinjal",
      "wiki": "Eggplant",
      "desc": "A widely grown kharif vegetable (baingan) with purple fruit; warm season staple.",
      "rain": "600-900 mm",
      "region": "West Bengal, Odisha, Gujarat, Maharashtra, Bihar",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/960px-Solanum_melongena_24_08_2012_%281%29.JPG",
      "soil": "Loam to sandy loam, well-drained fertile; pH 5.5–6.6",
      "hindi": "बैंगन"
    },
    {
      "name": "Tomato",
      "wiki": "Tomato",
      "desc": "A popular kharif vegetable rich in lycopene; grown in warm season across India.",
      "rain": "600-900 mm",
      "region": "Andhra Pradesh, Madhya Pradesh, Karnataka, Gujarat, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg",
      "soil": "Well-drained loam to sandy loam, fertile; pH 6.0–7.0",
      "hindi": "टमाटर"
    },
    {
      "name": "Ginger",
      "wiki": "Ginger",
      "desc": "A high-value kharif spice rhizome needing warm humid climate and well-drained soil.",
      "rain": "1500-3000 mm",
      "region": "Kerala, Karnataka, Assam, West Bengal, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Koeh-146-no_text.jpg/960px-Koeh-146-no_text.jpg",
      "soil": "Well-drained loamy, rich in humus; pH 5.5–6.5",
      "hindi": "अदरक"
    },
    {
      "name": "Turmeric",
      "wiki": "Turmeric",
      "desc": "A prized kharif spice rhizome (haldi) rich in curcumin; needs warm humid climate.",
      "rain": "1500-2250 mm",
      "region": "Telangana, Andhra Pradesh, Tamil Nadu, Maharashtra, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Turmeric_inflorescence.jpg/960px-Turmeric_inflorescence.jpg",
      "soil": "Sandy loam to clay loam, well-drained; pH 5.5–7.0",
      "hindi": "हल्दी"
    },
    {
      "name": "Sweet Potato",
      "wiki": "Sweet potato",
      "desc": "A kharif tuber crop with sweet starchy roots; tolerates poor soils and warm wet weather.",
      "rain": "750-1000 mm",
      "region": "Odisha, Uttar Pradesh, West Bengal, Bihar, Andhra Pradesh",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ipomoea_batatas_006.JPG/960px-Ipomoea_batatas_006.JPG",
      "soil": "Loose, sandy loam to loam, well-drained; pH 5.6–6.6",
      "hindi": "शकरकंद"
    },
    {
      "name": "Cassava",
      "wiki": "Cassava",
      "desc": "A starchy kharif tuber (tapioca) thriving in warm humid climate on marginal soils.",
      "rain": "1000-1500 mm",
      "region": "Kerala, Tamil Nadu, Andhra Pradesh, Karnataka, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Manihot_esculenta_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-090.jpg",
      "soil": "Sandy loam to loam, tolerates poor acidic soils; pH 5.0–6.5",
      "hindi": "कसावा"
    },
    {
      "name": "Banana",
      "wiki": "Banana",
      "desc": "A major kharif fruit crop grown year-round in warm humid climate; high water need.",
      "rain": "1500-2500 mm",
      "region": "Maharashtra, Tamil Nadu, Gujarat, Andhra Pradesh, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
      "soil": "Loam to clay loam, rich & well-drained; pH 6.0–7.5",
      "hindi": "केला"
    },
    {
      "name": "Papaya",
      "wiki": "Papaya",
      "desc": "A fast-growing kharif fruit rich in papain and vitamin A; needs warm humid climate.",
      "rain": "1000-2000 mm",
      "region": "Andhra Pradesh, Karnataka, Gujarat, Maharashtra, Tamil Nadu",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-029.jpg/960px-Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-029.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.0–7.0",
      "hindi": "पपीता"
    },
    {
      "name": "Coconut",
      "wiki": "Coconut",
      "desc": "A coastal kharif plantation crop (kalpa vriksha) needing warm humid climate and saline soils.",
      "rain": "1000-2500 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Goa",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Cocos_nucifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-187.jpg/960px-Cocos_nucifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-187.jpg",
      "soil": "Sandy to sandy loam, coastal & lateritic; pH 5.5–8.0",
      "hindi": "नारियल"
    },
    {
      "name": "Cashew",
      "wiki": "Cashew",
      "desc": "A kharif plantation nut crop suited to coastal warm humid climate and laterite soils.",
      "rain": "1000-2000 mm",
      "region": "Maharashtra, Andhra Pradesh, Odisha, Goa, Karnataka",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cashew_apples.jpg/960px-Cashew_apples.jpg",
      "soil": "Sandy to lateritic, well-drained; pH 5.5–7.0",
      "hindi": "काजू"
    },
    {
      "name": "Arecanut",
      "wiki": "Areca nut",
      "desc": "A kharif plantation crop (supari) needing warm humid climate; grown in the Western Ghats.",
      "rain": "1500-2500 mm",
      "region": "Karnataka, Kerala, Assam, West Bengal, Meghalaya",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bago%2C_mercado_23.jpg/960px-Bago%2C_mercado_23.jpg",
      "soil": "Loam to clay loam, moisture-retentive; pH 5.5–8.0",
      "hindi": "सुपारी"
    },
    {
      "name": "Cocoa",
      "wiki": "Cocoa bean",
      "desc": "A kharif plantation crop for chocolate; needs warm humid shade and well-distributed rain.",
      "rain": "1500-2500 mm",
      "region": "Kerala, Karnataka, Andhra Pradesh, Tamil Nadu, Telangana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cocoa_Pods.JPG/960px-Cocoa_Pods.JPG",
      "soil": "Loam to clay loam, well-drained; pH 6.0–7.5",
      "hindi": "कोको"
    },
    {
      "name": "Pineapple",
      "wiki": "Pineapple",
      "desc": "A tropical kharif fruit with juicy aromatic pulp; needs warm humid climate and acidic soil.",
      "rain": "1000-1500 mm",
      "region": "Kerala, Karnataka, West Bengal, Assam, Meghalaya",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg/960px-%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg",
      "soil": "Sandy loam to loam, acidic well-drained; pH 5.0–6.0",
      "hindi": "अनानास"
    },
    {
      "name": "Guava",
      "wiki": "Guava",
      "desc": "A hardy kharif fruit rich in vitamin C; grown in warm climate across India.",
      "rain": "800-1200 mm",
      "region": "Uttar Pradesh, Madhya Pradesh, Bihar, Andhra Pradesh, Maharashtra",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Guava_pink_fruit.jpg/960px-Guava_pink_fruit.jpg",
      "soil": "Wide range, best on well-drained loam; pH 5.5–7.5",
      "hindi": "अमरूद"
    },
    {
      "name": "Pomegranate",
      "wiki": "Pomegranate",
      "desc": "A drought-tolerant kharif fruit with antioxidant-rich arils; suited to dry warm climate.",
      "rain": "500-800 mm",
      "region": "Maharashtra, Karnataka, Andhra Pradesh, Gujarat, Telangana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pomegranate_Juice_%282019%29.jpg/960px-Pomegranate_Juice_%282019%29.jpg",
      "soil": "Loam to sandy loam, well-drained; pH 6.5–8.0",
      "hindi": "अनार"
    },
    {
      "name": "Rubber",
      "wiki": "Rubber tree",
      "desc": "A plantation crop yielding natural rubber latex; needs warm humid equable climate.",
      "rain": "2000-3000 mm",
      "region": "Kerala, Tamil Nadu, Karnataka, Tripura, Assam",
      "img": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Hevea_brasiliensis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-071.jpg",
      "soil": "Deep, well-drained lateritic loam; pH 4.5–6.0",
      "hindi": "रबर"
    },
    {
      "name": "Black Pepper",
      "wiki": "Black pepper",
      "desc": "The king of spices, a kharif climbing vine needing warm humid shade; native to the Ghats.",
      "rain": "2000-3000 mm",
      "region": "Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, Meghalaya",
      "img": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg",
      "soil": "Loam to clay loam, rich & well-drained; pH 5.5–6.5",
      "hindi": "काली मिर्च"
    },
    {
      "name": "Tamarind",
      "wiki": "Tamarind",
      "desc": "A hardy kharif tree with tangy pulp (imli) used in cooking; drought tolerant.",
      "rain": "400-800 mm",
      "region": "Andhra Pradesh, Tamil Nadu, Karnataka, Maharashtra, Odisha",
      "img": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Tamarindus_indica_pods.JPG",
      "soil": "Wide range, thrives in loam to sandy loam; pH 5.0–8.0",
      "hindi": "इमली"
    },
    {
      "name": "Mahua",
      "wiki": "Madhuca longifolia",
      "desc": "A hardy kharif tree whose sweet flowers and oilseeds feed tribal communities; drought tolerant.",
      "rain": "400-800 mm",
      "region": "Madhya Pradesh, Chhattisgarh, Maharashtra, Odisha, Jharkhand",
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/61/Mahuwa_trees_in_Chhattisgarh.jpg",
      "soil": "Wide range, thrives in shallow & rocky soils; pH 5.5–8.0",
      "hindi": "महुआ"
    },
    {
      "name": "Kokum",
      "wiki": "Garcinia indica",
      "desc": "A coastal kharif tree whose sour fruit rind yields kokum; suited to warm humid western coast.",
      "rain": "1000-2000 mm",
      "region": "Maharashtra, Goa, Karnataka, Kerala, Gujarat",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Garcinia_indica_-_fruits%2C_seeds%2C_pulp_and_rinds.jpg/960px-Garcinia_indica_-_fruits%2C_seeds%2C_pulp_and_rinds.jpg",
      "soil": "Lateritic to sandy loam, well-drained coastal; pH 5.5–7.0",
      "hindi": "कोकम"
    },
    {
      "name": "Custard Apple",
      "wiki": "Annona reticulata",
      "desc": "A sweet creamy kharif fruit (sharifa) drought tolerant and grown in warm regions.",
      "rain": "400-700 mm",
      "region": "Andhra Pradesh, Maharashtra, Karnataka, Tamil Nadu, Telangana",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Annona_reticulata_Blanco1.197-cropped.jpg/960px-Annona_reticulata_Blanco1.197-cropped.jpg",
      "soil": "Wide range, well-drained sandy loam; pH 5.5–7.5",
      "hindi": "शरीफा"
    }
  ]
};
if (typeof window !== 'undefined') { window.CROP_DATA = CROP_DATA; }
