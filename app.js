// Основные данные тестов
const TESTS_DATA = {
  "mbti": {
    "name": "MBTI - Типы личности Майерс-Бриггс",
    "description": "Самый популярный тест для определения одного из 16 типов личности",
    "popularity_score": 10,
    "questions": [
      {
        "question": "Вы легко знакомитесь с людьми?",
        "options": ["Да", "Скорее да", "Скорее нет", "Нет"],
        "dimension": "E-I",
        "points": [3, 2, 1, 0]
      },
      {
        "question": "Вы предпочитаете работать с фактами и деталями?",
        "options": ["Да", "Скорее да", "Скорее нет", "Нет"],
        "dimension": "S-N",
        "points": [3, 2, 1, 0]
      },
      {
        "question": "При принятии решений вы больше полагаетесь на логику?",
        "options": ["Да", "Скорее да", "Скорее нет", "Нет"],
        "dimension": "T-F", 
        "points": [3, 2, 1, 0]
      },
      {
        "question": "Вы предпочитаете планировать и придерживаться плана?",
        "options": ["Да", "Скорее да", "Скорее нет", "Нет"],
        "dimension": "J-P",
        "points": [3, 2, 1, 0]
      },
      {
        "question": "Вы чувствуете себя комфортно в больших компаниях?",
        "options": ["Да", "Скорее да", "Скорее нет", "Нет"],
        "dimension": "E-I",
        "points": [3, 2, 1, 0]
      },
      {
        "question": "Вы любите работать с абстрактными идеями?",
        "options": ["Да", "Скорее да", "Скорее нет", "Нет"],
        "dimension": "S-N",
        "points": [0, 1, 2, 3]
      },
      {
        "question": "Вы принимаете решения сердцем, а не головой?",
        "options": ["Да", "Скорее да", "Скорее нет", "Нет"],
        "dimension": "T-F",
        "points": [0, 1, 2, 3]
      },
      {
        "question": "Вы предпочитаете действовать спонтанно?",
        "options": ["Да", "Скорее да", "Скорее нет", "Нет"],
        "dimension": "J-P",
        "points": [0, 1, 2, 3]
      }
    ],
    "interpretation": {
      "E-I": {"name": "Экстраверсия-Интроверсия", "high": "Экстраверт", "low": "Интроверт"},
      "S-N": {"name": "Сенсорика-Интуиция", "high": "Сенсорик", "low": "Интуит"},
      "T-F": {"name": "Мышление-Чувствование", "high": "Логик", "low": "Этик"},
      "J-P": {"name": "Суждение-Восприятие", "high": "Рационал", "low": "Иррационал"}
    }
  },
  
  "big_five": {
    "name": "Big Five (OCEAN) - Большая пятерка",
    "description": "Наиболее научно обоснованный тест личности по 5 факторам",
    "popularity_score": 9,
    "questions": [
      {
        "question": "Я общительный человек",
        "options": ["Полностью согласен", "Согласен", "Нейтрально", "Не согласен", "Полностью не согласен"],
        "dimension": "extraversion",
        "points": [5, 4, 3, 2, 1]
      },
      {
        "question": "Я всегда выполняю свои обязательства",
        "options": ["Полностью согласен", "Согласен", "Нейтрально", "Не согласен", "Полностью не согласен"],
        "dimension": "conscientiousness",
        "points": [5, 4, 3, 2, 1]
      },
      {
        "question": "Я открыт для новых идей и опыта",
        "options": ["Полностью согласен", "Согласен", "Нейтрально", "Не согласен", "Полностью не согласен"],
        "dimension": "openness",
        "points": [5, 4, 3, 2, 1]
      },
      {
        "question": "Я доброжелательно отношусь к людям",
        "options": ["Полностью согласен", "Согласен", "Нейтрально", "Не согласен", "Полностью не согласен"],
        "dimension": "agreeableness",
        "points": [5, 4, 3, 2, 1]
      },
      {
        "question": "Я часто беспокоюсь и нервничаю",
        "options": ["Полностью согласен", "Согласен", "Нейтрально", "Не согласен", "Полностью не согласен"],
        "dimension": "neuroticism",
        "points": [5, 4, 3, 2, 1]
      },
      {
        "question": "Я люблю быть центром внимания",
        "options": ["Полностью согласен", "Согласен", "Нейтрально", "Не согласен", "Полностью не согласен"],
        "dimension": "extraversion",
        "points": [5, 4, 3, 2, 1]
      }
    ],
    "interpretation": {
      "openness": "Открытость опыту",
      "conscientiousness": "Добросовестность", 
      "extraversion": "Экстраверсия",
      "agreeableness": "Доброжелательность",
      "neuroticism": "Нейротизм"
    }
  },
  
  "luscher_color": {
    "name": "Цветовой тест Люшера",
    "description": "Самый популярный проективный тест на основе выбора цветов",
    "popularity_score": 9,
    "type": "color_choice",
    "colors": [
      {"name": "Красный", "color": "#FF0000", "meaning": "Энергия, страсть, активность"},
      {"name": "Желтый", "color": "#FFFF00", "meaning": "Оптимизм, творчество, радость"},
      {"name": "Зеленый", "color": "#00FF00", "meaning": "Стабильность, рост, гармония"},
      {"name": "Синий", "color": "#0000FF", "meaning": "Спокойствие, надежность, доверие"},
      {"name": "Фиолетовый", "color": "#800080", "meaning": "Мистика, интуиция, творчество"},
      {"name": "Коричневый", "color": "#8B4513", "meaning": "Основательность, консерватизм"},
      {"name": "Серый", "color": "#808080", "meaning": "Нейтральность, сдержанность"},
      {"name": "Черный", "color": "#000000", "meaning": "Элегантность, тайна, протест"}
    ]
  },

  "eysenck_temperament": {
    "name": "Тест Айзенка на темперамент",
    "description": "Определение типа темперамента: холерик, сангвиник, флегматик, меланхолик",
    "popularity_score": 8,
    "questions": [
      {
        "question": "Часто ли вы испытываете тягу к новым впечатлениям?",
        "options": ["Да", "Нет"],
        "dimension": "extraversion",
        "points": [1, 0]
      },
      {
        "question": "Часто ли ваше настроение колеблется от очень хорошего к плохому?",
        "options": ["Да", "Нет"],
        "dimension": "neuroticism",
        "points": [1, 0]
      },
      {
        "question": "Являетесь ли вы разговорчивым человеком?",
        "options": ["Да", "Нет"],
        "dimension": "extraversion",
        "points": [1, 0]
      },
      {
        "question": "Беспокоитесь ли вы по поводу каких-то ужасных вещей?",
        "options": ["Да", "Нет"],
        "dimension": "neuroticism",
        "points": [1, 0]
      },
      {
        "question": "Легко ли вы приспосабливаетесь к новым условиям?",
        "options": ["Да", "Нет"],
        "dimension": "extraversion",
        "points": [1, 0]
      },
      {
        "question": "Часто ли вы чувствуете себя несчастным без достаточной причины?",
        "options": ["Да", "Нет"],
        "dimension": "neuroticism",
        "points": [1, 0]
      }
    ],
    "interpretation": {
      "temperament_types": {
        "choleric": "Холерик (высокая экстраверсия + высокий нейротизм)",
        "sanguine": "Сангвиник (высокая экстраверсия + низкий нейротизм)",
        "phlegmatic": "Флегматик (низкая экстраверсия + низкий нейротизм)",
        "melancholic": "Меланхолик (низкая экстраверсия + высокий нейротизм)"
      }
    }
  },

  "emotional_intelligence": {
    "name": "Тест эмоционального интеллекта Холла",
    "description": "Оценка способности понимать и управлять эмоциями",
    "popularity_score": 7,
    "questions": [
      {
        "question": "Я легко распознаю свои эмоции",
        "options": ["Полностью согласен", "Согласен", "Частично согласен", "Не согласен", "Полностью не согласен"],
        "dimension": "self_awareness",
        "points": [5, 4, 3, 2, 1]
      },
      {
        "question": "Я умею контролировать свои эмоции",
        "options": ["Полностью согласен", "Согласен", "Частично согласен", "Не согласен", "Полностью не согласен"],
        "dimension": "self_control",
        "points": [5, 4, 3, 2, 1]
      },
      {
        "question": "Я понимаю эмоции других людей по их выражению лица",
        "options": ["Полностью согласен", "Согласен", "Частично согласен", "Не согласен", "Полностью не согласен"],
        "dimension": "empathy",
        "points": [5, 4, 3, 2, 1]
      },
      {
        "question": "Я умею влиять на эмоции других людей",
        "options": ["Полностью согласен", "Согласен", "Частично согласен", "Не согласен", "Полностью не согласен"],
        "dimension": "social_skills",
        "points": [5, 4, 3, 2, 1]
      }
    ]
  },

  "beck_depression": {
    "name": "Шкала депрессии Бека",
    "description": "Оценка уровня депрессивных симптомов",
    "popularity_score": 6,
    "questions": [
      {
        "question": "Как вы оцениваете свое настроение в последнее время?",
        "options": ["Отличное", "Хорошее", "Нормальное", "Плохое", "Очень плохое"],
        "dimension": "mood",
        "points": [0, 1, 2, 3, 4]
      },
      {
        "question": "Как часто вы чувствуете печаль?",
        "options": ["Никогда", "Редко", "Иногда", "Часто", "Постоянно"],
        "dimension": "sadness",
        "points": [0, 1, 2, 3, 4]
      },
      {
        "question": "Испытываете ли вы чувство безнадежности?",
        "options": ["Никогда", "Редко", "Иногда", "Часто", "Постоянно"],
        "dimension": "hopelessness",
        "points": [0, 1, 2, 3, 4]
      },
      {
        "question": "Как изменился ваш аппетит?",
        "options": ["Не изменился", "Слегка снизился", "Заметно снизился", "Сильно снизился", "Почти отсутствует"],
        "dimension": "appetite",
        "points": [0, 1, 2, 3, 4]
      }
    ]
  },

  "szondi_test": {
    "name": "Тест Сонди",
    "description": "Проективный тест выбора портретов для определения скрытых влечений",
    "popularity_score": 7,
    "type": "image_choice",
    "portraits": [
      {"id": 1, "description": "Мужчина с добрым взглядом"},
      {"id": 2, "description": "Женщина с серьезным выражением"},
      {"id": 3, "description": "Молодой человек с мечтательным видом"},
      {"id": 4, "description": "Пожилой человек с мудрым взглядом"},
      {"id": 5, "description": "Женщина с решительным выражением"},
      {"id": 6, "description": "Мужчина с творческим видом"},
      {"id": 7, "description": "Человек с загадочной улыбкой"},
      {"id": 8, "description": "Персона с уверенным взглядом"}
    ]
  },

  "leonhard_accentuation": {
    "name": "Опросник Леонгарда-Шмишека",
    "description": "Определение акцентуаций характера",
    "popularity_score": 6,
    "questions": [
      {
        "question": "Вы часто находитесь в приподнятом настроении?",
        "options": ["Да", "Нет"],
        "dimension": "hyperthymic",
        "points": [1, 0]
      },
      {
        "question": "Вы легко переходите от радости к печали?",
        "options": ["Да", "Нет"],
        "dimension": "cyclothymic",
        "points": [1, 0]
      },
      {
        "question": "Вы очень чувствительны к критике?",
        "options": ["Да", "Нет"],
        "dimension": "emotive",
        "points": [1, 0]
      },
      {
        "question": "Вы долго переживаете неудачи?",
        "options": ["Да", "Нет"],
        "dimension": "dysthymic",
        "points": [1, 0]
      }
    ]
  },

  "anxiety_scale": {
    "name": "Шкала тревожности Спилбергера-Ханина",
    "description": "Оценка уровня ситуативной и личностной тревожности",
    "popularity_score": 7,
    "questions": [
      {
        "question": "Я чувствую себя спокойно",
        "options": ["Почти никогда", "Иногда", "Часто", "Почти всегда"],
        "dimension": "trait_anxiety",
        "points": [4, 3, 2, 1]
      },
      {
        "question": "Я нервничаю и беспокоюсь",
        "options": ["Почти никогда", "Иногда", "Часто", "Почти всегда"],
        "dimension": "trait_anxiety",
        "points": [1, 2, 3, 4]
      },
      {
        "question": "Я доволен собой",
        "options": ["Почти никогда", "Иногда", "Часто", "Почти всегда"],
        "dimension": "trait_anxiety",
        "points": [4, 3, 2, 1]
      },
      {
        "question": "Я чувствую растерянность",
        "options": ["Почти никогда", "Иногда", "Часто", "Почти всегда"],
        "dimension": "trait_anxiety",
        "points": [1, 2, 3, 4]
      }
    ]
  },

  "conflict_styles": {
    "name": "Тест Томаса-Килманна на стили поведения в конфликте",
    "description": "Определение предпочитаемых стратегий в конфликтных ситуациях",
    "popularity_score": 6,
    "questions": [
      {
        "question": "В конфликте я стараюсь:",
        "options": ["Настоять на своем", "Найти компромисс", "Уступить другому", "Избежать конфликта", "Найти взаимовыгодное решение"],
        "dimension": "conflict_style",
        "points": ["competing", "compromising", "accommodating", "avoiding", "collaborating"]
      },
      {
        "question": "Когда возникает спор, я:",
        "options": ["Доказываю свою правоту", "Ищу золотую середину", "Соглашаюсь с оппонентом", "Меняю тему", "Предлагаю обсудить проблему"],
        "dimension": "conflict_style", 
        "points": ["competing", "compromising", "accommodating", "avoiding", "collaborating"]
      }
    ]
  }
};

