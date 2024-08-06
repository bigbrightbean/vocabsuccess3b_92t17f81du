// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ in the group's decision-making process led to confusion and delays.",
        chinese_question: "小组决策过程中的 __________ 导致了混乱和延误。",
        answers: [
                { option: "A", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
                { option: "B", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
                { option: "C", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" },
                { option: "D", answer: "coherence", chinese_answer: "连贯性", chinese_romanization: "liánguànxìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissonance' means a lack of harmony or agreement." +
                "<br><br>" +
                "(A) 'consensus' means general agreement." +
                "<br><br>" +
                "(C) 'unity' means the state of being united or joined as a whole." +
                "<br><br>" +
                "(D) 'coherence' means the quality of being logical and consistent.",
        chinese_explanation: "(B) '不和谐'一词意味着缺乏和谐或一致。" +
                "<br><br>" +
                "(A) '共识' 意味着普遍的同意。" +
                "<br><br>" +
                "(C) '团结' 意味着联合或联合为整体的状态。" +
                "<br><br>" +
                "(D) '连贯性' 意味着逻辑和一致性的质量。"
    },
    {
        id: 2,
        question: "The teacher encouraged the students to cite their __________ of information in their research papers.",
        chinese_question: "老师鼓励学生在研究论文中引用他们的信息 __________。",
        answers: [
            { option: "A", answer: "sources", chinese_answer: "来源", chinese_romanization: "láiyuán" },
            { option: "B", answer: "opinions", chinese_answer: "意见", chinese_romanization: "yìjiàn" },
            { option: "C", answer: "guesses", chinese_answer: "猜测", chinese_romanization: "cāicè" },
            { option: "D", answer: "distractions", chinese_answer: "干扰", chinese_romanization: "gānrǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sources' means places, persons, or things from which something comes or can be obtained." +
                "<br><br>" +
                "(B) 'opinions' means beliefs or judgments that are not based on proof or certainty." +
                "<br><br>" +
                "(C) 'guesses' means estimates or conjectures without sufficient information to be sure of being correct." +
                "<br><br>" +
                "(D) 'distractions' means things that prevent someone from giving full attention to something else.",
        chinese_explanation: "(A) '来源' 意味着某物来自或可以从中获得的地方、人物或事物。" +
                "<br><br>" +
                "(B) '意见' 意味着没有根据或确定性的信念或判断。" +
                "<br><br>" +
                "(C) '猜测' 意味着没有足够信息确定的估计或推测。" +
                "<br><br>" +
                "(D) '干扰' 意味着阻止某人全神贯注于某事的事物。"
    },
    {
        id: 3,
        question: "There wasn't a __________ of evidence, such as fingerprints, DNA, or eyewitness accounts, to support the claims, making it impossible to proceed with the investigation.",
        chinese_question: "没有一丝__________证据，比如指纹、DNA或目击者的证词，来支持这些说法，这使得调查无法进行。",
        answers: [
            { option: "A", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
            { option: "B", answer: "plethora", chinese_answer: "过多", chinese_romanization: "guòduō" },
            { option: "C", answer: "multitude", chinese_answer: "大量", chinese_romanization: "dàliàng" },
            { option: "D", answer: "scintilla", chinese_answer: "一丝", chinese_romanization: "yīsī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'scintilla' means a tiny trace or spark of a specified quality or feeling." +
            "<br><br>" +
            "(A) 'abundance' means a very large quantity of something." +
            "<br><br>" +
            "(B) 'plethora' means a large or excessive amount of something." +
            "<br><br>" +
            "(C) 'multitude' means a large number of people or things.",
        chinese_explanation: "(D) '一丝' 意味着某种特质或感觉的一小点或火花。" +
            "<br><br>" +
            "(A) '丰富' 意味着某物的数量非常大。" +
            "<br><br>" +
            "(B) '过多' 意味着某物的大量或过量。" +
            "<br><br>" +
            "(C) '大量' 意味着许多的人或事物。"
    },
    {
        id: 4,
        question: "Amidst the __________ of opinions on social media, it can be challenging to discern the truth.",
        chinese_question: "在社交媒体上众说纷纭的 __________ 中，很难辨别真相。",
        answers: [
                { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "B", answer: "din", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
                { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
                { option: "D", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'din' means a loud, unpleasant, and prolonged noise; used figuratively to describe a confusing mixture of noises or voices." +
                "<br><br>" +
                "(A) 'clarity' means the quality of being clear, in particular." +
                "<br><br>" +
                "(C) 'harmony' means the combination of simultaneously sounded musical notes to produce chords and chord progressions having a pleasing effect." +
                "<br><br>" +
                "(D) 'agreement' means harmony or accordance in opinion or feeling.",
        chinese_explanation: "(B) '喧闹'一词意味着嘈杂、令人不愉快且持续的噪音；用作比喻来形容嘈杂的混合声音或声音。" +
                "<br><br>" +
                "(A) '清晰' 意味着清楚的品质，特别是。" +
                "<br><br>" +
                "(C) '和谐' 意味着同时发出的音乐音符的组合，以产生具有令人愉悦效果的和弦和和弦进行。" +
                "<br><br>" +
                "(D) '一致' 意味着在意见或感受上的和谐或一致。"
    },
    {
        id: 5,
        question: "His __________ included lavish compliments and extravagant gifts, but she saw through his attempts to win her favour.",
        chinese_question: "他的 __________ 包括夸张的恭维和奢侈的礼物，但她看穿了他试图赢得她青睐的企图。",
        answers: [
                { option: "A", answer: "blandishments", chinese_answer: "奉承话", chinese_romanization: "fèngchēng huà" },
                { option: "B", answer: "threats", chinese_answer: "威胁", chinese_romanization: "wēixié" },
                { option: "C", answer: "demands", chinese_answer: "要求", chinese_romanization: "yāoqiú" },
                { option: "D", answer: "arguments", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'blandishments' means flattering or pleasing statements or actions used to persuade someone gently to do something." +
                "<br><br>" +
                "(B) 'threats' means statements of an intention to inflict pain, injury, damage, or other hostile action." +
                "<br><br>" +
                "(C) 'demands' means insistent requests made as if by right." +
                "<br><br>" +
                "(D) 'arguments' means exchanges of diverging or opposite views, typically heated or angry ones.",
        chinese_explanation: "(A) '奉承话' 意味着用来温和地劝说某人的恭维或令人愉快的陈述或行动。" +
                "<br><br>" +
                "(B) '威胁' 意味着表明要造成痛苦、伤害、损害或其他敌对行为的言论。" +
                "<br><br>" +
                "(C) '要求' 意味着坚持的请求，仿佛是权利。" +
                "<br><br>" +
                "(D) '争论' 意味着通常是激烈或愤怒的不同或相反观点的交流。"
    },
    {
        id: 6,
    question: "The __________ of democracy is based on the idea that all individuals have equal rights and opportunities.",
    chinese_question: "民主的 __________ 基于所有人都有平等权利和机会的理念。",
    answers: [
        { option: "A", answer: "theory", chinese_answer: "理论", chinese_romanization: "lǐlùn" },
        { option: "B", answer: "system", chinese_answer: "系统", chinese_romanization: "xìtǒng" },
        { option: "C", answer: "principle", chinese_answer: "原则", chinese_romanization: "yuánzé" },
        { option: "D", answer: "belief", chinese_answer: "信仰", chinese_romanization: "xìnyǎng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'principle' figuratively means a fundamental truth or proposition that serves as the foundation for a system of belief or behavior or for a chain of reasoning." +
        "<br><br>" +
        "(A) 'theory' means a supposition or a system of ideas intended to explain something." +
        "<br><br>" +
        "(B) 'system' means a set of connected things or parts forming a complex whole." +
        "<br><br>" +
        "(D) 'belief' means an acceptance that something exists or is true, especially one without proof.",
    chinese_explanation: "(C) '原则' 在此语境下意指作为信仰或行为体系或推理链基础的基本真理或命题。" +
        "<br><br>" +
        "(A) '理论' 意味着解释某事的一种假设或系统的观点。" +
        "<br><br>" +
        "(B) '系统' 意味着构成复杂整体的一组连接事物或部分。" +
        "<br><br>" +
        "(D) '信仰' 意味着接受某物存在或真实的信念，尤其是没有证据的信念。"
    },
    {
        id: 7,
        question: "The rebels feared a brutal __________ from the government after their failed uprising, including imprisonment, torture, and executions.",
        chinese_question: "叛乱者担心在起义失败后政府会进行残酷的__________，包括监禁、酷刑和处决。",
        answers: [
            { option: "A", answer: "pardon", chinese_answer: "赦免", chinese_romanization: "shèmiǎn" },
            { option: "B", answer: "clemency", chinese_answer: "仁慈", chinese_romanization: "réncí" },
            { option: "C", answer: "amnesty", chinese_answer: "大赦", chinese_romanization: "dàshè" },
            { option: "D", answer: "reprisal", chinese_answer: "报复", chinese_romanization: "bàofù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'reprisal' means an act of retaliation." +
            "<br><br>" +
            "(A) 'pardon' means the action of forgiving or being forgiven for an error or offense." +
            "<br><br>" +
            "(B) 'clemency' means mercy; lenience." +
            "<br><br>" +
            "(C) 'amnesty' means an official pardon for people who have been convicted of political offenses.",
        chinese_explanation: "(D) '报复' 意味着报复行为。" +
            "<br><br>" +
            "(A) '赦免' 意味着原谅或被原谅错误或过失的行为。" +
            "<br><br>" +
            "(B) '仁慈' 意味着仁慈；宽厚。" +
            "<br><br>" +
            "(C) '大赦' 意味着对被判政治罪行的人的正式赦免。"
    },
    {
        id: 8,
        question: "The actor's performance earned him __________ from both audiences and fellow actors, solidifying his reputation in the industry.",
        chinese_question: "这位演员的表演为他赢得了观众和同行的 __________，巩固了他在业界的声誉。",
        answers: [
                { option: "A", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "B", answer: "plaudits", chinese_answer: "赞誉", chinese_romanization: "zànyù" },
                { option: "C", answer: "scorn", chinese_answer: "轻蔑", chinese_romanization: "qīngmiè" },
                { option: "D", answer: "criticism", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plaudits' means praise or approval." +
                "<br><br>" +
                "(A) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
                "<br><br>" +
                "(C) 'scorn' means the feeling or belief that someone or something is worthless or despicable; contempt." +
                "<br><br>" +
                "(D) 'criticism' means the expression of disapproval of someone or something based on perceived faults or mistakes.",
        chinese_explanation: "(B) '赞誉'一词意味着赞扬或认可。" +
                "<br><br>" +
                "(A) '拒绝' 意味着拒绝提议、想法等。" +
                "<br><br>" +
                "(C) '轻蔑' 意味着认为某人或某物毫无价值或卑鄙的感觉或信念；蔑视。" +
                "<br><br>" +
                "(D) '批评' 意味着根据感知到的错误或缺点对某人或某事表示不赞成。"
    },
    {
        id: 9,
        question: "She used __________ to sneak into the event without a ticket, pretending to be part of the staff.",
        chinese_question: "她使用 __________ 伪装成工作人员，偷偷溜进了没有门票的活动。",
        answers: [
                { option: "A", answer: "clarity", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
                { option: "B", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
                { option: "C", answer: "loyalty", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" },
                { option: "D", answer: "subterfuge", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'subterfuge' means deceit used in order to achieve one's goal." +
                "<br><br>" +
                "(A) 'clarity' means the quality of being clear, in particular." +
                "<br><br>" +
                "(B) 'simplicity' means the quality or condition of being easy to understand or do." +
                "<br><br>" +
                "(C) 'loyalty' means a strong feeling of support or allegiance.",
        chinese_explanation: "(D) '欺骗'一词意味着为了实现某人的目标而使用的欺骗手段。" +
                "<br><br>" +
                "(A) '清晰' 意味着清晰的品质，特别是。" +
                "<br><br>" +
                "(B) '简单' 意味着容易理解或做的质量或条件。" +
                "<br><br>" +
                "(C) '忠诚' 意味着强烈的支持或忠诚感。"
    },
    {
        id: 10,
        question: "Despite evidence to the contrary, many people still cling to the old __________ that eating eggs increases cholesterol.",
        chinese_question: "尽管有相反的证据，许多人仍然坚持认为吃鸡蛋会增加胆固醇的旧 __________。",
        answers: [
                { option: "A", answer: "dogma", chinese_answer: "教条", chinese_romanization: "jiàotiáo" },
                { option: "B", answer: "myth", chinese_answer: "迷思", chinese_romanization: "mísī" },
                { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
                { option: "D", answer: "fact", chinese_answer: "事实", chinese_romanization: "shìshí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dogma' figuratively means a belief or set of beliefs that are accepted by the members of a group without being questioned or doubted." +
                "<br><br>" +
                "(B) 'myth' means a widely held but false belief or idea." +
                "<br><br>" +
                "(C) 'doubt' means a feeling of uncertainty or lack of conviction." +
                "<br><br>" +
                "(D) 'fact' means a thing that is known or proved to be true.",
        chinese_explanation: "(A) '教条' 在此语境下意指一群人接受而不质疑或怀疑的信仰或信仰体系。" +
                "<br><br>" +
                "(B) '迷思' 意味着广泛持有但错误的信念或想法。" +
                "<br><br>" +
                "(C) '怀疑' 意味着不确定或缺乏信念的感觉。" +
                "<br><br>" +
                "(D) '事实' 意味着已知或被证明为真的事物。"
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
