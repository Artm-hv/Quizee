const podstawyProgramowaniaData = {
    "id": "podstawy-programowania",
    "name": "Podstawy programowania",
    "icon": "🖥️",
    "description": "Fundamenty programowania — algorytmy, struktury danych, paradygmaty i złożoność obliczeniowa.",
    "modules": [
        {
            "id": "pp-m1",
            "name": "Algorytmy i złożoność",
            "questions": [
                {
                    "id": "pp-001",
                    "type": "single",
                    "question": "Jaka jest złożoność czasowa algorytmu wyszukiwania binarnego?",
                    "options": [
                        "O(n)",
                        "O(log n)",
                        "O(n²)",
                        "O(1)"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Wyszukiwanie binarne ma złożoność O(log n), ponieważ w każdym kroku dzieli zakres przeszukiwania na połowę."
                }
            ]
        },
        {
            "id": "pp-m2",
            "name": "Struktury i paradygmaty",
            "questions": [
                {
                    "id": "pp-002",
                    "type": "multiple",
                    "question": "Które z poniższych są paradygmatami programowania?",
                    "options": [
                        "Programowanie obiektowe",
                        "Programowanie równoległe",
                        "Programowanie funkcyjne",
                        "Programowanie bazodanowe",
                        "Programowanie imperatywne",
                        "Programowanie logiczne"
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        4,
                        5
                    ],
                    "explanation": "Główne paradygmaty programowania to: obiektowe, funkcyjne, imperatywne i logiczne. Programowanie równoległe to model wykonywania, a bazodanowe nie jest uznanym paradygmatem."
                },
                {
                    "id": "pp-003",
                    "type": "open",
                    "question": "Jak nazywa się struktura danych typu LIFO (Last In, First Out)?",
                    "options": [],
                    "correctAnswers": [
                        "stos",
                        "stack"
                    ],
                    "explanation": "Stos (stack) to struktura danych, w której ostatni dodany element jest usuwany jako pierwszy (LIFO — Last In, First Out)."
                }
            ]
        }
    ],
    "dbVersion": 4
};
