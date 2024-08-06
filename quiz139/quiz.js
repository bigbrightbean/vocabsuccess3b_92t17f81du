// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The villagers decided to __________ the invaders, by forming a defensive line and using makeshift weapons, to protect their homes.",
        chinese_question: "村民们决定通过组成防线并使用临时武器来 __________ 入侵者，以保护他们的家园。",
        answers: [
            { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
            { option: "B", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
            { option: "C", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resist' means to withstand the action or effect of." +
            "<br><br>" +
            "(B) 'welcome' means to greet someone in a friendly way." +
            "<br><br>" +
            "(C) 'follow' means to go or come after a person or thing proceeding ahead." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '抵抗' 意味着经受住某事的作用或影响。" +
            "<br><br>" +
            "(B) '欢迎' 意味着以友好的方式迎接某人。" +
            "<br><br>" +
            "(C) '跟随' 意味着在一个人或事物之后行走或到来。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
        question: "It __________ that the employee had been stealing from the company for years without anyone noticing, and this was only discovered during a routine audit.",
        chinese_question: "__________ 该员工多年来一直在从公司偷窃而无人注意到，这在例行审计中才被发现。",
        answers: [
            { option: "A", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "transpired", chinese_answer: "发生", chinese_romanization: "fāshēng" },
            { option: "D", answer: "exaggerated", chinese_answer: "夸大", chinese_romanization: "kuādà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'transpired' means to become known or to happen." +
            "<br><br>" +
            "(A) 'concealed' means kept secret or hidden." +
            "<br><br>" +
            "(B) 'supported' means to bear all or part of the weight of something." +
            "<br><br>" +
            "(D) 'exaggerated' means represented as being larger, better, or worse than it really is.",
        chinese_explanation: "(C) '发生' 意味着变得已知或发生。" +
            "<br><br>" +
            "(A) '隐藏' 意味着保密或隐藏。" +
            "<br><br>" +
            "(B) '支持' 意味着承担某物的全部或部分重量。" +
            "<br><br>" +
            "(D) '夸大' 意味着被描述得比实际更大、更好或更糟。"
    },
    {
        id: 3,
        question: "To complete the project, the programmer had to __________ several lines of code into a single command, ensuring the script ran smoothly.",
        chinese_question: "为了完成项目，程序员必须将几行代码 __________ 成一个命令，确保脚本顺利运行。",
        answers: [
                { option: "A", answer: "separate", chinese_answer: "分开", chinese_romanization: "fēnkāi" },
                { option: "B", answer: "concatenate", chinese_answer: "连接", chinese_romanization: "liánjiē" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "delete", chinese_answer: "删除", chinese_romanization: "shānchú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'concatenate' means to link things together in a series or chain." +
            "<br><br>" +
            "(A) 'separate' means to cause to move or be apart." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'delete' means to remove or erase.",
        chinese_explanation: "(B) '连接' 意味着将事物按顺序或链条连接在一起。" +
            "<br><br>" +
            "(A) '分开' 意味着使移动或分离。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '删除' 意味着移除或擦除。"
    },
    {
        id: 4,
        question: "The journalist’s investigation led to a public outcry to __________ the corrupt mayor, by demanding his immediate removal from office and calling for new elections.",
        chinese_question: "记者的调查引发了公众对 __________ 腐败市长的强烈抗议，要求立即罢免他并呼吁重新选举。",
        answers: [
                { option: "A", answer: "depose", chinese_answer: "罢免", chinese_romanization: "bàmiǎn" },
                { option: "B", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'depose' means to remove from office suddenly and forcefully, used figuratively here." +
                "<br><br>" +
                "(B) 'honor' means to regard with great respect." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'assist' means to help or support.",
        chinese_explanation: "(A) '罢免' 意味着突然且强制地将其免职，这里是比喻用法。" +
                "<br><br>" +
                "(B) '尊敬' 意味着对某人或某物表示很高的尊重。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '帮助' 意味着提供帮助或支持。"
    },
    {
        id: 5,
question: "The intense pressure of the deadline caused his thoughts to __________, making it hard to concentrate.",
chinese_question: "紧迫的截止日期让他的思绪开始 __________，难以集中注意力。",
answers: [
        { option: "A", answer: "organize", chinese_answer: "组织", chinese_romanization: "zǔzhī" },
        { option: "B", answer: "frizzle", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
],
correctAnswer: "B",
explanation: "(B) 'frizzle' used figuratively means to become agitated or confused." +
        "<br><br>" +
        "(A) 'organize' means to arrange or coordinate." +
        "<br><br>" +
        "(C) 'clarify' means to make a statement or situation less confused and more comprehensible." +
        "<br><br>" +
        "(D) 'simplify' means to make something simpler or easier to do or understand.",
chinese_explanation: "(B) '混乱' 在比喻意义上指变得激动或困惑。" +
        "<br><br>" +
        "(A) '组织' 意味着安排或协调。" +
        "<br><br>" +
        "(C) '澄清' 意味着使声明或情况不那么混乱，更容易理解。" +
        "<br><br>" +
        "(D) '简化' 意味着使某事更简单或更容易做或理解。"
    },
    {
        id: 6,
        question: "The newspaper had to __________ the incorrect story after realizing it was based on false information, by removing the article from their website and printing a correction in the next edition.",
        chinese_question: "报纸在意识到报道是基于虚假信息后，不得不 __________ 错误的报道，通过从网站上删除文章并在下一版中打印更正。",
        answers: [
            { option: "A", answer: "publish", chinese_answer: "发表", chinese_romanization: "fābiǎo" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "D", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'retract' means to withdraw a statement or accusation as untrue or unjustified." +
            "<br><br>" +
            "(A) 'publish' means to make content available to the public." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'confirm' means to establish the truth or correctness of something previously believed, suspected, or feared to be the case.",
        chinese_explanation: "(C) '撤回'一词意味着撤回一项声明或指控，认为其不真实或不公正。" +
            "<br><br>" +
            "(A) '发表' 意味着将内容公之于众。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '确认' 意味着确定之前被认为、怀疑或担心的事情的真实性或正确性。"
    },
    {
        id: 7,
      question: "The cartoonist was known for his ability to __________ politicians with his clever drawings that often exaggerated their features and mocked their policies.",
      chinese_question: "这位漫画家以其通过巧妙的绘画 __________ 政治家的能力而闻名，这些绘画通常夸大了他们的特征并嘲弄了他们的政策。",
      answers: [
        { option: "A", answer: "lampoon", chinese_answer: "讽刺", chinese_romanization: "fěngcì" },
        { option: "B", answer: "respect", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
        { option: "C", answer: "emulate", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
        { option: "D", answer: "describe", chinese_answer: "描述", chinese_romanization: "miáoshù" }
      ],
      correctAnswer: "A",
      explanation: "(A) 'lampoon' means to publicly criticize (someone or something) by using ridicule, irony, or sarcasm." +
        "<br><br>" +
        "(B) 'respect' means to admire (someone or something) deeply, as a result of their abilities, qualities, or achievements." +
        "<br><br>" +
        "(C) 'emulate' means to match or surpass (a person or achievement), typically by imitation." +
        "<br><br>" +
        "(D) 'describe' means to give an account in words of (someone or something), including all the relevant characteristics, qualities, or events.",
      chinese_explanation: "(A) '讽刺' 意味着通过使用嘲讽、讽刺或讽刺来公开批评（某人或某事）。" +
        "<br><br>" +
        "(B) '尊敬' 意味着由于（某人或某事）的能力、品质或成就而深深钦佩。" +
        "<br><br>" +
        "(C) '模仿' 意味着通过模仿来匹配或超越（某人或成就）。" +
        "<br><br>" +
        "(D) '描述' 意味着用文字描述（某人或某事），包括所有相关的特征、品质或事件。"
    },
    {
        id: 8,
        question: "The teacher tried to __________ the students of the notion that learning math is impossible for some people, by showing them examples of different learning methods and success stories.",
        chinese_question: "老师试图通过展示不同学习方法和成功案例来 __________ 学生们那种认为学数学对某些人来说是不可能的观念。",
        answers: [
            { option: "A", answer: "instill", chinese_answer: "灌输", chinese_romanization: "guànshū" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "reinforce", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
            { option: "D", answer: "disabuse", chinese_answer: "纠正", chinese_romanization: "jiūzhèng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disabuse' means to persuade someone that an idea or belief is mistaken." +
            "<br><br>" +
            "(A) 'instill' means to gradually but firmly establish an idea or attitude in a person's mind." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'reinforce' means to strengthen or support.",
        chinese_explanation: "(D) '纠正' 意味着让某人相信一个观点或信念是错误的。" +
            "<br><br>" +
            "(A) '灌输' 意味着逐渐但坚定地在某人的脑海中建立一个想法或态度。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '加强' 意味着加强或支持。"
    },
    {
        id: 9,
        question: "The committee was shocked when the chairman attempted to __________ all decision-making power to himself and exclude other members from important discussions.",
        chinese_question: "当主席试图将所有决策权 __________ 给自己，并将其他成员排除在重要讨论之外时，委员会感到震惊。",
        answers: [
        { option: "A", answer: "arrogate", chinese_answer: "冒领", chinese_romanization: "màolǐng" },
        { option: "B", answer: "delegate", chinese_answer: "委托", chinese_romanization: "wěituō" },
        { option: "C", answer: "share", chinese_answer: "分享", chinese_romanization: "fēnxiǎng" },
        { option: "D", answer: "relinquish", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'arrogate' means to take or claim something without justification." +
            "<br><br>" +
            "(B) 'delegate' means to entrust a task or responsibility to another person." +
            "<br><br>" +
            "(C) 'share' means to have a portion of something with others." +
            "<br><br>" +
            "(D) 'relinquish' means to voluntarily cease to keep or claim.",
        chinese_explanation: "(A) '冒领' 意味着未经正当理由而占有或声称某物。" +
            "<br><br>" +
            "(B) '委托' 意味着将任务或责任交给他人。" +
            "<br><br>" +
            "(C) '分享' 意味着与他人共同拥有某物的一部分。" +
            "<br><br>" +
            "(D) '放弃' 意味着自愿停止保留或声称。"
    },
    {
        id: 10,
        question: "Revealing the plot twist before watching the movie will __________ the experience for others by ruining the suspense and surprise.",
        chinese_question: "在看电影之前透露剧情的反转会通过破坏悬念和惊喜 __________ 别人的观影体验。",
        answers: [
            { option: "A", answer: "enrich", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "spoil", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "complete", chinese_answer: "完成", chinese_romanization: "wánchéng" },
            { option: "D", answer: "enhance", chinese_answer: "增强", chinese_romanization: "zēngqiáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'spoil' means to diminish or destroy the value or quality of something." +
            "<br><br>" +
            "(A) 'enrich' means to improve or enhance the quality or value of something." +
            "<br><br>" +
            "(C) 'complete' means to make something whole or perfect." +
            "<br><br>" +
            "(D) 'enhance' means to intensify, increase, or further improve the quality, value, or extent of something.",
        chinese_explanation: "(B) '破坏' 意味着减少或破坏某物的价值或质量。" +
            "<br><br>" +
            "(A) '丰富' 意味着改善或提高某物的质量或价值。" +
            "<br><br>" +
            "(C) '完成' 意味着使某物完整或完美。" +
            "<br><br>" +
            "(D) '增强' 意味着增强、增加或进一步提高某物的质量、价值或程度。"
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
