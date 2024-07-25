// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ of the rabbit population in the area was remarkable, with numerous litters born each season.",
        chinese_question: "该地区兔子种群的 __________ 显著，每个季节都有大量的幼兔出生。",
        answers: [
                { option: "A", answer: "fecundity", chinese_answer: "繁殖力", chinese_romanization: "fánzhílì" },
                { option: "B", answer: "sterility", chinese_answer: "不育", chinese_romanization: "bùyù" },
                { option: "C", answer: "barrenness", chinese_answer: "贫瘠", chinese_romanization: "pínjí" },
                { option: "D", answer: "lethargy", chinese_answer: "昏睡", chinese_romanization: "hūnshuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fecundity' means the ability to produce abundant offspring or new growth." +
                "<br><br>" +
                "(B) 'sterility' means the inability to produce offspring." +
                "<br><br>" +
                "(C) 'barrenness' means the state of being unproductive or unable to produce." +
                "<br><br>" +
                "(D) 'lethargy' means a lack of energy and enthusiasm.",
        chinese_explanation: "(A) '繁殖力'一词意味着生产大量后代或新生长的能力。" +
                "<br><br>" +
                "(B) '不育' 意味着不能生育后代。" +
                "<br><br>" +
                "(C) '贫瘠' 意味着不生产或不能生产的状态。" +
                "<br><br>" +
                "(D) '昏睡' 意味着缺乏精力和热情。"
    },
    {
        id: 2,
        question: "She found great __________ in helping others and making a difference in their lives.",
        chinese_question: "她在帮助他人和改变他们的生活中找到了巨大的 __________。",
        answers: [
            { option: "A", answer: "gratification", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "B", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "sadness", chinese_answer: "悲伤", chinese_romanization: "bēishāng" },
            { option: "D", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gratification' means pleasure, especially when gained from the satisfaction of a desire." +
                "<br><br>" +
                "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
                "<br><br>" +
                "(C) 'sadness' means the condition or quality of being sad." +
                "<br><br>" +
                "(D) 'anxiety' means a feeling of worry, nervousness, or unease.",
        chinese_explanation: "(A) '满足' 意味着快乐，尤其是从实现愿望中获得的快乐。" +
                "<br><br>" +
                "(B) '冷漠' 意味着缺乏兴趣、热情或关心。" +
                "<br><br>" +
                "(C) '悲伤' 意味着悲伤的状态或性质。" +
                "<br><br>" +
                "(D) '焦虑' 意味着一种担忧、紧张或不安的感觉。"
    },
    {
        id: 3,
        question: "Her success was living __________ that hard work and determination pay off.",
        chinese_question: "她的成功是活生生的 __________，证明了努力和决心会得到回报。",
        answers: [
            { option: "A", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "B", answer: "proof", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
            { option: "C", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
            { option: "D", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'proof' means something that demonstrates the truth or existence of something." +
                "<br><br>" +
                "(A) 'guess' means an estimate or conjecture without sufficient information." +
                "<br><br>" +
                "(C) 'theory' means a supposition or a system of ideas intended to explain something." +
                "<br><br>" +
                "(D) 'assumption' means a thing that is accepted as true or as certain to happen, without proof.",
        chinese_explanation: "(B) '证据' 意味着证明某事真实性或存在的事物。" +
                "<br><br>" +
                "(A) '猜测' 意味着在信息不足的情况下进行估计或推测。" +
                "<br><br>" +
                "(C) '理论' 意味着试图解释某事的假设或一套想法。" +
                "<br><br>" +
                "(D) '假设' 意味着在没有证据的情况下被接受为真实或确定会发生的事物。"
    },
    {
        id: 4,
    question: "His unwavering __________ in all his dealings made him a highly respected figure in the community.",
    chinese_question: "他在所有事务中的坚定 __________ 使他成为社区中备受尊敬的人物。",
    answers: [
        { option: "A", answer: "cunning", chinese_answer: "狡猾", chinese_romanization: "jiǎohuá" },
        { option: "B", answer: "deception", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "C", answer: "dishonesty", chinese_answer: "不诚实", chinese_romanization: "bùchéngshí" },
        { option: "D", answer: "rectitude", chinese_answer: "正直", chinese_romanization: "zhèngzhí" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'rectitude' means morally correct behavior or thinking; righteousness." +
            "<br><br>" +
            "(A) 'cunning' means having or showing skill in achieving one's ends by deceit or evasion." +
            "<br><br>" +
            "(B) 'deception' means the action of deceiving someone." +
            "<br><br>" +
            "(C) 'dishonesty' means deceitfulness or fraudulence.",
    chinese_explanation: "(D) '正直'一词意味着道德上正确的行为或思想；正义。" +
            "<br><br>" +
            "(A) '狡猾' 意味着通过欺骗或逃避来实现自己目的的技巧或表现。" +
            "<br><br>" +
            "(B) '欺骗' 意味着欺骗某人的行为。" +
            "<br><br>" +
            "(C) '不诚实' 意味着欺骗或欺诈行为。"
    },
    {
        id: 5,
    question: "The unexpected joke during the serious meeting caused an uncontrollable __________ among the participants.",
    chinese_question: "在严肃的会议期间，突然的笑话引起了与会者们难以控制的 __________。",
    answers: [
        { option: "A", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
        { option: "B", answer: "guffaw", chinese_answer: "哄笑", chinese_romanization: "hōngxiào" },
        { option: "C", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "D", answer: "sob", chinese_answer: "抽泣", chinese_romanization: "chōuqì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'guffaw' used figuratively means a loud and boisterous laugh." +
                "<br><br>" +
                "(A) 'cheer' means a shout of encouragement, praise, or joy." +
                "<br><br>" +
                "(C) 'whisper' means to speak very softly using one's breath without one's vocal cords." +
                "<br><br>" +
                "(D) 'sob' means to cry noisily, making loud, convulsive gasps.",
    chinese_explanation: "(B) '哄笑' 在比喻意义上指响亮而欢闹的笑声。" +
                "<br><br>" +
                "(A) '欢呼' 意味着表示鼓励、赞扬或喜悦的喊叫。" +
                "<br><br>" +
                "(C) '低语' 意味着用气音非常轻声地说话。" +
                "<br><br>" +
                "(D) '抽泣' 意味着大声抽泣，发出阵阵抽气声。"
    },
    {
        id: 6,
        question: "The __________ of decorations at the party made the small room feel overly crowded.",
        chinese_question: "派对上的 __________ 装饰让小房间显得过于拥挤。",
        answers: [
                { option: "A", answer: "scarcity", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "B", answer: "nimiety", chinese_answer: "过多", chinese_romanization: "guòduō" },
                { option: "C", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
                { option: "D", answer: "minimalism", chinese_answer: "极简主义", chinese_romanization: "jíjiǎn zhǔyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nimiety' means excess or overabundance." +
                "<br><br>" +
                "(A) 'scarcity' means the state of being scarce or in short supply." +
                "<br><br>" +
                "(C) 'simplicity' means the quality or condition of being easy to understand or do." +
                "<br><br>" +
                "(D) 'minimalism' means a style or technique characterized by extreme spareness and simplicity.",
        chinese_explanation: "(B) '过多' 意味着过多或过剩。" +
                "<br><br>" +
                "(A) '缺乏' 意味着稀缺或供应不足的状态。" +
                "<br><br>" +
                "(C) '简单' 意味着易于理解或做的质量或条件。" +
                "<br><br>" +
                "(D) '极简主义' 意味着一种以极度简洁和简单为特点的风格或技巧。"
    },
    {
        id: 7,
        question: "The novel’s portrayal of the character’s struggle with illness was full of __________, making readers empathize with his suffering.",
        chinese_question: "这部小说对角色与疾病斗争的描写充满了 __________，使读者对他的痛苦感同身受。",
        answers: [
                { option: "A", answer: "pathos", chinese_answer: "悲情", chinese_romanization: "bēiqíng" },
                { option: "B", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
                { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "D", answer: "humor", chinese_answer: "幽默", chinese_romanization: "yōumò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pathos' means a quality that evokes pity or sadness." +
                "<br><br>" +
                "(B) 'joy' means a feeling of great pleasure and happiness." +
                "<br><br>" +
                "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
                "<br><br>" +
                "(D) 'humor' means the quality of being amusing or comic.",
        chinese_explanation: "(A) '悲情'一词意味着引发怜悯或悲伤的品质。" +
                "<br><br>" +
                "(B) '快乐' 意味着极大的愉悦和幸福感。" +
                "<br><br>" +
                "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
                "<br><br>" +
                "(D) '幽默' 意味着令人发笑或滑稽的品质。"
    },
    {
        id: 8,
        question: "The company’s success was built on the __________ of strong leadership and a commitment to quality.",
        chinese_question: "公司的成功建立在强大领导力和对质量承诺的 __________ 之上。",
        answers: [
                { option: "A", answer: "foundation", chinese_answer: "基础", chinese_romanization: "jīchǔ" },
                { option: "B", answer: "edifice", chinese_answer: "大厦", chinese_romanization: "dàshà" },
                { option: "C", answer: "debris", chinese_answer: "碎片", chinese_romanization: "suìpiàn" },
                { option: "D", answer: "surface", chinese_answer: "表面", chinese_romanization: "biǎomiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edifice' means a complex system of beliefs or an imposing structure, used figuratively to describe something built up or established." +
                "<br><br>" +
                "(A) 'foundation' means the lowest load-bearing part of a building, typically below ground level." +
                "<br><br>" +
                "(C) 'debris' means scattered pieces of waste or remains." +
                "<br><br>" +
                "(D) 'surface' means the outside part or uppermost layer of something.",
        chinese_explanation: "(B) '大厦'一词用于比喻，描述建立或确立的复杂信仰体系或宏伟结构。" +
                "<br><br>" +
                "(A) '基础' 意味着建筑物的最低承重部分，通常在地面以下。" +
                "<br><br>" +
                "(C) '碎片' 意味着废物或残骸的散落部分。" +
                "<br><br>" +
                "(D) '表面' 意味着某物的外部部分或最上层。"
    },
    {
        id: 9,
        question: "The pioneers endured many __________ as they traveled across the frontier in search of a better life.",
        chinese_question: "先驱者们在穿越边境寻找更好生活的过程中忍受了许多 __________。",
        answers: [
            { option: "A", answer: "celebrations", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "privileges", chinese_answer: "特权", chinese_romanization: "tèquán" },
            { option: "C", answer: "pleasures", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "D", answer: "hardships", chinese_answer: "困苦", chinese_romanization: "kùnkǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hardships' means severe suffering or privation." +
            "<br><br>" +
            "(A) 'celebrations' means the action of celebrating an important day or event." +
            "<br><br>" +
            "(B) 'privileges' means special rights, advantages, or immunities granted or available only to a particular person or group." +
            "<br><br>" +
            "(C) 'pleasures' means feelings of happy satisfaction and enjoyment.",
        chinese_explanation: "(D) '困苦' 意味着严重的痛苦或贫困。" +
            "<br><br>" +
            "(A) '庆祝' 意味着庆祝重要日子或事件的行动。" +
            "<br><br>" +
            "(B) '特权' 意味着仅特定人或群体享有的特殊权利、优势或豁免。" +
            "<br><br>" +
            "(C) '快乐' 意味着快乐满意和享受的感觉。"
    },
    {
        id: 10,
    question: "The ambiguous message from the leader led to __________ among the members of the group.",
    chinese_question: "领导者模棱两可的信息在团队成员中引起了 __________ 。",
    answers: [
        { option: "A", answer: "disquiet", chinese_answer: "不安", chinese_romanization: "bùān" },
        { option: "B", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" },
        { option: "C", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
        { option: "D", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'disquiet' means a feeling of anxiety or worry." +
                "<br><br>" +
                "(B) 'satisfaction' means fulfillment of one's wishes, expectations, or needs." +
                "<br><br>" +
                "(C) 'confidence' means the feeling or belief that one can rely on someone or something." +
                "<br><br>" +
                "(D) 'trust' means firm belief in the reliability, truth, or ability of someone or something.",
    chinese_explanation: "(A) '不安' 意味着焦虑或担忧的感觉。" +
                "<br><br>" +
                "(B) '满意' 意味着实现一个人的愿望、期望或需要。" +
                "<br><br>" +
                "(C) '信心' 意味着对某人或某物的依赖感或信念。" +
                "<br><br>" +
                "(D) '信任' 意味着对某人或某物的可靠性、真实性或能力的坚定信念。"
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
