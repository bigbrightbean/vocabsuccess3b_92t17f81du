// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ negotiating skills ensured that she always got the best deal.",
    chinese_question: "她那__________的谈判技巧确保她总是能得到最好的交易。",
    answers: [
        { option: "A", answer: "foolish", chinese_answer: "愚蠢的", chinese_romanization: "yúchǔn de" },
        { option: "B", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" },
        { option: "C", answer: "shrewd", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
        { option: "D", answer: "gullible", chinese_answer: "轻信的", chinese_romanization: "qīngxìn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'shrewd' means having or showing sharp powers of judgment; astute. Figuratively, it can mean being very clever and insightful in making decisions." +
        "<br><br>" +
        "(A) 'foolish' means lacking good sense or judgment; unwise." +
        "<br><br>" +
        "(B) 'naive' means showing a lack of experience, wisdom, or judgment." +
        "<br><br>" +
        "(D) 'gullible' means easily persuaded to believe something; credulous.",
    chinese_explanation: "(C) '精明的'一词意味着具有或表现出敏锐的判断力；精明的。比喻地，它可以表示在做决策时非常聪明和有见识的。" +
        "<br><br>" +
        "(A) '愚蠢的' 意味着缺乏良好的判断力或判断；不明智的。" +
        "<br><br>" +
        "(B) '天真的' 意味着表现出缺乏经验、智慧或判断力的。" +
        "<br><br>" +
        "(D) '轻信的' 意味着容易被说服相信某事的；轻信的。"
    },
    {
        id: 2,
        question: "It was __________ that he didn't show up to the meeting, as he was always punctual and reliable.",
        chinese_question: "他没来开会真是 __________，因为他一向准时可靠。",
        answers: [
                { option: "A", answer: "odd", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
                { option: "B", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
                { option: "C", answer: "expected", chinese_answer: "预料中的", chinese_romanization: "yùliào zhōng de" },
                { option: "D", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'odd' means different from what is usual or expected; strange." + 
            "<br><br>" + 
            "(B) 'typical' means having the distinctive qualities of a particular type of person or thing." + 
            "<br><br>" + 
            "(C) 'expected' means regarded as likely to happen." + 
            "<br><br>" + 
            "(D) 'normal' means conforming to a standard; usual, typical, or expected.",
        chinese_explanation: "(A) '奇怪的' 意味着不同于通常或预期的；奇怪的。" +
            "<br><br>" +
            "(B) '典型的' 意味着具有某种人或事物的典型特质的。" +
            "<br><br>" +
            "(C) '预料中的' 意味着被认为可能会发生的。" +
            "<br><br>" +
            "(D) '正常的' 意味着符合标准的；通常的、典型的或预期的."
    },
    {
        id: 3,
        question: "The spread of the virus was __________, infecting thousands of people in just a few days.",
        chinese_question: "病毒的传播是 __________ 的，仅在几天内就感染了成千上万的人。",
        answers: [
            { option: "A", answer: "controlled", chinese_answer: "受控的", chinese_romanization: "shòukòng de" },
            { option: "B", answer: "exponential", chinese_answer: "指数的", chinese_romanization: "zhǐshù de" },
            { option: "C", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "D", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'exponential' means (of an increase) becoming more and more rapid." +
            "<br><br>" +
            "(A) 'controlled' means managed or regulated." +
            "<br><br>" +
            "(C) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(D) 'limited' means restricted in size, amount, or extent.",
        chinese_explanation: "(B) '指数的' 意味着（增长）越来越迅速的。" +
            "<br><br>" +
            "(A) '受控的' 意味着管理或调节的。" +
            "<br><br>" +
            "(C) '稳定的' 意味着牢固固定、支持或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(D) '有限的' 意味着在大小、数量或程度上受限的。"
    },
    {
        id: 4,
    question: "The agreement was based on __________ benefits, ensuring both parties gained equally.",
    chinese_question: "该协议基于__________利益，确保双方都获得平等的利益。",
    answers: [
        { option: "A", answer: "one-sided", chinese_answer: "单方面的", chinese_romanization: "dān fāngmiàn de" },
        { option: "B", answer: "unilateral", chinese_answer: "单边的", chinese_romanization: "dānbiān de" },
        { option: "C", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
        { option: "D", answer: "reciprocal", chinese_answer: "相互的", chinese_romanization: "xiānghù de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'reciprocal' means given, felt, or done in return. Figuratively, it can mean involving mutual exchange and benefit." +
        "<br><br>" +
        "(A) 'one-sided' means unfairly giving or dealing with only one side of a contentious issue or question." +
        "<br><br>" +
        "(B) 'unilateral' means performed by or affecting only one person, group, or country involved in a particular situation, without the agreement of another or the others." +
        "<br><br>" +
        "(C) 'biased' means unfairly prejudiced for or against someone or something.",
    chinese_explanation: "(D) '相互的'一词意味着给予、感受到或作为回报的。比喻地，它可以表示涉及相互交换和利益的。" +
        "<br><br>" +
        "(A) '单方面的' 意味着不公平地只给予或处理一个有争议的问题或问题的一方。" +
        "<br><br>" +
        "(B) '单边的' 意味着由或仅影响涉及特定情况的一个人、团体或国家，而没有另一个或其他的同意。" +
        "<br><br>" +
        "(C) '有偏见的' 意味着对某人或某事有不公平的偏见的。"
    },
    {
        id: 5,
    question: "Her __________ leadership style left no room for doubt or second-guessing, inspiring confidence in her team.",
    chinese_question: "她 __________ 的领导风格不容置疑或猜测，激发了团队的信心。",
    answers: [
      { option: "A", answer: "decisive", chinese_answer: "果断的", chinese_romanization: "guǒduàn de" },
      { option: "B", answer: "ambivalent", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" },
      { option: "C", answer: "indecisive", chinese_answer: "优柔寡断的", chinese_romanization: "yōuróu guǎduàn de" },
      { option: "D", answer: "conflicted", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'decisive' means showing the ability to make decisions quickly and effectively." +
      "<br><br>" +
      "(B) 'ambivalent' means having mixed feelings or contradictory ideas about something or someone." +
      "<br><br>" +
      "(C) 'indecisive' means not able to make decisions quickly and effectively." +
      "<br><br>" +
      "(D) 'conflicted' means having or showing confused and mutually inconsistent feelings.",
    chinese_explanation: "(A) '果断的' 意味着表现出快速有效做出决策的能力。" +
      "<br><br>" +
      "(B) '矛盾的' 意味着对某事或某人有复杂情感或相互矛盾的想法。" +
      "<br><br>" +
      "(C) '优柔寡断的' 意味着不能快速有效做出决策的。" +
      "<br><br>" +
      "(D) '矛盾的' 意味着有或表现出困惑和相互矛盾的情感。"
    },
    {
        id: 6,
    question: "Their relationship felt __________, lacking any warmth or emotion.",
    chinese_question: "他们的关系感觉__________，缺乏任何温暖或情感。",
    answers: [
        { option: "A", answer: "warm", chinese_answer: "温暖的", chinese_romanization: "wēnnuǎn de" },
        { option: "B", answer: "sterile", chinese_answer: "无生气的", chinese_romanization: "wú shēngqì de" },
        { option: "C", answer: "affectionate", chinese_answer: "亲切的", chinese_romanization: "qīnqiè de" },
        { option: "D", answer: "vibrant", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sterile' means lacking in imagination, creativity, or excitement; uninspiring or unproductive." +
        "<br><br>" +
        "(A) 'warm' means showing enthusiasm, affection, or kindness." +
        "<br><br>" +
        "(C) 'affectionate' means readily feeling or showing fondness or tenderness." +
        "<br><br>" +
        "(D) 'vibrant' means full of energy and enthusiasm.",
    chinese_explanation: "(B) '无生气的'一词意味着缺乏想象力、创造力或兴奋；乏味或缺乏生产力。" +
        "<br><br>" +
        "(A) '温暖的' 意味着表现出热情、关爱或友善。" +
        "<br><br>" +
        "(C) '亲切的' 意味着容易感到或表现出喜爱或温柔。" +
        "<br><br>" +
        "(D) '充满活力的' 意味着充满能量和热情。"
    },
    {
        id: 7,
        question: "The job offer came at an __________ time, just when he was considering a career change.",
        chinese_question: "这份工作机会来的 __________，正好在他考虑换职业的时候。",
        answers: [
            { option: "A", answer: "inappropriate", chinese_answer: "不合适的", chinese_romanization: "bù héshì de" },
            { option: "B", answer: "opportune", chinese_answer: "恰当的", chinese_romanization: "qiàdàng de" },
            { option: "C", answer: "unsuitable", chinese_answer: "不适合的", chinese_romanization: "bù shìhé de" },
            { option: "D", answer: "ill-timed", chinese_answer: "时间不当的", chinese_romanization: "shíjiān bùdàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'opportune' means well-chosen or particularly favorable or appropriate." +
            "<br><br>" +
            "(A) 'inappropriate' means not suitable or proper in the circumstances." +
            "<br><br>" +
            "(C) 'unsuitable' means not fitting or appropriate." +
            "<br><br>" +
            "(D) 'ill-timed' means done or occurring at an inappropriate time.",
        chinese_explanation: "(B) '恰当的' 意味着选择得好或特别有利或适当的。" +
            "<br><br>" +
            "(A) '不合适的' 意味着在这种情况下不合适或不适当的。" +
            "<br><br>" +
            "(C) '不适合的' 意味着不合适的。" +
            "<br><br>" +
            "(D) '时间不当的' 意味着在不合适的时间做或发生的."
    },
    {
        id: 8,
        question: "The politician's __________ promises were hard to believe and even harder to achieve.",
        chinese_question: "这位政客的 __________ 承诺很难相信，更难实现。",
        answers: [
            { option: "A", answer: "realistic", chinese_answer: "现实", chinese_romanization: "xiànshí" },
            { option: "B", answer: "achievable", chinese_answer: "可实现", chinese_romanization: "kě shíxiàn" },
            { option: "C", answer: "pragmatic", chinese_answer: "务实", chinese_romanization: "wùshí" },
            { option: "D", answer: "grandiose", chinese_answer: "宏伟", chinese_romanization: "hóngwěi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'grandiose' means excessively grand or ambitious." +
            "<br><br>" +
            "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
            "<br><br>" +
            "(B) 'achievable' means able to be brought about or reached successfully." +
            "<br><br>" +
            "(C) 'pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.",
        chinese_explanation: "(D) '宏伟' 意味着过于宏大或雄心勃勃的。" +
            "<br><br>" +
            "(A) '现实' 意味着对能实现或预期的事物有或表现出合理和实际的想法。" +
            "<br><br>" +
            "(B) '可实现' 意味着能够成功地实现或达到。" +
            "<br><br>" +
            "(C) '务实' 意味着以实际而不是理论考虑的方式处理事情，讲究实际。"
    },
    {
        id: 9,
        question: "His __________ emotions were evident when he spoke about his childhood.",
        chinese_question: "当他谈到自己的童年时，他的 __________ 情感显露无遗。",
        answers: [
            { option: "A", answer: "resilient", chinese_answer: "有弹性的", chinese_romanization: "yǒu tánxìng de" },
            { option: "B", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "C", answer: "vulnerable", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
            { option: "D", answer: "tough", chinese_answer: "坚韧的", chinese_romanization: "jiānrèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vulnerable' means susceptible to physical or emotional attack or harm." +
            "<br><br>" +
            "(A) 'resilient' means able to withstand or recover quickly from difficult conditions." +
            "<br><br>" +
            "(B) 'strong' means having the power to move heavy weights or perform other physically demanding tasks." +
            "<br><br>" +
            "(D) 'tough' means strong enough to withstand adverse conditions or rough handling.",
        chinese_explanation: "(C) '脆弱的' 意味着容易受到身体或情感上的攻击或伤害的。" +
            "<br><br>" +
            "(A) '有弹性的' 意味着能够承受或迅速从困难条件中恢复的。" +
            "<br><br>" +
            "(B) '强壮的' 意味着有力量搬动重物或进行其他体力要求高的任务的。" +
            "<br><br>" +
            "(D) '坚韧的' 意味着足够强壮以承受恶劣条件或粗暴处理的。"
    },
    {
        id: 10,
        question: "Her __________ role in the project made her the go-to person for any major decisions and problem-solving.",
        chinese_question: "她在项目中的 __________ 角色使她成为任何重大决策和解决问题的首选人。",
        answers: [
            { option: "A", answer: "predominant", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" },
            { option: "B", answer: "negligible", chinese_answer: "可忽略的", chinese_romanization: "kě hūlüè de" },
            { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "D", answer: "auxiliary", chinese_answer: "辅助的", chinese_romanization: "fǔzhù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'predominant' means present as the strongest or main element." +
            "<br><br>" +
            "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(C) 'supportive' means providing encouragement or emotional help." +
            "<br><br>" +
            "(D) 'auxiliary' means providing supplementary or additional help and support.",
        chinese_explanation: "(A) '主要的' 意味着作为最强或主要元素存在的。" +
            "<br><br>" +
            "(B) '可忽略的' 意味着小到或不重要到不值得考虑的；微不足道的。" +
            "<br><br>" +
            "(C) '支持的' 意味着提供鼓励或情感上的帮助的。" +
            "<br><br>" +
            "(D) '辅助的' 意味着提供补充或额外的帮助和支持的。"
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
