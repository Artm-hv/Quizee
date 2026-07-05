const systemyOperacyjneData = {
    "id": "systemy-operacyjne",
    "name": "Systemy operacyjne",
    "icon": "💿",
    "description": "Zasady działania systemów operacyjnych, zarządzanie procesami, pamięcią, systemami plików oraz bezpieczeństwo.",
    "modules": [
        {
            "id": "so-m1",
            "name": "SO: Moduł 1 — Szeregowanie i procesy",
            "questions": [
                {
                    "id": "so-m1-001",
                    "type": "yn",
                    "question": "Które z poniższych zdań dotyczących algorytmu szeregowania O(1) są prawdziwe?",
                    "options": [
                        "Wymiana priorytetów zadań sprowadza się do zamiany wskaźników na tablicę aktywną i",
                        "Priorytet każdego zadania jest ustalany wyłącznie na podstawie jego poziomu interaktywności",
                        "Promowane są zadania o wysokim stopniu interaktywności",
                        "Mechanizm szeregowania dokonuje zrównoważenia obciążenia procesorów wyłącznie wtedy",
                        "Kwanty czasu dla poszczególnych zadań są przeliczane dopiero wówczas, gdy ostatnie z zadań"
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** przeterminowaną Wymiana „starych” priorytetów na „nowe” sprowadza się wyłącznie do wymiany wskaźników na tablicę aktywną i przeterminowaną. (Wykład 3)\n• **Opcja b) (NIE):** Priorytet każdego „zwykłego” zadania jest ustalany na podstawie priorytetu statycznego, jakim jest poziom uprzejmości oraz na podstawie stopnia interaktywności procesu. (Wykład 3)\n• **Opcja c) (NIE):** Jądro Linuksa promuje zadania o dużym stopniu interaktywności. (Wykład 3)\n• **Opcja d) (NIE):** kiedy kolejka zadań jednego z nich jest pusta W systemach wieloprocesorowych zadania są kojarzone z poszczególnymi procesorami, ale czasem może zajść potrzeba zrównoważenia pracy systemu, wówczas część zadań z kolejki  procesów gotowych procesora może zostać przeniesiona do kolejek  innych procesorów lub odwrotnie.  Mogą być dwie przyczyny takiego zdarzenia. Pierwsza zachodzi wtedy, ki edy w kolejce któregoś z procesorów nie ma żadnych zdań,  wówczas mogą one być przeniesione z kolejek innych procesorów. Druga to wywołanie load_balance()  za pomocą przerwania zegarowego. W tym przypadku zadanie równoważenia obciążenia jest bardziej skomp likowane. W skrócie polega ono na znalezieniu najbardziej obciążonej kolejki (ponad 25% obciążenia wszystkich kolejek w systemie) i rozłożeniu tego obciążenia na pozostałe procesory.  (Wykład 3)\n• **Opcja e) (NIE):** znajdujących się w tablicy priorytetów aktywnych wyczerpie swój kwant czasu Kwanty czasu zadań są przeliczane zaraz po ich wyczerpaniu przez zadanie i zanim zadanie trafi do tablicy przeterminowanej. (Wykład 3)"
                },
                {
                    "id": "so-m1-002",
                    "type": "yn",
                    "question": "Określ które ze zdań dotyczące szeregowania procesów w Linuxie 2.6 są prawdziwe?",
                    "options": [
                        "Linux realizuje wielozadaniowość wyłącznie w oparciu o kooperacje",
                        "Działanie planisty O(1) oparte jest na schemacie kolejek ze sprzężeniem zwrotnym",
                        "Zadania interaktywne otrzymują od planisty O(1) mniejszy kwant czasu niż zadania",
                        "Główną strukturą danych planisty CFS jest drzewo czerwono-czarne",
                        "Linux nie jest rygorystycznym systemem czasu rzeczywistego"
                    ],
                    "correctAnswers": [
                        1,
                        3,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** Istnieją dwa typy systemów wielozadaniowych: systemy wielozadaniowe z kooperacją (bez wywłaszczania) i systemy wielozadaniowe z wywłaszczaniem. W systemach pierwszego typu proces zawsze dobrowolnie zrzeka się procesora i oddaje sterowanie do systemu operacyjnego. Drugi typ systemów kontroluje wykorzystanie procesora  przez realizowane zadania i może przerywać ich działanie. Zapobieg a to sytuacji, w której pojedynczy proces mógłby zmonopolizować dostęp do procesora. Linux jak  większość współczesnych systemów operacyjnych realizuje wielozadaniowość z wywłaszczaniem. (Wykład 3)\n• **Opcja b) (NIE):** Schemat   szeregowania   jaki   zastosowano  w  tym  systemie  opiera  się na  schemacie wielopoziomowych kolejek  ze sprzężeniem  zwrotnym.  (Wykład 3)\n• **Opcja c) (NIE):** nieinteraktywne Jądro Linuksa promuje zadania o dużym  stopniu interaktywności. Takie zadania po wykorzystaniu swojego kwantu czasu nie trafiają od razu do tablicy przeterminowanej, ale otrzymują drugą szansę i są  umieszczane w tablicy aktywnej, na końcu tej samej listy, na której były poprzednio (dostają ten sam kwant czasu, co przed wykonaniem)  (Wykład 3)\n• **Opcja d) (NIE):** W planiście  CFS  tablice priorytetów zostały zastąpione drzewem czerwono-czarnym. (Wykład 3)"
                },
                {
                    "id": "so-m1-003",
                    "type": "yn",
                    "question": "Które twierdzenia odnośnie wątków i procesów w systemie Linux są prawdziwe?",
                    "options": [
                        "Za szeregowanie wątków odpowiada inny mechanizm jądra niż za szeregowanie procesów",
                        "Każdy wątek jądra posiada swoją odrębną przestrzeń adresową",
                        "Makrodefinicja „current” pozwala na szybki dostęp do deskryptora bieżącego procesu",
                        "Proces macierzysty, którego proces potomny się zakończył przechodzi w stan TASK_ZOMBIE",
                        "Deskryptory procesów powiązane są w listę"
                    ],
                    "correctAnswers": [
                        2,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** W przeciwieństwie do wielu innych systemów operacyjnych Linux obsługuje wątki, ale nie odróżnia ich od zwykłych procesów. (Wykład 2)\n• **Opcja b) (NIE):** Wątki jądra nie mają własnej przestrzeni  adresowej,  działają  w obrębie przestrzeni   jądra. (Wykład 2)\n• **Opcja c) (NIE):** W  jądrze  zdefiniowana jest makrodefinicja o nazwie „current”, która pozwala na szybki dostęp do deskryptora bieżącego procesu. (Wykład 2)\n• **Opcja d) (NIE):** Jeśli  proces macierzysty zakończy się przed procesem potomnym, to ten  ostatni pozostanie w stanie zombie. (…) TASK_ZOMBIE  – proces  zakończył   się,  w  systemie  został   jednak  jego deskryptor,  który  jest  usuwany  przez proces macierzysty poprzez wywołanie o nazwie „wait4()”,(Wykład 2)\n• **Opcja e) (NIE):** Deskryptory procesów są  powi zane ze sob  w dwukierunkową listę  procesów. (Wykład 2)"
                },
                {
                    "id": "so-m1-006",
                    "type": "yn",
                    "question": "Które z poniższych zdań dotyczących algorytmu szeregowania O(1) jest prawdziwe?",
                    "options": [
                        "Wymiana priorytetów zadań sprowadza się do zamiany wsk. na tab. aktywną i przeterminowaną.",
                        "Priorytet każdego zadania jest ustalany wyłącznie na podst. jego poziomu interakt.",
                        "Promowane są zadania o wysokim stopniu interakt.",
                        "Mechanizm szeregowania dokonuje zrównoważenia obciążenia procesów wyłącznie wtedy, gdy kolejka zadań 1 z nich jest pusta. (???)",
                        "Kwanty czasu dla poszcz. zadań są przeliczane dopiero gdy ost. z zadań w tab… wyczerpie swój kwant."
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-010",
                    "type": "yn",
                    "question": "Określ, które informacje odnośnie zarządzania procesami w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "deskryptor procesu jest umieszczony na dnie jego stosu w jądrze systemu.",
                        "makrodefinicja \"current\" zwraca adres deskryptora bieżącego procesu.",
                        "proces w stanie TASK_UNINTERRUPTIBLE może być ustawiony w stanie gotowości przez dowolny sygnał",
                        "proces zakończony ma stan TASK_STOPPED.",
                        "proces, który jest wykonywany ma stan TASK_RUNNING."
                    ],
                    "correctAnswers": [
                        1,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• Deskryptor procesu był na dnie stosu jądra w Linuxie przed wersją 2.6. Od 2.6 w górę jest on w pliku\nnagłówkowym linux/sched.h\n• Makro current zwraca adres deskryptora bieżącego procesu, czyli tego, który uaktywnił kod jądra\n• Proces w stanie TASK_UNINTERRUPTIBLE oczekuje na zdarzenie (śpi) i może być wybudzony tylko\nprzez sygnał z nim związany. Przez dowolny sygnał może być wybudzony proces w stanie\nTASK_INTERRUPTIBLE\n• Stan TASK_STOPPED ma proces wstrzymany przez sygnał. Zakończony proces może mieć stany\nEXIT_ZOMBIE lub EXIT_DEAD, ale po całkowitym poprawnym zakończeniu znika po nim wszelki ślad.\n• Stan TASK_RUNNING oznacza, że proces jest aktywny lub gotów do wykonania. Jądro nie rozróżnia\ntych dwóch przypadków, więc widząc ten stan nie możemy określić czy jest wykonywany. Ale jeśli\nwiemy, że proces jest wykonywany to znaczy, że ma stan TASK_RUNNING."
                },
                {
                    "id": "so-m1-011",
                    "type": "yn",
                    "question": "Określ, które informacje o planiście O(1) są prawdziwe:",
                    "options": [
                        "nowy kwant czasu dla procesu jest ustalany dopiero wtedy, gdy wszystkie procesy w systemie wyczerpią",
                        "kolejka procesów gotowych zawiera wskaźniki na dwie tablice priorytetów.",
                        "każdy procesor ma swoją kolejkę procesów gotowych.",
                        "priorytet zwykłych procesów jest ustalany wyłącznie na podstawie stopnia ich interaktywności.",
                        "im wyższy jest priorytet procesu, tym krótszy kwant czasu on otrzymuje."
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• W Uniksie priorytety dla procesów były wyliczane na nowo dopiero po tym, kiedy wszystkie uległy\nprzeterminowaniu, czyli nowe kwanty były wyliczane jak się skończyły dla wszystkich procesów.\nLinux przydziela nowy priorytet (a tym samym nowy kwant czasu) jeśli zarówno proces macierzysty,\njak i potomny uległy przeterminowaniu. Poza tym Linux wylicza nowy priorytet dla procesu typu\nSCHED_OTHER, zaraz po tym, jak staje się on przeterminowany. Pytanie podchwytliwe, ale kluczem\njest wiedza, gdzie występował planista O(1). Był używany w jądrze Linuksa od wersji 2.6.0 do 2.6.22,\nsam w sobie bazuje na oryginalnym planiście systemu Unix, ale nigdy nie występował w tamtym\nsystemie.\n• Kolejka procesów czekających na przydział procesora (gotowych do wykonania) ma wskaźniki na\ndwie tablice priorytetów: tablicę priorytetów aktywnych i tablicę priorytetów przeterminowanych.\n• Planista O(1) dla każdego CPU w systemie tworzy kolejkę procesów czekających na przydział\nprocesora (gotowych do wykonania).\n• Zwykłe procesy otrzymują priorytety od 100 (najwyższy) do 139 (najniższy). Interaktywność wpływa\nna priorytet. Priorytety mało interaktywnych procesów są zmniejszane o +5, a priorytety bardziej\ninteraktywnych podnoszone o −5. Im więcej proces oczekuje (względem faktycznego korzystania z\nCPU), tym bardziej jest interaktywny.\n• Im wyższy priorytet statyczny (czyli im niższa liczba - poziom uprzejmości od -20 do 19, domyślnie 0)\ntym dłuższy kwant czasu otrzymuje procesor. Oprócz tego jest też priorytet dynamiczny (dodawany\ndo statycznego, ustalany po każdej rundzie szeregowania). Tu również procesy interaktywne\notrzymują dłuższe kwanty czasu."
                },
                {
                    "id": "so-m1-012",
                    "type": "yn",
                    "question": "Określ, które informacje o planiście CFS są prawdziwe:",
                    "options": [
                        "priorytety procesów są prawie niezmienne.",
                        "klasa szeregowania SCHED_BATCH jest obsługiwana za pomocą algorytmu rotacyjnego.",
                        "waga procesu jest odwrotnością wartości jego priorytetu.",
                        "zegar wirtualny jest wprost implementowany w jądrze Linuksa.",
                        "kolejka procesów gotowych jest zrealizowana w postaci drzewa czerwono-czarnego."
                    ],
                    "correctAnswers": [
                        0,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• Priorytety procesów od czasu wprowadzenia mechanizmu CFS stały się prawie niezmienne. Służą one\ndo określenia tak zwanej wagi procesu.\n• SCHED_BATCH jest to klasa procesów niskopriorytetowych ograniczonych przez procesor, które\nobsługiwane są przez planistę CFS.\n• Waga dla domyślnego priorytetu (poziom uprzejmości 0) wynosi 1024. Wagi procesów o wyższych\npriorytetach są wyliczone poprzez mnożenie tej wartości przez kolejne potęgi liczby 1,25. Wagi\nprocesów o niższych priorytetach są wyliczone poprzez dzielenie tej wartości przez kolejne potęgi\nliczby 1,25.\n• Zegar wirtualny, który jest jednym z elementów wyznaczających czas, przez który proces bieżący\nkorzystał z procesora nie został wprost zaimplementowany w jądrze Linuksa.\n• Kolejka procesów gotowych, w przypadku planisty CFS, jest zaimplementowana w postaci drzewa\nczerwono-czarnego. Jest to rodzaj wyważonego drzewa BST, w którym każdy węzeł ma dodatkową\ncechę nazywaną kolorem."
                },
                {
                    "id": "so-m1-013",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące obsługi przestrzeni adresowej procesu w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "wszystkie wątki jądra korzystają z jednego, wspólnego dla nich deskryptora pamięci.",
                        "obiekty zawierające informacje o obszarach pamięci są umieszczone jednocześnie w dwóch różnych",
                        "sekcje tekstu tworzone są nie tylko dla procesów, ale również dla bibliotek współdzielonych.",
                        "deskryptor pamięci przechowuje adres startowy i końcowy obszaru argumentów wywołania programu.",
                        "deskryptory pamięci nigdy nie są współdzielone przez procesy (wątki) użytkownika."
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• Informacje na temat przestrzeni adresowej pojedynczego procesu przechowuje jego deskryptor\npamięci. Wątki jądra nie mają własnej przestrzeni adresowej i własnego deskryptora pamięci. Jednak\nrównież muszą odwoływać się do pamięci operacyjnej, aby móc wykonywać swoje zadania, dlatego\nteż korzystają z deskryptorów pamięci poprzednio zaszeregowanych procesów użytkownika.\n• Dwa pola deskryptora pamięci są związane z osobnymi strukturami danych, które przechowują tę\nsamą informację, ale w różny sposób. Pierwszym z nich jest pole mmap przechowujące adres listy\nzawierającej dane o wszystkich obszarach pamięci. Drugim jest pole mm_rb przechowujące adres\nkorzenia drzewa czerwono-czarnego, które zawiera te same dane co lista, ale oferuje krótszy czas ich\nwyszukiwania, niż lista. Za to listę prościej jest przeglądać sekwencyjnie.\n• Sekcje tekstu i sekcje danych tylko do odczytu mogą być współdzielone zarówno przez procesy, jak i\nbiblioteki współdzielone.\n• Deskryptor pamięci zawiera wiele pól, między innymi pola przechowujące początkowe i końcowe\nadresy sekcji tekstu, danych, stosu, obszaru pamięci przechowującego argumenty wiersza poleceń i\nobszaru pamięci przechowującego zmienne środowiskowe.\n• Wątki przestrzeni jądra, lub po prostu wątki jądra, nie mają swojej własnej przestrzeni adresowej,\nwspółdzielą ją z jądrem. W związku z tym nie mają również deskryptorów pamięci. Wartość pola mm\nw ich deskryptorach procesów wynosi null. Jednakże, aby się mogły wykonywać, wątki jądra muszą\nodwoływać się do pamięci. W tym celu korzystają z deskryptora pamięci procesu użytkownika, który\nkorzystał z CPU tuż przed nimi."
                },
                {
                    "id": "so-m1-016",
                    "type": "yn",
                    "question": "Czy twierdzenia odnonie wątków i procesw są prawdziwe?",
                    "options": [
                        "Za szeregowanie wątków odpowiada inny mechanizm ni za szeregowanie procesw",
                        "Kady wtek jądra posiada odrbn przestrzeń adresow",
                        "Makrodefinicja current pozwala na szybki dostp do deskryptora biecego procesu",
                        "Proces macierzysty, ktrego proces macierzysty się zakoczy przechodzi w stan TASK_ZOMBIE"
                    ],
                    "correctAnswers": [
                        2,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-027",
                    "type": "yn",
                    "question": "Plan przedsięwzięcia moe obejmowac",
                    "options": [
                        "kad i strukture zespou wytwarzajcego oprogramowanie?",
                        "sposb opracowania oferty przetargowej?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-028",
                    "type": "yn",
                    "question": "Dekorator/adapter",
                    "options": [
                        "maj taki sam interfejs jak obiekt tworzony?",
                        "dekorator . zoona?",
                        "adapter jest uniwersalny jeeli metody klasy bazowej są nieprzesonite? ??",
                        "Czy dekorator rozszerza funkfcje klasy bazowej?",
                        "Czy dekorator jest wzorcem czynnociowym?",
                        "Adapter uniwersalny czy jest realizowany przez dziedziczenie?"
                    ],
                    "correctAnswers": [
                        2,
                        3,
                        5
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-029",
                    "type": "yn",
                    "question": "Czy strategia minimalizacji przy zarzdzaniu zagroeniami",
                    "options": [
                        "zapobiega wystpieniu?",
                        "minimalizuje skutki zagroe?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-030",
                    "type": "yn",
                    "question": "Czy w agregacji cakowitej",
                    "options": [
                        "jeden obiekt zawiera się w drugim?",
                        "jeden obiekt moe istnie bez drugiego?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-031",
                    "type": "yn",
                    "question": "Czy + oznacza",
                    "options": [
                        "private?",
                        "public?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-032",
                    "type": "yn",
                    "question": "Czy do sterowania scentralizowanego naley",
                    "options": [
                        "model wywołanie-powrt?",
                        "model sterowania z przerwaniami?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-033",
                    "type": "yn",
                    "question": "Czy",
                    "options": [
                        "metoda zwinna jest programowaniem ekstremalnym i polega na cigym testowaniu?",
                        "porednik zdalny kolejkuje zadania?",
                        "diagram aktywnosci zawiera aktorow?",
                        "jeden scenariusz jest do jednego przypadku użycia?",
                        "iterator moze przechodzi po dowolnej kolekcji danych i przeprowadza operacje (dodawanie, usuwanie,pobranie aktualnej danej)?"
                    ],
                    "correctAnswers": [
                        0,
                        3,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-034",
                    "type": "yn",
                    "question": "Które ze zda dotyczcych kolejek prac są prawdziwe?",
                    "options": [
                        "Czynnoci odroczone wykonywane w ramach kolejek prac wykonywane są w kontekcie przerwania",
                        "Kolejki praczastpiy mechanizm dolnych połówek znany, jako kolejki zada, który być wykorzystywany we wczeniejszych jądra Linuksa",
                        "Mechanizm kolejek prac pozwala na okrelenie czasu po upywie, ktrego dana czynno moe się rozpocz",
                        "Jdro systemu linux zawiera specjaln funkcje, która pozwala na oprnienie domylnej kolejki prac",
                        "Jeli w jądrze tworzona jest nowa kolejka prac, to jest rwnoczenie dla niej tworzony nowy odrbny wtek roboczy"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        3,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m1-035",
                    "type": "yn",
                    "question": "Okrel które twierdzenia dotyczce zarzdzania czasem w Linuxie są prawdziwe? ;",
                    "options": [
                        "Staa HZ dla architektury i386 wynosi 1000.",
                        "Zawarto zegara czasu rzeczywistego jest odczytywana przez jądro co pewien okrelony przedział czasu",
                        "Zmienna ijffies jest naoona na starsze 32 bity zmiennej ijffies_64.",
                        "Liczniki dynamiczne ze wzgldu na zbyt ma precyzj nie mogą być wykorzystywane w zadaniach czasu rzeczywistego",
                        "Listy licznikw nie są przez system sortowane."
                    ],
                    "correctAnswers": [
                        0,
                        4
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "so-m2",
            "name": "SO: Moduł 2 — Zarządzanie pamięcią",
            "questions": [
                {
                    "id": "so-m2-001",
                    "type": "yn",
                    "question": "Które ze zdań dotyczących kolejek prac są prawdziwe?",
                    "options": [
                        "Czynności odroczone wykonywane w ramach kolejek prac są wykonywane w kontekście",
                        "Kolejki prac zastąpiły mechanizm dolnych połówek znany jako „kolejki zadań”, który był",
                        "Mechanizm kolejek prac pozwala na określenie czasu po upływie którego dana czynność może się",
                        "Jądro systemu Linux zawiera specjalną funkcję, której wywołanie pozwala na opróżnienie",
                        "Jeśli w jądrze tworzona jest nowa kolejka prac, to jest równocześnie dla niej tworzony nowy"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        3,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** przerwania Dzięki  tym mechanizmom czynności  czasochłonne nie są wykonywane bezpośrednio w procedurze obsługi  przerwania,  ale są odraczane do czasu kiedy system będzie mniej  obciążony  (najczęściej  zaraz po odblokowaniu przerwań).  (Wykład 7)\n• **Opcja b) (TAK):** wykorzystywany we wcześniejszych wersjach jądra Linuksa W jądrze Linuksa w wersji 2.6  istnieją cztery mechanizmy będące częściami  systemu dolnych połówek:  przerwania programowe  i tasklety, które wyparły mechanizm BH5  oraz kolejki  prac (ang.  work queue), które wyparły kolejki zadań (ang. task queue). (Wykład 7) - Przerwania programowe i tasklety wyparły mechanizm BH (dolnych połówek) - Kolejki prac wyparły kolejki zadań\n• **Opcja c) (TAK):** rozpocząć Istnieje również mechanizm liczników, które pozwalają odroczyć czynności na określony czas, ale ich opis  zostanie przełożony na później.  (…) Dolne  połówki  gwarantują  przełożenie wykonania  złożonych czynności  związanych z obsługą przerwania na później, ale nie określają kiedy dokładnie to wykonanie nastąpi  (…) Niektóre mechanizmy dolnych połówek pozwalają określić po jakim czasie powinny być wykonane zlecone im czynności, ale nie gwarantują dokładności.\n• **Opcja d) (TAK):** domyślnej kolejki prac Czasem  konieczne  może   się   okazać  wymuszenie   opróżnienia  domyślnej kolejki prac. Dokonujemy tego za pomocą funkcji  flush_scheduled_work().  (Wykład 7)\n• **Opcja e) (TAK):** odrębny wątek roboczy Nowe kolejki prac tworzone są za pomocą create_workqueue(). Dla każdej utworzonej w ten sposób kolejki tworzony jest również osobny wątek roboczy. (Wykład 7) Systemy Operacyjne 2 – A. Chrobot"
                },
                {
                    "id": "so-m2-002",
                    "type": "yn",
                    "question": "Określ które twierdzenia dot. zażądania czasem w Linkusie są prawdziwe?",
                    "options": [
                        "Stała HZ dla architektury i386 wynosi 1000",
                        "Zawartość zegara czasu rzeczywistego jest odczytywana przez jądro co pewien określony przedział",
                        "Zmienna jiffies jest nałożona na starsze 32 bity zmiennej „jiffies_64”",
                        "Liczniki dynam. ze względu na zbyt mała precyzje nie mogą być wykorzystywane w zadaniach",
                        "Listy liczników nie są przez system sortowane"
                    ],
                    "correctAnswers": [
                        0,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja b) (NIE):** czasu Jądro obsługuje również mechanizm zegara czasu rzeczywistego (RTC) z którego pracy korzystają  głównie aplikacje użytkowników. Zegar ten przechowuje i aktualizuje informacje o bieżącej dacie i godzinie. Jego zawartość jest odczytywana i umieszczana w zmiennej  xtime podczas rozruchu systemu. Jądro nie odczytuje już więcej zawartości zegara czasu rzeczywistego, ale samo aktualizuje zawartość tej zmiennej i ewentualnie może  aktualizować zawartość samego RTC. (Wykład 9)\n• **Opcja c) (NIE):** Kiedy od jądra 2.4 zaczęto stosować stałą HZ=1000, to okres ten skrócił się do 49,7 dnia,  dlatego też twórcy jądra zastosowali rozwiązanie polegające na „nałożeniu” 32  – bitowej zmiennej jiffies na zmienną jiffies_64, która ma rozmiar 64 – bitów. Odwołanie się więc do zmiennej jiffies w architekturach 32 – bitowych daje wartość  jej  młodszego słowa ,  w architekturach 64 – bitowych  jej  pełną wartość.   (Wykład 9)\n• **Opcja d) (NIE):** czasu rzeczyw. Liczniki, zwane licznikami dynamicznymi lub licznikami jądra pozwalają opóźnić wykonanie określonych czynności o ustaloną ilość czasu począwszy od chwili bieżącej.  Nie  jest to mechanizm precyzyjny  i  mogą zdarzać się niedokładności  rzędu rozmiaru okresu,  więc nie powinny one być stosowa ne do zadań czasu rzeczywistego, niemniej  większości  przypadków nadają się one do zastosowania. (Wykład 9)\n• **Opcja e) (NIE):** Aby   uniknąć   sortowania   listy   liczników  i  kosztownego  przeglądania   jest   ona   podzielona na pięć grup, pod względem czasu po jakim trzeba będzie wywołać funkcje zgromadzonych na niej liczników. Wykład 9) Systemy Operacyjne 2 – A. Chrobot"
                },
                {
                    "id": "so-m2-003",
                    "type": "yn",
                    "question": "Brak pytania",
                    "options": [
                        "Zmienna typu „atomic_T” jest 32 bitowa.",
                        "Wszystkie architektury, które obsługuje Linux dostarczają rozkazów maszynowych realizujących",
                        "Rygle pętlowe mogą być stosowane we fragmentach kodu wykonywujących się w kontekście",
                        "Rygle R-W stosujemy w zagadnieniach typu problem czytelników i pisarzy, gdzie faworyzowani są",
                        "Zmienne sygnałowe są uproszczoną wersją semaforów."
                    ],
                    "correctAnswers": [
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** atomic_t, mimo, że zbudowany  jest na typie „int” ( 32 – bitowym) pozwala na przechowywanie wartości 24 -bitowych (3 bajty). (Wykład 8)\n• **Opcja b) (NIE):** operacje niepodzielne na wartościach będących liczbami całkowitymi. Oprócz operacji niepodzielnych na liczbach całkowitych jądro dostarcza funkcji realizujących niepo dzielne operacje na pojedynczych bitach. (Wykład 8)\n• **Opcja c) (TAK):** przerwania. Rygle pętlowe mogą być używane w procedurach obsługi  przerwań,  ale  tylko wraz z wyłączeniem  lokalnego systemu przerwań,  aby uniknąć  zakleszczeń.  (Wykład 8)\n• **Opcja d) (NIE):** pisarze. Jeśli problem, który chcemy rozwiązać sprowadza się do problemu pisarzy i czytelników, a ściślej do wersji tego problemu, gdzie faworyzowani są czytelnicy, to możemy zastosować rygle pętlowe R-W.\n• **Opcja e) (NIE):** Zmienne sygnałowe służą do synchronizacji pracy zadań i są uproszczoną wersją semaforów.  (Wykład 8)"
                },
                {
                    "id": "so-m2-005",
                    "type": "yn",
                    "question": "Zmienna typu „atomic_T” jest 32 bitowa. |    tak",
                    "options": [
                        "Wszystkie architektury, które obsługuje Linux dostarczają rozkazów maszynowych realizujących operacje niepodzielne na wartościach będących liczbami całkowitymi",
                        "Rygle pętlowe mogą być stosowane we fragmentach kodu wykonywujących się w kontekście przerwania.",
                        "Rygle R-W stosujemy w zagadnieniach typu problem czytelników i pisarzy, gdzie faworyzowani są pisarze",
                        "Zmienne sygnałowe są uproszczoną wersją semaforów."
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-008",
                    "type": "yn",
                    "question": "Które stwierdzenia są prawidłowe?",
                    "options": [
                        "Programista jądra powinien się posługiwać zmienną printf.",
                        "Programista powinien zwracać uwagę na rozmiar stosu jądra.",
                        "Programista jądra powinien uzywać funkcji rekurencyjnych.",
                        "Programista nie powinien uzywac funkcji goto.",
                        "Architektura NUMA jest obsługiwana od wersji jądra 2.6."
                    ],
                    "correctAnswers": [
                        1,
                        3,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• Ponieważ jądro systemu z definicji ma być wydajne pod względem wykorzystania pamięci i szybkości\ndziałania, to przeglądając kod źródłowy Linuksa możemy znaleźć wiele fragmentów, które łamią\nniektóre przyjęte kanony dobrze napisanego oprogramowania (jak choćby nieużywanie instrukcji\ngoto). Programiści jądra często używają osławionej instrukcji goto, zazwyczaj w celach optymalizacji\nefektywności lub obsługi wyjątków.\n• Linux obsługuje symetryczne przetwarzanie wieloprocesorowe (SMP) oraz architekturę NUMA, co\nnie jest cechą wszystkich Uniksów. Wsparcie dla NUMA jest od wersji 2.6 jądra.\n• Częstotliwość zegara systemowego jest określana przez stałą HZ. Okres zegara jest odwrotnością tej\nstałej. Jej wartość, w przypadku większości platform obsługiwanych przez Linuksa, wynosi 100. Do\nwyjątków zaliczają się komputery bazujące na procesorach x86. W ich przypadku ta stała także miała\nwartość 100 (okres 10ms), ale w serii 2.4 jądra zmieniono ją na 1000 (okres 1ms), aby zaspokoić\npotrzeby multimedialnego oprogramowania użytkowego. Dla architektury i386 stała HZ również\nwynosi 1000.\n• Rozdzielczość liczników czasu niskiej rozdzielczości jest rzędu okresu zegara systemowego, a więc\nzgodnie z częstotliwością określaną przez stałą HZ, opiera się na wartościach mikrosekund.\n• Aplikacje użytkowe zakładają, że wartość stałej HZ jest równa 100. Jest to prawdą dla większości\nplatform sprzętowych, z pewnymi wyjątkami, takimi jak komputery bazujące na procesorach x86 lub\nDEC Alpha. Z powodu takich systemów komputerowych programiści jądra zdefiniowali odrębną stałą\no nazwie USER_HZ, której wartość określa częstotliwość zegara systemowego oczekiwaną przez\naplikacje użytkownika. Ale prawdziwa stała HZ jest zależy od architektury sprzętowej i niezmienna\ndla użytkownika."
                },
                {
                    "id": "so-m2-009",
                    "type": "yn",
                    "question": "Które ze zdań dotyczące kolejek prac są  prawidłowe",
                    "options": [
                        "Czynności odroczone wykonywane w ramach kolejek prac są wykonywane w kontekście przerwania",
                        "Kolejki prac zastąpiły mechanizm dolnych połówek znany jako „kolejki zadań”, który był wykorzystywany we wcześniejszych wersjach jądra Linuksa",
                        "Mechanizm kolejek prac pozwala na określenie czasu po upływie którego dana czynność może się rozpocząć",
                        "Jadro systemu Linuks zawiera specjalna funkcje której wywołanie pozwala na opóźnienie domyślniej kolejki prac",
                        "Jeśli w jądrze tworzona jest nowa kolejka prac, to równocześnie dla niej tworzony nowy odrębny wątek roboczy"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        3,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-010",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące dolnych połówek w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "całkowita liczba przerwań programowych jest ograniczona.",
                        "przerwania programowe są wykonywane w kontekście procesu.",
                        "tasklety są wykonywane w kontekście procesu.",
                        "czynności z kolejek prac są wykonywane w kontekście przerwania.",
                        "można precyzyjne określić czas, po którym przerwanie programowe powinno być wykonane."
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": "Wyjaśnienia:\n• Przerwania programowe są statycznie deklarowane, co oznacza, że nie mogą być używane w\nmodułach jądra. Ich liczba jest ograniczona do 32.\n• Wszystkie przerwania programowe są wykonywane w kontekście przerwania.\n• Tasklety są dolnymi połówkami wykonywanymi w kontekście przerwania i dostępnymi z poziomu\nmodułu jądra.\n• Kolejki prac są implementacją dolnych połówek działającą w kontekście procesu.\n• Niektóre mechanizmy dolnych połówek pozwalają określić po jakim czasie powinny być wykonane\nzlecone im czynności, ale nie gwarantują dokładności."
                },
                {
                    "id": "so-m2-011",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące zarządzania pamięcią w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "Linux obsługuje systemy wieloprocesorowe o organizacji NUMA.",
                        "domyślnie Linux przydziela pamięć ze strefy DMA (ZONE_DMA).",
                        "podstawowym mechanizmem sprzętowym wykorzystywanym przez Linuksa do obsługi pamięci jest",
                        "nie we wszystkich platformach sprzętowych musi występować strefa pamięci wysokiej",
                        "niskopoziomowy mechanizm obsługi pamięci umożliwia przydzielenie obszaru pamięci o wielkości"
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• Linux obsługuje systemy wieloprocesorowe bazujące na architekturach NUMA i SMP.\n• Jądro, jeśli nie jest to określone w wywołaniu alokatora, przydziela domyślnie pamięć ze strefy\nZONE_NORMAL, chyba że nie ma tam już wolnych stron. Wówczas strony są przydzielane z dowolnej\nz pozostałych stref. Strefa ZONE_DMA zawiera strony używane do transmisji DMA przez urządzenia\nbazujące na magistrali ISA, które mogą korzystać jedynie z pierwszych 16MiB RAM (ta magistrala jest\n24-bitowa). Dodatkowo ten obszar pamięci musi być fizycznie ciągły, bo te urządzenia nie używają\npamięci wirtualnej. Strefa ta istnieje tylko z przyczyn historycznych.\n• Główna gałąź jądra używa stronicowania jako podstawowego systemu zarządzania pamięcią, bo jest\nono dostępne na większości przez nie obsługiwanych platform sprzętowych.\n• ZONE_HIGHMEM – strefa grupująca strony w wysokiej pamięci (dla 32­bitowych procesorów rodziny\nx86 jest to pamięć fizyczna powyżej 896MB, na innych może nie występować). Platformy 64-bitowe\nzazwyczaj używają stref ZONE_DMA, ZONE_NORMAL i ZONE_DMA32. Współcześnie nie ma potrzeby\nstosowania strefy ZONE_HIGHMEM w takich platformach sprzętowych.\n• Jądro Linuksa ma niskopoziomowy alokator pamięci, nazywany alokatorem strefowym,\nprzydzielający pamięć fizycznie ciągłymi obszarami, których rozmiar stanowi wielokrotność\nrozmiaru strony wyrażoną potęgą dwójki. Rozmiar strony zazwyczaj ma 4096 bajtów."
                },
                {
                    "id": "so-m2-012",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące obsługi urządzeń znakowych i blokowych w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "urządzenia obsługiwane przez Linuksa są wyłącznie urządzeniami fizycznymi.",
                        "w komputerach klasy PC kontroler jest zawsze częścią struktury sprzętowej łączącej szynę wejścia-",
                        "rejestr może pełnić więcej niż jedną funkcję.",
                        "numer główny identyfikuje sterownik obsługujący urządzenie lub grupę urządzeń.",
                        "urządzenia znakowe adresują dane sekwencyjnie."
                    ],
                    "correctAnswers": [
                        2,
                        3,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• Jednym z zadań Wirtualnego Systemu Plików jest obsługa urządzeń wejścia-wyjścia. Słowo\n„urządzenie” w tym kontekście nie musi koniecznie oznaczać fizyczny sprzęt. Może to być także\nwirtualne urządzenie nazywane także pseudo-urządzeniem.\n• Każde urządzenie jest połączone z komputerem poprzez szyny wejścia-wyjścia mające trzy składowe\nsię: magistralę danych, sterującą i adresową. Procesory rodziny Pentium wykorzystują 16 lub 32 linie\nszyny adresowej i 8, 16, 32 lub 64 linie magistrali danych. Szyna nie jest bezpośrednio połączona z\nurządzeniem, ale poprzez odpowiednią strukturę sprzętową składającą się z maksymalnie trzech\nkomponentów: portów wejścia-wyjścia, interfejsu i/lub kontrolera.\n• Niekiedy pojedynczy rejestr może pełnić dwie funkcje, jak ma to miejsce w przypadku klawiatury,\ngdzie rejestr stanu jest jednocześnie rejestrem sterującym, a rejestr wejściowy pełni rolę rejestru\nwyjściowego.\n• Numer główny identyfikuje sterownik odpowiedzialny w jądrze za obsługę rodziny urządzeń (np.\ndrukarek). Numer poboczny określa konkretne urządzenie obsługiwane przez ten sterownik.\n• Urządzenia znakowe adresują dane (zazwyczaj) sekwencyjnie i mogą je przesyłać względnie małymi\nporcjami, np. o rozmiarze kilku bajtów. Rozmiar ten może być inny dla każdej transmisji. Przykładem\ntakich urządzeń są mysz i klawiatura."
                },
                {
                    "id": "so-m2-013",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące warstwy operacji blokowych w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "wielkość bloku w Linuksie jest nieograniczona.",
                        "każdy bufor zawsze jest związany z blokiem na nośniku danych.",
                        "bufory są wykorzystywane wyłącznie do przechowywania danych odczytanych z nośnika urządzenia",
                        "każdy z buforów wyposażony jest w nagłówek zawierający dane niezbędne do zarządzania nim.",
                        "nagłówek bufora nie przechowuje informacji o operacjach wejścia-wyjścia z jakimi ten bufor jest"
                    ],
                    "correctAnswers": [
                        1,
                        3,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• Urządzenia blokowe przechowują dane w sektorach, które najczęściej mają wielkość 512 bajtów\n(choć nie jest to regułą). Sektor jest równocześnie najmniejszą jednostką danych urządzenia\nblokowego, którą można zaadresować. Pojedyncza operacja wejścia-wyjścia może obejmować jeden\nlub większą liczbę sektorów. Większość systemów operacyjnych nie posługuje się bezpośrednio\nsektorami, ale łączy je w zazwyczaj większe jednostki zwane blokami. Rozmiar bloku jest parzystą\nwielokrotnością rozmiaru sektora. W systemie Linux przyjęto, celem uproszczenia kodu jądra, że\nbloki będą miały wielkość mniejszą lub równą jednej stronie.\n• Bloki na dane pochodzące z odczytu lub zawierające dane do zapisu na urządzeniu blokowym są\numieszczone w pamięci operacyjnej, w buforach.\n• Bloki na dane pochodzące z odczytu lub zawierające dane do zapisu na urządzeniu blokowym są\numieszczone w pamięci operacyjnej, w buforach.\n• Każdy z buforów wyposażony jest w nagłówek, określony strukturą typu struct buffer_head,\nprzechowujący dane niezbędne do prawidłowego zarządzania buforem.\n• Nagłówek bufora w wersjach jądra systemu wcześniejszych niż 2.6 przechowywał również informacje\ndotyczące operacji I/O, w których uczestniczył bufor. Taka sytuacja powodowała niską efektywność\ntych operacji, gdyż pojedynczy zapis lub odczyt z urządzenia wymagał posłużenia się kilkoma\nnagłówkami. Dodatkowo rozmiar nagłówka był porównywalny z rozmiarem bufora, który opisywał.\nW nowszych wersjach jądra postanowiono więc „odchudzić” nagłówek bufora i stworzyć nową\nstrukturę, o nazwie BIO, która osobno przechowuje dane związane z operacjami wejścia-wyjścia."
                },
                {
                    "id": "so-m2-014",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące obsługi sieci w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "jądro wykonuje czynności związane z obsługą warstwy łącza, sieci i transportowej modelu ISO/OSI.",
                        "NAPI nigdy nie pozwala na sygnalizowanie odbioru pakietu za pomocą przerwania.",
                        "przenoszenie bufora pakietu między kolejkami jest czasochłonne.",
                        "funkcje związane z filtrem sieciowym mogą \"wykradać\" niektóre pakiety, aby przetworzyć je w inny",
                        "w filtrze sieciowym, z pojedynczym uchwytem nie może być skojarzona więcej niż jedna funkcja"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• Podsystem jądra Linuksa odpowiedzialny za komunikację sieciową składa się z trzech części, które\nodpowiadają trzem warstwom modelu ISO/OSI — warstwie łącza danych, warstwie sieciowej i\nwarstwie transportowej.\n• We wczesnych wersjach sterowników urządzeń sieciowych odebranie każdego pakietu było\nsygnalizowane przerwaniem. Prowadziło to do dużego obciążenia systemu w przypadku dużego\nruchu sieciowego. Dlatego w wersjach 2.5/2.6 jądra wprowadzono nowe API dla sterowników takich\nurządzeń, które określono mianem NAPI (New API). Umożliwia ono przełączenie urządzenia w tryb\nprzeglądania (ang. polling), co pozwala mu zakumulować większą liczbę pakietów, które w\npóźniejszym terminie zostaną przetworzone przez jądro. Dzięki temu spada liczba generowanych\nprzez nie przerwań i tym samym obciążenie systemu. NAPI nie pozwala na sygnalizowanie odbioru\npakietu za pomocą przerwania.\n• Bufor pakietu jest tak zaprojektowany, aby mógł być efektywnie przenoszony między kolejkami. Jeśli\nzachodzi potrzeba skopiowania go, to wystarczy tylko powielić jego nagłówek, który ma trzy pola\nwskazujące na prywatne nagłówki przechowujące metadane związane z trzema warstwami modelu\nISO/OSI.\n• Funkcja NF_STOLEN „wykrada” pakiet, co oznacza, że będzie on przetwarzany w inny sposób niż\npozostałe pakiety.\n• Pole list struktury nf_hook_ops służy do łączenia takich struktur w listę, co umożliwia skojarzenie z\njednym uchwytem kilku funkcji przetwarzających."
                },
                {
                    "id": "so-m2-015",
                    "type": "yn",
                    "question": "Pytania INNE:",
                    "options": [
                        "Algorytm noop realizuje tylko operacje scalania.",
                        "Alokator plastrowy przechowuje własne struktury w pamięci dedykowanej.",
                        "Alokator plastrowy przydziela pamięć na deskryptor.",
                        "Alokator plastrowy przydziela w pierwszej kolejności pamięć z plastrów pustych.",
                        "Argumenty wywołań systemowych są przekazywane tylko przez rejestry programowe."
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• Czwarty mechanizm szeregowania żądań I/O jest bardzo prosty w działaniu – realizuje wyłącznie\noperację scalania. Ten planista nosi nazwę noop od angielskiego słowa no-operations.\n• W Linuksie alokator plastrowy tworzy pamięci podręczne (bufory) dwóch rodzajów: ogólne i\ndedykowane. Z pamięci ogólnych korzysta on sam, z dedykowanych – pozostałe części jądra.\n• Systemy operacyjne przechowują wszystkie informacje o każdym pojedynczym procesie w\ndeskryptorze procesu. W przypadku Linuksa jest to struktura typu struct task_struct zdefiniowana w\npliku nagłówkowym linux/sched.h. Pamięć na takie struktury jest przydzielana przez alokator\nplastrowy.\n• Obiekty są przydzielane z plastrów częściowo zajętych. Jeśli ich nie ma, to z plastrów pustych.\n• Argumenty wywołania systemowego  przekazywane są do system_call() za pomocą rejestrów ebx,\necx, edx, esi i edi."
                },
                {
                    "id": "so-m2-016",
                    "type": "yn",
                    "question": "Planowanie projektu",
                    "options": [
                        "obejmuje skad i struktur osob tworzcych program?",
                        "obejmuje koszty projektu"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-017",
                    "type": "yn",
                    "question": "Czy przy testowaniu programw obiektowych",
                    "options": [
                        "testowanie jednostkowe ogranicza się do testowania metod klasy?",
                        "wykonuje sie testy integralnoci?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-018",
                    "type": "yn",
                    "question": "Model maszyny abstrakcyjnej",
                    "options": [
                        "to model warstwowy?",
                        "uatwia przyrostowe tworzenie oprogramowania?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-019",
                    "type": "yn",
                    "question": "Kontrole",
                    "options": [
                        "Czy kontrole są metodami statycznymi v&v?",
                        "Czy automatyczna analiza statyczna zawsze wskazuje dokadne miejsce usterki?",
                        "Czy kontrole pozwalaj wykry wiele defektw podczas sesji?",
                        "Czy cakowicie eliminuj konieczno przeprowadzenia testw?",
                        "Nie pozwalaj okreli cech dynamicznych testowanego programowania?",
                        "Czy podczas kontroli można znale wiele bdw?"
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        4,
                        5
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-020",
                    "type": "yn",
                    "question": "Czy Abstract Factory",
                    "options": [
                        "zwraca obiekty klas strukturalnie podobne?",
                        "ukrywa tworzone typy klas przed klientem? ??"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-021",
                    "type": "yn",
                    "question": "Model kaskadowy",
                    "options": [
                        "pozwala atwo i maym nakadem pracy wprowadzi do projektu zmiany?",
                        "jest oparty na dowiadczeniu z innych dziedzin inynierii?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-022",
                    "type": "yn",
                    "question": "Projektowanie oglne",
                    "options": [
                        "czy tworzy się wstpujco?",
                        "czy pozwala przedstawić projektantom zarys systemu?",
                        "czy dostarcza informacji o oglnej architekturze systemu?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-023",
                    "type": "yn",
                    "question": "Model interaktywny",
                    "options": [
                        "punkt widzenia zewntrzny?",
                        "zwiazany ze zrebem programu?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-024",
                    "type": "yn",
                    "question": "Efektywno",
                    "options": [
                        "osiga się przez mao gruboziarnistych klas?",
                        "osiga się przez duo drobnoziarnistych klas?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-025",
                    "type": "yn",
                    "question": "Zoono cykliczna",
                    "options": [
                        "czy jest tyle cieek ile instrukcji warunkowych?",
                        "czy moze byc zamodelowana graficznie?",
                        "jest rowna liczbie warunkow prostych umieszczonych w testowanym kodzie?",
                        "pozwala okreli liczbe niezalenych sciezek wykonania?"
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-026",
                    "type": "yn",
                    "question": "Czy testowanie wstpujce",
                    "options": [
                        "jest typem testowania integracyjnego?",
                        "umoliwia okrelenie projektu architektonicznego we wczesnej fazie?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-027",
                    "type": "yn",
                    "question": "Narzdzia automatycznej analizy statycznej",
                    "options": [
                        "przeprowadzaj analize przepywu sterowania w programie?",
                        "zawsze wskazuja miejsce usterki w kodzie?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-028",
                    "type": "yn",
                    "question": "Czy dekorator i proxy",
                    "options": [
                        "maj identyczne interfejsy jak obiekt obudowywany?",
                        "kontroluj obudowywany obiekt?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-029",
                    "type": "yn",
                    "question": "Fasada",
                    "options": [
                        "warstwowe ograniczenie dostpu? ??",
                        "reprezentuje zoony system?",
                        "ukrywa cz systemu?"
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-030",
                    "type": "yn",
                    "question": "Czy punktem widzenia jest",
                    "options": [
                        "rdo lub przeznaczenie danych?",
                        "co na temat pomiarw"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-031",
                    "type": "yn",
                    "question": "Czy element static na diagramie UML oznacza się przez",
                    "options": [
                        "podkrelenie?",
                        "pogrubienie?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-032",
                    "type": "yn",
                    "question": "Czy typem w tworzeniu ewolucyjnym",
                    "options": [
                        "jest tworzenie badawcze?",
                        "jest tworzenie z porzuceniem?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-033",
                    "type": "yn",
                    "question": "Inne:",
                    "options": [
                        "Testowanie wstpujce w kocowej fazie?",
                        "Minimalizacja strat agodzi skutki?",
                        "Kontroler znajduje w programach bdy pominicia i niespjnoci? TAK (IP_lec_4 są.17)",
                        "Punkty widzenia? -> KOCOWI UYTKOWNICY?",
                        "Porednik wirtualny przechowuje w pamięci podrcznej informacje o przedmiotach?",
                        "Porednik ochraniajcy sprawdza czy wywołujący ma pozwolenie na dostp?",
                        "Czy obserwator weryfikuje obserwatorw?",
                        "obserwujcy nie moe ->"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m2-034",
                    "type": "yn",
                    "question": "Które za zda dotyczcych kolejek prac są prawdziwe? ;",
                    "options": [
                        "Czynnoci odroczone wykonywane w ramach kolejek prac są wykonywane w kontekcie przerwania",
                        "Kolejki prac zastpiy mechanizm dolnych połówek znany jako kolejki zada, który być wykorzystywany we wczeniejszych wersjach jądra Linuksa.",
                        "Mechanizm kolejek prac pozwala na okrelenie czasu po upywie ktrego dana czynno moe się  rozpocz",
                        "Jdro systemu Loniux zawiera specjaln funkcj, której wywołanie pozwala na oprnienie  domylnej kolejki prac",
                        "Jeli w jądrze tworzona jest nowa kolejka prac, to jest rwnoczenie dla niej tworzony nowy, odrbny wtek roboczy."
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        3,
                        4
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "so-m3",
            "name": "SO: Moduł 3 — Obsługa przerwań i synchronizacja",
            "questions": [
                {
                    "id": "so-m3-001",
                    "type": "yn",
                    "question": "Które z twierdzeń dotyczących obsługi przerwań w Linuxie 2.6 są prawdziwe?",
                    "options": [
                        "Obsługa przerwań jest podzielona na górną połówkę i dolną połówkę",
                        "Procedury obsługi przerwań mogą być wykonywane dowolnie długo",
                        "Do linii przerwania o określonym numerze może być przypisanych kilka procedur obsługi przerwań",
                        "W procedurach obsługi przerwań można wywołać funkcje, które ulegają blokowaniu",
                        "Procedury obsługi przerwań korzystają ze stosu jądra, który ma nieograniczony rozmiar"
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** Z tego powodu kod obsługi przerwań jest podzielony na dwie części  zwane  górną  połówką  i  dolną  połówką.(Wykład 5)\n• **Opcja b) (NIE):** Procedura obsługi  przerwania  wywoływana jest w sposób asynchroniczny i dlatego ważnym jest, aby jej wykonanie zostało zakończone w jak najkrótszym czasie (Wykład 5)\n• **Opcja c) (NIE):** SA_SHIRQ – określa możliwość współdzielenia linii przerwania z innymi procedurami obsługi przerwań  (Wykład 5)\n• **Opcja d) (NIE):** Procedury obsługi  przerwań są wywoływane w kontekście przerwania,  co oznacza,  że nie  są dozwolone w nich wywołania funkcji  blokujących oraz nie  jest ważna wartość  (ang.   invalid)  zwracana przez makrodefinicję  current. (Wykład 5)\n• **Opcja e) (NIE):** Procedury obsługi  przerwania muszą wykonywać  się  szybko,  aby nie blokować  kolejnych zgłoszeń  przerwania  na   tej samej   linii.  Korzystają  one  ze  stosu  jądra,  który  jest  ograniczony  do  8KB w 32 –  bitowych  architekturach PC  i  do 16KB w 64  – bitowych architekturach Alpha. (Wykład 5) Systemy Operacyjne 2 – A. Chrobot"
                },
                {
                    "id": "so-m3-002",
                    "type": "yn",
                    "question": "Które z poniższych twierdzeń dotyczących środków synchronizacji w jądrze Linuksa 2.6 są prawdziwe?",
                    "options": [
                        "Wątek wykonania, który przetrzymuje semafor nie może równocześnie przetrzymywać rygla",
                        "Blokady sekwencyjne pozwalają ustalić, czy operacja odczytu nie została przepleciona z operacją",
                        "Blokada BKL jest blokadą gruboziarnistą",
                        "Blokada BKL nie jest rekurencyjna",
                        "Rygle pętlowe nie są używane w systemach jednoprocesorowych w jądrze, które nie wywłaszcza"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** pętlowego Semafory nie mogą być przetrzymywane przez wątki, które już przetrzymują rygle pętlowe.  (Wykład 8)\n• **Opcja b) (TAK):** zapisu Blokady sekwencyjne w prosty sposób pozwalają określić czy operacja odczytu nie została przepleciona z operacją zapisu. (Wykład 8)\n• **Opcja c) (NIE):** Blokada BKL (ang. Big Kernel Lock)  miała  być   rozwiązaniem przejściowym ,  które miało być   zastąpione blokadami o mniejszej ziarnistości. (Wykład 8)\n• **Opcja d) (NIE):** Ponadto BKL jest rekurencyjna, wyłącza wywłaszczanie jądra i można  wykorzystywać ją jedynie w kontekście procesu. (Wykład 8)\n• **Opcja e) (TAK):** wątków Należy również pamiętać,  że rygle nie są rekurencyjne  i  nie są  stosowane w systemach jednoprocesorowych (kompilator wstawia w ich miejsce puste instrukcje lub jeśli podczas kompilacji włączona jest opcja wywłaszczania jądra  zastępuje je funkcjami włączającymi i wyłączającymi wywłaszczanie jądra, opisanymi niżej).  (Wykład 8)"
                },
                {
                    "id": "so-m3-003",
                    "type": "yn",
                    "question": "Poniżej umieszczono zdania dotyczące obsługi przerwań przez Linuksa 2.6. Które z nich są prawdziwe?",
                    "options": [
                        "Częstotliwości pojawiania się wszystkich przerwań są wykorzystywane do inicjalizowania",
                        "Numery przerwań mogą być przydzielane niektórym urządzeniom dynamicznie",
                        "Aby procedura obsługi przerwania mogła być wywołana, musi zostać wcześniej zarejestrowana",
                        "Procedury obsługi przerwania mogą korzystać z wartości zwracanej przez makrodefinicję „current”",
                        "Nie jest wymagane, aby funkcje obsługi przerwań były wielobieżne"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** generatora liczb losowych\n• **Opcja b) (NIE):** W komputerach  kompatybilnych z IBM PC część przerwań jest na stałe przypisana pewnym urządzeniom, a część – w szczególności dla tych urządzeń, które są podłączone z systemem  przez magistralę PCI     lub  nowsze  szyny,   takie  jak PCI - Express,  USB –  jest  przydzielana w  sposób dynamiczny. (Wykład 6)\n• **Opcja c) (NIE):** Każda procedura obsługi przerwania musi zostać zarejestrowana za pośrednictwem funkcji request_irq, która kojarzy funkcję z przerwaniem i uaktywnia daną linię (Wykład 6)\n• **Opcja d) (NIE):** Procedury obsługi przerwań  są wywoływane w kontekście przerwania, co oznacza, że nie są dozwolone w nich wywołania funkcji blokujących oraz nie jest poprawna (ang.   invalid)  wartość  zwracana przez makrodefinicję  current.  (Wykład 6)\n• **Opcja e) (NIE):** Funkcje obsługi przerwań są definiowane  według następującego prototypu (…) Nie wymaga się,  aby funkcje te były wielobieżne,  gdyż wywołanie funkcji powoduje zablokowanie linii z nią związanej. (Wykład 6) Systemy Operacyjne 2 – A. Chrobot"
                },
                {
                    "id": "so-m3-004",
                    "type": "yn",
                    "question": "Które ze zdań dotyczących synchronizacji są prawdziwe?",
                    "options": [
                        "Niektóre operacje niepodzielne mogą  być zrealizowane jako pojedyncze rozkazy procesora",
                        "Przeplot operacji jest przyczyną występowania problemu sekcji krytycznej",
                        "W system ie Linux w przestrzeni użytkownika wywłaszczenie procesu może zajść tylko w ściśle",
                        "Zadanie nigdy nie może być wywłaszczone po zakończeniu obsługi przerwania",
                        "Dostęp do zmiennych lokalnych wątków wykonania nie musi podlegać synchronizacji"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** Operacje niepodzielne (atomowe) na zmiennych prostych typów są zazwyczaj realizowane za pomocą instrukcji maszynowych właściwych dla architektury procesora. (Wykład 8)\n• **Opcja b) (NIE):** Sytuację gdy dla współbieżnie działających elementów aplikacji (wątków lub procesów) pewna operacja może być w danym momencie czasu wykonywana jedynie przez jeden z nich, nazywamy wzajemnym wykluczaniem. W przypadku gdy jakiś element wykonuje operację podlegającą wzajemnemu wykluczaniu (tzw. sekcję krytyczną ), inne elementy próbujące w tym samym czasie wykonywać tę operację muszą zostać zablokowane, aż do jej zakończenia przez pierwszy z nich.\n• **Opcja c) (NIE):** określonym momencie jego działania\n• **Opcja e) (NIE):** W przypadkach gdy trzeba chronić dane,  które są widziane przez  jeden procesor przed dostępem współbieżnym można zrezygnować z rygli  pętlowych i  zastosować zwykłe zablokowanie wywłaszczania."
                },
                {
                    "id": "so-m3-008",
                    "type": "yn",
                    "question": "Które z tw. dot. Obsługi przerwań w Linuksie 2.6 jest prawdziwe?",
                    "options": [
                        "Obsługa przerwań podzielona na górną i dolną połówkę",
                        "Procedury ob. Przerwań mogą być wykonywane dowolnie długo, (???)",
                        "Do linii przerwania o określonym numerze może być przypisanych kilka procedur obsługi przerwań  (???)",
                        "W procedurach obsługi przerwań można wywoływać funkcje, które ulegają blokowaniu",
                        "Procedury obsługi przerwań korzystają ze stosu jądra, który ma nieograniczony rozmiar"
                    ],
                    "correctAnswers": [
                        0,
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m3-015",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące obsługi przerwań w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "procedury obsługi przerwań w Linuksie są funkcjami napisanymi w języku C.",
                        "procedury obsługi przerwań są wykonywane w kontekście przerwania.",
                        "procedury obsługi przerwań są wywoływane w sposób asynchroniczny.",
                        "linie zgłaszania przerwań (IRQ) mogą być współdzielone.",
                        "niektóre przerwania mogą zasilać pulę entropii jądra."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• Kiedy procesor otrzymuje sygnał przerwania, to automatycznie przełącza się w tryb systemowy (o ile\njuż w nim nie był) i wykonuje zależny od jego architektury kod jądra, napisany w assemblerze, który\nodkłada na stos jądra procesu wartości rejestrów i przygotowuje środowisko do wykonania funkcji\nnapisanych w języku C. Tymi funkcjami są procedury obsługi przerwań.\n• Procedury obsługi przerwań w Linuksie wykonywane są w kontekście przerwania. Oznacza to, że ich\ndziałanie podlega kilku ograniczeniom. Przede wszystkim muszą one działać szybko, ponieważ\nobsługa przerwania może wstrzymywać inne istotne operacje w jądrze lub przestrzeni użytkownika.\nProcedura obsługi przerwania nie jest związana z żadnym procesem, w związku z tym nie może\nwywołać żadnych funkcji powodujących przejście procesu w stan oczekiwania.\n• Źródłem zdarzenia obsługiwanego przez jądro może być także urządzenia peryferyjne. Takie\nzdarzenia nazywane są przerwaniami i są asynchroniczne w stosunku do operacji wykonywanych\nprzez jądro. Oznacza to, że mogą one przerwać wykonywanie istotnych czynności, zatem muszą być\nszybko obsłużone. Z uwagi na to, kod jądra zajmujący się tym działaniem (tak zwana procedura\nobsługi przerwania) jest wykonywany w kontekście przerwania, który nie jest związany z żadnym\nprocesem użytkownika.\n• Współczesne urządzenia, używające takich magistral jak USB, PCI, PCI–Express potrzebują dużej\nliczby przerwań, które są przydzielane im dynamicznie (niektóre przerwania są przydzielane\nstatycznie z powodów historycznych). To oznacza, że wiele linii IRQ musi być współdzielone przez te\nurządzenia, co prowadzi do wielu problemów.\n• Współcześnie wszystkie przerwania wnoszą wkład do puli entropii, ale nie bezpośrednio. W ramach\nobsługi przerwania jądro odczytuje kilka wartości z różnych zasobów, które są dobrymi źródłami\nlosowości, jak np. niektóre rejestry CPU."
                },
                {
                    "id": "so-m3-016",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące środków synchronizacji w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "funkcje realizujące operacje niepodzielne na liczbach całkowitych działają na zmiennych typu \"int\".",
                        "niepodzielne operacje na bitach przeprowadzane są za pomocą tych samych funkcji co niepodzielne",
                        "rygle pętlowe wprowadzają wątki oczekujące na ich zwolnienie w stan aktywnego oczekiwania.",
                        "zwykły rygiel pętlowy może być przetrzymywany przez kilka wątków jednocześnie.",
                        "rygle pętlowe nie są używane w systemach jednoprocesorowych."
                    ],
                    "correctAnswers": [
                        2,
                        4
                    ],
                    "explanation": "Wyjaśnienia:\n• Aby ujednolicić i zapewnić atomowe operacje dla wszystkich obsługiwanych procesorów, programiści\njądra Linuksa stworzyli typ abstrakcyjny atomic_t. Zmienne tego typu przechowują liczby całkowite,\nzamiast int.\n• Jądro dostarcza osobnych funkcji i makrodefinicji realizujących niepodzielne operacje na\npojedynczych bitach. Makra i funkcje, które implementują niepodzielne operacje na bitach nie\nwymagają specjalnego typu danych.\n• Dany rygiel może przetrzymywać tylko jeden wątek wykonania (zasada wzajemnego wykluczania),\nnatomiast inne wątki chcące skorzystać z chronionego zasobu wykonują aktywne oczekiwanie, czyli\nw pętli oczekują, aż rygiel zostanie zwolniony i jeden z nich będzie mógł uzyskać dostęp do zasobu.\n• Jeśli wątek wykonania próbuje zająć zwykły rygiel pętlowy, który został wcześniej uzyskany przez\ninny wątek, to będzie musiał w pętli sprawdzać, czy ten rygiel został już zwolniony. Są również rygle\npętlowe R-W (ang. Reader–Writer Spin Locks lub R–W Spin Locks). Służą do rozwiązywania\npierwszego problemu czytelników i pisarzy, w którym czytelnicy mają priorytet. Ich API ma osobne\nfunkcje i makra dla wątków-pisarzy i dla wątków-czytelników. Rygiel pętlowy R-W może być zajęty\nprzez więcej niż jednego czytelnika lub nawet kilkukrotnie przez tego samego czytelnika (w tym\nwypadku rygiel R-W jest rekurencyjny).\n• Mimo, że rygle pętlowe są najczęściej używanym rodzajem blokad w kodzie źródłowym jądra\nLinuksa, to w jego wersji skompilowanej występują tylko dla systemów wieloprocesorowych."
                },
                {
                    "id": "so-m3-017",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące pomiaru i synchronizacji względem czasu w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "zegar czasu rzeczywistego (RTC) jest okresowo odczytywany przez jądro systemu.",
                        "liczbę taktów zegara od uruchomienia systemu przechowuje zmienna \"jiffies\".",
                        "częstotliwość zegara systemowego jest określona stałą \"HZ\".",
                        "implementacja procedury obsługi przerwania zegarowego jest całkowicie niezależna od sprzętu.",
                        "wartość stałej \"HZ\" jest taka sama dla wszystkich platform sprzętowych."
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• Zwykle informacja o bieżącym czasie jest dostarczana przez urządzenie sprzętowe, które jest\nodczytywane przez jądro w trakcie startu systemu, a potem tylko aktualizowana przez procedurę\nobsługi przerwania zegarowego.\n• Liczba przerwań zegarowych wygenerowanych od uruchomienia systemu komputerowego jest\nprzechowywana w 64-bitowej zmiennej jiffies.\n• Częstotliwość zegara systemowego jest określana przez stałą HZ (hertz).\n• W przypadku platform, które wymagają oszczędności energii, jak systemy wbudowane i laptopy,\njądro może zostać skonfigurowane w taki sposób, aby ignorowało stałą HZ i generowało zdarzenia\nczasowe tylko wtedy, gdy są one potrzebne.\n• Wartość stałej HZ w przypadku większości platform obsługiwanych przez Linuksa wynosi 100. Do\nwyjątków zaliczają się komputery bazujące na procesorach x86. W ich przypadku ta stała także miała\nwartość 100 (okres 10ms), ale w serii 2.4 jądra zmieniono ją na 1000 (okres 1ms), aby zaspokoić\npotrzeby multimedialnego oprogramowania użytkowego. Niestety, spowodowała ona także wzrost\nobciążenia CPU obsługą większej liczby przerwań zegarowych. Dodatkowo, opisywana zmiana\nspowodowała problemy z obsługą protokołu NTP (ang. Network Time Protocol). Ostatecznie wartość\nstałej HZ dla komputerów z procesorami x86 została ustalona na 250 (okres 4ms). Wymogi aplikacji\nmultimedialnych zostały spełnione przy użyciu liczników czasu wysokiej rozdzielczości."
                },
                {
                    "id": "so-m3-021",
                    "type": "yn",
                    "question": "Które z poniszych zda dotyczcych synchronizacji są prawdziwe?? (tu mogą się nie zgadza odpowiedzi)",
                    "options": [
                        "Niektre operacje niepodzielne mogą być zrealizowane jak jeden rozkaz",
                        "Przeplot operacji jest przyczyn wystpowania problemu sekcji krytycznej",
                        "W systemie linux, w przestrzeni uytkownika wywaszczenie procesu moe zaj tylko w cile okrelonym momencie jego dziaania",
                        "Zadanie nigdy nie moe być wywaszczone po zakoczeniu obsługi przerwania",
                        "Dostp do zmiennych lokalnych wątków nie musi podlega synchronizacji"
                    ],
                    "correctAnswers": [
                        0,
                        3,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m3-030",
                    "type": "yn",
                    "question": "Poniżej umieszczono zdania dotyczące obsługi przerwań przez Linuksa 2.6. Które z nich są prawdziwe? -Częstotliwości pojawiania się wszystkich przerwań są wykorzystywane do inicjalizowania generatora liczb losowych",
                    "options": [
                        "Numery przerwań mogą być przydzielane niektórym urządzeniom dynamicznie",
                        "Aby procedura obsługi przerwania mogła być wywołana, musi zostać wcześniej zarejestrowana",
                        "Procedury obsługi przerwania mogą korzystać z wartości zwracanej przez makrodefinicję current",
                        "Nie jest wymagane, aby procedury obsługi przerwań były wielobieżne"
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m3-035",
                    "type": "yn",
                    "question": "Okrel które twierdzenia dot. zadania czasem w Linkusie są prawdziwe?;",
                    "options": [
                        "Staa HZ dla architektury i386 wynosi 1000",
                        "Zawarto zegara czasu rzeczywistego jest odczytywana przez jądro co pewien okrelony przedział czasu",
                        "Zmienna jiffies jest naoona na starsze 32 bity zmiennej jiffies_64",
                        "Liczniki dynam. ze wzgldu na zbyt maa precyzje nie mogą być wykorzystywane w zadaniach czasu rzeczyw.",
                        "Listy licznikw nie są przez system sortowane"
                    ],
                    "correctAnswers": [
                        0,
                        4
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "so-m4",
            "name": "SO: Moduł 4 — Wywołania systemowe i architektura jądra",
            "questions": [
                {
                    "id": "so-m4-001",
                    "type": "yn",
                    "question": "Które ze stwierdzeń dotyczących wywołań systemowych w Linuksie 2.6 są prawdziwe?",
                    "options": [
                        "Dodawanie nowych wywołań systemowych nie jest zalecanym przez twórców jądra sposobem",
                        "Każde wywołanie systemowe zwraca wartość typu „long”",
                        "Każde wywołanie systemowe musi przyjmować co najmniej jeden argument wywołania",
                        "Wszystkie funkcje ze standardowej biblioteki języka C korzystają z wywołań systemowych",
                        "Funkcja realizująca wywołanie systemowe musi być w całości napisana w assemblerze"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** dodawania nowej funkcjonalności Dodanie do jądra nowych wywołań systemowych jest kuszącym pomysłem, jednakże wśród twórców jądra Linuksa panuje silna tendencja, aby t ego nie robić. Po dokładnych  rozważaniach można określić następującą listę wad i zalet tworzenia nowych wywołań jądra (Wykład 5)\n• **Opcja b) (NIE):** Każde wywołanie systemowe zwraca wartość typu long, która  stanowi kod błędu. Najczęściej poprawne zakończenie wywołania sygnalizowane jest wartością zero, a wykonanie błędne wartością ujemną.  (Wykład 5)\n• **Opcja c) (NIE):** Wywołania systemowe podobnie jak zwykłe funkcje mogą przyjmować pewną liczbę argumentów wywołania,  lub nie przyjmować ich w ogóle. (Wykład 5)\n• **Opcja e) (NIE):** Zadania  użytkownika nie  wywołują najczęściej bezpośrednio wywołań systemowych lecz robią to za pomocą podprogramów języka wysokiego poziomu. (Wykład 5) Systemy Operacyjne 2 – A. Chrobot"
                },
                {
                    "id": "so-m4-003",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące wywołań systemowych w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "wszystkie funkcje z biblioteki \"libc\" korzystają z wywołań systemowych.",
                        "wywołania systemowe mogą nie przyjmować żadnych argumentów.",
                        "każde wywołanie systemowe zwraca wartość stanowiącą kod jego wykonania.",
                        "zazwyczaj wywołania systemowe implementowane są w postaci funkcji napisanych w assemblerze.",
                        "dodanie do jądra nowego wywołania systemowego wymaga modyfikacji biblioteki \"libc\", aby umożliwić"
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• API Linuksa jest w większości zaimplementowane w standardowej bibliotece języka C, nazywanej w\nLinuksie glibc (libc w Uniksie). Niektóre z funkcji w niej dostępnych nie używają żadnych wywołań\nsystemowych, np. strcpy().\n• Wywołania systemowe podobnie jak zwykłe funkcje mogą przyjmować pewną liczbę argumentów,\nlub nie przyjmować ich w ogóle.\n• Każde wywołanie systemowe zwraca wartość typu long, która stanowi kod wykonania.\n• Wywołanie systemowe implementowane jest za pomocą funkcji napisanej w języku C.\n• W wersjach jądra od 2.6.18 wywołania systemowe uruchamia się funkcją syscall()."
                },
                {
                    "id": "so-m4-004",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące wirtualnego systemu plików (VFS) w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "VFS napisany jest w języku C++.",
                        "obiekt superbloku może być stosowany w obsłudze systemów plików, które nie mają fizycznej",
                        "obiekty i-węzłów związane są wyłącznie z fizycznymi plikami.",
                        "niektóre nieuniksowe systemy plików nie posiadają wszystkich informacji, które muszą być umieszczone",
                        "obiekty wpisów katalogowych mają swoje odpowiedniki na nośniku danych."
                    ],
                    "correctAnswers": [
                        1,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• VFS jest w całości zaimplementowany w języku C, ale oparty jest na modelu obiektowym.\n• Wszystkie dane o zamontowanym systemie plików są przechowywane w obiekcie superbloku.\nZazwyczaj odpowiadają one informacjom umieszczonym w superbloku systemu plików w urządzeniu\npamięci masowej. Istnieją jednak systemy plików utrzymywane całkowicie w RAM, jak sysfs i procfs,\nktóre nie mają fizycznego superbloku. W ich przypadku zawartość obiektu superbloku jest całkowicie\nwygenerowana.\n• Obiekty i-węzłów mogą być związane nie tylko z fizycznymi plikami, ale również z plikami\nspecjalnymi, np. plikami urządzeń lub kolejek FIFO.\n• W systemach plików kompatybilnych z Uniksem obiekty i-węzłów reprezentują bloki i-węzłów, ale w\nprzypadku innych systemów dane dla tych obiektów są pobierane bezpośrednio z plików lub innych\nmiejsc na nośniku. Są również systemy plików, które nie mają wszystkich danych wymaganych przez\nobiekty i-węzłów. Wtedy używane są wartości domyślne.\n• Obiekty wpisów katalogowych (dentry) są związane z każdą nazwą, która pojawia się w ścieżce.\nObiekty dentry reprezentują również nazwy plików znajdujące się na końcach niektórych ścieżek i\npunkty montowania, które mogą występować w ścieżkach. Te obiekty nie mają swoich\nodpowiedników na nośniku. Są one tworzone na bieżąco, podczas analizy ścieżek i niezbędne do\nprzeprowadzania operacji specyficznych dla katalogów, takich jak poruszanie się po drzewie\nkatalogów."
                },
                {
                    "id": "so-m4-005",
                    "type": "yn",
                    "question": "Potoki czy",
                    "options": [
                        "nadaj się do systemw interaktywnych?",
                        "mogą być stosowane tylko do systemw sekwencyjnych?"
                    ],
                    "correctAnswers": [],
                    "explanation": ""
                },
                {
                    "id": "so-m4-006",
                    "type": "yn",
                    "question": "W systemach interaktywnych",
                    "options": [
                        "najlepiej stosowac zewnetrze punkty widzenia?",
                        "Czy stanowia naturalny sposob strukturalizacji procesu?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-007",
                    "type": "yn",
                    "question": "Podsystem",
                    "options": [
                        "moe dziaa niezalenie?",
                        "moe ze soba współdziała?",
                        "pojedynczy podsystem moe być traktowany jako samodzielny?",
                        "funkcje rnych podsystemw mogą dziaa wspólnie?"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-008",
                    "type": "yn",
                    "question": "Czy systemy z komponentami gruboziarnistymi - uyjemy",
                    "options": [
                        "gdy chcemy postawi na szybkosc?",
                        "gdy chcemy postawic na efektywno?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-010",
                    "type": "yn",
                    "question": "Które ze stwierdze dotyczcych wywołań systemowych w Linuksie 2.6 są prawdziwe?",
                    "options": [
                        "Dodawanie nowych wywołań systemowych nie jest zalecanym przez twrcw jądra sposobem dodawania nowej funkcjonalnoci. |",
                        "Kade wywoływanie systemowe zwraca warto typu long. |    tak",
                        "Kade wywołanie systemowe musi przyjmowa co najmniej jeden argument wywołania",
                        "Wszystkie funkcje ze standardowej biblioteki jzyka C korzystaj z wywołań systemowych",
                        "Funkcja realizujca wywołanie systemowe musi być w caoci napisana w assemblerze"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-011",
                    "type": "yn",
                    "question": "Określ, które informacje dotyczące wywołani systemowych w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "adresy wszystkich zarejestrowanych wywołań systemowych są przechowywane w specjalnej tablicy",
                        "kod funkcji implementującej wywołanie systemowe może być umieszczony w module",
                        "dodawanie nowych wywołań systemowych jest zalecaną przez programistów jądra Linuksa praktyką",
                        "część procesorów wymaga, aby argumenty do funkcji implementujących wywołania systemowe były przekazywane wyłącznie przez stos",
                        "funkcja implementująca wywołanie systemowe musi sprawdzać poprawność przekazanych jej argumentów."
                    ],
                    "correctAnswers": [
                        0,
                        3,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-016",
                    "type": "yn",
                    "question": "Czy wzorcem strukturalnym jest",
                    "options": [
                        "kompozyt?",
                        "prototyp?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-017",
                    "type": "yn",
                    "question": "Diagram przypadkw użycia",
                    "options": [
                        "jest strukturalny?",
                        "posiada aktorw?",
                        "umoliwia zamodelowanie funkcjonalnoci systemu?"
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-018",
                    "type": "yn",
                    "question": "Chain of responsibility (acuch zobowiza)",
                    "options": [
                        "czy gwarantuje obsługę zapytania przez co najmniej jeden obiekt?",
                        "wymiana zmodyfikowanych danych pomidzy obiektami?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-019",
                    "type": "yn",
                    "question": "Punktem widzenia mogą być",
                    "options": [
                        "odbiorcy usug?",
                        "rdo lub przeznaczenie danych?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-020",
                    "type": "yn",
                    "question": "Czy inynieria programowania",
                    "options": [
                        "zajmuje się wyłącznie etapem od zakoczenia tworzenia specyfikacji do oddania programu klientowi?",
                        "zajmuje się tylko dostarczeniem programu?",
                        "oznacza tylko program wykonywalny?",
                        "definiuje oprogramowanie jako kad posta zapisu programu komputerowego?"
                    ],
                    "correctAnswers": [
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-021",
                    "type": "yn",
                    "question": "Diagram klas",
                    "options": [
                        "Czy diagram klas jest strukturalny?",
                        "Czy diagram klas przedstawia zalenoci midzy klasami?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-022",
                    "type": "yn",
                    "question": "Sie dziaa",
                    "options": [
                        "czy pozwala wyznaczy ciek krytyczn?",
                        "czy jest graficznym schematem?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-023",
                    "type": "yn",
                    "question": "Weryfikacj jest",
                    "options": [
                        "czy produkt spenia specyfikacje?",
                        "czy produkt jest budowany wg ustale klienta?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-024",
                    "type": "yn",
                    "question": "Obserwator",
                    "options": [
                        "Obserwator czy przechodzi przez obserwatorw i uaktualnia stan?",
                        "Obserwowany dynamicznie dodaje i usuwa obserwatorw?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-025",
                    "type": "yn",
                    "question": "Etnografia",
                    "options": [
                        "wymagania wynikajce z rzeczywistego sposobu pracy osb a nie ze sposobu zalecanego przez formalne definicje procesw?",
                        "wymagania, które wynikaja z kooperacji i swiadomowsci czynności innych osob?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-026",
                    "type": "yn",
                    "question": "Czy model oglny",
                    "options": [
                        "budowany metoda wstepujaca, obejmuja zasadnicze charakterystyki rzeczywistych systemw?",
                        "dostarcza informacji o oglnej architekturze systemu?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-027",
                    "type": "yn",
                    "question": "Wzorzec obserwator",
                    "options": [
                        "obserwator wizytuje obserwatorw w celu pobrania aktualnego stanu obiektu obserwowanego?",
                        "obserwator umoliwia obserwowanemu na dynamiczne odczanie i doczanie obserwatorow?",
                        "czy obserwator weryfikuje obserwatorw?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-028",
                    "type": "yn",
                    "question": "Czy Stan/Strategia",
                    "options": [
                        "pozwalaj na przełączanie w zalenoci od kontekstu lub autorytatywne (normalne przełączanie)?",
                        "strategia i stan umoliwiaj dokonywanie wybor algorytmu/stanu lub moe on by determinowany samoczynnie w klasie kontekstu?"
                    ],
                    "correctAnswers": [
                        0,
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-029",
                    "type": "yn",
                    "question": "Metoda formalna",
                    "options": [
                        "moe być wszdzie stosowana?",
                        "oparta na metodach numerycznych?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-030",
                    "type": "yn",
                    "question": "Klasy gruboziarniste stosuje się",
                    "options": [
                        "w efektywnoci?",
                        "w konserwacji?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-031",
                    "type": "yn",
                    "question": "Singleton",
                    "options": [
                        "czy moe być tylko jeden taki obiekt?",
                        "czy można utworzy tylko jedn instancje?",
                        "Czy Singleton jest używany gdy nie wiadomo na etapie kompilacje jakiej klasy trzeba stworzyc obiekty?",
                        "Singleton instancja klasy globalna?"
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-032",
                    "type": "yn",
                    "question": "Czy include w diagramie przypadkw użycia używa się",
                    "options": [
                        "gdy przypadek uzycia wymaga wykorzystania take innych elementw?",
                        "gdy jeden przypadek jest rozbudowanym innym przypadkiem?"
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-033",
                    "type": "yn",
                    "question": "Testowanie funkcjonalne",
                    "options": [
                        "przezroczysta skrzynka?",
                        "wprowadza się z specyfikacji programu?"
                    ],
                    "correctAnswers": [
                        1
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-034",
                    "type": "yn",
                    "question": "Pytania:",
                    "options": [
                        "Zmienna typu atomic_T jest 32 bitowa.",
                        "Wszystkie architektury, które obsługuje Linux dostarczaj rozkazw maszynowych realizujcych operacje niepodzielne na wartociach bdcych liczbami cakowitymi",
                        "Rygle pętlowe mogą być stosowane we fragmentach kodu wykonywujcych się w kontekcie przerwania",
                        "Rygle R-W stosujemy w zagadnieniach typu problem czytelników i pisarzy, gdzie faworyzowani są pisarze",
                        "Zmienne sygnałowe są uproszczon wersj semaforów."
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-m4-035",
                    "type": "yn",
                    "question": "Które stwierdzenia są prawidowe?;",
                    "options": [
                        "Programista jądra powinien się posugiwa zmienn printf.",
                        "Programista powinien zwraca uwag na rozmiar stosu jądra.",
                        "Programista jądra powinien uzywa funkcji rekurencyjnych.",
                        "Programista nie powinien uzywac funkcji goto.",
                        "Architektura NUMA jest obsługiwana od wersji jądra 2.6."
                    ],
                    "correctAnswers": [
                        1,
                        3,
                        4
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "so-final",
            "name": "SO: Egzamin końcowy",
            "questions": [
                {
                    "id": "so-final-001",
                    "type": "yn",
                    "question": "Które stwierdzenia są prawidowe?; Mechanizm RCU posuguje się wskaźnikami.",
                    "options": [
                        "Kod w mechanizmie RCU moe ulec zawieszeniu.",
                        "Odczyty w mechanizmie RCU powinny byc czste, a zapisy sporadyczne.",
                        "Rygle pętlowe powinny być stosowane wszdzie tam, gdzie nie można zawiesi wątku i gdzie czas przełączania kontekstu byby niewspmiernie duszy z czasem aktywnego oczekiwania.",
                        "Rygle pętlowe są rekurencyjne."
                    ],
                    "correctAnswers": [
                        1,
                        2
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-final-003",
                    "type": "yn",
                    "question": "Okrel, które informacje dotyczce dolnych połówek w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "cakowita liczba przerwa programowych jest ograniczona",
                        "przerwania programowe są wykonywane w kontekcie procesu",
                        "tasklety są wykonywane w kontekcie procesu",
                        "czynności z kolejek prac są wykonywane w kontekcie przerwania",
                        "można precyzyjne okreli czas, po którym przerwanie programowe powinno być wykonane."
                    ],
                    "correctAnswers": [
                        0
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-final-004",
                    "type": "yn",
                    "question": "Okrel, które informacje dotyczce zarzdzania pamięci w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "Linux obsługuje systemy wieloprocesorowe o organizacji NUMA",
                        "domylnie Linux przydziela pamięć ze strefy DMA (ZONE_DMA)",
                        "podstawowym mechanizmem sprzętowym wykorzystywanym przez Linuksa do obsługi pamięci jest segmentacja",
                        "nie we wszystkich platformach sprzętowych musi wystpowa strefa pamięci wysokiej (ZONE_HIGHMEM)",
                        "niskopoziomowy mechanizm obsługi pamięci umoliwia przydzielenie obszaru pamięci o wielkoci jednego bajta."
                    ],
                    "correctAnswers": [
                        0,
                        3
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-final-005",
                    "type": "yn",
                    "question": "Okrel, które informacje dotyczce obsługi urządzeń znakowych i blokowych w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "urządzenia obsługiwane przez Linuksa są wyłącznie urządzeniami fizycznymi",
                        "w komputerach klasy PC kontroler jest zawsze czci struktury sprzętowej czcej szyn wejścia-wyjścia z urządzeniem",
                        "rejestr moe peni więcej ni jedn funkcj",
                        "numer gwny identyfikuje sterownik obsługujący urządzenie lub grup urządzeń",
                        "urządzenia znakowe adresuj dane sekwencyjnie."
                    ],
                    "correctAnswers": [
                        2,
                        3,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-final-006",
                    "type": "yn",
                    "question": "Okrel, które informacje dotyczce warstwy operacji blokowych w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "wielko bloku w Linuksie jest nieograniczona",
                        "kady bufor zawsze jest związany z blokiem na nośniku danych",
                        "bufory są wykorzystywane wyłącznie do przechowywania danych odczytanych z nonika urządzenia blokowego",
                        "kady z buforw wyposaony jest w nagłówek zawierający dane niezbędne do zarzdzania nim",
                        "nagłówek bufora nie przechowuje informacji o operacjach wejścia-wyjścia z jakimi ten bufor jest związany."
                    ],
                    "correctAnswers": [
                        1,
                        3,
                        4
                    ],
                    "explanation": ""
                },
                {
                    "id": "so-final-007",
                    "type": "yn",
                    "question": "Okrel, które informacje dotyczce obsługi sieci w Linuksie 3.0 i nowszych są prawdziwe:",
                    "options": [
                        "jądro wykonuje czynności zwizane z obsługą warstwy cza, sieci i transportowej modelu ISO/OSI",
                        "NAPI nigdy nie pozwala na sygnalizowanie odbioru pakietu za pomoc przerwania",
                        "przenoszenie bufora pakietu midzy kolejkami jest czasochonne",
                        "funkcje zwizane z filtrem sieciowym mogą \"wykrada\" niektre pakiety, aby przetworzyć je w inny sposb ni pozostae",
                        "w filtrze sieciowym, z pojedynczym uchwytem nie moe być skojarzona więcej ni jedna funkcja przetwarzająca."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": ""
                }
            ]
        },
        {
            "id": "so-wyklady",
            "name": "SO: Pytania z wykładów",
            "questions": [
                {
                    "id": "so-wyk-001",
                    "type": "yn",
                    "question": "Które z poniższych zdań dotyczących historii i ogólnej charakterystyki jądra Linuksa są prawdziwe?",
                    "options": [
                        "Jądro Linuksa powstało w 1991 roku, a jego pracami kierował fiński student Linus Benedict Torvalds.",
                        "Koncepcja potoków uniksowych (pipes) została oryginalnie zaproponowana przez Kena Thompsona.",
                        "W 1973 roku znaczna część kodu źródłowego Uniksa została przepisana na język C, opracowany przez Dennisa Ritchie.",
                        "Jądro Linuksa charakteryzuje się budową monolityczną."
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Powstanie jądra Linuksa przypada na 1991 rok pod kierownictwem Linusa Torvaldsa. (Wykład 1)\n• **Opcja b) (NIE):** Douglas McIlroy zaproponował koncepcję potoków uniksowych. (Wykład 1)\n• **Opcja c) (TAK):** W 1973 roku Unix został przepisany na język C, stworzony przez Dennisa Ritchie. (Wykład 1)\n• **Opcja d) (TAK):** Jądro Linuksa ma architekturę monolityczną. (Wykład 1)"
                },
                {
                    "id": "so-wyk-002",
                    "type": "yn",
                    "question": "Określ, które zdania na temat budowy jądra Linuksa i programowania w przestrzeni jądra są prawdziwe:",
                    "options": [
                        "W jądru monolitycznym wszystkie usługi (systemy plików, obsługa sieci itp.) działają w jednym wspólnym segmencie pamięci.",
                        "Moduły jądra (LKM) mogą być dynamicznie ładowane i usuwane z pamięci w czasie działania systemu.",
                        "W architekturze 32-bitowej przestrzeń jądra (kernel space) standardowo zajmuje górny 1 GB wirtualnej przestrzeni adresowej.",
                        "Kod działający w przestrzeni jądra (kernel space) może korzystać ze standardowych bibliotek C (np. libc)."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** W jądru monolitycznym wszystkie komponenty i usługi współdzielą tę samą przestrzeń adresową jądra. (Wykład 1)\n• **Opcja b) (TAK):** Moduły LKM są ładowane i rozładowywane w locie za pomocą narzędzi takich jak insmod i rmmod. (Wykład 1)\n• **Opcja c) (TAK):** W standardowym podziale 3G/1G, jądro zajmuje najwyższy 1 GB wirtualnej przestrzeni adresowej. (Wykład 1)\n• **Opcja d) (NIE):** Kod jądra nie ma dostępu do bibliotek przestrzeni użytkownika, w tym libc. Używa własnych odpowiedników (np. printk). (Wykład 1)"
                },
                {
                    "id": "so-wyk-003",
                    "type": "yn",
                    "question": "Które ze zdań dotyczących deskryptora procesu i stanów procesów w Linuksie są prawdziwe?",
                    "options": [
                        "Deskryptor procesu jest reprezentowany przez strukturę struct `task_struct`, zdefiniowaną w nagłówku `<linux/sched.h>`.",
                        "Stan `TASK_INTERRUPTIBLE` oznacza, że proces jest uśpiony, ale może zostać obudzony przez odebranie sygnału.",
                        "Proces oczekujący na zakończenie operacji I/O jest zazwyczaj wprowadzany w stan `TASK_UNINTERRUPTIBLE`, w którym ignoruje sygnały.",
                        "Proces-sierota (orphan process) po zakończeniu działania swojego rodzica zostaje adoptowany przez proces init (PID 1) lub systemd."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** `task_struct` zawiera pełne metadane procesu i jest deskryptorem procesu w Linuksie. (Wykład 2)\n• **Opcja b) (TAK):** Proces w stanie `TASK_INTERRUPTIBLE` oczekuje na zdarzenie lub sygnał i reaguje na nie. (Wykład 2)\n• **Opcja c) (TAK):** `TASK_UNINTERRUPTIBLE` ignoruje sygnały; proces przechodzi w ten stan m.in. podczas bezpośredniej obsługi dysku. (Wykład 2)\n• **Opcja d) (TAK):** Każdy proces must mieć rodzica, dlatego po śmierci rodzica jądro adoptuje go przez proces o PID 1. (Wykład 2)"
                },
                {
                    "id": "so-wyk-004",
                    "type": "yn",
                    "question": "Wskaż prawdziwe zdania na temat tworzenia procesów i wątków w Linuksie:",
                    "options": [
                        "Funkcja `fork()` tworzy nowy proces poprzez skopiowanie deskryptora i zasobów procesu rodzica.",
                        "Mechanizm Copy-on-Write (COW) pozwala na opóźnienie kopiowania stron pamięci fizycznej do momentu zapisu przez jeden z procesów.",
                        "Wywołanie `vfork()` różni się od `fork()` tym, że nie kopiuje tablic stron rodzica, a rodzic jest wstrzymywany do momentu wywołania exec/exit.",
                        "Wątki w Linuksie są traktowane jako zwykłe procesy współdzielące zasoby i są tworzone za pomocą wywołania systemowego `clone()`."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** `fork()` duplikuje zasoby, tworząc proces potomny. (Wykład 2)\n• **Opcja b) (TAK):** Kopiowanie przy zapisie (COW) pozwala zaoszczędzić czas i pamięć RAM przy klonowaniu procesów. (Wykład 2)\n• **Opcja c) (TAK):** `vfork()` działa bezpośrednio na przestrzeni adresowej rodzica i wymaga, aby dziecko szybko wywołało exec/exit. (Wykład 2)\n• **Opcja d) (TAK):** W Linuksie nie ma ścisłego podziału; wątki to po prostu procesy współdzielące pamięć i pliki przez clone. (Wykład 2)"
                },
                {
                    "id": "so-wyk-005",
                    "type": "yn",
                    "question": "Wskaż zdania prawdziwe dotyczące szeregowania zadań i planisty O(1) w Linuksie:",
                    "options": [
                        "Wielozadaniowość z wywłaszczaniem (preemptive) oznacza, że jądro kontroluje czas procesora i może przerwać proces bez jego zgody.",
                        "Poziom uprzejmości (nice value) procesu przyjmuje wartości od -20 (najwyższy priorytet) do +19 (najniższy priorytet).",
                        "Planista O(1) utrzymuje dwie tablice priorytetów w kolejce runqueue: aktywną (active) i przeterminowaną (expired).",
                        "W planiście O(1) kwanty czasu zadań są przeliczane dynamicznie dopiero wtedy, gdy tablica aktywna staje się całkowicie pusta."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Wywłaszczanie polega na przerwaniu wątku przez system operacyjny. (Wykład 3)\n• **Opcja b) (TAK):** Wartość nice służy do kontroli priorytetu procesów zwykłych. (Wykład 3)\n• **Opcja c) (TAK):** O(1) korzysta z tablic active i expired dla stałego czasu wyboru zadań. (Wykład 3)\n• **Opcja d) (NIE):** Kwanty czasu są przeliczane od razu, gdy zadanie wykorzysta swój kwant i trafi do tablicy expired, a nie zbiorczo. (Wykład 3)"
                },
                {
                    "id": "so-wyk-006",
                    "type": "yn",
                    "question": "Które z poniższych zdań na temat planisty CFS (Completely Fair Scheduler) są prawdziwe?",
                    "options": [
                        "CFS rezygnuje z tradycyjnego pojęcia kwantu czasu na rzecz przydzielania procentowego udziału w czasie procesora.",
                        "Kolejka procesów gotowych do uruchomienia w planiście CFS jest implementowana w postaci drzewa czerwono-czarnego.",
                        "CFS wybiera do uruchomienia proces o najmniejszej wartości wskaźnika wirtualnego czasu (vruntime).",
                        "Wartość `vruntime` rośnie szybciej dla procesów o wysokim priorytecie (niska wartość nice)."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** CFS dąży do idealnego, sprawiedliwego podziału procesora. (Wykład 3)\n• **Opcja b) (TAK):** Drzewo czerwono-czarne pozwala na operacje wstawiania i wyboru o złożoności O(log N). (Wykład 3)\n• **Opcja c) (TAK):** Proces o najmniejszym vruntime (skrajny lewy liść drzewa) jest wybierany jako następny. (Wykład 3)\n• **Opcja d) (NIE):** Dla wyższych priorytetów vruntime rośnie wolniej, dzięki czemu proces spędza więcej realnego czasu na CPU. (Wykład 3)"
                },
                {
                    "id": "so-wyk-007",
                    "type": "yn",
                    "question": "Które z poniższych zdań opisujących szeregowanie czasu rzeczywistego (real-time) w Linuksie są prawdziwe?",
                    "options": [
                        "Klasa `SCHED_FIFO` implementuje szeregowanie karuzelowe z kwantem czasu.",
                        "Klasa `SCHED_RR` jest rozszerzeniem `SCHED_FIFO` o przydzielanie kwantu czasu, po wyczerpaniu którego proces trafia na koniec kolejki.",
                        "Procesy czasu rzeczywistego mają priorytety w zakresie od 0 do 99.",
                        "Klasa `SCHED_OTHER` służy do szeregowania zwykłych procesów nie-czasu rzeczywistego."
                    ],
                    "correctAnswers": [
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (NIE):** SCHED_FIFO nie ma kwantu czasu i wykonuje się aż do wywłaszczenia lub zablokowania. Karuzelowe z kwantem to SCHED_RR. (Wykład 4)\n• **Opcja b) (TAK):** SCHED_RR to karuzela o stałym priorytecie z kwantem czasu. (Wykład 4)\n• **Opcja c) (TAK):** Priorytety RT to 0-99 (0 - najwyższy priorytet RT). (Wykład 4)\n• **Opcja d) (TAK):** SCHED_OTHER (lub SCHED_NORMAL) to klasa dla normalnych procesów CFS. (Wykład 4)"
                },
                {
                    "id": "so-wyk-008",
                    "type": "yn",
                    "question": "Określ prawdziwość zdań na temat mechanizmów szeregowania i priorytetów:",
                    "options": [
                        "Wartości nice (-20 do +19) odpowiadają priorytetom jądra w zakresie od 100 do 139.",
                        "Standardowe jądro Linuksa (bez nakładki PREEMPT_RT) jest systemem tzw. miękkiego czasu rzeczywistego (soft real-time).",
                        "Wywołanie systemowe `sched_yield()` pozwala procesowi na dobrowolne zrzeczenie się procesora.",
                        "Proces o wyższym priorytecie czasu rzeczywistego może zostać wywłaszczony przez proces o priorytecie dynamicznym CFS."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Priorytety 100-139 to obszar dla procesów zwykłych, mapowany bezpośrednio z nice. (Wykład 4)\n• **Opcja b) (TAK):** Standardowy Linux nie daje twardych gwarancji determinizmu czasowego. (Wykład 4)\n• **Opcja c) (TAK):** sched_yield przesuwa proces na koniec kolejki procesów gotowych o tym samym priorytecie. (Wykład 4)\n• **Opcja d) (NIE):** Procesy RT zawsze mają pierwszeństwo przed normalnymi procesami CFS. (Wykład 4)"
                },
                {
                    "id": "so-wyk-009",
                    "type": "yn",
                    "question": "Które ze zdań opisujących mechanizm wywołań systemowych (syscalls) w Linuksie są prawdziwe?",
                    "options": [
                        "Przejście z przestrzeni użytkownika do przestrzeni jądra wiąże się ze zmianą trybu pracy procesora (tryb nieuprzywilejowany -> uprzywilejowany).",
                        "W architekturze x86 (32-bit) wywołanie systemowe jest inicjowane za pomocą przerwania programowego `int 0x80`.",
                        "Każdemu wywołaniu systemowemu odpowiada liczba całkowita (numer syscall), która służy jako indeks w tablicy `sys_call_table`.",
                        "W jądru Linuksa funkcja `sys_ni_syscall()` zwraca błąd `ENOSYS` i służy jako handler dla niezaimplementowanych wywołań."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Wywołanie systemowe dokonuje bezpiecznego przejścia w tryb jądra (ring 0). (Wykład 5)\n• **Opcja b) (TAK):** Rejestr Vector 128 (0x80) jest domyślnym wejściem syscall dla 32-bit. (Wykład 5)\n• **Opcja c) (TAK):** Tablica syscalli wiąże numery wywołań z funkcjami obsługi sys_*. (Wykład 5)\n• **Opcja d) (TAK):** sys_ni_syscall (not implemented) zwraca kod ENOSYS. (Wykład 5)"
                },
                {
                    "id": "so-wyk-010",
                    "type": "yn",
                    "question": "Jak wygląda przekazywanie argumentów i obsługa błędów w wywołaniach systemowych?",
                    "options": [
                        "Rejestr `%eax` (lub `%rax` na 64-bit) służy do przekazania numeru wywołania systemowego.",
                        "Na architekturze x86 (32-bit) parametry wywołania systemowego są przekazywane przez rejestry (maksymalnie 5 lub 6, np. ebx, ecx, edx).",
                        "Jeśli wywołanie systemowe zwróci błąd, jądro bezpośrednio zapisuje kod błędu do zmiennej globalnej `errno` procesu użytkownika.",
                        "Funkcje `copy_from_user()` i `copy_to_user()` służą do bezpiecznego kopiowania danych między przestrzenią jądra a użytkownika."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** eax/rax zawiera unikalny identyfikator wywołania systemowego. (Wykład 5)\n• **Opcja b) (TAK):** Rejestry procesora są wykorzystywane do optymalnego przekazywania parametrów. (Wykład 5)\n• **Opcja c) (NIE):** Jądro zwraca wartość ujemną (np. -EFAULT), a wrapper biblioteki C (glibc) zapisuje jej wartość bezwzględną do errno. (Wykład 5)\n• **Opcja d) (TAK):** Funkcje te zapobiegają odczytowi/zapisowi pod nieprawidłowe adresy jądra przez procesy użytkownika. (Wykład 5)"
                },
                {
                    "id": "so-wyk-011",
                    "type": "yn",
                    "question": "Wskaż prawdziwe zdania dotyczące procedur obsługi przerwań (interrupt handlers):",
                    "options": [
                        "Przerwania sprzętowe są generowane asynchronicznie przez urządzenia zewnętrzne.",
                        "Do rejestracji procedury obsługi przerwania służy funkcja `request_irq()`.",
                        "Procedury obsługi przerwania (handlery) działają w kontekście przerwania, co oznacza, że nie mogą wywoływać funkcji uśpiających.",
                        "Funkcja `request_irq()` może być bezpiecznie wywołana z poziomu procedury obsługi przerwania."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Przerwania sprzętowe mogą wystąpić w dowolnym momencie. (Wykład 6)\n• **Opcja b) (TAK):** request_irq przypisuje handler do danej linii IRQ. (Wykład 6)\n• **Opcja c) (TAK):** Kontekst przerwania nie posiada skojarzonego procesu, dlatego nie wolno blokować execution. (Wykład 6)\n• **Opcja d) (NIE):** request_irq może uśpić proces, dlatego nie wolno jej wywoływać w kontekście przerwania. (Wykład 6)"
                },
                {
                    "id": "so-wyk-012",
                    "type": "yn",
                    "question": "Które z poniższych zdań na temat linii IRQ i połówek obsługi przerwań są prawdziwe?",
                    "options": [
                        "Flaga `IRQF_SHARED` informuje jądro, że linia przerwania może być współdzielona przez wiele urządzeń.",
                        "Odrejestrowanie procedury obsługi przerwania następuje za pomocą wywołania `free_irq()`.",
                        "Górna połówka (top half) wykonuje krytyczne czasowo zadania i działa przy zablokowanych przerwaniach lokalnych.",
                        "Dolna połówka (bottom half) przerwania wykonuje mniej krytyczne zadania i jest uruchamiana asynchronicznie w późniejszym czasie."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Umożliwia współdzielenie IRQ na nowoczesnych magistralach (np. PCI). (Wykład 6)\n• **Opcja b) (TAK):** free_irq zwalnia linię IRQ i usuwa powiązany handler. (Wykład 6)\n• **Opcja c) (TAK):** Górna połówka musi być jak najkrótsza, aby nie blokować innych przerwań. (Wykład 6)\n• **Opcja d) (TAK):** Dolna połówka odciąża CPU i działa przy włączonych przerwaniach. (Wykład 6)"
                },
                {
                    "id": "so-wyk-013",
                    "type": "yn",
                    "question": "Określ, które zdania na temat softirqs i taskletów są prawdziwe:",
                    "options": [
                        "Softirqs (przerwania programowe) mogą być wykonywane współbieżnie na wielu procesorach jednocześnie.",
                        "Tasklety są zbudowane na bazie softirqs, ale ten sam tasklet nie może być wykonywany współbieżnie na różnych procesorach.",
                        "Do dynamicznej deklaracji taskletu służy funkcja `tasklet_init()`.",
                        "Softirqs są łatwe do napisania i nie wymagają synchronizacji, ponieważ jądro automatycznie zapobiega wyścigom."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Softirqs są wysoce wydajne, ale wymagają reentrantności i pełnej synchronizacji. (Wykład 7)\n• **Opcja b) (TAK):** Gwarantuje to uproszczenie pisania kodu dla sterowników w porównaniu do softirqs. (Wykład 7)\n• **Opcja c) (TAK):** dynamiczny tasklet jest rejestrowany za pomocą tasklet_init. (Wykład 7)\n• **Opcja d) (NIE):** Wręcz przeciwnie, softirqs wymagają ścisłego rygoru programowania z racji pełnej współbieżności. (Wykład 7)"
                },
                {
                    "id": "so-wyk-014",
                    "type": "yn",
                    "question": "Wskaż zdania prawdziwe dotyczące kolejek roboczych (work queues):",
                    "options": [
                        "Kolejki robocze (work queues) są wykonywane w kontekście procesu, co oznacza, że ich procedury mogą zasypiać.",
                        "Domyślne wątki jądra obsługujące kolejki robocze noszą nazwę `kworker`.",
                        "Wątki jądra obsługi przerwań (threaded interrupts) pozwalają na wykonywanie dolnej połówki jako wątku o priorytecie RT.",
                        "Kolejka robocza działa w kontekście przerwania, dlatego nie wolno w niej wywoływać locków mutex."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Ponieważ work queues działają w kontekście wątków jądra, mogą one wchodzić w stan uśpienia i blokowania. (Wykład 7)\n• **Opcja b) (TAK):** Wątki kworker realizują zadania z kolejek roboczych. (Wykład 7)\n• **Opcja c) (TAK):** Threaded interrupts (wątkowane przerwania) ułatwiają programowanie w systemach czasu rzeczywistego. (Wykład 7)\n• **Opcja d) (NIE):** Work queues działają w kontekście procesu (nie przerwania), dlatego blokady śpiące (mutex, semafory) są w pełni dozwolone. (Wykład 7)"
                },
                {
                    "id": "so-wyk-015",
                    "type": "yn",
                    "question": "Określ prawdziwość zdań na temat blokad wirujących (spinlocks) i wyścigów:",
                    "options": [
                        "Stan wyścigu (race condition) zachodzi wtedy, gdy co najmniej dwa procesy próbują modyfikować współdzielony zasób bez synchronizacji.",
                        "Spinlocki (blokady wirujące) w przypadku zajętości blokady wprowadzają proces w stan uśpienia.",
                        "Zablokowanie spinlocka na danym procesorze powoduje wyłączenie wywłaszczania (preemption) na tym procesorze.",
                        "Procedura obsługi przerwania (handler) nie może ubiegać się o semafor lub mutex, ponieważ próba zablokowania mogłaby uśpić kontekst przerwania."
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Wyścigi prowadzą do niespójności danych. (Wykład 8)\n• **Opcja b) (NIE):** Spinlocki kręcą się w pętli (busy waiting), oczekując na zwolnienie blokady. (Wykład 8)\n• **Opcja c) (TAK):** Zapobiega to sytuacji, w której planista wywłaszczyłby proces trzymający spinlock. (Wykład 8)\n• **Opcja d) (TAK):** Kontekst przerwania nie może zasypiać, a mutexy/semafory są blokadami śpiącymi. (Wykład 8)"
                },
                {
                    "id": "so-wyk-016",
                    "type": "yn",
                    "question": "Które z poniższych zdań na temat mutexów, semaforów i mechanizmu RCU są prawdziwe?",
                    "options": [
                        "Semafory i mutexy w Linuksie uspiają wątki oczekujące na blokadę i są przeznaczone do synchronizacji długotrwałej.",
                        "Mutex różni się od semafora tym, że ma licznik o dowolnej wartości i nie posiada pojęcia właściciela.",
                        "Blokady typu czytelnicy-pisarze (reader-writer spinlocks) dopuszczają jednoczesny odczyt przez wielu czytelników.",
                        "Mechanizm RCU (Read-Copy-Update) pozwala czytelnikom na odczyt struktury danych bez żadnej blokady, nawet podczas jej aktualizacji."
                    ],
                    "correctAnswers": [
                        0,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Są to tzw. blokady śpiące (sleeping locks). (Wykład 8)\n• **Opcja b) (NIE):** Mutex jest binarny (wartość 0/1) i ściśle śledzi swojego właściciela. Semafor nie ma właściciela i licznik może być > 1. (Wykład 8)\n• **Opcja c) (TAK):** Wiele wątków może jednocześnie odczytywać, ale pisarz musi mieć wyłączność. (Wykład 8)\n• **Opcja d) (TAK):** Pisarz dokonuje modyfikacji na kopii, a następnie w bezpiecznym momencie zamienia wskaźnik. (Wykład 8)"
                },
                {
                    "id": "so-wyk-017",
                    "type": "yn",
                    "question": "Zarządzanie czasem w jądru Linuksa – wskaż prawdziwe zdania:",
                    "options": [
                        "Licznik `jiffies` przechowuje liczbę taktów zegara systemowego od momentu bootowania systemu.",
                        "Zmienna `HZ` określa częstotliwość przerwań generatora czasu systemowego na sekundę.",
                        "RTC (Real-Time Clock) jest nieulotnym zegarem zasilanym bateryjnie, z którego system odczytuje czas rzeczywisty przy starcie.",
                        "Wartość `HZ` wynosi zawsze 1000 na wszystkich architekturach sprzętowych."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** jiffies inkrementuje się przy każdym przerwaniu zegarowym. (Wykład 9)\n• **Opcja b) (TAK):** Określa ile razy na sekundę wywoływane jest przerwanie zegarowe (timer interrupt). (Wykład 9)\n• **Opcja c) (TAK):** RTC działa nawet przy wyłączonym zasilaniu komputera. (Wykład 9)\n• **Opcja d) (NIE):** HZ jest wartością parametryzowaną i zależy od architektury (np. 100, 250, 1000). (Wykład 9)"
                },
                {
                    "id": "so-wyk-018",
                    "type": "yn",
                    "question": "Które z zdań opisujących timery i opóźnienia są prawdziwe?",
                    "options": [
                        "Dynamiczne timery jądra (struct `timer_list`) są uruchamiane asynchronicznie w kontekście softirq (`TIMER_SOFTIRQ`).",
                        "Alokacja timerów i ich aktywacja odbywa się m.in. za pomocą funkcji `add_timer()` lub `mod_timer()`.",
                        "Funkcja `mdelay()` wstrzymuje procesor za pomocą aktywnego wirowania (busy-loop), a `msleep()` uśpia proces.",
                        "Odczyt `jiffies_64` na systemach 32-bitowych wymaga funkcji helpera `get_jiffies_64()`, aby zapobiec wyścigom odczytu."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Po upływie zdefiniowanego czasu, funkcja callback timera wykonuje się w softirq. (Wykład 9)\n• **Opcja b) (TAK):** Funkcje te manipulują strukturą timer_list. (Wykład 9)\n• **Opcja c) (TAK):** mdelay kręci się w pętli opóźniającej (nie wolno uśpić w handlerach), msleep oddaje CPU. (Wykład 9)\n• **Opcja d) (TAK):** get_jiffies_64() chroni przed odczytem niespójnego stanu górnego/dolnego słowa 32-bit. (Wykład 9)"
                },
                {
                    "id": "so-wyk-019",
                    "type": "yn",
                    "question": "Które z zdań opisujących struct page i strefy pamięci (zones) w Linuksie są prawdziwe?",
                    "options": [
                        "Każda fizyczna strona pamięci (ramka) jest reprezentowana w jądru przez strukturę struct `page`.",
                        "Strefa `ZONE_DMA` obejmuje pamięć fizyczną, która może być adresowana przez starsze urządzenia DMA (zazwyczaj pierwsze 16 MB).",
                        "Strefa `ZONE_HIGHMEM` obejmuje pamięć fizyczną, która nie jest mapowana na stałe do wirtualnej przestrzeni jądra.",
                        "System bliźniaków (buddy system) służy do zarządzania ciągłymi stronami pamięci fizycznej."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** struct page opisuje atrybuty ramki pamięci fizycznej i nie reprezentuje danych w niej zawartych. (Wykład 10)\n• **Opcja b) (TAK):** Rezerwowana dla wstecznej kompatybilności z urządzeniami DMA ISA 16MB. (Wykład 10)\n• **Opcja c) (TAK):** ZONE_HIGHMEM to obszar pamięci fizycznej, który nie ma stałego mapowania w przestrzeni adresowej jądra. (Wykład 10)\n• **Opcja d) (TAK):** Buddy system dzieli i łączy bloki o rozmiarach będących potęgami dwójki. (Wykład 10)"
                },
                {
                    "id": "so-wyk-020",
                    "type": "yn",
                    "question": "Wskaż zdania prawdziwe dotyczące kmalloc, vmalloc i alokatora Slab:",
                    "options": [
                        "Alokator Slab (slab allocator) minimalizuje fragmentację wewnętrzną poprzez cache'owanie obiektów o stałym rozmiarze.",
                        "Funkcja `kmalloc()` alokuje pamięć ciągłą fizycznie i wirtualnie.",
                        "Funkcja `vmalloc()` alokuje pamięć ciągłą wirtualnie, ale strony fizyczne nie muszą być ciągłe.",
                        "Alokacja pamięci za pomocą `vmalloc()` jest znacznie szybsza niż za pomocą `kmalloc()`."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Slab przydziela pamięć pod specyficzne obiekty jądra (inode, task_struct itp.). (Wykład 10)\n• **Opcja b) (TAK):** kmalloc jest idealny do małych buforów, z których korzystają urządzenia hardware. (Wykład 10)\n• **Opcja c) (TAK):** vmalloc tworzy wirtualną ciągłość za pomocą tablic stron. (Wykład 10)\n• **Opcja d) (NIE):** vmalloc jest wolniejszy, bo musi modyfikować tabele stron i mapować RAM. (Wykład 10)"
                },
                {
                    "id": "so-wyk-021",
                    "type": "yn",
                    "question": "Które ze zdań opisujących obiekty VFS (Wirtualny System Plików) są prawdziwe?",
                    "options": [
                        "Wirtualny System Plików (VFS) to warstwa abstrakcji pozwalająca na jednolitą obsługę różnych systemów plików.",
                        "Superblok (struct `super_block`) reprezentuje metadane konkretnego zamontowanego systemu plików.",
                        "I-węzeł (struct `inode`) przechowuje metadane pliku, ale nie zawiera jego nazwy.",
                        "Obiekt dentry (struct `dentry`) reprezentuje konkretny element ścieżki (katalog lub plik) i służy m.in. do przyspieszenia wyszukiwania."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** VFS ujednolica operacje I/O dla plików w systemie. (Wykład 11)\n• **Opcja b) (TAK):** Superblok opisuje fizyczne parametry zamontowanej partycji. (Wykład 11)\n• **Opcja c) (TAK):** inode przechowuje typ pliku, właściciela, rozmiar, ale nazwa pliku leży w dentry. (Wykład 11)\n• **Opcja d) (TAK):** dentry (directory entry) kojarzy i-węzeł z nazwą pliku w strukturze ścieżki. (Wykład 11)"
                },
                {
                    "id": "so-wyk-022",
                    "type": "yn",
                    "question": "Jak jądro obsługuje otwarte pliki i operacje VFS?",
                    "options": [
                        "Obiekt pliku (struct `file`) reprezentuje plik otwarty przez proces i przechowuje pozycję kursora (f_pos).",
                        "Struktura `file_operations` zawiera wskaźniki do funkcji realizujących operacje na plikach (np. `read`, `write`, `open`).",
                        "Każdy proces posiada własną tabelę deskryptorów plików, która wskazuje na struktury struct `file`.",
                        "Gdy dwa procesy otwierają ten sam plik, współdzielą one ten sam struct `file`."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** struct file opisuje dynamiczny stan otwartego pliku. (Wykład 11)\n• **Opcja b) (TAK):** Jest to zestaw wskaźników na funkcje powiązane ze specyficznym systemem plików lub sterownikiem. (Wykład 11)\n• **Opcja c) (TAK):** Tabela ta mapuje numery deskryptorów (int) na struct file. (Wykład 11)\n• **Opcja d) (NIE):** Każde wywołanie open() alokuje nowy struct file (z osobnym wskaźnikiem pozycji odczytu f_pos). (Wykład 11)"
                },
                {
                    "id": "so-wyk-023",
                    "type": "yn",
                    "question": "Które z poniższych zdań na temat urządzeń w systemie Linux są prawdziwe?",
                    "options": [
                        "Urządzenia znakowe (character devices) przesyłają dane strumieniowo, bajt po bajcie (np. konsola `/dev/tty`).",
                        "Urządzenia blokowe (block devices) pozwalają na swobodny (losowy) dostęp do danych zorganizowanych w bloki o stałej wielkości.",
                        "Liczba główna (major number) identyfikuje sterownik urządzenia, a pomocnicza (minor) konkretną instancję fizyczną.",
                        "Urządzenia znakowe w Linuksie są reprezentowane w strukturach jądra przez struct `cdev`."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Urządzenia znakowe nie korzystają z cache'u buforowego jądra. (Wykład 12)\n• **Opcja b) (TAK):** Przykładem są dyski twarde SSD/HDD obsługujące odczyt dowolnego sektora. (Wykład 12)\n• **Opcja c) (TAK):** Major wskazuje sterownik w tablicy jądra, minor wskazuje pod-urządzenie. (Wykład 12)\n• **Opcja d) (TAK):** struct cdev definiuje urządzenie znakowe w VFS. (Wykład 12)"
                },
                {
                    "id": "so-wyk-024",
                    "type": "yn",
                    "question": "Rejestracja sterowników i operacje na plikach urządzeń:",
                    "options": [
                        "Dynamiczna alokacja numerów major/minor dla urządzeń znakowych odbywa się za pomocą `alloc_chrdev_region()`.",
                        "Funkcja `cdev_add()` służy do zarejestrowania i aktywacji struct `cdev` w jądrze.",
                        "Pliki urządzeń w katalogu `/dev` są powiązane ze sterownikami wyłącznie na podstawie ich nazw.",
                        "Urządzenia znakowe posiadają strukturę `file_operations` definiującą operacje systemowe open/read/write."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Pozwala zapobiec konfliktom numerów major w systemie. (Wykład 12)\n• **Opcja b) (TAK):** cdev_add udostępnia sterownik dla systemu VFS. (Wykład 12)\n• **Opcja c) (NIE):** Powiązanie odbywa się wyłącznie na podstawie numerów major/minor; nazwa pliku w `/dev` może być dowolna. (Wykład 12)\n• **Opcja d) (TAK):** Sterownik implementuje funkcje wskaźnikowe z `file_operations`. (Wykład 12)"
                },
                {
                    "id": "so-wyk-025",
                    "type": "yn",
                    "question": "Struktury wejścia-wyjścia blokowego (struct bio i request) – wskaż prawdziwe zdania:",
                    "options": [
                        "Podstawową strukturą opisującą operację wejścia-wyjścia blokowego (Block I/O) jest struct `bio`.",
                        "Struktura `bio` przechowuje segmenty danych w postaci listy stron pamięci fizycznej.",
                        "Kolejka żądań (request queue) grupuje i porządkuje żądania transferu sektorów dysku.",
                        "Jedno żądanie (struct `request`) w kolejce jądra może zawierać wiele powiązanych struktur `bio`."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** struct bio reprezentuje operacje I/O na poziomie blokowym. (Wykład 13)\n• **Opcja b) (TAK):** Pozwala na przesyłanie rozproszone (scatter-gather) bez kopiowania buforów. (Wykład 13)\n• **Opcja c) (TAK):** request_queue zarządza kolejnością przesyłania danych do sterownika urządzenia. (Wykład 13)\n• **Opcja d) (TAK):** Jądro łączy sąsiednie bio w jedno żądanie request w celu optymalizacji. (Wykład 13)"
                },
                {
                    "id": "so-wyk-026",
                    "type": "yn",
                    "question": "Planowanie wejścia-wyjścia (I/O Schedulers) – wskaż zdania prawdziwe:",
                    "options": [
                        "Planista wejścia-wyjścia optymalizuje ruch głowicy dysku twardego HDD poprzez scalanie i sortowanie żądań.",
                        "Planista `Deadline` przeciwdziała zagłodzeniu żądań zapisu i odczytu, przypisując im maksymalny czas oczekiwania.",
                        "Planista `CFQ` (Complete Fair Queuing) kolejkuje żądania oddzielnie dla każdego procesu.",
                        "Planista `Noop` wykonuje skomplikowane sortowanie sektorów i jest dedykowany dla magnetycznych dysków HDD."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Dąży do ograniczenia skoków głowicy magnetycznej. (Wykład 13)\n• **Opcja b) (TAK):** Posiada kolejki z terminami (FIFO) osobno dla zapisu i odczytu. (Wykład 13)\n• **Opcja c) (TAK):** Każdy proces otrzymuje sprawiedliwy time-slice na operacje dyskowe. (Wykład 13)\n• **Opcja d) (NIE):** Noop (no-operation) nie sortuje żądań (robi tylko scalanie), co jest optymalne dla SSD/NVMe. (Wykład 13)"
                },
                {
                    "id": "so-wyk-027",
                    "type": "yn",
                    "question": "Które z zdań dotyczących wirtualnej przestrzeni adresowej procesów w Linuksie są prawdziwe?",
                    "options": [
                        "Przestrzeń adresowa procesu (pamięć wirtualna) opisana jest przez struct `mm_struct`, wskazywany przez deskryptor `task_struct`.",
                        "Spójne obszary pamięci wirtualnej (np. stos, sterta, kod) są reprezentowane przez obiekty struct `vm_area_struct` (VMA).",
                        "Jądro organizuje struktury `vm_area_struct` procesu w listę jednokierunkową oraz drzewo czerwono-czarne.",
                        "Wszystkie wątki w obrębie jednego procesu współdzielą tę samą strukturę `mm_struct`."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** mm_struct opisuje całą pamięć wirtualną powiązaną z procesem. (Wykład 14)\n• **Opcja b) (TAK):** vm_area_struct opisuje ciągły obszar pamięci o takich samych prawach dostępu. (Wykład 14)\n• **Opcja c) (TAK):** Lista służy do sekwencyjnego przechodzenia pamięci, a drzewo do szybkiego wyszukiwania obszaru po adresie wirtualnym. (Wykład 14)\n• **Opcja d) (TAK):** Z definicji wątki współdzielą tę samą przestrzeń adresową. (Wykład 14)"
                },
                {
                    "id": "so-wyk-028",
                    "type": "yn",
                    "question": "Jak działa MMU, tablice stron i funkcja mmap?",
                    "options": [
                        "Katalog Stron Globalnych (PGD) jest najwyższym poziomem translacji stron pamięci wirtualnej.",
                        "Wywołanie systemowe `mmap()` umożliwia mapowanie plików directly do wirtualnej przestrzeni adresowej procesu.",
                        "Błąd strony (page fault) jest zgłaszany przez procesor, gdy żądana strona wirtualna nie jest obecnie załadowana do RAM-u.",
                        "Funkcja `malloc()` w bibliotece standardowej C od razu rezerwuje i alokuje ciągłe ramki pamięci fizycznej."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** PGD jest zakotwiczony w rejestrze CR3 procesora i rozpoczyna tablice stron. (Wykład 14)\n• **Opcja b) (TAK):** Pozwala na bardzo szybkie I/O dla plików bez narzutu read/write. (Wykład 14)\n• **Opcja c) (TAK):** Wywołuje przerwanie strony, a jądro doładowuje ramkę z dysku/pliku wymiany. (Wykład 14)\n• **Opcja d) (NIE):** malloc() rezerwuje wirtualne adresy, a RAM jest przypisywany leniwie podczas pierwszego dostępu (page fault). (Wykład 14)"
                },
                {
                    "id": "so-wyk-029",
                    "type": "yn",
                    "question": "Określ prawdziwość zdań na temat obsługi pakietów sieciowych:",
                    "options": [
                        "Struktura struct `sk_buff` (socket buffer) reprezentuje pakiet sieciowy w jądrze i przechodzi przez wszystkie warstwy stosu sieciowego.",
                        "Każda sieciowa karta fizyczna w jądru jest reprezentowana przez strukturę struct `net_device`.",
                        "Wskaźniki `head`, `data`, `tail` i `end` w struct `sk_buff` pozwalają warstwom na modyfikację nagłówków bez drogiego kopiowania danych.",
                        "Funkcja `dev_queue_xmit()` służy do wysłania bufora `sk_buff` przez kartę sieciową."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** sk_buff to uniwersalny nośnik danych sieciowych w Linuksie. (Wykład 15)\n• **Opcja b) (TAK):** net_device reprezentuje interfejs sieciowy (np. eth0, wlan0). (Wykład 15)\n• **Opcja c) (TAK):** Przesunięcie wskaźnika data/tail pozwala na dodanie nagłówka TCP/IP/Ethernet bez realokacji pamięci. (Wykład 15)\n• **Opcja d) (TAK):** Służy do przekazania pakietu do warstwy sterownika karty sieciowej. (Wykład 15)"
                },
                {
                    "id": "so-wyk-030",
                    "type": "yn",
                    "question": "Stos sieciowy Linuksa – wskaż prawdziwe zdania:",
                    "options": [
                        "Odbiór pakietów sieciowych jest wspierany przez przerwania programowe, zwłaszcza `NET_RX_SOFTIRQ`.",
                        "Mechanizm NAPI (New API) pozwala na czasowe wyłączenie przerwań sieciowych na rzecz pollingu przy dużym ruchu, co zmniejsza narzut CPU.",
                        "Stos sieciowy Linuksa nie wspiera protokołu IPv6.",
                        "Funkcja `netif_rx()` służy do przekazania odebranego pakietu sieciowego wyżej do kolejki wejściowej jądra."
                    ],
                    "correctAnswers": [
                        0,
                        1,
                        3
                    ],
                    "explanation": "Wyjaśnienia:\n• **Opcja a) (TAK):** Dolna połówka NET_RX_SOFTIRQ przetwarza ramki sieciowe. (Wykład 15)\n• **Opcja b) (TAK):** NAPI zapobiega przeciążeniu przerwaniami przy gigabitowym transferze (livelock). (Wykład 15)\n• **Opcja c) (NIE):** IPv6 jest w pełni zintegrowany i wspierany. (Wykład 15)\n• **Opcja d) (TAK):** Przekazuje skb do warstwy sieciowej IP. (Wykład 15)"
                }
            ]
        },
        {
            "id": "so-word-pyt-1",
            "name": "Word_pyt_1",
            "questions": [
                {
                    "id": "so-word-pyt-1-001",
                    "question": "Nie równoważenie obciążenia procesorów następuje wyłącznie wtedy, gdykolejka procesów gotowych któregoś z nich jest pusta.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-002",
                    "question": "Nie przenoszenie bufora pakietu między kolejkami jest czasochłonne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-003",
                    "question": "semafor nie może być przetrzymywany przez wątek, który już przetrzymujerygiel pętlowy",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-004",
                    "question": "SO2 1/28 Tak deskryptorypamięci nigdy nie są współdzielone przez procesy (wątki) użytkownika.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-005",
                    "question": "Nie czynności zkolejek prac są wykonywane w kontekście przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-006",
                    "question": "Nie waga procesu jestodwrotnością wartości jego priorytetu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-007",
                    "question": "Nie deskryptoryprocesów są powiązane w dwukierunkową listę nazywaną listą procesów.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-008",
                    "question": "dla każdego zamontowanego systemu plików tworzona jest zmienna opisująca jego punkt montowania.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-009",
                    "question": "SO2 2/28 Nie Nie funkcje związane z licznikami niskiej rozdzielczości wykonywane są w kontekście przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-010",
                    "question": "Nie tasklety są wykonywane w kontekście procesu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-011",
                    "question": "Nie zazwyczaj wywołania systemowe implementowane są w postaci funkcjinapisanych w assemblerze",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-012",
                    "question": "Nie obiekt superblokumoże być stosowany w obsłudze systemów plików, które nie mają fizycznej implementacji",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-013",
                    "question": "SO2 3/28 Nie zegar czasu rzeczywistego (RTC) jest okresowo odczytywany przez jądrosystemu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-014",
                    "question": "Nie istnieje możliwość stworzenia kolejki prac, która będzie obsługiwana naplatformach wieloprocesorowych przez pojedynczy wątek roboczy.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-015",
                    "question": "Nie stosowanie blokady BKL nie jest zalecane",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-016",
                    "question": "Nie adresowanie stronw Linuksie jest domyślnie czteropoziomowe",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-017",
                    "question": "wszystkie funkcjez biblioteki \"libc\" korzystają z wywołań systemowych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-018",
                    "question": "SO2 4/28 Tak pamięć na obiekty wpisów katalogowych jest przydzielana i zwalnianaprzez alokator plastrowy",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-019",
                    "question": "Nie dodawanie nowych wywołań systemowych jest zalecaną przez programistówjądra Linuksa praktyką",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-020",
                    "question": "Nie obiekty wpisu katalogowego, które są w stanie ujemnym, nie są niszczone,jeśli zachodzi taka potrzeba",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-021",
                    "question": "Nie planista terminowy przydziela domyślnie dłuższy termin realizacji operacji odczytu niż operacji zapisu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-022",
                    "question": "SO2 5/28 Nie wszystkieprocedury obsługi przerwań wymagają wyłączenia wszystkich linii zgłaszaniaprzerwań na czas ich wykonywania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-023",
                    "question": "Nie niskopoziomowy mechanizm obsługi pamięci działa w oparciu o algorytm bliźniaków",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-024",
                    "question": "Nie rygiel pętlowy czytelnika może być jednocześnie przetrzymywany przezwięcej niż jeden wątek wykonania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-025",
                    "question": "Nie proces, który jest wykonywany ma stan TASK_RUNNING.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-026",
                    "question": "funkcje związane z filtrem sieciowym mogą \"wykradać\" niektóre pakiety, aby przetworzyć je w inny sposób niż pozostałe",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-027",
                    "question": "SO2 6/28 Tak stos z którego korzystają procedury obsługi przerwań ma ograniczonąwielkość",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-028",
                    "question": "Nie przerwaniaprogramowe są alokowane statycznie podczas kompilacji jądra",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-029",
                    "question": "Nie każde wywołaniesystemowe zwraca wartość stanowiącą kod jego wykonania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-030",
                    "question": "Nie procedury obsługiprzerwań w Linuksie są funkcjami napisanymi w języku C",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-031",
                    "question": "każdy z buforów wyposażony jest w nagłówek zawierający dane niezbędne do zarządzania nim",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-032",
                    "question": "SO2 7/28 Nie Nie semafory mogą byćstosowane w procedurach obsługi przerwań",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-033",
                    "question": "Nie Linux obsługujesystemy wieloprocesorowe o organizacji NUMA",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-034",
                    "question": "Nie niskopoziomowy mechanizm obsługi pamięci umożliwia przydzielenie obszaru pamięci o wielkości jednego bajta",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-035",
                    "question": "Nie urządzenia obsługiwane przez Linuksa są wyłącznie urządzeniami fizycznymi",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-036",
                    "question": "SO2 8/28 Nie wielkość bloku w Linuksie jest nieograniczona",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-037",
                    "question": "Nie sterowniki urządzeń znakowych korzystają z niektórych struktur związanych z wirtualnym systemem plików (VFS)",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-038",
                    "question": "Nie część procesorów wymaga, aby argumenty do funkcji implementującychwywołania systemowe były przekazywane wyłącznie przez stos",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-039",
                    "question": "Nie nagłówek bufora nie przechowuje informacji o operacjach wejścia-wyjściaz jakimi ten bufor jest związany.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-040",
                    "question": "-linie zgłaszaniaprzerwań (IRQ) mogą być współdzielone",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-041",
                    "question": "SO2 9/28 Tak adresy wszystkich zarejestrowanych wywołań systemowych są przechowywanew specjalnej tablicy",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-042",
                    "question": "Nie kod funkcji implementującej wywołanie systemowe może być umieszczony wmodule",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-043",
                    "question": "Nie sterownik urządzenia może być dołączony do systemu w postaci modułu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-044",
                    "question": "Nie proces użytkownika może być wywłaszczony w ramach powrotu z wywołaniasystemowego lub procedury obsługi przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-045",
                    "question": "jądro wykonuje czynności związane z obsługą warstwy łącza, sieci itransportowej modelu ISO/OSI",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-046",
                    "question": "SO2 10/28 Nie Nie kolejka procesów gotowych zawiera wskaźniki na dwie tablice priorytetów",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-047",
                    "question": "Nie kolejka procesów gotowych jest zrealizowana w postaci drzewaczerwonoczarnego.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-048",
                    "question": "Nie czas wybierania procesów przez planistę CFS jest zawsze krótszy wporównaniu z analogicznym czasem dla planisty O(1)",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-049",
                    "question": "Nie większość procedurobsługi przerwań korzysta z makrodefinicji \"current\"",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-050",
                    "question": "w komputerachklasy PC wszystkie numery przerwań są przydzielane statycznie",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-051",
                    "question": "SO2 11/28 Nie Nie które nieuniksowe systemy plików nie posiadają wszystkich informacji ,które muszą być umieszczone w obiekcie i-węzła",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-052",
                    "question": "Nie te same tasklety mogą być wykonywane współbieżnie na platformach wieloprocesorowych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-053",
                    "question": "Nie -mechanizm liczników wysokiej rozdzielczości korzysta z drzewa czerwonoczarnego",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-054",
                    "question": "zadanie o dużym stopniu interaktywności może, po wyczerpaniu swojegokwantu czasu, ponownie trafić do tablicy priorytetów aktywnych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-055",
                    "question": "SO2 12/28 Tak wywołania systemowe mogą nie przyjmować żadnych argumentów",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-056",
                    "question": "Nie każdy procesor ma swoją kolejkę procesów gotowych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-057",
                    "question": "Nie wartość stałej \"HZ\" jest taka sama dla wszystkich platform sprzętowych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-058",
                    "question": "Nie wielkość segmentu jest zawsze równa wielkości bufora",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-059",
                    "question": "nie we wszystkichplatformach sprzętowych musi występować strefa pamięci wysokiej (ZONE_HIGHMEM)",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-060",
                    "question": "SO2 13/28 Tak zegar wirtualny jest wprost implementowany w jądrze Linuksa",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-061",
                    "question": "Nie -metody obsługujące urządzenia znakowe muszą działać według określonego protokołu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-062",
                    "question": "Nie czas wirtualny procesu zależy od jego wagi",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-063",
                    "question": "Nie -klasaszeregowania SCHED_BATCH jest obsługiwana za pomocą algorytmu rotacyjnego",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-064",
                    "question": "-niektóreprzerwania mogą zasilać pulę entropii jądra.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-065",
                    "question": "SO2 14/28 Tak im wyższy jest priorytet procesu, tym krótszy kwant czasu on otrzymuje",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-066",
                    "question": "Nie mechanizm RCU niszczy oryginalną informację w momencie, kiedy wątek-pisarz opublikuje wskaźnik na jej zmodyfikowaną kopię.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-067",
                    "question": "Nie funkcjaimplementująca wywołanie systemowe musi sprawdzać poprawność przekazanych jejargumentów.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-068",
                    "question": "Nie liczniki wysokiej rozdzielczości mogą być cykliczne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-069",
                    "question": "obiekty wpisów katalogowych mają swoje odpowiedniki na nośniku danych.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-070",
                    "question": "SO2 15/28 Tak obiekty zawierające informacje o obszarach pamięci są umieszczone jednocześnie w dwóch różnych strukturach danych,",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-071",
                    "question": "Nie planista CFQ nie stosuje przewidywania.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-072",
                    "question": "Nie obiekty i-węzłów związane są wyłącznie z fizycznymi plikami",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-073",
                    "question": "Nie NAPI nigdy nie pozwala na sygnalizowanie odbioru pakietu za pomocą przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-074",
                    "question": "proces, który jest gotów do wykonania znajduje się w stanie TASK_RUNNING",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-075",
                    "question": "SO2 16/28 NIe Nie alokator plastrowy jest rozwiązaniem zapożyczonym z systemu operacyjnego firmy Sun Microsystems",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-076",
                    "question": "Nie proces zakończony ma stan TASK_STOPPED",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-077",
                    "question": "Nie obiekt wpisu katalogowego, który nie jest w użyciu, ale któremu odpowiada prawidłowyi-węzeł, jest w stanie ujemnym",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-078",
                    "question": "Nie -jeśli platforma sprzętowa nie dostarcza zegarów o nanosekundowejprecyzji, to mechanizm liczników wysokiej rozdzielczości nie jest dla niej wogóle dostępny.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-079",
                    "question": "SO2 17/28 Nie wszystkie wątki jądra korzystają z jednego, wspólnego dla nichdeskryptora pamięci",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-080",
                    "question": "Nie czas fizyczny jestmierzony z dokładnością nanosekundową",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-081",
                    "question": "Nie całkowita liczbaprzerwań programowych jest ograniczona",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-082",
                    "question": "Nie struktury \"bio\" ułatwiają realizację operacji wejścia-wyjścia o rozproszonym źródle",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-083",
                    "question": "deskryptor procesu jest umieszczony na dnie jego stosu w jądrze systemu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-084",
                    "question": "SO2 18/28 Tak sekcje tekstutworzone są nie tylko dla procesów, ale również dla bibliotek współdzielonych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-085",
                    "question": "Nie w filtrze sieciowym, z pojedynczym uchwytem nie może być skojarzonawięcej niż jedna funkcja przetwarzająca",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-086",
                    "question": "Nie wątek \"ksoftirqd\" odpowiedzialny jest zarówno za obsługęprzerwań programowych, jak i kolejek prac",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-087",
                    "question": "Nie wątki w Linuksie są tworzone za pomocą innego wywołania systemowego niżprocesy",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-088",
                    "question": "procedury obsługi przerwań są wywoływane w sposób asynchroniczny",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-089",
                    "question": "SO2 19/28 Nie Nie programista piszący sterownik urządzenia znakowego musi oprogramować metody obiektu i-węzła",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-090",
                    "question": "Nie -każdy bufor zawsze jest związany z blokiem na nośniku danych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-091",
                    "question": "Nie rejestr może pełnić więcej niż jedną funkcję",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-092",
                    "question": "Nie im wyższy jest priorytet procesu, tym krótszy kwant czasu on otrzymuje",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-093",
                    "question": "rygle pętlowe nie są używane w systemach jednoprocesorowych.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-094",
                    "question": "SO2 20/28 Nie Nie nowy kwant czasu dla procesu jest ustalany dopiero wtedy, gdy wszystkieprocesy w systemie wyczerpią swoje kwanty",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-095",
                    "question": "Nie liczniki niskiej rozdzielczości są cykliczne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-096",
                    "question": "Nie można określićminimalny czas o jaki zostanie opóźnione wykonanie czynności w kolejkach prac",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-097",
                    "question": "Nie obiekty plików związane są ze wszystkimi plikami zapisanymi w systemie plików",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-098",
                    "question": "SO2 21/28 Nie rygle pętlowe wprowadzają wątki oczekujące na ich zwolnienie w stanaktywnego oczekiwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-099",
                    "question": "Nie w trakcie tworzenia nowy proces otrzymuje osobny obszar tekstu i danych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-100",
                    "question": "Nie zwykły rygiel pętlowy może być przetrzymywany przez kilka wątków jednocześnie",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-101",
                    "question": "Nie alokator plastrowy przedziela pamięć na struktury często alokowane i zwalniane przez jądro systemu.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-102",
                    "question": "procedury obsługiprzerwań są wykonywane w kontekście przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-103",
                    "question": "SO2 22/28 Tak numer główny identyfikuje sterownik obsługujący urządzenie lub grupę urządzeń",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-104",
                    "question": "Nie liczbę taktów zegara od uruchomienia systemu przechowuje zmienna \"jiffies\"",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-105",
                    "question": "Nie podzielneoperacje na bitach przeprowadzane są za pomocą tych samych funkcji coniepodzielne operacje na liczbach całkowitych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-106",
                    "question": "Nie przerwaniaprogramowe są wykonywane w kontekście procesu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-107",
                    "question": "VFS napisany jest w języku C++",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-108",
                    "question": "SO2 23/28 Nie Nie proces \"init\" może zostać nowym rodzicem procesu, któregoproces macierzysty już się zakończył",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-109",
                    "question": "Nie podstawowym mechanizmem sprzętowym wykorzystywanym przez Linuksa doobsługi pamięci jest segmentacja",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-110",
                    "question": "Nie deskryptor pamięci przechowuje adres startowy i końcowy obszaru argumentów wywołania programu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-111",
                    "question": "Nie priorytet zwykłychprocesów jest ustalany wyłącznie na podstawie stopnia ich interaktywności",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-112",
                    "question": "SO2 24/28 Nie priorytety procesów są prawie niezmienne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-113",
                    "question": "Nie w komputerach klasy PC kontroler jest zawsze częścią struktury sprzętowej łączącej szynę wejścia-wyjścia z urządzeniem",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-114",
                    "question": "Nie -dodanie do jądranowego wywołania systemowego wymaga modyfikacji biblioteki \"libc\",aby umożliwić procesom użytkownika korzystanie z niego.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-115",
                    "question": "Nie planista przydziela procesor temu procesowi, który najdłużej z niegokorzystał.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-116",
                    "question": "implementacja procedury obsługi przerwania zegarowego jest całkowicie zależna od sprzętu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-117",
                    "question": "SO2 25/28 Tak bufory są wykorzystywane wyłącznie do przechowywania danych odczytanych z nośnika urządzenia blokowego",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-118",
                    "question": "Nie częstotliwość zegara systemowego jest określona stałą \"HZ\"",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-119",
                    "question": "Nie struktury \"bio\" reprezentują operacje wejścia-wyjścia podczasich trwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-120",
                    "question": "Nie domyślnie Linuxprzydziela pamięć ze strefy DMA (ZONE_DMA)",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-121",
                    "question": "alokator plastrowy wykorzystuje do własnych celów dedykowane pamięci podręczne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-122",
                    "question": "SO2 26/28 Nie Nie dla procesów z priorytetem równym 0 czas wirtualny jest taki sam jakczas fizyczny",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-123",
                    "question": "Nie -można precyzyjne określić czas, po którym przerwanie programowe powinnobyć wykonane",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-124",
                    "question": "Nie urządzenia znakowe adresują dane sekwencyjnie.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-125",
                    "question": "Nie sterowniki wszystkich urządzeń blokowych muszą tworzyć kolejki żądań.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-126",
                    "question": "SO2 27/28 Nie czas wykonania procedur obsługi przerwań (górnych połówek) może byćdowolnie długi",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt-1-127",
                    "question": "Nie -funkcje realizujące operacje niepodzielne na liczbach całkowitychdziałają na zmiennych typu \"int\"",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt-1-128",
                    "question": "SO2 28/28",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                }
            ]
        },
        {
            "id": "so-word-pyt2",
            "name": "word_pyt2",
            "questions": [
                {
                    "id": "so-word-pyt2-001",
                    "question": "Nie Procedury obsługi przerwań korzystają ze stosu jądra, który manieograniczony rozmiar",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-002",
                    "question": "Nie W procedurach obsługi przerwań można wywoła funkcje, które ulegająblokowaniu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-003",
                    "question": "Nie Struktura thread_struct jest deskryptorem procesu.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-004",
                    "question": "SO2-2 1/21 Nie Czynności odroczone wykonywane w ramach kolejek prac wykonywane są w kontekście przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-005",
                    "question": "Nie Plik jest powiązany z wpisem katalogowym.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-006",
                    "question": "Nie Planista CFS przelicza priorytety procesów na wagi.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-007",
                    "question": "Nie Programista jądra powinien używać funkcji rekurencyjnych.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-008",
                    "question": "Nie Kwanty czasu dla poszczególnych zadań są przeliczane dopiero wówczas ,gdy ostatnie z zadań znajdujących się w tablicy priorytetów aktywnych wyczerpie swój kwant czasu.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-009",
                    "question": "SO2-2 2/21 Nie Przy wywołaniach systemowych jest używany sys_",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-010",
                    "question": "Nie Każdy wątek jądra posiada odrębną przestrzeń adresową",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-011",
                    "question": "Nie Funkcja realizująca wywołania systemowe musi być całości napisana w asemblerze",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-012",
                    "question": "Nie Mechanizm szeregowania dokonuje zrównoważenia obciążenia procesów wyłącznie wtedy, kiedy kolejka zadań jednego z nich jest pusta",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-013",
                    "question": "Nie Planista CFS korzysta z tablicy odwrotności priorytetów.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-014",
                    "question": "SO2-2 3/21 Nie Obsługa struktury bio jest mniej skomplikowana niż obsługa nagłówków buforów.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-015",
                    "question": "Nie Rygle pętlowe powinny być stosowane wszędzie tam, gdzie nie można zawiesić wątku i gdzie czas przełączania kontekstu byłby niewspółmiernie dłuższy z czasem aktywnego oczekiwania.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-016",
                    "question": "Nie Mechanizm kolejek prac pozwala na określenie czasu po upływie, którego dana czynność może się rozpocząć",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-017",
                    "question": "Nie Zmienna jiffies przechowuje informacje o czasie rzeczywistym systemu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-018",
                    "question": "Nie Listy liczników nie są przez system sortowane",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-019",
                    "question": "SO2-2 4/21 Nie Procedury obsługi przerwania mogą korzystać z wartości zwracanej przez makrodefinicję current",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-020",
                    "question": "Nie Każde urządzenie musi mieć inny numer przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-021",
                    "question": "Nie Przerwania programowe są wykorzystywane przy taskletach",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-022",
                    "question": "Nie które operacje niepodzielne mogą by zrealizowane jak jeden rozkaz",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-023",
                    "question": "Nie Programista powinien zwracać uwagę na rozmiar stosu jądra",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-024",
                    "question": "SO2-2 5/21 Nie Kolejki prac zastąpiły mechanizm dolnych połówek znany, jako ”kolejki zadań”, który był wykorzystywany we wcześniejszych jądra Linuksa",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-025",
                    "question": "Nie Kod w mechanizmie RCU może ulec zawieszeniu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-026",
                    "question": "Nie Zadanie nigdy nie może być wywłaszczone po zakończeniu obsługi przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-027",
                    "question": "Nie Jądro systemu linux zawiera specjalną funkcje, która pozwala na opróżnienie domyślnej kolejki prac",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-028",
                    "question": "Nie Makrodefinicja current pozwala na szybki dostęp do deskryptora bieżącego procesu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-029",
                    "question": "SO2-2 6/21 Nie Jeśli w jądrzetworzona jest nowa kolejka prac, to jest równocześnie dla niej tworzony nowyodrębny wątek roboczy",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-030",
                    "question": "Nie Odczyty w mechanizmie RCU powinny byc częste, a zapisy sporadyczne.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-031",
                    "question": "Nie Alokator plastrowy przydziela pamięć na deskryptor.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-032",
                    "question": "Nie Urządzenie znakowe jest zwykłym plikiem.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-033",
                    "question": "Nie Alokator plastrowy przydziela w pierwszej kolejności pamięć z plastrów pustych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-034",
                    "question": "SO2-2 7/21 Nie Zmienna\"jiffies\" jest nałożona na starsze 32 bity zmiennej\"jiffies_64\"",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-035",
                    "question": "Nie Każda ramka jest określona strukturą struct page",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-036",
                    "question": "Nie Wirtualny system plików jest modelem obiektowym.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-037",
                    "question": "Nie Rygle pętlowe są rekurencyjne.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-038",
                    "question": "Nie Liczniki wysokiej rozdzielczości pozwalają na ich regulowanie z nanosekundową precyzją",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-039",
                    "question": "SO2-2 8/21 Nie Jądro może przydzielić dodatkową przestrzeń adresową dla procesu podczas jego wykonywania.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-040",
                    "question": "Nie Użytkownik uprzywilejowany może dowolnie zmieniać wartość stałej HZ",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-041",
                    "question": "Nie Linux nie jest rygorystycznym systemem czasu rzeczywistego",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-042",
                    "question": "Nie Zadania interaktywne otrzymują od planisty O(1) mniejszy kwant czasu niż zadania nieinteraktywne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-043",
                    "question": "Nie Procesy które nie korzystają z procesora, są przesuwane w lewą stronę drzewa czerwono-czarnego.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-044",
                    "question": "SO2-2 9/21 Nie Obsługa przerwań podzielona jest na górną połówkę i dolną połówkę",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-045",
                    "question": "Nie Blokada BKL jest blokadą gruboziarnistą",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-046",
                    "question": "Nie W 64-bitowychprocesorach pamięć wysoka jest oznaczona jako HIGHMEM",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-047",
                    "question": "Nie Blokady sekwencyjne pozwalają ustalić czy operacja odczytu nie została przepleciona operacją zapisu",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-048",
                    "question": "Nie Maksymalna ilość przerwań programowych wynosi 32",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-049",
                    "question": "SO2-2 10/21 Nie Linux realizuje wielozadaniowość w oparciu o kooperację",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-050",
                    "question": "Nie Struktura bio korzysta z listy offsetów.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-051",
                    "question": "Nie Planista CFS całkowicie zastąpił planistę O(1).",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-052",
                    "question": "Nie Wszystkie pliki na dysku są reprezentowane przez VFS (czy coś takiego).",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-053",
                    "question": "Nie Programista może napisać dedykowaną pamięć podręczną dla alokatora plastrowego",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-054",
                    "question": "Przerwanie składa się z dwóch połówek.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-055",
                    "question": "SO2-2 11/21 Nie Nie PID może być ujemny.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-056",
                    "question": "Nie Procesy UNINTERRUPTIBLE mogą zostać ustawione w stan gotowości przez inne zdarzenie niż to, na które oczekują.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-057",
                    "question": "Nie Blokada BKL nie jest rekurencyjna",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-058",
                    "question": "Nie Wątek wykonania ,który przetrzymuje semafor nie może równocześnie przetrzyma rygla pętlowego",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-059",
                    "question": "Proces macierzysty, którego proces macierzysty się zakończył przechodzi w stan TASK_ZOMBIE",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-060",
                    "question": "SO2-2 12/21 Tak Procesy mogą współdzielić deskryptor pamięci",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-061",
                    "question": "Nie Mechanizm RCU posługuje się wskaźnikami.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-062",
                    "question": "Nie Pamięć fizyczna nieciągła jest przydzielana za pomocą algorytmu bliźniaków.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-063",
                    "question": "Nie W systemie linux,w przestrzeni użytkownika wywłaszczenie procesu może zajść tylko w ściśleokreślonym momencie jego działania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-064",
                    "question": "Główną strukturaplanisty CFS jest drzewo czerwono-czarne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-065",
                    "question": "SO2-2 13/21 Tak Promowane są zadania o wysokim stopniu interaktywności",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-066",
                    "question": "Nie Programista jądra powinien się posługiwać zmienną printf.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-067",
                    "question": "Nie -Licznik monotoniczny jest wysokiej rozdzielczości",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-068",
                    "question": "Nie Urządzenia znakowe mają dostęp sekwencyjny.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-069",
                    "question": "Nie Deskryptory pamięci są połączone w listę i drzewo czerwono-czarne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-070",
                    "question": "SO2-2 14/21 Nie Do linii obsługi przerwania o określonym numerze może by przypisanych kilka procedur obsługi przerwań",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-071",
                    "question": "Nie Algorytm noop realizuje tylko operacje scalania.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-072",
                    "question": "Nie Jądro cyklicznie odczytuje wartości z zegara czasu rzeczywistego (RTC)",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-073",
                    "question": "Nie Procedury obsługiprzerwań mogą by wykonywane dowolnie długo",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-074",
                    "question": "Nie -W wersji 2.6 deskryptor pamięci jest przechowywany na stosie.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-075",
                    "question": "SO2-2 15/21 Nie Aby procedura obsługi przerwania mogła być wywołana, musi zostać wcześniej zarejestrowana",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-076",
                    "question": "Nie Wszystkie funkcje ze standardowej biblioteki jezyka c korzystają z wołań systemowych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-077",
                    "question": "Nie Numery przerwań mogą być przydzielane niektórym urządzeniom dynamicznie",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-078",
                    "question": "Nie Alokator plastrowy przechowuje własne struktury w pamięci dedykowanej",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-079",
                    "question": "Nie Stronicowanie nigdy nie korzysta z segmentacji.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-080",
                    "question": "SO2-2 16/21 Nie Działanie planisty O(1) oparte jest na schemacie kolejek ze sprzężeniem zwrotnym",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-081",
                    "question": "Nie Priorytet każdego zadania jest ustalany wyłącznie na podstawie jegointeraktywności",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-082",
                    "question": "Nie które pola struktury dotyczącej plików mogą być wypełniane dowolnymi wartościami.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-083",
                    "question": "Nie Rygle pętlowe nie są używane w systemach jednoprocesorowych w jądrze, które wyłącza wątków",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-084",
                    "question": "Rygle pętlowe są użyteczne w systemach jednoprocesorowych z wywłaszczaniem jądra.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-085",
                    "question": "SO2-2 17/21 Tak Każde wywołanie systemowe zwraca wartość typu long",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-086",
                    "question": "Nie Dodawanie nowych wywołań systemowych nie jest zalecanym sposobem przeztwórców jądra sposobem dodawania nowej funkcjonalności",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-087",
                    "question": "Nie Każde wywołanie systemowe musi zawiera, co najmniej 1 argument wywołania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-088",
                    "question": "Nie Dostęp do zmiennych lokalnych wątków nie musi podlega synchronizacji",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-089",
                    "question": "Rozmiar sektora dla urządzeń blokowych wynosi zazwyczaj 1024 bajty.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-090",
                    "question": "SO2-2 18/21 Tak Deskryptor procesu jest opisywany strukturą struct thread_info.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-091",
                    "question": "Nie Zawartość zegara czasu rzeczywistego jest odczytywana przez jądro co pewien okres czasu.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-092",
                    "question": "Nie VFS jest zapożyczony od Microsoftu.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-093",
                    "question": "Nie Za szeregowanie wątków odpowiada inny mechanizm niż za szeregowanieprocesów",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-094",
                    "question": "Wymiana priorytetów zadań sprowadza się do zamiany wskaźników na tablice aktywną i przeterminowaną",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-095",
                    "question": "SO2-2 19/21 Tak Argumenty wywołań systemowych są przekazywane tylko przez rejestry programowe",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-096",
                    "question": "Nie Stała \"HZ\" dla architektury i386 wynosi 1000",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-097",
                    "question": "Nie Zwiększenie wartości stałej HZ powoduje zmniejszenie częstotliwości przerwań zegarowych",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-098",
                    "question": "Nie jest wymagane, aby procedury obsługi przerwań były wielobieżne",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-099",
                    "question": "Przeplot operacji jest przyczyną występowania problemu sekcji krytycznej",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-100",
                    "question": "SO2-2 20/21 Tak -Liczniki dynamiczne ze względu na zbyt małą precyzje nie mogą być wykorzystywane w zadaniach czasu rzeczywistego",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt2-101",
                    "question": "Nie Stan procesów po zakończeniu jest przechowywany w tym samym polu deskryptora.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-102",
                    "question": "Nie Liczniki bazują na taskletach",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt2-103",
                    "question": "SO2-2 21/21",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                }
            ]
        },
        {
            "id": "so-word-pyt3",
            "name": "word_pyt3",
            "questions": [
                {
                    "id": "so-word-pyt3-001",
                    "question": "Nie Coś o obiekciewpisu katalogowego (dentry) i jego stanach: używany, używany lub ujemny",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-002",
                    "question": "Nie Programista nie powinien uzywac funkcji goto.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-003",
                    "question": "Nie Deskryptory procesów są połączone w listę dwukierunkową",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-004",
                    "question": "SO2-3 1/3 Nie Wszystkie architektury, które obsługuje Linux dostarczają rozkazów maszynowych realizujących operacje niepodzielne na wartościach będących liczbami całkowitymi",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-005",
                    "question": "Nie Zmienne sygnałowe są uproszczoną wersją semaforów.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-006",
                    "question": "Nie Czy liczniki niskiej rozdzielczości działają z mikrosekundową precyzją",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        1
                    ]
                },
                {
                    "id": "so-word-pyt3-007",
                    "question": "Nie Rygle R-W stosujemy w zagadnieniach typu problem czytelników i pisarzy, gdzie faworyzowani są pisarze",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-008",
                    "question": "Nie Częstotliwość pojawiania się wszystkich przerwań są wykorzystywane doinicjalizowania generatora licz los.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-009",
                    "question": "SO2-3 2/3 Nie Deskryptory procesów powiązane są w listę.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-010",
                    "question": "Nie Rygle pętlowe mogą być stosowane we fragmentach kodu wykonywujących się w kontekście przerwania",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-011",
                    "question": "Nie Architektura NUMA jest obsługiwana od wersji jądra 2.6.",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                },
                {
                    "id": "so-word-pyt3-012",
                    "question": "SO2-3 3/3",
                    "options": [
                        "Tak",
                        "Nie"
                    ],
                    "correctAnswers": [
                        0
                    ]
                }
            ]
        }
    ],
    "dbVersion": 9
};
