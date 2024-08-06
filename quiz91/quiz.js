// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ was a source of shame, as she couldn't resist the impulse to steal, even from friends.",
        chinese_question: "她的 __________ 是一种耻辱的来源，因为她无法抵抗偷窃的冲动，甚至从朋友那里偷东西。",
        answers: [
            { option: "A", answer: "kleptomania", chinese_answer: "盗窃癖", chinese_romanization: "dàoqiè pǐ" },
            { option: "B", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "C", answer: "forthrightness", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" },
            { option: "D", answer: "selflessness", chinese_answer: "无私", chinese_romanization: "wúsī" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'kleptomania' figuratively means a recurrent urge to steal, typically without regard for need or profit." +
            "<br><br>" +
            "(B) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(C) 'forthrightness' means the quality of being direct and outspoken." +
            "<br><br>" +
            "(D) 'selflessness' means the quality of caring more about the needs of others than one's own.",
        chinese_explanation: "(A) '盗窃癖' 在此语境下比喻反复出现的偷窃冲动，通常不考虑需求或利润。" +
            "<br><br>" +
            "(B) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(C) '坦率' 意味着直接和坦率的品质。" +
            "<br><br>" +
            "(D) '无私' 意味着更多地关心他人需求而不是自己需求的品质。"
    },
    {
        id: 2,
        question: "The professor at Oxford University was regarded as a __________, renowned for his contributions to quantum physics and having inspired generations of students.",
        chinese_question: "牛津大学的这位教授被视为__________，以其对量子物理的贡献和激励几代学生而闻名。",
        answers: [
            { option: "A", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "B", answer: "dilettante", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "C", answer: "amateur", chinese_answer: "业余选手", chinese_romanization: "yèyú xuǎnshǒu" },
            { option: "D", answer: "luminary", chinese_answer: "杰出人物", chinese_romanization: "jiéchū rénwù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'luminary' means a person who inspires or influences others, especially one prominent in a particular sphere." +
            "<br><br>" +
            "(A) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(B) 'dilettante' means a person who cultivates an area of interest, such as the arts, without real commitment or knowledge." +
            "<br><br>" +
            "(C) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid rather than a professional basis.",
        chinese_explanation: "(D) '杰出人物' 意味着激励或影响他人的人，特别是在某个领域中杰出的人物。" +
            "<br><br>" +
            "(A) '新手' 意味着对某个领域或情况陌生或缺乏经验的人。" +
            "<br><br>" +
            "(B) '业余爱好者' 意味着对某个兴趣领域（如艺术）没有真正投入或知识的人。" +
            "<br><br>" +
            "(C) '业余选手' 意味着以非职业身份从事某项追求（特别是体育）的人。"
    },
    {
        id: 3,
        question: "Years of __________ had built up between the rival companies, making collaboration impossible.",
        chinese_question: "多年 __________ 的积累使竞争对手公司之间的合作变得不可能。",
        answers: [
                { option: "A", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" },
                { option: "B", answer: "rancour", chinese_answer: "怨恨", chinese_romanization: "yuànhèn" },
                { option: "C", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
                { option: "D", answer: "friendship", chinese_answer: "友谊", chinese_romanization: "yǒuyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rancour' means a feeling of deep and bitter anger and ill-will." +
                "<br><br>" +
                "(A) 'cooperation' means the process of working together to the same end." +
                "<br><br>" +
                "(C) 'alliance' means a union or association formed for mutual benefit." +
                "<br><br>" +
                "(D) 'friendship' means the emotions or conduct of friends; the state of being friends.",
        chinese_explanation: "(B) '怨恨'一词意味着深刻而苦涩的愤怒和恶意。" +
                "<br><br>" +
                "(A) '合作' 意味着为了同一个目的而一起工作的过程。" +
                "<br><br>" +
                "(C) '联盟' 意味着为互利而形成的联盟或协会。" +
                "<br><br>" +
                "(D) '友谊' 意味着朋友的情感或行为；友谊的状态。"
    },
    {
        id: 4,
        question: "The sudden announcement threw the office into a __________, with everyone talking at once and trying to figure out what to do.",
        chinese_question: "突然的宣布使办公室陷入了 __________，每个人都在同时说话，试图弄清楚该怎么办。",
        answers: [
            { option: "A", answer: "maelstrom", chinese_answer: "漩涡", chinese_romanization: "xuánwō" },
            { option: "B", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
            { option: "C", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "D", answer: "stillness", chinese_answer: "静止", chinese_romanization: "jìngzhǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'maelstrom' figuratively means a situation or state of confused movement or violent turmoil." +
            "<br><br>" +
            "(B) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
            "<br><br>" +
            "(C) 'routine' means a sequence of actions regularly followed; a fixed program." +
            "<br><br>" +
            "(D) 'stillness' means the absence of movement or sound.",
        chinese_explanation: "(A) '漩涡' 在此语境下比喻一种混乱的运动或暴力动荡状态。" +
            "<br><br>" +
            "(B) '秩序' 意味着根据特定顺序、模式或方法的人或物的排列或布置。" +
            "<br><br>" +
            "(C) '常规' 意味着定期遵循的一系列行动；固定程序。" +
            "<br><br>" +
            "(D) '静止' 意味着没有运动或声音。"
    },
    {
        id: 5,
        question: "The editor praised the article for its __________, saying that it got straight to the point.",
        chinese_question: "编辑称赞这篇文章的 __________，说它直奔主题。",
        answers: [
                { option: "A", answer: "wordiness", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
                { option: "B", answer: "pithiness", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
                { option: "C", answer: "vagueness", chinese_answer: "含糊", chinese_romanization: "hánhú" },
                { option: "D", answer: "intricacy", chinese_answer: "复杂", chinese_romanization: "fùzá" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pithiness' means the quality of being concise and forcefully expressive." +
                "<br><br>" +
                "(A) 'wordiness' means the quality of using more words than needed." +
                "<br><br>" +
                "(C) 'vagueness' means the quality of being unclear or ill-defined." +
                "<br><br>" +
                "(D) 'intricacy' means the quality of being very complicated or detailed.",
        chinese_explanation: "(B) '简洁'一词意味着简明扼要和有力地表达的品质。" +
                "<br><br>" +
                "(A) '冗长' 意味着使用比需要的更多的词的品质。" +
                "<br><br>" +
                "(C) '含糊' 意味着不清楚或定义不明确的品质。" +
                "<br><br>" +
                "(D) '复杂' 意味着非常复杂或详细的品质。"
    },
    {
        id: 6,
        question: "After the announcement of the new product, there was a __________ of orders that overwhelmed the company's supply chain.",
        chinese_question: "新产品发布后，出现了 __________ 的订单，使公司的供应链不堪重负。",
        answers: [
                { option: "A", answer: "spate", chinese_answer: "大量", chinese_romanization: "dàliàng" },
                { option: "B", answer: "trickle", chinese_answer: "小股", chinese_romanization: "xiǎogǔ" },
                { option: "C", answer: "dearth", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
                { option: "D", answer: "scarcity", chinese_answer: "稀缺", chinese_romanization: "xīquē" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spate' means a large number of similar things or events appearing or occurring in quick succession." +
                "<br><br>" +
                "(B) 'trickle' means a small flow of liquid." +
                "<br><br>" +
                "(C) 'dearth' means a scarcity or lack of something." +
                "<br><br>" +
                "(D) 'scarcity' means the state of being scarce or in short supply; shortage.",
        chinese_explanation: "(A) '大量' 意味着大量相似的事物或事件迅速出现或发生。" +
                "<br><br>" +
                "(B) '小股' 意味着少量的液体流动。" +
                "<br><br>" +
                "(C) '缺乏' 意味着某物的稀缺或缺乏。" +
                "<br><br>" +
                "(D) '稀缺' 意味着稀少或短缺的状态。"
    },
    {
        id: 7,
        question: "The minor was charged with __________ after being caught stealing expensive electronics from a store.",
        chinese_question: "这名未成年人因偷窃商店的昂贵电子产品而被控__________。",
        answers: [
            { option: "A", answer: "benevolence", chinese_answer: "仁慈", chinese_romanization: "réncí" },
            { option: "B", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "C", answer: "philanthropy", chinese_answer: "慈善", chinese_romanization: "císhàn" },
            { option: "D", answer: "larceny", chinese_answer: "盗窃", chinese_romanization: "dàoqiè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'larceny' means theft of personal property." +
            "<br><br>" +
            "(A) 'benevolence' means the quality of being well-meaning; kindness." +
            "<br><br>" +
            "(B) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(C) 'philanthropy' means the desire to promote the welfare of others, expressed especially by the generous donation of money to good causes.",
        chinese_explanation: "(D) '盗窃' 意味着盗取个人财产。" +
            "<br><br>" +
            "(A) '仁慈' 意味着善意的品质；善良。" +
            "<br><br>" +
            "(B) '慷慨' 意味着善良和慷慨的品质。" +
            "<br><br>" +
            "(C) '慈善' 意味着特别是通过慷慨捐赠金钱用于慈善事业来表达的促进他人福利的愿望。"
    },
    {
        id: 8,
        question: "The dermatologist recommended an __________ lotion to alleviate the irritation and redness caused by eczema.",
        chinese_question: "皮肤科医生推荐了一种 __________ 乳液来缓解湿疹引起的刺激和红肿。",
        answers: [
                { option: "A", answer: "exfoliating", chinese_answer: "去角质", chinese_romanization: "qù jiǎozhì" },
                { option: "B", answer: "emollient", chinese_answer: "润肤剂", chinese_romanization: "rùnfū jì" },
                { option: "C", answer: "drying", chinese_answer: "干燥", chinese_romanization: "gānzào" },
                { option: "D", answer: "tightening", chinese_answer: "紧致", chinese_romanization: "jǐnzhì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emollient' means a substance that softens and moisturizes the skin." +
                "<br><br>" +
                "(A) 'exfoliating' means a substance used to remove dead skin cells from the surface of the skin." +
                "<br><br>" +
                "(C) 'drying' means causing or being in the process of removing moisture." +
                "<br><br>" +
                "(D) 'tightening' means making something more taut or compact.",
        chinese_explanation: "(B) '润肤剂'一词意味着一种软化和滋润皮肤的物质。" +
                "<br><br>" +
                "(A) '去角质' 意味着一种用于去除皮肤表面死皮细胞的物质。" +
                "<br><br>" +
                "(C) '干燥' 意味着去除水分的过程或状态。" +
                "<br><br>" +
                "(D) '紧致' 意味着使某物更紧或更紧密。"
    },
    {
        id: 9,
        question: "The teenager's act of vandalism brought him __________, making him notorious in his community for all the wrong reasons.",
        chinese_question: "这名青少年的破坏行为给他带来了__________，使他在社区中因各种不良原因而臭名昭著。",
        answers: [
            { option: "A", answer: "honor", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "B", answer: "esteem", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
            { option: "C", answer: "glory", chinese_answer: "光荣", chinese_romanization: "guāngróng" },
            { option: "D", answer: "infamy", chinese_answer: "恶名", chinese_romanization: "èmíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'infamy' means the state of being well known for some bad quality or deed." +
            "<br><br>" +
            "(A) 'honor' means high respect; esteem." +
            "<br><br>" +
            "(B) 'esteem' means respect and admiration, typically for a person." +
            "<br><br>" +
            "(C) 'glory' means high renown or honor won by notable achievements.",
        chinese_explanation: "(D) '恶名' 意味着因某种不良品质或行为而广为人知的状态。" +
            "<br><br>" +
            "(A) '荣誉' 意味着高度的尊重；尊敬。" +
            "<br><br>" +
            "(B) '尊重' 意味着对人的尊敬和钦佩。" +
            "<br><br>" +
            "(C) '光荣' 意味着通过显著的成就赢得的高度声誉或荣誉。"
    },
    {
        id: 10,
        question: "In the competitive job market, it's important to stand out from the __________.",
        chinese_question: "在竞争激烈的就业市场中，重要的是要从 __________ 中脱颖而出。",
        answers: [
            { option: "A", answer: "pack", chinese_answer: "群", chinese_romanization: "qún" },
            { option: "B", answer: "solitude", chinese_answer: "孤独", chinese_romanization: "gūdú" },
            { option: "C", answer: "crowd", chinese_answer: "人群", chinese_romanization: "rénqún" },
            { option: "D", answer: "duo", chinese_answer: "二人组", chinese_romanization: "èrrén zǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pack' means a group of people or animals moving together, often used figuratively to describe a competitive environment." +
                "<br><br>" +
                "(B) 'solitude' means the state of being alone." +
                "<br><br>" +
                "(C) 'crowd' means a large number of people gathered together." +
                "<br><br>" +
                "(D) 'duo' means a pair of people or things.",
        chinese_explanation: "(A) '群' 意味着一群一起移动的人或动物，通常比喻用来描述竞争环境。" +
                "<br><br>" +
                "(B) '孤独' 意味着独处的状态。" +
                "<br><br>" +
                "(C) '人群' 意味着聚集在一起的大量人。" +
                "<br><br>" +
                "(D) '二人组' 意味着一对人或物。"
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
