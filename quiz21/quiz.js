// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Despite forecasts of storms, the weather turned out to be __________, with clear skies and mild temperatures, allowing the outdoor event to proceed without any disruptions.",
        chinese_question: "尽管天气预报有暴风雨，但天气却__________，天空晴朗，气温温和，让户外活动顺利进行，没有任何干扰。",
        answers: [
                { option: "A", answer: "cruel", chinese_answer: "残忍的", chinese_romanization: "cánrěn de" },
                { option: "B", answer: "ruthless", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
                { option: "C", answer: "merciful", chinese_answer: "仁慈的", chinese_romanization: "réncí de" },
                { option: "D", answer: "unforgiving", chinese_answer: "不宽恕的", chinese_romanization: "bù kuānshù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'merciful' means showing compassion or forgiveness in judging or punishing; lenient. Figuratively, it can mean being kind or favorable." + 
            "<br><br>" + 
            "(A) 'cruel' means willfully causing pain or suffering to others, or feeling no concern about it." + 
            "<br><br>" + 
            "(B) 'ruthless' means having or showing no pity or compassion for others." + 
            "<br><br>" + 
            "(D) 'unforgiving' means not willing to forgive or excuse people's faults or wrongdoings.",
        chinese_explanation: "(C) '仁慈的'一词意味着在判断或惩罚时表现出同情或宽恕的；宽大的。比喻地，它可以表示善良或有利的。" +
            "<br><br>" +
            "(A) '残忍的' 意味着故意对他人造成痛苦或痛苦，或不关心它。" +
            "<br><br>" +
            "(B) '无情的' 意味着没有或不表现出对他人的怜悯或同情的。" +
            "<br><br>" +
            "(D) '不宽恕的' 意味着不愿意原谅或宽恕他人的过错或错误行为的."
    },
    {
        id: 2,
        question: "Knowing the odds were against him, he had only a __________ hope of winning the lottery, but he bought a ticket anyway.",
        chinese_question: "知道胜算不大，他对赢得彩票的希望很 __________，但还是买了一张票。",
        answers: [
            { option: "A", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "B", answer: "strong", chinese_answer: "强烈的", chinese_romanization: "qiángliè de" },
            { option: "C", answer: "vivid", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" },
            { option: "D", answer: "faint", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'faint' means barely perceptible; weak and dim. Figuratively, it can mean very slight or remote." + 
            "<br><br>" +
            "(A) 'bright' means giving out or reflecting a lot of light; shining." +
            "<br><br>" +
            "(B) 'strong' means having great physical power or strength." +
            "<br><br>" +
            "(C) 'vivid' means producing powerful feelings or strong, clear images in the mind.",
        chinese_explanation: "(D) '微弱的'一词意味着几乎不可察觉的；微弱和昏暗的。比喻地，它可以表示非常轻微或遥远的。" + 
            "<br><br>" +
            "(A) '明亮的' 意味着发出或反射大量光线的；闪耀的。" +
            "<br><br>" +
            "(B) '强烈的' 意味着具有强大体力或力量的。" +
            "<br><br>" +
            "(C) '生动的' 意味着产生强烈感情或强烈、清晰的图像的。"
    },
    {
        id: 3,
        question: "The patient complained of __________ headaches that occurred several times a week.",
        chinese_question: "病人抱怨 __________ 的头痛，每周发生几次。",
        answers: [
            { option: "A", answer: "infrequent", chinese_answer: "不频繁的", chinese_romanization: "bù pínfán de" },
            { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
            { option: "C", answer: "recurrent", chinese_answer: "反复出现的", chinese_romanization: "fǎnfù chūxiàn de" },
            { option: "D", answer: "rare", chinese_answer: "罕见的", chinese_romanization: "hǎnjiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'recurrent' means occurring often or repeatedly." +
                "<br><br>" +
                "(A) 'infrequent' means not occurring often." +
                "<br><br>" +
                "(B) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
                "<br><br>" +
                "(D) 'rare' means not occurring very often.",
        chinese_explanation: "(C) '反复出现的' 一词意味着经常或反复发生的。" +
                "<br><br>" +
                "(A) '不频繁的' 意味着不经常发生的。" +
                "<br><br>" +
                "(B) '偶尔的' 意味着不经常和不规律地发生、出现或完成的。" +
                "<br><br>" +
                "(D) '罕见的' 意味着不经常发生的。"
    },
    {
        id: 4,
        question: "Despite the chaos around her, she remained __________ and calm, making clear-headed decisions.",
        chinese_question: "尽管周围一片混乱，她依然保持__________和冷静，做出头脑清晰的决定。",
        answers: [
            { option: "A", answer: "irrational", chinese_answer: "非理性的", chinese_romanization: "fēi lǐxìng de" },
            { option: "B", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
            { option: "C", answer: "rational", chinese_answer: "理性的", chinese_romanization: "lǐxìng de" },
            { option: "D", answer: "emotional", chinese_answer: "情感的", chinese_romanization: "qínggǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'rational' means based on or in accordance with reason or logic. Figuratively, it can mean being clear-headed and reasonable in challenging situations." +
            "<br><br>" +
            "(A) 'irrational' means not logical or reasonable." +
            "<br><br>" +
            "(B) 'impulsive' means acting or done without forethought." +
            "<br><br>" +
            "(D) 'emotional' means showing strong feelings.",
        chinese_explanation: "(C) '理性的'一词意味着基于或符合理性或逻辑的。比喻地，它可以表示在挑战情况下头脑清晰和合理的。" +
            "<br><br>" +
            "(A) '非理性的' 意味着不合逻辑或不合理的。" +
            "<br><br>" +
            "(B) '冲动的' 意味着未经深思熟虑而做的。" +
            "<br><br>" +
            "(D) '情感的' 意味着表现出强烈的感情."

    },
    {
        id: 5,
        question: "Her explanation was so __________, with detailed examples and thorough clarifications, that it left no room for questions or doubts.",
        chinese_question: "她的解释非常__________，包括详细的例子和彻底的澄清，没有留下任何问题或疑问的余地。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "C", answer: "basic", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
            { option: "D", answer: "elaborate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'elaborate' means involving many carefully arranged parts or details; detailed and complicated in design and planning. Figuratively, it can mean being very thorough and comprehensive." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(C) 'basic' means forming an essential foundation or starting point; fundamental.",
        chinese_explanation: "(D) '精致的' 一词意味着涉及许多精心安排的部分或细节；设计和计划详尽且复杂的。比喻地，它可以表示非常彻底和全面的。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成；没有难度的。" +
            "<br><br>" +
            "(B) '朴素的' 意味着没有装饰或精致的；简单或普通的。" +
            "<br><br>" +
            "(C) '基本的' 意味着形成基本的基础或起点的；基本的。"
    },
    {
        id: 6,
        question: "The __________ corruption within the government, affecting every department and official and evident in all levels of administration, has led to widespread distrust among the citizens.",
        chinese_question: "政府内 __________ 的腐败，影响到每个部门和官员，并在所有行政层级中显而易见，导致了公民广泛的不信任。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "C", answer: "pervasive", chinese_answer: "弥漫的", chinese_romanization: "mímàn de" },
            { option: "D", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pervasive' means spreading widely throughout an area or a group of people." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(D) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated.",
        chinese_explanation: "(C) '弥漫的' 意味着广泛传播到一个地区或一群人中。" +
            "<br><br>" +
            "(A) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(B) '有限的' 意味着在大小、数量或范围上受到限制。" +
            "<br><br>" +
            "(D) '零星的' 意味着在不规则的间隔发生或只在少数地方发生的；分散或孤立的."
    },
    {
        id: 7,
        question: "Their relationship was __________ and supportive, full of mutual respect and understanding.",
        chinese_question: "他们的关系非常__________且相互支持，充满了相互尊重和理解。",
        answers: [
            { option: "A", answer: "discordant", chinese_answer: "不和谐的", chinese_romanization: "bù héxié de" },
            { option: "B", answer: "harmonious", chinese_answer: "和谐的", chinese_romanization: "héxié de" },
            { option: "C", answer: "haphazard", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" },
            { option: "D", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'harmonious' means forming a pleasing or consistent whole. Figuratively, it can mean being in agreement and friendly." + 
            "<br><br>" +
            "(A) 'discordant' means disagreeing or incongruous." +
            "<br><br>" +
            "(C) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(D) 'chaotic' means in a state of complete confusion and disorder.",
        chinese_explanation: "(B) '和谐的'一词意味着形成一个令人愉快或一致的整体。比喻地，它可以表示一致和友好的。" + 
            "<br><br>" +
            "(A) '不和谐的' 意味着不同意或不协调的。" +
            "<br><br>" +
            "(C) '杂乱的' 意味着缺乏任何明显的组织原则的。" +
            "<br><br>" +
            "(D) '混乱的' 意味着处于完全混乱和无序的状态。"
    },
    {
        id: 8,
        question: "The __________ greed of the company executives, prioritizing profit over employee well-being, outraged the public.",
        chinese_question: "公司高管的 __________ 贪婪，优先考虑利润而非员工福祉，引起了公众的愤怒。",
        answers: [
            { option: "A", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "B", answer: "selfless", chinese_answer: "无私的", chinese_romanization: "wúsī de" },
            { option: "C", answer: "nauseating", chinese_answer: "令人作呕的", chinese_romanization: "lìngrén zuò'ǒu de" },
            { option: "D", answer: "altruistic", chinese_answer: "利他的", chinese_romanization: "lìtā de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nauseating' means causing a feeling of nausea or disgust." +
            "<br><br>" +
            "(A) 'generous' means showing a readiness to give more of something, as money or time, than is strictly necessary or expected." +
            "<br><br>" +
            "(B) 'selfless' means concerned more with the needs and wishes of others than with one's own." +
            "<br><br>" +
            "(D) 'altruistic' means showing a disinterested and selfless concern for the well-being of others.",
        chinese_explanation: "(C) '令人作呕的' 意味着引起恶心或厌恶的。" +
            "<br><br>" +
            "(A) '慷慨的' 意味着准备多给一些东西，如金钱或时间，超过必要或预期的。" +
            "<br><br>" +
            "(B) '无私的' 意味着更多地关心他人的需求和愿望而不是自己的。" +
            "<br><br>" +
            "(D) '利他的' 意味着表现出对他人福祉的无私关心的."
    },
    {
        id: 9,
        question: "His __________ approach to spending meant that he rarely bought anything new, preferring to save money wherever possible.",
        chinese_question: "他 __________ 的消费方式意味着他很少买新东西，更喜欢尽可能地省钱。",
        answers: [
            { option: "A", answer: "parsimonious", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "B", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "C", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
            { option: "D", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'parsimonious' means unwilling to spend money or use resources; stingy or frugal." +
            "<br><br>" +
            "(B) 'generous' means showing a readiness to give more of something, as money or time, than is strictly necessary or expected." +
            "<br><br>" +
            "(C) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(D) 'extravagant' means lacking restraint in spending money or using resources.",
        chinese_explanation: "(A) '吝啬的' 意味着不愿花钱或使用资源；吝啬或节俭的。" +
            "<br><br>" +
            "(B) '慷慨的' 意味着准备给予比严格必要或预期更多的东西，如金钱或时间。" +
            "<br><br>" +
            "(C) '浪费的' 意味着不小心、奢侈或无目的地使用或消耗有价值的东西。" +
            "<br><br>" +
            "(D) '奢侈的' 意味着在花钱或使用资源上缺乏克制的。"
    },
    {
        id: 10,
    question: "His __________ efforts to improve the community, such as organizing clean-up drives and setting up neighborhood watch programs, earned him great respect from his neighbors.",
    chinese_question: "他 __________ 的努力改善社区，例如组织清洁活动和建立邻里守望计划，赢得了邻居们的尊敬。",
    answers: [
        { option: "A", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
        { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "gallant", chinese_answer: "英勇", chinese_romanization: "yīngyǒng" },
        { option: "D", answer: "uncaring", chinese_answer: "无情", chinese_romanization: "wúqíng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'gallant' means showing courage and bravery." +
        "<br><br>" +
        "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'uncaring' means not displaying sympathy or concern for others.",
    chinese_explanation: "(C) '英勇' 意味着表现出勇气和勇敢。" +
        "<br><br>" +
        "(A) '自私' 意味着缺乏对他人的考虑；主要关心个人利益或快乐。" +
        "<br><br>" +
        "(B) '冷漠' 意味着没有特别的兴趣或同情；不关心。" +
        "<br><br>" +
        "(D) '无情' 意味着不表现出同情或关心他人。"
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
