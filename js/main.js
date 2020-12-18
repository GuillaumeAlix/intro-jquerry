
$(document).ready(function(){

        var $list, $newItemForm;
        $list = $('ul');
        $newItemForm = $('#newItemForm');

        $newItemForm.on('submit', function(e) {
            e.preventDefault();
            var text = $('input:text').val();
            $list.append('<li>' + text + '</li>');
            $('input:text').val('');

        });

        $list.on('click', 'li#premier~li', function() {
            var $this = $(this);
            $this.remove();
        });

    $("#newItemForm").submit(function (e) {

        //stop submitting the form to see the disabled button effect
        e.preventDefault();

        //disable the submit button
        $("#newItemButton").attr("disabled", true);

        //disable a normal button
        $("#newItemButton").attr("disabled", true);

        return true;

    });


})