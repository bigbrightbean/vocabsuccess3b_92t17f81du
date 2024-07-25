// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "He refused to __________ in front of the powerful tycoon, maintaining his dignity.",
chinese_question: "他拒绝在权贵面前 __________，保持了自己的尊严。",
answers: [
        { option: "A", answer: "stand", chinese_answer: "站", chinese_romanization: "zhàn" },
        { option: "B", answer: "grovel", chinese_answer: "屈服", chinese_romanization: "qūfú" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" }
],
correctAnswer: "B",
explanation: "(B) 'grovel' used figuratively means to show submission or fear." +
        "<br><br>" +
        "(A) 'stand' means to be in an upright position on the feet." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'laugh' means to make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement.",
chinese_explanation: "(B) '屈服' 在比喻意义上指表现出顺从或恐惧。" +
        "<br><br>" +
        "(A) '站' 意味着站立。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。" +
        "<br><br>" +
        "(D) '笑' 意味着做出自发的声音和面部和身体的动作，这些是生动娱乐的本能表达。"
    },
    {
        id: 2,
        question: "She worked hard to __________ any doubts about her abilities from her mind.",
        chinese_question: "她努力将对自己能力的任何怀疑 __________ 出脑海。",
        answers: [
        { option: "A", answer: "banish", chinese_answer: "驱除", chinese_romanization: "qūchú" },
        { option: "B", answer: "foster", chinese_answer: "培育", chinese_romanization: "péiyù" },
        { option: "C", answer: "nurture", chinese_answer: "培养", chinese_romanization: "péiyǎng" },
        { option: "D", answer: "entertain", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'banish' means to get rid of something unwanted." +
            "<br><br>" +
            "(B) 'foster' means to encourage the development of something." +
            "<br><br>" +
            "(C) 'nurture' means to care for and encourage the growth or development of." +
            "<br><br>" +
            "(D) 'entertain' means to give attention or consideration to an idea, suggestion, or feeling.",
        chinese_explanation: "(A) '驱除' 意味着摆脱不想要的东西。" +
            "<br><br>" +
            "(B) '培育' 意味着鼓励某物的发展。" +
            "<br><br>" +
            "(C) '培养' 意味着照顾和鼓励生长或发展。" +
            "<br><br>" +
            "(D) '考虑' 意味着对某个想法、建议或感觉给予注意或考虑。"
    },
    {
        id: 3,
question: "In pursuit of success, he decided to __________ all distractions.",
chinese_question: "为了追求成功，他决定 __________ 所有干扰。",
answers: [
        { option: "A", answer: "forswear", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "B", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yǒngbào" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
],
correctAnswer: "A",
explanation: "(A) 'forswear' means to agree to give up or do without something, used figuratively here." +
        "<br><br>" +
        "(B) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'entertain' means to provide someone with amusement or enjoyment.",
chinese_explanation: "(A) '放弃' 意味着同意放弃或不做某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '拥抱' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 4,
        question: "After a long hike, they sat down to __________ on the picnic they had brought.",
        chinese_question: "长途徒步旅行后，他们坐下来 __________ 带来的野餐。",
        answers: [
            { option: "A", answer: "pick", chinese_answer: "挑选", chinese_romanization: "tiāoxuǎn" },
            { option: "B", answer: "stare", chinese_answer: "盯着", chinese_romanization: "dīngzhe" },
            { option: "C", answer: "conserve", chinese_answer: "节约", chinese_romanization: "jiéyuē" },
            { option: "D", answer: "gormandize", chinese_answer: "狼吞虎咽", chinese_romanization: "lángtūnhǔyàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gormandize' means to eat greedily or ravenously." +
            "<br><br>" +
            "(A) 'pick' means to choose or select from a group." +
            "<br><br>" +
            "(B) 'stare' means to look fixedly or vacantly at someone or something." +
            "<br><br>" +
            "(C) 'conserve' means to protect from harm or destruction, especially something environmentally or culturally important.",
        chinese_explanation: "(D) '狼吞虎咽' 意味着贪婪或狼吞虎咽地吃。" +
            "<br><br>" +
            "(A) '挑选' 意味着从一组中选择或挑选。" +
            "<br><br>" +
            "(B) '盯着' 意味着固定或茫然地看着某人或某物。" +
            "<br><br>" +
            "(C) '节约' 意味着保护免受损害或破坏，特别是环境或文化重要的事物。"
    },
    {
        id: 5,
        question: "Her frankness in discussing sensitive topics tends to __________ those around her.",
        chinese_question: "她坦率地讨论敏感话题的方式往往让周围的人感到 __________。",
        answers: [
                { option: "A", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
                { option: "B", answer: "disconcert", chinese_answer: "使不安", chinese_romanization: "shǐ bù'ān" },
                { option: "C", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
                { option: "D", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disconcert' used figuratively means to unsettle or disturb the composure of someone." +
                "<br><br>" +
                "(A) 'comfort' means to ease the grief or distress of someone." +
                "<br><br>" +
                "(C) 'entertain' means to provide someone with amusement or enjoyment." +
                "<br><br>" +
                "(D) 'relax' means to make or become less tense or anxious.",
        chinese_explanation: "(B) '使不安' 在比喻意义上指使某人感到不安或扰乱某人的镇定。" +
                "<br><br>" +
                "(A) '安慰' 意味着缓解某人的悲伤或痛苦。" +
                "<br><br>" +
                "(C) '娱乐' 意味着提供某人娱乐或享受。" +
                "<br><br>" +
                "(D) '放松' 意味着使或变得不那么紧张或焦虑。"
    },
    {
        id: 6,
        question: "She felt __________ by the expectations of her family, unable to pursue her own dreams.",
        chinese_question: "她感到被家人的期望所 __________，无法追求自己的梦想。",
        answers: [
                { option: "A", answer: "liberated", chinese_answer: "解放", chinese_romanization: "jiěfàng" },
                { option: "B", answer: "enfettered", chinese_answer: "束缚", chinese_romanization: "shùfù" },
                { option: "C", answer: "motivated", chinese_answer: "激励", chinese_romanization: "jīlì" },
                { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enfettered' means to be restrained or restricted in a way that limits freedom." +
            "<br><br>" +
            "(A) 'liberated' means to set someone free from a situation." +
            "<br><br>" +
            "(C) 'motivated' means to provide someone with a reason for doing something." +
            "<br><br>" +
            "(D) 'supported' means to bear all or part of the weight of something.",
        chinese_explanation: "(B) '束缚' 意味着以限制某人自由的方式约束或限制某人。" +
            "<br><br>" +
            "(A) '解放' 意味着使某人从某种情况下解脱出来。" +
            "<br><br>" +
            "(C) '激励' 意味着给某人提供做某事的理由。" +
            "<br><br>" +
            "(D) '支持' 意味着支撑某物的全部或部分重量。"
    },
    {
        id: 7,
question: "The small business continued to __________ amidst the economic downturn, struggling to stay afloat.",
chinese_question: "在经济衰退中，小企业继续 __________，努力维持生计。",
answers: [
        { option: "A", answer: "prosper", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "B", answer: "flounder", chinese_answer: "挣扎", chinese_romanization: "zhēngzhá" },
        { option: "C", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
],
correctAnswer: "B",
explanation: "(B) 'flounder' used figuratively means to struggle or have difficulty." +
        "<br><br>" +
        "(A) 'prosper' means to succeed in material terms; be financially successful." +
        "<br><br>" +
        "(C) 'expand' means to become or make larger or more extensive." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
chinese_explanation: "(B) '挣扎' 在比喻意义上指困难或挣扎。" +
        "<br><br>" +
        "(A) '繁荣' 意味着在物质方面成功；在财务上成功。" +
        "<br><br>" +
        "(C) '扩展' 意味着变大或使更广泛。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来纪念重要或快乐的一天或事件。"
    },
    {
        id: 8,
  question: "All documents __________ to the case were submitted to the court.",
  chinese_question: "所有与案件相关的文件都提交给了法庭。",
  answers: [
    { option: "A", answer: "pertaining", chinese_answer: "涉及", chinese_romanization: "shèjí" },
    { option: "B", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "C", answer: "excluding", chinese_answer: "排除", chinese_romanization: "páichú" },
    { option: "D", answer: "neglecting", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
  ],
  correctAnswer: "A",
  explanation: "(A) 'pertaining' means to be appropriate, related, or applicable." +
    "<br><br>" +
    "(B) 'ignoring' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(C) 'excluding' means to deny (someone) access to or bar (someone) from a place, group, or privilege." +
    "<br><br>" +
    "(D) 'neglecting' means to fail to care for properly.",
  chinese_explanation: "(A) '涉及' 意味着相关或适用。" +
    "<br><br>" +
    "(B) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(C) '排除' 意味着拒绝（某人）进入或阻止（某人）享有某地、群体或特权。" +
    "<br><br>" +
    "(D) '忽略' 意味着未能妥善照顾。"
    },
    {
        id: 9,
question: "His __________ memory made it difficult for him to recall important information.",
chinese_question: "他的 __________ 记忆使他难以回忆起重要的信息。",
answers: [
    { option: "A", answer: "sharp", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" },
    { option: "B", answer: "flawless", chinese_answer: "完美无缺", chinese_romanization: "wánměi wúquē" },
    { option: "C", answer: "defective", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" },
    { option: "D", answer: "impressive", chinese_answer: "令人印象深刻", chinese_romanization: "lìng rén yìnxiàng shēnkè" }
],
correctAnswer: "C",
explanation: "(C) 'defective' means having a fault or flaw." +
    "<br><br>" +
    "(A) 'sharp' means quick to notice, hear, or understand." +
    "<br><br>" +
    "(B) 'flawless' means without any imperfections." +
    "<br><br>" +
    "(D) 'impressive' means evoking admiration through size, quality, or skill.",
chinese_explanation: "(C) '有缺陷' 意味着有故障或瑕疵。" +
    "<br><br>" +
    "(A) '敏锐' 意味着迅速注意到、听到或理解。" +
    "<br><br>" +
    "(B) '完美无缺' 意味着没有任何缺陷。" +
    "<br><br>" +
    "(D) '令人印象深刻' 意味着因尺寸、质量或技巧而令人钦佩。"
    },
    {
        id: 10,
        question: "During the trial, the witness was asked to __________ the truth of his statement.",
        chinese_question: "在审判期间，证人被要求 __________ 他陈述的真实性。",
        answers: [
        { option: "A", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "B", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "C", answer: "aver", chinese_answer: "断言", chinese_romanization: "duàn yán" },
        { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aver' means to assert or affirm with confidence." +
            "<br><br>" +
            "(A) 'deny' means to state that something is not true." +
            "<br><br>" +
            "(B) 'doubt' means to feel uncertain about something." +
            "<br><br>" +
            "(D) 'forget' means to fail to remember.",
        chinese_explanation: "(C) '断言' 意味着自信地断言或肯定。" +
            "<br><br>" +
            "(A) '否认' 意味着声明某事不是真的。" +
            "<br><br>" +
            "(B) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(D) '忘记' 意味着未能记住。"
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
