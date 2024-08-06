// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His skills in carpentry were quite __________, allowing him to build simple furniture but not complex structures.",
        chinese_question: "他的木工技能相当 __________，能让他制作简单的家具，但不能制作复杂的结构。",
        answers: [
            { option: "A", answer: "advanced", chinese_answer: "高级的", chinese_romanization: "gāojí de" },
            { option: "B", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "intricate", chinese_answer: "复杂精细的", chinese_romanization: "fùzá jīngxì de" },
            { option: "D", answer: "rudimentary", chinese_answer: "基本的", chinese_romanization: "jīběn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rudimentary' means involving or limited to basic principles." +
            "<br><br>" +
            "(A) 'advanced' means far on or ahead in development or progress." +
            "<br><br>" +
            "(B) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(C) 'intricate' means very complicated or detailed.",
        chinese_explanation: "(D) '基本的' 意味着涉及或限于基本原则。" +
            "<br><br>" +
            "(A) '高级的' 意味着发展或进步上遥遥领先的。" +
            "<br><br>" +
            "(B) '复杂的' 意味着具有、揭示或涉及大量的世俗经验和对时尚和文化的了解。" +
            "<br><br>" +
            "(C) '复杂精细的' 意味着非常复杂或详细。"
    },
    {
        id: 2,
        question: "The sudden drop in the stock market had an __________ feeling, suggesting a potential economic downturn.",
        chinese_question: "股市的突然下跌带来一种 __________ 的感觉，暗示着潜在的经济衰退。",
        answers: [
                { option: "A", answer: "ominous", chinese_answer: "不祥的", chinese_romanization: "bùxiáng de" },
                { option: "B", answer: "reassuring", chinese_answer: "令人安心的", chinese_romanization: "lìng rén ānxīn de" },
                { option: "C", answer: "hopeful", chinese_answer: "有希望的", chinese_romanization: "yǒu xīwàng de" },
                { option: "D", answer: "promising", chinese_answer: "有前途的", chinese_romanization: "yǒu qiántú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ominous' means giving the impression that something bad or unpleasant is going to happen; threatening." + 
            "<br><br>" + 
            "(B) 'reassuring' means serving to remove someone's doubts or fears." + 
            "<br><br>" + 
            "(C) 'hopeful' means feeling or inspiring optimism about a future event." + 
            "<br><br>" + 
            "(D) 'promising' means showing signs of future success.",
        chinese_explanation: "(A) '不祥的' 意味着给人一种将要发生不好的或令人不快的事情的印象；威胁的。" +
            "<br><br>" +
            "(B) '令人安心的' 意味着消除某人的疑虑或恐惧。" +
            "<br><br>" +
            "(C) '有希望的' 意味着对未来事件感到或引发乐观。" +
            "<br><br>" +
            "(D) '有前途的' 意味着显示出未来成功的迹象."
    },
    {
        id: 3,
        question: "Her __________ comments often showed that she had missed the main ideas and key details of the discussion entirely and did not grasp the core concepts.",
        chinese_question: "她的__________评论常常表明她完全错过了讨论的主要观点和关键细节，并且没有掌握核心概念。",
        answers: [
                { option: "A", answer: "sharp", chinese_answer: "敏锐的", chinese_romanization: "mǐnruì de" },
                { option: "B", answer: "keen", chinese_answer: "热切的", chinese_romanization: "rèqiè de" },
                { option: "C", answer: "obtuse", chinese_answer: "迟钝的", chinese_romanization: "chídùn de" },
                { option: "D", answer: "astute", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obtuse' means annoyingly insensitive or slow to understand. Figuratively, it can mean being dull or lacking quick perception." + 
            "<br><br>" + 
            "(A) 'sharp' means having an edge or point that is able to cut or pierce something." + 
            "<br><br>" + 
            "(B) 'keen' means having or showing eagerness or enthusiasm." + 
            "<br><br>" + 
            "(D) 'astute' means having or showing an ability to accurately assess situations or people and turn this to one's advantage.",
        chinese_explanation: "(C) '迟钝的'一词意味着烦人的迟钝或慢理解的。比喻地，它可以表示迟钝或缺乏快速的感知。" +
            "<br><br>" +
            "(A) '敏锐的' 意味着有能够切割或刺穿东西的边缘或尖点的。" +
            "<br><br>" +
            "(B) '热切的' 意味着表现出或表现出热情或热情的。" +
            "<br><br>" +
            "(D) '精明的' 意味着有或表现出准确评估情况或人的能力，并将其转化为自己的优势."
    },
    {
        id: 4,
    question: "The argument was criticized as __________, failing to acknowledge the nuances of the issue at hand and only presenting a simplified view.",
    chinese_question: "这个论点被批评为 __________，未能承认手头问题的细微差别，只是呈现了简化的观点。",
    answers: [
        { option: "A", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
        { option: "B", answer: "exhaustive", chinese_answer: "详尽的", chinese_romanization: "xiángjìn de" },
        { option: "C", answer: "reductive", chinese_answer: "简化的", chinese_romanization: "jiǎnhuà de" },
        { option: "D", answer: "nuanced", chinese_answer: "细致的", chinese_romanization: "xìzhì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'reductive' means overly simplifying complex ideas." +
        "<br><br>" +
        "(A) 'detailed' means giving a lot of information with many details." +
        "<br><br>" +
        "(B) 'exhaustive' means fully comprehensive." +
        "<br><br>" +
        "(D) 'nuanced' means characterized by subtle shades of meaning or expression.",
    chinese_explanation: "(C) '简化的' 意味着过度简化复杂的想法。" +
        "<br><br>" +
        "(A) '详细的' 意味着提供了很多详细信息。" +
        "<br><br>" +
        "(B) '详尽的' 意味着全面和彻底的。" +
        "<br><br>" +
        "(D) '细致的' 意味着具有细微意义或表达的特点。"
    },
    {
        id: 5,
        question: "Her __________ mind quickly detected the subtle changes in the patient's condition, ensuring immediate medical intervention.",
        chinese_question: "她 __________ 的头脑迅速察觉到病人病情的细微变化，确保了及时的医疗干预。",
        answers: [
            { option: "A", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "B", answer: "sluggish", chinese_answer: "迟钝的", chinese_romanization: "chídùn de" },
            { option: "C", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēn xīn de" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'alert' means quick to notice and respond to things." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'distracted' means unable to concentrate because one's mind is preoccupied." +
            "<br><br>" +
            "(D) 'uninterested' means not interested; indifferent.",
        chinese_explanation: "(A) '警觉的' 意味着迅速注意并对事物做出反应的。" +
            "<br><br>" +
            "(B) '迟钝的' 意味着行动缓慢或不活跃的。" +
            "<br><br>" +
            "(C) '分心的' 意味着无法集中注意力，因为思想被占据。" +
            "<br><br>" +
            "(D) '不感兴趣的' 意味着不感兴趣；冷漠的。"
    },
    {
        id: 6,
    question: "During the memorial service, the atmosphere was __________, filled with quiet reflections and heartfelt tributes to the deceased.",
    chinese_question: "在追悼会上，气氛非常 __________，充满了安静的思考和对逝者的真诚悼念。",
    answers: [
        { option: "A", answer: "festive", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" },
        { option: "B", answer: "lighthearted", chinese_answer: "轻松愉快的", chinese_romanization: "qīngsōng yúkuài de" },
        { option: "C", answer: "carefree", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wú lǜ de" },
        { option: "D", answer: "solemn", chinese_answer: "庄严的", chinese_romanization: "zhuāngyán de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'solemn' means formal and dignified; serious." +
        "<br><br>" +
        "(A) 'festive' means relating to a festival or celebration." +
        "<br><br>" +
        "(B) 'lighthearted' means cheerful and carefree." +
        "<br><br>" +
        "(C) 'carefree' means free from anxiety or responsibility.",
    chinese_explanation: "(D) '庄严的' 意味着正式和庄重的；严肃的。" +
        "<br><br>" +
        "(A) '欢乐的' 意味着与节日或庆祝活动有关的。" +
        "<br><br>" +
        "(B) '轻松愉快的' 意味着快乐和无忧无虑的。" +
        "<br><br>" +
        "(C) '无忧无虑的' 意味着没有焦虑或责任的。"
    },
    {
        id: 7,
    question: "The __________ demand for the new product led to it selling out within hours.",
    chinese_question: "对新产品的__________需求导致其在几小时内售罄。",
    answers: [
        { option: "A", answer: "full", chinese_answer: "饱的", chinese_romanization: "bǎo de" },
        { option: "B", answer: "ravenous", chinese_answer: "极度渴望的", chinese_romanization: "jídù kěwàng de" },
        { option: "C", answer: "satisfied", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
        { option: "D", answer: "content", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ravenous' means extremely hungry. Figuratively, it can mean having a very great need or desire for something." +
        "<br><br>" +
        "(A) 'full' means containing or holding as much or as many as possible." +
        "<br><br>" +
        "(C) 'satisfied' means contented; pleased." +
        "<br><br>" +
        "(D) 'content' means in a state of peaceful happiness.",
    chinese_explanation: "(B) '极度渴望的'一词意味着非常饿的。比喻地，它可以表示对某事物有非常大的需求或渴望。" +
        "<br><br>" +
        "(A) '饱的' 意味着装满或尽可能多地容纳的。" +
        "<br><br>" +
        "(C) '满足的' 意味着满足的；愉悦的。" +
        "<br><br>" +
        "(D) '满意的' 意味着处于和平的幸福状态。"
    },
    {
        id: 8,
        question: "Her contributions to the project were __________ because they significantly improved the team's overall performance and efficiency.",
        chinese_question: "她对项目的贡献非常 __________，因为它们显著提高了团队的整体表现和效率。",
        answers: [
            { option: "A", answer: "prominent", chinese_answer: "突出的", chinese_romanization: "tūchū de" },
            { option: "B", answer: "negligible", chinese_answer: "可忽略的", chinese_romanization: "kě hūlüè de" },
            { option: "C", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìshǎo de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prominent' means important; famous; standing out so as to be easily seen." +
            "<br><br>" +
            "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(A) '突出的' 意味着重要的；著名的；显眼的。" +
            "<br><br>" +
            "(B) '可忽略的' 意味着小到或不重要到不值得考虑的；微不足道的。" +
            "<br><br>" +
            "(C) '最小的' 意味着数量、数量或程度的最小。" +
            "<br><br>" +
            "(D) '次要的' 意味着重要性、严重性或显著性较小的。"
    },
    {
        id: 9,
        question: "His __________ efforts in organizing the event ensured everything went smoothly.",
        chinese_question: "他在组织活动时的 __________ 努力确保了一切顺利进行。",
        answers: [
                { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
                { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
                { option: "C", answer: "painstaking", chinese_answer: "细心的", chinese_romanization: "xìxīn de" },
                { option: "D", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'painstaking' means done with or employing great care and thoroughness." + 
            "<br><br>" + 
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." + 
            "<br><br>" + 
            "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." + 
            "<br><br>" + 
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(C) '细心的' 意味着以极大的小心和彻底性完成或采用的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情的；不关心的。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有给予足够的注意或思考来避免伤害或错误的。" +
            "<br><br>" +
            "(D) '肤浅的' 意味着存在或发生在表面上的."
    },
    {
        id: 10,
        question: "The team's approach to the project was __________, lacking a clear plan or direction.",
        chinese_question: "团队对项目的处理方式是__________的，缺乏明确的计划或方向。",
        answers: [
            { option: "A", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" },
            { option: "B", answer: "systematic", chinese_answer: "系统的", chinese_romanization: "xìtǒng de" },
            { option: "C", answer: "haphazard", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
            { option: "D", answer: "methodical", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'haphazard' means lacking any obvious principle of organization. Figuratively, it can mean being random and uncoordinated." + 
            "<br><br>" +
            "(A) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(B) 'systematic' means done or acting according to a fixed plan or system; methodical." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(C) '杂乱的'一词意味着缺乏任何明显的组织原则。比喻地，它可以表示随意和不协调的。" + 
            "<br><br>" +
            "(A) '有序的' 意味着整齐和有条理地排列的。" +
            "<br><br>" +
            "(B) '系统的' 意味着按照固定计划或系统进行的；有条理的。" +
            "<br><br>" +
            "(D) '有条理的' 意味着按照系统或既定程序进行的。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
