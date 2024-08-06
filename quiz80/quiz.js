// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The boy's consistent story gave __________ to his account of the accident, showing he was telling the truth.",
        chinese_question: "男孩连贯的故事为他对事故的描述提供了__________，表明他说的是实话。",
        answers: [
            { option: "A", answer: "disbelief", chinese_answer: "不信", chinese_romanization: "bùxìn" },
            { option: "B", answer: "denial", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
            { option: "C", answer: "refutation", chinese_answer: "驳斥", chinese_romanization: "bóchì" },
            { option: "D", answer: "credence", chinese_answer: "可信性", chinese_romanization: "kěxìnxìng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'credence' means belief in or acceptance of something as true." +
            "<br><br>" +
            "(A) 'disbelief' means inability or refusal to accept that something is true or real." +
            "<br><br>" +
            "(B) 'denial' means the action of declaring something to be untrue." +
            "<br><br>" +
            "(C) 'refutation' means the action of proving a statement or theory to be wrong or false.",
        chinese_explanation: "(D) '可信性' 意味着相信某事或接受某事是真的。" +
            "<br><br>" +
            "(A) '不信' 意味着无法或拒绝接受某事是真的或真实的。" +
            "<br><br>" +
            "(B) '否认' 意味着宣布某事不真实的行为。" +
            "<br><br>" +
            "(C) '驳斥' 意味着证明某个陈述或理论是错误或虚假的行为。"
    },
    {
        id: 2,
        question: "The tech giant is a __________ in the industry, dominating the market with its innovative products.",
        chinese_question: "这家科技巨头是行业中的一个 __________，凭借其创新产品主导市场。",
        answers: [
                { option: "A", answer: "start-up", chinese_answer: "初创公司", chinese_romanization: "chūchuàng gōngsī" },
                { option: "B", answer: "behemoth", chinese_answer: "巨兽", chinese_romanization: "jùshòu" },
                { option: "C", answer: "boutique", chinese_answer: "精品店", chinese_romanization: "jīngpǐn diàn" },
                { option: "D", answer: "franchise", chinese_answer: "特许经营", chinese_romanization: "tèxǔ jīngyíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'behemoth' means something enormous, especially a large and powerful organization or entity." +
                "<br><br>" +
                "(A) 'start-up' means a newly established business." +
                "<br><br>" +
                "(C) 'boutique' means a small shop specializing in fashionable clothes or accessories." +
                "<br><br>" +
                "(D) 'franchise' means an authorization granted by a government or company to an individual or group enabling them to carry out specified commercial activities.",
        chinese_explanation: "(B) '巨兽'一词意味着巨大的东西，尤其是一个庞大而强大的组织或实体。" +
                "<br><br>" +
                "(A) '初创公司' 意味着新成立的企业。" +
                "<br><br>" +
                "(C) '精品店' 意味着一家专门经营时尚服装或配饰的小店。" +
                "<br><br>" +
                "(D) '特许经营' 意味着政府或公司授予个人或团体的授权，使他们能够进行特定的商业活动。"
    },
    {
        id: 3,
        question: "The __________ of her stance on the matter caused a rift within the group, as others felt their opinions were being dismissed.",
        chinese_question: "她在这个问题上的 __________ 导致了团队内部的裂痕，因为其他人觉得他们的意见被忽视了。",
        answers: [
                { option: "A", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" },
                { option: "B", answer: "negotiation", chinese_answer: "谈判", chinese_romanization: "tánpàn" },
                { option: "C", answer: "flexibility", chinese_answer: "灵活性", chinese_romanization: "línghuó xìng" },
                { option: "D", answer: "intransigence", chinese_answer: "不妥协", chinese_romanization: "bù tuǒxié" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'intransigence' figuratively means refusal to change one's views or to agree about something." +
                "<br><br>" +
                "(A) 'compromise' means an agreement or a settlement of a dispute that is reached by each side making concessions." +
                "<br><br>" +
                "(B) 'negotiation' means discussion aimed at reaching an agreement." +
                "<br><br>" +
                "(C) 'flexibility' means the quality of bending easily without breaking.",
        chinese_explanation: "(D) '不妥协' 在此语境下意指拒绝改变观点或就某事达成一致。" +
                "<br><br>" +
                "(A) '妥协' 意味着通过双方做出让步而达成的协议或争端解决。" +
                "<br><br>" +
                "(B) '谈判' 意味着旨在达成协议的讨论。" +
                "<br><br>" +
                "(C) '灵活性' 意味着在不破裂的情况下易于弯曲的质量。"
    },
    {
        id: 4,
        question: "After years of rivalry, John finally defeated his __________ in the championship match, securing his place as the best player in the league.",
        chinese_question: "经过多年的竞争，约翰终于在锦标赛中击败了他的 __________，确保了他在联盟中最佳球员的位置。",
        answers: [
            { option: "A", answer: "friend", chinese_answer: "朋友", chinese_romanization: "péngyǒu" },
            { option: "B", answer: "mentor", chinese_answer: "导师", chinese_romanization: "dǎoshī" },
            { option: "C", answer: "nemesis", chinese_answer: "竞争对手", chinese_romanization: "jìngzhēng duìshǒu" },
            { option: "D", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nemesis' means a long-standing rival; an archenemy." +
                "<br><br>" +
                "(A) 'friend' means a person whom one knows and with whom one has a bond of mutual affection." +
                "<br><br>" +
                "(B) 'mentor' means an experienced and trusted advisor." +
                "<br><br>" +
                "(D) 'supporter' means a person who approves of and encourages someone or something.",
        chinese_explanation: "(C) '竞争对手' 意味着长期存在的对手；主要敌人。" +
                "<br><br>" +
                "(A) '朋友' 意味着一个人认识并与之有相互感情纽带的人。" +
                "<br><br>" +
                "(B) '导师' 意味着一个有经验和值得信赖的顾问。" +
                "<br><br>" +
                "(D) '支持者' 意味着一个人赞成并鼓励某人或某事。"
    },
    {
        id: 5,
        question: "The __________ of the ocean has always fascinated marine biologists, offering endless mysteries to explore.",
        chinese_question: "海洋的 __________ 一直吸引着海洋生物学家，提供了无尽的探索奥秘。",
        answers: [
            { option: "A", answer: "profundity", chinese_answer: "深度", chinese_romanization: "shēndù" },
            { option: "B", answer: "surface", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
            { option: "C", answer: "shallowness", chinese_answer: "浅薄", chinese_romanization: "qiǎnbó" },
            { option: "D", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'profundity' means great depth." +
            "<br><br>" +
            "(B) 'surface' means the outside part or uppermost layer of something." +
            "<br><br>" +
            "(C) 'shallowness' means lack of depth." +
            "<br><br>" +
            "(D) 'clarity' means the quality of being clear, in particular.",
        chinese_explanation: "(A) '深度' 意味着巨大的深度。" +
            "<br><br>" +
            "(B) '表面' 意味着某物的外部或最上层。" +
            "<br><br>" +
            "(C) '浅薄' 意味着缺乏深度。" +
            "<br><br>" +
            "(D) '清晰' 意味着清晰的质量，特别是。"
    },
    {
        id: 6,
        question: "The movie was criticized for its __________, with overly sentimental scenes that felt insincere.",
        chinese_question: "这部电影因其 __________ 而受到批评，过于煽情的场景显得不真诚。",
        answers: [
                { option: "A", answer: "humor", chinese_answer: "幽默", chinese_romanization: "yōumò" },
                { option: "B", answer: "realism", chinese_answer: "现实主义", chinese_romanization: "xiànshí zhǔyì" },
                { option: "C", answer: "mawkishness", chinese_answer: "矫情", chinese_romanization: "jiǎoqíng" },
                { option: "D", answer: "complexity", chinese_answer: "复杂性", chinese_romanization: "fùzá xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mawkishness' means exaggerated or false sentimentality." +
                "<br><br>" +
                "(A) 'humor' means the quality of being amusing or comic." +
                "<br><br>" +
                "(B) 'realism' means the quality or fact of representing a person or thing in a way that is accurate and true to life." +
                "<br><br>" +
                "(D) 'complexity' means the state or quality of being intricate or complicated.",
        chinese_explanation: "(C) '矫情'一词意味着夸张或虚假的感伤。" +
                "<br><br>" +
                "(A) '幽默' 意味着有趣或滑稽的品质。" +
                "<br><br>" +
                "(B) '现实主义' 意味着以准确和真实的方式表现人物或事物的品质或事实。" +
                "<br><br>" +
                "(D) '复杂性' 意味着错综复杂或复杂的状态或品质。"
    },
    {
        id: 7,
    question: "The company's public image was just a __________, hiding the unethical practices behind the scenes.",
    chinese_question: "公司的公众形象只是一个 __________，掩盖了背后的不道德行为。",
    answers: [
        { option: "A", answer: "truth", chinese_answer: "真相", chinese_romanization: "zhēnxiàng" },
        { option: "B", answer: "transparency", chinese_answer: "透明度", chinese_romanization: "tòumíngdù" },
        { option: "C", answer: "reality", chinese_answer: "现实", chinese_romanization: "xiànshí" },
        { option: "D", answer: "veneer", chinese_answer: "外表", chinese_romanization: "wàibiǎo" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'veneer' means an outward appearance that hides the true nature of something." +
        "<br><br>" +
        "(A) 'truth' means that which is true or in accordance with fact or reality." +
        "<br><br>" +
        "(B) 'transparency' means the quality of being done in an open way without secrets." +
        "<br><br>" +
        "(C) 'reality' means the state of things as they actually exist.",
    chinese_explanation: "(D) '外表'一词意味着隐藏某物真面目的外表。" +
        "<br><br>" +
        "(A) '真相' 意味着符合事实或现实的事物。" +
        "<br><br>" +
        "(B) '透明度' 意味着公开进行而没有秘密的质量。" +
        "<br><br>" +
        "(C) '现实' 意味着事物实际存在的状态。"
    },
    {
        id: 8,
        question: "The __________ of the full moon illuminated the night sky, creating a magical atmosphere.",
        chinese_question: "满月的 __________ 照亮了夜空，营造出一种神奇的氛围。",
        answers: [
                { option: "A", answer: "effulgence", chinese_answer: "光辉", chinese_romanization: "guānghuī" },
                { option: "B", answer: "obscurity", chinese_answer: "模糊", chinese_romanization: "móhú" },
                { option: "C", answer: "gloom", chinese_answer: "阴暗", chinese_romanization: "yīn'àn" },
                { option: "D", answer: "shadow", chinese_answer: "阴影", chinese_romanization: "yīnyǐng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'effulgence' means brilliant radiance or shining brightness." +
                "<br><br>" +
                "(B) 'obscurity' means the state of being unknown, inconspicuous, or unimportant." +
                "<br><br>" +
                "(C) 'gloom' means partial or total darkness." +
                "<br><br>" +
                "(D) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface.",
        chinese_explanation: "(A) '光辉'一词意味着辉煌的光辉或明亮的光芒。" +
                "<br><br>" +
                "(B) '模糊' 意味着不知名、不起眼或不重要的状态。" +
                "<br><br>" +
                "(C) '阴暗' 意味着部分或完全的黑暗。" +
                "<br><br>" +
                "(D) '阴影' 意味着物体在光线和表面之间产生的暗区或形状。"
    },
    {
        id: 9,
        question: "The sudden __________ in the boardroom caught everyone off guard and disrupted the meeting.",
        chinese_question: "会议室里突然的 __________ 让所有人都措手不及，打断了会议。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "commotion", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
            { option: "C", answer: "stillness", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" },
            { option: "D", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'commotion' means a state of confused and noisy disturbance." +
                "<br><br>" +
                "(A) 'calm' means the absence of violent or confrontational activity." +
                "<br><br>" +
                "(C) 'stillness' means the absence of movement or sound." +
                "<br><br>" +
                "(D) 'order' means the arrangement or disposition of people or things in relation to each other.",
        chinese_explanation: "(B) '喧闹' 意味着一种混乱而嘈杂的干扰状态。" +
                "<br><br>" +
                "(A) '平静' 意味着没有暴力或对抗活动。" +
                "<br><br>" +
                "(C) '静止' 意味着没有运动或声音。" +
                "<br><br>" +
                "(D) '秩序' 意味着人与物之间的排列或布置。"
    },
    {
        id: 10,
        question: "The __________ she felt was palpable when her phone rang loudly during the quiet ceremony.",
        chinese_question: "在安静的仪式上，她的手机大声响起，她感到的 __________ 是显而易见的。",
        answers: [
                { option: "A", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "B", answer: "discomfiture", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
                { option: "C", answer: "pride", chinese_answer: "自豪", chinese_romanization: "zìháo" },
                { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'discomfiture' figuratively means feeling of unease or embarrassment due to an awkward or inappropriate situation." +
                "<br><br>" +
                "(A) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(C) 'pride' means a feeling of deep pleasure or satisfaction derived from one's own achievements." +
                "<br><br>" +
                "(D) 'amusement' means the state or experience of finding something funny.",
        chinese_explanation: "(B) '尴尬' 在此语境下意指因尴尬或不合适的情况而感到不安或尴尬的感觉。" +
                "<br><br>" +
                "(A) '冷漠' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(C) '自豪' 意味着因自己的成就而感到的深深的愉悦或满足感。" +
                "<br><br>" +
                "(D) '娱乐' 意味着发现某事有趣的状态或体验。"
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
