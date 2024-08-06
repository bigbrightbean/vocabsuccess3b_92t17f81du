// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ advice helped me make the right decision during a difficult time.",
        chinese_question: "她的 __________ 建议在困难时帮助我做出了正确的决定。",
        answers: [
            { option: "A", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "unimportant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "D", answer: "golden", chinese_answer: "黄金的", chinese_romanization: "huángjīn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'golden' means highly valuable, excellent, or prosperous." +
            "<br><br>" +
            "(A) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'unimportant' means not having significant value or influence.",
        chinese_explanation: "(D) '黄金的' 意味着高度有价值的、优秀的或繁荣的。" +
            "<br><br>" +
            "(A) '无关的' 意味着与某事不相关的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '不重要的' 意味着没有重要价值或影响的。"
    },
    {
        id: 2,
        question: "It seemed __________ that they would win the lottery, given the odds against them.",
        chinese_question: "考虑到中奖的概率，他们中奖似乎 __________。",
        answers: [
            { option: "A", answer: "likely", chinese_answer: "可能", chinese_romanization: "kěnéng" },
            { option: "B", answer: "probable", chinese_answer: "可能", chinese_romanization: "kěnéng" },
            { option: "C", answer: "improbable", chinese_answer: "不太可能", chinese_romanization: "bù tài kěnéng" },
            { option: "D", answer: "certain", chinese_answer: "确定", chinese_romanization: "quèdìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'improbable' means not likely to be true or to happen." + 
            "<br><br>" +
            "(A) 'likely' means such as well might happen or be true; probable." +
            "<br><br>" +
            "(B) 'probable' means likely to be the case or to happen." +
            "<br><br>" +
            "(D) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(C) '不太可能' 意味着不太可能是真的或发生。" + 
            "<br><br>" +
            "(A) '可能' 意味着很可能发生或是真的；可能的。" +
            "<br><br>" +
            "(B) '可能' 意味着很可能发生的情况或事情。" +
            "<br><br>" +
            "(D) '确定' 意味着确定无疑；确定的。"
    },
    {
        id: 3,
        question: "In her community, her name is __________ with kindness and generosity.",
        chinese_question: "在她的社区里，她的名字 __________ 善良和慷慨。",
        answers: [
            { option: "A", answer: "unknown", chinese_answer: "不为人知的", chinese_romanization: "bù wéi rén zhī de" },
            { option: "B", answer: "synonymous", chinese_answer: "同义的", chinese_romanization: "tóngyì de" },
            { option: "C", answer: "contradictory", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'synonymous' means closely associated with or suggestive of something." +
            "<br><br>" +
            "(A) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(C) 'contradictory' means mutually opposed or inconsistent." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(B) '同义的' 意味着与某物紧密相关或暗示某物的。" +
            "<br><br>" +
            "(A) '不为人知的' 意味着未知或不熟悉的。" +
            "<br><br>" +
            "(C) '矛盾的' 意味着相互对立或不一致的。" +
            "<br><br>" +
            "(D) '无关的' 意味着与某事无关的."
    },
    {
        id: 4,
        question: "It's __________ that the medication meant to alleviate pain can sometimes cause discomfort.",
        chinese_question: "这种药物旨在缓解疼痛，但有时会引起不适，这很 __________。",
        answers: [
            { option: "A", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
            { option: "B", answer: "paradoxical", chinese_answer: "矛盾的", chinese_romanization: "máodùn de" },
            { option: "C", answer: "straightforward", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'paradoxical' means seemingly absurd or self-contradictory." +
            "<br><br>" +
            "(A) 'normal' means conforming to a standard; usual, typical, or expected." +
            "<br><br>" +
            "(C) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(B) '矛盾的' 意味着看似荒谬或自相矛盾的。" +
            "<br><br>" +
            "(A) '正常的' 意味着符合标准的；通常的，典型的或预期的。" +
            "<br><br>" +
            "(C) '直接的' 意味着不复杂且容易做或理解的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有困难的."
    },
    {
        id: 5,
        question: "The __________ belly of the pregnant woman was a clear indication of her advancing pregnancy.",
        chinese_question: "孕妇 __________ 的肚子清楚地表明她的怀孕进展。",
        answers: [
            { option: "A", answer: "concave", chinese_answer: "凹陷的", chinese_romanization: "āoxiàn de" },
            { option: "B", answer: "depressed", chinese_answer: "压低的", chinese_romanization: "yādī de" },
            { option: "C", answer: "sunken", chinese_answer: "下陷的", chinese_romanization: "xiàxiàn de" },
            { option: "D", answer: "protuberant", chinese_answer: "突出的", chinese_romanization: "tūchū de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'protuberant' means bulging out beyond the surrounding surface; protruding." +
            "<br><br>" +
            "(A) 'concave' means having an outline or surface that curves inward like the interior of a circle or sphere." +
            "<br><br>" +
            "(B) 'depressed' means pressed down or situated lower than the general surface." +
            "<br><br>" +
            "(C) 'sunken' means having sunk or been submerged in water.",
        chinese_explanation: "(D) '突出的' 意味着超出周围表面突出。" +
            "<br><br>" +
            "(A) '凹陷的' 意味着轮廓或表面向内弯曲，如圆或球体的内部。" +
            "<br><br>" +
            "(B) '压低的' 意味着被压低或位于低于一般表面的位置。" +
            "<br><br>" +
            "(C) '下陷的' 意味着沉没或被淹没在水中。"
    },
    {
        id: 6,
        question: "Her __________ defense of her beliefs inspired others to stand up for what they believed in.",
        chinese_question: "她对信仰的 __________ 捍卫激励了其他人站出来捍卫他们的信仰。",
        answers: [
            { option: "A", answer: "feeble", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "vigorous", chinese_answer: "强有力的", chinese_romanization: "qiángyǒulì de" },
            { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vigorous' means strong, healthy, and full of energy." +
            "<br><br>" +
            "(A) 'feeble' means lacking physical strength, especially as a result of age or illness." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(C) '强有力的' 意味着强壮、健康且充满活力的。" +
            "<br><br>" +
            "(A) '微弱的' 意味着缺乏体力，特别是由于年老或疾病的影响。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏进行体力要求高的任务的力量。" +
            "<br><br>" +
            "(D) '被动的' 意味着接受或允许发生的事情或其他人做的事情，而没有积极的回应或反抗。"
    },
    {
        id: 7,
    question: "The proposal seemed __________ at first, but with further discussion, it revealed some practical benefits.",
    chinese_question: "这个提议起初看起来很 __________，但进一步讨论后，它显示出一些实际的好处。",
    answers: [
        { option: "A", answer: "logical", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
        { option: "B", answer: "practical", chinese_answer: "实际的", chinese_romanization: "shíjì de" },
        { option: "C", answer: "ridiculous", chinese_answer: "荒谬的", chinese_romanization: "huāngmiù de" },
        { option: "D", answer: "reasonable", chinese_answer: "合理的", chinese_romanization: "hélǐ de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'ridiculous' means deserving or inviting mockery or derision." +
        "<br><br>" +
        "(A) 'logical' means clear, sound reasoning." +
        "<br><br>" +
        "(B) 'practical' means useful and sensible." +
        "<br><br>" +
        "(D) 'reasonable' means fair and sensible.",
    chinese_explanation: "(C) '荒谬的' 意味着值得或引发嘲笑或奚落的。" +
        "<br><br>" +
        "(A) '合理的' 意味着清晰、合理的推理。" +
        "<br><br>" +
        "(B) '实际的' 意味着有用且明智的。" +
        "<br><br>" +
        "(D) '合理的' 意味着公平和明智的。"
    },
    {
        id: 8,
        question: "The __________ state of the abandoned house mirrored the neglect it had suffered over the years.",
        chinese_question: "废弃的房屋__________的状态反映了多年来遭受的忽视。",
        answers: [
            { option: "A", answer: "haggard", chinese_answer: "憔悴的", chinese_romanization: "qiáocuì de" },
            { option: "B", answer: "refreshed", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "C", answer: "energetic", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
            { option: "D", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'haggard' means looking exhausted and unwell, especially from fatigue, worry, or suffering. Figuratively, it can mean appearing neglected and worn out." +
            "<br><br>" +
            "(B) 'refreshed' means having regained strength or energy." +
            "<br><br>" +
            "(C) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'lively' means full of life and energy.",
        chinese_explanation: "(A) '憔悴的'一词意味着看起来筋疲力尽和身体不适的，尤其是由于疲劳、担忧或痛苦。比喻地，它可以表示看起来被忽视和破旧的。" +
            "<br><br>" +
            "(B) '精力充沛的' 意味着恢复了力量或精力的。" +
            "<br><br>" +
            "(C) '充满活力的' 意味着表现出或涉及很大的活动或活力的。" +
            "<br><br>" +
            "(D) '活泼的' 意味着充满生命和能量的。"
    },
    {
        id: 9,
        question: "His hobby turned into a __________ venture, bringing in substantial income every month.",
        chinese_question: "他的爱好变成了一个 __________ 的项目，每个月都带来可观的收入。",
        answers: [
            { option: "A", answer: "costly", chinese_answer: "昂贵的", chinese_romanization: "ángguì de" },
            { option: "B", answer: "futile", chinese_answer: "无用的", chinese_romanization: "wúyòng de" },
            { option: "C", answer: "lucrative", chinese_answer: "有利可图的", chinese_romanization: "yǒulì kětú de" },
            { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lucrative' figuratively means highly profitable or rewarding." +
                "<br><br>" +
                "(A) 'costly' means costing a lot; expensive." +
                "<br><br>" +
                "(B) 'futile' means incapable of producing any useful result; pointless." +
                "<br><br>" +
                "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '有利可图的' 在比喻意义上意味着非常有利可图或有回报的。" +
                "<br><br>" +
                "(A) '昂贵的' 意味着花费很多；昂贵的。" +
                "<br><br>" +
                "(B) '无用的' 意味着不能产生任何有用结果的；无意义的。" +
                "<br><br>" +
                "(D) '微不足道的' 意味着价值或重要性很小的。"
    },
    {
        id: 10,
        question: "Her __________ ambition made her strive for success in every aspect of her life.",
        chinese_question: "她的 __________ 雄心使她在生活的各个方面都努力追求成功。",
        answers: [
            { option: "A", answer: "moderate", chinese_answer: "适度", chinese_romanization: "shìdù" },
            { option: "B", answer: "insatiable", chinese_answer: "无法满足", chinese_romanization: "wúfǎ mǎnzú" },
            { option: "C", answer: "controlled", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
            { option: "D", answer: "restrained", chinese_answer: "克制", chinese_romanization: "kèzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'insatiable' means (of an appetite or desire) impossible to satisfy." + 
            "<br><br>" +
            "(A) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(C) 'controlled' means adjusted or moved by something else." +
            "<br><br>" +
            "(D) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate.",
        chinese_explanation: "(B) '无法满足' 意味着（指食欲或欲望）无法满足。" + 
            "<br><br>" +
            "(A) '适度' 意味着数量、强度、质量或程度上是平均的。" +
            "<br><br>" +
            "(C) '控制' 意味着由其他事物调整或移动。" +
            "<br><br>" +
            "(D) '克制' 意味着以保留或适度为特征；不动感情的或冷静的。"
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
