// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She inherited a vast __________ of olive trees, which had been in her family for generations.",
        chinese_question: "她继承了一大片种满橄榄树的 __________，这些树已经在她家族里种了几代人。",
        answers: [
            { option: "A", answer: "orchard", chinese_answer: "果园", chinese_romanization: "guǒyuán" },
            { option: "B", answer: "estate", chinese_answer: "庄园", chinese_romanization: "zhuāngyuán" },
            { option: "C", answer: "garden", chinese_answer: "花园", chinese_romanization: "huāyuán" },
            { option: "D", answer: "forest", chinese_answer: "森林", chinese_romanization: "sēnlín" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'orchard' means a piece of land planted with fruit trees." +
                "<br><br>" +
                "(B) 'estate' means an extensive area of land in the country, usually with a large house, owned by one person, family, or organization." +
                "<br><br>" +
                "(C) 'garden' means a piece of ground, often near a house, used for growing flowers, fruit, or vegetables." +
                "<br><br>" +
                "(D) 'forest' means a large area covered chiefly with trees and undergrowth.",
        chinese_explanation: "(A) '果园' 意味着种植果树的一块土地。" +
                "<br><br>" +
                "(B) '庄园' 意味着乡村中通常有大房子的广阔土地，由一个人、家族或组织拥有。" +
                "<br><br>" +
                "(C) '花园' 意味着经常在房子附近的一块地，用来种花、果实或蔬菜。" +
                "<br><br>" +
                "(D) '森林' 意味着主要由树木和灌木覆盖的大面积。"
    },
    {
        id: 2,
    question: "Despite his elaborate story, there wasn't a __________ of truth in his tale, as every detail seemed fabricated and exaggerated.",
    chinese_question: "尽管他的故事很详尽，但他的叙述中没有一丝 __________ 的真实，每个细节似乎都是捏造和夸大的。",
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
        id: 3,
        question: "Her __________ in completing the assignment earned her praise from the professor.",
        chinese_question: "她在完成作业方面的 __________ 为她赢得了教授的赞扬。",
        answers: [
                { option: "A", answer: "celerity", chinese_answer: "迅速", chinese_romanization: "xùnsù" },
                { option: "B", answer: "procrastination", chinese_answer: "拖延", chinese_romanization: "tuōyán" },
                { option: "C", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
                { option: "D", answer: "tardiness", chinese_answer: "迟到", chinese_romanization: "chídào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'celerity' means swiftness of movement." +
                "<br><br>" +
                "(B) 'procrastination' means the action of delaying or postponing something." +
                "<br><br>" +
                "(C) 'negligence' means failure to take proper care in doing something." +
                "<br><br>" +
                "(D) 'tardiness' means the quality of being late.",
        chinese_explanation: "(A) '迅速' 意味着快速的动作。" +
                "<br><br>" +
                "(B) '拖延' 意味着拖延或推迟某事的行为。" +
                "<br><br>" +
                "(C) '疏忽' 意味着未能妥善处理某事。" +
                "<br><br>" +
                "(D) '迟到' 意味着迟到的品质。"
    },
    {
        id: 4,
        question: "The university was built on the __________ of academic excellence and innovation, attracting scholars from around the world.",
        chinese_question: "这所大学建立在学术卓越和创新的 __________ 之上，吸引了世界各地的学者。",
        answers: [
                { option: "A", answer: "ruins", chinese_answer: "废墟", chinese_romanization: "fèixū" },
                { option: "B", answer: "edifice", chinese_answer: "大厦", chinese_romanization: "dàshà" },
                { option: "C", answer: "fragments", chinese_answer: "碎片", chinese_romanization: "suìpiàn" },
                { option: "D", answer: "shadow", chinese_answer: "阴影", chinese_romanization: "yīnyǐng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edifice' means a complex system of beliefs or an imposing structure, used figuratively to describe something built up or established." +
                "<br><br>" +
                "(A) 'ruins' means the remains of a building, typically an old one that has suffered much damage or disintegration." +
                "<br><br>" +
                "(C) 'fragments' means small parts broken off or detached." +
                "<br><br>" +
                "(D) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface.",
        chinese_explanation: "(B) '大厦'一词用于比喻，描述建立或确立的复杂信仰体系或宏伟结构。" +
                "<br><br>" +
                "(A) '废墟' 意味着建筑物的遗迹，通常是遭受了严重损坏或解体的老建筑。" +
                "<br><br>" +
                "(C) '碎片' 意味着破碎或分离的小部分。" +
                "<br><br>" +
                "(D) '阴影' 意味着由物体挡住光线和表面之间的光线而产生的黑暗区域或形状。"
    },
    {
        id: 5,
        question: "She was unmoved by his __________, remaining firm in her decision to decline his offer despite his flattering words.",
        chinese_question: "她对他的 __________ 无动于衷，尽管他用了很多奉承的话，她仍然坚持拒绝他的提议。",
        answers: [
                { option: "A", answer: "blandishments", chinese_answer: "奉承话", chinese_romanization: "fèngchēng huà" },
                { option: "B", answer: "threats", chinese_answer: "威胁", chinese_romanization: "wēixié" },
                { option: "C", answer: "demands", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
                { option: "D", answer: "arguments", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blandishments' means flattering or pleasing statements or actions used to persuade someone gently to do something." +
                "<br><br>" +
                "(B) 'threats' means statements of an intention to inflict pain, injury, damage, or other hostile action." +
                "<br><br>" +
                "(C) 'demands' means insistent requests made as if by right." +
                "<br><br>" +
                "(D) 'arguments' means exchanges of diverging or opposite views, typically heated or angry ones.",
        chinese_explanation: "(A) '奉承话' 意味着用来温和地劝说某人的恭维或令人愉快的陈述或行动。" +
                "<br><br>" +
                "(B) '威胁' 意味着表明要造成痛苦、伤害、损害或其他敌对行为的言论。" +
                "<br><br>" +
                "(C) '要求' 意味着坚持的请求，仿佛是权利。" +
                "<br><br>" +
                "(D) '争论' 意味着通常是激烈或愤怒的不同或相反观点的交流。"
    },
    {
        id: 6,
        question: "The constant __________ from the critics made the artist question his work.",
        chinese_question: "来自评论家的不断 __________ 让艺术家质疑自己的作品。",
        answers: [
            { option: "A", answer: "praising", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "assisting", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "hectoring", chinese_answer: "威吓", chinese_romanization: "wēihè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hectoring' means to talk to someone in a bullying way, used figuratively here." +
                    "<br><br>" +
                    "(A) 'praising' means to express warm approval or admiration." +
                    "<br><br>" +
                    "(B) 'ignoring' means to refuse to take notice of or acknowledge." +
                    "<br><br>" +
                    "(C) 'assisting' means to help someone.",
        chinese_explanation: "(D) '威吓' 意味着以一种欺凌的方式对某人说话，这里是比喻用法。" +
                    "<br><br>" +
                    "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
                    "<br><br>" +
                    "(B) '忽视' 意味着拒绝注意或承认。" +
                    "<br><br>" +
                    "(C) '帮助' 意味着帮助某人。"
    },
    {
        id: 7,
    question: "During the awkward encounter, she could only __________, offering a strained and insincere smile as she tried to mask her discomfort.",
    chinese_question: "在尴尬的相遇中，她只能 __________，露出勉强而虚伪的微笑，试图掩饰她的不适。",
    answers: [
        { option: "A", answer: "scowl", chinese_answer: "皱眉", chinese_romanization: "zhòuméi" },
        { option: "B", answer: "glare", chinese_answer: "瞪视", chinese_romanization: "dèngshì" },
        { option: "C", answer: "frown", chinese_answer: "皱眉", chinese_romanization: "zhòuméi" },
        { option: "D", answer: "simper", chinese_answer: "假笑", chinese_romanization: "jiǎxiào" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'simper' means to smile in an affectedly coy or ingratiating manner." +
        "<br><br>" +
        "(A) 'scowl' means an angry or bad-tempered expression." +
        "<br><br>" +
        "(B) 'glare' means a fierce or angry stare." +
        "<br><br>" +
        "(C) 'frown' means to furrow one's brows in an expression indicating disapproval, displeasure, or concentration.",
    chinese_explanation: "(D) '假笑' 意味着以做作的羞涩或讨好方式微笑。" +
        "<br><br>" +
        "(A) '皱眉' 意味着愤怒或坏脾气的表情。" +
        "<br><br>" +
        "(B) '瞪视' 意味着愤怒的或凶狠的盯着看。" +
        "<br><br>" +
        "(C) '皱眉' 意味着皱起眉头，表示不赞成、不满或集中注意力。"
    },
    {
        id: 8,
        question: "Her __________ for always seeing the positive side of things made her a beloved friend.",
        chinese_question: "她总是看到事物积极一面的 __________ 使她成为受人喜爱的朋友。",
        answers: [
                { option: "A", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
                { option: "B", answer: "propensity", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
                { option: "C", answer: "hatred", chinese_answer: "仇恨", chinese_romanization: "chóuhèn" },
                { option: "D", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'propensity' figuratively means an inclination or natural tendency to behave in a particular way." +
                "<br><br>" +
                "(A) 'aversion' means a strong dislike or disinclination." +
                "<br><br>" +
                "(C) 'hatred' means intense dislike or ill will." +
                "<br><br>" +
                "(D) 'neutrality' means the state of not supporting or helping either side in a conflict.",
        chinese_explanation: "(B) '倾向' 在此语境下意指行为上的倾向或自然倾向。" +
                "<br><br>" +
                "(A) '厌恶' 意味着强烈的厌恶或不情愿。" +
                "<br><br>" +
                "(C) '仇恨' 意味着强烈的厌恶或恶意。" +
                "<br><br>" +
                "(D) '中立' 意味着不支持或帮助冲突中任何一方的状态。"
    },
    {
        id: 9,
        question: "In times of crisis, true __________ can bring a community together to overcome even the toughest challenges.",
        chinese_question: "在危机时期，真正的 __________ 可以让社区团结在一起，克服最艰难的挑战。",
        answers: [
                { option: "A", answer: "solidarity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
                { option: "B", answer: "division", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
                { option: "C", answer: "rivalry", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" },
                { option: "D", answer: "disunity", chinese_answer: "不团结", chinese_romanization: "bù tuánjié" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'solidarity' figuratively means unity or agreement of feeling or action, especially among individuals with a common interest; mutual support within a group." +
                "<br><br>" +
                "(B) 'division' means the action of separating something into parts or the process of being separated." +
                "<br><br>" +
                "(C) 'rivalry' means competition for the same objective or for superiority in the same field." +
                "<br><br>" +
                "(D) 'disunity' means disagreement and conflict within a group.",
        chinese_explanation: "(A) '团结' 在此语境下意指特别是具有共同利益的个人之间的感情或行动的一致性；群体内部的相互支持。" +
                "<br><br>" +
                "(B) '分裂' 意味着将某物分成部分的动作或被分开的过程。" +
                "<br><br>" +
                "(C) '竞争' 意味着为相同的目标或在同一领域中的优越地位而竞争。" +
                "<br><br>" +
                "(D) '不团结' 意味着群体内部的分歧和冲突。"
    },
    {
        id: 10,
        question: "Living in __________, the family struggled to find clean water and enough food to eat.",
        chinese_question: "生活在 __________ 中，这个家庭挣扎着寻找干净的水和足够的食物。",
        answers: [
                { option: "A", answer: "squalour", chinese_answer: "肮脏", chinese_romanization: "āngzāng" },
                { option: "B", answer: "affluence", chinese_answer: "富裕", chinese_romanization: "fùyù" },
                { option: "C", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
                { option: "D", answer: "hygiene", chinese_answer: "卫生", chinese_romanization: "wèishēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'squalor' means a state of being extremely dirty and unpleasant, especially as a result of poverty or neglect." +
                "<br><br>" +
                "(B) 'affluence' means the state of having a great deal of money; wealth." +
                "<br><br>" +
                "(C) 'comfort' means a state of physical ease and freedom from pain or constraint." +
                "<br><br>" +
                "(D) 'hygiene' means conditions or practices conducive to maintaining health and preventing disease, especially through cleanliness.",
        chinese_explanation: "(A) '肮脏'一词意味着极度肮脏和不愉快的状态，尤其是由于贫穷或忽视所致。" +
                "<br><br>" +
                "(B) '富裕' 意味着拥有大量金钱的状态；财富。" +
                "<br><br>" +
                "(C) '舒适' 意味着身体轻松自在的状态。" +
                "<br><br>" +
                "(D) '卫生' 意味着有助于保持健康和预防疾病的条件或做法，尤其是通过清洁。"
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
