// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ with which the emergency team responded to the crisis was commendable.",
        chinese_question: "紧急救援队对危机的反应速度令人称赞。",
        answers: [
                { option: "A", answer: "celerity", chinese_answer: "迅速", chinese_romanization: "xùnsù" },
                { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                { option: "C", answer: "lethargy", chinese_answer: "昏睡", chinese_romanization: "hūnshuì" },
                { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'celerity' figuratively means swiftness of movement or action." +
                "<br><br>" +
                "(B) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
                "<br><br>" +
                "(C) 'lethargy' means a lack of energy and enthusiasm." +
                "<br><br>" +
                "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(A) '迅速' 在此语境下意指快速的动作或行动。" +
                "<br><br>" +
                "(B) '犹豫' 意味着在说或做某事之前的暂停或犹豫。" +
                "<br><br>" +
                "(C) '昏睡' 意味着缺乏精力和热情。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 2,
    question: "The CEO's vision for the company included a comprehensive __________ to modernize its operations and expand its market reach.",
    chinese_question: "首席执行官对公司的愿景包括全面的 __________，以实现运营现代化和扩大市场覆盖范围。",
    answers: [
        { option: "A", answer: "downfall", chinese_answer: "垮台", chinese_romanization: "kuǎtái" },
        { option: "B", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
        { option: "C", answer: "reform", chinese_answer: "改革", chinese_romanization: "gǎigé" },
        { option: "D", answer: "corruption", chinese_answer: "腐败", chinese_romanization: "fǔbài" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'reform' figuratively means a plan or movement for improvement or amendment of what is wrong, corrupt, or unsatisfactory." +
        "<br><br>" +
        "(A) 'downfall' means a loss of power, prosperity, or status." +
        "<br><br>" +
        "(B) 'stagnation' means lack of activity, growth, or development." +
        "<br><br>" +
        "(D) 'corruption' means dishonest or fraudulent conduct by those in power, typically involving bribery.",
    chinese_explanation: "(C) '改革' 在此语境下意指改进或修改错误、腐败或不满意的事物的计划或运动。" +
        "<br><br>" +
        "(A) '垮台' 意味着权力、繁荣或地位的丧失。" +
        "<br><br>" +
        "(B) '停滞' 意味着缺乏活动、增长或发展。" +
        "<br><br>" +
        "(D) '腐败' 意味着那些掌权者的不诚实或欺诈行为，通常涉及贿赂。"
    },
    {
        id: 3,
        question: "The old castle's crumbling walls were a __________ of its former glory.",
        chinese_question: "这座古老城堡破碎的墙壁是其昔日辉煌的 __________。",
        answers: [
                { option: "A", answer: "vestige", chinese_answer: "遗迹", chinese_romanization: "yíjì" },
                { option: "B", answer: "foundation", chinese_answer: "地基", chinese_romanization: "dìjī" },
                { option: "C", answer: "beginning", chinese_answer: "开端", chinese_romanization: "kāiduān" },
                { option: "D", answer: "replacement", chinese_answer: "替代", chinese_romanization: "tìdài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vestige' means a trace or remnant of something that is disappearing or no longer exists." +
                "<br><br>" +
                "(B) 'foundation' means the lowest load-bearing part of a building, typically below ground level." +
                "<br><br>" +
                "(C) 'beginning' means the point in time or space at which something starts." +
                "<br><br>" +
                "(D) 'replacement' means a person or thing that takes the place of another.",
        chinese_explanation: "(A) '遗迹' 意味着某物正在消失或不再存在的痕迹或遗迹。" +
                "<br><br>" +
                "(B) '地基' 意味着建筑物的最低承重部分，通常在地下。" +
                "<br><br>" +
                "(C) '开端' 意味着某事物开始的时间或空间点。" +
                "<br><br>" +
                "(D) '替代' 意味着取代另一事物的人或事物。"
    },
    {
        id: 4,
question: "After the scandal, he became a __________ in his community, with former friends avoiding him.",
chinese_question: "丑闻之后，他在社区中变成了 __________，以前的朋友都避开他。",
answers: [
    { option: "A", answer: "hero", chinese_answer: "英雄", chinese_romanization: "yīngxióng" },
    { option: "B", answer: "pariah", chinese_answer: "贱民", chinese_romanization: "jiànmín" },
    { option: "C", answer: "leader", chinese_answer: "领袖", chinese_romanization: "lǐngxiù" },
    { option: "D", answer: "idol", chinese_answer: "偶像", chinese_romanization: "ǒuxiàng" }
],
correctAnswer: "B",
explanation: "(B) 'pariah' means a person who is rejected or ostracized by society or a social group." +
    "<br><br>" +
    "(A) 'hero' means a person who is admired for their courage, outstanding achievements, or noble qualities." +
    "<br><br>" +
    "(C) 'leader' means the person who leads or commands a group, organization, or country." +
    "<br><br>" +
    "(D) 'idol' means a person or thing that is greatly admired, loved, or revered.",
chinese_explanation: "(B) '贱民'一词意味着一个被社会或社会群体拒绝或排斥的人。" +
    "<br><br>" +
    "(A) '英雄' 意味着因勇气、杰出成就或高贵品质而受到钦佩的人。" +
    "<br><br>" +
    "(C) '领袖' 意味着领导或指挥一个团体、组织或国家的人。" +
    "<br><br>" +
    "(D) '偶像' 意味着受到极大钦佩、爱戴或崇敬的人或事物。"
    },
    {
        id: 5,
        question: "Her career reached its __________ when she won the prestigious award.",
        chinese_question: "当她赢得那个著名奖项时，她的事业达到了 __________。",
        answers: [
            { option: "A", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "B", answer: "beginning", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
            { option: "C", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "D", answer: "plateau", chinese_answer: "平稳期", chinese_romanization: "píngwěn qī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'peak' means the highest point of achievement." +
                "<br><br>" +
                "(B) 'beginning' means the point in time or space at which something starts." +
                "<br><br>" +
                "(C) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
                "<br><br>" +
                "(D) 'plateau' means a state of little or no change following a period of activity or progress.",
        chinese_explanation: "(A) '顶峰' 意味着最高的成就点。" +
                "<br><br>" +
                "(B) '开始' 意味着某事开始的时间点或空间点。" +
                "<br><br>" +
                "(C) '下降' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
                "<br><br>" +
                "(D) '平稳期' 意味着在一段时间的活动或进展之后的几乎没有变化的状态。"
    },
    {
        id: 6,
    question: "She took __________ at his comment, feeling that he was being unfairly critical.",
    chinese_question: "她对他的评论感到 __________，觉得他在不公平地批评她。",
    answers: [
        { option: "A", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "B", answer: "indifference", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
        { option: "C", answer: "umbrage", chinese_answer: "生气", chinese_romanization: "shēngqì" },
        { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'umbrage' means offense or annoyance." +
        "<br><br>" +
        "(A) 'delight' means great pleasure." +
        "<br><br>" +
        "(B) 'indifference' means lack of interest, concern, or sympathy." +
        "<br><br>" +
        "(D) 'amusement' means the state or experience of finding something funny.",
    chinese_explanation: "(C) '生气' 意味着冒犯或恼怒。" +
        "<br><br>" +
        "(A) '高兴' 意味着极大的快乐。" +
        "<br><br>" +
        "(B) '无动于衷' 意味着缺乏兴趣、关心或同情。" +
        "<br><br>" +
        "(D) '娱乐' 意味着发现某事有趣的状态或经历。"
    },
    {
        id: 7,
                question: "The CEO is often considered the __________ of the company, guiding its vision and direction.",
                chinese_question: "首席执行官通常被认为是公司的 __________，引导其愿景和方向。",
                answers: [
                    { option: "A", answer: "linchpin", chinese_answer: "关键人物", chinese_romanization: "guānjiàn rénwù" },
                    { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
                    { option: "C", answer: "critic", chinese_answer: "批评者", chinese_romanization: "pīpíng zhě" },
                    { option: "D", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" }
                ],
                correctAnswer: "A",
                explanation: "(A) 'linchpin' means a person or thing vital to an enterprise or organization." +
                    "<br><br>" +
                    "(B) 'novice' means a person new to or inexperienced in a field or situation." +
                    "<br><br>" +
                    "(C) 'critic' means a person who expresses an unfavorable opinion of something." +
                    "<br><br>" +
                    "(D) 'spectator' means a person who watches at a show, game, or other event.",
                chinese_explanation: "(A) '关键人物' 意味着对企业或组织至关重要的人或事物。" +
                    "<br><br>" +
                    "(B) '新手' 意味着在某一领域或情况下的新手或缺乏经验的人。" +
                    "<br><br>" +
                    "(C) '批评者' 意味着对某事表达不赞成意见的人。" +
                    "<br><br>" +
                    "(D) '观众' 意味着观看表演、比赛或其他活动的人。"
    },
    {
        id: 8,
        question: "The office was in __________ when the system crashed and no one could access their files.",
        chinese_question: "当系统崩溃，没人能访问文件时，办公室一片 __________。",
        answers: [
            { option: "A", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "pandemonium", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pandemonium' means wild and noisy disorder or confusion; uproar." +
                "<br><br>" +
                "(A) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
                "<br><br>" +
                "(B) 'harmony' means agreement or concord." +
                "<br><br>" +
                "(D) 'calm' means the absence of violent or confrontational activity.",
        chinese_explanation: "(C) '混乱' 意味着狂野和嘈杂的混乱或骚动。" +
                "<br><br>" +
                "(A) '秩序' 意味着按照特定顺序、模式或方法排列人或物。" +
                "<br><br>" +
                "(B) '和谐' 意味着一致或和睦。" +
                "<br><br>" +
                "(D) '平静' 意味着没有暴力或对抗活动。"
    },
    {
        id: 9,
        question: "The picnic basket was filled with delicious __________, including sandwiches, fruits, and desserts.",
        chinese_question: "野餐篮里装满了美味的 __________，包括三明治、水果和甜点。",
        answers: [
                { option: "A", answer: "utensils", chinese_answer: "餐具", chinese_romanization: "cānjù" },
                { option: "B", answer: "victuals", chinese_answer: "食物", chinese_romanization: "shíwù" },
                { option: "C", answer: "decorations", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
                { option: "D", answer: "toys", chinese_answer: "玩具", chinese_romanization: "wánjù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'victuals' means food or provisions." +
                "<br><br>" +
                "(A) 'utensils' means tools or implements, especially for eating or cooking." +
                "<br><br>" +
                "(C) 'decorations' means items used to adorn something." +
                "<br><br>" +
                "(D) 'toys' means objects for children to play with.",
        chinese_explanation: "(B) '食物'一词意味着食物或粮食。" +
                "<br><br>" +
                "(A) '餐具' 意味着工具或器具，尤其是用于饮食或烹饪的。" +
                "<br><br>" +
                "(C) '装饰' 意味着用于装饰某物的物品。" +
                "<br><br>" +
                "(D) '玩具' 意味着供儿童玩耍的物品。"
    },
    {
        id: 10,
        question: "Her friend's __________ about how great the new restaurant was convinced her to give it a try.",
        chinese_question: "她朋友关于这家新餐厅有多棒的 __________ 让她决定去尝试一下。",
        answers: [
                { option: "A", answer: "blandishments", chinese_answer: "奉承话", chinese_romanization: "fèngchēng huà" },
                { option: "B", answer: "warnings", chinese_answer: "警告", chinese_romanization: "jǐnggào" },
                { option: "C", answer: "demands", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
                { option: "D", answer: "threats", chinese_answer: "威胁", chinese_romanization: "wēixié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blandishments' figuratively means flattering or pleasing statements or actions used to persuade someone gently to do something." +
                "<br><br>" +
                "(B) 'warnings' means statements or events that indicate a possible or impending danger, problem, or other unpleasant situation." +
                "<br><br>" +
                "(C) 'demands' means insistent requests made as if by right." +
                "<br><br>" +
                "(D) 'threats' means statements of an intention to inflict pain, injury, damage, or other hostile action.",
        chinese_explanation: "(A) '奉承话' 在此语境下意指用来温和地劝说某人的恭维或令人愉快的陈述或行动。" +
                "<br><br>" +
                "(B) '警告' 意味着表明可能或即将发生的危险、问题或其他不愉快情况的言论或事件。" +
                "<br><br>" +
                "(C) '要求' 意味着坚持的请求，仿佛是权利。" +
                "<br><br>" +
                "(D) '威胁' 意味着表明要造成痛苦、伤害、损害或其他敌对行为的言论。"
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
