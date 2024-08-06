// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The pharmacist was seen as a __________, always insisting on following every tiny rule, double-checking prescriptions, and correcting others even on small mistakes.",
        chinese_question: "这位药剂师被视为一个__________，总是坚持遵循每一个小规则，仔细检查处方，即使是小错误也要纠正别人。",
        answers: [
            { option: "A", answer: "rebel", chinese_answer: "叛逆者", chinese_romanization: "pànnì zhě" },
            { option: "B", answer: "slacker", chinese_answer: "懒惰者", chinese_romanization: "lǎnduò zhě" },
            { option: "C", answer: "liberal", chinese_answer: "自由主义者", chinese_romanization: "zìyóu zhǔyì zhě" },
            { option: "D", answer: "pedant", chinese_answer: "书呆子", chinese_romanization: "shūdāizi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'pedant' means someone who cares too much about small rules or details." +
            "<br><br>" +
            "(A) 'rebel' means someone who resists authority or control." +
            "<br><br>" +
            "(B) 'slacker' means someone who avoids work or effort." +
            "<br><br>" +
            "(C) 'liberal' means someone who is open to new ideas and willing to discard traditional values.",
        chinese_explanation: "(D) '书呆子' 意思是非常在意小规则或细节的人。" +
            "<br><br>" +
            "(A) '叛逆者' 意思是反抗权威或控制的人。" +
            "<br><br>" +
            "(B) '懒惰者' 意思是避免工作或努力的人。" +
            "<br><br>" +
            "(C) '自由主义者' 意思是乐于接受新观点并愿意抛弃传统价值观的人。"
    },
    {
        id: 2,
        question: "The company's recent __________ of a smaller tech firm will help expand its product line and customer base.",
        chinese_question: "公司最近 __________ 一家小型科技公司，这将有助于扩大其产品线和客户群。",
        answers: [
                { option: "A", answer: "acquisition", chinese_answer: "收购", chinese_romanization: "shōugòu" },
                { option: "B", answer: "sale", chinese_answer: "销售", chinese_romanization: "xiāoshòu" },
                { option: "C", answer: "donation", chinese_answer: "捐赠", chinese_romanization: "juānzèng" },
                { option: "D", answer: "abandonment", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'acquisition' means the act of obtaining or gaining possession, especially for a company." +
                "<br><br>" +
                "(B) 'sale' means the exchange of a commodity for money; the action of selling something." +
                "<br><br>" +
                "(C) 'donation' means something that is given to a charity, especially a sum of money." +
                "<br><br>" +
                "(D) 'abandonment' means the action or fact of abandoning or being abandoned.",
        chinese_explanation: "(A) '收购' 意味着获取或获得所有权的行为，尤其是对公司的收购。" +
                "<br><br>" +
                "(B) '销售' 意味着用金钱交换商品的行为；销售某物的行为。" +
                "<br><br>" +
                "(C) '捐赠' 意味着捐赠给慈善机构的东西，尤其是一笔钱。" +
                "<br><br>" +
                "(D) '放弃' 意味着放弃或被放弃的行为或事实。"
    },
    {
        id: 3,
    question: "He gave a __________ on the importance of discipline to his children.",
    chinese_question: "他给孩子们作了一次关于纪律重要性的 __________ 。",
    answers: [
        { option: "A", answer: "harangue", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
        { option: "B", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "C", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "D", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'harangue' means a lengthy and aggressive speech." +
                "<br><br>" +
                "(B) 'whisper' means to speak very softly using one's breath without one's vocal cords." +
                "<br><br>" +
                "(C) 'compliment' means a polite expression of praise or admiration." +
                "<br><br>" +
                "(D) 'suggestion' means an idea or plan put forward for consideration.",
    chinese_explanation: "(A) '训斥' 意味着冗长而激烈的讲话。" +
                "<br><br>" +
                "(B) '低语' 意味着用气声非常轻柔地说话。" +
                "<br><br>" +
                "(C) '赞美' 意味着礼貌的赞扬或钦佩。" +
                "<br><br>" +
                "(D) '建议' 意味着提出供考虑的想法或计划。"
    },
    {
        id: 4,
        question: "The __________ of the rabbit population in the area was remarkable, with numerous litters born each season.",
        chinese_question: "该地区兔子种群的 __________ 显著，每个季节都有大量的幼兔出生。",
        answers: [
                { option: "A", answer: "fecundity", chinese_answer: "繁殖力", chinese_romanization: "fánzhílì" },
                { option: "B", answer: "sterility", chinese_answer: "不育", chinese_romanization: "bùyù" },
                { option: "C", answer: "barrenness", chinese_answer: "贫瘠", chinese_romanization: "pínjí" },
                { option: "D", answer: "lethargy", chinese_answer: "昏睡", chinese_romanization: "hūnshuì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fecundity' means the ability to produce abundant offspring or new growth." +
                "<br><br>" +
                "(B) 'sterility' means the inability to produce offspring." +
                "<br><br>" +
                "(C) 'barrenness' means the state of being unproductive or unable to produce." +
                "<br><br>" +
                "(D) 'lethargy' means a lack of energy and enthusiasm.",
        chinese_explanation: "(A) '繁殖力'一词意味着生产大量后代或新生长的能力。" +
                "<br><br>" +
                "(B) '不育' 意味着不能生育后代。" +
                "<br><br>" +
                "(C) '贫瘠' 意味着不生产或不能生产的状态。" +
                "<br><br>" +
                "(D) '昏睡' 意味着缺乏精力和热情。"
    },
    {
        id: 5,
        question: "The child was scolded for his __________, like drawing on the walls and sneaking cookies before dinner.",
        chinese_question: "这个孩子因为他的__________而被责骂，比如在墙上画画和晚餐前偷吃饼干。",
        answers: [
            { option: "A", answer: "virtue", chinese_answer: "美德", chinese_romanization: "měidé" },
            { option: "B", answer: "perfection", chinese_answer: "完美", chinese_romanization: "wánměi" },
            { option: "C", answer: "goodness", chinese_answer: "善良", chinese_romanization: "shànliáng" },
            { option: "D", answer: "peccadillo", chinese_answer: "小过失", chinese_romanization: "xiǎo guòshī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'peccadillo' means a small mistake or bad behavior that is not very serious." +
            "<br><br>" +
            "(A) 'virtue' means a good quality or behavior." +
            "<br><br>" +
            "(B) 'perfection' means the state of being perfect or without any mistakes." +
            "<br><br>" +
            "(C) 'goodness' means the quality of being good and kind.",
        chinese_explanation: "(D) '小过失' 意味着不太严重的小错误或不良行为。" +
            "<br><br>" +
            "(A) '美德' 意味着好的品质或行为。" +
            "<br><br>" +
            "(B) '完美' 意味着完美无瑕的状态。" +
            "<br><br>" +
            "(C) '善良' 意味着善良和友好的品质。"
    },
    {
        id: 6,
        question: "The film's __________ was remarkable, making the audience feel as though they were witnessing real events.",
        chinese_question: "这部电影的 __________ 非常出色，让观众感觉自己在见证真实事件。",
        answers: [
            { option: "A", answer: "fantasy", chinese_answer: "幻想", chinese_romanization: "huànxiǎng" },
            { option: "B", answer: "implausibility", chinese_answer: "不可信", chinese_romanization: "bù kěxìn" },
            { option: "C", answer: "artificiality", chinese_answer: "人工", chinese_romanization: "réngōng" },
            { option: "D", answer: "verisimilitude", chinese_answer: "逼真", chinese_romanization: "bīzhēn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'verisimilitude' means the appearance of being true or real." +
            "<br><br>" +
            "(A) 'fantasy' means the faculty or activity of imagining things, especially things that are impossible or improbable." +
            "<br><br>" +
            "(B) 'implausibility' means not having the appearance of truth or credibility." +
            "<br><br>" +
            "(C) 'artificiality' means the quality of being made or produced by human beings rather than occurring naturally.",
        chinese_explanation: "(D) '逼真'一词意味着看起来真实的外观。" +
            "<br><br>" +
            "(A) '幻想' 意味着想象事物的能力或活动，尤其是不可能或不大可能的事物。" +
            "<br><br>" +
            "(B) '不可信' 意味着没有真实或可信的外观。" +
            "<br><br>" +
            "(C) '人工' 意味着由人类制造或生产的品质，而不是自然发生的。"
    },
    {
        id: 7,
        question: "The hiring __________ at the company includes several rounds of interviews.",
        chinese_question: "公司的招聘 __________ 包括几轮面试。",
        answers: [
            { option: "A", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "B", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
            { option: "C", answer: "accident", chinese_answer: "事故", chinese_romanization: "shìgù" },
            { option: "D", answer: "event", chinese_answer: "事件", chinese_romanization: "shìjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'process' means a series of actions or steps taken in order to achieve a particular end." +
                "<br><br>" +
                "(A) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
                "<br><br>" +
                "(C) 'accident' means an unfortunate incident that happens unexpectedly and unintentionally." +
                "<br><br>" +
                "(D) 'event' means a thing that happens, especially one of importance.",
        chinese_explanation: "(B) '过程' 意味着为了实现特定目标而采取的一系列行动或步骤。" +
                "<br><br>" +
                "(A) '庆祝' 意味着通过参与愉快的、通常是社交活动来标记对重要事件或场合的喜悦。" +
                "<br><br>" +
                "(C) '事故' 意味着意外且无意中发生的不幸事件。" +
                "<br><br>" +
                "(D) '事件' 意味着发生的事情，尤其是重要的事情。"
    },
    {
        id: 8,
        question: "The report was criticized for its __________, which obscured the main findings and made it hard to follow.",
        chinese_question: "该报告因其 __________ 而受到批评，这掩盖了主要发现并使其难以理解。",
        answers: [
                { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "B", answer: "verbosity", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
                { option: "C", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchálì" },
                { option: "D", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'verbosity' means the quality of using more words than needed; wordiness." +
                "<br><br>" +
                "(A) 'clarity' means the quality of being clear." +
                "<br><br>" +
                "(C) 'insight' means the capacity to gain an accurate and deep understanding of someone or something." +
                "<br><br>" +
                "(D) 'brevity' means concise and exact use of words in writing or speech.",
        chinese_explanation: "(B) '冗长'一词意味着使用比需要更多的词；多话。" +
                "<br><br>" +
                "(A) '清晰' 意味着清晰的质量。" +
                "<br><br>" +
                "(C) '洞察力' 意味着获得准确和深入了解某人或某事的能力。" +
                "<br><br>" +
                "(D) '简洁' 意味着在写作或讲话中使用简明准确的词语。"
    },
    {
        id: 9,
        question: "The neighbor was known as a __________ who avoided people, mistrusted everyone, and never joined in any community activities.",
        chinese_question: "这位邻居被认为是一个__________，避开人群，不信任任何人，并且从不参加任何社区活动。",
        answers: [
            { option: "A", answer: "philanthropist", chinese_answer: "慈善家", chinese_romanization: "císhànjiā" },
            { option: "B", answer: "socialite", chinese_answer: "社交名流", chinese_romanization: "shèjiāo míngliú" },
            { option: "C", answer: "extrovert", chinese_answer: "外向的人", chinese_romanization: "wàixiàng de rén" },
            { option: "D", answer: "misanthrope", chinese_answer: "厌恶人类的人", chinese_romanization: "yànwù rénlèi de rén" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'misanthrope' means a person who avoids people, doesn't trust anyone, and doesn't take part in social activities." +
            "<br><br>" +
            "(A) 'philanthropist' means someone who helps others, especially by giving money to those in need." +
            "<br><br>" +
            "(B) 'socialite' means a person who is well-known in fashionable society and likes to be with other people." +
            "<br><br>" +
            "(C) 'extrovert' means a person who is outgoing and enjoys being around others.",
        chinese_explanation: "(D) '厌恶人类的人' 意味着一个避开人群、不信任任何人且不参加社交活动的人。" +
            "<br><br>" +
            "(A) '慈善家' 意味着帮助别人的人，尤其是通过捐钱给有需要的人。" +
            "<br><br>" +
            "(B) '社交名流' 意味着一个在时尚社会中很有名，并且喜欢与别人相处的人。" +
            "<br><br>" +
            "(C) '外向的人' 意味着一个外向并喜欢和别人待在一起的人。"
    },
    {
        id: 10,
        question: "The small village is a __________ of the whole country, showing the same customs, food, and festivals in one place.",
        chinese_question: "这个小村庄是整个国家的__________，在一个地方展示相同的习俗、食物和节日。",
        answers: [
            { option: "A", answer: "macrocosm", chinese_answer: "大世界", chinese_romanization: "dà shìjiè" },
            { option: "B", answer: "expanse", chinese_answer: "广阔", chinese_romanization: "guǎngkuò" },
            { option: "C", answer: "universe", chinese_answer: "宇宙", chinese_romanization: "yǔzhòu" },
            { option: "D", answer: "microcosm", chinese_answer: "缩影", chinese_romanization: "suōyǐng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'microcosm' means a small place that shows all the features of something much bigger." +
            "<br><br>" +
            "(A) 'macrocosm' means a large and complete world or universe." +
            "<br><br>" +
            "(B) 'expanse' means a wide and open area of something." +
            "<br><br>" +
            "(C) 'universe' means everything that exists, including all the stars and planets.",
        chinese_explanation: "(D) '缩影' 意味着一个小地方展示了一个更大事物的所有特点。" +
            "<br><br>" +
            "(A) '大世界' 意味着一个大而完整的世界或宇宙。" +
            "<br><br>" +
            "(B) '广阔' 意味着一个宽广而开放的区域。" +
            "<br><br>" +
            "(C) '宇宙' 意味着所有存在的东西，包括所有的星星和行星。"
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