// Глобальные переменные для состояния приложения
let currentTest = null;
let currentQuestionIndex = 0;
let testAnswers = [];
let testResults = new Map(); // Хранение результатов всех пройденных тестов
let selectedColors = [];
let selectedPortraits = [];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('App initializing...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    showPage('home-page');
    updateTestStatuses();
    setupEventListeners();
    updateProgress();
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Кнопки навигации
    setupNavigationButtons();
    
    // Кнопки тестов
    setupTestButtons();
    
    // Навигация по тесту
    setupTestNavigation();
    
    // Кнопки результатов
    setupResultButtons();
    
    // ИИ-анализ и экспорт
    setupAnalysisButtons();
}

function setupNavigationButtons() {
    const navButtons = [
        { id: 'back-btn', action: () => showPage('home-page') },
        { id: 'home-btn', action: () => showPage('home-page') },
        { id: 'ai-back-btn', action: () => showPage('home-page') }
    ];
    
    navButtons.forEach(({ id, action }) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = action;
        }
    });
}

function setupTestButtons() {
    const testCards = document.querySelectorAll('.test-card');
    console.log('Found test cards:', testCards.length);
    
    testCards.forEach((card, index) => {
        const testId = card.dataset.test;
        const testBtn = card.querySelector('.test-btn');
        
        console.log(`Setting up test card ${index + 1}, ID: ${testId}`);
        
        if (testBtn && testId) {
            testBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log(`Starting test: ${testId}`);
                startTest(testId);
            };
        }
    });
}

