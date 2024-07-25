// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ focus of the lecture was on the importance of biodiversity.",
        chinese_question: "讲座的 __________ 重点是生物多样性的重要性。",
        answers: [
            { option: "A", answer: "sole", chinese_answer: "唯一", chinese_romanization: "wéiyī" },
            { option: "B", answer: "dispersed", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
            { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
            { option: "D", answer: "fluctuating", chinese_answer: "波动", chinese_romanization: "bōdòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sole' means being the only one." +
            "<br><br>" +
            "(B) 'dispersed' means distributed or spread over a wide area." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'fluctuating' means rising and falling irregularly in number or amount.",
        chinese_explanation: "(A) '唯一' 意味着是唯一的一个。" +
            "<br><br>" +
            "(B) '分散' 意味着分布或分散在广泛的区域。" +
            "<br><br>" +
            "(C) '无关' 意味着与某事无关。" +
            "<br><br>" +
            "(D) '波动' 意味着数量或金额的不规则上升和下降。"
    },
    {
        id: 2,
        question: "The charity worker was __________, asking every passerby for donations.",
        chinese_question: "这名慈善工作者非常 __________，向每一个过路人请求捐款。",
        answers: [
            { option: "A", answer: "silent", chinese_answer: "沉默的", chinese_romanization: "chénmò de" },
            { option: "B", answer: "importunate", chinese_answer: "纠缠不休的", chinese_romanization: "jiūchán bùxiū de" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "D", answer: "content", chinese_answer: "满足的", chinese_romanization: "mǎnzú de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'importunate' means persistently requesting or demanding, often to the point of annoyance." +
            "<br><br>" +
            "(A) 'silent' means not making or accompanied by any sound." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'content' means in a state of peaceful happiness.",
        chinese_explanation: "(B) '纠缠不休的' 意味着坚持不断地请求或要求，通常达到令人恼火的地步。" +
            "<br><br>" +
            "(A) '沉默的' 意味着不发出任何声音或伴随声音。" +
            "<br><br>" +
            "(C) '无动于衷的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '满足的' 意味着处于平静幸福的状态。"
    },
    {
        id: 3,
        question: "The company's financial situation was __________, with mounting debts and uncertain revenue streams threatening its future.",
        chinese_question: "公司的财务状况 __________，不断增加的债务和不确定的收入来源威胁着其未来。",
        answers: [
            { option: "A", answer: "precarious", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "B", answer: "robust", chinese_answer: "强健的", chinese_romanization: "qiángjiàn de" },
            { option: "C", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "D", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'precarious' means not securely held or in position; dangerously likely to fall or collapse." +
            "<br><br>" +
            "(B) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(C) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(D) 'stable' means not likely to change or fail; firmly established.",
        chinese_explanation: "(A) '危险的' 意味着未牢固固定或未在位置上的；有可能坠落或倒塌的。" +
            "<br><br>" +
            "(B) '强健的' 意味着强壮和健康的；充满活力的。" +
            "<br><br>" +
            "(C) '安全的' 意味着固定或牢固的，不会松动或丢失的。" +
            "<br><br>" +
            "(D) '稳定的' 意味着不太可能改变或失败的；牢固建立的。"
    },
    {
        id: 4,
        question: "Her speech was __________, filled with clichés and lacking any real depth or originality.",
        chinese_question: "她的演讲 __________，充满了陈词滥调，缺乏任何真正的深度或原创性。",
        answers: [
            { option: "A", answer: "exceptional", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "pedestrian", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "C", answer: "inspiring", chinese_answer: "鼓舞人心的", chinese_romanization: "gǔwǔ rénxīn de" },
            { option: "D", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pedestrian' means lacking inspiration or excitement; dull." +
            "<br><br>" +
            "(A) 'exceptional' means unusually good; outstanding." +
            "<br><br>" +
            "(C) 'inspiring' means having the effect of inspiring someone." +
            "<br><br>" +
            "(D) 'unique' means being the only one of its kind; unlike anything else.",
        chinese_explanation: "(B) '乏味的' 意味着缺乏灵感或兴奋的；枯燥的。" +
            "<br><br>" +
            "(A) '杰出的' 意味着异常好的；杰出的。" +
            "<br><br>" +
            "(C) '鼓舞人心的' 意味着具有激励某人的效果的。" +
            "<br><br>" +
            "(D) '独特的' 意味着是唯一的；与其他任何东西不同的."
    },
    {
        id: 5,
        question: "Her __________ marketing strategy outperformed all the conventional methods.",
        chinese_question: "她 __________ 的营销策略表现超过了所有传统方法。",
        answers: [
            { option: "A", answer: "unoriginal", chinese_answer: "无创意", chinese_romanization: "wú chuàngyì" },
            { option: "B", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "C", answer: "ingenious", chinese_answer: "巧妙", chinese_romanization: "qiǎomiào" },
            { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ingenious' means (of a person) clever, original, and inventive." + 
            "<br><br>" +
            "(A) 'unoriginal' means lacking originality." +
            "<br><br>" +
            "(B) 'routine' means performed as part of a regular procedure rather than for a special reason." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(C) '巧妙' 意味着（指人）聪明、原创和有创造力。" + 
            "<br><br>" +
            "(A) '无创意' 意味着缺乏原创性。" +
            "<br><br>" +
            "(B) '常规' 意味着作为常规程序的一部分而不是出于特殊原因执行。" +
            "<br><br>" +
            "(D) '普通' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 6,
        question: "The company's __________ strategy included improving product quality, customer service, and employee satisfaction.",
        chinese_question: "公司的 __________ 战略包括改进产品质量、客户服务和员工满意度。",
        answers: [
            { option: "A", answer: "isolated", chinese_answer: "孤立", chinese_romanization: "gūlì" },
            { option: "B", answer: "holistic", chinese_answer: "整体", chinese_romanization: "zhěngtǐ" },
            { option: "C", answer: "narrow", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" },
            { option: "D", answer: "segmented", chinese_answer: "分割", chinese_romanization: "fēngē" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'holistic' means characterized by the belief that the parts of something are interconnected and can be understood only by reference to the whole." + 
            "<br><br>" +
            "(A) 'isolated' means far away from other places, buildings, or people; remote." +
            "<br><br>" +
            "(C) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(D) 'segmented' means divided into separate parts or sections.",
        chinese_explanation: "(B) '整体' 意味着认为事物的各部分是相互关联的，只有通过整体才能理解。" + 
            "<br><br>" +
            "(A) '孤立' 意味着远离其他地方、建筑物或人；偏远的。" +
            "<br><br>" +
            "(C) '狭窄' 意味着范围、数量或范围有限。" +
            "<br><br>" +
            "(D) '分割' 意味着被分成独立的部分或部分。"
    },
    {
        id: 7,
        question: "The __________ purpose of the meeting was to discuss the upcoming project deadline.",
        chinese_question: "会议的 __________ 目的是讨论即将到来的项目截止日期。",
        answers: [
            { option: "A", answer: "sole", chinese_answer: "唯一", chinese_romanization: "wéiyī" },
            { option: "B", answer: "secondary", chinese_answer: "次要", chinese_romanization: "cìyào" },
            { option: "C", answer: "partial", chinese_answer: "部分", chinese_romanization: "bùfèn" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sole' means being the only one." +
            "<br><br>" +
            "(B) 'secondary' means coming after, less important than, or resulting from someone or something else that is primary." +
            "<br><br>" +
            "(C) 'partial' means existing only in part; incomplete." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(A) '唯一' 意味着是唯一的一个。" +
            "<br><br>" +
            "(B) '次要' 意味着排在后面的、不如主要的或由主要的某物引起的。" +
            "<br><br>" +
            "(C) '部分' 意味着仅部分存在的；不完整的。" +
            "<br><br>" +
            "(D) '无关' 意味着与某事无关。"
    },
    {
        id: 8,
        question: "The project manager emphasized the need for __________ results to demonstrate the success of the new strategy.",
        chinese_question: "项目经理强调需要 __________ 的结果来证明新策略的成功。",
        answers: [
            { option: "A", answer: "hypothetical", chinese_answer: "假设的", chinese_romanization: "jiǎshè de" },
            { option: "B", answer: "theoretical", chinese_answer: "理论的", chinese_romanization: "lǐlùn de" },
            { option: "C", answer: "tangible", chinese_answer: "有形的", chinese_romanization: "yǒuxíng de" },
            { option: "D", answer: "speculative", chinese_answer: "推测的", chinese_romanization: "tuīcè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tangible' means perceptible by touch; clear and definite; real." +
            "<br><br>" +
            "(A) 'hypothetical' means based on or serving as a hypothesis." +
            "<br><br>" +
            "(B) 'theoretical' means concerned with or involving the theory of a subject or area of study rather than its practical application." +
            "<br><br>" +
            "(D) 'speculative' means engaged in, expressing, or based on conjecture rather than knowledge.",
        chinese_explanation: "(C) '有形的' 意味着可以触摸到的；清晰而确定的；真实的。" +
            "<br><br>" +
            "(A) '假设的' 意味着基于或作为假设的。" +
            "<br><br>" +
            "(B) '理论的' 意味着关注或涉及某一学科或领域的理论而不是其实际应用的。" +
            "<br><br>" +
            "(D) '推测的' 意味着从事、表达或基于猜测而不是知识的."
    },
    {
        id: 9,
        question: "His __________ temper often made it difficult for him to maintain friendships.",
        chinese_question: "他 __________ 的脾气常常使他难以维持友谊。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "C", answer: "tranquil", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "D", answer: "volatile", chinese_answer: "易变的", chinese_romanization: "yìbiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'volatile' means liable to change rapidly and unpredictably, especially for the worse." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'serene' means calm, peaceful, and untroubled." +
            "<br><br>" +
            "(C) 'tranquil' means free from disturbance; calm.",
        chinese_explanation: "(D) '易变的' 意味着容易迅速和不可预见地变化，尤其是变得更糟。" +
            "<br><br>" +
            "(A) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈情感的。" +
            "<br><br>" +
            "(B) '宁静的' 意味着平静、和平和不受干扰的。" +
            "<br><br>" +
            "(C) '安静的' 意味着没有干扰的；平静的。"
    },
    {
        id: 10,
        question: "The lawyer's __________ questioning revealed the truth that had been hidden for years.",
        chinese_question: "律师的__________质问揭示了隐藏多年的真相。",
        answers: [
            { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "B", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" },
            { option: "C", answer: "incisive", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" },
            { option: "D", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchǔ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'incisive' means intelligently analytical and clear-thinking. Figuratively, it can mean very sharp and direct." +
            "<br><br>" +
            "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'unclear' means not easy to perceive, understand, or interpret.",
        chinese_explanation: "(C) '深刻的'一词意味着聪明的分析和清晰的思考。比喻地，它可以表示非常敏锐和直接。" +
            "<br><br>" +
            "(A) '模糊的' 意味着不确定的、不明确的或不清楚的性质或含义。" +
            "<br><br>" +
            "(B) '枯燥的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(D) '不清楚的' 意味着不容易感知、理解或解释的."
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
