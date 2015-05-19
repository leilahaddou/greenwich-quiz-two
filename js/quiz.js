var correctAnswers = 0;

$(".quiz .btn").on("click", function (event) {
    var button = event.target
    var question = button.parentElement.parentElement.parentElement.parentElement
    if (!$(question).hasClass("answered")) {
        if ($(button).hasClass("correct")) {
            $("#" + question.id + ' .modal-footer').prepend('Correct!')
            correctAnswers++
        }
        else {
            $("#" + question.id + ' .modal-footer').prepend('Incorrect!')
        }
        $("#" + question.id + " .answer").toggle()
        $(question).toggleClass("answered")

        var answered = $(".quiz.answered").size()
        if (answered == 13) {
            $(".endmessage").css("display", "block")
            $("#total").text(correctAnswers + "/" + answered)
            var link = document.createElement('a');
                link.setAttribute('href', 'https://twitter.com/share');
                link.setAttribute('class', 'twitter-share-button');
                link.setAttribute('style', 'margin-top:5px;');
                link.setAttribute("data-text" , "I just got " + correctAnswers + "/" + answered + " on this quiz about Greenwich place names. Give it a go here: http://wp.me/p60KF6-79");
                link.setAttribute("data-size" ,"large") ;
                $(".twitter").append(link)
                twttr.widgets.load();  //very important

        }
            if (correctAnswers <= 4) {
                $("#message").text("Good effort but you may want to do a bit more swotting on the area.")
            }
            else if (correctAnswers >= 5 && correctAnswers <= 10) {
                $("#message").text("Great job! You certainly know a lot about the area!")
            }
            else {
                $("#message").text("Wow! Is there anything you don't know about the area? Fantastic knowledge!")
            }
    }   
});

/*add a message for each score value
stop someone submitting unless answered all questions
*/