function setupTestNavigation() {
    const testNavButtons = [
        { id: 'next-btn', action: nextQuestion },
        { id: 'prev-btn', action: prevQuestion },
        { id: 'finish-btn', action: finishTest }
    ];
    
    testNavButtons.forEach(({ id, action }) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = action;
        }
    });
}

function setupResultButtons() {
    const resultButtons = [
        { id: 'retake-btn', action: retakeTest },
        { id: 'continue-btn', action: () => showPage('home-page') }
    ];
    
    resultButtons.forEach(({ id, action }) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = action;
        }
    });
}

function setupAnalysisButtons() {
    const analysisButtons = [
        { id: 'ai-analysis-btn', action: generateAIAnalysis },
        { id: 'export-btn', action: exportResults }
    ];
    
    analysisButtons.forEach(({ id, action }) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = action;
        }
    });
}

function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Скрыть все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Показать нужную страницу
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        console.error('Page not found:', pageId);
    }
}

function startTest(testId) {
    console.log('Starting test:', testId);
    
    if (!TESTS_DATA[testId]) {
        console.error('Test data not found for:', testId);
        return;
    }
    
    // Сброс состояния теста
    currentTest = testId;
    currentQuestionIndex = 0;
    testAnswers = [];
    selectedColors = [];
    selectedPortraits = [];
    
    const testData = TESTS_DATA[testId];
    
    // Установить название теста
    const testTitleElement = document.getElementById('test-title');
    if (testTitleElement) {
        testTitleElement.textContent = testData.name;
    }
    
    // Показать страницу теста
    showPage('test-page');
    
    // Настроить интерфейс в зависимости от типа теста
    if (testData.type === 'color_choice') {
        setupColorTest(testData);
    } else if (testData.type === 'image_choice') {
        setupPortraitTest(testData);
    } else {
        setupQuestionTest(testData);
    }
}

