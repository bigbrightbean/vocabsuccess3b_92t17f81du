// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The stock prices hit their __________ before starting to decline.",
        chinese_question: "股票价格在开始下降之前达到了 __________。",
        answers: [
            { option: "A", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "B", answer: "nadir", chinese_answer: "最低点", chinese_romanization: "zuìdī diǎn" },
            { option: "C", answer: "plateau", chinese_answer: "平稳期", chinese_romanization: "píngwěn qī" },
            { option: "D", answer: "average", chinese_answer: "平均", chinese_romanization: "píngjūn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'peak' means the highest point." +
                "<br><br>" +
                "(B) 'nadir' means the lowest point." +
                "<br><br>" +
                "(C) 'plateau' means a state of little or no change following a period of activity or progress." +
                "<br><br>" +
                "(D) 'average' means a number expressing the central or typical value in a set of data.",
        chinese_explanation: "(A) '顶峰' 意味着最高点。" +
                "<br><br>" +
                "(B) '最低点' 意味着最低点。" +
                "<br><br>" +
                "(C) '平稳期' 意味着在一段时间的活动或进展之后的几乎没有变化的状态。" +
                "<br><br>" +
                "(D) '平均' 意味着表示一组数据中的中心值或典型值的数字。"
    },
    {
        id: 2,
    question: "As the ceremonial gatekeeper, his job was considered a __________, requiring him to do little more than greet guests while receiving a handsome salary.",
    chinese_question: "作为仪式门卫，他的工作被认为是一个 __________，除了迎接客人外几乎不需要做任何事情，同时还领取丰厚的薪水。",
    answers: [
        { option: "A", answer: "burden", chinese_answer: "负担", chinese_romanization: "fùdān" },
        { option: "B", answer: "ordeal", chinese_answer: "磨难", chinese_romanization: "mónàn" },
        { option: "C", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
        { option: "D", answer: "sinecure", chinese_answer: "闲职", chinese_romanization: "xiánzhí" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'sinecure' means a position requiring little or no work but giving the holder status or financial benefit." +
        "<br><br>" +
        "(A) 'burden' means a load, typically a heavy one." +
        "<br><br>" +
        "(B) 'ordeal' means a painful or horrific experience, especially a protracted one." +
        "<br><br>" +
        "(C) 'challenge' means a task or situation that tests someone's abilities.",
    chinese_explanation: "(D) '闲职' 意味着一个几乎不需要工作但给持有者地位或经济利益的职位。" +
        "<br><br>" +
        "(A) '负担' 意味着负担，通常是沉重的。" +
        "<br><br>" +
        "(B) '磨难' 意味着痛苦或可怕的经历，尤其是漫长的经历。" +
        "<br><br>" +
        "(C) '挑战' 意味着考验某人能力的任务或情况。"
    },
    {
        id: 3,
        question: "The film's __________ was evident in its heavy-handed attempts to evoke tears, which felt manipulative rather than genuine.",
        chinese_question: "这部电影的 __________ 在于它笨拙地试图引起泪水，感觉是操纵性的而不是真实的。",
        answers: [
                { option: "A", answer: "subtlety", chinese_answer: "微妙", chinese_romanization: "wéimiào" },
                { option: "B", answer: "mawkishness", chinese_answer: "矫情", chinese_romanization: "jiǎoqíng" },
                { option: "C", answer: "realism", chinese_answer: "现实主义", chinese_romanization: "xiànshí zhǔyì" },
                { option: "D", answer: "complexity", chinese_answer: "复杂性", chinese_romanization: "fùzá xìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mawkishness' means exaggerated or false sentimentality." +
                "<br><br>" +
                "(A) 'subtlety' means the quality or state of being subtle." +
                "<br><br>" +
                "(C) 'realism' means the quality or fact of representing a person or thing in a way that is accurate and true to life." +
                "<br><br>" +
                "(D) 'complexity' means the state or quality of being intricate or complicated.",
        chinese_explanation: "(B) '矫情'一词意味着夸张或虚假的感伤。" +
                "<br><br>" +
                "(A) '微妙' 意味着微妙的质量或状态。" +
                "<br><br>" +
                "(C) '现实主义' 意味着以准确和真实的方式表现人物或事物的品质或事实。" +
                "<br><br>" +
                "(D) '复杂性' 意味着错综复杂或复杂的状态或品质。"
    },
    {
        id: 4,
        question: "The pub erupted into a __________ after a heated argument between two patrons escalated.",
        chinese_question: "酒吧在两位顾客的激烈争论升级后爆发了一场 __________。",
        answers: [
                { option: "A", answer: "concert", chinese_answer: "音乐会", chinese_romanization: "yīnyuè huì" },
                { option: "B", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "melee", chinese_answer: "混战", chinese_romanization: "hùnzhàn" },
                { option: "D", answer: "festival", chinese_answer: "节日", chinese_romanization: "jiérì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'melee' means a confused fight, skirmish, or scuffle." +
                "<br><br>" +
                "(A) 'concert' means a musical performance given in public, typically by several performers or of several compositions." +
                "<br><br>" +
                "(B) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
                "<br><br>" +
                "(D) 'festival' means a day or period of celebration, typically for religious reasons.",
        chinese_explanation: "(C) '混战'一词意味着混乱的打斗、小冲突或争吵。" +
                "<br><br>" +
                "(A) '音乐会' 意味着公开举行的音乐表演，通常由几位表演者或几首乐曲组成。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过从事愉快的、通常是社交活动来标志某个重要事件或场合的行动。" +
                "<br><br>" +
                "(D) '节日' 意味着通常出于宗教原因的庆祝日或庆祝期。"
    },
    {
        id: 5,
        question: "She maintained a __________ of cheerfulness, even though she was deeply upset inside.",
        chinese_question: "尽管内心深感不安，她依然保持着一副愉快的 __________。",
        answers: [
                { option: "A", answer: "appearance", chinese_answer: "外貌", chinese_romanization: "wàimào" },
                { option: "B", answer: "semblance", chinese_answer: "表象", chinese_romanization: "biǎoxiàng" },
                { option: "C", answer: "show", chinese_answer: "表现", chinese_romanization: "biǎoxiàn" },
                { option: "D", answer: "mask", chinese_answer: "面具", chinese_romanization: "miànjù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'semblance' means the outward appearance or apparent form of something, especially when the reality is different." +
                "<br><br>" +
                "(A) 'appearance' means the way that someone or something looks." +
                "<br><br>" +
                "(C) 'show' means a spectacle or display." +
                "<br><br>" +
                "(D) 'mask' means a covering for all or part of the face.",
        chinese_explanation: "(B) '表象'一词意味着某物的外在外观或表面形式，尤其是当现实不同的时候。" +
                "<br><br>" +
                "(A) '外貌' 意味着某人或某物的外观。" +
                "<br><br>" +
                "(C) '表现' 意味着一个景象或展示。" +
                "<br><br>" +
                "(D) '面具' 意味着覆盖全部或部分面部的东西。"
    },
    {
        id: 6,
            question: "The oppressive heat brought a sense of __________ over the city, slowing everything to a crawl.",
            chinese_question: "压抑的高温使整个城市弥漫着一股 __________ ，一切都慢了下来。",
            answers: [
                { option: "A", answer: "languor", chinese_answer: "倦怠", chinese_romanization: "juàndài" },
                { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
                { option: "C", answer: "alertness", chinese_answer: "警觉", chinese_romanization: "jǐngjué" },
                { option: "D", answer: "energy", chinese_answer: "能量", chinese_romanization: "néngliàng" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'languor' means a state of tiredness or inertia, used figuratively here." +
                        "<br><br>" +
                        "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
                        "<br><br>" +
                        "(C) 'alertness' means the quality of being quick to notice things." +
                        "<br><br>" +
                        "(D) 'energy' means the strength and vitality required for sustained physical or mental activity.",
            chinese_explanation: "(A) '倦怠' 意味着疲倦或无力的状态，这里是比喻用法。" +
                        "<br><br>" +
                        "(B) '兴奋' 意味着极大的热情和渴望。" +
                        "<br><br>" +
                        "(C) '警觉' 意味着迅速注意事物的品质。" +
                        "<br><br>" +
                        "(D) '能量' 意味着持续进行体力或脑力活动所需的力量和活力。"
    },
    {
        id: 7,
        question: "The __________ was often criticized for his obsession with aesthetics over practicality.",
        chinese_question: "这位 __________ 常常因为对美学的痴迷而忽视实用性而受到批评。",
        answers: [
                { option: "A", answer: "aesthete", chinese_answer: "审美家", chinese_romanization: "shěnměi jiā" },
                { option: "B", answer: "philistine", chinese_answer: "俗人", chinese_romanization: "súrén" },
                { option: "C", answer: "realist", chinese_answer: "现实主义者", chinese_romanization: "xiànshí zhǔyì zhě" },
                { option: "D", answer: "pragmatist", chinese_answer: "实用主义者", chinese_romanization: "shíyòng zhǔyì zhě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'aesthete' means a person who has or affects to have a special appreciation of art and beauty." +
                "<br><br>" +
                "(B) 'philistine' means a person who is hostile or indifferent to culture and the arts." +
                "<br><br>" +
                "(C) 'realist' means a person who accepts a situation as it is and is prepared to deal with it accordingly." +
                "<br><br>" +
                "(D) 'pragmatist' means a person who is guided more by practical considerations than by ideals.",
        chinese_explanation: "(A) '审美家' 意味着对艺术和美有特别欣赏或假装有特别欣赏的人。" +
                "<br><br>" +
                "(B) '俗人' 意味着对文化和艺术持敌对或漠视态度的人。" +
                "<br><br>" +
                "(C) '现实主义者' 意味着接受现实并准备相应处理的人。" +
                "<br><br>" +
                "(D) '实用主义者' 意味着更多地以实际考虑为指导的人，而不是理想。"
    },
    {
        id: 8,
        question: "The book is filled with __________, each offering a concise nugget of wisdom or insight about life.",
        chinese_question: "这本书充满了 __________，每一个都提供了关于生活的简洁智慧或见解。",
        answers: [
                { option: "A", answer: "novels", chinese_answer: "小说", chinese_romanization: "xiǎoshuō" },
                { option: "B", answer: "poems", chinese_answer: "诗", chinese_romanization: "shī" },
                { option: "C", answer: "aphorisms", chinese_answer: "格言", chinese_romanization: "géyán" },
                { option: "D", answer: "essays", chinese_answer: "随笔", chinese_romanization: "suíbǐ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'aphorisms' means concise statements of a principle or truth." +
                "<br><br>" +
                "(A) 'novels' means long narratives, typically in prose, that describe fictional characters and events." +
                "<br><br>" +
                "(B) 'poems' means pieces of writing in which the expression of feelings and ideas is given intensity by particular attention to diction, rhythm, and imagery." +
                "<br><br>" +
                "(D) 'essays' means short pieces of writing on a particular subject.",
        chinese_explanation: "(C) '格言'一词意味着对原则或真理的简洁陈述。" +
                "<br><br>" +
                "(A) '小说' 意味着长篇叙述，通常是散文，描述虚构的人物和事件。" +
                "<br><br>" +
                "(B) '诗' 意味着在表达感情和思想时，通过特别注意措辞、节奏和意象而赋予强度的写作。" +
                "<br><br>" +
                "(D) '随笔' 意味着关于特定主题的短篇文章。"
    },
    {
        id: 9,
        question: "The politician's __________ was evident in his refusal to listen to advisors, believing he knew better than everyone else.",
        chinese_question: "这位政治家的 __________ 体现在他拒绝听取顾问意见，认为自己比其他人都知道得更好。",
        answers: [
                { option: "A", answer: "modesty", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
                { option: "B", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
                { option: "C", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
                { option: "D", answer: "hubris", chinese_answer: "傲慢", chinese_romanization: "àomàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'hubris' means excessive pride or self-confidence." +
                "<br><br>" +
                "(A) 'modesty' means the quality or state of being unassuming or moderate in the estimation of one's abilities." +
                "<br><br>" +
                "(B) 'humility' means a modest or low view of one's own importance; humbleness." +
                "<br><br>" +
                "(C) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements.",
        chinese_explanation: "(D) '傲慢'一词意味着过度的骄傲或自信。" +
                "<br><br>" +
                "(A) '谦虚' 意味着对自己能力的估计不过高或适中的品质或状态。" +
                "<br><br>" +
                "(B) '谦逊' 意味着对自己重要性的谦虚或低调看法。" +
                "<br><br>" +
                "(C) '尊重' 意味着因某人的能力、品质或成就而产生的深深的钦佩之情。"
    },
    {
        id: 10,
        question: "Her memoir is filled with __________ of her travels, each painting a vivid picture of the places she visited and the people she met.",
        chinese_question: "她的回忆录充满了旅行的 __________，每一个都生动地描绘了她访问过的地方和遇到的人。",
        answers: [
                { option: "A", answer: "instructions", chinese_answer: "说明", chinese_romanization: "shuōmíng" },
                { option: "B", answer: "vignettes", chinese_answer: "小插曲", chinese_romanization: "xiǎo chāqǔ" },
                { option: "C", answer: "criticisms", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "D", answer: "lessons", chinese_answer: "教训", chinese_romanization: "jiàoxun" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vignettes' means brief evocative descriptions, accounts, or episodes." +
                "<br><br>" +
                "(A) 'instructions' means detailed information telling how something should be done, operated, or assembled." +
                "<br><br>" +
                "(C) 'criticisms' means the expression of disapproval of someone or something based on perceived faults or mistakes." +
                "<br><br>" +
                "(D) 'lessons' means an amount of teaching given at one time; a period of learning or teaching.",
        chinese_explanation: "(B) '小插曲'一词意味着简短的引人入胜的描述、叙述或片段。" +
                "<br><br>" +
                "(A) '说明' 意味着详细的信息，说明如何做、操作或组装某物。" +
                "<br><br>" +
                "(C) '批评' 意味着根据感知到的错误或缺点对某人或某事表示不赞成。" +
                "<br><br>" +
                "(D) '教训' 意味着一次教学的量；学习或教学的时期。"
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
