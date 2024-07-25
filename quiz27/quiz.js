// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ feedback helped me improve my presentation, as she pointed out both the strengths and the areas needing improvement.",
        chinese_question: "她的 __________ 反馈帮助我改进了演讲，她指出了优点和需要改进的地方。",
        answers: [
            { option: "A", answer: "candid", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "B", answer: "deceptive", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
            { option: "C", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "evasive", chinese_answer: "逃避的", chinese_romanization: "táobì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'candid' means truthful and straightforward; frank." + 
            "<br><br>" +
            "(B) 'deceptive' means giving an appearance or impression different from the true one; misleading." +
            "<br><br>" +
            "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(D) 'evasive' means tending to avoid commitment or self-revelation, especially by responding only indirectly.",
        chinese_explanation: "(A) '直率的' 意味着真实而直率的；坦率的。" + 
            "<br><br>" +
            "(B) '欺骗的' 意味着给人一种与真实情况不同的外观或印象；具有误导性的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着性质不确定、不明确或不清楚的。" +
            "<br><br>" +
            "(D) '逃避的' 意味着倾向于避免承诺或自我揭示的，尤其是通过只间接地回应。"
    },
    {
        id: 2,
        question: "The project was __________, requiring long hours and intense focus to complete.",
        chinese_question: "这个项目非常 __________，需要长时间和高度集中才能完成。",
        answers: [
            { option: "A", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "B", answer: "relaxing", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "grueling", chinese_answer: "艰难的", chinese_romanization: "jiānnán de" },
            { option: "D", answer: "effortless", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grueling' means extremely tiring and demanding. Figuratively, it can mean very challenging and exhausting." + 
            "<br><br>" +
            "(A) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(B) 'relaxing' means making one feel relaxed; reducing tension or anxiety." +
            "<br><br>" +
            "(D) 'effortless' means requiring no physical or mental exertion.",
        chinese_explanation: "(C) '艰难的'一词意味着极其累人和要求高的。比喻地，它可以表示非常具有挑战性和耗费精力的。" + 
            "<br><br>" +
            "(A) '容易的' 意味着不费大力就能达到的；呈现少许困难的。" +
            "<br><br>" +
            "(B) '放松的' 意味着使人感到放松的；减少紧张或焦虑的。" +
            "<br><br>" +
            "(D) '轻松的' 意味着不需要身体或精神努力的。"
    },
    {
        id: 3,
        question: "Their meetings were __________, occurring whenever both had free time.",
        chinese_question: "他们的会面是__________的，只在双方都有空时进行。",
        answers: [
            { option: "A", answer: "scheduled", chinese_answer: "计划好的", chinese_romanization: "jìhuà hǎo de" },
            { option: "B", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "C", answer: "regular", chinese_answer: "定期的", chinese_romanization: "dìngqī de" },
            { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(A) 'scheduled' means included in or planned according to a schedule." +
            "<br><br>" +
            "(C) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances." +
            "<br><br>" +
            "(D) 'routine' means performed as part of a regular procedure rather than for a special reason.",
        chinese_explanation: "(B) '零星的' 意味着在不规则的间隔或只有在少数地方发生；分散或孤立的。" +
            "<br><br>" +
            "(A) '计划好的' 意味着包括在计划或根据计划安排的。" +
            "<br><br>" +
            "(C) '定期的' 意味着按一定或明确的模式安排的，特别是在各个实例之间的相同空间。" +
            "<br><br>" +
            "(D) '常规的' 意味着作为常规程序的一部分执行，而不是为了特别的原因。"
    },
    {
        id: 4,
    question: "The office felt __________ and impersonal, with its plain white walls and lack of any personal touches.",
    chinese_question: "办公室感觉 __________ 和没有人情味，白色的墙壁和缺乏任何个人装饰。",
    answers: [
        { option: "A", answer: "sterile", chinese_answer: "无生气的", chinese_romanization: "wú shēngqì de" },
        { option: "B", answer: "vibrant", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
        { option: "C", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
        { option: "D", answer: "cozy", chinese_answer: "舒适的", chinese_romanization: "shūshì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'sterile' means lacking in imagination, creativity, or excitement; uninspiring or unproductive." +
        "<br><br>" +
        "(B) 'vibrant' means full of energy and life." +
        "<br><br>" +
        "(C) 'lively' means full of life and energy; active and outgoing." +
        "<br><br>" +
        "(D) 'cozy' means giving a feeling of comfort, warmth, and relaxation.",
    chinese_explanation: "(A) '无生气的' 意味着缺乏想象力、创造力或兴奋的；无趣或无生产力的。" +
        "<br><br>" +
        "(B) '充满活力的' 意味着充满能量和生命的。" +
        "<br><br>" +
        "(C) '活泼的' 意味着充满生机和能量的；活跃和外向的。" +
        "<br><br>" +
        "(D) '舒适的' 意味着给人一种舒适、温暖和放松的感觉。"
    },
    {
        id: 5,
        question: "Their new policy is aimed at providing an __________ distribution of resources.",
        chinese_question: "他们的新政策旨在提供__________的资源分配。",
        answers: [
            { option: "A", answer: "unjust", chinese_answer: "不公正的", chinese_romanization: "bù gōngzhèng de" },
            { option: "B", answer: "equitable", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "C", answer: "discriminatory", chinese_answer: "歧视的", chinese_romanization: "qíshì de" },
            { option: "D", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'equitable' means fair and impartial." + 
            "<br><br>" +
            "(A) 'unjust' means not based on or behaving according to what is morally right and fair." +
            "<br><br>" +
            "(C) 'discriminatory' means making or showing an unfair or prejudicial distinction between different categories of people or things." +
            "<br><br>" +
            "(D) 'biased' means unfairly prejudiced for or against someone or something.",
        chinese_explanation: "(B) '公平的'一词意味着公正和不偏不倚的。" + 
            "<br><br>" +
            "(A) '不公正的' 意味着不基于或不按照道德正确和公平行事的。" +
            "<br><br>" +
            "(C) '歧视的' 意味着在不同类别的人或事物之间做出不公平或有偏见的区分。" +
            "<br><br>" +
            "(D) '有偏见的' 意味着对某人或某事不公平地有偏见的。"
    },
    {
        id: 6,
        question: "Her __________ behaviour at the party made others uncomfortable.",
        chinese_question: "她在派对上的__________行为让其他人感到不舒服。",
        answers: [
            { option: "A", answer: "graceful", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "B", answer: "elegant", chinese_answer: "高雅的", chinese_romanization: "gāoyǎ de" },
            { option: "C", answer: "dignified", chinese_answer: "庄重的", chinese_romanization: "zhuāngzhòng de" },
            { option: "D", answer: "unsightly", chinese_answer: "难看的", chinese_romanization: "nánkàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unsightly' means unpleasant to look at; ugly." +
            "<br><br>" +
            "(A) 'graceful' means having or showing grace or elegance." +
            "<br><br>" +
            "(B) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(C) 'dignified' means having or showing a composed or serious manner that is worthy of respect.",
        chinese_explanation: "(D) '难看的' 意味着看起来不舒服的；丑陋的。" +
            "<br><br>" +
            "(A) '优雅的' 意味着表现出优雅或优雅的。" +
            "<br><br>" +
            "(B) '高雅的' 意味着外观或举止上令人愉悦地优雅和时尚的。" +
            "<br><br>" +
            "(C) '庄重的' 意味着表现出或表现出一种值得尊敬的沉着或严肃的态度。"
    },
    {
        id: 7,
        question: "The __________ foundation of their friendship helped them overcome many challenges together.",
        chinese_question: "他们友谊的 __________ 基础帮助他们一起克服了许多挑战。",
        answers: [
            { option: "A", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "sturdy", chinese_answer: "坚实的", chinese_romanization: "jiānshí de" },
            { option: "D", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sturdy' means having resolute determination." +
            "<br><br>" +
            "(A) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(B) 'weak' means lacking physical strength or vigor." +
            "<br><br>" +
            "(D) 'delicate' means easily broken or damaged; fragile.",
        chinese_explanation: "(C) '坚实的' 意味着有坚定的决心。" +
            "<br><br>" +
            "(A) '脆弱的' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏体力或活力。" +
            "<br><br>" +
            "(D) '精致的' 意味着容易破碎或损坏；脆弱的。"
    },
    {
        id: 8,
        question: "The __________ damage to the car was barely noticeable and required no repairs.",
        chinese_question: "车上的 __________ 损伤几乎看不出来，不需要修理。",
        answers: [
            { option: "A", answer: "severe", chinese_answer: "严重", chinese_romanization: "yánzhòng" },
            { option: "B", answer: "inconsiderable", chinese_answer: "微不足道", chinese_romanization: "wēibùzúdào" },
            { option: "C", answer: "substantial", chinese_answer: "实质性", chinese_romanization: "shízhìxìng" },
            { option: "D", answer: "critical", chinese_answer: "关键", chinese_romanization: "guānjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'inconsiderable' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(A) 'severe' means very great or intense." +
            "<br><br>" +
            "(C) 'substantial' means of considerable importance, size, or worth." +
            "<br><br>" +
            "(D) 'critical' means of great importance.",
        chinese_explanation: "(B) '微不足道' 意味着小到不值得考虑。" +
            "<br><br>" +
            "(A) '严重' 意味着非常大或强烈。" +
            "<br><br>" +
            "(C) '实质性' 意味着相当重要、大小或价值。" +
            "<br><br>" +
            "(D) '关键' 意味着非常重要。"
    },
    {
        id: 9,
        question: "Her __________ leadership style ensured that everyone's opinions were heard and valued.",
        chinese_question: "她的__________领导风格确保了每个人的意见都被听到和重视。",
        answers: [
            { option: "A", answer: "exclusive", chinese_answer: "排外的", chinese_romanization: "páiwài de" },
            { option: "B", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "C", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "D", answer: "restrictive", chinese_answer: "限制性的", chinese_romanization: "xiànzhì xìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inclusive' means including all the services or items normally expected or required. Figuratively, it can mean being open and welcoming to everyone." + 
            "<br><br>" +
            "(A) 'exclusive' means excluding or not admitting other things." +
            "<br><br>" +
            "(B) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(D) 'restrictive' means imposing restrictions or limitations on someone's activities or freedom.",
        chinese_explanation: "(C) '包容的'一词意味着包括所有正常预期或需要的服务或项目。比喻地，它可以表示对每个人都开放和欢迎的。" + 
            "<br><br>" +
            "(A) '排外的' 意味着排除或不承认其他事物的。" +
            "<br><br>" +
            "(B) '狭窄的' 意味着在范围、数量或程度上有限的。" +
            "<br><br>" +
            "(D) '限制性的' 意味着对某人的活动或自由施加限制的。"
    },
    {
        id: 10,
        question: "The project aims to have a __________ impact on the community, addressing issues from education to healthcare.",
        chinese_question: "该项目旨在对社区产生 __________ 的影响，解决从教育到医疗保健的问题。",
        answers: [
            { option: "A", answer: "broad", chinese_answer: "广泛的", chinese_romanization: "guǎngfàn de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'broad' means having a wide range or extent." + 
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree.",
        chinese_explanation: "(A) '广泛的' 意味着范围或广度很大的。" + 
            "<br><br>" +
            "(B) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着小到或不重要到不值得考虑的。" +
            "<br><br>" +
            "(D) '最小的' 意味着最小的数量、数量或程度的。"
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
