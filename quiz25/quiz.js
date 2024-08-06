// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ approach to problem-solving involved careful analysis and thoughtful deliberation.",
    chinese_question: "她 __________ 的解决问题的方法包括仔细的分析和深思熟虑的考虑。",
    answers: [
        { option: "A", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
        { option: "B", answer: "impulsive", chinese_answer: "冲动的", chinese_romanization: "chōngdòng de" },
        { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "D", answer: "refined", chinese_answer: "精细的", chinese_romanization: "jīngxì de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'refined' means elegant and cultured in appearance, manner, or taste." +
        "<br><br>" +
        "(A) 'hasty' means done or acting with excessive speed or urgency; hurried." +
        "<br><br>" +
        "(B) 'impulsive' means acting or done without forethought." +
        "<br><br>" +
        "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
    chinese_explanation: "(D) '精细的' 意味着外表、举止或品味优雅和有文化的。" +
        "<br><br>" +
        "(A) '匆忙的' 意味着以过快或紧急的速度完成或行动的；匆忙的。" +
        "<br><br>" +
        "(B) '冲动的' 意味着在没有深思熟虑的情况下行动或完成的。" +
        "<br><br>" +
        "(C) '粗心的' 意味着没有给予足够的关注或思考以避免伤害或错误的。"
    },
    {
        id: 2,
        question: "His __________ behavior of aggressively interrupting others and dismissing their ideas shocked everyone at the meeting.",
        chinese_question: "他咄咄逼人地打断别人并否定他们想法的 __________ 行为在会议上震惊了所有人。",
        answers: [
                { option: "A", answer: "monstrous", chinese_answer: "骇人听闻的", chinese_romanization: "hàirén tīngwén de" },
                { option: "B", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
                { option: "C", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
                { option: "D", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'monstrous' means extremely and dauntingly large; shockingly bad or unacceptable." + 
            "<br><br>" + 
            "(B) 'polite' means having or showing behavior that is respectful and considerate of other people." + 
            "<br><br>" + 
            "(C) 'respectful' means feeling or showing deference and respect." + 
            "<br><br>" + 
            "(D) 'considerate' means careful not to cause inconvenience or hurt to others.",
        chinese_explanation: "(A) '骇人听闻的' 意味着极其庞大和令人畏惧的；令人震惊的坏或不可接受的。" +
            "<br><br>" +
            "(B) '礼貌的' 意味着具有或表现出对他人的尊重和体贴的行为。" +
            "<br><br>" +
            "(C) '尊重的' 意味着感到或表现出敬意的。" +
            "<br><br>" +
            "(D) '体贴的' 意味着小心不引起不便或伤害他人的."
    },
    {
        id: 3,
        question: "Her __________ manner of speaking with formality and dressing in elegant attire made even casual dinners feel like grand occasions.",
        chinese_question: "她以正式的方式说话和穿着优雅服装的 __________ 举止使即使是随意的晚餐也感觉像是盛大的场合。",
        answers: [
            { option: "A", answer: "ceremonious", chinese_answer: "隆重的", chinese_romanization: "lóngzhòng de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "unassuming", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "laid-back", chinese_answer: "悠闲的", chinese_romanization: "yōuxián de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ceremonious' means relating or appropriate to grand and formal occasions." + 
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety; at ease." +
            "<br><br>" +
            "(C) 'unassuming' means not pretentious or arrogant; modest." +
            "<br><br>" +
            "(D) 'laid-back' means relaxed and easy-going.",
        chinese_explanation: "(A) '隆重的' 意味着与盛大和正式场合有关或适合的。" + 
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑的；自在的。" +
            "<br><br>" +
            "(C) '谦逊的' 意味着不自命不凡或傲慢的；谦虚的。" +
            "<br><br>" +
            "(D) '悠闲的' 意味着放松和随和的。"
    },
    {
        id: 4,
        question: "The __________ dancer captivated the audience with her energetic and lively performance.",
        chinese_question: "这位 __________ 的舞者以她充满活力和生气的表演吸引了观众。",
        answers: [
            { option: "A", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "vivacious", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "C", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "D", answer: "listless", chinese_answer: "无精打采的", chinese_romanization: "wújīng dǎcǎi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vivacious' means attractively lively and animated." +
            "<br><br>" +
            "(A) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(C) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(D) 'listless' means lacking energy or enthusiasm.",
        chinese_explanation: "(B) '活泼的' 意味着有吸引力的活泼和生动。" +
            "<br><br>" +
            "(A) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(C) '单调的' 意味着沉闷、乏味和重复；缺乏变化和兴趣。" +
            "<br><br>" +
            "(D) '无精打采的' 意味着缺乏能量或热情。"
    },
    {
        id: 5,
        question: "His __________ agreement to the proposal, with hesitation in his voice and uncertainty in his expression, showed his lack of commitment.",
        chinese_question: "他对提案的__________同意，语气中的犹豫和表情中的不确定，表明他缺乏承诺。",
        answers: [
            { option: "A", answer: "firm", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "B", answer: "tentative", chinese_answer: "试探性的", chinese_romanization: "shìtàn xìng de" },
            { option: "C", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tentative' means not certain or fixed; provisional." +
            "<br><br>" +
            "(A) 'firm' means having a solid, almost unyielding surface or structure." +
            "<br><br>" +
            "(C) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(D) 'confident' means feeling or showing confidence in oneself; self-assured.",
        chinese_explanation: "(B) '试探性的'一词意味着不确定或固定的；暂定的。" +
            "<br><br>" +
            "(A) '坚定的' 意味着具有坚固、几乎不屈不挠的表面或结构。" +
            "<br><br>" +
            "(C) '热情的' 意味着表现出强烈和热切的享受、兴趣或赞同。" +
            "<br><br>" +
            "(D) '自信的' 意味着对自己感到或表现出信心；自信的."
    },
    {
        id: 6,
        question: "In today's global economy, being __________ can provide a significant advantage in the job market, like how being fluent in both English and Spanish can help you to communicate effectively with clients and partners in Latin America.",
        chinese_question: "在当今的全球经济中，__________ 可以在就业市场上提供显著的优势，比如流利地说英语和西班牙语可以帮助你与拉丁美洲的客户和合作伙伴进行有效沟通。",
        answers: [
            { option: "A", answer: "monolingual", chinese_answer: "单语的", chinese_romanization: "dānyǔ de" },
            { option: "B", answer: "unilingual", chinese_answer: "单语言的", chinese_romanization: "dān yǔyán de" },
            { option: "C", answer: "bilingual", chinese_answer: "双语的", chinese_romanization: "shuāngyǔ de" },
            { option: "D", answer: "linguistically-challenged", chinese_answer: "语言能力受限的", chinese_romanization: "yǔyán nénglì shòuxiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bilingual' means able to speak two languages fluently." +
            "<br><br>" +
            "(A) 'monolingual' means speaking only one language." +
            "<br><br>" +
            "(B) 'unilingual' means of, relating to, or involving only one language." +
            "<br><br>" +
            "(D) 'linguistically-challenged' means having difficulty with language skills.",
        chinese_explanation: "(C) '双语的' 意味着能够流利地说两种语言。" +
            "<br><br>" +
            "(A) '单语的' 意味着只说一种语言。" +
            "<br><br>" +
            "(B) '单语言的' 意味着与仅涉及一种语言有关的。" +
            "<br><br>" +
            "(D) '语言能力受限的' 意味着在语言技能上有困难的。"
    },
    {
        id: 7,
    question: "Her __________ attitude at work, like challenging her supervisors' decisions and ignoring company policies, often led to conflicts with her supervisors.",
    chinese_question: "她在工作中的__________态度，比如挑战上司的决定和无视公司政策，经常导致与上司的冲突。",
    answers: [
        { option: "A", answer: "obedient", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
        { option: "B", answer: "compliant", chinese_answer: "服从的", chinese_romanization: "fúcóng de" },
        { option: "C", answer: "rebellious", chinese_answer: "叛逆的", chinese_romanization: "pànnì de" },
        { option: "D", answer: "submissive", chinese_answer: "顺服的", chinese_romanization: "shùnfú de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'rebellious' means showing a desire to resist authority, control, or convention. Figuratively, it can mean being defiant and uncooperative." +
        "<br><br>" +
        "(A) 'obedient' means complying or willing to comply with orders or requests; submissive to another's will." +
        "<br><br>" +
        "(B) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
        "<br><br>" +
        "(D) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive.",
    chinese_explanation: "(C) '叛逆的'一词意味着表现出抵抗权威、控制或惯例的愿望。比喻地，它可以表示挑衅和不合作的。" +
        "<br><br>" +
        "(A) '顺从的' 意味着遵守或愿意遵守命令或要求的；服从他人意愿的。" +
        "<br><br>" +
        "(B) '服从的' 意味着倾向于同意他人或遵守规则的，尤其是过度的；顺从的。" +
        "<br><br>" +
        "(D) '顺服的' 意味着准备遵从权威或他人意愿的；温顺地服从的或被动的。"
    },
    {
        id: 8,
        question: "After the exhausting hike, he lay __________ on the grass, staring up at the sky and relaxing his tired muscles.",
        chinese_question: "在筋疲力尽的徒步旅行后，他 __________ 地躺在草地上，仰望天空，放松他疲惫的肌肉。",
        answers: [
            { option: "A", answer: "erect", chinese_answer: "直立的", chinese_romanization: "zhílì de" },
            { option: "B", answer: "upright", chinese_answer: "垂直的", chinese_romanization: "chuízhí de" },
            { option: "C", answer: "standing", chinese_answer: "站立的", chinese_romanization: "zhànlì de" },
            { option: "D", answer: "recumbent", chinese_answer: "躺着的", chinese_romanization: "tǎngzhe de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'recumbent' means lying down." +
            "<br><br>" +
            "(A) 'erect' means rigidly upright or straight." +
            "<br><br>" +
            "(B) 'upright' means vertical; erect." +
            "<br><br>" +
            "(C) 'standing' means in an upright position on the feet.",
        chinese_explanation: "(D) '躺着的' 意味着躺着。" +
            "<br><br>" +
            "(A) '直立的' 意味着坚直的站立或挺直。" +
            "<br><br>" +
            "(B) '垂直的' 意味着竖直的；直立的。" +
            "<br><br>" +
            "(C) '站立的' 意味着脚上的直立姿势。"
    },
    {
        id: 9,
        question: "She was very __________ about her expectations, making sure everyone understood what was required.",
        chinese_question: "她对自己的期望非常 __________，确保每个人都理解所需的内容。",
        answers: [
            { option: "A", answer: "explicit", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
            { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
            { option: "C", answer: "reserved", chinese_answer: "保守的", chinese_romanization: "bǎoshǒu de" },
            { option: "D", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'explicit' means stated clearly and in detail, leaving no room for confusion or doubt." + 
            "<br><br>" +
            "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(C) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(D) 'understated' means presented or expressed in a subtle and effective way.",
        chinese_explanation: "(A) '明确的' 意味着清晰详细地陈述，没有留下任何混淆或疑问的余地。" + 
            "<br><br>" +
            "(B) '微妙的' 意味着如此精细或精确，以至于难以分析或描述的。" +
            "<br><br>" +
            "(C) '保守的' 意味着慢于表达情感或意见的。" +
            "<br><br>" +
            "(D) '低调的' 意味着以微妙和有效的方式呈现或表达的。"
    },
    {
        id: 10,
        question: "The __________ atmosphere at the holiday party was infectious, with everyone laughing, dancing, and enjoying themselves.",
        chinese_question: "节日派对上的 __________ 氛围是感染人的，大家都在笑、跳舞和享受自己。",
        answers: [
            { option: "A", answer: "jolly", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "gloomy", chinese_answer: "阴郁的", chinese_romanization: "yīnyù de" },
            { option: "C", answer: "solemn", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "D", answer: "tense", chinese_answer: "紧张的", chinese_romanization: "jǐnzhāng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jolly' means happy and cheerful." + 
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(C) 'solemn' means formal and dignified; serious." +
            "<br><br>" +
            "(D) 'tense' means unable to relax because of nervousness, anxiety, or stimulation.",
        chinese_explanation: "(A) '快乐的' 意味着幸福和愉快的。" + 
            "<br><br>" +
            "(B) '阴郁的' 意味着黑暗或光线不足的，特别是显得令人沮丧或恐怖的。" +
            "<br><br>" +
            "(C) '严肃的' 意味着正式和庄重的；严肃的。" +
            "<br><br>" +
            "(D) '紧张的' 意味着由于紧张、焦虑或刺激而无法放松的。"
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