function setupQuestionTest(testData) {
    console.log('Setting up question test');
    
    // Скрыть все контейнеры тестов
    hideAllTestContainers();
    
    // Показать контейнер вопросов
    const questionContainer = document.getElementById('question-container');
    if (questionContainer) {
        questionContainer.classList.remove('hidden');
    }
    
    // Обновить прогресс
    updateQuestionProgress(1, testData.questions.length);
    
    // Показать первый вопрос
    showQuestion(0);
    
    // Обновить кнопки навигации
    updateNavigationButtons();
}

function setupColorTest(testData) {
    console.log('Setting up color test');
    
    hideAllTestContainers();
    
    const colorTestContainer = document.getElementById('color-test-container');
    if (colorTestContainer) {
        colorTestContainer.classList.remove('hidden');
    }
    
    const colorsGrid = document.getElementById('colors-grid');
    if (colorsGrid) {
        colorsGrid.innerHTML = '';
        
        testData.colors.forEach((color, index) => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color-option';
            colorDiv.style.backgroundColor = color.color;
            colorDiv.dataset.colorIndex = index;
            colorDiv.dataset.colorName = color.name;
            colorDiv.title = `${color.name} - ${color.meaning}`;
            
            colorDiv.onclick = () => selectColor(colorDiv, index);
            colorsGrid.appendChild(colorDiv);
        });
    }
    
    updateColorTestButtons();
}

function setupPortraitTest(testData) {
    console.log('Setting up portrait test');
    
    hideAllTestContainers();
    
    const portraitTestContainer = document.getElementById('portrait-test-container');
    if (portraitTestContainer) {
        portraitTestContainer.classList.remove('hidden');
    }
    
    const portraitsGrid = document.getElementById('portraits-grid');
    if (portraitsGrid) {
        portraitsGrid.innerHTML = '';
        
        testData.portraits.forEach((portrait, index) => {
            const portraitDiv = document.createElement('div');
            portraitDiv.className = 'portrait-option';
            portraitDiv.dataset.portraitId = portrait.id;
            portraitDiv.textContent = portrait.description;
            
            portraitDiv.onclick = () => selectPortrait(portraitDiv, portrait.id);
            portraitsGrid.appendChild(portraitDiv);
        });
    }
    
    updatePortraitTestButtons();
}

function hideAllTestContainers() {
    const containers = [
        'question-container',
        'color-test-container', 
        'portrait-test-container'
    ];
    
    containers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
            container.classList.add('hidden');
        }
    });
}

function showQuestion(questionIndex) {
    console.log(`Showing question ${questionIndex}`);
    
    const testData = TESTS_DATA[currentTest];
    if (!testData || !testData.questions || !testData.questions[questionIndex]) {
        console.error('Question not found:', questionIndex);
        return;
    }
    
    const question = testData.questions[questionIndex];
    
    // Обновить текст вопроса
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
        console.log('Updated question text:', question.question);
    }
    
    // Обновить опции ответов
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, optionIndex) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.dataset.optionIndex = optionIndex;
            
            // Восстановить выбранный ответ если есть
            if (testAnswers[questionIndex] === optionIndex) {
                optionBtn.classList.add('selected');
            }
            
            optionBtn.onclick = () => selectOption(optionBtn, optionIndex);
            optionsContainer.appendChild(optionBtn);
        });
    }
}

function selectOption(optionBtn, optionIndex) {
    console.log(`Selected option: ${optionIndex}`);
    
    // Убрать выделение с других опций
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Выделить выбранную опцию
    optionBtn.classList.add('selected');
    
    // Сохранить ответ
    testAnswers[currentQuestionIndex] = optionIndex;
    
    console.log('Current answers:', testAnswers);
    
    // Обновить кнопки навигации
    updateNavigationButtons();
}

function selectColor(colorDiv, colorIndex) {
    if (colorDiv.classList.contains('selected')) return;
    
    selectedColors.push(colorIndex);
    colorDiv.classList.add('selected');
    colorDiv.dataset.order = selectedColors.length;
    
    updateColorSequence();
    updateColorTestButtons();
}

