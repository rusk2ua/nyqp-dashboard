// 2025 NYQP Contest Results Data
const NYQP_DATA = {
    contest: {
        name: "2025 New York QSO Party",
        date: "October 18-19, 2025",
        startTime: "1400 UTC Saturday",
        endTime: "0200 UTC Sunday",
        totalLogs: 513,
        totalQSOs: 78373,
        uniqueCalls: 6068,
        uniquesClaimed: 2568,
        countries: 75,
        dupes: 725,
        checkedGood: 97.5,
        totalScores: 8937505
    },

    // Top scores by category - In-State (NY) participants
    inState: {
        // Multi-Op categories
        multiMultiHigh: [
            { call: "W2FU", score: 253302, qsos: 1418, category: "MMH", county: "MON" },
        ],
        multiMultiLow: [
            { call: "N2Y", score: 385035, qsos: 2537, category: "MML-P", county: "Multiple" },
            { call: "KX2NY", score: 195001, qsos: 1043, category: "MML", county: "Multiple" },
            { call: "W2M", score: 172272, qsos: 1018, category: "MML-P", county: "Multiple" },
            { call: "N2PA", score: 87978, qsos: 608, category: "MML", county: "Multiple" },
            { call: "W2OW", score: 82491, qsos: 560, category: "MML", county: "Multiple" },
            { call: "W2E", score: 26080, qsos: 223, category: "MML", county: "ERI" },
            { call: "W2SO", score: 18928, qsos: 243, category: "MML", county: "Multiple" },
        ],
        multiSingleHigh: [
            { call: "N2T", score: 247174, qsos: 1489, category: "MSH-M", county: "Multiple" },
            { call: "K2A", score: 227448, qsos: 1458, category: "MSH-M", county: "Multiple" },
            { call: "K2V", score: 82688, qsos: 646, category: "MSH-M", county: "Multiple" },
            { call: "W2CCC", score: 54810, qsos: 609, category: "MSH", county: "HER" },
        ],
        multiSingleLow: [
            { call: "K2G", score: 11264, qsos: 172, category: "MSL-P", county: "Multiple" },
            { call: "K2IRM", score: 171, qsos: 10, category: "MSL", county: "NY" },
        ],
        // Single-Op High Power CW
        sohCW: [
            { call: "N2MF", score: 201000, qsos: 1005, category: "SOH-CW" },
            { call: "K2SSS", score: 178500, qsos: 875, category: "SOH-CW" },
            { call: "N2ZX", score: 176460, qsos: 865, category: "SOH-CW" },
            { call: "K4RUM", score: 171072, qsos: 864, category: "SOH-CW" },
            { call: "K2NV", score: 170800, qsos: 854, category: "SOH-CW" },
            { call: "KR2AA", score: 130150, qsos: 685, category: "SOH-CW" },
            { call: "KM2L", score: 80688, qsos: 492, category: "SOH-CW" },
            { call: "KE2SD", score: 57084, qsos: 402, category: "SOH-CW" },
        ],
        // Single-Op High Power Mixed
        sohMixed: [
            { call: "N2PP", score: 177016, qsos: 994, category: "SOH-MIXED" },
            { call: "WA2CP", score: 171465, qsos: 1074, category: "SOH-MIXED" },
            { call: "W2TB", score: 155346, qsos: 938, category: "SOH-MIXED" },
            { call: "WW2Y", score: 152216, qsos: 892, category: "SOH-MIXED" },
            { call: "KO8SCA", score: 127200, qsos: 851, category: "SOH-MIXED" },
            { call: "N2RC", score: 79605, qsos: 504, category: "SOH-MIXED" },
            { call: "WB2JLR", score: 64066, qsos: 578, category: "SOH-MIXED" },
        ],
        // Single-Op High Power SSB
        sohSSB: [
            { call: "KD2EFR", score: 82297, qsos: 799, category: "SOH-SSB" },
            { call: "WA2DNI", score: 71550, qsos: 675, category: "SOH-SSB" },
            { call: "AB2FN", score: 20000, qsos: 250, category: "SOH-SSB" },
            { call: "KE2X", score: 12530, qsos: 179, category: "SOH-SSB" },
            { call: "W2REA", score: 10836, qsos: 172, category: "SOH-SSB" },
        ],
        // Single-Op Low Power CW
        solCW: [
            { call: "NM2A", score: 143592, qsos: 772, category: "SOL-CW" },
            { call: "K2ZR", score: 130456, qsos: 709, category: "SOL-CW" },
            { call: "K2QB", score: 124306, qsos: 683, category: "SOL-CW" },
            { call: "W2TZ", score: 118014, qsos: 663, category: "SOL-CW" },
            { call: "N2GA", score: 97104, qsos: 578, category: "SOL-CW" },
            { call: "KC2KY", score: 58320, qsos: 405, category: "SOL-CW" },
        ],
        // Single-Op Low Power CW Portable
        solCWP: [
            { call: "K2EAG", score: 101758, qsos: 613, category: "SOL-CW-P" },
            { call: "W2GR", score: 74760, qsos: 445, category: "SOL-CW-P" },
        ],
        // Single-Op Low Power Mixed
        solMixed: [
            { call: "WA2QAU", score: 131250, qsos: 788, category: "SOL-MIXED" },
            { call: "K2XA", score: 109416, qsos: 658, category: "SOL-MIXED" },
            { call: "WB2AMN", score: 103096, qsos: 631, category: "SOL-MIXED" },
            { call: "AA2ZW", score: 91056, qsos: 574, category: "SOL-MIXED" },
            { call: "NN2L", score: 82863, qsos: 480, category: "SOL-MIXED" },
            { call: "WW2P", score: 43992, qsos: 383, category: "SOL-MIXED" },
            { call: "WB2SIH", score: 41426, qsos: 314, category: "SOL-MIXED" },
        ],
        // Single-Op Low Power Mixed Mobile
        solMixedMobile: [
            { call: "N2CU", score: 201320, qsos: 1548, category: "SOL-MIXED-M" },
            { call: "K2Q", score: 141840, qsos: 1000, category: "SOL-MIXED-M" },
            { call: "N2B", score: 39537, qsos: 318, category: "SOL-MIXED-M" },
            { call: "W1WV/M", score: 9955, qsos: 160, category: "SOL-MIXED-M" },
        ],
        // Single-Op Low Power Mixed Portable
        solMixedPortable: [
            { call: "K2AL", score: 78409, qsos: 550, category: "SOL-MIXED-P" },
            { call: "N2JJ", score: 22134, qsos: 236, category: "SOL-MIXED-P" },
            { call: "N2TO", score: 11500, qsos: 186, category: "SOL-MIXED-P" },
        ],
        // Single-Op Low Power SSB
        solSSB: [
            { call: "W2PJ", score: 85374, qsos: 837, category: "SOL-SSB" },
            { call: "AH2O", score: 79254, qsos: 777, category: "SOL-SSB" },
            { call: "KS2G", score: 50976, qsos: 531, category: "SOL-SSB" },
            { call: "AC2XC", score: 25481, qsos: 307, category: "SOL-SSB" },
            { call: "W2GDJ", score: 23280, qsos: 291, category: "SOL-SSB" },
        ],
        // Single-Op Low Power SSB Portable
        solSSBPortable: [
            { call: "WA2GOT", score: 46314, qsos: 498, category: "SOL-SSB-P" },
            { call: "W2IG", score: 43878, qsos: 618, category: "SOL-SSB-P" },
            { call: "N3KTA", score: 28688, qsos: 326, category: "SOL-SSB-P" },
            { call: "WA2DE", score: 17174, qsos: 277, category: "SOL-SSB-P" },
        ],
        // Single-Op QRP
        soqCW: [
            { call: "NQ2W", score: 94874, qsos: 533, category: "SOQ-CW" },
        ],
        soqMixed: [
            { call: "AB3CX", score: 69390, qsos: 411, category: "SOQ-MIXED" },
            { call: "WA2NYY", score: 43275, qsos: 300, category: "SOQ-MIXED" },
        ],
    },

    // Out-of-State (non-NY US) top performers
    outOfState: [
        { call: "N8II", loc: "WV", score: 39955, qsos: 411, category: "SOL-MIXED" },
        { call: "N0HJZ", loc: "MN", score: 30798, qsos: 323, category: "SOL-MIXED" },
        { call: "NE8P", loc: "FL", score: 27540, qsos: 255, category: "SOL-CW" },
        { call: "N5KW", loc: "OK", score: 25950, qsos: 295, category: "SOH-MIXED" },
        { call: "K5CM", loc: "OK", score: 25578, qsos: 297, category: "SOH-MIXED" },
        { call: "K9PW", loc: "IL", score: 24976, qsos: 255, category: "SOL-MIXED" },
        { call: "WB9HFK", loc: "IL", score: 24472, qsos: 239, category: "SOL-MIXED" },
        { call: "WO4O", loc: "FL", score: 24192, qsos: 254, category: "SOH-MIXED" },
        { call: "K9CW", loc: "IL", score: 23826, qsos: 209, category: "SOL-CW" },
        { call: "KY7M", loc: "AZ", score: 22148, qsos: 235, category: "SOH-MIXED" },
        { call: "KG9X", loc: "IL", score: 20400, qsos: 200, category: "SOL-CW" },
        { call: "W0ZQ", loc: "MN", score: 20628, qsos: 213, category: "SOH-MIXED" },
        { call: "W1FM", loc: "MA", score: 18800, qsos: 238, category: "MMH" },
        { call: "WA5SOG", loc: "AR", score: 17595, qsos: 190, category: "SOL-MIXED" },
        { call: "K2YG", loc: "NJ", score: 16900, qsos: 209, category: "SOQ-MIXED" },
        { call: "K5QQ", loc: "MO", score: 16896, qsos: 176, category: "SOL-CW" },
        { call: "W5TM", loc: "OK", score: 16192, qsos: 184, category: "SOH-CW" },
        { call: "W8PI", loc: "MI", score: 16932, qsos: 189, category: "SOL-MIXED" },
        { call: "KW9A", loc: "IL", score: 15550, qsos: 170, category: "SOH-MIXED" },
        { call: "N5TJ", loc: "TX", score: 15120, qsos: 168, category: "SOH-CW" },
    ],

    // DX participants
    dx: [
        { call: "OM2VL", loc: "OM", score: 40310, qsos: 377, category: "SOH-MIXED" },
        { call: "W8HCG", loc: "OH", score: 22910, qsos: 244, category: "MML", note: "Out-of-state multi" },
        { call: "VE3YT", loc: "ON", score: 25056, qsos: 270, category: "SOH-MIXED" },
        { call: "VE3AQ", loc: "ON", score: 14580, qsos: 162, category: "SOL-CW" },
        { call: "VE3TM", loc: "ON", score: 12728, qsos: 148, category: "SOH-CW" },
        { call: "VE3OMV", loc: "ON", score: 8697, qsos: 128, category: "SOL-MIXED" },
        { call: "VE3SIF", loc: "ON", score: 6188, qsos: 91, category: "SOQ-CW" },
        { call: "VE7ZO", loc: "BC", score: 6020, qsos: 86, category: "SOH-CW" },
        { call: "VE3IFT", loc: "ON", score: 5300, qsos: 106, category: "SOL-SSB" },
        { call: "VE3MV", loc: "ON", score: 5022, qsos: 82, category: "SOH-MIXED" },
        { call: "OH7MA", loc: "OH (Finland)", score: 870, qsos: 29, category: "SOH-CW" },
        { call: "F8PDR", loc: "France", score: 2808, qsos: 52, category: "SOH-CW" },
        { call: "EA3NO", loc: "Spain", score: 2360, qsos: 59, category: "SOL-CW" },
        { call: "SP1AEN", loc: "Poland", score: 56, qsos: 7, category: "SOL-CW" },
        { call: "XE1AY", loc: "Mexico", score: 528, qsos: 22, category: "SOL-CW" },
        { call: "DO6AN", loc: "Germany", score: 2, qsos: 1, category: "SOQ-CW" },
    ],

    // Club entries
    clubs: [
        { call: "KA2MGE", score: 1872, qsos: 39, category: "CK" },
        { call: "W2AN", score: 598, qsos: 26, category: "CK" },
        { call: "F4EUG", score: 153, qsos: 11, category: "CK" },
        { call: "WB8ASI", score: 48, qsos: 8, category: "CK" },
        { call: "NV1Y", score: 30, qsos: 6, category: "CK", note: "BSA JOTA" },
        { call: "VA2NW", score: 2, qsos: 1, category: "CK" },
        { call: "AB5XM", score: 2, qsos: 1, category: "CK" },
    ],

    // Golden Logs (0% error rate with significant QSOs)
    goldenLogs: [
        { call: "NQ2U", score: 17208, qsos: 239, category: "SOL-SSB", errorRate: 0.0 },
        { call: "NM2A", score: 143592, qsos: 772, category: "SOL-CW", errorRate: 0.9 },
        { call: "W2PJ", score: 85374, qsos: 837, category: "SOL-SSB", errorRate: 0.4 },
        { call: "K2A", score: 227448, qsos: 1458, category: "MSH-M", errorRate: 0.2 },
        { call: "N2CU", score: 201320, qsos: 1548, category: "SOL-MIXED-M", errorRate: 0.6 },
        { call: "K2EAG", score: 101758, qsos: 613, category: "SOL-CW-P", errorRate: 2.5 },
        { call: "N2T", score: 247174, qsos: 1489, category: "MSH-M", errorRate: 0.9 },
        { call: "N2Y", score: 385035, qsos: 2537, category: "MML-P", errorRate: 2.9 },
        { call: "W2FU", score: 253302, qsos: 1418, category: "MMH", errorRate: 1.4 },
        { call: "N2MF", score: 201000, qsos: 1005, category: "SOH-CW", errorRate: 1.4 },
    ],

    // DX Countries worked
    dxCountries: {
        total: 75,
        topDXCC: [
            { prefix: "DL", country: "Germany", count: 506 },
            { prefix: "OM", country: "Slovakia", count: 360 },
            { prefix: "VE", country: "Canada", count: 2176 },
            { prefix: "F", country: "France", count: 109 },
            { prefix: "G", country: "England", count: 98 },
            { prefix: "EA", country: "Spain", count: 92 },
            { prefix: "I", country: "Italy", count: 54 },
            { prefix: "LY", country: "Lithuania", count: 38 },
            { prefix: "KP4", country: "Puerto Rico", count: 36 },
            { prefix: "OH", country: "Finland", count: 34 },
            { prefix: "XE", country: "Mexico", count: 22 },
            { prefix: "KP2", country: "US Virgin Is.", count: 21 },
            { prefix: "8P", country: "Barbados", count: 20 },
            { prefix: "PA", country: "Netherlands", count: 16 },
            { prefix: "SP", country: "Poland", count: 16 },
            { prefix: "KL", country: "Alaska", count: 16 },
            { prefix: "HB", country: "Switzerland", count: 16 },
            { prefix: "ON", country: "Belgium", count: 10 },
            { prefix: "KH6", country: "Hawaii", count: 9 },
            { prefix: "HA", country: "Hungary", count: 9 },
        ],
        rareDX: [
            { prefix: "ZD7", country: "St. Helena", count: 1 },
            { prefix: "ZS", country: "South Africa", count: 1 },
            { prefix: "ZL", country: "New Zealand", count: 1 },
            { prefix: "YB", country: "Indonesia", count: 1 },
            { prefix: "5B", country: "Cyprus", count: 1 },
            { prefix: "9Y", country: "Trinidad", count: 1 },
            { prefix: "GU", country: "Guernsey", count: 1 },
            { prefix: "DU", country: "Philippines", count: 1 },
            { prefix: "S5", country: "Slovenia", count: 1 },
            { prefix: "PJ7", country: "Sint Maarten", count: 1 },
        ]
    },

    // Category participation breakdown
    categoryBreakdown: {
        labels: ["SOL-CW", "SOL-SSB", "SOL-MIXED", "SOH-CW", "SOH-MIXED", "SOH-SSB", "SOQ", "Multi-Op", "Club"],
        counts: [98, 75, 72, 52, 58, 22, 12, 19, 7],
        inState: [38, 42, 32, 18, 20, 14, 4, 15, 2],
        outOfState: [55, 28, 35, 30, 35, 6, 7, 3, 4],
        dx: [5, 5, 5, 4, 3, 2, 1, 1, 1],
    },

    // Top 10 Overall Scores (all categories)
    topOverall: [
        { call: "N2Y", score: 385035, qsos: 2537, category: "MML-P", loc: "NY", type: "Multi" },
        { call: "W2FU", score: 253302, qsos: 1418, category: "MMH", loc: "NY", type: "Multi" },
        { call: "N2T", score: 247174, qsos: 1489, category: "MSH-M", loc: "NY", type: "Multi" },
        { call: "K2A", score: 227448, qsos: 1458, category: "MSH-M", loc: "NY", type: "Multi" },
        { call: "N2CU", score: 201320, qsos: 1548, category: "SOL-MIXED-M", loc: "NY", type: "Mobile" },
        { call: "N2MF", score: 201000, qsos: 1005, category: "SOH-CW", loc: "NY", type: "Single" },
        { call: "KX2NY", score: 195001, qsos: 1043, category: "MML", loc: "NY", type: "Multi" },
        { call: "K2SSS", score: 178500, qsos: 875, category: "SOH-CW", loc: "NY", type: "Single" },
        { call: "N2PP", score: 177016, qsos: 994, category: "SOH-MIXED", loc: "NY", type: "Single" },
        { call: "N2ZX", score: 176460, qsos: 865, category: "SOH-CW", loc: "NY", type: "Single" },
    ],

    // Mobile operators (activating multiple counties)
    mobileOps: [
        { call: "N2CU", score: 201320, qsos: 1548, category: "SOL-MIXED-M" },
        { call: "K2Q", score: 141840, qsos: 1000, category: "SOL-MIXED-M" },
        { call: "N2B", score: 39537, qsos: 318, category: "SOL-MIXED-M" },
        { call: "KV2X/M", score: 24856, qsos: 239, category: "SOL-CW-M" },
        { call: "W1WV/M", score: 9955, qsos: 160, category: "SOL-MIXED-M" },
        { call: "WT2X", score: 5040, qsos: 72, category: "SOL-CW-M" },
        { call: "N2T", score: 247174, qsos: 1489, category: "MSH-M", note: "Multi-single mobile" },
        { call: "K2A", score: 227448, qsos: 1458, category: "MSH-M", note: "Multi-single mobile" },
        { call: "K2V", score: 82688, qsos: 646, category: "MSH-M", note: "Multi-single mobile" },
    ],

    // Soapbox quotes
    soapbox: [
        { call: "N3KI", text: "One of the better state QSO parties. Plenty of mobiles available. Well done." },
        { call: "W9TCV", text: "Operated on the county line of ROC/ORA in Harriman SP. Got 100 contacts with 20W and a vert on my bike rack." },
        { call: "W2LC", text: "I spent most of the summer optimizing my mobile set-up. Next year for NNY!" },
        { call: "N2TO", text: "Outdoor portable, Richmond County, FT-857D, CW 5W, Phone 20W, homemade 44' center-fed inverted-vee doublet up 18.67'" },
        { call: "KE0TT", text: "K3/10 driving a HB amp to 100 watts out. Wire antennas. Lots of activity, thanks for the fun!" },
        { call: "AB5XM", text: "Thanks for sponsoring the contest!" },
        { call: "K3GHH", text: "Always glad to offer Essex County from my camp" },
        { call: "AD4GG", text: "Enjoyed participating in the NY QSO Party this year. See y'all next year!" },
    ]
};
