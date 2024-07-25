// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "To his __________, he realized he had been speaking to the wrong person during the entire meeting.",
        chinese_question: "让他感到 __________ 的是，他意识到整个会议期间他都在和错的人讲话。",
        answers: [
                { option: "A", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
                { option: "B", answer: "discomfiture", chinese_answer: "尴尬", chinese_romanization: "gāngà" },
                { option: "C", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
                { option: "D", answer: "pride", chinese_answer: "自豪", chinese_romanization: "zìháo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'discomfiture' means a feeling of unease or embarrassment." +
                "<br><br>" +
                "(A) 'joy' means a feeling of great pleasure and happiness." +
                "<br><br>" +
                "(C) 'confidence' means the feeling or belief that one can rely on someone or something." +
                "<br><br>" +
                "(D) 'pride' means a feeling of deep pleasure or satisfaction derived from one's own achievements.",
        chinese_explanation: "(B) '尴尬' 意味着感到不安或尴尬的感觉。" +
                "<br><br>" +
                "(A) '快乐' 意味着极大的愉快和幸福感。" +
                "<br><br>" +
                "(C) '自信' 意味着可以依赖某人或某事的感觉或信念。" +
                "<br><br>" +
                "(D) '自豪' 意味着因自己的成就而感到的深深的愉悦或满足感。"
    },
    {
        id: 2,
        question: "The social media campaign became a __________, rapidly spreading across platforms and influencing millions.",
        chinese_question: "社交媒体运动成为了一个 __________，迅速传播到各个平台并影响了数百万人。",
        answers: [
                { option: "A", answer: "trickle", chinese_answer: "细流", chinese_romanization: "xìliú" },
                { option: "B", answer: "juggernaut", chinese_answer: "强大力量", chinese_romanization: "qiángdà lìliàng" },
                { option: "C", answer: "whisper", chinese_answer: "耳语", chinese_romanization: "ěryǔ" },
                { option: "D", answer: "flicker", chinese_answer: "闪烁", chinese_romanization: "shǎnshuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'juggernaut' figuratively means a huge, powerful, and overwhelming force or institution." +
                "<br><br>" +
                "(A) 'trickle' means a small flow of liquid." +
                "<br><br>" +
                "(C) 'whisper' means speaking very softly using one's breath without one's vocal cords, especially for the sake of privacy." +
                "<br><br>" +
                "(D) 'flicker' means a small, quick movement or a brief occurrence of light or color.",
        chinese_explanation: "(B) '强大力量' 在此语境下意指一个巨大、强大和压倒性的力量或机构。" +
                "<br><br>" +
                "(A) '细流' 意味着少量液体的流动。" +
                "<br><br>" +
                "(C) '耳语' 意味着用呼吸而不是声带非常轻声地说话，尤其是为了隐私。" +
                "<br><br>" +
                "(D) '闪烁' 意味着光或颜色的短暂出现或快速移动。"
    },
    {
        id: 3,
        question: "The debate was filled with political __________, with candidates using persuasive language to sway voters.",
        chinese_question: "辩论充满了政治 __________，候选人使用有说服力的语言来影响选民。",
        answers: [
                { option: "A", answer: "rhetoric", chinese_answer: "修辞", chinese_romanization: "xiūcí" },
                { option: "B", answer: "evidence", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
                { option: "C", answer: "facts", chinese_answer: "事实", chinese_romanization: "shìshí" },
                { option: "D", answer: "actions", chinese_answer: "行动", chinese_romanization: "xíngdòng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'rhetoric' figuratively means the art of effective or persuasive speaking or writing, often with a connotation of empty or exaggerated statements." +
                "<br><br>" +
                "(B) 'evidence' means the available body of facts or information indicating whether a belief or proposition is true or valid." +
                "<br><br>" +
                "(C) 'facts' means information used as evidence or as part of a report or news article." +
                "<br><br>" +
                "(D) 'actions' means the fact or process of doing something, typically to achieve an aim.",
        chinese_explanation: "(A) '修辞' 在此语境下意指有效或有说服力的演讲或写作艺术，通常带有空洞或夸张陈述的含义。" +
                "<br><br>" +
                "(B) '证据' 意味着表明某个信仰或命题是否真实或有效的事实或信息。" +
                "<br><br>" +
                "(C) '事实' 意味着用作证据或作为报告或新闻文章的一部分的信息。" +
                "<br><br>" +
                "(D) '行动' 意味着做某事的事实或过程，通常是为了实现一个目标。"
    },
    {
        id: 4,
        question: "The speaker's voice had varying __________, capturing the audience's attention with its rhythmic rises and falls.",
        chinese_question: "演讲者的声音有不同的 __________，通过其节奏的起伏吸引了观众的注意。",
        answers: [
            { option: "A", answer: "monotones", chinese_answer: "单调音", chinese_romanization: "dāndiào yīn" },
            { option: "B", answer: "stammers", chinese_answer: "口吃", chinese_romanization: "kǒuchī" },
            { option: "C", answer: "pauses", chinese_answer: "停顿", chinese_romanization: "tíngdùn" },
            { option: "D", answer: "cadences", chinese_answer: "韵律", chinese_romanization: "yùnlǜ" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cadences' means the rhythmic flow of a sequence of sounds or words." +
                "<br><br>" +
                "(A) 'monotones' means a continuous, unchanging tone." +
                "<br><br>" +
                "(B) 'stammers' means speaking with sudden involuntary pauses and a tendency to repeat the initial letters of words." +
                "<br><br>" +
                "(C) 'pauses' means a temporary stop in action or speech.",
        chinese_explanation: "(D) '韵律' 意味着声音或词语序列的节奏流动。" +
                "<br><br>" +
                "(A) '单调音' 意味着持续不变的音调。" +
                "<br><br>" +
                "(B) '口吃' 意味着说话时突然不自觉地停顿和倾向于重复词语的首字母。" +
                "<br><br>" +
                "(C) '停顿' 意味着行动或说话中的暂时停止。"
    },
    {
        id: 5,
        question: "Despite her cheerful __________, she was struggling with many personal issues.",
        chinese_question: "尽管她表面上很开朗，她实际上正在与许多个人问题作斗争。",
        answers: [
            { option: "A", answer: "surface", chinese_answer: "表面", chinese_romanization: "biǎomiàn" },
            { option: "B", answer: "facade", chinese_answer: "外观", chinese_romanization: "wàiguān" },
            { option: "C", answer: "core", chinese_answer: "核心", chinese_romanization: "héxīn" },
            { option: "D", answer: "depth", chinese_answer: "深度", chinese_romanization: "shēndù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'surface' means the outside part or uppermost layer of something." +
                "<br><br>" +
                "(B) 'facade' means the face of a building, especially the principal front that looks onto a street or open space." +
                "<br><br>" +
                "(C) 'core' means the central or most important part of something." +
                "<br><br>" +
                "(D) 'depth' means the distance from the top or surface to the bottom of something.",
        chinese_explanation: "(A) '表面' 意味着某物的外部或最上层。" +
                "<br><br>" +
                "(B) '外观' 意味着建筑物的正面，特别是朝向街道或开阔空间的主要正面。" +
                "<br><br>" +
                "(C) '核心' 意味着某事物的中心或最重要部分。" +
                "<br><br>" +
                "(D) '深度' 意味着从顶部或表面到某物底部的距离。"
    },
    {
        id: 6,
        question: "Their romantic __________ began with a surprise trip to a secluded beach.",
        chinese_question: "他们浪漫的 __________ 始于一次惊喜的隐秘海滩之旅。",
        answers: [
                { option: "A", answer: "escapade", chinese_answer: "冒险行为", chinese_romanization: "màoxiǎn xíngwéi" },
                { option: "B", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
                { option: "C", answer: "engagement", chinese_answer: "订婚", chinese_romanization: "dìnghūn" },
                { option: "D", answer: "partnership", chinese_answer: "合作关系", chinese_romanization: "hézuò guānxì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'escapade' means an act or incident involving excitement, daring, or adventure." +
                "<br><br>" +
                "(B) 'agreement' means a negotiated and typically legally binding arrangement between parties." +
                "<br><br>" +
                "(C) 'engagement' means a formal agreement to get married." +
                "<br><br>" +
                "(D) 'partnership' means a relationship where two or more parties undertake a business or other endeavor together.",
        chinese_explanation: "(A) '冒险行为'一词意味着涉及兴奋、大胆或冒险的行为或事件。" +
                "<br><br>" +
                "(B) '协议' 意味着各方之间协商并通常具有法律约束力的安排。" +
                "<br><br>" +
                "(C) '订婚' 意味着结婚的正式协议。" +
                "<br><br>" +
                "(D) '合作关系' 意味着两方或多方共同进行商业或其他事业的关系。"
    },
    {
        id: 7,
        question: "His __________ was evident when he jumped into the river to save the drowning dog without considering his own safety.",
        chinese_question: "当他不顾自身安全跳入河中救溺水的狗时，他的 __________ 显而易见。",
        answers: [
                { option: "A", answer: "foresight", chinese_answer: "远见", chinese_romanization: "yuǎnjiàn" },
                { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                { option: "C", answer: "contemplation", chinese_answer: "沉思", chinese_romanization: "chénsī" },
                { option: "D", answer: "impetuosity", chinese_answer: "冲动", chinese_romanization: "chōngdòng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impetuosity' means the quality of being impulsive or acting without careful thought." +
                "<br><br>" +
                "(A) 'foresight' means the ability to predict what will happen or be needed in the future." +
                "<br><br>" +
                "(B) 'hesitation' means the action of pausing before saying or doing something." +
                "<br><br>" +
                "(C) 'contemplation' means the action of looking thoughtfully at something for a long time.",
        chinese_explanation: "(D) '冲动'一词意味着冲动或不经仔细思考而行动的品质。" +
                "<br><br>" +
                "(A) '远见' 意味着预测未来会发生什么或需要什么的能力。" +
                "<br><br>" +
                "(B) '犹豫' 意味着在说或做某事之前的暂停动作。" +
                "<br><br>" +
                "(C) '沉思' 意味着长时间仔细思考某事的行为。"
    },
    {
        id: 8,
        question: "The __________ of fast food chains in the city makes it hard for local restaurants to survive.",
        chinese_question: "快餐连锁店在城市中的 __________ 使得本地餐馆难以生存。",
        answers: [
                { option: "A", answer: "hegemony", chinese_answer: "霸权", chinese_romanization: "bàquán" },
                { option: "B", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
                { option: "C", answer: "diversity", chinese_answer: "多样性", chinese_romanization: "duōyàng xìng" },
                { option: "D", answer: "equality", chinese_answer: "平等", chinese_romanization: "píngděng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hegemony' figuratively means leadership or dominance, especially by one social group over others." +
                "<br><br>" +
                "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
                "<br><br>" +
                "(C) 'diversity' means the state of being diverse; variety." +
                "<br><br>" +
                "(D) 'equality' means the state of being equal, especially in status, rights, or opportunities.",
        chinese_explanation: "(A) '霸权' 在此语境下意指一个社会团体对他人的领导或支配。" +
                "<br><br>" +
                "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
                "<br><br>" +
                "(C) '多样性' 意味着多样的状态；多样性。" +
                "<br><br>" +
                "(D) '平等' 意味着特别是地位、权利或机会上的平等状态。"
    },
    {
        id: 9,
        question: "Her extensive experience and impeccable __________ made her the perfect candidate for the high-level position.",
        chinese_question: "她丰富的经验和完美无缺的 __________ 使她成为高级职位的理想人选。",
        answers: [
            { option: "A", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" },
            { option: "B", answer: "credentials", chinese_answer: "资历", chinese_romanization: "zīlì" },
            { option: "C", answer: "failures", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "D", answer: "mistakes", chinese_answer: "错误", chinese_romanization: "cuòwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'credentials' means qualifications or achievements." +
                "<br><br>" +
                "(A) 'incompetence' means lack of ability or skill." +
                "<br><br>" +
                "(C) 'failures' means lack of success." +
                "<br><br>" +
                "(D) 'mistakes' means actions or judgments that are wrong.",
        chinese_explanation: "(B) '资历' 意味着资格或成就。" +
                "<br><br>" +
                "(A) '无能' 意味着缺乏能力或技能。" +
                "<br><br>" +
                "(C) '失败' 意味着缺乏成功。" +
                "<br><br>" +
                "(D) '错误' 意味着错误的行为或判断。"
    },
    {
        id: 10,
        question: "His __________ of enthusiasm was evident in his lackluster performance.",
        chinese_question: "他 __________ 热情在他平淡无奇的表现中显而易见。",
        answers: [
            { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "lack", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
            { option: "C", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" },
            { option: "D", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'lack' means the state of being without or not having enough of something." +
                "<br><br>" +
                "(A) 'abundance' means a very large quantity of something." +
                "<br><br>" +
                "(C) 'excess' means an amount of something that is more than necessary, permitted, or desirable." +
                "<br><br>" +
                "(D) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply.",
        chinese_explanation: "(B) '缺乏' 意味着没有或不足够某物的状态。" +
                "<br><br>" +
                "(A) '丰富' 意味着大量的某物。" +
                "<br><br>" +
                "(C) '过量' 意味着超过必要、允许或理想的数量。" +
                "<br><br>" +
                "(D) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。"
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
