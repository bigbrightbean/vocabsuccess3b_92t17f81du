// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The students were __________ when they learned they had all passed their exams with flying colours.",
        chinese_question: "当学生们得知他们都以优异成绩通过考试时，他们感到__________。",
        answers: [
            { option: "A", answer: "depressed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "B", answer: "sorrowful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
            { option: "C", answer: "jubilant", chinese_answer: "欢腾的", chinese_romanization: "huānténg de" },
            { option: "D", answer: "despondent", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'jubilant' means feeling or expressing great happiness and triumph. Figuratively, it can mean being extremely happy and triumphant." + 
            "<br><br>" +
            "(A) 'depressed' means in a state of general unhappiness or despondency." +
            "<br><br>" +
            "(B) 'sorrowful' means feeling or showing grief." +
            "<br><br>" +
            "(D) 'despondent' means in low spirits from loss of hope or courage.",
        chinese_explanation: "(C) '欢腾的'一词意味着感到或表达极大的快乐和胜利。比喻地，它可以表示极其高兴和胜利。" + 
            "<br><br>" +
            "(A) '沮丧的' 意味着处于普遍不快乐或失望的状态。" +
            "<br><br>" +
            "(B) '悲伤的' 意味着感到或表现出悲伤。" +
            "<br><br>" +
            "(D) '沮丧的' 意味着因失去希望或勇气而情绪低落。"
    },
    {
        id: 2,
    question: "The divorce proceedings were __________, filled with bitter accusations and deep-seated resentment from both parties.",
    chinese_question: "离婚诉讼充满了 __________，双方都充满了痛苦的指责和深深的怨恨。",
    answers: [
        { option: "A", answer: "rancorous", chinese_answer: "怨恨的", chinese_romanization: "yuànhèn de" },
        { option: "B", answer: "amicable", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
        { option: "C", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'rancorous' means characterized by bitterness or resentment." +
        "<br><br>" +
        "(B) 'amicable' means having a spirit of friendliness; without serious disagreement or rancor." +
        "<br><br>" +
        "(C) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '怨恨的' 意味着由痛苦或怨恨的情感特征的。" +
        "<br><br>" +
        "(B) '友好的' 意味着有一种友好的精神；没有严重的分歧或怨恨的。" +
        "<br><br>" +
        "(C) '愉快的' 意味着给予一种快乐满足或享受的感觉。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有特别的兴趣或同情；冷漠的。"
    },
    {
        id: 3,
        question: "The employee's __________ behavior towards his boss was evident as he constantly praised and agreed with everything she said.",
        chinese_question: "员工对老板 __________ 的行为显而易见，他总是不断赞美并同意她说的一切。",
        answers: [
            { option: "A", answer: "obsequious", chinese_answer: "谄媚", chinese_romanization: "chǎnmèi" },
            { option: "B", answer: "rebellious", chinese_answer: "反叛", chinese_romanization: "fǎnpàn" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "arrogant", chinese_answer: "傲慢", chinese_romanization: "àomàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obsequious' means excessively eager to please or obey." +
            "<br><br>" +
            "(B) 'rebellious' means resisting authority or control." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'arrogant' means having an exaggerated sense of one's own importance or abilities.",
        chinese_explanation: "(A) '谄媚' 意味着过度渴望取悦或服从。" +
            "<br><br>" +
            "(B) '反叛' 意味着抵抗权威或控制。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '傲慢' 意味着对自己的重要性或能力有夸大的认识。"
    },
    {
        id: 4,
        question: "His __________ pursuit of perfection in every project often led to unnecessary delays and stress.",
        chinese_question: "他对每个项目 __________ 的追求完美经常导致不必要的延误和压力。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "B", answer: "overzealous", chinese_answer: "过度热心的", chinese_romanization: "guòdù rèxīn de" },
            { option: "C", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'overzealous' means excessively enthusiastic or fervent." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety; at ease." +
            "<br><br>" +
            "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '过度热心的' 意味着过于热情或狂热的。" +
            "<br><br>" +
            "(A) '放松的' 意味着没有紧张和焦虑的；放松的。" +
            "<br><br>" +
            "(C) '平静的' 意味着没有表现或感觉到紧张、愤怒或其他强烈情绪的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的."
    },
    {
        id: 5,
        question: "Her __________ use of words made her writing concise and to the point.",
        chinese_question: "她 __________ 的用词使她的写作简洁明了。",
        answers: [
            { option: "A", answer: "verbose", chinese_answer: "啰嗦", chinese_romanization: "luōsuō" },
            { option: "B", answer: "frugal", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
            { option: "C", answer: "lengthy", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "D", answer: "excessive", chinese_answer: "过多", chinese_romanization: "guòduō" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'frugal' means simple and plain and costing little." +
            "<br><br>" +
            "(A) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(C) 'lengthy' means (especially in reference to time) of considerable or unusual length, especially so as to be tedious." +
            "<br><br>" +
            "(D) 'excessive' means more than is necessary, normal, or desirable; immoderate.",
        chinese_explanation: "(B) '简洁' 意味着简单朴素而成本低。" +
            "<br><br>" +
            "(A) '啰嗦' 意味着使用或表达的词语比需要的多。" +
            "<br><br>" +
            "(C) '冗长' 意味着（尤其是指时间）相当长或异常长，尤其是使人厌烦。" +
            "<br><br>" +
            "(D) '过多' 意味着超过必要的、正常的或可取的；不适度。"
    },
    {
        id: 6,
        question: "The chef's __________ senses were highly developed, allowing him to distinguish the faintest aromas in spices and herbs.",
        chinese_question: "这位厨师的 __________ 感非常发达，使他能够分辨香料和草药的微妙香气。",
        answers: [
            { option: "A", answer: "auditory", chinese_answer: "听觉的", chinese_romanization: "tīngjué de" },
            { option: "B", answer: "visual", chinese_answer: "视觉的", chinese_romanization: "shìjué de" },
            { option: "C", answer: "olfactory", chinese_answer: "嗅觉的", chinese_romanization: "xiùjué de" },
            { option: "D", answer: "tactile", chinese_answer: "触觉的", chinese_romanization: "chùjué de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'olfactory' relates to the sense of smell." +
            "<br><br>" +
            "(A) 'auditory' relates to the sense of hearing." +
            "<br><br>" +
            "(B) 'visual' relates to the sense of sight." +
            "<br><br>" +
            "(D) 'tactile' relates to the sense of touch.",
        chinese_explanation: "(C) '嗅觉的'一词意味着与嗅觉有关。" +
            "<br><br>" +
            "(A) '听觉的' 意味着与听觉有关。" +
            "<br><br>" +
            "(B) '视觉的' 意味着与视觉有关。" +
            "<br><br>" +
            "(D) '触觉的' 意味着与触觉有关。"
    },
    {
        id: 7,
        question: "Her __________ manner at the party, like constantly bragging about her wealth and accomplishments, alienated many of the guests.",
        chinese_question: "她在聚会上 __________ 的举止，比如不断炫耀她的财富和成就，使许多客人感到疏远。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "pretentious", chinese_answer: "自命不凡的", chinese_romanization: "zìmìng bùfán de" },
            { option: "C", answer: "genuine", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
            { option: "D", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pretentious' means attempting to impress by affecting greater importance, talent, culture, etc., than is actually possessed." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'genuine' means truly what something is said to be; authentic." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's own importance.",
        chinese_explanation: "(B) '自命不凡的' 意味着试图通过表现出比实际拥有的更大的重要性、才能、文化等来给人留下深刻印象。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的能力或成就不自以为是的。" +
            "<br><br>" +
            "(C) '真诚的' 意味着真正的，所说的就是其所是的；真实的。" +
            "<br><br>" +
            "(D) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估."
    },
    {
        id: 8,
        question: "Her __________ novel brought to life the struggles and triumphs of people living in the 19th century.",
        chinese_question: "她的 __________ 小说生动地展现了19世纪人们的奋斗和胜利。",
        answers: [
            { option: "A", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" },
            { option: "B", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "C", answer: "historical", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
            { option: "D", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'historical' means concerning history or past events." +
            "<br><br>" +
            "(A) 'futuristic' means having or involving very modern technology or design." +
            "<br><br>" +
            "(B) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(D) 'contemporary' means living or occurring at the same time.",
        chinese_explanation: "(C) '历史的' 意味着涉及历史或过去事件的。" +
            "<br><br>" +
            "(A) '未来的' 意味着拥有或涉及非常现代的技术或设计的。" +
            "<br><br>" +
            "(B) '现代的' 意味着与现在或最近的时间有关的，而不是遥远的过去。" +
            "<br><br>" +
            "(D) '当代的' 意味着同时存在或发生的。"
    },
    {
        id: 9,
    question: "The receptionist greeted every guest with a __________ energy, always smiling and moving with a youthful bounce.",
    chinese_question: "接待员以 __________ 的活力迎接每一位客人，总是面带微笑，步伐轻快。",
    answers: [
        { option: "A", answer: "torpid", chinese_answer: "迟钝的", chinese_romanization: "chídùn de" },
        { option: "B", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
        { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "sprightly", chinese_answer: "活泼的", chinese_romanization: "huópō de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'sprightly' means lively and full of energy." +
        "<br><br>" +
        "(A) 'torpid' means sluggish and inactive." +
        "<br><br>" +
        "(B) 'morose' means sullen and ill-tempered." +
        "<br><br>" +
        "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(D) '活泼的' 意思是充满活力。" +
        "<br><br>" +
        "(A) '迟钝的' 意思是迟缓和不活跃的。" +
        "<br><br>" +
        "(B) '忧郁的' 意思是闷闷不乐和脾气暴躁的。" +
        "<br><br>" +
        "(C) '冷漠的' 意思是表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 10,
        question: "The author thanked her supporters with __________ gratitude in her acceptance speech.",
        chinese_question: "作者在她的获奖感言中以 __________ 的感激之情感谢她的支持者。",
        answers: [
            { option: "A", answer: "reluctant", chinese_answer: "勉强的", chinese_romanization: "miǎnqiǎng de" },
            { option: "B", answer: "scant", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "C", answer: "profuse", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "D", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'profuse' means (especially of something offered or discharged) exuberantly plentiful; abundant." +
            "<br><br>" +
            "(A) 'reluctant' means unwilling and hesitant; disinclined." +
            "<br><br>" +
            "(B) 'scant' means barely sufficient or adequate." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree; negligible.",
        chinese_explanation: "(C) '丰富的' 意味着（尤其是提供或排放的东西）充沛的；丰富的。" +
            "<br><br>" +
            "(A) '勉强的' 意味着不愿和犹豫的；不情愿的。" +
            "<br><br>" +
            "(B) '不足的' 意味着几乎不足或不够的。" +
            "<br><br>" +
            "(D) '最小的' 意味着最小的数量、数量或程度的；微不足道的。"
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
