// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's new policy was intended as a __________ to improve employee satisfaction.",
        chinese_question: "公司新政策旨在作为提高员工满意度的 __________。",
        answers: [
            { option: "A", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "B", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" },
            { option: "C", answer: "question", chinese_answer: "问题", chinese_romanization: "wèntí" },
            { option: "D", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'solution' means a means of solving a problem or dealing with a difficult situation." +
                "<br><br>" +
                "(A) 'mistake' means an action or judgment that is misguided or wrong." +
                "<br><br>" +
                "(C) 'question' means a sentence worded or expressed so as to elicit information." +
                "<br><br>" +
                "(D) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome.",
        chinese_explanation: "(B) '解决方案' 意味着解决问题或处理困难情况的方法。" +
                "<br><br>" +
                "(A) '错误' 意味着误导或错误的行为或判断。" +
                "<br><br>" +
                "(C) '问题' 意味着以引出信息为目的的句子。" +
                "<br><br>" +
                "(D) '问题' 意味着被认为是不受欢迎或有害且需要处理和克服的事项或情况。"
    },
    {
        id: 2,
        question: "Referring to the chaotic and disorganized meeting as a 'productive session' was a complete __________.",
        chinese_question: "将混乱无序的会议称为“富有成效的会议”完全是一个 __________。",
        answers: [
                { option: "A", answer: "misnomer", chinese_answer: "用词不当", chinese_romanization: "yòngcí bùdàng" },
                { option: "B", answer: "accuracy", chinese_answer: "准确", chinese_romanization: "zhǔnquè" },
                { option: "C", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" },
                { option: "D", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'misnomer' figuratively means a wrong or inaccurate use of a term." +
                "<br><br>" +
                "(B) 'accuracy' means the quality or state of being correct or precise." +
                "<br><br>" +
                "(C) 'transparency' means the condition of being transparent." +
                "<br><br>" +
                "(D) 'success' means the accomplishment of an aim or purpose.",
        chinese_explanation: "(A) '用词不当' 在此语境下意指一个错误或不准确的术语使用。" +
                "<br><br>" +
                "(B) '准确' 意味着正确或精确的质量或状态。" +
                "<br><br>" +
                "(C) '透明' 意味着透明的状态。" +
                "<br><br>" +
                "(D) '成功' 意味着目标或目的的实现。"
    },
    {
        id: 3,
        question: "Her sudden outburst of anger was an __________, as she was usually very composed.",
        chinese_question: "她突然的愤怒爆发是一种 __________，因为她通常非常镇定。",
        answers: [
                { option: "A", answer: "norm", chinese_answer: "常态", chinese_romanization: "chángtài" },
                { option: "B", answer: "aberration", chinese_answer: "反常", chinese_romanization: "fǎncháng" },
                { option: "C", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
                { option: "D", answer: "pattern", chinese_answer: "模式", chinese_romanization: "móshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aberration' figuratively means a departure from what is normal, usual, or expected, typically one that is unwelcome." +
                "<br><br>" +
                "(A) 'norm' means something that is usual, typical, or standard." +
                "<br><br>" +
                "(C) 'routine' means a sequence of actions regularly followed; a fixed program." +
                "<br><br>" +
                "(D) 'pattern' means a repeated decorative design.",
        chinese_explanation: "(B) '反常' 在此语境下意指偏离正常、通常或预期的情况，通常是不受欢迎的。" +
                "<br><br>" +
                "(A) '常态' 意味着通常、典型或标准的东西。" +
                "<br><br>" +
                "(C) '常规' 意味着定期遵循的一系列行动；一个固定的程序。" +
                "<br><br>" +
                "(D) '模式' 意味着重复的装饰设计。"
    },
    {
        id: 4,
        question: "Her artistic vision was greatly influenced by the bohemian __________ of the neighborhood, which embraced diversity and creativity.",
        chinese_question: "她的艺术视野深受邻里间波西米亚 __________ 的影响，这里包容多样性和创造力。",
        answers: [
                { option: "A", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
                { option: "B", answer: "singularity", chinese_answer: "独特性", chinese_romanization: "dútè xìng" },
                { option: "C", answer: "seclusion", chinese_answer: "隔离", chinese_romanization: "gélí" },
                { option: "D", answer: "milieu", chinese_answer: "环境", chinese_romanization: "huánjìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'milieu' means a person's social environment." +
                "<br><br>" +
                "(A) 'unity' means the state of being united or joined as a whole." +
                "<br><br>" +
                "(B) 'singularity' means the state, fact, quality, or condition of being singular." +
                "<br><br>" +
                "(C) 'seclusion' means the state of being private and away from other people.",
        chinese_explanation: "(D) '环境'一词意味着一个人的社会环境。" +
                "<br><br>" +
                "(A) '团结' 意味着团结或作为一个整体结合的状态。" +
                "<br><br>" +
                "(B) '独特性' 意味着单一的状态、事实、质量或条件。" +
                "<br><br>" +
                "(C) '隔离' 意味着隐私和远离他人的状态。"
    },
    {
        id: 5,
        question: "The politician's argument was dismissed as __________, as it relied on clever but misleading reasoning rather than sound logic.",
        chinese_question: "这位政治家的论点被视为 __________，因为它依靠的是聪明但具有误导性的推理，而不是健全的逻辑。",
        answers: [
                { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "B", answer: "sophistry", chinese_answer: "诡辩", chinese_romanization: "guǐbiàn" },
                { option: "C", answer: "wisdom", chinese_answer: "智慧", chinese_romanization: "zhìhuì" },
                { option: "D", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sophistry' means the use of clever but false arguments, especially with the intention of deceiving." +
                "<br><br>" +
                "(A) 'clarity' means the quality of being clear, in particular." +
                "<br><br>" +
                "(C) 'wisdom' means the quality of having experience, knowledge, and good judgment." +
                "<br><br>" +
                "(D) 'honesty' means the quality of being honest.",
        chinese_explanation: "(B) '诡辩'一词意味着使用巧妙但虚假的论点，尤其是为了欺骗。" +
                "<br><br>" +
                "(A) '清晰' 意味着清晰的品质，特别是。" +
                "<br><br>" +
                "(C) '智慧' 意味着拥有经验、知识和良好判断力的品质。" +
                "<br><br>" +
                "(D) '诚实' 意味着诚实的品质。"
    },
    {
        id: 6,
        question: "The teacher emphasized the __________ of hard work and dedication, inspiring her students to strive for excellence.",
        chinese_question: "老师强调了努力工作和奉献精神的 __________，激励学生们追求卓越。",
        answers: [
                { option: "A", answer: "precepts", chinese_answer: "准则", chinese_romanization: "zhǔnzé" },
                { option: "B", answer: "challenges", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
                { option: "C", answer: "opportunities", chinese_answer: "机会", chinese_romanization: "jīhuì" },
                { option: "D", answer: "setbacks", chinese_answer: "挫折", chinese_romanization: "cuòzhé" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'precepts' means general rules intended to regulate behavior or thought." +
                "<br><br>" +
                "(B) 'challenges' means difficulties in a job or undertaking that require great effort and determination." +
                "<br><br>" +
                "(C) 'opportunities' means a set of circumstances that makes it possible to do something." +
                "<br><br>" +
                "(D) 'setbacks' means reversals or checks in progress.",
        chinese_explanation: "(A) '准则' 意味着用于规范行为或思想的一般规则。" +
                "<br><br>" +
                "(B) '挑战' 意味着在工作或事业中需要极大努力和决心的困难。" +
                "<br><br>" +
                "(C) '机会' 意味着使某事成为可能的一组情况。" +
                "<br><br>" +
                "(D) '挫折' 意味着进步中的逆转或检查。"
    },
    {
        id: 7,
        question: "The __________ he presented during the meeting was so convincing that it swayed many people's opinions.",
        chinese_question: "他在会议上提出的 __________ 如此有说服力，以至于改变了许多人的看法。",
        answers: [
                { option: "A", answer: "statement", chinese_answer: "陈述", chinese_romanization: "chénshù" },
                { option: "B", answer: "counterargument", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
                { option: "C", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
                { option: "D", answer: "proposal", chinese_answer: "建议", chinese_romanization: "jiànyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'counterargument' means an argument or set of reasons put forward to oppose an idea or theory developed in another argument." +
                "<br><br>" +
                "(A) 'statement' means a definite or clear expression of something in speech or writing." +
                "<br><br>" +
                "(C) 'agreement' means harmony or accordance in opinion or feeling." +
                "<br><br>" +
                "(D) 'proposal' means a plan or suggestion, especially a formal or written one, put forward for consideration or discussion by others.",
        chinese_explanation: "(B) '反驳'一词意味着为反对在另一争论中提出的观点或理论而提出的论点或理由。" +
                "<br><br>" +
                "(A) '陈述' 意味着用语言或文字对某事的明确表达。" +
                "<br><br>" +
                "(C) '同意' 意味着意见或感觉上的和谐或一致。" +
                "<br><br>" +
                "(D) '建议' 意味着特别是正式或书面的计划或建议，由他人提出以供考虑或讨论。"
    },
    {
        id: 8,
        question: "Her __________ to improve educational standards in the region led to significant changes in the school system.",
        chinese_question: "她为改善该地区教育标准的 __________ 导致了学校系统的重大变化。",
        answers: [
                { option: "A", answer: "commission", chinese_answer: "委托", chinese_romanization: "wěituō" },
                { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "C", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bù qíngyuàn" },
                { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'commission' in this context means the act of committing or entrusting a person with a task." +
                "<br><br>" +
                "(B) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(C) 'reluctance' means unwillingness or disinclination to do something." +
                "<br><br>" +
                "(D) 'neglect' means failure to take proper care over something.",
        chinese_explanation: "(A) '委托'在这个上下文中意味着将任务委托给某人的行为。" +
                "<br><br>" +
                "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(C) '不情愿' 意味着不愿意或不愿意做某事。" +
                "<br><br>" +
                "(D) '忽视' 意味着未能妥善照顾某事。"
    },
    {
        id: 9,
        question: "The stock market crash was seen as an __________ in an otherwise stable economic period.",
        chinese_question: "股市崩盘被视为一个本来稳定的经济时期的 __________。",
        answers: [
                { option: "A", answer: "standard", chinese_answer: "标准", chinese_romanization: "biāozhǔn" },
                { option: "B", answer: "aberration", chinese_answer: "反常", chinese_romanization: "fǎncháng" },
                { option: "C", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" },
                { option: "D", answer: "approval", chinese_answer: "认可", chinese_romanization: "rènkě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'aberration' figuratively means a departure from what is normal, usual, or expected, typically one that is unwelcome." +
                "<br><br>" +
                "(A) 'standard' means a level of quality or attainment." +
                "<br><br>" +
                "(C) 'agreement' means harmony or accordance in opinion or feeling." +
                "<br><br>" +
                "(D) 'approval' means the action of officially agreeing to something or accepting something as satisfactory.",
        chinese_explanation: "(B) '反常' 在此语境下意指偏离正常、通常或预期的情况，通常是不受欢迎的。" +
                "<br><br>" +
                "(A) '标准' 意味着质量或成就的水平。" +
                "<br><br>" +
                "(C) '一致' 意味着意见或感觉上的和谐或一致。" +
                "<br><br>" +
                "(D) '认可' 意味着正式同意某事或接受某事为令人满意的行为。"
    },
    {
        id: 10,
        question: "She invested a substantial __________ of her savings in the new venture.",
        chinese_question: "她将相当大 __________ 的储蓄投资于新事业。",
        answers: [
            { option: "A", answer: "portion", chinese_answer: "部分", chinese_romanization: "bùfen" },
            { option: "B", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "C", answer: "distance", chinese_answer: "距离", chinese_romanization: "jùlí" },
            { option: "D", answer: "field", chinese_answer: "领域", chinese_romanization: "lǐngyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'portion' means a part of a whole." +
                "<br><br>" +
                "(B) 'opposition' means resistance or dissent, expressed in action or argument." +
                "<br><br>" +
                "(C) 'distance' means the amount of space between two things or people." +
                "<br><br>" +
                "(D) 'field' means an area of open land, especially one planted with crops or pasture, typically bounded by hedges or fences.",
        chinese_explanation: "(A) '部分' 意味着整体的一部分。" +
                "<br><br>" +
                "(B) '反对' 意味着以行动或争论表达的抵抗或异议。" +
                "<br><br>" +
                "(C) '距离' 意味着两物或两人之间的空间量。" +
                "<br><br>" +
                "(D) '领域' 意味着开阔的土地，尤指种植庄稼或牧场的区域，通常被树篱或围栏围住。"
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
