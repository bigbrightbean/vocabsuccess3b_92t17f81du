// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ at the formal dinner included speaking loudly and using her phone at the table.",
        chinese_question: "她在正式晚宴上的 __________ 包括大声讲话和在餐桌上使用手机。",
        answers: [
                { option: "A", answer: "decorum", chinese_answer: "礼仪", chinese_romanization: "lǐyí" },
                { option: "B", answer: "impropriety", chinese_answer: "不当行为", chinese_romanization: "bùdàng xíngwéi" },
                { option: "C", answer: "etiquette", chinese_answer: "礼节", chinese_romanization: "lǐjié" },
                { option: "D", answer: "politeness", chinese_answer: "礼貌", chinese_romanization: "lǐmào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impropriety' means improper behavior or inappropriate conduct." +
                "<br><br>" +
                "(A) 'decorum' means behavior in keeping with good taste and propriety." +
                "<br><br>" +
                "(C) 'etiquette' means the customary code of polite behavior in society or among members of a particular profession or group." +
                "<br><br>" +
                "(D) 'politeness' means behavior that is respectful and considerate of other people.",
        chinese_explanation: "(B) '不当行为' 意味着不适当的行为或不恰当的举止。" +
                "<br><br>" +
                "(A) '礼仪' 意味着符合品味和礼仪的行为。" +
                "<br><br>" +
                "(C) '礼节' 意味着在社会中或某一特定职业或群体中遵守的礼貌行为的惯例。" +
                "<br><br>" +
                "(D) '礼貌' 意味着尊重和体谅他人的行为。"
    },
    {
        id: 2,
        question: "The siblings' __________ was light-hearted and filled with teasing and playful banter that entertained everyone around them.",
        chinese_question: "兄弟姐妹之间的 __________ 很轻松，充满了戏谑和玩笑，逗乐了周围的每一个人。",
        answers: [
                { option: "A", answer: "solemnity", chinese_answer: "严肃", chinese_romanization: "yánsù" },
                { option: "B", answer: "persiflage", chinese_answer: "打趣", chinese_romanization: "dǎqù" },
                { option: "C", answer: "tension", chinese_answer: "紧张", chinese_romanization: "jǐnzhāng" },
                { option: "D", answer: "hostility", chinese_answer: "敌意", chinese_romanization: "díyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'persiflage' means light and slightly contemptuous mockery or banter." +
                "<br><br>" +
                "(A) 'solemnity' means the state or quality of being serious and dignified." +
                "<br><br>" +
                "(C) 'tension' means mental or emotional strain." +
                "<br><br>" +
                "(D) 'hostility' means unfriendliness or opposition.",
        chinese_explanation: "(B) '打趣'一词意味着轻松且略带轻蔑的嘲弄或玩笑。" +
                "<br><br>" +
                "(A) '严肃' 意味着严肃和庄重的状态或质量。" +
                "<br><br>" +
                "(C) '紧张' 意味着精神或情感上的紧张。" +
                "<br><br>" +
                "(D) '敌意' 意味着不友好或对立。"
    },
    {
        id: 3,
        question: "His __________ often got him into trouble, as he would act without thinking through the consequences.",
        chinese_question: "他的 __________ 经常让他陷入麻烦，因为他会在不考虑后果的情况下行动。",
        answers: [
                { option: "A", answer: "patience", chinese_answer: "耐心", chinese_romanization: "nàixīn" },
                { option: "B", answer: "caution", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
                { option: "C", answer: "impetuosity", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
                { option: "D", answer: "thoughtfulness", chinese_answer: "周到", chinese_romanization: "zhōudào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impetuosity' means the quality of being impulsive or acting without careful thought." +
                "<br><br>" +
                "(A) 'patience' means the capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset." +
                "<br><br>" +
                "(B) 'caution' means care taken to avoid danger or mistakes." +
                "<br><br>" +
                "(D) 'thoughtfulness' means the state of being considerate or showing careful thought.",
        chinese_explanation: "(C) '冲动'一词意味着冲动或不经仔细思考而行动的品质。" +
                "<br><br>" +
                "(A) '耐心' 意味着接受或忍受延迟、麻烦或痛苦而不生气或沮丧的能力。" +
                "<br><br>" +
                "(B) '谨慎' 意味着采取的避免危险或错误的措施。" +
                "<br><br>" +
                "(D) '周到' 意味着体贴或表现出仔细思考的状态。"
    },
    {
        id: 4,
        question: "Her __________ about the upcoming exams surprised everyone, considering how seriously she usually took her studies.",
        chinese_question: "考虑到她平时对学习的认真态度，她对即将到来的考试表现出的 __________ 让大家感到惊讶。",
        answers: [
                { option: "A", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
                { option: "B", answer: "insouciance", chinese_answer: "漫不经心", chinese_romanization: "mànbùjīngxīn" },
                { option: "C", answer: "seriousness", chinese_answer: "认真", chinese_romanization: "rènzhēn" },
                { option: "D", answer: "preparation", chinese_answer: "准备", chinese_romanization: "zhǔnbèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'insouciance' means casual lack of concern; indifference." +
                "<br><br>" +
                "(A) 'diligence' means careful and persistent work or effort." +
                "<br><br>" +
                "(C) 'seriousness' means the quality or state of being serious." +
                "<br><br>" +
                "(D) 'preparation' means the action or process of making ready or being made ready for use or consideration.",
        chinese_explanation: "(B) '漫不经心'一词意味着随意缺乏关心；冷漠。" +
                "<br><br>" +
                "(A) '勤奋' 意味着认真和持续的工作或努力。" +
                "<br><br>" +
                "(C) '认真' 意味着严肃的状态或质量。" +
                "<br><br>" +
                "(D) '准备' 意味着准备或准备使用或考虑的行为或过程。"
    },
    {
        id: 5,
        question: "His kind words acted as an __________, easing the tension and calming everyone in the room.",
        chinese_question: "他亲切的话语起到了 __________ 的作用，缓解了紧张气氛并使房间里的人平静下来。",
        answers: [
                { option: "A", answer: "irritant", chinese_answer: "刺激物", chinese_romanization: "cìjī wù" },
                { option: "B", answer: "stimulant", chinese_answer: "兴奋剂", chinese_romanization: "xīngfèn jì" },
                { option: "C", answer: "deterrent", chinese_answer: "威慑", chinese_romanization: "wēishè" },
                { option: "D", answer: "emollient", chinese_answer: "润肤剂", chinese_romanization: "rùnfū jì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'emollient' means having the quality of softening or soothing." +
                "<br><br>" +
                "(A) 'irritant' means something that causes slight inflammation or other discomfort." +
                "<br><br>" +
                "(B) 'stimulant' means a substance that raises levels of physiological or nervous activity in the body." +
                "<br><br>" +
                "(C) 'deterrent' means something that discourages or is intended to discourage someone from doing something.",
        chinese_explanation: "(D) '润肤剂'一词意味着具有软化或舒缓品质的物质。" +
                "<br><br>" +
                "(A) '刺激物' 意味着引起轻微炎症或其他不适的东西。" +
                "<br><br>" +
                "(B) '兴奋剂' 意味着一种提高体内生理或神经活动水平的物质。" +
                "<br><br>" +
                "(C) '威慑' 意味着阻止或旨在阻止某人做某事的东西。"
    },
    {
        id: 6,
        question: "The __________ of the partnership left both parties scrambling to find new business opportunities.",
        chinese_question: "合作关系的 __________ 使双方都急于寻找新的商业机会。",
        answers: [
                { option: "A", answer: "creation", chinese_answer: "创建", chinese_romanization: "chuàngjiàn" },
                { option: "B", answer: "dissolution", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
                { option: "C", answer: "formation", chinese_answer: "形成", chinese_romanization: "xíngchéng" },
                { option: "D", answer: "establishment", chinese_answer: "建立", chinese_romanization: "jiànlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissolution' means the closing down or dismissal of an assembly, partnership, or official body." +
                "<br><br>" +
                "(A) 'creation' means the action or process of bringing something into existence." +
                "<br><br>" +
                "(C) 'formation' means the action of forming or process of being formed." +
                "<br><br>" +
                "(D) 'establishment' means the action of establishing something.",
        chinese_explanation: "(B) '解散'一词意味着关闭或解散一个集会、合伙或官方机构。" +
                "<br><br>" +
                "(A) '创建' 意味着带来某物存在的行动或过程。" +
                "<br><br>" +
                "(C) '形成' 意味着形成的行动或过程。" +
                "<br><br>" +
                "(D) '建立' 意味着建立某物的行动。"
    },
    {
        id: 7,
        question: "The __________ spread by the competitor was meant to tarnish the company's reputation and drive away its clients.",
        chinese_question: "竞争对手散布的 __________ 旨在玷污公司的声誉并驱赶其客户。",
        answers: [
                { option: "A", answer: "accolade", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
                { option: "B", answer: "endorsement", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "recognition", chinese_answer: "认可", chinese_romanization: "rènkě" },
                { option: "D", answer: "calumny", chinese_answer: "诽谤", chinese_romanization: "fěibàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'calumny' means the making of false and defamatory statements about someone in order to damage their reputation; slander." +
                "<br><br>" +
                "(A) 'accolade' means an award or privilege granted as a special honor or as an acknowledgment of merit." +
                "<br><br>" +
                "(B) 'endorsement' means an act of giving one's public approval or support to someone or something." +
                "<br><br>" +
                "(C) 'recognition' means the action or process of recognizing or being recognized, in particular.",
        chinese_explanation: "(D) '诽谤'一词意味着为了损害某人的名誉而进行的虚假和诽谤性陈述；诋毁。" +
                "<br><br>" +
                "(A) '荣誉' 意味着作为特别荣誉或承认功绩而授予的奖项或特权。" +
                "<br><br>" +
                "(B) '支持' 意味着公开表示同意或支持某人或某事的行为。" +
                "<br><br>" +
                "(C) '认可' 意味着识别或被识别的行为或过程。"
    },
    {
        id: 8,
        question: "Her lack of experience proved to be an __________ in securing a managerial position within the company.",
        chinese_question: "她缺乏经验证明是她在公司内获得管理职位的一个 __________。",
        answers: [
                { option: "A", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
                { option: "B", answer: "impediment", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
                { option: "C", answer: "asset", chinese_answer: "资产", chinese_romanization: "zīchǎn" },
                { option: "D", answer: "opportunity", chinese_answer: "机会", chinese_romanization: "jīhuì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impediment' means a hindrance or obstruction in doing something." +
                "<br><br>" +
                "(A) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." +
                "<br><br>" +
                "(C) 'asset' means a useful or valuable thing, person, or quality." +
                "<br><br>" +
                "(D) 'opportunity' means a set of circumstances that makes it possible to do something.",
        chinese_explanation: "(B) '障碍'一词意味着做某事的障碍或阻碍。" +
                "<br><br>" +
                "(A) '优势' 意味着使某人处于有利或优越地位的条件或环境。" +
                "<br><br>" +
                "(C) '资产' 意味着有用或有价值的东西、人物或品质。" +
                "<br><br>" +
                "(D) '机会' 意味着使做某事成为可能的一系列情况。"
    },
    {
        id: 9,
        question: "His art, influenced by __________, often portrayed a bleak and meaningless existence.",
        chinese_question: "他的艺术受 __________ 影响，常常描绘出一个暗淡而无意义的存在。",
        answers: [
                { option: "A", answer: "nihilism", chinese_answer: "虚无主义", chinese_romanization: "xūwú zhǔyì" },
                { option: "B", answer: "romanticism", chinese_answer: "浪漫主义", chinese_romanization: "làngmàn zhǔyì" },
                { option: "C", answer: "impressionism", chinese_answer: "印象主义", chinese_romanization: "yìnxiàng zhǔyì" },
                { option: "D", answer: "classicism", chinese_answer: "古典主义", chinese_romanization: "gǔdiǎn zhǔyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'nihilism' means the rejection of all religious and moral principles, often in the belief that life is meaningless." +
                "<br><br>" +
                "(B) 'romanticism' means a movement in the arts and literature emphasizing inspiration, subjectivity, and the primacy of the individual." +
                "<br><br>" +
                "(C) 'impressionism' means a style or movement in painting originating in France in the 1860s, characterized by a concern with depicting the visual impression of the moment, especially in terms of the shifting effect of light and color." +
                "<br><br>" +
                "(D) 'classicism' means the following of ancient Greek or Roman principles and style in art and literature, generally associated with harmony, restraint, and adherence to recognized standards of form and craftsmanship.",
        chinese_explanation: "(A) '虚无主义' 意味着拒绝所有宗教和道德原则，通常相信生活是没有意义的。" +
                "<br><br>" +
                "(B) '浪漫主义' 意味着艺术和文学中的一种运动，强调灵感、主观性和个体的首要性。" +
                "<br><br>" +
                "(C) '印象主义' 意味着起源于19世纪60年代法国的一种绘画风格或运动，以描绘瞬间的视觉印象为特征，特别是光和色的变化效果。" +
                "<br><br>" +
                "(D) '古典主义' 意味着遵循古希腊或古罗马艺术和文学中的原则和风格，通常与和谐、克制和遵守公认的形式和工艺标准有关。"
    },
    {
        id: 10,
        question: "The employee's __________ in handling confidential information led to a security breach.",
        chinese_question: "员工在处理机密信息时的 __________ 导致了安全漏洞。",
        answers: [
                { option: "A", answer: "diligence", chinese_answer: "勤勉", chinese_romanization: "qínmiǎn" },
                { option: "B", answer: "impropriety", chinese_answer: "不当行为", chinese_romanization: "bùdàng xíngwéi" },
                { option: "C", answer: "caution", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
                { option: "D", answer: "accuracy", chinese_answer: "准确", chinese_romanization: "zhǔnquè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impropriety' means improper behavior or inappropriate conduct." +
                "<br><br>" +
                "(A) 'diligence' means careful and persistent work or effort." +
                "<br><br>" +
                "(C) 'caution' means care taken to avoid danger or mistakes." +
                "<br><br>" +
                "(D) 'accuracy' means the quality or state of being correct or precise.",
        chinese_explanation: "(B) '不当行为' 意味着不适当的行为或不恰当的举止。" +
                "<br><br>" +
                "(A) '勤勉' 意味着细心和持之以恒的工作或努力。" +
                "<br><br>" +
                "(C) '谨慎' 意味着避免危险或错误的谨慎态度。" +
                "<br><br>" +
                "(D) '准确' 意味着正确或精确的质量或状态。"
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
