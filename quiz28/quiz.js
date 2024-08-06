// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The library was __________ with the musty smell of old books, creating a nostalgic and calming atmosphere.",
        chinese_question: "图书馆里 __________ 着旧书的霉味，营造出一种怀旧和平静的氛围。",
        answers: [
            { option: "A", answer: "fresh", chinese_answer: "清新的", chinese_romanization: "qīngxīn de" },
            { option: "B", answer: "sterile", chinese_answer: "无菌的", chinese_romanization: "wújūn de" },
            { option: "C", answer: "unscented", chinese_answer: "无味的", chinese_romanization: "wúwèi de" },
            { option: "D", answer: "redolent", chinese_answer: "芬芳的", chinese_romanization: "fēnfāng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'redolent' means strongly reminiscent or suggestive of something; having a pleasant smell." +
            "<br><br>" +
            "(A) 'fresh' means recently made or obtained; not stale or spoiled." +
            "<br><br>" +
            "(B) 'sterile' means free from bacteria or other living microorganisms; totally clean." +
            "<br><br>" +
            "(C) 'unscented' means having no smell.",
        chinese_explanation: "(D) '芬芳的' 意味着强烈地回忆或暗示某事；有愉快的气味。" +
            "<br><br>" +
            "(A) '清新的' 意味着新近制作或获得的；不陈旧或变质的。" +
            "<br><br>" +
            "(B) '无菌的' 意味着没有细菌或其他生物微生物；完全干净。" +
            "<br><br>" +
            "(C) '无味的' 意味着没有气味的。"
    },
    {
        id: 2,
    question: "Her __________ expression during the meeting suggested she had received some bad news.",
    chinese_question: "她在会议上的 __________ 表情表明她收到了坏消息。",
    answers: [
        { option: "A", answer: "joyful", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
        { option: "B", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
        { option: "C", answer: "radiant", chinese_answer: "容光焕发的", chinese_romanization: "róngguānghuànfā de" },
        { option: "D", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'somber' means serious, gloomy, or depressing." +
        "<br><br>" +
        "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
        "<br><br>" +
        "(C) 'radiant' means sending out light; shining or glowing brightly." +
        "<br><br>" +
        "(D) 'excited' means very enthusiastic and eager.",
    chinese_explanation: "(B) '阴沉的' 意味着严肃、阴郁或压抑的。" +
        "<br><br>" +
        "(A) '高兴的' 意味着感到、表达或引起极大愉悦和幸福的。" +
        "<br><br>" +
        "(C) '容光焕发的' 意味着发出光亮的；明亮或闪亮的。" +
        "<br><br>" +
        "(D) '兴奋的' 意味着非常热情和渴望的。"
    },
    {
        id: 3,
        question: "The __________ village was surrounded by rolling hills and vast farmlands, far from the city’s hustle and bustle.",
        chinese_question: "这个 __________ 的村庄被连绵起伏的山丘和广阔的农田包围，远离城市的喧嚣。",
        answers: [
            { option: "A", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" },
            { option: "B", answer: "industrial", chinese_answer: "工业的", chinese_romanization: "gōngyè de" },
            { option: "C", answer: "metropolitan", chinese_answer: "大都市的", chinese_romanization: "dà dūshì de" },
            { option: "D", answer: "rural", chinese_answer: "乡村的", chinese_romanization: "xiāngcūn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rural' means in, relating to, or characteristic of the countryside rather than the town." +
            "<br><br>" +
            "(A) 'urban' means in, relating to, or characteristic of a city or town." +
            "<br><br>" +
            "(B) 'industrial' means relating to or characterized by industry." +
            "<br><br>" +
            "(C) 'metropolitan' means relating to or denoting a metropolis, often inclusive of its surrounding areas.",
        chinese_explanation: "(D) '乡村的' 意味着在乡村而不是城镇的。" +
            "<br><br>" +
            "(A) '城市的' 意味着在城镇的、与城镇有关的或具有城镇特征的。" +
            "<br><br>" +
            "(B) '工业的' 意味着与工业有关的或以工业为特征的。" +
            "<br><br>" +
            "(C) '大都市的' 意味着与大都市有关的，通常包括其周边地区。"
    },
    {
        id: 4,
        question: "The handshake between the two leaders was __________ of their agreement to work together.",
        chinese_question: "两位领导人之间的握手是他们同意合作的 __________。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "symbolic", chinese_answer: "象征性的", chinese_romanization: "xiàngzhēng xìng de" },
            { option: "C", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "random", chinese_answer: "随意的", chinese_romanization: "suíyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'symbolic' means serving as a symbol." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'random' means made, done, happening, or chosen without method or conscious decision.",
        chinese_explanation: "(B) '象征性的' 意味着作为象征的。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(D) '随意的' 意味着在没有方法或有意识决定的情况下进行的."
    },
    {
        id: 5,
        question: "The __________ prank was not expected from someone of his experience and professionalism.",
        chinese_question: "这个__________恶作剧不应该出现在一个有他这种经验和专业素养的人身上。",
        answers: [
            { option: "A", answer: "mature", chinese_answer: "成熟的", chinese_romanization: "chéngshú de" },
            { option: "B", answer: "adult", chinese_answer: "成人的", chinese_romanization: "chéngrén de" },
            { option: "C", answer: "juvenile", chinese_answer: "幼稚的", chinese_romanization: "yòuzhì de" },
            { option: "D", answer: "sophisticated", chinese_answer: "老练的", chinese_romanization: "lǎoliàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'juvenile' means for or relating to young people; childish or immature. Figuratively, it can mean being immature or silly." +
            "<br><br>" +
            "(A) 'mature' means fully developed physically; full-grown." +
            "<br><br>" +
            "(B) 'adult' means fully grown or developed." +
            "<br><br>" +
            "(D) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture.",
        chinese_explanation: "(C) '幼稚的'一词意味着与年轻人有关的；幼稚的或不成熟的。比喻地，它可以表示不成熟或愚蠢的。" +
            "<br><br>" +
            "(A) '成熟的' 意味着身体上完全发育的；完全成长的。" +
            "<br><br>" +
            "(B) '成人的' 意味着完全成长或发育的。" +
            "<br><br>" +
            "(D) '老练的' 意味着有、透露或来自大量的世俗经验和时尚与文化知识的."
    },
    {
        id: 6,
        question: "The detective faced a __________ dilemma when he had to choose between saving the hostage or capturing the criminal mastermind.",
        chinese_question: "侦探面临一个 __________ 的两难境地，他必须在拯救人质和抓捕犯罪主谋之间做出选择。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
            { option: "C", answer: "fiendish", chinese_answer: "棘手的", chinese_romanization: "jíshǒu de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fiendish' means extremely difficult or complex. Figuratively, it can mean a very challenging or difficult problem." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(C) '棘手的' 意味着极其困难或复杂的。比喻地，它可以表示一个非常具有挑战性或困难的问题。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(B) '无关紧要的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(D) '次要的' 意味着重要性、严重性或意义较小的。"
    },
    {
        id: 7,
    question: "He is a __________ individual, always striving to achieve his goals no matter the obstacles.",
    chinese_question: "他是一个 __________ 的人，总是努力实现他的目标，无论遇到什么障碍。",
    answers: [
        { option: "A", answer: "driven", chinese_answer: "雄心勃勃的", chinese_romanization: "xióngxīn bóbó de" },
        { option: "B", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yùshuì de" },
        { option: "C", answer: "uninspired", chinese_answer: "缺乏热情的", chinese_romanization: "quēfá rèqíng de" },
        { option: "D", answer: "complacent", chinese_answer: "自满的", chinese_romanization: "zìmǎn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'driven' means highly motivated and determined." +
        "<br><br>" +
        "(B) 'lethargic' means sluggish and apathetic." +
        "<br><br>" +
        "(C) 'uninspired' means lacking enthusiasm." +
        "<br><br>" +
        "(D) 'complacent' means self-satisfied and unaware of possible dangers.",
    chinese_explanation: "(A) '雄心勃勃的' 意味着高度积极和坚定的。" +
        "<br><br>" +
        "(B) '昏昏欲睡的' 意味着昏昏沉沉和冷漠的。" +
        "<br><br>" +
        "(C) '缺乏热情的' 意味着缺乏热情的。" +
        "<br><br>" +
        "(D) '自满的' 意味着自满和未意识到可能的危险。"
    },
    {
        id: 8,
    question: "The __________ field of quantum computing promises to revolutionize technology in the coming decades.",
    chinese_question: "量子计算这个 __________ 领域有望在未来几十年内彻底改变技术。",
    answers: [
        { option: "A", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
        { option: "B", answer: "declining", chinese_answer: "下降的", chinese_romanization: "xiàjiàng de" },
        { option: "C", answer: "stagnant", chinese_answer: "停滞的", chinese_romanization: "tíngzhì de" },
        { option: "D", answer: "nascent", chinese_answer: "新兴的", chinese_romanization: "xīnxīng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'nascent' means just coming into existence and beginning to display signs of future potential." +
        "<br><br>" +
        "(A) 'outdated' means no longer produced or used; out of date." +
        "<br><br>" +
        "(B) 'declining' means becoming smaller, fewer, or less; decreasing." +
        "<br><br>" +
        "(C) 'stagnant' means showing no activity; dull and sluggish.",
    chinese_explanation: "(D) '新兴的' 意味着刚刚出现并开始显示未来潜力的。" +
        "<br><br>" +
        "(A) '过时的' 意味着不再生产或使用的；过时的。" +
        "<br><br>" +
        "(B) '下降的' 意味着变得更小、更少或减少的。" +
        "<br><br>" +
        "(C) '停滞的' 意味着没有活动的；迟钝的。"
    },
    {
        id: 9,
        question: "The __________ theme in his artwork is the struggle between light and dark, being evident in almost every piece.",
        chinese_question: "他作品中的 __________ 主题是光与暗的斗争，这在几乎每一件作品中都显而易见。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "dominant", chinese_answer: "主导的", chinese_romanization: "zhǔdǎo de" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "secondary", chinese_answer: "第二位的", chinese_romanization: "dìèr wèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dominant' means having power and influence over others." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(D) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary.",
        chinese_explanation: "(B) '主导的' 意味着对他人有权力和影响力的。" +
            "<br><br>" +
            "(A) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着小到不值得考虑的。" +
            "<br><br>" +
            "(D) '第二位的' 意味着在主要的之后或不如主要的那么重要的。"
    },
    {
        id: 10,
    question: "His __________ faith in the mission inspired everyone around him to have the courage to persevere despite the challenges.",
    chinese_question: "他对任务的 __________ 信念激励了周围的每个人，使他们有勇气克服挑战。",
    answers: [
        { option: "A", answer: "steadfast", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
        { option: "B", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
        { option: "C", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" },
        { option: "D", answer: "tentative", chinese_answer: "暂定的", chinese_romanization: "zàndìng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'steadfast' means resolutely or dutifully firm and unwavering." +
        "<br><br>" +
        "(B) 'doubtful' means feeling uncertain about something." +
        "<br><br>" +
        "(C) 'inconsistent' means not staying the same throughout." +
        "<br><br>" +
        "(D) 'tentative' means not certain or fixed; provisional.",
    chinese_explanation: "(A) '坚定的' 意味着坚定不移地履行职责或坚定不移的。" +
        "<br><br>" +
        "(B) '怀疑的' 意味着对某事感到不确定的。" +
        "<br><br>" +
        "(C) '不一致的' 意味着始终如一的。" +
        "<br><br>" +
        "(D) '暂定的' 意味着不确定的或固定的；临时的。"
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
