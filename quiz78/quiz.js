// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The complex scientific theories were beyond the average person's __________.",
    chinese_question: "复杂的科学理论超出了普通人的 __________ 。",
    answers: [
        { option: "A", answer: "ken", chinese_answer: "知识范围", chinese_romanization: "zhīshì fànwéi" },
        { option: "B", answer: "understanding", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
        { option: "C", answer: "idea", chinese_answer: "想法", chinese_romanization: "xiǎngfǎ" },
        { option: "D", answer: "knowledge", chinese_answer: "知识", chinese_romanization: "zhīshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ken' means range of knowledge or understanding." +
                "<br><br>" +
                "(B) 'understanding' means the ability to comprehend something." +
                "<br><br>" +
                "(C) 'idea' means a thought or suggestion as to a possible course of action." +
                "<br><br>" +
                "(D) 'knowledge' means facts, information, and skills acquired through experience or education.",
    chinese_explanation: "(A) '知识范围' 意味着知识或理解的范围。" +
                "<br><br>" +
                "(B) '理解' 意味着理解某事的能力。" +
                "<br><br>" +
                "(C) '想法' 意味着对可能的行动方案的想法或建议。" +
                "<br><br>" +
                "(D) '知识' 意味着通过经验或教育获得的事实、信息和技能。"
    },
    {
        id: 2,
        question: "The workers went on strike, knowing that their actions might provoke a __________ from the company, such as pay cuts, demotions, or even dismissals.",
        chinese_question: "工人们罢工，知道他们的行为可能会引起公司的 __________，比如减薪、降职甚至解雇。",
        answers: [
            { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "B", answer: "promotion", chinese_answer: "晋升", chinese_romanization: "jìnshēng" },
            { option: "C", answer: "commendation", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "D", answer: "reprisal", chinese_answer: "报复", chinese_romanization: "bàofù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reprisal' means an act of retaliation." +
            "<br><br>" +
            "(A) 'reward' means a thing given in recognition of service, effort, or achievement." +
            "<br><br>" +
            "(B) 'promotion' means the action of raising someone to a higher position or rank." +
            "<br><br>" +
            "(C) 'commendation' means an award involving special praise.",
        chinese_explanation: "(D) '报复' 意味着报复行为。" +
            "<br><br>" +
            "(A) '奖励' 意味着为了表彰服务、努力或成就而给予的东西。" +
            "<br><br>" +
            "(B) '晋升' 意味着提升某人到更高职位或等级的行动。" +
            "<br><br>" +
            "(C) '表扬' 意味着涉及特别表扬的奖项。"
    },
    {
        id: 3,
        question: "The __________ of growing crops in this arid region depends heavily on the availability of water resources.",
        chinese_question: "在这个干旱地区种植作物的 __________ 很大程度上取决于水资源的可用性。",
        answers: [
                { option: "A", answer: "viability", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
                { option: "B", answer: "difficulty", chinese_answer: "困难", chinese_romanization: "kùnnán" },
                { option: "C", answer: "simplicity", chinese_answer: "简单性", chinese_romanization: "jiǎndān xìng" },
                { option: "D", answer: "complexity", chinese_answer: "复杂性", chinese_romanization: "fùzá xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'viability' means the ability to work successfully or be practical and effective." +
                "<br><br>" +
                "(B) 'difficulty' means the state or condition of being difficult." +
                "<br><br>" +
                "(C) 'simplicity' means the quality or condition of being easy to understand or do." +
                "<br><br>" +
                "(D) 'complexity' means the state or quality of being intricate or complicated.",
        chinese_explanation: "(A) '可行性' 意味着成功运作或实际有效的能力。" +
                "<br><br>" +
                "(B) '困难' 意味着困难的状态或条件。" +
                "<br><br>" +
                "(C) '简单性' 意味着容易理解或做的质量或条件。" +
                "<br><br>" +
                "(D) '复杂性' 意味着复杂或复杂的状态或质量。"
    },
    {
        id: 4,
        question: "She recognized his __________ immediately, refusing to be swayed by his superficially convincing but fundamentally flawed reasoning.",
        chinese_question: "她立即识破了他的 __________，拒绝被他表面上令人信服但实际上存在根本缺陷的推理所影响。",
        answers: [
                { option: "A", answer: "integrity", chinese_answer: "正直", chinese_romanization: "zhèngzhí" },
                { option: "B", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
                { option: "C", answer: "sophistry", chinese_answer: "诡辩", chinese_romanization: "guǐbiàn" },
                { option: "D", answer: "straightforwardness", chinese_answer: "直率", chinese_romanization: "zhíshuài" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sophistry' means the use of clever but false arguments, especially with the intention of deceiving." +
                "<br><br>" +
                "(A) 'integrity' means the quality of being honest and having strong moral principles." +
                "<br><br>" +
                "(B) 'honesty' means the quality of being honest." +
                "<br><br>" +
                "(D) 'straightforwardness' means the quality of being easy to understand or simple.",
        chinese_explanation: "(C) '诡辩'一词意味着使用巧妙但虚假的论点，尤其是为了欺骗。" +
                "<br><br>" +
                "(A) '正直' 意味着诚实并具有强烈道德原则的品质。" +
                "<br><br>" +
                "(B) '诚实' 意味着诚实的品质。" +
                "<br><br>" +
                "(D) '直率' 意味着容易理解或简单的品质。"
    },
    {
        id: 5,
        question: "The negotiations failed due to the __________ of both parties, who refused to compromise on any issue.",
        chinese_question: "谈判失败是由于双方的 __________，他们在任何问题上都拒绝妥协。",
        answers: [
                { option: "A", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuó xìng" },
                { option: "B", answer: "intransigence", chinese_answer: "不妥协", chinese_romanization: "bù tuǒxié" },
                { option: "C", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
                { option: "D", answer: "adaptability", chinese_answer: "适应性", chinese_romanization: "shìyìng xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'intransigence' means refusal to change one's views or to agree about something." +
                "<br><br>" +
                "(A) 'flexibility' means the quality of bending easily without breaking." +
                "<br><br>" +
                "(C) 'cooperation' means the process of working together to the same end." +
                "<br><br>" +
                "(D) 'adaptability' means the quality of being able to adjust to new conditions.",
        chinese_explanation: "(B) '不妥协' 意味着拒绝改变观点或就某事达成一致。" +
                "<br><br>" +
                "(A) '灵活性' 意味着在不破裂的情况下易于弯曲的质量。" +
                "<br><br>" +
                "(C) '合作' 意味着共同努力实现同一目标的过程。" +
                "<br><br>" +
                "(D) '适应性' 意味着能够适应新条件的质量。"
    },
    {
        id: 6,
    question: "The hot summer afternoon filled everyone with a sense of __________, making them seek shade, nap frequently, and move sluggishly.",
    chinese_question: "炎热的夏日下午让每个人都感到一阵 __________ ，让他们寻找阴凉处，频繁小睡，动作迟缓。",
    answers: [
        { option: "A", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "B", answer: "energy", chinese_answer: "能量", chinese_romanization: "néngliàng" },
        { option: "C", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" },
        { option: "D", answer: "languor", chinese_answer: "倦怠", chinese_romanization: "juàndài" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'languor' means a state of tiredness or inertia." +
                "<br><br>" +
                "(A) 'excitement' means a feeling of great enthusiasm and eagerness." +
                "<br><br>" +
                "(B) 'energy' means the strength and vitality required for sustained physical or mental activity." +
                "<br><br>" +
                "(C) 'alertness' means the quality of being quick to notice things.",
    chinese_explanation: "(D) '倦怠' 意味着疲倦或无力的状态。" +
                "<br><br>" +
                "(A) '兴奋' 意味着极大的热情和渴望。" +
                "<br><br>" +
                "(B) '能量' 意味着持续进行体力或脑力活动所需的力量和活力。" +
                "<br><br>" +
                "(C) '警觉' 意味着迅速注意事物的品质。"
    },
    {
        id: 7,
        question: "The sudden resignation of the CEO threw the company into __________, with employees panicking, meetings being canceled, and projects put on hold.",
        chinese_question: "CEO 的突然辞职使公司陷入了 __________，员工惊慌失措，会议被取消，项目被搁置。",
        answers: [
            { option: "A", answer: "stability", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
            { option: "B", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "C", answer: "pandemonium", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pandemonium' means wild and noisy disorder or confusion; uproar." +
                "<br><br>" +
                "(A) 'stability' means the state of being stable." +
                "<br><br>" +
                "(B) 'harmony' means agreement or concord." +
                "<br><br>" +
                "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(C) '混乱' 意味着狂野和嘈杂的混乱或骚动。" +
                "<br><br>" +
                "(A) '稳定' 意味着稳定的状态。" +
                "<br><br>" +
                "(B) '和谐' 意味着一致或和睦。" +
                "<br><br>" +
                "(D) '安静' 意味着完全没有声音。"
    },
    {
        id: 8,
        question: "The comedian's sharp __________ had the audience laughing throughout the entire show.",
        chinese_question: "这位喜剧演员的尖锐 __________ 让观众在整个演出过程中笑个不停。",
        answers: [
                { option: "A", answer: "witticism", chinese_answer: "妙语", chinese_romanization: "miàoyǔ" },
                { option: "B", answer: "complaint", chinese_answer: "抱怨", chinese_romanization: "bàoyuàn" },
                { option: "C", answer: "lament", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
                { option: "D", answer: "tirade", chinese_answer: "长篇大论", chinese_romanization: "chángpiān dàlùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'witticism' means a clever or witty remark." +
                "<br><br>" +
                "(B) 'complaint' means a statement that something is unsatisfactory or unacceptable." +
                "<br><br>" +
                "(C) 'lament' means a passionate expression of grief or sorrow." +
                "<br><br>" +
                "(D) 'tirade' means a long, angry speech of criticism or accusation.",
        chinese_explanation: "(A) '妙语' 意味着聪明或机智的话语。" +
                "<br><br>" +
                "(B) '抱怨' 意味着某事令人不满意或不可接受的声明。" +
                "<br><br>" +
                "(C) '哀叹' 意味着悲痛或悲伤的热情表达。" +
                "<br><br>" +
                "(D) '长篇大论' 意味着批评或指责的长篇愤怒演讲。"
    },
    {
        id: 9,
        question: "The __________ of the invading army left the town stripped of its resources and valuables.",
        chinese_question: "侵略军的 __________ 使这个小镇失去了所有资源和贵重物品。",
        answers: [
                { option: "A", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
                { option: "B", answer: "kindness", chinese_answer: "友善", chinese_romanization: "yǒushàn" },
                { option: "C", answer: "benevolence", chinese_answer: "仁慈", chinese_romanization: "réncí" },
                { option: "D", answer: "rapacity", chinese_answer: "贪婪", chinese_romanization: "tānlán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rapacity' means aggressive greed." +
                "<br><br>" +
                "(A) 'generosity' means the quality of being kind and generous." +
                "<br><br>" +
                "(B) 'kindness' means the quality of being friendly, generous, and considerate." +
                "<br><br>" +
                "(C) 'benevolence' means the quality of being well-meaning; kindness.",
        chinese_explanation: "(D) '贪婪'一词意味着侵略性的贪婪。" +
                "<br><br>" +
                "(A) '慷慨' 意味着友好和慷慨的品质。" +
                "<br><br>" +
                "(B) '友善' 意味着友好和慷慨的品质。" +
                "<br><br>" +
                "(C) '仁慈' 意味着善意的品质；仁慈。"
    },
    {
        id: 10,
        question: "The ship was stocked with enough __________, such as dried meats and fresh water, to ensure the crew could survive the long voyage.",
        chinese_question: "船上储备了足够的 __________，比如干肉和淡水，确保船员能够在漫长的航程中生存。",
        answers: [
                { option: "A", answer: "passengers", chinese_answer: "乘客", chinese_romanization: "chéngkè" },
                { option: "B", answer: "victuals", chinese_answer: "食物", chinese_romanization: "shíwù" },
                { option: "C", answer: "weapons", chinese_answer: "武器", chinese_romanization: "wǔqì" },
                { option: "D", answer: "furniture", chinese_answer: "家具", chinese_romanization: "jiājù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'victuals' means food or provisions." +
                "<br><br>" +
                "(A) 'passengers' means people who are traveling in a vehicle but are not operating it." +
                "<br><br>" +
                "(C) 'weapons' means devices designed to inflict harm or damage." +
                "<br><br>" +
                "(D) 'furniture' means large movable equipment used to make a house, office, or other space suitable for living or working.",
        chinese_explanation: "(B) '食物'一词意味着食物或粮食。" +
                "<br><br>" +
                "(A) '乘客' 意味着正在车辆中旅行但不操作它的人。" +
                "<br><br>" +
                "(C) '武器' 意味着旨在造成伤害或破坏的设备。" +
                "<br><br>" +
                "(D) '家具' 意味着用于使房子、办公室或其他空间适合居住或工作的可移动的大型设备。"
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
