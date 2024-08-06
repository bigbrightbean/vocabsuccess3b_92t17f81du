// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ personality made her popular among her peers, as she could always lift their spirits with her enthusiasm.",
        chinese_question: "她 __________ 的个性使她在同龄人中很受欢迎，因为她总是能够以她的热情鼓舞他们的士气。",
        answers: [
            { option: "A", answer: "buoyant", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "B", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "apathetic", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'buoyant' means cheerful and optimistic." + 
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(A) '乐观的' 意味着充满欢愉和乐观的。" + 
            "<br><br>" +
            "(B) '忧郁的' 意味着黑暗或光线不足，特别是显得压抑或可怕的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着表现出或感到没有兴趣、热情或关心的。"
    },
    {
        id: 2,
        question: "In the midst of the dark times, she found a __________ of optimism that kept her going.",
        chinese_question: "在黑暗时期，她找到了一丝 __________ 的乐观，让她坚持下去。",
        answers: [
            { option: "A", answer: "darkness", chinese_answer: "黑暗", chinese_romanization: "hēi'àn" },
            { option: "B", answer: "glimmer", chinese_answer: "微光", chinese_romanization: "wéiguāng" },
            { option: "C", answer: "gloom", chinese_answer: "阴暗", chinese_romanization: "yīn'àn" },
            { option: "D", answer: "despair", chinese_answer: "绝望", chinese_romanization: "juéwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glimmer' means a faint or wavering light, often used figuratively to indicate a slight or initial indication of something." +
            "<br><br>" +
            "(A) 'darkness' means the partial or total absence of light." +
            "<br><br>" +
            "(C) 'gloom' means partial or total darkness; a state of depression or despondency." +
            "<br><br>" +
            "(D) 'despair' means the complete loss or absence of hope.",
        chinese_explanation: "(B) '微光' 意味着微弱或摇曳的光，通常用于比喻表示某事物的轻微或初步迹象。" +
            "<br><br>" +
            "(A) '黑暗' 意味着光的部分或完全缺乏。" +
            "<br><br>" +
            "(C) '阴暗' 意味着部分或完全的黑暗；沮丧或失望的状态。" +
            "<br><br>" +
            "(D) '绝望' 意味着完全失去或缺乏希望。"
    },
    {
        id: 3,
        question: "Despite the __________ resources available, they managed to complete the project on time.",
        chinese_question: "尽管可用资源 __________，他们还是按时完成了项目。",
        answers: [
                { option: "A", answer: "abundant", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
                { option: "B", answer: "extensive", chinese_answer: "广泛的", chinese_romanization: "guǎngfàn de" },
                { option: "C", answer: "paltry", chinese_answer: "微薄的", chinese_romanization: "wēibó de" },
                { option: "D", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paltry' means small or meager." + 
            "<br><br>" + 
            "(A) 'abundant' means existing or available in large quantities; plentiful." + 
            "<br><br>" + 
            "(B) 'extensive' means covering or affecting a large area." + 
            "<br><br>" + 
            "(D) 'lavish' means sumptuously rich, elaborate, or luxurious.",
        chinese_explanation: "(C) '微薄的' 意味着小的或微不足道的。" +
            "<br><br>" +
            "(A) '丰富的' 意味着存在或可用的大量；丰富的。" +
            "<br><br>" +
            "(B) '广泛的' 意味着覆盖或影响大面积的。" +
            "<br><br>" +
            "(D) '奢华的' 意味着极其富有、复杂或豪华的."
    },
    {
        id: 4,
        question: "The contract had an __________ clause that was not immediately obvious to the untrained eye.",
        chinese_question: "合同中有一条 __________ 的条款，对未经训练的眼睛来说并不明显。",
        answers: [
            { option: "A", answer: "apparent", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "B", answer: "explicit", chinese_answer: "明确", chinese_romanization: "míngquè" },
            { option: "C", answer: "implicit", chinese_answer: "含蓄", chinese_romanization: "hánxù" },
            { option: "D", answer: "straightforward", chinese_answer: "简单明了", chinese_romanization: "jiǎndān míngliǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'implicit' means implied though not plainly expressed." + 
            "<br><br>" +
            "(A) 'apparent' means clearly visible or understood; obvious." +
            "<br><br>" +
            "(B) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '含蓄' 意味着暗示的，但没有明确表达。" + 
            "<br><br>" +
            "(A) '明显' 意味着清晰可见或理解；显而易见的。" +
            "<br><br>" +
            "(B) '明确' 意味着清晰和详细地陈述，没有留下困惑或怀疑的余地。" +
            "<br><br>" +
            "(D) '简单明了' 意味着不复杂且容易做或理解。"
    },
    {
        id: 5,
        question: "Her __________ nature made her an easy target for scams and tricks.",
        chinese_question: "她__________的性格使她很容易成为诈骗和骗局的目标。",
        answers: [
            { option: "A", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "cynical", chinese_answer: "愤世嫉俗的", chinese_romanization: "fènshì jísú de" },
            { option: "C", answer: "suspicious", chinese_answer: "多疑的", chinese_romanization: "duōyí de" },
            { option: "D", answer: "gullible", chinese_answer: "轻信的", chinese_romanization: "qīngxìn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gullible' means easily persuaded to believe something; credulous. Figuratively, it can mean being naive and easily deceived." + 
            "<br><br>" +
            "(A) 'skeptical' means not easily convinced; having doubts or reservations." +
            "<br><br>" +
            "(B) 'cynical' means believing that people are motivated by self-interest; distrustful of human sincerity or integrity." +
            "<br><br>" +
            "(C) 'suspicious' means having or showing a cautious distrust of someone or something.",
        chinese_explanation: "(D) '轻信的'一词意味着容易被说服相信某事；轻信的。比喻地，它可以表示天真和容易上当。" + 
            "<br><br>" +
            "(A) '怀疑的' 意味着不容易相信的；有疑虑或保留意见的。" +
            "<br><br>" +
            "(B) '愤世嫉俗的' 意味着认为人们是出于私利动机的；不相信人类诚意或正直的。" +
            "<br><br>" +
            "(C) '多疑的' 意味着对某人或某事有或表现出谨慎的不信任。"
    },
    {
        id: 6,
        question: "The company's __________ financial performance impressed investors, ensuring continued support.",
        chinese_question: "公司的 __________ 财务表现给投资者留下了深刻印象，确保了持续的支持。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "poor", chinese_answer: "糟糕的", chinese_romanization: "zāogāo de" },
            { option: "C", answer: "robust", chinese_answer: "强劲的", chinese_romanization: "qiángjìn de" },
            { option: "D", answer: "frail", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'robust' means strong and healthy; vigorous, often used figuratively to describe something strong and effective, such as financial performance." +
            "<br><br>" +
            "(A) 'weak' means lacking strength." +
            "<br><br>" +
            "(B) 'poor' means lacking sufficient money to live at a standard considered comfortable or normal in a society." +
            "<br><br>" +
            "(D) 'frail' means weak and delicate.",
        chinese_explanation: "(C) '强劲的' 意味着强壮和健康的；有活力的，通常用作比喻来描述某物的强大和有效，例如财务表现。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏力量的。" +
            "<br><br>" +
            "(B) '糟糕的' 意味着缺乏足够的钱以维持一个社会中被认为舒适或正常的生活水平。" +
            "<br><br>" +
            "(D) '脆弱的' 意味着虚弱和脆弱的."
    },
    {
        id: 7,
        question: "The novel's __________ plot kept readers engaged, as it wove together multiple storylines and unexpected twists.",
        chinese_question: "小说的 __________ 情节让读者着迷，因为它编织了多个故事情节和意想不到的转折。",
        answers: [
            { option: "A", answer: "intricate", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "B", answer: "straightforward", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "D", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'intricate' means very complicated or detailed." + 
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to understand." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest.",
        chinese_explanation: "(A) '复杂的' 意味着非常复杂或详细的。" + 
            "<br><br>" +
            "(B) '简单的' 意味着没有复杂的；容易理解的。" +
            "<br><br>" +
            "(C) '可预测的' 意味着能够被预测的。" +
            "<br><br>" +
            "(D) '单调的' 意味着乏味的、冗长的和重复的；缺乏多样性和兴趣的。"
    },
    {
        id: 8,
        question: "The company faced an __________ crisis that required immediate action from the management.",
        chinese_question: "公司面临 __________ 的危机，需要管理层立即采取行动。",
        answers: [
            { option: "A", answer: "avoidable", chinese_answer: "可避免", chinese_romanization: "kě bìmiǎn" },
            { option: "B", answer: "distant", chinese_answer: "遥远", chinese_romanization: "yáoyuǎn" },
            { option: "C", answer: "imminent", chinese_answer: "即将来临", chinese_romanization: "jíjiāng láilín" },
            { option: "D", answer: "preventable", chinese_answer: "可预防", chinese_romanization: "kě yùfáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'imminent' means about to happen." + 
            "<br><br>" +
            "(A) 'avoidable' means able to be avoided or prevented." +
            "<br><br>" +
            "(B) 'distant' means far away in space or time." +
            "<br><br>" +
            "(D) 'preventable' means able to be prevented or avoided.",
        chinese_explanation: "(C) '即将来临' 意味着即将发生。" + 
            "<br><br>" +
            "(A) '可避免' 意味着可以避免或防止的。" +
            "<br><br>" +
            "(B) '遥远' 意味着在空间或时间上很远。" +
            "<br><br>" +
            "(D) '可预防' 意味着可以预防或避免的。"
    },
    {
        id: 9,
        question: "Her __________ reputation in the community, such as her unblemished record of service and unwavering ethical standards, made her a trusted and respected figure.",
        chinese_question: "她在社区中的 __________ 声誉，比如她无瑕的服务记录和坚定不移的道德标准，使她成为一个值得信任和尊敬的人物。",
        answers: [
            { option: "A", answer: "tarnished", chinese_answer: "玷污的", chinese_romanization: "diànwū de" },
            { option: "B", answer: "pristine", chinese_answer: "清白的", chinese_romanization: "qīngbái de" },
            { option: "C", answer: "flawed", chinese_answer: "有缺陷的", chinese_romanization: "yǒu quēxiàn de" },
            { option: "D", answer: "sullied", chinese_answer: "污损的", chinese_romanization: "wūsǔn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pristine' means clean and fresh as if new; spotless." +
            "<br><br>" +
            "(A) 'tarnished' means having lost its luster, especially as a result of exposure to air or moisture." +
            "<br><br>" +
            "(C) 'flawed' means having imperfections." +
            "<br><br>" +
            "(D) 'sullied' means damaged or tainted.",
        chinese_explanation: "(B) '清白的' 意味着像新的一样干净和新鲜；无瑕疵的。" +
            "<br><br>" +
            "(A) '玷污的' 意味着失去光泽，特别是由于暴露在空气或潮湿中。" +
            "<br><br>" +
            "(C) '有缺陷的' 意味着有缺陷的。" +
            "<br><br>" +
            "(D) '污损的' 意味着损坏或玷污的."
    },
    {
        id: 10,
        question: "His __________ speech, filled with long pauses and heavy words, failed to engage the audience.",
        chinese_question: "他的 __________ 演讲，充满了长时间的停顿和沉重的词语，未能吸引观众。",
        answers: [
            { option: "A", answer: "lively", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "C", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" },
            { option: "D", answer: "ponderous", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ponderous' means dull, laborious, or excessively solemn." +
            "<br><br>" +
            "(A) 'lively' means full of life and energy." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(C) 'dynamic' means characterized by constant change, activity, or progress.",
        chinese_explanation: "(D) '沉闷的' 意味着沉闷、费力或过于庄重的。" +
            "<br><br>" +
            "(A) '生动的' 意味着充满生命和活力的。" +
            "<br><br>" +
            "(B) '精力充沛的' 意味着显示或涉及大量活动或活力的。" +
            "<br><br>" +
            "(C) '动态的' 意味着以不断变化、活动或进展为特征的."
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
