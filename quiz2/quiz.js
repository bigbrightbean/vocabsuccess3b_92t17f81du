// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her comments were not __________ for the serious nature of the meeting.",
        chinese_question: "她的评论对会议的严肃性质来说并不 __________。",
        answers: [
            { option: "A", answer: "suitable", chinese_answer: "合适的", chinese_romanization: "héshì de" },
            { option: "B", answer: "appropriate", chinese_answer: "适当的", chinese_romanization: "shìdàng de" },
            { option: "C", answer: "fitting", chinese_answer: "恰当的", chinese_romanization: "qiàdàng de" },
            { option: "D", answer: "apt", chinese_answer: "恰当的", chinese_romanization: "qiàdàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'appropriate' means suitable or proper in the circumstances." +
            "<br><br>" +
            "(A) 'suitable' means right or appropriate for a particular person, purpose, or situation." +
            "<br><br>" +
            "(C) 'fitting' means suitable or appropriate under the circumstances." +
            "<br><br>" +
            "(D) 'apt' means appropriate or suitable in the circumstances.",
        chinese_explanation: "(B) '适当的' 意味着在情况下适当或合适的。" +
            "<br><br>" +
            "(A) '合适的' 意味着适合特定人、目的或情况。" +
            "<br><br>" +
            "(C) '恰当的' 意味着在情况下适当或合适的。" +
            "<br><br>" +
            "(D) '恰当的' 意味着在情况下适当或合适的。"
    },
    {
        id: 2,
        question: "The politician's __________ promises left the voters unsure of his real intentions.",
        chinese_question: "政治家的 __________ 承诺让选民对他的真实意图感到不确定。",
        answers: [
            { option: "A", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" },
            { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "C", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
            { option: "D", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(A) 'specific' means clearly defined or identified." +
            "<br><br>" +
            "(B) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(D) 'transparent' means easy to perceive or detect.",
        chinese_explanation: "(C) '模糊的' 意味着不确定、不明确或不清晰的性质或意义的。" +
            "<br><br>" +
            "(A) '具体的' 意味着明确定义或识别的。" +
            "<br><br>" +
            "(B) '详细的' 意味着有很多细节或事实的；显示出对细节的关注的。" +
            "<br><br>" +
            "(D) '透明的' 意味着容易感知或检测的。"
    },
    {
        id: 3,
        question: "The internet has become a __________ place for exchanging ideas and information.",
        chinese_question: "互联网已成为一个 __________ 的地方，用于交流思想和信息。",
        answers: [
            { option: "A", answer: "vacant", chinese_answer: "空的", chinese_romanization: "kōng de" },
            { option: "B", answer: "barren", chinese_answer: "贫瘠的", chinese_romanization: "pínjí de" },
            { option: "C", answer: "desolate", chinese_answer: "荒凉的", chinese_romanization: "huāngliáng de" },
            { option: "D", answer: "populous", chinese_answer: "人口众多的", chinese_romanization: "rénkǒu zhòngduō de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'populous' means having a large population; densely populated." + 
            "<br><br>" + 
            "(A) 'vacant' means having no fixtures, furniture, or inhabitants; empty." + 
            "<br><br>" + 
            "(B) 'barren' means too poor to produce much or any vegetation." + 
            "<br><br>" + 
            "(C) 'desolate' means deserted of people and in a state of bleak and dismal emptiness.",
        chinese_explanation: "(D) '人口众多的' 意味着人口众多的；人口稠密的。" +
            "<br><br>" +
            "(A) '空的' 意味着没有装置、家具或居民的；空的。" +
            "<br><br>" +
            "(B) '贫瘠的' 意味着太贫瘠而无法产生大量或任何植被的。" +
            "<br><br>" +
            "(C) '荒凉的' 意味着没有人的且处于荒凉和凄凉的状态."
    },
    {
        id: 4,
    question: "The manager's __________ dismissal of the proposal discouraged the team from presenting further ideas.",
    chinese_question: "经理对提案的 __________ 拒绝使团队感到灰心，不再提出进一步的想法。",
    answers: [
      { option: "A", answer: "curt", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
      { option: "B", answer: "encouraging", chinese_answer: "鼓励的", chinese_romanization: "gǔlì de" },
      { option: "C", answer: "supportive", chinese_answer: "支持的", chinese_romanization: "zhīchí de" },
      { option: "D", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'curt' means rudely brief." +
      "<br><br>" +
      "(B) 'encouraging' means giving someone support or confidence." +
      "<br><br>" +
      "(C) 'supportive' means providing encouragement or emotional help." +
      "<br><br>" +
      "(D) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval.",
    chinese_explanation: "(A) '简短的' 意味着简短而无礼的。" +
      "<br><br>" +
      "(B) '鼓励的' 意味着给予某人支持或信心的。" +
      "<br><br>" +
      "(C) '支持的' 意味着提供鼓励或情感帮助的。" +
      "<br><br>" +
      "(D) '热情的' 意味着表现出强烈和热切的享受、兴趣或赞同的。"
    },
    {
        id: 5,
question: "His __________ expression revealed that he was deeply engrossed in thought.",
chinese_question: "他的 __________ 表情表明他正深深地沉浸在思考中。",
answers: [
        { option: "A", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēn xīn de" },
        { option: "B", answer: "playful", chinese_answer: "顽皮的", chinese_romanization: "wánpí de" },
        { option: "C", answer: "pensive", chinese_answer: "沉思的", chinese_romanization: "chénsī de" },
        { option: "D", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" }
],
correctAnswer: "C",
explanation: "(C) 'pensive' means engaged in, involving, or reflecting deep or serious thought." + 
    "<br><br>" + 
    "(A) 'distracted' means unable to concentrate because one's mind is preoccupied." + 
    "<br><br>" + 
    "(B) 'playful' means fond of games and amusement; lighthearted." + 
    "<br><br>" + 
    "(D) 'cheerful' means noticeably happy and optimistic.",
chinese_explanation: "(C) '沉思的' 意味着从事、涉及或反映深刻或严肃的思考。" +
    "<br><br>" +
    "(A) '分心的' 意味着由于心不在焉而无法集中注意力的。" +
    "<br><br>" +
    "(B) '顽皮的' 意味着喜欢游戏和娱乐的；轻松愉快的。" +
    "<br><br>" +
    "(D) '快乐的' 意味着显著地快乐和乐观的."
    },
    {
        id: 6,
    question: "His __________ behavior towards the boss was obvious to everyone, as he constantly flattered and agreed with her to gain favor.",
    chinese_question: "他对老板的 __________ 行为对每个人来说都是显而易见的，因为他不断地奉承和附和她，以获得青睐。",
    answers: [
        { option: "A", answer: "sycophantic", chinese_answer: "谄媚的", chinese_romanization: "chǎnmèi de" },
        { option: "B", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
        { option: "D", answer: "rebellious", chinese_answer: "反叛的", chinese_romanization: "fǎnpàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'sycophantic' means behaving or done in an obsequious way in order to gain advantage." +
        "<br><br>" +
        "(B) 'genuine' means truly what something is said to be; authentic." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'rebellious' means showing a desire to resist authority, control, or convention.",
    chinese_explanation: "(A) '谄媚的' 意味着以奉承的方式行事或做事以获得好处。" +
        "<br><br>" +
        "(B) '真诚的' 意味着确实如所说的那样；真实的。" +
        "<br><br>" +
        "(C) '漠不关心的' 意味着没有特别的兴趣或同情的；不关心的。" +
        "<br><br>" +
        "(D) '反叛的' 意味着表现出抗拒权威、控制或传统的愿望的。"
    },
    {
        id: 7,
        question: "The author's __________ writing style captivated readers with its playful and imaginative elements.",
        chinese_question: "作者的 __________ 写作风格以其玩笑和富有想象力的元素吸引了读者。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "whimsical", chinese_answer: "异想天开的", chinese_romanization: "yìxiǎngtiānkāi de" },
            { option: "C", answer: "conventional", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'whimsical' means playfully quaint or fanciful, especially in an appealing and amusing way." +
            "<br><br>" +
            "(A) 'serious' means demanding careful consideration or application." +
            "<br><br>" +
            "(C) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted.",
        chinese_explanation: "(B) '异想天开的' 意味着玩笑般古怪的，特别是以一种吸引人和有趣的方式。" +
            "<br><br>" +
            "(A) '严肃的' 意味着需要认真考虑或应用的。" +
            "<br><br>" +
            "(C) '常规的' 意味着根据通常做法或信仰的。" +
            "<br><br>" +
            "(D) '可预测的' 意味着能够预测的。"
    },
    {
        id: 8,
        question: "Their __________ efforts led to significant progress on the project.",
        chinese_question: "他们的__________努力使项目取得了重大进展。",
        answers: [
            { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
            { option: "B", answer: "sluggish", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "C", answer: "industrious", chinese_answer: "勤奋的", chinese_romanization: "qínfèn de" },
            { option: "D", answer: "idle", chinese_answer: "懒散的", chinese_romanization: "lǎnsǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'industrious' means diligent and hard-working. Figuratively, it can mean being very productive." +
            "<br><br>" +
            "(A) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(D) 'idle' means avoiding work; lazy.",
        chinese_explanation: "(C) '勤奋的'一词意味着勤奋和努力工作的。比喻地，它可以表示非常高效的。" +
            "<br><br>" +
            "(A) '懒惰的' 意味着不愿意工作或使用能量的。" +
            "<br><br>" +
            "(B) '缓慢的' 意味着动作迟缓或不活跃的。" +
            "<br><br>" +
            "(D) '懒散的' 意味着避免工作的；懒惰的。"
    },
    {
        id: 9,
        question: "His suggestion was not __________ to the team, as it required too many resources.",
        chinese_question: "他的建议对团队来说并不 __________ ，因为它需要太多的资源。",
        answers: [
            { option: "A", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
            { option: "B", answer: "suitable", chinese_answer: "适合的", chinese_romanization: "shìhé de" },
            { option: "C", answer: "viable", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
            { option: "D", answer: "palatable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'palatable' means acceptable or satisfactory." +
            "<br><br>" +
            "(A) 'feasible' means possible to do easily or conveniently." +
            "<br><br>" +
            "(B) 'suitable' means right or appropriate for a particular person, purpose, or situation." +
            "<br><br>" +
            "(C) 'viable' means capable of working successfully.",
        chinese_explanation: "(D) '可接受的' 意味着可以接受或令人满意的。" +
            "<br><br>" +
            "(A) '可行的' 意味着容易或方便地做的。" +
            "<br><br>" +
            "(B) '适合的' 意味着对特定的人、目的或情况是合适的。" +
            "<br><br>" +
            "(C) '可行的' 意味着能够成功地运作。"
    },
    {
        id: 10,
    question: "The __________ nature of their celebration added an element of excitement and unpredictability, making it even more memorable.",
    chinese_question: "他们庆祝活动的 __________ 性质增加了兴奋和不可预测的元素，使其更加难忘。",
    answers: [
        { option: "A", answer: "spur-of-the-moment", chinese_answer: "一时冲动的", chinese_romanization: "yīshí chōngdòng de" },
        { option: "B", answer: "planned", chinese_answer: "计划的", chinese_romanization: "jìhuà de" },
        { option: "C", answer: "structured", chinese_answer: "有结构的", chinese_romanization: "yǒu jiégòu de" },
        { option: "D", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'spur-of-the-moment' means done suddenly without planning." +
        "<br><br>" +
        "(B) 'planned' means decided on and arranged in advance." +
        "<br><br>" +
        "(C) 'structured' means arranged or organized in a particular way." +
        "<br><br>" +
        "(D) 'orderly' means neatly and methodically arranged.",
    chinese_explanation: "(A) '一时冲动的' 意味着突然做出的，没有计划的。" +
        "<br><br>" +
        "(B) '计划的' 意味着提前决定和安排好的。" +
        "<br><br>" +
        "(C) '有结构的' 意味着以特定方式安排或组织的。" +
        "<br><br>" +
        "(D) '有序的' 意味着整齐和有条理地安排的。"
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
