// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Their relationship was __________ after the argument, needing time to heal.",
        chinese_question: "争吵之后，他们的关系变得 __________ ，需要时间来修复。",
        answers: [
            { option: "A", answer: "solid", chinese_answer: "稳固", chinese_romanization: "wěngù" },
            { option: "B", answer: "unbreakable", chinese_answer: "不可破坏", chinese_romanization: "bùkě pòhuài" },
            { option: "C", answer: "enduring", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱", chinese_romanization: "cuìruò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fragile' means easily broken or damaged." +
            "<br><br>" +
            "(A) 'solid' means firm and stable in shape; not liquid or fluid." +
            "<br><br>" +
            "(B) 'unbreakable' means not able to be broken easily." +
            "<br><br>" +
            "(C) 'enduring' means continuing or long-lasting.",
        chinese_explanation: "(D) '脆弱' 意味着容易破碎或损坏。" +
            "<br><br>" +
            "(A) '稳固' 意味着形状坚固稳定；不是液体或流体。" +
            "<br><br>" +
            "(B) '不可破坏' 意味着不容易被破坏。" +
            "<br><br>" +
            "(C) '持久' 意味着持续或长久。"
    },
    {
        id: 2,
    question: "Her __________ attitude in the face of criticism earned her respect from colleagues, as she never let negative comments affect her work.",
    chinese_question: "她在面对批评时表现出的 __________ 态度赢得了同事们的尊重，因为她从不让负面评论影响她的工作。",
    answers: [
        { option: "A", answer: "stoic", chinese_answer: "坚忍的", chinese_romanization: "jiānrěn de" },
        { option: "B", answer: "reactive", chinese_answer: "反应的", chinese_romanization: "fǎnyìng de" },
        { option: "C", answer: "volatile", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" },
        { option: "D", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'stoic' means enduring pain and hardship without showing one's feelings or complaining." +
        "<br><br>" +
        "(B) 'reactive' means showing a response to a stimulus." +
        "<br><br>" +
        "(C) 'volatile' means liable to change rapidly and unpredictably, especially for the worse." +
        "<br><br>" +
        "(D) 'impulsive' means acting or done without forethought.",
    chinese_explanation: "(A) '坚忍的' 意味着忍受痛苦和困难而不表现出情感或抱怨。" +
        "<br><br>" +
        "(B) '反应的' 意味着对刺激显示反应的。" +
        "<br><br>" +
        "(C) '易变的' 意味着容易迅速和不可预测地变化，尤其是变坏。" +
        "<br><br>" +
        "(D) '冲动的' 意味着在没有深思熟虑的情况下行动或完成的。"
    },
    {
        id: 3,
    question: "Her __________ advocacy for animal rights inspired many to join the cause and support the movement.",
    chinese_question: "她对动物权利的 __________ 倡导激励了许多人加入这一事业并支持这一运动。",
    answers: [
        { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
        { option: "C", answer: "zealous", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
        { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'zealous' means having or showing great energy or enthusiasm in pursuit of a cause or objective." +
        "<br><br>" +
        "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
    chinese_explanation: "(C) '热情的' 意味着在追求目标或事业中表现出极大的精力或热情。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着没有表现出或感受到兴趣、热情或关心。" +
        "<br><br>" +
        "(B) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(D) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极的反应或抵抗。"
    },
    {
        id: 4,
        question: "Driving in the stormy weather was __________, with low visibility and slippery roads increasing the risk of accidents.",
        chinese_question: "在暴风雨天气中驾驶是 __________ 的，低能见度和湿滑的道路增加了事故的风险。",
        answers: [
            { option: "A", answer: "hazardous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "B", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "C", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "D", answer: "reassuring", chinese_answer: "令人安心的", chinese_romanization: "lìng rén ānxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hazardous' means risky or dangerous." + 
            "<br><br>" +
            "(B) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(C) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(D) 'reassuring' means serving to remove someone's doubts or fears.",
        chinese_explanation: "(A) '危险的' 意味着有风险或危险的。" + 
            "<br><br>" +
            "(B) '容易的' 意味着没有太大努力就能实现的；难度很小的。" +
            "<br><br>" +
            "(C) '安全的' 意味着固定或紧固，以免让位、松动或丢失的。" +
            "<br><br>" +
            "(D) '令人安心的' 意味着用于消除某人的疑虑或恐惧的。"
    },
    {
        id: 5,
        question: "After their wedding, the couple spent a __________ week on a secluded beach, enjoying each other's company.",
        chinese_question: "婚礼后，这对夫妇在一个隐秘的海滩上度过了一个 __________ 的星期，享受彼此的陪伴。",
        answers: [
            { option: "A", answer: "miserable", chinese_answer: "痛苦的", chinese_romanization: "tòngkǔ de" },
            { option: "B", answer: "stressful", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" },
            { option: "C", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hǔnluàn de" },
            { option: "D", answer: "blissful", chinese_answer: "幸福的", chinese_romanization: "xìngfú de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'blissful' means extremely happy; full of joy." +
                "<br><br>" +
                "(A) 'miserable' means very unhappy or uncomfortable." +
                "<br><br>" +
                "(B) 'stressful' means causing mental or emotional stress." +
                "<br><br>" +
                "(C) 'chaotic' means in a state of complete confusion and disorder.",
        chinese_explanation: "(D) '幸福的' 意味着非常快乐；充满喜悦的。" +
                "<br><br>" +
                "(A) '痛苦的' 意味着非常不快乐或不舒服的。" +
                "<br><br>" +
                "(B) '紧张的' 意味着造成心理或情绪压力的。" +
                "<br><br>" +
                "(C) '混乱的' 意味着完全混乱和无序的状态。"
    },
    {
        id: 6,
        question: "He was __________ to see the final results of his hard work.",
        chinese_question: "他对看到自己辛苦工作的最终结果感到 __________。",
        answers: [
            { option: "A", answer: "anxious", chinese_answer: "渴望的", chinese_romanization: "kěwàng de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "C", answer: "unconcerned", chinese_answer: "不关心的", chinese_romanization: "bù guānxīn de" },
            { option: "D", answer: "dismissive", chinese_answer: "轻视的", chinese_romanization: "qīngshì de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anxious' metaphorically means eagerly wishing or anticipating something." +
                "<br><br>" +
                "(B) 'indifferent' means having no particular interest or sympathy." +
                "<br><br>" +
                "(C) 'unconcerned' means showing a lack of worry or interest." +
                "<br><br>" +
                "(D) 'dismissive' means feeling or showing that something is unworthy of consideration.",
        chinese_explanation: "(A) '渴望的' 比喻急切希望或期待某事。" +
                "<br><br>" +
                "(B) '漠不关心的' 意味着没有特别的兴趣或同情心。" +
                "<br><br>" +
                "(C) '不关心的' 意味着表现出缺乏担忧或兴趣。" +
                "<br><br>" +
                "(D) '轻视的' 意味着感到或表现出某事不值得考虑。"
    },
    {
        id: 7,
        question: "For the CEO, maintaining the company's reputation was of __________ importance, even above profits.",
        chinese_question: "对于首席执行官来说，维护公司的声誉是 __________ 的，甚至超过了利润。",
        answers: [
            { option: "A", answer: "marginal", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "paramount", chinese_answer: "最重要的", chinese_romanization: "zuì zhòngyào de" },
            { option: "C", answer: "subordinate", chinese_answer: "附属的", chinese_romanization: "fùshǔ de" },
            { option: "D", answer: "incidental", chinese_answer: "偶然的", chinese_romanization: "ǒurán de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paramount' means more important than anything else; supreme." +
            "<br><br>" +
            "(A) 'marginal' means of secondary or minor importance; not central." +
            "<br><br>" +
            "(C) 'subordinate' means lower in rank or position." +
            "<br><br>" +
            "(D) 'incidental' means occurring by chance in connection with something else.",
        chinese_explanation: "(B) '最重要的' 意味着比其他任何事情都重要；至高无上的。" +
            "<br><br>" +
            "(A) '次要的' 意味着次要的或次要的；不中心的。" +
            "<br><br>" +
            "(C) '附属的' 意味着等级或位置较低的。" +
            "<br><br>" +
            "(D) '偶然的' 意味着在与其他事情有关的情况下偶然发生的."
    },
    {
        id: 8,
        question: "His __________ voice commanded attention, making everyone in the room stop and listen.",
        chinese_question: "他 __________ 的声音引起了注意，使房间里的每个人都停下来倾听。",
        answers: [
            { option: "A", answer: "whispering", chinese_answer: "低语的", chinese_romanization: "dīyǔ de" },
            { option: "B", answer: "soft", chinese_answer: "轻柔的", chinese_romanization: "qīngróu de" },
            { option: "C", answer: "thunderous", chinese_answer: "雷鸣般的", chinese_romanization: "léimíng bān de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thunderous' means very loud." +
            "<br><br>" +
            "(A) 'whispering' means speaking very softly." +
            "<br><br>" +
            "(B) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(C) '雷鸣般的' 意味着非常响亮的。" +
            "<br><br>" +
            "(A) '低语的' 意味着说话非常轻声的。" +
            "<br><br>" +
            "(B) '轻柔的' 意味着易于塑造、切割、压缩或折叠的；摸起来不硬或不牢的。" +
            "<br><br>" +
            "(D) '温和的' 意味着不严厉、严重或苛刻的."
    },
    {
        id: 9,
        question: "The company encouraged an __________ atmosphere, where employees could express their opinions without fear of repercussions.",
        chinese_question: "公司鼓励 __________ 的氛围，员工可以毫无后顾之忧地表达自己的意见。",
        answers: [
            { option: "A", answer: "authoritarian", chinese_answer: "权威的", chinese_romanization: "quánwēi de" },
            { option: "B", answer: "hierarchical", chinese_answer: "分等级的", chinese_romanization: "fēn děngjí de" },
            { option: "C", answer: "regimented", chinese_answer: "严格管制的", chinese_romanization: "yángé guǎnzhì de" },
            { option: "D", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēi zhèngshì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." + 
            "<br><br>" +
            "(A) 'authoritarian' means favoring or enforcing strict obedience to authority." +
            "<br><br>" +
            "(B) 'hierarchical' means arranged in order of rank." +
            "<br><br>" +
            "(C) 'regimented' means organized according to a strict, sometimes oppressive system or pattern.",
        chinese_explanation: "(D) '非正式的' 意味着具有轻松、友好或非官方的风格、方式或性质。" + 
            "<br><br>" +
            "(A) '权威的' 意味着支持或强制严格服从权威的。" +
            "<br><br>" +
            "(B) '分等级的' 意味着按等级排列的。" +
            "<br><br>" +
            "(C) '严格管制的' 意味着按照严格的、有时是压迫性的制度或模式组织的。"
    },
    {
        id: 10,
        question: "The project was __________ from the start, with miscommunications and missed deadlines causing constant frustration.",
        chinese_question: "这个项目从一开始就很 __________，沟通不畅和错过截止日期不断引起挫折。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hǔnluàn de" },
            { option: "B", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" },
            { option: "C", answer: "smooth", chinese_answer: "顺利的", chinese_romanization: "shùnlì de" },
            { option: "D", answer: "straightforward", chinese_answer: "简单明了的", chinese_romanization: "jiǎndān míngliǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chaotic' means in a state of complete confusion and disorder." + 
            "<br><br>" +
            "(B) 'organized' means arranged or structured in a systematic way." +
            "<br><br>" +
            "(C) 'smooth' means having an even and regular surface or consistency; free from difficulties." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(A) '混乱的' 意味着完全混乱和无序的状态。" + 
            "<br><br>" +
            "(B) '有组织的' 意味着以系统的方式安排或结构化的。" +
            "<br><br>" +
            "(C) '顺利的' 意味着具有均匀和规律的表面或一致性；没有困难的。" +
            "<br><br>" +
            "(D) '简单明了的' 意味着不复杂的，容易做或理解的。"
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
