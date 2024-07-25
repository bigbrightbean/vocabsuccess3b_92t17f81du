// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The religious leader decided to __________ the controversial author, declaring his works heretical.",
        chinese_question: "宗教领袖决定 __________ 这位有争议的作家，宣称他的作品是异端。",
        answers: [
        { option: "A", answer: "anathematize", chinese_answer: "诅咒", chinese_romanization: "zǔzhòu" },
        { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "forgive", chinese_answer: "原谅", chinese_romanization: "yuánliàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anathematize' means to curse or declare to be evil or anathema." +
            "<br><br>" +
            "(B) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'forgive' means to stop feeling angry or resentful toward someone for an offense, flaw, or mistake.",
        chinese_explanation: "(A) '诅咒' 意味着诅咒或宣布某人为邪恶或应受诅咒。" +
            "<br><br>" +
            "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '原谅' 意味着停止对某人因冒犯、缺陷或错误而感到生气或怨恨。"
    },
    {
        id: 2,
question: "She decided to __________ her unhealthy eating habits for a better lifestyle.",
chinese_question: "她决定 __________ 不健康的饮食习惯，以追求更好的生活方式。",
answers: [
        { option: "A", answer: "forswear", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "adopt", chinese_answer: "采用", chinese_romanization: "cǎiyòng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" }
],
correctAnswer: "A",
explanation: "(A) 'forswear' means to agree to give up or do without something." +
        "<br><br>" +
        "(B) 'adopt' means to take up or start to use or follow." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'enjoy' means to take delight or pleasure in something.",
chinese_explanation: "(A) '放弃' 意味着同意放弃或不做某事。" +
        "<br><br>" +
        "(B) '采用' 意味着开始使用或遵循。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '享受' 意味着对某事感到高兴或愉快。"
    },
    {
        id: 3,
question: "The principal decided to __________ the use of cell phones during school hours to improve focus.",
chinese_question: "校长决定在上课期间 __________ 使用手机，以提高注意力。",
answers: [
        { option: "A", answer: "permit", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
        { option: "B", answer: "interdict", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
        { option: "C", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
],
correctAnswer: "B",
explanation: "(B) 'interdict' used figuratively means to prohibit or forbid something officially." +
        "<br><br>" +
        "(A) 'permit' means to give authorization or consent to do something." +
        "<br><br>" +
        "(C) 'promote' means to advance or raise to a higher position or rank." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
chinese_explanation: "(B) '禁止' 在比喻意义上指官方禁止或禁止某事。" +
        "<br><br>" +
        "(A) '允许' 意味着给予做某事的授权或同意。" +
        "<br><br>" +
        "(C) '促进' 意味着晋升到更高的位置或级别。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
        question: "The tabloid was sued for attempting to __________ the celebrity with false accusations.",
        chinese_question: "这家小报因试图用虚假指控 __________ 这位名人而被起诉。",
        answers: [
                { option: "A", answer: "defame", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
                { option: "B", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'defame' means to damage the good reputation of someone; to slander or libel." +
                "<br><br>" +
                "(B) 'praise' means to express warm approval or admiration." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'support' means to bear all or part of the weight of something; to hold up.",
        chinese_explanation: "(A) '诽谤' 意味着损害某人的好名声；诽谤或中伤。" +
                "<br><br>" +
                "(B) '赞扬' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '支持' 意味着承担某物的全部或部分重量；支撑。"
    },
    {
        id: 5,
        question: "The unexpected road construction will __________ commuters, causing delays and frustration.",
        chinese_question: "意外的道路施工会 __________ 通勤者，导致延误和挫折。",
        answers: [
            { option: "A", answer: "facilitate", chinese_answer: "便利", chinese_romanization: "biànlì" },
            { option: "B", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "C", answer: "aid", chinese_answer: "援助", chinese_romanization: "yuánzhù" },
            { option: "D", answer: "discommode", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'discommode' means to cause inconvenience or trouble to someone." +
            "<br><br>" +
            "(A) 'facilitate' means to make an action or process easy or easier." +
            "<br><br>" +
            "(B) 'assist' means to help someone, typically by doing a share of the work." +
            "<br><br>" +
            "(C) 'aid' means to help or support someone or something.",
        chinese_explanation: "(D) '打扰' 意味着给某人带来不便或麻烦。" +
            "<br><br>" +
            "(A) '便利' 意味着使一个动作或过程变得简单或更简单。" +
            "<br><br>" +
            "(B) '帮助' 意味着帮助某人，通常是分担一些工作。" +
            "<br><br>" +
            "(C) '援助' 意味着帮助或支持某人或某事。"
    },
    {
        id: 6,
        question: "The ancient inscriptions on the stone were gradually __________ by the elements over centuries.",
        chinese_question: "石头上的古代铭文被数百年的风化 __________。",
        answers: [
                { option: "A", answer: "engraved", chinese_answer: "雕刻", chinese_romanization: "diāokè" },
                { option: "B", answer: "effaced", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
                { option: "C", answer: "highlighted", chinese_answer: "突出", chinese_romanization: "tūchū" },
                { option: "D", answer: "preserved", chinese_answer: "保存", chinese_romanization: "bǎocún" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'effaced' means erased or worn away." +
            "<br><br>" +
            "(A) 'engraved' means to cut or carve a text or design on a surface." +
            "<br><br>" +
            "(C) 'highlighted' means emphasized or made prominent." +
            "<br><br>" +
            "(D) 'preserved' means maintained in its original or existing state.",
        chinese_explanation: "(B) '抹去' 意味着被擦除或磨损。" +
            "<br><br>" +
            "(A) '雕刻' 意味着在表面上切割或雕刻文字或设计。" +
            "<br><br>" +
            "(C) '突出' 意味着强调或使显眼。" +
            "<br><br>" +
            "(D) '保存' 意味着维持原始或现有状态。"
    },
    {
        id: 7,
        question: "The motivational speaker __________ the audience to pursue their dreams relentlessly.",
        chinese_question: "激励演讲者 __________ 听众不懈地追求他们的梦想。",
        answers: [
                { option: "A", answer: "discouraged", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "exhorted", chinese_answer: "力劝", chinese_romanization: "lìquàn" },
                { option: "D", answer: "mocked", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exhorted' used figuratively means to strongly encourage or urge someone to think or act in a certain way." +
            "<br><br>" +
            "(A) 'discouraged' means to cause someone to lose confidence or enthusiasm." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'mocked' means to tease or laugh at in a scornful or contemptuous manner.",
        chinese_explanation: "(C) '力劝' 在比喻意义上指强烈鼓励或敦促某人以某种方式思考或行动。" +
            "<br><br>" +
            "(A) '阻止' 意味着使某人失去信心或热情。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '嘲笑' 意味着以轻蔑或蔑视的态度取笑或嘲弄。"
    },
    {
        id: 8,
question: "The monk would __________ himself as a form of penance.",
chinese_question: "这位僧侣会 __________ 自己以示忏悔。",
answers: [
        { option: "A", answer: "flagellate", chinese_answer: "鞭打", chinese_romanization: "biāndǎ" },
        { option: "B", answer: "soothe", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
],
correctAnswer: "A",
explanation: "(A) 'flagellate' means to whip or beat someone, often oneself, as a form of religious discipline or penance." +
        "<br><br>" +
        "(B) 'soothe' means to gently calm someone." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
chinese_explanation: "(A) '鞭打' 意味着以宗教纪律或忏悔为目的，鞭打或击打某人，通常是自己。" +
        "<br><br>" +
        "(B) '安抚' 意味着温柔地安抚某人。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 9,
question: "The sailor began to __________ the sails as the storm approached.",
chinese_question: "风暴临近时，水手开始 __________ 帆。",
answers: [
        { option: "A", answer: "furl", chinese_answer: "收拢", chinese_romanization: "shōulǒng" },
        { option: "B", answer: "raise", chinese_answer: "升起", chinese_romanization: "shēngqǐ" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "lower", chinese_answer: "降下", chinese_romanization: "jiàngxià" }
],
correctAnswer: "A",
explanation: "(A) 'furl' means to roll or fold up neatly and securely." +
        "<br><br>" +
        "(B) 'raise' means to lift or move to a higher position." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'lower' means to move something in a downward direction.",
chinese_explanation: "(A) '收拢' 意味着整齐地卷起或折叠起来。" +
        "<br><br>" +
        "(B) '升起' 意味着提升或移动到更高的位置。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '降下' 意味着向下移动某物。"
    },
    {
        id: 10,
question: "The chef was worried that the addition of too much salt would __________ the flavor of the dish.",
chinese_question: "厨师担心加太多盐会 __________ 这道菜的味道。",
answers: [
    { option: "A", answer: "enhance", chinese_answer: "提升", chinese_romanization: "tíshēng" },
    { option: "B", answer: "sully", chinese_answer: "玷污", chinese_romanization: "diànwū" },
    { option: "C", answer: "perfect", chinese_answer: "完善", chinese_romanization: "wánshàn" },
    { option: "D", answer: "refine", chinese_answer: "改进", chinese_romanization: "gǎijìn" }
],
correctAnswer: "B",
explanation: "(B) 'sully' means to damage the purity or integrity of; defile." +
    "<br><br>" +
    "(A) 'enhance' means to intensify or increase in quality, value, or extent." +
    "<br><br>" +
    "(C) 'perfect' means to make something free from faults." +
    "<br><br>" +
    "(D) 'refine' means to improve something by making small changes.",
chinese_explanation: "(B) '玷污' 意味着损害纯洁性或完整性；玷污。" +
    "<br><br>" +
    "(A) '提升' 意味着加强或增加质量、价值或程度。" +
    "<br><br>" +
    "(C) '完善' 意味着使某物无瑕疵。" +
    "<br><br>" +
    "(D) '改进' 意味着通过做小的改动来改善某物。"
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
