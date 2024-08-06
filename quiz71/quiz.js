// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The project was completed with remarkable __________, surprising everyone with the team's efficiency and speed.",
        chinese_question: "项目以显著的 __________ 完成，团队的效率和速度让所有人感到惊讶。",
        answers: [
                { option: "A", answer: "celerity", chinese_answer: "迅速", chinese_romanization: "xùnsù" },
                { option: "B", answer: "slowness", chinese_answer: "缓慢", chinese_romanization: "huǎnmàn" },
                { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
                { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'celerity' means swiftness of movement." +
                "<br><br>" +
                "(B) 'slowness' means the quality or state of being slow." +
                "<br><br>" +
                "(C) 'delay' means the act of postponing or causing something to be late." +
                "<br><br>" +
                "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(A) '迅速' 意味着快速的动作。" +
                "<br><br>" +
                "(B) '缓慢' 意味着缓慢的状态。" +
                "<br><br>" +
                "(C) '延迟' 意味着推迟或导致某事迟到的行为。" +
                "<br><br>" +
                "(D) '犹豫' 意味着在说或做某事之前的暂停或犹豫。"
    },
    {
        id: 2,
        question: "The project came to an __________ because of the budget cuts, halting all progress.",
        chinese_question: "由于预算削减，项目陷入了 __________，所有进展都停滞不前。",
        answers: [
                { option: "A", answer: "start", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
                { option: "B", answer: "solution", chinese_answer: "解决", chinese_romanization: "jiějué" },
                { option: "C", answer: "impasse", chinese_answer: "僵局", chinese_romanization: "jiāngjú" },
                { option: "D", answer: "resolution", chinese_answer: "决议", chinese_romanization: "juéyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impasse' means a situation in which no progress is possible, especially because of disagreement." +
                "<br><br>" +
                "(A) 'start' means the point in time or space at which something has its origin." +
                "<br><br>" +
                "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." +
                "<br><br>" +
                "(D) 'resolution' means a firm decision to do or not to do something.",
        chinese_explanation: "(C) '僵局'一词意味着由于分歧而无法取得进展的情况。" +
                "<br><br>" +
                "(A) '开始' 意味着某物起源的时间或空间点。" +
                "<br><br>" +
                "(B) '解决' 意味着解决问题或处理困难情况的方法。" +
                "<br><br>" +
                "(D) '决议' 意味着做某事或不做某事的坚定决定。"
    },
    {
        id: 3,
        question: "The athlete faced a __________ from the sports federation for violating the code of conduct.",
        chinese_question: "这名运动员因违反行为准则而面临体育联合会的 __________。",
        answers: [
                { option: "A", answer: "sanction", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
                { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
                { option: "C", answer: "praise", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
                { option: "D", answer: "promotion", chinese_answer: "晋升", chinese_romanization: "jìnshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sanction' means a penalty for disobeying a rule or law." +
                "<br><br>" +
                "(B) 'reward' means a thing given in recognition of one's service, effort, or achievement." +
                "<br><br>" +
                "(C) 'praise' means the expression of approval or admiration for someone or something." +
                "<br><br>" +
                "(D) 'promotion' means the action of raising someone to a higher position or rank.",
        chinese_explanation: "(A) '惩罚' 意味着因违反规则或法律而受到的惩罚。" +
                "<br><br>" +
                "(B) '奖励' 意味着为表彰某人的服务、努力或成就而给予的东西。" +
                "<br><br>" +
                "(C) '表扬' 意味着对某人或某事表示赞同或钦佩。" +
                "<br><br>" +
                "(D) '晋升' 意味着将某人提升到更高职位或级别的行动。"
    },
    {
        id: 4,
        question: "The committee decided that the issue fell outside their __________ and would need to be addressed by another department.",
        chinese_question: "委员会认为这个问题超出了他们的 __________，需要由其他部门来解决。",
        answers: [
                { option: "A", answer: "authority", chinese_answer: "权威", chinese_romanization: "quánwēi" },
                { option: "B", answer: "purview", chinese_answer: "范围", chinese_romanization: "fànwéi" },
                { option: "C", answer: "responsibility", chinese_answer: "责任", chinese_romanization: "zérèn" },
                { option: "D", answer: "concern", chinese_answer: "关心", chinese_romanization: "guānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'purview' means the scope of the influence or concerns of something." +
                "<br><br>" +
                "(A) 'authority' means the power or right to give orders, make decisions, and enforce obedience." +
                "<br><br>" +
                "(C) 'responsibility' means the state or fact of having a duty to deal with something or of having control over someone." +
                "<br><br>" +
                "(D) 'concern' means anxiety; worry.",
        chinese_explanation: "(B) '范围'一词指的是影响或关注的范围。" +
                "<br><br>" +
                "(A) '权威' 意味着有权力或权利发号施令、做决定和执行命令。" +
                "<br><br>" +
                "(C) '责任' 意味着有义务处理某事或控制某人的状态或事实。" +
                "<br><br>" +
                "(D) '关心' 意味着焦虑；担忧。"
    },
    {
        id: 5,
        question: "The lake's __________ was only disturbed by the occasional ripple from a passing fish.",
        chinese_question: "湖面的 __________ 只有偶尔经过的鱼带来的涟漪打破。",
        answers: [
                { option: "A", answer: "turbulence", chinese_answer: "动荡", chinese_romanization: "dòngdàng" },
                { option: "B", answer: "agitation", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
                { option: "C", answer: "activity", chinese_answer: "活动", chinese_romanization: "huódòng" },
                { option: "D", answer: "quiescence", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'quiescence' means the state of being quiet or inactive." +
                "<br><br>" +
                "(A) 'turbulence' means violent or unsteady movement of air or water, or of some other fluid." +
                "<br><br>" +
                "(B) 'agitation' means a state of anxiety or nervous excitement." +
                "<br><br>" +
                "(C) 'activity' means the condition in which things are happening or being done.",
        chinese_explanation: "(D) '静止' 意味着安静或不活动的状态。" +
                "<br><br>" +
                "(A) '动荡' 意味着空气、水或其他流体的剧烈或不稳定运动。" +
                "<br><br>" +
                "(B) '焦虑' 意味着焦虑或紧张兴奋的状态。" +
                "<br><br>" +
                "(C) '活动' 意味着事情正在发生或正在做的状态。"
    },
    {
        id: 6,
        question: "The military __________ showcased the strength and discipline of the armed forces.",
        chinese_question: "军事 __________ 展示了武装力量的力量和纪律。",
        answers: [
            { option: "A", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
            { option: "B", answer: "parade", chinese_answer: "阅兵", chinese_romanization: "yuèbīng" },
            { option: "C", answer: "discussion", chinese_answer: "讨论", chinese_romanization: "tǎolùn" },
            { option: "D", answer: "fight", chinese_answer: "战斗", chinese_romanization: "zhàndòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'parade' means a public procession, especially one celebrating or showing off something." +
                "<br><br>" +
                "(A) 'retreat' means the act of withdrawing." +
                "<br><br>" +
                "(C) 'discussion' means the action or process of talking about something." +
                "<br><br>" +
                "(D) 'fight' means a violent confrontation or struggle.",
        chinese_explanation: "(B) '阅兵' 意味着公众游行，尤其是庆祝或炫耀某事的游行。" +
                "<br><br>" +
                "(A) '撤退' 意味着撤离的行为。" +
                "<br><br>" +
                "(C) '讨论' 意味着谈论某事的行为或过程。" +
                "<br><br>" +
                "(D) '战斗' 意味着暴力的对抗或斗争。"
    },
    {
        id: 7,
    question: "The mystery of the universe is still beyond human __________.",
    chinese_question: "宇宙的奥秘仍然超出了人类的 __________ 。",
    answers: [
        { option: "A", answer: "ken", chinese_answer: "知识范围", chinese_romanization: "zhīshì fànwéi" },
        { option: "B", answer: "awareness", chinese_answer: "意识", chinese_romanization: "yìshí" },
        { option: "C", answer: "perception", chinese_answer: "感知", chinese_romanization: "gǎnzhī" },
        { option: "D", answer: "grasp", chinese_answer: "理解", chinese_romanization: "lǐjiě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ken' means range of knowledge or understanding." +
                "<br><br>" +
                "(B) 'awareness' means the state of being conscious of something." +
                "<br><br>" +
                "(C) 'perception' means the ability to see, hear, or become aware of something through the senses." +
                "<br><br>" +
                "(D) 'grasp' means understanding or comprehension.",
    chinese_explanation: "(A) '知识范围' 意味着知识或理解的范围。" +
                "<br><br>" +
                "(B) '意识' 意味着意识到某事的状态。" +
                "<br><br>" +
                "(C) '感知' 意味着通过感官看到、听到或意识到某事的能力。" +
                "<br><br>" +
                "(D) '理解' 意味着理解或领会。"
    },
    {
        id: 8,
        question: "In negotiations, he was a __________, always seeking the most practical and mutually beneficial outcomes.",
        chinese_question: "在谈判中，他是一个 __________，总是寻求最实用和互惠互利的结果。",
        answers: [
                { option: "A", answer: "romantic", chinese_answer: "浪漫主义者", chinese_romanization: "làngmàn zhǔyì zhě" },
                { option: "B", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" },
                { option: "C", answer: "pessimist", chinese_answer: "悲观主义者", chinese_romanization: "bēiguān zhǔyì zhě" },
                { option: "D", answer: "dreamer", chinese_answer: "梦想家", chinese_romanization: "mèngxiǎngjiā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pragmatist' means a person who is guided more by practical considerations than by ideals." +
                "<br><br>" +
                "(A) 'romantic' means a person who is characterized by or suggests impractical and idealized views of life." +
                "<br><br>" +
                "(C) 'pessimist' means a person who tends to see the worst aspect of things or believe that the worst will happen." +
                "<br><br>" +
                "(D) 'dreamer' means a person who spends a lot of time thinking about or planning enjoyable events that are not likely to happen.",
        chinese_explanation: "(B) '实用主义者'一词意味着一个更多地受到实际考虑而不是理想指导的人。" +
                "<br><br>" +
                "(A) '浪漫主义者' 意味着一个以不切实际和理想化的生活观为特征或暗示的人。" +
                "<br><br>" +
                "(C) '悲观主义者' 意味着一个倾向于看到事情最糟糕方面或相信最糟情况会发生的人。" +
                "<br><br>" +
                "(D) '梦想家' 意味着一个花很多时间思考或计划不太可能发生的愉快事件的人。"
    },
    {
        id: 9,
        question: "The sunrise cast a beautiful __________ across the sky, illuminating the world in golden light.",
        chinese_question: "日出在天空中投下了美丽的 __________，用金色的光辉照亮了世界。",
        answers: [
                { option: "A", answer: "darkness", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" },
                { option: "B", answer: "gloom", chinese_answer: "阴暗", chinese_romanization: "yīn'àn" },
                { option: "C", answer: "shadow", chinese_answer: "阴影", chinese_romanization: "yīnyǐng" },
                { option: "D", answer: "refulgence", chinese_answer: "光辉", chinese_romanization: "guānghuī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'refulgence' means a radiant or resplendent quality or state; brilliance." +
                "<br><br>" +
                "(A) 'darkness' means the partial or total absence of light." +
                "<br><br>" +
                "(B) 'gloom' means partial or total darkness." +
                "<br><br>" +
                "(C) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface.",
        chinese_explanation: "(D) '光辉' 意味着辉煌或灿烂的品质或状态。" +
                "<br><br>" +
                "(A) '黑暗' 意味着部分或完全没有光。" +
                "<br><br>" +
                "(B) '阴暗' 意味着部分或完全的黑暗。" +
                "<br><br>" +
                "(C) '阴影' 意味着一个物体在光线和表面之间产生的黑暗区域或形状。"
    },
    {
        id: 10,
        question: "The minor disagreement at the meeting quickly turned into a major __________, disrupting the entire agenda.",
        chinese_question: "会议上的小分歧迅速变成了一场大的 __________，扰乱了整个议程。",
        answers: [
                { option: "A", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "B", answer: "kerfuffle", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
                { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
                { option: "D", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'kerfuffle' means a commotion or fuss, especially one caused by conflicting views." +
                "<br><br>" +
                "(A) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
                "<br><br>" +
                "(C) 'harmony' means agreement or concord." +
                "<br><br>" +
                "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(B) '混乱' 意味着混乱或小题大做，特别是因意见冲突引起的。" +
                "<br><br>" +
                "(A) '庆祝' 意味着通过参与愉快的、通常是社交的活动来标志对一个重要事件或场合的愉悦。" +
                "<br><br>" +
                "(C) '和谐' 意味着一致或协调。" +
                "<br><br>" +
                "(D) '一致' 意味着意见或感觉上的和谐或一致。"
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
