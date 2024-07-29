// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "In an attempt to gain sympathy, he __________ a story about his difficult childhood, making up events and details that never happened.",
    chinese_question: "为了赢得同情，他 __________ 了一个关于他艰难童年的故事，编造了从未发生过的事件和细节。",
    answers: [
        { option: "A", answer: "fabricated", chinese_answer: "编造", chinese_romanization: "biānzào" },
        { option: "B", answer: "recounted", chinese_answer: "叙述", chinese_romanization: "xùshù" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praised", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fabricated' means to invent or concoct something, typically with deceitful intent, used figuratively here." +
        "<br><br>" +
        "(B) 'recounted' means to tell someone about something; give an account of an event or experience." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praised' means to express warm approval or admiration.",
    chinese_explanation: "(A) '编造' 意味着发明或编造某物，通常是出于欺骗目的，这里是比喻用法。" +
        "<br><br>" +
        "(B) '叙述' 意味着告诉某人某事；讲述一个事件或经历。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '表扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 2,
    question: "The therapist helped him __________ his feelings about the traumatic event, such as his fear, anger, and sadness, by encouraging him to talk about his experiences and identify the sources of his emotions.",
    chinese_question: "治疗师帮助他 __________ 对创伤事件的感受，例如他的恐惧、愤怒和悲伤，通过鼓励他谈论自己的经历并找出情绪的来源。",
    answers: [
        { option: "A", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" },
        { option: "D", answer: "disentangle", chinese_answer: "理清", chinese_romanization: "lǐqīng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'disentangle' means to free something or someone from an entanglement, used figuratively here." +
        "<br><br>" +
        "(A) 'complicate' means to make something more difficult or complex." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'worsen' means to make something worse.",
    chinese_explanation: "(D) '理清' 意味着将某物或某人从纠缠中解脱出来，这里是比喻用法。" +
        "<br><br>" +
        "(A) '复杂化' 意味着使某事变得更困难或复杂。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '恶化' 意味着使某事变得更糟。"
    },
    {
        id: 3,
        question: "The government implemented new policies to __________ the living conditions of the poor, such as providing affordable housing, healthcare services, and job training programs.",
        chinese_question: "政府实施了新政策以 __________ 贫困人口的生活条件，例如提供可负担的住房、医疗服务和就业培训项目。",
        answers: [
        { option: "A", answer: "ameliorate", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
        { option: "B", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ameliorate' means to make something better or improve." +
            "<br><br>" +
            "(B) 'worsen' means to make or become worse." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '改善' 意味着使某事变得更好或改进。" +
            "<br><br>" +
            "(B) '恶化' 意味着使或变得更糟。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '忽略' 意味着未能适当照顾。"
    },
    {
        id: 4,
    question: "The movie __________ the director's unique vision and creativity, such as his use of vibrant colors, unconventional camera angles, and nonlinear storytelling.",
    chinese_question: "这部电影 __________ 导演独特的视野和创造力，例如他对鲜艳色彩的运用、非传统的拍摄角度和非线性叙事。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "hid", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "contradicted", chinese_answer: "矛盾", chinese_romanization: "máodùn" },
        { option: "D", answer: "reflected", chinese_answer: "反映", chinese_romanization: "fǎnyìng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'reflected' means to show an image of; to demonstrate." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(B) 'hid' means to put or keep out of sight." +
        "<br><br>" +
        "(C) 'contradicted' means to be in conflict with.",
    chinese_explanation: "(D) '反映' 意味着显示图像；展示。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(B) '隐藏' 意味着把或保持在视线之外。" +
        "<br><br>" +
        "(C) '矛盾' 意味着与...冲突。"
    },
    {
        id: 5,
    question: "The organization's outdated policies have begun to __________, becoming rigid rules that hinder progress and innovation.",
    chinese_question: "该组织的过时政策已经开始 __________ ，变成了阻碍进步和创新的僵化规则。",
    answers: [
        { option: "A", answer: "innovate", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
        { option: "B", answer: "ossify", chinese_answer: "僵化", chinese_romanization: "jiānghuà" },
        { option: "C", answer: "evolve", chinese_answer: "进化", chinese_romanization: "jìnhuà" },
        { option: "D", answer: "progress", chinese_answer: "进步", chinese_romanization: "jìnbù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ossify' means to become rigid or inflexible in habits or attitudes." +
        "<br><br>" +
        "(A) 'innovate' means to make changes in something established." +
        "<br><br>" +
        "(C) 'evolve' means to develop gradually." +
        "<br><br>" +
        "(D) 'progress' means to move forward or develop towards a better state.",
    chinese_explanation: "(B) '僵化' 意味着在习惯或态度上变得僵硬或不灵活。" +
        "<br><br>" +
        "(A) '创新' 意味着在某个既定事物上进行变革。" +
        "<br><br>" +
        "(C) '进化' 意味着逐渐发展。" +
        "<br><br>" +
        "(D) '进步' 意味着向前发展或向更好的状态发展。"
    },
    {
        id: 6,
        question: "The manager's habit of __________ employees' efforts by publicly criticizing their minor mistakes, demoralized the entire team.",
        chinese_question: "经理习惯通过公开批评员工的小错误来 __________ 员工的努力，使整个团队士气低落。",
        answers: [
                { option: "A", answer: "denigrating", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
                { option: "B", answer: "celebrating", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "enhancing", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'denigrating' means to criticize unfairly or disparage." +
                "<br><br>" +
                "(B) 'celebrating' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'enhancing' means to improve the quality, value, or extent of.",
        chinese_explanation: "(A) '诋毁' 意味着不公平地批评或贬低。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '增强' 意味着改善某物的质量、价值或程度。"
    },
    {
        id: 7,
        question: "The children began to __________ around the garden in excitement, chasing butterflies and laughing loudly.",
        chinese_question: "孩子们开始在花园里兴奋地追逐蝴蝶并大声笑着 __________ 。",
        answers: [
            { option: "A", answer: "walk", chinese_answer: "走路", chinese_romanization: "zǒulù" },
            { option: "B", answer: "sit", chinese_answer: "坐着", chinese_romanization: "zuòzhe" },
            { option: "C", answer: "caper", chinese_answer: "蹦跳", chinese_romanization: "bèngtiào" },
            { option: "D", answer: "cry", chinese_answer: "哭泣", chinese_romanization: "kūqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'caper' means to skip or dance about in a lively or playful way." +
            "<br><br>" +
            "(A) 'walk' means to move at a regular pace by lifting and setting down each foot in turn." +
            "<br><br>" +
            "(B) 'sit' means to rest with the body's weight supported by the buttocks or thighs." +
            "<br><br>" +
            "(D) 'cry' means to shed tears.",
        chinese_explanation: "(C) '蹦跳' 意味着以活泼或嬉戏的方式跳跃或舞动。" +
            "<br><br>" +
            "(A) '走路' 意味着以规则的步伐移动，通过轮流抬起和放下每只脚。" +
            "<br><br>" +
            "(B) '坐着' 意味着身体的重量由臀部或大腿支撑着休息。" +
            "<br><br>" +
            "(D) '哭泣' 意味着流泪。"
    },
    {
        id: 8,
        question: "She couldn't help but __________ herself for forgetting her friend's birthday, feeling a deep sense of guilt.",
        chinese_question: "她忍不住为忘记了朋友的生日而深感内疚地 __________ 自己。",
        answers: [
        { option: "A", answer: "berate", chinese_answer: "责备", chinese_romanization: "zébèi" },
        { option: "B", answer: "console", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'berate' means to scold or criticize someone angrily." +
            "<br><br>" +
            "(B) 'console' means to comfort someone at a time of grief or disappointment." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'praise' means to express warm approval or admiration of.",
        chinese_explanation: "(A) '责备' 意味着愤怒地责备或批评某人。" +
            "<br><br>" +
            "(B) '安慰' 意味着在悲伤或失望时安慰某人。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 9,
    question: "Despite the tempting offer, she managed to __________ the urge to spend her savings, choosing to save for her future goals instead.",
    chinese_question: "尽管有诱人的提议，她还是设法控制住花掉她的积蓄的冲动，选择为了未来的目标而存钱。",
    answers: [
        { option: "A", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'resist' means to withstand the action or effect of." +
        "<br><br>" +
        "(A) 'accept' means to consent to receive or undertake something offered." +
        "<br><br>" +
        "(B) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(D) '抵抗' 意味着经受住某事的作用或影响。" +
        "<br><br>" +
        "(A) '接受' 意味着同意接受或承担某事。" +
        "<br><br>" +
        "(B) '拥抱' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
    question: "The controversial article __________ heated debates across the nation, sparking discussions on various social media platforms.",
    chinese_question: "这篇有争议的文章在全国范围内引发了激烈的辩论，并在各种社交媒体平台上引发了讨论。",
    answers: [
        { option: "A", answer: "calmed", chinese_answer: "平息", chinese_romanization: "píngxī" },
        { option: "B", answer: "silenced", chinese_answer: "使安静", chinese_romanization: "shǐ ānjìng" },
        { option: "C", answer: "incited", chinese_answer: "煽动", chinese_romanization: "shāndòng" },
        { option: "D", answer: "quelled", chinese_answer: "镇压", chinese_romanization: "zhènyā" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'incited' means encouraged or stirred up (strong feelings or actions)." +
        "<br><br>" +
        "(A) 'calmed' means made tranquil or quiet." +
        "<br><br>" +
        "(B) 'silenced' means caused to be quiet." +
        "<br><br>" +
        "(D) 'quelled' means put an end to (a rebellion or other disorder), typically by the use of force.",
    chinese_explanation: "(C) '煽动' 意味着鼓励或激起（强烈的情感或行动）。" +
        "<br><br>" +
        "(A) '平息' 意味着使平静或安静。" +
        "<br><br>" +
        "(B) '使安静' 意味着使安静。" +
        "<br><br>" +
        "(D) '镇压' 意味着通常通过使用武力来结束（叛乱或其他混乱）。"
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
