// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "They had to __________ from taking any hasty actions until they gathered all the facts.",
chinese_question: "他们必须 __________ 采取任何草率行动，直到收集到所有事实。",
answers: [
        { option: "A", answer: "proceed", chinese_answer: "进行", chinese_romanization: "jìnxíng" },
        { option: "B", answer: "forbear", chinese_answer: "克制", chinese_romanization: "kèzhì" },
        { option: "C", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
        { option: "D", answer: "finalize", chinese_answer: "完成", chinese_romanization: "wánchéng" }
],
correctAnswer: "B",
explanation: "(B) 'forbear' means to refrain from doing something, especially from responding with anger or impatience." +
        "<br><br>" +
        "(A) 'proceed' means to begin or continue a course of action." +
        "<br><br>" +
        "(C) 'confirm' means to establish the truth or correctness of something previously believed, suspected, or feared to be the case." +
        "<br><br>" +
        "(D) 'finalize' means to complete or agree on a finished and definitive version of something.",
chinese_explanation: "(B) '克制' 意味着避免做某事，尤其是避免愤怒或不耐烦地回应。" +
        "<br><br>" +
        "(A) '进行' 意味着开始或继续一项行动。" +
        "<br><br>" +
        "(C) '确认' 意味着确定之前认为、怀疑或担心的事实或正确性。" +
        "<br><br>" +
        "(D) '完成' 意味着完成或同意某事的最终版本。"
    },
    {
        id: 2,
question: "Historians often __________ influential leaders from the past, sometimes overlooking their flaws and focusing only on their achievements.",
chinese_question: "历史学家经常 __________ 过去有影响力的领导人，有时会忽视他们的缺点，只关注他们的成就。",
answers: [
    { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
    { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "C", answer: "lionize", chinese_answer: "崇拜", chinese_romanization: "chóngbài" },
    { option: "D", answer: "ridicule", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
],
correctAnswer: "C",
explanation: "(C) 'lionize' means to give a lot of public attention and approval to someone; to treat someone as a celebrity." +
    "<br><br>" +
    "(A) 'criticize' means to express disapproval of someone or something." +
    "<br><br>" +
    "(B) 'ignore' means to refuse to take notice of or acknowledge." +
    "<br><br>" +
    "(D) 'ridicule' means to make fun of someone or something in a cruel or harsh way.",
chinese_explanation: "(C) '崇拜' 一词意味着给予某人很多公众的关注和认可；把某人视为名人。" +
    "<br><br>" +
    "(A) '批评' 意味着对某人或某事表示不满。" +
    "<br><br>" +
    "(B) '忽视' 意味着拒绝注意或承认。" +
    "<br><br>" +
    "(D) '嘲笑' 意味着以残酷或严厉的方式取笑某人或某事。"
    },
    {
        id: 3,
    question: "The new evidence presented in court was enough to __________ the previous verdict, overturning the decision and clearing the defendant's name.",
    chinese_question: "法庭上提出的新证据足以 __________ 先前的判决，推翻了这一决定并洗清了被告的名誉。",
    answers: [
        { option: "A", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "quash", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
        { option: "C", answer: "verify", chinese_answer: "验证", chinese_romanization: "yànzhèng" },
        { option: "D", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'quash' means to reject or void, especially by legal procedure." +
        "<br><br>" +
        "(A) 'uphold' means to support or maintain." +
        "<br><br>" +
        "(C) 'verify' means to make sure or demonstrate that something is true." +
        "<br><br>" +
        "(D) 'enforce' means to compel observance of or compliance with a law, rule, or obligation.",
    chinese_explanation: "(B) '撤销' 意味着拒绝或使无效，特别是通过法律程序。" +
        "<br><br>" +
        "(A) '支持' 意味着支持或维持。" +
        "<br><br>" +
        "(C) '验证' 意味着确保或证明某事是真实的。" +
        "<br><br>" +
        "(D) '执行' 意味着强制遵守或遵循法律、规则或义务。"
    },
    {
        id: 4,
        question: "The politician was forced to __________ his statement by issuing an apology and officially withdrawing his previous remarks, after it sparked widespread criticism.",
        chinese_question: "这位政客在其声明引起广泛批评后，被迫通过发布道歉并正式撤回他之前的言论来 __________ 他的声明。",
        answers: [
            { option: "A", answer: "repeat", chinese_answer: "重复", chinese_romanization: "chóngfù" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "highlight", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
            { option: "D", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'retract' means to withdraw a statement or accusation as untrue or unjustified." +
            "<br><br>" +
            "(A) 'repeat' means to say again something one has already said." +
            "<br><br>" +
            "(B) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'highlight' means to emphasize or make prominent.",
        chinese_explanation: "(D) '撤回'一词意味着撤回一项声明或指控，认为其不真实或不公正。" +
            "<br><br>" +
            "(A) '重复' 意味着再次说某人已经说过的话。" +
            "<br><br>" +
            "(B) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '强调' 意味着强调或突出。"
    },
    {
        id: 5,
question: "She was the victim of __________ when false rumours about her personal life were spread by a jealous colleague.",
chinese_question: "当一个嫉妒的同事散布关于她私生活的虚假谣言时，她成了 __________ 的受害者。",
answers: [
    { option: "A", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
    { option: "B", answer: "calumny", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
    { option: "C", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
    { option: "D", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" }
],
correctAnswer: "B",
explanation: "(B) 'calumny' means the making of false and defamatory statements about someone in order to damage their reputation; slander." +
    "<br><br>" +
    "(A) 'admiration' means respect and warm approval." +
    "<br><br>" +
    "(C) 'honesty' means the quality of being honest." +
    "<br><br>" +
    "(D) 'integrity' means the quality of being honest and having strong moral principles.",
chinese_explanation: "(B) '诽谤'一词意味着为了损害某人的声誉而散布虚假和诽谤性言论；诽谤。" +
    "<br><br>" +
    "(A) '钦佩' 意味着尊重和热情的赞同。" +
    "<br><br>" +
    "(C) '诚实' 意味着诚实的品质。" +
    "<br><br>" +
    "(D) '正直' 意味着诚实并具有强烈道德原则的品质。"
    },
    {
        id: 6,
question: "The company __________ the expertise of several consultants to improve their business strategy.",
chinese_question: "公司 __________ 了几位顾问的专业知识来改进他们的商业策略。",
answers: [
    { option: "A", answer: "enlisted", chinese_answer: "寻求", chinese_romanization: "xúnqiú" },
    { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "C", answer: "discarded", chinese_answer: "丢弃", chinese_romanization: "diūqì" },
    { option: "D", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
],
correctAnswer: "A",
explanation: "(A) 'enlisted' means secured the support or help of someone." +
    "<br><br>" +
    "(B) 'ignored' means failed to consider or deliberately disregarded." +
    "<br><br>" +
    "(C) 'discarded' means got rid of as no longer useful or desirable." +
    "<br><br>" +
    "(D) 'dismissed' means decided something was not important.",
chinese_explanation: "(A) '寻求' 意味着获得某人的支持或帮助。" +
    "<br><br>" +
    "(B) '忽视' 意味着未能考虑或故意忽略。" +
    "<br><br>" +
    "(C) '丢弃' 意味着丢弃不再有用或不需要的东西。" +
    "<br><br>" +
    "(D) '解雇' 意味着认为某事不重要。"
    },
    {
        id: 7,
        question: "In an attempt to impress the judges, the contestant chose to __________ her performance with excessive theatrics.",
        chinese_question: "为了打动评委，参赛者选择用过多的戏剧效果来 __________ 她的表演。",
        answers: [
            { option: "A", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "B", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "bedizen", chinese_answer: "装饰华丽", chinese_romanization: "zhuāngshì huálì" },
            { option: "D", answer: "streamline", chinese_answer: "精简", chinese_romanization: "jīngjiǎn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bedizen' means to dress or decorate in a gaudy or showy manner." +
            "<br><br>" +
            "(A) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(B) 'neglect' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'streamline' means to make an organization or system more efficient and effective by employing faster or simpler working methods.",
        chinese_explanation: "(C) '装饰华丽' 意味着以艳丽或炫耀的方式装饰。" +
            "<br><br>" +
            "(A) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(B) '忽视' 意味着未能适当照顾。" +
            "<br><br>" +
            "(D) '精简' 意味着通过采用更快或更简单的工作方法使组织或系统更高效。"
    },
    {
        id: 8,
        question: "He felt no __________ about lying to get the job he wanted, showing no signs of guilt or remorse for his actions.",
        chinese_question: "他对撒谎以获得自己想要的工作毫无 __________，对自己的行为没有表现出任何内疚或悔意。",
        answers: [
                { option: "A", answer: "compunction", chinese_answer: "内疚", chinese_romanization: "nèijiù" },
                { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
                { option: "C", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
                { option: "D", answer: "relief", chinese_answer: "宽慰", chinese_romanization: "kuānwèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'compunction' means a feeling of guilt or moral scruple that prevents or follows the doing of something bad." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'ignorance' means lack of knowledge or information." +
            "<br><br>" +
            "(D) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress.",
        chinese_explanation: "(A) '内疚' 意味着一种内疚感或道德上的不安，阻止或跟随做坏事之后。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(C) '无知' 意味着缺乏知识或信息。" +
            "<br><br>" +
            "(D) '宽慰' 意味着在摆脱焦虑或痛苦后的放心和放松。"
    },
    {
        id: 9,
        question: "The unexpected bonus made everyone in the office want to __________ with joy, jumping and celebrating their good fortune.",
        chinese_question: "意外的奖金让办公室里的每个人都想 __________ 以表达喜悦，跳跃并庆祝他们的好运。",
        answers: [
            { option: "A", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "resent", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
            { option: "D", answer: "caper", chinese_answer: "欢跃", chinese_romanization: "huānyuè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'caper' means to skip or dance about in a lively or playful way." +
            "<br><br>" +
            "(A) 'hide' means to put or keep out of sight." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'resent' means to feel bitterness or indignation at a circumstance, action, or person.",
        chinese_explanation: "(D) '欢跃' 意味着以活泼或嬉戏的方式跳跃或舞动。" +
            "<br><br>" +
            "(A) '隐藏' 意味着使某物不被看到。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '怨恨' 意味着对情况、行为或人感到苦涩或愤怒。"
    },
    {
        id: 10,
    question: "Her difficult childhood experiences served to __________ her character, making her strong and compassionate.",
    chinese_question: "她艰难的童年经历 __________ 了她的性格，使她变得坚强而富有同情心。",
    answers: [
        { option: "A", answer: "chasten", chinese_answer: "磨练", chinese_romanization: "móliàn" },
        { option: "B", answer: "pamper", chinese_answer: "娇惯", chinese_romanization: "jiāoguàn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xiāoruò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'chasten' means to have a restraining or moderating effect on; to discipline or punish in order to correct." +
        "<br><br>" +
        "(B) 'pamper' means to indulge with every attention, comfort, and kindness; spoil." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'weaken' means to make or become less strong.",
    chinese_explanation: "(A) '磨练' 意味着有抑制或缓和的作用；为了纠正而惩戒或处罚。" +
        "<br><br>" +
        "(B) '娇惯' 意味着以每一种关心、舒适和善意来纵容；宠坏。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '削弱' 意味着使变得不那么强。"
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
