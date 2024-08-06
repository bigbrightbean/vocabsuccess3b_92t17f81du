// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her excitement was __________ as she couldn't stop smiling and her eyes sparkled with joy.",
        chinese_question: "她的兴奋是 __________ 的，因为她一直微笑，眼睛闪闪发光。",
        answers: [
                { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
                { option: "B", answer: "ambiguous", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
                { option: "C", answer: "unclear", chinese_answer: "不清楚的", chinese_romanization: "bù qīngchu de" },
                { option: "D", answer: "concealed", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." + 
            "<br><br>" + 
            "(B) 'ambiguous' means open to more than one interpretation; having a double meaning." + 
            "<br><br>" + 
            "(C) 'unclear' means not easy to see, hear, or understand." + 
            "<br><br>" + 
            "(D) 'concealed' means kept secret; hidden.",
        chinese_explanation: "(A) '明显的' 意味着容易察觉或理解的；清晰的、不言自明的或显然的。" +
            "<br><br>" +
            "(B) '模糊的' 意味着可以有多种解释的；有双重意义的。" +
            "<br><br>" +
            "(C) '不清楚的' 意味着不容易看到、听到或理解的。" +
            "<br><br>" +
            "(D) '隐藏的' 意味着保密的；隐藏的."
    },
    {
        id: 2,
        question: "Her __________ decision to step down as CEO after the scandal showed her commitment to the company's values and reputation.",
        chinese_question: "在丑闻后她做出了 __________ 的决定，辞去了首席执行官的职务，表明了她对公司价值观和声誉的承诺。",
        answers: [
            { option: "A", answer: "honourable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" },
            { option: "B", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
            { option: "C", answer: "ignoble", chinese_answer: "卑鄙的", chinese_romanization: "bēibǐ de" },
            { option: "D", answer: "unethical", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'honourable' means bringing or worthy of honor." + 
            "<br><br>" +
            "(B) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
            "<br><br>" +
            "(C) 'ignoble' means not honorable in character or purpose." +
            "<br><br>" +
            "(D) 'unethical' means not morally correct.",
        chinese_explanation: "(A) '光荣的' 意味着带来或值得荣誉的。" + 
            "<br><br>" +
            "(B) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐的。" +
            "<br><br>" +
            "(C) '卑鄙的' 意味着在性格或目的上不光彩的。" +
            "<br><br>" +
            "(D) '不道德的' 意味着不道德的。"
    },
    {
        id: 3,
    question: "His plans for the future were __________, filled with dreams of grandeur and impossible achievements.",
    chinese_question: "他对未来的计划非常 __________，充满了宏伟和不可能实现的梦想。",
    answers: [
        { option: "A", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" },
        { option: "B", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
        { option: "C", answer: "fanciful", chinese_answer: "幻想的", chinese_romanization: "huànxiǎng de" },
        { option: "D", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'fanciful' means over-imaginative and unrealistic. Figuratively, it can mean being imaginative and unrealistic." + 
        "<br><br>" +
        "(A) 'realistic' means having or showing a sensible and practical idea of what can be achieved or expected." +
        "<br><br>" +
        "(B) 'dull' means lacking interest or excitement." +
        "<br><br>" +
        "(D) 'mundane' means lacking interest or excitement; dull.",
    chinese_explanation: "(C) '幻想的'一词意味着过度想象和不切实际的。比喻地，它可以表示充满想象和不切实际的。" + 
        "<br><br>" +
        "(A) '现实的' 意味着对能实现或预期的事物有或表现出明智和实际的想法。" +
        "<br><br>" +
        "(B) '无聊的' 意味着缺乏兴趣或兴奋的。" +
        "<br><br>" +
        "(D) '平凡的' 意味着缺乏兴趣或兴奋的；无聊的。"
    },
    {
        id: 4,
        question: "His __________ manner in handling the criticism, by acknowledging the feedback and thanking the critics, earned him a lot of respect.",
        chinese_question: "他 __________ 地处理批评的方式，通过认可反馈和感谢批评者，赢得了很多人的尊敬。",
        answers: [
            { option: "A", answer: "hostile", chinese_answer: "敌对", chinese_romanization: "díduì" },
            { option: "B", answer: "gracious", chinese_answer: "亲切", chinese_romanization: "qīnqiè" },
            { option: "C", answer: "dismissive", chinese_answer: "不屑一顾", chinese_romanization: "bùxiè yīgù" },
            { option: "D", answer: "arrogant", chinese_answer: "傲慢", chinese_romanization: "àomàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gracious' means courteous, kind, and pleasant, especially towards someone of lower social status." +
            "<br><br>" +
            "(A) 'hostile' means unfriendly; antagonistic." +
            "<br><br>" +
            "(C) 'dismissive' means feeling or showing that something is unworthy of consideration." +
            "<br><br>" +
            "(D) 'arrogant' means having or revealing an exaggerated sense of one's own importance or abilities.",
        chinese_explanation: "(B) '亲切' 意味着礼貌、友善和愉快，尤其是对社会地位较低的人。" +
            "<br><br>" +
            "(A) '敌对' 意味着不友好；对抗性。" +
            "<br><br>" +
            "(C) '不屑一顾' 意味着感到或表现出某事不值得考虑。" +
            "<br><br>" +
            "(D) '傲慢' 意味着有或表现出对自己重要性或能力的夸大认识。"
    },
    {
        id: 5,
        question: "Her lifestyle was __________, filled with designer clothes, gourmet meals, and first-class travel.",
        chinese_question: "她的生活方式非常 __________，充满了名牌服装、美食和头等舱旅行。",
        answers: [
            { option: "A", answer: "luxurious", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "B", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "C", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "D", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense." + 
            "<br><br>" +
            "(B) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(C) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'humble' means having or showing a modest or low estimate of one's importance.",
        chinese_explanation: "(A) '奢华的' 意味着极其舒适、优雅或愉快的，特别是涉及高昂费用的。" + 
            "<br><br>" +
            "(B) '节俭的' 意味着在花钱或食物方面节省或经济的。" +
            "<br><br>" +
            "(C) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(D) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度。"
    },
    {
        id: 6,
        question: "The __________ software allows users to access their files from any computer.",
        chinese_question: "这种 __________ 的软件允许用户从任何电脑访问他们的文件。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "受限的", chinese_romanization: "shòu xiàn de" },
            { option: "B", answer: "fixed", chinese_answer: "固定的", chinese_romanization: "gùdìng de" },
            { option: "C", answer: "portable", chinese_answer: "便携的", chinese_romanization: "biànxié de" },
            { option: "D", answer: "stationary", chinese_answer: "静止的", chinese_romanization: "jìngzhǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'portable' means able to be easily carried or moved." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'fixed' means securely placed or fastened; stable." +
            "<br><br>" +
            "(D) 'stationary' means not moving or not intended to be moved.",
        chinese_explanation: "(C) '便携的' 意味着能够轻松携带或移动的。" +
            "<br><br>" +
            "(A) '受限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(B) '固定的' 意味着牢固放置或固定的；稳定的。" +
            "<br><br>" +
            "(D) '静止的' 意味着不移动或不打算移动的。"
    },
    {
        id: 7,
    question: "The CEO's __________ lifestyle was often criticized as being out of touch with the average employee who lived modestly and struggled to make ends meet.",
    chinese_question: "CEO的 __________ 生活方式经常被批评为脱离普通员工的实际，而普通员工生活简朴，勉强维持生计。",
    answers: [
        { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "B", answer: "swanky", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
        { option: "C", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
        { option: "D", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'swanky' means stylishly luxurious and expensive." +
        "<br><br>" +
        "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(C) 'humble' means having or showing a modest or low estimate of one's importance." +
        "<br><br>" +
        "(D) 'frugal' means sparing or economical with regard to money or food.",
    chinese_explanation: "(B) '豪华的' 意味着时尚奢华和昂贵的。" +
        "<br><br>" +
        "(A) '谦虚的' 意味着对自己的能力或成就不夸张的。" +
        "<br><br>" +
        "(C) '谦逊的' 意味着对自己的重要性有谦虚或低估。" +
        "<br><br>" +
        "(D) '节俭的' 意味着在金钱或食物方面节约的。"
    },
    {
        id: 8,
        question: "His __________ tone as he spoke about his childhood revealed a longing for simpler times.",
        chinese_question: "他在谈论童年时 __________ 的语气透露出对简单时代的渴望。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
            { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "D", answer: "wistful", chinese_answer: "忧思的", chinese_romanization: "yōusī de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'wistful' means having or showing a feeling of vague or regretful longing." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'excited' means very enthusiastic and eager." +
            "<br><br>" +
            "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(D) '忧思的' 意味着有或表现出模糊或遗憾的渴望。" +
            "<br><br>" +
            "(A) '快乐的' 意味着明显的幸福和乐观。" +
            "<br><br>" +
            "(B) '兴奋的' 意味着非常热情和渴望。" +
            "<br><br>" +
            "(C) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误。"
    },
    {
        id: 9,
        question: "Investing in government bonds is considered a __________ bet in the financial market, with guaranteed returns and low risk.",
        chinese_question: "投资政府债券被认为是在金融市场上的一个 __________ 的赌注，因为它具有保证回报和低风险。",
        answers: [
            { option: "A", answer: "risky", chinese_answer: "冒险的", chinese_romanization: "màoxiǎn de" },
            { option: "B", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "C", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "D", answer: "speculative", chinese_answer: "投机的", chinese_romanization: "tóujī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'safe' means involving little risk of loss." +
            "<br><br>" +
            "(A) 'risky' means full of the possibility of danger, failure, or loss." +
            "<br><br>" +
            "(C) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(D) 'speculative' means involving a high risk of loss.",
        chinese_explanation: "(B) '安全的' 意味着涉及的风险很小。" +
            "<br><br>" +
            "(A) '冒险的' 意味着充满危险、失败或损失的可能性。" +
            "<br><br>" +
            "(C) '不确定的' 意味着不能依赖的；未知或不确定的。" +
            "<br><br>" +
            "(D) '投机的' 意味着涉及高风险的损失。"
    },
    {
        id: 10,
        question: "His __________ approach to the negotiations led him to accept unfavourable terms.",
        chinese_question: "他对谈判的 __________ 态度导致他接受了不利的条款。",
        answers: [
            { option: "A", answer: "shrewd", chinese_answer: "精明的", chinese_romanization: "jīngmíng de" },
            { option: "B", answer: "cunning", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" },
            { option: "C", answer: "calculating", chinese_answer: "算计的", chinese_romanization: "suànjì de" },
            { option: "D", answer: "naive", chinese_answer: "天真的", chinese_romanization: "tiānzhēn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'naive' means showing a lack of experience, wisdom, or judgment." + 
            "<br><br>" + 
            "(A) 'shrewd' means having or showing sharp powers of judgment; astute." + 
            "<br><br>" + 
            "(B) 'cunning' means having or showing skill in achieving one's ends by deceit or evasion." + 
            "<br><br>" + 
            "(C) 'calculating' means acting in a scheming and ruthlessly determined way.",
        chinese_explanation: "(D) '天真的' 意味着缺乏经验、智慧或判断力的。" +
            "<br><br>" +
            "(A) '精明的' 意味着具有或表现出敏锐的判断力；精明的。" +
            "<br><br>" +
            "(B) '狡猾的' 意味着在通过欺骗或逃避手段实现目标方面有技巧或表现出技巧。" +
            "<br><br>" +
            "(C) '算计的' 意味着以诡计多端和冷酷无情的方式行事。"
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
