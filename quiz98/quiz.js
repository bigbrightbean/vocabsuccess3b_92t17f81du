// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "They were accused of __________ with the enemy to betray their country.",
        chinese_question: "他们被指控与敌人 __________ ，背叛他们的国家。",
        answers: [
                { option: "A", answer: "conniving", chinese_answer: "合谋", chinese_romanization: "hémóu" },
                { option: "B", answer: "cooperating", chinese_answer: "合作", chinese_romanization: "hézuò" },
                { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrating", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'conniving' means to secretly allow something immoral, illegal, or harmful to occur; to conspire." +
            "<br><br>" +
            "(B) 'cooperating' means to act jointly; to work together toward the same end." +
            "<br><br>" +
            "(C) 'ignoring' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'celebrating' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '合谋' 意味着秘密允许某事发生，尤其是非法的或有害的；合谋。" +
            "<br><br>" +
            "(B) '合作' 意味着共同行动；共同努力实现相同的目标。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 2,
        question: "He tried to __________ the negative thoughts from his mind and focus on the positive.",
        chinese_question: "他试图将负面想法 __________ 出自己的脑海，专注于积极的方面。",
        answers: [
            { option: "A", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "B", answer: "nurture", chinese_answer: "培育", chinese_romanization: "péiyù" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "banish", chinese_answer: "驱除", chinese_romanization: "qūchú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'banish' means to get rid of something unwanted." +
            "<br><br>" +
            "(A) 'embrace' means to accept or support willingly and enthusiastically." +
            "<br><br>" +
            "(B) 'nurture' means to care for and encourage the growth or development of." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(D) '驱除' 意味着摆脱不想要的东西。" +
            "<br><br>" +
            "(A) '接受' 意味着愿意并热情地接受或支持。" +
            "<br><br>" +
            "(B) '培育' 意味着照顾和鼓励生长或发展。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
        question: "The politician's speech was criticized for __________ important facts that contradicted his claims.",
        chinese_question: "政治家的演讲因为 __________ 与他主张相矛盾的重要事实而受到批评。",
        answers: [
                { option: "A", answer: "eliding", chinese_answer: "省略", chinese_romanization: "shěnglüè" },
                { option: "B", answer: "supporting", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "acknowledging", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
                { option: "D", answer: "expanding", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eliding' means to omit or leave out, used figuratively here." +
            "<br><br>" +
            "(B) 'supporting' means to give assistance to." +
            "<br><br>" +
            "(C) 'acknowledging' means to accept or admit the existence or truth of." +
            "<br><br>" +
            "(D) 'expanding' means to make something larger or more extensive.",
        chinese_explanation: "(A) '省略' 意味着省略或遗漏，这里是比喻用法。" +
            "<br><br>" +
            "(B) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(C) '承认' 意味着接受或承认存在或真相。" +
            "<br><br>" +
            "(D) '扩展' 意味着使某物更大或更广泛。"
    },
    {
        id: 4,
        question: "The architect used detailed blueprints to __________ the layout of the new building.",
        chinese_question: "建筑师用详细的蓝图 __________ 新建筑的布局。",
        answers: [
                { option: "A", answer: "delineate", chinese_answer: "描绘", chinese_romanization: "miáohuì" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
                { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'delineate' means to describe or portray something precisely." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'destroy' means to put an end to the existence of something by damaging or attacking it." +
                "<br><br>" +
                "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '描绘' 意味着精确地描述或描绘某物。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '破坏' 意味着通过损坏或攻击使某物的存在终止。" +
                "<br><br>" +
                "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 5,
        question: "She accepted the bribe without __________ , focused solely on the immediate benefit.",
        chinese_question: "她毫无 __________ 地接受了贿赂，只关注眼前的利益。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "regret", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" },
            { option: "C", answer: "consideration", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
            { option: "D", answer: "compunction", chinese_answer: "内疚", chinese_romanization: "nèijiù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'compunction' means a feeling of guilt or moral scruple that prevents or follows the doing of something bad, used figuratively here." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'regret' means to feel sad, repentant, or disappointed over something that has happened or been done." +
            "<br><br>" +
            "(C) 'consideration' means careful thought, typically over a period of time.",
        chinese_explanation: "(D) '内疚' 意味着一种内疚感或道德上的不安，阻止或跟随做坏事之后，这里是比喻用法。" +
            "<br><br>" +
            "(A) '喜悦' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(B) '后悔' 意味着对已经发生或已经做过的事情感到悲伤、懊悔或失望。" +
            "<br><br>" +
            "(C) '考虑' 意味着通常在一段时间内进行的仔细思考。"
    },
    {
        id: 6,
        question: "The country had to __________ part of its territory after losing the war.",
        chinese_question: "国家在战败后不得不 __________ 部分领土。",
        answers: [
        { option: "A", answer: "cede", chinese_answer: "割让", chinese_romanization: "gēràng" },
        { option: "B", answer: "acquire", chinese_answer: "获得", chinese_romanization: "huòdé" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cede' means to give up power or territory." +
            "<br><br>" +
            "(B) 'acquire' means to obtain or get." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'protect' means to keep safe from harm or injury.",
        chinese_explanation: "(A) '割让' 意味着放弃权力或领土。" +
            "<br><br>" +
            "(B) '获得' 意味着获得或得到。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '保护' 意味着使免受伤害或损害。"
    },
    {
        id: 7,
        question: "The publisher chose to __________ the classic book to make it more appropriate for modern audiences.",
        chinese_question: "出版社选择 __________ 这本经典书籍，使其更适合现代读者。",
        answers: [
        { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "bowdlerize", chinese_answer: "删减", chinese_romanization: "shānjiǎn" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bowdlerize' means to remove material that is considered offensive or inappropriate from a text." +
            "<br><br>" +
            "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(C) '删减' 意味着从文本中删除被认为有冒犯性或不合适的内容。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
        question: "The company had to __________ itself from the bad publicity after the scandal.",
        chinese_question: "公司不得不从丑闻后的负面宣传中 __________ 自己。",
        answers: [
                { option: "A", answer: "extricate", chinese_answer: "摆脱", chinese_romanization: "bǎituō" },
                { option: "B", answer: "immerse", chinese_answer: "沉浸", chinese_romanization: "chénjìn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "promote", chinese_answer: "推广", chinese_romanization: "tuīguǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'extricate' means to free someone or something from a constraint or difficulty, used figuratively here." +
            "<br><br>" +
            "(B) 'immerse' means to involve oneself deeply in a particular activity." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'promote' means to further the progress of something.",
        chinese_explanation: "(A) '摆脱' 意味着从约束或困难中解放某人或某物，这里是比喻用法。" +
            "<br><br>" +
            "(B) '沉浸' 意味着深入参与某项活动。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '推广' 意味着促进某事的发展。"
    },
    {
        id: 9,
question: "The salesperson attempted to __________ the elderly couple by offering them an overpriced and unnecessary warranty.",
chinese_question: "销售员试图通过提供高价且不必要的保修来 __________ 这对老年夫妇。",
answers: [
        { option: "A", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "B", answer: "hoodwink", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "C", answer: "advise", chinese_answer: "建议", chinese_romanization: "jiànyì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
],
correctAnswer: "B",
explanation: "(B) 'hoodwink' used figuratively means to deceive or trick someone." +
        "<br><br>" +
        "(A) 'assist' means to help someone." +
        "<br><br>" +
        "(C) 'advise' means to offer suggestions about the best course of action to someone." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something.",
chinese_explanation: "(B) '欺骗' 在比喻意义上指欺骗或欺诈某人。" +
        "<br><br>" +
        "(A) '帮助' 意味着协助某人。" +
        "<br><br>" +
        "(C) '建议' 意味着为某人提供关于最佳行动方案的建议。" +
        "<br><br>" +
        "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 10,
question: "Scientists __________ the discovery of the new planet as a major breakthrough in astronomy.",
chinese_question: "科学家们 __________ 这颗新行星的发现是天文学的重大突破。",
answers: [
    { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "B", answer: "condemned", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
    { option: "C", answer: "hailed", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
    { option: "D", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
],
correctAnswer: "C",
explanation: "(C) 'hailed' means to acclaim enthusiastically." +
    "<br><br>" +
    "(A) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
    "<br><br>" +
    "(B) 'condemned' means to express complete disapproval of something, typically in public." +
    "<br><br>" +
    "(D) 'doubted' means to feel uncertain about.",
chinese_explanation: "(C) '欢呼' 意味着热情地欢呼。" +
    "<br><br>" +
    "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
    "<br><br>" +
    "(B) '谴责' 意味着公开表示完全不赞成某事。" +
    "<br><br>" +
    "(D) '怀疑' 意味着感到不确定。"
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