function selectPortrait(portraitDiv, portraitId) {
    if (portraitDiv.classList.contains('selected')) {
        portraitDiv.classList.remove('selected');
        selectedPortraits = selectedPortraits.filter(id => id !== portraitId);
    } else if (selectedPortraits.length < 3) {
        portraitDiv.classList.add('selected');
        selectedPortraits.push(portraitId);
    }
    
    updatePortraitCount();
    updatePortraitTestButtons();
}

function updateColorSequence() {
    const colorSequence = document.getElementById('color-sequence');
    const testData = TESTS_DATA[currentTest];
    
    if (colorSequence && testData) {
        colorSequence.innerHTML = '';
        selectedColors.forEach(colorIndex => {
            const color = testData.colors[colorIndex];
            const colorDiv = document.createElement('div');
            colorDiv.className = 'sequence-color';
            colorDiv.style.backgroundColor = color.color;
            colorDiv.title = color.name;
            colorSequence.appendChild(colorDiv);
        });
    }
}

function updatePortraitCount() {
    const portraitCount = document.getElementById('portrait-count');
    if (portraitCount) {
        portraitCount.textContent = selectedPortraits.length;
    }
}

function updateColorTestButtons() {
    const finishBtn = document.getElementById('finish-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    
    if (selectedColors.length === TESTS_DATA[currentTest].colors.length) {
        if (finishBtn) finishBtn.classList.remove('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
    } else {
        if (finishBtn) finishBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
    }
    
    if (prevBtn) prevBtn.disabled = true;
}

function updatePortraitTestButtons() {
    const finishBtn = document.getElementById('finish-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    
    if (selectedPortraits.length === 3) {
        if (finishBtn) finishBtn.classList.remove('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
    } else {
        if (finishBtn) finishBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.add('hidden');
    }
    
    if (prevBtn) prevBtn.disabled = true;
}

function updateQuestionProgress(current, total) {
    const questionCounter = document.getElementById('question-counter');
    if (questionCounter) {
        questionCounter.textContent = `${current} / ${total}`;
    }
    
    const progress = (current / total) * 100;
    const testProgressFill = document.getElementById('test-progress-fill');
    if (testProgressFill) {
        testProgressFill.style.width = `${progress}%`;
    }
}

function updateNavigationButtons() {
    const testData = TESTS_DATA[currentTest];
    if (!testData || !testData.questions) return;
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    
    // Кнопка "Назад"
    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
    }
    
    // Проверяем, есть ли ответ на текущий вопрос
    const hasAnswer = testAnswers[currentQuestionIndex] !== undefined;
    
    // Кнопки "Далее" и "Завершить"
    if (currentQuestionIndex === testData.questions.length - 1) {
        // Последний вопрос
        if (nextBtn) nextBtn.classList.add('hidden');
        if (finishBtn) {
            finishBtn.classList.remove('hidden');
            finishBtn.disabled = !hasAnswer;
        }
    } else {
        // Не последний вопрос
        if (finishBtn) finishBtn.classList.add('hidden');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.disabled = !hasAnswer;
        }
    }
}

function nextQuestion() {
    const testData = TESTS_DATA[currentTest];
    if (!testData || !testData.questions) return;
    
    if (currentQuestionIndex < testData.questions.length - 1) {
        currentQuestionIndex++;
        updateQuestionProgress(currentQuestionIndex + 1, testData.questions.length);
        showQuestion(currentQuestionIndex);
        updateNavigationButtons();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        const testData = TESTS_DATA[currentTest];
        updateQuestionProgress(currentQuestionIndex + 1, testData.questions.length);
        showQuestion(currentQuestionIndex);
        updateNavigationButtons();
    }
}

function finishTest() {
    console.log('Finishing test:', currentTest);
    const result = calculateTestResult();
    testResults.set(currentTest, result);
    showTestResult(result);
    updateTestStatuses();
    updateProgress();
}

function calculateTestResult() {
    const testData = TESTS_DATA[currentTest];
    
    if (testData.type === 'color_choice') {
        return calculateColorTestResult();
    } else if (testData.type === 'image_choice') {
        return calculatePortraitTestResult();
    } else {
        return calculateQuestionTestResult();
    }
}

function calculateQuestionTestResult() {
    const testData = TESTS_DATA[currentTest];
    const scores = {};
    
    testData.questions.forEach((question, questionIndex) => {
        const answerIndex = testAnswers[questionIndex];
        if (answerIndex !== undefined) {
            const points = question.points[answerIndex];
            const dimension = question.dimension;
            
            if (!scores[dimension]) {
                scores[dimension] = 0;
            }
            scores[dimension] += points;
        }
    });
    
    return interpretTestResult(scores);
}

function calculateColorTestResult() {
    const testData = TESTS_DATA[currentTest];
    const colorPreferences = selectedColors.map((colorIndex, order) => ({
        color: testData.colors[colorIndex],
        position: order + 1
    }));
    
    const topColors = colorPreferences.slice(0, 3);
    const interpretation = `Ваши предпочитаемые цвета: ${topColors.map(c => c.color.name).join(', ')}. `;
    
    let analysis = interpretation + "\n\nАнализ:\n";
    topColors.forEach(colorPref => {
        analysis += `• ${colorPref.color.name}: ${colorPref.color.meaning}\n`;
    });
    
    return {
        testName: testData.name,
        score: `Топ-3 цвета: ${topColors.map(c => c.color.name).join(', ')}`,
        interpretation: analysis,
        rawData: { colorPreferences }
    };
}

function calculatePortraitTestResult() {
    const testData = TESTS_DATA[currentTest];
    const selectedPortraitData = selectedPortraits.map(id => 
        testData.portraits.find(p => p.id === id)
    );
    
    const analysis = "Выбранные портреты отражают ваши подсознательные предпочтения:\n\n";
    let interpretation = analysis;
    
    selectedPortraitData.forEach((portrait, index) => {
        interpretation += `${index + 1}. ${portrait.description}\n`;
    });
    
    return {
        testName: testData.name,
        score: `Выбрано портретов: ${selectedPortraits.length}`,
        interpretation: interpretation,
        rawData: { selectedPortraits: selectedPortraitData }
    };
}

function interpretTestResult(scores) {
    const testData = TESTS_DATA[currentTest];
    
    if (currentTest === 'mbti') {
        return interpretMBTI(scores);
    } else if (currentTest === 'big_five') {
        return interpretBigFive(scores);
    } else if (currentTest === 'eysenck_temperament') {
        return interpretEysenck(scores);
    } else {
        return interpretGenericTest(scores, testData);
    }
}

function interpretMBTI(scores) {
    const testData = TESTS_DATA[currentTest];
    let type = '';
    let interpretation = 'Ваш тип личности по MBTI:\n\n';
    
    // Определение типа (средний балл 6 из 12 возможных для каждого измерения)
    type += (scores['E-I'] || 0) >= 6 ? 'E' : 'I';
    type += (scores['S-N'] || 0) >= 6 ? 'S' : 'N';
    type += (scores['T-F'] || 0) >= 6 ? 'T' : 'F';
    type += (scores['J-P'] || 0) >= 6 ? 'J' : 'P';
    
    // Интерпретация каждого измерения
    Object.keys(testData.interpretation).forEach(dimension => {
        const info = testData.interpretation[dimension];
        const score = scores[dimension] || 0;
        const tendency = score >= 6 ? info.high : info.low;
        interpretation += `• ${info.name}: ${tendency} (${score} баллов)\n`;
    });
    
    interpretation += `\nВаш тип: ${type}`;
    
    const typeDescriptions = {
        'INTJ': 'Архитектор - стратегический мыслитель с планом на все',
        'INTP': 'Логик - инновационный изобретатель формул',
        'ENTJ': 'Командир - смелый, волевой лидер',
        'ENTP': 'Полемист - умный и любопытный мыслитель',
        'INFJ': 'Активист - творческий идеалист с принципами',
        'INFP': 'Посредник - поэтичный, добрый альтруист',
        'ENFJ': 'Тренер - харизматичный вдохновитель',
        'ENFP': 'Борец - творческий и общительный свободный дух',
        'ISTJ': 'Логистик - практичный и основательный организатор',
        'ISFJ': 'Защитник - теплосердечный и преданный защитник',
        'ESTJ': 'Менеджер - превосходный администратор',
        'ESFJ': 'Консул - экстравертированный, заботливый помощник',
        'ISTP': 'Виртуоз - смелый и практичный экспериментатор',
        'ISFP': 'Авантюрист - гибкий и обаятельный художник',
        'ESTP': 'Развлекатель - спонтанный, энергичный энтертейнер',
        'ESFP': 'Развлекатель - спонтанный, энергичный и энтузиаст'
    };
    
    if (typeDescriptions[type]) {
        interpretation += `\n\n${typeDescriptions[type]}`;
    }
    
    return {
        testName: testData.name,
        score: type,
        interpretation: interpretation,
        rawData: { scores, personalityType: type }
    };
}

function interpretBigFive(scores) {
    const testData = TESTS_DATA[currentTest];
    let interpretation = 'Результаты по модели "Большая пятерка":\n\n';
    
    Object.keys(testData.interpretation).forEach(dimension => {
        const score = scores[dimension] || 0;
        const maxScore = testData.questions.filter(q => q.dimension === dimension).length * 5;
        const percentage = Math.round((score / maxScore) * 100);
        const level = percentage >= 70 ? 'Высокий' : percentage >= 30 ? 'Средний' : 'Низкий';
        
        interpretation += `• ${testData.interpretation[dimension]}: ${percentage}% (${level})\n`;
    });
    
    const avgScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length);
    
    return {
        testName: testData.name,
        score: `Средний балл: ${avgScore}`,
        interpretation: interpretation,
        rawData: { scores }
    };
}

function interpretEysenck(scores) {
    const testData = TESTS_DATA[currentTest];
    const extraversion = scores.extraversion || 0;
    const neuroticism = scores.neuroticism || 0;
    
    let temperament;
    if (extraversion >= 2 && neuroticism >= 2) {
        temperament = 'choleric';
    } else if (extraversion >= 2 && neuroticism < 2) {
        temperament = 'sanguine';
    } else if (extraversion < 2 && neuroticism < 2) {
        temperament = 'phlegmatic';
    } else {
        temperament = 'melancholic';
    }
    
    const temperamentName = testData.interpretation.temperament_types[temperament];
    
    const interpretation = `Ваш тип темперамента: ${temperamentName}\n\n` +
                         `Экстраверсия: ${extraversion}/3\n` +
                         `Нейротизм: ${neuroticism}/3`;
    
    return {
        testName: testData.name,
        score: temperamentName.split(' ')[0],
        interpretation: interpretation,
        rawData: { scores, temperament }
    };
}

function interpretGenericTest(scores, testData) {
    let interpretation = `Результаты теста "${testData.name}":\n\n`;
    
    Object.keys(scores).forEach(dimension => {
        interpretation += `• ${dimension}: ${scores[dimension]} баллов\n`;
    });
    
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    
    return {
        testName: testData.name,
        score: `Общий балл: ${totalScore}`,
        interpretation: interpretation,
        rawData: { scores }
    };
}

function showTestResult(result) {
    console.log('Showing result:', result);
    
    const resultTestName = document.getElementById('result-test-name');
    const resultScoreText = document.getElementById('result-score-text');
    const resultInterpretation = document.getElementById('result-interpretation');
    
    if (resultTestName) resultTestName.textContent = result.testName;
    if (resultScoreText) resultScoreText.textContent = result.score;
    if (resultInterpretation) {
        resultInterpretation.innerHTML = result.interpretation.replace(/\n/g, '<br>');
    }
    
    showPage('results-page');
}

function retakeTest() {
    if (currentTest) {
        startTest(currentTest);
    }
}

function updateTestStatuses() {
    Object.keys(TESTS_DATA).forEach(testId => {
        const statusElement = document.getElementById(`status-${testId}`);
        if (statusElement) {
            if (testResults.has(testId)) {
                statusElement.textContent = 'Пройден';
                statusElement.classList.add('completed');
            } else {
                statusElement.textContent = 'Не пройден';
                statusElement.classList.remove('completed');
            }
        }
    });
    
    // Обновить доступность кнопки ИИ-анализа
    const completedTests = testResults.size;
    const aiBtn = document.getElementById('ai-analysis-btn');
    
    if (aiBtn) {
        if (completedTests >= 3) {
            aiBtn.disabled = false;
            aiBtn.textContent = `Получить ИИ-анализ (${completedTests} тестов)`;
        } else {
            aiBtn.disabled = true;
            aiBtn.textContent = `Нужно еще ${3 - completedTests} тестов`;
        }
    }
}

function updateProgress() {
    const completedCount = testResults.size;
    const totalTests = Object.keys(TESTS_DATA).length;
    
    const completedCountElement = document.getElementById('completed-count');
    if (completedCountElement) {
        completedCountElement.textContent = completedCount;
    }
    
    const progressPercentage = (completedCount / totalTests) * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = `${progressPercentage}%`;
    }
}

