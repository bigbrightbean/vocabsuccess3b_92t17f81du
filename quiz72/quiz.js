// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The young __________ in the tech industry challenged the old guard with his fresh ideas and bold strategies.",
        chinese_question: "这位年轻的科技行业 __________ 以新颖的想法和大胆的策略挑战了老前辈。",
        answers: [
                { option: "A", answer: "veteran", chinese_answer: "老手", chinese_romanization: "lǎoshǒu" },
                { option: "B", answer: "upstart", chinese_answer: "暴发户", chinese_romanization: "bàofāhù" },
                { option: "C", answer: "mentor", chinese_answer: "导师", chinese_romanization: "dǎoshī" },
                { option: "D", answer: "administrator", chinese_answer: "管理员", chinese_romanization: "guǎnlǐyuán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'upstart' means a person who has risen suddenly to wealth or high position, especially one who behaves arrogantly." +
                "<br><br>" +
                "(A) 'veteran' means a person who has had long experience in a particular field." +
                "<br><br>" +
                "(C) 'mentor' means an experienced and trusted advisor." +
                "<br><br>" +
                "(D) 'administrator' means a person responsible for running a business, organization, etc.",
        chinese_explanation: "(B) '暴发户'一词指突然变得富有或高职位的人，尤其是那些行为傲慢的人。" +
                "<br><br>" +
                "(A) '老手' 意味着在某个领域有长时间经验的人。" +
                "<br><br>" +
                "(C) '导师' 意味着有经验和值得信赖的顾问。" +
                "<br><br>" +
                "(D) '管理员' 意味着负责经营企业、组织等的人。"
    },
    {
        id: 2,
    question: "Life's challenges are often punctuated by moments of tranquility, serving as an __________ before the next wave of difficulties.",
    chinese_question: "生活中的挑战经常被平静的时刻所打断，作为下一波困难之前的一个 __________。",
    answers: [
        { option: "A", answer: "prelude", chinese_answer: "前奏", chinese_romanization: "qiánzòu" },
        { option: "B", answer: "climax", chinese_answer: "高潮", chinese_romanization: "gāocháo" },
        { option: "C", answer: "sequel", chinese_answer: "续集", chinese_romanization: "xùjí" },
        { option: "D", answer: "interlude", chinese_answer: "间奏", chinese_romanization: "jiānzòu" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'interlude' means a period of temporary relief from a difficult situation." +
                "<br><br>" +
                "(A) 'prelude' means an action or event serving as an introduction to something more important." +
                "<br><br>" +
                "(B) 'climax' means the most intense, exciting, or important point of something." +
                "<br><br>" +
                "(C) 'sequel' means a published, broadcast, or recorded work that continues the story or develops the theme of an earlier one.",
    chinese_explanation: "(D) '间奏'一词意味着暂时从困难情况中解脱的时期。" +
                "<br><br>" +
                "(A) '前奏' 意味着引导更重要事件的行为或事件。" +
                "<br><br>" +
                "(B) '高潮' 意味着某事最激动人心、最重要的部分。" +
                "<br><br>" +
                "(C) '续集' 意味着延续或发展早期主题的作品。"
    },
    {
        id: 3,
        question: "His __________ towards his new coworker was apparent from the way he avoided her and refused to engage in conversation.",
        chinese_question: "他对新同事的 __________ 很明显，因为他总是避开她，不愿与她交谈。",
        answers: [
                { option: "A", answer: "antipathy", chinese_answer: "反感", chinese_romanization: "fǎngǎn" },
                { option: "B", answer: "affection", chinese_answer: "喜爱", chinese_romanization: "xǐ'ài" },
                { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "D", answer: "sympathy", chinese_answer: "同情", chinese_romanization: "tóngqíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'antipathy' means a deep-seated feeling of dislike; aversion." +
                "<br><br>" +
                "(B) 'affection' means a gentle feeling of fondness or liking." +
                "<br><br>" +
                "(C) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(D) 'sympathy' means feelings of pity and sorrow for someone else's misfortune.",
        chinese_explanation: "(A) '反感' 意味着深深的厌恶感；反感。" +
                "<br><br>" +
                "(B) '喜爱' 意味着一种温柔的喜欢或喜欢的感觉。" +
                "<br><br>" +
                "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(D) '同情' 意味着对他人不幸的怜悯和悲伤的感觉。"
    },
    {
        id: 4,
        question: "The lack of funding was a major __________ to the project's progress, causing numerous delays.",
        chinese_question: "资金不足是项目进展的主要 __________，导致了多次延误。",
        answers: [
                { option: "A", answer: "facilitator", chinese_answer: "促进因素", chinese_romanization: "cùjìn yīnsù" },
                { option: "B", answer: "impetus", chinese_answer: "动力", chinese_romanization: "dònglì" },
                { option: "C", answer: "impediment", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "D", answer: "motivation", chinese_answer: "动机", chinese_romanization: "dòngjī" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impediment' means a hindrance or obstruction in doing something." +
                "<br><br>" +
                "(A) 'facilitator' means a person or thing that makes an action or process easy or easier." +
                "<br><br>" +
                "(B) 'impetus' means the force or energy with which a body moves, or something that makes a process or activity happen or happen more quickly." +
                "<br><br>" +
                "(D) 'motivation' means the reason or reasons one has for acting or behaving in a particular way.",
        chinese_explanation: "(C) '障碍'一词意味着做某事的障碍或阻碍。" +
                "<br><br>" +
                "(A) '促进因素' 意味着使某一行动或过程变得简单或更容易的人或事物。" +
                "<br><br>" +
                "(B) '动力' 意味着使身体移动的力量或能量，或使过程或活动发生或更快发生的东西。" +
                "<br><br>" +
                "(D) '动机' 意味着一个人行动或行为的原因或理由。"
    },
    {
        id: 5,
        question: "The judge was known for his __________, always making fair and honest decisions in the courtroom.",
        chinese_question: "这位法官以其 __________ 而闻名，总是在法庭上做出公平和诚实的决定。",
        answers: [
                { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
                { option: "B", answer: "probity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "C", answer: "partiality", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
                { option: "D", answer: "dishonesty", chinese_answer: "不诚实", chinese_romanization: "bù chéngshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'probity' means the quality of having strong moral principles; honesty and decency." +
                "<br><br>" +
                "(A) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
                "<br><br>" +
                "(C) 'partiality' means unfair bias in favor of one thing or person compared with another; favoritism." +
                "<br><br>" +
                "(D) 'dishonesty' means deceitfulness shown in someone's character or behavior.",
        chinese_explanation: "(B) '正直'一词意味着具有强烈道德原则的品质；诚实和正派。" +
                "<br><br>" +
                "(A) '偏见' 意味着对某人或某群体的不公平的倾向或偏见。" +
                "<br><br>" +
                "(C) '偏袒' 意味着偏爱某事或某人而对另一个不公平的偏见。" +
                "<br><br>" +
                "(D) '不诚实' 意味着某人性格或行为中的欺骗性。"
    },
    {
        id: 6,
        question: "The political dissident sought __________ in a neighbouring country to escape persecution from his government.",
        chinese_question: "这位政治异见者在邻国寻求 __________，以逃避政府的迫害。",
        answers: [
                { option: "A", answer: "asylum", chinese_answer: "庇护", chinese_romanization: "bìhù" },
                { option: "B", answer: "refuge", chinese_answer: "避难", chinese_romanization: "bìnàn" },
                { option: "C", answer: "exile", chinese_answer: "流亡", chinese_romanization: "liúwáng" },
                { option: "D", answer: "deportation", chinese_answer: "驱逐", chinese_romanization: "qūzhú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'asylum' means protection granted by a nation to someone who has left their native country as a political refugee." +
                "<br><br>" +
                "(B) 'refuge' means a condition of being safe or sheltered from pursuit, danger, or trouble." +
                "<br><br>" +
                "(C) 'exile' means the state of being barred from one's native country, typically for political or punitive reasons." +
                "<br><br>" +
                "(D) 'deportation' means the action of deporting a foreigner from a country.",
        chinese_explanation: "(A) '庇护' 意味着一个国家对离开本国作为政治难民的人提供的保护。" +
                "<br><br>" +
                "(B) '避难' 意味着逃避追捕、危险或困境的安全或庇护状态。" +
                "<br><br>" +
                "(C) '流亡' 意味着被禁止回到祖国的状态，通常出于政治或惩罚原因。" +
                "<br><br>" +
                "(D) '驱逐' 意味着将外国人从一个国家驱逐的行为。"
    },
    {
        id: 7,
        question: "The __________ she experienced during the decision-making process was due to the equally appealing pros and cons of each option.",
        chinese_question: "她在决策过程中经历的 __________ 是由于每个选项的利弊同样吸引人。",
        answers: [
                { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "B", answer: "resolution", chinese_answer: "决心", chinese_romanization: "juéxīn" },
                { option: "C", answer: "focus", chinese_answer: "关注", chinese_romanization: "guānzhù" },
                { option: "D", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ambivalence' means the state of having mixed feelings or contradictory ideas about something or someone." +
                "<br><br>" +
                "(A) 'clarity' means the quality of being clear, in particular." +
                "<br><br>" +
                "(B) 'resolution' means a firm decision to do or not to do something." +
                "<br><br>" +
                "(C) 'focus' means the center of interest or activity.",
        chinese_explanation: "(D) '矛盾心理' 意味着对某事或某人有混合的感觉或矛盾的想法的状态。" +
                "<br><br>" +
                "(A) '清晰' 意味着特别清晰的质量。" +
                "<br><br>" +
                "(B) '决心' 意味着做或不做某事的坚定决定。" +
                "<br><br>" +
                "(C) '关注' 意味着兴趣或活动的中心。"
    },
    {
        id: 8,
        question: "Her dedication to her work is the __________ of professionalism.",
        chinese_question: "她对工作的奉献是职业精神的 __________。",
        answers: [
                { option: "A", answer: "example", chinese_answer: "例子", chinese_romanization: "lìzi" },
                { option: "B", answer: "embodiment", chinese_answer: "体现", chinese_romanization: "tǐxiàn" },
                { option: "C", answer: "symbol", chinese_answer: "象征", chinese_romanization: "xiàngzhēng" },
                { option: "D", answer: "illusion", chinese_answer: "幻觉", chinese_romanization: "huànjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'embodiment' means a tangible or visible form of an idea, quality, or feeling." +
                "<br><br>" +
                "(A) 'example' means a thing characteristic of its kind or illustrating a general rule." +
                "<br><br>" +
                "(C) 'symbol' means a thing that represents or stands for something else." +
                "<br><br>" +
                "(D) 'illusion' means a deceptive appearance or impression.",
        chinese_explanation: "(B) '体现'一词意味着一种思想、品质或感觉的有形或可见形式。" +
                "<br><br>" +
                "(A) '例子' 意味着其种类的特征或说明一般规则的事物。" +
                "<br><br>" +
                "(C) '象征' 意味着代表或象征其他事物的事物。" +
                "<br><br>" +
                "(D) '幻觉' 意味着一种欺骗性的外观或印象。"
    },
    {
        id: 9,
    question: "In his long-winded explanation, there wasn't even a __________ of evidence to support his claims, making his argument unconvincing to the audience.",
    chinese_question: "在他冗长的解释中，甚至没有一丝 __________ 的证据来支持他的说法，使得他的论点无法让观众信服。",
    answers: [
        { option: "A", answer: "profusion", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "B", answer: "abundance", chinese_answer: "大量", chinese_romanization: "dàliàng" },
        { option: "C", answer: "plenitude", chinese_answer: "充足", chinese_romanization: "chōngzú" },
        { option: "D", answer: "scintilla", chinese_answer: "丝毫", chinese_romanization: "sīháo" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'scintilla' means a tiny trace or spark of a specified quality or feeling." +
        "<br><br>" +
        "(A) 'profusion' means an abundance or large quantity of something." +
        "<br><br>" +
        "(B) 'abundance' means a very large quantity of something." +
        "<br><br>" +
        "(C) 'plenitude' means an abundance or large quantity of something.",
    chinese_explanation: "(D) '丝毫' 意味着特定质量或感觉的微小痕迹或火花。" +
        "<br><br>" +
        "(A) '丰富' 意味着大量或大量的某物。" +
        "<br><br>" +
        "(B) '大量' 意味着大量的某物。" +
        "<br><br>" +
        "(C) '充足' 意味着丰富或大量的某物。"
    },
    {
        id: 10,
        question: "There was noticeable __________ among the committee members, making it difficult to reach a consensus.",
        chinese_question: "委员会成员之间有明显的 __________，这使得难以达成共识。",
        answers: [
                { option: "A", answer: "consonance", chinese_answer: "一致", chinese_romanization: "yīzhì" },
                { option: "B", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
                { option: "C", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
                { option: "D", answer: "coherence", chinese_answer: "连贯性", chinese_romanization: "liánguànxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissonance' means a conflict of people's opinions or actions or characters." +
                "<br><br>" +
                "(A) 'consonance' means agreement or compatibility between opinions or actions." +
                "<br><br>" +
                "(C) 'unity' means the state of being united or joined as a whole." +
                "<br><br>" +
                "(D) 'coherence' means the quality of being logical and consistent.",
        chinese_explanation: "(B) '不和谐'一词意味着人们意见、行动或性格之间的冲突。" +
                "<br><br>" +
                "(A) '一致' 意味着意见或行动之间的协议或兼容性。" +
                "<br><br>" +
                "(C) '团结' 意味着团结或联合为整体的状态。" +
                "<br><br>" +
                "(D) '连贯性' 意味着逻辑和一致性的质量。"
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
