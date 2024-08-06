// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His __________ in dealing with his children's constant questions was admirable, never losing his temper or raising his voice.",
        chinese_question: "他在应对孩子们不断的问题时表现出的 __________ 是值得钦佩的，从不发脾气或提高声音。",
        answers: [
                { option: "A", answer: "irritation", chinese_answer: "恼怒", chinese_romanization: "nǎonù" },
                { option: "B", answer: "forbearance", chinese_answer: "忍耐", chinese_romanization: "rěnnài" },
                { option: "C", answer: "frustration", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
                { option: "D", answer: "anger", chinese_answer: "愤怒", chinese_romanization: "fènnù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'forbearance' means patient self-control; restraint and tolerance." +
                "<br><br>" +
                "(A) 'irritation' means the state of feeling annoyed, impatient, or slightly angry." +
                "<br><br>" +
                "(C) 'frustration' means the feeling of being upset or annoyed as a result of being unable to change or achieve something." +
                "<br><br>" +
                "(D) 'anger' means a strong feeling of annoyance, displeasure, or hostility.",
        chinese_explanation: "(B) '忍耐'一词意味着有耐心的自我控制；克制和宽容。" +
                "<br><br>" +
                "(A) '恼怒' 意味着感到恼火、不耐烦或稍微生气的状态。" +
                "<br><br>" +
                "(C) '挫折' 意味着因无法改变或实现某事而感到沮丧或恼火的感觉。" +
                "<br><br>" +
                "(D) '愤怒' 意味着强烈的恼怒、不满或敌意。"
    },
    {
        id: 2,
        question: "His reputation for __________ made it difficult for anyone to trust his word.",
        chinese_question: "他以 __________ 闻名，导致没人能相信他的话。",
        answers: [
                { option: "A", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
                { option: "B", answer: "sincerity", chinese_answer: "真诚", chinese_romanization: "zhēnchéng" },
                { option: "C", answer: "credibility", chinese_answer: "可信度", chinese_romanization: "kěxìn dù" },
                { option: "D", answer: "mendacity", chinese_answer: "虚伪", chinese_romanization: "xūwěi" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mendacity' means untruthfulness or a tendency to lie." +
                "<br><br>" +
                "(A) 'honesty' means the quality of being honest." +
                "<br><br>" +
                "(B) 'sincerity' means the quality of being free from pretense, deceit, or hypocrisy." +
                "<br><br>" +
                "(C) 'credibility' means the quality of being trusted and believed in.",
        chinese_explanation: "(D) '虚伪'一词意味着不诚实或倾向于撒谎。" +
                "<br><br>" +
                "(A) '诚实' 意味着诚实的品质。" +
                "<br><br>" +
                "(B) '真诚' 意味着没有伪装、欺骗或虚伪的品质。" +
                "<br><br>" +
                "(C) '可信度' 意味着被信任和相信的品质。"
    },
    {
        id: 3,
        question: "Known as a __________, he spent his days indulging in luxurious spa treatments and gourmet meals.",
        chinese_question: "作为一个 __________，他整天沉迷于奢华的水疗和美食。",
        answers: [
                { option: "A", answer: "ascetic", chinese_answer: "苦行者", chinese_romanization: "kǔxíng zhě" },
                { option: "B", answer: "sybarite", chinese_answer: "享乐主义者", chinese_romanization: "xiǎnglè zhǔyì zhě" },
                { option: "C", answer: "minimalist", chinese_answer: "极简主义者", chinese_romanization: "jíjiǎn zhǔyì zhě" },
                { option: "D", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sybarite' means a person who is self-indulgent in their fondness for sensuous luxury." +
                "<br><br>" +
                "(A) 'ascetic' means a person who practices severe self-discipline and abstention." +
                "<br><br>" +
                "(C) 'minimalist' means a person who advocates or practices minimalism in art or music." +
                "<br><br>" +
                "(D) 'pragmatist' means a person who is guided more by practical considerations than by ideals.",
        chinese_explanation: "(B) '享乐主义者'一词意味着一个沉溺于感官奢华的人。" +
                "<br><br>" +
                "(A) '苦行者' 意味着一个实践严格自律和节制的人。" +
                "<br><br>" +
                "(C) '极简主义者' 意味着一个在艺术或音乐上倡导或实践极简主义的人。" +
                "<br><br>" +
                "(D) '实用主义者' 意味着一个更多地受到实际考虑而不是理想指导的人。"
    },
    {
        id: 4,
        question: "The survey was designed to ensure __________ by including questions that did not lead respondents to a particular answer.",
        chinese_question: "这项调查旨在通过包括不会引导受访者得出特定答案的问题来确保 __________。",
        answers: [
                { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
                { option: "B", answer: "partiality", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
                { option: "C", answer: "objectivity", chinese_answer: "客观性", chinese_romanization: "kèguān xìng" },
                { option: "D", answer: "subjectivity", chinese_answer: "主观性", chinese_romanization: "zhǔguān xìng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'objectivity' means the quality of being objective, unbiased, and not influenced by personal feelings or opinions." +
                "<br><br>" +
                "(A) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
                "<br><br>" +
                "(B) 'partiality' means unfair bias in favor of one thing or person compared with another; favoritism." +
                "<br><br>" +
                "(D) 'subjectivity' means based on or influenced by personal feelings, tastes, or opinions.",
        chinese_explanation: "(C) '客观性'一词意味着客观、公正、不受个人感情或意见影响的品质。" +
                "<br><br>" +
                "(A) '偏见' 意味着对一个人或一群人的倾向或偏见，尤其是被认为不公平的方式。" +
                "<br><br>" +
                "(B) '偏袒' 意味着偏向某一事物或某人；偏爱。" +
                "<br><br>" +
                "(D) '主观性' 意味着基于或受个人感情、兴趣或意见影响的。"
    },
    {
        id: 5,
        question: "She felt a deep sense of __________ after lying to her friend, knowing she had betrayed their trust.",
        chinese_question: "在对朋友撒谎后，她感到深深的 __________，知道自己背叛了他们的信任。",
        answers: [
                { option: "A", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
                { option: "B", answer: "compunction", chinese_answer: "内疚", chinese_romanization: "nèijiù" },
                { option: "C", answer: "pride", chinese_answer: "骄傲", chinese_romanization: "jiāo'ào" },
                { option: "D", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'compunction' means a feeling of guilt or moral scruple that prevents or follows the doing of something bad." +
                "<br><br>" +
                "(A) 'satisfaction' means fulfillment of one's wishes, expectations, or needs." +
                "<br><br>" +
                "(C) 'pride' means a feeling or deep pleasure or satisfaction derived from one's own achievements." +
                "<br><br>" +
                "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(B) '内疚'一词意味着一种罪恶感或道德上的顾忌，它阻止或伴随做坏事。" +
                "<br><br>" +
                "(A) '满足' 意味着实现一个人的愿望、期望或需要。" +
                "<br><br>" +
                "(C) '骄傲' 意味着一种来自自己成就的深深的愉悦或满足感。" +
                "<br><br>" +
                "(D) '喜悦' 意味着一种极大的愉快和幸福感。"
    },
    {
        id: 6,
        question: "The __________ of creating a universal healthcare system was hotly debated among policymakers.",
        chinese_question: "创建全民医疗系统的 __________ 在政策制定者之间进行了激烈的辩论。",
        answers: [
                { option: "A", answer: "viability", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
                { option: "B", answer: "simplicity", chinese_answer: "简单性", chinese_romanization: "jiǎndān xìng" },
                { option: "C", answer: "clarity", chinese_answer: "清晰度", chinese_romanization: "qīngxī dù" },
                { option: "D", answer: "fragility", chinese_answer: "脆弱性", chinese_romanization: "cuìruò xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'viability' figuratively means the potential for continued success or feasibility." +
                "<br><br>" +
                "(B) 'simplicity' means the quality or condition of being easy to understand or do." +
                "<br><br>" +
                "(C) 'clarity' means the quality of being clear, in particular." +
                "<br><br>" +
                "(D) 'fragility' means the quality of being easily broken or damaged.",
        chinese_explanation: "(A) '可行性' 在此语境下意指继续成功或可行的潜力。" +
                "<br><br>" +
                "(B) '简单性' 意味着容易理解或做的质量或条件。" +
                "<br><br>" +
                "(C) '清晰度' 意味着清晰的质量，特别是。" +
                "<br><br>" +
                "(D) '脆弱性' 意味着容易破碎或损坏的质量。"
    },
    {
        id: 7,
        question: "Online security experts work to protect users from __________ who seek to steal personal information.",
        chinese_question: "网络安全专家致力于保护用户免受 __________ 窃取个人信息的威胁。",
        answers: [
            { option: "A", answer: "predators", chinese_answer: "掠夺者", chinese_romanization: "lüèduó zhě" },
            { option: "B", answer: "clients", chinese_answer: "客户", chinese_romanization: "kèhù" },
            { option: "C", answer: "developers", chinese_answer: "开发者", chinese_romanization: "kāifā zhě" },
            { option: "D", answer: "advertisers", chinese_answer: "广告商", chinese_romanization: "guǎnggào shāng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'predators' means people who ruthlessly exploit others." +
                "<br><br>" +
                "(B) 'clients' means people or organizations using the services of a professional person or company." +
                "<br><br>" +
                "(C) 'developers' means people or things that create something, especially software." +
                "<br><br>" +
                "(D) 'advertisers' means people or companies that promote products or services.",
        chinese_explanation: "(A) '掠夺者' 意味着无情地剥削他人的人。" +
                "<br><br>" +
                "(B) '客户' 意味着使用专业人员或公司的服务的人或组织。" +
                "<br><br>" +
                "(C) '开发者' 意味着创造某物的人或物，特别是软件。" +
                "<br><br>" +
                "(D) '广告商' 意味着推广产品或服务的人或公司。"
    },
    {
        id: 8,
        question: "His silence was a __________ that he was upset about the situation.",
        chinese_question: "他的沉默是他对情况感到不满的 __________。",
        answers: [
            { option: "A", answer: "scream", chinese_answer: "尖叫", chinese_romanization: "jiānjiào" },
            { option: "B", answer: "signal", chinese_answer: "信号", chinese_romanization: "xìnhào" },
            { option: "C", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "D", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'signal' means a gesture, action, or sound that is used to convey information or instructions." +
                "<br><br>" +
                "(A) 'scream' means to give a long, loud, piercing cry or cries expressing excitement, great emotion, or pain." +
                "<br><br>" +
                "(C) 'whisper' means to speak very softly using one's breath without one's vocal cords, especially for the sake of privacy." +
                "<br><br>" +
                "(D) 'cheer' means a shout of encouragement, praise, or joy.",
        chinese_explanation: "(B) '信号' 意味着用来传达信息或指示的手势、动作或声音。" +
                "<br><br>" +
                "(A) '尖叫' 意味着发出长而响亮的尖锐叫声，表达兴奋、强烈情感或疼痛。" +
                "<br><br>" +
                "(C) '低语' 意味着用气息轻声说话而不使用声带，尤其是为了隐私的目的。" +
                "<br><br>" +
                "(D) '欢呼' 意味着鼓励、赞美或喜悦的叫喊。"
    },
    {
        id: 9,
        question: "His speech was so full of __________ that even his supporters found it overly sentimental and unconvincing.",
        chinese_question: "他的演讲充满了 __________，甚至连他的支持者都觉得过于感伤且不可信。",
        answers: [
                { option: "A", answer: "substance", chinese_answer: "实质", chinese_romanization: "shízhì" },
                { option: "B", answer: "logic", chinese_answer: "逻辑", chinese_romanization: "luójí" },
                { option: "C", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchá lì" },
                { option: "D", answer: "treacle", chinese_answer: "甜腻", chinese_romanization: "tián nì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'treacle' figuratively means cloying sentimentality or flattery." +
                "<br><br>" +
                "(A) 'substance' means the quality of being important, valid, or significant." +
                "<br><br>" +
                "(B) 'logic' means reasoning conducted or assessed according to strict principles of validity." +
                "<br><br>" +
                "(C) 'insight' means the capacity to gain an accurate and deep understanding of someone or something.",
        chinese_explanation: "(D) '甜腻' 在此语境下意指令人厌腻的多愁善感或奉承。" +
                "<br><br>" +
                "(A) '实质' 意味着重要、有效或有意义的质量。" +
                "<br><br>" +
                "(B) '逻辑' 意味着根据严格的有效性原则进行或评估的推理。" +
                "<br><br>" +
                "(C) '洞察力' 意味着获得准确和深入理解某人或某事的能力。"
    },
    {
        id: 10,
        question: "The lawyer's __________ was evident when he used misleading statistics to sway the jury's opinion.",
        chinese_question: "律师的 __________ 很明显，当他使用误导性的统计数据来影响陪审团的意见时。",
        answers: [
                { option: "A", answer: "sophistry", chinese_answer: "诡辩", chinese_romanization: "guǐbiàn" },
                { option: "B", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
                { option: "C", answer: "straightforwardness", chinese_answer: "直率", chinese_romanization: "zhíshuài" },
                { option: "D", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sophistry' means the use of clever but false arguments, especially with the intention of deceiving." +
                "<br><br>" +
                "(B) 'honesty' means the quality of being honest." +
                "<br><br>" +
                "(C) 'straightforwardness' means the quality of being easy to understand or simple." +
                "<br><br>" +
                "(D) 'transparency' means the condition of being transparent.",
        chinese_explanation: "(A) '诡辩'一词意味着使用巧妙但虚假的论点，尤其是为了欺骗。" +
                "<br><br>" +
                "(B) '诚实' 意味着诚实的品质。" +
                "<br><br>" +
                "(C) '直率' 意味着容易理解或简单的品质。" +
                "<br><br>" +
                "(D) '透明' 意味着透明的条件。"
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
