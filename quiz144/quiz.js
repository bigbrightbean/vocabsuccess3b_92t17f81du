// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
question: "The debate was __________ by time constraints, forcing participants to keep their responses brief.",
chinese_question: "辩论受到时间限制的 __________，迫使参与者简短回答。",
answers: [
    { option: "A", answer: "circumscribed", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
    { option: "B", answer: "prolonged", chinese_answer: "延长", chinese_romanization: "yáncháng" },
    { option: "C", answer: "unrestricted", chinese_answer: "不受限制", chinese_romanization: "bù shòu xiànzhì" },
    { option: "D", answer: "extensive", chinese_answer: "广泛", chinese_romanization: "guǎngfàn" }
],
correctAnswer: "A",
explanation: "(A) 'circumscribed' figuratively means restricted or limited." +
    "<br><br>" +
    "(B) 'prolonged' means extended in duration." +
    "<br><br>" +
    "(C) 'unrestricted' means not limited or restricted." +
    "<br><br>" +
    "(D) 'extensive' means covering or affecting a large area.",
chinese_explanation: "(A) '限制' 在此语境下意指受到限制或约束。" +
    "<br><br>" +
    "(B) '延长' 意味着持续时间延长。" +
    "<br><br>" +
    "(C) '不受限制' 意味着没有限制或约束。" +
    "<br><br>" +
    "(D) '广泛' 意味着覆盖或影响大面积。"
    },
    {
        id: 2,
        question: "The sudden change in plans did not __________ her; she adapted quickly and efficiently.",
        chinese_question: "计划的突然变更并没有让她感到 __________；她迅速且有效地适应了。",
        answers: [
                { option: "A", answer: "trouble", chinese_answer: "困扰", chinese_romanization: "kùnrǎo" },
                { option: "B", answer: "disconcert", chinese_answer: "使不安", chinese_romanization: "shǐ bù'ān" },
                { option: "C", answer: "reassure", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
                { option: "D", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disconcert' means to disturb the composure of; unsettle." +
                "<br><br>" +
                "(A) 'trouble' means to cause distress or worry to someone." +
                "<br><br>" +
                "(C) 'reassure' means to say or do something to remove the doubts and fears of someone." +
                "<br><br>" +
                "(D) 'soothe' means to gently calm a person or their feelings.",
        chinese_explanation: "(B) '使不安' 意味着打扰某人的镇定；使不安。" +
                "<br><br>" +
                "(A) '困扰' 意味着使某人感到不安或担心。" +
                "<br><br>" +
                "(C) '安慰' 意味着说或做某事以消除某人的疑虑和恐惧。" +
                "<br><br>" +
                "(D) '抚慰' 意味着轻轻地平静一个人或他们的感情。"
    },
    {
        id: 3,
    question: "During the crisis, the government quickly __________ the help of international experts to ensure they had the necessary support and advice to handle the situation.",
    chinese_question: "在危机期间，为确保他们获得必要的支持和建议，政府迅速 __________ 了国际专家的帮助。",
    answers: [
        { option: "A", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "B", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "hindered", chinese_answer: "妨碍", chinese_romanization: "fáng'ài" },
        { option: "D", answer: "enlisted", chinese_answer: "寻求", chinese_romanization: "xúnqiú" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'enlisted' means secured the support or help of someone." +
        "<br><br>" +
        "(A) 'avoided' means kept away from or stopped oneself from doing something." +
        "<br><br>" +
        "(B) 'neglected' means failed to care for properly." +
        "<br><br>" +
        "(C) 'hindered' means created difficulties for someone, resulting in delay or obstruction.",
    chinese_explanation: "(D) '寻求' 意味着获得某人的支持或帮助。" +
        "<br><br>" +
        "(A) '避免' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(B) '忽视' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(C) '妨碍' 意味着为某人制造困难，导致延迟或阻碍。"
    },
    {
        id: 4,
    question: "The community decided to __________ together in the face of adversity, recognizing the importance of unity and mutual support during difficult times.",
    chinese_question: "社区决定在逆境中 __________ 在一起，认识到在困难时期团结和相互支持的重要性。",
    answers: [
        { option: "A", answer: "cleave", chinese_answer: "团结", chinese_romanization: "tuánjié" },
        { option: "B", answer: "disperse", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
        { option: "C", answer: "vacillate", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "D", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cleave' means to adhere strongly to a particular pursuit or belief, or to stick closely to something." +
        "<br><br>" +
        "(B) 'disperse' means to distribute or spread over a wide area." +
        "<br><br>" +
        "(C) 'vacillate' means to waver between different opinions or actions; be indecisive." +
        "<br><br>" +
        "(D) 'resist' means to withstand the action or effect of.",
    chinese_explanation: "(A) '团结' 意味着坚决追求或信奉某个信念，或紧密依附于某物。" +
        "<br><br>" +
        "(B) '分散' 意味着分布或传播到广泛区域。" +
        "<br><br>" +
        "(C) '犹豫' 意味着在不同意见或行动之间摇摆不定；优柔寡断。" +
        "<br><br>" +
        "(D) '抵抗' 意味着承受住行动或效果。"
    },
    {
        id: 5,
    question: "His parents' constant pressure __________ him into choosing a career he didn't enjoy, leaving him feeling trapped and unfulfilled.",
    chinese_question: "他父母的不断施压 __________ 他选择了自己不喜欢的职业，使他感到被困住和不满足。",
    answers: [
        { option: "A", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "B", answer: "exasperated", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "C", answer: "coerced", chinese_answer: "强迫", chinese_romanization: "qiángpò" },
        { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'coerced' means to be forced or compelled to do something by using force or threats, used figuratively here." +
        "<br><br>" +
        "(A) 'encouraged' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(B) 'exasperated' means to irritate intensely; infuriate." +
        "<br><br>" +
        "(D) 'supported' means to give assistance to, especially financially; enable to function or act.",
    chinese_explanation: "(C) '强迫' 意味着被迫或被强制做某事，这里是比喻用法。" +
        "<br><br>" +
        "(A) '鼓励' 意味着给某人支持、信心或希望。" +
        "<br><br>" +
        "(B) '激怒' 意味着强烈地激怒；激怒。" +
        "<br><br>" +
        "(D) '支持' 意味着提供帮助，特别是经济上；使能够运作或行动。"
    },
    {
        id: 6,
    question: "Despite the chaos around him, with people panicking and loud noises everywhere, he managed to __________ his fears and stay calm.",
    chinese_question: "尽管周围一片混乱，人们惊慌失措，四处喧闹，他还是设法 __________ 了自己的恐惧，保持冷静。",
    answers: [
        { option: "A", answer: "exhibit", chinese_answer: "展示", chinese_romanization: "zhǎnshì" },
        { option: "B", answer: "muffle", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
        { option: "C", answer: "heighten", chinese_answer: "增强", chinese_romanization: "zēngqiáng" },
        { option: "D", answer: "declare", chinese_answer: "宣布", chinese_romanization: "xuānbù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'muffle' figuratively means to suppress or hide." +
        "<br><br>" +
        "(A) 'exhibit' means to show." +
        "<br><br>" +
        "(C) 'heighten' means to increase." +
        "<br><br>" +
        "(D) 'declare' means to announce.",
    chinese_explanation: "(B) '抑制' 一词在比喻上意味着压抑或隐藏。" +
        "<br><br>" +
        "(A) '展示' 意味着展示。" +
        "<br><br>" +
        "(C) '增强' 意味着增加。" +
        "<br><br>" +
        "(D) '宣布' 意味着宣布。"
    },
    {
        id: 7,
    question: "He decided to __________ on the problem overnight before making a final decision, as he believed a thorough analysis was necessary.",
    chinese_question: "他决定在一夜之间 __________ 这个问题，然后再做最终决定，因为他认为有必要进行深入分析。",
    answers: [
        { option: "A", answer: "cogitate", chinese_answer: "深思", chinese_romanization: "shēnsī" },
        { option: "B", answer: "obfuscate", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
        { option: "C", answer: "dismiss", chinese_answer: "不理会", chinese_romanization: "bù lǐhuì" },
        { option: "D", answer: "expedite", chinese_answer: "加快", chinese_romanization: "jiākuài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'cogitate' means to think deeply about something." +
        "<br><br>" +
        "(B) 'obfuscate' means to render obscure, unclear, or unintelligible." +
        "<br><br>" +
        "(C) 'dismiss' means to treat as unworthy of serious consideration." +
        "<br><br>" +
        "(D) 'expedite' means to make an action or process happen sooner or be accomplished more quickly.",
    chinese_explanation: "(A) '深思' 意味着对某事进行深入思考。" +
        "<br><br>" +
        "(B) '混淆' 意味着使模糊不清或难以理解。" +
        "<br><br>" +
        "(C) '不理会' 意味着认为不值得认真考虑。" +
        "<br><br>" +
        "(D) '加快' 意味着使某个行动或过程更快发生或更迅速完成。"
    },
    {
        id: 8,
    question: "The scandal was intended to __________ the politician's clean image, aiming to undermine his reputation and credibility.",
    chinese_question: "丑闻旨在 __________ 政治家的清白形象，意在破坏他的声誉和信誉。",
    answers: [
        { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "C", answer: "besmirch", chinese_answer: "玷污", chinese_romanization: "diànwū" },
        { option: "D", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'besmirch' means to damage someone's reputation or honor." +
        "<br><br>" +
        "(A) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(B) 'protect' means to keep safe from harm or injury." +
        "<br><br>" +
        "(D) 'honor' means to regard with great respect.",
    chinese_explanation: "(C) '玷污' 意味着损害某人的声誉或荣誉。" +
        "<br><br>" +
        "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" +
        "(B) '保护' 意味着使其免受伤害或损害。" +
        "<br><br>" +
        "(D) '尊敬' 意味着对某人表示尊敬。"
    },
    {
        id: 9,
    question: "To __________ fraud, the company implemented stricter verification processes.",
    chinese_question: "为了 __________ 欺诈，公司实施了更严格的验证程序。",
    answers: [
        { option: "A", answer: "promote", chinese_answer: "促进", chinese_romanization: "cùjìn" },
        { option: "B", answer: "ensure", chinese_answer: "确保", chinese_romanization: "quèbǎo" },
        { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "D", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'prevent' means to stop something from happening or arising." +
        "<br><br>" +
        "(A) 'promote' means to further the progress of something, especially a cause, venture, or aim; support or actively encourage." +
        "<br><br>" +
        "(B) 'ensure' means to make certain that something will occur or be the case." +
        "<br><br>" +
        "(C) 'conceal' means to keep something secret or prevent it from being known.",
    chinese_explanation: "(D) '防止' 意味着阻止某事发生或出现。" +
        "<br><br>" +
        "(A) '促进' 意味着促进某事的进展，尤其是事业、冒险或目标；支持或积极鼓励。" +
        "<br><br>" +
        "(B) '确保' 意味着确保某事会发生或成为事实。" +
        "<br><br>" +
        "(C) '隐藏' 意味着保密某事或防止其被知晓。"
    },
    {
        id: 10,
    question: "He tends to __________ minor details, repeatedly discussing and over-analyzing them, which often frustrates his team members.",
    chinese_question: "他倾向于 __________ 细枝末节，反复讨论和过度分析，这常常使他的团队成员感到沮丧。",
    answers: [
        { option: "A", answer: "belabor", chinese_answer: "过分强调", chinese_romanization: "guòfèn qiángdiào" },
        { option: "B", answer: "underplay", chinese_answer: "淡化", chinese_romanization: "dànhuà" },
        { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "D", answer: "downplay", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'belabor' means to argue or elaborate on a subject excessively." +
        "<br><br>" +
        "(B) 'underplay' means to make something seem less important than it really is." +
        "<br><br>" +
        "(C) 'simplify' means to make something simpler or easier to do or understand." +
        "<br><br>" +
        "(D) 'downplay' means to make something appear less important than it really is.",
    chinese_explanation: "(A) '过分强调' 意味着过度地争论或阐述某个主题。" +
        "<br><br>" +
        "(B) '淡化' 意味着使某事看起来不那么重要。" +
        "<br><br>" +
        "(C) '简化' 意味着使某事更简单或更容易做或理解。" +
        "<br><br>" +
        "(D) '贬低' 意味着使某事看起来不那么重要。"
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