function generateAIAnalysis() {
    showPage('ai-analysis-page');
    
    // Показать загрузку
    const aiLoading = document.getElementById('ai-loading');
    const aiResults = document.getElementById('ai-results');
    
    if (aiLoading) aiLoading.classList.remove('hidden');
    if (aiResults) aiResults.classList.add('hidden');
    
    // Симуляция загрузки и генерация анализа
    setTimeout(() => {
        const analysis = performAIAnalysis();
        displayAIAnalysis(analysis);
        
        if (aiLoading) aiLoading.classList.add('hidden');
        if (aiResults) aiResults.classList.remove('hidden');
    }, 3000);
}

function performAIAnalysis() {
    const completedTests = Array.from(testResults.keys());
    const results = Array.from(testResults.values());
    
    const analysis = {
        generalPortrait: generateGeneralPortrait(results),
        strengths: generateStrengths(results),
        developmentAreas: generateDevelopmentAreas(results),
        careerRecommendations: generateCareerRecommendations(results),
        relationships: generateRelationshipAnalysis(results),
        stressResistance: generateStressResistanceAnalysis(results)
    };
    
    return analysis;
}

function generateGeneralPortrait(results) {
    const traits = [];
    
    results.forEach(result => {
        if (result.rawData && result.rawData.personalityType) {
            const mbtiType = result.rawData.personalityType;
            if (mbtiType.includes('E')) traits.push('экстравертированная');
            if (mbtiType.includes('I')) traits.push('интровертированная');
            if (mbtiType.includes('N')) traits.push('интуитивная');
            if (mbtiType.includes('S')) traits.push('практичная');
        }
        
        if (result.testName.includes('Big Five') && result.rawData && result.rawData.scores) {
            const scores = result.rawData.scores;
            if ((scores.openness || 0) >= 7) traits.push('открытая к опыту');
            if ((scores.conscientiousness || 0) >= 7) traits.push('добросовестная');
            if ((scores.extraversion || 0) >= 7) traits.push('общительная');
        }
    });
    
    const uniqueTraits = [...new Set(traits)];
    
    return `Вы представляете собой ${uniqueTraits.slice(0, 3).join(', ')} личность. ` +
           `Ваша психологическая структура характеризуется сбалансированностью различных качеств. ` +
           `На основе пройденных тестов можно сделать вывод о том, что вы обладаете уникальным ` +
           `сочетанием черт, которые делают вас особенным индивидуумом.`;
}

