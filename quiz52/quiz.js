// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The impact of the policy change on the company’s revenue was __________, hardly affecting its financial statements.",
        chinese_question: "政策变更对公司收入的影响是 __________ 的，对财务报表几乎没有影响。",
        answers: [
            { option: "A", answer: "significant", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "extensive", chinese_answer: "广泛的", chinese_romanization: "guǎngfàn de" },
            { option: "D", answer: "major", chinese_answer: "主要的", chinese_romanization: "zhǔyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(A) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(C) 'extensive' means covering or affecting a large area." +
            "<br><br>" +
            "(D) 'major' means important, serious, or significant.",
        chinese_explanation: "(B) '微不足道的' 意味着小到或不重要，不值得考虑；无足轻重的。" +
            "<br><br>" +
            "(A) '显著的' 意味着足够大或重要，值得注意的。" +
            "<br><br>" +
            "(C) '广泛的' 意味着覆盖或影响大面积的。" +
            "<br><br>" +
            "(D) '主要的' 意味着重要的，严重的，或显著的."
    },
    {
        id: 2,
        question: "Discussing hypothetical scenarios seemed __________ when we needed to focus on actual problems.",
        chinese_question: "在我们需要关注实际问题时，讨论假设情景显得很 __________。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "B", answer: "crucial", chinese_answer: "关键的", chinese_romanization: "guānjiàn de" },
            { option: "C", answer: "pointless", chinese_answer: "无意义的", chinese_romanization: "wú yìyì de" },
            { option: "D", answer: "necessary", chinese_answer: "必要的", chinese_romanization: "bìyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pointless' means having no purpose or effect." +
            "<br><br>" +
            "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'crucial' means decisive or critical, especially in the success or failure of something." +
            "<br><br>" +
            "(D) 'necessary' means required to be done, achieved, or present; needed; essential.",
        chinese_explanation: "(C) '无意义的' 意味着没有目的或效果。" +
            "<br><br>" +
            "(A) '有益的' 意味着结果是好的；有利或有优势的。" +
            "<br><br>" +
            "(B) '关键的' 意味着决定性或关键的，尤其是在成功或失败方面。" +
            "<br><br>" +
            "(D) '必要的' 意味着需要完成、实现或存在的；需要的；必不可少的。"
    },
    {
        id: 3,
        question: "Her __________ manner made her well-liked among her colleagues, as she never tried to dominate conversations.",
        chinese_question: "她的 __________ 态度使她在同事中很受欢迎，因为她从不试图主导谈话。",
        answers: [
            { option: "A", answer: "domineering", chinese_answer: "专横", chinese_romanization: "zhuānhèng" },
            { option: "B", answer: "unassuming", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "C", answer: "assertive", chinese_answer: "自信", chinese_romanization: "zìxìn" },
            { option: "D", answer: "pushy", chinese_answer: "咄咄逼人", chinese_romanization: "duōduō bīrén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unassuming' means not pretentious or arrogant; modest." +
            "<br><br>" +
            "(A) 'domineering' means asserting one's will over another in an arrogant way." +
            "<br><br>" +
            "(C) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(D) 'pushy' means excessively or unpleasantly self-assertive or ambitious.",
        chinese_explanation: "(B) '谦逊' 意味着不自命不凡或傲慢；谦虚。" +
            "<br><br>" +
            "(A) '专横' 意味着以傲慢的方式将自己的意志强加于他人。" +
            "<br><br>" +
            "(C) '自信' 意味着有或表现出自信和有力的个性。" +
            "<br><br>" +
            "(D) '咄咄逼人' 意味着过分或令人不快的自信或雄心勃勃。"
    },
    {
        id: 4,
    question: "The journalist provided __________ evidence to support her claims, making her report trustworthy and convincing.",
    chinese_question: "这位记者提供了 __________ 的证据来支持她的主张，使她的报道值得信赖且令人信服。",
    answers: [
      { option: "A", answer: "credible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
      { option: "B", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
      { option: "C", answer: "unreliable", chinese_answer: "不可靠的", chinese_romanization: "bù kěkào de" },
      { option: "D", answer: "false", chinese_answer: "错误的", chinese_romanization: "cuòwù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'credible' means able to be believed; convincing." +
      "<br><br>" +
      "(B) 'dubious' means hesitating or doubting." +
      "<br><br>" +
      "(C) 'unreliable' means not able to be relied upon." +
      "<br><br>" +
      "(D) 'false' means not according with truth or fact; incorrect.",
    chinese_explanation: "(A) '可信的' 意味着可以被相信的；令人信服的。" +
      "<br><br>" +
      "(B) '可疑的' 意味着犹豫或怀疑的。" +
      "<br><br>" +
      "(C) '不可靠的' 意味着不能被依赖的。" +
      "<br><br>" +
      "(D) '错误的' 意味着不符合事实的；不正确的。"
    },
    {
        id: 5,
        question: "The __________ nature of youth is something many people only appreciate as they grow older.",
        chinese_question: "青春的 __________ 本质是许多人只有在长大后才会欣赏的东西。",
        answers: [
            { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "B", answer: "timeless", chinese_answer: "永恒的", chinese_romanization: "yǒnghéng de" },
            { option: "C", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" },
            { option: "D", answer: "durable", chinese_answer: "耐用的", chinese_romanization: "nàiyòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fleeting' means lasting for a very short time. Figuratively, it can mean a transient period of life or time." +
            "<br><br>" +
            "(B) 'timeless' means not affected by the passage of time or changes in fashion." +
            "<br><br>" +
            "(C) 'constant' means occurring continuously over a period of time." +
            "<br><br>" +
            "(D) 'durable' means able to withstand wear, pressure, or damage; hard-wearing.",
        chinese_explanation: "(A) '短暂的' 意味着持续时间很短的。比喻地，它可以表示生命或时间的短暂时期。" +
            "<br><br>" +
            "(B) '永恒的' 意味着不受时间流逝或时尚变化影响的。" +
            "<br><br>" +
            "(C) '持续的' 意味着在一段时间内连续发生的。" +
            "<br><br>" +
            "(D) '耐用的' 意味着能够承受磨损、压力或损坏的；耐用的。"
    },
    {
        id: 6,
        question: "Despite her success, she felt __________ with her achievements and sought new challenges.",
        chinese_question: "尽管取得了成功，她对自己的成就仍感到__________，并寻求新的挑战。",
        answers: [
            { option: "A", answer: "pleased", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
            { option: "C", answer: "dissatisfied", chinese_answer: "不满意的", chinese_romanization: "bù mǎnyì de" },
            { option: "D", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dissatisfied' means not content or happy with something." +
                "<br><br>" +
                "(A) 'pleased' means feeling or showing pleasure and satisfaction." +
                "<br><br>" +
                "(B) 'satisfied' means contented; pleased." +
                "<br><br>" +
                "(D) 'content' means in a state of peaceful happiness.",
        chinese_explanation: "(C) '不满意的' 一词意味着对某事不满意或不高兴。" +
                "<br><br>" +
                "(A) '高兴的' 意味着感到或表现出快乐和满足。" +
                "<br><br>" +
                "(B) '满意的' 意味着满意的；高兴的。" +
                "<br><br>" +
                "(D) '满足的' 意味着处于和平的幸福状态。"
    },
    {
        id: 7,
        question: "The team had __________ victories, boosting their confidence for the final match.",
        chinese_question: "球队取得了__________胜利，为决赛增添了信心。",
        answers: [
            { option: "A", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
            { option: "B", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
            { option: "C", answer: "irregular", chinese_answer: "不规律的", chinese_romanization: "bù guīlǜ de" },
            { option: "D", answer: "consecutive", chinese_answer: "连续的", chinese_romanization: "liánxù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'consecutive' means following continuously; in unbroken or logical sequence. Figuratively, it can mean happening one after another without interruption." + 
            "<br><br>" +
            "(A) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated." +
            "<br><br>" +
            "(B) 'random' means made, done, happening, or chosen without method or conscious decision." +
            "<br><br>" +
            "(C) 'irregular' means not even or balanced in shape or arrangement.",
        chinese_explanation: "(D) '连续的'一词意味着连续不断地；按逻辑顺序排列的。比喻地，它可以表示一个接一个地不间断发生的。" + 
            "<br><br>" +
            "(A) '零星的' 意味着不定期或仅在少数地方发生的；分散的。" +
            "<br><br>" +
            "(B) '随机的' 意味着没有方法或有意识决定地进行、发生或选择的。" +
            "<br><br>" +
            "(C) '不规律的' 意味着形状或排列不均匀的。"
    },
    {
        id: 8,
        question: "The designer's __________ new collection received rave reviews for its elegance and sophistication.",
        chinese_question: "设计师的 __________ 新系列因其优雅和精致而获得了好评。",
        answers: [
            { option: "A", answer: "chic", chinese_answer: "时髦的", chinese_romanization: "shímáo de" },
            { option: "B", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "sloppy", chinese_answer: "马虎的", chinese_romanization: "mǎhu de" },
            { option: "D", answer: "gaudy", chinese_answer: "花哨的", chinese_romanization: "huāshào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chic' means elegantly and stylishly fashionable." +
            "<br><br>" +
            "(B) 'outdated' means old-fashioned or obsolete." +
            "<br><br>" +
            "(C) 'sloppy' means careless and unsystematic." +
            "<br><br>" +
            "(D) 'gaudy' means extravagantly bright or showy, typically so as to be tasteless.",
        chinese_explanation: "(A) '时髦的' 意味着优雅和时尚。" +
            "<br><br>" +
            "(B) '过时的' 意味着老式或过时的。" +
            "<br><br>" +
            "(C) '马虎的' 意味着粗心和不系统的。" +
            "<br><br>" +
            "(D) '花哨的' 意味着过分鲜艳或炫耀的，通常是无品味的。"
    },
    {
        id: 9,
        question: "The coach was __________ about his team’s chances in the championship game.",
        chinese_question: "教练对他球队在冠军赛中的机会非常 __________ 。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "B", answer: "doubtful", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "C", answer: "unsure", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "D", answer: "pessimistic", chinese_answer: "悲观", chinese_romanization: "bēiguān" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(B) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(C) 'unsure' means not confident or certain." +
            "<br><br>" +
            "(D) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen.",
        chinese_explanation: "(A) '热情' 意味着表现出强烈和热切的享受、兴趣或认可。" +
            "<br><br>" +
            "(B) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(C) '不确定' 意味着不自信或不确定。" +
            "<br><br>" +
            "(D) '悲观' 意味着倾向于看到事情的最坏方面或相信最坏的事情会发生。"
    },
    {
        id: 10,
        question: "Her argument was __________, considering the subtle differences and complexities of the issue.",
        chinese_question: "她的论点很__________，考虑到了问题的细微差异和复杂性。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dàng de" },
            { option: "C", answer: "nuanced", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
            { option: "D", answer: "clear-cut", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nuanced' means characterized by subtle shades of meaning or expression." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'clear-cut' means sharply defined; easy to perceive or understand.",
        chinese_explanation: "(C) '微妙的'一词意味着以细微的意义或表达为特征的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着不复杂且易于完成或理解的。" +
            "<br><br>" +
            "(D) '清晰的' 意味着清晰定义的；容易察觉或理解的."
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
