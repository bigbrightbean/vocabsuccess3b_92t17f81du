// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She couldn’t let go of the __________, and it affected her relationships.",
        chinese_question: "她无法放下 __________，这影响了她的人际关系。",
        answers: [
            { option: "A", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
            { option: "B", answer: "present", chinese_answer: "现在", chinese_romanization: "xiànzài" },
            { option: "C", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
            { option: "D", answer: "imminent", chinese_answer: "即将发生", chinese_romanization: "jíjiāng fāshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'past' means having happened or existed before now." +
                "<br><br>" +
                "(B) 'present' means the period of time now occurring." +
                "<br><br>" +
                "(C) 'future' means the time or a period of time following the moment of speaking or writing." +
                "<br><br>" +
                "(D) 'imminent' means about to happen.",
        chinese_explanation: "(A) '过去' 意味着在现在之前发生或存在。" +
                "<br><br>" +
                "(B) '现在' 意味着现在发生的时间段。" +
                "<br><br>" +
                "(C) '未来' 意味着在说话或写作时之后的时间或一段时间。" +
                "<br><br>" +
                "(D) '即将发生' 意味着即将发生。"
    },
    {
        id: 2,
        question: "The peaceful protest quickly turned into a chaotic __________ when opposing groups clashed in the streets.",
        chinese_question: "和平抗议很快变成了混乱的 __________，反对派在街头发生了冲突。",
        answers: [
                { option: "A", answer: "meeting", chinese_answer: "会议", chinese_romanization: "huìyì" },
                { option: "B", answer: "discussion", chinese_answer: "讨论", chinese_romanization: "tǎolùn" },
                { option: "C", answer: "melee", chinese_answer: "混战", chinese_romanization: "hùnzhàn" },
                { option: "D", answer: "debate", chinese_answer: "辩论", chinese_romanization: "biànlùn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'melee' means a confused fight, skirmish, or scuffle." +
                "<br><br>" +
                "(A) 'meeting' means an assembly of people, especially the members of a society or committee, for discussion or entertainment." +
                "<br><br>" +
                "(B) 'discussion' means the action or process of talking about something in order to reach a decision or to exchange ideas." +
                "<br><br>" +
                "(D) 'debate' means a formal discussion on a particular topic in a public meeting or legislative assembly, in which opposing arguments are put forward.",
        chinese_explanation: "(C) '混战'一词意味着混乱的打斗、小冲突或争吵。" +
                "<br><br>" +
                "(A) '会议' 意味着人们的集会，特别是社会或委员会成员的集会，用于讨论或娱乐。" +
                "<br><br>" +
                "(B) '讨论' 意味着为了做出决定或交换想法而进行的谈话过程。" +
                "<br><br>" +
                "(D) '辩论' 意味着在公开会议或立法机构中就特定主题进行的正式讨论，其中提出了反对意见。"
    },
    {
        id: 3,
question: "The project manager was the __________ of the entire operation, ensuring everything ran smoothly and on schedule.",
chinese_question: "项目经理是整个运作的 __________，确保一切顺利按时进行。",
answers: [
    { option: "A", answer: "linchpin", chinese_answer: "关键人物", chinese_romanization: "guānjiàn rénwù" },
    { option: "B", answer: "outsider", chinese_answer: "局外人", chinese_romanization: "júwàirén" },
    { option: "C", answer: "observer", chinese_answer: "观察者", chinese_romanization: "guānchá zhě" },
    { option: "D", answer: "detractor", chinese_answer: "贬低者", chinese_romanization: "biǎndī zhě" }
],
correctAnswer: "A",
explanation: "(A) 'linchpin' means a person or thing vital to an enterprise or organization." +
    "<br><br>" +
    "(B) 'outsider' means a person who does not belong to a particular group." +
    "<br><br>" +
    "(C) 'observer' means a person who watches or notices something." +
    "<br><br>" +
    "(D) 'detractor' means a person who disparages someone or something.",
chinese_explanation: "(A) '关键人物' 意味着对企业或组织至关重要的人或事物。" +
    "<br><br>" +
    "(B) '局外人' 意味着不属于特定群体的人。" +
    "<br><br>" +
    "(C) '观察者' 意味着观察或注意某事的人。" +
    "<br><br>" +
    "(D) '贬低者' 意味着贬低某人或某事的人。"
    },
    {
        id: 4,
        question: "The __________ of the morning sun filled the room with a warm, golden light.",
        chinese_question: "晨阳的 __________ 使房间充满了温暖的金色光芒。",
        answers: [
                { option: "A", answer: "gloom", chinese_answer: "阴暗", chinese_romanization: "yīn'àn" },
                { option: "B", answer: "effulgence", chinese_answer: "光辉", chinese_romanization: "guānghuī" },
                { option: "C", answer: "shadow", chinese_answer: "阴影", chinese_romanization: "yīnyǐng" },
                { option: "D", answer: "obscurity", chinese_answer: "模糊", chinese_romanization: "móhú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'effulgence' means brilliant radiance or shining brightness." +
                "<br><br>" +
                "(A) 'gloom' means partial or total darkness." +
                "<br><br>" +
                "(C) 'shadow' means a dark area or shape produced by a body coming between rays of light and a surface." +
                "<br><br>" +
                "(D) 'obscurity' means the state of being unknown, inconspicuous, or unimportant.",
        chinese_explanation: "(B) '光辉'一词意味着辉煌的光辉或明亮的光芒。" +
                "<br><br>" +
                "(A) '阴暗' 意味着部分或完全的黑暗。" +
                "<br><br>" +
                "(C) '阴影' 意味着物体在光线和表面之间产生的暗区或形状。" +
                "<br><br>" +
                "(D) '模糊' 意味着不知名、不起眼或不重要的状态。"
    },
    {
        id: 5,
    question: "During the heated debate, each __________ refused to consider the other's viewpoint, resulting in a stalemate.",
    chinese_question: "在激烈的辩论中，每个 __________ 都拒绝考虑对方的观点，导致僵局。",
    answers: [
            { option: "A", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" },
            { option: "B", answer: "moderator", chinese_answer: "调解人", chinese_romanization: "tiáojiě rén" },
            { option: "C", answer: "neutral", chinese_answer: "中立者", chinese_romanization: "zhōnglì zhě" },
            { option: "D", answer: "partisan", chinese_answer: "偏袒者", chinese_romanization: "piāntǎn zhě" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'partisan' means strongly supporting a particular political party, plan, or leader, usually without considering the other choices carefully." +
            "<br><br>" +
            "(A) 'spectator' means a person who watches at a show, game, or other event." +
            "<br><br>" +
            "(B) 'moderator' means an arbitrator or mediator." +
            "<br><br>" +
            "(C) 'neutral' means not supporting or helping either side in a conflict or disagreement.",
    chinese_explanation: "(D) '偏袒者' 意味着强烈支持某个政党、计划或领导者，通常不仔细考虑其他选择。" +
            "<br><br>" +
            "(A) '观众' 意味着观看演出、比赛或其他事件的人。" +
            "<br><br>" +
            "(B) '调解人' 意味着仲裁者或调解人。" +
            "<br><br>" +
            "(C) '中立者' 意味着在冲突或分歧中不支持或帮助任何一方。"
    },
    {
        id: 6,
        question: "The city folks laughed at the __________ for his unfamiliarity with the subway system and big city life.",
        chinese_question: "城市人嘲笑这个 __________，因为他不熟悉地铁系统和大城市生活。",
        answers: [
            { option: "A", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "B", answer: "local", chinese_answer: "本地人", chinese_romanization: "běndì rén" },
            { option: "C", answer: "native", chinese_answer: "当地人", chinese_romanization: "dāngdì rén" },
            { option: "D", answer: "yokel", chinese_answer: "乡巴佬", chinese_romanization: "xiāngbālǎo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'yokel' means an uneducated and unsophisticated person from the countryside." +
            "<br><br>" +
            "(A) 'expert' means a person who has a comprehensive and authoritative knowledge of or skill in a particular area." +
            "<br><br>" +
            "(B) 'local' means a person who lives in a particular area, city, or town." +
            "<br><br>" +
            "(C) 'native' means a person born in a specified place or associated with a place by birth.",
        chinese_explanation: "(D) '乡巴佬' 意味着来自乡村的未受教育和不懂世故的人。" +
            "<br><br>" +
            "(A) '专家' 意味着在特定领域拥有全面和权威知识或技能的人。" +
            "<br><br>" +
            "(B) '本地人' 意味着住在特定地区、城市或城镇的人。" +
            "<br><br>" +
            "(C) '当地人' 意味着在指定地点出生或因出生与某地相关的人。"
    },
    {
        id: 7,
                question: "His spirits hit their __________ after the failure of his latest project.",
                chinese_question: "在最新项目失败后，他的情绪达到了 __________。",
                answers: [
                    { option: "A", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" },
                    { option: "B", answer: "zenith", chinese_answer: "顶点", chinese_romanization: "dǐngdiǎn" },
                    { option: "C", answer: "inception", chinese_answer: "开端", chinese_romanization: "kāiduān" },
                    { option: "D", answer: "improvement", chinese_answer: "改进", chinese_romanization: "gǎijìn" }
                ],
                correctAnswer: "A",
                explanation: "(A) 'nadir' means the lowest point in the fortunes of a person or organization." +
                    "<br><br>" +
                    "(B) 'zenith' means the highest point reached by a celestial or other object." +
                    "<br><br>" +
                    "(C) 'inception' means the establishment or starting point of an institution or activity." +
                    "<br><br>" +
                    "(D) 'improvement' means a thing that makes something better or is better than something else.",
                chinese_explanation: "(A) '最低点' 意味着一个人或组织财富的最低点。" +
                    "<br><br>" +
                    "(B) '顶点' 意味着天体或其他物体到达的最高点。" +
                    "<br><br>" +
                    "(C) '开端' 意味着某机构或活动的建立或起点。" +
                    "<br><br>" +
                    "(D) '改进' 意味着使某事物变得更好或比其他事物更好的事物。"
    },
    {
        id: 8,
        question: "He took __________ at the joke, believing it was aimed at him.",
        chinese_question: "他对这个笑话感到 __________，认为这是针对他的。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "umbrage", chinese_answer: "生气", chinese_romanization: "shēngqì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'umbrage' means offense or annoyance." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(D) '生气' 意味着冒犯或恼怒。" +
            "<br><br>" +
            "(A) '快乐' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(B) '舒适' 意味着身体的轻松和无痛或无拘束的状态。" +
            "<br><br>" +
            "(C) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 9,
        question: "The royal family's __________ was adorned with jewels and intricate embroidery, showcasing their wealth and status.",
        chinese_question: "皇室成员的 __________ 装饰有珠宝和复杂的刺绣，展示了他们的财富和地位。",
        answers: [
                { option: "A", answer: "raiment", chinese_answer: "衣服", chinese_romanization: "yīfu" },
                { option: "B", answer: "furniture", chinese_answer: "家具", chinese_romanization: "jiājù" },
                { option: "C", answer: "jewelry", chinese_answer: "珠宝", chinese_romanization: "zhūbǎo" },
                { option: "D", answer: "footwear", chinese_answer: "鞋子", chinese_romanization: "xiézi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'raiment' means clothing, especially fine or formal wear." +
                "<br><br>" +
                "(B) 'furniture' means large movable equipment used to make a house, office, or other space suitable for living or working." +
                "<br><br>" +
                "(C) 'jewelry' means personal ornaments, such as necklaces, rings, or bracelets, that are typically made from or contain jewels and precious metal." +
                "<br><br>" +
                "(D) 'footwear' means outer coverings for the feet, such as shoes, boots, and sandals.",
        chinese_explanation: "(A) '衣服' 意味着服装，特别是精美或正式的服装。" +
                "<br><br>" +
                "(B) '家具' 意味着用于使房屋、办公室或其他空间适合居住或工作的大型可移动设备。" +
                "<br><br>" +
                "(C) '珠宝' 意味着个人装饰品，如项链、戒指或手镯，通常由珠宝和贵金属制成。" +
                "<br><br>" +
                "(D) '鞋子' 意味着脚的外部覆盖物，如鞋子、靴子和凉鞋。"
    },
    {
        id: 10,
        question: "His __________ during the crisis provided a much-needed break from the tension, allowing the team to regroup and refocus.",
        chinese_question: "在危机期间，他的 __________ 提供了一个急需的缓解紧张的机会，让团队重新组建和集中注意力。",
        answers: [
                { option: "A", answer: "anxiety", chinese_answer: "焦虑", chinese_romanization: "jiāolǜ" },
                { option: "B", answer: "levity", chinese_answer: "轻松", chinese_romanization: "qīngsōng" },
                { option: "C", answer: "stress", chinese_answer: "压力", chinese_romanization: "yālì" },
                { option: "D", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'levity' means humor or frivolity, especially the treatment of a serious matter with humor or in a manner lacking due respect." +
                "<br><br>" +
                "(A) 'anxiety' means a feeling of worry, nervousness, or unease." +
                "<br><br>" +
                "(C) 'stress' means a state of mental or emotional strain or tension." +
                "<br><br>" +
                "(D) 'focus' means the center of interest or activity.",
        chinese_explanation: "(B) '轻松'一词意味着幽默或轻浮，特别是以幽默或不尊重的方式对待严肃问题。" +
                "<br><br>" +
                "(A) '焦虑' 意味着担心、紧张或不安的感觉。" +
                "<br><br>" +
                "(C) '压力' 意味着精神或情感上的紧张或压力状态。" +
                "<br><br>" +
                "(D) '专注' 意味着兴趣或活动的中心。"
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
