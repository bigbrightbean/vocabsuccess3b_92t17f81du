// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ devotion to her work earned her the respect of all her colleagues.",
        chinese_question: "她对工作的__________奉献赢得了所有同事的尊重。",
        answers: [
            { option: "A", answer: "secular", chinese_answer: "世俗的", chinese_romanization: "shìsú de" },
            { option: "B", answer: "irreligious", chinese_answer: "不宗教的", chinese_romanization: "bù zōngjiào de" },
            { option: "C", answer: "pious", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
            { option: "D", answer: "worldly", chinese_answer: "俗世的", chinese_romanization: "súshì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pious' means devoutly religious. Figuratively, it can mean showing great devotion or commitment." +
            "<br><br>" +
            "(A) 'secular' means not connected with religious or spiritual matters." +
            "<br><br>" +
            "(B) 'irreligious' means indifferent or hostile to religion." +
            "<br><br>" +
            "(D) 'worldly' means concerned with material values or ordinary life rather than a spiritual existence.",
        chinese_explanation: "(C) '虔诚的' 一词意味着虔诚的宗教信仰。比喻地，它可以表示对某事表现出极大的奉献或承诺。" +
            "<br><br>" +
            "(A) '世俗的' 意味着与宗教或精神事务无关的。" +
            "<br><br>" +
            "(B) '不宗教的' 意味着对宗教无兴趣或敌对的。" +
            "<br><br>" +
            "(D) '俗世的' 意味着关注物质价值或普通生活而不是精神存在的。"
    },
    {
        id: 2,
        question: "Her __________ conversation style made her popular at social gatherings, where she effortlessly charmed everyone she met.",
        chinese_question: "她 __________ 的谈话风格使她在社交聚会中很受欢迎，她轻松地迷倒了每一个遇到的人。",
        answers: [
            { option: "A", answer: "boorish", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "B", answer: "crude", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "C", answer: "unrefined", chinese_answer: "未经提炼的", chinese_romanization: "wèijīng tíliàn de" },
            { option: "D", answer: "urbane", chinese_answer: "温文尔雅的", chinese_romanization: "wēnwén'ěryǎ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'urbane' means suave, courteous, and refined in manner." +
            "<br><br>" +
            "(A) 'boorish' means rough and bad-mannered; coarse." +
            "<br><br>" +
            "(B) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(C) 'unrefined' means not elegant or cultured.",
        chinese_explanation: "(D) '温文尔雅的' 意味着举止优雅、礼貌和精致。" +
            "<br><br>" +
            "(A) '粗鲁的' 意味着粗鲁和缺乏教养；粗俗的。" +
            "<br><br>" +
            "(B) '粗糙的' 意味着处于自然状态或未加工或精炼的状态。" +
            "<br><br>" +
            "(C) '未经提炼的' 意味着不优雅或不文雅的。"
    },
    {
        id: 3,
        question: "The detective's __________ investigation uncovered all the facts needed to solve the case.",
        chinese_question: "侦探的 __________ 调查揭示了解决案件所需的所有事实。",
        answers: [
            { option: "A", answer: "cursory", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" },
            { option: "B", answer: "incomplete", chinese_answer: "不完整的", chinese_romanization: "bù wánzhěng de" },
            { option: "C", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thorough' means complete with regard to every detail." +
            "<br><br>" +
            "(A) 'cursory' means hasty and therefore not thorough or detailed." +
            "<br><br>" +
            "(B) 'incomplete' means not having all the necessary or appropriate parts." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(C) '彻底的' 意味着在每个细节上都完成的。" +
            "<br><br>" +
            "(A) '草率的' 意味着匆忙的，因此不彻底或不详细的。" +
            "<br><br>" +
            "(B) '不完整的' 意味着没有所有必要或适当的部分。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面的。"
    },
    {
        id: 4,
        question: "Her relief was __________, as she knew more challenges were ahead.",
        chinese_question: "她的解脱是__________的，因为她知道前方还有更多挑战。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "B", answer: "temporary", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "lasting", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "D", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(C) 'lasting' means enduring or able to endure over a long period of time." +
            "<br><br>" +
            "(D) 'stable' means not likely to give way or overturn; firmly fixed.",
        chinese_explanation: "(B) '短暂的' 意味着仅持续有限的时间；非永久的。比喻地，它可以表示短暂或短暂的事物。" +
            "<br><br>" +
            "(A) '永久的' 意味着持久的或打算无限期保持不变的。" +
            "<br><br>" +
            "(C) '持久的' 意味着经得住时间或能够经久不衰的。" +
            "<br><br>" +
            "(D) '稳定的' 意味着不太可能倒塌或翻倒；牢固固定的。"
    },
    {
        id: 5,
        question: "Her __________ nature was evident in the way she volunteered her time and resources to help the community.",
        chinese_question: "她 __________ 的天性体现在她志愿提供时间和资源帮助社区的方式上。",
        answers: [
            { option: "A", answer: "charitable", chinese_answer: "慈善的", chinese_romanization: "císhàn de" },
            { option: "B", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" },
            { option: "D", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'charitable' means relating to the assistance of those in need." + 
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'greedy' means having an intense and selfish desire for something, especially wealth or power." +
            "<br><br>" +
            "(D) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure.",
        chinese_explanation: "(A) '慈善的' 意味着与帮助有需要的人有关的。" + 
            "<br><br>" +
            "(B) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
            "<br><br>" +
            "(C) '贪婪的' 意味着对某物有强烈的和自私的渴望，特别是财富或权力。" +
            "<br><br>" +
            "(D) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。"
    },
    {
        id: 6,
        question: "The country declared itself __________ during the conflict, refusing to support either side.",
        chinese_question: "该国在冲突期间宣布自己 __________，拒绝支持任何一方。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "B", answer: "aggressive", chinese_answer: "咄咄逼人的", chinese_romanization: "duōduō bīrén de" },
            { option: "C", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" },
            { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'neutral' means not supporting or helping either side in a conflict or disagreement; impartial." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(B) 'aggressive' means ready or likely to attack or confront." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(C) '中立的' 意味着不支持或帮助冲突或争执中的任何一方；公正的。" +
            "<br><br>" +
            "(A) '有偏见的' 意味着对某人或某事不公平地偏爱或反对的。" +
            "<br><br>" +
            "(B) '咄咄逼人的' 意味着准备或可能攻击或对抗的。" +
            "<br><br>" +
            "(D) '敌对的' 意味着不友好的；敌对的."
    },
    {
        id: 7,
    question: "Her __________ memory allowed her to retain only the most important information from lectures.",
    chinese_question: "她的__________记忆使她能够只保留讲座中最重要的信息。",
    answers: [
        { option: "A", answer: "indiscriminate", chinese_answer: "不加选择的", chinese_romanization: "bù jiā xuǎnzé de" },
        { option: "B", answer: "selective", chinese_answer: "精选的", chinese_romanization: "jīngxuǎn de" },
        { option: "C", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
        { option: "D", answer: "haphazard", chinese_answer: "杂乱无章的", chinese_romanization: "záluàn wúzhāng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'selective' means relating to or involving the selection of the most suitable or best qualified. Figuratively, it can mean being able to focus on and remember specific, important details." +
        "<br><br>" +
        "(A) 'indiscriminate' means done at random or without careful judgment." +
        "<br><br>" +
        "(C) 'random' means made, done, happening, or chosen without method or conscious decision." +
        "<br><br>" +
        "(D) 'haphazard' means lacking any obvious principle of organization.",
    chinese_explanation: "(B) '精选的'一词意味着与选择最合适或最有资格的相关或涉及的。比喻地，它可以表示能够专注并记住特定、重要的细节。" +
        "<br><br>" +
        "(A) '不加选择的' 意味着随机的或没有仔细判断的。" +
        "<br><br>" +
        "(C) '随机的' 意味着没有方法或有意识决定的。" +
        "<br><br>" +
        "(D) '杂乱无章的' 意味着缺乏任何明显的组织原则的。"
    },
    {
        id: 8,
        question: "The spread of false information on social media has had a __________ effect on public trust, leading to widespread confusion and division.",
        chinese_question: "社交媒体上虚假信息的传播对公众信任产生了 __________ 的影响，导致了广泛的混乱和分裂。",
        answers: [
                { option: "A", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
                { option: "B", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
                { option: "C", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
                { option: "D", answer: "pernicious", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pernicious' means having a harmful effect, especially in a gradual or subtle way." + 
            "<br><br>" + 
            "(A) 'beneficial' means resulting in good; favorable or advantageous." + 
            "<br><br>" + 
            "(B) 'harmless' means not able or likely to cause harm." + 
            "<br><br>" + 
            "(C) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(D) '有害的' 意味着有害的影响，尤其是逐渐或隐蔽地。" +
            "<br><br>" +
            "(A) '有益的' 意味着带来好结果的；有利的或有优势的。" +
            "<br><br>" +
            "(B) '无害的' 意味着不能或不太可能造成伤害的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着太小或不重要而不值得考虑的."
    },
    {
        id: 9,
        question: "The wine is finally __________ enough to be served, having aged for several years.",
        chinese_question: "这款葡萄酒终于 __________ 到可以上桌了，已经陈酿了好几年。",
        answers: [
                { option: "A", answer: "young", chinese_answer: "年轻", chinese_romanization: "niánqīng" },
                { option: "B", answer: "fresh", chinese_answer: "新鲜", chinese_romanization: "xīnxiān" },
                { option: "C", answer: "mature", chinese_answer: "成熟", chinese_romanization: "chéngshú" },
                { option: "D", answer: "raw", chinese_answer: "生的", chinese_romanization: "shēng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mature' means fully developed physically; full-grown." + 
            "<br><br>" + 
            "(A) 'young' means having lived or existed for only a short time." + 
            "<br><br>" + 
            "(B) 'fresh' means recently made or obtained; not canned, frozen, or otherwise preserved." + 
            "<br><br>" + 
            "(D) 'raw' means uncooked.",
        chinese_explanation: "(C) '成熟' 意味着在身体上完全发育；完全长成。" +
            "<br><br>" +
            "(A) '年轻' 意味着只存在或存在很短时间。" +
            "<br><br>" +
            "(B) '新鲜' 意味着最近制作或获得的；未被罐装、冷冻或以其他方式保存。" +
            "<br><br>" +
            "(D) '生的' 意味着未煮过的."
    },
    {
        id: 10,
        question: "The __________ employees voiced their concerns about the new company policy during the meeting.",
        chinese_question: "__________ 的员工在会议期间表达了他们对新公司政策的担忧。",
        answers: [
            { option: "A", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" },
            { option: "B", answer: "disgruntled", chinese_answer: "不满的", chinese_romanization: "bùmǎn de" },
            { option: "C", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" },
            { option: "D", answer: "pleased", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disgruntled' means angry or dissatisfied." +
                "<br><br>" +
                "(A) 'satisfied' means contented; pleased." +
                "<br><br>" +
                "(C) 'content' means in a state of peaceful happiness." +
                "<br><br>" +
                "(D) 'pleased' means feeling or showing pleasure and satisfaction.",
        chinese_explanation: "(B) '不满的' 一词意味着愤怒或不满意的。" +
                "<br><br>" +
                "(A) '满意的' 意味着满意的；愉快的。" +
                "<br><br>" +
                "(C) '满足的' 意味着处于平静的幸福状态。" +
                "<br><br>" +
                "(D) '高兴的' 意味着感到或表现出愉悦和满意的。"
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
