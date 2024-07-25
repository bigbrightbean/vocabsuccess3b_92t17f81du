// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's __________ response to the market changes cost them significant losses.",
        chinese_question: "公司对市场变化的 __________ 反应让他们蒙受了重大损失。",
        answers: [
            { option: "A", answer: "belated", chinese_answer: "迟来的", chinese_romanization: "chí lái de" },
            { option: "B", answer: "swift", chinese_answer: "迅速的", chinese_romanization: "xùnsù de" },
            { option: "C", answer: "proactive", chinese_answer: "积极主动的", chinese_romanization: "jījí zhǔdòng de" },
            { option: "D", answer: "immediate", chinese_answer: "立即的", chinese_romanization: "lìjí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'belated' means coming or happening later than should have been the case." +
                "<br><br>" +
                "(B) 'swift' means happening quickly or promptly." +
                "<br><br>" +
                "(C) 'proactive' means creating or controlling a situation rather than just responding to it after it has happened." +
                "<br><br>" +
                "(D) 'immediate' means occurring or done at once.",
        chinese_explanation: "(A) '迟来的' 意味着比应有的时间更晚发生的。" +
                "<br><br>" +
                "(B) '迅速的' 意味着快速或及时发生的。" +
                "<br><br>" +
                "(C) '积极主动的' 意味着创造或控制一个情况，而不仅仅是在它发生后做出反应。" +
                "<br><br>" +
                "(D) '立即的' 意味着立刻发生的。"
    },
    {
        id: 2,
        question: "After realizing the impact of his harsh words, he felt deeply __________ and apologized to his friend.",
        chinese_question: "意识到自己严厉言辞的影响后，他感到深深的 __________ 并向朋友道歉。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "proud", chinese_answer: "骄傲的", chinese_romanization: "jiāo'ào de" },
            { option: "C", answer: "defiant", chinese_answer: "挑衅的", chinese_romanization: "tiǎoxìn de" },
            { option: "D", answer: "remorseful", chinese_answer: "懊悔的", chinese_romanization: "àohuǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'remorseful' means filled with regret or guilt." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'proud' means feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions." +
            "<br><br>" +
            "(C) 'defiant' means showing open resistance or bold disobedience.",
        chinese_explanation: "(D) '懊悔的' 意味着充满悔恨或内疚的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情；冷漠的。" +
            "<br><br>" +
            "(B) '骄傲的' 意味着因自己的成就、品质或财产而感到深深的愉悦或满足。" +
            "<br><br>" +
            "(C) '挑衅的' 意味着表现出公开的抵抗或大胆的不服从。"
    },
    {
        id: 3,
        question: "She was __________ to the subtle changes in his mood, always knowing when he needed support.",
        chinese_question: "她对他情绪的细微变化非常 __________，总是知道他何时需要支持。",
        answers: [
            { option: "A", answer: "oblivious", chinese_answer: "不在意的", chinese_romanization: "bù zàiyì de" },
            { option: "B", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" },
            { option: "C", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(A) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(B) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '注意的' 意味着密切注意某事。" +
            "<br><br>" +
            "(A) '不在意的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(B) '不知道的' 意味着对情况或事实没有了解。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。"
    },
    {
        id: 4,
        question: "He made a __________ gesture, pretending to bow deeply and sarcastically.",
        chinese_question: "他做了一个 __________ 的手势，假装深深地鞠躬并带有讽刺意味。",
        answers: [
            { option: "A", answer: "mocking", chinese_answer: "嘲讽", chinese_romanization: "cháofèng" },
            { option: "B", answer: "courteous", chinese_answer: "礼貌", chinese_romanization: "lǐmào" },
            { option: "C", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
            { option: "D", answer: "humble", chinese_answer: "谦虚", chinese_romanization: "qiānxū" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mocking' means making fun of someone or something in a cruel way." +
            "<br><br>" +
            "(B) 'courteous' means polite, respectful, or considerate in manner." +
            "<br><br>" +
            "(C) 'sincere' means free from pretense or deceit; genuine." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's own importance.",
        chinese_explanation: "(A) '嘲讽' 意味着以残酷的方式取笑某人或某事。" +
            "<br><br>" +
            "(B) '礼貌' 意味着举止礼貌、尊重或考虑周到。" +
            "<br><br>" +
            "(C) '真诚' 意味着没有虚伪或欺骗；真挚。" +
            "<br><br>" +
            "(D) '谦虚' 意味着对自己的重要性有或表现出适度或低估。"
    },
    {
        id: 5,
    question: "The lecture was so __________ with information that it was hard to absorb all the details at once.",
    chinese_question: "这场讲座的信息量 __________，很难一次吸收所有细节。",
    answers: [
      { option: "A", answer: "dense", chinese_answer: "密集的", chinese_romanization: "mìjí de" },
      { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
      { option: "C", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
      { option: "D", answer: "light", chinese_answer: "轻松的", chinese_romanization: "qīngsōng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dense' means containing a lot of information in a small space." +
      "<br><br>" +
      "(B) 'simple' means easily understood or done; presenting no difficulty." +
      "<br><br>" +
      "(C) 'superficial' means existing or occurring at or on the surface." +
      "<br><br>" +
      "(D) 'light' means not heavy or not difficult to understand.",
    chinese_explanation: "(A) '密集的' 意味着在小空间里包含大量信息的。" +
      "<br><br>" +
      "(B) '简单的' 意味着容易理解或完成的；没有困难的。" +
      "<br><br>" +
      "(C) '表面的' 意味着存在或发生在表面上的。" +
      "<br><br>" +
      "(D) '轻松的' 意味着不重的或不难理解的。"
    },
    {
        id: 6,
    question: "She remained __________ of the miracle cure, preferring to trust scientific evidence.",
    chinese_question: "她对这次奇迹疗法保持__________，更愿意相信科学证据。",
    answers: [
        { option: "A", answer: "hopeful", chinese_answer: "希望", chinese_romanization: "xīwàng" },
        { option: "B", answer: "skeptical", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "C", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'skeptical' means not easily convinced; having doubts or reservations." +
        "<br><br>" +
        "(A) 'hopeful' means feeling or inspiring optimism about a future event." +
        "<br><br>" +
        "(C) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(B) '怀疑'一词意味着不容易被说服；有怀疑或保留。" +
        "<br><br>" +
        "(A) '希望' 意味着对未来事件感到乐观或激发乐观。" +
        "<br><br>" +
        "(C) '热情' 意味着表现出强烈和热切的享受、兴趣或赞同。" +
        "<br><br>" +
        "(D) '冷漠' 意味着没有特别的兴趣或同情；漠不关心。"
    },
    {
        id: 7,
    question: "Her voice took on a __________ tone as she recounted the tragic events of the past.",
    chinese_question: "当她讲述过去的悲惨事件时，她的声音变得 __________。",
    answers: [
        { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
        { option: "B", answer: "flippant", chinese_answer: "轻率的", chinese_romanization: "qīngshuài de" },
        { option: "C", answer: "solemn", chinese_answer: "庄重的", chinese_romanization: "zhuāngzhòng de" },
        { option: "D", answer: "lighthearted", chinese_answer: "无忧无虑的", chinese_romanization: "wúyōuwúlǜ de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'solemn' means formal and dignified." +
        "<br><br>" +
        "(A) 'cheerful' means noticeably happy and optimistic." +
        "<br><br>" +
        "(B) 'flippant' means not showing a serious or respectful attitude." +
        "<br><br>" +
        "(D) 'lighthearted' means cheerful and carefree.",
    chinese_explanation: "(C) '庄重的' 意味着正式和庄严的。" +
        "<br><br>" +
        "(A) '愉快的' 意味着明显感到高兴和乐观的。" +
        "<br><br>" +
        "(B) '轻率的' 意味着不表现出严肃或尊重态度的。" +
        "<br><br>" +
        "(D) '无忧无虑的' 意味着愉快和无忧无虑的。"
    },
    {
        id: 8,
    question: "The __________ experience of losing the match by a single point was hard to forget.",
    chinese_question: "以一分之差输掉比赛的 __________ 经验难以忘怀。",
    answers: [
        { option: "A", answer: "enjoyable", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
        { option: "B", answer: "delightful", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "C", answer: "galling", chinese_answer: "令人恼火", chinese_romanization: "lìng rén nǎohuǒ" },
        { option: "D", answer: "amusing", chinese_answer: "有趣", chinese_romanization: "yǒuqù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'galling' means causing annoyance or resentment." +
        "<br><br>" +
        "(A) 'enjoyable' means giving delight or pleasure." +
        "<br><br>" +
        "(B) 'delightful' means causing delight; charming." +
        "<br><br>" +
        "(D) 'amusing' means causing laughter or providing entertainment.",
    chinese_explanation: "(C) '令人恼火' 意味着引起恼怒或怨恨。" +
        "<br><br>" +
        "(A) '愉快' 意味着带来愉悦或快乐。" +
        "<br><br>" +
        "(B) '高兴' 意味着带来愉悦；迷人。" +
        "<br><br>" +
        "(D) '有趣' 意味着引起笑声或提供娱乐。"
    },
    {
        id: 9,
        question: "His __________ feedback helped improve the quality of the final product significantly.",
        chinese_question: "他的 __________ 反馈显著提高了最终产品的质量。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "insightful", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "C", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎngkě de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'insightful' means having or showing an accurate and deep understanding." +
            "<br><br>" +
            "(A) 'vague' means unclear or uncertain." +
            "<br><br>" +
            "(C) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(B) '深刻的' 意味着具有或表现出准确而深刻的理解。" +
            "<br><br>" +
            "(A) '模糊的' 意味着不清楚或不确定。" +
            "<br><br>" +
            "(C) '模棱两可的' 意味着开放多种解释；没有一个明显的意思。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小。"
    },
    {
        id: 10,
        question: "His __________ explanation left everyone confused, as he spoke too quickly and with too much detail.",
        chinese_question: "他的 __________ 解释让所有人都感到困惑，因为他说得太快且细节过多。",
        answers: [
            { option: "A", answer: "concise", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" },
            { option: "B", answer: "terse", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "C", answer: "voluble", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" },
            { option: "D", answer: "silent", chinese_answer: "沉默的", chinese_romanization: "chénmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'voluble' means speaking or spoken incessantly and fluently." +
            "<br><br>" +
            "(A) 'concise' means giving a lot of information clearly and in a few words." +
            "<br><br>" +
            "(B) 'terse' means sparing in the use of words; abrupt." +
            "<br><br>" +
            "(D) 'silent' means not making or accompanied by any sound.",
        chinese_explanation: "(C) '健谈的' 意味着不停地和流利地说话或被说的。" +
            "<br><br>" +
            "(A) '简明的' 意味着清楚地用很少的话提供大量信息的。" +
            "<br><br>" +
            "(B) '简洁的' 意味着用词简练的；直截了当的。" +
            "<br><br>" +
            "(D) '沉默的' 意味着不发出任何声音的。"
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
