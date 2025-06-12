import React from 'react'
import './AllBirds.css'
import ResponsiveCards from '../../Components/SwiperCards/Swiper'
import ResponsiveProducts from '../../Components/SwiperProducts/ProductSlider'


function AllBirds() {

  const products = [
    {
      "id": 1,
      "image_path": "Mix (1).avif",
      "product_detail": "Premium Shoe Model 1",
      "product_type": "High Heels",
      "price": 186.4
    },
    {
      "id": 2,
      "image_path": "Mix (2).avif",
      "product_detail": "Premium Shoe Model 2",
      "product_type": "Loafers",
      "price": 1486.49
    },
    {
      "id": 3,
      "image_path": "Mix (3).avif",
      "product_detail": "Luxury Shoe Model 3",
      "product_type": "Sandals",
      "price": 762.5
    },
    {
      "id": 4,
      "image_path": "Mix (4).avif",
      "product_detail": "Sport Shoe Model 4",
      "product_type": "Boots",
      "price": 672.35
    },
    {
      "id": 5,
      "image_path": "Mix (5).avif",
      "product_detail": "Urban Shoe Model 5",
      "product_type": "Sandals",
      "price": 1187.82
    },
    {
      "id": 6,
      "image_path": "Mix (6).avif",
      "product_detail": "Luxury Shoe Model 6",
      "product_type": "Loafers",
      "price": 1541.76
    },
    {
      "id": 7,
      "image_path": "Mix (7).avif",
      "product_detail": "Urban Shoe Model 7",
      "product_type": "Sneakers",
      "price": 1948.56
    },
    {
      "id": 8,
      "image_path": "Mix (8).avif",
      "product_detail": "Sport Shoe Model 8",
      "product_type": "Running Shoes",
      "price": 1170.99
    },
    {
      "id": 9,
      "image_path": "Mix (9).avif",
      "product_detail": "Premium Shoe Model 9",
      "product_type": "Loafers",
      "price": 1487.35
    },
    {
      "id": 10,
      "image_path": "Mix (10).avif",
      "product_detail": "Sport Shoe Model 10",
      "product_type": "Sandals",
      "price": 1179.42
    },
    {
      "id": 11,
      "image_path": "Mix (11).avif",
      "product_detail": "Limited Edition Shoe Model 11",
      "product_type": "Boots",
      "price": 1902.04
    },
    {
      "id": 12,
      "image_path": "Mix (12).avif",
      "product_detail": "Classic Shoe Model 12",
      "product_type": "Running Shoes",
      "price": 654.04
    },
    {
      "id": 13,
      "image_path": "Mix (13).avif",
      "product_detail": "Limited Edition Shoe Model 13",
      "product_type": "Boots",
      "price": 1892.58
    },
    {
      "id": 14,
      "image_path": "Mix (14).avif",
      "product_detail": "Sport Shoe Model 14",
      "product_type": "Derby",
      "price": 715.57
    },
    {
      "id": 15,
      "image_path": "Mix (15).avif",
      "product_detail": "Urban Shoe Model 15",
      "product_type": "Loafers",
      "price": 603.39
    },
    {
      "id": 16,
      "image_path": "Mix (16).avif",
      "product_detail": "Urban Shoe Model 16",
      "product_type": "Boots",
      "price": 1293.99
    },
    {
      "id": 17,
      "image_path": "Mix (17).avif",
      "product_detail": "Limited Edition Shoe Model 17",
      "product_type": "Running Shoes",
      "price": 1242.56
    },
    {
      "id": 18,
      "image_path": "Mix (18).avif",
      "product_detail": "Designer Shoe Model 18",
      "product_type": "Loafers",
      "price": 441.96
    },
    {
      "id": 19,
      "image_path": "Mix (19).avif",
      "product_detail": "Classic Shoe Model 19",
      "product_type": "Loafers",
      "price": 1573.8
    },
    {
      "id": 20,
      "image_path": "Mix (20).avif",
      "product_detail": "Urban Shoe Model 20",
      "product_type": "Oxford",
      "price": 276.11
    },
    {
      "id": 21,
      "image_path": "Mix (21).avif",
      "product_detail": "Classic Shoe Model 21",
      "product_type": "Derby",
      "price": 900.11
    },
    {
      "id": 22,
      "image_path": "Mix (22).avif",
      "product_detail": "Premium Shoe Model 22",
      "product_type": "Oxford",
      "price": 411.93
    },
    {
      "id": 23,
      "image_path": "Mix (23).avif",
      "product_detail": "Designer Shoe Model 23",
      "product_type": "Sneakers",
      "price": 1680.56
    },
    {
      "id": 24,
      "image_path": "Mix (24).avif",
      "product_detail": "Premium Shoe Model 24",
      "product_type": "High Heels",
      "price": 191.19
    },
    {
      "id": 25,
      "image_path": "Mix (25).avif",
      "product_detail": "Elegant Shoe Model 25",
      "product_type": "Sneakers",
      "price": 889.69
    },
    {
      "id": 26,
      "image_path": "Mix (26).avif",
      "product_detail": "Designer Shoe Model 26",
      "product_type": "Running Shoes",
      "price": 1710.36
    },
    {
      "id": 27,
      "image_path": "Mix (27).avif",
      "product_detail": "Sport Shoe Model 27",
      "product_type": "High Heels",
      "price": 413.05
    },
    {
      "id": 28,
      "image_path": "Mix (28).avif",
      "product_detail": "Designer Shoe Model 28",
      "product_type": "High Heels",
      "price": 245.26
    },
    {
      "id": 29,
      "image_path": "Mix (29).avif",
      "product_detail": "Premium Shoe Model 29",
      "product_type": "Loafers",
      "price": 360.27
    },
    {
      "id": 30,
      "image_path": "Mix (30).avif",
      "product_detail": "Luxury Shoe Model 30",
      "product_type": "Sandals",
      "price": 1588.92
    },
    {
      "id": 31,
      "image_path": "Mix (31).avif",
      "product_detail": "Luxury Shoe Model 31",
      "product_type": "High Heels",
      "price": 724.38
    },
    {
      "id": 32,
      "image_path": "Mix (32).avif",
      "product_detail": "Urban Shoe Model 32",
      "product_type": "Running Shoes",
      "price": 834.89
    },
    {
      "id": 33,
      "image_path": "Mix (33).avif",
      "product_detail": "Designer Shoe Model 33",
      "product_type": "Sandals",
      "price": 1048.04
    },
    {
      "id": 34,
      "image_path": "Mix (34).avif",
      "product_detail": "Premium Shoe Model 34",
      "product_type": "Running Shoes",
      "price": 549.17
    },
    {
      "id": 35,
      "image_path": "Mix (35).avif",
      "product_detail": "Sport Shoe Model 35",
      "product_type": "Running Shoes",
      "price": 1394.43
    },
    {
      "id": 36,
      "image_path": "Mix (36).avif",
      "product_detail": "Urban Shoe Model 36",
      "product_type": "Sneakers",
      "price": 670.46
    },
    {
      "id": 37,
      "image_path": "Mix (37).avif",
      "product_detail": "Luxury Shoe Model 37",
      "product_type": "Derby",
      "price": 1136.94
    },
    {
      "id": 38,
      "image_path": "Mix (38).avif",
      "product_detail": "Luxury Shoe Model 38",
      "product_type": "High Heels",
      "price": 208.39
    },
    {
      "id": 39,
      "image_path": "Mix (39).avif",
      "product_detail": "Limited Edition Shoe Model 39",
      "product_type": "Oxford",
      "price": 141.87
    },
    {
      "id": 40,
      "image_path": "Mix (40).avif",
      "product_detail": "Premium Shoe Model 40",
      "product_type": "Sneakers",
      "price": 401.39
    },
    {
      "id": 41,
      "image_path": "Mix (41).avif",
      "product_detail": "Luxury Shoe Model 41",
      "product_type": "Oxford",
      "price": 291.79
    },
    {
      "id": 42,
      "image_path": "Mix (42).avif",
      "product_detail": "Luxury Shoe Model 42",
      "product_type": "Boots",
      "price": 1971.32
    },
    {
      "id": 43,
      "image_path": "Mix (43).avif",
      "product_detail": "Sport Shoe Model 43",
      "product_type": "High Heels",
      "price": 1732.74
    },
    {
      "id": 44,
      "image_path": "Mix (44).avif",
      "product_detail": "Luxury Shoe Model 44",
      "product_type": "Oxford",
      "price": 1571.73
    },
    {
      "id": 45,
      "image_path": "Mix (45).avif",
      "product_detail": "Premium Shoe Model 45",
      "product_type": "Derby",
      "price": 1879.41
    },
    {
      "id": 46,
      "image_path": "Mix (46).avif",
      "product_detail": "Premium Shoe Model 46",
      "product_type": "Running Shoes",
      "price": 1225.13
    },
    {
      "id": 47,
      "image_path": "Mix (47).avif",
      "product_detail": "Classic Shoe Model 47",
      "product_type": "Boots",
      "price": 1569.92
    },
    {
      "id": 48,
      "image_path": "Mix (48).avif",
      "product_detail": "Designer Shoe Model 48",
      "product_type": "Running Shoes",
      "price": 1312.52
    },
    {
      "id": 49,
      "image_path": "Mix (49).avif",
      "product_detail": "Sport Shoe Model 49",
      "product_type": "Loafers",
      "price": 1891.7
    },
    {
      "id": 50,
      "image_path": "Mix (50).avif",
      "product_detail": "Premium Shoe Model 50",
      "product_type": "Sandals",
      "price": 1465.25
    },
    {
      "id": 51,
      "image_path": "Mix (51).avif",
      "product_detail": "Classic Shoe Model 51",
      "product_type": "Sandals",
      "price": 786.62
    },
    {
      "id": 52,
      "image_path": "Mix (52).avif",
      "product_detail": "Elegant Shoe Model 52",
      "product_type": "Derby",
      "price": 479.68
    },
    {
      "id": 53,
      "image_path": "Mix (53).avif",
      "product_detail": "Limited Edition Shoe Model 53",
      "product_type": "Sneakers",
      "price": 1002.89
    },
    {
      "id": 54,
      "image_path": "Mix (54).avif",
      "product_detail": "Elegant Shoe Model 54",
      "product_type": "Oxford",
      "price": 1676.49
    },
    {
      "id": 55,
      "image_path": "Mix (55).avif",
      "product_detail": "Sport Shoe Model 55",
      "product_type": "Running Shoes",
      "price": 976.97
    },
    {
      "id": 56,
      "image_path": "Mix (56).avif",
      "product_detail": "Elegant Shoe Model 56",
      "product_type": "High Heels",
      "price": 1802.89
    },
    {
      "id": 57,
      "image_path": "Mix (57).avif",
      "product_detail": "Premium Shoe Model 57",
      "product_type": "Oxford",
      "price": 1555.78
    },
    {
      "id": 58,
      "image_path": "Mix (58).avif",
      "product_detail": "Elegant Shoe Model 58",
      "product_type": "Loafers",
      "price": 1224.83
    },
    {
      "id": 59,
      "image_path": "Mix (59).avif",
      "product_detail": "Limited Edition Shoe Model 59",
      "product_type": "Derby",
      "price": 816.16
    },
    {
      "id": 60,
      "image_path": "Mix (60).avif",
      "product_detail": "Designer Shoe Model 60",
      "product_type": "Boots",
      "price": 539.09
    },
    {
      "id": 61,
      "image_path": "Mix (61).avif",
      "product_detail": "Sport Shoe Model 61",
      "product_type": "Sneakers",
      "price": 544.75
    },
    {
      "id": 62,
      "image_path": "Mix (62).avif",
      "product_detail": "Luxury Shoe Model 62",
      "product_type": "Sneakers",
      "price": 675.83
    },
    {
      "id": 63,
      "image_path": "Mix (63).avif",
      "product_detail": "Designer Shoe Model 63",
      "product_type": "High Heels",
      "price": 1897.33
    },
    {
      "id": 64,
      "image_path": "Mix (64).avif",
      "product_detail": "Designer Shoe Model 64",
      "product_type": "Sandals",
      "price": 1152.48
    },
    {
      "id": 65,
      "image_path": "Mix (65).avif",
      "product_detail": "Urban Shoe Model 65",
      "product_type": "Derby",
      "price": 870.93
    },
    {
      "id": 66,
      "image_path": "Mix (66).avif",
      "product_detail": "Sport Shoe Model 66",
      "product_type": "Loafers",
      "price": 1481.85
    },
    {
      "id": 67,
      "image_path": "Mix (67).avif",
      "product_detail": "Classic Shoe Model 67",
      "product_type": "Oxford",
      "price": 550.49
    },
    {
      "id": 68,
      "image_path": "Mix (68).avif",
      "product_detail": "Urban Shoe Model 68",
      "product_type": "High Heels",
      "price": 821.36
    },
    {
      "id": 69,
      "image_path": "Mix (69).avif",
      "product_detail": "Classic Shoe Model 69",
      "product_type": "High Heels",
      "price": 1195.63
    },
    {
      "id": 70,
      "image_path": "Mix (70).avif",
      "product_detail": "Limited Edition Shoe Model 70",
      "product_type": "Sneakers",
      "price": 1532.87
    },
    {
      "id": 71,
      "image_path": "Mix (71).avif",
      "product_detail": "Urban Shoe Model 71",
      "product_type": "Sneakers",
      "price": 1303.71
    },
    {
      "id": 72,
      "image_path": "Mix (72).avif",
      "product_detail": "Elegant Shoe Model 72",
      "product_type": "Loafers",
      "price": 640.3
    },
    {
      "id": 73,
      "image_path": "Mix (73).avif",
      "product_detail": "Sport Shoe Model 73",
      "product_type": "Sandals",
      "price": 1828.11
    },
    {
      "id": 74,
      "image_path": "Mix (74).avif",
      "product_detail": "Luxury Shoe Model 74",
      "product_type": "Derby",
      "price": 737.58
    },
    {
      "id": 75,
      "image_path": "Mix (75).avif",
      "product_detail": "Limited Edition Shoe Model 75",
      "product_type": "Boots",
      "price": 1599.88
    },
    {
      "id": 76,
      "image_path": "Mix (76).avif",
      "product_detail": "Luxury Shoe Model 76",
      "product_type": "High Heels",
      "price": 1845.73
    },
    {
      "id": 77,
      "image_path": "Mix (77).avif",
      "product_detail": "Urban Shoe Model 77",
      "product_type": "Sneakers",
      "price": 1075.53
    },
    {
      "id": 78,
      "image_path": "Mix (78).avif",
      "product_detail": "Classic Shoe Model 78",
      "product_type": "Sneakers",
      "price": 998.11
    },
    {
      "id": 79,
      "image_path": "Mix (79).avif",
      "product_detail": "Premium Shoe Model 79",
      "product_type": "Running Shoes",
      "price": 1184.98
    },
    {
      "id": 80,
      "image_path": "Mix (80).avif",
      "product_detail": "Designer Shoe Model 80",
      "product_type": "Running Shoes",
      "price": 1541.1
    },
    {
      "id": 81,
      "image_path": "Mix (81).avif",
      "product_detail": "Classic Shoe Model 81",
      "product_type": "Oxford",
      "price": 1081.5
    },
    {
      "id": 82,
      "image_path": "Mix (82).avif",
      "product_detail": "Limited Edition Shoe Model 82",
      "product_type": "Running Shoes",
      "price": 394.11
    },
    {
      "id": 83,
      "image_path": "Mix (83).avif",
      "product_detail": "Designer Shoe Model 83",
      "product_type": "Sandals",
      "price": 1113.92
    },
    {
      "id": 84,
      "image_path": "Mix (84).avif",
      "product_detail": "Designer Shoe Model 84",
      "product_type": "Sneakers",
      "price": 1154.04
    },
    {
      "id": 85,
      "image_path": "Mix (85).avif",
      "product_detail": "Designer Shoe Model 85",
      "product_type": "Sandals",
      "price": 1727.02
    },
    {
      "id": 86,
      "image_path": "Mix (86).avif",
      "product_detail": "Limited Edition Shoe Model 86",
      "product_type": "Sandals",
      "price": 1291.52
    },
    {
      "id": 87,
      "image_path": "Mix (87).avif",
      "product_detail": "Sport Shoe Model 87",
      "product_type": "Sandals",
      "price": 1041.35
    },
    {
      "id": 88,
      "image_path": "Mix (88).avif",
      "product_detail": "Sport Shoe Model 88",
      "product_type": "Derby",
      "price": 1167.67
    },
    {
      "id": 89,
      "image_path": "Mix (89).avif",
      "product_detail": "Urban Shoe Model 89",
      "product_type": "High Heels",
      "price": 461.54
    },
    {
      "id": 90,
      "image_path": "Mix (90).avif",
      "product_detail": "Urban Shoe Model 90",
      "product_type": "Sneakers",
      "price": 358.71
    },
    {
      "id": 91,
      "image_path": "Mix (91).avif",
      "product_detail": "Premium Shoe Model 91",
      "product_type": "Derby",
      "price": 1615.25
    },
    {
      "id": 92,
      "image_path": "Mix (92).avif",
      "product_detail": "Elegant Shoe Model 92",
      "product_type": "Running Shoes",
      "price": 1793.83
    },
    {
      "id": 93,
      "image_path": "Mix (93).avif",
      "product_detail": "Urban Shoe Model 93",
      "product_type": "Derby",
      "price": 1418.34
    },
    {
      "id": 94,
      "image_path": "Mix (94).avif",
      "product_detail": "Designer Shoe Model 94",
      "product_type": "Sneakers",
      "price": 287.16
    },
    {
      "id": 95,
      "image_path": "Mix (95).avif",
      "product_detail": "Premium Shoe Model 95",
      "product_type": "Derby",
      "price": 1692.74
    },
    {
      "id": 96,
      "image_path": "Mix (96).avif",
      "product_detail": "Designer Shoe Model 96",
      "product_type": "Running Shoes",
      "price": 1100.8
    },
    {
      "id": 97,
      "image_path": "Mix (97).avif",
      "product_detail": "Classic Shoe Model 97",
      "product_type": "Loafers",
      "price": 1007.42
    },
    {
      "id": 98,
      "image_path": "Mix (98).avif",
      "product_detail": "Classic Shoe Model 98",
      "product_type": "High Heels",
      "price": 226.22
    },
    {
      "id": 99,
      "image_path": "Mix (99).avif",
      "product_detail": "Classic Shoe Model 99",
      "product_type": "Boots",
      "price": 1698.15
    },
    {
      "id": 100,
      "image_path": "Mix (100).avif",
      "product_detail": "Designer Shoe Model 100",
      "product_type": "Boots",
      "price": 1557.02
    },
    {
      "id": 101,
      "image_path": "Mix (101).avif",
      "product_detail": "Luxury Shoe Model 101",
      "product_type": "Oxford",
      "price": 889.4
    },
    {
      "id": 102,
      "image_path": "Mix (102).avif",
      "product_detail": "Elegant Shoe Model 102",
      "product_type": "Sneakers",
      "price": 502.58
    },
    {
      "id": 103,
      "image_path": "Mix (103).avif",
      "product_detail": "Classic Shoe Model 103",
      "product_type": "Running Shoes",
      "price": 160.24
    },
    {
      "id": 104,
      "image_path": "Mix (104).avif",
      "product_detail": "Classic Shoe Model 104",
      "product_type": "High Heels",
      "price": 1069.65
    },
    {
      "id": 105,
      "image_path": "Mix (105).avif",
      "product_detail": "Premium Shoe Model 105",
      "product_type": "Oxford",
      "price": 335.82
    },
    {
      "id": 106,
      "image_path": "Mix (106).avif",
      "product_detail": "Elegant Shoe Model 106",
      "product_type": "Running Shoes",
      "price": 290.58
    },
    {
      "id": 107,
      "image_path": "Mix (107).avif",
      "product_detail": "Urban Shoe Model 107",
      "product_type": "Boots",
      "price": 1736.01
    },
    {
      "id": 108,
      "image_path": "Mix (108).avif",
      "product_detail": "Elegant Shoe Model 108",
      "product_type": "Running Shoes",
      "price": 1055.18
    },
    {
      "id": 109,
      "image_path": "Mix (109).avif",
      "product_detail": "Designer Shoe Model 109",
      "product_type": "Running Shoes",
      "price": 829.07
    },
    {
      "id": 110,
      "image_path": "Mix (110).avif",
      "product_detail": "Premium Shoe Model 110",
      "product_type": "Boots",
      "price": 931.92
    },
    {
      "id": 111,
      "image_path": "Mix (111).avif",
      "product_detail": "Classic Shoe Model 111",
      "product_type": "Loafers",
      "price": 970.98
    },
    {
      "id": 112,
      "image_path": "Mix (112).avifMix (31).avif",
      "product_detail": "Premium Shoe Model 112",
      "product_type": "High Heels",
      "price": 1588.5
    },
    {
      "id": 113,
      "image_path": "Mix (113).avif",
      "product_detail": "Classic Shoe Model 113",
      "product_type": "Derby",
      "price": 879.86
    },
    {
      "id": 114,
      "image_path": "Mix (114).avif",
      "product_detail": "Urban Shoe Model 114",
      "product_type": "Sandals",
      "price": 1231.47
    },
    {
      "id": 115,
      "image_path": "Mix (115).avif",
      "product_detail": "Limited Edition Shoe Model 115",
      "product_type": "Running Shoes",
      "price": 680.83
    },
    {
      "id": 116,
      "image_path": "Mix (116).avif",
      "product_detail": "Elegant Shoe Model 116",
      "product_type": "Derby",
      "price": 1316.04
    },
    {
      "id": 117,
      "image_path": "Mix (117).avif",
      "product_detail": "Elegant Shoe Model 117",
      "product_type": "Sandals",
      "price": 1612.17
    },
    {
      "id": 118,
      "image_path": "Mix (118).avif",
      "product_detail": "Designer Shoe Model 118",
      "product_type": "Derby",
      "price": 622.18
    },
    {
      "id": 119,
      "image_path": "Mix (119).avif",
      "product_detail": "Elegant Shoe Model 119",
      "product_type": "Loafers",
      "price": 977.81
    },
    {
      "id": 120,
      "image_path": "Mix (120).avif",
      "product_detail": "Classic Shoe Model 120",
      "product_type": "Running Shoes",
      "price": 1053.01
    },
    {
      "id": 121,
      "image_path": "Mix 121).avif",
      "product_detail": "Designer Shoe Model 121",
      "product_type": "Oxford",
      "price": 1314.15
    },
    {
      "id": 122,
      "image_path": "Mix (122).avif",
      "product_detail": "Urban Shoe Model 122",
      "product_type": "Boots",
      "price": 144.81
    },
    {
      "id": 123,
      "image_path": "Mix (123).avif",
      "product_detail": "Urban Shoe Model 123",
      "product_type": "Boots",
      "price": 877.36
    },
    {
      "id": 124,
      "image_path": "Mix (124).avif",
      "product_detail": "Limited Edition Shoe Model 124",
      "product_type": "Derby",
      "price": 1886.29
    },
    {
      "id": 125,
      "image_path": "Mix (125).avif",
      "product_detail": "Classic Shoe Model 125",
      "product_type": "Boots",
      "price": 1203.32
    },
    {
      "id": 126,
      "image_path": "Mix (126).avif",
      "product_detail": "Urban Shoe Model 126",
      "product_type": "Sandals",
      "price": 1729.57
    },
    {
      "id": 127,
      "image_path": "Mix (127).avif",
      "product_detail": "Urban Shoe Model 127",
      "product_type": "Sneakers",
      "price": 447.44
    },
    {
      "id": 128,
      "image_path": "Mix (128).avif",
      "product_detail": "Designer Shoe Model 128",
      "product_type": "Running Shoes",
      "price": 950.01
    },
    {
      "id": 129,
      "image_path": "Mix (129).avif",
      "product_detail": "Urban Shoe Model 129",
      "product_type": "Running Shoes",
      "price": 1266.89
    },
    {
      "id": 130,
      "image_path": "Mix (130).avif",
      "product_detail": "Premium Shoe Model 130",
      "product_type": "Sneakers",
      "price": 1263.55
    },
    {
      "id": 131,
      "image_path": "Mix (131).avif",
      "product_detail": "Classic Shoe Model 131",
      "product_type": "Sandals",
      "price": 1118.99
    },
    {
      "id": 132,
      "image_path": "Mix (132).avif",
      "product_detail": "Classic Shoe Model 132",
      "product_type": "Loafers",
      "price": 1226.04
    },
    {
      "id": 133,
      "image_path": "Mix (133).avif",
      "product_detail": "Classic Shoe Model 133",
      "product_type": "Sneakers",
      "price": 1117.49
    },
    {
      "id": 134,
      "image_path": "Mix (134).avif",
      "product_detail": "Classic Shoe Model 134",
      "product_type": "High Heels",
      "price": 323.74
    },
    {
      "id": 135,
      "image_path": "Mix (135).avif",
      "product_detail": "Limited Edition Shoe Model 135",
      "product_type": "Loafers",
      "price": 1109.86
    },
    {
      "id": 136,
      "image_path": "Mix (136).avif",
      "product_detail": "Classic Shoe Model 136",
      "product_type": "Running Shoes",
      "price": 745.89
    },
    {
      "id": 137,
      "image_path": "Mix (137).avif",
      "product_detail": "Urban Shoe Model 137",
      "product_type": "Loafers",
      "price": 1116.29
    },
    {
      "id": 138,
      "image_path": "Mix (138).avif",
      "product_detail": "Sport Shoe Model 138",
      "product_type": "Sandals",
      "price": 525.51
    },
    {
      "id": 139,
      "image_path": "Mix (139).avif",
      "product_detail": "Sport Shoe Model 139",
      "product_type": "Sneakers",
      "price": 717.89
    },
    {
      "id": 140,
      "image_path": "Mix (140).avif",
      "product_detail": "Limited Edition Shoe Model 140",
      "product_type": "Loafers",
      "price": 899.47
    },
    {
      "id": 141,
      "image_path": "Mix (141).avif",
      "product_detail": "Premium Shoe Model 141",
      "product_type": "Sandals",
      "price": 1041.75
    },
    {
      "id": 142,
      "image_path": "Mix (142).avif",
      "product_detail": "Elegant Shoe Model 142",
      "product_type": "Sandals",
      "price": 658.93
    },
    {
      "id": 143,
      "image_path": "Mix (143).avif",
      "product_detail": "Designer Shoe Model 143",
      "product_type": "Derby",
      "price": 1275.17
    },
    {
      "id": 144,
      "image_path": "Mix (144).avif",
      "product_detail": "Designer Shoe Model 144",
      "product_type": "Running Shoes",
      "price": 1963.32
    },
    {
      "id": 145,
      "image_path": "Mix (145).avif",
      "product_detail": "Limited Edition Shoe Model 145",
      "product_type": "Running Shoes",
      "price": 161.08
    },
    {
      "id": 146,
      "image_path": "Mix (146).avif",
      "product_detail": "Limited Edition Shoe Model 146",
      "product_type": "Oxford",
      "price": 1939.59
    },
    {
      "id": 147,
      "image_path": "Mix (147).avif",
      "product_detail": "Designer Shoe Model 147",
      "product_type": "Sandals",
      "price": 1451.78
    },
    {
      "id": 148,
      "image_path": "Mix (148).avif",
      "product_detail": "Luxury Shoe Model 148",
      "product_type": "Sandals",
      "price": 1796.01
    },
    {
      "id": 149,
      "image_path": "Mix (149).avif",
      "product_detail": "Elegant Shoe Model 149",
      "product_type": "Running Shoes",
      "price": 1995.01
    },
    {
      "id": 150,
      "image_path": "Mix (150).avif",
      "product_detail": "Sport Shoe Model 150",
      "product_type": "Boots",
      "price": 1750.9
    },
    {
      "id": 151,
      "image_path": "Mix (151).avif",
      "product_detail": "Urban Shoe Model 151",
      "product_type": "Oxford",
      "price": 293.83
    },
    {
      "id": 152,
      "image_path": "Mix (152).avif",
      "product_detail": "Designer Shoe Model 152",
      "product_type": "Sneakers",
      "price": 602.07
    },
    {
      "id": 153,
      "image_path": "Mix (153).avif",
      "product_detail": "Classic Shoe Model 153",
      "product_type": "Boots",
      "price": 787.42
    },
    {
      "id": 154,
      "image_path": "Mix (154).avif",
      "product_detail": "Elegant Shoe Model 154",
      "product_type": "Loafers",
      "price": 1954.55
    },
    {
      "id": 155,
      "image_path": "Mix (155).avif",
      "product_detail": "Premium Shoe Model 155",
      "product_type": "High Heels",
      "price": 1584.07
    },
    {
      "id": 156,
      "image_path": "Mix (156).avif",
      "product_detail": "Urban Shoe Model 156",
      "product_type": "High Heels",
      "price": 208.42
    },
    {
      "id": 157,
      "image_path": "Mix (157).avif",
      "product_detail": "Limited Edition Shoe Model 157",
      "product_type": "Boots",
      "price": 292.29
    },
    {
      "id": 158,
      "image_path": "Mix (158).avif",
      "product_detail": "Limited Edition Shoe Model 158",
      "product_type": "Boots",
      "price": 637.23
    },
    {
      "id": 159,
      "image_path": "Mix (159).avif",
      "product_detail": "Urban Shoe Model 159",
      "product_type": "Boots",
      "price": 1548.04
    },
    {
      "id": 160,
      "image_path": "Mix (160).avif",
      "product_detail": "Limited Edition Shoe Model 160",
      "product_type": "Loafers",
      "price": 1451.89
    },
    {
      "id": 161,
      "image_path": "Mix (161).avif",
      "product_detail": "Classic Shoe Model 161",
      "product_type": "High Heels",
      "price": 739.18
    },
    {
      "id": 162,
      "image_path": "Mix (162).avif",
      "product_detail": "Premium Shoe Model 162",
      "product_type": "High Heels",
      "price": 234.08
    },
    {
      "id": 163,
      "image_path": "Mix (163).avif",
      "product_detail": "Elegant Shoe Model 163",
      "product_type": "High Heels",
      "price": 1363.66
    },
    {
      "id": 164,
      "image_path": "Mix (164).avif",
      "product_detail": "Designer Shoe Model 164",
      "product_type": "Sandals",
      "price": 1668.03
    }
  ]

  return (
    <>
      <div className="header">
        <img src="25Q2_MemorialDay_Site_HomepageHero_Desktop_2880x1245.avif" className='bgMain'/>
        <img className='bgimg' src="25Q2_MemorialDay_Site_HomepageHero_Mobile_860x1078.avif" alt="" />


        <div className="hChild">
          <h1>Memorial Day Sale</h1>
          <p>Kick off summer with the comfiest shoes at the coolest prices.</p>

          <div className="btns">
            <button>MEN'S SALE</button>
            <button>WOMEN'S SALE</button>

            {/* <<<<btns>>>> */}
          </div>

          {/* hChild */}
        </div>

        {/* <<<<header>>>> */}
      </div>  

      <ResponsiveCards/>

      <div className="attemp-1-0">
        <h1>WE MAKE BETTER THINGS IN A BETTER WAY</h1>
        <p>By looking to the world’s greatest innovator—Nature—we create shoes
          that deliver <br /> unrivaled comfort that you feel good in and feel good about.</p>

        <li><img src="Allbirds_logo_white.png" alt="" /> <span>BY NATURE</span></li>
      </div>

      <div className="attemp-2-0">
        <div className="attemp-2-1">
          <img src="25Q2_RusticOrange_Site_ShoppableFeature_Desktop_US_2000x2000.avif" alt="" />
          <div className="attemp-2-1-1">
            <h1>Rock And Stroll In Comfort</h1>
            <p>Effortlessly comfy styles take color cues from the Southwest’s rustic rock formations.</p>
            <div className="btnsp">
              <button>SHOP MEN</button>
              <button>SHOP WOMEN</button>
            </div>
          </div>
        </div>
        <div className="attemp-2-2">
          {
            products.slice(0, 4).map(item => (
              <div className="cards" key={item.id}>
                <img src={item.image_path} alt="" />
                <div className="types-or-price">
                  <p className="product_type">{item.product_type} <span className="price">{item.price}</span></p>
                  <p className="product_detail">{item.product_detail}</p>
                </div>
                <div className="btnss">
                  <button>SHOP MEN</button>
                  <button>SHOP WOMEN</button>
                </div>
              </div>
            ))
          }

          <ResponsiveProducts/>
        </div>
      </div>

      <div className="attemp-3">
        <div className="attemp-3-1">
          <img src="attemp-3-1-1.gif" alt="" />
          <div className="text">
            <h1>Card On The Table</h1>
          <p>Hosted by Stanley Tucci</p>
          </div>

          <div className="butn">
            <button>Watch</button>
          </div>
        </div>
        <div className="attemp-3-2">
          <img src="attemp-3-2.avif" alt="" />
          <div className="text">
            <h1>Canvas Piper</h1>
            <p>Versatile Style, Durable Design</p>
          </div>

          <div className="butn">
            <button>Shop Men</button>
            <button>Shop Women</button>
          </div>
        </div>
      </div>

      <div className="attemp-4">
        <div className="attemp-4-1">
          <p>MORE TO SHOP</p>
        </div>

        <div className="attemp-4-2">
        </div>
      </div>

    </>
  )
}

export default AllBirds
