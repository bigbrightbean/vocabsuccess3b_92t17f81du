// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's name became __________ with high-quality products and exceptional customer service.",
        chinese_question: "公司的名字成为高质量产品和卓越客户服务的 __________ 。",
        answers: [
            { option: "A", answer: "synonymous", chinese_answer: "同义的", chinese_romanization: "tóngyì de" },
            { option: "B", answer: "infamous", chinese_answer: "声名狼藉的", chinese_romanization: "shēngmíng lángjí de" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "D", answer: "controversial", chinese_answer: "有争议的", chinese_romanization: "yǒu zhēngyì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'synonymous' means having the same or nearly the same meaning as another word or phrase." + 
            "<br><br>" +
            "(B) 'infamous' means well known for some bad quality or deed." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'controversial' means giving rise or likely to give rise to public disagreement.",
        chinese_explanation: "(A) '同义的' 意味着与另一个词或短语具有相同或几乎相同的意思。" + 
            "<br><br>" +
            "(B) '声名狼藉的' 意味着以某些不良品质或行为而闻名的。" +
            "<br><br>" +
            "(C) '无关的' 意味着不相关的或不连接的。" +
            "<br><br>" +
            "(D) '有争议的' 意味着引起或可能引起公众争议的。"
    },
    {
        id: 2,
        question: "His __________ approach to different cultures made him an excellent ambassador.",
        chinese_question: "他对不同文化的 __________ 态度使他成为一名出色的大使。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "B", answer: "tolerant", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "C", answer: "prejudiced", chinese_answer: "有偏见", chinese_romanization: "yǒu piānjiàn" },
            { option: "D", answer: "biased", chinese_answer: "偏见", chinese_romanization: "piānjiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice; bigoted." +
            "<br><br>" +
            "(D) 'biased' means unfairly prejudiced for or against someone or something.",
        chinese_explanation: "(B) '宽容' 意味着愿意允许存在自己不一定同意的意见或行为。" +
            "<br><br>" +
            "(A) '敌对' 意味着不友好；对抗性。" +
            "<br><br>" +
            "(C) '有偏见' 意味着有或表现出一种源于偏见的厌恶或不信任；偏执的。" +
            "<br><br>" +
            "(D) '偏见' 意味着对某人或某事不公平的偏爱或偏见。"
    },
    {
        id: 3,
        question: "Good leadership is __________ for the success of any organization.",
        chinese_question: "良好的领导对任何组织的成功都是__________的。",
        answers: [
            { option: "A", answer: "unnecessary", chinese_answer: "不必要的", chinese_romanization: "bù bìyào de" },
            { option: "B", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" },
            { option: "C", answer: "dispensable", chinese_answer: "可有可无的", chinese_romanization: "kě yǒu kě wú de" },
            { option: "D", answer: "indispensable", chinese_answer: "必不可少的", chinese_romanization: "bì bùkě shǎo de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'indispensable' means absolutely necessary. Figuratively, it can mean being crucial or essential." + 
            "<br><br>" +
            "(A) 'unnecessary' means not needed." +
            "<br><br>" +
            "(B) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(C) 'dispensable' means able to be replaced or done without; superfluous.",
        chinese_explanation: "(D) '必不可少的'一词意味着绝对必要的。比喻地，它可以表示至关重要或必不可少的。" + 
            "<br><br>" +
            "(A) '不必要的' 意味着不需要的。" +
            "<br><br>" +
            "(B) '可选的' 意味着可供选择但不是强制的。" +
            "<br><br>" +
            "(C) '可有可无的' 意味着可以替代或不需要的；多余的。"
    },
    {
        id: 4,
    question: "Her __________ compliments towards the new manager seemed insincere and overly flattering.",
    chinese_question: "她对新经理的 __________ 赞美显得不真诚且过于奉承。",
    answers: [
        { option: "A", answer: "sincere", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
        { option: "B", answer: "obsequious", chinese_answer: "谄媚", chinese_romanization: "chǎnmèi" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "D", answer: "assertive", chinese_answer: "自信", chinese_romanization: "zìxìn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'obsequious' means excessively eager to please or obey." +
        "<br><br>" +
        "(A) 'sincere' means free from pretense or deceit; genuine." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'assertive' means having or showing a confident and forceful personality.",
    chinese_explanation: "(B) '谄媚' 意味着过度渴望取悦或服从。" +
        "<br><br>" +
        "(A) '真诚' 意味着没有虚伪或欺骗；真实的。" +
        "<br><br>" +
        "(C) '冷漠' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(D) '自信' 意味着拥有或展示自信和有力的个性。"
    },
    {
        id: 5,
    question: "His decision to ignore the warning signs proved to be __________ for the project.",
    chinese_question: "他无视警告信号的决定对项目来说是__________的。",
    answers: [
        { option: "A", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
        { option: "B", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
        { option: "C", answer: "fatal", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" },
        { option: "D", answer: "minor", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'fatal' means causing death. Figuratively, it can mean causing disaster or failure." +
        "<br><br>" +
        "(A) 'harmless' means not able or likely to cause harm." +
        "<br><br>" +
        "(B) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'minor' means lesser in importance, seriousness, or significance.",
    chinese_explanation: "(C) '致命的' 一词意味着导致死亡的。比喻地，它可以表示导致灾难或失败的。" +
        "<br><br>" +
        "(A) '无害的' 意味着不能或不太可能造成伤害的。" +
        "<br><br>" +
        "(B) '微不足道的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(D) '轻微的' 意味着在重要性、严重性或意义上较小的。"
    },
    {
        id: 6,
        question: "Her __________ demeanour helped to defuse the tense situation in the meeting.",
        chinese_question: "她的 __________ 举止帮助缓和了会议中的紧张局面。",
        answers: [
            { option: "A", answer: "aggressive", chinese_answer: "侵略性的", chinese_romanization: "qīnlüè xìng de" },
            { option: "B", answer: "pacific", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
            { option: "C", answer: "confrontational", chinese_answer: "对抗的", chinese_romanization: "duìkàng de" },
            { option: "D", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pacific' means peaceful in character or intent." +
            "<br><br>" +
            "(A) 'aggressive' means ready or likely to attack or confront; characterized by or resulting from aggression." +
            "<br><br>" +
            "(C) 'confrontational' means tending to deal with situations in an aggressive way; hostile or argumentative." +
            "<br><br>" +
            "(D) 'hostile' means unfriendly; antagonistic.",
        chinese_explanation: "(B) '和平的' 意味着性格或意图和平的。" +
            "<br><br>" +
            "(A) '侵略性的' 意味着准备或可能攻击或对抗的；以侵略为特征或结果的。" +
            "<br><br>" +
            "(C) '对抗的' 意味着倾向于以攻击性方式处理情况的；敌对或好争论的。" +
            "<br><br>" +
            "(D) '敌对的' 意味着不友好的；敌对的."
    },
    {
        id: 7,
    question: "His __________ ideas about social reform were met with both enthusiasm and resistance.",
    chinese_question: "他关于社会改革的__________想法既受到热情的欢迎也遇到抵制。",
    answers: [
        { option: "A", answer: "conservative", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
        { option: "B", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "C", answer: "conventional", chinese_answer: "惯例的", chinese_romanization: "guànlì de" },
        { option: "D", answer: "radical", chinese_answer: "激进的", chinese_romanization: "jījìn de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'radical' means relating to or affecting the fundamental nature of something; far-reaching or thorough. Figuratively, it can mean being very different from the usual or traditional." +
        "<br><br>" +
        "(A) 'conservative' means holding to traditional attitudes and values and cautious about change or innovation." +
        "<br><br>" +
        "(B) 'traditional' means existing in or as part of a tradition; long-established." +
        "<br><br>" +
        "(C) 'conventional' means based on or in accordance with what is generally done or believed.",
    chinese_explanation: "(D) '激进的'一词意味着涉及或影响事物的基本性质的；深远的或彻底的。比喻地，它可以表示与通常或传统非常不同的。" +
        "<br><br>" +
        "(A) '保守的' 意味着坚持传统态度和价值观并对变化或创新持谨慎态度的。" +
        "<br><br>" +
        "(B) '传统的' 意味着作为传统的一部分存在的；长期存在的。" +
        "<br><br>" +
        "(C) '惯例的' 意味着基于或符合通常所做或所信的。"
    },
    {
        id: 8,
    question: "She showed a __________ concern for her students, always making sure they were well cared for.",
    chinese_question: "她对学生表现出 __________ 的关心，总是确保他们得到良好的照顾。",
    answers: [
        { option: "A", answer: "paternal", chinese_answer: "父亲的", chinese_romanization: "fùqīn de" },
        { option: "B", answer: "maternal", chinese_answer: "母亲的", chinese_romanization: "mǔqīn de" },
        { option: "C", answer: "detached", chinese_answer: "分离的", chinese_romanization: "fēnlí de" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'maternal' means related to a mother, especially during pregnancy or shortly after childbirth." +
        "<br><br>" +
        "(A) 'paternal' means related to a father." +
        "<br><br>" +
        "(C) 'detached' means separate or disconnected." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(B) '母亲的' 意味着与母亲有关，特别是在怀孕期间或分娩后不久。" +
        "<br><br>" +
        "(A) '父亲的' 意味着与父亲有关。" +
        "<br><br>" +
        "(C) '分离的' 意味着分离或断开。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心。"
    },
    {
        id: 9,
    question: "Her __________ efforts to improve her skills paid off when she received a promotion.",
    chinese_question: "她 __________ 提高技能的努力得到了回报，当她获得了晋升。",
    answers: [
      { option: "A", answer: "deliberate", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" },
      { option: "B", answer: "accidental", chinese_answer: "意外的", chinese_romanization: "yìwài de" },
      { option: "C", answer: "random", chinese_answer: "随机的", chinese_romanization: "suíjī de" },
      { option: "D", answer: "inattentive", chinese_answer: "不专心的", chinese_romanization: "bù zhuānxīn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'deliberate' means done consciously and intentionally." +
      "<br><br>" +
      "(B) 'accidental' means happening by chance, unintentionally, or unexpectedly." +
      "<br><br>" +
      "(C) 'random' means made, done, happening, or chosen without method or conscious decision." +
      "<br><br>" +
      "(D) 'inattentive' means not paying attention.",
    chinese_explanation: "(A) '深思熟虑的' 意味着有意识地和有意地做的。" +
      "<br><br>" +
      "(B) '意外的' 意味着偶然发生的，无意的或出乎意料的。" +
      "<br><br>" +
      "(C) '随机的' 意味着没有方法或有意识决定的；随意的。" +
      "<br><br>" +
      "(D) '不专心的' 意味着不注意的。"
    },
    {
        id: 10,
        question: "The __________ landscape of the mountain lake brought a sense of peace to everyone who visited.",
        chinese_question: "山湖的__________风景给所有参观的人带来了宁静的感觉。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hǔnluàn de" },
            { option: "B", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
            { option: "C", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "D", answer: "noisy", chinese_answer: "吵闹的", chinese_romanization: "chǎonào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'serene' means calm, peaceful, and untroubled; tranquil." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'turbulent' means characterized by conflict, disorder, or confusion; not controlled or calm." +
            "<br><br>" +
            "(D) 'noisy' means making or given to making a lot of noise.",
        chinese_explanation: "(C) '宁静的'一词意味着平静、和平、不受干扰的；宁静的。" +
            "<br><br>" +
            "(A) '混乱的' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '动荡的' 意味着以冲突、无序或混乱为特征的；不受控制或不平静的。" +
            "<br><br>" +
            "(D) '吵闹的' 意味着制造或喜欢制造很多噪音的."
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
