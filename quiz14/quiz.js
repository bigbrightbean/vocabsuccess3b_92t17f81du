// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ divide between those who support the new policy and those who oppose it has created a challenging environment for lawmakers.",
        chinese_question: "支持新政策的人和反对者之间的 __________ 分歧为立法者创造了一个具有挑战性的环境。",
        answers: [
            { option: "A", answer: "narrowing", chinese_answer: "缩小的", chinese_romanization: "suōxiǎo de" },
            { option: "B", answer: "widening", chinese_answer: "扩大的", chinese_romanization: "kuòdà de" },
            { option: "C", answer: "settling", chinese_answer: "解决的", chinese_romanization: "jiějué de" },
            { option: "D", answer: "diminishing", chinese_answer: "减少的", chinese_romanization: "jiǎnshǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'widening' means increasing the extent, scope, or range of something." + 
            "<br><br>" +
            "(A) 'narrowing' means becoming less wide." +
            "<br><br>" +
            "(C) 'settling' means resolving or reaching an agreement about something." +
            "<br><br>" +
            "(D) 'diminishing' means making or becoming less.",
        chinese_explanation: "(B) '扩大的' 意味着增加某事物的范围、范围或程度。" + 
            "<br><br>" +
            "(A) '缩小的' 意味着变得不那么宽的。" +
            "<br><br>" +
            "(C) '解决的' 意味着解决或达成关于某事的协议。" +
            "<br><br>" +
            "(D) '减少的' 意味着使或变小的。"
    },
    {
        id: 2,
        question: "His dedication to the project began to __________ in the quality of his work.",
        chinese_question: "他对项目的投入开始在他的工作质量中 __________ 出来。",
        answers: [
            { option: "A", answer: "fade", chinese_answer: "褪色", chinese_romanization: "tuìsè" },
            { option: "B", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "C", answer: "manifest", chinese_answer: "显现", chinese_romanization: "xiǎnxiàn" },
            { option: "D", answer: "obscure", chinese_answer: "掩盖", chinese_romanization: "yǎngài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'manifest' means to display or show (a quality or feeling) by one's acts or appearance; demonstrate." + 
            "<br><br>" +
            "(A) 'fade' means to gradually grow faint and disappear." +
            "<br><br>" +
            "(B) 'diminish' means to make or become less." +
            "<br><br>" +
            "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(C) '显现' 意味着通过一个人的行为或外表展示或显示（某种品质或感觉）；展示。" + 
            "<br><br>" +
            "(A) '褪色' 意味着逐渐变淡和消失。" +
            "<br><br>" +
            "(B) '减少' 意味着使变少或变小。" +
            "<br><br>" +
            "(D) '掩盖' 意味着隐藏；掩饰。"
    },
    {
        id: 3,
    question: "The reporter's __________ interest in the victims' suffering was criticized as insensitive and inappropriate.",
    chinese_question: "记者对受害者痛苦的 __________ 兴趣被批评为不敏感和不合适。",
    answers: [
        { option: "A", answer: "compassionate", chinese_answer: "富有同情心的", chinese_romanization: "fùyǒu tóngqíng xīn de" },
        { option: "B", answer: "ghoulish", chinese_answer: "恐怖的", chinese_romanization: "kǒngbù de" },
        { option: "C", answer: "empathetic", chinese_answer: "具有同理心的", chinese_romanization: "jùyǒu tónglǐ xīn de" },
        { option: "D", answer: "sympathetic", chinese_answer: "富有同情心的", chinese_romanization: "fùyǒu tóngqíng xīn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ghoulish' means morbidly interested in death or disaster; gruesome." +
        "<br><br>" +
        "(A) 'compassionate' means feeling or showing sympathy and concern for others." +
        "<br><br>" +
        "(C) 'empathetic' means showing an ability to understand and share the feelings of another." +
        "<br><br>" +
        "(D) 'sympathetic' means feeling, showing, or expressing sympathy.",
    chinese_explanation: "(B) '恐怖的' 意味着对死亡或灾难有病态兴趣的；可怕的。" +
        "<br><br>" +
        "(A) '富有同情心的' 意味着感到或表现出对他人的同情和关心。" +
        "<br><br>" +
        "(C) '具有同理心的' 意味着显示出理解和分享他人感受的能力的。" +
        "<br><br>" +
        "(D) '富有同情心的' 意味着感到、表现出或表达同情的。"
    },
    {
        id: 4,
        question: "The __________ behavior of the spy led to the downfall of the entire mission.",
        chinese_question: "间谍的 __________ 行为导致整个任务的失败。",
        answers: [
            { option: "A", answer: "loyal", chinese_answer: "忠诚的", chinese_romanization: "zhōngchéng de" },
            { option: "B", answer: "faithful", chinese_answer: "忠实的", chinese_romanization: "zhōngshí de" },
            { option: "C", answer: "trustworthy", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
            { option: "D", answer: "treacherous", chinese_answer: "背叛的", chinese_romanization: "bèipàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'treacherous' means guilty of or involving betrayal or deception." +
            "<br><br>" +
            "(A) 'loyal' means giving or showing firm and constant support or allegiance." +
            "<br><br>" +
            "(B) 'faithful' means loyal, constant, and steadfast." +
            "<br><br>" +
            "(C) 'trustworthy' means able to be relied on as honest or truthful.",
        chinese_explanation: "(D) '背叛的' 意味着有罪或涉及背叛或欺骗的。" +
            "<br><br>" +
            "(A) '忠诚的' 意味着给予或表现出坚定和持续的支持或效忠的。" +
            "<br><br>" +
            "(B) '忠实的' 意味着忠诚、坚定不移的。" +
            "<br><br>" +
            "(C) '可信的' 意味着能够依赖为诚实或真实的。"
    },
    {
        id: 5,
            question: "The company's __________ growth in the past year has attracted many new investors.",
            chinese_question: "公司在过去一年的 __________ 增长吸引了许多新投资者。",
            answers: [
                    { option: "A", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
                    { option: "B", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
                    { option: "C", answer: "phenomenal", chinese_answer: "惊人的", chinese_romanization: "jīngrén de" },
                    { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" }
            ],
            correctAnswer: "C",
            explanation: "(C) 'phenomenal' means very remarkable; extraordinary." + 
                "<br><br>" + 
                "(A) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." + 
                "<br><br>" + 
                "(B) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." + 
                "<br><br>" + 
                "(D) 'insignificant' means too small or unimportant to be worth consideration.",
            chinese_explanation: "(C) '惊人的' 意味着非常显著的；非凡的。" +
                "<br><br>" +
                "(A) '缓慢的' 意味着移动或操作，或设计为仅以低速进行的；不快或不迅速的。" +
                "<br><br>" +
                "(B) '稳定的' 意味着牢固固定、支撑或平衡的；不摇晃或不移动的。" +
                "<br><br>" +
                "(D) '微不足道的' 意味着太小或不重要，不值得考虑的."
    },
    {
        id: 6,
        question: "The market was a feast for the __________ senses, filled with the aromas of fresh fruits, spices, and baked goods.",
        chinese_question: "市场是 __________ 感官的盛宴，充满了新鲜水果、香料和烘焙食品的香味。",
        answers: [
            { option: "A", answer: "auditory", chinese_answer: "听觉的", chinese_romanization: "tīngjué de" },
            { option: "B", answer: "visual", chinese_answer: "视觉的", chinese_romanization: "shìjué de" },
            { option: "C", answer: "olfactory", chinese_answer: "嗅觉的", chinese_romanization: "xiùjué de" },
            { option: "D", answer: "tactile", chinese_answer: "触觉的", chinese_romanization: "chùjué de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'olfactory' relates to the sense of smell." +
            "<br><br>" +
            "(A) 'auditory' relates to the sense of hearing." +
            "<br><br>" +
            "(B) 'visual' relates to the sense of sight." +
            "<br><br>" +
            "(D) 'tactile' relates to the sense of touch.",
        chinese_explanation: "(C) '嗅觉的'一词意味着与嗅觉有关。" +
            "<br><br>" +
            "(A) '听觉的' 意味着与听觉有关。" +
            "<br><br>" +
            "(B) '视觉的' 意味着与视觉有关。" +
            "<br><br>" +
            "(D) '触觉的' 意味着与触觉有关。"
    },
    {
        id: 7,
        question: "The __________ measures taken by the government aimed to control the outbreak.",
        chinese_question: "政府采取的 __________ 措施旨在控制疫情的爆发。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "B", answer: "severe", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "C", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "D", answer: "loose", chinese_answer: "松散的", chinese_romanization: "sōngsǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'severe' means very great; intense." +
            "<br><br>" +
            "(A) 'relaxed' means less strict or severe." +
            "<br><br>" +
            "(C) 'flexible' means capable of bending easily without breaking." +
            "<br><br>" +
            "(D) 'loose' means not firmly or tightly fixed in place; detached or able to be detached.",
        chinese_explanation: "(B) '严厉的' 意味着非常大的；强烈的。" +
            "<br><br>" +
            "(A) '放松的' 意味着不那么严格或严厉。" +
            "<br><br>" +
            "(C) '灵活的' 意味着能够轻松弯曲而不会折断。" +
            "<br><br>" +
            "(D) '松散的' 意味着不牢固或紧紧地固定在适当位置；分离或能够分离。"
    },
    {
        id: 8,
        question: "His __________ nature meant he often thought deeply about his actions and their impact on others.",
        chinese_question: "他的 __________ 性格意味着他经常深思自己的行为及其对他人的影响。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "B", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "C", answer: "unthinking", chinese_answer: "欠考虑的", chinese_romanization: "qiàn kǎolǜ de" },
            { option: "D", answer: "reflective", chinese_answer: "沉思的", chinese_romanization: "chénsī de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reflective' means relating to or characterized by deep thought; thoughtful." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(C) 'unthinking' means not showing careful thought or consideration.",
        chinese_explanation: "(D) '沉思的' 意味着与深思熟虑有关的或以深思熟虑为特征的；深思的。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '表面的' 意味着存在或发生在表面上的。" +
            "<br><br>" +
            "(C) '欠考虑的' 意味着没有显示出仔细的思考或考虑的."
    },
    {
        id: 9,
        question: "Her __________ advice was exactly what he needed, providing clear direction without overwhelming him.",
        chinese_question: "她的 __________ 建议正是他所需要的，提供了明确的方向而不会让他不知所措。",
        answers: [
            { option: "A", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "B", answer: "succinct", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
            { option: "D", answer: "elaborate", chinese_answer: "精细的", chinese_romanization: "jīngxì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'succinct' means briefly and clearly expressed." +
            "<br><br>" +
            "(A) 'convoluted' means (especially of an argument, story, or sentence) extremely complex and difficult to follow." +
            "<br><br>" +
            "(C) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
            "<br><br>" +
            "(D) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning.",
        chinese_explanation: "(B) '简洁的' 意味着简短而清楚地表达。" +
            "<br><br>" +
            "(A) '复杂的' 意味着（尤其是指争论、故事或句子）极其复杂且难以理解的。" +
            "<br><br>" +
            "(C) '模棱两可的' 意味着有多种解释的；没有一个明显的意义的。" +
            "<br><br>" +
            "(D) '精细的' 意味着涉及许多精心安排的部分或细节的；在设计和计划上详细而复杂的."
    },
    {
        id: 10,
    question: "The detective found the case __________, with clues that seemed to lead nowhere and a suspect who had a perfect alibi.",
    chinese_question: "侦探发现这个案件非常 __________，线索似乎无处可寻，嫌疑人也有完美的不在场证明。",
    answers: [
        { option: "A", answer: "puzzling", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
        { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "D", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'puzzling' means causing one to be perplexed or confused." +
        "<br><br>" +
        "(B) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(C) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(D) 'obvious' means easily perceived or understood; clear, self-evident, or apparent.",
    chinese_explanation: "(A) '令人困惑的' 意味着使人困惑或迷惑的。" +
        "<br><br>" +
        "(B) '清晰的' 意味着容易察觉、理解或解释的。" +
        "<br><br>" +
        "(C) '简单的' 意味着容易理解或完成的；没有困难的。" +
        "<br><br>" +
        "(D) '明显的' 意味着容易察觉或理解的；清晰的、不言自明的或显然的。"
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
