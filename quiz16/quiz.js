// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her writing was so __________ that readers often lost track of her main point.",
        chinese_question: "她的写作太__________，读者经常会失去她的主要观点。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "C", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "D", answer: "precise", chinese_answer: "精确的", chinese_romanization: "jīngquè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(C) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping." +
            "<br><br>" +
            "(D) 'precise' means marked by exactness and accuracy of expression or detail.",
        chinese_explanation: "(B) '冗长的' 意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易察觉、理解或解释的。" +
            "<br><br>" +
            "(C) '直接的' 意味着以最短的方式从一个地方延伸或移动到另一个地方，不改变方向或停止。" +
            "<br><br>" +
            "(D) '精确的' 意味着表达或细节的准确性和精确性。"
    },
    {
        id: 2,
        question: "His __________ speech, filled with grandiose claims and flashy language, failed to impress the audience.",
        chinese_question: "他__________的演讲，充满了浮夸的说法和华丽的语言，未能打动观众。",
        answers: [
                { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
                { option: "B", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
                { option: "C", answer: "ostentatious", chinese_answer: "浮华的", chinese_romanization: "fúhuá de" },
                { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice. Figuratively, it can mean being overly showy or flamboyant." + 
            "<br><br>" + 
            "(A) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements." + 
            "<br><br>" + 
            "(B) 'understated' means presented or expressed in a subtle and effective way." + 
            "<br><br>" + 
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '浮华的'一词意味着以粗俗或自命不凡的展示为特征的；旨在给人留下深刻印象或引起注意的。比喻地，它可以表示过于炫耀或浮夸的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的能力或成就评价适度的。" +
            "<br><br>" +
            "(B) '低调的' 意味着以微妙和有效的方式呈现或表达的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有困难的."
    },
    {
        id: 3,
        question: "The __________ gap between the rich and the poor has led to increased social tensions and unrest.",
        chinese_question: "__________ 的贫富差距导致了社会紧张和动荡的加剧。",
        answers: [
            { option: "A", answer: "narrowing", chinese_answer: "缩小的", chinese_romanization: "suōxiǎo de" },
            { option: "B", answer: "widening", chinese_answer: "扩大的", chinese_romanization: "kuòdà de" },
            { option: "C", answer: "shrinking", chinese_answer: "缩减的", chinese_romanization: "suōjiǎn de" },
            { option: "D", answer: "decreasing", chinese_answer: "减少的", chinese_romanization: "jiǎnshǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'widening' means increasing the extent, scope, or range of something." +
            "<br><br>" +
            "(A) 'narrowing' means becoming less wide." +
            "<br><br>" +
            "(C) 'shrinking' means becoming smaller in size or amount." +
            "<br><br>" +
            "(D) 'decreasing' means becoming smaller or fewer in size, amount, intensity, or degree.",
        chinese_explanation: "(B) '扩大的' 意味着增加某事物的范围、范围或程度。" +
            "<br><br>" +
            "(A) '缩小的' 意味着变得不那么宽的。" +
            "<br><br>" +
            "(C) '缩减的' 意味着在大小或数量上变小的。" +
            "<br><br>" +
            "(D) '减少的' 意味着在大小、数量、强度或程度上变小或变少的。"
    },
    {
        id: 4,
    question: "The company's __________ mistake in their financial calculations led to bankruptcy.",
    chinese_question: "公司在财务计算中的 __________ 错误导致了破产。",
    answers: [
        { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
        { option: "B", answer: "correct", chinese_answer: "正确的", chinese_romanization: "zhèngquè de" },
        { option: "C", answer: "accurate", chinese_answer: "准确的", chinese_romanization: "zhǔnquè de" },
        { option: "D", answer: "fatal", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'fatal' means causing death or disaster." +
        "<br><br>" +
        "(A) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(B) 'correct' means free from error; in accordance with fact or truth." +
        "<br><br>" +
        "(C) 'accurate' means correct in all details; exact.",
    chinese_explanation: "(D) '致命的' 意味着导致死亡或灾难的。" +
        "<br><br>" +
        "(A) '次要的' 意味着重要性、严重性或意义较小的。" +
        "<br><br>" +
        "(B) '正确的' 意味着没有错误的；符合事实或真相的。" +
        "<br><br>" +
        "(C) '准确的' 意味着所有细节都正确的；精确的。"
    },
    {
        id: 5,
        question: "The team's communication breakdowns were __________ and affected their overall performance.",
        chinese_question: "团队的沟通失误是 __________ 的，影响了他们的整体表现。",
        answers: [
            { option: "A", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
            { option: "B", answer: "straightforward", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "D", answer: "seamless", chinese_answer: "无缝的", chinese_romanization: "wúfèng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'problematic' means constituting or presenting a problem or difficulty." +
            "<br><br>" +
            "(A) 'beneficial' means resulting in good; favorable or advantageous." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'seamless' means smooth and continuous, with no apparent gaps or spaces between one part and the next.",
        chinese_explanation: "(C) '有问题的' 意味着构成或呈现问题或困难的。" +
            "<br><br>" +
            "(A) '有益的' 意味着带来好结果的；有利的或有优势的。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成的；没有难度的。" +
            "<br><br>" +
            "(D) '无缝的' 意味着光滑和连续的，部分之间没有明显的空隙或空间的。"
    },
    {
        id: 6,
        question: "Her __________ reputation in the art world was built on decades of groundbreaking work and innovative exhibitions.",
        chinese_question: "她在艺术界的 __________ 声誉建立在几十年的开创性工作和创新展览的基础上。",
        answers: [
            { option: "A", answer: "illustrious", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
            { option: "B", answer: "insignificant", chinese_answer: "无足轻重的", chinese_romanization: "wúzúqīngzhòng de" },
            { option: "C", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'illustrious' means well known, respected, and admired for past achievements." + 
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(A) '杰出的' 意味着因过去的成就而著名、受人尊敬和钦佩的。" + 
            "<br><br>" +
            "(B) '无足轻重的' 意味着太小或不重要以至于不值得考虑的。" +
            "<br><br>" +
            "(C) '谦逊的' 意味着对自己的重要性有或表现出谦虚或低估的态度。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特殊或独特特征的；正常的。"
    },
    {
        id: 7,
        question: "The small village led a __________ life, far from the hustle and bustle of the city.",
        chinese_question: "这个小村庄过着 __________ 的生活，远离城市的喧嚣。",
        answers: [
                { option: "A", answer: "extravagant", chinese_answer: "奢侈", chinese_romanization: "shēchǐ" },
                { option: "B", answer: "luxurious", chinese_answer: "豪华", chinese_romanization: "háohuá" },
                { option: "C", answer: "lavish", chinese_answer: "奢华", chinese_romanization: "shēhuá" },
                { option: "D", answer: "modest", chinese_answer: "简朴", chinese_romanization: "jiǎnpǔ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'modest' means relatively moderate, limited, or small." + 
            "<br><br>" + 
            "(A) 'extravagant' means lacking restraint in spending money or using resources." + 
            "<br><br>" + 
            "(B) 'luxurious' means extremely comfortable, elegant, or enjoyable, especially in a way that involves great expense." + 
            "<br><br>" + 
            "(C) 'lavish' means sumptuously rich, elaborate, or luxurious.",
        chinese_explanation: "(D) '简朴' 意味着相对适度、有限或小的。" +
            "<br><br>" +
            "(A) '奢侈' 意味着在花钱或使用资源方面缺乏克制。" +
            "<br><br>" +
            "(B) '豪华' 意味着极为舒适、优雅或愉快，尤其是以涉及巨大费用的方式。" +
            "<br><br>" +
            "(C) '奢华' 意味着极其富有、复杂或豪华的."
    },
    {
        id: 8,
        question: "His __________ behavior in business, always putting his clients' needs first, made him a respected figure in the industry.",
        chinese_question: "他在商业中的 __________ 行为，总是将客户的需求放在首位，使他成为行业中受人尊敬的人物。",
        answers: [
            { option: "A", answer: "chivalrous", chinese_answer: "彬彬有礼的", chinese_romanization: "bīnbīn yǒu lǐ de" },
            { option: "B", answer: "ruthless", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
            { option: "C", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" },
            { option: "D", answer: "unscrupulous", chinese_answer: "不择手段的", chinese_romanization: "bùzéshǒuduàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'chivalrous' means courteous and gallant, especially towards women." +
            "<br><br>" +
            "(B) 'ruthless' means having or showing no pity or compassion for others." +
            "<br><br>" +
            "(C) 'greedy' means having an intense and selfish desire for something, especially wealth or power." +
            "<br><br>" +
            "(D) 'unscrupulous' means having or showing no moral principles; not honest or fair.",
        chinese_explanation: "(A) '彬彬有礼的' 意味着礼貌和勇敢，特别是对女性。" +
            "<br><br>" +
            "(B) '无情的' 意味着对他人没有怜悯或同情心的。" +
            "<br><br>" +
            "(C) '贪婪的' 意味着对某事特别是财富或权力有强烈而自私的渴望的。" +
            "<br><br>" +
            "(D) '不择手段的' 意味着没有或表现出没有道德原则；不诚实或不公平的。"
    },
    {
        id: 9,
        question: "Her __________ response to the invitation showed that she wasn't really interested in attending the event.",
        chinese_question: "她对邀请的 __________ 回应表明她并不是真的有兴趣参加活动。",
        answers: [
            { option: "A", answer: "perfunctory", chinese_answer: "敷衍", chinese_romanization: "fūyǎn" },
            { option: "B", answer: "enthusiastic", chinese_answer: "热情", chinese_romanization: "rèqíng" },
            { option: "C", answer: "thoughtful", chinese_answer: "体贴", chinese_romanization: "tǐtiē" },
            { option: "D", answer: "elaborate", chinese_answer: "详细", chinese_romanization: "xiángxì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'perfunctory' means carried out with a minimum of effort or reflection." +
            "<br><br>" +
            "(B) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(C) 'thoughtful' means showing consideration for the needs of other people." +
            "<br><br>" +
            "(D) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning.",
        chinese_explanation: "(A) '敷衍' 意味着以最小的努力或反思进行的。" +
            "<br><br>" +
            "(B) '热情' 意味着表现出强烈的和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(C) '体贴' 意味着为他人的需求着想。" +
            "<br><br>" +
            "(D) '详细' 意味着涉及许多精心安排的部分或细节；设计和计划详细复杂。"
    },
    {
        id: 10,
    question: "The __________ dog growled at anyone who came near its owner.",
    chinese_question: "那只__________的狗对任何接近它主人的人都发出低吼。",
    answers: [
        { option: "A", answer: "friendly", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
        { option: "B", answer: "truculent", chinese_answer: "好斗的", chinese_romanization: "hàodòu de" },
        { option: "C", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
        { option: "D", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'truculent' means eager or quick to argue or fight; aggressively defiant." +
        "<br><br>" +
        "(A) 'friendly' means kind and pleasant." +
        "<br><br>" +
        "(C) 'timid' means showing a lack of courage or confidence; easily frightened." +
        "<br><br>" +
        "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
    chinese_explanation: "(B) '好斗的'一词意味着急于或迅速争论或战斗；具有攻击性反抗的。" +
        "<br><br>" +
        "(A) '友好的' 意味着善良和愉快的。" +
        "<br><br>" +
        "(C) '胆小的' 意味着表现出缺乏勇气或信心；容易受惊的。" +
        "<br><br>" +
        "(D) '温柔的' 意味着具有或表现出温和、善良或温柔的性格或特征。"
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
