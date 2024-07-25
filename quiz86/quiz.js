// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Living in a big city comes with its own __________, such as high crime rates and heavy traffic.",
        chinese_question: "生活在大城市有其自身的 __________，如高犯罪率和交通拥堵。",
        answers: [
            { option: "A", answer: "benefits", chinese_answer: "好处", chinese_romanization: "hǎochù" },
            { option: "B", answer: "hazards", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
            { option: "C", answer: "perks", chinese_answer: "特权", chinese_romanization: "tèquán" },
            { option: "D", answer: "advantages", chinese_answer: "优势", chinese_romanization: "yōushì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hazards' means dangers or risks." +
                "<br><br>" +
                "(A) 'benefits' means an advantage or profit gained from something." +
                "<br><br>" +
                "(C) 'perks' means special benefits or privileges." +
                "<br><br>" +
                "(D) 'advantages' means conditions or circumstances that put one in a favorable or superior position.",
        chinese_explanation: "(B) '危险' 意味着危险或风险。" +
                "<br><br>" +
                "(A) '好处' 意味着从某事中获得的优势或利益。" +
                "<br><br>" +
                "(C) '特权' 意味着特殊的好处或特权。" +
                "<br><br>" +
                "(D) '优势' 意味着使某人在有利或优越地位的条件或情况。"
    },
    {
        id: 2,
        question: "His political campaign ended in a __________, with almost no votes supporting him.",
        chinese_question: "他的政治竞选以 __________ 告终，几乎没有人投票支持他。",
        answers: [
                { option: "A", answer: "landslide", chinese_answer: "压倒性胜利", chinese_romanization: "yādǎoxìng shènglì" },
                { option: "B", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
                { option: "C", answer: "debacle", chinese_answer: "崩溃", chinese_romanization: "bēngkuì" },
                { option: "D", answer: "accomplishment", chinese_answer: "成就", chinese_romanization: "chéngjiù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'debacle' means a sudden and ignominious failure; a fiasco." +
                "<br><br>" +
                "(A) 'landslide' means an overwhelming majority of votes for one party or candidate in an election." +
                "<br><br>" +
                "(B) 'success' means the accomplishment of an aim or purpose." +
                "<br><br>" +
                "(D) 'accomplishment' means something that has been achieved successfully.",
        chinese_explanation: "(C) '崩溃' 意味着突然的、可耻的失败；一场惨败。" +
                "<br><br>" +
                "(A) '压倒性胜利' 意味着在选举中某党或某候选人的压倒性多数票。" +
                "<br><br>" +
                "(B) '成功' 意味着实现一个目标或目的。" +
                "<br><br>" +
                "(D) '成就' 意味着成功实现的事情。"
    },
    {
        id: 3,
        question: "The success of the pilot program provided the necessary __________ to expand the initiative nationwide.",
        chinese_question: "试点项目的成功提供了必要的 __________，以将该计划扩展到全国范围。",
        answers: [
                { option: "A", answer: "hindrance", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "B", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "C", answer: "impediment", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "D", answer: "impetus", chinese_answer: "动力", chinese_romanization: "dònglì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impetus' means the force or energy with which a body moves, or something that makes a process or activity happen or happen more quickly." +
                "<br><br>" +
                "(A) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone." +
                "<br><br>" +
                "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
                "<br><br>" +
                "(C) 'impediment' means a hindrance or obstruction in doing something.",
        chinese_explanation: "(D) '动力'一词意味着使身体移动的力量或能量，或使过程或活动发生或更快发生的东西。" +
                "<br><br>" +
                "(A) '障碍' 意味着对某事或某人的阻力、延迟或阻碍的东西。" +
                "<br><br>" +
                "(B) '冷漠' 意味着缺乏兴趣、热情或关心。" +
                "<br><br>" +
                "(C) '阻碍' 意味着做某事的障碍或阻碍。"
    },
    {
        id: 4,
        question: "As a __________ in international relations, she is frequently invited to discuss global issues on news channels.",
        chinese_question: "作为国际关系领域的 __________，她经常被邀请到新闻频道讨论全球问题。",
        answers: [
                { option: "A", answer: "student", chinese_answer: "学生", chinese_romanization: "xuéshēng" },
                { option: "B", answer: "pundit", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
                { option: "C", answer: "beginner", chinese_answer: "初学者", chinese_romanization: "chūxué zhě" },
                { option: "D", answer: "layman", chinese_answer: "外行", chinese_romanization: "wàiháng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pundit' means an expert in a particular subject or field who is frequently called upon to give opinions about it to the public." +
                "<br><br>" +
                "(A) 'student' means a person who is studying at a school or college." +
                "<br><br>" +
                "(C) 'beginner' means a person just starting to learn a skill or take part in an activity." +
                "<br><br>" +
                "(D) 'layman' means a non-expert or someone who does not have detailed knowledge about a particular subject.",
        chinese_explanation: "(B) '专家'一词意味着在特定学科或领域的专家，经常被要求向公众提供意见。" +
                "<br><br>" +
                "(A) '学生' 意味着在学校或大学学习的人。" +
                "<br><br>" +
                "(C) '初学者' 意味着刚开始学习一项技能或参加活动的人。" +
                "<br><br>" +
                "(D) '外行' 意味着非专家或对特定学科没有详细知识的人。"
    },
    {
        id: 5,
    question: "The devout worshipper’s __________ at the altar was a visible sign of his deep faith and humility.",
    chinese_question: "虔诚的信徒在祭坛前的 __________ 是他深厚信仰和谦逊的明显标志。",
    answers: [
        { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "B", answer: "arrogance", chinese_answer: "傲慢", chinese_romanization: "àomàn" },
        { option: "C", answer: "genuflection", chinese_answer: "跪拜", chinese_romanization: "guìbài" },
        { option: "D", answer: "defiance", chinese_answer: "反抗", chinese_romanization: "fǎnkàng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'genuflection' means the act of bending the knees in worship or reverence." +
        "<br><br>" +
        "(A) 'hesitation' means the action of pausing before saying or doing something." +
        "<br><br>" +
        "(B) 'arrogance' means having or revealing an exaggerated sense of one's own importance or abilities." +
        "<br><br>" +
        "(D) 'defiance' means open resistance; bold disobedience.",
    chinese_explanation: "(C) '跪拜'一词意味着在崇拜或敬意中弯膝的行为。" +
        "<br><br>" +
        "(A) '犹豫' 意味着在说或做某事之前的暂停动作。" +
        "<br><br>" +
        "(B) '傲慢' 意味着具有或表现出夸大的自我重要性或能力感。" +
        "<br><br>" +
        "(D) '反抗' 意味着公开抵抗；大胆的反抗。"
    },
    {
        id: 6,
    question: "After hours of __________ in the garden under the hot sun, she finally finished planting all the flowers.",
    chinese_question: "在烈日下辛苦 __________ 了几个小时后，她终于完成了所有花卉的种植。",
    answers: [
        { option: "A", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" },
        { option: "B", answer: "moil", chinese_answer: "辛劳", chinese_romanization: "xīnláo" },
        { option: "C", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
        { option: "D", answer: "play", chinese_answer: "玩耍", chinese_romanization: "wánshuǎ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'moil' means to work hard or drudge." +
                "<br><br>" +
                "(A) 'rest' means to take a break or relax." +
                "<br><br>" +
                "(C) 'relax' means to become less tense." +
                "<br><br>" +
                "(D) 'play' means to engage in activity for enjoyment.",
    chinese_explanation: "(B) '辛劳' 一词意味着努力工作或做苦工。" +
                "<br><br>" +
                "(A) '休息' 意味着休息或放松。" +
                "<br><br>" +
                "(C) '放松' 意味着变得不那么紧张。" +
                "<br><br>" +
                "(D) '玩耍' 意味着为了享受而参与活动。"
    },
    {
        id: 7,
        question: "Her __________ to the surprise party was one of genuine happiness.",
        chinese_question: "她对惊喜派对的 __________ 是发自内心的幸福。",
        answers: [
            { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
            { option: "C", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'response' means a reaction to something." +
                "<br><br>" +
                "(A) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(C) 'confusion' means lack of understanding; uncertainty." +
                "<br><br>" +
                "(D) 'ignorance' means lack of knowledge or information.",
        chinese_explanation: "(B) '反应' 意味着对某事的反应。" +
                "<br><br>" +
                "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(C) '困惑' 意味着缺乏理解；不确定性。" +
                "<br><br>" +
                "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 8,
    question: "Her storytelling had the magical ability of __________ a bygone era, making listeners feel like they had traveled back in time.",
    chinese_question: "她的讲故事有一种神奇的 __________ 过去时代的能力，让听众感觉像是穿越回了过去。",
    answers: [
        { option: "A", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "destroying", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
        { option: "C", answer: "evocation", chinese_answer: "唤起", chinese_romanization: "huànqǐ" },
        { option: "D", answer: "hiding", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'evocation' figuratively means the act of bringing or recalling a feeling, memory, or image to the conscious mind." +
        "<br><br>" +
        "(A) 'ignoring' means refusing to take notice of or acknowledge." +
        "<br><br>" +
        "(B) 'destroying' means putting an end to the existence of something by damaging or attacking it." +
        "<br><br>" +
        "(D) 'hiding' means putting or keeping out of sight; concealing.",
    chinese_explanation: "(C) '唤起' 在此语境下意指将一种感觉、记忆或图像带到意识中的行为。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(B) '破坏' 意味着通过损坏或攻击终止某物的存在。" +
        "<br><br>" +
        "(D) '隐藏' 意味着放置或保持在视线之外；隐藏。"​⬤
    },
    {
        id: 9,
        question: "Celebrating her second year of __________ from alcohol, Maria found joy in simple activities like hiking and reading.",
        chinese_question: "庆祝她戒酒第二年，玛丽亚在徒步旅行和阅读等简单活动中找到了乐趣。",
        answers: [
                { option: "A", answer: "intoxication", chinese_answer: "醉酒", chinese_romanization: "zuìjiǔ" },
                { option: "B", answer: "sobriety", chinese_answer: "清醒", chinese_romanization: "qīngxǐng" },
                { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "D", answer: "indulgence", chinese_answer: "放纵", chinese_romanization: "fàngzòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sobriety' means the state of being sober, especially after giving up alcohol or drugs." +
                "<br><br>" +
                "(A) 'intoxication' means the state of being under the influence of alcohol or drugs." +
                "<br><br>" +
                "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
                "<br><br>" +
                "(D) 'indulgence' means allowing oneself to enjoy the pleasure of something.",
        chinese_explanation: "(B) '清醒'一词意味着清醒的状态，特别是在戒酒或戒毒之后。" +
                "<br><br>" +
                "(A) '醉酒' 意味着处于酒精或毒品的影响下的状态。" +
                "<br><br>" +
                "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
                "<br><br>" +
                "(D) '放纵' 意味着让自己享受某事的乐趣。"
    },
    {
        id: 10,
question: "The sudden rainstorm put a __________ on their plans for a picnic in the park.",
chinese_question: "突然的暴雨给他们在公园野餐的计划来了个 __________。",
answers: [
    { option: "A", answer: "kibosh", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
    { option: "B", answer: "boost", chinese_answer: "提振", chinese_romanization: "tízhèn" },
    { option: "C", answer: "permission", chinese_answer: "许可", chinese_romanization: "xǔkě" },
    { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
],
correctAnswer: "A",
explanation: "(A) 'kibosh' means to put an end to; dispose of decisively." +
    "<br><br>" +
    "(B) 'boost' means to help or encourage (something) to increase or improve." +
    "<br><br>" +
    "(C) 'permission' means consent; authorization." +
    "<br><br>" +
    "(D) 'support' means to give assistance to.",
chinese_explanation: "(A) '停止' 意味着结束；果断地处置。" +
    "<br><br>" +
    "(B) '提振' 意味着帮助或鼓励（某事物）增加或改进。" +
    "<br><br>" +
    "(C) '许可' 意味着同意；授权。" +
    "<br><br>" +
    "(D) '支持' 意味着给予帮助。"
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
