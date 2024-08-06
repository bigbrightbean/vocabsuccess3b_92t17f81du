// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The tutorial videos were created to __________ users in understanding the new features of the app, like providing step-by-step instructions and helpful tips.",
        chinese_question: "这些教程视频是为了 __________ 用户理解应用的新功能而创建的，比如提供逐步指示和有用的提示。",
        answers: [
            { option: "A", answer: "mislead", chinese_answer: "误导", chinese_romanization: "wùdǎo" },
            { option: "B", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" },
            { option: "C", answer: "overwhelm", chinese_answer: "压倒", chinese_romanization: "yādǎo" },
            { option: "D", answer: "confuse", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'assist' means to help someone by doing a share of the work." +
            "<br><br>" +
            "(A) 'mislead' means to cause someone to have a wrong idea or impression." +
            "<br><br>" +
            "(C) 'overwhelm' means to bury or drown beneath a huge mass." +
            "<br><br>" +
            "(D) 'confuse' means to make someone bewildered or perplexed.",
        chinese_explanation: "(B) '协助' 意味着通过分担工作来帮助某人。" +
            "<br><br>" +
            "(A) '误导' 意味着使某人产生错误的想法或印象。" +
            "<br><br>" +
            "(C) '压倒' 意味着被巨大质量掩埋或淹没。" +
            "<br><br>" +
            "(D) '使困惑' 意味着使某人困惑或迷惑。"
    },
    {
        id: 2,
        question: "To __________ their strategy, the marketers analyzed data from various sources, such as comparing customer feedback, sales trends, and market research.",
        chinese_question: "为了 __________ 他们的策略，营销人员分析了来自各种来源的数据，比如比较客户反馈、销售趋势和市场研究。",
        answers: [
            { option: "A", answer: "triangulate", chinese_answer: "三角测量", chinese_romanization: "sānjiǎo cèliáng" },
            { option: "B", answer: "dismiss", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
            { option: "C", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "D", answer: "obscure", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'triangulate' means to determine something by using multiple points of reference." +
            "<br><br>" +
            "(B) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(C) 'guess' means to estimate or suppose (something) without sufficient information." +
            "<br><br>" +
            "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(A) '三角测量' 意味着通过使用多个参考点来确定某事。" +
            "<br><br>" +
            "(B) '解雇' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(C) '猜测' 意味着在没有足够信息的情况下估计或假设（某事）。" +
            "<br><br>" +
            "(D) '隐藏' 意味着不让被看到；隐藏。"
    },
    {
        id: 3,
        question: "To finish his novel, the writer chose to __________ himself in a remote cabin, avoiding all distractions and focusing solely on his work.",
        chinese_question: "为了完成他的小说，作家选择 __________ 在一个偏远的小屋里，避开所有干扰，专注于他的工作。",
        answers: [
            { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "explore", chinese_answer: "探索", chinese_romanization: "tànsuǒ" },
            { option: "D", answer: "cloister", chinese_answer: "隐居", chinese_romanization: "yǐnjū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cloister' means to seclude or shut away, especially in a convent or monastery, used figuratively here." +
            "<br><br>" +
            "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'explore' means to travel in or through an unfamiliar area in order to learn about it.",
        chinese_explanation: "(D) '隐居' 意味着隔离或关闭，尤其是在修道院中，这里是比喻用法。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '探索' 意味着为了了解某个不熟悉的区域而在其中旅行。"
    },
    {
        id: 4,
        question: "To make the lesson more engaging, the teacher would __________ her voice, such as raising and lowering the pitch, to emphasize key points and keep the students' attention.",
        chinese_question: "为了让课程更有趣，老师会 __________ 她的声音，比如抬高和降低音调，以强调重点，并保持学生的注意力。",
        answers: [
                { option: "A", answer: "inflect", chinese_answer: "改变", chinese_romanization: "gǎibiàn" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inflect' means to change the pitch or tone of the voice." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'support' means to give assistance to." +
                "<br><br>" +
                "(D) 'praise' means to express warm approval or admiration.",
        chinese_explanation: "(A) '改变' 意味着改变声音的音高或音调。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '赞美' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 5,
        question: "The therapist used various techniques to __________ the patient's anxiety, allowing the patient to feel more at ease and relaxed.",
        chinese_question: "治疗师使用各种技术来 __________ 病人的焦虑，使病人感到更加轻松和放松。",
        answers: [
            { option: "A", answer: "intensify", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "B", answer: "palliate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "exacerbate", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'palliate' means to make less severe or unpleasant without removing the cause." +
            "<br><br>" +
            "(A) 'intensify' means to become or make more intense." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
        chinese_explanation: "(B) '缓解'一词意味着在不消除原因的情况下减轻严重性或不愉快。" +
            "<br><br>" +
            "(A) '加剧' 意味着变得或使更强烈。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '恶化' 意味着使问题、糟糕的情况或负面情绪变得更糟。"
    },
    {
        id: 6,
        question: "The comedian’s routine was designed to __________ popular culture by imitating and exaggerating its flaws, making the audience laugh at its absurdities.",
        chinese_question: "这位喜剧演员的表演旨在通过模仿和夸大其缺点来 __________ 流行文化，让观众笑其荒谬之处。",
      answers: [
        { option: "A", answer: "lampoon", chinese_answer: "讽刺", chinese_romanization: "fěngcì" },
        { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
      ],
      correctAnswer: "A",
      explanation: "(A) 'lampoon' means to publicly criticize (someone or something) by using ridicule, irony, or sarcasm." +
        "<br><br>" +
        "(B) 'praise' means to express warm approval or admiration of." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'support' means to give assistance to.",
      chinese_explanation: "(A) '讽刺' 意味着通过使用嘲讽、讽刺或讽刺来公开批评（某人或某事）。" +
        "<br><br>" +
        "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 7,
        question: "Every year, the college students would __________, gathering at bars and parties, to celebrate the end of exams.",
        chinese_question: "每年，大学生们都会 __________，在酒吧和派对上聚会，庆祝考试结束。",
        answers: [
                { option: "A", answer: "study", chinese_answer: "学习", chinese_romanization: "xuéxí" },
                { option: "B", answer: "carouse", chinese_answer: "狂欢", chinese_romanization: "kuánghuān" },
                { option: "C", answer: "sleep", chinese_answer: "睡觉", chinese_romanization: "shuìjiào" },
                { option: "D", answer: "exercise", chinese_answer: "锻炼", chinese_romanization: "duànliàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'carouse' means to drink plentiful amounts of alcohol and enjoy oneself with others in a noisy, lively way." +
            "<br><br>" +
            "(A) 'study' means to devote time and attention to acquiring knowledge on an academic subject." +
            "<br><br>" +
            "(C) 'sleep' means to rest by sleeping." +
            "<br><br>" +
            "(D) 'exercise' means to engage in physical activity to sustain or improve health and fitness.",
        chinese_explanation: "(B) '狂欢'一词意味着与他人一起大量饮酒和享受喧闹、热闹的方式。" +
            "<br><br>" +
            "(A) '学习' 意味着花时间和精力在学术科目上获取知识。" +
            "<br><br>" +
            "(C) '睡觉' 意味着通过睡眠来休息。" +
            "<br><br>" +
            "(D) '锻炼' 意味着进行体育活动以维持或改善健康和体能。"
    },
    {
        id: 8,
        question: "The speech __________ the struggles of the working class during the economic downturn, lamenting their financial hardships and lack of support.",
        chinese_question: "演讲 __________ 经济衰退期间工人阶级的挣扎，哀叹他们的财务困难和缺乏支持。",
        answers: [
        { option: "A", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "bemoaned", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
        { option: "D", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bemoaned' means to express sorrow or regret over something." +
            "<br><br>" +
            "(A) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(B) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'praised' means to express warm approval or admiration.",
        chinese_explanation: "(C) '哀叹' 意味着对某事表示悲伤或遗憾。" +
            "<br><br>" +
            "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '赞美' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 9,
    question: "Years of deceit had __________ their trust in each other, leaving the relationship strained.",
    chinese_question: "多年的欺骗 __________ 了他们彼此之间的信任，使关系紧张。",
    answers: [
        { option: "A", answer: "built", chinese_answer: "建立", chinese_romanization: "jiànlì" },
        { option: "B", answer: "strengthened", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
        { option: "C", answer: "ignored", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "corroded", chinese_answer: "腐蚀", chinese_romanization: "fǔshí" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'corroded' means gradually destroyed or weakened." +
        "<br><br>" +
        "(A) 'built' means constructed or formed by putting parts together." +
        "<br><br>" +
        "(B) 'strengthened' means made stronger." +
        "<br><br>" +
        "(C) 'ignored' means refused to acknowledge.",
    chinese_explanation: "(D) '腐蚀' 意味着逐渐被破坏或削弱。" +
        "<br><br>" +
        "(A) '建立' 意味着通过将各部分组合在一起构成或形成。" +
        "<br><br>" +
        "(B) '加强' 意味着变得更强。" +
        "<br><br>" +
        "(C) '忽略' 意味着拒绝承认。"
    },
    {
        id: 10,
        question: "The book aims to __________ the many fallacies about historical events by providing well-researched evidence and logical analysis.",
        chinese_question: "这本书旨在通过提供充分研究的证据和逻辑分析来 __________ 关于历史事件的许多谬论。",
        answers: [
                { option: "A", answer: "perpetuate", chinese_answer: "延续", chinese_romanization: "yánxù" },
                { option: "B", answer: "debunk", chinese_answer: "揭穿", chinese_romanization: "jiēchuān" },
                { option: "C", answer: "uphold", chinese_answer: "维护", chinese_romanization: "wéihù" },
                { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'debunk' means to expose the falseness or hollowness of a myth, idea, or belief." +
            "<br><br>" +
            "(A) 'perpetuate' means to make something continue indefinitely." +
            "<br><br>" +
            "(C) 'uphold' means to maintain or support in the face of possible opposition." +
            "<br><br>" +
            "(D) 'disregard' means to pay no attention to; ignore.",
        chinese_explanation: "(B) '揭穿' 意味着揭露神话、想法或信仰的虚假性或空洞性。" +
            "<br><br>" +
            "(A) '延续' 意味着使某事物无限期地继续。" +
            "<br><br>" +
            "(C) '维护' 意味着在可能的反对面前维持或支持。" +
            "<br><br>" +
            "(D) '忽视' 意味着不注意；忽略。"
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
