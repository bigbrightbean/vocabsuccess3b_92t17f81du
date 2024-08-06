// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The comedian's __________ jokes often pushed boundaries, making some people laugh while others found them offensive.",
        chinese_question: "这位喜剧演员的 __________ 笑话经常挑战底线，有些人觉得好笑，而另一些人则觉得冒犯。",
        answers: [
            { option: "A", answer: "irreverent", chinese_answer: "不敬的", chinese_romanization: "bùjìng de" },
            { option: "B", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "C", answer: "solemn", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "D", answer: "reverent", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'irreverent' means showing a lack of respect for people or things that are generally taken seriously." + 
            "<br><br>" +
            "(B) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'solemn' means formal and dignified; serious." +
            "<br><br>" +
            "(D) 'reverent' means feeling or showing deep and solemn respect.",
        chinese_explanation: "(A) '不敬的' 意味着对人或事物表现出缺乏应有的尊重，这些人或事物通常被认为是严肃的。" + 
            "<br><br>" +
            "(B) '尊重的' 意味着感到或表现出敬意的。" +
            "<br><br>" +
            "(C) '严肃的' 意味着正式和庄重的；严肃的。" +
            "<br><br>" +
            "(D) '虔诚的' 意味着感到或表现出深深的和庄重的敬意。"
    },
    {
        id: 2,
        question: "His __________ record as a lawyer made him the top choice for the high-profile case.",
        chinese_question: "他作为律师的 __________ 记录使他成为备受瞩目的案件的首选。",
        answers: [
            { option: "A", answer: "flawed", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" },
            { option: "B", answer: "impeccable", chinese_answer: "无可挑剔", chinese_romanization: "wú kě tiāotì" },
            { option: "C", answer: "questionable", chinese_answer: "可疑", chinese_romanization: "kěyí" },
            { option: "D", answer: "tarnished", chinese_answer: "玷污", chinese_romanization: "diànwū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impeccable' means in accordance with the highest standards; faultless." + 
            "<br><br>" +
            "(A) 'flawed' means blemished, damaged, or imperfect in some way." +
            "<br><br>" +
            "(C) 'questionable' means doubtful as regards truth or quality." +
            "<br><br>" +
            "(D) 'tarnished' means having lost its luster, especially as a result of exposure to air or moisture.",
        chinese_explanation: "(B) '无可挑剔' 意味着符合最高标准；无可挑剔的。" + 
            "<br><br>" +
            "(A) '有缺陷' 意味着在某种程度上有瑕疵、损坏或不完美。" +
            "<br><br>" +
            "(C) '可疑' 意味着对真相或质量有怀疑。" +
            "<br><br>" +
            "(D) '玷污' 意味着失去光泽，特别是由于暴露在空气或潮湿中。"
    },
    {
        id: 3,
        question: "The lawyer was __________ to the client's secrets and was committed to ensuring that their discussions remained confidential.",
        chinese_question: "律师 __________ 知道客户的秘密，并致力于确保他们的讨论保持机密。",
        answers: [
            { option: "A", answer: "unaware", chinese_answer: "不知情的", chinese_romanization: "bù zhī qíng de" },
            { option: "B", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wú zhī de" },
            { option: "C", answer: "privy", chinese_answer: "知情的", chinese_romanization: "zhī qíng de" },
            { option: "D", answer: "oblivious", chinese_answer: "茫然的", chinese_romanization: "mángrán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'privy' means sharing in the knowledge of something secret or private." +
            "<br><br>" +
            "(A) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(B) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
            "<br><br>" +
            "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
        chinese_explanation: "(C) '知情的' 意味着分享某些秘密或私人知识。" +
            "<br><br>" +
            "(A) '不知情的' 意味着不知道情况或事实。" +
            "<br><br>" +
            "(B) '无知的' 意味着缺乏一般知识或意识；未受教育的或不谙世事的。" +
            "<br><br>" +
            "(D) '茫然的' 意味着没有意识到或不关心周围发生的事情."
    },
    {
        id: 4,
        question: "Her explanation for missing the meeting was __________, and everyone accepted it without question.",
        chinese_question: "她缺席会议的解释很 __________，大家毫不质疑地接受了。",
        answers: [
            { option: "A", answer: "plausible", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "B", answer: "far-fetched", chinese_answer: "牵强的", chinese_romanization: "qiānqiǎng de" },
            { option: "C", answer: "dubious", chinese_answer: "可疑的", chinese_romanization: "kěyí de" },
            { option: "D", answer: "incredible", chinese_answer: "难以置信的", chinese_romanization: "nányǐ zhìxìn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'plausible' means seeming reasonable or probable." +
            "<br><br>" +
            "(B) 'far-fetched' means unlikely and unconvincing; implausible." +
            "<br><br>" +
            "(C) 'dubious' means hesitating or doubting." +
            "<br><br>" +
            "(D) 'incredible' means difficult to believe; extraordinary.",
        chinese_explanation: "(A) '合理的' 意味着看起来合理或可能的。" +
            "<br><br>" +
            "(B) '牵强的' 意味着不太可能且不令人信服的；不合情理的。" +
            "<br><br>" +
            "(C) '可疑的' 意味着犹豫或怀疑的。" +
            "<br><br>" +
            "(D) '难以置信的' 意味着难以相信的；非凡的."
    },
    {
        id: 5,
        question: "The company's __________ response to the market changes kept it ahead of the competition.",
        chinese_question: "公司对市场变化的 __________ 响应使其在竞争中保持领先。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbù guānxīn de" },
            { option: "B", answer: "delayed", chinese_answer: "推迟的", chinese_romanization: "tuīchí de" },
            { option: "C", answer: "swift", chinese_answer: "快速的", chinese_romanization: "kuàisù de" },
            { option: "D", answer: "sluggish", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'swift' means happening quickly or promptly." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'delayed' means postponed or put off to a later time." +
            "<br><br>" +
            "(D) 'sluggish' means slow-moving or inactive.",
        chinese_explanation: "(C) '快速的' 意味着迅速或及时发生。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别的兴趣或同情心；不关心的。" +
            "<br><br>" +
            "(B) '推迟的' 意味着推迟到以后的时间。" +
            "<br><br>" +
            "(D) '缓慢的' 意味着缓慢移动或不活跃的。"
    },
    {
        id: 6,
        question: "The __________ customer argued aggressively with the store manager, causing a scene.",
        chinese_question: "这位 __________ 的顾客与店经理激烈争吵，造成了一场骚动。",
        answers: [
            { option: "A", answer: "amiable", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "truculent", chinese_answer: "好斗的", chinese_romanization: "hàodòu de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'truculent' means eager or quick to argue or fight; aggressively defiant." +
            "<br><br>" +
            "(A) 'amiable' means having or displaying a friendly and pleasant manner." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'pleasant' means giving a sense of happy satisfaction or enjoyment.",
        chinese_explanation: "(D) '好斗的' 意味着急于或快速争论或战斗；具有攻击性和挑衅性。" +
            "<br><br>" +
            "(A) '友好的' 意味着表现出友好和愉快的态度。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(C) '愉快的' 意味着给人一种快乐满足或享受的感觉。"
    },
    {
        id: 7,
    question: "Her __________ behavior at the office made her colleagues wonder if she preferred to work alone or if she was just shy.",
    chinese_question: "她在办公室的 __________ 行为让同事们想知道她是否更喜欢独自工作，还是只是害羞。",
    answers: [
        { option: "A", answer: "reclusive", chinese_answer: "隐居的", chinese_romanization: "yǐnjū de" },
        { option: "B", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
        { option: "C", answer: "cooperative", chinese_answer: "合作的", chinese_romanization: "hézuò de" },
        { option: "D", answer: "approachable", chinese_answer: "平易近人的", chinese_romanization: "píngyì jìnrén de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reclusive' means avoiding the company of other people; solitary." +
        "<br><br>" +
        "(B) 'friendly' means kind and pleasant." +
        "<br><br>" +
        "(C) 'cooperative' means involving mutual assistance in working toward a common goal." +
        "<br><br>" +
        "(D) 'approachable' means friendly and easy to talk to.",
    chinese_explanation: "(A) '隐居的' 意味着避免与他人接触的；独处的。" +
        "<br><br>" +
        "(B) '友好的' 意味着友好和愉快的。" +
        "<br><br>" +
        "(C) '合作的' 意味着在共同目标上相互帮助的。" +
        "<br><br>" +
        "(D) '平易近人的' 意味着友好且容易交谈的。"
    },
    {
        id: 8,
    question: "Her __________ views on dress and behavior often made her seem overly strict and judgmental to those around her.",
    chinese_question: "她对穿着和行为的 __________ 观点常常让她在周围人看来显得过于严厉和爱评判。",
    answers: [
        { option: "A", answer: "puritanical", chinese_answer: "清教徒式的", chinese_romanization: "qīngjiàotú shì de" },
        { option: "B", answer: "permissive", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
        { option: "C", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
        { option: "D", answer: "lenient", chinese_answer: "宽厚的", chinese_romanization: "kuānhòu de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'puritanical' means practicing or affecting strict religious or moral behavior." +
        "<br><br>" +
        "(B) 'permissive' means allowing or characterized by great or excessive freedom of behavior." +
        "<br><br>" +
        "(C) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
        "<br><br>" +
        "(D) 'lenient' means more merciful or tolerant than expected.",
    chinese_explanation: "(A) '清教徒式的' 意味着践行或影响严格的宗教或道德行为的。" +
        "<br><br>" +
        "(B) '宽容的' 意味着允许或以极大的自由行为为特征的。" +
        "<br><br>" +
        "(C) '自由的' 意味着对新的行为或意见持开放态度，并愿意摒弃传统价值观的。" +
        "<br><br>" +
        "(D) '宽厚的' 意味着比预期的更仁慈或宽厚的。"
    },
    {
        id: 9,
            question: "The company's security was __________, with frequent data breaches and unauthorized access.",
            chinese_question: "公司的安全措施 __________，经常发生数据泄露和未经授权的访问。",
            answers: [
                { option: "A", answer: "tight", chinese_answer: "严密的", chinese_romanization: "yánmì de" },
                { option: "B", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
                { option: "C", answer: "robust", chinese_answer: "强健的", chinese_romanization: "qiángjiàn de" },
                { option: "D", answer: "porous", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
            ],
            correctAnswer: "D",
            explanation: "(D) 'porous' means not retentive or secure, allowing for leakage or breach." + 
                "<br><br>" + 
                "(A) 'tight' means firmly held or fastened." + 
                "<br><br>" + 
                "(B) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." + 
                "<br><br>" + 
                "(C) 'robust' means strong and healthy; vigorous.",
            chinese_explanation: "(D) '脆弱的' 意味着不保留或不安全，允许泄漏或违反。" +
                "<br><br>" +
                "(A) '严密的' 意味着牢牢固定的或紧密的。" +
                "<br><br>" +
                "(B) '安全的' 意味着固定或牢固，以至于不会让步、变松或丢失的。" +
                "<br><br>" +
                "(C) '强健的' 意味着强壮和健康的；有活力的."
    },
    {
        id: 10,
        question: "His __________ idea for a new app quickly attracted investors who were eager to capitalize on its profit potential.",
        chinese_question: "他对新应用的 __________ 想法迅速吸引了投资者，他们急于利用其盈利潜力。",
        answers: [
            { option: "A", answer: "unproductive", chinese_answer: "无成果的", chinese_romanization: "wú chéngguǒ de" },
            { option: "B", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "C", answer: "lucrative", chinese_answer: "有利可图的", chinese_romanization: "yǒu lì kě tú de" },
            { option: "D", answer: "futile", chinese_answer: "无用的", chinese_romanization: "wúyòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucrative' means producing a great deal of profit." + 
            "<br><br>" +
            "(A) 'unproductive' means not achieving much; not producing very much." +
            "<br><br>" +
            "(B) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(D) 'futile' means incapable of producing any useful result; pointless.",
        chinese_explanation: "(C) '有利可图的' 意味着产生大量利润。" + 
            "<br><br>" +
            "(A) '无成果的' 意味着没有取得很多成就；没有产生很多。" +
            "<br><br>" +
            "(B) '无效的' 意味着没有产生任何显著或预期的效果。" +
            "<br><br>" +
            "(D) '无用的' 意味着无法产生任何有用的结果；无意义的。"
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