function generateStrengths(results) {
    const strengths = [
        '• Способность к глубокому анализу и рефлексии',
        '• Умение находить нестандартные решения проблем',
        '• Развитая эмпатия и понимание других людей',
        '• Стремление к личностному росту и самосовершенствованию'
    ];
    
    results.forEach(result => {
        if (result.testName.includes('эмоциональн')) {
            strengths.push('• Высокий эмоциональный интеллект');
        }
        if (result.testName.includes('MBTI') && result.rawData?.personalityType?.includes('J')) {
            strengths.push('• Организованность и планомерность в действиях');
        }
    });
    
    return [...new Set(strengths)].slice(0, 5).join('\n');
}

function generateDevelopmentAreas(results) {
    const areas = [
        '• Развитие навыков публичных выступлений',
        '• Укрепление стрессоустойчивости',
        '• Совершенствование навыков тайм-менеджмента',
        '• Работа над принятием критики'
    ];
    
    results.forEach(result => {
        if (result.testName.includes('тревожн') || result.testName.includes('депресс')) {
            areas.push('• Работа с негативными эмоциональными состояниями');
        }
        if (result.testName.includes('конфликт')) {
            areas.push('• Развитие навыков конструктивного разрешения конфликтов');
        }
    });
    
    return [...new Set(areas)].slice(0, 5).join('\n');
}

