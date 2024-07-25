// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her views on social issues were very __________, reflecting current trends and values.",
        chinese_question: "她对社会问题的看法非常__________，反映了当前的趋势和价值观。",
        answers: [
            { option: "A", answer: "ancient", chinese_answer: "古代的", chinese_romanization: "gǔdài de" },
            { option: "B", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" },
            { option: "D", answer: "historic", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'contemporary' means belonging to or occurring in the present. Figuratively, it can mean modern and in line with current thinking." + 
            "<br><br>" +
            "(A) 'ancient' means belonging to the very distant past and no longer in existence." +
            "<br><br>" +
            "(B) 'outdated' means no longer produced or used; out of date." +
            "<br><br>" +
            "(D) 'historic' means famous or important in history, or potentially so.",
        chinese_explanation: "(C) '当代的'一词意味着属于或发生在当下的。比喻地，它可以表示现代的并与当前思潮一致的。" + 
            "<br><br>" +
            "(A) '古代的' 意味着属于非常遥远的过去且不再存在的。" +
            "<br><br>" +
            "(B) '过时的' 意味着不再生产或使用的；过时的。" +
            "<br><br>" +
            "(D) '历史的' 意味着在历史上著名或重要的，或可能如此的。"
    },
    {
        id: 2,
        question: "The company's strong financial performance provided a __________ cushion against economic downturns.",
        chinese_question: "公司的强劲财务表现提供了一个应对经济衰退的 __________ 缓冲。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱的", chinese_romanization: "ruò de" },
            { option: "B", answer: "soft", chinese_answer: "柔软的", chinese_romanization: "róuruǎn de" },
            { option: "C", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'safe' means providing protection and security." +
            "<br><br>" +
            "(A) 'weak' means lacking strength or power." +
            "<br><br>" +
            "(B) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch." +
            "<br><br>" +
            "(D) 'fragile' means easily broken or damaged.",
        chinese_explanation: "(C) '安全的' 意味着提供保护和安全。" +
            "<br><br>" +
            "(A) '弱的' 意味着缺乏力量或权力。" +
            "<br><br>" +
            "(B) '柔软的' 意味着容易成型、切割、压缩或折叠；不硬或不坚固的触感。" +
            "<br><br>" +
            "(D) '脆弱的' 意味着容易破碎或损坏。"
    },
    {
        id: 3,
        question: "The company's __________ strategy, with its unexpected market moves, often caught competitors off guard.",
        chinese_question: "公司的 __________ 策略，通过意想不到的市场动作，经常让竞争对手措手不及。",
        answers: [
            { option: "A", answer: "syncopated", chinese_answer: "切分的", chinese_romanization: "qiēfēn de" },
            { option: "B", answer: "conventional", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "C", answer: "routine", chinese_answer: "例行的", chinese_romanization: "lìxíng de" },
            { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'syncopated' means characterized by displaced beats or accents in music, creating unexpected rhythms, often used figuratively to describe strategies with surprising and dynamic elements." +
            "<br><br>" +
            "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(C) 'routine' means performed as part of a regular procedure rather than for a special reason." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted; expected.",
        chinese_explanation: "(A) '切分的' 意味着音乐中的节拍或重音被移位，创造出意外的节奏，通常用作比喻来描述具有惊人和动态元素的策略。" +
            "<br><br>" +
            "(B) '常规的' 意味着基于或按照通常所做或相信的。" +
            "<br><br>" +
            "(C) '例行的' 意味着作为常规程序的一部分而不是为了特殊原因进行的。" +
            "<br><br>" +
            "(D) '可预测的' 意味着能够被预测的；预期的."
    },
    {
        id: 4,
        question: "Her __________ wit made conversations with her always lively and entertaining.",
        chinese_question: "她 __________ 的机智让与她的对话总是充满活力和趣味。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
            { option: "B", answer: "zippy", chinese_answer: "机敏的", chinese_romanization: "jīmǐn de" },
            { option: "C", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zippy' means bright, fresh, or lively; energetic and fast-moving." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(D) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest.",
        chinese_explanation: "(B) '机敏的' 意味着明亮、新鲜或活泼；精力充沛且快速移动的。" +
            "<br><br>" +
            "(A) '沉闷的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(D) '单调的' 意味着沉闷、乏味和重复；缺乏变化和兴趣。"    },
    {
        id: 5,
        question: "Good communication skills are __________ to effective teamwork, ensuring that everyone is on the same page.",
        chinese_question: "良好的沟通技巧对有效的团队合作是 __________ 的，确保每个人都在同一个频道上。",
        answers: [
            { option: "A", answer: "integral", chinese_answer: "必不可少的", chinese_romanization: "bì bùkě shǎo de" },
            { option: "B", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "C", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'integral' means necessary to make a whole complete; essential or fundamental." + 
            "<br><br>" +
            "(B) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(C) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(A) '必不可少的' 意味着使整体完整所必需的；基本的。" + 
            "<br><br>" +
            "(B) '无关的' 意味着与某事不相关的。" +
            "<br><br>" +
            "(C) '可选的' 意味着可供选择但不是强制的。" +
            "<br><br>" +
            "(D) '次要的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 6,
question: "The __________ pace of the meeting ensured that all agenda items were covered efficiently.",
chinese_question: "会议 __________ 的节奏确保所有议程项目都得到高效处理。",
answers: [
    { option: "A", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
    { option: "B", answer: "unhurried", chinese_answer: "不急的", chinese_romanization: "bù jí de" },
    { option: "C", answer: "brisk", chinese_answer: "轻快的", chinese_romanization: "qīngkuài de" },
    { option: "D", answer: "prolonged", chinese_answer: "延长的", chinese_romanization: "yáncháng de" }
],
correctAnswer: "C",
explanation: "(C) 'brisk' means quick and energetic." + 
    "<br><br>" +
    "(A) 'sluggish' means slow-moving or inactive." +
    "<br><br>" +
    "(B) 'unhurried' means not rushed." +
    "<br><br>" +
    "(D) 'prolonged' means continuing for a long time or longer than usual.",
chinese_explanation: "(C) '轻快' 意味着快速和充满活力的。" + 
    "<br><br>" +
    "(A) '迟缓' 意味着行动迟缓或不活跃。" +
    "<br><br>" +
    "(B) '不急' 意味着不仓促。" +
    "<br><br>" +
    "(D) '延长' 意味着持续很长时间或比平时更长。"
    },
    {
        id: 7,
    question: "Her __________ belief in the goodness of all people often led her to be taken advantage of.",
    chinese_question: "她对所有人善良的 __________ 信念常常使她被利用。",
    answers: [
        { option: "A", answer: "cynical", chinese_answer: "愤世嫉俗的", chinese_romanization: "fènshì jísú de" },
        { option: "B", answer: "quixotic", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
        { option: "C", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
        { option: "D", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'quixotic' means exceedingly idealistic; unrealistic and impractical." +
        "<br><br>" +
        "(A) 'cynical' means believing that people are motivated purely by self-interest; distrustful of human sincerity or integrity." +
        "<br><br>" +
        "(C) 'skeptical' means not easily convinced; having doubts or reservations." +
        "<br><br>" +
        "(D) 'practical' means of or concerned with the actual doing or use of something rather than with theory and ideas.",
    chinese_explanation: "(B) '不切实际的' 意味着极度理想主义的；不现实和不切实际的。" +
        "<br><br>" +
        "(A) '愤世嫉俗的' 意味着认为人们纯粹出于自利动机；对人类真诚或正直的不信任。" +
        "<br><br>" +
        "(C) '怀疑的' 意味着不容易相信的；有疑问或保留意见的。" +
        "<br><br>" +
        "(D) '实际的' 意味着与实际操作或使用某物而不是与理论和想法有关的。"
    },
    {
        id: 8,
        question: "The __________ decision about the new policy will be made by the board of directors.",
        chinese_question: "关于新政策的 __________ 决定将由董事会做出。",
        answers: [
            { option: "A", answer: "preliminary", chinese_answer: "初步的", chinese_romanization: "chūbù de" },
            { option: "B", answer: "intermediate", chinese_answer: "中间的", chinese_romanization: "zhōngjiān de" },
            { option: "C", answer: "ultimate", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
            { option: "D", answer: "ongoing", chinese_answer: "正在进行的", chinese_romanization: "zhèngzài jìnxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ultimate' means being or happening at the end of a process; final." +
            "<br><br>" +
            "(A) 'preliminary' means denoting an action or event preceding or done in preparation for something fuller or more important." +
            "<br><br>" +
            "(B) 'intermediate' means coming between two things in time, place, order, character, etc." +
            "<br><br>" +
            "(D) 'ongoing' means continuing; still in progress.",
        chinese_explanation: "(C) '最终的' 意味着发生在过程结束时的；最终的。" +
            "<br><br>" +
            "(A) '初步的' 意味着表示先于或为更全面或更重要的事物做准备的行动或事件。" +
            "<br><br>" +
            "(B) '中间的' 意味着在时间、地点、顺序、特征等方面介于两者之间的。" +
            "<br><br>" +
            "(D) '正在进行的' 意味着继续的；仍在进行中的."
    },
    {
        id: 9,
        question: "Their __________ relationship ended quickly as it was based only on physical attraction.",
        chinese_question: "他们的 __________ 关系很快结束了，因为它只是基于身体吸引力。",
        answers: [
            { option: "A", answer: "deep", chinese_answer: "深的", chinese_romanization: "shēn de" },
            { option: "B", answer: "meaningful", chinese_answer: "有意义的", chinese_romanization: "yǒu yìyì de" },
            { option: "C", answer: "complex", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "D", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'shallow' means not exhibiting, requiring, or capable of serious thought." +
            "<br><br>" +
            "(A) 'deep' means extending far down from the top or surface; profound." +
            "<br><br>" +
            "(B) 'meaningful' means having a serious, important, or useful quality or purpose." +
            "<br><br>" +
            "(C) 'complex' means consisting of many different and connected parts.",
        chinese_explanation: "(D) '浅薄的' 意味着没有表现出、要求或能够进行认真思考。" +
            "<br><br>" +
            "(A) '深的' 意味着从顶部或表面向下延伸很远；深刻的。" +
            "<br><br>" +
            "(B) '有意义的' 意味着具有严肃、重要或有用的质量或目的。" +
            "<br><br>" +
            "(C) '复杂的' 意味着由许多不同的和相连的部分组成的。"
    },
    {
        id: 10,
        question: "His __________ questioning made the witness feel increasingly uncomfortable.",
        chinese_question: "他 __________ 的质问让证人感到越来越不舒服。",
        answers: [
            { option: "A", answer: "brief", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
            { option: "B", answer: "importunate", chinese_answer: "纠缠不休的", chinese_romanization: "jiūchán bùxiū de" },
            { option: "C", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'importunate' used figuratively means persistently demanding or annoying." +
            "<br><br>" +
            "(A) 'brief' means of short duration." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'vague' means not clearly or explicitly stated or expressed.",
        chinese_explanation: "(B) '纠缠不休的' 在比喻意义上指坚持不断地要求或令人恼火。" +
            "<br><br>" +
            "(A) '简短的' 意味着时间短。" +
            "<br><br>" +
            "(C) '随意的' 意味着放松且不担心。" +
            "<br><br>" +
            "(D) '模糊的' 意味着没有明确或清晰地表达。"
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
