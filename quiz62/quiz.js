// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Taking into account his elaborate disguise and forged documents, the authorities finally exposed his __________ and arrested him for fraud.",
        chinese_question: "考虑到他的精心伪装和伪造文件，当局最终揭露了他的 __________ 并以欺诈罪逮捕了他。",
        answers: [
            { option: "A", answer: "benevolence", chinese_answer: "仁慈", chinese_romanization: "réncí" },
            { option: "B", answer: "veracity", chinese_answer: "真实", chinese_romanization: "zhēnshí" },
            { option: "C", answer: "altruism", chinese_answer: "利他主义", chinese_romanization: "lìtā zhǔyì" },
            { option: "D", answer: "imposture", chinese_answer: "欺诈", chinese_romanization: "qīzhà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'imposture' means an instance of pretending to be someone else in order to deceive others." +
            "<br><br>" +
            "(A) 'benevolence' means the quality of being well-meaning; kindness." +
            "<br><br>" +
            "(B) 'veracity' means conformity to facts; accuracy." +
            "<br><br>" +
            "(C) 'altruism' means the belief in or practice of disinterested and selfless concern for the well-being of others.",
        chinese_explanation: "(D) '欺诈' 意味着假装成他人以欺骗他人的行为。" +
            "<br><br>" +
            "(A) '仁慈' 意味着善意的品质；善良。" +
            "<br><br>" +
            "(B) '真实' 意味着符合事实；准确性。" +
            "<br><br>" +
            "(C) '利他主义' 意味着关心他人福祉的无私行为或信念。"
    },
    {
        id: 2,
        question: "Her __________ in entering the abandoned building at night was a mix of bravery and recklessness.",
        chinese_question: "她在夜晚进入废弃建筑物时表现出的 __________ 是勇敢与鲁莽的混合。",
        answers: [
                { option: "A", answer: "temerity", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
                { option: "B", answer: "fear", chinese_answer: "恐惧", chinese_romanization: "kǒngjù" },
                { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                { option: "D", answer: "cowardice", chinese_answer: "胆小", chinese_romanization: "dǎnxiǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'temerity' means excessive confidence or boldness; audacity." +
                "<br><br>" +
                "(B) 'fear' means an unpleasant emotion caused by the belief that someone or something is dangerous." +
                "<br><br>" +
                "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
                "<br><br>" +
                "(D) 'cowardice' means lack of bravery.",
        chinese_explanation: "(A) '鲁莽' 意味着过度的自信或大胆；胆大妄为。" +
                "<br><br>" +
                "(B) '恐惧' 意味着因相信某人或某事危险而引起的不愉快情绪。" +
                "<br><br>" +
                "(C) '犹豫' 意味着在说或做某事之前的暂停或犹豫。" +
                "<br><br>" +
                "(D) '胆小' 意味着缺乏勇气。"
    },
    {
        id: 3,
        question: "In the political __________, one must be prepared for intense debates and discussions.",
        chinese_question: "在政治 __________ 中，人们必须为激烈的辩论和讨论做好准备。",
        answers: [
            { option: "A", answer: "field", chinese_answer: "领域", chinese_romanization: "lǐngyù" },
            { option: "B", answer: "arena", chinese_answer: "竞技场", chinese_romanization: "jìngjì chǎng" },
            { option: "C", answer: "stage", chinese_answer: "舞台", chinese_romanization: "wǔtái" },
            { option: "D", answer: "room", chinese_answer: "房间", chinese_romanization: "fángjiān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'arena' means a place or scene of activity, debate, or conflict." +
                "<br><br>" +
                "(A) 'field' means an area of open land, especially one planted with crops or pasture." +
                "<br><br>" +
                "(C) 'stage' means a raised floor or platform, typically in a theater, on which actors, entertainers, or speakers perform." +
                "<br><br>" +
                "(D) 'room' means a part or division of a building enclosed by walls, floor, and ceiling.",
        chinese_explanation: "(B) '竞技场' 意味着活动、辩论或冲突的场所或场景。" +
                "<br><br>" +
                "(A) '领域' 意味着一块开放的土地，尤其是种植农作物或牧草的土地。" +
                "<br><br>" +
                "(C) '舞台' 意味着通常在剧院中的一个抬高的地板或平台，演员、娱乐者或演讲者在其上表演。" +
                "<br><br>" +
                "(D) '房间' 意味着建筑物的一部分或分区，由墙壁、地板和天花板围起来。"
    },
    {
        id: 4,
        question: "The diplomatic __________ between the two countries escalated into a full-blown crisis.",
        chinese_question: "两国之间的外交 __________ 升级为一场全面危机。",
        answers: [
                { option: "A", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" },
                { option: "B", answer: "imbroglio", chinese_answer: "纠纷", chinese_romanization: "jiūfēn" },
                { option: "C", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
                { option: "D", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'imbroglio' means an extremely confused, complicated, or embarrassing situation." +
                "<br><br>" +
                "(A) 'peace' means freedom from disturbance; tranquility." +
                "<br><br>" +
                "(C) 'agreement' means harmony or accordance in opinion or feeling." +
                "<br><br>" +
                "(D) 'alliance' means a union or association formed for mutual benefit, especially between countries or organizations.",
        chinese_explanation: "(B) '纠纷' 意味着极度混乱、复杂或尴尬的情况。" +
                "<br><br>" +
                "(A) '和平' 意味着没有干扰的自由；宁静。" +
                "<br><br>" +
                "(C) '协议' 意味着意见或感觉上的一致或协调。" +
                "<br><br>" +
                "(D) '联盟' 意味着为互利而形成的联合或协会，尤其是国家或组织之间的。"
    },
    {
        id: 5,
        question: "His __________ for adventure led him to travel to some of the most remote places in the world.",
        chinese_question: "他对冒险的 __________ 使他前往世界上一些最偏远的地方旅行。",
        answers: [
                { option: "A", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
                { option: "B", answer: "penchant", chinese_answer: "嗜好", chinese_romanization: "shìhào" },
                { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
                { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'penchant' means a strong or habitual liking for something or tendency to do something." +
                "<br><br>" +
                "(A) 'aversion' means a strong dislike or disinclination." +
                "<br><br>" +
                "(C) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(D) 'hesitation' means the action of pausing before saying or doing something.",
        chinese_explanation: "(B) '嗜好'一词意味着对某事的强烈或习惯性喜好或倾向于做某事。" +
                "<br><br>" +
                "(A) '厌恶' 意味着强烈的不喜欢或不情愿。" +
                "<br><br>" +
                "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(D) '犹豫' 意味着在说或做某事之前的暂停动作。"
    },
    {
        id: 6,
        question: "The legal battle over the inheritance quickly became a __________, dragging on for years with no resolution in sight.",
        chinese_question: "关于遗产的法律斗争迅速变成了一个 __________，拖了多年没有解决的迹象。",
        answers: [
                { option: "A", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
                { option: "B", answer: "quagmire", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
                { option: "C", answer: "breakthrough", chinese_answer: "突破", chinese_romanization: "túpò" },
                { option: "D", answer: "settlement", chinese_answer: "和解", chinese_romanization: "héjiě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quagmire' means an awkward, complex, or hazardous situation." +
                "<br><br>" +
                "(A) 'triumph' means a great victory or achievement." +
                "<br><br>" +
                "(C) 'breakthrough' means a sudden, dramatic, and important discovery or development." +
                "<br><br>" +
                "(D) 'settlement' means an official agreement intended to resolve a dispute or conflict.",
        chinese_explanation: "(B) '困境'一词意味着一种尴尬、复杂或危险的情况。" +
                "<br><br>" +
                "(A) '胜利' 意味着伟大的胜利或成就。" +
                "<br><br>" +
                "(C) '突破' 意味着突然、戏剧性和重要的发现或发展。" +
                "<br><br>" +
                "(D) '和解' 意味着旨在解决争端或冲突的正式协议。"

    },
    {
        id: 7,
        question: "Taking into account his public disgrace and the media coverage, the scandal brought great __________ to the once-respected politician.",
        chinese_question: "考虑到他的公众耻辱和媒体报道，这场丑闻给这位曾受尊敬的政客带来了巨大的 __________。",
        answers: [
            { option: "A", answer: "renown", chinese_answer: "名望", chinese_romanization: "míngwàng" },
            { option: "B", answer: "prestige", chinese_answer: "声望", chinese_romanization: "shēngwàng" },
            { option: "C", answer: "ignominy", chinese_answer: "耻辱", chinese_romanization: "chǐrǔ" },
            { option: "D", answer: "eminence", chinese_answer: "显赫", chinese_romanization: "xiǎnhè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ignominy' means public shame or disgrace." +
            "<br><br>" +
            "(A) 'renown' means the condition of being known or talked about by many people; fame." +
            "<br><br>" +
            "(B) 'prestige' means widespread respect and admiration felt for someone or something on the basis of a perception of their achievements or quality." +
            "<br><br>" +
            "(D) 'eminence' means fame or recognized superiority, especially within a particular sphere or profession.",
        chinese_explanation: "(C) '耻辱' 意味着公众的羞耻或耻辱。" +
            "<br><br>" +
            "(A) '名望' 意味着被许多人所知或谈论的状态；名声。" +
            "<br><br>" +
            "(B) '声望' 意味着基于对某人或某事成就或品质的看法而产生的广泛尊重和钦佩。" +
            "<br><br>" +
            "(D) '显赫' 意味着名声或公认的优越性，尤其是在某一特定领域或职业内。"
    },
    {
        id: 8,
        question: "The soldier's __________ to his country was demonstrated through his years of dedicated service and willingness to sacrifice his life.",
        chinese_question: "这名士兵对国家的 __________ 通过多年的奉献和愿意牺牲生命的精神得以体现。",
        answers: [
            { option: "A", answer: "infidelity", chinese_answer: "不忠", chinese_romanization: "bùzhōng" },
            { option: "B", answer: "subterfuge", chinese_answer: "诡计", chinese_romanization: "guǐjì" },
            { option: "C", answer: "duplicity", chinese_answer: "口是心非", chinese_romanization: "kǒushì xīnfēi" },
            { option: "D", answer: "fealty", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fealty' means a feudal tenant's or vassal's sworn loyalty to a lord." +
            "<br><br>" +
            "(A) 'infidelity' means the action or state of being unfaithful to a spouse or other sexual partner." +
            "<br><br>" +
            "(B) 'subterfuge' means deceit used in order to achieve one's goal." +
            "<br><br>" +
            "(C) 'duplicity' means deceitfulness; double-dealing.",
        chinese_explanation: "(D) '忠诚' 意味着封建租户或附庸对领主的宣誓效忠。" +
            "<br><br>" +
            "(A) '不忠' 意味着对配偶或其他性伴侣的不忠行为或状态。" +
            "<br><br>" +
            "(B) '诡计' 意味着为了达到目的而使用的欺骗行为。" +
            "<br><br>" +
            "(C) '口是心非' 意味着欺骗；两面派。"
    },
    {
        id: 9,
        question: "With a sudden movement to the left, the soccer player used a __________ to trick his opponent and score the winning goal.",
        chinese_question: "突然向左移动，这名足球运动员使用了一个 __________ 来欺骗对手并打进了制胜球。",
        answers: [
            { option: "A", answer: "feint", chinese_answer: "佯攻", chinese_romanization: "yánggōng" },
            { option: "B", answer: "languor", chinese_answer: "疲倦", chinese_romanization: "píjuàn" },
            { option: "C", answer: "torpidity", chinese_answer: "迟钝", chinese_romanization: "chídùn" },
            { option: "D", answer: "inertia", chinese_answer: "惯性", chinese_romanization: "guànxìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'feint' means a deceptive or pretended blow, thrust, or other movement, especially in sports or combat." +
            "<br><br>" +
            "(B) 'languor' means the state or feeling, often pleasant, of tiredness or inertia." +
            "<br><br>" +
            "(C) 'torpidity' means the state of being inactive or sluggish." +
            "<br><br>" +
            "(D) 'inertia' means a tendency to do nothing or to remain unchanged.",
        chinese_explanation: "(A) '佯攻' 意味着一种欺骗或假装的打击、突刺或其他动作，特别是在体育运动或战斗中。" +
            "<br><br>" +
            "(B) '疲倦' 意味着疲倦或惯性的状态或感觉，通常是愉快的。" +
            "<br><br>" +
            "(C) '迟钝' 意味着不活跃或迟钝的状态。" +
            "<br><br>" +
            "(D) '惯性' 意味着不采取行动或保持不变的倾向。"
    },
    {
        id: 10,
        question: "Taking into account the loud arguments and physical altercations, the bar was shut down after the __________ among the patrons.",
        chinese_question: "考虑到激烈的争吵和肢体冲突，酒吧在顾客之间的 __________ 后被关闭。",
        answers: [
            { option: "A", answer: "concord", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "B", answer: "placidity", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "C", answer: "harmony", chinese_answer: "和睦", chinese_romanization: "hémù" },
            { option: "D", answer: "fracas", chinese_answer: "骚乱", chinese_romanization: "sāoluàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fracas' means a noisy disturbance or quarrel." +
            "<br><br>" +
            "(A) 'concord' means agreement or harmony between people or groups." +
            "<br><br>" +
            "(B) 'placidity' means a state of being calm and peaceful." +
            "<br><br>" +
            "(C) 'harmony' means the state of being in agreement or concord.",
        chinese_explanation: "(D) '骚乱' 意味着喧闹的骚动或争吵。" +
            "<br><br>" +
            "(A) '和谐' 意味着人或群体之间的同意或和谐。" +
            "<br><br>" +
            "(B) '平静' 意味着一种平静和平和的状态。" +
            "<br><br>" +
            "(C) '和睦' 意味着处于一致或和谐的状态。"
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
