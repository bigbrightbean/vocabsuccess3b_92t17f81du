// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The constant stress from work was __________ to his health, causing frequent headaches and insomnia.",
        chinese_question: "工作的持续压力对他的健康 __________ ，导致经常性头痛和失眠。",
        answers: [
            { option: "A", answer: "inimical", chinese_answer: "有害", chinese_romanization: "yǒuhài" },
            { option: "B", answer: "supportive", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "D", answer: "beneficial", chinese_answer: "有益", chinese_romanization: "yǒuyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inimical' means harmful or hostile." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(D) 'beneficial' means resulting in good; favorable or advantageous.",
        chinese_explanation: "(A) '有害' 意味着有害或敌对的。" +
            "<br><br>" +
            "(B) '支持' 意味着提供鼓励或情感上的帮助。" +
            "<br><br>" +
            "(C) '微不足道' 意味着小到或不重要到不值得考虑的。" +
            "<br><br>" +
            "(D) '有益' 意味着带来好处；有利或有优势的。"
    },
    {
        id: 2,
        question: "The __________ array of options left her unsure of which path to choose.",
        chinese_question: "__________的选择让她不确定该选择哪条路。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "bewildering", chinese_answer: "令人困惑的", chinese_romanization: "lìngrén kùnhuò de" },
            { option: "C", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dāng de" },
            { option: "D", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bewildering' means extremely confusing. Figuratively, it can mean a situation or array of choices that causes confusion." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(B) '令人困惑的' 一词意味着极其令人困惑。比喻地，它可以表示导致混淆的情况或选择。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成；没有困难。" +
            "<br><br>" +
            "(C) '直截了当的' 意味着简单而容易做或理解。" +
            "<br><br>" +
            "(D) '清晰的' 意味着容易感知、理解或解释。"
    },
    {
        id: 3,
        question: "Her __________ motivation for helping others comes from a deep sense of compassion and empathy, not from a desire for recognition.",
        chinese_question: "她帮助他人的 __________ 动机源于深深的同情心和共情，而不是为了得到认可。",
        answers: [
            { option: "A", answer: "intrinsic", chinese_answer: "内在的", chinese_romanization: "nèizài de" },
            { option: "B", answer: "external", chinese_answer: "外在的", chinese_romanization: "wàizài de" },
            { option: "C", answer: "incidental", chinese_answer: "附带的", chinese_romanization: "fùdài de" },
            { option: "D", answer: "apparent", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intrinsic' means belonging naturally; essential." + 
            "<br><br>" +
            "(B) 'external' means belonging to or forming the outer surface or structure of something." +
            "<br><br>" +
            "(C) 'incidental' means accompanying but not a major part of something." +
            "<br><br>" +
            "(D) 'apparent' means clearly visible or understood; obvious.",
        chinese_explanation: "(A) '内在的' 意味着本质上属于的；必要的。" + 
            "<br><br>" +
            "(B) '外在的' 意味着属于或构成某物的外表面或结构的。" +
            "<br><br>" +
            "(C) '附带的' 意味着伴随的，但不是某事的主要部分。" +
            "<br><br>" +
            "(D) '明显的' 意味着清楚地看见或理解的；显而易见的。"
    },
    {
        id: 4,
        question: "The __________ judge rarely revealed his thoughts during the trial, leaving everyone guessing about his final decision.",
        chinese_question: "这位 __________ 的法官在审判期间很少透露自己的想法，让每个人都猜测他的最终决定。",
        answers: [
            { option: "A", answer: "vocal", chinese_answer: "直言不讳的", chinese_romanization: "zhí yán bù huì de" },
            { option: "B", answer: "communicative", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" },
            { option: "C", answer: "taciturn", chinese_answer: "沉默寡言的", chinese_romanization: "chénmò guǎyán de" },
            { option: "D", answer: "expressive", chinese_answer: "表达丰富的", chinese_romanization: "biǎodá fēngfù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'taciturn' means reserved or uncommunicative in speech; saying little." +
            "<br><br>" +
            "(A) 'vocal' means expressing opinions or feelings freely or loudly." +
            "<br><br>" +
            "(B) 'communicative' means willing, eager, or able to talk or impart information." +
            "<br><br>" +
            "(D) 'expressive' means effectively conveying thought or feeling.",
        chinese_explanation: "(C) '沉默寡言的' 意味着言语上保守或不爱说话；说得很少。" +
            "<br><br>" +
            "(A) '直言不讳的' 意味着自由或大声地表达意见或感情的。" +
            "<br><br>" +
            "(B) '健谈的' 意味着愿意、渴望或能够交谈或传达信息的。" +
            "<br><br>" +
            "(D) '表达丰富的' 意味着有效地传达思想或感情的."
    },
    {
        id: 5,
        question: "The __________ skills of the interpreter were crucial in the international conference.",
        chinese_question: "翻译员的__________技能在国际会议上至关重要。",
        answers: [
            { option: "A", answer: "mathematical", chinese_answer: "数学的", chinese_romanization: "shùxué de" },
            { option: "B", answer: "linguistic", chinese_answer: "语言的", chinese_romanization: "yǔyán de" },
            { option: "C", answer: "technical", chinese_answer: "技术的", chinese_romanization: "jìshù de" },
            { option: "D", answer: "athletic", chinese_answer: "运动的", chinese_romanization: "yùndòng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'linguistic' means relating to language or linguistics. Figuratively, it can mean having a strong ability with languages." +
            "<br><br>" +
            "(A) 'mathematical' means relating to mathematics." +
            "<br><br>" +
            "(C) 'technical' means relating to a particular subject, art, or craft, or its techniques." +
            "<br><br>" +
            "(D) 'athletic' means physically strong, fit, and active.",
        chinese_explanation: "(B) '语言的' 一词意味着与语言或语言学有关的。比喻地，它可以表示具有强语言能力的。" +
            "<br><br>" +
            "(A) '数学的' 意味着与数学有关的。" +
            "<br><br>" +
            "(C) '技术的' 意味着与特定学科、艺术或工艺或其技术有关的。" +
            "<br><br>" +
            "(D) '运动的' 意味着身体强壮、健康和活跃的。"
    },
    {
        id: 6,
        question: "Her belief that she could succeed without any help was __________ because she had no experience and lacked the necessary skills.",
        chinese_question: "她认为自己不需要任何帮助就能成功的想法是 __________ 的，因为她没有经验且缺乏必要的技能。",
        answers: [
            { option: "A", answer: "fallacious", chinese_answer: "谬误的", chinese_romanization: "miùwù de" },
            { option: "B", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
            { option: "C", answer: "logical", chinese_answer: "合乎逻辑的", chinese_romanization: "héhū luóji de" },
            { option: "D", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fallacious' means based on a mistaken belief." + 
            "<br><br>" +
            "(B) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(C) 'logical' means characterized by or capable of clear, sound reasoning." +
            "<br><br>" +
            "(D) 'rational' means based on or in accordance with reason or logic.",
        chinese_explanation: "(A) '谬误的' 意味着基于错误的信念的。" + 
            "<br><br>" +
            "(B) '现实的' 意味着对可以实现或期望的事情有明智和实际的想法的。" +
            "<br><br>" +
            "(C) '合乎逻辑的' 意味着具有或能够进行清晰、合理的推理的。" +
            "<br><br>" +
            "(D) '理性的' 意味着基于或符合理由或逻辑的。"
    },
    {
        id: 7,
        question: "His __________ attitude extended beyond just giving money; he also volunteered his time.",
        chinese_question: "他的__________态度不仅仅表现在捐钱上；他还志愿贡献自己的时间。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "B", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "C", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "D", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'charitable' means relating to the assistance of those in need. Figuratively, it can mean being generous and helpful in various ways." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(B) 'stingy' means unwilling to give or spend; ungenerous." +
            "<br><br>" +
            "(D) 'greedy' means having or showing an intense and selfish desire for something, especially wealth or power.",
        chinese_explanation: "(C) '慈善的'一词意味着与帮助有需要的人有关。比喻地，它可以表示在各种方式上慷慨和乐于助人。" +
            "<br><br>" +
            "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
            "<br><br>" +
            "(B) '吝啬的' 意味着不愿意给予或花费；不慷慨的。" +
            "<br><br>" +
            "(D) '贪婪的' 意味着对某物，尤其是财富或权力，表现出强烈和自私的欲望。"
    },
    {
        id: 8,
        question: "The __________ decision to start her own business paid off, and now she's a successful entrepreneur.",
        chinese_question: "__________的决定开始自己的事业取得了成功，现在她是一位成功的企业家。",
        answers: [
            { option: "A", answer: "timid", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" },
            { option: "B", answer: "audacious", chinese_answer: "大胆", chinese_romanization: "dàdǎn" },
            { option: "C", answer: "reserved", chinese_answer: "保守", chinese_romanization: "bǎoshǒu" },
            { option: "D", answer: "conventional", chinese_answer: "传统", chinese_romanization: "chuántǒng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'audacious' means showing a willingness to take surprisingly bold risks." +
                "<br><br>" +
                "(A) 'timid' means shy or lacking in courage." +
                "<br><br>" +
                "(C) 'reserved' means cautious or holding back." +
                "<br><br>" +
                "(D) 'conventional' means following traditional or ordinary methods.",
        chinese_explanation: "(B) '大胆' 一词意味着显示出愿意冒险的勇气。" +
                "<br><br>" +
                "(A) '胆小' 意味着害羞或缺乏勇气。" +
                "<br><br>" +
                "(C) '保守' 意味着谨慎或克制。" +
                "<br><br>" +
                "(D) '传统' 意味着遵循传统或普通的方法。"
    },
    {
        id: 9,
        question: "His __________ pursuit of justice made him a hero in the eyes of the community.",
        chinese_question: "他 __________ 追求正义，使他在社区中成为英雄。",
        answers: [
            { option: "A", answer: "ignoble", chinese_answer: "卑鄙的", chinese_romanization: "bēibǐ de" },
            { option: "B", answer: "petty", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
            { option: "D", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'noble' means having or showing fine personal qualities or high moral principles." +
            "<br><br>" +
            "(A) 'ignoble' means not honorable in character or purpose." +
            "<br><br>" +
            "(B) 'petty' means of little importance; trivial." +
            "<br><br>" +
            "(D) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure.",
        chinese_explanation: "(C) '高尚的' 意味着拥有或表现出优秀的个人品质或高尚的道德原则。" +
            "<br><br>" +
            "(A) '卑鄙的' 意味着在性格或目的上不光荣。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着不重要的；微不足道的。" +
            "<br><br>" +
            "(D) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。"
    },
    {
        id: 10,
        question: "The project was put on hold for an __________ period, with no clear timeline for resumption.",
        chinese_question: "项目被无限期搁置，没有明确的重新开始的时间表。",
        answers: [
            { option: "A", answer: "definite", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "B", answer: "fixed", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
            { option: "C", answer: "indefinite", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "D", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'indefinite' means lasting for an unknown or unstated length of time." + 
            "<br><br>" +
            "(A) 'definite' means clearly stated or decided; not vague or doubtful." +
            "<br><br>" +
            "(B) 'fixed' means fastened securely in position." +
            "<br><br>" +
            "(D) 'specific' means clearly defined or identified.",
        chinese_explanation: "(C) '不确定的'一词意味着持续时间未知或未说明的。" + 
            "<br><br>" +
            "(A) '明确的' 意味着清楚地陈述或决定的；不模糊或不确定的。" +
            "<br><br>" +
            "(B) '固定的' 意味着牢牢固定在位置上的。" +
            "<br><br>" +
            "(D) '具体的' 意味着清楚定义或确定的。"
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
