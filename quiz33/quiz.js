// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ manners and eloquence made him a favorite at social gatherings.",
        chinese_question: "他__________的举止和口才使他成为社交聚会上的宠儿。",
        answers: [
            { option: "A", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "B", answer: "amateurish", chinese_answer: "业余的", chinese_romanization: "yèyú de" },
            { option: "C", answer: "polished", chinese_answer: "完美的", chinese_romanization: "wánměi de" },
            { option: "D", answer: "unrefined", chinese_answer: "未提炼的", chinese_romanization: "wèi tíliàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'polished' means accomplished and skillful. Figuratively, it can mean being sophisticated and well-mannered." +
            "<br><br>" +
            "(A) 'rough' means having an uneven or irregular surface; not smooth or level." +
            "<br><br>" +
            "(B) 'amateurish' means unskillful or inept." +
            "<br><br>" +
            "(D) 'unrefined' means not elegant or cultured.",
        chinese_explanation: "(C) '完美的'一词意味着完成得很好和熟练的。比喻地，它可以表示精致和有礼貌的。" +
            "<br><br>" +
            "(A) '粗糙的' 意味着表面不平或不规则的；不光滑或不平的。" +
            "<br><br>" +
            "(B) '业余的' 意味着不熟练或笨拙的。" +
            "<br><br>" +
            "(D) '未提炼的' 意味着不优雅或不文化的."
    },
    {
        id: 2,
        question: "Trust is __________ to any healthy relationship, without which it cannot thrive.",
        chinese_question: "信任对任何健康的关系都是 __________ 的，没有它就无法繁荣。",
        answers: [
            { option: "A", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "fundamental", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
            { option: "D", answer: "negligible", chinese_answer: "可忽略的", chinese_romanization: "kě hūlüè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fundamental' means forming a necessary base or core; of central importance." +
            "<br><br>" +
            "(A) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering.",
        chinese_explanation: "(C) '基本的' 意味着形成必要的基础或核心；至关重要的。" +
            "<br><br>" +
            "(A) '无关的' 意味着与某事无关的。" +
            "<br><br>" +
            "(B) '次要的' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(D) '可忽略的' 意味着如此小或不重要以至于不值得考虑的。"
    },
    {
        id: 3,
    question: "The advisor's __________ praise of the leader made it clear he was trying to win favor.",
    chinese_question: "顾问对领导的 __________ 赞美表明他在试图赢得好感。",
    answers: [
        { option: "A", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" },
        { option: "B", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "C", answer: "disinterested", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
        { option: "D", answer: "sycophantic", chinese_answer: "阿谀奉承的", chinese_romanization: "ēyú fèngchéng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'sycophantic' means behaving or done in an obsequious way in order to gain advantage." +
        "<br><br>" +
        "(A) 'critical' means expressing adverse or disapproving comments." +
        "<br><br>" +
        "(B) 'genuine' means truly what something is said to be; authentic." +
        "<br><br>" +
        "(C) 'disinterested' means not influenced by considerations of personal advantage.",
    chinese_explanation: "(D) '阿谀奉承的' 意味着以奉承方式行事或完成，以获取优势。" +
        "<br><br>" +
        "(A) '批评的' 意味着表达不赞成或不满意的评论。" +
        "<br><br>" +
        "(B) '真诚的' 意味着确实是某物所说的那样；真实的。" +
        "<br><br>" +
        "(C) '公正的' 意味着不受个人利益考虑影响的。"
    },
    {
        id: 4,
    question: "The fear she experienced before the presentation was very __________, causing her hands to shake and her voice to quiver.",
    chinese_question: "她在演讲前感受到的恐惧是非常 __________ 的，导致她的手发抖，声音颤抖。",
    answers: [
        { option: "A", answer: "real", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
        { option: "B", answer: "imaginary", chinese_answer: "想象的", chinese_romanization: "xiǎngxiàng de" },
        { option: "C", answer: "exaggerated", chinese_answer: "夸大的", chinese_romanization: "kuādà de" },
        { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'real' means actually existing as a thing or occurring in fact; not imagined or supposed." +
        "<br><br>" +
        "(B) 'imaginary' means existing only in the imagination." +
        "<br><br>" +
        "(C) 'exaggerated' means regarded or represented as larger, better, or worse than in reality." +
        "<br><br>" +
        "(D) 'trivial' means of little value or importance.",
    chinese_explanation: "(A) '真实的' 意味着实际存在的或实际上发生的；不是想象的或假设的。" +
        "<br><br>" +
        "(B) '想象的' 意味着只存在于想象中的。" +
        "<br><br>" +
        "(C) '夸大的' 意味着被视为或表现得比实际更大、更好或更差。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着价值或重要性很小的。"
    },
    {
        id: 5,
        question: "His __________ hospitality made all the guests feel welcomed and comfortable during their stay.",
        chinese_question: "他的 __________ 热情好客使所有客人在逗留期间都感到受欢迎和舒适。",
        answers: [
            { option: "A", answer: "begrudging", chinese_answer: "勉强的", chinese_romanization: "miǎnqiáng de" },
            { option: "B", answer: "reluctant", chinese_answer: "不情愿的", chinese_romanization: "bù qíngyuàn de" },
            { option: "C", answer: "munificent", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "D", answer: "cold", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'munificent' means larger or more generous than is usual or necessary." +
            "<br><br>" +
            "(A) 'begrudging' means given or done reluctantly." +
            "<br><br>" +
            "(B) 'reluctant' means unwilling and hesitant." +
            "<br><br>" +
            "(D) 'cold' means lacking affection or warmth of feeling; unemotional.",
        chinese_explanation: "(C) '慷慨的' 意味着比平常或必要的大或更慷慨的。" +
            "<br><br>" +
            "(A) '勉强的' 意味着不情愿地给予或完成的。" +
            "<br><br>" +
            "(B) '不情愿的' 意味着不愿意和犹豫的。" +
            "<br><br>" +
            "(D) '冷淡的' 意味着缺乏感情或温暖的感觉；无情的。"
    },
    {
        id: 6,
        question: "His __________ smile revealed that he wasn't paying attention to the serious discussion around him.",
        chinese_question: "他那 __________ 的笑容表明他并没有注意周围的严肃讨论。",
        answers: [
            { option: "A", answer: "intelligent", chinese_answer: "聪明的", chinese_romanization: "cōngmíng de" },
            { option: "B", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "C", answer: "perceptive", chinese_answer: "有洞察力的", chinese_romanization: "yǒu dòngchá lì de" },
            { option: "D", answer: "vacuous", chinese_answer: "空洞的", chinese_romanization: "kōngdòng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'vacuous' means having or showing a lack of thought or intelligence; mindless." + 
            "<br><br>" +
            "(A) 'intelligent' means having or showing intelligence, especially of a high level." +
            "<br><br>" +
            "(B) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant." +
            "<br><br>" +
            "(C) 'perceptive' means having or showing sensitive insight.",
        chinese_explanation: "(D) '空洞的' 意味着缺乏思考或智慧的；无意识的。" + 
            "<br><br>" +
            "(A) '聪明的' 意味着有或显示出智慧的，特别是高水平的智慧。" +
            "<br><br>" +
            "(B) '警觉的' 意味着迅速注意到任何不寻常的和潜在危险或困难的情况；警惕的。" +
            "<br><br>" +
            "(C) '有洞察力的' 意味着有或显示出敏锐的见解。"
    },
    {
        id: 7,
        question: "The movie was so __________ that people were quoting funny lines from it for days.",
        chinese_question: "这部电影非常 __________，人们几天来都在引用其中的搞笑台词。",
        answers: [
            { option: "A", answer: "tragic", chinese_answer: "悲惨", chinese_romanization: "bēicǎn" },
            { option: "B", answer: "hilarious", chinese_answer: "滑稽", chinese_romanization: "huájī" },
            { option: "C", answer: "boring", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "D", answer: "somber", chinese_answer: "阴沉", chinese_romanization: "yīnchén" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hilarious' means extremely funny." + 
            "<br><br>" +
            "(A) 'tragic' means causing or characterized by extreme distress or sorrow." +
            "<br><br>" +
            "(C) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(D) 'somber' means dark or dull in color or tone; gloomy.",
        chinese_explanation: "(B) '滑稽' 意味着极其有趣。" + 
            "<br><br>" +
            "(A) '悲惨' 意味着引起或以极度痛苦或悲伤为特征。" +
            "<br><br>" +
            "(C) '无聊' 意味着没有趣味；乏味。" +
            "<br><br>" +
            "(D) '阴沉' 意味着颜色或色调暗淡或阴暗。"
    },
    {
        id: 8,
        question: "The company is __________ to market changes and quickly adapts its strategies.",
        chinese_question: "公司对市场变化非常 __________，并迅速调整其策略。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
            { option: "C", answer: "stubborn", chinese_answer: "顽固的", chinese_romanization: "wángù de" },
            { option: "D", answer: "oblivious", chinese_answer: "无视的", chinese_romanization: "wúshì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something." +
            "<br><br>" +
            "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
        chinese_explanation: "(B) '敏感的' 意味着对轻微的变化、信号或影响反应迅速。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别的兴趣或同情心；不关心的。" +
            "<br><br>" +
            "(C) '顽固的' 意味着表现出顽强决心不改变对某事的态度或立场。" +
            "<br><br>" +
            "(D) '无视的' 意味着没有意识到或不关心周围发生的事情。"
    },
    {
        id: 9,
        question: "The idea was made more __________ to the team with clear explanations.",
        chinese_question: "通过清楚的解释，这个想法变得更加 __________。",
        answers: [
            { option: "A", answer: "palatable", chinese_answer: "可以接受的", chinese_romanization: "kěyǐ jiēshòu de" },
            { option: "B", answer: "confusing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "C", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "complex", chinese_answer: "复杂的", chinese_romanization: "fùzá de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'palatable' metaphorically means acceptable or satisfactory." +
            "<br><br>" +
            "(B) 'confusing' means bewildering or perplexing." +
            "<br><br>" +
            "(C) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(D) 'complex' means consisting of many different and connected parts.",
        chinese_explanation: "(A) '可以接受的' 比喻可以接受或令人满意的。" +
            "<br><br>" +
            "(B) '令人困惑的' 意味着令人困惑或困惑的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着未被发现或已知的；不确定的。" +
            "<br><br>" +
            "(D) '复杂的' 意味着由许多不同和相互连接的部分组成的。"
    },
    {
        id: 10,
        question: "Her __________ personality made her the life of the party, always lifting everyone's spirits with her lively conversation and upbeat energy.",
        chinese_question: "她 __________ 的性格使她成为聚会的灵魂，总是通过她活泼的谈话和积极向上的能量提升每个人的精神。",
        answers: [
            { option: "A", answer: "jaunty", chinese_answer: "轻快的", chinese_romanization: "qīngkuài de" },
            { option: "B", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yùshuì de" },
            { option: "C", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jaunty' means having or expressing a lively, cheerful, and self-confident manner." + 
            "<br><br>" +
            "(B) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(C) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(A) '轻快的' 意味着具有或表达一种活泼、快乐和自信的态度。" + 
            "<br><br>" +
            "(B) '昏昏欲睡的' 意味着受困倦影响的；迟钝和冷漠的。" +
            "<br><br>" +
            "(C) '忧郁的' 意味着黑暗或光线不足的，特别是显得令人沮丧或恐怖的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。"
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
