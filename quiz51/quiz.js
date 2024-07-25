// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ smile hinted at the playful secrets she kept, always ready for a lighthearted joke.",
        chinese_question: "她 __________ 的微笑暗示着她保守的顽皮秘密，总是准备好一个轻松的笑话。",
        answers: [
            { option: "A", answer: "stern", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "B", answer: "mischievous", chinese_answer: "调皮的", chinese_romanization: "tiáopí de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mischievous' means playfully causing trouble or being cheeky." +
                "<br><br>" +
                "(A) 'stern' means serious and unrelenting, especially in the assertion of authority and exercise of discipline." +
                "<br><br>" +
                "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
                "<br><br>" +
                "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '调皮的' 意味着顽皮地惹麻烦或厚颜无耻。" +
                "<br><br>" +
                "(A) '严厉的' 意味着严肃且不妥协的，特别是在行使权威和纪律时。" +
                "<br><br>" +
                "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
                "<br><br>" +
                "(D) '无动于衷的' 意味着表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 2,
        question: "Her __________ personality made her the center of attention at every gathering, with everyone drawn to her lively presence.",
        chinese_question: "她 __________ 的个性使她在每次聚会上成为关注的焦点，大家都被她充满活力的存在所吸引。",
        answers: [
            { option: "A", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "B", answer: "flamboyant", chinese_answer: "炫耀的", chinese_romanization: "xuànyào de" },
            { option: "C", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" },
            { option: "D", answer: "shy", chinese_answer: "害羞的", chinese_romanization: "hàixiū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness." +
            "<br><br>" +
            "(A) 'timid' means showing a lack of courage or confidence; easily frightened." +
            "<br><br>" +
            "(C) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(D) 'shy' means being reserved or having or showing nervousness or timidity in the company of other people.",
        chinese_explanation: "(B) '炫耀的' 意味着因其热情、自信和时尚而吸引注意力。" +
            "<br><br>" +
            "(A) '胆小的' 意味着缺乏勇气或信心；容易受惊的。" +
            "<br><br>" +
            "(C) '矜持的' 意味着慢于表达情感或观点。" +
            "<br><br>" +
            "(D) '害羞的' 意味着在他人面前表现出保留或紧张、胆怯。"
    },
    {
        id: 3,
        question: "His __________ instincts kicked in whenever he saw someone being treated unfairly.",
        chinese_question: "每当他看到有人受到不公平对待时，他的 __________ 本能就会被激发。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wú dòng yú zhōng de" },
            { option: "C", answer: "protective", chinese_answer: "保护的", chinese_romanization: "bǎohù de" },
            { option: "D", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'protective' means intended to protect someone or something." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure.",
        chinese_explanation: "(C) '保护的' 意味着旨在保护某人或某物的。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有特别兴趣或同情的；不关心的。" +
            "<br><br>" +
            "(B) '无动于衷的' 意味着表现出或感到没有兴趣、热情或关心的。" +
            "<br><br>" +
            "(D) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐的."
    },
    {
        id: 4,
        question: "The community was __________ by the news of the sudden closure of the local library, a vital resource for many.",
        chinese_question: "社区听到当地图书馆突然关闭的消息感到非常 __________，这是许多人的重要资源。",
        answers: [
            { option: "A", answer: "heartened", chinese_answer: "鼓舞的", chinese_romanization: "gǔwǔ de" },
            { option: "B", answer: "dismayed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "C", answer: "delighted", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "D", answer: "thrilled", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dismayed' means feeling distress or alarm." +
            "<br><br>" +
            "(A) 'heartened' means make more cheerful or confident." +
            "<br><br>" +
            "(C) 'delighted' means feeling or showing great pleasure." +
            "<br><br>" +
            "(D) 'thrilled' means feeling intense excitement.",
        chinese_explanation: "(B) '沮丧的' 意味着感到困扰或惊慌。" +
            "<br><br>" +
            "(A) '鼓舞的' 意味着变得更加愉快或自信。" +
            "<br><br>" +
            "(C) '高兴的' 意味着感到或表现出极大的快乐。" +
            "<br><br>" +
            "(D) '兴奋的' 意味着感到强烈的兴奋。"
    },
    {
        id: 5,
        question: "She showed a __________ determination to succeed despite numerous obstacles.",
        chinese_question: "尽管遇到许多障碍，她表现出 __________ 的决心去成功。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "B", answer: "flimsy", chinese_answer: "轻薄的", chinese_romanization: "qīngbáo de" },
            { option: "C", answer: "sturdy", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sturdy' means having resolute determination." +
            "<br><br>" +
            "(A) 'weak' means lacking physical strength or vigor." +
            "<br><br>" +
            "(B) 'flimsy' means comparatively light and insubstantial; easily damaged." +
            "<br><br>" +
            "(D) 'fragile' means easily broken or damaged.",
        chinese_explanation: "(C) '坚定的' 意味着有坚定的决心。" +
            "<br><br>" +
            "(A) '虚弱的' 意味着缺乏体力或活力。" +
            "<br><br>" +
            "(B) '轻薄的' 意味着比较轻且不牢固；容易损坏。" +
            "<br><br>" +
            "(D) '脆弱的' 意味着容易破碎或损坏。"
    },
    {
        id: 6,
        question: "Her __________ performance on stage captivated the audience and earned her a standing ovation.",
        chinese_question: "她在舞台上的 __________ 表演吸引了观众，并赢得了全场起立鼓掌。",
        answers: [
            { option: "A", answer: "mediocre", chinese_answer: "平庸", chinese_romanization: "píngyōng" },
            { option: "B", answer: "unimpressive", chinese_answer: "不起眼", chinese_romanization: "bù qǐyǎn" },
            { option: "C", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" },
            { option: "D", answer: "dazzling", chinese_answer: "耀眼", chinese_romanization: "yàoyǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'dazzling' means extremely impressive, skillful, or beautiful." +
            "<br><br>" +
            "(A) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(B) 'unimpressive' means not arousing admiration or respect." +
            "<br><br>" +
            "(C) 'average' means having qualities that are seen as typical of a particular person, group, or thing.",
        chinese_explanation: "(D) '耀眼' 意味着极其令人印象深刻、技巧高超或美丽。" +
            "<br><br>" +
            "(A) '平庸' 意味着质量一般；不太好。" +
            "<br><br>" +
            "(B) '不起眼' 意味着不引起钦佩或尊重。" +
            "<br><br>" +
            "(C) '平均' 意味着具有被视为某特定人、群体或事物的典型特征。"
    },
    {
        id: 7,
        question: "With genuine compassion becoming increasingly __________, finding true kindness can feel like a rare gift.",
        chinese_question: "随着真正的同情心变得越来越 __________，找到真正的善良感觉就像是一份稀有的礼物。",
        answers: [
            { option: "A", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "B", answer: "scarce", chinese_answer: "稀缺的", chinese_romanization: "xīquē de" },
            { option: "C", answer: "widespread", chinese_answer: "广泛的", chinese_romanization: "guǎngfàn de" },
            { option: "D", answer: "frequent", chinese_answer: "频繁的", chinese_romanization: "pínfán de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scarce' means insufficient for the demand; rare." +
            "<br><br>" +
            "(A) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(C) 'widespread' means found or distributed over a large area or number of people." +
            "<br><br>" +
            "(D) 'frequent' means occurring or done on many occasions, in many cases, or in quick succession.",
        chinese_explanation: "(B) '稀缺的' 意味着需求不足的；稀有的。" +
            "<br><br>" +
            "(A) '常见的' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(C) '广泛的' 意味着在大面积或大量的人群中发现或分布的。" +
            "<br><br>" +
            "(D) '频繁的' 意味着在许多场合发生、在许多情况下发生或在短时间内连续发生的."
    },
    {
        id: 8,
        question: "The election was a __________ event in the country’s history, bringing about significant changes in governance and policy.",
        chinese_question: "这次选举是该国历史上的一个 __________ 事件，带来了治理和政策上的重大变化。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "可忽略的", chinese_romanization: "kě hūlüè de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "monumental", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'monumental' means great in importance, extent, or size." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '重要的' 意味着在重要性、范围或规模上非常大的。" +
            "<br><br>" +
            "(A) '可忽略的' 意味着小到或不重要，不值得考虑的。" +
            "<br><br>" +
            "(B) '次要的' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着价值或重要性很小的."
    },
    {
        id: 9,
        question: "The company prides itself on having an __________ work environment, where everyone feels valued regardless of their background.",
        chinese_question: "公司以其 __________ 的工作环境为荣，在这里每个人都感到被重视，无论他们的背景如何。",
        answers: [
            { option: "A", answer: "exclusive", chinese_answer: "排外的", chinese_romanization: "páiwài de" },
            { option: "B", answer: "segregated", chinese_answer: "分离的", chinese_romanization: "fēnlí de" },
            { option: "C", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "D", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'inclusive' means not excluding any section of society or any party involved in something." +
            "<br><br>" +
            "(A) 'exclusive' means excluding or not admitting other things." +
            "<br><br>" +
            "(B) 'segregated' means set apart from the rest or from each other; isolate or divide." +
            "<br><br>" +
            "(C) 'biased' means unfairly prejudiced for or against someone or something.",
        chinese_explanation: "(D) '包容的' 意味着不排斥社会的任何部分或参与其中的任何一方。" +
            "<br><br>" +
            "(A) '排外的' 意味着排斥或不承认其他事物的。" +
            "<br><br>" +
            "(B) '分离的' 意味着与其他部分分开或隔离的。" +
            "<br><br>" +
            "(C) '有偏见的' 意味着对某人或某事物不公平地有偏见的。"
    },
    {
        id: 10,
    question: "Her chances of winning the competition seemed __________, given the tough competition she faced.",
    chinese_question: "鉴于她面临的激烈竞争，她赢得比赛的机会似乎很__________。",
    answers: [
        { option: "A", answer: "accessible", chinese_answer: "可达的", chinese_romanization: "kědá de" },
        { option: "B", answer: "nearby", chinese_answer: "附近的", chinese_romanization: "fùjìn de" },
        { option: "C", answer: "remote", chinese_answer: "渺茫的", chinese_romanization: "miǎománg de" },
        { option: "D", answer: "close", chinese_answer: "近的", chinese_romanization: "jìn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'remote' means situated far from the main centers of population; distant. Figuratively, it can mean being unlikely or improbable." +
        "<br><br>" +
        "(A) 'accessible' means able to be reached or entered." +
        "<br><br>" +
        "(B) 'nearby' means close at hand; not far away." +
        "<br><br>" +
        "(D) 'close' means a short distance away or apart in space or time.",
    chinese_explanation: "(C) '渺茫的'一词意味着远离主要人口中心的；遥远的。比喻地，它可以表示不大可能或不可能的。" +
        "<br><br>" +
        "(A) '可达的' 意味着能够到达或进入的。" +
        "<br><br>" +
        "(B) '附近的' 意味着在手边的；不远的。" +
        "<br><br>" +
        "(D) '近的' 意味着在空间或时间上距离短的。"
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
