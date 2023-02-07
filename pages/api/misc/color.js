export default function handler(req, res) {
    res.status(200).json([
        {
            "word": "apple",
            "definition": "apple"
        },
        {
            "word": "orange",
            "definition": "orange"
        },
        {
            "word": "banana",
            "definition": "banana"
        },
        {
            "word": "grape",
            "definition": "grape"
        },
        {
            "word": "melon",
            "definition": "melon"
        },
        {
            "word": "berry",
            "definition": "berry"
        }
    ])
  }
  
