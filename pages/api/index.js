export default function handler(req, res) {
    res.status(200).json(
        [
            {
                "subject": "english",
                "units": [
                    {
                        "unit": "3a-u2",
                        "description": "Oxford English 3A unit 2 vocabularies"
                    },
                ]
            },
            {
                "subject": "chemistry",
                "units": [
                    {
                        "unit": "common-elements",
                        "description": "Some of the very common elements of the periodic table"
                    },
                    {
                        "unit": "common-substances",
                        "description": "Some of the very common substances"
                    },
                ]
            },
            {
                "subject": "chinese",
                "units": [
                    {
                        "unit": "term1-exam-quotes",
                        "description": "第一段考試名句"
                    },
                ]
            }
        ]
    );
}

