// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ gardener was eager to learn about planting and maintaining a healthy garden.",
        chinese_question: "这位 __________ 园丁渴望学习如何种植和维护健康的花园。",
        answers: [
            { option: "A", answer: "expert", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "B", answer: "master", chinese_answer: "大师", chinese_romanization: "dàshī" },
            { option: "C", answer: "teacher", chinese_answer: "教师", chinese_romanization: "jiàoshī" },
            { option: "D", answer: "neophyte", chinese_answer: "新手", chinese_romanization: "xīnshǒu" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'neophyte' means a person who is new to a subject, skill, or belief." +
            "<br><br>" +
            "(A) 'expert' means a person who has a comprehensive and authoritative knowledge of or skill in a particular area." +
            "<br><br>" +
            "(B) 'master' means a person who has control or dominance over something or someone." +
            "<br><br>" +
            "(C) 'teacher' means a person who teaches, especially in a school.",
        chinese_explanation: "(D) '新手' 意味着在某一学科、技能或信仰方面的新手。" +
            "<br><br>" +
            "(A) '专家' 意味着在特定领域拥有全面和权威知识或技能的人。" +
            "<br><br>" +
            "(B) '大师' 意味着控制或支配某物或某人的人。" +
            "<br><br>" +
            "(C) '教师' 意味着教授某事的人，尤其是在学校。"
    },
    {
        id: 2,
        question: "The company fell into __________ after it was revealed that they had been exploiting workers in poor conditions.",
        chinese_question: "在被揭露出剥削工人工作条件恶劣之后，这家公司陷入了 __________。",
        answers: [
                { option: "A", answer: "opprobrium", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
                { option: "B", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
                { option: "C", answer: "commendation", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
                { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'opprobrium' means harsh criticism or censure." +
                "<br><br>" +
                "(B) 'admiration' means respect and warm approval." +
                "<br><br>" +
                "(C) 'commendation' means praise." +
                "<br><br>" +
                "(D) 'support' means approval, encouragement, or comfort.",
        chinese_explanation: "(A) '谴责' 意味着严厉的批评或责难。" +
                "<br><br>" +
                "(B) '钦佩' 意味着尊敬和高度赞同。" +
                "<br><br>" +
                "(C) '表扬' 意味着赞美。" +
                "<br><br>" +
                "(D) '支持' 意味着赞同、鼓励或安慰。"
    },
    {
        id: 3,
        question: "The charity event’s overwhelming success gave the organization an __________ to continue its work with even greater dedication.",
        chinese_question: "慈善活动的压倒性成功为组织继续工作提供了更大奉献的 __________。",
        answers: [
                { option: "A", answer: "impediment", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
                { option: "B", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
                { option: "C", answer: "impetus", chinese_answer: "动力", chinese_romanization: "dònglì" },
                { option: "D", answer: "deterrent", chinese_answer: "威慑", chinese_romanization: "wēishè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impetus' means the force or energy with which a body moves, or something that makes a process or activity happen or happen more quickly." +
                "<br><br>" +
                "(A) 'impediment' means a hindrance or obstruction in doing something." +
                "<br><br>" +
                "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
                "<br><br>" +
                "(D) 'deterrent' means a thing that discourages or is intended to discourage someone from doing something.",
        chinese_explanation: "(C) '动力'一词意味着使身体移动的力量或能量，或使过程或活动发生或更快发生的东西。" +
                "<br><br>" +
                "(A) '阻碍' 意味着做某事的障碍或阻碍。" +
                "<br><br>" +
                "(B) '冷漠' 意味着缺乏兴趣、热情或关心。" +
                "<br><br>" +
                "(D) '威慑' 意味着阻止或旨在阻止某人做某事的东西。"
    },
    {
        id: 4,
        question: "The __________ in their responses to the crisis highlighted the differences in their leadership styles.",
        chinese_question: "他们对危机的反应中的 __________ 突显了他们领导风格的差异。",
        answers: [
                { option: "A", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
                { option: "B", answer: "disparity", chinese_answer: "差距", chinese_romanization: "chājù" },
                { option: "C", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
                { option: "D", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disparity' figuratively means a great difference in quality, quantity, or degree." +
                "<br><br>" +
                "(A) 'similarity' means the state of being similar." +
                "<br><br>" +
                "(C) 'unity' means the state of being united or joined as a whole." +
                "<br><br>" +
                "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(B) '差距' 在此语境下意指质量、数量或程度上的巨大差异。" +
                "<br><br>" +
                "(A) '相似' 意味着相似的状态。" +
                "<br><br>" +
                "(C) '团结' 意味着团结或联合的状态。" +
                "<br><br>" +
                "(D) '一致' 意味着在意见或感觉上的和谐或一致。"
    },
    {
        id: 5,
        question: "He treated the old traditions with __________, preserving them for future generations.",
        chinese_question: "他以 __________ 对待旧传统，为后代保存了它们。",
        answers: [
            { option: "A", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "B", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" },
            { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "díyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
                "<br><br>" +
                "(B) 'negligence' means failure to take proper care in doing something." +
                "<br><br>" +
                "(C) 'disregard' means to pay no attention to; ignore." +
                "<br><br>" +
                "(D) 'hostility' means hostile behavior; unfriendliness or opposition.",
        chinese_explanation: "(A) '尊重' 意味着对某人的能力、品质或成就的深深钦佩之情。" +
                "<br><br>" +
                "(B) '疏忽' 意味着未能妥善处理某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着不注意；忽略。" +
                "<br><br>" +
                "(D) '敌意' 意味着敌对行为；不友好或反对。"
    },
    {
        id: 6,
        question: "The athlete received __________ for his outstanding performance, setting a new record in the competition.",
        chinese_question: "这名运动员因其出色的表现获得了 __________，在比赛中创造了新纪录。",
        answers: [
                { option: "A", answer: "ridicule", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
                { option: "B", answer: "disapproval", chinese_answer: "不赞成", chinese_romanization: "bù zànchéng" },
                { option: "C", answer: "mockery", chinese_answer: "嘲弄", chinese_romanization: "cháonòng" },
                { option: "D", answer: "plaudits", chinese_answer: "赞誉", chinese_romanization: "zànyù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'plaudits' means praise or approval." +
                "<br><br>" +
                "(A) 'ridicule' means the subjection of someone or something to contemptuous and dismissive language or behavior." +
                "<br><br>" +
                "(B) 'disapproval' means possession or expression of an unfavorable opinion." +
                "<br><br>" +
                "(C) 'mockery' means teasing and contemptuous language or behavior directed at a particular person or thing.",
        chinese_explanation: "(D) '赞誉'一词意味着赞扬或认可。" +
                "<br><br>" +
                "(A) '嘲笑' 意味着轻蔑和拒绝的语言或行为使某人或某事受到轻视。" +
                "<br><br>" +
                "(B) '不赞成' 意味着持有或表达不利的意见。" +
                "<br><br>" +
                "(C) '嘲弄' 意味着针对特定人或事物的戏弄和轻蔑的语言或行为。"
    },
    {
        id: 7,
        question: "The ancient ruins were the last __________ of a once-great civilization.",
        chinese_question: "这些古老的废墟是曾经伟大文明最后的 __________。",
        answers: [
                { option: "A", answer: "vestige", chinese_answer: "遗迹", chinese_romanization: "yíjì" },
                { option: "B", answer: "monument", chinese_answer: "纪念碑", chinese_romanization: "jìniànbēi" },
                { option: "C", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
                { option: "D", answer: "start", chinese_answer: "开始", chinese_romanization: "kāishǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'vestige' means a trace or remnant of something that is disappearing or no longer exists." +
                "<br><br>" +
                "(B) 'monument' means a statue, building, or other structure erected to commemorate a notable person or event." +
                "<br><br>" +
                "(C) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid." +
                "<br><br>" +
                "(D) 'start' means the beginning of something.",
        chinese_explanation: "(A) '遗迹' 意味着某物正在消失或不再存在的痕迹或遗迹。" +
                "<br><br>" +
                "(B) '纪念碑' 意味着为纪念著名人物或事件而建造的雕像、建筑或其他结构。" +
                "<br><br>" +
                "(C) '证据' 意味着表明某个信念或主张是真实或有效的现有事实或信息。" +
                "<br><br>" +
                "(D) '开始' 意味着某事的开端。"
    },
    {
        id: 8,
        question: "His __________ led him to believe that life had no inherent meaning, causing him to become indifferent to social norms and values.",
        chinese_question: "他的 __________ 使他相信生活没有内在意义，从而对社会规范和价值观变得冷漠。",
        answers: [
                { option: "A", answer: "nihilism", chinese_answer: "虚无主义", chinese_romanization: "xūwú zhǔyì" },
                { option: "B", answer: "optimism", chinese_answer: "乐观主义", chinese_romanization: "lèguān zhǔyì" },
                { option: "C", answer: "idealism", chinese_answer: "理想主义", chinese_romanization: "lǐxiǎng zhǔyì" },
                { option: "D", answer: "humanism", chinese_answer: "人文主义", chinese_romanization: "rénwén zhǔyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nihilism' means the rejection of all religious and moral principles, often in the belief that life is meaningless." +
                "<br><br>" +
                "(B) 'optimism' means hopefulness and confidence about the future or the successful outcome of something." +
                "<br><br>" +
                "(C) 'idealism' means the practice of forming or pursuing ideals, especially unrealistically." +
                "<br><br>" +
                "(D) 'humanism' means an outlook or system of thought attaching prime importance to human rather than divine or supernatural matters.",
        chinese_explanation: "(A) '虚无主义' 意味着拒绝所有宗教和道德原则，通常相信生活是没有意义的。" +
                "<br><br>" +
                "(B) '乐观主义' 意味着对未来或某事成功结果的希望和信心。" +
                "<br><br>" +
                "(C) '理想主义' 意味着形成或追求理想的做法，尤其是不切实际地追求。" +
                "<br><br>" +
                "(D) '人文主义' 意味着一种重视人类而不是神圣或超自然事务的观点或思想体系。"
    },
    {
        id: 9,
    question: "The moderator acted as an __________, posing questions and encouraging discussion among the panelists.",
    chinese_question: "主持人充当 __________，提出问题并鼓励小组成员讨论。",
    answers: [
        { option: "A", answer: "organizer", chinese_answer: "组织者", chinese_romanization: "zǔzhī zhě" },
        { option: "B", answer: "attendee", chinese_answer: "出席者", chinese_romanization: "chūxí zhě" },
        { option: "C", answer: "interlocutor", chinese_answer: "对话者", chinese_romanization: "duìhuà zhě" },
        { option: "D", answer: "presenter", chinese_answer: "主持人", chinese_romanization: "zhǔchí rén" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'interlocutor' means a person who takes part in a dialogue or conversation." +
        "<br><br>" +
        "(A) 'organizer' means a person who arranges and plans an event or activity." +
        "<br><br>" +
        "(B) 'attendee' means a person who is present at an event, meeting, or function." +
        "<br><br>" +
        "(D) 'presenter' means a person who introduces and appears in a television or radio program.",
    chinese_explanation: "(C) '对话者'一词意味着参与对话或谈话的人。" +
        "<br><br>" +
        "(A) '组织者' 意味着安排和计划活动或活动的人。" +
        "<br><br>" +
        "(B) '出席者' 意味着出席活动、会议或功能的人。" +
        "<br><br>" +
        "(D) '主持人' 意味着介绍并出现在电视或广播节目中的人。"
    },
    {
        id: 10,
        question: "The new smartphone quickly became a __________ in the market, outselling all its competitors.",
        chinese_question: "这款新智能手机迅速成为市场上的 __________，销量超过所有竞争对手。",
        answers: [
                { option: "A", answer: "juggernaut", chinese_answer: "强大力量", chinese_romanization: "qiángdà lìliàng" },
                { option: "B", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
                { option: "C", answer: "underdog", chinese_answer: "弱者", chinese_romanization: "ruòzhě" },
                { option: "D", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'juggernaut' means a huge, powerful, and overwhelming force or institution." +
                "<br><br>" +
                "(B) 'novice' means a person new to or inexperienced in a field or situation." +
                "<br><br>" +
                "(C) 'underdog' means a competitor thought to have little chance of winning a fight or contest." +
                "<br><br>" +
                "(D) 'anomaly' means something that deviates from what is standard, normal, or expected.",
        chinese_explanation: "(A) '强大力量' 意味着一个巨大、强大和压倒性的力量或机构。" +
                "<br><br>" +
                "(B) '新手' 意味着在某一领域或情况中没有经验或缺乏经验的人。" +
                "<br><br>" +
                "(C) '弱者' 意味着被认为在比赛或比赛中胜算不大的竞争者。" +
                "<br><br>" +
                "(D) '异常' 意味着偏离标准、正常或预期的事物。"
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
