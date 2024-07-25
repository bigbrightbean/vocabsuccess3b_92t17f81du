// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ puzzle had everyone scratching their heads, unable to find a solution.",
        chinese_question: "这个 __________ 的谜题让每个人都挠头，不知道如何解决。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "perplexing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎo dàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perplexing' means completely baffling; very puzzling." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'straightforward' means uncomplicated and easy to do or understand.",
        chinese_explanation: "(C) '令人困惑的' 意味着完全令人困惑的；非常令人费解的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(B) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '直截了当的' 意味着不复杂的，容易做或理解的。"
    },
    {
        id: 2,
    question: "Her decision to take a __________ road trip across the country was met with excitement and curiosity from her friends, who admired her adventurous spirit.",
    chinese_question: "她决定来一次 __________ 的全国公路旅行，这个决定引起了朋友们的兴奋和好奇，他们钦佩她的冒险精神。",
    answers: [
        { option: "A", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
        { option: "B", answer: "calculated", chinese_answer: "经过深思熟虑的", chinese_romanization: "jīngguò shēnsī shúlǜ de" },
        { option: "C", answer: "deliberate", chinese_answer: "故意的", chinese_romanization: "gùyì de" },
        { option: "D", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation or external stimulus." +
        "<br><br>" +
        "(B) 'calculated' means done with full awareness of the likely consequences." +
        "<br><br>" +
        "(C) 'deliberate' means done consciously and intentionally." +
        "<br><br>" +
        "(D) 'cautious' means careful to avoid potential problems or dangers.",
    chinese_explanation: "(A) '自发的' 意味着因突然的内心冲动或倾向而做出或发生的，没有预谋或外部刺激的。" +
        "<br><br>" +
        "(B) '经过深思熟虑的' 意味着充分意识到可能的后果后做出的。" +
        "<br><br>" +
        "(C) '故意的' 意味着有意识和故意做出的。" +
        "<br><br>" +
        "(D) '谨慎的' 意味着小心避免潜在问题或危险的。"
    },
    {
        id: 3,
        question: "The concept of infinity can be __________ and difficult to grasp for many people.",
        chinese_question: "无限的概念对许多人来说可能是 __________ 的，难以理解。",
        answers: [
            { option: "A", answer: "precise", chinese_answer: "精确", chinese_romanization: "jīngquè" },
            { option: "B", answer: "exact", chinese_answer: "准确", chinese_romanization: "zhǔnquè" },
            { option: "C", answer: "nebulous", chinese_answer: "模糊", chinese_romanization: "móhú" },
            { option: "D", answer: "certain", chinese_answer: "确定", chinese_romanization: "quèdìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nebulous' means in the form of a cloud or haze; hazy; unclear or vague." +
            "<br><br>" +
            "(A) 'precise' means marked by exactness and accuracy of expression or detail." +
            "<br><br>" +
            "(B) 'exact' means not approximated in any way; precise." +
            "<br><br>" +
            "(D) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(C) '模糊' 意味着呈云状或雾状；模糊的；不清楚或含糊的。" +
            "<br><br>" +
            "(A) '精确' 意味着表达或细节的准确性和精确性。" +
            "<br><br>" +
            "(B) '准确' 意味着没有任何方式的近似；精确的。" +
            "<br><br>" +
            "(D) '确定' 意味着确定无疑的；超出怀疑的."
    },
    {
        id: 4,
        question: "His __________ attempt to cheat on the exam was easily noticed by the invigilator.",
        chinese_question: "他 __________ 地企图在考试中作弊，很容易被监考员发现。",
        answers: [
            { option: "A", answer: "blatant", chinese_answer: "公然的", chinese_romanization: "gōngrán de" },
            { option: "B", answer: "sneaky", chinese_answer: "鬼鬼祟祟的", chinese_romanization: "guǐguǐsuìsuì de" },
            { option: "C", answer: "covert", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "D", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blatant' means done openly and unashamedly." +
                "<br><br>" +
                "(B) 'sneaky' means furtive or sly." +
                "<br><br>" +
                "(C) 'covert' means not openly acknowledged or displayed." +
                "<br><br>" +
                "(D) 'hidden' means kept out of sight.",
        chinese_explanation: "(A) '公然的' 意味着公开而毫不羞耻地进行的。" +
                "<br><br>" +
                "(B) '鬼鬼祟祟的' 意味着偷偷摸摸或狡猾的。" +
                "<br><br>" +
                "(C) '秘密的' 意味着没有公开承认或展示的。" +
                "<br><br>" +
                "(D) '隐藏的' 意味着隐藏起来的。"
    },
    {
        id: 5,
        question: "Her background in finance makes her __________ for the treasurer position.",
        chinese_question: "她的金融背景使她非常 __________ 财务主管的职位。",
        answers: [
            { option: "A", answer: "unsuitable", chinese_answer: "不合适的", chinese_romanization: "bù héshì de" },
            { option: "B", answer: "ill-equipped", chinese_answer: "准备不足的", chinese_romanization: "zhǔnbèi bùzú de" },
            { option: "C", answer: "inadequate", chinese_answer: "不足的", chinese_romanization: "bùzú de" },
            { option: "D", answer: "suitable", chinese_answer: "合适的", chinese_romanization: "héshì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'suitable' means right or appropriate for a particular person, purpose, or situation." +
            "<br><br>" +
            "(A) 'unsuitable' means not appropriate for a particular occasion or use." +
            "<br><br>" +
            "(B) 'ill-equipped' means not having the necessary tools, skills, or ability to do something." +
            "<br><br>" +
            "(C) 'inadequate' means lacking the quality or quantity required; insufficient for a purpose.",
        chinese_explanation: "(D) '合适的' 意味着适合特定人、目的或情况的。" +
            "<br><br>" +
            "(A) '不合适的' 意味着不适合特定场合或用途的。" +
            "<br><br>" +
            "(B) '准备不足的' 意味着没有必要的工具、技能或能力去做某事。" +
            "<br><br>" +
            "(C) '不足的' 意味着缺乏所需的质量或数量；不足以达到目的。"
    },
    {
        id: 6,
        question: "Her __________ personality made her the life of the party.",
        chinese_question: "她__________的个性使她成为派对的灵魂。",
        answers: [
            { option: "A", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "zesty", chinese_answer: "开朗的", chinese_romanization: "kāilǎng de" },
            { option: "C", answer: "dull", chinese_answer: "无趣的", chinese_romanization: "wúqù de" },
            { option: "D", answer: "uninteresting", chinese_answer: "不有趣的", chinese_romanization: "bù yǒuqù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zesty' means having a strong, pleasant, and somewhat spicy flavor or personality." +
            "<br><br>" +
            "(A) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'uninteresting' means not arousing curiosity or interest.",
        chinese_explanation: "(B) '开朗的' 意味着具有强烈、令人愉悦且略带辛辣的味道或个性。" +
            "<br><br>" +
            "(A) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(C) '无趣的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(D) '不有趣的' 意味着没有引起好奇或兴趣的。"
    },
    {
        id: 7,
    question: "Their __________ relationship made working together a pleasant experience.",
    chinese_question: "他们的__________关系使一起工作成为一种愉快的经历。",
    answers: [
      { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
      { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
      { option: "C", answer: "cordial", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
      { option: "D", answer: "unfriendly", chinese_answer: "不友好的", chinese_romanization: "bù yǒuhǎo de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'cordial' means warm and friendly. Figuratively, it can mean having a positive and supportive relationship." +
      "<br><br>" +
      "(A) 'hostile' means unfriendly; antagonistic." +
      "<br><br>" +
      "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
      "<br><br>" +
      "(D) 'unfriendly' means not friendly; hostile.",
    chinese_explanation: "(C) '热情的' 意味着温暖和友好的。比喻地，它可以表示有一个积极和支持的关系。" +
      "<br><br>" +
      "(A) '敌对的' 意味着不友好的；对抗的。" +
      "<br><br>" +
      "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
      "<br><br>" +
      "(D) '不友好的' 意味着不友好的；敌对的。"
    },
    {
        id: 8,
        question: "The future looked __________ for the struggling company, with no signs of improvement.",
        chinese_question: "对于这家挣扎中的公司来说，未来看起来 __________，没有改善的迹象。",
        answers: [
            { option: "A", answer: "hopeful", chinese_answer: "有希望", chinese_romanization: "yǒu xīwàng" },
            { option: "B", answer: "promising", chinese_answer: "有前途", chinese_romanization: "yǒu qiántú" },
            { option: "C", answer: "bleak", chinese_answer: "黯淡", chinese_romanization: "àndàn" },
            { option: "D", answer: "bright", chinese_answer: "光明", chinese_romanization: "guāngmíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bleak' means not hopeful or encouraging; unlikely to have a favorable outcome." +
                "<br><br>" +
                "(A) 'hopeful' means feeling or inspiring optimism about a future event." +
                "<br><br>" +
                "(B) 'promising' means showing signs of future success." +
                "<br><br>" +
                "(D) 'bright' means giving out or reflecting a lot of light; shining.",
        chinese_explanation: "(C) '黯淡' 意味着没有希望或鼓励；不太可能有一个有利的结果。" +
                "<br><br>" +
                "(A) '有希望' 意味着对未来事件感到或激发乐观。" +
                "<br><br>" +
                "(B) '有前途' 意味着显示出未来成功的迹象。" +
                "<br><br>" +
                "(D) '光明' 意味着发出或反射大量光；闪亮的。"
    },
    {
        id: 9,
        question: "The solution to the problem proved to be __________, always slipping away just when they thought they had it figured out.",
        chinese_question: "问题的解决方案证明是 __________ 的，总是在他们认为找到了答案时溜走。",
        answers: [
            { option: "A", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiélèdāng de" },
            { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "elusive", chinese_answer: "难捉摸的", chinese_romanization: "nán zhuōmō de" },
            { option: "D", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'elusive' means difficult to find, catch, or achieve. Figuratively, it can mean something that is hard to understand or define." +
            "<br><br>" +
            "(A) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(B) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(D) 'clear' means easy to perceive, understand, or interpret.",
        chinese_explanation: "(C) '难捉摸的' 意味着难以找到、捕捉或实现的。比喻地，它可以表示难以理解或定义的事物。" +
            "<br><br>" +
            "(A) '直截了当的' 意味着不复杂且容易做或理解的。" +
            "<br><br>" +
            "(B) '简单的' 意味着容易理解或完成的；没有难度的。" +
            "<br><br>" +
            "(D) '清晰的' 意味着容易察觉、理解或解释的。"
    },
    {
        id: 10,
        question: "After years of experience, she developed a __________ approach to solving complex problems.",
        chinese_question: "经过多年的经验，她形成了 __________ 的方法来解决复杂问题。",
        answers: [
            { option: "A", answer: "mature", chinese_answer: "成熟", chinese_romanization: "chéngshú" },
            { option: "B", answer: "hasty", chinese_answer: "草率", chinese_romanization: "cǎoshuài" },
            { option: "C", answer: "impulsive", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "D", answer: "reckless", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'mature' means having or showing the mental and emotional qualities of an adult." +
            "<br><br>" +
            "(B) 'hasty' means done or acting with excessive speed or urgency." +
            "<br><br>" +
            "(C) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'reckless' means heedless of danger or the consequences of one's actions.",
        chinese_explanation: "(A) '成熟' 意味着具有或表现出成年人的心理和情感素质。" +
            "<br><br>" +
            "(B) '草率' 意味着以过快或紧急的方式完成或行动。" +
            "<br><br>" +
            "(C) '冲动' 意味着在没有深思熟虑的情况下行动或完成。" +
            "<br><br>" +
            "(D) '鲁莽' 意味着不顾危险或行为后果。"
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
