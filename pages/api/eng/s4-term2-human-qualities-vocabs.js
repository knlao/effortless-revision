export default function handler(req, res) {
    res.status(200).json([
        { "eng": "altruistic", "chi": "無私的" },
        { "eng": "artistic", "chi": "有藝術天賦的" },
        { "eng": "charming", "chi": "有魅力的" },
        { "eng": "conscientious", "chi": "認真的" },
        { "eng": "courageous", "chi": "勇敢的" },
        { "eng": "diligent", "chi": "勤奮的" },
        { "eng": "dogged", "chi": "堅決的" },
        { "eng": "generous", "chi": "慷慨的" },
        { "eng": "imaginative", "chi": "想像力豐富的" },
        { "eng": "industrious", "chi": "勤勞的" },
        { "eng": "intuitive", "chi": "憑直覺能知曉的" },
        { "eng": "methodical", "chi": "做事有條理的" },
        { "eng": "obliging", "chi": "樂於助人的" },
        { "eng": "outgoing", "chi": "外向的" },
        { "eng": "placid", "chi": "安靜的" },
        { "eng": "resolute", "chi": "有決心的" },
        { "eng": "shrewd", "chi": "明智的" },
        { "eng": "tactless", "chi": "不明智的" },
    ]);
}