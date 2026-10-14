const programowanieWspolbiezneData = {
    "id": "programowanie-wspolbiezne",
    "name": "Programowanie współbieżne",
    "icon": "⚡",
    "description": "Programowanie współbieżne i wielowątkowe — synchronizacja, procesy, wątki, sekcje krytyczne i komunikacja.",
    "modules": [
        {
            "id": "pw-lab-1",
            "name": "Test Lab 1",
            "questions": []
        },
        {
            "id": "pw-lab-2",
            "name": "Test Lab 2",
            "questions": []
        },
        {
            "id": "pw-lab-3",
            "name": "Test Lab 3",
            "questions": [
                {
                    "id": "pw-lab3-001",
                    "type": "single",
                    "question": "Czy blok finally w C# wykonywany jest także w przypadku braku wyjątku?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Blok finally wykonywany jest zawsze, niezależnie od tego, czy wyjątek wystąpił, czy nie."
                },
                {
                    "id": "pw-lab3-002",
                    "type": "single",
                    "question": "Czy blok finally w C# wykonywany jest także w przypadku przechwycenia wyjątku?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Blok finally wykonuje się zawsze, również po przechwyceniu i obsłużeniu wyjątku w bloku catch."
                },
                {
                    "id": "pw-lab3-003",
                    "type": "single",
                    "question": "Czy enum w C# to typ referencyjny?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Enum w C# to typ wyliczeniowy, który należy do typów wartościowych (Value types), a nie referencyjnych."
                },
                {
                    "id": "pw-lab3-004",
                    "type": "single",
                    "question": "Czy struktury w C# obsługują dziedziczenie?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Struktury (struct) w C# nie obsługują dziedziczenia po innych klasach ani strukturach."
                },
                {
                    "id": "pw-lab3-005",
                    "type": "single",
                    "question": "Czy struktura w C# to typ referencyjny?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Struktura w C# jest typem wartościowym (skalarnym) i jest trzymana na stosie (stack)."
                },
                {
                    "id": "pw-lab3-006",
                    "type": "single",
                    "question": "Czy w konstruktorze klasy System.Timers.Timer możemy wskazać metodę callback?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Klasa System.Timers.Timer nie przyjmuje metody callback w konstruktorze (używa zdarzenia Elapsed)."
                },
                {
                    "id": "pw-lab3-007",
                    "type": "single",
                    "question": "Czy w konstruktorze klasy System.Threading.Timer możemy wskazać metodę callback?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Konstruktor klasy System.Threading.Timer przyjmuje delegat TimerCallback jako swój pierwszy parametr."
                },
                {
                    "id": "pw-lab3-008",
                    "type": "single",
                    "question": "Czy do jednego delegata możemy przypisać wiele metod o tej samej sygnaturze?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Delegaty w C# można łączyć (multicast delegate) za pomocą operatorów + oraz +=, przypisując wiele metod o tej samej sygnaturze."
                },
                {
                    "id": "pw-lab3-009",
                    "type": "single",
                    "question": "Czy w sekcji using w C# można definiować aliasy dla przestrzeni nazw (np. using T = System.Threading;)?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "W sekcji using można tworzyć aliasy dla przestrzeni nazw lub typów, np. using T = System.Threading;."
                },
                {
                    "id": "pw-lab3-010",
                    "type": "single",
                    "question": "Czy za pomocą słowa kluczowego var w C# deklarujemy zmienną silnie typizowaną, której typ jest ustalany przez kompilator podczas kompilacji?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Słowo kluczowe var tworzy zmienną niejawnie typizowaną, której dokładny typ jest określany przez kompilator na etapie kompilacji."
                },
                {
                    "id": "pw-lab3-011",
                    "type": "single",
                    "question": "Czy zmienna zadeklarowana jako dynamic może w trakcie działania programu najpierw przechowywać liczbę całkowitą, a chwilę później tekst lub obiekt DateTime?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Typ zmiennej dynamic jest sprawdzany dopiero podczas wykonywania programu (runtime), więc może ona zmieniać typ przechowywanej wartości."
                },
                {
                    "id": "pw-lab3-012",
                    "type": "single",
                    "question": "Czy właściwości w typach anonimowych (np. var car = new { Id = 1, Brand = \"Mazda\" };) są tylko do odczytu (read-only)?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Właściwości obiektów typów anonimowych w C# są zawsze tylko do odczytu (read-only) i nie można ich modyfikować po utworzeniu."
                },
                {
                    "id": "pw-lab3-013",
                    "type": "single",
                    "question": "Czy w tablicy postrzępionej (Jagged array, np. int[][]) poszczególne podtablice mogą mieć różne rozmiary?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Tablica tablic (Jagged array) przechowuje odwołania do osobnych tablic, z których każda może mieć inną długość."
                },
                {
                    "id": "pw-lab3-014",
                    "type": "single",
                    "question": "Czy w C# typy proste (takie jak int, double, bool) są w rzeczywistości strukturami?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "W języku C# wszystkie typy proste są zaimplementowane jako struktury (np. System.Int32, System.Double)."
                },
                {
                    "id": "pw-lab3-015",
                    "type": "single",
                    "question": "Czy właściwość AutoReset w klasie System.Timers.Timer domyślnie ma wartość true?",
                    "options": [
                        "Prawda",
                        "Fałsz"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Domyślnie właściwość AutoReset ma wartość true (timer działa cyklicznie), a ustawienie jej na false zmienia go w jednorazowy budzik."
                },
                {
                    "id": "pw-lab3-016",
                    "type": "single",
                    "question": "Jakim klawiszem w Visual Studio uruchamiamy program w trybie release (bez debugowania)?",
                    "options": [
                        "Ctrl+F5",
                        "F12",
                        "F5",
                        "F9"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Kombinacja Ctrl+F5 uruchamia program bez dołączonego debuggera, natomiast klawisz F5 uruchamia program w trybie debugowania."
                },
                {
                    "id": "pw-lab3-017",
                    "type": "single",
                    "question": "Czym jest solucja (Solution) w środowisku Visual Studio?",
                    "options": [
                        "Pojedynczym plikiem z kodem źródłowym C#",
                        "Głównym kontenerem dla projektów",
                        "Wbudowanym kompilatorem języka C++",
                        "Biblioteką klas systemowych"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Solucja (Solution) jest głównym kontenerem w Visual Studio, który może grupować jeden lub wiele projektów."
                },
                {
                    "id": "pw-lab3-018",
                    "type": "single",
                    "question": "Jakim klawiszem w Visual Studio domyślnie kompilujemy i uruchamiamy program w trybie debugowania (Debug)?",
                    "options": [
                        "F5",
                        "Ctrl+F5",
                        "F6",
                        "Alt+Enter"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Klawisz F5 służy do kompilacji i uruchomienia programu w trybie debugowania z obsługą punktów przerwań."
                },
                {
                    "id": "pw-lab3-019",
                    "type": "single",
                    "question": "Jaką opcję z menu kontekstowego projektu należy wybrać w Visual Studio, aby ustawić go jako domyślnie uruchamiany przy wielu projektach w solucji?",
                    "options": [
                        "Build Solution",
                        "Set as Startup Project",
                        "Clean Solution",
                        "Restore NuGet Packages"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Opcja Set as Startup Project ustawia wybrany projekt jako domyślny projekt startowy w solucji."
                },
                {
                    "id": "pw-lab3-020",
                    "type": "single",
                    "question": "Co się stanie podczas wykonania instrukcji int.Parse(Console.ReadLine()), jeśli użytkownik wprowadzi ciąg znaków \"abc\"?",
                    "options": [
                        "Metoda zwróci wartość 0",
                        "Metoda zwróci wartość -1",
                        "Zostanie rzucony wyjątek FormatException",
                        "Zmienna przyjmie wartość null"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Metoda int.Parse rzuca wyjątek FormatException, gdy przekazany ciąg znaków nie ma poprawnego formatu liczby całkowitej."
                },
                {
                    "id": "pw-lab3-021",
                    "type": "single",
                    "question": "Ile bitów zajmuje w pamięci typ int w języku C#?",
                    "options": [
                        "8 bitów",
                        "16 bitów",
                        "32 bity",
                        "64 bity"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Typ całkowity int (oraz uint) zajmuje w pamięci 32 bity (4 bajty)."
                },
                {
                    "id": "pw-lab3-022",
                    "type": "single",
                    "question": "Ile bitów zajmuje w pamięci typ long w języku C#?",
                    "options": [
                        "16 bitów",
                        "32 bity",
                        "64 bity",
                        "128 bitów"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Typ całkowity long (oraz ulong) zajmuje w pamięci 64 bity (8 bajtów)."
                },
                {
                    "id": "pw-lab3-023",
                    "type": "single",
                    "question": "Ile bitów zajmuje w pamięci typ decimal w języku C#?",
                    "options": [
                        "32 bity",
                        "64 bity",
                        "128 bitów",
                        "256 bitów"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Typ zmiennoprzecinkowy wysokiej precyzji decimal zajmuje w pamięci 128 bitów (16 bajtów)."
                },
                {
                    "id": "pw-lab3-024",
                    "type": "single",
                    "question": "Jaki jest zakres wartości typu byte oraz sbyte w języku C#?",
                    "options": [
                        "byte: -128..127, sbyte: 0..255",
                        "byte: 0..255, sbyte: -128..127",
                        "byte: 0..65535, sbyte: -32768..32767",
                        "byte: 0..127, sbyte: -127..127"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Typ byte jest 8-bitowym typem bez znaku (0..255), natomiast sbyte (signed byte) jest 8-bitowym typem ze znakiem (-128..127)."
                },
                {
                    "id": "pw-lab3-025",
                    "type": "single",
                    "question": "Co oznacza znak @ umieszczony przed literałem łańcuchowym w C# (np. string path = @\"c:\\tmp\\dir\";)?",
                    "options": [
                        "Łańcuch jest automatycznie szyfrowany",
                        "Tworzy dosłowny łańcuch znaków (verbatim string), w którym znaki ucieczki \\ są traktowane dosłownie",
                        "Zmienna staje się dostępna tylko do odczytu w całym programie",
                        "Pozwala na bezpośrednie wstawianie zmiennych w nawiasach klamrowych bez znaku $"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Znak @ przed ciągiem znaków wyłącza interpretację sekwencji specjalnych ze znakiem \\, co ułatwia np. zapis ścieżek do plików."
                },
                {
                    "id": "pw-lab3-026",
                    "type": "single",
                    "question": "Jaką wartość domyślną przyjmuje struktura DateTime utworzona za pomocą konstruktora bezparametrowego new DateTime()?",
                    "options": [
                        "Bieżącą datę i godzinę systemową",
                        "01/01/1970 00:00:00",
                        "01/01/0001 00:00:00",
                        "Wartość null"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Domyślny konstruktor new DateTime() inicjalizuje obiekt wartością początkową 01/01/0001 00:00:00."
                },
                {
                    "id": "pw-lab3-027",
                    "type": "single",
                    "question": "Jaki przedział czasu reprezentuje pojedynczy Tick we właściwości DateTime.Now.Ticks?",
                    "options": [
                        "1 milisekundę",
                        "1 mikrosekundę",
                        "100 nanosekund",
                        "1 sekundę"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Jeden Tick w strukturze DateTime oznacza przedział czasowy równy 100 nanosekundom, liczony od 1 stycznia 0001 roku."
                },
                {
                    "id": "pw-lab3-028",
                    "type": "single",
                    "question": "Jaki typ danych zwraca operacja odjęcia jednej daty DateTime od drugiej (np. var roznica = dt5 - dt6;)?",
                    "options": [
                        "DateTime",
                        "TimeSpan",
                        "long",
                        "double"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Wynikiem odjęcia dwóch obiektów DateTime jest struktura TimeSpan reprezentująca przedział czasu pomiędzy tymi datami."
                },
                {
                    "id": "pw-lab3-029",
                    "type": "single",
                    "question": "Kiedy sprawdzany jest typ zmiennej zadeklarowanej za pomocą słowa kluczowego dynamic w C#?",
                    "options": [
                        "Podczas kompilacji programu",
                        "Podczas wykonywania programu (w czasie rzeczywistym / runtime)",
                        "Tylko podczas uruchamiania testów jednostkowych",
                        "Zmienna dynamic nie posiada żadnego typu nawet w trakcie wykonywania"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "W przeciwieństwie do var, typ zmiennej dynamic jest weryfikowany dopiero podczas wykonywania programu (runtime)."
                },
                {
                    "id": "pw-lab3-030",
                    "type": "single",
                    "question": "Co się stanie w przypadku próby modyfikacji właściwości obiektu typu anonimowego (np. car.Year = 2020;)?",
                    "options": [
                        "Program się nie skompiluje (błąd kompilacji)",
                        "Wartość zostanie poprawnie zmieniona na 2020",
                        "Zostanie rzucony wyjątek NullReferenceException w trakcie działania programu",
                        "Zostanie utworzona nowa kopia obiektu"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Typy anonimowe posiadają właściwości tylko do odczytu (read-only), więc próba ich zmiany skutkuje błędem kompilacji."
                },
                {
                    "id": "pw-lab3-031",
                    "type": "single",
                    "question": "Która deklaracja w C# oznacza tablicę tablic (Jagged array), a która wielowymiarową tablicę prostokątną 2D?",
                    "options": [
                        "int[,] to tablica tablic, natomiast int[][] to tablica prostokątna 2D",
                        "int[][] to tablica tablic (Jagged array), natomiast int[,] to tablica dwuwymiarowa",
                        "Obie deklaracje oznaczają dokładnie to samo",
                        "W C# nie można tworzyć tablic wielowymiarowych"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Zapis int[][] deklaruje tablicę tablic (Jagged array), natomiast zapis z przecinkiem int[,] deklaruje wielowymiarową tablicę 2D."
                },
                {
                    "id": "pw-lab3-032",
                    "type": "single",
                    "question": "Gdzie w pamięci umieszczana jest struktura (struct), a gdzie instancja klasy (class)?",
                    "options": [
                        "Struktura na stercie (heap), a klasa na stosie (stack)",
                        "Struktura jest typem wartościowym trzymanym na stosie (stack), a klasa jest typem referencyjnym trzymanym na stercie (heap)",
                        "Zarówno struktura, jak i klasa są zawsze trzymane na stosie",
                        "Zarówno struktura, jak i klasa są zawsze trzymane na stercie"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Struktury jako typy wartościowe trafiają na stos (stack), natomiast obiekty klas jako typy referencyjne alokowane są na stercie (heap)."
                },
                {
                    "id": "pw-lab3-033",
                    "type": "single",
                    "question": "Jaki warunek musi spełniać konstruktor parametrowy zdefiniowany wewnątrz struktury (struct)?",
                    "options": [
                        "Musi być zadeklarowany jako private",
                        "Musi zainicjalizować wszystkie pola struktury przed zwróceniem sterowania",
                        "Nie może przyjmować więcej niż jednego parametru",
                        "Musi wywoływać metodę Dispose()"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Konstruktor w strukturze nie może być niepełny i musi przypisać wartości do wszystkich jej pól."
                },
                {
                    "id": "pw-lab3-034",
                    "type": "single",
                    "question": "W jaki sposób w strukturze Person można zdefiniować konstruktor przyjmujący tylko jeden parametr (np. public Person(string name)), unikając błędu kompilacji CS0171 o nieprzypisanych pozostałych polach?",
                    "options": [
                        "Dodając słowo kluczowe virtual",
                        "Wywołując konstruktor domyślny za pomocą konstrukcji : this()",
                        "Używając słowa kluczowego base()",
                        "Nie ma takiej możliwości w języku C#"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Dziedziczenie po konstruktorze domyślnym (: this()) automatycznie inicjalizuje wszystkie pozostałe pola struktury wartościami domyślnymi."
                },
                {
                    "id": "pw-lab3-035",
                    "type": "single",
                    "question": "Jaka klasa stanowi korzeń (klasę bazową) dla wszystkich klas w hierarchii wyjątków w C#?",
                    "options": [
                        "Error",
                        "Throwable",
                        "Exception (dziedzicząca po Object)",
                        "SystemException"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Klasą bazową dla wszystkich wyjątków w .NET jest klasa Exception, która dziedziczy bezpośrednio po klasie Object."
                },
                {
                    "id": "pw-lab3-036",
                    "type": "single",
                    "question": "Po jakiej klasie dziedziczy bezpośrednio wyjątek DivideByZeroException?",
                    "options": [
                        "ArgumentException",
                        "ArithmeticException",
                        "ExternalException",
                        "ApplicationException"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Wyjątek DivideByZeroException dziedziczy bezpośrednio po klasie ArithmeticException (która dziedziczy po SystemException)."
                },
                {
                    "id": "pw-lab3-037",
                    "type": "single",
                    "question": "W jakiej kolejności należy umieszczać bloki catch podczas obsługi wyjątków w C#?",
                    "options": [
                        "Od najbardziej ogólnego (Exception) na górze do najbardziej szczegółowego na dole",
                        "Od najbardziej szczegółowych (np. DivideByZeroException) do najbardziej ogólnego (Exception) na końcu",
                        "Kolejność bloków catch nie ma żadnego znaczenia dla kompilatora",
                        "Można umieścić tylko jeden blok catch dla jednego bloku try"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Bloki catch umieszcza się od najbardziej szczegółowych do najbardziej ogólnego (Exception), aby ogólny blok nie przechwycił wcześniej wszystkich błędów."
                },
                {
                    "id": "pw-lab3-038",
                    "type": "single",
                    "question": "Co oznacza zapis <T> przy deklaracji klasy public class Vector<T>?",
                    "options": [
                        "Klasa może przechowywać wyłącznie typy tekstowe",
                        "Klasa jest typem generycznym (uogólnionym) i może pracować z dowolnym określonym później typem danych",
                        "Klasa jest klasą statyczną przeznaczoną dla wątków (Threads)",
                        "Klasa nie może posiadać konstruktorów"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Nawiasy <T> oznaczają deklarację typu generycznego, który nie jest powiązany ze ściśle określonym typem danych aż do momentu utworzenia obiektu."
                },
                {
                    "id": "pw-lab3-039",
                    "type": "single",
                    "question": "Czym jest delegat (delegate) w języku C#?",
                    "options": [
                        "Typem wartościowym przechowującym adres zmiennej na stosie",
                        "Typem referencyjnym, który definiuje sygnaturę metody (zwracany typ oraz parametry)",
                        "Specjalnym rodzajem pętli współbieżnej",
                        "Wbudowanym mechanizmem blokowania wątków"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Delegat to typ referencyjny określający sygnaturę metody (odpowiednik bezpiecznego, silnie typizowanego wskaźnika do funkcji z języka C)."
                },
                {
                    "id": "pw-lab3-040",
                    "type": "single",
                    "question": "Które operatory służą odpowiednio do dodawania oraz usuwania metod z listy wywołań delegata (multicast delegate)?",
                    "options": [
                        "<< oraz >>",
                        "+= oraz -=",
                        "&& oraz ||",
                        "*= oraz /="
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Operator += dodaje nową metodę do listy wywołań delegata, natomiast operator -= usuwa metodę z tej listy."
                },
                {
                    "id": "pw-lab3-041",
                    "type": "single",
                    "question": "Czym różni się wbudowany delegat Action od delegata Func?",
                    "options": [
                        "Action może przyjmować maksymalnie 1 parametr, a Func do 16",
                        "Action nie zwraca żadnej wartości (odpowiada metodom o typie zwracanym void)",
                        "Action zawsze zwraca wartość typu bool",
                        "Action wymaga użycia parametrów ref oraz out"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Delegat Func zawsze musi zwracać wartość (TResult), natomiast delegat Action reprezentuje metody, które nie zwracają żadnej wartości (void)."
                },
                {
                    "id": "pw-lab3-042",
                    "type": "single",
                    "question": "Co zwróci wywołanie własnej metody rozszerzającej s3.IsNullOrEmpty() z wykładu, jeśli zmienna string s3 = null;?",
                    "options": [
                        "Zwróci true (bez rzucania wyjątku NullReferenceException)",
                        "Rzuci wyjątek NullReferenceException",
                        "Zwróci false",
                        "Kod się nie skompiluje"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Metoda rozszerzająca jest wywoływana jako metoda statyczna Extensions.IsNullOrEmpty(s3), dlatego dla wartości null warunek (str == null) bezpiecznie zwraca true."
                },
                {
                    "id": "pw-lab3-043",
                    "type": "single",
                    "question": "Jaką metodę należy wywołać na instancji delegata, aby pobrać listę wszystkich przypisanych do niego metod (np. w celu wypisania ich nazw przez item.Method.Name)?",
                    "options": [
                        "GetMethods()",
                        "GetInvocationList()",
                        "GetDelegateList()",
                        "InvokeAll()"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Metoda GetInvocationList() zwraca tablicę delegatów reprezentujących wszystkie metody przypisane aktualnie do danego delegata."
                },
                {
                    "id": "pw-lab3-044",
                    "type": "single",
                    "question": "Dlaczego w zadaniu 2 (SimpleEvent) program domyślnie nie kończy działania po naciśnięciu klawisza w metodzie Main?",
                    "options": [
                        "Ponieważ metoda Console.ReadKey() zawiesza system operacyjny",
                        "Ponieważ główny wątek czeka na zakończenie wątku potomnego zegara, który domyślnie jest wątkiem pierwszoplanowym (IsBackground = false)",
                        "Ponieważ w C# nie można zakończyć programu posiadającego zdarzenia (events)",
                        "Ponieważ zadziałał Garbage Collector"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Program nie kończy pracy, ponieważ czeka na zakończenie wątku potomnego, który domyślnie działa jako wątek pierwszoplanowy."
                },
                {
                    "id": "pw-lab3-045",
                    "type": "single",
                    "question": "Co powoduje ustawienie właściwości wątku IsBackground = true w zadaniu 2?",
                    "options": [
                        "Wątek otrzymuje najwyższy priorytet procesora",
                        "Wątek staje się wątkiem tła i jest automatycznie zamykany wraz z zakończeniem głównego wątku programu",
                        "Wątek nie może wywoływać żadnych zdarzeń (events)",
                        "Wątek zostaje natychmiast zatrzymany w miejscu wywołania tej właściwości"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Ustawienie IsBackground na true sprawia, że wątek działa w tle i nie blokuje zamknięcia programu po zakończeniu metody Main."
                },
                {
                    "id": "pw-lab3-046",
                    "type": "single",
                    "question": "Jaką metodę należy zaimplementować w klasie Alarm, gdy klasa ta implementuje interfejs IDisposable?",
                    "options": [
                        "Finalize()",
                        "Close()",
                        "Dispose()",
                        "Interrupt()"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Interfejs IDisposable wymaga zaimplementowania bezparametrowej metody public void Dispose() służącej do zwalniania zasobów."
                },
                {
                    "id": "pw-lab3-047",
                    "type": "single",
                    "question": "Co robi wywołanie metody Interrupt() na wątku wewnętrznym (internalThread) znajdującym się w stanie oczekiwania (np. Thread.Sleep)?",
                    "options": [
                        "Natychmiast usuwa wątek z pamięci bez możliwości obsługi błędów",
                        "Przerywa oczekiwanie wątku i powoduje rzucenie w tym wątku wyjątku ThreadInterruptedException",
                        "Zmienia właściwość IsBackground na true",
                        "Powoduje ponowne uruchomienie metody Main"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Metoda Interrupt() wybudza wątek ze stanu oczekiwania (WaitSleepJoin) i rzuca w nim wyjątek ThreadInterruptedException."
                },
                {
                    "id": "pw-lab3-048",
                    "type": "single",
                    "question": "Jaki wyjątek powinien zostać przechwycony wewnątrz metody wykonywanej przez wątek, aby poprawnie zakończyć jego pracę po wywołaniu na nim metody Interrupt()?",
                    "options": [
                        "ThreadAbortException",
                        "ThreadInterruptedException",
                        "InvalidOperationException",
                        "OperationCanceledException"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Wywołanie Interrupt() na wątku generuje wyjątek ThreadInterruptedException, który należy przechwycić w bloku catch wewnątrz wątku."
                },
                {
                    "id": "pw-lab3-049",
                    "type": "single",
                    "question": "W jaki sposób w zadaniu 4 umożliwiono przekazywanie opcjonalnego parametru checkingInterval przy zachowaniu dotychczasowego sposobu wywołania (domyślnie 1000 ms)?",
                    "options": [
                        "Poprzez przeciążenie (overloading) konstruktorów klasy Alarm oraz metody SetAlarm (lub użycie parametru domyślnego)",
                        "Poprzez utworzenie nowej klasy dziedziczącej po klasie Thread",
                        "Poprzez zamianę klasy Alarm na strukturę",
                        "Poprzez użycie słowa kluczowego dynamic"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Przeciążenie (overloading) konstruktorów i metod SetAlarm pozwala na wywołanie ich zarówno ze starym zestawem parametrów (1000 ms), jak i z nowym parametrem checkingInterval."
                },
                {
                    "id": "pw-lab3-050",
                    "type": "single",
                    "question": "W jaki sposób w C# definiujemy właściwość (property) tylko do odczytu, np. zwracającą wartość timespanToAlarm w zadaniu 5?",
                    "options": [
                        "Poprzez zdefiniowanie wyłącznie akcesora set",
                        "Poprzez zdefiniowanie właściwości posiadającej wyłącznie akcesor get (bez akcesora set)",
                        "Poprzez dodanie słowa kluczowego var przed właściwością",
                        "Właściwości w C# nie mogą być tylko do odczytu"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Właściwość tylko do odczytu (read-only property) definiuje się poprzez umieszczenie w niej wyłącznie bloku get."
                },
                {
                    "id": "pw-lab3-051",
                    "type": "single",
                    "question": "Którego słowa kluczowego używamy w klasie do zadeklarowania zdarzenia opartego na delegacie w zadaniu 5?",
                    "options": [
                        "callback",
                        "trigger",
                        "event",
                        "action"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Do deklaracji zdarzenia w klasie używa się słowa kluczowego event przed typem delegata."
                },
                {
                    "id": "pw-lab3-052",
                    "type": "single",
                    "question": "Co powoduje ustawienie właściwości timerSystem.AutoReset = false; w klasie System.Timers.Timer?",
                    "options": [
                        "Timer resetuje licznik czasu co 1 milisekundę",
                        "Timer zadziała tylko jeden raz (jak jednorazowy budzik), zamiast wywoływać zdarzenie cyklicznie",
                        "Timer zostaje natychmiast usunięty z pamięci",
                        "Timer automatycznie uruchamia nowy proces w systemie"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Ustawienie AutoReset = false sprawia, że timer zgłasza zdarzenie Elapsed tylko jeden raz po upływie zadanego czasu."
                },
                {
                    "id": "pw-lab3-053",
                    "type": "single",
                    "question": "Dlaczego w metodzie TimerTask (zadanie 6) do zwiększania licznika użyto instrukcji Interlocked.Increment(ref state.Counter) zamiast zwykłego state.Counter++?",
                    "options": [
                        "Ponieważ operator ++ nie działa dla pól typu int w klasach",
                        "Ponieważ wywołania zwrotne timera mogą wykonywać się współbieżnie na różnych wątkach z puli wątków, a Interlocked.Increment gwarantuje atomowość operacji",
                        "Ponieważ metoda TimerTask jest metodą rozszerzającą",
                        "Ponieważ wymaga tego kompilator dla każdego typu obiektowego"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Klasa Interlocked zapewnia atomową (bezpieczną wątkowo) inkrementację zmiennej współdzielonej pomiędzy wątkami puli wątków."
                },
                {
                    "id": "pw-lab3-054",
                    "type": "single",
                    "question": "Jakiego typu jest parametr przyjmowany przez metodę docelową delegata TimerCallback (np. private static void TimerTask(object timerState))?",
                    "options": [
                        "int",
                        "TimeSpan",
                        "object",
                        "EventArgs"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Delegat TimerCallback wymaga metody przyjmującej pojedynczy parametr typu object (który następnie rzutujemy np. za pomocą operatora as na klasę TimerState)."
                },
                {
                    "id": "pw-lab3-055",
                    "type": "single",
                    "question": "W jaki sposób w zadaniu 7 wyłączamy (zatrzymujemy) działający obiekt klasy System.Threading.Timer (timerThreading)?",
                    "options": [
                        "timerThreading.Stop();",
                        "timerThreading.AutoReset = false;",
                        "timerThreading.Change(Timeout.Infinite, 0);",
                        "timerThreading.Interrupt();"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Klasę System.Threading.Timer zatrzymujemy wywołując metodę Change z czasem opóźnienia ustawionym na Timeout.Infinite."
                },
                {
                    "id": "pw-lab3-056",
                    "type": "single",
                    "question": "Jakie parametry przyjmuje metoda Change(int dueTime, int period) klasy System.Threading.Timer?",
                    "options": [
                        "Priorytet wątku oraz maksymalną liczbę wywołań",
                        "Czas opóźnienia do pierwszego wywołania (dueTime) oraz interwał pomiędzy kolejnymi wywołaniami (period)",
                        "Nazwę metody callback oraz nazwę wątku",
                        "Czas zakończenia pracy programu oraz kod wyjścia"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Pierwszy parametr metody Change (dueTime) określa opóźnienie przed uruchomieniem, a drugi (period) odstęp czasu między kolejnymi wywołaniami."
                },
                {
                    "id": "pw-lab3-057",
                    "type": "single",
                    "question": "Przy jakiej wartości licznika state.Counter (zaczynając od 0 i inkrementując przy każdym wywołaniu) należy wywołać metodę Change(Timeout.Infinite, 0), aby wyłączyć timer dokładnie po 5 wywołaniach (zadanie 7)?",
                    "options": [
                        "Gdy licznik osiągnie 0",
                        "Gdy licznik osiągnie 4 (lub 5 po inkrementacji)",
                        "Gdy licznik osiągnie 10",
                        "Gdy licznik osiągnie -1"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "Licząc od 0 (0, 1, 2, 3, 4), piąte wywołanie następuje wtedy, gdy licznik osiągnie wartość 4 przed inkrementacją (lub 5 po inkrementacji)."
                },
                {
                    "id": "pw-lab3-058",
                    "type": "single",
                    "question": "Który z poniższych czasomierzy w .NET jest składnikiem przeznaczonym do użytku w środowisku jednowątkowym Windows Forms?",
                    "options": [
                        "System.Threading.Timer",
                        "System.Timers.Timer",
                        "System.Windows.Forms.Timer",
                        "System.Windows.Threading.DispatcherTimer"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "System.Windows.Forms.Timer to składnik Windows Forms bez interfejsu użytkownika przeznaczony do pracy w środowisku jednowątkowym."
                },
                {
                    "id": "pw-lab3-059",
                    "type": "single",
                    "question": "Który z poniższych czasomierzy jest składnikiem ASP.NET wykonującym asynchroniczne lub synchroniczne operacje zwrotne stron internetowych?",
                    "options": [
                        "System.Windows.Forms.Timer",
                        "System.Web.UI.Timer",
                        "System.Windows.Threading.DispatcherTimer",
                        "System.Threading.Timer"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": "System.Web.UI.Timer to składnik ASP.NET służący do wykonywania operacji zwrotnych (postback) stron internetowych w regularnych odstępach czasu."
                },
                {
                    "id": "pw-lab3-060",
                    "type": "single",
                    "question": "Który z poniższych czasomierzy jest zintegrowany z kolejką Dispatcher i przetwarzany w określonym interwale czasu oraz z określonym priorytetem (np. w aplikacjach WPF)?",
                    "options": [
                        "System.Web.UI.Timer",
                        "System.Timers.Timer",
                        "System.Windows.Threading.DispatcherTimer",
                        "System.Windows.Forms.Timer"
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "System.Windows.Threading.DispatcherTimer to czasomierz zintegrowany z kolejką Dispatcher, przetwarzany z określonym interwałem i priorytetem."
                },
                {
                    "id": "pw-lab3-061",
                    "type": "multiple",
                    "question": "W poniższym przykładzie: string astr = \"a\"; int b = -1; int.TryParse(astr, out b); (wielokrotny)",
                    "options": [
                        "program się nie skompiluje",
                        "b będzie miało wartość -1",
                        "TryParse zwróci -1",
                        "Dostaniemy wyjątek FormatException",
                        "b będzie miało wartość 0",
                        "TryParse zwróci false"
                    ],
                    "correctAnswers": [
                        4,
                        5
                    ],
                    "explanation": "Gdy konwersja w metodzie int.TryParse się nie powiedzie, metoda nie rzuca wyjątku, lecz zwraca false i przypisuje parametrowi wyjściowemu out b wartość domyślną 0."
                },
                {
                    "id": "pw-lab3-062",
                    "type": "multiple",
                    "question": "Które klawisze w Visual Studio służą do krokowego wykonywania programu w trybie debugowania (Debug)? (wielokrotny)",
                    "options": [
                        "F10",
                        "F11",
                        "Shift+F11",
                        "Ctrl+Shift+A",
                        "F2"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Do krokowego wykonywania programu w Visual Studio służą klawisze F10 (Step Over), F11 (Step Into) oraz Shift+F11 (Step Out)."
                },
                {
                    "id": "pw-lab3-063",
                    "type": "multiple",
                    "question": "Które ze sposobów formatowania i wyświetlania zmiennych w Console.WriteLine są poprawne w języku C#? (wielokrotny)",
                    "options": [
                        "Konkatenacja za pomocą operatora + (np. \"Age: \" + age)",
                        "Formatowanie indeksowane (np. \"Age: {0}\", age)",
                        "Interpolacja ciągów znaków ze znakiem $ (np. $\"Age: {age}\")",
                        "Interpolacja ze znakiem @ bez znaków nawiasów (np. @\"Age: age\")"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "C# umożliwia wyświetlanie zmiennych poprzez konkatenację (+), indeksowane znaczniki formatowania ({0}, {1}) oraz interpolację ciągów ze znakiem $ ($\"{zmienna}\")."
                },
                {
                    "id": "pw-lab3-064",
                    "type": "multiple",
                    "question": "Które z poniższych typów w C# należą do typów wartościowych (Value types)? (wielokrotny)",
                    "options": [
                        "Simple Types (typy proste)",
                        "Enum Types (typy wyliczeniowe)",
                        "Struct Types (struktury)",
                        "Nullable Types",
                        "Class Types (klasy)",
                        "Delegate Types (delegaty)",
                        "Array Types (tablice)",
                        "Interface Types (interfejsy)"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Do typów wartościowych (Value types) w C# należą typy proste, typy wyliczeniowe (enum), struktury (struct) oraz typy Nullable."
                },
                {
                    "id": "pw-lab3-065",
                    "type": "multiple",
                    "question": "Które z poniższych typów w C# należą do typów referencyjnych (Reference types)? (wielokrotny)",
                    "options": [
                        "Class Types (klasy)",
                        "Interface Types (interfejsy)",
                        "Array Types (tablice)",
                        "Delegate Types (delegaty)",
                        "Struct Types (struktury)",
                        "Enum Types (typy wyliczeniowe)"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Do typów referencyjnych (Reference types) w C# należą klasy, interfejsy, tablice oraz delegaty."
                },
                {
                    "id": "pw-lab3-066",
                    "type": "multiple",
                    "question": "Które z poniższych typów całkowitych w C# są typami bez znaku (unsigned)? (wielokrotny)",
                    "options": [
                        "byte",
                        "ushort",
                        "uint",
                        "ulong",
                        "sbyte",
                        "short",
                        "int",
                        "long"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Typami całkowitymi bez znaku (przechowującymi wartości od 0 wzwyż) są byte, ushort, uint oraz ulong."
                },
                {
                    "id": "pw-lab3-067",
                    "type": "multiple",
                    "question": "Które stwierdzenia dotyczące struktur i klas w C# są prawdziwe? (wielokrotny)",
                    "options": [
                        "Gdy struktura danych jest niewielka, lepiej użyć struktury (struct)",
                        "Gdy mamy duże struktury danych, lepiej użyć klasy (class)",
                        "Klasa jest typem referencyjnym",
                        "Struktura jest typem wartościowym",
                        "Struktury obsługują pełne dziedziczenie po innych strukturach"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Struktury są typami wartościowymi zalecanymi dla małych obiektów i nie obsługują dziedziczenia, natomiast klasy są typami referencyjnymi zalecanymi dla większych struktur danych."
                },
                {
                    "id": "pw-lab3-068",
                    "type": "multiple",
                    "question": "Które dwie klasy w hierarchii wyjątków .NET dziedziczą bezpośrednio po klasie Exception? (wielokrotny)",
                    "options": [
                        "SystemException",
                        "ApplicationException",
                        "NullReferenceException",
                        "DivideByZeroException"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Bezpośrednio po klasie bazowej Exception dziedziczą dwie główne klasy: SystemException oraz ApplicationException."
                },
                {
                    "id": "pw-lab3-069",
                    "type": "multiple",
                    "question": "Które z poniższych wyjątków dziedziczą po klasie ArgumentException? (wielokrotny)",
                    "options": [
                        "ArgumentNullException",
                        "ArgumentOutOfRangeException",
                        "NullReferenceException",
                        "IndexOutOfRangeException"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Zgodnie z hierarchią wyjątków .NET po klasie ArgumentException dziedziczą klasy ArgumentNullException oraz ArgumentOutOfRangeException."
                },
                {
                    "id": "pw-lab3-070",
                    "type": "multiple",
                    "question": "W jaki sposób można przypisać metodę lub działanie do delegata w C#? (wielokrotny)",
                    "options": [
                        "Za pomocą operatora new (np. new DelExample(MethodPrint))",
                        "Przez bezpośrednie przypisanie nazwy metody (np. DelExample del = MethodPrint;)",
                        "Za pomocą metody anonimowej (delegate(...) { ... })",
                        "Za pomocą wyrażenia lambda (np. (msg) => Console.WriteLine(msg))",
                        "Poprzez dziedziczenie klasy po zmiennej delegata"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Instancję delegata można utworzyć przez konstruktor new, bezpośrednie przypisanie nazwy metody, metodę anonimową lub wyrażenie lambda."
                },
                {
                    "id": "pw-lab3-071",
                    "type": "multiple",
                    "question": "Jakie wbudowane ogólne (generyczne) typy delegatów znajdują się w standardowej bibliotece C#? (wielokrotny)",
                    "options": [
                        "Func",
                        "Action",
                        "Predicate",
                        "Invoke",
                        "Callback"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Standardowa biblioteka C# udostępnia trzy główne wbudowane typy delegatów generycznych: Func, Action oraz Predicate."
                },
                {
                    "id": "pw-lab3-072",
                    "type": "multiple",
                    "question": "Które stwierdzenia dotyczące wbudowanego delegata Func są prawdziwe? (wielokrotny)",
                    "options": [
                        "Może przyjmować od 0 do 16 parametrów wejściowych",
                        "Zawsze musi zwracać wartość (ostatni parametr typów generycznych TResult to typ zwracany)",
                        "Nie pozwala na parametry typu ref oraz out",
                        "Może być używany z metodą anonimową lub wyrażeniem lambda",
                        "Zwraca zawsze typ void"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Delegat Func przyjmuje od 0 do 16 parametrów wejściowych, zawsze zwraca wartość typu TResult, obsługuje wyrażenia lambda i nie pozwala na parametry ref oraz out."
                },
                {
                    "id": "pw-lab3-073",
                    "type": "multiple",
                    "question": "Czym charakteryzuje się wbudowany delegat Predicate<T>? (wielokrotny)",
                    "options": [
                        "Zawsze zwraca wartość typu bool",
                        "Przyjmuje dokładnie jeden parametr wejściowy",
                        "Może być używany ze zwykłą metodą, metodą anonimową lub wyrażeniem lambda",
                        "Może przyjmować do 16 parametrów wejściowych i zwracać dowolny typ"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Delegat Predicate<T> to funkcja sprawdzająca warunek, która przyjmuje dokładnie jeden parametr i zawsze zwraca wartość logiczną bool."
                },
                {
                    "id": "pw-lab3-074",
                    "type": "multiple",
                    "question": "Jakie wymagania musi spełniać metoda rozszerzająca (Extension Method) w C#? (wielokrotny)",
                    "options": [
                        "Musi być zdefiniowana wewnątrz klasy statycznej (static class)",
                        "Sama metoda musi być statyczna (static)",
                        "Pierwszy parametr metody musi być poprzedzony słowem kluczowym this wskazującym rozszerzany typ",
                        "Musi być zadeklarowana wewnątrz struktury"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Metoda rozszerzająca musi być metodą statyczną zdefiniowaną w klasie statycznej, a jej pierwszy parametr musi zawierać modyfikator this."
                },
                {
                    "id": "pw-lab3-075",
                    "type": "multiple",
                    "question": "Czym różni się konfiguracja początkowa timerThreading (System.Threading.Timer) od timerSystem (System.Timers.Timer) w projekcie TimerExample (zadanie 6)? (wielokrotny)",
                    "options": [
                        "timerThreading uruchamia się z opóźnieniem 5 sekund i działa w odstępach 1-sekundowych",
                        "timerSystem uruchamia się od razu w odstępach 1,5-sekundowych",
                        "W konstruktorze System.Threading.Timer przekazujemy delegat TimerCallback oraz obiekt stanu (state)",
                        "W konstruktorze System.Timers.Timer przekazujemy bezpośrednio metodę TimerCallback"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "W projekcie TimerExample timerThreading startuje po 5 s co 1 s i przyjmuje TimerCallback w konstruktorze, natomiast timerSystem startuje od razu co 1,5 s."
                }
            ]
        },
        {
            "id": "pw-lab-4",
            "name": "Test Lab 4",
            "questions": []
        },
        {
            "id": "pw-lab-5",
            "name": "Test Lab 5",
            "questions": []
        },
        {
            "id": "pw-lab-6",
            "name": "Test Lab 6",
            "questions": []
        },
        {
            "id": "pw-lab-7",
            "name": "Test Lab 7",
            "questions": []
        },
        {
            "id": "pw-lab-8",
            "name": "Test Lab 8",
            "questions": []
        },
        {
            "id": "pw-lab-9",
            "name": "Test Lab 9",
            "questions": []
        },
        {
            "id": "pw-lab-10",
            "name": "Test Lab 10",
            "questions": []
        }
    ],
    "dbVersion": 3
};
