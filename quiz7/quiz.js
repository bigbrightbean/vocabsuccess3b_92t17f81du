// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ views on morality often clashed with the more liberal attitudes of her friends.",
    chinese_question: "她对道德的__________观点经常与她朋友更自由的态度发生冲突。",
    answers: [
        { option: "A", answer: "liberal", chinese_answer: "自由的", chinese_romanization: "zìyóu de" },
        { option: "B", answer: "permissive", chinese_answer: "放任的", chinese_romanization: "fàngrèn de" },
        { option: "C", answer: "puritanical", chinese_answer: "清教徒式的", chinese_romanization: "qīngjiàotú shì de" },
        { option: "D", answer: "lenient", chinese_answer: "宽大的", chinese_romanization: "kuāndà de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'puritanical' means practicing or affecting strict religious or moral behavior." +
        "<br><br>" +
        "(A) 'liberal' means open to new behavior or opinions and willing to discard traditional values." +
        "<br><br>" +
        "(B) 'permissive' means allowing or characterized by great or excessive freedom of behavior." +
        "<br><br>" +
        "(D) 'lenient' means more merciful or tolerant than expected.",
    chinese_explanation: "(C) '清教徒式的'一词意味着实践或影响严格的宗教或道德行为的。" +
        "<br><br>" +
        "(A) '自由的' 意味着愿意接受新的行为或观点并愿意抛弃传统价值观的。" +
        "<br><br>" +
        "(B) '放任的' 意味着允许或具有很大或过度行为自由的。" +
        "<br><br>" +
        "(D) '宽大的' 意味着比预期更仁慈或宽容的。"
    },
    {
        id: 2,
        question: "Her __________ support for one candidate made her opinions on the election questionable.",
        chinese_question: "她对一个候选人的__________支持使她对选举的意见值得怀疑。",
        answers: [
            { option: "A", answer: "impartial", chinese_answer: "公正的", chinese_romanization: "gōngzhèng de" },
            { option: "B", answer: "objective", chinese_answer: "客观的", chinese_romanization: "kèguān de" },
            { option: "C", answer: "unbiased", chinese_answer: "无偏见的", chinese_romanization: "wú piānjiàn de" },
            { option: "D", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'partial' means favoring one side in a dispute above the other; biased. Figuratively, it can mean being unfairly biased in favor of one person or thing." + 
            "<br><br>" + 
            "(A) 'impartial' means treating all rivals or disputants equally; fair and just." + 
            "<br><br>" + 
            "(B) 'objective' means not influenced by personal feelings or opinions in considering and representing facts." + 
            "<br><br>" + 
            "(C) 'unbiased' means showing no prejudice for or against something; impartial.",
        chinese_explanation: "(D) '偏袒的'一词意味着在争端中偏袒一方；有偏见的。比喻地，它可以表示不公平地偏袒某人或某事。" +
            "<br><br>" +
            "(A) '公正的' 意味着平等对待所有对手或争论者的；公平的和公正的。" +
            "<br><br>" +
            "(B) '客观的' 意味着在考虑和表达事实时不受个人感情或意见的影响的。" +
            "<br><br>" +
            "(C) '无偏见的' 意味着对某事没有偏见的；公正的."
    },
    {
        id: 3,
        question: "The news article was criticized for being overly __________, clearly favoring one political party over the other.",
        chinese_question: "这篇新闻文章因过于 __________ 而受到批评，明显偏袒某一政党。",
        answers: [
            { option: "A", answer: "partisan", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
            { option: "B", answer: "objective", chinese_answer: "客观", chinese_romanization: "kèguān" },
            { option: "C", answer: "unbiased", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
            { option: "D", answer: "neutral", chinese_answer: "中立", chinese_romanization: "zhōnglì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'partisan' means strongly supporting a particular political party, plan, or leader, usually without considering the other choices carefully." +
            "<br><br>" +
            "(B) 'objective' means not influenced by personal feelings or opinions in considering and representing facts." +
            "<br><br>" +
            "(C) 'unbiased' means showing no prejudice for or against something; impartial." +
            "<br><br>" +
            "(D) 'neutral' means not supporting or helping either side in a conflict or disagreement.",
        chinese_explanation: "(A) '偏袒' 意味着强烈支持某个政党、计划或领导者，通常不仔细考虑其他选择。" +
            "<br><br>" +
            "(B) '客观' 意味着在考虑和陈述事实时不受个人感情或意见影响。" +
            "<br><br>" +
            "(C) '公正' 意味着对某事物没有偏见；公平。" +
            "<br><br>" +
            "(D) '中立' 意味着在冲突或分歧中不支持或帮助任何一方。"
    },
    {
        id: 4,
        question: "His comments during the meeting were __________, providing valuable insights that advanced the discussion.",
        chinese_question: "他在会议上的评论是 __________ 的，提供了有价值的见解，推动了讨论的进展。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "B", answer: "off-topic", chinese_answer: "离题的", chinese_romanization: "lítí de" },
            { option: "C", answer: "pertinent", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
            { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pertinent' means relevant or applicable to a particular matter; apposite." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(B) 'off-topic' means not related to the subject under discussion." +
            "<br><br>" +
            "(D) 'negligible' means so small or unimportant as to be not worth considering; insignificant.",
        chinese_explanation: "(C) '相关的' 意味着与特定事项有关或适用的；贴切的。" +
            "<br><br>" +
            "(A) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(B) '离题的' 意味着与讨论的主题无关的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着如此小或不重要，不值得考虑的。"
    },
    {
        id: 5,
        question: "The music was __________ of a bygone era, evoking feelings of nostalgia.",
        chinese_question: "这音乐让人__________起过去的时代，引发怀旧之情。",
        answers: [
            { option: "A", answer: "forgetful", chinese_answer: "健忘的", chinese_romanization: "jiànwàng de" },
            { option: "B", answer: "reminiscent", chinese_answer: "怀旧的", chinese_romanization: "huáijiù de" },
            { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "oblivious", chinese_answer: "无意识的", chinese_romanization: "wú yìshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reminiscent' means tending to remind one of something. Figuratively, it can mean evoking memories or feelings of the past." +
            "<br><br>" +
            "(A) 'forgetful' means apt or likely to forget." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
        chinese_explanation: "(B) '怀旧的' 一词意味着让人想起某事。比喻地，它可以表示唤起过去的记忆或感情。" +
            "<br><br>" +
            "(A) '健忘的' 意味着容易或可能忘记的。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '无意识的' 意味着没有意识到或不关心周围发生的事情。"
    },
    {
        id: 6,
        question: "Her influence on the industry was __________, shaping trends and setting standards.",
        chinese_question: "她对行业的影响是__________的，塑造了趋势并设定了标准。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "B", answer: "miniature", chinese_answer: "微型的", chinese_romanization: "wēixíng de" },
            { option: "C", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "D", answer: "gigantic", chinese_answer: "巨大的", chinese_romanization: "jùdà de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gigantic' means of very great size or extent; huge or enormous. Figuratively, it can mean having a very large impact or significance." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(B) 'miniature' means very small of its kind." +
            "<br><br>" +
            "(C) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(D) '巨大的' 一词意味着非常大的或巨大的。比喻地，它可以表示具有非常大的影响或意义。" +
            "<br><br>" +
            "(A) '微小的' 意味着非常小的。" +
            "<br><br>" +
            "(B) '微型的' 意味着同类中非常小的。" +
            "<br><br>" +
            "(C) '小的' 意味着尺寸小于正常或通常的。"
    },
    {
        id: 7,
        question: "Her __________ sense of humor often went unnoticed, but those who caught on found it delightful.",
        chinese_question: "她的幽默感 __________，常常不被注意，但那些察觉到的人发现它很有趣。",
        answers: [
            { option: "A", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
            { option: "B", answer: "blatant", chinese_answer: "公然", chinese_romanization: "gōngrán" },
            { option: "C", answer: "understated", chinese_answer: "低调", chinese_romanization: "dīdiào" },
            { option: "D", answer: "exaggerated", chinese_answer: "夸张", chinese_romanization: "kuāzhāng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'understated' means presented or expressed in a subtle and effective way." +
            "<br><br>" +
            "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
            "<br><br>" +
            "(B) 'blatant' means (of bad behavior) done openly and unashamedly." +
            "<br><br>" +
            "(D) 'exaggerated' means regarded or represented as larger, better, or worse than in reality.",
        chinese_explanation: "(C) '低调' 意味着以微妙而有效的方式呈现或表达。" +
            "<br><br>" +
            "(A) '明显' 意味着容易察觉或理解；清楚的，自明的或明显的。" +
            "<br><br>" +
            "(B) '公然' 意味着（坏行为）公开而无耻地进行。" +
            "<br><br>" +
            "(D) '夸张' 意味着被认为或表现得比实际情况更大、更好或更差。"
    },
    {
        id: 8,
        question: "Corruption has been a __________ issue in the country's politics, difficult to eradicate completely.",
        chinese_question: "腐败在该国的政治中一直是一个 __________ 的问题，很难完全根除。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "B", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "C", answer: "perennial", chinese_answer: "长期存在的", chinese_romanization: "chángqī cúnzài de" },
            { option: "D", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perennial' means lasting or existing for a long or apparently infinite time; enduring or continually recurring." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(B) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(D) 'occasional' means occurring, appearing, or done infrequently and irregularly.",
        chinese_explanation: "(C) '长期存在的' 意味着持续或存在很长时间或看似无限时间的；持久的或不断重复的。" +
            "<br><br>" +
            "(A) '暂时的' 意味着仅持续有限时间的；不是永久的。" +
            "<br><br>" +
            "(B) '短暂的' 意味着持续时间非常短的。" +
            "<br><br>" +
            "(D) '偶尔的' 意味着不经常和不定期发生、出现或完成的."
    },
    {
        id: 9,
        question: "The __________ heroes of the community are those who volunteer their time to help others without expecting any recognition.",
        chinese_question: "社区里那些无私奉献时间帮助他人而不期望任何认可的就是 __________ 的英雄。",
        answers: [
            { option: "A", answer: "famous", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "B", answer: "unsung", chinese_answer: "被埋没的", chinese_romanization: "bèi máimò de" },
            { option: "C", answer: "notable", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "well-known", chinese_answer: "众所周知的", chinese_romanization: "zhòngsuǒzhōuzhī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unsung' means not celebrated or praised." +
            "<br><br>" +
            "(A) 'famous' means known about by many people." +
            "<br><br>" +
            "(C) 'notable' means worthy of attention or notice; remarkable." +
            "<br><br>" +
            "(D) 'well-known' means known widely or thoroughly.",
        chinese_explanation: "(B) '被埋没的' 意味着没有被庆祝或赞扬的。" +
            "<br><br>" +
            "(A) '著名的' 意味着被许多人所知道的。" +
            "<br><br>" +
            "(C) '显著的' 意味着值得注意或值得关注的；显著的。" +
            "<br><br>" +
            "(D) '众所周知的' 意味着广泛或彻底地被知道的。"
    },
    {
        id: 10,
    question: "Her __________ tone during the argument made it difficult for others to listen to her point of view without feeling attacked.",
    chinese_question: "她在争论中的 __________ 语气让别人难以听取她的观点，而不感到受到攻击。",
    answers: [
        { option: "A", answer: "strident", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
        { option: "B", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "C", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
        { option: "D", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'strident' means loud and harsh; grating." +
        "<br><br>" +
        "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
        "<br><br>" +
        "(C) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
        "<br><br>" +
        "(D) 'reserved' means slow to reveal emotion or opinions.",
    chinese_explanation: "(A) '刺耳的' 意味着大声且刺耳的；刺耳的。" +
        "<br><br>" +
        "(B) '温和的' 意味着有或表现出温和、善良或温柔的性格或特点。" +
        "<br><br>" +
        "(C) '平静的' 意味着不表现或感觉紧张、愤怒或其他强烈情绪的。" +
        "<br><br>" +
        "(D) '矜持的' 意味着慢于表达情感或意见的。"
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
