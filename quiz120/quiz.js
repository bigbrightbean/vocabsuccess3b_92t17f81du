// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her kindness and charity helped to __________ the negative perceptions people had of her.",
        chinese_question: "她的善良和慈善帮助 __________ 人们对她的负面看法。",
        answers: [
                { option: "A", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
                { option: "B", answer: "efface", chinese_answer: "抹去", chinese_romanization: "mǒqù" },
                { option: "C", answer: "emphasize", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
                { option: "D", answer: "publicize", chinese_answer: "宣传", chinese_romanization: "xuānchuán" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'efface' used figuratively means to erase or remove something from memory or recognition." +
            "<br><br>" +
            "(A) 'amplify' means to increase the volume of sound." +
            "<br><br>" +
            "(C) 'emphasize' means to give special importance or prominence to something in speaking or writing." +
            "<br><br>" +
            "(D) 'publicize' means to make something widely known.",
        chinese_explanation: "(B) '抹去' 在比喻意义上指从记忆或认可中擦除或去除某物。" +
            "<br><br>" +
            "(A) '放大' 意味着增加声音的音量。" +
            "<br><br>" +
            "(C) '强调' 意味着在说话或写作中对某事给予特别重要或显著的位置。" +
            "<br><br>" +
            "(D) '宣传' 意味着使某事广为人知。"
    },
    {
        id: 2,
        question: "The disgruntled employee tried to __________ his former boss with false allegations.",
        chinese_question: "那位心怀不满的员工试图用虚假指控 __________ 他的前老板。",
        answers: [
        { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "B", answer: "calumniate", chinese_answer: "诽谤", chinese_romanization: "fěibàng" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "respect", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'calumniate' means to make false and defamatory statements about someone." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight; hold up." +
            "<br><br>" +
            "(D) 'respect' means to admire someone deeply, as a result of their abilities, qualities, or achievements.",
        chinese_explanation: "(B) '诽谤' 意味着对某人做出虚假和诽谤性的陈述。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '尊敬' 意味着深深地钦佩某人，因为他们的能力、品质或成就。"
    },
    {
        id: 3,
question: "The smell of fresh popcorn __________ moviegoers as they entered the theater.",
chinese_question: "新鲜爆米花的香味 __________ 走进电影院的观众。",
answers: [
    { option: "A", answer: "tantalized", chinese_answer: "诱惑", chinese_romanization: "yòuhuò" },
    { option: "B", answer: "repelled", chinese_answer: "驱赶", chinese_romanization: "qūgǎn" },
    { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "completed", chinese_answer: "完成", chinese_romanization: "wánchéng" }
],
correctAnswer: "A",
explanation: "(A) 'tantalized' means to torment or tease someone with the sight or promise of something that is unobtainable." +
    "<br><br>" +
    "(B) 'repelled' means to drive or force back or away." +
    "<br><br>" +
    "(C) 'ignored' means to refuse to take notice of." +
    "<br><br>" +
    "(D) 'completed' means to finish making or doing.",
chinese_explanation: "(A) '诱惑' 意味着用无法得到的东西的景象或承诺来折磨或戏弄某人。" +
    "<br><br>" +
    "(B) '驱赶' 意味着驱逐或迫使退后。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意。" +
    "<br><br>" +
    "(D) '完成' 意味着完成制作或做某事。"
    },
    {
        id: 4,
question: "Writers and artists often __________ against censorship, arguing that it stifles creativity and freedom of expression.",
chinese_question: "作家和艺术家经常 __________ 审查制度，认为它扼杀了创造力和表达自由。",
answers: [
    { option: "A", answer: "promote", chinese_answer: "推动", chinese_romanization: "tuīdòng" },
    { option: "B", answer: "inveigh", chinese_answer: "抨击", chinese_romanization: "pēngjī" },
    { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
    { option: "D", answer: "embrace", chinese_answer: "拥抱", chinese_romanization: "yōngbào" }
],
correctAnswer: "B",
explanation: "(B) 'inveigh' means to speak or write about something with great hostility." +
    "<br><br>" +
    "(A) 'promote' means to further the progress of something." +
    "<br><br>" +
    "(C) 'ignore' means to refuse to take notice of." +
    "<br><br>" +
    "(D) 'embrace' means to accept or support willingly and enthusiastically.",
chinese_explanation: "(B) '抨击' 意味着对某事物进行强烈的批评。" +
    "<br><br>" +
    "(A) '推动' 意味着促进某事物的进展。" +
    "<br><br>" +
    "(C) '忽视' 意味着拒绝注意。" +
    "<br><br>" +
    "(D) '拥抱' 意味着愿意并热情地接受或支持。"
    },
    {
        id: 5,
        question: "For the masquerade ball, guests were encouraged to __________ themselves in elaborate costumes.",
        chinese_question: "为了参加化装舞会，鼓励客人们穿上精美的服装来 __________ 自己。",
        answers: [
        { option: "A", answer: "bedizen", chinese_answer: "穿戴华丽", chinese_romanization: "chuāndài huálì" },
        { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "undress", chinese_answer: "脱衣服", chinese_romanization: "tuō yīfu" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bedizen' means to dress or decorate in a gaudy or showy manner." +
            "<br><br>" +
            "(B) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'undress' means to take off one's clothes.",
        chinese_explanation: "(A) '穿戴华丽' 意味着以艳丽或炫耀的方式打扮或装饰。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '脱衣服' 意味着脱掉衣服。"
    },
    {
        id: 6,
        question: "She hoped to __________ her friend of the mistaken belief that hard work always guarantees success.",
        chinese_question: "她希望 __________ 朋友那种认为努力工作总是保证成功的错误信念。",
        answers: [
            { option: "A", answer: "persuade", chinese_answer: "说服", chinese_romanization: "shuōfú" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "D", answer: "disabuse", chinese_answer: "纠正", chinese_romanization: "jiūzhèng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disabuse' means to persuade someone that an idea or belief is mistaken." +
            "<br><br>" +
            "(A) 'persuade' means to cause someone to do something through reasoning or argument." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'confirm' means to establish the truth or correctness of something.",
        chinese_explanation: "(D) '纠正' 意味着让某人相信一个观点或信念是错误的。" +
            "<br><br>" +
            "(A) '说服' 意味着通过推理或争论使某人做某事。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '确认' 意味着确定某事的真实性或正确性。"
    },
    {
        id: 7,
    question: "The leader's speech managed to __________ the crowd into taking immediate action by making them feel a sense of urgency and purpose.",
    chinese_question: "领导者的演讲设法 __________ 群众立即采取行动，使他们感到紧迫感和目的感。",
    answers: [
            { option: "A", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "B", answer: "galvanize", chinese_answer: "激励", chinese_romanization: "jīlì" },
            { option: "C", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'galvanize' means to shock or excite someone into taking action." +
            "<br><br>" +
            "(A) 'calm' means to make someone peaceful or quiet." +
            "<br><br>" +
            "(C) 'soothe' means to gently calm or reduce pain." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '激励' 意味着激励或激发某人采取行动。" +
            "<br><br>" +
            "(A) '平静' 意味着使某人平静或安静。" +
            "<br><br>" +
            "(C) '抚慰' 意味着轻轻地安抚或减轻疼痛。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
        question: "Even though they are just ordinary people, some fans __________ their favorite celebrities, treating them as more than just human.",
        chinese_question: "一些粉丝 __________ 他们最喜欢的名人，把他们当作超越普通人的存在。",
        answers: [
                { option: "A", answer: "deify", chinese_answer: "神化", chinese_romanization: "shénhuà" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "mock", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
                { option: "D", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'deify' means to worship or regard someone as a god." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'mock' means to tease or laugh at in a scornful or contemptuous manner." +
                "<br><br>" +
                "(D) 'disparage' means to regard or represent as being of little worth.",
        chinese_explanation: "(A) '神化' 意味着把某人当作神来崇拜或视为神。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '嘲笑' 意味着以轻蔑或蔑视的方式取笑或嘲笑。" +
                "<br><br>" +
                "(D) '贬低' 意味着认为或表现得没有价值。"
    },
    {
        id: 9,
        question: "After reviewing all the evidence, the lawyer managed to __________ her client, proving he was not guilty of the crime.",
        chinese_question: "在审查所有证据后，律师设法 __________ 她的客户，证明他没有罪。",
        answers: [
            { option: "A", answer: "accuse", chinese_answer: "指控", chinese_romanization: "zhǐ kòng" },
            { option: "B", answer: "blame", chinese_answer: "责备", chinese_romanization: "zé bèi" },
            { option: "C", answer: "condemn", chinese_answer: "谴责", chinese_romanization: "qiǎn zé" },
            { option: "D", answer: "exculpate", chinese_answer: "开脱", chinese_romanization: "kāi tuō" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exculpate' means to show or declare that someone is not guilty of wrongdoing." +
            "<br><br>" +
            "(A) 'accuse' means to say that someone has done something wrong." +
            "<br><br>" +
            "(B) 'blame' means to think or say that someone is responsible for something bad." +
            "<br><br>" +
            "(C) 'condemn' means to say in a strong way that someone or something is bad or wrong.",
        chinese_explanation: "(D) '开脱' 意味着证明或宣告某人没有犯错。" +
            "<br><br>" +
            "(A) '指控' 意味着说某人做了错事。" +
            "<br><br>" +
            "(B) '责备' 意味着认为或说某人对某件坏事负责。" +
            "<br><br>" +
            "(C) '谴责' 意味着强烈地说某人或某事不好或错误。"
    },
    {
        id: 10,
    question: "After the meeting, the members began to __________ to their respective departments to carry out their tasks and responsibilities.",
    chinese_question: "会议结束后，成员们开始 __________ 到各自的部门。",
    answers: [
        { option: "A", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
        { option: "B", answer: "gather", chinese_answer: "聚集", chinese_romanization: "jùjí" },
        { option: "C", answer: "remain", chinese_answer: "留在", chinese_romanization: "liú zài" },
        { option: "D", answer: "concentrate", chinese_answer: "集中", chinese_romanization: "jízhōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'scatter' means to throw in various random directions." +
        "<br><br>" +
        "(B) 'gather' means to come together; assemble or accumulate." +
        "<br><br>" +
        "(C) 'remain' means to stay in the same place." +
        "<br><br>" +
        "(D) 'concentrate' means to focus one's attention or mental effort on a particular object or activity.",
    chinese_explanation: "(A) '分散' 意味着朝各个不同方向散开。" +
        "<br><br>" +
        "(B) '聚集' 意味着聚集在一起；集合或积累。" +
        "<br><br>" +
        "(C) '留在' 意味着留在同一个地方。" +
        "<br><br>" +
        "(D) '集中' 意味着将注意力或精神努力集中在特定物体或活动上。"
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
