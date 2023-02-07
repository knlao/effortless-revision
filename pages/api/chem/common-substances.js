export default function handler(req, res) {
    res.status(200).json([
        {
            "word": "H2O",
            "definition": "水"
        },
        {
            "word": "CO2",
            "definition": "二氧化碳"
        },
        {
            "word": "SO2",
            "definition": "二氧化硫"
        },
        {
            "word": "H2SO4",
            "definition": "硫酸"
        },
        {
            "word": "HNO3",
            "definition": "硝酸"
        },
        {
            "word": "CH4",
            "definition": "甲烷"
        }
    ])
  }
  
