export default function handler(req, res) {
    res.status(200).json([
        {
            "symbol": "H",
            "chi": "氫"
        },
        {
            "symbol": "He",
            "chi": "氦"
        },
        {
            "symbol": "Li",
            "chi": "鋰"
        },
        {
            "symbol": "Be",
            "chi": "鈹"
        },
        {
            "symbol": "B",
            "chi": "硼"
        },
        {
            "symbol": "C",
            "chi": "碳"
        }
    ])
  }
  