function generateCareerRecommendations(results) {
    const recommendations = [];
    
    results.forEach(result => {
        if (result.testName.includes('MBTI') && result.rawData?.personalityType) {
            const type = result.rawData.personalityType;
            if (type.includes('NT')) {
                recommendations.push('IT, инженерия, наука, стратегическое планирование');
            } else if (type.includes('NF')) {
                recommendations.push('психология, образование, творчество, консалтинг');
            } else if (type.includes('ST')) {
                recommendations.push('финансы, администрирование, производство');
            } else if (type.includes('SF')) {
                recommendations.push('здравоохранение, социальная работа, сфера услуг');
            }
        }
    });
    
    const uniqueRecs = [...new Set(recommendations)];
    
    return `Рекомендуемые сферы деятельности:\n• ${uniqueRecs.join('\n• ')}\n\n` +
           `Ваш профиль личности указывает на способности к аналитической работе, ` +
           `взаимодействию с людьми и творческому подходу к решению задач.`;
}

function generateRelationshipAnalysis(results) {
    return `В отношениях вы цените глубину и искренность. Вам важна эмоциональная связь ` +
           `с партнером и взаимное понимание. Вы готовы работать над отношениями и ` +
           `стремитесь к гармонии. В дружбе предпочитаете качество количеству - ` +
           `у вас может быть небольшой круг близких друзей, но эти отношения очень крепкие.`;
}

function generateStressResistanceAnalysis(results) {
    let stressLevel = 'умеренный';
    
    results.forEach(result => {
        if (result.testName.includes('тревожн') || result.testName.includes('депресс')) {
            if (result.interpretation.includes('высок')) {
                stressLevel = 'повышенный';
            }
        }
    });
    
    return `Ваш уровень стрессоустойчивости: ${stressLevel}. ` +
           `Рекомендуется уделять внимание техникам релаксации, регулярным физическим ` +
           `упражнениям и поддержанию work-life баланса. Важно развивать навыки ` +
           `эмоциональной саморегуляции и не бояться обращаться за поддержкой.`;
}

function displayAIAnalysis(analysis) {
    const elements = {
        'general-portrait': analysis.generalPortrait,
        'strengths': analysis.strengths,
        'development-areas': analysis.developmentAreas,
        'career-recommendations': analysis.careerRecommendations,
        'relationships': analysis.relationships,
        'stress-resistance': analysis.stressResistance
    };
    
    Object.keys(elements).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = elements[elementId];
        }
    });
}

function exportResults() {
    const completedTests = Array.from(testResults.entries());
    
    let exportText = 'ПСИХОЛОГИЧЕСКИЙ ПРОФИЛЬ\n';
    exportText += '='.repeat(50) + '\n\n';
    
    exportText += `Дата: ${new Date().toLocaleDateString('ru-RU')}\n`;
    exportText += `Пройдено тестов: ${completedTests.length}\n\n`;
    
    completedTests.forEach(([testId, result]) => {
        exportText += `${result.testName}\n`;
        exportText += '-'.repeat(result.testName.length) + '\n';
        exportText += `Результат: ${result.score}\n`;
        exportText += `${result.interpretation}\n\n`;
    });
    
    // ИИ-анализ
    if (completedTests.length >= 3) {
        exportText += 'ИИ-АНАЛИЗ ЛИЧНОСТИ\n';
        exportText += '='.repeat(50) + '\n\n';
        
        const analysis = performAIAnalysis();
        exportText += `ОБЩИЙ ПОРТРЕТ:\n${analysis.generalPortrait}\n\n`;
        exportText += `СИЛЬНЫЕ СТОРОНЫ:\n${analysis.strengths}\n\n`;
        exportText += `ОБЛАСТИ РАЗВИТИЯ:\n${analysis.developmentAreas}\n\n`;
        exportText += `КАРЬЕРНЫЕ РЕКОМЕНДАЦИИ:\n${analysis.careerRecommendations}\n\n`;
        exportText += `ОТНОШЕНИЯ:\n${analysis.relationships}\n\n`;
        exportText += `СТРЕССОУСТОЙЧИВОСТЬ:\n${analysis.stressResistance}\n\n`;
    }
    
    // Создать и скачать файл
    const blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `психологический_профиль_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}