// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She was so __________ with her thoughts that she didn't hear the doorbell ring.",
        chinese_question: "她如此 __________ 于自己的思绪，以至于没有听到门铃响。",
        answers: [
            { option: "A", answer: "focused", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" },
            { option: "B", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
            { option: "C", answer: "preoccupied", chinese_answer: "心不在焉的", chinese_romanization: "xīn bù zài yān de" },
            { option: "D", answer: "observant", chinese_answer: "观察敏锐的", chinese_romanization: "guānchá mǐnruì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'preoccupied' means engrossed in thought; distracted." +
            "<br><br>" +
            "(A) 'focused' means directing a great deal of attention, interest, or activity towards a particular aim." +
            "<br><br>" +
            "(B) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(D) 'observant' means quick to notice things.",
        chinese_explanation: "(C) '心不在焉的' 意味着沉浸在思考中；心不在焉的。" +
            "<br><br>" +
            "(A) '专注的' 意味着将大量注意力、兴趣或活动集中在特定目标上。" +
            "<br><br>" +
            "(B) '注意的' 意味着密切注意某事。" +
            "<br><br>" +
            "(D) '观察敏锐的' 意味着迅速注意到事物."
    },
    {
        id: 2,
        question: "Her __________ memory allowed her to excel in her studies and recall information effortlessly.",
        chinese_question: "她__________的记忆力使她在学业上表现出色，并能毫不费力地记住信息。",
        answers: [
            { option: "A", answer: "forgetful", chinese_answer: "健忘的", chinese_romanization: "jiànwàng de" },
            { option: "B", answer: "tenacious", chinese_answer: "顽强的", chinese_romanization: "wánqiáng de" },
            { option: "C", answer: "weak", chinese_answer: "弱的", chinese_romanization: "ruò de" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tenacious' means not readily relinquishing a position, principle, or course of action; determined." +
            "<br><br>" +
            "(A) 'forgetful' means apt or likely not to remember." +
            "<br><br>" +
            "(C) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(D) 'fragile' means easily broken or damaged.",
        chinese_explanation: "(B) '顽强的'一词意味着不轻易放弃一个立场、原则或行动方针；坚定的。" +
            "<br><br>" +
            "(A) '健忘的' 意味着容易或可能不记得的。" +
            "<br><br>" +
            "(C) '弱的' 意味着缺乏执行体力任务的能力；缺乏体力和能量。" +
            "<br><br>" +
            "(D) '脆弱的' 意味着容易破碎或损坏的."
    },
    {
        id: 3,
        question: "His __________ dedication to the project ensured its success, despite numerous obstacles.",
        chinese_question: "尽管遇到了许多障碍，他对项目的 __________ 奉献确保了其成功。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "B", answer: "lethargic", chinese_answer: "昏昏欲睡", chinese_romanization: "hūnhūn yù shuì" },
            { option: "C", answer: "tireless", chinese_answer: "不知疲倦", chinese_romanization: "bù zhī píjuàn" },
            { option: "D", answer: "occasional", chinese_answer: "偶尔", chinese_romanization: "ǒu'ěr" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tireless' means showing great energy and persistence; never seeming to get tired." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'lethargic' means sluggish and apathetic." +
            "<br><br>" +
            "(D) 'occasional' means occurring or appearing at irregular or infrequent intervals.",
        chinese_explanation: "(C) '不知疲倦' 意味着表现出极大的精力和毅力；似乎从不疲倦。" +
            "<br><br>" +
            "(A) '漠不关心' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(B) '昏昏欲睡' 意味着懒洋洋的，无精打采的。" +
            "<br><br>" +
            "(D) '偶尔' 意味着不定期或不频繁出现。"
    },
    {
        id: 4,
question: "The bank manager was arrested for his involvement in __________ transactions that siphoned millions from unsuspecting customers.",
chinese_question: "银行经理因参与 __________ 的交易被捕，这些交易从毫无防备的客户那里吸走了数百万资金。",
answers: [
    { option: "A", answer: "fraudulent", chinese_answer: "欺诈的", chinese_romanization: "qīzhà de" },
    { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
    { option: "C", answer: "ethical", chinese_answer: "合乎道德的", chinese_romanization: "héhū dàodé de" },
    { option: "D", answer: "legitimate", chinese_answer: "合法的", chinese_romanization: "héfǎ de" }
],
correctAnswer: "A",
explanation: "(A) 'fraudulent' means obtained, done by, or involving deception, especially criminal deception." + 
    "<br><br>" +
    "(B) 'transparent' means easy to perceive or detect; obvious." +
    "<br><br>" +
    "(C) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
    "<br><br>" +
    "(D) 'legitimate' means conforming to the law or to rules.",
chinese_explanation: "(A) '欺诈的' 意味着通过欺骗获得的、进行的或涉及的，尤其是刑事欺骗。" + 
    "<br><br>" +
    "(B) '透明的' 意味着容易感知或检测到的；明显的。" +
    "<br><br>" +
    "(C) '合乎道德的' 意味着与道德原则或处理这些原则的知识分支有关的。" +
    "<br><br>" +
    "(D) '合法的' 意味着符合法律或规则的。"
    },
    {
        id: 5,
        question: "His __________ consideration of her feelings made all the difference during their difficult conversation.",
        chinese_question: "在他们的艰难对话中，他对她感受的 __________ 考虑起了决定性的作用。",
        answers: [
            { option: "A", answer: "perfunctory", chinese_answer: "敷衍", chinese_romanization: "fūyǎn" },
            { option: "B", answer: "thoughtless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
            { option: "C", answer: "superficial", chinese_answer: "肤浅", chinese_romanization: "fūqiǎn" },
            { option: "D", answer: "thoughtful", chinese_answer: "体贴", chinese_romanization: "tǐtiē" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'thoughtful' means showing careful consideration or attention." +
            "<br><br>" +
            "(A) 'perfunctory' means carried out with a minimum of effort or reflection." +
            "<br><br>" +
            "(B) 'thoughtless' means without consideration for others." +
            "<br><br>" +
            "(C) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(D) '体贴' 意味着表现出仔细的考虑或关注。" +
            "<br><br>" +
            "(A) '敷衍' 意味着以最小的努力或反思进行的。" +
            "<br><br>" +
            "(B) '粗心' 意味着没有为他人着想。" +
            "<br><br>" +
            "(C) '肤浅' 意味着存在于或发生在表面。"
    },
    {
        id: 6,
question: "The professor's lecture was __________, covering a wide range of topics without a clear focus, which left the students confused.",
chinese_question: "教授的讲座 __________，涵盖了广泛的主题，没有明确的重点，让学生们感到困惑。",
answers: [
        { option: "A", answer: "meandering", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
        { option: "B", answer: "concise", chinese_answer: "简明的", chinese_romanization: "jiǎnmíng de" },
        { option: "C", answer: "structured", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" },
        { option: "D", answer: "coherent", chinese_answer: "连贯的", chinese_romanization: "liánguàn de" }
],
correctAnswer: "A",
explanation: "(A) 'meandering' means following a winding course; proceeding in a convoluted or undirected fashion." + 
    "<br><br>" + 
    "(B) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." + 
    "<br><br>" + 
    "(C) 'structured' means arranged or organized in a systematic way." + 
    "<br><br>" + 
    "(D) 'coherent' means logical and consistent.",
chinese_explanation: "(A) '杂乱的' 意味着沿着弯曲的路线进行的；以复杂或无方向的方式进行的。" +
    "<br><br>" +
    "(B) '简明的' 意味着用少量的文字清晰地提供大量信息的；简洁但全面的。" +
    "<br><br>" +
    "(C) '有条理的' 意味着以系统的方式安排或组织的。" +
    "<br><br>" +
    "(D) '连贯的' 意味着逻辑和一致的."
    },
    {
        id: 7,
question: "She regretted her __________ words, spoken in anger without thinking.",
chinese_question: "她后悔自己__________的话，那是在愤怒中没有经过思考说出的。",
answers: [
    { option: "A", answer: "careful", chinese_answer: "仔细的", chinese_romanization: "zǐxì de" },
    { option: "B", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
    { option: "C", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
    { option: "D", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" }
],
correctAnswer: "C",
explanation: "(C) 'hasty' means done or acting with excessive speed or urgency; hurried. Figuratively, it can mean being rash and impetuous." + 
    "<br><br>" +
    "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
    "<br><br>" +
    "(B) 'deliberate' means done consciously and intentionally." +
    "<br><br>" +
    "(D) 'thorough' means complete with regard to every detail; not superficial or partial.",
chinese_explanation: "(C) '匆忙的'一词意味着做或行为过于迅速或紧急；仓促的。比喻地，它可以表示草率和鲁莽的。" + 
    "<br><br>" +
    "(A) '仔细的' 意味着确保避免潜在的危险、事故或伤害；谨慎的。" +
    "<br><br>" +
    "(B) '故意的' 意味着有意识和故意的。" +
    "<br><br>" +
    "(D) '彻底的' 意味着涉及到每一个细节的；不表面的或不部分的。"
    },
    {
        id: 8,
        question: "His __________ decision to return the lost wallet without taking any money earned him respect from everyone.",
        chinese_question: "他 __________ 地决定归还丢失的钱包而没有拿走任何钱，这让他赢得了所有人的尊重。",
        answers: [
            { option: "A", answer: "unethical", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" },
            { option: "B", answer: "virtuous", chinese_answer: "有道德的", chinese_romanization: "yǒu dàodé de" },
            { option: "C", answer: "dishonest", chinese_answer: "不诚实的", chinese_romanization: "bù chéngshí de" },
            { option: "D", answer: "immoral", chinese_answer: "邪恶的", chinese_romanization: "xié'è de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(A) 'unethical' means not morally correct." +
            "<br><br>" +
            "(C) 'dishonest' means behaving or prone to behave in an untrustworthy or fraudulent way." +
            "<br><br>" +
            "(D) 'immoral' means not conforming to accepted standards of morality.",
        chinese_explanation: "(B) '有道德的' 意味着有或表现出高尚的道德标准。" +
            "<br><br>" +
            "(A) '不道德的' 意味着不符合道德标准。" +
            "<br><br>" +
            "(C) '不诚实的' 意味着行为或倾向于行为不可信或欺诈。" +
            "<br><br>" +
            "(D) '邪恶的' 意味着不符合公认的道德标准。"
    },
    {
        id: 9,
            question: "The __________ spirit of the festival was evident, with people dancing in the streets and celebrating with joyous abandon.",
            chinese_question: "节日的 __________ 气氛显而易见，人们在街上跳舞，尽情欢庆。",
            answers: [
                { option: "A", answer: "jovial", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
                { option: "B", answer: "somber", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
                { option: "C", answer: "solemn", chinese_answer: "庄严的", chinese_romanization: "zhuāngyán de" },
                { option: "D", answer: "restrained", chinese_answer: "克制的", chinese_romanization: "kèzhì de" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'jovial' means cheerful and friendly." + 
                "<br><br>" +
                "(B) 'somber' means dark or dull in color or tone; gloomy." +
                "<br><br>" +
                "(C) 'solemn' means formal and dignified; serious." +
                "<br><br>" +
                "(D) 'restrained' means characterized by reserve or moderation; unemotional or dispassionate.",
            chinese_explanation: "(A) '愉快的' 意味着快乐和友好的。" + 
                "<br><br>" +
                "(B) '忧郁的' 意味着颜色或色调深沉或暗淡的；阴郁的。" +
                "<br><br>" +
                "(C) '庄严的' 意味着正式和庄重的；严肃的。" +
                "<br><br>" +
                "(D) '克制的' 意味着具有保留或适度的特点；无感情的或冷静的。"
    },
    {
        id: 10,
        question: "There are __________ risks in starting a new business, which every entrepreneur must consider.",
        chinese_question: "创业有 __________ 的风险，每个企业家都必须考虑。",
        answers: [
            { option: "A", answer: "optional", chinese_answer: "可选", chinese_romanization: "kě xuǎn" },
            { option: "B", answer: "avoidable", chinese_answer: "可避免", chinese_romanization: "kě bìmiǎn" },
            { option: "C", answer: "superficial", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
            { option: "D", answer: "inherent", chinese_answer: "内在", chinese_romanization: "nèizài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inherent' means existing in something as a permanent, essential, or characteristic attribute." + 
            "<br><br>" +
            "(A) 'optional' means available to be chosen but not obligatory." +
            "<br><br>" +
            "(B) 'avoidable' means able to be avoided or prevented." +
            "<br><br>" +
            "(C) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(D) '内在' 意味着作为永久的、基本的或特征的属性存在于某物中。" + 
            "<br><br>" +
            "(A) '可选' 意味着可选择但不是强制性的。" +
            "<br><br>" +
            "(B) '可避免' 意味着能够避免或预防。" +
            "<br><br>" +
            "(C) '表面' 意味着存在或发生在表面上。"
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
