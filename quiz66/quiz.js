// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company is looking for new __________ to expand its market presence, such as online sales and international partnerships.",
        chinese_question: "公司正在寻找新的 __________ 以扩大其市场影响力，例如在线销售和国际合作伙伴关系。",
        answers: [
                { option: "A", answer: "barriers", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "B", answer: "challenges", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
                { option: "C", answer: "difficulties", chinese_answer: "困难", chinese_romanization: "kùnnán" },
                { option: "D", answer: "avenues", chinese_answer: "途径", chinese_romanization: "tújìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'avenues' means ways of approaching a problem or making progress toward something." +
                "<br><br>" +
                "(A) 'barriers' means obstacles that prevent movement or access." +
                "<br><br>" +
                "(B) 'challenges' means tasks or situations that test someone's abilities." +
                "<br><br>" +
                "(C) 'difficulties' means things that are hard to accomplish, deal with, or understand.",
        chinese_explanation: "(D) '途径' 意味着解决问题或取得进展的方法。" +
                "<br><br>" +
                "(A) '障碍' 意味着阻碍或防止移动或进入的事物。" +
                "<br><br>" +
                "(B) '挑战' 意味着测试某人能力的任务或情况。" +
                "<br><br>" +
                "(C) '困难' 意味着难以完成、处理或理解的事情。"
    },
    {
        id: 2,
        question: "After years of heavy drinking, he finally embraced __________ and turned his life around.",
        chinese_question: "经过多年的酗酒，他终于接受了 __________，并扭转了自己的生活。",
        answers: [
                { option: "A", answer: "sobriety", chinese_answer: "清醒", chinese_romanization: "qīngxǐng" },
                { option: "B", answer: "excess", chinese_answer: "过度", chinese_romanization: "guòdù" },
                { option: "C", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
                { option: "D", answer: "indulgence", chinese_answer: "放纵", chinese_romanization: "fàngzòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sobriety' means the state of being sober, not intoxicated, and often implies seriousness or moderation." +
                "<br><br>" +
                "(B) 'excess' means an amount of something that is more than necessary, permitted, or desirable." +
                "<br><br>" +
                "(C) 'recklessness' means lack of regard for the danger or consequences of one's actions; rashness." +
                "<br><br>" +
                "(D) 'indulgence' means the action or fact of allowing oneself to enjoy the pleasure of something.",
        chinese_explanation: "(A) '清醒' 意味着清醒的状态，不醉，通常暗示严肃或节制。" +
                "<br><br>" +
                "(B) '过度' 意味着超出必要、允许或理想的数量。" +
                "<br><br>" +
                "(C) '鲁莽' 意味着不顾自己行为的危险或后果；轻率。" +
                "<br><br>" +
                "(D) '放纵' 意味着让自己享受某种乐趣的行为或事实。"
    },
    {
        id: 3,
question: "His controversial opinions made him a __________ at social gatherings, where people avoided discussing politics around him.",
chinese_question: "他的争议性观点使他在社交聚会上成为 __________，人们避开在他周围讨论政治。",
answers: [
    { option: "A", answer: "friend", chinese_answer: "朋友", chinese_romanization: "péngyǒu" },
    { option: "B", answer: "pariah", chinese_answer: "贱民", chinese_romanization: "jiànmín" },
    { option: "C", answer: "mentor", chinese_answer: "导师", chinese_romanization: "dǎoshī" },
    { option: "D", answer: "favorite", chinese_answer: "宠儿", chinese_romanization: "chǒng'ér" }
],
correctAnswer: "B",
explanation: "(B) 'pariah' means a person who is rejected or ostracized by society or a social group." +
    "<br><br>" +
    "(A) 'friend' means a person with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations." +
    "<br><br>" +
    "(C) 'mentor' means an experienced and trusted adviser." +
    "<br><br>" +
    "(D) 'favorite' means a person or thing that is especially popular or particularly well liked by someone.",
chinese_explanation: "(B) '贱民'一词意味着一个被社会或社会群体拒绝或排斥的人。" +
    "<br><br>" +
    "(A) '朋友' 意味着一个与某人有相互感情联系的人，通常排除性或家庭关系。" +
    "<br><br>" +
    "(C) '导师' 意味着有经验和受信任的顾问。" +
    "<br><br>" +
    "(D) '宠儿' 意味着特别受欢迎或特别受到某人喜爱的人或事物。"
    },
    {
        id: 4,
        question: "The __________ of certain fish species in the lake has led to an increase in their population over the years.",
        chinese_question: "湖中某些鱼类的 __________ 导致了这些年来它们种群数量的增加。",
        answers: [
                { option: "A", answer: "fecundity", chinese_answer: "繁殖力", chinese_romanization: "fánzhílì" },
                { option: "B", answer: "sterility", chinese_answer: "不育", chinese_romanization: "bùyù" },
                { option: "C", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" },
                { option: "D", answer: "depletion", chinese_answer: "消耗", chinese_romanization: "xiāohào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fecundity' means the ability to produce abundant offspring or new growth." +
                "<br><br>" +
                "(B) 'sterility' means the inability to produce offspring." +
                "<br><br>" +
                "(C) 'scarcity' means the state of being scarce or in short supply." +
                "<br><br>" +
                "(D) 'depletion' means the reduction in the number or quantity of something.",
        chinese_explanation: "(A) '繁殖力'一词意味着生产大量后代或新生长的能力。" +
                "<br><br>" +
                "(B) '不育' 意味着不能生育后代。" +
                "<br><br>" +
                "(C) '稀缺' 意味着稀缺或供应不足的状态。" +
                "<br><br>" +
                "(D) '消耗' 意味着数量的减少。"
    },
    {
        id: 5,
        question: "The corrupt officials operated with complete __________, ignoring laws and regulations.",
        chinese_question: "腐败的官员们完全无视法律法规，肆无忌惮地行动。",
        answers: [
                { option: "A", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
                { option: "B", answer: "impunity", chinese_answer: "免罚", chinese_romanization: "miǎnfá" },
                { option: "C", answer: "scrutiny", chinese_answer: "监视", chinese_romanization: "jiānshì" },
                { option: "D", answer: "restraint", chinese_answer: "约束", chinese_romanization: "yuēshù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impunity' means exemption from punishment or freedom from the injurious consequences of an action." +
                "<br><br>" +
                "(A) 'punishment' means the infliction or imposition of a penalty as retribution for an offense." +
                "<br><br>" +
                "(C) 'scrutiny' means critical observation or examination." +
                "<br><br>" +
                "(D) 'restraint' means a measure or condition that keeps someone or something under control.",
        chinese_explanation: "(B) '免罚' 意味着免受惩罚或免于行为带来的伤害性后果。" +
                "<br><br>" +
                "(A) '惩罚' 意味着对罪行施加的处罚。" +
                "<br><br>" +
                "(C) '监视' 意味着批判性的观察或检查。" +
                "<br><br>" +
                "(D) '约束' 意味着使某人或某事保持控制的措施或条件。"
    },
    {
        id: 6,
    question: "The teacher noticed his __________ to question everything and encouraged his curious mind.",
    chinese_question: "老师注意到他对一切都表现出 __________，并鼓励他保持好奇心。",
    answers: [
        { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "B", answer: "inclination", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
        { option: "C", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bùqíngyuàn" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'inclination' means a natural tendency or urge to act or feel in a particular way." +
                "<br><br>" +
                "(A)'hesitation' means the action of pausing before saying or doing something." +
                "<br><br>" +
                "(C)'reluctance' means unwillingness or disinclination to do something." +
                "<br><br>" +
                "(D)'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '倾向'一词意味着自然的倾向或冲动去以某种方式行动或感觉。" +
                "<br><br>" +
                "(A)'犹豫' 意味着在说或做某事之前的暂停动作。" +
                "<br><br>" +
                "(C)'不情愿' 意味着不愿意或不情愿做某事。" +
                "<br><br>" +
                "(D)'冷漠' 意味着缺乏兴趣、关注或同情。"
    },
    {
        id: 7,
        question: "Their __________ to improve relations between the two countries was met with resistance.",
        chinese_question: "他们 __________ 改善两国关系的努力遇到了阻力。",
        answers: [
            { option: "A", answer: "effort", chinese_answer: "努力", chinese_romanization: "nǔlì" },
            { option: "B", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "C", answer: "attempt", chinese_answer: "尝试", chinese_romanization: "chángshì" },
            { option: "D", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'attempt' means an effort to achieve or complete a difficult task or action." +
                "<br><br>" +
                "(A) 'effort' means a vigorous or determined attempt." +
                "<br><br>" +
                "(B) 'retreat' means to withdraw from an enemy force as a result of their superior power or after a defeat." +
                "<br><br>" +
                "(D) 'success' means the accomplishment of an aim or purpose.",
        chinese_explanation: "(C) '尝试' 意味着努力完成一项困难的任务或行动。" +
                "<br><br>" +
                "(A) '努力' 意味着积极或坚定的尝试。" +
                "<br><br>" +
                "(B) '撤退' 意味着在敌方势力强大或战败后撤离。" +
                "<br><br>" +
                "(D) '成功' 意味着实现目标或目的。"
    },
    {
        id: 8,
        question: "The satirical __________ published in the local paper mocked the politician's recent statements.",
        chinese_question: "当地报纸上刊登的讽刺性的 __________ 嘲笑了这位政治家的最近言论。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
                { option: "B", answer: "tribute", chinese_answer: "致敬", chinese_romanization: "zhìjìng" },
                { option: "C", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
                { option: "D", answer: "pasquinade", chinese_answer: "讽刺", chinese_romanization: "fěngcì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pasquinade' means a satire or lampoon, originally one displayed or delivered publicly in a public place." +
                "<br><br>" +
                "(A) 'praise' means the expression of approval or admiration for someone or something." +
                "<br><br>" +
                "(B) 'tribute' means an act, statement, or gift that is intended to show gratitude, respect, or admiration." +
                "<br><br>" +
                "(C) 'admiration' means respect and warm approval.",
        chinese_explanation: "(D) '讽刺' 意味着讽刺或讽刺作品，最初是公开展示或在公共场所发表的。" +
                "<br><br>" +
                "(A) '赞美' 意味着对某人或某物表示认可或钦佩。" +
                "<br><br>" +
                "(B) '致敬' 意味着表示感激、尊敬或钦佩的行为、声明或礼物。" +
                "<br><br>" +
                "(C) '钦佩' 意味着尊重和热情的认可。"
    },
    {
        id: 9,
        question: "The writer's work often reflects the cultural __________ in which he was raised, highlighting the values and norms of his community.",
        chinese_question: "作家的作品常常反映他成长的文化 __________，突出他所在社区的价值观和规范。",
        answers: [
                { option: "A", answer: "deviation", chinese_answer: "偏差", chinese_romanization: "piānchā" },
                { option: "B", answer: "milieu", chinese_answer: "环境", chinese_romanization: "huánjìng" },
                { option: "C", answer: "isolation", chinese_answer: "孤立", chinese_romanization: "gūlì" },
                { option: "D", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'milieu' means a person's social environment." +
                "<br><br>" +
                "(A) 'deviation' means the action of departing from an established course or accepted standard." +
                "<br><br>" +
                "(C) 'isolation' means the process or fact of isolating or being isolated." +
                "<br><br>" +
                "(D) 'conflict' means a serious disagreement or argument, typically a protracted one.",
        chinese_explanation: "(B) '环境'一词意味着一个人的社会环境。" +
                "<br><br>" +
                "(A) '偏差' 意味着偏离既定路线或公认标准的行为。" +
                "<br><br>" +
                "(C) '孤立' 意味着孤立或被孤立的过程或事实。" +
                "<br><br>" +
                "(D) '冲突' 意味着严重的分歧或争论，通常是长期的。"
    },
    {
        id: 10,
        question: "Her thoughts were drowned out by the __________ of worries and fears, making it hard for her to focus on anything positive.",
        chinese_question: "她的思绪被各种忧虑和恐惧的 __________ 淹没，使她难以集中精力于任何积极的事物。",
        answers: [
                { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
                { option: "B", answer: "din", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
                { option: "C", answer: "silence", chinese_answer: "寂静", chinese_romanization: "jìjìng" },
                { option: "D", answer: "tranquility", chinese_answer: "宁静", chinese_romanization: "níngjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'din' means a loud, unpleasant, and prolonged noise; used figuratively to describe a confusing mixture of noises or voices." +
                "<br><br>" +
                "(A) 'calm' means the absence of violent or confrontational activity within a place or group." +
                "<br><br>" +
                "(C) 'silence' means the absence of sound." +
                "<br><br>" +
                "(D) 'tranquility' means the quality or state of being tranquil; calm.",
        chinese_explanation: "(B) '喧闹'一词意味着嘈杂、令人不愉快且持续的噪音；用作比喻来形容嘈杂的混合声音或声音。" +
                "<br><br>" +
                "(A) '平静' 意味着一个地方或团体内部没有暴力或对抗活动。" +
                "<br><br>" +
                "(C) '寂静' 意味着没有声音。" +
                "<br><br>" +
                "(D) '宁静' 意味着宁静的品质或状态；平静。"
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
