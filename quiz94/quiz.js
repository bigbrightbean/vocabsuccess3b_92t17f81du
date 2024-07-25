// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He was __________ about having a strong hand in poker, hoping to deceive the other players into folding.",
        chinese_question: "他在扑克牌中 __________，希望能欺骗其他玩家让他们弃牌。",
        answers: [
            { option: "A", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "B", answer: "truthful", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "C", answer: "honest", chinese_answer: "坦率的", chinese_romanization: "tǎnshuài de" },
            { option: "D", answer: "bluffing", chinese_answer: "虚张声势的", chinese_romanization: "xūzhāng shēngshì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'bluffing' means trying to deceive someone as to one's abilities or intentions." +
            "<br><br>" +
            "(A) 'confident' means feeling or showing certainty about something." +
            "<br><br>" +
            "(B) 'truthful' means telling or expressing the truth." +
            "<br><br>" +
            "(C) 'honest' means free of deceit; truthful and sincere.",
        chinese_explanation: "(D) '虚张声势的' 意味着试图欺骗某人关于自己的能力或意图。" +
            "<br><br>" +
            "(A) '自信的' 意味着对某事感到或表现出确定性。" +
            "<br><br>" +
            "(B) '诚实的' 意味着讲述或表达真相的。" +
            "<br><br>" +
            "(C) '坦率的' 意味着没有欺骗的；诚实和真诚的。"
    },
    {
        id: 2,
        question: "The blacksmith decided to __________ the metal to increase its strength.",
        chinese_question: "铁匠决定 __________ 金属以增加其强度。",
        answers: [
        { option: "A", answer: "anneal", chinese_answer: "退火", chinese_romanization: "tuìhuǒ" },
        { option: "B", answer: "break", chinese_answer: "打碎", chinese_romanization: "dǎsuì" },
        { option: "C", answer: "cool", chinese_answer: "冷却", chinese_romanization: "lěngquè" },
        { option: "D", answer: "melt", chinese_answer: "融化", chinese_romanization: "rónghuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anneal' means to heat and then cool (a material, especially metal or glass) to make it stronger or more flexible." +
            "<br><br>" +
            "(B) 'break' means to separate into pieces as a result of a blow, shock, or strain." +
            "<br><br>" +
            "(C) 'cool' means to become or make less warm." +
            "<br><br>" +
            "(D) 'melt' means to make or become liquefied by heat.",
        chinese_explanation: "(A) '退火' 意味着加热然后冷却（材料，尤其是金属或玻璃）以使其更强或更柔韧。" +
            "<br><br>" +
            "(B) '打碎' 意味着因撞击、冲击或拉力而分成碎片。" +
            "<br><br>" +
            "(C) '冷却' 意味着变得或使变得不那么温暖。" +
            "<br><br>" +
            "(D) '融化' 意味着通过加热使其变成液体。"
    },
    {
        id: 3,
        question: "She managed to __________ a way to sneak out of the house without anyone noticing.",
        chinese_question: "她设法 __________ 出一种方法，在不被人注意的情况下溜出房子。",
        answers: [
                { option: "A", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
                { option: "B", answer: "contrive", chinese_answer: "设计", chinese_romanization: "shèjì" },
                { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contrive' means to create or bring about by deliberate use of skill and artifice." +
            "<br><br>" +
            "(A) 'forget' means to fail to remember." +
            "<br><br>" +
            "(C) 'abandon' means to give up completely." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '设计' 意味着通过有意识地使用技巧和诡计来创造或实现。" +
            "<br><br>" +
            "(A) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 4,
question: "The new CEO insisted that the company must __________ to the agreed ethical guidelines.",
chinese_question: "新任CEO坚持认为公司必须 __________ 商定的道德准则。",
answers: [
        { option: "A", answer: "hew", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
        { option: "B", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "contradict", chinese_answer: "矛盾", chinese_romanization: "máodùn" }
],
correctAnswer: "A",
explanation: "(A) 'hew' means to conform or adhere to, used figuratively here." +
        "<br><br>" +
        "(B) 'oppose' means to disapprove of and attempt to prevent, especially by argument." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'contradict' means to deny the truth of a statement by asserting the opposite.",
chinese_explanation: "(A) '遵守' 意味着符合或遵守，这里是比喻用法。" +
        "<br><br>" +
        "(B) '反对' 意味着不赞成并试图阻止，特别是通过辩论。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '矛盾' 意味着通过断言相反的内容来否认声明的真实性。"
    },
    {
        id: 5,
        question: "She couldn't help but __________ about the long wait at the doctor's office.",
        chinese_question: "她忍不住 __________ 医生诊所的长时间等待。",
        answers: [
                { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "B", answer: "kvetch", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kvetch' means to complain persistently." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(B) '抱怨' 意味着不断抱怨。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热烈的认可或钦佩。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 6,
        question: "She was careful not to __________ into the conversation, allowing others to share their opinions first.",
        chinese_question: "她小心翼翼地不 __________ 谈话，先让别人发表意见。",
        answers: [
            { option: "A", answer: "withdraw", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "B", answer: "hesitate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "agree", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "D", answer: "obtrude", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'obtrude' means to impose or force oneself or one's ideas on others in an unwelcome way." +
            "<br><br>" +
            "(A) 'withdraw' means to remove or take away." +
            "<br><br>" +
            "(B) 'hesitate' means to pause before saying or doing something." +
            "<br><br>" +
            "(C) 'agree' means to have the same opinion as someone else.",
        chinese_explanation: "(D) '打扰' 意味着以不受欢迎的方式把自己或自己的想法强加给别人。" +
            "<br><br>" +
            "(A) '撤退' 意味着移除或拿走。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在说或做某事之前停顿。" +
            "<br><br>" +
            "(C) '同意' 意味着与某人有相同的意见。"
    },
    {
        id: 7,
question: "The magazine was filled with sensational stories meant to __________ its audience, keeping them coming back for more.",
chinese_question: "这本杂志充满了旨在 __________ 读者的轰动性故事，让他们不断回来看更多。",
answers: [
    { option: "A", answer: "disappoint", chinese_answer: "让失望", chinese_romanization: "ràng shīwàng" },
    { option: "B", answer: "titillate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
    { option: "C", answer: "calm", chinese_answer: "使平静", chinese_romanization: "shǐ píngjìng" },
    { option: "D", answer: "soothe", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
],
correctAnswer: "B",
explanation: "(B) 'titillate' means to excite or arouse interest or enjoyment." +
    "<br><br>" +
    "(A) 'disappoint' means to let someone down." +
    "<br><br>" +
    "(C) 'calm' means to make peaceful." +
    "<br><br>" +
    "(D) 'soothe' means to ease or comfort.",
chinese_explanation: "(B) '刺激' 一词意味着激发或引起兴趣或享受。" +
    "<br><br>" +
    "(A) '让失望' 意味着让某人失望。" +
    "<br><br>" +
    "(C) '使平静' 意味着使平静。" +
    "<br><br>" +
    "(D) '安慰' 意味着安慰或舒适。"
    },
    {
        id: 8,
        question: "The editor decided to __________ the novel to make it suitable for younger readers.",
        chinese_question: "编辑决定 __________ 这本小说，使其适合年轻读者阅读。",
        answers: [
        { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "bowdlerize", chinese_answer: "删减", chinese_romanization: "shānjiǎn" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bowdlerize' means to remove material that is considered offensive or inappropriate from a text." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(C) '删减' 意味着从文本中删除被认为有冒犯性或不合适的内容。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。"
    },
    {
        id: 9,
        question: "The tabloid article aimed to __________ the celebrity's reputation with unfounded rumors.",
        chinese_question: "这篇小报文章旨在通过毫无根据的谣言 __________ 这位名人的声誉。",
        answers: [
        { option: "A", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "B", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "C", answer: "besmirch", chinese_answer: "玷污", chinese_romanization: "diànwū" },
        { option: "D", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'besmirch' means to damage someone's reputation or honor." +
            "<br><br>" +
            "(A) 'protect' means to keep safe from harm or injury." +
            "<br><br>" +
            "(B) 'uplift' means to raise the spirits or hopes of someone." +
            "<br><br>" +
            "(D) 'clarify' means to make a statement or situation less confused and more comprehensible.",
        chinese_explanation: "(C) '玷污' 意味着损害某人的声誉或荣誉。" +
            "<br><br>" +
            "(A) '保护' 意味着使其免受伤害或损害。" +
            "<br><br>" +
            "(B) '提升' 意味着提升某人的精神或希望。" +
            "<br><br>" +
            "(D) '澄清' 意味着使陈述或情况不再混乱，更易于理解。"
    },
    {
        id: 10,
        question: "He chose to __________ his love for her in front of all their friends and family.",
        chinese_question: "他选择在所有朋友和家人面前 __________ 对她的爱。",
        answers: [
        { option: "A", answer: "avow", chinese_answer: "坦白", chinese_romanization: "tǎnbái" },
        { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avow' means to assert or confess openly." +
            "<br><br>" +
            "(B) 'conceal' means to keep something secret." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'deny' means to state that something is not true.",
        chinese_explanation: "(A) '坦白' 意味着公开断言或承认。" +
            "<br><br>" +
            "(B) '隐藏' 意味着保密某事。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '否认' 意味着声明某事不真实。"
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
