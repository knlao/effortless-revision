export default function handler(req, res) {
    res.status(200).json([
        {
            "a": "apple",
            "b": "apple"
        },
        {
            "a": "orange",
            "b": "orange"
        },
        {
            "a": "banana",
            "b": "banana"
        },
        {
            "a": "grape",
            "b": "grape"
        },
        {
            "a": "melon",
            "b": "melon"
        },
        {
            "a": "berry",
            "b": "berry"
        }
    ])
  }
  
