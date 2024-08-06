// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Faced with financial difficulties, the family adopted an __________ approach, cutting back on all non-essential expenses.",
        chinese_question: "面对经济困难，这个家庭采取了 __________ 的做法，削减所有非必要开支。",
        answers: [
            { option: "A", answer: "extravagant", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" },
            { option: "B", answer: "austere", chinese_answer: "简朴", chinese_romanization: "jiǎnpǔ" },
            { option: "C", answer: "opulent", chinese_answer: "富裕", chinese_romanization: "fùyù" },
            { option: "D", answer: "indulgent", chinese_answer: "纵容", chinese_romanization: "zòngróng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'austere' means severe or strict in manner, attitude, or appearance; having no comforts or luxuries; harsh or ascetic." +
            "<br><br>" +
            "(A) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(C) 'opulent' means ostentatiously rich and luxurious or lavish." +
            "<br><br>" +
            "(D) 'indulgent' means having or indicating a tendency to be overly generous to or lenient with someone.",
        chinese_explanation: "(B) '简朴'一词意味着态度或方式的严格或严厉；没有舒适或奢侈；严厉或禁欲。" +
            "<br><br>" +
            "(A) '奢侈' 意味着在花钱或使用资源时缺乏节制。" +
            "<br><br>" +
            "(C) '富裕' 意味着炫耀富有和奢华。" +
            "<br><br>" +
            "(D) '纵容' 意味着有或表示倾向于对某人过于慷慨或宽容。"
    },
    {
        id: 2,
    question: "Her __________ refusal to accept the unfair treatment inspired others to stand up for their rights.",
    chinese_question: "她 __________ 拒绝接受不公平待遇的行为激励了其他人捍卫他们的权利。",
    answers: [
      { option: "A", answer: "defiant", chinese_answer: "挑衅的", chinese_romanization: "tiǎoxìn de" },
      { option: "B", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
      { option: "C", answer: "yielding", chinese_answer: "让步的", chinese_romanization: "ràngbù de" },
      { option: "D", answer: "compliant", chinese_answer: "服从的", chinese_romanization: "fúcóng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'defiant' means showing a disposition to challenge, resist, or fight." +
      "<br><br>" +
      "(B) 'passive' means accepting or allowing what happens without active response or resistance." +
      "<br><br>" +
      "(C) 'yielding' means giving way under pressure; not hard or rigid." +
      "<br><br>" +
      "(D) 'compliant' means inclined to agree with others or obey rules.",
    chinese_explanation: "(A) '挑衅的' 意味着表现出挑战、抵抗或战斗的倾向。" +
      "<br><br>" +
      "(B) '被动的' 意味着接受或允许发生的事情而不主动回应或抵抗的。" +
      "<br><br>" +
      "(C) '让步的' 意味着在压力下让步的；不坚硬的。" +
      "<br><br>" +
      "(D) '服从的' 意味着倾向于同意他人或遵守规则的。"
    },
    {
        id: 3,
        question: "Over __________, you can see the mountains stretching into the horizon.",
        chinese_question: "在__________，你可以看到山脉延伸到地平线。",
        answers: [
            { option: "A", answer: "here", chinese_answer: "这里", chinese_romanization: "zhèlǐ" },
            { option: "B", answer: "yonder", chinese_answer: "那边", chinese_romanization: "nàbiān" },
            { option: "C", answer: "nearby", chinese_answer: "附近", chinese_romanization: "fùjìn" },
            { option: "D", answer: "close", chinese_answer: "近处", chinese_romanization: "jìnchù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'yonder' means at some distance in the direction indicated; over there." +
            "<br><br>" +
            "(A) 'here' means in, at, or to this place or position." +
            "<br><br>" +
            "(C) 'nearby' means not far away; close." +
            "<br><br>" +
            "(D) 'close' means a short distance away or apart in space or time.",
        chinese_explanation: "(B) '那边' 意味着在指示的方向上的某个距离处；在那里。" +
            "<br><br>" +
            "(A) '这里' 意味着在、在或到这个地方或位置。" +
            "<br><br>" +
            "(C) '附近' 意味着不远的；近的。" +
            "<br><br>" +
            "(D) '近处' 意味着在空间或时间上相隔不远或接近。"
    },
    {
        id: 4,
        question: "The __________ expression on her face suggested that she hadn't yet recovered from the bad news.",
        chinese_question: "她脸上的 __________ 表情表明她还没有从坏消息中恢复过来。",
        answers: [
            { option: "A", answer: "radiant", chinese_answer: "容光焕发的", chinese_romanization: "róngguāng huànfā de" },
            { option: "B", answer: "gleeful", chinese_answer: "欢喜的", chinese_romanization: "huānxǐ de" },
            { option: "C", answer: "merry", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "D", answer: "glum", chinese_answer: "闷闷不乐的", chinese_romanization: "mènmènbùlè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'glum' means looking or feeling dejected; morose." +
            "<br><br>" +
            "(A) 'radiant' means sending out light; shining or glowing brightly." +
            "<br><br>" +
            "(B) 'gleeful' means exuberantly or triumphantly joyful." +
            "<br><br>" +
            "(C) 'merry' means cheerful and lively.",
        chinese_explanation: "(D) '闷闷不乐的' 意味着看起来或感觉沮丧；郁郁寡欢的。" +
            "<br><br>" +
            "(A) '容光焕发的' 意味着散发光芒；明亮或发光的。" +
            "<br><br>" +
            "(B) '欢喜的' 意味着欢腾或胜利地快乐的。" +
            "<br><br>" +
            "(C) '快乐的' 意味着快乐和活泼的。"
    },
    {
        id: 5,
        question: "The proposal was __________ to all parties involved, leading to a quick agreement.",
        chinese_question: "这个提议对所有参与方都是 __________ 的，导致了迅速达成协议。",
        answers: [
                { option: "A", answer: "unacceptable", chinese_answer: "不可接受的", chinese_romanization: "bù kě jiēshòu de" },
                { option: "B", answer: "palatable", chinese_answer: "可接受的", chinese_romanization: "kě jiēshòu de" },
                { option: "C", answer: "disagreeable", chinese_answer: "令人不快的", chinese_romanization: "lìng rén bù kuài de" },
                { option: "D", answer: "unappealing", chinese_answer: "没有吸引力的", chinese_romanization: "méiyǒu xīyǐnlì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'palatable' means acceptable or satisfactory." + 
            "<br><br>" + 
            "(A) 'unacceptable' means not satisfactory or allowable." + 
            "<br><br>" + 
            "(C) 'disagreeable' means not pleasant or enjoyable." + 
            "<br><br>" + 
            "(D) 'unappealing' means not inviting or attractive; unappealing.",
        chinese_explanation: "(B) '可接受的' 意味着可以接受的或令人满意的。" +
            "<br><br>" +
            "(A) '不可接受的' 意味着不令人满意或不允许的。" +
            "<br><br>" +
            "(C) '令人不快的' 意味着不愉快或不享受的。" +
            "<br><br>" +
            "(D) '没有吸引力的' 意味着不诱人或不吸引人的；不吸引人的."
    },
    {
        id: 6,
        question: "The old photographs brought a sense of __________, reminding her of times long gone.",
        chinese_question: "那些旧照片带来了一种 __________ 的感觉，让她想起了早已逝去的时光。",
        answers: [
                { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
                { option: "B", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
                { option: "C", answer: "melancholy", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
                { option: "D", answer: "happiness", chinese_answer: "幸福", chinese_romanization: "xìngfú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'melancholy' means a feeling of pensive sadness, typically with no obvious cause." + 
            "<br><br>" + 
            "(A) 'excitement' means a feeling of great enthusiasm and eagerness." + 
            "<br><br>" + 
            "(B) 'joy' means a feeling of great pleasure and happiness." + 
            "<br><br>" + 
            "(D) 'happiness' means the state of being happy.",
        chinese_explanation: "(C) '忧郁' 意味着一种沉思的悲伤感，通常没有明显的原因。" +
            "<br><br>" +
            "(A) '兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(B) '快乐' 意味着极大的快乐和幸福的感觉。" +
            "<br><br>" +
            "(D) '幸福' 意味着快乐的状态."
    },
    {
        id: 7,
        question: "He was __________ by the constant demands of his career and longed for a simpler life.",
        chinese_question: "他被职业的不断要求弄得__________，渴望简单的生活。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "C", answer: "jaded", chinese_answer: "厌倦的", chinese_romanization: "yànjuàn de" },
            { option: "D", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jaded' means tired, bored, or lacking enthusiasm, typically after having had too much of something. Figuratively, it can mean feeling overworked and disillusioned." + 
            "<br><br>" +
            "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'excited' means very enthusiastic and eager.",
        chinese_explanation: "(C) '厌倦的'一词意味着疲倦、无聊或缺乏热情，通常是在对某事物过多之后。比喻地，它可以表示感到过度劳累和幻灭的。" + 
            "<br><br>" +
            "(A) '热情的' 意味着有或表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(B) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(D) '兴奋的' 意味着非常热情和热切的。"
    },
    {
        id: 8,
        question: "She was __________ about sharing personal information online, understanding the risks involved.",
        chinese_question: "她对在网上分享个人信息非常 __________，因为她了解其中的风险。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'naive' means showing a lack of experience, wisdom, or judgment.",
        chinese_explanation: "(A) '谨慎的' 意味着小心避免潜在的问题或危险。" +
            "<br><br>" +
            "(B) '鲁莽的' 意味着不考虑或不在乎行动的后果。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '天真的' 意味着缺乏经验、智慧或判断力的。"
    },
    {
        id: 9,
        question: "The decision had __________ consequences that could not be undone.",
        chinese_question: "这个决定有 __________ 的后果，是无法挽回的。",
        answers: [
            { option: "A", answer: "reversible", chinese_answer: "可逆的", chinese_romanization: "kěnì de" },
            { option: "B", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "C", answer: "transient", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "D", answer: "provisional", chinese_answer: "临时的", chinese_romanization: "línshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(A) 'reversible' means able to be turned the other way around." +
            "<br><br>" +
            "(C) 'transient' means lasting only for a short time; impermanent." +
            "<br><br>" +
            "(D) 'provisional' means arranged or existing for the present, possibly to be changed later.",
        chinese_explanation: "(B) '永久的' 意味着无限期地持续或打算持续或保持不变的。" +
            "<br><br>" +
            "(A) '可逆的' 意味着能够转向另一方的。" +
            "<br><br>" +
            "(C) '短暂的' 意味着只持续短时间的；不永久的。" +
            "<br><br>" +
            "(D) '临时的' 意味着为现在安排或存在的，可能会在以后更改的."
    },
    {
        id: 10,
        question: "The __________ look in her eyes told us all we needed to know about how much she missed him.",
        chinese_question: "她眼中的 __________ 神情告诉了我们她有多想念他。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "B", answer: "joyful", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" },
            { option: "C", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
            { option: "D", answer: "mournful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mournful' means feeling, expressing, or inducing sadness, regret, or grief." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(C) 'excited' means very enthusiastic and eager.",
        chinese_explanation: "(D) '悲伤的' 意味着感到、表达或引起悲伤、遗憾或悲痛的。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '欢乐的' 意味着感到、表达或引起极大的快乐和幸福的。" +
            "<br><br>" +
            "(C) '兴奋的' 意味着非常热情和渴望的."
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
