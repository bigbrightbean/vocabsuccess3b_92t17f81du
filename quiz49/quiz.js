// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "He made a __________ inquiry about the promotion, ensuring not to alert his colleagues to his ambitions.",
    chinese_question: "他对晋升进行了 __________ 的询问，确保不让同事们察觉到他的野心。",
    answers: [
      { option: "A", answer: "discreet", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
      { option: "B", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
      { option: "C", answer: "loud", chinese_answer: "大声的", chinese_romanization: "dàshēng de" },
      { option: "D", answer: "conspicuous", chinese_answer: "引人注目的", chinese_romanization: "yǐnrén zhùmù de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'discreet' means careful and circumspect in one's speech or actions, especially in order to avoid causing offense or to gain an advantage." +
      "<br><br>" +
      "(B) 'obvious' means easily perceived or understood; clear." +
      "<br><br>" +
      "(C) 'loud' means producing or capable of producing much noise." +
      "<br><br>" +
      "(D) 'conspicuous' means standing out so as to be clearly visible.",
    chinese_explanation: "(A) '谨慎的' 意味着在说话或行动上小心谨慎，尤其是为了避免冒犯或获得优势。" +
      "<br><br>" +
      "(B) '明显的' 意味着容易察觉或理解的；清楚的。" +
      "<br><br>" +
      "(C) '大声的' 意味着产生或能够产生大量噪音的。" +
      "<br><br>" +
      "(D) '引人注目的' 意味着明显可见的。"
    },
    {
        id: 2,
        question: "The novel explored the __________ relationships of its characters who frequently engaged in casual sexual encounters, highlighting the consequences of their actions.",
        chinese_question: "这部小说探讨了角色们的 __________ 关系，他们经常参与随意的性接触，突出了他们行为的后果。",
        answers: [
            { option: "A", answer: "selective", chinese_answer: "有选择性的", chinese_romanization: "yǒu xuǎnzé xìng de" },
            { option: "B", answer: "exclusive", chinese_answer: "排他的", chinese_romanization: "páitā de" },
            { option: "C", answer: "promiscuous", chinese_answer: "滥交的", chinese_romanization: "lànjiāo de" },
            { option: "D", answer: "faithful", chinese_answer: "忠诚的", chinese_romanization: "zhōngchéng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'promiscuous' means having or characterized by many transient sexual relationships." +
            "<br><br>" +
            "(A) 'selective' means relating to or involving the selection of the most suitable or best qualified." +
            "<br><br>" +
            "(B) 'exclusive' means excluding or not admitting other things." +
            "<br><br>" +
            "(D) 'faithful' means loyal, constant, and steadfast.",
        chinese_explanation: "(C) '滥交的' 意味着具有或以许多短暂性关系为特征的。" +
            "<br><br>" +
            "(A) '有选择性的' 意味着涉及选择最合适或最有资格的。" +
            "<br><br>" +
            "(B) '排他的' 意味着排除或不允许其他事物的。" +
            "<br><br>" +
            "(D) '忠诚的' 意味着忠诚、坚定和不变的。"
    },
    {
        id: 3,
        question: "Her __________ views on life, like rejecting conventional career paths and embracing minimalism, made her an intriguing person to talk to.",
        chinese_question: "她对生活的__________观点，例如拒绝传统的职业道路和接受极简主义，使她成为一个有趣的谈话对象。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "unorthodox", chinese_answer: "非正统的", chinese_romanization: "fēi zhèngtǒng de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unorthodox' means contrary to what is usual, traditional, or accepted." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'common' means occurring, found, or done often; prevalent.",
        chinese_explanation: "(B) '非正统的' 意味着与通常、传统或被接受的相反的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特殊或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着能够被预测的。" +
            "<br><br>" +
            "(D) '常见的' 意味着经常发生、发现或完成的；普遍的。"
    },
    {
        id: 4,
        question: "As someone who is driven and hardworking, she is __________ to taking on too much work, often leading to burnout.",
        chinese_question: "作为一个有上进心且勤奋的人，她 __________ 接受过多的工作，常常导致精疲力竭。",
        answers: [
            { option: "A", answer: "averse", chinese_answer: "反感的", chinese_romanization: "fǎngǎn de" },
            { option: "B", answer: "prone", chinese_answer: "倾向于", chinese_romanization: "qīngxiàng yú" },
            { option: "C", answer: "reluctant", chinese_answer: "不愿意的", chinese_romanization: "bù yuànyì de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prone' means likely to or liable to suffer from, do, or experience something, typically something regrettable or unwelcome." +
            "<br><br>" +
            "(A) 'averse' means having a strong dislike of or opposition to something." +
            "<br><br>" +
            "(C) 'reluctant' means unwilling and hesitant; disinclined." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(B) '倾向于' 意味着可能或易于遭受、做或经历某事，通常是遗憾的或不受欢迎的事情。" +
            "<br><br>" +
            "(A) '反感的' 意味着对某事物有强烈的厌恶或反对。" +
            "<br><br>" +
            "(C) '不愿意的' 意味着不情愿和犹豫的；不情愿的。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着在行动或讲话时犹豫不决、不确定或缓慢的。"
    },
    {
        id: 5,
    question: "His __________ motives were finally revealed after months of investigation.",
    chinese_question: "经过几个月的调查，他的__________动机终于被揭露了。",
    answers: [
      { option: "A", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
      { option: "B", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
      { option: "C", answer: "covert", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
      { option: "D", answer: "apparent", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'covert' means not openly acknowledged or displayed. Figuratively, it can mean having hidden or secret intentions." +
      "<br><br>" +
      "(A) 'overt' means done or shown openly; plainly apparent." +
      "<br><br>" +
      "(B) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
      "<br><br>" +
      "(D) 'apparent' means clearly visible or understood; obvious.",
    chinese_explanation: "(C) '秘密的' 意味着没有公开承认或展示的。比喻地，它可以表示有隐藏或秘密的意图。" +
      "<br><br>" +
      "(A) '公开的' 意味着公开进行或展示的；显而易见的。" +
      "<br><br>" +
      "(B) '明显的' 意味着容易被感知或理解的；清晰的，自明的或显而易见的。" +
      "<br><br>" +
      "(D) '明显的' 意味着清楚可见的或理解的；明显的。"
    },
    {
        id: 6,
        question: "In ancient times, people would offer __________ animals to their gods during religious ceremonies.",
        chinese_question: "在古代，人们会在宗教仪式上向他们的神献上 __________ 动物。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "sacrificial", chinese_answer: "祭祀的", chinese_romanization: "jìsì de" },
            { option: "C", answer: "decorative", chinese_answer: "装饰的", chinese_romanization: "zhuāngshì de" },
            { option: "D", answer: "ornamental", chinese_answer: "点缀的", chinese_romanization: "diǎnzhuì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sacrificial' means relating to or constituting a sacrifice." +
                "<br><br>" +
                "(A) 'ordinary' means with no special or distinctive features; normal." +
                "<br><br>" +
                "(C) 'decorative' means serving to make something look more attractive; ornamental." +
                "<br><br>" +
                "(D) 'ornamental' means serving or intended as an ornament; decorative.",
        chinese_explanation: "(B) '祭祀的' 一词意味着与祭品有关或构成祭品的。" +
                "<br><br>" +
                "(A) '普通的' 意味着没有特殊或独特的特征；正常的。" +
                "<br><br>" +
                "(C) '装饰的' 意味着用于使某物看起来更具吸引力的；装饰的。" +
                "<br><br>" +
                "(D) '点缀的' 意味着作为或旨在作为装饰品的；装饰的。"
    },
    {
        id: 7,
    question: "The company's __________ technology gave it a competitive edge, as no other firm had access to such advanced systems.",
    chinese_question: "该公司的 __________ 技术使其具有竞争优势，因为没有其他公司能使用如此先进的系统。",
    answers: [
        { option: "A", answer: "proprietary", chinese_answer: "专有的", chinese_romanization: "zhuānyǒu de" },
        { option: "B", answer: "common", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "C", answer: "obsolete", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
        { option: "D", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'proprietary' means relating to an owner or ownership; protected by a trademark or patent." +
        "<br><br>" +
        "(B) 'common' means occurring, found, or done often; prevalent." +
        "<br><br>" +
        "(C) 'obsolete' means no longer produced or used; out of date." +
        "<br><br>" +
        "(D) 'outdated' means old-fashioned or obsolete.",
    chinese_explanation: "(A) '专有的' 意味着与所有者或所有权有关的；受商标或专利保护的。" +
        "<br><br>" +
        "(B) '普通的' 意味着经常发生、发现或完成的；普遍的。" +
        "<br><br>" +
        "(C) '过时的' 意味着不再生产或使用的；过时的。" +
        "<br><br>" +
        "(D) '过时的' 意味着老式的或过时的。"
    },
    {
        id: 8,
        question: "The city streets, usually bustling with activity, took on a quiet, almost eerie quality during their __________ hours.",
        chinese_question: "城市街道通常充满活力，但在 __________ 时刻却显得安静，几乎有些诡异。",
        answers: [
            { option: "A", answer: "diurnal", chinese_answer: "昼行性的", chinese_romanization: "zhòuxíngxìng de" },
            { option: "B", answer: "nocturnal", chinese_answer: "夜行性的", chinese_romanization: "yèxíngxìng de" },
            { option: "C", answer: "daytime", chinese_answer: "白天的", chinese_romanization: "báitiān de" },
            { option: "D", answer: "morning", chinese_answer: "早晨的", chinese_romanization: "zǎochén de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nocturnal' means active at night." +
            "<br><br>" +
            "(A) 'diurnal' means active during the day." +
            "<br><br>" +
            "(C) 'daytime' means the time between sunrise and sunset." +
            "<br><br>" +
            "(D) 'morning' means the early part of the day.",
        chinese_explanation: "(B) '夜行性的' 意味着在夜间活动的。" +
            "<br><br>" +
            "(A) '昼行性的' 意味着在白天活动的。" +
            "<br><br>" +
            "(C) '白天的' 意味着从日出到日落的时间。" +
            "<br><br>" +
            "(D) '早晨的' 意味着一天的早期部分."
    },
    {
        id: 9,
        question: "Despite her glamorous career, she had to deal with many __________ tasks behind the scenes, like organizing paperwork and managing schedules.",
        chinese_question: "尽管她的职业很光鲜亮丽，但她还是要处理很多幕后的 __________ 任务，比如整理文件和安排日程。",
        answers: [
            { option: "A", answer: "extraordinary", chinese_answer: "非凡的", chinese_romanization: "fēifán de" },
            { option: "B", answer: "remarkable", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "C", answer: "exceptional", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "D", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(A) 'extraordinary' means very unusual or remarkable." +
            "<br><br>" +
            "(B) 'remarkable' means worthy of attention; striking." +
            "<br><br>" +
            "(C) 'exceptional' means unusually good; outstanding.",
        chinese_explanation: "(D) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。" +
            "<br><br>" +
            "(A) '非凡的' 意味着非常不寻常或显著的。" +
            "<br><br>" +
            "(B) '显著的' 意味着值得注意的；引人注目的。" +
            "<br><br>" +
            "(C) '杰出的' 意味着异常好的；优秀的。"
    },
    {
        id: 10,
        question: "Always brightening up the mood of those she encountered, her __________ disposition made her a joy to be around.",
        chinese_question: "总是能让遇到的人心情愉快，她 __________ 的性格使她成为一个令人愉快的人。",
        answers: [
            { option: "A", answer: "sunny", chinese_answer: "开朗的", chinese_romanization: "kāilǎng de" },
            { option: "B", answer: "moody", chinese_answer: "喜怒无常的", chinese_romanization: "xǐnù wúcháng de" },
            { option: "C", answer: "irritable", chinese_answer: "易怒的", chinese_romanization: "yìnù de" },
            { option: "D", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sunny' means cheerful and bright." +
            "<br><br>" +
            "(B) 'moody' means given to unpredictable changes of mood, especially sudden bouts of gloominess or sullenness." +
            "<br><br>" +
            "(C) 'irritable' means having or showing a tendency to be easily annoyed or made angry." +
            "<br><br>" +
            "(D) 'gloomy' means feeling distressed or pessimistic.",
        chinese_explanation: "(A) '开朗的' 意味着快乐和明亮的。" +
            "<br><br>" +
            "(B) '喜怒无常的' 意味着情绪变化无常，尤其是突然陷入忧郁或愠怒的。" +
            "<br><br>" +
            "(C) '易怒的' 意味着有或表现出容易生气或愤怒的倾向的。" +
            "<br><br>" +
            "(D) '忧郁的' 意味着感到痛苦或悲观的。"
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
