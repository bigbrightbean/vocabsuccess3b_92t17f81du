// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His lengthy explanation was __________ since we already understood the main point.",
    chinese_question: "他的长篇解释是 __________ 的，因为我们已经理解了要点。",
    answers: [
        { option: "A", answer: "necessary", chinese_answer: "必要的", chinese_romanization: "bìyào de" },
        { option: "B", answer: "redundant", chinese_answer: "多余的", chinese_romanization: "duōyú de" },
        { option: "C", answer: "helpful", chinese_answer: "有帮助的", chinese_romanization: "yǒu bāngzhù de" },
        { option: "D", answer: "informative", chinese_answer: "信息丰富的", chinese_romanization: "xìnxī fēngfù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'redundant' means not or no longer needed or useful; superfluous." +
        "<br><br>" +
        "(A) 'necessary' means required to be done, achieved, or present; needed." +
        "<br><br>" +
        "(C) 'helpful' means giving or ready to give help." +
        "<br><br>" +
        "(D) 'informative' means providing useful or interesting information.",
    chinese_explanation: "(B) '多余的' 意味着不或不再需要或有用的；多余的。" +
        "<br><br>" +
        "(A) '必要的' 意味着需要完成、实现或存在的；需要的。" +
        "<br><br>" +
        "(C) '有帮助的' 意味着给予或准备给予帮助的。" +
        "<br><br>" +
        "(D) '信息丰富的' 意味着提供有用或有趣的信息的。"
    },
    {
        id: 2,
        question: "Her __________ bursts of creativity always brought fresh ideas to the project.",
        chinese_question: "她的__________创意爆发总是为项目带来新想法。",
        answers: [
                { option: "A", answer: "frequent", chinese_answer: "频繁的", chinese_romanization: "pínfán de" },
                { option: "B", answer: "regular", chinese_answer: "定期的", chinese_romanization: "dìngqī de" },
                { option: "C", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
                { option: "D", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'occasional' means occurring, appearing, or done infrequently and irregularly. Figuratively, it can mean happening from time to time but not frequently." + 
            "<br><br>" + 
            "(A) 'frequent' means occurring or done on many occasions, in many cases, or in quick succession." + 
            "<br><br>" + 
            "(B) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances." + 
            "<br><br>" + 
            "(D) 'constant' means occurring continuously over a period of time.",
        chinese_explanation: "(C) '偶尔的'一词意味着不频繁和不规则地发生、出现或完成的。比喻地，它可以表示时不时发生但不频繁的。" +
            "<br><br>" +
            "(A) '频繁的' 意味着在许多场合、许多情况下或连续迅速发生的。" +
            "<br><br>" +
            "(B) '定期的' 意味着安排成或构成一个恒定或明确的模式，尤其是在各个实例之间有相同的间距。" +
            "<br><br>" +
            "(D) '持续的' 意味着在一段时间内持续发生的."
    },
    {
        id: 3,
        question: "Being __________ of her tone, she spoke gently to ensure her words were comforting to her friend.",
        chinese_question: "注意到她的语气，她温柔地说话，确保她的话语对朋友是安慰的。",
        answers: [
                { option: "A", answer: "mindful", chinese_answer: "留意的", chinese_romanization: "liúyì de" },
                { option: "B", answer: "thoughtless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
                { option: "C", answer: "harsh", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
                { option: "D", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mindful' means conscious or aware of something." + 
            "<br><br>" + 
            "(B) 'thoughtless' means without consideration for others." + 
            "<br><br>" + 
            "(C) 'harsh' means unpleasantly rough or jarring to the senses." + 
            "<br><br>" + 
            "(D) 'rude' means offensively impolite or ill-mannered.",
        chinese_explanation: "(A) '留意的' 意味着意识到或注意到某事。" +
            "<br><br>" +
            "(B) '粗心的' 意味着没有考虑他人的。" +
            "<br><br>" +
            "(C) '刺耳的' 意味着对感官有不愉快的粗糙或刺耳的。" +
            "<br><br>" +
            "(D) '粗鲁的' 意味着冒犯性的不礼貌或无礼的."
    },
    {
        id: 4,
            question: "His __________ response to constructive criticism made it difficult for others to work with him.",
            chinese_question: "他对建设性批评的 __________ 反应使得别人很难与他共事。",
            answers: [
                { option: "A", answer: "receptive", chinese_answer: "接受的", chinese_romanization: "jiēshòu de" },
                { option: "B", answer: "open-minded", chinese_answer: "思想开放的", chinese_romanization: "sīxiǎng kāifàng de" },
                { option: "C", answer: "understanding", chinese_answer: "理解的", chinese_romanization: "lǐjiě de" },
                { option: "D", answer: "petulant", chinese_answer: "任性的", chinese_romanization: "rènxìng de" }
            ],
            correctAnswer: "D",
            explanation: "(D) 'petulant' means childishly sulky or bad-tempered." + 
                "<br><br>" + 
                "(A) 'receptive' means willing to consider or accept new suggestions and ideas." + 
                "<br><br>" + 
                "(B) 'open-minded' means willing to consider new ideas; unprejudiced." + 
                "<br><br>" + 
                "(C) 'understanding' means sympathetically aware of other people's feelings; tolerant and forgiving.",
            chinese_explanation: "(D) '任性的' 意味着孩子气地愠怒或脾气暴躁的。" +
                "<br><br>" +
                "(A) '接受的' 意味着愿意考虑或接受新的建议和想法的。" +
                "<br><br>" +
                "(B) '思想开放的' 意味着愿意考虑新的想法；没有偏见的。" +
                "<br><br>" +
                "(C) '理解的' 意味着同情地意识到他人的感受；宽容和宽恕的."
    },
    {
        id: 5,
        question: "His __________ handwriting made it difficult for others to read his notes, with uneven and sharp letters scattered across the page.",
        chinese_question: "他的 __________ 字迹使别人难以阅读他的笔记，页面上散布着不均匀和尖锐的字母。",
        answers: [
            { option: "A", answer: "jagged", chinese_answer: "锯齿状的", chinese_romanization: "jùchǐ zhuàng de" },
            { option: "B", answer: "legible", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "neat", chinese_answer: "整洁的", chinese_romanization: "zhěngjié de" },
            { option: "D", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jagged' means having rough, sharp points protruding." + 
            "<br><br>" +
            "(B) 'legible' means clear enough to read." +
            "<br><br>" +
            "(C) 'neat' means arranged in an orderly, tidy way." +
            "<br><br>" +
            "(D) 'elegant' means pleasingly graceful and stylish in appearance or manner.",
        chinese_explanation: "(A) '锯齿状的' 意味着有粗糙、锋利的突起点。" + 
            "<br><br>" +
            "(B) '清晰的' 意味着足够清晰可以阅读的。" +
            "<br><br>" +
            "(C) '整洁的' 意味着以有序、整齐的方式排列的。" +
            "<br><br>" +
            "(D) '优雅的' 意味着在外观或举止上令人愉悦地优美和时尚的。"
    },
    {
        id: 6,
    question: "The team's __________ effort to win the championship paid off, as they played with unwavering focus and determination.",
    chinese_question: "团队赢得冠军的 __________ 努力得到了回报，他们以坚定不移的专注和决心进行比赛。",
    answers: [
        { option: "A", answer: "resolute", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
        { option: "B", answer: "lackluster", chinese_answer: "无生气的", chinese_romanization: "wú shēngqì de" },
        { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'resolute' means admirably purposeful, determined, and unwavering." +
        "<br><br>" +
        "(B) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring." +
        "<br><br>" +
        "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '坚定的' 意味着令人钦佩的有目的性、决心和不动摇。" +
        "<br><br>" +
        "(B) '无生气的' 意味着缺乏活力、力量或信念的；无创意的或缺乏灵感的。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别的兴趣或同情；冷漠的。"
    },
    {
        id: 7,
        question: "In a __________ move, the politician outmaneuvered his opponents and secured the nomination.",
        chinese_question: "在一次 __________ 的行动中，这位政治家巧妙地胜过对手，赢得了提名。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "wily", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" },
            { option: "C", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "D", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'wily' means skilled at gaining an advantage, especially deceitfully." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or handling things." +
            "<br><br>" +
            "(C) 'honest' means free of deceit and untruthfulness; sincere." +
            "<br><br>" +
            "(D) 'transparent' means easy to perceive or detect.",
        chinese_explanation: "(B) '狡猾的' 意味着擅长获得优势，尤其是通过欺骗手段。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着在动作或处理事情上笨拙的。" +
            "<br><br>" +
            "(C) '诚实的' 意味着没有欺骗和不诚实；真诚的。" +
            "<br><br>" +
            "(D) '透明的' 意味着容易感知或检测的。"
    },
    {
        id: 8,
        question: "Her __________ support for her friend's business venture never wavered, even when things looked bleak.",
        chinese_question: "她对朋友创业的 __________ 支持从未动摇，即使在情况看起来很暗淡的时候也是如此。",
        answers: [
            { option: "A", answer: "conditional", chinese_answer: "有条件的", chinese_romanization: "yǒu tiáojiàn de" },
            { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "half-hearted", chinese_answer: "半心半意的", chinese_romanization: "bànxīn bànyì de" },
            { option: "D", answer: "unconditional", chinese_answer: "无条件的", chinese_romanization: "wú tiáojiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unconditional' means not subject to any conditions." +
            "<br><br>" +
            "(A) 'conditional' means subject to one or more conditions or requirements being met." +
            "<br><br>" +
            "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(C) 'half-hearted' means without enthusiasm or energy.",
        chinese_explanation: "(D) '无条件的' 意味着不受任何条件限制的。" +
            "<br><br>" +
            "(A) '有条件的' 意味着受一个或多个条件或要求的约束。" +
            "<br><br>" +
            "(B) '短暂的' 意味着持续时间很短。" +
            "<br><br>" +
            "(C) '半心半意的' 意味着没有热情或活力。"
    },
    {
        id: 9,
        question: "His __________ banter made him the life of the party, with everyone enjoying his clever jokes.",
        chinese_question: "他的 __________ 玩笑让他成为派对的灵魂，所有人都喜欢他聪明的笑话。",
        answers: [
            { option: "A", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "B", answer: "witty", chinese_answer: "机智的", chinese_romanization: "jīzhì de" },
            { option: "C", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
            { option: "D", answer: "tedious", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'witty' means showing or characterized by quick and inventive verbal humor." +
            "<br><br>" +
            "(A) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(C) 'awkward' means causing or feeling embarrassment or inconvenience." +
            "<br><br>" +
            "(D) 'tedious' means too long, slow, or dull; tiresome or monotonous.",
        chinese_explanation: "(B) '机智的' 意味着表现出或以快速和富有创造力的口头幽默为特征。" +
            "<br><br>" +
            "(A) '单调的' 意味着沉闷、乏味和重复；缺乏变化和兴趣。" +
            "<br><br>" +
            "(C) '尴尬的' 意味着引起或感到尴尬或不便。" +
            "<br><br>" +
            "(D) '乏味的' 意味着太长、太慢或沉闷；令人厌倦或单调的。"
    },
    {
        id: 10,
        question: "Her __________ remarks during the meeting left everyone in shock, as they were filled with bitterness and hostility.",
        chinese_question: "她在会议上的 __________ 言论让所有人震惊，因为那些言论充满了苦涩和敌意。",
        answers: [
            { option: "A", answer: "hideous", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
            { option: "B", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "flattering", chinese_answer: "奉承的", chinese_romanization: "fèngchéng de" },
            { option: "D", answer: "kind", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hideous' means extremely ugly or unpleasant." + 
            "<br><br>" +
            "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'flattering' means full of praise and compliments." +
            "<br><br>" +
            "(D) 'kind' means having or showing a friendly, generous, and considerate nature.",
        chinese_explanation: "(A) '可怕的' 意味着极其丑陋或令人不快的。" + 
            "<br><br>" +
            "(B) '愉快的' 意味着给予一种幸福的满足或享受。" +
            "<br><br>" +
            "(C) '奉承的' 意味着充满赞美和恭维的。" +
            "<br><br>" +
            "(D) '友善的' 意味着拥有或表现出友好、慷慨和体贴的性格。"
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
