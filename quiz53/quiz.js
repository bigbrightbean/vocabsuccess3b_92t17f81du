// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her sudden silence was __________, suggesting she was hiding something important that she could not share openly.",
        chinese_question: "她突然的沉默是 __________ 的，暗示她在隐瞒重要的事情，而这些事情是她无法公开分享的。",
        answers: [
            { option: "A", answer: "reassuring", chinese_answer: "令人安心的", chinese_romanization: "lìng rén ānxīn de" },
            { option: "B", answer: "ominous", chinese_answer: "不祥的", chinese_romanization: "bùxiáng de" },
            { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "D", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ominous' figuratively means giving the impression that something bad or unpleasant is going to happen." +
                "<br><br>" +
                "(A) 'reassuring' means serving or intended to remove someone's doubts or fears." +
                "<br><br>" +
                "(C) 'trivial' means of little value or importance." +
                "<br><br>" +
                "(D) 'casual' means relaxed and unconcerned.",
        chinese_explanation: "(B) '不祥的' 在比喻意义上意味着给人留下坏事或不愉快的事情即将发生的印象。" +
                "<br><br>" +
                "(A) '令人安心的' 意味着旨在消除某人疑虑或恐惧的。" +
                "<br><br>" +
                "(C) '琐碎的' 意味着价值或重要性很小的。" +
                "<br><br>" +
                "(D) '随意的' 意味着放松和不关心的。"
    },
    {
        id: 2,
        question: "The rumours she spread had a __________ effect on his career, destroying his reputation and job prospects.",
        chinese_question: "她传播的谣言对他的职业生涯产生了 __________ 的影响，毁坏了他的声誉和工作前景。",
        answers: [
            { option: "A", answer: "positive", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "B", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
            { option: "C", answer: "malign", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
            { option: "D", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malign' means causing harm or damage." +
            "<br><br>" +
            "(A) 'positive' means good or beneficial." +
            "<br><br>" +
            "(B) 'supportive' means providing encouragement or help." +
            "<br><br>" +
            "(D) 'minimal' means very small in amount or degree.",
        chinese_explanation: "(C) '恶意的' 意味着造成伤害或损害。" +
            "<br><br>" +
            "(A) '积极的' 意味着好的或有益的。" +
            "<br><br>" +
            "(B) '支持的' 意味着提供鼓励或帮助。" +
            "<br><br>" +
            "(D) '最小的' 意味着数量或程度非常小的。"
    },
    {
        id: 3,
        question: "The artist's __________ style made his paintings stand out at the gallery.",
        chinese_question: "艺术家的 __________ 风格使他的画在画廊中脱颖而出。",
        answers: [
            { option: "A", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "D", answer: "peculiar", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'peculiar' means strange or unusual." +
            "<br><br>" +
            "(A) 'typical' means having the distinctive qualities of a particular type of person or thing." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(D) '奇怪的' 意味着奇怪或不寻常。" +
            "<br><br>" +
            "(A) '典型的' 意味着具有某种特定类型的人或物的独特品质。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特殊或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '常见的' 意味着经常发生、发现或完成的；普遍的。"
    },
    {
        id: 4,
        question: "The company's __________ decline in sales, with a sharp drop in revenue and significant losses reported, raised concerns among investors.",
        chinese_question: "公司 __________ 的销售下降，伴随着收入的急剧下降和报告中的重大损失，引起了投资者的担忧。",
        answers: [
            { option: "A", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "C", answer: "precipitous", chinese_answer: "急剧的", chinese_romanization: "jíjù de" },
            { option: "D", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'precipitous' means dangerously high or steep." +
            "<br><br>" +
            "(A) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(B) 'gradual' means taking place or progressing slowly or by degrees." +
            "<br><br>" +
            "(D) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast.",
        chinese_explanation: "(C) '急剧的' 意味着危险地高或陡的。" +
            "<br><br>" +
            "(A) '稳定的' 意味着牢固固定、支撑或平衡的；不摇晃或不移动的。" +
            "<br><br>" +
            "(B) '逐渐的' 意味着缓慢地或逐步进行的。" +
            "<br><br>" +
            "(D) '缓慢的' 意味着移动或操作，或设计为仅以低速进行的；不快或不迅速的。"
    },
    {
        id: 5,
        question: "Her __________ nature, characterized by kindness and a sense of humour, made her a favourite among her friends and colleagues.",
        chinese_question: "她的 __________ 性格，以善良和幽默感为特点，使她成为朋友和同事中的最爱。",
        answers: [
            { option: "A", answer: "endearing", chinese_answer: "讨人喜欢", chinese_romanization: "tǎo rén xǐhuān" },
            { option: "B", answer: "abrasive", chinese_answer: "粗暴", chinese_romanization: "cūbào" },
            { option: "C", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "D", answer: "unfriendly", chinese_answer: "不友好", chinese_romanization: "bù yǒuhǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endearing' means inspiring affection." +
            "<br><br>" +
            "(B) 'abrasive' means showing little concern for the feelings of others; harsh." +
            "<br><br>" +
            "(C) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(D) 'unfriendly' means not friendly; hostile.",
        chinese_explanation: "(A) '讨人喜欢' 意味着激发喜爱的。" +
            "<br><br>" +
            "(B) '粗暴' 意味着对他人感受关心很少；粗糙。" +
            "<br><br>" +
            "(C) '自私' 意味着缺乏对他人的考虑；主要关注自己的个人利益或快乐。" +
            "<br><br>" +
            "(D) '不友好' 意味着不友好；敌对的。"
    },
    {
        id: 6,
        question: "His __________ remarks during the meeting, like making offensive jokes and dismissive comments, offended many of his colleagues.",
        chinese_question: "他在会议上的 __________ 言论，例如发表冒犯性的笑话和不屑一顾的评论，冒犯了许多同事。",
        answers: [
            { option: "A", answer: "tactful", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
            { option: "B", answer: "refined", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "C", answer: "eloquent", chinese_answer: "雄辩的", chinese_romanization: "xióngbiàn de" },
            { option: "D", answer: "crude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'crude' means offensively coarse or rude, especially in relation to sexual matters." +
            "<br><br>" +
            "(A) 'tactful' means having or showing skill and sensitivity in dealing with others or with difficult issues." +
            "<br><br>" +
            "(B) 'refined' means elegant and cultured in appearance, manner, or taste." +
            "<br><br>" +
            "(C) 'eloquent' means fluent or persuasive in speaking or writing.",
        chinese_explanation: "(D) '粗鲁的' 意味着冒犯性地粗俗或粗鲁的，尤其是与性有关的事情。" +
            "<br><br>" +
            "(A) '圆滑的' 意味着在处理他人或困难问题时表现出技巧和敏感的。" +
            "<br><br>" +
            "(B) '优雅的' 意味着外表、举止或品味上的优雅和有教养的。" +
            "<br><br>" +
            "(C) '雄辩的' 意味着在讲话或写作中流利或有说服力的。"
    },
    {
        id: 7,
        question: "The constant demands of his job became __________, affecting his health and personal life.",
        chinese_question: "他工作的不断要求变得 __________，影响了他的健康和个人生活。",
        answers: [
            { option: "A", answer: "burdensome", chinese_answer: "繁重的", chinese_romanization: "fánzhòng de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "invigorating", chinese_answer: "振奋的", chinese_romanization: "zhènfèn de" },
            { option: "D", answer: "refreshing", chinese_answer: "清爽的", chinese_romanization: "qīngshuǎng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'burdensome' means difficult to carry out or fulfill; taxing." + 
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'invigorating' means making one feel strong, healthy, and full of energy." +
            "<br><br>" +
            "(D) 'refreshing' means serving to refresh or reinvigorate someone.",
        chinese_explanation: "(A) '繁重的' 意味着难以执行或完成的；费力的。" + 
            "<br><br>" +
            "(B) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '振奋的' 意味着让人感到强壮、健康和充满活力的。" +
            "<br><br>" +
            "(D) '清爽的' 意味着让人感到清新或振奋的。"
    },
    {
        id: 8,
        question: "She kept the locket, a gift from her grandmother, in a __________ box, valuing it more for its sentimental worth than its monetary value.",
        chinese_question: "她把祖母送给她的挂坠放在一个 __________ 的盒子里，更看重它的情感价值而不是金钱价值。",
        answers: [
            { option: "A", answer: "common", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "ordinary", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "C", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "precious", chinese_answer: "珍贵的", chinese_romanization: "zhēnguì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'precious' means of great value; not to be wasted or treated carelessly." +
            "<br><br>" +
            "(A) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance.",
        chinese_explanation: "(D) '珍贵的' 意味着非常有价值的；不应被浪费或粗心对待的。" +
            "<br><br>" +
            "(A) '普通的' 意味着经常发生的、发现的或做的；普遍的。" +
            "<br><br>" +
            "(B) '平凡的' 意味着没有特别或独特的特征的；正常的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着价值或重要性很小的。"
    },
    {
        id: 9,
        question: "His __________ beliefs made him carry good luck charms everywhere he went.",
        chinese_question: "他的 __________ 信念使他无论走到哪里都随身携带幸运符。",
        answers: [
            { option: "A", answer: "superstitious", chinese_answer: "迷信的", chinese_romanization: "míxìn de" },
            { option: "B", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
            { option: "C", answer: "empirical", chinese_answer: "经验的", chinese_romanization: "jīngyàn de" },
            { option: "D", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'superstitious' means having beliefs based on superstition rather than reason or knowledge." +
            "<br><br>" +
            "(B) 'rational' means based on or in accordance with reason or logic." +
            "<br><br>" +
            "(C) 'empirical' means based on observation or experience rather than theory." +
            "<br><br>" +
            "(D) 'skeptical' means having doubts or reservations.",
        chinese_explanation: "(A) '迷信的' 意味着基于迷信而不是理性或知识的信念。" +
            "<br><br>" +
            "(B) '理性的' 意味着基于或符合理性或逻辑。" +
            "<br><br>" +
            "(C) '经验的' 意味着基于观察或经验而不是理论。" +
            "<br><br>" +
            "(D) '怀疑的' 意味着有疑虑或保留意见。"
    },
    {
        id: 10,
        question: "The old bicycle was still __________, even though it had some rust on the frame.",
        chinese_question: "尽管车架上有些锈，这辆旧自行车仍然是 __________ 的。",
        answers: [
            { option: "A", answer: "serviceable", chinese_answer: "可用", chinese_romanization: "kěyòng" },
            { option: "B", answer: "broken", chinese_answer: "破损", chinese_romanization: "pòsǔn" },
            { option: "C", answer: "decorative", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
            { option: "D", answer: "luxurious", chinese_answer: "奢华", chinese_romanization: "shēhuá" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'serviceable' means capable of being used or functioning." +
                "<br><br>" +
                "(B) 'broken' means damaged and not working." +
                "<br><br>" +
                "(C) 'decorative' means intended to look nice rather than be useful." +
                "<br><br>" +
                "(D) 'luxurious' means extremely comfortable and expensive.",
        chinese_explanation: "(A) '可用' 意味着能够使用或运作。" +
                "<br><br>" +
                "(B) '破损' 意味着损坏且不工作。" +
                "<br><br>" +
                "(C) '装饰' 意味着为了好看而不是为了实用。" +
                "<br><br>" +
                "(D) '奢华' 意味着极度舒适和昂贵。"
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
